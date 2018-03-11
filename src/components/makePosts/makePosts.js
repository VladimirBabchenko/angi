function MakePosts($scope, mainSvc) {
    $scope.fruits = ["banan", "apple", "orange"];
    mainSvc.getPosts("https://jsonplaceholder.typicode.com/posts")
        .then(response => $scope.posts = response.data )
}

export default {
    template: require("./makePosts.html"),
    controller: MakePosts
}