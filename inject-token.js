#!/usr/bin/env node
// inject-token.js — runs at Netlify build time
// Injects AIRTABLE_TOKEN env var into index.html
const fs = require('fs');
const token = process.env.AIRTABLE_TOKEN || '';
let html = fs.readFileSync('index.html', 'utf8');
html = html.replace(
  'const AIRTABLE_TOKEN = window.AIRTABLE_TOKEN || \'\';',
  `const AIRTABLE_TOKEN = '${token}';`
);
fs.writeFileSync('index.html', html);
console.log('Token injected.');
