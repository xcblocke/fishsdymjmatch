"use strict";
cc._RF.push(module, 'c6bebV2hkVF7LyarJU1ELSs', 'CardNumberTrait');
// subpackages/r_cardNumber/Scripts/CardNumberTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var CardUtil_1 = require("../../../Scripts/gamePlay/user/CardUtil");
var CardNumberTrait = /** @class */ (function (_super) {
    __extends(CardNumberTrait, _super);
    function CardNumberTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._currentMapping = {};
        return _this;
    }
    CardNumberTrait_1 = CardNumberTrait;
    CardNumberTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    CardNumberTrait.prototype._getTaskCardResName = function () {
        var t, r = mj.getClassByName("TaskModel");
        return null === (t = null == r ? void 0 : r.getInstance()) || void 0 === t ? void 0 : t.getTaskCardResName();
    };
    CardNumberTrait.prototype._generateRandomMapping = function () {
        var t, r = {}, a = CardNumberTrait_1.ALL_CARDS.slice(0, 18).filter(function (t) {
            return t && t.length > 0;
        });
        if (18 !== a.length)
            return r;
        var n = this._getTaskCardResName(), o = CardNumberTrait_1.ALL_CARDS.filter(function (t) {
            return t && t.length > 0;
        });
        n && (o = o.filter(function (t) {
            return t !== n;
        }));
        if (o.length < 18)
            return r;
        for (var l = o.length - 1; l > 0; l--) {
            var s = Math.floor(Math.random() * (l + 1));
            t = __read([o[s], o[l]], 2), o[l] = t[0], o[s] = t[1];
        }
        for (l = 0; l < 18; l++)
            r[a[l]] = o[l];
        return r;
    };
    CardNumberTrait.prototype._getOrCreateMapping = function (t) {
        if (!this.localData[t]) {
            this.localData[t] = {
                mapping: {}
            };
            this.localData[t] = this.localData[t];
        }
        var r = this.localData[t], e = this._generateRandomMapping();
        if (0 === Object.keys(e).length)
            return {};
        r.mapping = e;
        this.localData[t] = this.localData[t];
        return e;
    };
    CardNumberTrait.prototype._getCurrentGameMode = function () {
        return UserModel_1.default.getInstance().getCurrentGameType() || GameTypeEnums_1.MjGameType.Normal;
    };
    CardNumberTrait.prototype.onGsListener_onNewGame = function (t, r) {
        try {
            if (UserModel_1.default.getInstance().normalData.getLevelId() < 3) {
                r();
                return;
            }
            var a = this._getCurrentGameMode();
            if (a !== GameTypeEnums_1.MjGameType.Normal) {
                r();
                return;
            }
            this._currentMapping = this._getOrCreateMapping(a);
        }
        catch (t) {
            console.error("[" + CardNumberTrait_1.traitKey + "] 关卡切换处理失败: " + (null == t ? void 0 : t.message));
        }
        r();
    };
    CardNumberTrait.prototype.onCardUtil_atlasPathBundle = function (t, r) {
        var a;
        try {
            var n = this._getCurrentGameMode();
            if (n !== GameTypeEnums_1.MjGameType.Normal) {
                r();
                return;
            }
            if (UserModel_1.default.getInstance().normalData.getLevelId() < 3) {
                r();
                return;
            }
            var o = null === (a = t.args) || void 0 === a ? void 0 : a[0];
            if (this._getTaskCardResName() === o) {
                r();
                return;
            }
            var i = /^W[1-9]$/.test(o), s = /^[tb][1-9]$/.test(o);
            if (i) {
                var f = "atlas/numberCardIcon/" + o;
                r({
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    isBreak: true,
                    returnVal: {
                        path: f,
                        bundleName: CardNumberTrait_1.BUNDLE_NAME,
                        fromAtlas: true
                    }
                });
                return;
            }
            if (s) {
                var d = this.localData[n];
                if (!d || 0 === Object.keys(d.mapping).length) {
                    r();
                    return;
                }
                0 === Object.keys(this._currentMapping).length && (this._currentMapping = d.mapping);
                f = "atlas/cardIcon/" + (d.mapping[o] || o);
                r({
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    isBreak: true,
                    returnVal: {
                        path: f,
                        bundleName: CardUtil_1.default.getCardBundleName(),
                        fromAtlas: true
                    }
                });
                return;
            }
            r();
        }
        catch (t) {
            console.error("[" + CardNumberTrait_1.traitKey + "] 劫持图片失败: " + (null == t ? void 0 : t.message));
            r();
        }
    };
    var CardNumberTrait_1;
    CardNumberTrait.traitKey = "CardNumber";
    CardNumberTrait.BUNDLE_NAME = "r_cardNumber";
    CardNumberTrait.ALL_CARDS = ["b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "t1", "t2", "t3", "t4", "t5", "t6", "t7", "t8", "t9", "W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"];
    CardNumberTrait = CardNumberTrait_1 = __decorate([
        mj.trait,
        mj.class("CardNumberTrait")
    ], CardNumberTrait);
    return CardNumberTrait;
}(Trait_1.default));
exports.default = CardNumberTrait;

cc._RF.pop();