#!/usr/bin/env node
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');
process.stdin.on('data', (data) => {
  data = data.replace(/^[^\s]+/, (match) => {
    const date = new Date(match);
    if (isFinite(date)) {
      return date.toString()
    } else {
      return match;
    }
  });
  process.stdout.write(data);
});
