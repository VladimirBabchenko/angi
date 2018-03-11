import angular from "angular";

import component from "./test.component";
import FabricServices from "./test.service";
import routing from "./test.route";

angular
    .module("test", [])
    .component("testObj", component)
    .service("fabric", FabricServices)
    .config(routing);


