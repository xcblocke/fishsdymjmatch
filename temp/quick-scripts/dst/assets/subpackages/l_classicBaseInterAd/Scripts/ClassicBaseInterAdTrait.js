
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_classicBaseInterAd/Scripts/ClassicBaseInterAdTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '93cfdVB495Noq36L5Ck4txZ', 'ClassicBaseInterAdTrait');
// subpackages/l_classicBaseInterAd/Scripts/ClassicBaseInterAdTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var AdManager_1 = require("../../../Scripts/base/ad/AdManager");
var DGameAdShow_1 = require("../../../Scripts/gamePlay/dot/DGameAdShow");
var DGameAdShowStage_1 = require("../../../Scripts/gamePlay/dot/DGameAdShowStage");
var CommonUtils_1 = require("../../../Scripts/framework/utils/CommonUtils");
var ClassicBaseInterAdTrait = /** @class */ (function (_super) {
    __extends(ClassicBaseInterAdTrait, _super);
    function ClassicBaseInterAdTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClassicBaseInterAdTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    ClassicBaseInterAdTrait.prototype.onClcFailBhv_start = function (e, t) {
        var r;
        if (UserModel_1.default.getInstance().getCurrentGameType() === GameTypeEnums_1.MjGameType.Classic) {
            var a = e.args[0];
            if (null !== (r = null == a ? void 0 : a.data) && void 0 !== r && r.skipInterAd)
                t();
            else {
                var o = AdManager_1.default.getInstance().checkInterAdIsReady(), n = CommonUtils_1.isNetworkAvailable();
                if (o || n) {
                    DGameAdShowStage_1.DotGameAdShowStage.dot(true, "endlessGameOver");
                    AdManager_1.default.getInstance().playInterAd(DGameAdShow_1.EAdPosition.InGameInsertScreen_PauseContinue, {
                        onSuccess: function () {
                            t();
                        },
                        onFailed: function () {
                            t();
                        }
                    }, "endless_game_over", {
                        adTimeType: "endlessGameOverAd"
                    });
                }
                else
                    t();
            }
        }
        else
            t();
    };
    ClassicBaseInterAdTrait.traitKey = "ClassicBaseInterAd";
    ClassicBaseInterAdTrait.nextTimeOut = 900;
    ClassicBaseInterAdTrait = __decorate([
        mj.trait,
        mj.class("ClassicBaseInterAdTrait")
    ], ClassicBaseInterAdTrait);
    return ClassicBaseInterAdTrait;
}(Trait_1.default));
exports.default = ClassicBaseInterAdTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2NsYXNzaWNCYXNlSW50ZXJBZC9TY3JpcHRzL0NsYXNzaWNCYXNlSW50ZXJBZFRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFDM0Qsd0ZBQW9GO0FBQ3BGLHNFQUFpRTtBQUNqRSxnRUFBMkQ7QUFDM0QseUVBQXdFO0FBQ3hFLG1GQUFvRjtBQUNwRiw0RUFBa0Y7QUFHbEY7SUFBcUQsMkNBQUs7SUFBMUQ7O0lBNkJBLENBQUM7SUExQkMsd0NBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNELG9EQUFrQixHQUFsQixVQUFtQixDQUFDLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsQ0FBQztRQUNOLElBQUksbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxLQUFLLDBCQUFVLENBQUMsT0FBTyxFQUFFO1lBQ3ZFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEIsSUFBSSxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVc7Z0JBQUUsQ0FBQyxFQUFFLENBQUM7aUJBQUs7Z0JBQ3hGLElBQUksQ0FBQyxHQUFHLG1CQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsbUJBQW1CLEVBQUUsRUFDbkQsQ0FBQyxHQUFHLGdDQUFrQixFQUFFLENBQUM7Z0JBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtvQkFDVixxQ0FBa0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLGlCQUFpQixDQUFDLENBQUM7b0JBQ2hELG1CQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsV0FBVyxDQUFDLHlCQUFXLENBQUMsZ0NBQWdDLEVBQUU7d0JBQ2hGLFNBQVMsRUFBRTs0QkFDVCxDQUFDLEVBQUUsQ0FBQzt3QkFDTixDQUFDO3dCQUNELFFBQVEsRUFBRTs0QkFDUixDQUFDLEVBQUUsQ0FBQzt3QkFDTixDQUFDO3FCQUNGLEVBQUUsbUJBQW1CLEVBQUU7d0JBQ3RCLFVBQVUsRUFBRSxtQkFBbUI7cUJBQ2hDLENBQUMsQ0FBQztpQkFDSjs7b0JBQU0sQ0FBQyxFQUFFLENBQUM7YUFDWjtTQUNGOztZQUFNLENBQUMsRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQTNCTSxnQ0FBUSxHQUFHLG9CQUFvQixDQUFDO0lBQ2hDLG1DQUFXLEdBQUcsR0FBRyxDQUFDO0lBRk4sdUJBQXVCO1FBRjNDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQztPQUNmLHVCQUF1QixDQTZCM0M7SUFBRCw4QkFBQztDQTdCRCxBQTZCQyxDQTdCb0QsZUFBSyxHQTZCekQ7a0JBN0JvQix1QkFBdUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IHsgTWpHYW1lVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9zaW11bGF0b3IvY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvdXNlci9Vc2VyTW9kZWwnO1xuaW1wb3J0IEFkTWFuYWdlciBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2Jhc2UvYWQvQWRNYW5hZ2VyJztcbmltcG9ydCB7IEVBZFBvc2l0aW9uIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS9kb3QvREdhbWVBZFNob3cnO1xuaW1wb3J0IHsgRG90R2FtZUFkU2hvd1N0YWdlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS9kb3QvREdhbWVBZFNob3dTdGFnZSc7XG5pbXBvcnQgeyBpc05ldHdvcmtBdmFpbGFibGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay91dGlscy9Db21tb25VdGlscyc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIkNsYXNzaWNCYXNlSW50ZXJBZFRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbGFzc2ljQmFzZUludGVyQWRUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJDbGFzc2ljQmFzZUludGVyQWRcIjtcbiAgc3RhdGljIG5leHRUaW1lT3V0ID0gOTAwO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gIH1cbiAgb25DbGNGYWlsQmh2X3N0YXJ0KGUsIHQpIHtcbiAgICB2YXIgcjtcbiAgICBpZiAoVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0Q3VycmVudEdhbWVUeXBlKCkgPT09IE1qR2FtZVR5cGUuQ2xhc3NpYykge1xuICAgICAgdmFyIGEgPSBlLmFyZ3NbMF07XG4gICAgICBpZiAobnVsbCAhPT0gKHIgPSBudWxsID09IGEgPyB2b2lkIDAgOiBhLmRhdGEpICYmIHZvaWQgMCAhPT0gciAmJiByLnNraXBJbnRlckFkKSB0KCk7ZWxzZSB7XG4gICAgICAgIHZhciBvID0gQWRNYW5hZ2VyLmdldEluc3RhbmNlKCkuY2hlY2tJbnRlckFkSXNSZWFkeSgpLFxuICAgICAgICAgIG4gPSBpc05ldHdvcmtBdmFpbGFibGUoKTtcbiAgICAgICAgaWYgKG8gfHwgbikge1xuICAgICAgICAgIERvdEdhbWVBZFNob3dTdGFnZS5kb3QodHJ1ZSwgXCJlbmRsZXNzR2FtZU92ZXJcIik7XG4gICAgICAgICAgQWRNYW5hZ2VyLmdldEluc3RhbmNlKCkucGxheUludGVyQWQoRUFkUG9zaXRpb24uSW5HYW1lSW5zZXJ0U2NyZWVuX1BhdXNlQ29udGludWUsIHtcbiAgICAgICAgICAgIG9uU3VjY2VzczogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICB0KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25GYWlsZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIFwiZW5kbGVzc19nYW1lX292ZXJcIiwge1xuICAgICAgICAgICAgYWRUaW1lVHlwZTogXCJlbmRsZXNzR2FtZU92ZXJBZFwiXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB0KCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHQoKTtcbiAgfVxufSJdfQ==