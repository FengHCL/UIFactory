define("userflxMenuItemController", {
    //Type your controller code here 
});
define("flxMenuItemControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxMenuItemController", ["userflxMenuItemController", "flxMenuItemControllerActions"], function() {
    var controller = require("userflxMenuItemController");
    var controllerActions = ["flxMenuItemControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});
