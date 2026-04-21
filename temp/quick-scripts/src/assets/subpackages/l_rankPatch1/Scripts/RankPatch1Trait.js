"use strict";
cc._RF.push(module, 'd8ceazR/T1Bc6vZGW7DJccc', 'RankPatch1Trait');
// subpackages/l_rankPatch1/Scripts/RankPatch1Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var EventDefine_1 = require("../../../Scripts/base/event/EventDefine");
var RankPatch1Trait = /** @class */ (function (_super) {
    __extends(RankPatch1Trait, _super);
    function RankPatch1Trait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._rankTrait = null;
        _this._openActTimer = -1;
        return _this;
    }
    RankPatch1Trait.prototype.onRankTrait_startEnterHall = function (t, e) {
        e();
        this._rankTrait = t.ins;
    };
    RankPatch1Trait.prototype.onRankBtn_updateAll = function (t, e) {
        this._rankTrait, e();
    };
    RankPatch1Trait.prototype.onRankBtn_closeOutCD = function (t, e) {
        var r, n;
        e({
            returnType: TraitManager_1.TraitCallbackReturnType.jump
        });
        this.tryExecuteHomeRankPipeline(null === (n = null === (r = t.ins) || void 0 === r ? void 0 : r.node) || void 0 === n ? void 0 : n.parent);
    };
    RankPatch1Trait.prototype.onRankBtn_finishCD = function (t, e) {
        var r, n;
        e({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return
        });
        this.tryExecuteHomeRankPipeline(null === (n = null === (r = t.ins) || void 0 === r ? void 0 : r.node) || void 0 === n ? void 0 : n.parent);
    };
    RankPatch1Trait.prototype.tryExecuteHomeRankPipeline = function (t, e) {
        var r = this;
        if (UserModel_1.default.getInstance().getCurrentGameType() === GameTypeEnums_1.MjGameType.None) {
            this.clearOpenActTimer();
            this._openActTimer = setTimeout(function () {
                if (r._rankTrait && r.isRankOpen() && r.checkIfOpenNewActivity(r._rankTrait.getRankModel())) {
                    r._rankTrait.executeHomeRankPipeline(t);
                    null == e || e();
                    r.dispatchEvent(EventDefine_1.EVT_MSG_HALL_FORCE_UPDATE);
                    r.clearOpenActTimer();
                }
            }, 1100);
        }
    };
    RankPatch1Trait.prototype.clearOpenActTimer = function () {
        if (-1 !== this._openActTimer) {
            clearTimeout(this._openActTimer);
            this._openActTimer = -1;
        }
    };
    RankPatch1Trait.prototype.checkIfOpenNewActivity = function (t) {
        var e = Date.now();
        return t.localData.curActStartTime < 0 || e >= t.localData.nextActStartTime || Math.abs(t.localData.nextActStartTime - e) < 1100;
    };
    RankPatch1Trait.prototype.onRankModel_checkOpen = function (t, e) {
        var r = t.ins, n = this.checkIfOpenNewActivity(r);
        e({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            returnVal: n
        });
    };
    RankPatch1Trait.prototype.onRankVw_closeOutCD = function (t, e) {
        e({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return
        });
        this.dispatchEvent("msg_removeRankBoxTips");
        var r = t.ins;
        this.tryExecuteHomeRankPipeline(null, function () {
            if (cc.isValid(r)) {
                r.updateLabels();
                r.updateCountdown();
                r.initRank123();
                r.refreshList();
            }
        });
    };
    RankPatch1Trait.prototype.onRankVw_finishCD = function (t, e) {
        e({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return
        });
        this.dispatchEvent("msg_removeRankBoxTips");
        var r = t.ins;
        this.tryExecuteHomeRankPipeline(null, function () {
            if (cc.isValid(r)) {
                r.updateLabels();
                r.updateCountdown();
                r.initRank123();
                r.refreshList();
            }
        });
    };
    RankPatch1Trait.prototype.isRankOpen = function () {
        var t, e;
        return !!this._rankTrait && UserModel_1.default.getInstance().getMainGameData().getLevelId() > ((null === (e = (t = this._rankTrait).getLimitLevel) || void 0 === e ? void 0 : e.call(t)) || 0);
    };
    RankPatch1Trait.traitKey = "RankPatch1";
    RankPatch1Trait = __decorate([
        mj.trait,
        mj.class("RankPatch1Trait")
    ], RankPatch1Trait);
    return RankPatch1Trait;
}(Trait_1.default));
exports.default = RankPatch1Trait;

cc._RF.pop();