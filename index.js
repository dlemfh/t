#!/usr/bin/env node
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');
process.stdin.on('data', (data) => {
  process.stdout.write(data);
});
