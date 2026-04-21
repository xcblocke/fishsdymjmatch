
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_levelBox/Scripts/LevelBoxTypes.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e27520nJRBHbYASxkmutUuV', 'LevelBoxTypes');
// subpackages/l_levelBox/Scripts/LevelBoxTypes.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.LevelBoxConditionKey = exports.ELevelBoxCondType = void 0;
exports.ELevelBoxCondType = {
    None: "none",
    Level: "level",
    Combo: "combo"
};
(exports.LevelBoxConditionKey = {})[exports.ELevelBoxCondType.Level] = "Common_Reward_target_1";
exports.LevelBoxConditionKey[exports.ELevelBoxCondType.Combo] = "Common_Reward_target_2";
exports.LevelBoxConditionKey = exports.LevelBoxConditionKey;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2xldmVsQm94L1NjcmlwdHMvTGV2ZWxCb3hUeXBlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFXLFFBQUEsaUJBQWlCLEdBQUc7SUFDN0IsSUFBSSxFQUFFLE1BQU07SUFDWixLQUFLLEVBQUUsT0FBTztJQUNkLEtBQUssRUFBRSxPQUFPO0NBQ2YsQ0FBQztBQUNGLENBQUMsNEJBQW9CLEdBQUcsRUFBRSxDQUFDLENBQUMseUJBQWlCLENBQUMsS0FBSyxDQUFDLEdBQUcsd0JBQXdCLENBQUM7QUFDaEYsNEJBQW9CLENBQUMseUJBQWlCLENBQUMsS0FBSyxDQUFDLEdBQUcsd0JBQXdCLENBQUM7QUFDOUQsUUFBQSxvQkFBb0IsR0FBRyw0QkFBb0IsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB2YXIgRUxldmVsQm94Q29uZFR5cGUgPSB7XG4gIE5vbmU6IFwibm9uZVwiLFxuICBMZXZlbDogXCJsZXZlbFwiLFxuICBDb21ibzogXCJjb21ib1wiXG59O1xuKExldmVsQm94Q29uZGl0aW9uS2V5ID0ge30pW0VMZXZlbEJveENvbmRUeXBlLkxldmVsXSA9IFwiQ29tbW9uX1Jld2FyZF90YXJnZXRfMVwiO1xuTGV2ZWxCb3hDb25kaXRpb25LZXlbRUxldmVsQm94Q29uZFR5cGUuQ29tYm9dID0gXCJDb21tb25fUmV3YXJkX3RhcmdldF8yXCI7XG5leHBvcnQgdmFyIExldmVsQm94Q29uZGl0aW9uS2V5ID0gTGV2ZWxCb3hDb25kaXRpb25LZXk7Il19