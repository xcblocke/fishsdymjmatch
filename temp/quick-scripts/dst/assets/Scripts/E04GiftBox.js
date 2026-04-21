
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/E04GiftBox.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '07ee4PiLL5LPoWcaT2yZzuH', 'E04GiftBox');
// Scripts/E04GiftBox.ts

Object.defineProperty(exports, "__esModule", { value: true });
var TravelMapInterface_1 = require("./TravelMapInterface");
var ESimpleGiftBox_1 = require("./ESimpleGiftBox");
var E04GiftBox = /** @class */ (function (_super) {
    __extends(E04GiftBox, _super);
    function E04GiftBox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    E04GiftBox.prototype.getBadgePath = function (e) {
        switch (e) {
            case TravelMapInterface_1.MapElementId.E04GiftBox1:
                return {
                    path: "texture/badge/journey_img_medal_4_1",
                    atlas: false
                };
            case TravelMapInterface_1.MapElementId.E04GiftBox2:
                return {
                    path: "texture/badge/journey_img_medal_4_2",
                    atlas: false
                };
            case TravelMapInterface_1.MapElementId.E04GiftBox3:
                return {
                    path: "texture/badge/journey_img_medal_4_3",
                    atlas: false
                };
            default:
                return {
                    path: null
                };
        }
    };
    E04GiftBox.prototype.getBadgeBgPath = function (e) {
        switch (e) {
            case TravelMapInterface_1.MapElementId.E04GiftBox1:
                return {
                    path: "texture/journeyMap/04/journey_bg_medal",
                    atlas: false
                };
            case TravelMapInterface_1.MapElementId.E04GiftBox2:
                return {
                    path: "texture/journeyMap/04/journey_bg_medal_2",
                    atlas: false
                };
            case TravelMapInterface_1.MapElementId.E04GiftBox3:
                return {
                    path: "texture/journeyMap/04/journey_bg_medal_3",
                    atlas: false
                };
            default:
                return {
                    path: null
                };
        }
    };
    E04GiftBox.prototype.getBadgeId = function (e) {
        switch (e) {
            case TravelMapInterface_1.MapElementId.E04GiftBox1:
                return 1;
            case TravelMapInterface_1.MapElementId.E04GiftBox2:
                return 2;
            case TravelMapInterface_1.MapElementId.E04GiftBox3:
                return 3;
            default:
                return 1;
        }
    };
    E04GiftBox.prefabUrl = "prefabs/journeyMap/04/E04GiftBox";
    E04GiftBox = __decorate([
        mj.class
    ], E04GiftBox);
    return E04GiftBox;
}(ESimpleGiftBox_1.default));
exports.default = E04GiftBox;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0UwNEdpZnRCb3gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJEQUFvRDtBQUNwRCxtREFBOEM7QUFFOUM7SUFBd0MsOEJBQWM7SUFBdEQ7O0lBNERBLENBQUM7SUExREMsaUNBQVksR0FBWixVQUFhLENBQUM7UUFDWixRQUFRLENBQUMsRUFBRTtZQUNULEtBQUssaUNBQVksQ0FBQyxXQUFXO2dCQUMzQixPQUFPO29CQUNMLElBQUksRUFBRSxxQ0FBcUM7b0JBQzNDLEtBQUssRUFBRSxLQUFLO2lCQUNiLENBQUM7WUFDSixLQUFLLGlDQUFZLENBQUMsV0FBVztnQkFDM0IsT0FBTztvQkFDTCxJQUFJLEVBQUUscUNBQXFDO29CQUMzQyxLQUFLLEVBQUUsS0FBSztpQkFDYixDQUFDO1lBQ0osS0FBSyxpQ0FBWSxDQUFDLFdBQVc7Z0JBQzNCLE9BQU87b0JBQ0wsSUFBSSxFQUFFLHFDQUFxQztvQkFDM0MsS0FBSyxFQUFFLEtBQUs7aUJBQ2IsQ0FBQztZQUNKO2dCQUNFLE9BQU87b0JBQ0wsSUFBSSxFQUFFLElBQUk7aUJBQ1gsQ0FBQztTQUNMO0lBQ0gsQ0FBQztJQUNELG1DQUFjLEdBQWQsVUFBZSxDQUFDO1FBQ2QsUUFBUSxDQUFDLEVBQUU7WUFDVCxLQUFLLGlDQUFZLENBQUMsV0FBVztnQkFDM0IsT0FBTztvQkFDTCxJQUFJLEVBQUUsd0NBQXdDO29CQUM5QyxLQUFLLEVBQUUsS0FBSztpQkFDYixDQUFDO1lBQ0osS0FBSyxpQ0FBWSxDQUFDLFdBQVc7Z0JBQzNCLE9BQU87b0JBQ0wsSUFBSSxFQUFFLDBDQUEwQztvQkFDaEQsS0FBSyxFQUFFLEtBQUs7aUJBQ2IsQ0FBQztZQUNKLEtBQUssaUNBQVksQ0FBQyxXQUFXO2dCQUMzQixPQUFPO29CQUNMLElBQUksRUFBRSwwQ0FBMEM7b0JBQ2hELEtBQUssRUFBRSxLQUFLO2lCQUNiLENBQUM7WUFDSjtnQkFDRSxPQUFPO29CQUNMLElBQUksRUFBRSxJQUFJO2lCQUNYLENBQUM7U0FDTDtJQUNILENBQUM7SUFDRCwrQkFBVSxHQUFWLFVBQVcsQ0FBQztRQUNWLFFBQVEsQ0FBQyxFQUFFO1lBQ1QsS0FBSyxpQ0FBWSxDQUFDLFdBQVc7Z0JBQzNCLE9BQU8sQ0FBQyxDQUFDO1lBQ1gsS0FBSyxpQ0FBWSxDQUFDLFdBQVc7Z0JBQzNCLE9BQU8sQ0FBQyxDQUFDO1lBQ1gsS0FBSyxpQ0FBWSxDQUFDLFdBQVc7Z0JBQzNCLE9BQU8sQ0FBQyxDQUFDO1lBQ1g7Z0JBQ0UsT0FBTyxDQUFDLENBQUM7U0FDWjtJQUNILENBQUM7SUExRE0sb0JBQVMsR0FBRyxrQ0FBa0MsQ0FBQztJQURuQyxVQUFVO1FBRDlCLEVBQUUsQ0FBQyxLQUFLO09BQ1ksVUFBVSxDQTREOUI7SUFBRCxpQkFBQztDQTVERCxBQTREQyxDQTVEdUMsd0JBQWMsR0E0RHJEO2tCQTVEb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1hcEVsZW1lbnRJZCB9IGZyb20gJy4vVHJhdmVsTWFwSW50ZXJmYWNlJztcbmltcG9ydCBFU2ltcGxlR2lmdEJveCBmcm9tICcuL0VTaW1wbGVHaWZ0Qm94JztcbkBtai5jbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRTA0R2lmdEJveCBleHRlbmRzIEVTaW1wbGVHaWZ0Qm94IHtcbiAgc3RhdGljIHByZWZhYlVybCA9IFwicHJlZmFicy9qb3VybmV5TWFwLzA0L0UwNEdpZnRCb3hcIjtcbiAgZ2V0QmFkZ2VQYXRoKGUpIHtcbiAgICBzd2l0Y2ggKGUpIHtcbiAgICAgIGNhc2UgTWFwRWxlbWVudElkLkUwNEdpZnRCb3gxOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHBhdGg6IFwidGV4dHVyZS9iYWRnZS9qb3VybmV5X2ltZ19tZWRhbF80XzFcIixcbiAgICAgICAgICBhdGxhczogZmFsc2VcbiAgICAgICAgfTtcbiAgICAgIGNhc2UgTWFwRWxlbWVudElkLkUwNEdpZnRCb3gyOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHBhdGg6IFwidGV4dHVyZS9iYWRnZS9qb3VybmV5X2ltZ19tZWRhbF80XzJcIixcbiAgICAgICAgICBhdGxhczogZmFsc2VcbiAgICAgICAgfTtcbiAgICAgIGNhc2UgTWFwRWxlbWVudElkLkUwNEdpZnRCb3gzOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHBhdGg6IFwidGV4dHVyZS9iYWRnZS9qb3VybmV5X2ltZ19tZWRhbF80XzNcIixcbiAgICAgICAgICBhdGxhczogZmFsc2VcbiAgICAgICAgfTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcGF0aDogbnVsbFxuICAgICAgICB9O1xuICAgIH1cbiAgfVxuICBnZXRCYWRnZUJnUGF0aChlKSB7XG4gICAgc3dpdGNoIChlKSB7XG4gICAgICBjYXNlIE1hcEVsZW1lbnRJZC5FMDRHaWZ0Qm94MTpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBwYXRoOiBcInRleHR1cmUvam91cm5leU1hcC8wNC9qb3VybmV5X2JnX21lZGFsXCIsXG4gICAgICAgICAgYXRsYXM6IGZhbHNlXG4gICAgICAgIH07XG4gICAgICBjYXNlIE1hcEVsZW1lbnRJZC5FMDRHaWZ0Qm94MjpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBwYXRoOiBcInRleHR1cmUvam91cm5leU1hcC8wNC9qb3VybmV5X2JnX21lZGFsXzJcIixcbiAgICAgICAgICBhdGxhczogZmFsc2VcbiAgICAgICAgfTtcbiAgICAgIGNhc2UgTWFwRWxlbWVudElkLkUwNEdpZnRCb3gzOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHBhdGg6IFwidGV4dHVyZS9qb3VybmV5TWFwLzA0L2pvdXJuZXlfYmdfbWVkYWxfM1wiLFxuICAgICAgICAgIGF0bGFzOiBmYWxzZVxuICAgICAgICB9O1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBwYXRoOiBudWxsXG4gICAgICAgIH07XG4gICAgfVxuICB9XG4gIGdldEJhZGdlSWQoZSkge1xuICAgIHN3aXRjaCAoZSkge1xuICAgICAgY2FzZSBNYXBFbGVtZW50SWQuRTA0R2lmdEJveDE6XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgY2FzZSBNYXBFbGVtZW50SWQuRTA0R2lmdEJveDI6XG4gICAgICAgIHJldHVybiAyO1xuICAgICAgY2FzZSBNYXBFbGVtZW50SWQuRTA0R2lmdEJveDM6XG4gICAgICAgIHJldHVybiAzO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICB9XG59Il19