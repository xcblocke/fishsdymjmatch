"use strict";
cc._RF.push(module, 'd77adSWxzBGdJTYdBhNPNTS', 'CardLockDarkenBehavior');
// Scripts/base/CardLockDarkenBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.CardLockDarkenBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var CardLockDarkenBehavior = /** @class */ (function (_super) {
    __extends(CardLockDarkenBehavior, _super);
    function CardLockDarkenBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardLockDarkenBehavior.prototype.start = function (e) {
        var t = e.data.isAutoMerge || false, o = void 0 === e.data.isShowAni || e.data.isShowAni, n = this.context.getTileMapObject().getCurAllLockCards(), i = n.lockCardIds, a = n.unLockCardIds, l = this.context.getTileNodeMap();
        if (t) {
            this._isShowAni = false;
            this.updateLockIcons(i, l, false);
            this.updateLockIcons(a, l, false);
        }
        else {
            this._isShowAni = o;
            this.updateLockIcons(i, l, true);
            this.updateLockIcons(a, l, false);
        }
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    CardLockDarkenBehavior.prototype.updateLockIcons = function (e, t, o) {
        var n = this;
        e.forEach(function (e) {
            var i = t.get(e);
            if (i) {
                var r = i;
                if ("function" != typeof r.tile2SetLockDarken) {
                    var a = i.imgLockBg;
                    if (a && cc.isValid(a) && a.activeInHierarchy !== o)
                        if (!o && n._isShowAni)
                            n.hideLockIconWithFadeOut(a, null, e);
                        else {
                            o && (a.opacity = 255);
                            a.active = o;
                        }
                }
                else
                    r.tile2SetLockDarken(o, !o && n._isShowAni);
            }
        });
    };
    CardLockDarkenBehavior.prototype.hideLockIconWithFadeOut = function (e, t, o) {
        if (t === void 0) { t = 0; }
        if (o === void 0) { o = ""; }
        var n = this;
        cc.Tween.stopAllByTarget(e);
        cc.tween(e).delay(t).to(0.25, {
            opacity: 0
        }).call(function () {
            var t;
            cc.isValid(e) && (e.active = false);
            if (o) {
                var i = null === (t = n.context.getTileNodeManager()) || void 0 === t ? void 0 : t.getTileNodeByTileId(o);
                if (i && cc.isValid(i.imgLockBg) && 0 != i.tileObject.isCardLock()) {
                    e.active = true;
                    e.opacity = 255;
                }
            }
        }).start();
    };
    return CardLockDarkenBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.CardLockDarkenBehavior = CardLockDarkenBehavior;

cc._RF.pop();