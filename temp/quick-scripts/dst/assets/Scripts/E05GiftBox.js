
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/E05GiftBox.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3355fwO0CBK66OzWdEogKls', 'E05GiftBox');
// Scripts/E05GiftBox.ts

Object.defineProperty(exports, "__esModule", { value: true });
var TravelMapInterface_1 = require("./TravelMapInterface");
var ESimpleGiftBox_1 = require("./ESimpleGiftBox");
var E05GiftBox = /** @class */ (function (_super) {
    __extends(E05GiftBox, _super);
    function E05GiftBox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    E05GiftBox.prototype.getBadgePath = function (e) {
        switch (e) {
            case TravelMapInterface_1.MapElementId.E05GiftBox1:
                return {
                    path: "texture/badge/journey_img_medal_5_1",
                    atlas: false
                };
            case TravelMapInterface_1.MapElementId.E05GiftBox2:
                return {
                    path: "texture/badge/journey_img_medal_5_2",
                    atlas: false
                };
            case TravelMapInterface_1.MapElementId.E05GiftBox3:
                return {
                    path: "texture/badge/journey_img_medal_5_3",
                    atlas: false
                };
            default:
                return {
                    path: null
                };
        }
    };
    E05GiftBox.prototype.getBadgeBgPath = function () {
        return {
            path: null
        };
    };
    E05GiftBox.prototype.getBadgeId = function (e) {
        switch (e) {
            case TravelMapInterface_1.MapElementId.E05GiftBox1:
                return 1;
            case TravelMapInterface_1.MapElementId.E05GiftBox2:
                return 2;
            case TravelMapInterface_1.MapElementId.E05GiftBox3:
                return 3;
            default:
                return 1;
        }
    };
    E05GiftBox.prefabUrl = "prefabs/journeyMap/05/E05GiftBox";
    E05GiftBox = __decorate([
        mj.class
    ], E05GiftBox);
    return E05GiftBox;
}(ESimpleGiftBox_1.default));
exports.default = E05GiftBox;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0UwNUdpZnRCb3gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJEQUFvRDtBQUNwRCxtREFBOEM7QUFFOUM7SUFBd0MsOEJBQWM7SUFBdEQ7O0lBMENBLENBQUM7SUF4Q0MsaUNBQVksR0FBWixVQUFhLENBQUM7UUFDWixRQUFRLENBQUMsRUFBRTtZQUNULEtBQUssaUNBQVksQ0FBQyxXQUFXO2dCQUMzQixPQUFPO29CQUNMLElBQUksRUFBRSxxQ0FBcUM7b0JBQzNDLEtBQUssRUFBRSxLQUFLO2lCQUNiLENBQUM7WUFDSixLQUFLLGlDQUFZLENBQUMsV0FBVztnQkFDM0IsT0FBTztvQkFDTCxJQUFJLEVBQUUscUNBQXFDO29CQUMzQyxLQUFLLEVBQUUsS0FBSztpQkFDYixDQUFDO1lBQ0osS0FBSyxpQ0FBWSxDQUFDLFdBQVc7Z0JBQzNCLE9BQU87b0JBQ0wsSUFBSSxFQUFFLHFDQUFxQztvQkFDM0MsS0FBSyxFQUFFLEtBQUs7aUJBQ2IsQ0FBQztZQUNKO2dCQUNFLE9BQU87b0JBQ0wsSUFBSSxFQUFFLElBQUk7aUJBQ1gsQ0FBQztTQUNMO0lBQ0gsQ0FBQztJQUNELG1DQUFjLEdBQWQ7UUFDRSxPQUFPO1lBQ0wsSUFBSSxFQUFFLElBQUk7U0FDWCxDQUFDO0lBQ0osQ0FBQztJQUNELCtCQUFVLEdBQVYsVUFBVyxDQUFDO1FBQ1YsUUFBUSxDQUFDLEVBQUU7WUFDVCxLQUFLLGlDQUFZLENBQUMsV0FBVztnQkFDM0IsT0FBTyxDQUFDLENBQUM7WUFDWCxLQUFLLGlDQUFZLENBQUMsV0FBVztnQkFDM0IsT0FBTyxDQUFDLENBQUM7WUFDWCxLQUFLLGlDQUFZLENBQUMsV0FBVztnQkFDM0IsT0FBTyxDQUFDLENBQUM7WUFDWDtnQkFDRSxPQUFPLENBQUMsQ0FBQztTQUNaO0lBQ0gsQ0FBQztJQXhDTSxvQkFBUyxHQUFHLGtDQUFrQyxDQUFDO0lBRG5DLFVBQVU7UUFEOUIsRUFBRSxDQUFDLEtBQUs7T0FDWSxVQUFVLENBMEM5QjtJQUFELGlCQUFDO0NBMUNELEFBMENDLENBMUN1Qyx3QkFBYyxHQTBDckQ7a0JBMUNvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWFwRWxlbWVudElkIH0gZnJvbSAnLi9UcmF2ZWxNYXBJbnRlcmZhY2UnO1xuaW1wb3J0IEVTaW1wbGVHaWZ0Qm94IGZyb20gJy4vRVNpbXBsZUdpZnRCb3gnO1xuQG1qLmNsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFMDVHaWZ0Qm94IGV4dGVuZHMgRVNpbXBsZUdpZnRCb3gge1xuICBzdGF0aWMgcHJlZmFiVXJsID0gXCJwcmVmYWJzL2pvdXJuZXlNYXAvMDUvRTA1R2lmdEJveFwiO1xuICBnZXRCYWRnZVBhdGgoZSkge1xuICAgIHN3aXRjaCAoZSkge1xuICAgICAgY2FzZSBNYXBFbGVtZW50SWQuRTA1R2lmdEJveDE6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcGF0aDogXCJ0ZXh0dXJlL2JhZGdlL2pvdXJuZXlfaW1nX21lZGFsXzVfMVwiLFxuICAgICAgICAgIGF0bGFzOiBmYWxzZVxuICAgICAgICB9O1xuICAgICAgY2FzZSBNYXBFbGVtZW50SWQuRTA1R2lmdEJveDI6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcGF0aDogXCJ0ZXh0dXJlL2JhZGdlL2pvdXJuZXlfaW1nX21lZGFsXzVfMlwiLFxuICAgICAgICAgIGF0bGFzOiBmYWxzZVxuICAgICAgICB9O1xuICAgICAgY2FzZSBNYXBFbGVtZW50SWQuRTA1R2lmdEJveDM6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcGF0aDogXCJ0ZXh0dXJlL2JhZGdlL2pvdXJuZXlfaW1nX21lZGFsXzVfM1wiLFxuICAgICAgICAgIGF0bGFzOiBmYWxzZVxuICAgICAgICB9O1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBwYXRoOiBudWxsXG4gICAgICAgIH07XG4gICAgfVxuICB9XG4gIGdldEJhZGdlQmdQYXRoKCkge1xuICAgIHJldHVybiB7XG4gICAgICBwYXRoOiBudWxsXG4gICAgfTtcbiAgfVxuICBnZXRCYWRnZUlkKGUpIHtcbiAgICBzd2l0Y2ggKGUpIHtcbiAgICAgIGNhc2UgTWFwRWxlbWVudElkLkUwNUdpZnRCb3gxOlxuICAgICAgICByZXR1cm4gMTtcbiAgICAgIGNhc2UgTWFwRWxlbWVudElkLkUwNUdpZnRCb3gyOlxuICAgICAgICByZXR1cm4gMjtcbiAgICAgIGNhc2UgTWFwRWxlbWVudElkLkUwNUdpZnRCb3gzOlxuICAgICAgICByZXR1cm4gMztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgfVxufSJdfQ==