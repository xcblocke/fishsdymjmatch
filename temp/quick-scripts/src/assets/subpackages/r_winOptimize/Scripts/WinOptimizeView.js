"use strict";
cc._RF.push(module, '098b3mErTxGEbtudy5UIaoz', 'WinOptimizeView');
// subpackages/r_winOptimize/Scripts/WinOptimizeView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseUI_1 = require("../../../Scripts/framework/ui/BaseUI");
var WinOptimizeView = /** @class */ (function (_super) {
    __extends(WinOptimizeView, _super);
    function WinOptimizeView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.spineVictory = null;
        _this.lblTitleOpt = null;
        _this.isShown = false;
        return _this;
    }
    WinOptimizeView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    WinOptimizeView.prototype.showUI = function (t) {
        if (!this.isShown) {
            this.isShown = true;
            var e = this.getTitleNode(t);
            if (e) {
                this.setTitle(e);
                this.playSpineAnimation();
                this.playTitleAnimation();
            }
        }
    };
    WinOptimizeView.prototype.playTitleAnimation = function () {
        if (this.lblTitleOpt && cc.isValid(this.lblTitleOpt.node)) {
            this.lblTitleOpt.node.opacity = 255;
            this.lblTitleOpt.node.scale = 0;
            this.lblTitleOpt.node.stopAllActions();
            cc.tween(this.lblTitleOpt.node).delay(0.2).to(0.33, {
                scale: 1.2
            }, {
                easing: cc.easing.quartOut
            }).to(0.2, {
                scale: 1
            }, {
                easing: cc.easing.quartIn
            }).start();
        }
    };
    WinOptimizeView.prototype.playSpineAnimation = function () {
        this.spineVictory && this.spineVictory.setAnimation(0, "in", false);
    };
    WinOptimizeView.prototype.getTitleNode = function (t) {
        if (!cc.isValid(t))
            return null;
        var e = t.getChildByName("lbl_title");
        return cc.isValid(e) ? e : null;
    };
    WinOptimizeView.prototype.setTitle = function (t) {
        var e = t.getComponent(cc.Label);
        if (e) {
            t.active = false;
            cc.isValid(this.lblTitleOpt) && (this.lblTitleOpt.string = e.string);
        }
    };
    WinOptimizeView.prototype.onDestroy = function () {
        var e;
        _super.prototype.onDestroy.call(this);
        cc.isValid(null === (e = this.lblTitleOpt) || void 0 === e ? void 0 : e.node) && this.lblTitleOpt.node.stopAllActions();
        this.isShown = false;
    };
    WinOptimizeView.prefabUrl = "prefabs/WinOptimize";
    WinOptimizeView.bundleName = "r_winOptimize";
    __decorate([
        mj.component("spine_victory", sp.Skeleton)
    ], WinOptimizeView.prototype, "spineVictory", void 0);
    __decorate([
        mj.component("lb_title_opt", cc.Label)
    ], WinOptimizeView.prototype, "lblTitleOpt", void 0);
    WinOptimizeView = __decorate([
        mj.class
    ], WinOptimizeView);
    return WinOptimizeView;
}(BaseUI_1.default));
exports.default = WinOptimizeView;

cc._RF.pop();