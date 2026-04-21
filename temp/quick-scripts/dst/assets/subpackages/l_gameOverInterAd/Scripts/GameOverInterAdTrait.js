
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_gameOverInterAd/Scripts/GameOverInterAdTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ab284cwnedGyYiII7URg3+P', 'GameOverInterAdTrait');
// subpackages/l_gameOverInterAd/Scripts/GameOverInterAdTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var GameUtils_1 = require("../../../Scripts/core/simulator/util/GameUtils");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var AdManager_1 = require("../../../Scripts/base/ad/AdManager");
var DGameAdShow_1 = require("../../../Scripts/gamePlay/dot/DGameAdShow");
var DGameAdShowStage_1 = require("../../../Scripts/gamePlay/dot/DGameAdShowStage");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var GameOverInterAdTrait = /** @class */ (function (_super) {
    __extends(GameOverInterAdTrait, _super);
    function GameOverInterAdTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GameOverInterAdTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    GameOverInterAdTrait.prototype.playInterAd = function (t, e, r, n) {
        DGameAdShowStage_1.DotGameAdShowStage.dot(true, "clickAdLock");
        AdManager_1.default.getInstance().playInterAd(e, {
            onSuccess: function () {
                r && r();
            },
            onFailed: function () {
                n && n();
            }
        }, t, {
            adTimeType: "afterInterAd"
        });
    };
    GameOverInterAdTrait.prototype.onWinVw_playBtnAni = function (t, e) {
        UserModel_1.default.getInstance().getCurrentGameType(), GameTypeEnums_1.MjGameType.Classic, e();
    };
    GameOverInterAdTrait.prototype.onWinCtrl_viewShow = function (t, e) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            if (this.isBlockInterAdShow()) {
                e();
            }
            else {
                this.playInterAd("result_show", DGameAdShow_1.EAdPosition.RearInsertScreen_Success, function () {
                    e();
                }, function () {
                    e();
                });
            }
        }
        else {
            e();
        }
    };
    GameOverInterAdTrait.prototype.onTLWinCtrl_viewShow = function (t, e) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            if (this.isBlockInterAdShow()) {
                e();
            }
            else {
                this.playInterAd("result_show", DGameAdShow_1.EAdPosition.RearInsertScreen_TravelSuccess, function () {
                    e();
                }, function () {
                    e();
                });
            }
        }
        else {
            e();
        }
    };
    GameOverInterAdTrait.prototype.onDCWinCtrl_viewShow = function (t, e) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            if (this.isBlockInterAdShow()) {
                e();
            }
            else {
                this.playInterAd("result_show", DGameAdShow_1.EAdPosition.RearInsertScreen_DcSuccess, function () {
                    e();
                }, function () {
                    e();
                });
            }
        }
        else {
            e();
        }
    };
    GameOverInterAdTrait.prototype.onTile2WinCtrl_viewShow = function (t, e) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            if (this.isBlockInterAdShow()) {
                e();
            }
            else {
                this.playInterAd("result_show", DGameAdShow_1.EAdPosition.RearInsertScreen_Tile2Success, function () {
                    e();
                }, function () {
                    e();
                });
            }
        }
        else {
            e();
        }
    };
    GameOverInterAdTrait.prototype.isBlockInterAdShow = function () {
        return GameUtils_1.default.isRatingDialogReady();
    };
    GameOverInterAdTrait.traitKey = "GameOverInterAd";
    GameOverInterAdTrait.nextTimeOut = 900;
    __decorate([
        mj.traitEvent("GOInterAd_isBlocked")
    ], GameOverInterAdTrait.prototype, "isBlockInterAdShow", null);
    GameOverInterAdTrait = __decorate([
        mj.trait,
        mj.class("GameOverInterAdTrait")
    ], GameOverInterAdTrait);
    return GameOverInterAdTrait;
}(Trait_1.default));
exports.default = GameOverInterAdTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2dhbWVPdmVySW50ZXJBZC9TY3JpcHRzL0dhbWVPdmVySW50ZXJBZFRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3RkFBb0Y7QUFDcEYsNEVBQXVFO0FBQ3ZFLGdFQUEyRDtBQUMzRCxnRUFBMkQ7QUFDM0QseUVBQXdFO0FBQ3hFLG1GQUFvRjtBQUNwRixzRUFBaUU7QUFHakU7SUFBa0Qsd0NBQUs7SUFBdkQ7O0lBc0ZBLENBQUM7SUFuRkMscUNBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNELDBDQUFXLEdBQVgsVUFBWSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQ3BCLHFDQUFrQixDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFDNUMsbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFO1lBQ3JDLFNBQVMsRUFBRTtnQkFDVCxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7WUFDWCxDQUFDO1lBQ0QsUUFBUSxFQUFFO2dCQUNSLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUNYLENBQUM7U0FDRixFQUFFLENBQUMsRUFBRTtZQUNKLFVBQVUsRUFBRSxjQUFjO1NBQzNCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxpREFBa0IsR0FBbEIsVUFBbUIsQ0FBQyxFQUFFLENBQUM7UUFDckIsbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxFQUFFLDBCQUFVLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQ3hFLENBQUM7SUFDRCxpREFBa0IsR0FBbEIsVUFBbUIsQ0FBQyxFQUFFLENBQUM7UUFDckIsSUFBSSxtQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLGtCQUFrQixFQUFFLEtBQUssMEJBQVUsQ0FBQyxPQUFPLEVBQUU7WUFDdkUsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsRUFBRTtnQkFDN0IsQ0FBQyxFQUFFLENBQUM7YUFDTDtpQkFBTTtnQkFDTCxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSx5QkFBVyxDQUFDLHdCQUF3QixFQUFFO29CQUNwRSxDQUFDLEVBQUUsQ0FBQztnQkFDTixDQUFDLEVBQUU7b0JBQ0QsQ0FBQyxFQUFFLENBQUM7Z0JBQ04sQ0FBQyxDQUFDLENBQUM7YUFDSjtTQUNGO2FBQU07WUFDTCxDQUFDLEVBQUUsQ0FBQztTQUNMO0lBQ0gsQ0FBQztJQUNELG1EQUFvQixHQUFwQixVQUFxQixDQUFDLEVBQUUsQ0FBQztRQUN2QixJQUFJLG1CQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsS0FBSywwQkFBVSxDQUFDLE9BQU8sRUFBRTtZQUN2RSxJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxFQUFFO2dCQUM3QixDQUFDLEVBQUUsQ0FBQzthQUNMO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLHlCQUFXLENBQUMsOEJBQThCLEVBQUU7b0JBQzFFLENBQUMsRUFBRSxDQUFDO2dCQUNOLENBQUMsRUFBRTtvQkFDRCxDQUFDLEVBQUUsQ0FBQztnQkFDTixDQUFDLENBQUMsQ0FBQzthQUNKO1NBQ0Y7YUFBTTtZQUNMLENBQUMsRUFBRSxDQUFDO1NBQ0w7SUFDSCxDQUFDO0lBQ0QsbURBQW9CLEdBQXBCLFVBQXFCLENBQUMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxLQUFLLDBCQUFVLENBQUMsT0FBTyxFQUFFO1lBQ3ZFLElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFLEVBQUU7Z0JBQzdCLENBQUMsRUFBRSxDQUFDO2FBQ0w7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUseUJBQVcsQ0FBQywwQkFBMEIsRUFBRTtvQkFDdEUsQ0FBQyxFQUFFLENBQUM7Z0JBQ04sQ0FBQyxFQUFFO29CQUNELENBQUMsRUFBRSxDQUFDO2dCQUNOLENBQUMsQ0FBQyxDQUFDO2FBQ0o7U0FDRjthQUFNO1lBQ0wsQ0FBQyxFQUFFLENBQUM7U0FDTDtJQUNILENBQUM7SUFDRCxzREFBdUIsR0FBdkIsVUFBd0IsQ0FBQyxFQUFFLENBQUM7UUFDMUIsSUFBSSxtQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLGtCQUFrQixFQUFFLEtBQUssMEJBQVUsQ0FBQyxPQUFPLEVBQUU7WUFDdkUsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsRUFBRTtnQkFDN0IsQ0FBQyxFQUFFLENBQUM7YUFDTDtpQkFBTTtnQkFDTCxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSx5QkFBVyxDQUFDLDZCQUE2QixFQUFFO29CQUN6RSxDQUFDLEVBQUUsQ0FBQztnQkFDTixDQUFDLEVBQUU7b0JBQ0QsQ0FBQyxFQUFFLENBQUM7Z0JBQ04sQ0FBQyxDQUFDLENBQUM7YUFDSjtTQUNGO2FBQU07WUFDTCxDQUFDLEVBQUUsQ0FBQztTQUNMO0lBQ0gsQ0FBQztJQUVELGlEQUFrQixHQUFsQjtRQUNFLE9BQU8sbUJBQVMsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQ3pDLENBQUM7SUFwRk0sNkJBQVEsR0FBRyxpQkFBaUIsQ0FBQztJQUM3QixnQ0FBVyxHQUFHLEdBQUcsQ0FBQztJQWlGekI7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDO2tFQUdwQztJQXJGa0Isb0JBQW9CO1FBRnhDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQztPQUNaLG9CQUFvQixDQXNGeEM7SUFBRCwyQkFBQztDQXRGRCxBQXNGQyxDQXRGaUQsZUFBSyxHQXNGdEQ7a0JBdEZvQixvQkFBb0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNakdhbWVUeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbmltcG9ydCBHYW1lVXRpbHMgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL3NpbXVsYXRvci91dGlsL0dhbWVVdGlscyc7XG5pbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IEFkTWFuYWdlciBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2Jhc2UvYWQvQWRNYW5hZ2VyJztcbmltcG9ydCB7IEVBZFBvc2l0aW9uIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS9kb3QvREdhbWVBZFNob3cnO1xuaW1wb3J0IHsgRG90R2FtZUFkU2hvd1N0YWdlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS9kb3QvREdhbWVBZFNob3dTdGFnZSc7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvdXNlci9Vc2VyTW9kZWwnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJHYW1lT3ZlckludGVyQWRUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZU92ZXJJbnRlckFkVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiR2FtZU92ZXJJbnRlckFkXCI7XG4gIHN0YXRpYyBuZXh0VGltZU91dCA9IDkwMDtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICB9XG4gIHBsYXlJbnRlckFkKHQsIGUsIHIsIG4pIHtcbiAgICBEb3RHYW1lQWRTaG93U3RhZ2UuZG90KHRydWUsIFwiY2xpY2tBZExvY2tcIik7XG4gICAgQWRNYW5hZ2VyLmdldEluc3RhbmNlKCkucGxheUludGVyQWQoZSwge1xuICAgICAgb25TdWNjZXNzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHIgJiYgcigpO1xuICAgICAgfSxcbiAgICAgIG9uRmFpbGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG4gJiYgbigpO1xuICAgICAgfVxuICAgIH0sIHQsIHtcbiAgICAgIGFkVGltZVR5cGU6IFwiYWZ0ZXJJbnRlckFkXCJcbiAgICB9KTtcbiAgfVxuICBvbldpblZ3X3BsYXlCdG5BbmkodCwgZSkge1xuICAgIFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEN1cnJlbnRHYW1lVHlwZSgpLCBNakdhbWVUeXBlLkNsYXNzaWMsIGUoKTtcbiAgfVxuICBvbldpbkN0cmxfdmlld1Nob3codCwgZSkge1xuICAgIGlmIChVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRDdXJyZW50R2FtZVR5cGUoKSAhPT0gTWpHYW1lVHlwZS5DbGFzc2ljKSB7XG4gICAgICBpZiAodGhpcy5pc0Jsb2NrSW50ZXJBZFNob3coKSkge1xuICAgICAgICBlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnBsYXlJbnRlckFkKFwicmVzdWx0X3Nob3dcIiwgRUFkUG9zaXRpb24uUmVhckluc2VydFNjcmVlbl9TdWNjZXNzLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgZSgpO1xuICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgZSgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZSgpO1xuICAgIH1cbiAgfVxuICBvblRMV2luQ3RybF92aWV3U2hvdyh0LCBlKSB7XG4gICAgaWYgKFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEN1cnJlbnRHYW1lVHlwZSgpICE9PSBNakdhbWVUeXBlLkNsYXNzaWMpIHtcbiAgICAgIGlmICh0aGlzLmlzQmxvY2tJbnRlckFkU2hvdygpKSB7XG4gICAgICAgIGUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucGxheUludGVyQWQoXCJyZXN1bHRfc2hvd1wiLCBFQWRQb3NpdGlvbi5SZWFySW5zZXJ0U2NyZWVuX1RyYXZlbFN1Y2Nlc3MsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBlKCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBlKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBlKCk7XG4gICAgfVxuICB9XG4gIG9uRENXaW5DdHJsX3ZpZXdTaG93KHQsIGUpIHtcbiAgICBpZiAoVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0Q3VycmVudEdhbWVUeXBlKCkgIT09IE1qR2FtZVR5cGUuQ2xhc3NpYykge1xuICAgICAgaWYgKHRoaXMuaXNCbG9ja0ludGVyQWRTaG93KCkpIHtcbiAgICAgICAgZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wbGF5SW50ZXJBZChcInJlc3VsdF9zaG93XCIsIEVBZFBvc2l0aW9uLlJlYXJJbnNlcnRTY3JlZW5fRGNTdWNjZXNzLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgZSgpO1xuICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgZSgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZSgpO1xuICAgIH1cbiAgfVxuICBvblRpbGUyV2luQ3RybF92aWV3U2hvdyh0LCBlKSB7XG4gICAgaWYgKFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEN1cnJlbnRHYW1lVHlwZSgpICE9PSBNakdhbWVUeXBlLkNsYXNzaWMpIHtcbiAgICAgIGlmICh0aGlzLmlzQmxvY2tJbnRlckFkU2hvdygpKSB7XG4gICAgICAgIGUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucGxheUludGVyQWQoXCJyZXN1bHRfc2hvd1wiLCBFQWRQb3NpdGlvbi5SZWFySW5zZXJ0U2NyZWVuX1RpbGUyU3VjY2VzcywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGUoKTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGUoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGUoKTtcbiAgICB9XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJHT0ludGVyQWRfaXNCbG9ja2VkXCIpXG4gIGlzQmxvY2tJbnRlckFkU2hvdygpIHtcbiAgICByZXR1cm4gR2FtZVV0aWxzLmlzUmF0aW5nRGlhbG9nUmVhZHkoKTtcbiAgfVxufSJdfQ==