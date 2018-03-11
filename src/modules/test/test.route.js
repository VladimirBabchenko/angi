export default function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state("vegetables", {
            url: "/vegetables",
            component: "testObj"
        })
}