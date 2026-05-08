import { readFileSync } from 'fs';
import { getSafeReportCount } from './getSafeReportCount.js';

const input = readFileSync('input.txt', 'utf-8');
console.log(getSafeReportCount(input));
