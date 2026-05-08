/** Advent of Code 2024, Day 2: Red-Nosed Reports — see CHALLENGE.md */

type Level = number;
type Report = Level[];

/** Return the count of safe reports in the input */
export function getSafeReportCount(input: string): number {
  return parseReports(input).filter(isReportSafe).length;
}

/** Return the count of safe reports, allowing one level to be removed per report */
export function getSafeReportCountWithDampener(input: string): number {
  return parseReports(input).filter(isReportSafeWithDampener).length;
}

/** Parse each line of the input into an array of levels */
export function parseReports(input: string): Report[] {
  return input
    .split('\n')
    .filter((row) => row.length > 0)
    .map((row) => row.split(' ').map(Number));
}

/** Return true if the report is safe, or safe with one level removed */
export function isReportSafeWithDampener(report: Report): boolean {
  if (isReportSafe(report)) return true;

  for (let i = 0; i < report.length; i++) {
    const withLevelRemoved = [...report.slice(0, i), ...report.slice(i + 1)];
    if (isReportSafe(withLevelRemoved)) return true;
  }

  return false;
}

/** Return true if all adjacent levels are strictly increasing or decreasing by 1–3 */
export function isReportSafe(report: Report): boolean {
  let isIncreasing: boolean | undefined;
  let isDecreasing: boolean | undefined;

  for (let i = 0; i < report.length - 1; i++) {
    const curr = report[i]!;
    const next = report[i + 1]!;

    if (curr > next) {
      if (isDecreasing) return false;
      isIncreasing = true;
    } else if (curr < next) {
      if (isIncreasing) return false;
      isDecreasing = true;
    } else {
      return false;
    }

    if (Math.abs(curr - next) > 3) return false;
  }

  return true;
}
