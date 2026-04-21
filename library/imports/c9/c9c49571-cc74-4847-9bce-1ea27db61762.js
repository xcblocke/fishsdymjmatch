"use strict";
cc._RF.push(module, 'c9c49VxzHRIR5vOHqJ9thdi', 'WinFullComboOptView');
// subpackages/r_winFullComboOpt/Scripts/WinFullComboOptView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var NormalGameData_1 = require("../../../Scripts/core/simulator/data/NormalGameData");
var I18NStrings_1 = require("../../../Scripts/framework/data/I18NStrings");
var BaseUI_1 = require("../../../Scripts/framework/ui/BaseUI");
var BaseSpine_1 = require("../../../Scripts/gamePlay/base/ui/BaseSpine");
var VibrateManager_1 = require("../../../Scripts/gamePlay/base/vibrate/VibrateManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var WinFullComboOptView = /** @class */ (function (_super) {
    __extends(WinFullComboOptView, _super);
    function WinFullComboOptView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lbScore = null;
        _this.lbTitleFullCombo = null;
        _this.spineScore = null;
        _this.nodeTitleNormal = null;
        _this.isShown = false;
        _this._score = 0;
        _this._settlementScore = 0;
        return _this;
    }
    WinFullComboOptView_1 = WinFullComboOptView;
    WinFullComboOptView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.initComponents();
        this.initNodeStates();
    };
    WinFullComboOptView.prototype.showFullComboUI = function (e, t) {
        var i;
        if (!this.isShown) {
            var o = e.data;
            this._score = o.score;
            this._settlementScore = o.settlementScore;
            this.nodeTitleNormal = t.getChildByName("lbl_scoreDec");
            this.lbScore = null === (i = t.getChildByName("lbl_score")) || void 0 === i ? void 0 : i.getComponent(cc.Label);
            this.spineScore && this.lbScore && (this.spineScore.node.y = this.lbScore.node.y);
            this.lbTitleFullCombo && I18NStrings_1.default.setText(this.lbTitleFullCombo.node, "", this.getTitleKey());
            this.isShown = true;
            this.playEnterAnimation();
        }
    };
    WinFullComboOptView.prototype.getTitleKey = function () {
        return UserModel_1.default.getInstance().getCurrentGameType() === GameTypeEnums_1.MjGameType.Tile2Normal ? "TILE_FullCombo" : NormalGameData_1.default.getInstance().getHasTriggeredFullCombo() ? "TILE_FullCombo" : "MahjongTiles_EpicPlay";
    };
    WinFullComboOptView.prototype.initComponents = function () {
        this.spineScore && this.initSpineScore();
    };
    WinFullComboOptView.prototype.initSpineScore = function () {
        var e = this;
        this.animProxy = BaseSpine_1.default.refreshWithNode(this.spineScore.node);
        this.animProxy.reset("");
        this.animProxy.markReady("");
        this.animProxy.attachNode("hook_txt", function () {
            return e.lbTitleFullCombo.node;
        });
    };
    WinFullComboOptView.prototype.initNodeStates = function () {
        this.lbTitleFullCombo && (this.lbTitleFullCombo.node.opacity = 0);
        this.lbScore && (this.lbScore.node.opacity = 255);
    };
    WinFullComboOptView.prototype.playEnterAnimation = function () {
        this.playSpine();
        this.playVibrateBombo();
        this.playTitleAnimation();
        this.playTitleNormalAnimation();
        this.playScoreAnimation();
    };
    WinFullComboOptView.prototype.playVibrateBombo = function () {
        var e = this;
        this.scheduleOnce(function () {
            cc.isValid(e.animProxy) && VibrateManager_1.default.executeVibrate(VibrateManager_1.EVibrateStrength.Strong, VibrateManager_1.EVibratePoint.Tile2WinViewBomb);
        }, 1.93);
    };
    WinFullComboOptView.prototype.playSpine = function () {
        var e = this;
        this.animProxy && this.animProxy.setAnimation("in", 1, function () {
            e.animProxy && e.animProxy.setAnimation("init", -1);
        });
    };
    WinFullComboOptView.prototype.playTitleAnimation = function () {
        this.lbTitleFullCombo && cc.tween(this.lbTitleFullCombo.node).delay(1.73).to(0.2, {
            opacity: 255
        }, {
            easing: cc.easing.sineInOut
        }).start();
    };
    WinFullComboOptView.prototype.playTitleNormalAnimation = function () {
        this.nodeTitleNormal && cc.tween(this.nodeTitleNormal).delay(1.73).to(0.2, {
            opacity: 0
        }, {
            easing: cc.easing.sineInOut
        }).start();
    };
    WinFullComboOptView.prototype.playScoreAnimation = function () {
        var e = this;
        if (this.lbScore && this._settlementScore > this._score) {
            this.lbScore.string = this._score.toString();
            this.scheduleOnce(function () {
                var t = e._score, o = e._settlementScore, r = WinFullComboOptView_1.SCORE_SCROLL_DURATION, n = 0, s = function s(i) {
                    n += i;
                    var l = Math.min(n / r, 1), a = cc.easing.sineOut(l), _ = Math.floor(t + (o - t) * a);
                    e.lbScore.string = _.toString();
                    if (l >= 1) {
                        e.unschedule(s);
                        e.lbScore.string = o.toString();
                    }
                };
                e.schedule(s, 0);
            }, 2.67);
        }
    };
    WinFullComboOptView.prototype.onDestroy = function () {
        this.unscheduleAllCallbacks();
        cc.Tween.stopAllByTarget(this.node);
        this.lbTitleFullCombo && cc.Tween.stopAllByTarget(this.lbTitleFullCombo);
        this.lbScore && cc.Tween.stopAllByTarget(this.lbScore);
        _super.prototype.onDestroy && _super.prototype.onDestroy.call(this);
    };
    var WinFullComboOptView_1;
    WinFullComboOptView.prefabUrl = "prefabs/WinFullComboOptView";
    WinFullComboOptView.bundleName = "r_winFullComboOpt";
    WinFullComboOptView.SCORE_SCROLL_DURATION = 0.5;
    __decorate([
        mj.component("lb_title", cc.Label)
    ], WinFullComboOptView.prototype, "lbTitleFullCombo", void 0);
    __decorate([
        mj.component("spine_score", sp.Skeleton)
    ], WinFullComboOptView.prototype, "spineScore", void 0);
    __decorate([
        mj.traitEvent("WinFullComboOpt_getKey")
    ], WinFullComboOptView.prototype, "getTitleKey", null);
    WinFullComboOptView = WinFullComboOptView_1 = __decorate([
        mj.class
    ], WinFullComboOptView);
    return WinFullComboOptView;
}(BaseUI_1.default));
exports.default = WinFullComboOptView;

cc._RF.pop();