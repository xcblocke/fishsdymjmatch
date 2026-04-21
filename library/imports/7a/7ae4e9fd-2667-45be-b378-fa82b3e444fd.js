"use strict";
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