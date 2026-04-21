
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/MainGameModel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '016c6gZCSZCE5RrA8XT+5Dw', 'MainGameModel');
// Scripts/MainGameModel.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Model_1 = require("./framework/data/Model");
var MainGameModel = /** @class */ (function (_super) {
    __extends(MainGameModel, _super);
    function MainGameModel() {
        var _this = _super.call(this) || this;
        _this.localData.version = "1.0.0";
        return _this;
    }
    MainGameModel = __decorate([
        mj.class("MainGameModel")
    ], MainGameModel);
    return MainGameModel;
}(Model_1.default));
exports.default = MainGameModel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL01haW5HYW1lTW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdEQUEyQztBQUUzQztJQUEyQyxpQ0FBSztJQUM5QztRQUFBLFlBQ0UsaUJBQU8sU0FFUjtRQURDLEtBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQzs7SUFDbkMsQ0FBQztJQUprQixhQUFhO1FBRGpDLEVBQUUsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDO09BQ0wsYUFBYSxDQUtqQztJQUFELG9CQUFDO0NBTEQsQUFLQyxDQUwwQyxlQUFLLEdBSy9DO2tCQUxvQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vZGVsIGZyb20gJy4vZnJhbWV3b3JrL2RhdGEvTW9kZWwnO1xuQG1qLmNsYXNzKFwiTWFpbkdhbWVNb2RlbFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbkdhbWVNb2RlbCBleHRlbmRzIE1vZGVsIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmxvY2FsRGF0YS52ZXJzaW9uID0gXCIxLjAuMFwiO1xuICB9XG59Il19