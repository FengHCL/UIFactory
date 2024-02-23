define("flxMenuItem", function() {
    return function(controller) {
        var flxMenuItem = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "60dp",
            "id": "flxMenuItem",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxRed",
            "top": "0dp",
            "width": "100%",
            "breakpoints": [640, 1024, 1366]
        }, {}, {
            "hoverSkin": "flxRedHover"
        });
        flxMenuItem.setDefaultUnit(voltmx.flex.DP);
        var key = new voltmx.ui.Label({
            "id": "key",
            "isVisible": false,
            "left": "148dp",
            "skin": "defLabel",
            "textStyle": {},
            "top": "20dp",
            "width": voltmx.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var item = new voltmx.ui.Label({
            "height": "100%",
            "id": "item",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknRegularWhite100",
            "text": "Label",
            "textStyle": {},
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxMenuItem.add(key, item);
        return flxMenuItem;
    }
})