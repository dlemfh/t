#!/usr/bin/env node
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');
process.stdin.on('data', (data) => {
  data = data.replace(/\S+/g, (match) => {
    const date = new Date(match);
    if (isFinite(date)) {
      return `[${date.toLocaleString('ko-kr', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })}]`;
    } else {
      return match;
    }
  });
  process.stdout.write(data);
});
