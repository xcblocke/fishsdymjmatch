"use strict";
cc._RF.push(module, '30980eWI5BEka519vSuVJZL', 'Tile2ComponentRegistry');
// Scripts/Tile2ComponentRegistry.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2ComponentRegistry = void 0;
var TileTypeEnum_1 = require("./simulator/constant/TileTypeEnum");
var RollCardComponent_1 = require("./RollCardComponent");
var Tile2BombCardComponent_1 = require("./Tile2BombCardComponent");
var Tile2ColorCardComponent_1 = require("./Tile2ColorCardComponent");
var Tile2DaxiaoCardComponent_1 = require("./Tile2DaxiaoCardComponent");
var Tile2DuoxiaoCardComponent_1 = require("./Tile2DuoxiaoCardComponent");
var Tile2DarkenComponent_1 = require("./Tile2DarkenComponent");
var Tile2HintComponent_1 = require("./Tile2HintComponent");
var Tile2RankCardComponent_1 = require("./Tile2RankCardComponent");
var Tile2SlotBarAniComponent_1 = require("./Tile2SlotBarAniComponent");
var Tile2YogaCardComponent_1 = require("./Tile2YogaCardComponent");
var TileNodeComponent_1 = require("./TileNodeComponent");
var Tile2ComponentRegistry = /** @class */ (function () {
    function Tile2ComponentRegistry() {
    }
    Tile2ComponentRegistry.registerAll = function () {
        if (!Tile2ComponentRegistry._registered) {
            Tile2ComponentRegistry._registered = true;
            TileNodeComponent_1.TileNodeComponent.register(TileTypeEnum_1.ETileComponent.Tile2ComponentRollCard, function () {
                return new RollCardComponent_1.RollCardComponent();
            });
            TileNodeComponent_1.TileNodeComponent.register(TileTypeEnum_1.ETileComponent.Tile2ComponentSlotBarAni, function () {
                return new Tile2SlotBarAniComponent_1.Tile2SlotBarAniComponent();
            });
            TileNodeComponent_1.TileNodeComponent.register(TileTypeEnum_1.ETileComponent.Tile2ComponentHint, function () {
                return new Tile2HintComponent_1.Tile2HintComponent();
            });
            TileNodeComponent_1.TileNodeComponent.register(TileTypeEnum_1.ETileComponent.Tile2ComponentLockDarken, function () {
                return new Tile2DarkenComponent_1.Tile2DarkenComponent();
            });
            TileNodeComponent_1.TileNodeComponent.register(TileTypeEnum_1.ETileComponent.Tile2ComponentBomb, function () {
                return new Tile2BombCardComponent_1.Tile2BombCardComponent();
            });
            TileNodeComponent_1.TileNodeComponent.register(TileTypeEnum_1.ETileComponent.Tile2ComponentColor, function () {
                return new Tile2ColorCardComponent_1.Tile2ColorCardComponent();
            });
            TileNodeComponent_1.TileNodeComponent.register(TileTypeEnum_1.ETileComponent.Tile2ComponentRank, function () {
                return new Tile2RankCardComponent_1.Tile2RankCardComponent();
            });
            TileNodeComponent_1.TileNodeComponent.register(TileTypeEnum_1.ETileComponent.Tile2ComponentYoga, function () {
                return new Tile2YogaCardComponent_1.Tile2YogaCardComponent();
            });
            TileNodeComponent_1.TileNodeComponent.register(TileTypeEnum_1.ETileComponent.Tile2ComponentDaxiao, function () {
                return new Tile2DaxiaoCardComponent_1.Tile2DaxiaoCardComponent();
            });
            TileNodeComponent_1.TileNodeComponent.register(TileTypeEnum_1.ETileComponent.Tile2ComponentDuoxiao, function () {
                return new Tile2DuoxiaoCardComponent_1.Tile2DuoxiaoCardComponent();
            });
        }
    };
    Tile2ComponentRegistry._registered = false;
    return Tile2ComponentRegistry;
}());
exports.Tile2ComponentRegistry = Tile2ComponentRegistry;

cc._RF.pop();