sap.ui.define([
    "sap/ui/test/opaQunit",
    "sap/ui/test/Opa5",
    "sap/ui/test/matchers/PropertyStrictEquals"
], function (opaQunit, Opa5, PropertyStrictEquals) {
    "use strict";

    //Given - Arrangements
    const myArrangements = new Opa5({
        launchMyApp: function () {
            return this.iStartMyAppInAFrame("../../index.html");
        },
        terminateTheApp: function () {
            return this.iTeardownMyAppFrame("../../index.html");
        }
    });

    //when - Actions

    const myAction = new Opa5({
        clickOnMyBtn: function () {
            return this.waitFor({
                viewName: "Main",
                id: "idBtn",
                success: function (oBtn) {
                    oBtn.firePress();
                },
                errorMessage: "There was a Button with id idBtn, which is not found anymore"
            })
        }
    });

    //Then - Assertions
    const myAssertions = new Opa5({
        checkTextChanged: function () {
            return this.waitFor({
                viewName: "Main",
                id: "idBtn",
                matchers: new PropertyStrictEquals({
                    name: "text",
                    value: "India"
                }),
                success: function () {
                    QUnit.assert.ok(true, "wallah! my button text changed to India");
                },
                errorMessage: "Button text did not change to india"
            })
        }
    });


    //Define OPA 5 Run Configuration
    Opa5.extendConfig({
        arrangements: myArrangements,
        actions: myAction,
        assertions: myAssertions,
        viewNamespace: "dev.opa5basics.view",
        timeout: 10
    })

    //Testcase 1

    opaQunit("A simple opa testcase", function (Given, When, Then) {
        Given.launchMyApp();

        When.clickOnMyBtn();

        Then.checkTextChanged();

        Given.terminateTheApp();
    });

});