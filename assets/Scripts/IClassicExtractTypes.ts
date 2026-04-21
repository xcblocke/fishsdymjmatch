export enum EDifficultyType {
  Simple = 1,
  Medium = 2,
  Difficult = 3,
  Reward = 4,
}
(DIFFICULTY_LAYER_MAP = {})[EDifficultyType.Simple] = [1, 2];
DIFFICULTY_LAYER_MAP[EDifficultyType.Medium] = [2];
DIFFICULTY_LAYER_MAP[EDifficultyType.Difficult] = [5];
DIFFICULTY_LAYER_MAP[EDifficultyType.Reward] = [1];
export var DIFFICULTY_LAYER_MAP = DIFFICULTY_LAYER_MAP;
export var DEFAULT_SWIMLANE_CONFIG = {
  hardModeThresholdSeconds: 300,
  scoreThresholdPercent: 0.75,
  beforeThresholdPool: [EDifficultyType.Simple, EDifficultyType.Medium],
  afterThresholdRotation: [EDifficultyType.Difficult, EDifficultyType.Medium],
  afterTimeDifficulty: EDifficultyType.Difficult
};
export var CLASSIC_RESID_BLACKLIST = new Set([34, 35, 36, 37, 38, 39, 40, 41, 50, 51, 52, 53, 54, 42, 43]);
export var isResIdBlacklisted = function (e) {
  return CLASSIC_RESID_BLACKLIST.has(e);
};