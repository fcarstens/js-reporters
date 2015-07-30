var Jasmine = require('jasmine');

var jasmineCore = require("jasmine-core");
jasmineCore.Suite.prototype.expectationResultFactory = function(data){
    console.error(data);
    return data;
};

var JsReporters = require('../dist/js-reporters.js');

var jasmine = new Jasmine();
jasmine.loadConfig({
    spec_dir: "test/jasmine",
    spec_files: [
        "tests.js"
    ]
});

var runner = new JsReporters.JasmineAdapter(jasmine);
var referenceData = JsReporters.testData.Jasmine;
var testReporter = new JsReporters.TestReporter(runner, referenceData);

jasmine.execute();
if (!testReporter.ok) {
    process.exit(1);
}

