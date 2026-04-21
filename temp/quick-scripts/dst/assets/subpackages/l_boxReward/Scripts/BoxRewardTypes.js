
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_boxReward/Scripts/BoxRewardTypes.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2JveFJld2FyZC9TY3JpcHRzL0JveFJld2FyZFR5cGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkRBQTREO0FBQ3JELElBQUkseUJBQXlCLEdBQUcsVUFBVSxDQUFDLEVBQUUsQ0FBQztJQUNuRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDNUQsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUsscUJBQVMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5RCxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxxQkFBUyxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLHFCQUFTLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDL0Q7SUFDRCxPQUFPO1FBQ0wsSUFBSSxFQUFFLENBQUM7UUFDUCxPQUFPLEVBQUUsQ0FBQztRQUNWLElBQUksRUFBRSxDQUFDO1FBQ1AsT0FBTyxFQUFFLENBQUMsQ0FBQyxPQUFPO1FBQ2xCLEtBQUssRUFBRSxDQUFDLENBQUMsV0FBVztRQUNwQixZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDO1FBQzdCLE9BQU8sRUFBRSxDQUFDLENBQUMsS0FBSztLQUNqQixDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBZlMsUUFBQSx5QkFBeUIsNkJBZWxDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRUl0ZW1UeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy91c2VyL0lVc2VyRGF0YSc7XG5leHBvcnQgdmFyIGNvbnZlcnRUb0JveFJld2FyZHNDb25maWcgPSBmdW5jdGlvbiAodCwgZSkge1xuICBmb3IgKHZhciBpID0gMCwgbiA9IDAsIGEgPSAwLCByID0gMDsgciA8IGUuaXRlbXMubGVuZ3RoOyByKyspIHtcbiAgICBlLml0ZW1zW3JdLml0ZW0gPT09IEVJdGVtVHlwZS5IaW50ICYmIChpICs9IGUuaXRlbXNbcl0uY291bnQpO1xuICAgIGUuaXRlbXNbcl0uaXRlbSA9PT0gRUl0ZW1UeXBlLlNodWZmbGUgJiYgKG4gKz0gZS5pdGVtc1tyXS5jb3VudCk7XG4gICAgZS5pdGVtc1tyXS5pdGVtID09PSBFSXRlbVR5cGUuVW5kbyAmJiAoYSArPSBlLml0ZW1zW3JdLmNvdW50KTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGhpbnQ6IGksXG4gICAgcmVmcmVzaDogbixcbiAgICB1bmRvOiBhLFxuICAgIGFkU2NhbGU6IGUuYWRTY2FsZSxcbiAgICBsZXZlbDogdC5yZXdhcmRMZXZlbCxcbiAgICByZXdhcmRMZXZlbHM6IFt0LnJld2FyZExldmVsXSxcbiAgICByZXdhcmRzOiBlLml0ZW1zXG4gIH07XG59OyJdfQ==