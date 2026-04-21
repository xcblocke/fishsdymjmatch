"use strict";
cc._RF.push(module, '43192uWPd9HL7pRV2fQsqrn', 'CardReplaceNonUS2Trait');
// subpackages/l_cardReplaceNonUS/Scripts/CardReplaceNonUS2Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var CardUtil_1 = require("../../../Scripts/gamePlay/user/CardUtil");
var CardReplaceNonUS2Trait = /** @class */ (function (_super) {
    __extends(CardReplaceNonUS2Trait, _super);
    function CardReplaceNonUS2Trait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._currentMapping = {};
        return _this;
    }
    CardReplaceNonUS2Trait_1 = CardReplaceNonUS2Trait;
    CardReplaceNonUS2Trait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    CardReplaceNonUS2Trait.prototype._getTaskCardResName = function () {
        var t, e = mj.getClassByName("TaskModel");
        return null === (t = null == e ? void 0 : e.getInstance()) || void 0 === t ? void 0 : t.getTaskCardResName();
    };
    CardReplaceNonUS2Trait.prototype._getFlowerSeriesID = function () {
        var t, e, r;
        try {
            var a = null === (t = mj.getClassByName("FlowerCardSeriesTrait")) || void 0 === t ? void 0 : t.getInstance();
            return a && a.eventEnabled && null !== (r = null === (e = a.getCurrentModeSeriesId) || void 0 === e ? void 0 : e.call(a)) && void 0 !== r ? r : -1;
        }
        catch (t) {
            return -1;
        }
    };
    CardReplaceNonUS2Trait.prototype._generateRandomMapping = function () {
        var t, e = {}, a = CardReplaceNonUS2Trait_1.ALL_CARDS.slice(0, 18).filter(function (t) {
            return t && t.length > 0;
        });
        if (18 !== a.length)
            return e;
        var n = this._getTaskCardResName(), o = CardReplaceNonUS2Trait_1.ALL_CARDS.filter(function (t) {
            return t && t.length > 0;
        });
        n && (o = o.filter(function (t) {
            return t !== n;
        }));
        if (o.length < 18)
            return e;
        for (var l = o.length - 1; l > 0; l--) {
            var s = Math.floor(Math.random() * (l + 1));
            t = __read([o[s], o[l]], 2), o[l] = t[0], o[s] = t[1];
        }
        for (l = 0; l < 18; l++)
            e[a[l]] = o[l];
        return e;
    };
    CardReplaceNonUS2Trait.prototype._getOrCreateMapping = function (t) {
        if (!this.localData[t]) {
            this.localData[t] = {
                mapping: {}
            };
            this.localData[t] = this.localData[t];
        }
        var e = this.localData[t], r = this._generateRandomMapping();
        if (0 === Object.keys(r).length)
            return {};
        e.mapping = r;
        this.localData[t] = this.localData[t];
        return r;
    };
    CardReplaceNonUS2Trait.prototype._getCurrentGameMode = function () {
        return UserModel_1.default.getInstance().getCurrentGameType() || GameTypeEnums_1.MjGameType.Normal;
    };
    CardReplaceNonUS2Trait.prototype._getTargetResConfig = function (t, e) {
        return {
            bundleName: CardUtil_1.default.getCardBundleName(),
            path: e
        };
    };
    CardReplaceNonUS2Trait.prototype.onGsListener_onNewGame = function (t, e) {
        try {
            if (UserModel_1.default.getInstance().normalData.getLevelId() < 3) {
                e();
                return;
            }
            var a = this._getCurrentGameMode();
            if (a !== GameTypeEnums_1.MjGameType.Travel && a !== GameTypeEnums_1.MjGameType.DailyChallenge) {
                e();
                return;
            }
            this._currentMapping = this._getOrCreateMapping(a);
        }
        catch (t) {
            console.error("[" + CardReplaceNonUS2Trait_1.traitKey + "] 关卡切换处理失败: " + (null == t ? void 0 : t.message));
        }
        e();
    };
    CardReplaceNonUS2Trait.prototype.onCardUtil_atlasPathBundle = function (t, e) {
        var a;
        try {
            var n = this._getCurrentGameMode();
            if (n !== GameTypeEnums_1.MjGameType.Travel && n !== GameTypeEnums_1.MjGameType.DailyChallenge) {
                e();
                return;
            }
            if (UserModel_1.default.getInstance().normalData.getLevelId() < 3) {
                e();
                return;
            }
            if (this._getFlowerSeriesID() <= 0) {
                e();
                return;
            }
            var o = null === (a = t.args) || void 0 === a ? void 0 : a[0];
            if (this._getTaskCardResName() === o) {
                e();
                return;
            }
            if (/^[tb][1-9]$/.test(o)) {
                var i = this.localData[n];
                if (!i || 0 === Object.keys(i.mapping).length) {
                    e();
                    return;
                }
                0 === Object.keys(this._currentMapping).length && (this._currentMapping = i.mapping);
                var s = i.mapping[o] || o, p = "atlas/cardIcon/" + s, f = this._getTargetResConfig(s, p);
                e({
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    isBreak: true,
                    returnVal: {
                        path: f.path,
                        bundleName: f.bundleName,
                        fromAtlas: true
                    }
                });
                return;
            }
            e();
        }
        catch (t) {
            console.error("[" + CardReplaceNonUS2Trait_1.traitKey + "] 劫持图片失败: " + (null == t ? void 0 : t.message));
            e();
        }
    };
    var CardReplaceNonUS2Trait_1;
    CardReplaceNonUS2Trait.traitKey = "CardReplaceNonUS2";
    CardReplaceNonUS2Trait.BUNDLE_NAME = "l_cardReplaceNonUS";
    CardReplaceNonUS2Trait.ALL_CARDS = ["b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "t1", "t2", "t3", "t4", "t5", "t6", "t7", "t8", "t9", "Z_dong", "Z_nan", "Z_xi", "Z_bei", "Z_bai", "Z_fa", "Z_zhong", "H_mei", "H_lan", "H_zhu", "H_ju", "J_chun", "J_xia", "J_qiu", "J_dong"];
    __decorate([
        mj.traitEvent("CardRepNonUs2_tarResCfg")
    ], CardReplaceNonUS2Trait.prototype, "_getTargetResConfig", null);
    CardReplaceNonUS2Trait = CardReplaceNonUS2Trait_1 = __decorate([
        mj.trait,
        mj.class("CardReplaceNonUS2Trait")
    ], CardReplaceNonUS2Trait);
    return CardReplaceNonUS2Trait;
}(Trait_1.default));
exports.default = CardReplaceNonUS2Trait;

cc._RF.pop();