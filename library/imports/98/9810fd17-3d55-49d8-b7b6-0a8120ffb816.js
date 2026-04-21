"use strict";
cc._RF.push(module, '9810f0XPVVJ2Le2CoEg/7gW', 'Tile2DianZanBehavior');
// Scripts/base/Tile2DianZanBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2DianZanBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var BaseSpine_1 = require("../gamePlay/base/ui/BaseSpine");
var Tile2DianZanBehavior = /** @class */ (function (_super) {
    __extends(Tile2DianZanBehavior, _super);
    function Tile2DianZanBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2DianZanBehavior.prototype.start = function (e) {
        var t, o = e.data, n = o.tileId1;
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
        try {
            var i = this.context.getTileNodeWorldPosition(n), r = null === (t = this.context.gameView) || void 0 === t ? void 0 : t.effectNode, l = null == r ? void 0 : r.convertToNodeSpaceAR(i);
            this.createItem(r, this.getPosition(l), o.dianZanCondition);
        }
        catch (e) { }
    };
    Tile2DianZanBehavior.prototype.createItem = function (e, t, o) {
        var n = this;
        if (!e || !cc.isValid(e))
            return null;
        var i = new cc.Node();
        i.parent = e;
        i.position = t;
        var r = new cc.Node();
        r.parent = i;
        r.scale = this.getScale(this.context.layoutScale);
        var a = BaseSpine_1.default.refreshWithNode(r, this.getSpineUrl(o), this.getSpineBundleName(o));
        a.setOnReadyCallback(function () {
            n.playAni(i, a, o);
        });
        return i;
    };
    Tile2DianZanBehavior.prototype.playAni = function (e, t, o) {
        var n = this;
        e && cc.isValid(e) && t && (null == t || t.setAnimation(this.getAnimName(o), 1, function () {
            n.playAniEnd();
            e.destroy();
        }));
    };
    Tile2DianZanBehavior.prototype.playAniEnd = function () { };
    Tile2DianZanBehavior.prototype.getSpineUrl = function () {
        return "spine/dianZan/gameplay_hand";
    };
    Tile2DianZanBehavior.prototype.getSpineBundleName = function () {
        return "mainRes";
    };
    Tile2DianZanBehavior.prototype.getPosition = function (e) {
        return cc.v3(e.x, e.y, 0);
    };
    Tile2DianZanBehavior.prototype.getScale = function (e) {
        return e;
    };
    Tile2DianZanBehavior.prototype.getAnimName = function () {
        return "in";
    };
    __decorate([
        mj.traitEvent("Tile2DZanBhv_createItem")
    ], Tile2DianZanBehavior.prototype, "createItem", null);
    __decorate([
        mj.traitEvent("Tile2DZanBhv_playAni")
    ], Tile2DianZanBehavior.prototype, "playAni", null);
    __decorate([
        mj.traitEvent("Tile2DZanBhv_playAniEnd")
    ], Tile2DianZanBehavior.prototype, "playAniEnd", null);
    __decorate([
        mj.traitEvent("Tile2DZanBhv_spUrl")
    ], Tile2DianZanBehavior.prototype, "getSpineUrl", null);
    __decorate([
        mj.traitEvent("Tile2DZanBhv_spBundle")
    ], Tile2DianZanBehavior.prototype, "getSpineBundleName", null);
    __decorate([
        mj.traitEvent("Tile2DZanBhv_pos")
    ], Tile2DianZanBehavior.prototype, "getPosition", null);
    __decorate([
        mj.traitEvent("Tile2DZanBhv_scale")
    ], Tile2DianZanBehavior.prototype, "getScale", null);
    __decorate([
        mj.traitEvent("Tile2DZanBhv_animName")
    ], Tile2DianZanBehavior.prototype, "getAnimName", null);
    return Tile2DianZanBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.Tile2DianZanBehavior = Tile2DianZanBehavior;

cc._RF.pop();