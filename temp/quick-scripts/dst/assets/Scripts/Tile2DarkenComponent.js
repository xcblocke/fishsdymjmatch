
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Tile2DarkenComponent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1RpbGUyRGFya2VuQ29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseURBQXdEO0FBQ3hEO0lBQTBDLHdDQUFpQjtJQUEzRDs7SUEwQ0EsQ0FBQztJQXpDQyxrREFBbUIsR0FBbkIsVUFBb0IsQ0FBQyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUM7UUFDN0IsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsaUJBQWlCLEtBQUssQ0FBQztZQUFFLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFBRSxJQUFJLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQUs7Z0JBQ3RHLElBQUksQ0FBQyxFQUFFO29CQUNMLEVBQUUsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUM1QixDQUFDLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztpQkFDakI7O29CQUFNLEVBQUUsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNuQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQzthQUNkO0lBQ0gsQ0FBQztJQUNELHVEQUF3QixHQUF4QjtRQUNFLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDO1FBQzdCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDdEIsRUFBRSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUIsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDbEI7SUFDSCxDQUFDO0lBQ0Qsc0NBQU8sR0FBUDtRQUNFLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFDRCx1Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUNELHVEQUF3QixHQUF4QixVQUF5QixDQUFDO1FBQ3hCLElBQUksQ0FBQyxHQUFHLElBQUksRUFDVixDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDO1FBQy9CLEVBQUUsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVCLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUU7WUFDNUIsT0FBTyxFQUFFLENBQUM7U0FDWCxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ04sSUFBSSxDQUFDLENBQUM7WUFDTixFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQztZQUNwQyxJQUFJLENBQUMsRUFBRTtnQkFDTCxJQUFJLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDaEgsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLEVBQUU7b0JBQ2xFLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO29CQUNoQixDQUFDLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztpQkFDakI7YUFDRjtRQUNILENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQUNILDJCQUFDO0FBQUQsQ0ExQ0EsQUEwQ0MsQ0ExQ3lDLHFDQUFpQixHQTBDMUQ7QUExQ1ksb0RBQW9CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGlsZU5vZGVDb21wb25lbnQgfSBmcm9tICcuL1RpbGVOb2RlQ29tcG9uZW50JztcbmV4cG9ydCBjbGFzcyBUaWxlMkRhcmtlbkNvbXBvbmVudCBleHRlbmRzIFRpbGVOb2RlQ29tcG9uZW50IHtcbiAgc2V0TG9ja0RhcmtlbkFjdGl2ZShlLCB0KSB7XG4gICAgdmFyIG8gPSB0aGlzLl9ob3N0LmltZ0xvY2tCZztcbiAgICBpZiAobyAmJiBjYy5pc1ZhbGlkKG8pICYmIG8uYWN0aXZlSW5IaWVyYXJjaHkgIT09IGUpIGlmICghZSAmJiB0KSB0aGlzLl9oaWRlTG9ja0ljb25XaXRoRmFkZU91dChvKTtlbHNlIHtcbiAgICAgIGlmIChlKSB7XG4gICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldChvKTtcbiAgICAgICAgby5vcGFjaXR5ID0gMjU1O1xuICAgICAgfSBlbHNlIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldChvKTtcbiAgICAgIG8uYWN0aXZlID0gZTtcbiAgICB9XG4gIH1cbiAgcmVzZXRMb2NrRGFya2VuSW1tZWRpYXRlKCkge1xuICAgIHZhciBlID0gdGhpcy5faG9zdC5pbWdMb2NrQmc7XG4gICAgaWYgKGUgJiYgY2MuaXNWYWxpZChlKSkge1xuICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KGUpO1xuICAgICAgZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgb25DbGVhcigpIHtcbiAgICB0aGlzLnJlc2V0TG9ja0RhcmtlbkltbWVkaWF0ZSgpO1xuICB9XG4gIG9uVW5iaW5kKCkge1xuICAgIHRoaXMucmVzZXRMb2NrRGFya2VuSW1tZWRpYXRlKCk7XG4gIH1cbiAgX2hpZGVMb2NrSWNvbldpdGhGYWRlT3V0KGUpIHtcbiAgICB2YXIgdCA9IHRoaXMsXG4gICAgICBvID0gdGhpcy5faG9zdC50aWxlT2JqZWN0LmlkO1xuICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldChlKTtcbiAgICBjYy50d2VlbihlKS5kZWxheSgwKS50bygwLjI1LCB7XG4gICAgICBvcGFjaXR5OiAwXG4gICAgfSkuY2FsbChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgbjtcbiAgICAgIGNjLmlzVmFsaWQoZSkgJiYgKGUuYWN0aXZlID0gZmFsc2UpO1xuICAgICAgaWYgKG8pIHtcbiAgICAgICAgdmFyIGkgPSBudWxsID09PSAobiA9IHQuX2hvc3QuY29udGV4dC5nZXRUaWxlTm9kZU1hbmFnZXIoKSkgfHwgdm9pZCAwID09PSBuID8gdm9pZCAwIDogbi5nZXRUaWxlTm9kZUJ5VGlsZUlkKG8pO1xuICAgICAgICBpZiAoaSAmJiBjYy5pc1ZhbGlkKGkuaW1nTG9ja0JnKSAmJiAwICE9IGkudGlsZU9iamVjdC5pc0NhcmRMb2NrKCkpIHtcbiAgICAgICAgICBlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgZS5vcGFjaXR5ID0gMjU1O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSkuc3RhcnQoKTtcbiAgfVxufSJdfQ==