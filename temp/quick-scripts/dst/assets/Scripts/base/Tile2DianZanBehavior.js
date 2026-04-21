
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/base/Tile2DianZanBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2Jhc2UvVGlsZTJEaWFuWmFuQmVoYXZpb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxRUFBb0U7QUFDcEUseURBQXdEO0FBQ3hELDJEQUFzRDtBQUN0RDtJQUEwQyx3Q0FBaUI7SUFBM0Q7O0lBMkRBLENBQUM7SUExREMsb0NBQUssR0FBTCxVQUFNLENBQUM7UUFDTCxJQUFJLENBQUMsRUFDSCxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFDVixDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQztRQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLDZCQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbkMsSUFBSTtZQUNGLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDLEVBQzlDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUNoRixDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1NBQzdEO1FBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRTtJQUNoQixDQUFDO0lBRUQseUNBQVUsR0FBVixVQUFXLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDYixJ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cG9ydCB7IEVCZWhhdmlvckVudW0gfSBmcm9tICcuLi9zaW11bGF0b3IvY29uc3RhbnQvR2FtZUlucHV0RW51bSc7XG5pbXBvcnQgeyBHYW1lQmVoYXZpb3JzQmFzZSB9IGZyb20gJy4vR2FtZUJlaGF2aW9yc0Jhc2UnO1xuaW1wb3J0IEJhc2VTcGluZSBmcm9tICcuLi9nYW1lUGxheS9iYXNlL3VpL0Jhc2VTcGluZSc7XG5leHBvcnQgY2xhc3MgVGlsZTJEaWFuWmFuQmVoYXZpb3IgZXh0ZW5kcyBHYW1lQmVoYXZpb3JzQmFzZSB7XG4gIHN0YXJ0KGUpIHtcbiAgICB2YXIgdCxcbiAgICAgIG8gPSBlLmRhdGEsXG4gICAgICBuID0gby50aWxlSWQxO1xuICAgIHRoaXMuZmluaXNoKEVCZWhhdmlvckVudW0uU3VjY2Vzcyk7XG4gICAgdHJ5IHtcbiAgICAgIHZhciBpID0gdGhpcy5jb250ZXh0LmdldFRpbGVOb2RlV29ybGRQb3NpdGlvbihuKSxcbiAgICAgICAgciA9IG51bGwgPT09ICh0ID0gdGhpcy5jb250ZXh0LmdhbWVWaWV3KSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0LmVmZmVjdE5vZGUsXG4gICAgICAgIGwgPSBudWxsID09IHIgPyB2b2lkIDAgOiByLmNvbnZlcnRUb05vZGVTcGFjZUFSKGkpO1xuICAgICAgdGhpcy5jcmVhdGVJdGVtKHIsIHRoaXMuZ2V0UG9zaXRpb24obCksIG8uZGlhblphbkNvbmRpdGlvbik7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlRpbGUyRFphbkJodl9jcmVhdGVJdGVtXCIpXG4gIGNyZWF0ZUl0ZW0oZSwgdCwgbykge1xuICAgIHZhciBuID0gdGhpcztcbiAgICBpZiAoIWUgfHwgIWNjLmlzVmFsaWQoZSkpIHJldHVybiBudWxsO1xuICAgIHZhciBpID0gbmV3IGNjLk5vZGUoKTtcbiAgICBpLnBhcmVudCA9IGU7XG4gICAgaS5wb3NpdGlvbiA9IHQ7XG4gICAgdmFyIHIgPSBuZXcgY2MuTm9kZSgpO1xuICAgIHIucGFyZW50ID0gaTtcbiAgICByLnNjYWxlID0gdGhpcy5nZXRTY2FsZSh0aGlzLmNvbnRleHQubGF5b3V0U2NhbGUpO1xuICAgIHZhciBhID0gQmFzZVNwaW5lLnJlZnJlc2hXaXRoTm9kZShyLCB0aGlzLmdldFNwaW5lVXJsKG8pLCB0aGlzLmdldFNwaW5lQnVuZGxlTmFtZShvKSk7XG4gICAgYS5zZXRPblJlYWR5Q2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgICAgbi5wbGF5QW5pKGksIGEsIG8pO1xuICAgIH0pO1xuICAgIHJldHVybiBpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiVGlsZTJEWmFuQmh2X3BsYXlBbmlcIilcbiAgcGxheUFuaShlLCB0LCBvKSB7XG4gICAgdmFyIG4gPSB0aGlzO1xuICAgIGUgJiYgY2MuaXNWYWxpZChlKSAmJiB0ICYmIChudWxsID09IHQgfHwgdC5zZXRBbmltYXRpb24odGhpcy5nZXRBbmltTmFtZShvKSwgMSwgZnVuY3Rpb24gKCkge1xuICAgICAgbi5wbGF5QW5pRW5kKCk7XG4gICAgICBlLmRlc3Ryb3koKTtcbiAgICB9KSk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJUaWxlMkRaYW5CaHZfcGxheUFuaUVuZFwiKVxuICBwbGF5QW5pRW5kKCkge31cbiAgQG1qLnRyYWl0RXZlbnQoXCJUaWxlMkRaYW5CaHZfc3BVcmxcIilcbiAgZ2V0U3BpbmVVcmwoKSB7XG4gICAgcmV0dXJuIFwic3BpbmUvZGlhblphbi9nYW1lcGxheV9oYW5kXCI7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJUaWxlMkRaYW5CaHZfc3BCdW5kbGVcIilcbiAgZ2V0U3BpbmVCdW5kbGVOYW1lKCkge1xuICAgIHJldHVybiBcIm1haW5SZXNcIjtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlRpbGUyRFphbkJodl9wb3NcIilcbiAgZ2V0UG9zaXRpb24oZSkge1xuICAgIHJldHVybiBjYy52MyhlLngsIGUueSwgMCk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJUaWxlMkRaYW5CaHZfc2NhbGVcIilcbiAgZ2V0U2NhbGUoZSkge1xuICAgIHJldHVybiBlO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiVGlsZTJEWmFuQmh2X2FuaW1OYW1lXCIpXG4gIGdldEFuaW1OYW1lKCkge1xuICAgIHJldHVybiBcImluXCI7XG4gIH1cbn0iXX0=