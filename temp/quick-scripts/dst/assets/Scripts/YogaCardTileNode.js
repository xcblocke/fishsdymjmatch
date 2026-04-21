
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/YogaCardTileNode.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a1f3dzrcRFE27kUbcKkKzOq', 'YogaCardTileNode');
// Scripts/YogaCardTileNode.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.YogaCardTileNode = void 0;
var BaseSprite_1 = require("./gamePlay/base/ui/BaseSprite");
var TravelGameModel_1 = require("./gamePlay/travel/model/TravelGameModel");
var CardUtil_1 = require("./gamePlay/user/CardUtil");
var GameTypeEnums_1 = require("./core/simulator/constant/GameTypeEnums");
var TileTypeEnum_1 = require("./simulator/constant/TileTypeEnum");
var TileNodeObject_1 = require("./TileNodeObject");
var YogaCardTileNode = /** @class */ (function (_super) {
    __extends(YogaCardTileNode, _super);
    function YogaCardTileNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._initType = TileTypeEnum_1.ETileNodeShowType.Yoga;
        return _this;
    }
    YogaCardTileNode.prototype.updateImgCard = function () {
        var e = this.getYogaIcon(), t = e.path, o = e.bundleName, n = e.fromAtlas;
        BaseSprite_1.default.refreshWithNode(this.imgCard, t, n, false, o);
        this.saveCardUniqueInfo(o, t, n);
    };
    YogaCardTileNode.prototype.getYogaIcon = function () {
        if (this.context.gameCtr.gameType === GameTypeEnums_1.MjGameType.Travel) {
            var e = TravelGameModel_1.default.getInstance().getCurJourney(), t = TravelGameModel_1.default.getInstance().getConfig(e);
            if (t && t.yoga) {
                var o = __read(this.getYogaIconPath(t.yoga), 2), n = o[0];
                return {
                    path: o[1],
                    bundleName: n,
                    fromAtlas: false
                };
            }
        }
        return CardUtil_1.default.getAtlasPathAndBundleName(this.tileObject.resName, this);
    };
    YogaCardTileNode.prototype.getYogaIconPath = function (e) {
        var t = e.split(":");
        return 2 === t.length ? [t[0], "texture/" + t[1]] : ["mainRes", "texture/journey/yoga/" + e];
    };
    YogaCardTileNode.prototype.showSelectEffect = function () {
        if (!this._imgSelected || !this._imgSelected.active) {
            this.imgSelected.active = true;
            this.imgSelectedCardBg.active = true;
            this.effectSelected.active = true;
            this.imgSelected.opacity = 0;
            this.imgSelectedCardBg.opacity = 0;
            this.effectSelected.opacity = 0;
        }
    };
    YogaCardTileNode.prototype.updateImgCardBg = function () {
        this.imgCardBg.active = false;
        this.imgCardBg.opacity = 0;
    };
    YogaCardTileNode.prototype.updateShadowNode = function () {
        this.shadowNode.active = false;
        this.shadowNode.opacity = 0;
    };
    YogaCardTileNode.prototype.updateLockBg = function () {
        this.imgLockBg.getComponent(cc.Sprite) && (this.imgLockBg.getComponent(cc.Sprite).enabled = false);
        this.imgLockBg.active = false;
        this.imgLockBg.opacity = 0;
    };
    return YogaCardTileNode;
}(TileNodeObject_1.TileNodeObject));
exports.YogaCardTileNode = YogaCardTileNode;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1lvZ2FDYXJkVGlsZU5vZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0REFBdUQ7QUFDdkQsMkVBQXNFO0FBQ3RFLHFEQUFnRDtBQUNoRCx5RUFBcUU7QUFDckUsa0VBQXNFO0FBQ3RFLG1EQUFrRDtBQUVsRDtJQUFzQyxvQ0FBYztJQUFwRDtRQUFBLHFFQXFEQztRQXBEQyxlQUFTLEdBQUcsZ0NBQWlCLENBQUMsSUFBSSxDQUFDOztJQW9EckMsQ0FBQztJQW5EQyx3Q0FBYSxHQUFiO1FBQ0UsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUN4QixDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFDVixDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQVUsRUFDaEIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDbEIsb0JBQVUsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBQ0Qsc0NBQVcsR0FBWDtRQUNFLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxLQUFLLDBCQUFVLENBQUMsTUFBTSxFQUFFO1lBQ3ZELElBQUksQ0FBQyxHQUFHLHlCQUFlLENBQUMsV0FBVyxFQUFFLENBQUMsYUFBYSxFQUFFLEVBQ25ELENBQUMsR0FBRyx5QkFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqRCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFO2dCQUNmLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDN0MsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDWCxPQUFPO29CQUNMLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNWLFVBQVUsRUFBRSxDQUFDO29CQUNiLFNBQVMsRUFBRSxLQUFLO2lCQUNqQixDQUFDO2FBQ0g7U0FDRjtRQUNELE9BQU8sa0JBQVEsQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMzRSxDQUFDO0lBQ0QsMENBQWUsR0FBZixVQUFnQixDQUFDO1FBQ2YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyQixPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLHVCQUF1QixHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQy9GLENBQUM7SUFDRCwyQ0FBZ0IsR0FBaEI7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFO1lBQ25ELElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUMvQixJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNyQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDbEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1lBQzdCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1lBQ25DLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztTQUNqQztJQUNILENBQUM7SUFDRCwwQ0FBZSxHQUFmO1FBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQzlCLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBQ0QsMkNBQWdCLEdBQWhCO1FBQ0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQy9CLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBQ0QsdUNBQVksR0FBWjtRQUNFLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDbkcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQzlCLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBQ0gsdUJBQUM7QUFBRCxDQXJEQSxBQXFEQyxDQXJEcUMsK0JBQWMsR0FxRG5EO0FBckRZLDRDQUFnQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlU3ByaXRlIGZyb20gJy4vZ2FtZVBsYXkvYmFzZS91aS9CYXNlU3ByaXRlJztcbmltcG9ydCBUcmF2ZWxHYW1lTW9kZWwgZnJvbSAnLi9nYW1lUGxheS90cmF2ZWwvbW9kZWwvVHJhdmVsR2FtZU1vZGVsJztcbmltcG9ydCBDYXJkVXRpbCBmcm9tICcuL2dhbWVQbGF5L3VzZXIvQ2FyZFV0aWwnO1xuaW1wb3J0IHsgTWpHYW1lVHlwZSB9IGZyb20gJy4vY29yZS9zaW11bGF0b3IvY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG5pbXBvcnQgeyBFVGlsZU5vZGVTaG93VHlwZSB9IGZyb20gJy4vc2ltdWxhdG9yL2NvbnN0YW50L1RpbGVUeXBlRW51bSc7XG5pbXBvcnQgeyBUaWxlTm9kZU9iamVjdCB9IGZyb20gJy4vVGlsZU5vZGVPYmplY3QnO1xuXG5leHBvcnQgY2xhc3MgWW9nYUNhcmRUaWxlTm9kZSBleHRlbmRzIFRpbGVOb2RlT2JqZWN0IHtcbiAgX2luaXRUeXBlID0gRVRpbGVOb2RlU2hvd1R5cGUuWW9nYTtcbiAgdXBkYXRlSW1nQ2FyZCgpIHtcbiAgICB2YXIgZSA9IHRoaXMuZ2V0WW9nYUljb24oKSxcbiAgICAgIHQgPSBlLnBhdGgsXG4gICAgICBvID0gZS5idW5kbGVOYW1lLFxuICAgICAgbiA9IGUuZnJvbUF0bGFzO1xuICAgIEJhc2VTcHJpdGUucmVmcmVzaFdpdGhOb2RlKHRoaXMuaW1nQ2FyZCwgdCwgbiwgZmFsc2UsIG8pO1xuICAgIHRoaXMuc2F2ZUNhcmRVbmlxdWVJbmZvKG8sIHQsIG4pO1xuICB9XG4gIGdldFlvZ2FJY29uKCkge1xuICAgIGlmICh0aGlzLmNvbnRleHQuZ2FtZUN0ci5nYW1lVHlwZSA9PT0gTWpHYW1lVHlwZS5UcmF2ZWwpIHtcbiAgICAgIHZhciBlID0gVHJhdmVsR2FtZU1vZGVsLmdldEluc3RhbmNlKCkuZ2V0Q3VySm91cm5leSgpLFxuICAgICAgICB0ID0gVHJhdmVsR2FtZU1vZGVsLmdldEluc3RhbmNlKCkuZ2V0Q29uZmlnKGUpO1xuICAgICAgaWYgKHQgJiYgdC55b2dhKSB7XG4gICAgICAgIHZhciBvID0gX19yZWFkKHRoaXMuZ2V0WW9nYUljb25QYXRoKHQueW9nYSksIDIpLFxuICAgICAgICAgIG4gPSBvWzBdO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHBhdGg6IG9bMV0sXG4gICAgICAgICAgYnVuZGxlTmFtZTogbixcbiAgICAgICAgICBmcm9tQXRsYXM6IGZhbHNlXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBDYXJkVXRpbC5nZXRBdGxhc1BhdGhBbmRCdW5kbGVOYW1lKHRoaXMudGlsZU9iamVjdC5yZXNOYW1lLCB0aGlzKTtcbiAgfVxuICBnZXRZb2dhSWNvblBhdGgoZSkge1xuICAgIHZhciB0ID0gZS5zcGxpdChcIjpcIik7XG4gICAgcmV0dXJuIDIgPT09IHQubGVuZ3RoID8gW3RbMF0sIFwidGV4dHVyZS9cIiArIHRbMV1dIDogW1wibWFpblJlc1wiLCBcInRleHR1cmUvam91cm5leS95b2dhL1wiICsgZV07XG4gIH1cbiAgc2hvd1NlbGVjdEVmZmVjdCgpIHtcbiAgICBpZiAoIXRoaXMuX2ltZ1NlbGVjdGVkIHx8ICF0aGlzLl9pbWdTZWxlY3RlZC5hY3RpdmUpIHtcbiAgICAgIHRoaXMuaW1nU2VsZWN0ZWQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgIHRoaXMuaW1nU2VsZWN0ZWRDYXJkQmcuYWN0aXZlID0gdHJ1ZTtcbiAgICAgIHRoaXMuZWZmZWN0U2VsZWN0ZWQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgIHRoaXMuaW1nU2VsZWN0ZWQub3BhY2l0eSA9IDA7XG4gICAgICB0aGlzLmltZ1NlbGVjdGVkQ2FyZEJnLm9wYWNpdHkgPSAwO1xuICAgICAgdGhpcy5lZmZlY3RTZWxlY3RlZC5vcGFjaXR5ID0gMDtcbiAgICB9XG4gIH1cbiAgdXBkYXRlSW1nQ2FyZEJnKCkge1xuICAgIHRoaXMuaW1nQ2FyZEJnLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMuaW1nQ2FyZEJnLm9wYWNpdHkgPSAwO1xuICB9XG4gIHVwZGF0ZVNoYWRvd05vZGUoKSB7XG4gICAgdGhpcy5zaGFkb3dOb2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMuc2hhZG93Tm9kZS5vcGFjaXR5ID0gMDtcbiAgfVxuICB1cGRhdGVMb2NrQmcoKSB7XG4gICAgdGhpcy5pbWdMb2NrQmcuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkgJiYgKHRoaXMuaW1nTG9ja0JnLmdldENvbXBvbmVudChjYy5TcHJpdGUpLmVuYWJsZWQgPSBmYWxzZSk7XG4gICAgdGhpcy5pbWdMb2NrQmcuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5pbWdMb2NrQmcub3BhY2l0eSA9IDA7XG4gIH1cbn0iXX0=