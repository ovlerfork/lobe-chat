export const PLUGIN_SCHEMA_SEPARATOR = '____';
export const PLUGIN_SCHEMA_API_MD5_PREFIX = 'MD5HASH_';

export const ARTIFACT_TAG = 'artifact';
export const ARTIFACT_THINKING_TAG = 'thinking';
export const MENTION_TAG = 'mention';
export const THINKING_TAG = 'think';
export const LOCAL_FILE_TAG = 'localFile';
export const SKILL_TAG = 'skill';
export const TASK_TAG = 'task';
export const TOOL_TAG = 'tool';
export const USER_FEEDBACK_TAG = 'user_feedback';
// https://regex101.com/r/TwzTkf/2
export const ARTIFACT_TAG_REGEX = /<artifact\b[^>]*>(?<content>[\S\s]*?)(?:<\/artifact>|$)/;

// https://regex101.com/r/r9gqGg/1
export const ARTIFACT_TAG_CLOSED_REGEX = /<artifact\b[^>]*>([\S\s]*?)<\/artifact>/;

// https://regex101.com/r/AvPA2g/1
export const ARTIFACT_THINKING_TAG_REGEX = /<thinking\b[^>]*>([\S\s]*?)(?:<\/thinking>|$)/;

export const THINKING_TAG_REGEX = /<think\b[^>]*>([\S\s]*?)(?:<\/think>|$)/;

export const MENTION_TAG_REGEX = /<mention\b[^>]*>([\S\s]*?)(?:<\/mention>|$)/;

export const AGENTS_TAG = 'lobeAgents';
export const AGENTS_TAG_REGEX = /<lobeAgents\b[^>]*(?:\/>|>([\S\s]*?)(?:<\/lobeAgents>|$))/;
