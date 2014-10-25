function OrchardContributor($scope, $http) {
    $http.get('https://api.github.com/repos/KindlySoul/OrchardDoc/contributors').
        success(function(data) {
            $scope.totalContribtors = data;
        });
}