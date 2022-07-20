const types = [
  'build', // for when you updated the built assets that are committed in the repo
  'ci', // for ci related changes like .yaml update for Circle CI or Jenkins related update
  'docs', // for documentation updates like updating file overview comments or README.md
  'feat', // for code changes towards a new feature / enhancement
  'fix', // for code changes towards a bug fix
  'perf', // for code changes related to performance enhancements
  'refactor', // for code changes related to code refactoring
  'revert', // for reverting a commit
  'style', // for code changes related to visual styling (think CSS)
  'test', // for code changes to the test suites (unit tests, etc.)
  'setup', // for changes to build toolings like webpack, etc and any other dev dependencies
];

module.exports = {
  rules: {
    'body-leading-blank': [1, 'always'], // do not start with white space in commit message
    'footer-leading-blank': [1, 'always'], // do not leave a white space at the end of the commit message
    'header-max-length': [2, 'always', 72], // max length should be 72 characters long at max
    'scope-case': [2, 'always', 'lower-case'],
    'subject-case': [
      2,
      'never',
      ['sentence-case', 'start-case', 'pascal-case', 'upper-case'],
    ],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'type-enum': [2, 'always', types],
  },
};
