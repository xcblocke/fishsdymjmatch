"use strict";
cc._RF.push(module, 'c79bcxJGtFBBryNlhgHflqd', 'TileTypeEnum');
// Scripts/simulator/constant/TileTypeEnum.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ETileComponent = exports.ETileVisible = exports.ETileNodeShowType = exports.ETileTypeBit = exports.ETileType = void 0;
exports.ETileType = {
    Normal: "Normal",
    RollCard: "RollCard",
    Bomb: "Bomb",
    Yoga: "Yoga",
    ColorCard: "ColorCard",
    RankCard: "RankCard",
    DaxiaoCard: "DaxiaoCard",
    DuoxiaoCard: "DuoxiaoCard"
};
var ETileTypeBit;
(function (ETileTypeBit) {
    ETileTypeBit[ETileTypeBit["Normal"] = 0] = "Normal";
    ETileTypeBit[ETileTypeBit["RollCard"] = 1] = "RollCard";
    ETileTypeBit[ETileTypeBit["Bomb"] = 2] = "Bomb";
    ETileTypeBit[ETileTypeBit["Yoga"] = 4] = "Yoga";
    ETileTypeBit[ETileTypeBit["ColorCard"] = 8] = "ColorCard";
    ETileTypeBit[ETileTypeBit["RankCard"] = 16] = "RankCard";
    ETileTypeBit[ETileTypeBit["DaxiaoCard"] = 32] = "DaxiaoCard";
    ETileTypeBit[ETileTypeBit["DuoxiaoCard"] = 64] = "DuoxiaoCard";
})(ETileTypeBit = exports.ETileTypeBit || (exports.ETileTypeBit = {}));
exports.ETileNodeShowType = {
    Normal: "Normal",
    RollCard: "RollCard",
    Bomb: "Bomb",
    Yoga: "Yoga",
    ColorCard: "ColorCard",
    RankCard: "RankCard",
    DaxiaoCard: "DaxiaoCard",
    DuoxiaoCard: "DuoxiaoCard"
};
var ETileVisible;
(function (ETileVisible) {
    ETileVisible[ETileVisible["None"] = 0] = "None";
    ETileVisible[ETileVisible["LeftTop"] = 1] = "LeftTop";
    ETileVisible[ETileVisible["RightTop"] = 2] = "RightTop";
    ETileVisible[ETileVisible["LeftBottom"] = 4] = "LeftBottom";
    ETileVisible[ETileVisible["RightBottom"] = 8] = "RightBottom";
    ETileVisible[ETileVisible["All"] = 15] = "All";
})(ETileVisible = exports.ETileVisible || (exports.ETileVisible = {}));
exports.ETileComponent = {
    Tile2ComponentRollCard: "Tile2ComponentRollCard",
    Tile2ComponentSlotBarAni: "Tile2ComponentSlotBarAni",
    Tile2ComponentHint: "Tile2ComponentHint",
    Tile2ComponentLockDarken: "Tile2ComponentLockDarken",
    Tile2ComponentBomb: "Tile2ComponentBomb",
    Tile2ComponentColor: "Tile2ComponentColor",
    Tile2ComponentRank: "Tile2ComponentRank",
    Tile2ComponentYoga: "Tile2ComponentYoga",
    Tile2ComponentDaxiao: "Tile2ComponentDaxiao",
    Tile2ComponentDuoxiao: "Tile2ComponentDuoxiao"
};

cc._RF.pop();