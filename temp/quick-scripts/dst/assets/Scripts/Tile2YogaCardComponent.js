
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Tile2YogaCardComponent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '68df7lyet5NorcmGwuRkD+b', 'Tile2YogaCardComponent');
// Scripts/Tile2YogaCardComponent.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2YogaCardComponent = void 0;
var BaseSprite_1 = require("./gamePlay/base/ui/BaseSprite");
var TravelGameModel_1 = require("./gamePlay/travel/model/TravelGameModel");
var CardUtil_1 = require("./gamePlay/user/CardUtil");
var GameTypeEnums_1 = require("./core/simulator/constant/GameTypeEnums");
var TileNodeComponent_1 = require("./TileNodeComponent");
var Tile2YogaCardComponent = /** @class */ (function (_super) {
    __extends(Tile2YogaCardComponent, _super);
    function Tile2YogaCardComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2YogaCardComponent.prototype.onUpdateImgCard = function () {
        var e = this._getYogaIcon(), t = e.path, o = e.bundleName, n = e.fromAtlas;
        BaseSprite_1.default.refreshWithNode(this._host.imgCard, t, n, false, o);
        this._host.saveCardUniqueInfo(o, t, n);
        return true;
    };
    Tile2YogaCardComponent.prototype.onUpdateImgCardBg = function () {
        this._host.imgCardBg.active = false;
        this._host.imgCardBg.opacity = 0;
        return true;
    };
    Tile2YogaCardComponent.prototype.onUpdateShadowNode = function () {
        this._host.shadowNode.active = false;
        this._host.shadowNode.opacity = 0;
        return true;
    };
    Tile2YogaCardComponent.prototype.onUpdateLockBg = function () {
        var e = this._host.imgLockBg, t = null == e ? void 0 : e.getComponent(cc.Sprite);
        t && (t.enabled = false);
        if (e) {
            e.active = false;
            e.opacity = 0;
        }
        return true;
    };
    Tile2YogaCardComponent.prototype.onShowSelectEffect = function () {
        var e = this._host;
        if (e._imgSelected && e._imgSelected.active)
            return true;
        e.imgSelected.active = true;
        e.imgSelectedCardBg.active = true;
        e.effectSelected.active = true;
        e.imgSelected.opacity = 0;
        e.imgSelectedCardBg.opacity = 0;
        e.effectSelected.opacity = 0;
        return true;
    };
    Tile2YogaCardComponent.prototype._getYogaIcon = function () {
        var e, t;
        if ((null === (t = null === (e = this._host.context) || void 0 === e ? void 0 : e.gameCtr) || void 0 === t ? void 0 : t.gameType) === GameTypeEnums_1.MjGameType.Travel) {
            var o = TravelGameModel_1.default.getInstance().getCurJourney(), n = TravelGameModel_1.default.getInstance().getConfig(o);
            if (null == n ? void 0 : n.yoga)
                return {
                    path: "texture/journey/yoga/" + n.yoga,
                    bundleName: "mainRes",
                    fromAtlas: false
                };
        }
        return CardUtil_1.default.getAtlasPathAndBundleName(this._host.tileObject.resName, this._host);
    };
    return Tile2YogaCardComponent;
}(TileNodeComponent_1.TileNodeComponent));
exports.Tile2YogaCardComponent = Tile2YogaCardComponent;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1RpbGUyWW9nYUNhcmRDb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0REFBdUQ7QUFDdkQsMkVBQXNFO0FBQ3RFLHFEQUFnRDtBQUNoRCx5RUFBcUU7QUFDckUseURBQXdEO0FBQ3hEO0lBQTRDLDBDQUFpQjtJQUE3RDs7SUFzREEsQ0FBQztJQXJEQyxnREFBZSxHQUFmO1FBQ0UsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRSxFQUN6QixDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFDVixDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQVUsRUFDaEIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDbEIsb0JBQVUsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUNELGtEQUFpQixHQUFqQjtRQUNFLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUNqQyxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFDRCxtREFBa0IsR0FBbEI7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDbEMsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBQ0QsK0NBQWMsR0FBZDtRQUNFLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUMxQixDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JELENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLEVBQUU7WUFDTCxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNqQixDQUFDLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztTQUNmO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBQ0QsbURBQWtCLEdBQWxCO1FBQ0UsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsQ0FBQyxZQUFZLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxNQUFNO1lBQUUsT0FBTyxJQUFJLENBQUM7UUFDekQsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQzVCLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2xDLENBQUMsQ0FBQyxjQUFjLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUMvQixDQUFDLENBQUMsV0FBVyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDMUIsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQzdCLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUNELDZDQUFZLEdBQVo7UUFDRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDVCxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssMEJBQVUsQ0FBQyxNQUFNLEVBQUU7WUFDdkosSUFBSSxDQUFDLEdBQUcseUJBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxhQUFhLEVBQUUsRUFDbkQsQ0FBQyxHQUFHLHlCQUFlLENBQUMsV0FBVyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pELElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJO2dCQUFFLE9BQU87b0JBQ3RDLElBQUksRUFBRSx1QkFBdUIsR0FBRyxDQUFDLENBQUMsSUFBSTtvQkFDdEMsVUFBVSxFQUFFLFNBQVM7b0JBQ3JCLFNBQVMsRUFBRSxLQUFLO2lCQUNqQixDQUFDO1NBQ0g7UUFDRCxPQUFPLGtCQUFRLENBQUMseUJBQXlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2RixDQUFDO0lBQ0gsNkJBQUM7QUFBRCxDQXREQSxBQXNEQyxDQXREMkMscUNBQWlCLEdBc0Q1RDtBQXREWSx3REFBc0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZVNwcml0ZSBmcm9tICcuL2dhbWVQbGF5L2Jhc2UvdWkvQmFzZVNwcml0ZSc7XG5pbXBvcnQgVHJhdmVsR2FtZU1vZGVsIGZyb20gJy4vZ2FtZVBsYXkvdHJhdmVsL21vZGVsL1RyYXZlbEdhbWVNb2RlbCc7XG5pbXBvcnQgQ2FyZFV0aWwgZnJvbSAnLi9nYW1lUGxheS91c2VyL0NhcmRVdGlsJztcbmltcG9ydCB7IE1qR2FtZVR5cGUgfSBmcm9tICcuL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuaW1wb3J0IHsgVGlsZU5vZGVDb21wb25lbnQgfSBmcm9tICcuL1RpbGVOb2RlQ29tcG9uZW50JztcbmV4cG9ydCBjbGFzcyBUaWxlMllvZ2FDYXJkQ29tcG9uZW50IGV4dGVuZHMgVGlsZU5vZGVDb21wb25lbnQge1xuICBvblVwZGF0ZUltZ0NhcmQoKSB7XG4gICAgdmFyIGUgPSB0aGlzLl9nZXRZb2dhSWNvbigpLFxuICAgICAgdCA9IGUucGF0aCxcbiAgICAgIG8gPSBlLmJ1bmRsZU5hbWUsXG4gICAgICBuID0gZS5mcm9tQXRsYXM7XG4gICAgQmFzZVNwcml0ZS5yZWZyZXNoV2l0aE5vZGUodGhpcy5faG9zdC5pbWdDYXJkLCB0LCBuLCBmYWxzZSwgbyk7XG4gICAgdGhpcy5faG9zdC5zYXZlQ2FyZFVuaXF1ZUluZm8obywgdCwgbik7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgb25VcGRhdGVJbWdDYXJkQmcoKSB7XG4gICAgdGhpcy5faG9zdC5pbWdDYXJkQmcuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5faG9zdC5pbWdDYXJkQmcub3BhY2l0eSA9IDA7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgb25VcGRhdGVTaGFkb3dOb2RlKCkge1xuICAgIHRoaXMuX2hvc3Quc2hhZG93Tm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLl9ob3N0LnNoYWRvd05vZGUub3BhY2l0eSA9IDA7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgb25VcGRhdGVMb2NrQmcoKSB7XG4gICAgdmFyIGUgPSB0aGlzLl9ob3N0LmltZ0xvY2tCZyxcbiAgICAgIHQgPSBudWxsID09IGUgPyB2b2lkIDAgOiBlLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgIHQgJiYgKHQuZW5hYmxlZCA9IGZhbHNlKTtcbiAgICBpZiAoZSkge1xuICAgICAgZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIGUub3BhY2l0eSA9IDA7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIG9uU2hvd1NlbGVjdEVmZmVjdCgpIHtcbiAgICB2YXIgZSA9IHRoaXMuX2hvc3Q7XG4gICAgaWYgKGUuX2ltZ1NlbGVjdGVkICYmIGUuX2ltZ1NlbGVjdGVkLmFjdGl2ZSkgcmV0dXJuIHRydWU7XG4gICAgZS5pbWdTZWxlY3RlZC5hY3RpdmUgPSB0cnVlO1xuICAgIGUuaW1nU2VsZWN0ZWRDYXJkQmcuYWN0aXZlID0gdHJ1ZTtcbiAgICBlLmVmZmVjdFNlbGVjdGVkLmFjdGl2ZSA9IHRydWU7XG4gICAgZS5pbWdTZWxlY3RlZC5vcGFjaXR5ID0gMDtcbiAgICBlLmltZ1NlbGVjdGVkQ2FyZEJnLm9wYWNpdHkgPSAwO1xuICAgIGUuZWZmZWN0U2VsZWN0ZWQub3BhY2l0eSA9IDA7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgX2dldFlvZ2FJY29uKCkge1xuICAgIHZhciBlLCB0O1xuICAgIGlmICgobnVsbCA9PT0gKHQgPSBudWxsID09PSAoZSA9IHRoaXMuX2hvc3QuY29udGV4dCkgfHwgdm9pZCAwID09PSBlID8gdm9pZCAwIDogZS5nYW1lQ3RyKSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0LmdhbWVUeXBlKSA9PT0gTWpHYW1lVHlwZS5UcmF2ZWwpIHtcbiAgICAgIHZhciBvID0gVHJhdmVsR2FtZU1vZGVsLmdldEluc3RhbmNlKCkuZ2V0Q3VySm91cm5leSgpLFxuICAgICAgICBuID0gVHJhdmVsR2FtZU1vZGVsLmdldEluc3RhbmNlKCkuZ2V0Q29uZmlnKG8pO1xuICAgICAgaWYgKG51bGwgPT0gbiA/IHZvaWQgMCA6IG4ueW9nYSkgcmV0dXJuIHtcbiAgICAgICAgcGF0aDogXCJ0ZXh0dXJlL2pvdXJuZXkveW9nYS9cIiArIG4ueW9nYSxcbiAgICAgICAgYnVuZGxlTmFtZTogXCJtYWluUmVzXCIsXG4gICAgICAgIGZyb21BdGxhczogZmFsc2VcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBDYXJkVXRpbC5nZXRBdGxhc1BhdGhBbmRCdW5kbGVOYW1lKHRoaXMuX2hvc3QudGlsZU9iamVjdC5yZXNOYW1lLCB0aGlzLl9ob3N0KTtcbiAgfVxufSJdfQ==