import 'dart:html';
// ignore: unused_import
import 'dart:js';

void main(List<String> args) {
  DivElement dartStatus = querySelector('#dart-status') as DivElement;
  dartStatus.text = 'Dart is working!';

  var myData = JsObject.jsify([
    {'type': '睡觉', 'value': 0.60},
    {'type': '吃饭', 'value': 0.39},
    {'type': '学习', 'value': 0.01},
  ]);

  var chart = context['chart'];
  chart.callMethod('source', [myData]);
  chart.callMethod('render', []);
}
