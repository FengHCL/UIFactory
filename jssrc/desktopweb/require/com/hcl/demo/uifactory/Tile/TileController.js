define("com/hcl/demo/uifactory/Tile/userTileController", function() {
    return {
        constructor: function(baseConfig, layoutConfig, pspConfig) {},
        //Logic for getters/setters of custom properties
        initGettersSetters: function() {
            defineGetter(this, 'glassId', () => {
                return this._glassId;
            });
            defineSetter(this, 'glassId', value => {
                this._glassId = value;
            });
        }
    };
});
define("com/hcl/demo/uifactory/Tile/TileControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("com/hcl/demo/uifactory/Tile/TileController", ["com/hcl/demo/uifactory/Tile/userTileController", "com/hcl/demo/uifactory/Tile/TileControllerActions"], function() {
    var controller = require("com/hcl/demo/uifactory/Tile/userTileController");
    var actions = require("com/hcl/demo/uifactory/Tile/TileControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        defineSetter(this, "glassLogo", function(val) {
            this.view.imgLogo.src = val;
        });
        defineGetter(this, "glassLogo", function() {
            return this.view.imgLogo.src;
        });
        defineSetter(this, "glassTitle", function(val) {
            this.view.lblTitle.text = val;
        });
        defineGetter(this, "glassTitle", function() {
            return this.view.lblTitle.text;
        });
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    controller.AS_onClickTeaser_i9ba1f0ce7264c2da660ae311d65a5fb = function() {
        if (this.onClickTeaser) {
            this.onClickTeaser.apply(this, arguments);
        }
    }
    return controller;
});
