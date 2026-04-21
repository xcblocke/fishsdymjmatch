"use strict";
cc._RF.push(module, 'ba987BLgitNdoQvAUEyRJ47', 'ClearHelper');
// Scripts/ClearHelper.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("./core/simulator/constant/GameTypeEnums");
var ClearClassiclHelper_1 = require("./ClearClassiclHelper");
var ClearDailyChallengeHelper_1 = require("./ClearDailyChallengeHelper");
var ClearNormalHelper_1 = require("./ClearNormalHelper");
var ClearTile2NormalHelper_1 = require("./ClearTile2NormalHelper");
var ClearTile4NormalHelper_1 = require("./ClearTile4NormalHelper");
var ClearTravelHelper_1 = require("./ClearTravelHelper");
var ClearHelper = /** @class */ (function () {
    function ClearHelper() {
    }
    ClearHelper.runClear = function (e, t, o, u) {
        if (e.gameType === GameTypeEnums_1.MjGameType.Travel) {
            ClearTravelHelper_1.default.runClear(e, t, o);
        }
        else {
            if (e.gameType === GameTypeEnums_1.MjGameType.DailyChallenge) {
                ClearDailyChallengeHelper_1.default.runClear(e, t, o);
            }
            else {
                if (e.gameType === GameTypeEnums_1.MjGameType.Classic) {
                    ClearClassiclHelper_1.default.runClear(e, t, o);
                }
                else {
                    if (e.gameType === GameTypeEnums_1.MjGameType.Tile2Normal) {
                        if (e.getTile2SlotType() === GameTypeEnums_1.ETile2SlotType.Slot4) {
                            ClearTile4NormalHelper_1.default.runClear(e, t, o, u);
                        }
                        else {
                            ClearTile2NormalHelper_1.default.runClear(e, t, o, u);
                        }
                    }
                    else {
                        ClearNormalHelper_1.default.runClear(e, t, o);
                    }
                }
            }
        }
    };
    return ClearHelper;
}());
exports.default = ClearHelper;

cc._RF.pop();