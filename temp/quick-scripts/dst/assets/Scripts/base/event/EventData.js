
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/base/event/EventData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '73423oTE1ZLb5x891p5oPKu', 'EventData');
// Scripts/base/event/EventData.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.EventTrackingType = void 0;
exports.EventTrackingType = {
    BtnClick: "g_btn_click",
    PageShow: "g_page_show",
    Tutorial: "g_tutorial",
    GameOpen: "g_game_open",
    GameStart: "g_game_start",
    GameEnd: "g_game_end",
    GameMoveStep: "g_move_step",
    GameLog: "g_game_log",
    GetItem: "g_get_item",
    UseItem: "g_use_item",
    GameBannerRevenue: "g_game_banner_revenue",
    GameAdShow: "g_game_ad_show",
    UserSetting: "g_user_setting",
    Feedback: "g_feedback",
    FeedbackPopupShow: "game_user_rating_popup_show",
    FeedbackPopupClose: "game_user_rating_popup_close",
    GameAdShowStage: "g_game_ad_show_stage",
    AdRewardEnter: "g_ad_reward_enter",
    AdVisit: "g_ad_visit",
    FunctionUnlock: "g_function_unlock",
    DebugInfo: "g_debugInfo",
    PushRemove: "g_push_remove",
    GameBundleDelay: "game_bundle_delay",
    GameRefreshTiles: "g_refresh_tiles",
    DeviceInfo: "g_device_info",
    ChampaignStart: "g_champaign_start",
    ChampaignEnd: "g_champaign_end",
    AssignUserGroupAd: "assign_user_group_ad",
    ValentineClickIcon: "g_game_valentine_click_icon",
    ValentineClickPopup: "g_game_valentine_click_popup",
    ValentineViewIcon: "g_game_valentine_view_icon",
    ValentineViewPopup: "g_game_valentine_view_popup",
    UserInfoAvatarActive: "g_game_avatar_active",
    UserInfoAvatarCollect: "g_game_avatar_collect",
    UserInfoClickBtnClick: "g_game_click_info_popup",
    GameDeadLockPopup: "g_game_deadlock_view_popup",
    GameDeadLockClick: "g_game_deadlock_click_popup",
    GameTileClick: "g_game_tile_click",
    g_game_language_skin_reward_popup_view: "g_game_language_skin_reward_popup_view",
    g_game_language_skin_reward_popup_click: "g_game_language_skin_reward_popup_click",
    g_game_language_skin_reward_unlock_success: "g_game_language_skin_reward_unlock_success"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2Jhc2UvZXZlbnQvRXZlbnREYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVcsUUFBQSxpQkFBaUIsR0FBRztJQUM3QixRQUFRLEVBQUUsYUFBYTtJQUN2QixRQUFRLEVBQUUsYUFBYTtJQUN2QixRQUFRLEVBQUUsWUFBWTtJQUN0QixRQUFRLEVBQUUsYUFBYTtJQUN2QixTQUFTLEVBQUUsY0FBYztJQUN6QixPQUFPLEVBQUUsWUFBWTtJQUNyQixZQUFZLEVBQUUsYUFBYTtJQUMzQixPQUFPLEVBQUUsWUFBWTtJQUNyQixPQUFPLEVBQUUsWUFBWTtJQUNyQixPQUFPLEVBQUUsWUFBWTtJQUNyQixpQkFBaUIsRUFBRSx1QkFBdUI7SUFDMUMsVUFBVSxFQUFFLGdCQUFnQjtJQUM1QixXQUFXLEVBQUUsZ0JBQWdCO0lBQzdCLFFBQVEsRUFBRSxZQUFZO0lBQ3RCLGlCQUFpQixFQUFFLDZCQUE2QjtJQUNoRCxrQkFBa0IsRUFBRSw4QkFBOEI7SUFDbEQsZUFBZSxFQUFFLHNCQUFzQjtJQUN2QyxhQUFhLEVBQUUsbUJBQW1CO0lBQ2xDLE9BQU8sRUFBRSxZQUFZO0lBQ3JCLGNBQWMsRUFBRSxtQkFBbUI7SUFDbkMsU0FBUyxFQUFFLGFBQWE7SUFDeEIsVUFBVSxFQUFFLGVBQWU7SUFDM0IsZUFBZSxFQUFFLG1CQUFtQjtJQUNwQyxnQkFBZ0IsRUFBRSxpQkFBaUI7SUFDbkMsVUFBVSxFQUFFLGVBQWU7SUFDM0IsY0FBYyxFQUFFLG1CQUFtQjtJQUNuQyxZQUFZLEVBQUUsaUJBQWlCO0lBQy9CLGlCQUFpQixFQUFFLHNCQUFzQjtJQUN6QyxrQkFBa0IsRUFBRSw2QkFBNkI7SUFDakQsbUJBQW1CLEVBQUUsOEJBQThCO0lBQ25ELGlCQUFpQixFQUFFLDRCQUE0QjtJQUMvQyxrQkFBa0IsRUFBRSw2QkFBNkI7SUFDakQsb0JBQW9CLEVBQUUsc0JBQXNCO0lBQzVDLHFCQUFxQixFQUFFLHVCQUF1QjtJQUM5QyxxQkFBcUIsRUFBRSx5QkFBeUI7SUFDaEQsaUJBQWlCLEVBQUUsNEJBQTRCO0lBQy9DLGlCQUFpQixFQUFFLDZCQUE2QjtJQUNoRCxhQUFhLEVBQUUsbUJBQW1CO0lBQ2xDLHNDQUFzQyxFQUFFLHdDQUF3QztJQUNoRix1Q0FBdUMsRUFBRSx5Q0FBeUM7SUFDbEYsMENBQTBDLEVBQUUsNENBQTRDO0NBQ3pGLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgdmFyIEV2ZW50VHJhY2tpbmdUeXBlID0ge1xuICBCdG5DbGljazogXCJnX2J0bl9jbGlja1wiLFxuICBQYWdlU2hvdzogXCJnX3BhZ2Vfc2hvd1wiLFxuICBUdXRvcmlhbDogXCJnX3R1dG9yaWFsXCIsXG4gIEdhbWVPcGVuOiBcImdfZ2FtZV9vcGVuXCIsXG4gIEdhbWVTdGFydDogXCJnX2dhbWVfc3RhcnRcIixcbiAgR2FtZUVuZDogXCJnX2dhbWVfZW5kXCIsXG4gIEdhbWVNb3ZlU3RlcDogXCJnX21vdmVfc3RlcFwiLFxuICBHYW1lTG9nOiBcImdfZ2FtZV9sb2dcIixcbiAgR2V0SXRlbTogXCJnX2dldF9pdGVtXCIsXG4gIFVzZUl0ZW06IFwiZ191c2VfaXRlbVwiLFxuICBHYW1lQmFubmVyUmV2ZW51ZTogXCJnX2dhbWVfYmFubmVyX3JldmVudWVcIixcbiAgR2FtZUFkU2hvdzogXCJnX2dhbWVfYWRfc2hvd1wiLFxuICBVc2VyU2V0dGluZzogXCJnX3VzZXJfc2V0dGluZ1wiLFxuICBGZWVkYmFjazogXCJnX2ZlZWRiYWNrXCIsXG4gIEZlZWRiYWNrUG9wdXBTaG93OiBcImdhbWVfdXNlcl9yYXRpbmdfcG9wdXBfc2hvd1wiLFxuICBGZWVkYmFja1BvcHVwQ2xvc2U6IFwiZ2FtZV91c2VyX3JhdGluZ19wb3B1cF9jbG9zZVwiLFxuICBHYW1lQWRTaG93U3RhZ2U6IFwiZ19nYW1lX2FkX3Nob3dfc3RhZ2VcIixcbiAgQWRSZXdhcmRFbnRlcjogXCJnX2FkX3Jld2FyZF9lbnRlclwiLFxuICBBZFZpc2l0OiBcImdfYWRfdmlzaXRcIixcbiAgRnVuY3Rpb25VbmxvY2s6IFwiZ19mdW5jdGlvbl91bmxvY2tcIixcbiAgRGVidWdJbmZvOiBcImdfZGVidWdJbmZvXCIsXG4gIFB1c2hSZW1vdmU6IFwiZ19wdXNoX3JlbW92ZVwiLFxuICBHYW1lQnVuZGxlRGVsYXk6IFwiZ2FtZV9idW5kbGVfZGVsYXlcIixcbiAgR2FtZVJlZnJlc2hUaWxlczogXCJnX3JlZnJlc2hfdGlsZXNcIixcbiAgRGV2aWNlSW5mbzogXCJnX2RldmljZV9pbmZvXCIsXG4gIENoYW1wYWlnblN0YXJ0OiBcImdfY2hhbXBhaWduX3N0YXJ0XCIsXG4gIENoYW1wYWlnbkVuZDogXCJnX2NoYW1wYWlnbl9lbmRcIixcbiAgQXNzaWduVXNlckdyb3VwQWQ6IFwiYXNzaWduX3VzZXJfZ3JvdXBfYWRcIixcbiAgVmFsZW50aW5lQ2xpY2tJY29uOiBcImdfZ2FtZV92YWxlbnRpbmVfY2xpY2tfaWNvblwiLFxuICBWYWxlbnRpbmVDbGlja1BvcHVwOiBcImdfZ2FtZV92YWxlbnRpbmVfY2xpY2tfcG9wdXBcIixcbiAgVmFsZW50aW5lVmlld0ljb246IFwiZ19nYW1lX3ZhbGVudGluZV92aWV3X2ljb25cIixcbiAgVmFsZW50aW5lVmlld1BvcHVwOiBcImdfZ2FtZV92YWxlbnRpbmVfdmlld19wb3B1cFwiLFxuICBVc2VySW5mb0F2YXRhckFjdGl2ZTogXCJnX2dhbWVfYXZhdGFyX2FjdGl2ZVwiLFxuICBVc2VySW5mb0F2YXRhckNvbGxlY3Q6IFwiZ19nYW1lX2F2YXRhcl9jb2xsZWN0XCIsXG4gIFVzZXJJbmZvQ2xpY2tCdG5DbGljazogXCJnX2dhbWVfY2xpY2tfaW5mb19wb3B1cFwiLFxuICBHYW1lRGVhZExvY2tQb3B1cDogXCJnX2dhbWVfZGVhZGxvY2tfdmlld19wb3B1cFwiLFxuICBHYW1lRGVhZExvY2tDbGljazogXCJnX2dhbWVfZGVhZGxvY2tfY2xpY2tfcG9wdXBcIixcbiAgR2FtZVRpbGVDbGljazogXCJnX2dhbWVfdGlsZV9jbGlja1wiLFxuICBnX2dhbWVfbGFuZ3VhZ2Vfc2tpbl9yZXdhcmRfcG9wdXBfdmlldzogXCJnX2dhbWVfbGFuZ3VhZ2Vfc2tpbl9yZXdhcmRfcG9wdXBfdmlld1wiLFxuICBnX2dhbWVfbGFuZ3VhZ2Vfc2tpbl9yZXdhcmRfcG9wdXBfY2xpY2s6IFwiZ19nYW1lX2xhbmd1YWdlX3NraW5fcmV3YXJkX3BvcHVwX2NsaWNrXCIsXG4gIGdfZ2FtZV9sYW5ndWFnZV9za2luX3Jld2FyZF91bmxvY2tfc3VjY2VzczogXCJnX2dhbWVfbGFuZ3VhZ2Vfc2tpbl9yZXdhcmRfdW5sb2NrX3N1Y2Nlc3NcIlxufTsiXX0=