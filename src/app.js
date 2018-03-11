import angular from "angular";
import fabricServices from "./services/services";
import * as component from "./components/components";
import uiRouter from "angular-ui-router";
import test from "./modules/test/test.module";

const app = angular.module("myApp", [ uiRouter,"test"]);
function Customer($scope) {
    $scope.name = "Bob";
    $scope.code = 5001;
    $scope.showNameLength = function() {
        $scope.code = `The code is ${$scope.code}`;
    }
}
app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state("custom", {
            url: "/custom",
            template: "<custom-obj></custom-obj>", 
        })
        .state("posts", {
            url: "/posts",
            template: "<make-posts></make-posts>"
        })
})

app.component("customObj", component.customer, );
app.component("makePosts", component.makePosts);

app.service("mainSvc", fabricServices);




































// import * as angular from "angular";

// function Customer($scope) {
//     $scope.CustomerName = "John",
//     $scope.CustomerCode = "1001";
// }

// var myApp = angular.module("myApp", []);
// myApp.controller("CustomerObj", Customer);







// import angular from 'angular';
// import postsList from "./posts-list/posts-list.component.js";
// var app = angular.module("MyApp", []);


// app.component("postsList", postsList);
// console.log(postsList)
// import {hello} from "./test";

// var obj = {
//     name: "Bob",
//     surname: "Salivan"
// }
// let result = hello.call(obj, "name", "surname")
// console.log(result)


// app.controller("mainCtrl", function (mainSvc) {
//     var vm = this;
//     this.fruits = ["orange", "peanut", "banan"];

//     this.alertMe = function () {
//         alert("something");
//     }
// });

// app.filter("makePlural", function () {
//     return function (input) {
//         return input + "s";
//     }
// });

// app.service('mainSvc', function ($http) {
//     this.getPosts = function () {
//         return $http.get("https://jsonplaceholder.typicode.com/posts")
//     }
// })


// var obj = {
//     b: 30,
//     c: 40
// }
// let f, b, c;
// ({a: f = 400, b, c} = obj);
// console.log(f);
