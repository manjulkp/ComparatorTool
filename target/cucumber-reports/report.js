$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/feature/CompareResponseBewteenTwoFiles.feature");
formatter.feature({
  "name": "Compare Reponse Between Two Files",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Compare"
    }
  ]
});
formatter.scenario({
  "name": "Compare reponse of two files",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Compare"
    }
  ]
});
formatter.step({
  "name": "I load the two files that has the request",
  "keyword": "Given "
});
formatter.match({
  "location": "CompareResponseBetweenTwoFiles.i_load_the_two_files_that_has_the_request()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "compare tool prints the two response has matched or not",
  "keyword": "Then "
});
formatter.match({
  "location": "CompareResponseBetweenTwoFiles.compare_tool_prints_the_two_response_has_matched_or_not()"
});
formatter.result({
  "status": "passed"
});
});