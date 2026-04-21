import { EItemType } from '../../../Scripts/user/IUserData';
export var convertToBoxRewardsConfig = function (t, e) {
  for (var i = 0, n = 0, a = 0, r = 0; r < e.items.length; r++) {
    e.items[r].item === EItemType.Hint && (i += e.items[r].count);
    e.items[r].item === EItemType.Shuffle && (n += e.items[r].count);
    e.items[r].item === EItemType.Undo && (a += e.items[r].count);
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