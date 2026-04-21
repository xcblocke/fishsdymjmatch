
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/core/dynamicCurve/models/ExtractTravel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5db8buct2tFzKc07um/Tozp', 'ExtractTravel');
// Scripts/core/dynamicCurve/models/ExtractTravel.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtractTravel = void 0;
var GameTypeEnums_1 = require("../../simulator/constant/GameTypeEnums");
var ExtractModel_1 = require("./ExtractModel");
var ExtractTravel = /** @class */ (function (_super) {
    __extends(ExtractTravel, _super);
    function ExtractTravel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._gameType = GameTypeEnums_1.MjGameType.Travel;
        return _this;
    }
    ExtractTravel = __decorate([
        mj.class("ExtractTravel")
    ], ExtractTravel);
    return ExtractTravel;
}(ExtractModel_1.ExtractModel));
exports.ExtractTravel = ExtractTravel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2NvcmUvZHluYW1pY0N1cnZlL21vZGVscy9FeHRyYWN0VHJhdmVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0VBQW9FO0FBQ3BFLCtDQUE4QztBQUU5QztJQUFtQyxpQ0FBWTtJQUEvQztRQUFBLHFFQUVDO1FBREMsZUFBUyxHQUFHLDBCQUFVLENBQUMsTUFBTSxDQUFDOztJQUNoQyxDQUFDO0lBRlksYUFBYTtRQUR6QixFQUFFLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQztPQUNiLGFBQWEsQ0FFekI7SUFBRCxvQkFBQztDQUZELEFBRUMsQ0FGa0MsMkJBQVksR0FFOUM7QUFGWSxzQ0FBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1qR2FtZVR5cGUgfSBmcm9tICcuLi8uLi9zaW11bGF0b3IvY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG5pbXBvcnQgeyBFeHRyYWN0TW9kZWwgfSBmcm9tICcuL0V4dHJhY3RNb2RlbCc7XG5AbWouY2xhc3MoXCJFeHRyYWN0VHJhdmVsXCIpXG5leHBvcnQgY2xhc3MgRXh0cmFjdFRyYXZlbCBleHRlbmRzIEV4dHJhY3RNb2RlbCB7XG4gIF9nYW1lVHlwZSA9IE1qR2FtZVR5cGUuVHJhdmVsO1xufSJdfQ==