import { getSafeReportCount, parseReports } from '../getSafeReportCount.js';

const exampleInput = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`;

describe('parseReports', () => {
  it('parses a single report into a nested array of numbers', () => {
    expect(parseReports('7 6 4 2 1')).toEqual([[7, 6, 4, 2, 1]]);
  });

  it('parses multiple reports into separate arrays', () => {
    expect(parseReports('7 6 4 2 1\n1 3 6 7 9')).toEqual([
      [7, 6, 4, 2, 1],
      [1, 3, 6, 7, 9],
    ]);
  });

  it('handles a trailing newline', () => {
    expect(parseReports('7 6 4 2 1\n')).toEqual([[7, 6, 4, 2, 1]]);
  });
});

describe('getSafeReportCount', () => {
  it('returns 2 for the example input', () => {
    expect(getSafeReportCount(exampleInput)).toBe(2);
  });

  it('counts a monotonically decreasing report as safe', () => {
    expect(getSafeReportCount('7 6 4 2 1')).toBe(1);
  });

  it('counts a monotonically increasing report as safe', () => {
    expect(getSafeReportCount('1 3 6 7 9')).toBe(1);
  });

  it('rejects a report where adjacent levels differ by more than 3', () => {
    expect(getSafeReportCount('1 2 7 8 9')).toBe(0);
  });

  it('rejects a report where a decrease exceeds 3', () => {
    expect(getSafeReportCount('9 7 6 2 1')).toBe(0);
  });

  it('rejects a report with mixed direction', () => {
    expect(getSafeReportCount('1 3 2 4 5')).toBe(0);
  });

  it('rejects a report with equal adjacent levels', () => {
    expect(getSafeReportCount('8 6 4 4 1')).toBe(0);
  });
});
