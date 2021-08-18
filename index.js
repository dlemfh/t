#!/usr/bin/env node
'use strict';

const DIM = '\x1b[2m';
const RESET = '\x1b[0m';

process.stdin.resume();
process.stdin.setEncoding('utf-8');
process.stdin.on('data', (data) => {
  data = data.replace(/\S+/g, (match) => {
    const date = new Date(match);
    if (isFinite(date)) {
      return `${DIM}[${date.toLocaleString('ko-kr', {
        timeZone: 'Asia/Seoul',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })} (KST)]${RESET}`;
    } else {
      return match;
    }
  });
  process.stdout.write(data);
});
