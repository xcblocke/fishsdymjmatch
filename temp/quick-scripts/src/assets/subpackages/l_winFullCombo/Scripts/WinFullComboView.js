"use strict";
cc._RF.push(module, 'd0a0a9Lgo5ICJzW/vd6NP16', 'WinFullComboView');
// subpackages/l_winFullCombo/Scripts/WinFullComboView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var NormalGameData_1 = require("../../../Scripts/core/simulator/data/NormalGameData");
var I18NStrings_1 = require("../../../Scripts/framework/data/I18NStrings");
var BaseUI_1 = require("../../../Scripts/framework/ui/BaseUI");
var BaseSpine_1 = require("../../../Scripts/gamePlay/base/ui/BaseSpine");
var WinFullComboView = /** @class */ (function (_super) {
    __extends(WinFullComboView, _super);
    function WinFullComboView() {
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
    WinFullComboView_1 = WinFullComboView;
    WinFullComboView.prototype.showFullComboUI = function (t, e) {
        var o;
        if (!this.isShown) {
            var i = t.data;
            this._score = i.score;
            this._settlementScore = i.settlementScore;
            this.nodeTitleNormal = e.getChildByName("lbl_scoreDec");
            this.lbScore = null === (o = e.getChildByName("lbl_score")) || void 0 === o ? void 0 : o.getComponent(cc.Label);
            this.lbTitleFullCombo && (NormalGameData_1.default.getInstance().getHasTriggeredFullCombo() ? I18NStrings_1.default.setText(this.lbTitleFullCombo.node, "", "TILE_FullCombo") : I18NStrings_1.default.setText(this.lbTitleFullCombo.node, "", "MahjongTiles_EpicPlay"));
            this.isShown = true;
            this.playEnterAnimation();
        }
    };
    WinFullComboView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.initComponents();
        this.initNodeStates();
    };
    WinFullComboView.prototype.initComponents = function () {
        this.spineScore && this.initSpineScore();
    };
    WinFullComboView.prototype.initSpineScore = function () {
        var t = this;
        this.animProxy = BaseSpine_1.default.refreshWithNode(this.spineScore.node);
        this.animProxy.reset("");
        this.animProxy.markReady("");
        this.animProxy.attachNode("hook_txt", function () {
            return t.lbTitleFullCombo.node;
        });
    };
    WinFullComboView.prototype.initNodeStates = function () {
        this.lbTitleFullCombo && (this.lbTitleFullCombo.node.opacity = 0);
        this.lbScore && (this.lbScore.node.opacity = 255);
    };
    WinFullComboView.prototype.playEnterAnimation = function () {
        this.playSpine();
        this.playTitleAnimation();
        this.playTitleNormalAnimation();
        this.playScoreAnimation();
    };
    WinFullComboView.prototype.playSpine = function () {
        var t = this;
        this.animProxy && this.animProxy.setAnimation("in", 1, function () {
            t.animProxy && t.animProxy.setAnimation("init", -1);
        });
    };
    WinFullComboView.prototype.playTitleAnimation = function () {
        this.lbTitleFullCombo && cc.tween(this.lbTitleFullCombo.node).delay(1.73).to(0.2, {
            opacity: 255
        }, {
            easing: cc.easing.sineInOut
        }).start();
    };
    WinFullComboView.prototype.playTitleNormalAnimation = function () {
        this.nodeTitleNormal && cc.tween(this.nodeTitleNormal).delay(1.73).to(0.2, {
            opacity: 0
        }, {
            easing: cc.easing.sineInOut
        }).start();
    };
    WinFullComboView.prototype.playScoreAnimation = function () {
        var t = this;
        if (this.lbScore && this._settlementScore > this._score) {
            this.lbScore.string = this._score.toString();
            this.scheduleOnce(function () {
                var e = t._score, i = t._settlementScore, r = WinFullComboView_1.SCORE_SCROLL_DURATION, n = 0, l = function l(o) {
                    n += o;
                    var a = Math.min(n / r, 1), s = cc.easing.sineOut(a), c = Math.floor(e + (i - e) * s);
                    t.lbScore.string = c.toString();
                    if (a >= 1) {
                        t.unschedule(l);
                        t.lbScore.string = i.toString();
                    }
                };
                t.schedule(l, 0);
            }, 2.67);
        }
    };
    WinFullComboView.prototype.onDestroy = function () {
        this.unscheduleAllCallbacks();
        cc.Tween.stopAllByTarget(this.node);
        this.lbTitleFullCombo && cc.Tween.stopAllByTarget(this.lbTitleFullCombo);
        this.lbScore && cc.Tween.stopAllByTarget(this.lbScore);
        _super.prototype.onDestroy && _super.prototype.onDestroy.call(this);
    };
    var WinFullComboView_1;
    WinFullComboView.prefabUrl = "prefabs/ui/WinFullComboView";
    WinFullComboView.SCORE_SCROLL_DURATION = 0.5;
    __decorate([
        mj.component("lb_title", cc.Label)
    ], WinFullComboView.prototype, "lbTitleFullCombo", void 0);
    __decorate([
        mj.component("spine_score", sp.Skeleton)
    ], WinFullComboView.prototype, "spineScore", void 0);
    WinFullComboView = WinFullComboView_1 = __decorate([
        mj.class
    ], WinFullComboView);
    return WinFullComboView;
}(BaseUI_1.default));
exports.default = WinFullComboView;

cc._RF.pop();