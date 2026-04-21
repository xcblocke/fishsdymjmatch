"use strict";
cc._RF.push(module, 'e2826oOFJpA8ZOsR2UmAqV+', 'RankEndSequenceTrait');
// subpackages/l_rankSynXingyun/Scripts/RankEndSequenceTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var GameUtils_1 = require("../../../Scripts/core/simulator/util/GameUtils");
var ControllerManager_1 = require("../../../Scripts/framework/manager/ControllerManager");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var RankEndSequenceTrait = /** @class */ (function (_super) {
    __extends(RankEndSequenceTrait, _super);
    function RankEndSequenceTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rankDataUsed = {};
        _this.introViewIns = null;
        return _this;
    }
    RankEndSequenceTrait.prototype.getMessageListeners = function () {
        return {
            RankBoxVw_destroy: this.onRankBoxVwDestroy.bind(this)
        };
    };
    RankEndSequenceTrait.prototype.isInGameScene = function () {
        return GameTypeEnums_1.MjGameType.None != UserModel_1.default.getInstance().getCurrentGameType();
    };
    RankEndSequenceTrait.prototype.onRankBoxVwDestroy = function () {
        var t, e, r = null === (e = null === (t = this.introViewIns) || void 0 === t ? void 0 : t.delegate) || void 0 === e ? void 0 : e.rootView;
        this.isInGameScene() || ControllerManager_1.default.getInstance().pushViewByController("RankController", {
            isReuse: true,
            isShowAction: false
        });
        if (cc.isValid(r)) {
            r.opacity = 255;
            var n = this.introViewIns.node;
            cc.Tween.stopAllByTarget(n);
            var o = n.getComponent(cc.Widget);
            o.enabled = false;
            n.scale = 0.8;
            cc.tween(n).to(0.1, {
                scale: 1
            }).call(function () {
                cc.isValid(n) && (o.enabled = true);
            }).start();
        }
    };
    RankEndSequenceTrait.prototype.onRankIntroVw_show = function (t, e) {
        if ("prefabs/rank/RankBoxView" == ControllerManager_1.default.getInstance().getTopViewControllerIncludingAlerts().viewClass.getUrl()) {
            this.introViewIns = t.ins;
            this.introViewIns.delegate.rootView.opacity = 0;
        }
        e();
    };
    RankEndSequenceTrait.prototype.onRankBoxVw_show = function (t, e) {
        t.ins.setBgOpacity(118);
        e();
    };
    RankEndSequenceTrait.prototype.onRankBoxCtrl_initRes = function (t, e) {
        var r = mj.getClassByName("RankModel");
        if (r) {
            var n = r.getInstance();
            this.rankDataUsed.selfRank = n.getSelfRank();
            this.rankDataUsed.boardData = GameUtils_1.default.deepClone(n.getCurBoardData());
            this.rankDataUsed.rankList = GameUtils_1.default.deepClone(n.getRankList(true) || []);
            this.isInGameScene() || ControllerManager_1.default.getInstance().pushViewByController("RankController", {
                isReuse: true,
                isShowAction: false,
                isOldData: true
            });
            e();
        }
        else
            e();
    };
    RankEndSequenceTrait.prototype.onRankVw_getLeftTime = function (t, e) {
        if (t.ins._isOldData) {
            e({
                isBreak: true,
                returnType: TraitCallbackReturnType.return,
                returnVal: 0
            });
        }
        else {
            e();
        }
    };
    RankEndSequenceTrait.prototype.onRankVw_getSelfRank = function (t, e) {
        if (t.ins._isOldData) {
            e({
                isBreak: true,
                returnType: TraitCallbackReturnType.return,
                returnVal: this.rankDataUsed.selfRank
            });
        }
        else {
            e();
        }
    };
    RankEndSequenceTrait.prototype.onRankVw_getRankList = function (t, e) {
        if (t.ins._isOldData) {
            e({
                isBreak: true,
                returnType: TraitCallbackReturnType.return,
                returnVal: this.rankDataUsed.rankList
            });
        }
        else {
            e();
        }
    };
    RankEndSequenceTrait.prototype.onRankVw_getBoardData = function (t, e) {
        if (t.ins._isOldData) {
            e({
                isBreak: true,
                returnType: TraitCallbackReturnType.return,
                returnVal: this.rankDataUsed.boardData
            });
        }
        else {
            e();
        }
    };
    RankEndSequenceTrait.prototype.onRankVw_closeOutCD = function (t, e) {
        if (t.ins._isOldData) {
            e({
                isBreak: true,
                returnType: TraitCallbackReturnType.return
            });
            t.ins.setTimeString();
        }
        else
            e();
    };
    RankEndSequenceTrait.traitKey = "RankEndSequence";
    RankEndSequenceTrait = __decorate([
        mj.trait,
        mj.class("RankEndSequenceTrait")
    ], RankEndSequenceTrait);
    return RankEndSequenceTrait;
}(Trait_1.default));
exports.default = RankEndSequenceTrait;

cc._RF.pop();