define("frmMain", function() {
    return function(controller) {
        function addWidgetsfrmMain() {
            this.setDefaultUnit(voltmx.flex.DP);
            var SimpleHeader = new com.hcl.demo.uifactory.SimpleHeader({
                "height": "150dp",
                "id": "SimpleHeader",
                "isVisible": true,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "sknFlxGrey",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1,
                "overrides": {
                    "SimpleHeader": {
                        "right": "viz.val_cleared",
                        "bottom": "viz.val_cleared",
                        "minWidth": "viz.val_cleared",
                        "minHeight": "viz.val_cleared",
                        "maxWidth": "viz.val_cleared",
                        "maxHeight": "viz.val_cleared",
                        "centerX": "viz.val_cleared",
                        "centerY": "viz.val_cleared"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            var flxContent = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": 0,
                "centerX": "50%",
                "clipBounds": true,
                "height": "78%",
                "id": "flxContent",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0d847f27bd2e642",
                "top": "130dp",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxContent.setDefaultUnit(voltmx.flex.DP);
            var flxTiles = new voltmx.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bottom": 0,
                "bounces": false,
                "centerX": "50%",
                "clipBounds": true,
                "enableScrolling": true,
                "horizontalScrollIndicator": true,
                "id": "flxTiles",
                "isVisible": true,
                "layoutType": voltmx.flex.RESPONSIVE_GRID,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": voltmx.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "20dp",
                "verticalScrollIndicator": false,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxTiles.setDefaultUnit(voltmx.flex.DP);
            var flxGroup1 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "130dp",
                "id": "flxGroup1",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "360dp",
                "responsiveConfig": {
                    "offset": {
                        "640": 0,
                        "1024": 0,
                        "1366": 0
                    },
                    "span": {
                        "640": 12,
                        "1024": 6,
                        "1366": 4
                    }
                }
            }, {}, {});
            flxGroup1.setDefaultUnit(voltmx.flex.DP);
            var tile1 = new com.hcl.demo.uifactory.Tile({
                "centerX": "50%",
                "centerY": "50%",
                "height": "120dp",
                "id": "tile1",
                "isVisible": true,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "sknFlxGrey",
                "top": "0dp",
                "width": "95%",
                "zIndex": 1,
                "overrides": {
                    "Tile": {
                        "right": "viz.val_cleared",
                        "bottom": "viz.val_cleared",
                        "minWidth": "viz.val_cleared",
                        "minHeight": "viz.val_cleared",
                        "maxWidth": "viz.val_cleared",
                        "maxHeight": "viz.val_cleared"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            tile1.glassId = "1";
            flxGroup1.add(tile1);
            var CopyflxGroup0a43d2f6a47284a = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "130dp",
                "id": "CopyflxGroup0a43d2f6a47284a",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "360dp",
                "responsiveConfig": {
                    "offset": {
                        "640": 0,
                        "1024": 0,
                        "1366": 0
                    },
                    "span": {
                        "640": 12,
                        "1024": 6,
                        "1366": 4
                    }
                }
            }, {}, {});
            CopyflxGroup0a43d2f6a47284a.setDefaultUnit(voltmx.flex.DP);
            var tile2 = new com.hcl.demo.uifactory.Tile({
                "bottom": "10dp",
                "centerX": "50%",
                "centerY": "50%",
                "height": "120dp",
                "id": "tile2",
                "isVisible": true,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "sknFlxGrey",
                "top": "0dp",
                "width": "95%",
                "zIndex": 1,
                "overrides": {
                    "Tile": {
                        "right": "viz.val_cleared",
                        "minWidth": "viz.val_cleared",
                        "minHeight": "viz.val_cleared",
                        "maxWidth": "viz.val_cleared",
                        "maxHeight": "viz.val_cleared"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            tile2.glassId = "1";
            CopyflxGroup0a43d2f6a47284a.add(tile2);
            var CopyflxGroup0idb7592d85a94c = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "130dp",
                "id": "CopyflxGroup0idb7592d85a94c",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "-1dp",
                "width": "360dp",
                "responsiveConfig": {
                    "offset": {
                        "640": 0,
                        "1024": 0,
                        "1366": 0
                    },
                    "span": {
                        "640": 12,
                        "1024": 6,
                        "1366": 4
                    }
                }
            }, {}, {});
            CopyflxGroup0idb7592d85a94c.setDefaultUnit(voltmx.flex.DP);
            var tile3 = new com.hcl.demo.uifactory.Tile({
                "bottom": "10dp",
                "centerX": "50%",
                "centerY": "50%",
                "height": "120dp",
                "id": "tile3",
                "isVisible": true,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "sknFlxGrey",
                "top": "0dp",
                "width": "95%",
                "zIndex": 1,
                "overrides": {
                    "Tile": {
                        "right": "viz.val_cleared",
                        "minWidth": "viz.val_cleared",
                        "minHeight": "viz.val_cleared",
                        "maxWidth": "viz.val_cleared",
                        "maxHeight": "viz.val_cleared"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            tile3.glassId = "1";
            CopyflxGroup0idb7592d85a94c.add(tile3);
            var CopyflxGroup0b689290ec2a147 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "130dp",
                "id": "CopyflxGroup0b689290ec2a147",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "360dp",
                "responsiveConfig": {
                    "offset": {
                        "640": 0,
                        "1024": 0,
                        "1366": 0
                    },
                    "span": {
                        "640": 12,
                        "1024": 6,
                        "1366": 4
                    }
                }
            }, {}, {});
            CopyflxGroup0b689290ec2a147.setDefaultUnit(voltmx.flex.DP);
            var tile4 = new com.hcl.demo.uifactory.Tile({
                "bottom": "10dp",
                "centerX": "50%",
                "centerY": "50%",
                "height": "120dp",
                "id": "tile4",
                "isVisible": true,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "sknFlxGrey",
                "top": "0dp",
                "width": "95%",
                "zIndex": 1,
                "overrides": {
                    "Tile": {
                        "right": "viz.val_cleared",
                        "minWidth": "viz.val_cleared",
                        "minHeight": "viz.val_cleared",
                        "maxWidth": "viz.val_cleared",
                        "maxHeight": "viz.val_cleared"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            tile4.glassId = "1";
            CopyflxGroup0b689290ec2a147.add(tile4);
            flxTiles.add(flxGroup1, CopyflxGroup0a43d2f6a47284a, CopyflxGroup0idb7592d85a94c, CopyflxGroup0b689290ec2a147);
            flxContent.add(flxTiles);
            var flxFooter = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "20dp",
                "clipBounds": true,
                "height": "40dp",
                "id": "flxFooter",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxFooter.setDefaultUnit(voltmx.flex.DP);
            var btnAdd = new voltmx.ui.Button({
                "centerX": "50%",
                "focusSkin": "defBtnFocus",
                "height": "90%",
                "id": "btnAdd",
                "isVisible": true,
                "left": "976dp",
                "skin": "CopydefBtnNormal0cd7546c1e29243",
                "text": "Add",
                "top": "4dp",
                "width": "100dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxFooter.add(btnAdd);
            this.compInstData = {
                "SimpleHeader": {
                    "right": "",
                    "bottom": "",
                    "minWidth": "",
                    "minHeight": "",
                    "maxWidth": "",
                    "maxHeight": "",
                    "centerX": "",
                    "centerY": ""
                },
                "tile1": {
                    "right": "",
                    "bottom": "",
                    "minWidth": "",
                    "minHeight": "",
                    "maxWidth": "",
                    "maxHeight": ""
                },
                "tile2": {
                    "right": "",
                    "minWidth": "",
                    "minHeight": "",
                    "maxWidth": "",
                    "maxHeight": ""
                },
                "tile3": {
                    "right": "",
                    "minWidth": "",
                    "minHeight": "",
                    "maxWidth": "",
                    "maxHeight": ""
                },
                "tile4": {
                    "right": "",
                    "minWidth": "",
                    "minHeight": "",
                    "maxWidth": "",
                    "maxHeight": ""
                }
            }
            this.add(SimpleHeader, flxContent, flxFooter);
        };
        return [{
            "addWidgets": addWidgetsfrmMain,
            "enabledForIdleTimeout": false,
            "id": "frmMain",
            "layoutType": voltmx.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "sknFrmDarkGrey",
            "onBreakpointHandler": onBreakpointHandler,
            "breakpoints": [640, 1024, 1366]
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": voltmx.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "retainScrollPosition": false
        }]
    }
});