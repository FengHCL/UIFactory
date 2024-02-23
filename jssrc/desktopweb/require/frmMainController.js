define("userfrmMainController", {
    tiles: [],
    onViewCreated() {
        this.view.init = () => {
            this.tiles = data.tiles;
            this.view.btnAdd.onClick = () => {
                this.addTile(this.tiles[0], 0);
            }
        };
        this.view.preShow = () => this.reloadData();
    },
    reloadData() {
        this.view.flxTiles.removeAll();
        this.tiles.forEach((glass, index) => {
            this.addTile(glass, index)
        });
    },
    addTile(glass, index) {
        const flex = new voltmx.ui.FlexContainer({
            id: `flex${index}${new Date().getTime()}`,
            height: `130dp`,
            responsiveConfig: {
                "span": {
                    "640": 12,
                    "1024": 6,
                    "1366": 4
                }
            },
        }, {}, {});
        const tile = new com.hcl.demo.uifactory.Tile({
            id: `tile${index}${new Date().getTime()}`,
            width: '95%',
            height: '120dp',
            centerX: '50%',
            centerY: '50%'
        }, {}, {});
        tile.glassLogo = glass.logo;
        tile.glassTitle = glass.title;
        flex.add(tile);
        this.view.flxTiles.add(flex);
        this.view.flxTiles.forceLayout();
    }
});
define("frmMainControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("frmMainController", ["userfrmMainController", "frmMainControllerActions"], function() {
    var controller = require("userfrmMainController");
    var controllerActions = ["frmMainControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});
