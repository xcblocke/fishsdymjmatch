
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_maxMiniDieRate/Scripts/MaxMiniDieRateTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8b189miBT9HpaR/rDlVpgvu', 'MaxMiniDieRateTrait');
// subpackages/l_maxMiniDieRate/Scripts/MaxMiniDieRateTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ExtractTrait_1 = require("../../../Scripts/ExtractTrait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var MaxMiniDieRateTrait = /** @class */ (function (_super) {
    __extends(MaxMiniDieRateTrait, _super);
    function MaxMiniDieRateTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MaxMiniDieRateTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.localData.hasNon01Occurred || (this.localData.hasNon01Occurred = false);
        void 0 === this.localData.cycleIndex && (this.localData.cycleIndex = 0);
    };
    MaxMiniDieRateTrait.prototype.onExtNormLv_getDeathLv = function (t, e) {
        if (this.checkGameMode()) {
            var r = t.beforReturnVal;
            if (r && "string" == typeof r) {
                if (!this.localData.hasNon01Occurred && "01" !== r) {
                    this.localData.hasNon01Occurred = true;
                    this.localData.cycleIndex = 0;
                }
                if (this.localData.hasNon01Occurred) {
                    var a = this.localData.cycleIndex % 2 == 0 ? "04" : "01";
                    this.localData.cycleIndex = (this.localData.cycleIndex + 1) % 2;
                    e({
                        returnType: TraitManager_1.TraitCallbackReturnType.return,
                        isBreak: true,
                        returnVal: a
                    });
                }
                else
                    e();
            }
            else
                e();
        }
        else
            e();
    };
    MaxMiniDieRateTrait.traitKey = "MaxMiniDieRate";
    MaxMiniDieRateTrait = __decorate([
        mj.trait,
        mj.class("MaxMiniDieRateTrait")
    ], MaxMiniDieRateTrait);
    return MaxMiniDieRateTrait;
}(ExtractTrait_1.default));
exports.default = MaxMiniDieRateTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX21heE1pbmlEaWVSYXRlL1NjcmlwdHMvTWF4TWluaURpZVJhdGVUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOERBQXlEO0FBQ3pELDhFQUF3RjtBQUd4RjtJQUFpRCx1Q0FBWTtJQUE3RDs7SUEyQkEsQ0FBQztJQXpCQyxvQ0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUMsQ0FBQztRQUM3RSxLQUFLLENBQUMsS0FBSyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUFDRCxvREFBc0IsR0FBdEIsVUFBdUIsQ0FBQyxFQUFFLENBQUM7UUFDekIsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUU7WUFDeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGNBQWMsQ0FBQztZQUN6QixJQUFJLENBQUMsSUFBSSxRQUFRLElBQUksT0FBTyxDQUFDLEVBQUU7Z0JBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixJQUFJLElBQUksS0FBSyxDQUFDLEVBQUU7b0JBQ2xELElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO29CQUN2QyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7aUJBQy9CO2dCQUNELElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRTtvQkFDbkMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7b0JBQ3pELElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNoRSxDQUFDLENBQUM7d0JBQ0EsVUFBVSxFQUFFLHNDQUF1QixDQUFDLE1BQU07d0JBQzFDLE9BQU8sRUFBRSxJQUFJO3dCQUNiLFNBQVMsRUFBRSxDQUFDO3FCQUNiLENBQUMsQ0FBQztpQkFDSjs7b0JBQU0sQ0FBQyxFQUFFLENBQUM7YUFDWjs7Z0JBQU0sQ0FBQyxFQUFFLENBQUM7U0FDWjs7WUFBTSxDQUFDLEVBQUUsQ0FBQztJQUNiLENBQUM7SUF6Qk0sNEJBQVEsR0FBRyxnQkFBZ0IsQ0FBQztJQURoQixtQkFBbUI7UUFGdkMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDO09BQ1gsbUJBQW1CLENBMkJ2QztJQUFELDBCQUFDO0NBM0JELEFBMkJDLENBM0JnRCxzQkFBWSxHQTJCNUQ7a0JBM0JvQixtQkFBbUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRXh0cmFjdFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvRXh0cmFjdFRyYWl0JztcbmltcG9ydCB7IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXRNYW5hZ2VyJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiTWF4TWluaURpZVJhdGVUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWF4TWluaURpZVJhdGVUcmFpdCBleHRlbmRzIEV4dHJhY3RUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiTWF4TWluaURpZVJhdGVcIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMubG9jYWxEYXRhLmhhc05vbjAxT2NjdXJyZWQgfHwgKHRoaXMubG9jYWxEYXRhLmhhc05vbjAxT2NjdXJyZWQgPSBmYWxzZSk7XG4gICAgdm9pZCAwID09PSB0aGlzLmxvY2FsRGF0YS5jeWNsZUluZGV4ICYmICh0aGlzLmxvY2FsRGF0YS5jeWNsZUluZGV4ID0gMCk7XG4gIH1cbiAgb25FeHROb3JtTHZfZ2V0RGVhdGhMdih0LCBlKSB7XG4gICAgaWYgKHRoaXMuY2hlY2tHYW1lTW9kZSgpKSB7XG4gICAgICB2YXIgciA9IHQuYmVmb3JSZXR1cm5WYWw7XG4gICAgICBpZiAociAmJiBcInN0cmluZ1wiID09IHR5cGVvZiByKSB7XG4gICAgICAgIGlmICghdGhpcy5sb2NhbERhdGEuaGFzTm9uMDFPY2N1cnJlZCAmJiBcIjAxXCIgIT09IHIpIHtcbiAgICAgICAgICB0aGlzLmxvY2FsRGF0YS5oYXNOb24wMU9jY3VycmVkID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLmxvY2FsRGF0YS5jeWNsZUluZGV4ID0gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5sb2NhbERhdGEuaGFzTm9uMDFPY2N1cnJlZCkge1xuICAgICAgICAgIHZhciBhID0gdGhpcy5sb2NhbERhdGEuY3ljbGVJbmRleCAlIDIgPT0gMCA/IFwiMDRcIiA6IFwiMDFcIjtcbiAgICAgICAgICB0aGlzLmxvY2FsRGF0YS5jeWNsZUluZGV4ID0gKHRoaXMubG9jYWxEYXRhLmN5Y2xlSW5kZXggKyAxKSAlIDI7XG4gICAgICAgICAgZSh7XG4gICAgICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICAgICAgcmV0dXJuVmFsOiBhXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBlKCk7XG4gICAgICB9IGVsc2UgZSgpO1xuICAgIH0gZWxzZSBlKCk7XG4gIH1cbn0iXX0=