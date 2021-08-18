#!/usr/bin/env node
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');
process.stdin.on('data', (data) => {
  data = data.replace(/\S+/g, (match) => {
    const date = new Date(match);
    if (isFinite(date)) {
      return `\x1b[2m[${date.toLocaleString('ko-kr', {
        timeZone: 'Asia/Seoul',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })} (KST)]\x1b[0m`;
    } else {
      return match;
    }
  });
  process.stdout.write(data);
});
