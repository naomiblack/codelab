module.exports = function (config) {
  config.set({
    plugins: [
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-ng-html2js-preprocessor'
    ],
    frameworks: ['jasmine'],
    basePath: '../',
    exclude: [
      'dpd/',
      'dpd/*'
    ],
    files: [
      'temp/angular.js',
      'temp/angular-*.js',
      'temp/md5.js',
      'app.js',
      'components/**/*.js',
      'factories/*.js',
      'filters/*.js',
      'services/*.js',
      '*.js',
      'components/**/*.html',
      'terms/detail/*.js',
      'terms/*.js'
    ],
    preprocessors: {
      'components/**/*.html': ['ng-html2js']
    },
    autoWatch: true,
    browsers: ['Chrome']
  });
};
