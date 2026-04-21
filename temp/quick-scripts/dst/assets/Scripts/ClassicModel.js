
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/ClassicModel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'df912szmXdKqL7KqguX/sSd', 'ClassicModel');
// Scripts/ClassicModel.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Model_1 = require("./framework/data/Model");
var ClassicModel = /** @class */ (function (_super) {
    __extends(ClassicModel, _super);
    function ClassicModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClassicModel = __decorate([
        mj.class("ClassicModel")
    ], ClassicModel);
    return ClassicModel;
}(Model_1.default));
exports.default = ClassicModel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0NsYXNzaWNNb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0RBQTJDO0FBRTNDO0lBQTBDLGdDQUFLO0lBQS9DOztJQUFpRCxDQUFDO0lBQTdCLFlBQVk7UUFEaEMsRUFBRSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUM7T0FDSixZQUFZLENBQWlCO0lBQUQsbUJBQUM7Q0FBbEQsQUFBa0QsQ0FBUixlQUFLLEdBQUc7a0JBQTdCLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTW9kZWwgZnJvbSAnLi9mcmFtZXdvcmsvZGF0YS9Nb2RlbCc7XG5AbWouY2xhc3MoXCJDbGFzc2ljTW9kZWxcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENsYXNzaWNNb2RlbCBleHRlbmRzIE1vZGVsIHt9Il19