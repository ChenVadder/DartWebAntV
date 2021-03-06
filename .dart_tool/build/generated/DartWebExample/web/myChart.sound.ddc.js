define(['dart_sdk'], (function load__web__myChart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const js = dart_sdk.js;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var myChart = Object.create(dart.library);
  var $text = dartx.text;
  dart._checkModuleNullSafetyMode(true);
  var T = {
    IdentityMapOfString$Object: () => (T.IdentityMapOfString$Object = dart.constFn(_js_helper.IdentityMap$(core.String, core.Object)))(),
    MapOfString$Object: () => (T.MapOfString$Object = dart.constFn(core.Map$(core.String, core.Object)))(),
    JSArrayOfMapOfString$Object: () => (T.JSArrayOfMapOfString$Object = dart.constFn(_interceptors.JSArray$(T.MapOfString$Object())))(),
    JSArrayOfJsObject: () => (T.JSArrayOfJsObject = dart.constFn(_interceptors.JSArray$(js.JsObject)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  myChart.main = function main(args) {
    let dartStatus = html.DivElement.as(html.querySelector("#dart-status"));
    dartStatus[$text] = "Dart is working!";
    let myData = js.JsObject.jsify(T.JSArrayOfMapOfString$Object().of([new (T.IdentityMapOfString$Object()).from(["type", "睡觉", "value", 0.6]), new (T.IdentityMapOfString$Object()).from(["type", "吃饭", "value", 0.39]), new (T.IdentityMapOfString$Object()).from(["type", "学习", "value", 0.01])]));
    let chart = js.context._get("chart");
    dart.dsend(chart, 'callMethod', ["source", T.JSArrayOfJsObject().of([myData])]);
    dart.dsend(chart, 'callMethod', ["render", []]);
  };
  dart.trackLibraries("web/myChart", {
    "org-dartlang-app:///web/myChart.dart": myChart
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["myChart.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;+BAIuB;AACV,qBAA2C,mBAA9B,mBAAc;AACF,IAApC,AAAW,UAAD,UAAQ;AAEd,iBAAkB,kBAAM,oCAC1B,2CAAC,QAAQ,MAAM,SAAS,OACxB,2CAAC,QAAQ,MAAM,SAAS,QACxB,2CAAC,QAAQ,MAAM,SAAS;AAGtB,gBAAQ,AAAO,gBAAC;AACgB,IAA9B,WAAN,KAAK,iBAAY,UAAU,0BAAC,MAAM;AACJ,IAAxB,WAAN,KAAK,iBAAY,UAAU;EAC7B","file":"myChart.sound.ddc.js"}');
  // Exports:
  return {
    web__myChart: myChart
  };
}));

//# sourceMappingURL=myChart.sound.ddc.js.map
