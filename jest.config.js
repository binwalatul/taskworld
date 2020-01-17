module.exports = {
  preset: 'jest-puppeteer',
  setupFilesAfterEnv: ['./utils/setupTestFramework.js'],
  reporters: ['default'],
};
