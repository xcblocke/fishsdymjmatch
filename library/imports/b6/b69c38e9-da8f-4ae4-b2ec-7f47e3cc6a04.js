"use strict";
cc._RF.push(module, 'b69c3jp2o9K5LLsf0fjzGoE', 'ExtractNormal');
// Scripts/core/dynamicCurve/models/ExtractNormal.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtractNormal = void 0;
var GameTypeEnums_1 = require("../../simulator/constant/GameTypeEnums");
var ExtractModel_1 = require("./ExtractModel");
var ExtractNormal = /** @class */ (function (_super) {
    __extends(ExtractNormal, _super);
    function ExtractNormal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._gameType = GameTypeEnums_1.MjGameType.Normal;
        return _this;
    }
    ExtractNormal = __decorate([
        mj.class("ExtractNormal")
    ], ExtractNormal);
    return ExtractNormal;
}(ExtractModel_1.ExtractModel));
exports.ExtractNormal = ExtractNormal;

cc._RF.pop();