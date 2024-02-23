define(function() {
    return function(controller) {
        var Tile = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "120dp",
            "id": "Tile",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxGrey",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1,
            "onBreakpointHandler": onBreakpointHandler,
            "breakpoints": [640, 1024, 1366]
        }, controller.args[0], "Tile"), extendConfig({}, controller.args[1], "Tile"), extendConfig({
            "hoverSkin": "sknFlxGreyHover"
        }, controller.args[2], "Tile"));
        Tile.setDefaultUnit(voltmx.flex.DP);
        var flxGroup = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxGroup",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "onClick": controller.AS_onClickTeaser_i9ba1f0ce7264c2da660ae311d65a5fb,
            "skin": "CopyslFbox0jd2efe02193749",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxGroup"), extendConfig({}, controller.args[1], "flxGroup"), extendConfig({
            "hoverSkin": "CopyslFbox0i47a0f441d5f4e"
        }, controller.args[2], "flxGroup"));
        flxGroup.setDefaultUnit(voltmx.flex.DP);
        var imgLogo = new voltmx.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "106dp",
            "id": "imgLogo",
            "isVisible": true,
            "left": "50%",
            "skin": "slImage",
            "src": "rayban.jpg",
            "width": voltmx.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "imgLogo"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgLogo"), extendConfig({}, controller.args[2], "imgLogo"));
        var lblTitle = new voltmx.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "100%",
            "id": "lblTitle",
            "isVisible": true,
            "left": "10%",
            "skin": "sknMediumWhite140",
            "text": "RayBan",
            "textStyle": {},
            "top": "0dp",
            "width": "100%",
            "zIndex": 2
        }, controller.args[0], "lblTitle"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTitle"), extendConfig({
            "hoverSkin": "CopysknMediumWhite0a85b977204734c"
        }, controller.args[2], "lblTitle"));
        flxGroup.add(imgLogo, lblTitle);
        Tile.add(flxGroup);
        Tile.compInstData = {}
        return Tile;
    }
})