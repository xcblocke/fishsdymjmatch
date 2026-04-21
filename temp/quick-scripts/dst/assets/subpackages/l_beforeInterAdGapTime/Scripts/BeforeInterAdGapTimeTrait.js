
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_beforeInterAdGapTime/Scripts/BeforeInterAdGapTimeTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6c97dTZkC5JMqX2fGF6nqsM', 'BeforeInterAdGapTimeTrait');
// subpackages/l_beforeInterAdGapTime/Scripts/BeforeInterAdGapTimeTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var BeforeInterAdGapTimeTrait = /** @class */ (function (_super) {
    __extends(BeforeInterAdGapTimeTrait, _super);
    function BeforeInterAdGapTimeTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._gapTime = 86400000;
        _this._shouldSkipInterAd = false;
        return _this;
    }
    BeforeInterAdGapTimeTrait.prototype.onLoad = function () {
        var e;
        _super.prototype.onLoad.call(this);
        void 0 !== (null === (e = this._traitData) || void 0 === e ? void 0 : e.gapTimeHours) && (this._gapTime = 3600000 * this._traitData.gapTimeHours);
        var r = UserModel_1.default.getInstance(), i = this.localData.lastColdStartTime || 0, o = r.getAppStartTime();
        if (i > 0 && (0 === i ? 0 : o - i) > this._gapTime) {
            this._shouldSkipInterAd = true;
        }
        else {
            this._shouldSkipInterAd = false;
        }
        this.localData.lastColdStartTime = o;
        this.localData = this.localData;
    };
    BeforeInterAdGapTimeTrait.prototype.onAdMgr_chkInterAd = function (t, e) {
        var r;
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            var i = null === (r = t.args) || void 0 === r ? void 0 : r[3];
            if ("beforeInterAd" === (null == i ? void 0 : i.adTimeType) && this._shouldSkipInterAd) {
                e({
                    returnVal: false,
                    isBreak: true,
                    returnType: TraitManager_1.TraitCallbackReturnType.return
                });
            }
            else {
                e();
            }
        }
        else
            e();
    };
    BeforeInterAdGapTimeTrait.traitKey = "BeforeInterAdGapTime";
    BeforeInterAdGapTimeTrait = __decorate([
        mj.trait,
        mj.class("BeforeInterAdGapTimeTrait")
    ], BeforeInterAdGapTimeTrait);
    return BeforeInterAdGapTimeTrait;
}(Trait_1.default));
exports.default = BeforeInterAdGapTimeTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2JlZm9yZUludGVyQWRHYXBUaW1lL1NjcmlwdHMvQmVmb3JlSW50ZXJBZEdhcFRpbWVUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0ZBQW9GO0FBQ3BGLGdFQUEyRDtBQUMzRCw4RUFBd0Y7QUFDeEYsc0VBQWlFO0FBR2pFO0lBQXVELDZDQUFLO0lBQTVEO1FBQUEscUVBa0NDO1FBakNDLGNBQVEsR0FBRyxRQUFRLENBQUM7UUFDcEIsd0JBQWtCLEdBQUcsS0FBSyxDQUFDOztJQWdDN0IsQ0FBQztJQTlCQywwQ0FBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLENBQUM7UUFDTixpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ2xKLElBQUksQ0FBQyxHQUFHLG1CQUFTLENBQUMsV0FBVyxFQUFFLEVBQzdCLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFpQixJQUFJLENBQUMsRUFDekMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUM7U0FDaEM7YUFBTTtZQUNMLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUM7U0FDakM7UUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFpQixHQUFHLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDbEMsQ0FBQztJQUNELHNEQUFrQixHQUFsQixVQUFtQixDQUFDLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsQ0FBQztRQUNOLElBQUksbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxLQUFLLDBCQUFVLENBQUMsT0FBTyxFQUFFO1lBQ3ZFLElBQUksQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlELElBQUksZUFBZSxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEVBQUU7Z0JBQ3RGLENBQUMsQ0FBQztvQkFDQSxTQUFTLEVBQUUsS0FBSztvQkFDaEIsT0FBTyxFQUFFLElBQUk7b0JBQ2IsVUFBVSxFQUFFLHNDQUF1QixDQUFDLE1BQU07aUJBQzNDLENBQUMsQ0FBQzthQUNKO2lCQUFNO2dCQUNMLENBQUMsRUFBRSxDQUFDO2FBQ0w7U0FDRjs7WUFBTSxDQUFDLEVBQUUsQ0FBQztJQUNiLENBQUM7SUE5Qk0sa0NBQVEsR0FBRyxzQkFBc0IsQ0FBQztJQUh0Qix5QkFBeUI7UUFGN0MsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLDJCQUEyQixDQUFDO09BQ2pCLHlCQUF5QixDQWtDN0M7SUFBRCxnQ0FBQztDQWxDRCxBQWtDQyxDQWxDc0QsZUFBSyxHQWtDM0Q7a0JBbENvQix5QkFBeUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNakdhbWVUeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbmltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgeyBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0TWFuYWdlcic7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvdXNlci9Vc2VyTW9kZWwnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJCZWZvcmVJbnRlckFkR2FwVGltZVRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCZWZvcmVJbnRlckFkR2FwVGltZVRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBfZ2FwVGltZSA9IDg2NDAwMDAwO1xuICBfc2hvdWxkU2tpcEludGVyQWQgPSBmYWxzZTtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJCZWZvcmVJbnRlckFkR2FwVGltZVwiO1xuICBvbkxvYWQoKSB7XG4gICAgdmFyIGU7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdm9pZCAwICE9PSAobnVsbCA9PT0gKGUgPSB0aGlzLl90cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUuZ2FwVGltZUhvdXJzKSAmJiAodGhpcy5fZ2FwVGltZSA9IDM2MDAwMDAgKiB0aGlzLl90cmFpdERhdGEuZ2FwVGltZUhvdXJzKTtcbiAgICB2YXIgciA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLFxuICAgICAgaSA9IHRoaXMubG9jYWxEYXRhLmxhc3RDb2xkU3RhcnRUaW1lIHx8IDAsXG4gICAgICBvID0gci5nZXRBcHBTdGFydFRpbWUoKTtcbiAgICBpZiAoaSA+IDAgJiYgKDAgPT09IGkgPyAwIDogbyAtIGkpID4gdGhpcy5fZ2FwVGltZSkge1xuICAgICAgdGhpcy5fc2hvdWxkU2tpcEludGVyQWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9zaG91bGRTa2lwSW50ZXJBZCA9IGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLmxvY2FsRGF0YS5sYXN0Q29sZFN0YXJ0VGltZSA9IG87XG4gICAgdGhpcy5sb2NhbERhdGEgPSB0aGlzLmxvY2FsRGF0YTtcbiAgfVxuICBvbkFkTWdyX2Noa0ludGVyQWQodCwgZSkge1xuICAgIHZhciByO1xuICAgIGlmIChVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRDdXJyZW50R2FtZVR5cGUoKSAhPT0gTWpHYW1lVHlwZS5DbGFzc2ljKSB7XG4gICAgICB2YXIgaSA9IG51bGwgPT09IChyID0gdC5hcmdzKSB8fCB2b2lkIDAgPT09IHIgPyB2b2lkIDAgOiByWzNdO1xuICAgICAgaWYgKFwiYmVmb3JlSW50ZXJBZFwiID09PSAobnVsbCA9PSBpID8gdm9pZCAwIDogaS5hZFRpbWVUeXBlKSAmJiB0aGlzLl9zaG91bGRTa2lwSW50ZXJBZCkge1xuICAgICAgICBlKHtcbiAgICAgICAgICByZXR1cm5WYWw6IGZhbHNlLFxuICAgICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZSgpO1xuICAgICAgfVxuICAgIH0gZWxzZSBlKCk7XG4gIH1cbn0iXX0=