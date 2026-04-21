export var LevelValueKey = "LevelValue";
export var PrefixCapability = "#Capability#";
export var PrefixLevelValue = "#LevelValue#";
export var PrefixLevelLibrary = "#LevelLibrary#";
export var EDCColor = {
  NORMAL: "color:#2E8B57",
  LAYER_CAPABILITY: "color:#8314BC",
  LAYER_LEVEL_VALUE: "color:#FF00FF",
  LAYER_MAPPING: "color:#C3BF0F",
  LAYER_DDA: "color:#0000FF",
  EXTRACT_MODEL: "color:#0099CC",
  LEVEL_MODEL: "color:#009933",
  ERROR: "color:#FF0000"
};
export var getPercentileKey = function (e) {
  return "p#" + e;
};
export var getCustomDataKey = function (e, t) {
  return e + "_" + t.join("_");
};