"use strict";
cc._RF.push(module, '809f025tSRNiLExst1DRBTl', 'WinLabelScaleTrait');
// subpackages/l_winLabelScale/Scripts/WinLabelScaleTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var WinLabelScaleTrait = /** @class */ (function (_super) {
    __extends(WinLabelScaleTrait, _super);
    function WinLabelScaleTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(WinLabelScaleTrait.prototype, "scale", {
        get: function () {
            var e;
            return null !== (e = this._traitData.scale) && void 0 !== e ? e : 1.15;
        },
        enumerable: false,
        configurable: true
    });
    WinLabelScaleTrait.prototype.onWinVw_showWinVw = function (e, t) {
        var n = e.ins;
        this.scaleWinLab(null == n ? void 0 : n.node);
        t();
    };
    WinLabelScaleTrait.prototype.onTLWinVw_showTLWinVw = function (e, t) {
        var n = e.ins;
        this.scaleWinLab(null == n ? void 0 : n.node);
        t();
    };
    WinLabelScaleTrait.prototype.onDCWinVw_showWinVw = function (e, t) {
        var n = e.ins;
        this.scaleWinLab(null == n ? void 0 : n.node);
        t();
    };
    WinLabelScaleTrait.prototype.onTile2WinVw_show = function (e, t) {
        var n = e.ins;
        this.scaleWinLab(null == n ? void 0 : n.node);
        t();
    };
    WinLabelScaleTrait.prototype.scaleWinLab = function (e) {
        var t = new Set(["btn_next"]);
        cc.isValid(e) && this.scaleLabelRecursive(e, t);
    };
    WinLabelScaleTrait.prototype.scaleLabelRecursive = function (e, t) {
        var n, r;
        if (cc.isValid(e)) {
            var i = e.getComponent(cc.Label) || e.getComponent(cc.RichText);
            if (i) {
                i.fontSize = i.fontSize * this.scale;
                i.lineHeight = i.lineHeight * this.scale;
            }
            try {
                for (var o = __values(e.children), c = o.next(); !c.done; c = o.next()) {
                    var l = c.value;
                    t.has(l.name) || this.scaleLabelRecursive(l, t);
                }
            }
            catch (e) {
                n = {
                    error: e
                };
            }
            finally {
                try {
                    c && !c.done && (r = o.return) && r.call(o);
                }
                finally {
                    if (n)
                        throw n.error;
                }
            }
        }
    };
    WinLabelScaleTrait.traitKey = "WinLabelScale";
    WinLabelScaleTrait = __decorate([
        mj.trait,
        mj.class("WinLabelScaleTrait")
    ], WinLabelScaleTrait);
    return WinLabelScaleTrait;
}(Trait_1.default));
exports.default = WinLabelScaleTrait;

cc._RF.pop();