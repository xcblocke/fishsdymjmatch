
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_rankPopUserInfo/Scripts/RankPopUserInfoTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5ca4bWx5a1CU5mb5siJwV9j', 'RankPopUserInfoTrait');
// subpackages/l_rankPopUserInfo/Scripts/RankPopUserInfoTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var ControllerManager_1 = require("../../../Scripts/framework/manager/ControllerManager");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var RankPopUserInfoTrait = /** @class */ (function (_super) {
    __extends(RankPopUserInfoTrait, _super);
    function RankPopUserInfoTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RankPopUserInfoTrait.prototype.onRankIntroVw_collect = function (e, t) {
        if ("yes" == this.localData.isRankPopUserInfo)
            t();
        else {
            this.localData.isRankPopUserInfo = "yes";
            ControllerManager_1.default.getInstance().pushViewByController("UserInfoController", {
                isFromRankIntro: true
            });
            t({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return
            });
        }
    };
    RankPopUserInfoTrait.prototype.onRankIntroVw_closeClk = function (e, t) {
        t();
        this.localData.isRankPopUserInfo = "yes";
    };
    RankPopUserInfoTrait.prototype.onUserInfoVw_destroy = function (e, t) {
        var r;
        t();
        if (null === (r = e.ins.delegate.args) || void 0 === r ? void 0 : r.isFromRankIntro) {
            this.dispatchEvent("RankModel_updTime");
            if (UserModel_1.default.getInstance().getMainGameType() === GameTypeEnums_1.MjGameType.Tile2Normal) {
                ControllerManager_1.default.getInstance().pushViewByController("Tile2GameController");
            }
            else {
                ControllerManager_1.default.getInstance().pushViewByController("MainGameController");
            }
        }
    };
    RankPopUserInfoTrait.traitKey = "RankPopUserInfo";
    RankPopUserInfoTrait = __decorate([
        mj.trait,
        mj.class("RankPopUserInfoTrait")
    ], RankPopUserInfoTrait);
    return RankPopUserInfoTrait;
}(Trait_1.default));
exports.default = RankPopUserInfoTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3JhbmtQb3BVc2VySW5mby9TY3JpcHRzL1JhbmtQb3BVc2VySW5mb1RyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFDM0QsOEVBQXdGO0FBQ3hGLDBGQUFxRjtBQUNyRix3RkFBb0Y7QUFDcEYsc0VBQWlFO0FBR2pFO0lBQWtELHdDQUFLO0lBQXZEOztJQThCQSxDQUFDO0lBNUJDLG9EQUFxQixHQUFyQixVQUFzQixDQUFDLEVBQUUsQ0FBQztRQUN4QixJQUFJLEtBQUssSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFpQjtZQUFFLENBQUMsRUFBRSxDQUFDO2FBQUs7WUFDdEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7WUFDekMsMkJBQWlCLENBQUMsV0FBVyxFQUFFLENBQUMsb0JBQW9CLENBQUMsb0JBQW9CLEVBQUU7Z0JBQ3pFLGVBQWUsRUFBRSxJQUFJO2FBQ3RCLENBQUMsQ0FBQztZQUNILENBQUMsQ0FBQztnQkFDQSxPQUFPLEVBQUUsSUFBSTtnQkFDYixVQUFVLEVBQUUsc0NBQXVCLENBQUMsTUFBTTthQUMzQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUFDRCxxREFBc0IsR0FBdEIsVUFBdUIsQ0FBQyxFQUFFLENBQUM7UUFDekIsQ0FBQyxFQUFFLENBQUM7UUFDSixJQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQztJQUMzQyxDQUFDO0lBQ0QsbURBQW9CLEdBQXBCLFVBQXFCLENBQUMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxDQUFDO1FBQ04sQ0FBQyxFQUFFLENBQUM7UUFDSixJQUFJLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBZSxFQUFFO1lBQ25GLElBQUksQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsQ0FBQztZQUN4QyxJQUFJLG1CQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsZUFBZSxFQUFFLEtBQUssMEJBQVUsQ0FBQyxXQUFXLEVBQUU7Z0JBQ3hFLDJCQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDLG9CQUFvQixDQUFDLHFCQUFxQixDQUFDLENBQUM7YUFDN0U7aUJBQU07Z0JBQ0wsMkJBQWlCLENBQUMsV0FBVyxFQUFFLENBQUMsb0JBQW9CLENBQUMsb0JBQW9CLENBQUMsQ0FBQzthQUM1RTtTQUNGO0lBQ0gsQ0FBQztJQTVCTSw2QkFBUSxHQUFHLGlCQUFpQixDQUFDO0lBRGpCLG9CQUFvQjtRQUZ4QyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsc0JBQXNCLENBQUM7T0FDWixvQkFBb0IsQ0E4QnhDO0lBQUQsMkJBQUM7Q0E5QkQsQUE4QkMsQ0E5QmlELGVBQUssR0E4QnREO2tCQTlCb0Isb0JBQW9CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCB7IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXRNYW5hZ2VyJztcbmltcG9ydCBDb250cm9sbGVyTWFuYWdlciBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay9tYW5hZ2VyL0NvbnRyb2xsZXJNYW5hZ2VyJztcbmltcG9ydCB7IE1qR2FtZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L3VzZXIvVXNlck1vZGVsJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiUmFua1BvcFVzZXJJbmZvVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJhbmtQb3BVc2VySW5mb1RyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIlJhbmtQb3BVc2VySW5mb1wiO1xuICBvblJhbmtJbnRyb1Z3X2NvbGxlY3QoZSwgdCkge1xuICAgIGlmIChcInllc1wiID09IHRoaXMubG9jYWxEYXRhLmlzUmFua1BvcFVzZXJJbmZvKSB0KCk7ZWxzZSB7XG4gICAgICB0aGlzLmxvY2FsRGF0YS5pc1JhbmtQb3BVc2VySW5mbyA9IFwieWVzXCI7XG4gICAgICBDb250cm9sbGVyTWFuYWdlci5nZXRJbnN0YW5jZSgpLnB1c2hWaWV3QnlDb250cm9sbGVyKFwiVXNlckluZm9Db250cm9sbGVyXCIsIHtcbiAgICAgICAgaXNGcm9tUmFua0ludHJvOiB0cnVlXG4gICAgICB9KTtcbiAgICAgIHQoe1xuICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm5cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBvblJhbmtJbnRyb1Z3X2Nsb3NlQ2xrKGUsIHQpIHtcbiAgICB0KCk7XG4gICAgdGhpcy5sb2NhbERhdGEuaXNSYW5rUG9wVXNlckluZm8gPSBcInllc1wiO1xuICB9XG4gIG9uVXNlckluZm9Wd19kZXN0cm95KGUsIHQpIHtcbiAgICB2YXIgcjtcbiAgICB0KCk7XG4gICAgaWYgKG51bGwgPT09IChyID0gZS5pbnMuZGVsZWdhdGUuYXJncykgfHwgdm9pZCAwID09PSByID8gdm9pZCAwIDogci5pc0Zyb21SYW5rSW50cm8pIHtcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChcIlJhbmtNb2RlbF91cGRUaW1lXCIpO1xuICAgICAgaWYgKFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldE1haW5HYW1lVHlwZSgpID09PSBNakdhbWVUeXBlLlRpbGUyTm9ybWFsKSB7XG4gICAgICAgIENvbnRyb2xsZXJNYW5hZ2VyLmdldEluc3RhbmNlKCkucHVzaFZpZXdCeUNvbnRyb2xsZXIoXCJUaWxlMkdhbWVDb250cm9sbGVyXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgQ29udHJvbGxlck1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5wdXNoVmlld0J5Q29udHJvbGxlcihcIk1haW5HYW1lQ29udHJvbGxlclwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iXX0=