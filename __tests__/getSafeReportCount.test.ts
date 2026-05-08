import { getSafeReportCount, parseReports, isReportSafe } from '../getSafeReportCount.js';

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

describe('isReportSafe', () => {
  it('accepts a monotonically decreasing report', () => {
    expect(isReportSafe([7, 6, 4, 2, 1])).toBe(true);
  });

  it('accepts a monotonically increasing report', () => {
    expect(isReportSafe([1, 3, 6, 7, 9])).toBe(true);
  });

  it('rejects a report where adjacent levels increase by more than 3', () => {
    expect(isReportSafe([1, 2, 7, 8, 9])).toBe(false);
  });

  it('rejects a report where adjacent levels decrease by more than 3', () => {
    expect(isReportSafe([9, 7, 6, 2, 1])).toBe(false);
  });

  it('rejects a report with mixed direction', () => {
    expect(isReportSafe([1, 3, 2, 4, 5])).toBe(false);
  });

  it('rejects a report with equal adjacent levels', () => {
    expect(isReportSafe([8, 6, 4, 4, 1])).toBe(false);
  });
});

describe('getSafeReportCount', () => {
  it('returns 2 for the example input', () => {
    expect(getSafeReportCount(exampleInput)).toBe(2);
  });
});
