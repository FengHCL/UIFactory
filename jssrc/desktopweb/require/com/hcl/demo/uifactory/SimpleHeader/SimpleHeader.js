define(function() {
    return function(controller) {
        var SimpleHeader = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "150dp",
            "id": "SimpleHeader",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxGrey",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1,
            "onBreakpointHandler": onBreakpointHandler,
            "breakpoints": [640, 1024, 1366]
        }, controller.args[0], "SimpleHeader"), extendConfig({}, controller.args[1], "SimpleHeader"), extendConfig({}, controller.args[2], "SimpleHeader"));
        SimpleHeader.setDefaultUnit(voltmx.flex.DP);
        var flxLogo = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "80dp",
            "id": "flxLogo",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxLogo"), extendConfig({}, controller.args[1], "flxLogo"), extendConfig({}, controller.args[2], "flxLogo"));
        flxLogo.setDefaultUnit(voltmx.flex.DP);
        var imgLogo = new voltmx.ui.Image2(extendConfig({
            "centerX": "50%",
            "height": "78dp",
            "id": "imgLogo",
            "isVisible": true,
            "skin": "slImage",
            "src": "lux_black.png",
            "top": "5dp",
            "width": "78dp",
            "zIndex": 1
        }, controller.args[0], "imgLogo"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgLogo"), extendConfig({}, controller.args[2], "imgLogo"));
        flxLogo.add(imgLogo);
        var flxHeader = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "bottom": "10dp",
            "clipBounds": true,
            "height": "50dp",
            "id": "flxHeader",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxHeader"), extendConfig({}, controller.args[1], "flxHeader"), extendConfig({}, controller.args[2], "flxHeader"));
        flxHeader.setDefaultUnit(voltmx.flex.DP);
        var lblTitle = new voltmx.ui.Label(extendConfig({
            "height": "100%",
            "id": "lblTitle",
            "isVisible": true,
            "left": "50dp",
            "right": 50,
            "skin": "sknLblRegularRed110",
            "text": "UI Factory",
            "textStyle": {},
            "top": "0dp",
            "width": voltmx.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblTitle"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTitle"), extendConfig({}, controller.args[2], "lblTitle"));
        flxHeader.add(lblTitle);
        SimpleHeader.add(flxLogo, flxHeader);
        return SimpleHeader;
    }
})