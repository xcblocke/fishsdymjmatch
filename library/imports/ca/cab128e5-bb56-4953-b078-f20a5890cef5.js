"use strict";
cc._RF.push(module, 'cab12jlu1ZJU7B48gpYkM71', 'WinOptimize1View');
// subpackages/r_winOptimize1/Scripts/WinOptimize1View.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseUI_1 = require("../../../Scripts/framework/ui/BaseUI");
var CommonUtils_1 = require("../../../Scripts/framework/utils/CommonUtils");
var WinOptimize1View = /** @class */ (function (_super) {
    __extends(WinOptimize1View, _super);
    function WinOptimize1View() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.spineVictory = null;
        _this.spineScore = null;
        _this.lblTitleOpt = null;
        _this.isShown = false;
        return _this;
    }
    WinOptimize1View.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    WinOptimize1View.prototype.showUI = function (t) {
        if (!this.isShown) {
            this.isShown = true;
            var i = this.getTitleNode(t);
            if (i) {
                this.hideOriginalSpine(t);
                this.setTitle(i);
                this.alignSpineScore(t);
                this.playSpineAnimation();
                this.playTitleAnimation();
            }
        }
    };
    WinOptimize1View.prototype.playTitleAnimation = function () {
        if (this.lblTitleOpt && cc.isValid(this.lblTitleOpt.node)) {
            this.lblTitleOpt.node.scale = 1.8;
            this.lblTitleOpt.node.opacity = 0;
            this.lblTitleOpt.node.stopAllActions();
            cc.tween(this.lblTitleOpt.node).to(0.2, {
                scale: 0.7
            }, {
                easing: cc.easing.sineInOut
            }).to(0.13, {
                scale: 1.05
            }, {
                easing: cc.easing.sineInOut
            }).to(0.1, {
                scale: 1
            }, {
                easing: cc.easing.quadIn
            }).start();
            cc.tween(this.lblTitleOpt.node).to(0.43, {
                opacity: 255
            }).start();
        }
    };
    WinOptimize1View.prototype.alignSpineScore = function (t) {
        if (cc.isValid(t) && cc.isValid(this.spineScore)) {
            var i = t.getChildByName("lbl_score");
            cc.isValid(i) && (this.spineScore.node.y = i.y);
        }
    };
    WinOptimize1View.prototype.playSpineAnimation = function () {
        var t = this;
        this.spineVictory && CommonUtils_1.playSpineAnim(this.spineVictory, 1, "in_1", function () {
            CommonUtils_1.playSpineAnim(t.spineVictory, -1, "init");
        });
        this.spineScore && CommonUtils_1.playSpineAnim(this.spineScore, 1, "in_2");
    };
    WinOptimize1View.prototype.hideOriginalSpine = function (t) {
        if (cc.isValid(t)) {
            var i = t.getChildByName("spin_wellDone");
            cc.isValid(i) && (i.active = false);
            var e = t.getChildByName("light_node");
            cc.isValid(e) && (e.active = false);
        }
    };
    WinOptimize1View.prototype.getTitleNode = function (t) {
        if (!cc.isValid(t))
            return null;
        var i = t.getChildByName("lbl_title");
        return cc.isValid(i) ? i : null;
    };
    WinOptimize1View.prototype.setTitle = function (t) {
        var i = t.getComponent(cc.Label);
        if (i) {
            t.active = false;
            cc.isValid(this.lblTitleOpt) && (this.lblTitleOpt.string = i.string);
        }
    };
    WinOptimize1View.prototype.onDestroy = function () {
        var i;
        _super.prototype.onDestroy.call(this);
        cc.isValid(null === (i = this.lblTitleOpt) || void 0 === i ? void 0 : i.node) && this.lblTitleOpt.node.stopAllActions();
        this.isShown = false;
    };
    WinOptimize1View.prefabUrl = "prefabs/WinOptimize1";
    WinOptimize1View.bundleName = "r_winOptimize1";
    __decorate([
        mj.component("spine_victory", sp.Skeleton)
    ], WinOptimize1View.prototype, "spineVictory", void 0);
    __decorate([
        mj.component("spine_score", sp.Skeleton)
    ], WinOptimize1View.prototype, "spineScore", void 0);
    __decorate([
        mj.component("lb_title_opt", cc.Label)
    ], WinOptimize1View.prototype, "lblTitleOpt", void 0);
    WinOptimize1View = __decorate([
        mj.class
    ], WinOptimize1View);
    return WinOptimize1View;
}(BaseUI_1.default));
exports.default = WinOptimize1View;

cc._RF.pop();