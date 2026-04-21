
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_survivalNoFC/Scripts/SurvivalNoFCAdjustTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7ae4en9JmdFvrN4+oKz5ET9', 'SurvivalNoFCAdjustTrait');
// subpackages/l_survivalNoFC/Scripts/SurvivalNoFCAdjustTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameUtils_1 = require("../../../Scripts/core/simulator/util/GameUtils");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var LoginModel_1 = require("../../../Scripts/gamePlay/login/model/LoginModel");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var l;
(function (l) {
    l[l["LESS"] = 1] = "LESS";
    l[l["LAST"] = 2] = "LAST";
    l[l["MODE_FORBID"] = 3] = "MODE_FORBID";
    l[l["LEVEL_FORBID"] = 4] = "LEVEL_FORBID";
})(l || (l = {}));
var SurvivalNoFCAdjustTrait = /** @class */ (function (_super) {
    __extends(SurvivalNoFCAdjustTrait, _super);
    function SurvivalNoFCAdjustTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._config = [];
        return _this;
    }
    SurvivalNoFCAdjustTrait.prototype.onLoad = function () {
        var e, r;
        _super.prototype.onLoad.call(this);
        this.updateLoginTime();
        this._config = null !== (r = null === (e = this._traitData) || void 0 === e ? void 0 : e.config) && void 0 !== r ? r : [];
    };
    SurvivalNoFCAdjustTrait.prototype.updateLoginTime = function () {
        var t = this.getLoginTime(), e = Date.now();
        if (!GameUtils_1.default.isSameDay(t, e)) {
            this.localData.loginTime = e;
            this.localData.lastDayLogin = this.isLastDayLogin(t, e);
        }
    };
    SurvivalNoFCAdjustTrait.prototype.isLastDayLogin = function (t, e) {
        if (t <= 0 || e <= 0)
            return false;
        var r = new Date(t), o = new Date(e);
        r.setHours(0, 0, 0, 0);
        o.setHours(0, 0, 0, 0);
        return o.getTime() - r.getTime() <= 86400000;
    };
    SurvivalNoFCAdjustTrait.prototype.getLoginTime = function () {
        this.isLocalEmpty(this.localData.loginTime) && (this.localData.loginTime = 0);
        return this.localData.loginTime;
    };
    SurvivalNoFCAdjustTrait.prototype.getLastDayLogin = function () {
        this.isLocalEmpty(this.localData.lastDayLogin) && (this.localData.lastDayLogin = false);
        return this.localData.lastDayLogin;
    };
    SurvivalNoFCAdjustTrait.prototype.isLocalEmpty = function (t) {
        return null == t || "" === t;
    };
    SurvivalNoFCAdjustTrait.prototype.onSurvNoFCTrait_canActive = function (t, e) {
        var r = this.canActive();
        e({
            returnType: TraitCallbackReturnType.jump,
            returnVal: r
        });
    };
    SurvivalNoFCAdjustTrait.prototype.getActiveDay = function () {
        return (LoginModel_1.default.getInstance().activeDay || 1) - 1;
    };
    SurvivalNoFCAdjustTrait.prototype.canActive = function () {
        var t, e, r, o, i, n = UserModel_1.default.getInstance(), c = n.getCurrentGameType(), s = this.getActiveDay(), u = this.getLastDayLogin(), y = (null === (r = n.getCurrentGameData()) || void 0 === r ? void 0 : r.getLevelId()) || 0;
        try {
            for (var v = __values(this._config), d = v.next(); !d.done; d = v.next()) {
                var m = d.value, _ = m.type, h = null !== (o = null == m ? void 0 : m.limit) && void 0 !== o ? o : 0;
                if ((null !== (i = null == m ? void 0 : m.modes) && void 0 !== i ? i : [GameTypeEnums_1.MjGameType.Normal, GameTypeEnums_1.MjGameType.DailyChallenge]).includes(c)) {
                    if (_ === l.LESS)
                        return s < h;
                    if (_ === l.LAST)
                        return !u;
                    if (_ === l.LEVEL_FORBID)
                        return y <= h;
                    if (_ === l.MODE_FORBID)
                        return false;
                }
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                d && !d.done && (e = v.return) && e.call(v);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        return true;
    };
    SurvivalNoFCAdjustTrait.traitKey = "SurvivalNoFCAdjust";
    SurvivalNoFCAdjustTrait = __decorate([
        mj.trait,
        mj.class("SurvivalNoFCAdjustTrait")
    ], SurvivalNoFCAdjustTrait);
    return SurvivalNoFCAdjustTrait;
}(Trait_1.default));
exports.default = SurvivalNoFCAdjustTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3N1cnZpdmFsTm9GQy9TY3JpcHRzL1N1cnZpdmFsTm9GQ0FkanVzdFRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0RUFBdUU7QUFDdkUsZ0VBQTJEO0FBQzNELCtFQUEwRTtBQUMxRSx3RkFBb0Y7QUFDcEYsc0VBQWlFO0FBQ2pFLElBQUssQ0FLSjtBQUxELFdBQUssQ0FBQztJQUNKLHlCQUFRLENBQUE7SUFDUix5QkFBUSxDQUFBO0lBQ1IsdUNBQWUsQ0FBQTtJQUNmLHlDQUFnQixDQUFBO0FBQ2xCLENBQUMsRUFMSSxDQUFDLEtBQUQsQ0FBQyxRQUtMO0FBR0Q7SUFBcUQsMkNBQUs7SUFBMUQ7UUFBQSxxRUFrRkM7UUFqRkMsYUFBTyxHQUFHLEVBQUUsQ0FBQzs7SUFpRmYsQ0FBQztJQS9FQyx3Q0FBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ1QsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUM1SCxDQUFDO0lBQ0QsaURBQWUsR0FBZjtRQUNFLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFDekIsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNqQixJQUFJLENB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O1lBQ1YsQ0FBQyxHQUFHO2dCQUNGLEtBQUssRUFBRSxDQUFDO2FBQ1QsQ0FBQztTQUNIO2dCQUFTO1lBQ1IsSUFBSTtnQkFDRixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzdDO29CQUFTO2dCQUNSLElBQUksQ0FBQztvQkFBRSxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUM7YUFDdEI7U0FDRjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQS9FTSxnQ0FBUSxHQUFHLG9CQUFvQixDQUFDO0lBRnBCLHVCQUF1QjtRQUYzQyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMseUJBQXlCLENBQUM7T0FDZix1QkFBdUIsQ0FrRjNDO0lBQUQsOEJBQUM7Q0FsRkQsQUFrRkMsQ0FsRm9ELGVBQUssR0FrRnpEO2tCQWxGb0IsdUJBQXVCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWVVdGlscyBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL3V0aWwvR2FtZVV0aWxzJztcbmltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgTG9naW5Nb2RlbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L2xvZ2luL21vZGVsL0xvZ2luTW9kZWwnO1xuaW1wb3J0IHsgTWpHYW1lVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9zaW11bGF0b3IvY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvdXNlci9Vc2VyTW9kZWwnO1xuZW51bSBsIHtcbiAgTEVTUyA9IDEsXG4gIExBU1QgPSAyLFxuICBNT0RFX0ZPUkJJRCA9IDMsXG4gIExFVkVMX0ZPUkJJRCA9IDQsXG59XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIlN1cnZpdmFsTm9GQ0FkanVzdFRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdXJ2aXZhbE5vRkNBZGp1c3RUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgX2NvbmZpZyA9IFtdO1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIlN1cnZpdmFsTm9GQ0FkanVzdFwiO1xuICBvbkxvYWQoKSB7XG4gICAgdmFyIGUsIHI7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy51cGRhdGVMb2dpblRpbWUoKTtcbiAgICB0aGlzLl9jb25maWcgPSBudWxsICE9PSAociA9IG51bGwgPT09IChlID0gdGhpcy5fdHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IGUgPyB2b2lkIDAgOiBlLmNvbmZpZykgJiYgdm9pZCAwICE9PSByID8gciA6IFtdO1xuICB9XG4gIHVwZGF0ZUxvZ2luVGltZSgpIHtcbiAgICB2YXIgdCA9IHRoaXMuZ2V0TG9naW5UaW1lKCksXG4gICAgICBlID0gRGF0ZS5ub3coKTtcbiAgICBpZiAoIUdhbWVVdGlscy5pc1NhbWVEYXkodCwgZSkpIHtcbiAgICAgIHRoaXMubG9jYWxEYXRhLmxvZ2luVGltZSA9IGU7XG4gICAgICB0aGlzLmxvY2FsRGF0YS5sYXN0RGF5TG9naW4gPSB0aGlzLmlzTGFzdERheUxvZ2luKHQsIGUpO1xuICAgIH1cbiAgfVxuICBpc0xhc3REYXlMb2dpbih0LCBlKSB7XG4gICAgaWYgKHQgPD0gMCB8fCBlIDw9IDApIHJldHVybiBmYWxzZTtcbiAgICB2YXIgciA9IG5ldyBEYXRlKHQpLFxuICAgICAgbyA9IG5ldyBEYXRlKGUpO1xuICAgIHIuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gICAgby5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgICByZXR1cm4gby5nZXRUaW1lKCkgLSByLmdldFRpbWUoKSA8PSA4NjQwMDAwMDtcbiAgfVxuICBnZXRMb2dpblRpbWUoKSB7XG4gICAgdGhpcy5pc0xvY2FsRW1wdHkodGhpcy5sb2NhbERhdGEubG9naW5UaW1lKSAmJiAodGhpcy5sb2NhbERhdGEubG9naW5UaW1lID0gMCk7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxEYXRhLmxvZ2luVGltZTtcbiAgfVxuICBnZXRMYXN0RGF5TG9naW4oKSB7XG4gICAgdGhpcy5pc0xvY2FsRW1wdHkodGhpcy5sb2NhbERhdGEubGFzdERheUxvZ2luKSAmJiAodGhpcy5sb2NhbERhdGEubGFzdERheUxvZ2luID0gZmFsc2UpO1xuICAgIHJldHVybiB0aGlzLmxvY2FsRGF0YS5sYXN0RGF5TG9naW47XG4gIH1cbiAgaXNMb2NhbEVtcHR5KHQpIHtcbiAgICByZXR1cm4gbnVsbCA9PSB0IHx8IFwiXCIgPT09IHQ7XG4gIH1cbiAgb25TdXJ2Tm9GQ1RyYWl0X2NhbkFjdGl2ZSh0LCBlKSB7XG4gICAgdmFyIHIgPSB0aGlzLmNhbkFjdGl2ZSgpO1xuICAgIGUoe1xuICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUuanVtcCxcbiAgICAgIHJldHVyblZhbDogclxuICAgIH0pO1xuICB9XG4gIGdldEFjdGl2ZURheSgpIHtcbiAgICByZXR1cm4gKExvZ2luTW9kZWwuZ2V0SW5zdGFuY2UoKS5hY3RpdmVEYXkgfHwgMSkgLSAxO1xuICB9XG4gIGNhbkFjdGl2ZSgpIHtcbiAgICB2YXIgdCxcbiAgICAgIGUsXG4gICAgICByLFxuICAgICAgbyxcbiAgICAgIGksXG4gICAgICBuID0gVXNlck1vZGVsLmdldEluc3RhbmNlKCksXG4gICAgICBjID0gbi5nZXRDdXJyZW50R2FtZVR5cGUoKSxcbiAgICAgIHMgPSB0aGlzLmdldEFjdGl2ZURheSgpLFxuICAgICAgdSA9IHRoaXMuZ2V0TGFzdERheUxvZ2luKCksXG4gICAgICB5ID0gKG51bGwgPT09IChyID0gbi5nZXRDdXJyZW50R2FtZURhdGEoKSkgfHwgdm9pZCAwID09PSByID8gdm9pZCAwIDogci5nZXRMZXZlbElkKCkpIHx8IDA7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIHYgPSBfX3ZhbHVlcyh0aGlzLl9jb25maWcpLCBkID0gdi5uZXh0KCk7ICFkLmRvbmU7IGQgPSB2Lm5leHQoKSkge1xuICAgICAgICB2YXIgbSA9IGQudmFsdWUsXG4gICAgICAgICAgXyA9IG0udHlwZSxcbiAgICAgICAgICBoID0gbnVsbCAhPT0gKG8gPSBudWxsID09IG0gPyB2b2lkIDAgOiBtLmxpbWl0KSAmJiB2b2lkIDAgIT09IG8gPyBvIDogMDtcbiAgICAgICAgaWYgKChudWxsICE9PSAoaSA9IG51bGwgPT0gbSA/IHZvaWQgMCA6IG0ubW9kZXMpICYmIHZvaWQgMCAhPT0gaSA/IGkgOiBbTWpHYW1lVHlwZS5Ob3JtYWwsIE1qR2FtZVR5cGUuRGFpbHlDaGFsbGVuZ2VdKS5pbmNsdWRlcyhjKSkge1xuICAgICAgICAgIGlmIChfID09PSBsLkxFU1MpIHJldHVybiBzIDwgaDtcbiAgICAgICAgICBpZiAoXyA9PT0gbC5MQVNUKSByZXR1cm4gIXU7XG4gICAgICAgICAgaWYgKF8gPT09IGwuTEVWRUxfRk9SQklEKSByZXR1cm4geSA8PSBoO1xuICAgICAgICAgIGlmIChfID09PSBsLk1PREVfRk9SQklEKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0ID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZCAmJiAhZC5kb25lICYmIChlID0gdi5yZXR1cm4pICYmIGUuY2FsbCh2KTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmICh0KSB0aHJvdyB0LmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufSJdfQ==