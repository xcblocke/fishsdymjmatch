
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/process/tile2/DefaultGenerateStrategy.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '22b82NjsTpCVZQIIuNob1zm', 'DefaultGenerateStrategy');
// Scripts/process/tile2/DefaultGenerateStrategy.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultGenerateStrategy = void 0;
var DefaultGenerateStrategy = /** @class */ (function () {
    function DefaultGenerateStrategy() {
    }
    DefaultGenerateStrategy.prototype.run = function (e, t, o, n) {
        for (var i = 0; i < t.length; i++) {
            var r = t[i];
            o.includes(r) && n.get(r)(e);
        }
    };
    return DefaultGenerateStrategy;
}());
exports.DefaultGenerateStrategy = DefaultGenerateStrategy;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL3Byb2Nlc3MvdGlsZTIvRGVmYXVsdEdlbmVyYXRlU3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUFBO0lBT0EsQ0FBQztJQU5DLHFDQUFHLEdBQUgsVUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQ1osS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDakMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2IsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzlCO0lBQ0gsQ0FBQztJQUNILDhCQUFDO0FBQUQsQ0FQQSxBQU9DLElBQUE7QUFQWSwwREFBdUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgRGVmYXVsdEdlbmVyYXRlU3RyYXRlZ3kge1xuICBydW4oZSwgdCwgbywgbikge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdC5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHIgPSB0W2ldO1xuICAgICAgby5pbmNsdWRlcyhyKSAmJiBuLmdldChyKShlKTtcbiAgICB9XG4gIH1cbn0iXX0=