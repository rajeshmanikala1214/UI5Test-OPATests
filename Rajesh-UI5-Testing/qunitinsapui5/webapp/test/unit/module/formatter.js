sap.ui.define([
    "demo/app/util/formatter",
], function (formatter) {
    'use strict';

    //Define unit tests here
    QUnit.module("This is the start of Formatter module");

    function callSplitTimeToDays(assert, nMinutes, expected){
        const obtainedValue = formatter.splitTimeToDays(nMinutes);
        assert.strictEqual(obtainedValue, expected, "SplitTimeToDays Formatter is formatting correctly");
    }

    QUnit.test("Testing formatter SplitTimeToDays", function (assert) {
        callSplitTimeToDays.call(this, assert, 2000, '1Day 9Hours');
    })

    function callGetStatus(assert, sStatus, expected) {
        const obtainedValue = formatter.getStatus(sStatus);
        assert.strictEqual(obtainedValue, expected, "getStatus Formatter is formatting correctly");
    }

    QUnit.test("Testing formatter getStatus", function (assert) {
        callGetStatus.call(this, assert, "Available", 'Success');
    })
});