# Day 2: Red-Nosed Reports

## Part 1

The unusual data (your puzzle input) consists of many reports, one report per line. Each report is a list of numbers called levels that are separated by spaces. For example:

```
7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9
```

A report is safe if both of the following are true:

- The levels are either all increasing or all decreasing.
- Any two adjacent levels differ by at least 1 and at most 3.

In the example above, 2 reports are safe.

## Part 2

The Problem Dampener is a reactor-mounted module that lets the reactor safety systems tolerate a single bad level in what would otherwise be a safe report.

If removing a single level from an unsafe report would make it safe, the report instead counts as safe.

In the example above, 4 reports are safe once the Problem Dampener is applied.
