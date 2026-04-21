"use strict";
cc._RF.push(module, 'f34d8HRaolKiptWx4RddZx9', 'ColdStartBoardResetTrait');
// subpackages/l_coldStartBoardReset/Scripts/ColdStartBoardResetTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var GameInteraction_1 = require("../../../Scripts/GameInteraction/GameInteraction");
var GameInputEnum_1 = require("../../../Scripts/simulator/constant/GameInputEnum");
var ColdStartBoardResetTrait = /** @class */ (function (_super) {
    __extends(ColdStartBoardResetTrait, _super);
    function ColdStartBoardResetTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._timeHours = 24;
        _this._lastQuitAppTime = 0;
        _this._useRestart = false;
        _this._shouldReset = false;
        return _this;
    }
    ColdStartBoardResetTrait_1 = ColdStartBoardResetTrait;
    ColdStartBoardResetTrait.prototype.onLoad = function () {
        var e;
        _super.prototype.onLoad.call(this);
        this._timeHours = void 0 !== this._traitData.timeHours ? this._traitData.timeHours : 0;
        this._useRestart = true === this._traitData.useRestart;
        var r = UserModel_1.default.getInstance().normalData;
        this._lastQuitAppTime = (null === (e = r.localData) || void 0 === e ? void 0 : e.lastUpdateTime) || 0;
    };
    ColdStartBoardResetTrait.prototype.onLoginM_enterGame = function (t, e) {
        if (this.shouldResetBoard()) {
            if (this._useRestart) {
                this._shouldReset = true;
            }
            else {
                this.resetBoardData();
            }
            e();
        }
        else
            e();
    };
    ColdStartBoardResetTrait.prototype.onIptInitView_pushEff = function (t, e) {
        if (this._useRestart && this._shouldReset) {
            if (this.isNormalGameType()) {
                GameInteraction_1.GameInteraction.input({
                    inputType: GameInputEnum_1.EGameInputEnum.Restart,
                    dieResult: 0
                });
                this._shouldReset = false;
            }
            e();
        }
        else
            e();
    };
    ColdStartBoardResetTrait.prototype.shouldResetBoard = function () {
        try {
            var t = UserModel_1.default.getInstance().normalData.getLevelData();
            if (!t || "" === t)
                return false;
            if (0 === this._timeHours)
                return true;
            var e = this._lastQuitAppTime || 0;
            return !!e && !(Date.now() - e < 3600000 * this._timeHours);
        }
        catch (t) {
            console.error("[" + ColdStartBoardResetTrait_1.traitKey + "] 检查重置条件异常: " + t.message);
            return false;
        }
    };
    ColdStartBoardResetTrait.prototype.resetBoardData = function () {
        try {
            UserModel_1.default.getInstance().normalData.resetGameData();
        }
        catch (t) {
            console.error("[" + ColdStartBoardResetTrait_1.traitKey + "] 重置牌局数据异常: " + t.message);
        }
    };
    ColdStartBoardResetTrait.prototype.isNormalGameType = function () {
        return UserModel_1.default.getInstance().getCurrentGameType() === GameTypeEnums_1.MjGameType.Normal;
    };
    var ColdStartBoardResetTrait_1;
    ColdStartBoardResetTrait.traitKey = "ColdStartBoardReset";
    ColdStartBoardResetTrait = ColdStartBoardResetTrait_1 = __decorate([
        mj.trait,
        mj.class("ColdStartBoardResetTrait")
    ], ColdStartBoardResetTrait);
    return ColdStartBoardResetTrait;
}(Trait_1.default));
exports.default = ColdStartBoardResetTrait;

cc._RF.pop();