module.exports = {
  name: 'rocket-tracker',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/rocket-tracker',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
