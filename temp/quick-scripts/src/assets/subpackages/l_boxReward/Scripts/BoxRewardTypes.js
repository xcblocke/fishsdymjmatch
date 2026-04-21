"use strict";
cc._RF.push(module, '48a2eJrSOJFgoXSMxZB8FTG', 'BoxRewardTypes');
// subpackages/l_boxReward/Scripts/BoxRewardTypes.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.convertToBoxRewardsConfig = void 0;
var IUserData_1 = require("../../../Scripts/user/IUserData");
var convertToBoxRewardsConfig = function (t, e) {
    for (var i = 0, n = 0, a = 0, r = 0; r < e.items.length; r++) {
        e.items[r].item === IUserData_1.EItemType.Hint && (i += e.items[r].count);
        e.items[r].item === IUserData_1.EItemType.Shuffle && (n += e.items[r].count);
        e.items[r].item === IUserData_1.EItemType.Undo && (a += e.items[r].count);
    }
    return {
        hint: i,
        refresh: n,
        undo: a,
        adScale: e.adScale,
        level: t.rewardLevel,
        rewardLevels: [t.rewardLevel],
        rewards: e.items
    };
};
exports.convertToBoxRewardsConfig = convertToBoxRewardsConfig;

cc._RF.pop();