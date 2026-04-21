
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_autoMergeSpeed/Scripts/AutoMergeSpeedTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '39aa0ZDKldMcKurFYi6OeEP', 'AutoMergeSpeedTrait');
// subpackages/l_autoMergeSpeed/Scripts/AutoMergeSpeedTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var StartAutoMergeBehavior_1 = require("../../../Scripts/base/StartAutoMergeBehavior");
var s = {
    A1: {
        type: StartAutoMergeBehavior_1.AutoMergeSpeedType.Constant,
        initialDelay: 0.33
    },
    A2: {
        type: StartAutoMergeBehavior_1.AutoMergeSpeedType.Constant,
        initialDelay: 0.25
    },
    B1: {
        type: StartAutoMergeBehavior_1.AutoMergeSpeedType.Accelerate,
        initialDelay: 0.33,
        decreaseStep: 0.02,
        minDelay: 0.1
    },
    B2: {
        type: StartAutoMergeBehavior_1.AutoMergeSpeedType.Accelerate,
        initialDelay: 0.25,
        decreaseStep: 0.03,
        minDelay: 0.08
    }
};
var AutoMergeSpeedTrait = /** @class */ (function (_super) {
    __extends(AutoMergeSpeedTrait, _super);
    function AutoMergeSpeedTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AutoMergeSpeedTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.initConfig();
    };
    AutoMergeSpeedTrait.prototype.initConfig = function () {
        if (this._traitData.mainlinePreset) {
            var t = this._traitData.mainlinePreset;
            this._mainlineConfig = Object.assign({}, s[t]);
        }
        else if (this._traitData.mainline) {
            this._mainlineConfig = this.buildConfig(this._traitData.mainline);
        }
        else {
            this._mainlineConfig = Object.assign({}, s.A1);
        }
        if (this._traitData.travelPreset) {
            t = this._traitData.travelPreset;
            this._travelConfig = Object.assign({}, s[t]);
        }
        else if (this._traitData.travel) {
            this._travelConfig = this.buildConfig(this._traitData.travel);
        }
        else {
            this._travelConfig = Object.assign({}, s.B1);
        }
    };
    AutoMergeSpeedTrait.prototype.buildConfig = function (t) {
        var e, r, i, n, a = null !== (e = null == t ? void 0 : t.type) && void 0 !== e ? e : StartAutoMergeBehavior_1.AutoMergeSpeedType.Constant, o = {
            type: a,
            initialDelay: null !== (r = null == t ? void 0 : t.initialDelay) && void 0 !== r ? r : 0.33
        };
        if (a === StartAutoMergeBehavior_1.AutoMergeSpeedType.Accelerate) {
            o.decreaseStep = null !== (i = null == t ? void 0 : t.decreaseStep) && void 0 !== i ? i : 0.02;
            o.minDelay = null !== (n = null == t ? void 0 : t.minDelay) && void 0 !== n ? n : 0.1;
        }
        return o;
    };
    AutoMergeSpeedTrait.prototype.onStAutoMrgBhv_mainSpd = function (t, e) {
        e({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            returnVal: this._mainlineConfig
        });
    };
    AutoMergeSpeedTrait.prototype.onStAutoMrgBhv_trvSpd = function (t, e) {
        e({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            returnVal: this._travelConfig
        });
    };
    AutoMergeSpeedTrait.traitKey = "AutoMergeSpeed";
    AutoMergeSpeedTrait = __decorate([
        mj.trait,
        mj.class("AutoMergeSpeedTrait")
    ], AutoMergeSpeedTrait);
    return AutoMergeSpeedTrait;
}(Trait_1.default));
exports.default = AutoMergeSpeedTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2F1dG9NZXJnZVNwZWVkL1NjcmlwdHMvQXV0b01lcmdlU3BlZWRUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELDhFQUF3RjtBQUN4Rix1RkFBa0Y7QUFDbEYsSUFBSSxDQUFDLEdBQUc7SUFDTixFQUFFLEVBQUU7UUFDRixJQUFJLEVBQUUsMkNBQWtCLENBQUMsUUFBUTtRQUNqQyxZQUFZLEVBQUUsSUFBSTtLQUNuQjtJQUNELEVBQUUsRUFBRTtRQUNGLElBQUksRUFBRSwyQ0FBa0IsQ0FBQyxRQUFRO1FBQ2pDLFlBQVksRUFBRSxJQUFJO0tBQ25CO0lBQ0QsRUFBRSxFQUFFO1FBQ0YsSUFBSSxFQUFFLDJDQUFrQixDQUFDLFVBQVU7UUFDbkMsWUFBWSxFQUFFLElBQUk7UUFDbEIsWUFBWSxFQUFFLElBQUk7UUFDbEIsUUFBUSxFQUFFLEdBQUc7S0FDZDtJQUNELEVBQUUsRUFBRTtRQUNGLElBQUksRUFBRSwyQ0FBa0IsQ0FBQyxVQUFVO1FBQ25DLFlBQVksRUFBRSxJQUFJO1FBQ2xCLFlBQVksRUFBRSxJQUFJO1FBQ2xCLFFBQVEsRUFBRSxJQUFJO0tBQ2Y7Q0FDRixDQUFDO0FBR0Y7SUFBaUQsdUNBQUs7SUFBdEQ7O0lBc0RBLENBQUM7SUFwREMsb0NBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFDRCx3Q0FBVSxHQUFWO1FBQ0UsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRTtZQUNsQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQztZQUN2QyxJQUFJLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENB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LENBQUM7UUFDeEIsQ0FBQyxDQUFDO1lBQ0EsT0FBTyxFQUFFLElBQUk7WUFDYixVQUFVLEVBQUUsc0NBQXVCLENBQUMsTUFBTTtZQUMxQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGFBQWE7U0FDOUIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQXBETSw0QkFBUSxHQUFHLGdCQUFnQixDQUFDO0lBRGhCLG1CQUFtQjtRQUZ2QyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQUM7T0FDWCxtQkFBbUIsQ0FzRHZDO0lBQUQsMEJBQUM7Q0F0REQsQUFzREMsQ0F0RGdELGVBQUssR0FzRHJEO2tCQXREb0IsbUJBQW1CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCB7IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXRNYW5hZ2VyJztcbmltcG9ydCB7IEF1dG9NZXJnZVNwZWVkVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvYmFzZS9TdGFydEF1dG9NZXJnZUJlaGF2aW9yJztcbnZhciBzID0ge1xuICBBMToge1xuICAgIHR5cGU6IEF1dG9NZXJnZVNwZWVkVHlwZS5Db25zdGFudCxcbiAgICBpbml0aWFsRGVsYXk6IDAuMzNcbiAgfSxcbiAgQTI6IHtcbiAgICB0eXBlOiBBdXRvTWVyZ2VTcGVlZFR5cGUuQ29uc3RhbnQsXG4gICAgaW5pdGlhbERlbGF5OiAwLjI1XG4gIH0sXG4gIEIxOiB7XG4gICAgdHlwZTogQXV0b01lcmdlU3BlZWRUeXBlLkFjY2VsZXJhdGUsXG4gICAgaW5pdGlhbERlbGF5OiAwLjMzLFxuICAgIGRlY3JlYXNlU3RlcDogMC4wMixcbiAgICBtaW5EZWxheTogMC4xXG4gIH0sXG4gIEIyOiB7XG4gICAgdHlwZTogQXV0b01lcmdlU3BlZWRUeXBlLkFjY2VsZXJhdGUsXG4gICAgaW5pdGlhbERlbGF5OiAwLjI1LFxuICAgIGRlY3JlYXNlU3RlcDogMC4wMyxcbiAgICBtaW5EZWxheTogMC4wOFxuICB9XG59O1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJBdXRvTWVyZ2VTcGVlZFRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdXRvTWVyZ2VTcGVlZFRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIkF1dG9NZXJnZVNwZWVkXCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLmluaXRDb25maWcoKTtcbiAgfVxuICBpbml0Q29uZmlnKCkge1xuICAgIGlmICh0aGlzLl90cmFpdERhdGEubWFpbmxpbmVQcmVzZXQpIHtcbiAgICAgIHZhciB0ID0gdGhpcy5fdHJhaXREYXRhLm1haW5saW5lUHJlc2V0O1xuICAgICAgdGhpcy5fbWFpbmxpbmVDb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCBzW3RdKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX3RyYWl0RGF0YS5tYWlubGluZSkge1xuICAgICAgdGhpcy5fbWFpbmxpbmVDb25maWcgPSB0aGlzLmJ1aWxkQ29uZmlnKHRoaXMuX3RyYWl0RGF0YS5tYWlubGluZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX21haW5saW5lQ29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgcy5BMSk7XG4gICAgfVxuICAgIGlmICh0aGlzLl90cmFpdERhdGEudHJhdmVsUHJlc2V0KSB7XG4gICAgICB0ID0gdGhpcy5fdHJhaXREYXRhLnRyYXZlbFByZXNldDtcbiAgICAgIHRoaXMuX3RyYXZlbENvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIHNbdF0pO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fdHJhaXREYXRhLnRyYXZlbCkge1xuICAgICAgdGhpcy5fdHJhdmVsQ29uZmlnID0gdGhpcy5idWlsZENvbmZpZyh0aGlzLl90cmFpdERhdGEudHJhdmVsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fdHJhdmVsQ29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgcy5CMSk7XG4gICAgfVxuICB9XG4gIGJ1aWxkQ29uZmlnKHQpIHtcbiAgICB2YXIgZSxcbiAgICAgIHIsXG4gICAgICBpLFxuICAgICAgbixcbiAgICAgIGEgPSBudWxsICE9PSAoZSA9IG51bGwgPT0gdCA/IHZvaWQgMCA6IHQudHlwZSkgJiYgdm9pZCAwICE9PSBlID8gZSA6IEF1dG9NZXJnZVNwZWVkVHlwZS5Db25zdGFudCxcbiAgICAgIG8gPSB7XG4gICAgICAgIHR5cGU6IGEsXG4gICAgICAgIGluaXRpYWxEZWxheTogbnVsbCAhPT0gKHIgPSBudWxsID09IHQgPyB2b2lkIDAgOiB0LmluaXRpYWxEZWxheSkgJiYgdm9pZCAwICE9PSByID8gciA6IDAuMzNcbiAgICAgIH07XG4gICAgaWYgKGEgPT09IEF1dG9NZXJnZVNwZWVkVHlwZS5BY2NlbGVyYXRlKSB7XG4gICAgICBvLmRlY3JlYXNlU3RlcCA9IG51bGwgIT09IChpID0gbnVsbCA9PSB0ID8gdm9pZCAwIDogdC5kZWNyZWFzZVN0ZXApICYmIHZvaWQgMCAhPT0gaSA/IGkgOiAwLjAyO1xuICAgICAgby5taW5EZWxheSA9IG51bGwgIT09IChuID0gbnVsbCA9PSB0ID8gdm9pZCAwIDogdC5taW5EZWxheSkgJiYgdm9pZCAwICE9PSBuID8gbiA6IDAuMTtcbiAgICB9XG4gICAgcmV0dXJuIG87XG4gIH1cbiAgb25TdEF1dG9NcmdCaHZfbWFpblNwZCh0LCBlKSB7XG4gICAgZSh7XG4gICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgcmV0dXJuVmFsOiB0aGlzLl9tYWlubGluZUNvbmZpZ1xuICAgIH0pO1xuICB9XG4gIG9uU3RBdXRvTXJnQmh2X3RydlNwZCh0LCBlKSB7XG4gICAgZSh7XG4gICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgcmV0dXJuVmFsOiB0aGlzLl90cmF2ZWxDb25maWdcbiAgICB9KTtcbiAgfVxufSJdfQ==