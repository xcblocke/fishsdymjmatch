
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_coldInterCdAndNew/Scripts/ColdInterCdAndNewTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '92efbTxhL9K1pP4hkgrVQXK', 'ColdInterCdAndNewTrait');
// subpackages/l_coldInterCdAndNew/Scripts/ColdInterCdAndNewTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var ColdInterCdAndNewTrait = /** @class */ (function (_super) {
    __extends(ColdInterCdAndNewTrait, _super);
    function ColdInterCdAndNewTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._coldStartFreeTime = 60000;
        _this._startLevel = 9;
        _this._isReadyToPlayInterAd = false;
        return _this;
    }
    ColdInterCdAndNewTrait.prototype.onLoad = function () {
        var t, r;
        _super.prototype.onLoad.call(this);
        void 0 !== (null === (t = this._traitData) || void 0 === t ? void 0 : t.coldStartFreeTime) && (this._coldStartFreeTime = 1000 * this._traitData.coldStartFreeTime);
        void 0 !== (null === (r = this._traitData) || void 0 === r ? void 0 : r.startLevel) && (this._startLevel = this._traitData.startLevel);
    };
    ColdInterCdAndNewTrait.prototype.onAdMgr_chkInterAd = function (e, t) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            var r = UserModel_1.default.getInstance(), a = r.getAppStartTime(), i = Date.now() - a, n = r.normalData.getLevelId();
            if (!this._isReadyToPlayInterAd || n != this._startLevel || this.localData.isColdInterCdAndNewPlayed) {
                this._isReadyToPlayInterAd = false;
                if (i < this._coldStartFreeTime) {
                    Math.ceil((this._coldStartFreeTime - i) / 1000);
                    t({
                        returnVal: false,
                        isBreak: true,
                        returnType: TraitManager_1.TraitCallbackReturnType.return
                    });
                }
                else
                    t();
            }
            else {
                this._isReadyToPlayInterAd = false;
                this.localData.isColdInterCdAndNewPlayed = true;
                t({
                    returnVal: true,
                    isBreak: true,
                    returnType: TraitManager_1.TraitCallbackReturnType.return
                });
            }
        }
        else
            t();
    };
    ColdInterCdAndNewTrait.prototype.onWinVw_onNextClick = function (e, t) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            if (this.isNormalGameType()) {
                this._isReadyToPlayInterAd = true;
                t();
            }
            else {
                this._isReadyToPlayInterAd = false;
                t();
            }
        }
        else
            t();
    };
    ColdInterCdAndNewTrait.prototype.onHallNmlBtn_onBtnClk = function (e, t) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            if (this.localData.isColdInterCdAndNewPlayed) {
                this._isReadyToPlayInterAd = false;
                t();
            }
            else {
                this._isReadyToPlayInterAd = true;
                t();
            }
        }
        else
            t();
    };
    ColdInterCdAndNewTrait.prototype.onTaskItemVw_goToGame = function (e, t) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            if (this.localData.isColdInterCdAndNewPlayed) {
                this._isReadyToPlayInterAd = false;
                t();
            }
            else {
                this._isReadyToPlayInterAd = true;
                t();
            }
        }
        else
            t();
    };
    ColdInterCdAndNewTrait.prototype.isNormalGameType = function () {
        return UserModel_1.default.getInstance().getCurrentGameType() === GameTypeEnums_1.MjGameType.Normal;
    };
    ColdInterCdAndNewTrait.traitKey = "ColdInterCdAndNew";
    ColdInterCdAndNewTrait = __decorate([
        mj.trait,
        mj.class("ColdInterCdAndNewTrait")
    ], ColdInterCdAndNewTrait);
    return ColdInterCdAndNewTrait;
}(Trait_1.default));
exports.default = ColdInterCdAndNewTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2NvbGRJbnRlckNkQW5kTmV3L1NjcmlwdHMvQ29sZEludGVyQ2RBbmROZXdUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0ZBQW9GO0FBQ3BGLGdFQUEyRDtBQUMzRCw4RUFBd0Y7QUFDeEYsc0VBQWlFO0FBR2pFO0lBQW9ELDBDQUFLO0lBQXpEO1FBQUEscUVBMEVDO1FBekVDLHdCQUFrQixHQUFHLEtBQUssQ0FBQztRQUMzQixpQkFBVyxHQUFHLENBQUMsQ0FBQztRQUNoQiwyQkFBcUIsR0FBRyxLQUFLLENBQUM7O0lBdUVoQyxDQUFDO0lBckVDLHVDQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDVCxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ25LLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDekksQ0FBQztJQUNELG1EQUFrQixHQUFs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QUNMO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUM7Z0JBQ2xDLENBQUMsRUFBRSxDQUFDO2FBQ0w7U0FDRjs7WUFBTSxDQUFDLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFDRCxpREFBZ0IsR0FBaEI7UUFDRSxPQUFPLG1CQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsS0FBSywwQkFBVSxDQUFDLE1BQU0sQ0FBQztJQUM1RSxDQUFDO0lBckVNLCtCQUFRLEdBQUcsbUJBQW1CLENBQUM7SUFKbkIsc0JBQXNCO1FBRjFDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQztPQUNkLHNCQUFzQixDQTBFMUM7SUFBRCw2QkFBQztDQTFFRCxBQTBFQyxDQTFFbUQsZUFBSyxHQTBFeEQ7a0JBMUVvQixzQkFBc0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNakdhbWVUeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbmltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgeyBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0TWFuYWdlcic7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvdXNlci9Vc2VyTW9kZWwnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJDb2xkSW50ZXJDZEFuZE5ld1RyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xkSW50ZXJDZEFuZE5ld1RyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBfY29sZFN0YXJ0RnJlZVRpbWUgPSA2MDAwMDtcbiAgX3N0YXJ0TGV2ZWwgPSA5O1xuICBfaXNSZWFkeVRvUGxheUludGVyQWQgPSBmYWxzZTtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJDb2xkSW50ZXJDZEFuZE5ld1wiO1xuICBvbkxvYWQoKSB7XG4gICAgdmFyIHQsIHI7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdm9pZCAwICE9PSAobnVsbCA9PT0gKHQgPSB0aGlzLl90cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQuY29sZFN0YXJ0RnJlZVRpbWUpICYmICh0aGlzLl9jb2xkU3RhcnRGcmVlVGltZSA9IDEwMDAgKiB0aGlzLl90cmFpdERhdGEuY29sZFN0YXJ0RnJlZVRpbWUpO1xuICAgIHZvaWQgMCAhPT0gKG51bGwgPT09IChyID0gdGhpcy5fdHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IHIgPyB2b2lkIDAgOiByLnN0YXJ0TGV2ZWwpICYmICh0aGlzLl9zdGFydExldmVsID0gdGhpcy5fdHJhaXREYXRhLnN0YXJ0TGV2ZWwpO1xuICB9XG4gIG9uQWRNZ3JfY2hrSW50ZXJBZChlLCB0KSB7XG4gICAgaWYgKFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEN1cnJlbnRHYW1lVHlwZSgpICE9PSBNakdhbWVUeXBlLkNsYXNzaWMpIHtcbiAgICAgIHZhciByID0gVXNlck1vZGVsLmdldEluc3RhbmNlKCksXG4gICAgICAgIGEgPSByLmdldEFwcFN0YXJ0VGltZSgpLFxuICAgICAgICBpID0gRGF0ZS5ub3coKSAtIGEsXG4gICAgICAgIG4gPSByLm5vcm1hbERhdGEuZ2V0TGV2ZWxJZCgpO1xuICAgICAgaWYgKCF0aGlzLl9pc1JlYWR5VG9QbGF5SW50ZXJBZCB8fCBuICE9IHRoaXMuX3N0YXJ0TGV2ZWwgfHwgdGhpcy5sb2NhbERhdGEuaXNDb2xkSW50ZXJDZEFuZE5ld1BsYXllZCkge1xuICAgICAgICB0aGlzLl9pc1JlYWR5VG9QbGF5SW50ZXJBZCA9IGZhbHNlO1xuICAgICAgICBpZiAoaSA8IHRoaXMuX2NvbGRTdGFydEZyZWVUaW1lKSB7XG4gICAgICAgICAgTWF0aC5jZWlsKCh0aGlzLl9jb2xkU3RhcnRGcmVlVGltZSAtIGkpIC8gMTAwMCk7XG4gICAgICAgICAgdCh7XG4gICAgICAgICAgICByZXR1cm5WYWw6IGZhbHNlLFxuICAgICAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVyblxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgdCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5faXNSZWFkeVRvUGxheUludGVyQWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sb2NhbERhdGEuaXNDb2xkSW50ZXJDZEFuZE5ld1BsYXllZCA9IHRydWU7XG4gICAgICAgIHQoe1xuICAgICAgICAgIHJldHVyblZhbDogdHJ1ZSxcbiAgICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVyblxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2UgdCgpO1xuICB9XG4gIG9uV2luVndfb25OZXh0Q2xpY2soZSwgdCkge1xuICAgIGlmIChVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRDdXJyZW50R2FtZVR5cGUoKSAhPT0gTWpHYW1lVHlwZS5DbGFzc2ljKSB7XG4gICAgICBpZiAodGhpcy5pc05vcm1hbEdhbWVUeXBlKCkpIHtcbiAgICAgICAgdGhpcy5faXNSZWFkeVRvUGxheUludGVyQWQgPSB0cnVlO1xuICAgICAgICB0KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9pc1JlYWR5VG9QbGF5SW50ZXJBZCA9IGZhbHNlO1xuICAgICAgICB0KCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHQoKTtcbiAgfVxuICBvbkhhbGxObWxCdG5fb25CdG5DbGsoZSwgdCkge1xuICAgIGlmIChVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRDdXJyZW50R2FtZVR5cGUoKSAhPT0gTWpHYW1lVHlwZS5DbGFzc2ljKSB7XG4gICAgICBpZiAodGhpcy5sb2NhbERhdGEuaXNDb2xkSW50ZXJDZEFuZE5ld1BsYXllZCkge1xuICAgICAgICB0aGlzLl9pc1JlYWR5VG9QbGF5SW50ZXJBZCA9IGZhbHNlO1xuICAgICAgICB0KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9pc1JlYWR5VG9QbGF5SW50ZXJBZCA9IHRydWU7XG4gICAgICAgIHQoKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgdCgpO1xuICB9XG4gIG9uVGFza0l0ZW1Wd19nb1RvR2FtZShlLCB0KSB7XG4gICAgaWYgKFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEN1cnJlbnRHYW1lVHlwZSgpICE9PSBNakdhbWVUeXBlLkNsYXNzaWMpIHtcbiAgICAgIGlmICh0aGlzLmxvY2FsRGF0YS5pc0NvbGRJbnRlckNkQW5kTmV3UGxheWVkKSB7XG4gICAgICAgIHRoaXMuX2lzUmVhZHlUb1BsYXlJbnRlckFkID0gZmFsc2U7XG4gICAgICAgIHQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2lzUmVhZHlUb1BsYXlJbnRlckFkID0gdHJ1ZTtcbiAgICAgICAgdCgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB0KCk7XG4gIH1cbiAgaXNOb3JtYWxHYW1lVHlwZSgpIHtcbiAgICByZXR1cm4gVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0Q3VycmVudEdhbWVUeXBlKCkgPT09IE1qR2FtZVR5cGUuTm9ybWFsO1xuICB9XG59Il19