"use strict";
cc._RF.push(module, '6542eyR+QlHD78HZ1M3Kdx3', 'Tile2OutRewardsTrait');
// subpackages/l_tile2OutRewards/Scripts/Tile2OutRewardsTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TravelConfig_1 = require("../../../Scripts/config/TravelConfig");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var i;
(i = {})[105] = 101;
i[205] = 201;
i[607] = 601;
var p = i;
var Tile2OutRewardsTrait = /** @class */ (function (_super) {
    __extends(Tile2OutRewardsTrait, _super);
    function Tile2OutRewardsTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Tile2OutRewardsTrait.prototype, "taskRewards", {
        get: function () {
            var e;
            return null !== (e = this.traitData.taskRewards) && void 0 !== e ? e : [];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tile2OutRewardsTrait.prototype, "travelBoxes", {
        get: function () {
            var e;
            return null !== (e = this.traitData.travelBoxes) && void 0 !== e ? e : [];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tile2OutRewardsTrait.prototype, "rankRewards", {
        get: function () {
            var e;
            return null !== (e = this.traitData.rankRewards) && void 0 !== e ? e : [];
        },
        enumerable: false,
        configurable: true
    });
    Tile2OutRewardsTrait.prototype.isTile2Mode = function () {
        return UserModel_1.default.getInstance().getMainGameData().gameType === GameTypeEnums_1.MjGameType.Tile2Normal;
    };
    Tile2OutRewardsTrait.prototype.onTLGameModel_getReward = function (e, t) {
        var r, n;
        if (this.isTile2Mode()) {
            var i = e.beforReturnVal;
            if (!i || i.length <= 0)
                t();
            else {
                var o = this.travelBoxes;
                if (!o || o.length <= 0)
                    t();
                else {
                    for (var a = o.filter(function (e) {
                        return -1 === e[1];
                    }), s = function s(e) {
                        var t = i[e];
                        if (t.type === TravelConfig_1.ETravelRewardType.EGiftBox) {
                            var r = o.find(function (e) {
                                return e[0] === t.lv;
                            });
                            r && -1 !== r[1] && (t.reward = r[1]);
                        }
                    }, u = 0; u < i.length; u++)
                        s(u);
                    var c = function c(e) {
                        var t = i.findIndex(function (t) {
                            return t.lv === e[0];
                        });
                        -1 !== t && i.splice(t, 1);
                    };
                    try {
                        for (var p = __values(a), d = p.next(); !d.done; d = p.next())
                            c(d.value);
                    }
                    catch (e) {
                        r = {
                            error: e
                        };
                    }
                    finally {
                        try {
                            d && !d.done && (n = p.return) && n.call(p);
                        }
                        finally {
                            if (r)
                                throw r.error;
                        }
                    }
                    t({
                        returnVal: i
                    });
                }
            }
        }
        else
            t();
    };
    Tile2OutRewardsTrait.prototype.onTLMapVw_updateMapEleCfg = function (e, t) {
        var r, n, i;
        if (this.isTile2Mode()) {
            var o = e.ins.stateConfig;
            if (!o || !o.elements || o.elements.length <= 0)
                t();
            else {
                var a = this.travelBoxes;
                if (!a || a.length <= 0)
                    t();
                else {
                    var s = a.filter(function (e) {
                        return -1 === e[1];
                    }), u = function u(e) {
                        s.find(function (t) {
                            return t[0] === e.level;
                        }) && (e.type = null !== (i = p[e.type]) && void 0 !== i ? i : e.type);
                    };
                    try {
                        for (var f = __values(o.elements), c = f.next(); !c.done; c = f.next())
                            u(c.value);
                    }
                    catch (e) {
                        r = {
                            error: e
                        };
                    }
                    finally {
                        try {
                            c && !c.done && (n = f.return) && n.call(f);
                        }
                        finally {
                            if (r)
                                throw r.error;
                        }
                    }
                    t();
                }
            }
        }
        else
            t();
    };
    Tile2OutRewardsTrait.prototype.onTaskTrait_getStageRews = function (e, t) {
        if (this.isTile2Mode()) {
            if (!this.taskRewards || this.taskRewards.length <= 0) {
                t();
            }
            else {
                t({
                    isBreak: true,
                    returnType: TraitCallbackReturnType.return,
                    returnVal: this.taskRewards
                });
            }
        }
        else {
            t();
        }
    };
    Tile2OutRewardsTrait.prototype.onRankRobotCfg_getRewards = function (e, t) {
        if (this.isTile2Mode()) {
            if (!this.rankRewards || this.rankRewards.length <= 0) {
                t();
            }
            else {
                t({
                    isBreak: true,
                    returnType: TraitCallbackReturnType.return,
                    returnVal: this.rankRewards
                });
            }
        }
        else {
            t();
        }
    };
    Tile2OutRewardsTrait.traitKey = "Tile2OutRewards";
    Tile2OutRewardsTrait = __decorate([
        mj.trait,
        mj.class("Tile2OutRewardsTrait")
    ], Tile2OutRewardsTrait);
    return Tile2OutRewardsTrait;
}(Trait_1.default));
exports.default = Tile2OutRewardsTrait;

cc._RF.pop();