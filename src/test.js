export function hello(name1, surname1) {
    return `Hello ${this[name1]} ${this[surname1]}`
}

{/* <div ng-app="myApp">
        <div id="CustScreen" ng-controller="CustomerObj">
            Customer Name: -<input ng-model="CustomerName" type="text" id="CustomerName"> 
            Customer Code: -<input ng-model="CustomerCode" type="text" id="CustomerCode">

            <div id="divCustomerName">{{CustomerName}}</div>
            <div id="divCustomerCode">{{CustomerCode}}</div>
            <br>
        </div>

        <div id="CustScreen" ng-controller="CustomerObj">
                Customer Name: -<input ng-model="CustomerName" type="text" id="CustomerName"> 
                Customer Code: -<input ng-model="CustomerCode" type="text" id="CustomerCode">
    
                <div id="divCustomerName">{{CustomerName}}</div>
                <div id="divCustomerCode">{{CustomerCode}}</div>
                <br>
        </div>
    </div> */}
