"use strict";
cc._RF.push(module, 'e15cfmk1K5HjpPVxyYFnSAh', 'WatchAdGetPropShowNumTrait');
// subpackages/l_watchAdGetProp/Scripts/WatchAdGetPropShowNumTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var I18NStrings_1 = require("../../../Scripts/framework/data/I18NStrings");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var WatchAdGetPropView_1 = require("./WatchAdGetPropView");
var i;
(i = {})[WatchAdGetPropView_1.WatchAdGetPropType.shuffle] = {
    key: "Tiles_PropPurchase_Purchase_1",
    defaultText: "Watch an ad to get {0} Shuffle"
};
i[WatchAdGetPropView_1.WatchAdGetPropType.hitTips] = {
    key: "Tiles_PropPurchase_Purchase_2",
    defaultText: "Watch an ad to get {0} Hint"
};
i[WatchAdGetPropView_1.WatchAdGetPropType.revert] = {
    key: "Tiles_PropPurchase_Purchase_3",
    defaultText: "Watch an ad to get {0} Undo"
};
var p = i;
var WatchAdGetPropShowNumTrait = /** @class */ (function (_super) {
    __extends(WatchAdGetPropShowNumTrait, _super);
    function WatchAdGetPropShowNumTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._richTextMap = new Map();
        return _this;
    }
    WatchAdGetPropShowNumTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    WatchAdGetPropShowNumTrait.prototype.onWatchAdVw_setContent = function (t, e) {
        var r;
        e();
        var o = t.ins, i = t.args[0], n = o.getDescNode();
        if (n && cc.isValid(n)) {
            var a = this._richTextMap.get(o);
            if (!a) {
                var c = n.getComponent(cc.Label), u = n.width, d = c.lineHeight, h = c.fontSize, f = c.font, y = c.useSystemFont;
                c && (c.enabled = false);
                a = null !== (r = n.getComponent(cc.RichText)) && void 0 !== r ? r : n.addComponent(cc.RichText);
                if (c) {
                    a.fontSize = h;
                    a.lineHeight = d + 12;
                    a.maxWidth = u;
                    a.font = f;
                    a.useSystemFont = y;
                    a.horizontalAlign = cc.macro.TextAlignment.CENTER;
                }
                this._richTextMap.set(o, a);
            }
            var _ = o.delegate, m = i === WatchAdGetPropView_1.WatchAdGetPropType.shuffle ? "shuffle" : i === WatchAdGetPropView_1.WatchAdGetPropType.hitTips ? "hitTips" : "revert", v = "<color=#36a550>" + _.getWatchAdItemNum(m) + "</color>", g = p[i], T = I18NStrings_1.default.get(g.key, g.defaultText);
            a.string = I18NStrings_1.default.stringFormat(T, v);
        }
    };
    WatchAdGetPropShowNumTrait.traitKey = "WatchAdGetPropShowNum";
    WatchAdGetPropShowNumTrait = __decorate([
        mj.trait,
        mj.class("WatchAdGetPropShowNumTrait")
    ], WatchAdGetPropShowNumTrait);
    return WatchAdGetPropShowNumTrait;
}(Trait_1.default));
exports.default = WatchAdGetPropShowNumTrait;

cc._RF.pop();