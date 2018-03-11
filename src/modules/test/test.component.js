import testHtml from "./test.html";

function Component($scope, fabric) {
    $scope.vegetables = ["carrot", "potatoes", "cucumbers"];
    fabric.capitalizeVegetables($scope.vegetables);
} 

let testComponent =  {
    template: testHtml,
    controller: Component
}

export default testComponent;

