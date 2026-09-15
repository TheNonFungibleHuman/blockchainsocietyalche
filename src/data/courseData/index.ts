import { part1 } from './part-1';
import { part2 } from './part-2';
import { part3 } from './part-3';
import { part4 } from './part-4';
import { part5 } from './part-5';
import { part6 } from './part-6';

const introduction = [
  {
    "id": "welcome-intro",
    "title": "Video: Welcome to Blockchain 101",
    "type": "video",
    "videoUrl": "https://supercut.ai/embed/haneefff/5cvLyx0yEaSTGXsFXkSdx5?embed=sidebar",
    "isWelcome": true
  }
];

export const courseData = {
  id: "blockchain-101",
  title: "Blockchain 101",
  description: "Comprehensive, interactive courses designed to take you from blockchain beginner to Web3 native.",
  introduction,
  parts: [part1, part2, part3, part4, part5, part6],
};
