import ImageSearchRef from './ImageSearchRef';
import Link from './Link';
import LobeAgents from './LobeAgents';
import Artifact from './Artifact';
import LobeThinking from './LobeThinking';
import LocalFile from './LocalFile';
import LocalFileLink from './LocalFileLink';
import Mention from './Mention';
import Skill from './Skill';
import Task from './Task';
import Thinking from './Thinking';
import Tool from './Tool';
import { type MarkdownElement } from './type';
import UserFeedback from './UserFeedback';

export type { MarkdownElement } from './type';

export const markdownElements: MarkdownElement[] = [
  Thinking,
  Artifact,
  LobeThinking,
  LocalFile,
  Mention,
  Skill,
  Tool,
  Task,
  UserFeedback,
  ImageSearchRef,
  LobeAgents,
  LocalFileLink,
  Link,
];
