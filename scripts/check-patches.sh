#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
MODE="${1:-fast}"
UPSTREAM_REMOTE="${UPSTREAM_REMOTE:-upstream}"
UPSTREAM_BRANCH="${UPSTREAM_BRANCH:-main}"
UPSTREAM_REF="$UPSTREAM_REMOTE/$UPSTREAM_BRANCH"

if ! git remote get-url "$UPSTREAM_REMOTE" >/dev/null 2>&1; then
  git remote add "$UPSTREAM_REMOTE" https://github.com/lobehub/lobe-chat.git
fi

echo "==== Fetching upstream ===="
git fetch "$UPSTREAM_REMOTE" "$UPSTREAM_BRANCH" --tags --prune

echo "==== Creating clean worktree ===="
WORKTREE="/tmp/lobe-chat-patch-check-$$"
git worktree add "$WORKTREE" "$UPSTREAM_REF" --detach
trap 'git worktree remove --force "$WORKTREE" 2>/dev/null || true' EXIT

cd "$WORKTREE"

echo "==== Applying patches ===="
PATCH_DIR="$SCRIPT_DIR/../patches/cur" "$SCRIPT_DIR/apply-patches.sh"

if [ "$MODE" = "full" ]; then
  if command -v pnpm >/dev/null 2>&1; then
    echo "==== Installing dependencies ===="
    pnpm install --frozen-lockfile
    echo "==== Running lint/type checks ===="
    pnpm run lint
  else
    echo "ERROR: pnpm is required for full checks" >&2
    exit 1
  fi
else
  echo "==== Fast mode: patch application only ===="
fi

echo ""
echo "All patch checks passed (mode: $MODE)."
