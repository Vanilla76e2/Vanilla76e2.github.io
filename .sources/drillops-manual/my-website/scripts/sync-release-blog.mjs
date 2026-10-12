import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const blogDir = path.resolve(__dirname, '../blog');
const apiUrl =
  'https://api.github.com/repos/Vanilla76e2/DrillOps.Releases/releases?per_page=100';

function renameShipments(text) {
  return text
    .replaceAll('Отгрузки', 'Отправки')
    .replaceAll('отгрузки', 'отправки')
    .replaceAll('Отгрузка', 'Отправка')
    .replaceAll('отгрузка', 'отправка')
    .replaceAll('Отгрузке', 'Отправке')
    .replaceAll('отгрузке', 'отправке')
    .replaceAll('Отгрузкой', 'Отправкой')
    .replaceAll('отгрузкой', 'отправкой')
    .replaceAll('Отгрузку', 'Отправку')
    .replaceAll('отгрузку', 'отправку')
    .replaceAll('Отгрузок', 'Отправок')
    .replaceAll('отгрузок', 'отправок')
    .replaceAll('Отгрузкам', 'Отправкам')
    .replaceAll('отгрузкам', 'отправкам');
}

function slugFromTag(tag) {
  return tag.replaceAll('.', '-');
}

function insertTruncate(body) {
  const lines = body.split('\n');
  let start = 0;
  while (start < lines.length && !lines[start].trim()) {
    start += 1;
  }
  if (start >= lines.length) {
    return body.trim() + '\n';
  }
  lines.splice(start + 1, 0, '', '{/* truncate */}');
  return lines.join('\n').trim() + '\n';
}

function toPost(release) {
  const tag = release.tag_name;
  const date = release.published_at.slice(0, 10);
  let body = String(release.body ?? '').replaceAll('\r\n', '\n');
  body = renameShipments(body);
  body = body.replace(/^# .+\n+/, '');
  body = insertTruncate(body);
  const content = `---
slug: ${slugFromTag(tag)}
title: ${tag}
tags: [release]
---

${body}`;
  return {
    file: `${date}-${tag}.md`,
    content,
  };
}

const res = await fetch(apiUrl, {
  headers: {
    Accept: 'application/vnd.github+json',
    'User-Agent': 'DrillOps-manual-sync',
  },
});
if (!res.ok) {
  throw new Error(`GitHub API ${res.status}: ${await res.text()}`);
}
const releases = await res.json();
if (!Array.isArray(releases) || releases.length === 0) {
  throw new Error('No releases returned');
}

for (const release of releases) {
  if (release.draft) {
    continue;
  }
  const {file, content} = toPost(release);
  fs.writeFileSync(path.join(blogDir, file), content, 'utf8');
  console.log(`wrote ${file}`);
}

console.log(`synced ${releases.filter((r) => !r.draft).length} GitHub releases`);
