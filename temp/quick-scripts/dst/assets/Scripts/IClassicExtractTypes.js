
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/IClassicExtractTypes.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '24cf6UP3uBKF5YzOWAXtwAa', 'IClassicExtractTypes');
// Scripts/IClassicExtractTypes.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.isResIdBlacklisted = exports.CLASSIC_RESID_BLACKLIST = exports.DEFAULT_SWIMLANE_CONFIG = exports.DIFFICULTY_LAYER_MAP = exports.EDifficultyType = void 0;
var EDifficultyType;
(function (EDifficultyType) {
    EDifficultyType[EDifficultyType["Simple"] = 1] = "Simple";
    EDifficultyType[EDifficultyType["Medium"] = 2] = "Medium";
    EDifficultyType[EDifficultyType["Difficult"] = 3] = "Difficult";
    EDifficultyType[EDifficultyType["Reward"] = 4] = "Reward";
})(EDifficultyType = exports.EDifficultyType || (exports.EDifficultyType = {}));
(exports.DIFFICULTY_LAYER_MAP = {})[EDifficultyType.Simple] = [1, 2];
exports.DIFFICULTY_LAYER_MAP[EDifficultyType.Medium] = [2];
exports.DIFFICULTY_LAYER_MAP[EDifficultyType.Difficult] = [5];
exports.DIFFICULTY_LAYER_MAP[EDifficultyType.Reward] = [1];
exports.DIFFICULTY_LAYER_MAP = exports.DIFFICULTY_LAYER_MAP;
exports.DEFAULT_SWIMLANE_CONFIG = {
    hardModeThresholdSeconds: 300,
    scoreThresholdPercent: 0.75,
    beforeThresholdPool: [EDifficultyType.Simple, EDifficultyType.Medium],
    afterThresholdRotation: [EDifficultyType.Difficult, EDifficultyType.Medium],
    afterTimeDifficulty: EDifficultyType.Difficult
};
exports.CLASSIC_RESID_BLACKLIST = new Set([34, 35, 36, 37, 38, 39, 40, 41, 50, 51, 52, 53, 54, 42, 43]);
var isResIdBlacklisted = function (e) {
    return exports.CLASSIC_RESID_BLACKLIST.has(e);
};
exports.isResIdBlacklisted = isResIdBlacklisted;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0lDbGFzc2ljRXh0cmFjdFR5cGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBWSxlQUtYO0FBTEQsV0FBWSxlQUFlO0lBQ3pCLHlEQUFVLENBQUE7SUFDVix5REFBVSxDQUFBO0lBQ1YsK0RBQWEsQ0FBQTtJQUNiLHlEQUFVLENBQUE7QUFDWixDQUFDLEVBTFcsZUFBZSxHQUFmLHVCQUFlLEtBQWYsdUJBQWUsUUFLMUI7QUFDRCxDQUFDLDRCQUFvQixHQUFHLEVBQUUsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUM3RCw0QkFBb0IsQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNuRCw0QkFBb0IsQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN0RCw0QkFBb0IsQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN4QyxRQUFBLG9CQUFvQixHQUFHLDRCQUFvQixDQUFDO0FBQzVDLFFBQUEsdUJBQXVCLEdBQUc7SUFDbkMsd0JBQXdCLEVBQUUsR0FBRztJQUM3QixxQkFBcUIsRUFBRSxJQUFJO0lBQzNCLG1CQUFtQixFQUFFLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRSxlQUFlLENBQUMsTUFBTSxDQUFDO0lBQ3JFLHNCQUFzQixFQUFFLENBQUMsZUFBZSxDQUFDLFNBQVMsRUFBRSxlQUFlLENBQUMsTUFBTSxDQUFDO0lBQzNFLG1CQUFtQixFQUFFLGVBQWUsQ0FBQyxTQUFTO0NBQy9DLENBQUM7QUFDUyxRQUFBLHVCQUF1QixHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3BHLElBQUksa0JBQWtCLEdBQUcsVUFBVSxDQUFDO0lBQ3pDLE9BQU8sK0JBQXVCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3hDLENBQUMsQ0FBQztBQUZTLFFBQUEsa0JBQWtCLHNCQUUzQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBlbnVtIEVEaWZmaWN1bHR5VHlwZSB7XG4gIFNpbXBsZSA9IDEsXG4gIE1lZGl1bSA9IDIsXG4gIERpZmZpY3VsdCA9IDMsXG4gIFJld2FyZCA9IDQsXG59XG4oRElGRklDVUxUWV9MQVlFUl9NQVAgPSB7fSlbRURpZmZpY3VsdHlUeXBlLlNpbXBsZV0gPSBbMSwgMl07XG5ESUZGSUNVTFRZX0xBWUVSX01BUFtFRGlmZmljdWx0eVR5cGUuTWVkaXVtXSA9IFsyXTtcbkRJRkZJQ1VMVFlfTEFZRVJfTUFQW0VEaWZmaWN1bHR5VHlwZS5EaWZmaWN1bHRdID0gWzVdO1xuRElGRklDVUxUWV9MQVlFUl9NQVBbRURpZmZpY3VsdHlUeXBlLlJld2FyZF0gPSBbMV07XG5leHBvcnQgdmFyIERJRkZJQ1VMVFlfTEFZRVJfTUFQID0gRElGRklDVUxUWV9MQVlFUl9NQVA7XG5leHBvcnQgdmFyIERFRkFVTFRfU1dJTUxBTkVfQ09ORklHID0ge1xuICBoYXJkTW9kZVRocmVzaG9sZFNlY29uZHM6IDMwMCxcbiAgc2NvcmVUaHJlc2hvbGRQZXJjZW50OiAwLjc1LFxuICBiZWZvcmVUaHJlc2hvbGRQb29sOiBbRURpZmZpY3VsdHlUeXBlLlNpbXBsZSwgRURpZmZpY3VsdHlUeXBlLk1lZGl1bV0sXG4gIGFmdGVyVGhyZXNob2xkUm90YXRpb246IFtFRGlmZmljdWx0eVR5cGUuRGlmZmljdWx0LCBFRGlmZmljdWx0eVR5cGUuTWVkaXVtXSxcbiAgYWZ0ZXJUaW1lRGlmZmljdWx0eTogRURpZmZpY3VsdHlUeXBlLkRpZmZpY3VsdFxufTtcbmV4cG9ydCB2YXIgQ0xBU1NJQ19SRVNJRF9CTEFDS0xJU1QgPSBuZXcgU2V0KFszNCwgMzUsIDM2LCAzNywgMzgsIDM5LCA0MCwgNDEsIDUwLCA1MSwgNTIsIDUzLCA1NCwgNDIsIDQzXSk7XG5leHBvcnQgdmFyIGlzUmVzSWRCbGFja2xpc3RlZCA9IGZ1bmN0aW9uIChlKSB7XG4gIHJldHVybiBDTEFTU0lDX1JFU0lEX0JMQUNLTElTVC5oYXMoZSk7XG59OyJdfQ==