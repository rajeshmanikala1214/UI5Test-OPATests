function add(a, b) {
    return a + b;
}

QUnit.module('add', function () {
    QUnit.test('two numbers', function (assert) {
        assert.equal(add(1, 2), 3);
    });
});


// var x = 10;
QUnit.module("second module");

//This is our application code
const addNumber = function(){
    var x = 10;
    var y = 20;
    z = x + y;
   return z;
}

//this is my first testcase
QUnit.test("Just for fun", function (assert) {
   //here we write test code
    const obtainedResult = addNumber();
    assert.ok(obtainedResult == 30, "The unit is passed");
    assert.ok("" == 0,"in JS blank is treated to be equal zero");
});



QUnit.module("This is my third module");
QUnit.test("We are now testing Equals method", function (assert) {
    //here we write test code
    const obtainedResult = 1;
    const expected = 1;
    assert.equal(expected, obtainedResult, "Actual and Expected matched");
    assert.equal(0, "", "Actual and Expected matched");
    assert.strictEqual(0, "", "Actual and Expected matched");
 });

 //Testing Asynchronous calls
 QUnit.test("This is how to test async", function(assert){
    assert.timeout(4000);
     const jumpingJack = assert.async();
     setTimeout(function(){
        assert.ok(1==1, "My Async code triggered");
        jumpingJack();
    }, 3000);

 });

 QUnit.module("Comparing JSON in tests");
 QUnit.test("Test for JSONs", function(assert){
     const emp = {foo: "helloworld"};
     assert.deepEqual(emp, {foo: "helloworld"}, "JSON Compare success");

 });


