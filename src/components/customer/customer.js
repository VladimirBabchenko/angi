function Customer($scope) {
    $scope.name = "Bob";
    $scope.code = 5001;
    $scope.showNameLength = function() {
        $scope.code = `The code is ${$scope.code}`;
    }
}

export default {
    template: require("./customer.html"),
    controller: Customer
}