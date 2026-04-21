"use strict";
cc._RF.push(module, '0a760zD2nxENrILJE9yfmkI', 'ClassicVideoAdView');
// subpackages/l_classicVideoAd/Scripts/ClassicVideoAdView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var UIView_1 = require("../../../Scripts/framework/ui/UIView");
var BaseSpine_1 = require("../../../Scripts/gamePlay/base/ui/BaseSpine");
var BaseLabel_1 = require("../../../Scripts/gamePlay/base/ui/BaseLabel");
var I18NStrings_1 = require("../../../Scripts/framework/data/I18NStrings");
var I18NComponent_1 = require("../../../Scripts/component/I18NComponent");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ClassicVideoAdView = /** @class */ (function (_super) {
    __extends(ClassicVideoAdView, _super);
    function ClassicVideoAdView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.watchBtn = null;
        _this.refuseBtn = null;
        _this.titleNode = null;
        return _this;
    }
    ClassicVideoAdView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.titleNode = this.node.getChildByName("title");
        var e = this.node.getChildByName("btn");
        if (e) {
            this.watchBtn = e.getComponent(cc.Button);
            var i = e.getChildByName("spine").getComponent(BaseSpine_1.default);
            i.markReady("");
            i && i.attachNodeWithAlpha("hook_text", "hook_text", function () {
                var t = I18NStrings_1.default.get("Common_Btn_Continue", "Continue"), e = BaseLabel_1.default.create(t, "font/SPARTAN-BOLD", "mainRes", 50);
                e.setColor(new cc.Color().fromHEX("#e0ffe7"));
                e.setAlign(cc.Label.HorizontalAlign.CENTER, cc.Label.VerticalAlign.CENTER);
                return e.node;
            });
        }
        var a = this.node.getChildByName("btn_no");
        a && (this.refuseBtn = a.getComponent(cc.Button));
        var o = this.refuseBtn.node.getChildByName("spr"), n = this.refuseBtn.node.getChildByName("label");
        o.active = false;
        n.active = true;
        this.watchBtn && this.OnButtonClick(this.watchBtn.node, this.onClickWatch.bind(this));
        this.refuseBtn && this.OnButtonClick(this.refuseBtn.node, this.onClickRefuse.bind(this));
        this.playEnterAnimation();
    };
    ClassicVideoAdView.prototype.playEnterAnimation = function () {
        if (this.titleNode && cc.isValid(this.titleNode)) {
            this.titleNode.scale = 0;
            cc.tween(this.titleNode).to(0.26, {
                scale: 1
            }, {
                easing: "backOut"
            }).start();
        }
        if (this.refuseBtn && cc.isValid(this.refuseBtn.node)) {
            this.refuseBtn.node.scale = 0;
            cc.tween(this.refuseBtn.node).delay(0.53).to(0.27, {
                scale: 1
            }, {
                easing: "backOut"
            }).start();
        }
    };
    ClassicVideoAdView.prototype.onClickWatch = function () {
        var t = this.delegate;
        null == t || t.onClickWatch();
    };
    ClassicVideoAdView.prototype.onClickRefuse = function () {
        var t = this.delegate;
        null == t || t.onClickRefuse();
    };
    ClassicVideoAdView.prototype.updateDisplay = function (t) {
        if (this.titleNode && cc.isValid(this.titleNode)) {
            var e = this.titleNode.getComponent(I18NComponent_1.default);
            if (e)
                if (t.showSpecialTitle) {
                    e.setTranslateId("Get_MORE_SCOREplus", "Get More Score x{0}");
                    var i = this.titleNode.getComponent(cc.Label);
                    if (i) {
                        var a = I18NStrings_1.default.get("Get_MORE_SCOREplus", "Get More Score x{0}");
                        i.string = a.replace("{0}", t.currentMultiplier.toFixed(1));
                    }
                }
                else
                    e.setTranslateId("Get_MORE_SCORE", "Get More Score");
        }
        if (this.refuseBtn && cc.isValid(this.refuseBtn.node)) {
            var o = this.refuseBtn.node.getChildByName("spr"), n = this.refuseBtn.node.getChildByName("label");
            if (t.hasCloseCount) {
                o.active = false;
                n.active = true;
            }
            else {
                o.active = true;
                n.active = false;
            }
        }
    };
    ClassicVideoAdView.prefabUrl = "prefabs/ClassicVideoAdView";
    __decorate([
        mj.traitEvent("ClcVideoAdVw_load")
    ], ClassicVideoAdView.prototype, "onLoad", null);
    __decorate([
        mj.traitEvent("ClcVideoAdVw_clickWatch")
    ], ClassicVideoAdView.prototype, "onClickWatch", null);
    __decorate([
        mj.traitEvent("ClcVideoAdVw_clickRefuse")
    ], ClassicVideoAdView.prototype, "onClickRefuse", null);
    ClassicVideoAdView = __decorate([
        mj.class
    ], ClassicVideoAdView);
    return ClassicVideoAdView;
}(UIView_1.default));
exports.default = ClassicVideoAdView;

cc._RF.pop();