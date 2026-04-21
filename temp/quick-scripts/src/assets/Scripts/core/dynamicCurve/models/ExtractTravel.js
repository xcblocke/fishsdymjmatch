"use strict";
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