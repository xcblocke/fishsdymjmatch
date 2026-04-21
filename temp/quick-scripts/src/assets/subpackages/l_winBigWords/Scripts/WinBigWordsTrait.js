"use strict";
cc._RF.push(module, '28684hTAIVOqaFHT2wx+5fI', 'WinBigWordsTrait');
// subpackages/l_winBigWords/Scripts/WinBigWordsTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var WinBigWordsTrait = /** @class */ (function (_super) {
    __extends(WinBigWordsTrait, _super);
    function WinBigWordsTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WinBigWordsTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.registerEvent([{
                event: "Tile2WinVw_show"
            }]);
    };
    WinBigWordsTrait.prototype.onWinVw_showWinVw = function (t, r) {
        this._applyBigWordsToWinView(t.ins);
        r();
    };
    WinBigWordsTrait.prototype.onTile2WinVw_show = function (t, r) {
        this._applyBigWordsToWinView(t.ins);
        r();
    };
    WinBigWordsTrait.prototype._applyBigWordsToWinView = function (t) {
        var r;
        if (t && cc.isValid(t.node)) {
            var i = null === (r = this._traitData) || void 0 === r ? void 0 : r.fontSize;
            if (i)
                for (var o in i) {
                    var e = i[o];
                    if (e) {
                        var n = t[o];
                        n && cc.isValid(n.node) && (n.fontSize = e);
                    }
                }
            var a = null == i ? void 0 : i._lblTitle;
            if (a) {
                var c = t._lblTitle2;
                c && cc.isValid(c.node) && (c.fontSize = a);
            }
            var f = t._contentNode;
            if (f) {
                var s = cc.find("BoxProgress/BarLayout/Condition", f);
                if (s) {
                    var p = s.getComponent(cc.Label);
                    p && (p.fontSize = 50);
                }
            }
        }
    };
    WinBigWordsTrait.traitKey = "WinBigWords";
    WinBigWordsTrait = __decorate([
        mj.trait,
        mj.class("WinBigWordsTrait")
    ], WinBigWordsTrait);
    return WinBigWordsTrait;
}(Trait_1.default));
exports.default = WinBigWordsTrait;

cc._RF.pop();