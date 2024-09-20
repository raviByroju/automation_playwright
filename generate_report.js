const reporter = require("cucumber-html-reporter");
const options = {
  theme: "bootstrap",
  jsonFile: "cucumber_report.json",
  output: "cucumber_report.html",
  reportSuiteAsScenarios: true,
  launchReport: true,
  metadata: {
    "OS": "Windows",
    "Browser": "Chrome",
  },
};

reporter.generate(options);
