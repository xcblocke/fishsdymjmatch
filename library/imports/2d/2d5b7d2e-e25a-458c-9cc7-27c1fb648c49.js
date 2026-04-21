"use strict";
cc._RF.push(module, '2d5b70u4lpFjJzHJ8H7ZIxJ', 'NormalNewRecordUI');
// subpackages/r_normalNewRecord/Scripts/NormalNewRecordUI.ts

Object.defineProperty(exports, "__esModule", { value: true });
var NormalGameData_1 = require("../../../Scripts/core/simulator/data/NormalGameData");
var I18NStrings_1 = require("../../../Scripts/framework/data/I18NStrings");
var BaseUI_1 = require("../../../Scripts/framework/ui/BaseUI");
var BaseSpine_1 = require("../../../Scripts/gamePlay/base/ui/BaseSpine");
var NormalNewRecordUI = /** @class */ (function (_super) {
    __extends(NormalNewRecordUI, _super);
    function NormalNewRecordUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lbTitleNode = null;
        _this.spineNode = null;
        _this.lbScoreOriginal = null;
        _this.lbTitleOriginal = null;
        return _this;
    }
    NormalNewRecordUI_1 = NormalNewRecordUI;
    NormalNewRecordUI.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.initComponents();
        this.tryPlayAction();
    };
    NormalNewRecordUI.prototype.tryPlayAction = function () {
        this.node.opacity = 255;
        this.playEnterAnimation();
    };
    NormalNewRecordUI.prototype.initComponents = function () {
        var e, t = this;
        this.lbTitleNode = this.node.getChildByName("lb_title");
        this.spineNode = this.node.getChildByName("spine_score");
        this.animProxy = BaseSpine_1.default.refreshWithNode(this.spineNode);
        this.animProxy.markReady("");
        this.animProxy.attachNode("hook_txt", function () {
            return t.lbTitleNode;
        });
        this.node.opacity = 0;
        this.lbTitleNode.opacity = 0;
        var r = this.node.parent;
        this.lbTitleOriginal = r.getChildByName("lbl_scoreDec");
        this.lbScoreOriginal = null === (e = r.getChildByName("lbl_score")) || void 0 === e ? void 0 : e.getComponent(cc.Label);
        I18NStrings_1.default.setText(this.lbTitleNode, "New Record!", "Mahjong_NewRecord");
    };
    NormalNewRecordUI.prototype.canScoreRoll = function () {
        return true;
    };
    NormalNewRecordUI.prototype.playEnterAnimation = function () {
        this.playSpine();
        this.playTitleAnimation();
        this.playTitleNormalAnimation();
        this.playScoreAnimation();
    };
    NormalNewRecordUI.prototype.playSpine = function () {
        var e = this;
        this.animProxy && this.animProxy.setAnimation("in", 1, function () {
            e.animProxy && e.animProxy.setAnimation("init", -1);
        });
    };
    NormalNewRecordUI.prototype.playTitleAnimation = function () {
        cc.isValid(this.lbTitleNode) && cc.tween(this.lbTitleNode).delay(1.73).to(0.2, {
            opacity: 255
        }, {
            easing: cc.easing.sineInOut
        }).start();
    };
    NormalNewRecordUI.prototype.playTitleNormalAnimation = function () {
        this.lbTitleOriginal && cc.tween(this.lbTitleOriginal).delay(1.73).to(0.2, {
            opacity: 0
        }, {
            easing: cc.easing.sineInOut
        }).start();
    };
    NormalNewRecordUI.prototype.playScoreAnimation = function () {
        var e = this;
        if (this.lbScoreOriginal) {
            var t = NormalGameData_1.default.getInstance().getPreBestScore(), o = NormalGameData_1.default.getInstance().getMaxScore();
            if (this.canScoreRoll()) {
                this.lbScoreOriginal.string = t.toString();
                this.scheduleOnce(function () {
                    var i = t, n = o, a = NormalNewRecordUI_1.SCORE_SCROLL_DURATION, s = 0, c = function c(t) {
                        s += t;
                        var r = Math.min(s / a, 1), o = cc.easing.sineOut(r), l = Math.floor(i + (n - i) * o);
                        e.lbScoreOriginal.string = l.toString();
                        if (r >= 1) {
                            e.unschedule(c);
                            e.lbScoreOriginal.string = n.toString();
                        }
                    };
                    e.schedule(c, 0);
                }, 2.67);
            }
        }
    };
    NormalNewRecordUI.prototype.onDestroy = function () {
        this.unscheduleAllCallbacks();
        cc.Tween.stopAllByTarget(this.node);
        cc.isValid(this.lbTitleNode) && cc.Tween.stopAllByTarget(this.lbTitleNode);
        cc.isValid(this.lbScoreOriginal) && cc.Tween.stopAllByTarget(this.lbScoreOriginal);
        _super.prototype.onDestroy && _super.prototype.onDestroy.call(this);
    };
    var NormalNewRecordUI_1;
    NormalNewRecordUI.prefabUrl = "prefabs/ui/WinFullComboView";
    NormalNewRecordUI.SCORE_SCROLL_DURATION = 0.5;
    __decorate([
        mj.traitEvent("NorNewRrdUI_canRoll")
    ], NormalNewRecordUI.prototype, "canScoreRoll", null);
    NormalNewRecordUI = NormalNewRecordUI_1 = __decorate([
        mj.class
    ], NormalNewRecordUI);
    return NormalNewRecordUI;
}(BaseUI_1.default));
exports.default = NormalNewRecordUI;

cc._RF.pop();