
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_tile2NengliPaths/Scripts/Tile2NengliParams.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '90a1dxBDvZNz4VQ75prAMjB', 'Tile2NengliParams');
// subpackages/l_tile2NengliPaths/Scripts/Tile2NengliParams.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ExtractNormalLevels_1 = require("../../../Scripts/core/extractQuestion/ExtractNormalLevels");
var Tile2CapabilityExtractRegistry_1 = require("../../../Scripts/Tile2CapabilityExtractRegistry");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var y = {
    cardNum: 4,
    winLose: 3,
    weight: 2
};
var Tile2NengliParams = /** @class */ (function (_super) {
    __extends(Tile2NengliParams, _super);
    function Tile2NengliParams() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._rules = [];
        _this._cachedLevelId = 0;
        _this._m = 5;
        _this._initDu = 80;
        _this._patchFlags = [false, false, false, false];
        _this._fallbackDirWgt = [1, 11, 33, 55];
        return _this;
    }
    Tile2NengliParams.prototype.onLoad = function () {
        var e, r, i, a, n, o, l;
        _super.prototype.onLoad.call(this);
        this._rules = this._traitData.rules || [];
        this._m = null !== (e = this._traitData.m) && void 0 !== e ? e : 5;
        this._initDu = null !== (r = this._traitData.initDu) && void 0 !== r ? r : 80;
        this._patchFlags = [null !== (i = this._traitData.patch1) && void 0 !== i && i, null !== (a = this._traitData.patch2) && void 0 !== a && a, null !== (n = this._traitData.patch3) && void 0 !== n && n, null !== (o = this._traitData.patch4) && void 0 !== o && o];
        this._fallbackDirWgt = null !== (l = this._traitData.fallbackDirWgt) && void 0 !== l ? l : [1, 11, 33, 55];
    };
    Tile2NengliParams.prototype.initEvent = function () {
        var t, e = null !== (t = this._traitData.priority) && void 0 !== t ? t : 1000, r = [{
                event: "ExtNormLv_getDimOrder",
                type: 0,
                priority: e
            }, {
                event: "ExtNormLv_getLvPriority",
                type: 0,
                priority: e
            }, {
                event: "ExtNormLv_getTileDim",
                type: 0,
                priority: e
            }, {
                event: "ExtNormLv_getDeathLv",
                type: 0,
                priority: e
            }, {
                event: "ExtNormLv_getAllDirWgt",
                type: 0,
                priority: e
            }, {
                event: "ExtNormLv_getM",
                type: 0,
                priority: e
            }, {
                event: "ExtNormLv_getInitDu",
                type: 0,
                priority: e
            }, {
                event: "ExtNormLv_isOpenPatch1",
                type: 0,
                priority: e
            }, {
                event: "ExtNormLv_isOpenPatch2",
                type: 0,
                priority: e
            }, {
                event: "ExtNormLv_isOpenPatch3",
                type: 0,
                priority: e
            }, {
                event: "ExtNormLv_isOpenPatch4",
                type: 0,
                priority: e
            }];
        this._traitData.events = r;
        this.registerEvent(r);
    };
    Tile2NengliParams.prototype.isTile2Mode = function () {
        return UserModel_1.default.getInstance().getCurrentGameType() === GameTypeEnums_1.MjGameType.Tile2Normal && Tile2CapabilityExtractRegistry_1.default.isEnabled();
    };
    Tile2NengliParams.prototype.getCurrentLevelId = function () {
        try {
            var t = UserModel_1.default.getInstance().getGameDataByGameType(GameTypeEnums_1.MjGameType.Tile2Normal);
            if (t && t.getLevelGenIndex)
                return Math.max(1, t.getLevelGenIndex());
        }
        catch (t) { }
        return this._cachedLevelId || 1;
    };
    Tile2NengliParams.prototype.findRule = function (t) {
        var e, r, i;
        try {
            for (var a = __values(this._rules), n = a.next(); !n.done; n = a.next()) {
                var l = n.value;
                switch (l.match) {
                    case "Range":
                        if (t >= l.from && t <= (null !== (i = l.to) && void 0 !== i ? i : l.from))
                            return l;
                        break;
                    case "Greater":
                        if (t > l.from)
                            return l;
                        break;
                    case "Less":
                        if (t < l.from)
                            return l;
                        break;
                    case "Equal":
                        if (t === l.from)
                            return l;
                }
            }
        }
        catch (t) {
            e = {
                error: t
            };
        }
        finally {
            try {
                n && !n.done && (r = a.return) && r.call(a);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return null;
    };
    Tile2NengliParams.prototype.weightedRandom = function (t, e) {
        var r, i, a = 0;
        try {
            for (var n = __values(e), l = n.next(); !l.done; l = n.next())
                a += l.value;
        }
        catch (t) {
            r = {
                error: t
            };
        }
        finally {
            try {
                l && !l.done && (i = n.return) && i.call(n);
            }
            finally {
                if (r)
                    throw r.error;
            }
        }
        if (a <= 0)
            return t[0] || 1;
        for (var s = Math.random() * a, u = 0, c = 0; c < e.length; c++)
            if (s < (u += e[c]))
                return t[c];
        return t[t.length - 1];
    };
    Tile2NengliParams.prototype.dimToStr = function (t) {
        return t < 10 ? "0" + t : "" + t;
    };
    Tile2NengliParams.prototype.getAvailableDimValues = function (t) {
        var e, r;
        try {
            var i = ExtractNormalLevels_1.default.getInstance().getAllNamesData();
            if (!i || 0 === i.length)
                return [];
            var a = ExtractNormalLevels_1.ExtractDimension.getDimensionOrder().indexOf(y[t]);
            if (a < 0)
                return [];
            var n = new Set();
            try {
                for (var l = __values(i), s = l.next(); !s.done; s = l.next()) {
                    var c = s.value.split("_");
                    if (a < c.length) {
                        var p = parseInt(c[a], 10);
                        !isNaN(p) && p > 0 && n.add(p);
                    }
                }
            }
            catch (t) {
                e = {
                    error: t
                };
            }
            finally {
                try {
                    s && !s.done && (r = l.return) && r.call(l);
                }
                finally {
                    if (e)
                        throw e.error;
                }
            }
            return Array.from(n).sort(function (t, e) {
                return t - e;
            });
        }
        catch (t) {
            return [];
        }
    };
    Tile2NengliParams.prototype.resolveDim = function (t, e) {
        var r;
        if ("In" === t.op)
            return this.weightedRandom(t.vals, t.wts);
        var i, a = this.getAvailableDimValues(e);
        switch (t.op) {
            case "Greater":
                i = a.filter(function (e) {
                    var r;
                    return e > (null !== (r = t.val) && void 0 !== r ? r : 0);
                });
                break;
            case "Less":
                i = a.filter(function (e) {
                    var r;
                    return e < (null !== (r = t.val) && void 0 !== r ? r : Infinity);
                });
                break;
            case "Equal":
                i = a.filter(function (e) {
                    var r;
                    return e === (null !== (r = t.val) && void 0 !== r ? r : 1);
                });
                break;
            default:
                i = [];
        }
        return 0 === i.length ? null !== (r = t.val) && void 0 !== r ? r : 1 : i[Math.floor(Math.random() * i.length)];
    };
    Tile2NengliParams.prototype.dimLogStr = function (t) {
        return "In" === t.op ? "vals=[" + t.vals + "] wts=[" + t.wts + "]" : "val=" + t.val;
    };
    Tile2NengliParams.prototype.onExtNormLv_getDimOrder = function (t, e) {
        if (this.isTile2Mode()) {
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: [1, 4, 3, 2]
            });
        }
        else
            e();
    };
    Tile2NengliParams.prototype.onExtNormLv_getLvPriority = function (t, e) {
        if (this.isTile2Mode()) {
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: [3, 2, 1, 4]
            });
        }
        else
            e();
    };
    Tile2NengliParams.prototype.onExtNormLv_getTileDim = function (t, e) {
        var r;
        if (this.isTile2Mode()) {
            var i = (null === (r = t.args) || void 0 === r ? void 0 : r[0]) || this.getCurrentLevelId();
            this._cachedLevelId = i;
            var a = this.findRule(i);
            if (a && a.cardNum) {
                var n = a.cardNum, o = this.resolveDim(n, "cardNum"), l = this.dimToStr(o);
                e({
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    isBreak: true,
                    returnVal: l
                });
            }
            else
                e();
        }
        else
            e();
    };
    Tile2NengliParams.prototype.onExtNormLv_getDeathLv = function (t, e) {
        var r;
        if (this.isTile2Mode()) {
            var i = (null === (r = t.args) || void 0 === r ? void 0 : r[1]) || this._cachedLevelId || this.getCurrentLevelId(), a = this.findRule(i);
            if (a && a.winLose) {
                var n = a.winLose, o = this.resolveDim(n, "winLose"), l = this.dimToStr(o);
                e({
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    isBreak: true,
                    returnVal: l
                });
            }
            else
                e();
        }
        else
            e();
    };
    Tile2NengliParams.prototype.onExtNormLv_getAllDirWgt = function (t, e) {
        var r, i;
        if (this.isTile2Mode()) {
            var a = this._cachedLevelId || this.getCurrentLevelId(), n = this.findRule(a);
            if (n && n.weight) {
                var l, u = n.weight;
                if ("In" === u.op) {
                    var c = Math.max.apply(Math, __spreadArrays(u.vals, [4]));
                    l = new Array(c).fill(0);
                    for (var p = 0; p < u.vals.length; p++) {
                        var f = u.vals[p] - 1;
                        f >= 0 && f < l.length && (l[f] = u.wts[p] || 0);
                    }
                }
                else {
                    var h = this.getAvailableDimValues("weight"), y = void 0;
                    switch (u.op) {
                        case "Greater":
                            y = h.filter(function (t) {
                                var e;
                                return t > (null !== (e = u.val) && void 0 !== e ? e : 0);
                            });
                            break;
                        case "Less":
                            y = h.filter(function (t) {
                                var e;
                                return t < (null !== (e = u.val) && void 0 !== e ? e : Infinity);
                            });
                            break;
                        case "Equal":
                            y = h.filter(function (t) {
                                var e;
                                return t === (null !== (e = u.val) && void 0 !== e ? e : 1);
                            });
                            break;
                        default:
                            y = [];
                    }
                    c = y.length > 0 ? Math.max.apply(Math, __spreadArrays(y, [4])) : 4;
                    l = new Array(c).fill(0);
                    try {
                        for (var d = __values(y), m = d.next(); !m.done; m = d.next()) {
                            var _ = m.value;
                            _ - 1 >= 0 && _ - 1 < l.length && (l[_ - 1] = 1);
                        }
                    }
                    catch (t) {
                        r = {
                            error: t
                        };
                    }
                    finally {
                        try {
                            m && !m.done && (i = d.return) && i.call(d);
                        }
                        finally {
                            if (r)
                                throw r.error;
                        }
                    }
                    y.length;
                }
                var T = [l, l, l, l];
                e({
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    isBreak: true,
                    returnVal: T
                });
            }
            else {
                var g = this._fallbackDirWgt, b = [g, g, g, g];
                e({
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    isBreak: true,
                    returnVal: b
                });
            }
        }
        else
            e();
    };
    Tile2NengliParams.prototype.onExtNormLv_getM = function (t, e) {
        if (this.isTile2Mode()) {
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: this._m
            });
        }
        else {
            e();
        }
    };
    Tile2NengliParams.prototype.onExtNormLv_getInitDu = function (t, e) {
        if (this.isTile2Mode()) {
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: this._initDu
            });
        }
        else {
            e();
        }
    };
    Tile2NengliParams.prototype.onExtNormLv_isOpenPatch1 = function (t, e) {
        if (this.isTile2Mode()) {
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: this._patchFlags[0]
            });
        }
        else {
            e();
        }
    };
    Tile2NengliParams.prototype.onExtNormLv_isOpenPatch2 = function (t, e) {
        if (this.isTile2Mode()) {
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: this._patchFlags[1]
            });
        }
        else {
            e();
        }
    };
    Tile2NengliParams.prototype.onExtNormLv_isOpenPatch3 = function (t, e) {
        if (this.isTile2Mode()) {
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: this._patchFlags[2]
            });
        }
        else {
            e();
        }
    };
    Tile2NengliParams.prototype.onExtNormLv_isOpenPatch4 = function (t, e) {
        if (this.isTile2Mode()) {
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: this._patchFlags[3]
            });
        }
        else {
            e();
        }
    };
    Tile2NengliParams.traitKey = "Tile2NengliParams";
    Tile2NengliParams = __decorate([
        mj.trait,
        mj.class("Tile2NengliParams")
    ], Tile2NengliParams);
    return Tile2NengliParams;
}(Trait_1.default));
exports.default = Tile2NengliParams;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3RpbGUyTmVuZ2xpUGF0aHMvU2NyaXB0cy9UaWxlMk5lbmdsaVBhcmFtcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUdBQWtIO0FBQ2xILGtHQUE2RjtBQUM3Rix3RkFBb0Y7QUFDcEYsZ0VBQTJEO0FBQzNELHNFQUFpRTtBQUNqRSw4RUFBd0Y7QUFDeEYsSUFBSSxDQUFDLEdBQUc7SUFDTixPQUFPLEVBQUUsQ0FBQztJQUNWLE9BQU8sRUFBRSxDQUFDO0lBQ1YsTUFBTSxFQUFFLENBQUM7Q0FDVixDQUFDO0FBR0Y7SUFBK0MscUNBQUs7SUFBcEQ7UUFBQSxxRUE0WUM7UUEzWUMsWUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNaLG9CQUFjLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLFFBQUUsR0FBRyxDQUFDLENBQUM7UUFDUCxhQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2IsaUJBQVcsR0FBRyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzNDLHFCQUFlLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQzs7SUFzWXBDLENBQUM7SUFwWUMsa0NBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3hCLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUM7UUFDMUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUM5RSxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3BRLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDN0csQ0FBQztJQUNELHFDQUFTLEdBQVQ7UUFDRSxJQUFJLENBQUMsRUFDSCxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFV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RUFBRSxFQUFFO1lBQ3RCLENBQUMsQ0FBQztnQkFDQSxVQUFVLEVBQUUsc0NBQXVCLENBQUMsTUFBTTtnQkFDMUMsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsU0FBUyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO2FBQy9CLENBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxDQUFDLEVBQUUsQ0FBQztTQUNMO0lBQ0gsQ0FBQztJQUNELG9EQUF3QixHQUF4QixVQUF5QixDQUFDLEVBQUUsQ0FBQztRQUMzQixJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRTtZQUN0QixDQUFDLENBQUM7Z0JBQ0EsVUFBVSxFQUFFLHNDQUF1QixDQUFDLE1BQU07Z0JBQzFDLE9BQU8sRUFBRSxJQUFJO2dCQUNiLFNBQVMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQzthQUMvQixDQUFDLENBQUM7U0FDSjthQUFNO1lBQ0wsQ0FBQyxFQUFFLENBQUM7U0FDTDtJQUNILENBQUM7SUFwWU0sMEJBQVEsR0FBRyxtQkFBbUIsQ0FBQztJQVBuQixpQkFBaUI7UUFGckMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDO09BQ1QsaUJBQWlCLENBNFlyQztJQUFELHdCQUFDO0NBNVlELEFBNFlDLENBNVk4QyxlQUFLLEdBNFluRDtrQkE1WW9CLGlCQUFpQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFeHRyYWN0Tm9ybWFsTGV2ZWxzLCB7IEV4dHJhY3REaW1lbnNpb24gfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvZXh0cmFjdFF1ZXN0aW9uL0V4dHJhY3ROb3JtYWxMZXZlbHMnO1xuaW1wb3J0IFRpbGUyQ2FwYWJpbGl0eUV4dHJhY3RSZWdpc3RyeSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL1RpbGUyQ2FwYWJpbGl0eUV4dHJhY3RSZWdpc3RyeSc7XG5pbXBvcnQgeyBNakdhbWVUeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbmltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvdXNlci9Vc2VyTW9kZWwnO1xuaW1wb3J0IHsgVHJhaXRDYWxsYmFja1JldHVyblR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdE1hbmFnZXInO1xudmFyIHkgPSB7XG4gIGNhcmROdW06IDQsXG4gIHdpbkxvc2U6IDMsXG4gIHdlaWdodDogMlxufTtcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiVGlsZTJOZW5nbGlQYXJhbXNcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbGUyTmVuZ2xpUGFyYW1zIGV4dGVuZHMgVHJhaXQge1xuICBfcnVsZXMgPSBbXTtcbiAgX2NhY2hlZExldmVsSWQgPSAwO1xuICBfbSA9IDU7XG4gIF9pbml0RHUgPSA4MDtcbiAgX3BhdGNoRmxhZ3MgPSBbZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2VdO1xuICBfZmFsbGJhY2tEaXJXZ3QgPSBbMSwgMTEsIDMzLCA1NV07XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiVGlsZTJOZW5nbGlQYXJhbXNcIjtcbiAgb25Mb2FkKCkge1xuICAgIHZhciBlLCByLCBpLCBhLCBuLCBvLCBsO1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuX3J1bGVzID0gdGhpcy5fdHJhaXREYXRhLnJ1bGVzIHx8IFtdO1xuICAgIHRoaXMuX20gPSBudWxsICE9PSAoZSA9IHRoaXMuX3RyYWl0RGF0YS5tKSAmJiB2b2lkIDAgIT09IGUgPyBlIDogNTtcbiAgICB0aGlzLl9pbml0RHUgPSBudWxsICE9PSAociA9IHRoaXMuX3RyYWl0RGF0YS5pbml0RHUpICYmIHZvaWQgMCAhPT0gciA/IHIgOiA4MDtcbiAgICB0aGlzLl9wYXRjaEZsYWdzID0gW251bGwgIT09IChpID0gdGhpcy5fdHJhaXREYXRhLnBhdGNoMSkgJiYgdm9pZCAwICE9PSBpICYmIGksIG51bGwgIT09IChhID0gdGhpcy5fdHJhaXREYXRhLnBhdGNoMikgJiYgdm9pZCAwICE9PSBhICYmIGEsIG51bGwgIT09IChuID0gdGhpcy5fdHJhaXREYXRhLnBhdGNoMykgJiYgdm9pZCAwICE9PSBuICYmIG4sIG51bGwgIT09IChvID0gdGhpcy5fdHJhaXREYXRhLnBhdGNoNCkgJiYgdm9pZCAwICE9PSBvICYmIG9dO1xuICAgIHRoaXMuX2ZhbGxiYWNrRGlyV2d0ID0gbnVsbCAhPT0gKGwgPSB0aGlzLl90cmFpdERhdGEuZmFsbGJhY2tEaXJXZ3QpICYmIHZvaWQgMCAhPT0gbCA/IGwgOiBbMSwgMTEsIDMzLCA1NV07XG4gIH1cbiAgaW5pdEV2ZW50KCkge1xuICAgIHZhciB0LFxuICAgICAgZSA9IG51bGwgIT09ICh0ID0gdGhpcy5fdHJhaXREYXRhLnByaW9yaXR5KSAmJiB2b2lkIDAgIT09IHQgPyB0IDogMTAwMCxcbiAgICAgIHIgPSBbe1xuICAgICAgICBldmVudDogXCJFeHROb3JtTHZfZ2V0RGltT3JkZXJcIixcbiAgICAgICAgdHlwZTogMCxcbiAgICAgICAgcHJpb3JpdHk6IGVcbiAgICAgIH0sIHtcbiAgICAgICAgZXZlbnQ6IFwiRXh0Tm9ybUx2X2dldEx2UHJpb3JpdHlcIixcbiAgICAgICAgdHlwZTogMCxcbiAgICAgICAgcHJpb3JpdHk6IGVcbiAgICAgIH0sIHtcbiAgICAgICAgZXZlbnQ6IFwiRXh0Tm9ybUx2X2dldFRpbGVEaW1cIixcbiAgICAgICAgdHlwZTogMCxcbiAgICAgICAgcHJpb3JpdHk6IGVcbiAgICAgIH0sIHtcbiAgICAgICAgZXZlbnQ6IFwiRXh0Tm9ybUx2X2dldERlYXRoTHZcIixcbiAgICAgICAgdHlwZTogMCxcbiAgICAgICAgcHJpb3JpdHk6IGVcbiAgICAgIH0sIHtcbiAgICAgICAgZXZlbnQ6IFwiRXh0Tm9ybUx2X2dldEFsbERpcldndFwiLFxuICAgICAgICB0eXBlOiAwLFxuICAgICAgICBwcmlvcml0eTogZVxuICAgICAgfSwge1xuICAgICAgICBldmVudDogXCJFeHROb3JtTHZfZ2V0TVwiLFxuICAgICAgICB0eXBlOiAwLFxuICAgICAgICBwcmlvcml0eTogZVxuICAgICAgfSwge1xuICAgICAgICBldmVudDogXCJFeHROb3JtTHZfZ2V0SW5pdER1XCIsXG4gICAgICAgIHR5cGU6IDAsXG4gICAgICAgIHByaW9yaXR5OiBlXG4gICAgICB9LCB7XG4gICAgICAgIGV2ZW50OiBcIkV4dE5vcm1Mdl9pc09wZW5QYXRjaDFcIixcbiAgICAgICAgdHlwZTogMCxcbiAgICAgICAgcHJpb3JpdHk6IGVcbiAgICAgIH0sIHtcbiAgICAgICAgZXZlbnQ6IFwiRXh0Tm9ybUx2X2lzT3BlblBhdGNoMlwiLFxuICAgICAgICB0eXBlOiAwLFxuICAgICAgICBwcmlvcml0eTogZVxuICAgICAgfSwge1xuICAgICAgICBldmVudDogXCJFeHROb3JtTHZfaXNPcGVuUGF0Y2gzXCIsXG4gICAgICAgIHR5cGU6IDAsXG4gICAgICAgIHByaW9yaXR5OiBlXG4gICAgICB9LCB7XG4gICAgICAgIGV2ZW50OiBcIkV4dE5vcm1Mdl9pc09wZW5QYXRjaDRcIixcbiAgICAgICAgdHlwZTogMCxcbiAgICAgICAgcHJpb3JpdHk6IGVcbiAgICAgIH1dO1xuICAgIHRoaXMuX3RyYWl0RGF0YS5ldmVudHMgPSByO1xuICAgIHRoaXMucmVnaXN0ZXJFdmVudChyKTtcbiAgfVxuICBpc1RpbGUyTW9kZSgpIHtcbiAgICByZXR1cm4gVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0Q3VycmVudEdhbWVUeXBlKCkgPT09IE1qR2FtZVR5cGUuVGlsZTJOb3JtYWwgJiYgVGlsZTJDYXBhYmlsaXR5RXh0cmFjdFJlZ2lzdHJ5LmlzRW5hYmxlZCgpO1xuICB9XG4gIGdldEN1cnJlbnRMZXZlbElkKCkge1xuICAgIHRyeSB7XG4gICAgICB2YXIgdCA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEdhbWVEYXRhQnlHYW1lVHlwZShNakdhbWVUeXBlLlRpbGUyTm9ybWFsKTtcbiAgICAgIGlmICh0ICYmIHQuZ2V0TGV2ZWxHZW5JbmRleCkgcmV0dXJuIE1hdGgubWF4KDEsIHQuZ2V0TGV2ZWxHZW5JbmRleCgpKTtcbiAgICB9IGNhdGNoICh0KSB7fVxuICAgIHJldHVybiB0aGlzLl9jYWNoZWRMZXZlbElkIHx8IDE7XG4gIH1cbiAgZmluZFJ1bGUodCkge1xuICAgIHZhciBlLCByLCBpO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBhID0gX192YWx1ZXModGhpcy5fcnVsZXMpLCBuID0gYS5uZXh0KCk7ICFuLmRvbmU7IG4gPSBhLm5leHQoKSkge1xuICAgICAgICB2YXIgbCA9IG4udmFsdWU7XG4gICAgICAgIHN3aXRjaCAobC5tYXRjaCkge1xuICAgICAgICAgIGNhc2UgXCJSYW5nZVwiOlxuICAgICAgICAgICAgaWYgKHQgPj0gbC5mcm9tICYmIHQgPD0gKG51bGwgIT09IChpID0gbC50bykgJiYgdm9pZCAwICE9PSBpID8gaSA6IGwuZnJvbSkpIHJldHVybiBsO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcIkdyZWF0ZXJcIjpcbiAgICAgICAgICAgIGlmICh0ID4gbC5mcm9tKSByZXR1cm4gbDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJMZXNzXCI6XG4gICAgICAgICAgICBpZiAodCA8IGwuZnJvbSkgcmV0dXJuIGw7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwiRXF1YWxcIjpcbiAgICAgICAgICAgIGlmICh0ID09PSBsLmZyb20pIHJldHVybiBsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAodCkge1xuICAgICAgZSA9IHtcbiAgICAgICAgZXJyb3I6IHRcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIG4gJiYgIW4uZG9uZSAmJiAociA9IGEucmV0dXJuKSAmJiByLmNhbGwoYSk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoZSkgdGhyb3cgZS5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgd2VpZ2h0ZWRSYW5kb20odCwgZSkge1xuICAgIHZhciByLFxuICAgICAgaSxcbiAgICAgIGEgPSAwO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBuID0gX192YWx1ZXMoZSksIGwgPSBuLm5leHQoKTsgIWwuZG9uZTsgbCA9IG4ubmV4dCgpKSBhICs9IGwudmFsdWU7XG4gICAgfSBjYXRjaCAodCkge1xuICAgICAgciA9IHtcbiAgICAgICAgZXJyb3I6IHRcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGwgJiYgIWwuZG9uZSAmJiAoaSA9IG4ucmV0dXJuKSAmJiBpLmNhbGwobik7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAocikgdGhyb3cgci5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGEgPD0gMCkgcmV0dXJuIHRbMF0gfHwgMTtcbiAgICBmb3IgKHZhciBzID0gTWF0aC5yYW5kb20oKSAqIGEsIHUgPSAwLCBjID0gMDsgYyA8IGUubGVuZ3RoOyBjKyspIGlmIChzIDwgKHUgKz0gZVtjXSkpIHJldHVybiB0W2NdO1xuICAgIHJldHVybiB0W3QubGVuZ3RoIC0gMV07XG4gIH1cbiAgZGltVG9TdHIodCkge1xuICAgIHJldHVybiB0IDwgMTAgPyBcIjBcIiArIHQgOiBcIlwiICsgdDtcbiAgfVxuICBnZXRBdmFpbGFibGVEaW1WYWx1ZXModCkge1xuICAgIHZhciBlLCByO1xuICAgIHRyeSB7XG4gICAgICB2YXIgaSA9IEV4dHJhY3ROb3JtYWxMZXZlbHMuZ2V0SW5zdGFuY2UoKS5nZXRBbGxOYW1lc0RhdGEoKTtcbiAgICAgIGlmICghaSB8fCAwID09PSBpLmxlbmd0aCkgcmV0dXJuIFtdO1xuICAgICAgdmFyIGEgPSBFeHRyYWN0RGltZW5zaW9uLmdldERpbWVuc2lvbk9yZGVyKCkuaW5kZXhPZih5W3RdKTtcbiAgICAgIGlmIChhIDwgMCkgcmV0dXJuIFtdO1xuICAgICAgdmFyIG4gPSBuZXcgU2V0KCk7XG4gICAgICB0cnkge1xuICAgICAgICBmb3IgKHZhciBsID0gX192YWx1ZXMoaSksIHMgPSBsLm5leHQoKTsgIXMuZG9uZTsgcyA9IGwubmV4dCgpKSB7XG4gICAgICAgICAgdmFyIGMgPSBzLnZhbHVlLnNwbGl0KFwiX1wiKTtcbiAgICAgICAgICBpZiAoYSA8IGMubGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIgcCA9IHBhcnNlSW50KGNbYV0sIDEwKTtcbiAgICAgICAgICAgICFpc05hTihwKSAmJiBwID4gMCAmJiBuLmFkZChwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgICAgZSA9IHtcbiAgICAgICAgICBlcnJvcjogdFxuICAgICAgICB9O1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBzICYmICFzLmRvbmUgJiYgKHIgPSBsLnJldHVybikgJiYgci5jYWxsKGwpO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGlmIChlKSB0aHJvdyBlLmVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gQXJyYXkuZnJvbShuKS5zb3J0KGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICAgIHJldHVybiB0IC0gZTtcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gIH1cbiAgcmVzb2x2ZURpbSh0LCBlKSB7XG4gICAgdmFyIHI7XG4gICAgaWYgKFwiSW5cIiA9PT0gdC5vcCkgcmV0dXJuIHRoaXMud2VpZ2h0ZWRSYW5kb20odC52YWxzLCB0Lnd0cyk7XG4gICAgdmFyIGksXG4gICAgICBhID0gdGhpcy5nZXRBdmFpbGFibGVEaW1WYWx1ZXMoZSk7XG4gICAgc3dpdGNoICh0Lm9wKSB7XG4gICAgICBjYXNlIFwiR3JlYXRlclwiOlxuICAgICAgICBpID0gYS5maWx0ZXIoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICB2YXIgcjtcbiAgICAgICAgICByZXR1cm4gZSA+IChudWxsICE9PSAociA9IHQudmFsKSAmJiB2b2lkIDAgIT09IHIgPyByIDogMCk7XG4gICAgICAgIH0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJMZXNzXCI6XG4gICAgICAgIGkgPSBhLmZpbHRlcihmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIHZhciByO1xuICAgICAgICAgIHJldHVybiBlIDwgKG51bGwgIT09IChyID0gdC52YWwpICYmIHZvaWQgMCAhPT0gciA/IHIgOiBJbmZpbml0eSk7XG4gICAgICAgIH0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJFcXVhbFwiOlxuICAgICAgICBpID0gYS5maWx0ZXIoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICB2YXIgcjtcbiAgICAgICAgICByZXR1cm4gZSA9PT0gKG51bGwgIT09IChyID0gdC52YWwpICYmIHZvaWQgMCAhPT0gciA/IHIgOiAxKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaSA9IFtdO1xuICAgIH1cbiAgICByZXR1cm4gMCA9PT0gaS5sZW5ndGggPyBudWxsICE9PSAociA9IHQudmFsKSAmJiB2b2lkIDAgIT09IHIgPyByIDogMSA6IGlbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogaS5sZW5ndGgpXTtcbiAgfVxuICBkaW1Mb2dTdHIodCkge1xuICAgIHJldHVybiBcIkluXCIgPT09IHQub3AgPyBcInZhbHM9W1wiICsgdC52YWxzICsgXCJdIHd0cz1bXCIgKyB0Lnd0cyArIFwiXVwiIDogXCJ2YWw9XCIgKyB0LnZhbDtcbiAgfVxuICBvbkV4dE5vcm1Mdl9nZXREaW1PcmRlcih0LCBlKSB7XG4gICAgaWYgKHRoaXMuaXNUaWxlMk1vZGUoKSkge1xuICAgICAgZSh7XG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgcmV0dXJuVmFsOiBbMSwgNCwgMywgMl1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSBlKCk7XG4gIH1cbiAgb25FeHROb3JtTHZfZ2V0THZQcmlvcml0eSh0LCBlKSB7XG4gICAgaWYgKHRoaXMuaXNUaWxlMk1vZGUoKSkge1xuICAgICAgZSh7XG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgcmV0dXJuVmFsOiBbMywgMiwgMSwgNF1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSBlKCk7XG4gIH1cbiAgb25FeHROb3JtTHZfZ2V0VGlsZURpbSh0LCBlKSB7XG4gICAgdmFyIHI7XG4gICAgaWYgKHRoaXMuaXNUaWxlMk1vZGUoKSkge1xuICAgICAgdmFyIGkgPSAobnVsbCA9PT0gKHIgPSB0LmFyZ3MpIHx8IHZvaWQgMCA9PT0gciA/IHZvaWQgMCA6IHJbMF0pIHx8IHRoaXMuZ2V0Q3VycmVudExldmVsSWQoKTtcbiAgICAgIHRoaXMuX2NhY2hlZExldmVsSWQgPSBpO1xuICAgICAgdmFyIGEgPSB0aGlzLmZpbmRSdWxlKGkpO1xuICAgICAgaWYgKGEgJiYgYS5jYXJkTnVtKSB7XG4gICAgICAgIHZhciBuID0gYS5jYXJkTnVtLFxuICAgICAgICAgIG8gPSB0aGlzLnJlc29sdmVEaW0obiwgXCJjYXJkTnVtXCIpLFxuICAgICAgICAgIGwgPSB0aGlzLmRpbVRvU3RyKG8pO1xuICAgICAgICBlKHtcbiAgICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgICByZXR1cm5WYWw6IGxcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgZSgpO1xuICAgIH0gZWxzZSBlKCk7XG4gIH1cbiAgb25FeHROb3JtTHZfZ2V0RGVhdGhMdih0LCBlKSB7XG4gICAgdmFyIHI7XG4gICAgaWYgKHRoaXMuaXNUaWxlMk1vZGUoKSkge1xuICAgICAgdmFyIGkgPSAobnVsbCA9PT0gKHIgPSB0LmFyZ3MpIHx8IHZvaWQgMCA9PT0gciA/IHZvaWQgMCA6IHJbMV0pIHx8IHRoaXMuX2NhY2hlZExldmVsSWQgfHwgdGhpcy5nZXRDdXJyZW50TGV2ZWxJZCgpLFxuICAgICAgICBhID0gdGhpcy5maW5kUnVsZShpKTtcbiAgICAgIGlmIChhICYmIGEud2luTG9zZSkge1xuICAgICAgICB2YXIgbiA9IGEud2luTG9zZSxcbiAgICAgICAgICBvID0gdGhpcy5yZXNvbHZlRGltKG4sIFwid2luTG9zZVwiKSxcbiAgICAgICAgICBsID0gdGhpcy5kaW1Ub1N0cihvKTtcbiAgICAgICAgZSh7XG4gICAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgICAgcmV0dXJuVmFsOiBsXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGUoKTtcbiAgICB9IGVsc2UgZSgpO1xuICB9XG4gIG9uRXh0Tm9ybUx2X2dldEFsbERpcldndCh0LCBlKSB7XG4gICAgdmFyIHIsIGk7XG4gICAgaWYgKHRoaXMuaXNUaWxlMk1vZGUoKSkge1xuICAgICAgdmFyIGEgPSB0aGlzLl9jYWNoZWRMZXZlbElkIHx8IHRoaXMuZ2V0Q3VycmVudExldmVsSWQoKSxcbiAgICAgICAgbiA9IHRoaXMuZmluZFJ1bGUoYSk7XG4gICAgICBpZiAobiAmJiBuLndlaWdodCkge1xuICAgICAgICB2YXIgbCxcbiAgICAgICAgICB1ID0gbi53ZWlnaHQ7XG4gICAgICAgIGlmIChcIkluXCIgPT09IHUub3ApIHtcbiAgICAgICAgICB2YXIgYyA9IE1hdGgubWF4LmFwcGx5KE1hdGgsIFsuLi51LnZhbHMsIC4uLls0XV0pO1xuICAgICAgICAgIGwgPSBuZXcgQXJyYXkoYykuZmlsbCgwKTtcbiAgICAgICAgICBmb3IgKHZhciBwID0gMDsgcCA8IHUudmFscy5sZW5ndGg7IHArKykge1xuICAgICAgICAgICAgdmFyIGYgPSB1LnZhbHNbcF0gLSAxO1xuICAgICAgICAgICAgZiA+PSAwICYmIGYgPCBsLmxlbmd0aCAmJiAobFtmXSA9IHUud3RzW3BdIHx8IDApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgaCA9IHRoaXMuZ2V0QXZhaWxhYmxlRGltVmFsdWVzKFwid2VpZ2h0XCIpLFxuICAgICAgICAgICAgeSA9IHZvaWQgMDtcbiAgICAgICAgICBzd2l0Y2ggKHUub3ApIHtcbiAgICAgICAgICAgIGNhc2UgXCJHcmVhdGVyXCI6XG4gICAgICAgICAgICAgIHkgPSBoLmZpbHRlcihmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgIHZhciBlO1xuICAgICAgICAgICAgICAgIHJldHVybiB0ID4gKG51bGwgIT09IChlID0gdS52YWwpICYmIHZvaWQgMCAhPT0gZSA/IGUgOiAwKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkxlc3NcIjpcbiAgICAgICAgICAgICAgeSA9IGguZmlsdGVyKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgdmFyIGU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHQgPCAobnVsbCAhPT0gKGUgPSB1LnZhbCkgJiYgdm9pZCAwICE9PSBlID8gZSA6IEluZmluaXR5KTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkVxdWFsXCI6XG4gICAgICAgICAgICAgIHkgPSBoLmZpbHRlcihmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgIHZhciBlO1xuICAgICAgICAgICAgICAgIHJldHVybiB0ID09PSAobnVsbCAhPT0gKGUgPSB1LnZhbCkgJiYgdm9pZCAwICE9PSBlID8gZSA6IDEpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICB5ID0gW107XG4gICAgICAgICAgfVxuICAgICAgICAgIGMgPSB5Lmxlbmd0aCA+IDAgPyBNYXRoLm1heC5hcHBseShNYXRoLCBbLi4ueSwgLi4uWzRdXSkgOiA0O1xuICAgICAgICAgIGwgPSBuZXcgQXJyYXkoYykuZmlsbCgwKTtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgZm9yICh2YXIgZCA9IF9fdmFsdWVzKHkpLCBtID0gZC5uZXh0KCk7ICFtLmRvbmU7IG0gPSBkLm5leHQoKSkge1xuICAgICAgICAgICAgICB2YXIgXyA9IG0udmFsdWU7XG4gICAgICAgICAgICAgIF8gLSAxID49IDAgJiYgXyAtIDEgPCBsLmxlbmd0aCAmJiAobFtfIC0gMV0gPSAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGNhdGNoICh0KSB7XG4gICAgICAgICAgICByID0ge1xuICAgICAgICAgICAgICBlcnJvcjogdFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgbSAmJiAhbS5kb25lICYmIChpID0gZC5yZXR1cm4pICYmIGkuY2FsbChkKTtcbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgIGlmIChyKSB0aHJvdyByLmVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB5Lmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgVCA9IFtsLCBsLCBsLCBsXTtcbiAgICAgICAgZSh7XG4gICAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgICAgcmV0dXJuVmFsOiBUXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGcgPSB0aGlzLl9mYWxsYmFja0RpcldndCxcbiAgICAgICAgICBiID0gW2csIGcsIGcsIGddO1xuICAgICAgICBlKHtcbiAgICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgICByZXR1cm5WYWw6IGJcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGUoKTtcbiAgfVxuICBvbkV4dE5vcm1Mdl9nZXRNKHQsIGUpIHtcbiAgICBpZiAodGhpcy5pc1RpbGUyTW9kZSgpKSB7XG4gICAgICBlKHtcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICByZXR1cm5WYWw6IHRoaXMuX21cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBlKCk7XG4gICAgfVxuICB9XG4gIG9uRXh0Tm9ybUx2X2dldEluaXREdSh0LCBlKSB7XG4gICAgaWYgKHRoaXMuaXNUaWxlMk1vZGUoKSkge1xuICAgICAgZSh7XG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgcmV0dXJuVmFsOiB0aGlzLl9pbml0RHVcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBlKCk7XG4gICAgfVxuICB9XG4gIG9uRXh0Tm9ybUx2X2lzT3BlblBhdGNoMSh0LCBlKSB7XG4gICAgaWYgKHRoaXMuaXNUaWxlMk1vZGUoKSkge1xuICAgICAgZSh7XG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgcmV0dXJuVmFsOiB0aGlzLl9wYXRjaEZsYWdzWzBdXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZSgpO1xuICAgIH1cbiAgfVxuICBvbkV4dE5vcm1Mdl9pc09wZW5QYXRjaDIodCwgZSkge1xuICAgIGlmICh0aGlzLmlzVGlsZTJNb2RlKCkpIHtcbiAgICAgIGUoe1xuICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgIHJldHVyblZhbDogdGhpcy5fcGF0Y2hGbGFnc1sxXVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGUoKTtcbiAgICB9XG4gIH1cbiAgb25FeHROb3JtTHZfaXNPcGVuUGF0Y2gzKHQsIGUpIHtcbiAgICBpZiAodGhpcy5pc1RpbGUyTW9kZSgpKSB7XG4gICAgICBlKHtcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICByZXR1cm5WYWw6IHRoaXMuX3BhdGNoRmxhZ3NbMl1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBlKCk7XG4gICAgfVxuICB9XG4gIG9uRXh0Tm9ybUx2X2lzT3BlblBhdGNoNCh0LCBlKSB7XG4gICAgaWYgKHRoaXMuaXNUaWxlMk1vZGUoKSkge1xuICAgICAgZSh7XG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgcmV0dXJuVmFsOiB0aGlzLl9wYXRjaEZsYWdzWzNdXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZSgpO1xuICAgIH1cbiAgfVxufSJdfQ==