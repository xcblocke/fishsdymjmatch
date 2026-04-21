
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_travelValentine/Scripts/scripts/E06GiftBox.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '59826q2P8VLmYIJ7bkpp+3l', 'E06GiftBox');
// subpackages/l_travelValentine/Scripts/scripts/E06GiftBox.ts

Object.defineProperty(exports, "__esModule", { value: true });
var TravelMapInterface_1 = require("../../../../Scripts/TravelMapInterface");
var ESimpleGiftBox_1 = require("../../../../Scripts/ESimpleGiftBox");
var E06GiftBox = /** @class */ (function (_super) {
    __extends(E06GiftBox, _super);
    function E06GiftBox() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.boxBg = null;
        return _this;
    }
    E06GiftBox.prototype.uiOnLoad = function () {
        _super.prototype.uiOnLoad.call(this);
        this.boxBg = cc.find("Element/BoxBg", this.node);
    };
    E06GiftBox.prototype.getBadgePath = function (e) {
        switch (e) {
            case TravelMapInterface_1.MapElementId.E06GiftBox1:
                return {
                    path: "texture/badge/journey_img_medal_6_1",
                    atlas: false
                };
            case TravelMapInterface_1.MapElementId.E06GiftBox2:
                return {
                    path: "texture/badge/journey_img_medal_6_2",
                    atlas: false
                };
            case TravelMapInterface_1.MapElementId.E06GiftBox3:
                return {
                    path: "texture/badge/journey_img_medal_6_3",
                    atlas: false
                };
            default:
                return {
                    path: null
                };
        }
    };
    E06GiftBox.prototype.getBadgeBgPath = function (e) {
        switch (e) {
            case TravelMapInterface_1.MapElementId.E06GiftBox1:
                return {
                    path: "texture/journey_bg_medal",
                    atlas: false,
                    bundle: "l_travelValentine"
                };
            case TravelMapInterface_1.MapElementId.E06GiftBox2:
                return {
                    path: "texture/journey_bg_medal_2",
                    atlas: false,
                    bundle: "l_travelValentine"
                };
            case TravelMapInterface_1.MapElementId.E06GiftBox3:
                return {
                    path: "texture/journey_bg_medal_3",
                    atlas: false,
                    bundle: "l_travelValentine"
                };
            default:
                return {
                    path: null
                };
        }
    };
    E06GiftBox.prototype.getBadgeId = function (e) {
        switch (e) {
            case TravelMapInterface_1.MapElementId.E06GiftBox1:
                return 1;
            case TravelMapInterface_1.MapElementId.E06GiftBox2:
                return 2;
            case TravelMapInterface_1.MapElementId.E06GiftBox3:
                return 3;
            default:
                return 1;
        }
    };
    E06GiftBox.prototype.updateUI = function () {
        _super.prototype.updateUI.call(this);
        this.boxBg.active = this._data.type === TravelMapInterface_1.MapElementId.E06GiftBox3;
        this.updateBadgeIcon();
    };
    E06GiftBox.prototype.updateBadgeIcon = function () {
        var e = 0.55;
        switch (this._data.type) {
            case TravelMapInterface_1.MapElementId.E06GiftBox1:
                e = 0.635;
                break;
            case TravelMapInterface_1.MapElementId.E06GiftBox2:
                e = 0.64;
                break;
            case TravelMapInterface_1.MapElementId.E06GiftBox3:
                e = 0.675;
        }
        this.badgeIcon.setScale(e);
    };
    E06GiftBox.prefabUrl = "prefabs/E06GiftBox";
    E06GiftBox.bundleName = "l_travelValentine";
    E06GiftBox = __decorate([
        mj.class
    ], E06GiftBox);
    return E06GiftBox;
}(ESimpleGiftBox_1.default));
exports.default = E06GiftBox;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3RyYXZlbFZhbGVudGluZS9TY3JpcHRzL3NjcmlwdHMvRTA2R2lmdEJveC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkVBQXNFO0FBQ3RFLHFFQUFnRTtBQUVoRTtJQUF3Qyw4QkFBYztJQUF0RDtRQUFBLHFFQXdGQztRQXZGQyxXQUFLLEdBQUcsSUFBSSxDQUFDOztJQXVGZixDQUFDO0lBcEZDLDZCQUFRLEdBQVI7UUFDRSxpQkFBTSxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFDRCxpQ0FBWSxHQUFaLFVBQWEsQ0FBQztRQUNaLFFBQVEsQ0FBQyxFQUFFO1lBQ1QsS0FBSyxpQ0FBWSxDQUFDLFdBQVc7Z0JBQzNCLE9BQU87b0JBQ0wsSUFBSSxFQUFFLHFDQUFxQztvQkFDM0MsS0FBSyxFQUFFLEtBQUs7aUJBQ2IsQ0FBQztZQUNKLEtBQUssaUNBQVksQ0FBQyxXQUFXO2dCQUMzQixPQUFPO29CQUNMLElBQUksRUFBRSxxQ0FBcUM7b0JBQzNDLEtBQUssRUFBRSxLQUFLO2lCQUNiLENBQUM7WUFDSixLQUFLLGlDQUFZLENBQUMsV0FBVztnQkFDM0IsT0FBTztvQkFDTCxJQUFJLEVBQUUscUNBQXFDO29CQUMzQyxLQUFLLEVBQUUsS0FBSztpQkFDYixDQUFDO1lBQ0o7Z0JBQ0UsT0FBTztvQkFDTCxJQUFJLEVBQUUsSUFBSTtpQkFDWCxDQUFDO1NBQ0w7SUFDSCxDQUFDO0lBQ0QsbUNBQWMsR0FBZCxVQUFlLENBQUM7UUFDZCxRQUFRLENBQUMsRUFBRTtZQUNULEtBQUssaUNBQVksQ0FBQyxXQUFXO2dCQUMzQixPQUFPO29CQUNMLElBQUksRUFBRSwwQkFBMEI7b0JBQ2hDLEtBQUssRUFBRSxLQUFLO29CQUNaLE1BQU0sRUFBRSxtQkFBbUI7aUJBQzVCLENBQUM7WUFDSixLQUFLLGlDQUFZLENBQUMsV0FBVztnQkFDM0IsT0FBTztvQkFDTCxJQUFJLEVBQUUsNEJBQTRCO29CQUNsQyxLQUFLLEVBQUUsS0FBSztvQkFDWixNQUFNLEVBQUUsbUJBQW1CO2lCQUM1QixDQUFDO1lBQ0osS0FBSyxpQ0FBWSxDQUFDLFdBQVc7Z0JBQzNCLE9BQU87b0JBQ0wsSUFBSSxFQUFFLDRCQUE0QjtvQkFDbEMsS0FBSyxFQUFFLEtBQUs7b0JBQ1osTUFBTSxFQUFFLG1CQUFtQjtpQkFDNUIsQ0FBQztZQUNKO2dCQUNFLE9BQU87b0JBQ0wsSUFBSSxFQUFFLElBQUk7aUJBQ1gsQ0FBQztTQUNMO0lBQ0gsQ0FBQztJQUNELCtCQUFVLEdBQVYsVUFBVyxDQUFDO1FBQ1YsUUFBUSxDQUFDLEVBQUU7WUFDVCxLQUFLLGlDQUFZLENBQUMsV0FBVztnQkFDM0IsT0FBTyxDQUFDLENBQUM7WUFDWCxLQUFLLGlDQUFZLENBQUMsV0FBVztnQkFDM0IsT0FBTyxDQUFDLENBQUM7WUFDWCxLQUFLLGlDQUFZLENBQUMsV0FBVztnQkFDM0IsT0FBTyxDQUFDLENBQUM7WUFDWDtnQkFDRSxPQUFPLENBQUMsQ0FBQztTQUNaO0lBQ0gsQ0FBQztJQUNELDZCQUFRLEdBQVI7UUFDRSxpQkFBTSxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLGlDQUFZLENBQUMsV0FBVyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBQ0Qsb0NBQWUsR0FBZjtRQUNFLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNiLFFBQVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUU7WUFDdkIsS0FBSyxpQ0FBWSxDQUFDLFdBQVc7Z0JBQzNCLENBQUMsR0FBRyxLQUFLLENBQUM7Z0JBQ1YsTUFBTTtZQUNSLEtBQUssaUNBQVksQ0FBQyxXQUFXO2dCQUMzQixDQUFDLEdBQUcsSUFBSSxDQUFDO2dCQUNULE1BQU07WUFDUixLQUFLLGlDQUFZLENBQUMsV0FBVztnQkFDM0IsQ0FBQyxHQUFHLEtBQUssQ0FBQztTQUNiO1FBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQXJGTSxvQkFBUyxHQUFHLG9CQUFvQixDQUFDO0lBQ2pDLHFCQUFVLEdBQUcsbUJBQW1CLENBQUM7SUFIckIsVUFBVTtRQUQ5QixFQUFFLENBQUMsS0FBSztPQUNZLFVBQVUsQ0F3RjlCO0lBQUQsaUJBQUM7Q0F4RkQsQUF3RkMsQ0F4RnVDLHdCQUFjLEdBd0ZyRDtrQkF4Rm9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNYXBFbGVtZW50SWQgfSBmcm9tICcuLi8uLi8uLi8uLi9TY3JpcHRzL1RyYXZlbE1hcEludGVyZmFjZSc7XG5pbXBvcnQgRVNpbXBsZUdpZnRCb3ggZnJvbSAnLi4vLi4vLi4vLi4vU2NyaXB0cy9FU2ltcGxlR2lmdEJveCc7XG5AbWouY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEUwNkdpZnRCb3ggZXh0ZW5kcyBFU2ltcGxlR2lmdEJveCB7XG4gIGJveEJnID0gbnVsbDtcbiAgc3RhdGljIHByZWZhYlVybCA9IFwicHJlZmFicy9FMDZHaWZ0Qm94XCI7XG4gIHN0YXRpYyBidW5kbGVOYW1lID0gXCJsX3RyYXZlbFZhbGVudGluZVwiO1xuICB1aU9uTG9hZCgpIHtcbiAgICBzdXBlci51aU9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuYm94QmcgPSBjYy5maW5kKFwiRWxlbWVudC9Cb3hCZ1wiLCB0aGlzLm5vZGUpO1xuICB9XG4gIGdldEJhZGdlUGF0aChlKSB7XG4gICAgc3dpdGNoIChlKSB7XG4gICAgICBjYXNlIE1hcEVsZW1lbnRJZC5FMDZHaWZ0Qm94MTpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBwYXRoOiBcInRleHR1cmUvYmFkZ2Uvam91cm5leV9pbWdfbWVkYWxfNl8xXCIsXG4gICAgICAgICAgYXRsYXM6IGZhbHNlXG4gICAgICAgIH07XG4gICAgICBjYXNlIE1hcEVsZW1lbnRJZC5FMDZHaWZ0Qm94MjpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBwYXRoOiBcInRleHR1cmUvYmFkZ2Uvam91cm5leV9pbWdfbWVkYWxfNl8yXCIsXG4gICAgICAgICAgYXRsYXM6IGZhbHNlXG4gICAgICAgIH07XG4gICAgICBjYXNlIE1hcEVsZW1lbnRJZC5FMDZHaWZ0Qm94MzpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBwYXRoOiBcInRleHR1cmUvYmFkZ2Uvam91cm5leV9pbWdfbWVkYWxfNl8zXCIsXG4gICAgICAgICAgYXRsYXM6IGZhbHNlXG4gICAgICAgIH07XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHBhdGg6IG51bGxcbiAgICAgICAgfTtcbiAgICB9XG4gIH1cbiAgZ2V0QmFkZ2VCZ1BhdGgoZSkge1xuICAgIHN3aXRjaCAoZSkge1xuICAgICAgY2FzZSBNYXBFbGVtZW50SWQuRTA2R2lmdEJveDE6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcGF0aDogXCJ0ZXh0dXJlL2pvdXJuZXlfYmdfbWVkYWxcIixcbiAgICAgICAgICBhdGxhczogZmFsc2UsXG4gICAgICAgICAgYnVuZGxlOiBcImxfdHJhdmVsVmFsZW50aW5lXCJcbiAgICAgICAgfTtcbiAgICAgIGNhc2UgTWFwRWxlbWVudElkLkUwNkdpZnRCb3gyOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHBhdGg6IFwidGV4dHVyZS9qb3VybmV5X2JnX21lZGFsXzJcIixcbiAgICAgICAgICBhdGxhczogZmFsc2UsXG4gICAgICAgICAgYnVuZGxlOiBcImxfdHJhdmVsVmFsZW50aW5lXCJcbiAgICAgICAgfTtcbiAgICAgIGNhc2UgTWFwRWxlbWVudElkLkUwNkdpZnRCb3gzOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHBhdGg6IFwidGV4dHVyZS9qb3VybmV5X2JnX21lZGFsXzNcIixcbiAgICAgICAgICBhdGxhczogZmFsc2UsXG4gICAgICAgICAgYnVuZGxlOiBcImxfdHJhdmVsVmFsZW50aW5lXCJcbiAgICAgICAgfTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcGF0aDogbnVsbFxuICAgICAgICB9O1xuICAgIH1cbiAgfVxuICBnZXRCYWRnZUlkKGUpIHtcbiAgICBzd2l0Y2ggKGUpIHtcbiAgICAgIGNhc2UgTWFwRWxlbWVudElkLkUwNkdpZnRCb3gxOlxuICAgICAgICByZXR1cm4gMTtcbiAgICAgIGNhc2UgTWFwRWxlbWVudElkLkUwNkdpZnRCb3gyOlxuICAgICAgICByZXR1cm4gMjtcbiAgICAgIGNhc2UgTWFwRWxlbWVudElkLkUwNkdpZnRCb3gzOlxuICAgICAgICByZXR1cm4gMztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgfVxuICB1cGRhdGVVSSgpIHtcbiAgICBzdXBlci51cGRhdGVVSS5jYWxsKHRoaXMpO1xuICAgIHRoaXMuYm94QmcuYWN0aXZlID0gdGhpcy5fZGF0YS50eXBlID09PSBNYXBFbGVtZW50SWQuRTA2R2lmdEJveDM7XG4gICAgdGhpcy51cGRhdGVCYWRnZUljb24oKTtcbiAgfVxuICB1cGRhdGVCYWRnZUljb24oKSB7XG4gICAgdmFyIGUgPSAwLjU1O1xuICAgIHN3aXRjaCAodGhpcy5fZGF0YS50eXBlKSB7XG4gICAgICBjYXNlIE1hcEVsZW1lbnRJZC5FMDZHaWZ0Qm94MTpcbiAgICAgICAgZSA9IDAuNjM1O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTWFwRWxlbWVudElkLkUwNkdpZnRCb3gyOlxuICAgICAgICBlID0gMC42NDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIE1hcEVsZW1lbnRJZC5FMDZHaWZ0Qm94MzpcbiAgICAgICAgZSA9IDAuNjc1O1xuICAgIH1cbiAgICB0aGlzLmJhZGdlSWNvbi5zZXRTY2FsZShlKTtcbiAgfVxufSJdfQ==