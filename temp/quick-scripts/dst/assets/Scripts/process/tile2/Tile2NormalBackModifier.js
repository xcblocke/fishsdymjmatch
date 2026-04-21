
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/process/tile2/Tile2NormalBackModifier.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '74a18U/yEZI6ZiIrOzI8Sis', 'Tile2NormalBackModifier');
// Scripts/process/tile2/Tile2NormalBackModifier.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseCoreObject_1 = require("../../BaseCoreObject");
var TileTypeEnum_1 = require("../../simulator/constant/TileTypeEnum");
var Tile2NormalBackModifier = /** @class */ (function (_super) {
    __extends(Tile2NormalBackModifier, _super);
    function Tile2NormalBackModifier() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2NormalBackModifier.prototype.isEnable = function () {
        return false;
    };
    Tile2NormalBackModifier.prototype.getExcludeTiles = function () {
        return [TileTypeEnum_1.ETileType.RollCard, TileTypeEnum_1.ETileType.DaxiaoCard, TileTypeEnum_1.ETileType.DuoxiaoCard, TileTypeEnum_1.ETileType.RankCard, TileTypeEnum_1.ETileType.Yoga];
    };
    Tile2NormalBackModifier.prototype.modifyStatus = function () {
        var e, t;
        if (!this.isEnable())
            return [];
        var o = this.context.getTileMapObject().aliveTiles().filter(function (e) {
            return !e.getIsInSlotBar();
        }), n = this.getExcludeTiles(), i = [], r = function r(e) {
            if (n.some(function (t) {
                return e.checkHasType(t);
            }))
                return "continue";
            if (0 === e.isCardLock()) {
                if (e.getIsBack()) {
                    e.setIsBack(false);
                    i.push({
                        tileId: e.id,
                        isBack: false
                    });
                }
            }
            else if (!e.getIsBack()) {
                e.setIsBack(true);
                i.push({
                    tileId: e.id,
                    isBack: true
                });
            }
        };
        try {
            for (var l = __values(o), s = l.next(); !s.done; s = l.next())
                r(s.value);
        }
        catch (t) {
            e = {
                error: t
            };
        }
        finally {
            try {
                s && !s.done && (t = l.return) && t.call(l);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return i;
    };
    __decorate([
        mj.traitEvent("T2NorBackMod_isEnable")
    ], Tile2NormalBackModifier.prototype, "isEnable", null);
    __decorate([
        mj.traitEvent("T2NorBackMod_getExcludes")
    ], Tile2NormalBackModifier.prototype, "getExcludeTiles", null);
    return Tile2NormalBackModifier;
}(BaseCoreObject_1.BaseCoreObject));
exports.default = Tile2NormalBackModifier;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL3Byb2Nlc3MvdGlsZTIvVGlsZTJOb3JtYWxCYWNrTW9kaWZpZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVEQUFzRDtBQUN0RCxzRUFBa0U7QUFDbEU7SUFBcUQsMkNBQWM7SUFBbkU7O0lBb0RBLENBQUM7SUFsREMsMENBQVEsR0FBUjtRQUNFLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVELGlEQUFlLEdBQWY7UUFDRSxPQUFPLENBQUMsd0JBQVMsQ0FBQyxRQUFRLEVBQUUsd0JBQVMsQ0FBQyxVQUFVLEVBQUUsd0JBQVMsQ0FBQyxXQUFXLEVBQUUsd0JBQVMsQ0FBQyxRQUFRLEVBQUUsd0JBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvRyxDQUFDO0lBQ0QsOENBQVksR0FBWjtRQUNFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNULElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQUUsT0FBTyxFQUFFLENBQUM7UUFDaEMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLFVBQVUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUM7WUFDbkUsT0FBTyxDQUFDLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUM3QixDQUFDLENBQUMsRUFDRixDQUFDLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxFQUMxQixDQUFDLEdBQUcsRUFBRSxFQUNOLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ2QsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztnQkFDcEIsT0FBTyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNCLENBQUMsQ0FBQztnQkFBRSxPQUFPLFVBQVUsQ0FBQztZQUN0QixJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBVSxFQUFFLEVBQUU7Z0JBQ3hCLElBQUksQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFFO29CQUNqQixDQUFDLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNuQixDQUFDLENBQUMsSUFBSSxDQUFDO3dCQUNMLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRTt3QkFDWixNQUFNLEVBQUUsS0FBSztxQkFDZCxDQUFDLENBQUM7aUJBQ0o7YUFDRjtpQkFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFFO2dCQUN6QixDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNsQixDQUFDLENBQUMsSUFBSSxDQUFDO29CQUNMLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRTtvQkFDWixNQUFNLEVBQUUsSUFBSTtpQkFDYixDQUFDLENBQUM7YUFDSjtRQUNILENBQUMsQ0FBQztRQUNKLElBQUk7WUFDRixLQUFLLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRTtnQkFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzNFO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixDQUFDLEdBQUc7Z0JBQ0YsS0FBSyxFQUFFLENBQUM7YUFDVCxDQUFDO1NBQ0g7Z0JBQVM7WUFDUixJQUFJO2dCQUNGLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDN0M7b0JBQVM7Z0JBQ1IsSUFBSSxDQUFDO29CQUFFLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQzthQUN0QjtTQUNGO1FBQ0QsT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBakREO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyx1QkFBdUIsQ0FBQzsyREFHdEM7SUFFRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsMEJBQTBCLENBQUM7a0VBR3pDO0lBNENILDhCQUFDO0NBcERELEFBb0RDLENBcERvRCwrQkFBYyxHQW9EbEU7a0JBcERvQix1QkFBdUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYXNlQ29yZU9iamVjdCB9IGZyb20gJy4uLy4uL0Jhc2VDb3JlT2JqZWN0JztcbmltcG9ydCB7IEVUaWxlVHlwZSB9IGZyb20gJy4uLy4uL3NpbXVsYXRvci9jb25zdGFudC9UaWxlVHlwZUVudW0nO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlsZTJOb3JtYWxCYWNrTW9kaWZpZXIgZXh0ZW5kcyBCYXNlQ29yZU9iamVjdCB7XG4gIEBtai50cmFpdEV2ZW50KFwiVDJOb3JCYWNrTW9kX2lzRW5hYmxlXCIpXG4gIGlzRW5hYmxlKCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlQyTm9yQmFja01vZF9nZXRFeGNsdWRlc1wiKVxuICBnZXRFeGNsdWRlVGlsZXMoKSB7XG4gICAgcmV0dXJuIFtFVGlsZVR5cGUuUm9sbENhcmQsIEVUaWxlVHlwZS5EYXhpYW9DYXJkLCBFVGlsZVR5cGUuRHVveGlhb0NhcmQsIEVUaWxlVHlwZS5SYW5rQ2FyZCwgRVRpbGVUeXBlLllvZ2FdO1xuICB9XG4gIG1vZGlmeVN0YXR1cygpIHtcbiAgICB2YXIgZSwgdDtcbiAgICBpZiAoIXRoaXMuaXNFbmFibGUoKSkgcmV0dXJuIFtdO1xuICAgIHZhciBvID0gdGhpcy5jb250ZXh0LmdldFRpbGVNYXBPYmplY3QoKS5hbGl2ZVRpbGVzKCkuZmlsdGVyKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHJldHVybiAhZS5nZXRJc0luU2xvdEJhcigpO1xuICAgICAgfSksXG4gICAgICBuID0gdGhpcy5nZXRFeGNsdWRlVGlsZXMoKSxcbiAgICAgIGkgPSBbXSxcbiAgICAgIHIgPSBmdW5jdGlvbiByKGUpIHtcbiAgICAgICAgaWYgKG4uc29tZShmdW5jdGlvbiAodCkge1xuICAgICAgICAgIHJldHVybiBlLmNoZWNrSGFzVHlwZSh0KTtcbiAgICAgICAgfSkpIHJldHVybiBcImNvbnRpbnVlXCI7XG4gICAgICAgIGlmICgwID09PSBlLmlzQ2FyZExvY2soKSkge1xuICAgICAgICAgIGlmIChlLmdldElzQmFjaygpKSB7XG4gICAgICAgICAgICBlLnNldElzQmFjayhmYWxzZSk7XG4gICAgICAgICAgICBpLnB1c2goe1xuICAgICAgICAgICAgICB0aWxlSWQ6IGUuaWQsXG4gICAgICAgICAgICAgIGlzQmFjazogZmFsc2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICghZS5nZXRJc0JhY2soKSkge1xuICAgICAgICAgIGUuc2V0SXNCYWNrKHRydWUpO1xuICAgICAgICAgIGkucHVzaCh7XG4gICAgICAgICAgICB0aWxlSWQ6IGUuaWQsXG4gICAgICAgICAgICBpc0JhY2s6IHRydWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgbCA9IF9fdmFsdWVzKG8pLCBzID0gbC5uZXh0KCk7ICFzLmRvbmU7IHMgPSBsLm5leHQoKSkgcihzLnZhbHVlKTtcbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICBlID0ge1xuICAgICAgICBlcnJvcjogdFxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcyAmJiAhcy5kb25lICYmICh0ID0gbC5yZXR1cm4pICYmIHQuY2FsbChsKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChlKSB0aHJvdyBlLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaTtcbiAgfVxufSJdfQ==