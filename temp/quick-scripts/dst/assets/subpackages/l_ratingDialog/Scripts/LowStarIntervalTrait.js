
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_ratingDialog/Scripts/LowStarIntervalTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6a6387aXB9JK6ciy+p4yQCT', 'LowStarIntervalTrait');
// subpackages/l_ratingDialog/Scripts/LowStarIntervalTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var LowStarIntervalTrait = /** @class */ (function (_super) {
    __extends(LowStarIntervalTrait, _super);
    function LowStarIntervalTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LowStarIntervalTrait.prototype.onLoad = function () {
        var e, o;
        _super.prototype.onLoad.call(this);
        this._config = {
            submitIndex: null !== (e = this._traitData.submitIndex) && void 0 !== e ? e : 1,
            intervalDays: null !== (o = this._traitData.intervalDays) && void 0 !== o ? o : 4
        };
        void 0 === this.localData.shouldApplyInterval && (this.localData.shouldApplyInterval = false);
    };
    LowStarIntervalTrait.prototype.onRatingDlg_onUserRating = function (t, e) {
        this.localData.totalShowCount++;
        var o = t.args[0];
        o >= 1 && o <= 3 && this.localData.totalShowCount === this._config.submitIndex && (this.localData.shouldApplyInterval = true);
        e();
    };
    LowStarIntervalTrait.prototype.onRatingDlg_getLowStarIntv = function (t, e) {
        if (this.localData.shouldApplyInterval) {
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                returnVal: this._config.intervalDays
            });
        }
        else {
            e();
        }
    };
    LowStarIntervalTrait.traitKey = "LowStarInterval";
    LowStarIntervalTrait = __decorate([
        mj.trait,
        mj.class("LowStarIntervalTrait")
    ], LowStarIntervalTrait);
    return LowStarIntervalTrait;
}(Trait_1.default));
exports.default = LowStarIntervalTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3JhdGluZ0RpYWxvZy9TY3JpcHRzL0xvd1N0YXJJbnRlcnZhbFRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFDM0QsOEVBQXdGO0FBR3hGO0lBQWtELHdDQUFLO0lBQXZEOztJQTRCQSxDQUFDO0lBMUJDLHFDQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDVCxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUc7WUFDYixXQUFXLEVBQUUsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDL0UsWUFBWSxFQUFFLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2xGLENBQUM7UUFDRixLQUFLLENBQUMsS0FBSyxJQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFtQixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsR0FBRyxLQUFLLENBQUMsQ0FBQztJQUNoRyxDQUFDO0lBQ0QsdURBQXdCLEdBQXhCLFVBQXlCLENBQUMsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDaEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxDQUFDO1FBQzlILENBQUMsRUFBRSxDQUFDO0lBQ04sQ0FBQztJQUNELHlEQUEwQixHQUExQixVQUEyQixDQUFDLEVBQUUsQ0FBQztRQUM3QixJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsbUJBQW1CLEVBQUU7WUFDdEMsQ0FBQyxDQUFDO2dCQUNBLE9BQU8sRUFBRSxJQUFJO2dCQUNiLFVBQVUsRUFBRSxzQ0FBdUIsQ0FBQyxNQUFNO2dCQUMxQyxTQUFTLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZO2FBQ3JDLENBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxDQUFDLEVBQUUsQ0FBQztTQUNMO0lBQ0gsQ0FBQztJQTFCTSw2QkFBUSxHQUFHLGlCQUFpQixDQUFDO0lBRGpCLG9CQUFvQjtRQUZ4QyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsc0JBQXNCLENBQUM7T0FDWixvQkFBb0IsQ0E0QnhDO0lBQUQsMkJBQUM7Q0E1QkQsQUE0QkMsQ0E1QmlELGVBQUssR0E0QnREO2tCQTVCb0Isb0JBQW9CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCB7IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXRNYW5hZ2VyJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiTG93U3RhckludGVydmFsVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvd1N0YXJJbnRlcnZhbFRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIkxvd1N0YXJJbnRlcnZhbFwiO1xuICBvbkxvYWQoKSB7XG4gICAgdmFyIGUsIG87XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5fY29uZmlnID0ge1xuICAgICAgc3VibWl0SW5kZXg6IG51bGwgIT09IChlID0gdGhpcy5fdHJhaXREYXRhLnN1Ym1pdEluZGV4KSAmJiB2b2lkIDAgIT09IGUgPyBlIDogMSxcbiAgICAgIGludGVydmFsRGF5czogbnVsbCAhPT0gKG8gPSB0aGlzLl90cmFpdERhdGEuaW50ZXJ2YWxEYXlzKSAmJiB2b2lkIDAgIT09IG8gPyBvIDogNFxuICAgIH07XG4gICAgdm9pZCAwID09PSB0aGlzLmxvY2FsRGF0YS5zaG91bGRBcHBseUludGVydmFsICYmICh0aGlzLmxvY2FsRGF0YS5zaG91bGRBcHBseUludGVydmFsID0gZmFsc2UpO1xuICB9XG4gIG9uUmF0aW5nRGxnX29uVXNlclJhdGluZyh0LCBlKSB7XG4gICAgdGhpcy5sb2NhbERhdGEudG90YWxTaG93Q291bnQrKztcbiAgICB2YXIgbyA9IHQuYXJnc1swXTtcbiAgICBvID49IDEgJiYgbyA8PSAzICYmIHRoaXMubG9jYWxEYXRhLnRvdGFsU2hvd0NvdW50ID09PSB0aGlzLl9jb25maWcuc3VibWl0SW5kZXggJiYgKHRoaXMubG9jYWxEYXRhLnNob3VsZEFwcGx5SW50ZXJ2YWwgPSB0cnVlKTtcbiAgICBlKCk7XG4gIH1cbiAgb25SYXRpbmdEbGdfZ2V0TG93U3RhckludHYodCwgZSkge1xuICAgIGlmICh0aGlzLmxvY2FsRGF0YS5zaG91bGRBcHBseUludGVydmFsKSB7XG4gICAgICBlKHtcbiAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICByZXR1cm5WYWw6IHRoaXMuX2NvbmZpZy5pbnRlcnZhbERheXNcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBlKCk7XG4gICAgfVxuICB9XG59Il19