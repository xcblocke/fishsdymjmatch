"use strict";
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