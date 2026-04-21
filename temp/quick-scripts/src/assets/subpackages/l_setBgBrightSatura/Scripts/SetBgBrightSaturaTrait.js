"use strict";
cc._RF.push(module, '9f7614kYXRNcJPMeAT81wnS', 'SetBgBrightSaturaTrait');
// subpackages/l_setBgBrightSatura/Scripts/SetBgBrightSaturaTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var BrightSaturaContrastUniform_1 = require("../../../Scripts/BrightSaturaContrastUniform");
var CommonUtils_1 = require("../../../Scripts/framework/utils/CommonUtils");
var GameUtils_1 = require("../../../Scripts/core/simulator/util/GameUtils");
var SetBgBrightSaturaTrait = /** @class */ (function (_super) {
    __extends(SetBgBrightSaturaTrait, _super);
    function SetBgBrightSaturaTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._s = 0;
        _this._v = -10;
        return _this;
    }
    SetBgBrightSaturaTrait.prototype.onLoad = function () {
        var r;
        _super.prototype.onLoad.call(this);
        var e = (null === (r = this._traitData) || void 0 === r ? void 0 : r.config) || {};
        this._s = "number" == typeof e.S ? e.S : this._s;
        this._v = "number" == typeof e.V ? e.V : this._v;
    };
    SetBgBrightSaturaTrait.prototype.onMainGmVw_initLayers = function (t, r) {
        var e = t.ins.node.getChildByName("bg");
        this.directSetHsv(e, this._v, this._s);
        r();
    };
    SetBgBrightSaturaTrait.prototype.onTile2GmVw_initLayers = function (t, r) {
        var e = t.ins.node.getChildByName("bg");
        this.directSetHsv(e, this._v, this._s);
        r();
    };
    SetBgBrightSaturaTrait.prototype.directSetHsv = function (t, r, e) {
        var o = t.color, i = CommonUtils_1.RGB2HSV(o.r, o.g, o.b), n = i.h, a = i.s, s = i.v, f = GameUtils_1.default.clamp(s + 0.01 * r, 0, 1), p = GameUtils_1.default.clamp(a + 0.01 * e, 0, 1), l = CommonUtils_1.HSV2RGB(n, p, f);
        t.color = new cc.Color(l.r, l.g, l.b, o.a);
    };
    SetBgBrightSaturaTrait.prototype.ensureAndSetBrightSatura = function (t, r, e) {
        if (cc.isValid(t)) {
            var o = t.getComponent(BrightSaturaContrastUniform_1.default);
            o || (o = t.addComponent(BrightSaturaContrastUniform_1.default));
            if (o) {
                o.brightness = r;
                o.saturation = e;
                o.constrast = 1;
            }
        }
    };
    SetBgBrightSaturaTrait.traitKey = "SetBgBrightSatura";
    SetBgBrightSaturaTrait = __decorate([
        mj.trait,
        mj.class("SetBgBrightSaturaTrait")
    ], SetBgBrightSaturaTrait);
    return SetBgBrightSaturaTrait;
}(Trait_1.default));
exports.default = SetBgBrightSaturaTrait;

cc._RF.pop();