"use strict";
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