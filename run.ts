import { readFileSync } from 'fs';
import { getSafeReportCount, getSafeReportCountWithDampener } from './solution.js';

const input = readFileSync('input.txt', 'utf-8');
console.log('Part 1:', getSafeReportCount(input));
console.log('Part 2:', getSafeReportCountWithDampener(input));
