sap.ui.define([
    "sap/ui/test/opaQunit",
    "sap/ui/test/Opa5"
], function (
    opaQunit,
    Opa5
) {
    'use strict';
    return Opa5.extend("dev.opa5basics1.test.integration.arrangements.arrangements", {
        launchMyApp: function () {
            return this.iStartMyAppInAFrame("../../index.html");
        },
        terminateTheApp: function () {
            return this.iTeardownMyAppFrame("../../index.html");
        }
    });

});