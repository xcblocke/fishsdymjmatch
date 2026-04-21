
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/gamePlay/analyze/AnalyzeTypes.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '75520V+GI9Dg5ENGnvGwGKN', 'AnalyzeTypes');
// Scripts/gamePlay/analyze/AnalyzeTypes.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.EUserPropertyType = void 0;
exports.EUserPropertyType = {
    Version: "version",
    GameVersion: "game_version",
    ResVersion: "res_version",
    AotVersion: "aot_version",
    Language: "language",
    Vibration: "vibration",
    Sound: "sound",
    Music: "music",
    HighlightFreeTiles: "highlight_free_tiles",
    CurrentWayNum: "current_waynum",
    UserWayArr: "userwayarr",
    last7dInfo: "last_7d_info",
    last3InterInfo: "last_3_inter_info",
    adRevenueInfo: "ad_revenue_info",
    adRequestInfo: "ad_request_info",
    first3InterEcpm: "first3_inter_ecpm",
    first3InterGroup: "first3_inter_group",
    last3InterEcpm: "last3_inter_ecpm",
    last3InterGroup: "last3_inter_group",
    gameNumAll: "game_num_all",
    gameInfo: "game_info",
    physicsWidth: "physics_width",
    physicsHeight: "physics_height",
    physicsUnitPer100: "physics_unit_per100",
    screenUnitPer100: "screen_unit_per100",
    screenDataIsTrust: "screen_data_is_trust",
    exptPeriod: "expt_period",
    UserAbtestResult: "user_abtest_result"
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2dhbWVQbGF5L2FuYWx5emUvQW5hbHl6ZVR5cGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVcsUUFBQSxpQkFBaUIsR0FBRztJQUM3QixPQUFPLEVBQUUsU0FBUztJQUNsQixXQUFXLEVBQUUsY0FBYztJQUMzQixVQUFVLEVBQUUsYUFBYTtJQUN6QixVQUFVLEVBQUUsYUFBYTtJQUN6QixRQUFRLEVBQUUsVUFBVTtJQUNwQixTQUFTLEVBQUUsV0FBVztJQUN0QixLQUFLLEVBQUUsT0FBTztJQUNkLEtBQUssRUFBRSxPQUFPO0lBQ2Qsa0JBQWtCLEVBQUUsc0JBQXNCO0lBQzFDLGFBQWEsRUFBRSxnQkFBZ0I7SUFDL0IsVUFBVSxFQUFFLFlBQVk7SUFDeEIsVUFBVSxFQUFFLGNBQWM7SUFDMUIsY0FBYyxFQUFFLG1CQUFtQjtJQUNuQyxhQUFhLEVBQUUsaUJBQWlCO0lBQ2hDLGFBQWEsRUFBRSxpQkFBaUI7SUFDaEMsZUFBZSxFQUFFLG1CQUFtQjtJQUNwQyxnQkFBZ0IsRUFBRSxvQkFBb0I7SUFDdEMsY0FBYyxFQUFFLGtCQUFrQjtJQUNsQyxlQUFlLEVBQUUsbUJBQW1CO0lBQ3BDLFVBQVUsRUFBRSxjQUFjO0lBQzFCLFFBQVEsRUFBRSxXQUFXO0lBQ3JCLFlBQVksRUFBRSxlQUFlO0lBQzdCLGFBQWEsRUFBRSxnQkFBZ0I7SUFDL0IsaUJBQWlCLEVBQUUscUJBQXFCO0lBQ3hDLGdCQUFnQixFQUFFLG9CQUFvQjtJQUN0QyxpQkFBaUIsRUFBRSxzQkFBc0I7SUFDekMsVUFBVSxFQUFFLGFBQWE7SUFDekIsZ0JBQWdCLEVBQUUsb0JBQW9CO0NBQ3ZDLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgdmFyIEVVc2VyUHJvcGVydHlUeXBlID0ge1xuICBWZXJzaW9uOiBcInZlcnNpb25cIixcbiAgR2FtZVZlcnNpb246IFwiZ2FtZV92ZXJzaW9uXCIsXG4gIFJlc1ZlcnNpb246IFwicmVzX3ZlcnNpb25cIixcbiAgQW90VmVyc2lvbjogXCJhb3RfdmVyc2lvblwiLFxuICBMYW5ndWFnZTogXCJsYW5ndWFnZVwiLFxuICBWaWJyYXRpb246IFwidmlicmF0aW9uXCIsXG4gIFNvdW5kOiBcInNvdW5kXCIsXG4gIE11c2ljOiBcIm11c2ljXCIsXG4gIEhpZ2hsaWdodEZyZWVUaWxlczogXCJoaWdobGlnaHRfZnJlZV90aWxlc1wiLFxuICBDdXJyZW50V2F5TnVtOiBcImN1cnJlbnRfd2F5bnVtXCIsXG4gIFVzZXJXYXlBcnI6IFwidXNlcndheWFyclwiLFxuICBsYXN0N2RJbmZvOiBcImxhc3RfN2RfaW5mb1wiLFxuICBsYXN0M0ludGVySW5mbzogXCJsYXN0XzNfaW50ZXJfaW5mb1wiLFxuICBhZFJldmVudWVJbmZvOiBcImFkX3JldmVudWVfaW5mb1wiLFxuICBhZFJlcXVlc3RJbmZvOiBcImFkX3JlcXVlc3RfaW5mb1wiLFxuICBmaXJzdDNJbnRlckVjcG06IFwiZmlyc3QzX2ludGVyX2VjcG1cIixcbiAgZmlyc3QzSW50ZXJHcm91cDogXCJmaXJzdDNfaW50ZXJfZ3JvdXBcIixcbiAgbGFzdDNJbnRlckVjcG06IFwibGFzdDNfaW50ZXJfZWNwbVwiLFxuICBsYXN0M0ludGVyR3JvdXA6IFwibGFzdDNfaW50ZXJfZ3JvdXBcIixcbiAgZ2FtZU51bUFsbDogXCJnYW1lX251bV9hbGxcIixcbiAgZ2FtZUluZm86IFwiZ2FtZV9pbmZvXCIsXG4gIHBoeXNpY3NXaWR0aDogXCJwaHlzaWNzX3dpZHRoXCIsXG4gIHBoeXNpY3NIZWlnaHQ6IFwicGh5c2ljc19oZWlnaHRcIixcbiAgcGh5c2ljc1VuaXRQZXIxMDA6IFwicGh5c2ljc191bml0X3BlcjEwMFwiLFxuICBzY3JlZW5Vbml0UGVyMTAwOiBcInNjcmVlbl91bml0X3BlcjEwMFwiLFxuICBzY3JlZW5EYXRhSXNUcnVzdDogXCJzY3JlZW5fZGF0YV9pc190cnVzdFwiLFxuICBleHB0UGVyaW9kOiBcImV4cHRfcGVyaW9kXCIsXG4gIFVzZXJBYnRlc3RSZXN1bHQ6IFwidXNlcl9hYnRlc3RfcmVzdWx0XCJcbn07Il19