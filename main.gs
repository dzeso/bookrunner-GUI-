function doGet() {
  return HtmlService
      .createTemplateFromFile('Vue/index')
      .evaluate()
      .addMetaTag('viewport', 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui');
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}

function includeFromGoogleDrive(id) {
  return "<script>" + DriveApp.getFileById(id).getBlob().getDataAsString() + "</script>";
}



function test() {
var response = UrlFetchApp.fetch("https://www.okex.com/api/v1/future_index.do?symbol=btc_usd/");
Logger.log(response.getContentText());
}