
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/E07GiftBox.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b0129jfRP9CtLSjHN8GHz8V', 'E07GiftBox');
// Scripts/E07GiftBox.ts

Object.defineProperty(exports, "__esModule", { value: true });
var TravelMapInterface_1 = require("./TravelMapInterface");
var ESimpleGiftBox_1 = require("./ESimpleGiftBox");
var E07GiftBox = /** @class */ (function (_super) {
    __extends(E07GiftBox, _super);
    function E07GiftBox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    E07GiftBox.prototype.getBadgePath = function (e) {
        switch (e) {
            case TravelMapInterface_1.MapElementId.E07GiftBox1:
                return {
                    path: "texture/badge/journey_img_medal_7_1",
                    atlas: false
                };
            case TravelMapInterface_1.MapElementId.E07GiftBox2:
                return {
                    path: "texture/badge/journey_img_medal_7_2",
                    atlas: false
                };
            case TravelMapInterface_1.MapElementId.E07GiftBox3:
                return {
                    path: "texture/badge/journey_img_medal_7_3",
                    atlas: false
                };
            default:
                return {
                    path: null
                };
        }
    };
    E07GiftBox.prototype.getBadgeBgPath = function () {
        return {
            path: "texture/journey/journey_bg_medal",
            atlas: false,
            bundle: "mainRes"
        };
    };
    E07GiftBox.prototype.getBadgeId = function (e) {
        switch (e) {
            case TravelMapInterface_1.MapElementId.E07GiftBox1:
                return 1;
            case TravelMapInterface_1.MapElementId.E07GiftBox2:
                return 2;
            case TravelMapInterface_1.MapElementId.E07GiftBox3:
                return 3;
            default:
                return 1;
        }
    };
    E07GiftBox.prefabUrl = "prefabs/E07GiftBox";
    E07GiftBox.bundleName = "l_travel05";
    E07GiftBox = __decorate([
        mj.class
    ], E07GiftBox);
    return E07GiftBox;
}(ESimpleGiftBox_1.default));
exports.default = E07GiftBox;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0UwN0dpZnRCb3gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJEQUFvRDtBQUNwRCxtREFBOEM7QUFFOUM7SUFBd0MsOEJBQWM7SUFBdEQ7O0lBNkNBLENBQUM7SUExQ0MsaUNBQVksR0FBWixVQUFhLENBQUM7UUFDWixRQUFRLENBQUMsRUFBRTtZQUNULEtBQUssaUNBQVksQ0FBQyxXQUFXO2dCQUMzQixPQUFPO29CQUNMLElBQUksRUFBRSxxQ0FBcUM7b0JBQzNDLEtBQUssRUFBRSxLQUFLO2lCQUNiLENBQUM7WUFDSixLQUFLLGlDQUFZLENBQUMsV0FBVztnQkFDM0IsT0FBTztvQkFDTCxJQUFJLEVBQUUscUNBQXFDO29CQUMzQyxLQUFLLEVBQUUsS0FBSztpQkFDYixDQUFDO1lBQ0osS0FBSyxpQ0FBWSxDQUFDLFdBQVc7Z0JBQzNCLE9BQU87b0JBQ0wsSUFBSSxFQUFFLHFDQUFxQztvQkFDM0MsS0FBSyxFQUFFLEtBQUs7aUJBQ2IsQ0FBQztZQUNKO2dCQUNFLE9BQU87b0JBQ0wsSUFBSSxFQUFFLElBQUk7aUJBQ1gsQ0FBQztTQUNMO0lBQ0gsQ0FBQztJQUNELG1DQUFjLEdBQWQ7UUFDRSxPQUFPO1lBQ0wsSUFBSSxFQUFFLGtDQUFrQztZQUN4QyxLQUFLLEVBQUUsS0FBSztZQUNaLE1BQU0sRUFBRSxTQUFTO1NBQ2xCLENBQUM7SUFDSixDQUFDO0lBQ0QsK0JBQVUsR0FBVixVQUFXLENBQUM7UUFDVixRQUFRLENBQUMsRUFBRTtZQUNULEtBQUssaUNBQVksQ0FBQyxXQUFXO2dCQUMzQixPQUFPLENBQUMsQ0FBQztZQUNYLEtBQUssaUNBQVksQ0FBQyxXQUFXO2dCQUMzQixPQUFPLENBQUMsQ0FBQztZQUNYLEtBQUssaUNBQVksQ0FBQyxXQUFXO2dCQUMzQixPQUFPLENBQUMsQ0FBQztZQUNYO2dCQUNFLE9BQU8sQ0FBQyxDQUFDO1NBQ1o7SUFDSCxDQUFDO0lBM0NNLG9CQUFTLEdBQUcsb0JBQW9CLENBQUM7SUFDakMscUJBQVUsR0FBRyxZQUFZLENBQUM7SUFGZCxVQUFVO1FBRDlCLEVBQUUsQ0FBQyxLQUFLO09BQ1ksVUFBVSxDQTZDOUI7SUFBRCxpQkFBQztDQTdDRCxBQTZDQyxDQTdDdUMsd0JBQWMsR0E2Q3JEO2tCQTdDb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1hcEVsZW1lbnRJZCB9IGZyb20gJy4vVHJhdmVsTWFwSW50ZXJmYWNlJztcbmltcG9ydCBFU2ltcGxlR2lmdEJveCBmcm9tICcuL0VTaW1wbGVHaWZ0Qm94JztcbkBtai5jbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRTA3R2lmdEJveCBleHRlbmRzIEVTaW1wbGVHaWZ0Qm94IHtcbiAgc3RhdGljIHByZWZhYlVybCA9IFwicHJlZmFicy9FMDdHaWZ0Qm94XCI7XG4gIHN0YXRpYyBidW5kbGVOYW1lID0gXCJsX3RyYXZlbDA1XCI7XG4gIGdldEJhZGdlUGF0aChlKSB7XG4gICAgc3dpdGNoIChlKSB7XG4gICAgICBjYXNlIE1hcEVsZW1lbnRJZC5FMDdHaWZ0Qm94MTpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBwYXRoOiBcInRleHR1cmUvYmFkZ2Uvam91cm5leV9pbWdfbWVkYWxfN18xXCIsXG4gICAgICAgICAgYXRsYXM6IGZhbHNlXG4gICAgICAgIH07XG4gICAgICBjYXNlIE1hcEVsZW1lbnRJZC5FMDdHaWZ0Qm94MjpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBwYXRoOiBcInRleHR1cmUvYmFkZ2Uvam91cm5leV9pbWdfbWVkYWxfN18yXCIsXG4gICAgICAgICAgYXRsYXM6IGZhbHNlXG4gICAgICAgIH07XG4gICAgICBjYXNlIE1hcEVsZW1lbnRJZC5FMDdHaWZ0Qm94MzpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBwYXRoOiBcInRleHR1cmUvYmFkZ2Uvam91cm5leV9pbWdfbWVkYWxfN18zXCIsXG4gICAgICAgICAgYXRsYXM6IGZhbHNlXG4gICAgICAgIH07XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHBhdGg6IG51bGxcbiAgICAgICAgfTtcbiAgICB9XG4gIH1cbiAgZ2V0QmFkZ2VCZ1BhdGgoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhdGg6IFwidGV4dHVyZS9qb3VybmV5L2pvdXJuZXlfYmdfbWVkYWxcIixcbiAgICAgIGF0bGFzOiBmYWxzZSxcbiAgICAgIGJ1bmRsZTogXCJtYWluUmVzXCJcbiAgICB9O1xuICB9XG4gIGdldEJhZGdlSWQoZSkge1xuICAgIHN3aXRjaCAoZSkge1xuICAgICAgY2FzZSBNYXBFbGVtZW50SWQuRTA3R2lmdEJveDE6XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgY2FzZSBNYXBFbGVtZW50SWQuRTA3R2lmdEJveDI6XG4gICAgICAgIHJldHVybiAyO1xuICAgICAgY2FzZSBNYXBFbGVtZW50SWQuRTA3R2lmdEJveDM6XG4gICAgICAgIHJldHVybiAzO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICB9XG59Il19