voltmx.appinit.setApplicationMetaConfiguration("appid", "UIFactory");
voltmx.appinit.setApplicationMetaConfiguration("build", "release");
voltmx.appinit.setApplicationMetaConfiguration("defaultLocale", "ar");
voltmx.appinit.setApplicationMetaConfiguration("locales", ["ar", "en", "en_US", "es"]);
voltmx.appinit.setApplicationMetaConfiguration("i18nArray", []);
voltmx.appinit.setApplicationMetaConfiguration("localization", "true");
voltmx.appinit.setApplicationMetaConfiguration("i18nVersion", "1129903857");
//startup.js
var appConfig = {
    appId: "UIFactory",
    appName: "UIFactory",
    appVersion: "1.0.0",
    isturlbase: "https://dsta-academy.demo-hclvoltmx.net/services",
    isDebug: false,
    isMFApp: true,
    appKey: "64363be3f3cb288143f3fef02d444fd5",
    appSecret: "760929feb238ddcf55e87d225d4985b9",
    serviceUrl: "https://100000035.auth.demo-hclvoltmx.net/appconfig",
    svcDoc: {
        "selflink": "https://100000035.auth.demo-hclvoltmx.net/appconfig",
        "app_version": "1.0",
        "integsvc": {
            "_internal_logout": "https://dsta-academy.demo-hclvoltmx.net/services/IST"
        },
        "service_doc_etag": "0000018DD12826B0",
        "appId": "7a8df0af-238e-4ef8-b6ab-30405f39ec74",
        "identity_features": {
            "reporting_params_header_allowed": true
        },
        "name": "UIFactory",
        "reportingsvc": {
            "session": "https://dsta-academy.demo-hclvoltmx.net/services/IST",
            "custom": "https://dsta-academy.demo-hclvoltmx.net/services/CMS"
        },
        "baseId": "f43feac3-c9ea-4b68-a817-b182fa5952f6",
        "app_default_version": "1.0",
        "services_meta": {},
        "Webapp": {
            "url": "https://dsta-academy.demo-hclvoltmx.net/apps/UIFactory"
        }
    },
    runtimeAppVersion: "1.0",
    eventTypes: ["FormEntry", "Error", "Crash"],
};
sessionID = "";

function setAppBehaviors() {
    voltmx.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        isMVC: true,
        responsive: true,
        buttonAsLabel: true,
        APILevel: 9200,
        rtlMirroringInWidgetPropertySetter: true,
        strictMode: false
    })
};

function themeCallBack() {
    initializeGlobalVariables();
    requirejs.config({
        baseUrl: voltmx.appinit.getStaticContentPath() + 'desktopweb/appjs'
    });
    require(['kvmodules'], function() {
        applicationController = require("applicationController");
        voltmx.application.setApplicationInitializationEvents({
            init: applicationController.appInit,
            postappinit: applicationController.postAppInitCallBack,
            showstartupform: function() {
                new voltmx.mvc.Navigation("frmMain").navigate();
            }
        });
    });
};

function onSuccess(oldlocalname, newlocalename, info) {
    loadResources();
};

function onFailure(errorcode, errormsg, info) {
    loadResources();
};

function loadResources() {
    voltmx.theme.packagedthemes(["default"]);
    globalhttpheaders = {};
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        "appKey": appConfig.appKey,
        "appSecret": appConfig.appSecret,
        "eventTypes": appConfig.eventTypes,
        "serviceUrl": appConfig.serviceUrl
    }
    voltmx.setupsdks(sdkInitConfig, onSuccessSDKCallBack, onSuccessSDKCallBack);
};

function onSuccessSDKCallBack() {
    spaAPM && spaAPM.startTracking();
    voltmx.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
}

function initializeApp() {
    voltmx.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
    voltmx.print = function() {
        return;
    };
    //This is the entry point for the application.When Locale comes,Local API call will be the entry point.
    voltmx.i18n.setDefaultLocaleAsync("ar", onSuccess, onFailure, null);
};
									function getSPARequireModulesList(){ return ['kvmodules']; }
								