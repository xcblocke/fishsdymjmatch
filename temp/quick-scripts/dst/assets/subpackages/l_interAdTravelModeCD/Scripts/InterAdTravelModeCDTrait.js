
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_interAdTravelModeCD/Scripts/InterAdTravelModeCDTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9a351WUw25ETK9uin3+p+sV', 'InterAdTravelModeCDTrait');
// subpackages/l_interAdTravelModeCD/Scripts/InterAdTravelModeCDTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var InterAdTravelModeCDTrait = /** @class */ (function (_super) {
    __extends(InterAdTravelModeCDTrait, _super);
    function InterAdTravelModeCDTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._travelCDTime = 30000;
        _this._normalCDTime = 0;
        _this._isInitialized = false;
        _this._lastGameType = GameTypeEnums_1.MjGameType.None;
        return _this;
    }
    InterAdTravelModeCDTrait.prototype.isLocalEmpty = function (e) {
        return null == e || "" === e;
    };
    InterAdTravelModeCDTrait.prototype.onLoad = function () {
        var t;
        _super.prototype.onLoad.call(this);
        void 0 !== (null === (t = this._traitData) || void 0 === t ? void 0 : t.travelModeCDTime) && (this._travelCDTime = 1000 * this._traitData.travelModeCDTime);
    };
    InterAdTravelModeCDTrait.prototype.ensureInitialized = function () {
        if (!this._isInitialized) {
            this.localData.travelRemainingCD = this._travelCDTime;
            this.localData.normalRemainingCD = this.getNormalCDTime();
            this.localData.hallEnterTime = 0;
            this._isInitialized = true;
        }
    };
    InterAdTravelModeCDTrait.prototype.getInterAdCDTrait = function () {
        var e = mj.getClassByName("InterAdCDTrait");
        if (e) {
            var t = e.getInstance();
            if (t && true === t.eventEnabled)
                return t;
        }
        return null;
    };
    InterAdTravelModeCDTrait.prototype.getNormalCDTime = function () {
        if (this._normalCDTime > 0)
            return this._normalCDTime;
        var e = this.getInterAdCDTrait();
        if (e && e.getCDTime) {
            this._normalCDTime = e.getCDTime();
        }
        else {
            this._normalCDTime = 70000;
        }
        return this._normalCDTime;
    };
    InterAdTravelModeCDTrait.prototype.onMainGameCtrl_uiDes = function (e, t) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            this.ensureInitialized();
            var a = this.getInterAdCDTrait();
            if (a) {
                var r = Date.now(), i = a.getRemainingCD();
                if (this._lastGameType === GameTypeEnums_1.MjGameType.Travel) {
                    this.localData.travelRemainingCD = i;
                }
                else {
                    this._lastGameType !== GameTypeEnums_1.MjGameType.None && (this.localData.normalRemainingCD = i);
                }
                0 === this.localData.hallEnterTime && (this.localData.hallEnterTime = r);
                t();
            }
            else
                t();
        }
        else
            t();
    };
    InterAdTravelModeCDTrait.prototype.onHallCtl_viewDidShow = function (e, t) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            this.ensureInitialized();
            if (0 === this.localData.hallEnterTime) {
                var a = Date.now();
                this.localData.hallEnterTime = a;
            }
            t();
        }
        else
            t();
    };
    InterAdTravelModeCDTrait.prototype.isHallNoCdTimeEnabled = function () {
        var e = mj.getClassByName("HallNoCdTimeTrait");
        if (e) {
            var t = e.getInstance();
            if (t && true === t.eventEnabled)
                return true;
        }
        return false;
    };
    InterAdTravelModeCDTrait.prototype.onMainGameCtrl_vwLoad = function (e, t) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            this.ensureInitialized();
            var a = this.getInterAdCDTrait();
            if (a) {
                var r = UserModel_1.default.getInstance().getCurrentGameType();
                this._lastGameType = r;
                var i, n = this.isHallNoCdTimeEnabled(), l = Date.now();
                i = n ? 0 : this.localData.hallEnterTime > 0 ? l - this.localData.hallEnterTime : 0;
                var o = 0, c = 0;
                if (r === GameTypeEnums_1.MjGameType.Travel) {
                    o = this.localData.travelRemainingCD || 0;
                    c = this._travelCDTime;
                }
                else {
                    o = this.localData.normalRemainingCD || 0;
                    c = this.getNormalCDTime();
                }
                var p = l - (c - Math.max(0, o - i));
                a.adjustLastPlayTime(p);
                this.localData.hallEnterTime = 0;
                t();
            }
            else
                t();
        }
        else
            t();
    };
    InterAdTravelModeCDTrait.prototype.onInterAdCD_getCDTime = function (e, t) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            var a = UserModel_1.default.getInstance().getCurrentGameType();
            a === GameTypeEnums_1.MjGameType.None && (a = this._lastGameType);
            if (a === GameTypeEnums_1.MjGameType.Travel) {
                t({
                    returnVal: this._travelCDTime,
                    isBreak: true,
                    returnType: TraitManager_1.TraitCallbackReturnType.return
                });
            }
            else {
                t();
            }
        }
        else
            t();
    };
    InterAdTravelModeCDTrait.prototype.onAdMgr_interAdClose = function (e, t) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            var a = UserModel_1.default.getInstance().getCurrentGameType();
            a === GameTypeEnums_1.MjGameType.None && (a = this._lastGameType);
            if (a === GameTypeEnums_1.MjGameType.Travel)
                this.localData.travelRemainingCD = this._travelCDTime;
            else if (a !== GameTypeEnums_1.MjGameType.None) {
                var r = this.getNormalCDTime();
                this.localData.normalRemainingCD = r;
            }
            t();
        }
        else
            t();
    };
    InterAdTravelModeCDTrait.traitKey = "InterAdTravelModeCD";
    InterAdTravelModeCDTrait = __decorate([
        mj.trait,
        mj.class("InterAdTravelModeCDTrait")
    ], InterAdTravelModeCDTrait);
    return InterAdTravelModeCDTrait;
}(Trait_1.default));
exports.default = InterAdTravelModeCDTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2ludGVyQWRUcmF2ZWxNb2RlQ0QvU2NyaXB0cy9JbnRlckFkVHJhdmVsTW9kZUNEVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUMzRCw4RUFBd0Y7QUFDeEYsc0VBQWlFO0FBQ2pFLHdGQUFvRjtBQUdwRjtJQUFzRCw0Q0FBSztJQUEzRDtRQUFBLHFFQWdJQztRQS9IQyxtQkFBYSxHQUFHLEtBQUssQ0FBQztRQUN0QixtQkFBYSxHQUFHLENBQUMsQ0FBQztRQUNsQixvQkFBYyxHQUFHLEtBQUssQ0FBQztRQUN2QixtQkFBYSxHQUFHLDBCQUFVLENBQUMsSUFBSSxDQUFDOztJQTRIbEMsQ0FBQztJQTFIQywrQ0FBWSxHQUFaLFVBQWEsQ0FBQztRQUNaLE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFDRCx5Q0FBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLENBQUM7UUFDTixpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUM5SixDQUFDO0lBQ0Qsb0RBQWlCLEdBQWpCO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDeEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1lBQ3RELElBQUks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QkFBTTtnQkFDTCxDQUFDLEVBQUUsQ0FBQzthQUNMO1NBQ0Y7O1lBQU0sQ0FBQyxFQUFFLENBQUM7SUFDYixDQUFDO0lBQ0QsdURBQW9CLEdBQXBCLFVBQXFCLENBQUMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxLQUFLLDBCQUFVLENBQUMsT0FBTyxFQUFFO1lBQ3ZFLElBQUksQ0FBQyxHQUFHLG1CQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztZQUNyRCxDQUFDLEtBQUssMEJBQVUsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ2xELElBQUksQ0FBQyxLQUFLLDBCQUFVLENBQUMsTUFBTTtnQkFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7aUJBQUssSUFBSSxDQUFDLEtBQUssMEJBQVUsQ0FBQyxJQUFJLEVBQUU7Z0JBQ2pILElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztnQkFDL0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLENBQUM7YUFDdEM7WUFDRCxDQUFDLEVBQUUsQ0FBQztTQUNMOztZQUFNLENBQUMsRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQTFITSxpQ0FBUSxHQUFHLHFCQUFxQixDQUFDO0lBTHJCLHdCQUF3QjtRQUY1QyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsMEJBQTBCLENBQUM7T0FDaEIsd0JBQXdCLENBZ0k1QztJQUFELCtCQUFDO0NBaElELEFBZ0lDLENBaElxRCxlQUFLLEdBZ0kxRDtrQkFoSW9CLHdCQUF3QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgeyBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0TWFuYWdlcic7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvdXNlci9Vc2VyTW9kZWwnO1xuaW1wb3J0IHsgTWpHYW1lVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9zaW11bGF0b3IvY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIkludGVyQWRUcmF2ZWxNb2RlQ0RUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW50ZXJBZFRyYXZlbE1vZGVDRFRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBfdHJhdmVsQ0RUaW1lID0gMzAwMDA7XG4gIF9ub3JtYWxDRFRpbWUgPSAwO1xuICBfaXNJbml0aWFsaXplZCA9IGZhbHNlO1xuICBfbGFzdEdhbWVUeXBlID0gTWpHYW1lVHlwZS5Ob25lO1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIkludGVyQWRUcmF2ZWxNb2RlQ0RcIjtcbiAgaXNMb2NhbEVtcHR5KGUpIHtcbiAgICByZXR1cm4gbnVsbCA9PSBlIHx8IFwiXCIgPT09IGU7XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIHZhciB0O1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHZvaWQgMCAhPT0gKG51bGwgPT09ICh0ID0gdGhpcy5fdHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0LnRyYXZlbE1vZGVDRFRpbWUpICYmICh0aGlzLl90cmF2ZWxDRFRpbWUgPSAxMDAwICogdGhpcy5fdHJhaXREYXRhLnRyYXZlbE1vZGVDRFRpbWUpO1xuICB9XG4gIGVuc3VyZUluaXRpYWxpemVkKCkge1xuICAgIGlmICghdGhpcy5faXNJbml0aWFsaXplZCkge1xuICAgICAgdGhpcy5sb2NhbERhdGEudHJhdmVsUmVtYWluaW5nQ0QgPSB0aGlzLl90cmF2ZWxDRFRpbWU7XG4gICAgICB0aGlzLmxvY2FsRGF0YS5ub3JtYWxSZW1haW5pbmdDRCA9IHRoaXMuZ2V0Tm9ybWFsQ0RUaW1lKCk7XG4gICAgICB0aGlzLmxvY2FsRGF0YS5oYWxsRW50ZXJUaW1lID0gMDtcbiAgICAgIHRoaXMuX2lzSW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuICBnZXRJbnRlckFkQ0RUcmFpdCgpIHtcbiAgICB2YXIgZSA9IG1qLmdldENsYXNzQnlOYW1lKFwiSW50ZXJBZENEVHJhaXRcIik7XG4gICAgaWYgKGUpIHtcbiAgICAgIHZhciB0ID0gZS5nZXRJbnN0YW5jZSgpO1xuICAgICAgaWYgKHQgJiYgdHJ1ZSA9PT0gdC5ldmVudEVuYWJsZWQpIHJldHVybiB0O1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBnZXROb3JtYWxDRFRpbWUoKSB7XG4gICAgaWYgKHRoaXMuX25vcm1hbENEVGltZSA+IDApIHJldHVybiB0aGlzLl9ub3JtYWxDRFRpbWU7XG4gICAgdmFyIGUgPSB0aGlzLmdldEludGVyQWRDRFRyYWl0KCk7XG4gICAgaWYgKGUgJiYgZS5nZXRDRFRpbWUpIHtcbiAgICAgIHRoaXMuX25vcm1hbENEVGltZSA9IGUuZ2V0Q0RUaW1lKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX25vcm1hbENEVGltZSA9IDcwMDAwO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fbm9ybWFsQ0RUaW1lO1xuICB9XG4gIG9uTWFpbkdhbWVDdHJsX3VpRGVzKGUsIHQpIHtcbiAgICBpZiAoVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0Q3VycmVudEdhbWVUeXBlKCkgIT09IE1qR2FtZVR5cGUuQ2xhc3NpYykge1xuICAgICAgdGhpcy5lbnN1cmVJbml0aWFsaXplZCgpO1xuICAgICAgdmFyIGEgPSB0aGlzLmdldEludGVyQWRDRFRyYWl0KCk7XG4gICAgICBpZiAoYSkge1xuICAgICAgICB2YXIgciA9IERhdGUubm93KCksXG4gICAgICAgICAgaSA9IGEuZ2V0UmVtYWluaW5nQ0QoKTtcbiAgICAgICAgaWYgKHRoaXMuX2xhc3RHYW1lVHlwZSA9PT0gTWpHYW1lVHlwZS5UcmF2ZWwpIHtcbiAgICAgICAgICB0aGlzLmxvY2FsRGF0YS50cmF2ZWxSZW1haW5pbmdDRCA9IGk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fbGFzdEdhbWVUeXBlICE9PSBNakdhbWVUeXBlLk5vbmUgJiYgKHRoaXMubG9jYWxEYXRhLm5vcm1hbFJlbWFpbmluZ0NEID0gaSk7XG4gICAgICAgIH1cbiAgICAgICAgMCA9PT0gdGhpcy5sb2NhbERhdGEuaGFsbEVudGVyVGltZSAmJiAodGhpcy5sb2NhbERhdGEuaGFsbEVudGVyVGltZSA9IHIpO1xuICAgICAgICB0KCk7XG4gICAgICB9IGVsc2UgdCgpO1xuICAgIH0gZWxzZSB0KCk7XG4gIH1cbiAgb25IYWxsQ3RsX3ZpZXdEaWRTaG93KGUsIHQpIHtcbiAgICBpZiAoVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0Q3VycmVudEdhbWVUeXBlKCkgIT09IE1qR2FtZVR5cGUuQ2xhc3NpYykge1xuICAgICAgdGhpcy5lbnN1cmVJbml0aWFsaXplZCgpO1xuICAgICAgaWYgKDAgPT09IHRoaXMubG9jYWxEYXRhLmhhbGxFbnRlclRpbWUpIHtcbiAgICAgICAgdmFyIGEgPSBEYXRlLm5vdygpO1xuICAgICAgICB0aGlzLmxvY2FsRGF0YS5oYWxsRW50ZXJUaW1lID0gYTtcbiAgICAgIH1cbiAgICAgIHQoKTtcbiAgICB9IGVsc2UgdCgpO1xuICB9XG4gIGlzSGFsbE5vQ2RUaW1lRW5hYmxlZCgpIHtcbiAgICB2YXIgZSA9IG1qLmdldENsYXNzQnlOYW1lKFwiSGFsbE5vQ2RUaW1lVHJhaXRcIik7XG4gICAgaWYgKGUpIHtcbiAgICAgIHZhciB0ID0gZS5nZXRJbnN0YW5jZSgpO1xuICAgICAgaWYgKHQgJiYgdHJ1ZSA9PT0gdC5ldmVudEVuYWJsZWQpIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgb25NYWluR2FtZUN0cmxfdndMb2FkKGUsIHQpIHtcbiAgICBpZiAoVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0Q3VycmVudEdhbWVUeXBlKCkgIT09IE1qR2FtZVR5cGUuQ2xhc3NpYykge1xuICAgICAgdGhpcy5lbnN1cmVJbml0aWFsaXplZCgpO1xuICAgICAgdmFyIGEgPSB0aGlzLmdldEludGVyQWRDRFRyYWl0KCk7XG4gICAgICBpZiAoYSkge1xuICAgICAgICB2YXIgciA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEN1cnJlbnRHYW1lVHlwZSgpO1xuICAgICAgICB0aGlzLl9sYXN0R2FtZVR5cGUgPSByO1xuICAgICAgICB2YXIgaSxcbiAgICAgICAgICBuID0gdGhpcy5pc0hhbGxOb0NkVGltZUVuYWJsZWQoKSxcbiAgICAgICAgICBsID0gRGF0ZS5ub3coKTtcbiAgICAgICAgaSA9IG4gPyAwIDogdGhpcy5sb2NhbERhdGEuaGFsbEVudGVyVGltZSA+IDAgPyBsIC0gdGhpcy5sb2NhbERhdGEuaGFsbEVudGVyVGltZSA6IDA7XG4gICAgICAgIHZhciBvID0gMCxcbiAgICAgICAgICBjID0gMDtcbiAgICAgICAgaWYgKHIgPT09IE1qR2FtZVR5cGUuVHJhdmVsKSB7XG4gICAgICAgICAgbyA9IHRoaXMubG9jYWxEYXRhLnRyYXZlbFJlbWFpbmluZ0NEIHx8IDA7XG4gICAgICAgICAgYyA9IHRoaXMuX3RyYXZlbENEVGltZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvID0gdGhpcy5sb2NhbERhdGEubm9ybWFsUmVtYWluaW5nQ0QgfHwgMDtcbiAgICAgICAgICBjID0gdGhpcy5nZXROb3JtYWxDRFRpbWUoKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcCA9IGwgLSAoYyAtIE1hdGgubWF4KDAsIG8gLSBpKSk7XG4gICAgICAgIGEuYWRqdXN0TGFzdFBsYXlUaW1lKHApO1xuICAgICAgICB0aGlzLmxvY2FsRGF0YS5oYWxsRW50ZXJUaW1lID0gMDtcbiAgICAgICAgdCgpO1xuICAgICAgfSBlbHNlIHQoKTtcbiAgICB9IGVsc2UgdCgpO1xuICB9XG4gIG9uSW50ZXJBZENEX2dldENEVGltZShlLCB0KSB7XG4gICAgaWYgKFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEN1cnJlbnRHYW1lVHlwZSgpICE9PSBNakdhbWVUeXBlLkNsYXNzaWMpIHtcbiAgICAgIHZhciBhID0gVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0Q3VycmVudEdhbWVUeXBlKCk7XG4gICAgICBhID09PSBNakdhbWVUeXBlLk5vbmUgJiYgKGEgPSB0aGlzLl9sYXN0R2FtZVR5cGUpO1xuICAgICAgaWYgKGEgPT09IE1qR2FtZVR5cGUuVHJhdmVsKSB7XG4gICAgICAgIHQoe1xuICAgICAgICAgIHJldHVyblZhbDogdGhpcy5fdHJhdmVsQ0RUaW1lLFxuICAgICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdCgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB0KCk7XG4gIH1cbiAgb25BZE1ncl9pbnRlckFkQ2xvc2UoZSwgdCkge1xuICAgIGlmIChVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRDdXJyZW50R2FtZVR5cGUoKSAhPT0gTWpHYW1lVHlwZS5DbGFzc2ljKSB7XG4gICAgICB2YXIgYSA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEN1cnJlbnRHYW1lVHlwZSgpO1xuICAgICAgYSA9PT0gTWpHYW1lVHlwZS5Ob25lICYmIChhID0gdGhpcy5fbGFzdEdhbWVUeXBlKTtcbiAgICAgIGlmIChhID09PSBNakdhbWVUeXBlLlRyYXZlbCkgdGhpcy5sb2NhbERhdGEudHJhdmVsUmVtYWluaW5nQ0QgPSB0aGlzLl90cmF2ZWxDRFRpbWU7ZWxzZSBpZiAoYSAhPT0gTWpHYW1lVHlwZS5Ob25lKSB7XG4gICAgICAgIHZhciByID0gdGhpcy5nZXROb3JtYWxDRFRpbWUoKTtcbiAgICAgICAgdGhpcy5sb2NhbERhdGEubm9ybWFsUmVtYWluaW5nQ0QgPSByO1xuICAgICAgfVxuICAgICAgdCgpO1xuICAgIH0gZWxzZSB0KCk7XG4gIH1cbn0iXX0=