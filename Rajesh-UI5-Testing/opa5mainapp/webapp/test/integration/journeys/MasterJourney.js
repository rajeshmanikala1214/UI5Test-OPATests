sap.ui.define([
    "sap/ui/test/opaQunit",
    "dev/opa5basics1/test/integration/arrangements/arrangements",
    "dev/opa5basics1/test/integration/pages/MasterPage",
    "sap/ui/test/Opa5"
], function(opaTest, myArrangements, MasterPage, Opa5) {
    "use strict";

    QUnit.module("Master Journey Begins here");


    //Define OPA 5 Run Configuration
    sap.ui.test.Opa5.extendConfig({
        arrangements: new myArrangements(),
        viewNamespace: "anubhav.app.view"
    })

    opaTest("Journey 1: Check if Search Works", function(Given, When, Then) {
        // Arrangements
        Given.launchMyApp();

        // Actions
        When.Master.searchProduct();

        // Assertions
        Then.Master.checkIfProductWasFound();

        // Cleanup
        // Then.terminateTheApp();
    });

    opaTest("Journey 2: Validate if detail page is loaded properly", function(Given, When, Then) {
        // Arrangements
        // Given.launchMyApp();

        // Actions
        When.Master.clickFirstListItem();

        // Assertions
        Then.Master.checkPrice();

        // Cleanup
        // Then.terminateTheApp();
    });

});