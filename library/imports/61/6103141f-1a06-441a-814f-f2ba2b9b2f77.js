"use strict";
cc._RF.push(module, '61031QfGgZEGoFP8rormy93', 'GuideUI');
// subpackages/l_guide/Scripts/GuideUI.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameUtils_1 = require("../../../Scripts/core/simulator/util/GameUtils");
var BaseUI_1 = require("../../../Scripts/framework/ui/BaseUI");
var GuideUI = /** @class */ (function (_super) {
    __extends(GuideUI, _super);
    function GuideUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._showHand = false;
        return _this;
    }
    GuideUI.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._nodeHand = this.node.getChildByName("nodeHand");
        this._btnSkip = cc.find("skip/btnSkip", this.node);
        this._nodeTip = cc.find("nodeTip", this.node);
        this._text = cc.find("nodeTip/labelDesc1", this.node).getComponent(cc.RichText);
        this._handSpine = cc.find("nodeHand/guidehand", this.node).getComponent(sp.Skeleton);
        this._btnSkip.active = true;
        this._nodeHand.active = false;
        this.playSkipAppearAni();
        this.playTipAppearAni();
        this.OnButtonClick(this._btnSkip, this.onSkip.bind(this));
    };
    GuideUI.prototype.setText = function (t) {
        t && (this._text.string = t);
    };
    GuideUI.prototype.setGuidePosition = function (t, e, i) {
        var n = this;
        if (this._showHand != i || this._tileId != t) {
            this._showHand = i;
            if (i) {
                this._nodeHand.active = true;
                this.playHandSpi();
            }
            var o = this.node.parent.convertToNodeSpaceAR(e);
            this._tileId !== t && (this._tileId = t);
            cc.Tween.stopAllByTarget(this._nodeHand);
            if (i) {
                this._nodeHand.opacity = 255;
                cc.tween(this._nodeHand).to(0.23, {
                    position: o
                }).call(function () {
                    n._nodeHand.setPosition(o);
                }).start();
            }
            else
                this._nodeHand.opacity = 0;
        }
    };
    GuideUI.prototype.setShowHand = function (t) {
        this._nodeHand.active = t;
    };
    GuideUI.prototype.playHandSpi = function () {
        var t = this;
        GameUtils_1.default.playSpine(this._handSpine, "in", false, function () {
            GameUtils_1.default.playSpine(t._handSpine, "init", true);
        });
    };
    GuideUI.prototype.onSkip = function () { };
    GuideUI.prototype.playTipAppearAni = function () {
        var t = this._nodeTip, e = this._text ? this._text.node : null;
        if (cc.isValid(t)) {
            t.active = true;
            t.scaleX = 1;
            t.scaleY = 0.5;
            cc.Tween.stopAllByTarget(t);
            if (cc.isValid(e)) {
                e.opacity = 0;
                cc.Tween.stopAllByTarget(e);
            }
            cc.tween(t).to(0.33, {
                scaleY: 1
            }, {
                easing: "backOut"
            }).start();
            cc.isValid(e) && cc.tween(e).to(0.16, {
                opacity: 255
            }, {
                easing: "sineInOut"
            }).start();
        }
    };
    GuideUI.prototype.playSkipAppearAni = function () {
        var t = this._btnSkip;
        if (cc.isValid(t)) {
            t.scale = 0;
            t.opacity = 0;
            cc.Tween.stopAllByTarget(t);
            cc.tween(t).parallel(cc.tween().to(0.23, {
                scale: 1
            }, {
                easing: "backOut"
            }), cc.tween().to(0.16, {
                opacity: 255
            }, {
                easing: "circOut"
            })).start();
        }
    };
    GuideUI.prototype.playTextAnim = function (t) {
        var e = this._nodeTip, i = this._text, n = i ? i.node : null;
        if (cc.isValid(e) && cc.isValid(n)) {
            cc.Tween.stopAllByTarget(n);
            cc.Tween.stopAllByTarget(e);
            if ("switch" !== t.type) {
                if ("hide" === t.type) {
                    var o = false;
                    n.opacity < 255 && (n.opacity = 255);
                    e.opacity < 255 && (e.opacity = 255);
                    cc.tween(n).to(0.16, {
                        opacity: 0
                    }, {
                        easing: "circOut"
                    }).call(function () {
                        if (!o) {
                            o = true;
                            (null == t ? void 0 : t.cb) && t.cb();
                        }
                    }).start();
                    cc.tween(e).to(0.16, {
                        opacity: 0
                    }, {
                        easing: "circOut"
                    }).start();
                }
            }
            else
                cc.tween(n).to(0.16, {
                    opacity: 0
                }, {
                    easing: "circOut"
                }).call(function () {
                    n.opacity = 0;
                }).to(0.16, {
                    opacity: 255
                }, {
                    easing: "sineInOut"
                }).call(function () {
                    (null == t ? void 0 : t.cb) && t.cb();
                }).start();
        }
        else
            (null == t ? void 0 : t.cb) && t.cb();
    };
    GuideUI.prototype.getNodeHand = function () {
        return this._nodeHand;
    };
    GuideUI.prototype.getHandSpine = function () {
        return this._handSpine;
    };
    GuideUI.prefabUrl = "prefabs/ui/GLMahjongGuideView";
    GuideUI.bundleName = "mainRes";
    __decorate([
        mj.traitEvent("GuideUI_onLoad")
    ], GuideUI.prototype, "onLoad", null);
    __decorate([
        mj.traitEvent("GuideUI_setText")
    ], GuideUI.prototype, "setText", null);
    __decorate([
        mj.traitEvent("GuideUI_playHandSpi")
    ], GuideUI.prototype, "playHandSpi", null);
    __decorate([
        mj.traitEvent("GuideUI_skip")
    ], GuideUI.prototype, "onSkip", null);
    GuideUI = __decorate([
        mj.class
    ], GuideUI);
    return GuideUI;
}(BaseUI_1.default));
exports.default = GuideUI;

cc._RF.pop();