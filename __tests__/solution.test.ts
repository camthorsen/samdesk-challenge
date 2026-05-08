import { getSafeReportCount, getSafeReportCountWithDampener, parseReports, isReportSafe, isReportSafeWithDampener } from '../solution.js';

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

describe('isReportSafeWithDampener', () => {
  it('accepts a report that is already safe', () => {
    expect(isReportSafeWithDampener([7, 6, 4, 2, 1])).toBe(true);
  });

  it('accepts a report made safe by removing one level', () => {
    expect(isReportSafeWithDampener([1, 3, 2, 4, 5])).toBe(true);
  });

  it('accepts a report made safe by removing a duplicate level', () => {
    expect(isReportSafeWithDampener([8, 6, 4, 4, 1])).toBe(true);
  });

  it('rejects a report that is unsafe regardless of which level is removed', () => {
    expect(isReportSafeWithDampener([1, 2, 7, 8, 9])).toBe(false);
  });

  it('rejects a report with multiple large decreases', () => {
    expect(isReportSafeWithDampener([9, 7, 6, 2, 1])).toBe(false);
  });
});

describe('getSafeReportCountWithDampener', () => {
  it('returns 4 for the example input', () => {
    expect(getSafeReportCountWithDampener(exampleInput)).toBe(4);
  });
});
