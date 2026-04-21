
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/tilenodes/TileNodeFactory.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c4293ATjTJK37zmWTuBDs6I', 'TileNodeFactory');
// Scripts/tilenodes/TileNodeFactory.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.TileNodeFactory = void 0;
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var TileTypeEnum_1 = require("../simulator/constant/TileTypeEnum");
var BombCardTileNode_1 = require("../BombCardTileNode");
var ColorCardTileNode_1 = require("../ColorCardTileNode");
var DaxiaoCardTileNode_1 = require("../DaxiaoCardTileNode");
var DuoxiaoCardTileNode_1 = require("../DuoxiaoCardTileNode");
var RankCardTileNode_1 = require("../RankCardTileNode");
var RollCardTileNode_1 = require("../RollCardTileNode");
var TileNodeObject_1 = require("../TileNodeObject");
var Tile2NodeObject_1 = require("../Tile2NodeObject");
var YogaCardTileNode_1 = require("../YogaCardTileNode");
var TileNodeFactory = /** @class */ (function () {
    function TileNodeFactory() {
        this._tileType2TileNodeObject = new Map();
    }
    TileNodeFactory.getInstance = function () {
        if (!this._instance) {
            this._instance = new TileNodeFactory();
            this._instance.initTypes();
        }
        return this._instance;
    };
    TileNodeFactory.prototype.initTypes = function () {
        this._tileType2TileNodeObject.set(TileTypeEnum_1.ETileNodeShowType.Normal, TileNodeObject_1.TileNodeObject);
        this._tileType2TileNodeObject.set(TileTypeEnum_1.ETileNodeShowType.RollCard, RollCardTileNode_1.RollCardTileNode);
        this._tileType2TileNodeObject.set(TileTypeEnum_1.ETileNodeShowType.ColorCard, ColorCardTileNode_1.ColorCardTileNode);
        this._tileType2TileNodeObject.set(TileTypeEnum_1.ETileNodeShowType.Yoga, YogaCardTileNode_1.YogaCardTileNode);
        this._tileType2TileNodeObject.set(TileTypeEnum_1.ETileNodeShowType.RankCard, RankCardTileNode_1.RankCardTileNode);
        this._tileType2TileNodeObject.set(TileTypeEnum_1.ETileNodeShowType.Bomb, BombCardTileNode_1.BombCardTileNode);
        this._tileType2TileNodeObject.set(TileTypeEnum_1.ETileNodeShowType.DaxiaoCard, DaxiaoCardTileNode_1.DaxiaoCardTileNode);
        this._tileType2TileNodeObject.set(TileTypeEnum_1.ETileNodeShowType.DuoxiaoCard, DuoxiaoCardTileNode_1.DuoxiaoCardTileNode);
    };
    TileNodeFactory.prototype.getTileNodeObject = function (e, t) {
        if (t == GameTypeEnums_1.MjGameType.Tile2Normal)
            return new Tile2NodeObject_1.Tile2NodeObject();
        var o = this._tileType2TileNodeObject.get(e.showType);
        return o ? new o() : new (this._tileType2TileNodeObject.get(TileTypeEnum_1.ETileNodeShowType.Normal))();
    };
    TileNodeFactory._instance = null;
    return TileNodeFactory;
}());
exports.TileNodeFactory = TileNodeFactory;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL3RpbGVub2Rlcy9UaWxlTm9kZUZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwRUFBc0U7QUFDdEUsbUVBQXVFO0FBQ3ZFLHdEQUF1RDtBQUN2RCwwREFBeUQ7QUFDekQsNERBQTJEO0FBQzNELDhEQUE2RDtBQUM3RCx3REFBdUQ7QUFDdkQsd0RBQXVEO0FBQ3ZELG9EQUFtRDtBQUNuRCxzREFBcUQ7QUFDckQsd0RBQXVEO0FBQ3ZEO0lBQUE7UUFDRSw2QkFBd0IsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO0lBd0J2QyxDQUFDO0lBdEJRLDJCQUFXLEdBQWxCO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLGVBQWUsRUFBRSxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDNUI7UUFDRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQUNELG1DQUFTLEdBQVQ7UUFDRSxJQUFJLENBQUMsd0JBQXdCLENBQUMsR0FBRyxDQUFDLGdDQUFpQixDQUFDLE1BQU0sRUFBRSwrQkFBYyxDQUFDLENBQUM7UUFDNUUsSUFBSSxDQUFDLHdCQUF3QixDQUFDLEdBQUcsQ0FBQyxnQ0FBaUIsQ0FBQyxRQUFRLEVBQUUsbUNBQWdCLENBQUMsQ0FBQztRQUNoRixJQUFJLENBQUMsd0JBQXdCLENBQUMsR0FBRyxDQUFDLGdDQUFpQixDQUFDLFNBQVMsRUFBRSxxQ0FBaUIsQ0FBQyxDQUFDO1FBQ2xGLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxHQUFHLENBQUMsZ0NBQWlCLENBQUMsSUFBSSxFQUFFLG1DQUFnQixDQUFDLENBQUM7UUFDNUUsSUFBSSxDQUFDLHdCQUF3QixDQUFDLEdBQUcsQ0FBQyxnQ0FBaUIsQ0FBQyxRQUFRLEVBQUUsbUNBQWdCLENBQUMsQ0FBQztRQUNoRixJQUFJLENBQUMsd0JBQXdCLENBQUMsR0FBRyxDQUFDLGdDQUFpQixDQUFDLElBQUksRUFBRSxtQ0FBZ0IsQ0FBQyxDQUFDO1FBQzVFLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxHQUFHLENBQUMsZ0NBQWlCLENBQUMsVUFBVSxFQUFFLHVDQUFrQixDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLHdCQUF3QixDQUFDLEdBQUcsQ0FBQyxnQ0FBaUIsQ0FBQyxXQUFXLEVBQUUseUNBQW1CLENBQUMsQ0FBQztJQUN4RixDQUFDO0lBQ0QsMkNBQWlCLEdBQWpCLFVBQWtCLENBQUMsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxJQUFJLDBCQUFVLENBQUMsV0FBVztZQUFFLE9BQU8sSUFBSSxpQ0FBZSxFQUFFLENBQUM7UUFDOUQsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdEQsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsR0FBRyxDQUFDLGdDQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUMzRixDQUFDO0lBdEJNLHlCQUFTLEdBQUcsSUFBSSxDQUFDO0lBdUIxQixzQkFBQztDQXpCRCxBQXlCQyxJQUFBO0FBekJZLDBDQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWpHYW1lVHlwZSB9IGZyb20gJy4uL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuaW1wb3J0IHsgRVRpbGVOb2RlU2hvd1R5cGUgfSBmcm9tICcuLi9zaW11bGF0b3IvY29uc3RhbnQvVGlsZVR5cGVFbnVtJztcbmltcG9ydCB7IEJvbWJDYXJkVGlsZU5vZGUgfSBmcm9tICcuLi9Cb21iQ2FyZFRpbGVOb2RlJztcbmltcG9ydCB7IENvbG9yQ2FyZFRpbGVOb2RlIH0gZnJvbSAnLi4vQ29sb3JDYXJkVGlsZU5vZGUnO1xuaW1wb3J0IHsgRGF4aWFvQ2FyZFRpbGVOb2RlIH0gZnJvbSAnLi4vRGF4aWFvQ2FyZFRpbGVOb2RlJztcbmltcG9ydCB7IER1b3hpYW9DYXJkVGlsZU5vZGUgfSBmcm9tICcuLi9EdW94aWFvQ2FyZFRpbGVOb2RlJztcbmltcG9ydCB7IFJhbmtDYXJkVGlsZU5vZGUgfSBmcm9tICcuLi9SYW5rQ2FyZFRpbGVOb2RlJztcbmltcG9ydCB7IFJvbGxDYXJkVGlsZU5vZGUgfSBmcm9tICcuLi9Sb2xsQ2FyZFRpbGVOb2RlJztcbmltcG9ydCB7IFRpbGVOb2RlT2JqZWN0IH0gZnJvbSAnLi4vVGlsZU5vZGVPYmplY3QnO1xuaW1wb3J0IHsgVGlsZTJOb2RlT2JqZWN0IH0gZnJvbSAnLi4vVGlsZTJOb2RlT2JqZWN0JztcbmltcG9ydCB7IFlvZ2FDYXJkVGlsZU5vZGUgfSBmcm9tICcuLi9Zb2dhQ2FyZFRpbGVOb2RlJztcbmV4cG9ydCBjbGFzcyBUaWxlTm9kZUZhY3Rvcnkge1xuICBfdGlsZVR5cGUyVGlsZU5vZGVPYmplY3QgPSBuZXcgTWFwKCk7XG4gIHN0YXRpYyBfaW5zdGFuY2UgPSBudWxsO1xuICBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XG4gICAgaWYgKCF0aGlzLl9pbnN0YW5jZSkge1xuICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgVGlsZU5vZGVGYWN0b3J5KCk7XG4gICAgICB0aGlzLl9pbnN0YW5jZS5pbml0VHlwZXMoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xuICB9XG4gIGluaXRUeXBlcygpIHtcbiAgICB0aGlzLl90aWxlVHlwZTJUaWxlTm9kZU9iamVjdC5zZXQoRVRpbGVOb2RlU2hvd1R5cGUuTm9ybWFsLCBUaWxlTm9kZU9iamVjdCk7XG4gICAgdGhpcy5fdGlsZVR5cGUyVGlsZU5vZGVPYmplY3Quc2V0KEVUaWxlTm9kZVNob3dUeXBlLlJvbGxDYXJkLCBSb2xsQ2FyZFRpbGVOb2RlKTtcbiAgICB0aGlzLl90aWxlVHlwZTJUaWxlTm9kZU9iamVjdC5zZXQoRVRpbGVOb2RlU2hvd1R5cGUuQ29sb3JDYXJkLCBDb2xvckNhcmRUaWxlTm9kZSk7XG4gICAgdGhpcy5fdGlsZVR5cGUyVGlsZU5vZGVPYmplY3Quc2V0KEVUaWxlTm9kZVNob3dUeXBlLllvZ2EsIFlvZ2FDYXJkVGlsZU5vZGUpO1xuICAgIHRoaXMuX3RpbGVUeXBlMlRpbGVOb2RlT2JqZWN0LnNldChFVGlsZU5vZGVTaG93VHlwZS5SYW5rQ2FyZCwgUmFua0NhcmRUaWxlTm9kZSk7XG4gICAgdGhpcy5fdGlsZVR5cGUyVGlsZU5vZGVPYmplY3Quc2V0KEVUaWxlTm9kZVNob3dUeXBlLkJvbWIsIEJvbWJDYXJkVGlsZU5vZGUpO1xuICAgIHRoaXMuX3RpbGVUeXBlMlRpbGVOb2RlT2JqZWN0LnNldChFVGlsZU5vZGVTaG93VHlwZS5EYXhpYW9DYXJkLCBEYXhpYW9DYXJkVGlsZU5vZGUpO1xuICAgIHRoaXMuX3RpbGVUeXBlMlRpbGVOb2RlT2JqZWN0LnNldChFVGlsZU5vZGVTaG93VHlwZS5EdW94aWFvQ2FyZCwgRHVveGlhb0NhcmRUaWxlTm9kZSk7XG4gIH1cbiAgZ2V0VGlsZU5vZGVPYmplY3QoZSwgdCkge1xuICAgIGlmICh0ID09IE1qR2FtZVR5cGUuVGlsZTJOb3JtYWwpIHJldHVybiBuZXcgVGlsZTJOb2RlT2JqZWN0KCk7XG4gICAgdmFyIG8gPSB0aGlzLl90aWxlVHlwZTJUaWxlTm9kZU9iamVjdC5nZXQoZS5zaG93VHlwZSk7XG4gICAgcmV0dXJuIG8gPyBuZXcgbygpIDogbmV3ICh0aGlzLl90aWxlVHlwZTJUaWxlTm9kZU9iamVjdC5nZXQoRVRpbGVOb2RlU2hvd1R5cGUuTm9ybWFsKSkoKTtcbiAgfVxufSJdfQ==