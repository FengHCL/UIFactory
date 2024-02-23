define({
    appInit: function(params) {
        skinsInit();
        voltmx.mvc.registry.add("com.hcl.demo.uifactory.SimpleHeader", "SimpleHeader", "SimpleHeaderController");
        voltmx.application.registerMaster({
            "namespace": "com.hcl.demo.uifactory",
            "classname": "SimpleHeader",
            "name": "com.hcl.demo.uifactory.SimpleHeader"
        });
        voltmx.mvc.registry.add("com.hcl.demo.uifactory.Tile", "Tile", "TileController");
        voltmx.application.registerMaster({
            "namespace": "com.hcl.demo.uifactory",
            "classname": "Tile",
            "name": "com.hcl.demo.uifactory.Tile"
        });
        voltmx.mvc.registry.add("flxMenuItem", "flxMenuItem", "flxMenuItemController");
        voltmx.mvc.registry.add("frmMain", "frmMain", "frmMainController");
        setAppBehaviors();
    },
    postAppInitCallBack: function(eventObj) {},
    appmenuseq: function() {
        new voltmx.mvc.Navigation("frmMain").navigate();
    }
});