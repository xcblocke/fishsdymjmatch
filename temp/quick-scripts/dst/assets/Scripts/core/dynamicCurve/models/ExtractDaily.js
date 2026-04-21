
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/core/dynamicCurve/models/ExtractDaily.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a8b86mkzbtKtruw9UdNsLT6', 'ExtractDaily');
// Scripts/core/dynamicCurve/models/ExtractDaily.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtractDaily = void 0;
var GameTypeEnums_1 = require("../../simulator/constant/GameTypeEnums");
var ExtractModel_1 = require("./ExtractModel");
var ExtractDaily = /** @class */ (function (_super) {
    __extends(ExtractDaily, _super);
    function ExtractDaily() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._gameType = GameTypeEnums_1.MjGameType.DailyChallenge;
        return _this;
    }
    ExtractDaily = __decorate([
        mj.class("ExtractDaily")
    ], ExtractDaily);
    return ExtractDaily;
}(ExtractModel_1.ExtractModel));
exports.ExtractDaily = ExtractDaily;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2NvcmUvZHluYW1pY0N1cnZlL21vZGVscy9FeHRyYWN0RGFpbHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3RUFBb0U7QUFDcEUsK0NBQThDO0FBRTlDO0lBQWtDLGdDQUFZO0lBQTlDO1FBQUEscUVBRUM7UUFEQyxlQUFTLEdBQUcsMEJBQVUsQ0FBQyxjQUFjLENBQUM7O0lBQ3hDLENBQUM7SUFGWSxZQUFZO1FBRHhCLEVBQUUsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDO09BQ1osWUFBWSxDQUV4QjtJQUFELG1CQUFDO0NBRkQsQUFFQyxDQUZpQywyQkFBWSxHQUU3QztBQUZZLG9DQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWpHYW1lVHlwZSB9IGZyb20gJy4uLy4uL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbmltcG9ydCB7IEV4dHJhY3RNb2RlbCB9IGZyb20gJy4vRXh0cmFjdE1vZGVsJztcbkBtai5jbGFzcyhcIkV4dHJhY3REYWlseVwiKVxuZXhwb3J0IGNsYXNzIEV4dHJhY3REYWlseSBleHRlbmRzIEV4dHJhY3RNb2RlbCB7XG4gIF9nYW1lVHlwZSA9IE1qR2FtZVR5cGUuRGFpbHlDaGFsbGVuZ2U7XG59Il19