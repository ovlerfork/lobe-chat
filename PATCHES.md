# Lobe Chat patchset

This repository is maintained as a patch-based fork of Lobe Chat.

Upstream is treated as read-only. Local changes are stored as replayable patch files in `patches/cur` and applied with `git am --3way`.

## Branches

| Branch | Purpose | Writer |
| --- | --- | --- |
| `patchset` | Patch files, scripts, workflows, and docs. This is the default maintenance branch. | Humans/agents |
| `main` | Tracks upstream `main`. | CI/maintainers |
| `patched` | Generated branch: upstream plus patches applied. | CI/maintainers |

## Current patches

- `0001-feat-filter-markdown-code-blocks-from-TTS-input.patch` — filter fenced code blocks and heading markers before text-to-speech synthesis.
- `0002-feat-disable-character-by-character-SSE-smoothing.patch` — flush streamed text/reasoning chunks without character-by-character smoothing.
- `0003-feat-use-DeepSeek-beta-API-endpoint-by-default.patch` — use `https://api.deepseek.com/beta` as the default DeepSeek OpenAI-compatible endpoint.
- `0004-feat-use-generic-artifact-and-thinking-tags.patch` — replace Lobe-specific artifact/thinking tag names with generic `artifact` and `thinking` tags.

## Apply locally

```bash
git fetch upstream main
git worktree add /tmp/lobe-chat-source upstream/main --detach
cd /tmp/lobe-chat-source
PATCH_DIR=/path/to/lobe-chat/patches/cur /path/to/lobe-chat/scripts/apply-patches.sh
```

## Refresh patches

From a branch containing upstream plus local patch commits:

```bash
UPSTREAM_REF=upstream/main scripts/refresh-patches.sh
```

## Verify patch mechanics

```bash
scripts/check-patches.sh fast
```

Full dependency installation, lint, typecheck, tests, packaging, and release are delegated to GitHub Actions/manual runs because this monorepo is large.
