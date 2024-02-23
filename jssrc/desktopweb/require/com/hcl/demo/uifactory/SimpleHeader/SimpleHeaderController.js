define("com/hcl/demo/uifactory/SimpleHeader/userSimpleHeaderController", function() {
    return {
        constructor: function(baseConfig, layoutConfig, pspConfig) {},
        //Logic for getters/setters of custom properties
        initGettersSetters: function() {}
    };
});
define("com/hcl/demo/uifactory/SimpleHeader/SimpleHeaderControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("com/hcl/demo/uifactory/SimpleHeader/SimpleHeaderController", ["com/hcl/demo/uifactory/SimpleHeader/userSimpleHeaderController", "com/hcl/demo/uifactory/SimpleHeader/SimpleHeaderControllerActions"], function() {
    var controller = require("com/hcl/demo/uifactory/SimpleHeader/userSimpleHeaderController");
    var actions = require("com/hcl/demo/uifactory/SimpleHeader/SimpleHeaderControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        defineSetter(this, "title", function(val) {
            this.view.lblTitle.text = val;
        });
        defineGetter(this, "title", function() {
            return this.view.lblTitle.text;
        });
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    return controller;
});
