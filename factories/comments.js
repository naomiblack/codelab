angular.module('todoApp')
  .factory('Comments', ['$resource', 'COMMENTS_PATH', function ($resource, COMMENTS_PATH) {
    return $resource(COMMENTS_PATH);
  }]);