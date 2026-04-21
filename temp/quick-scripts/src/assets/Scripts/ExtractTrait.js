"use strict";
cc._RF.push(module, 'f1a6bubkXFB7rQbXrZBJcvA', 'ExtractTrait');
// Scripts/ExtractTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("./framework/trait/Trait");
var UserModel_1 = require("./gamePlay/user/UserModel");
var ExtractTrait = /** @class */ (function (_super) {
    __extends(ExtractTrait, _super);
    function ExtractTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtractTrait.prototype.isSupportMode = function (e) {
        var t = this._traitData.gameType || ["Normal", "Travel", "DailyChallenge", "Tile2Normal"];
        return (t = Array.isArray(t) ? t : [t]).includes(e);
    };
    ExtractTrait.prototype.checkGameMode = function () {
        var e = this._traitData.travelActivitys || ["Yoga", "Flip", "Color"], t = UserModel_1.default.getInstance(), o = t.getCurrentGameType(), n = t.getGameDataByGameType(o);
        if (!this.isSupportMode(o))
            return false;
        var i = n && n.getJourneyType ? n.getJourneyType() : null;
        if ("Travel" === o && e && Array.isArray(e) && e.length > 0) {
            if (null == i) {
                "l_cbadYo" == this._traitData.bundle && console.error("【关卡抽取】checkGameMode, gameType=Travel, gameData=" + !!n + ", journeyType=" + i);
                return false;
            }
            var r = this.journeyTypeToString(i);
            if (!r || !e.includes(r))
                return false;
        }
        return true;
    };
    ExtractTrait.prototype.journeyTypeToString = function (e) {
        switch (e) {
            case 1:
                return "Yoga";
            case 2:
                return "Flip";
            case 3:
                return "Color";
            default:
                return "";
        }
    };
    ExtractTrait = __decorate([
        mj.class("ExtractTrait")
    ], ExtractTrait);
    return ExtractTrait;
}(Trait_1.default));
exports.default = ExtractTrait;

cc._RF.pop();