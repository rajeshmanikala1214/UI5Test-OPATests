sap.ui.define([
        "sap/ui/test/Opa5",
        "sap/ui/test/actions/Press",
        "sap/ui/test/actions/EnterText",
        "sap/ui/test/matchers/Properties",
        "sap/ui/test/matchers/Ancestor",
        "sap/ui/test/matchers/AggregationLengthEquals",
        "sap/ui/test/matchers/PropertyStrictEquals"
    ], function (
        Opa5,
        Press,
        EnterText,
        Properties,
        Ancestor,
        AggregationLengthEquals,
        PropertyStrictEquals
    ) {
        "use strict";

        const sViewName = "View1";

        Opa5.createPageObjects({
            Master: {
                actions: {
                    searchProduct: function () {
                        return this.waitFor({
                            id: "idSearch",
                            viewName: sViewName,
                            actions: new EnterText({
                                text: "Kiwi"
                            }),
                            success: function () {
                                Opa5.assert.ok(true, "Data entered in search field")
                            },
                            errorMessage: "Was not able to find the control with the id idSearch"
                        });
                    },
                    clickFirstListItem: function () {
                        return this.waitFor({
                            id: "idList",
                            viewName: sViewName,
                            success:  (oList) => {
                                this.waitFor({
                                    controlType: "sap.m.ObjectListItem",
                                    matchers: [
                                        new Ancestor(oList),
                                        new Properties({
                                            title: "Kiwi"
                                        })
                                    ],
                                    actions: new Press(),
                                    errorMessage: "The List does not have a product with title as Kiwi"
                                })
                                Opa5.assert.ok(true, "checked the list item")
                            },
                            errorMessage: "Was not able to find the control with the id idList"
                        });
                    }
                },
                assertions: {
                    checkIfProductWasFound: function () {
                        return this.waitFor({
                            id: "idList",
                            viewName: sViewName,
                            matchers: new AggregationLengthEquals({
                                name: "items",
                                length: 1
                            }),
                            success: function () {
                                Opa5.assert.ok(true, "List Item Search Properly");
                            },
                            errorMessage: "Search Functionality is not working"
                        });
                    },
                    checkPrice: function () {
                        return this.waitFor({
                            id: "idObjHeader",
                            viewName: "View2",
                            matchers: new Properties({
                                number: "220"
                            }),
                            success: function () {
                                QUnit.assert.ok(true, "wallah! Price of kiwi is 220 - displayed correctly");
                            },
                            errorMessage: "Some issue displaying data on details screen"
                        });
                    }
                }
            }
        });
    }
);