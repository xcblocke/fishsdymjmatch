"use strict";
cc._RF.push(module, '8c32b2G3DNBerJL81A9HA2Y', 'Tile2DarkenComponent');
// Scripts/Tile2DarkenComponent.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2DarkenComponent = void 0;
var TileNodeComponent_1 = require("./TileNodeComponent");
var Tile2DarkenComponent = /** @class */ (function (_super) {
    __extends(Tile2DarkenComponent, _super);
    function Tile2DarkenComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2DarkenComponent.prototype.setLockDarkenActive = function (e, t) {
        var o = this._host.imgLockBg;
        if (o && cc.isValid(o) && o.activeInHierarchy !== e)
            if (!e && t)
                this._hideLockIconWithFadeOut(o);
            else {
                if (e) {
                    cc.Tween.stopAllByTarget(o);
                    o.opacity = 255;
                }
                else
                    cc.Tween.stopAllByTarget(o);
                o.active = e;
            }
    };
    Tile2DarkenComponent.prototype.resetLockDarkenImmediate = function () {
        var e = this._host.imgLockBg;
        if (e && cc.isValid(e)) {
            cc.Tween.stopAllByTarget(e);
            e.active = false;
        }
    };
    Tile2DarkenComponent.prototype.onClear = function () {
        this.resetLockDarkenImmediate();
    };
    Tile2DarkenComponent.prototype.onUnbind = function () {
        this.resetLockDarkenImmediate();
    };
    Tile2DarkenComponent.prototype._hideLockIconWithFadeOut = function (e) {
        var t = this, o = this._host.tileObject.id;
        cc.Tween.stopAllByTarget(e);
        cc.tween(e).delay(0).to(0.25, {
            opacity: 0
        }).call(function () {
            var n;
            cc.isValid(e) && (e.active = false);
            if (o) {
                var i = null === (n = t._host.context.getTileNodeManager()) || void 0 === n ? void 0 : n.getTileNodeByTileId(o);
                if (i && cc.isValid(i.imgLockBg) && 0 != i.tileObject.isCardLock()) {
                    e.active = true;
                    e.opacity = 255;
                }
            }
        }).start();
    };
    return Tile2DarkenComponent;
}(TileNodeComponent_1.TileNodeComponent));
exports.Tile2DarkenComponent = Tile2DarkenComponent;

cc._RF.pop();