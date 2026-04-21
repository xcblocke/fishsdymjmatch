"use strict";
cc._RF.push(module, 'eff7dFb/2FBHY9BuqkkAw2V', 'WatchAdGetPropController');
// subpackages/l_watchAdGetProp/Scripts/WatchAdGetPropController.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameInputEnum_1 = require("../../../Scripts/simulator/constant/GameInputEnum");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var GameUtils_1 = require("../../../Scripts/core/simulator/util/GameUtils");
var GameInteraction_1 = require("../../../Scripts/GameInteraction/GameInteraction");
var ViewController_1 = require("../../../Scripts/framework/controller/ViewController");
var AdManager_1 = require("../../../Scripts/base/ad/AdManager");
var DGameAdShow_1 = require("../../../Scripts/gamePlay/dot/DGameAdShow");
var DGameAdShowStage_1 = require("../../../Scripts/gamePlay/dot/DGameAdShowStage");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var WatchAdGetPropView_1 = require("./WatchAdGetPropView");
var WatchAdGetPropController = /** @class */ (function (_super) {
    __extends(WatchAdGetPropController, _super);
    function WatchAdGetPropController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewClass = WatchAdGetPropView_1.default;
        _this.viewMode = ViewController_1.viewMode.ALERT;
        _this._propType = null;
        return _this;
    }
    WatchAdGetPropController.prototype.getMessageListeners = function () {
        return {};
    };
    WatchAdGetPropController.prototype.getPropType = function () {
        return this._propType;
    };
    WatchAdGetPropController.prototype.viewDidLoad = function () {
        var e;
        _super.prototype.viewDidLoad.call(this);
        this._propType = null === (e = this.args) || void 0 === e ? void 0 : e.type;
        if (null != this._propType)
            this.viewDoAction("setContent", this._propType);
        else {
            console.error("[WatchAdGetPropController] 未传入道具类型");
            this.close();
        }
    };
    WatchAdGetPropController.prototype.refreshForReuse = function (e) {
        _super.prototype.refreshForReuse.call(this, e);
        this._propType = null == e ? void 0 : e.type;
        this.viewDoAction("setContent", this._propType);
    };
    WatchAdGetPropController.prototype.playAd = function () {
        var t, e, r = this;
        if (this._propType === WatchAdGetPropView_1.WatchAdGetPropType.shuffle) {
            t = "watchad_get_shuffle";
            e = DGameAdShow_1.EAdPosition.InGameMotivation_Reshuffle;
        }
        else if (this._propType === WatchAdGetPropView_1.WatchAdGetPropType.hitTips) {
            t = "watchad_get_hint";
            e = DGameAdShow_1.EAdPosition.InGameMotivation_Hint;
        }
        else {
            t = "watchad_get_revert";
            e = DGameAdShow_1.EAdPosition.InGameMotivation_Revert;
        }
        DGameAdShowStage_1.DotGameAdShowStage.dot(false, "clickAdLock");
        AdManager_1.default.getInstance().checkVideoAdIsReady() && cc.isValid(this.rootView) && (this.rootView.opacity = 0);
        AdManager_1.default.getInstance().playVideoAd(e, {
            onSuccess: function () {
                r.onAdSuccess();
            },
            onFailed: function (t) {
                r.onAdFailed(t);
            }
        }, t, {
            type: this._propType
        });
    };
    WatchAdGetPropController.prototype.onAdSuccess = function () {
        cc.isValid(this.rootView) && this.close();
        var t;
        t = this._propType === WatchAdGetPropView_1.WatchAdGetPropType.shuffle ? "shuffle" : this._propType === WatchAdGetPropView_1.WatchAdGetPropType.hitTips ? "hitTips" : "revert";
        var e = UserModel_1.default.getInstance().getCurrentGameType(), r = {
            inputType: GameUtils_1.default.getInputAddPropType(e),
            propType: t,
            num: this.getWatchAdItemNum(t),
            reasonId: GameTypeEnums_1.EGetItemReasonId.AdReward,
            reasonInfo: "游戏内激励广告"
        };
        GameInteraction_1.GameInteraction.input(r);
        this.autoUseItem(t);
    };
    WatchAdGetPropController.prototype.autoUseItem = function (t) {
        var e = UserModel_1.default.getInstance().getCurrentGameType() === GameTypeEnums_1.MjGameType.Tile2Normal;
        if ("shuffle" === t) {
            var r = e ? GameInputEnum_1.EGameInputEnum.Tile2Shuffle : GameInputEnum_1.EGameInputEnum.Shuffle;
            GameInteraction_1.GameInteraction.input({
                inputType: r,
                from: GameInputEnum_1.EShuffleFrom.WatchAd,
                isFree: false
            });
        }
        else if ("hitTips" === t) {
            r = e ? GameInputEnum_1.EGameInputEnum.Tile2HitTips : GameInputEnum_1.EGameInputEnum.HitTips;
            GameInteraction_1.GameInteraction.input({
                inputType: r
            });
        }
        else
            "revert" === t && GameInteraction_1.GameInteraction.input({
                inputType: GameInputEnum_1.EGameInputEnum.Tile2Revert
            });
    };
    WatchAdGetPropController.prototype.getWatchAdItemNum = function (t) {
        if (UserModel_1.default.getInstance().getCurrentGameType() === GameTypeEnums_1.MjGameType.Tile2Normal) {
            if ("shuffle" === t)
                return 1;
            if ("hitTips" === t)
                return 2;
            if ("revert" === t)
                return 2;
        }
        return 1;
    };
    WatchAdGetPropController.prototype.onAdFailed = function (t) {
        this.rootView && cc.isValid(this.rootView) && (t ? cc.isValid(this.rootView) && (this.rootView.opacity = 255) : this.close());
    };
    __decorate([
        mj.traitEvent("WatchAdCtrl_playAd")
    ], WatchAdGetPropController.prototype, "playAd", null);
    __decorate([
        mj.traitEvent("WatchAdCtrl_onAdSuccess")
    ], WatchAdGetPropController.prototype, "onAdSuccess", null);
    __decorate([
        mj.traitEvent("WatchAdCtrl_autoUse")
    ], WatchAdGetPropController.prototype, "autoUseItem", null);
    __decorate([
        mj.traitEvent("WatchAdCtrl_itemNum")
    ], WatchAdGetPropController.prototype, "getWatchAdItemNum", null);
    WatchAdGetPropController = __decorate([
        mj.class("WatchAdGetPropController")
    ], WatchAdGetPropController);
    return WatchAdGetPropController;
}(ViewController_1.default));
exports.default = WatchAdGetPropController;

cc._RF.pop();