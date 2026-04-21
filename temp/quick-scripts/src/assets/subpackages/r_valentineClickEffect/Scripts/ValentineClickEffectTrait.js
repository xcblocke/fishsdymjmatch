"use strict";
cc._RF.push(module, '038163/y/tNrLcLe4uJA7GC', 'ValentineClickEffectTrait');
// subpackages/r_valentineClickEffect/Scripts/ValentineClickEffectTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Config_1 = require("../../../Scripts/Config");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var BaseSpine_1 = require("../../../Scripts/gamePlay/base/ui/BaseSpine");
var ValentineClickEffectTrait = /** @class */ (function (_super) {
    __extends(ValentineClickEffectTrait, _super);
    function ValentineClickEffectTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._isValentineOpen = true;
        return _this;
    }
    ValentineClickEffectTrait_1 = ValentineClickEffectTrait;
    Object.defineProperty(ValentineClickEffectTrait.prototype, "isValentineOpen", {
        get: function () {
            return this._isValentineOpen;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ValentineClickEffectTrait.prototype, "clickEffBundle", {
        get: function () {
            return null != this._traitData.clickEffBundle ? this._traitData.clickEffBundle : "" + ValentineClickEffectTrait_1.BUNDLE_NAME;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ValentineClickEffectTrait.prototype, "clickEffPath", {
        get: function () {
            return null != this._traitData.clickEffPath ? this._traitData.clickEffPath : "spine/gameplay_touch";
        },
        enumerable: false,
        configurable: true
    });
    ValentineClickEffectTrait.prototype.getMessageListeners = function () {
        var _t = {};
        _t[Config_1.EVT_MSG_KEY_EVENT_TOP_TOUCH_START] = this.onTopTouchStart.bind(this);
        return _t;
    };
    ValentineClickEffectTrait.prototype.onTopTouchStart = function (t) {
        if (this.isClickEffectActive()) {
            var e = cc.Canvas.instance.node, n = BaseSpine_1.default.create(this.clickEffPath, "in", 1, null, true, this.clickEffBundle);
            n.node.zIndex = 999;
            n.node.parent = e;
            var i = t.getLocation(), r = e.convertToNodeSpaceAR(cc.v3(i.x, i.y, 0));
            n.node.position = r;
        }
    };
    ValentineClickEffectTrait.prototype.isClickEffectActive = function () {
        if (null != this._traitData.clickEffect)
            return this._traitData.clickEffect;
        var t = mj.getClassByName("ValentineModel");
        return null != t && t.getInstance().isEffectActive();
    };
    var ValentineClickEffectTrait_1;
    ValentineClickEffectTrait.traitKey = "ValentineClickEffect";
    ValentineClickEffectTrait.BUNDLE_NAME = "r_valentineClickEffect";
    ValentineClickEffectTrait = ValentineClickEffectTrait_1 = __decorate([
        mj.trait,
        mj.class("ValentineClickEffectTrait")
    ], ValentineClickEffectTrait);
    return ValentineClickEffectTrait;
}(Trait_1.default));
exports.default = ValentineClickEffectTrait;

cc._RF.pop();