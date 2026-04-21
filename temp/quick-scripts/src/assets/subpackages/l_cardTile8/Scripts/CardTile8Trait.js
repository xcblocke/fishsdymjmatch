"use strict";
cc._RF.push(module, '5a46dexKzZJ2IolJA/2ADk+', 'CardTile8Trait');
// subpackages/l_cardTile8/Scripts/CardTile8Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var CardUtil_1 = require("../../../Scripts/gamePlay/user/CardUtil");
var CardTile8Trait = /** @class */ (function (_super) {
    __extends(CardTile8Trait, _super);
    function CardTile8Trait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._currentMapping = {};
        _this._gapTime = 86400000;
        _this._shouldEnableSkin = false;
        return _this;
    }
    CardTile8Trait_1 = CardTile8Trait;
    CardTile8Trait.prototype.onLoad = function () {
        var e;
        _super.prototype.onLoad.call(this);
        void 0 !== (null === (e = this._traitData) || void 0 === e ? void 0 : e.gapTime) && (this._gapTime = 3600000 * this._traitData.gapTime);
        var r = UserModel_1.default.getInstance(), a = this.localData.lastColdStartTime || 0, i = r.getAppStartTime();
        if (a > 0 && (0 === a ? 0 : i - a) > this._gapTime) {
            this._shouldEnableSkin = true;
        }
        else {
            this._shouldEnableSkin = false;
        }
        this.localData.lastColdStartTime = i;
        this.localData = this.localData;
    };
    CardTile8Trait.prototype._getTaskCardResName = function () {
        var t, e = mj.getClassByName("TaskModel");
        return null === (t = null == e ? void 0 : e.getInstance()) || void 0 === t ? void 0 : t.getTaskCardResName();
    };
    CardTile8Trait.prototype._generateRandomMapping = function () {
        var t, e = {}, a = CardTile8Trait_1.ALL_CARDS.slice(0, 18).filter(function (t) {
            return t && t.length > 0;
        });
        if (18 !== a.length)
            return e;
        var i = this._getTaskCardResName(), n = CardTile8Trait_1.ALL_CARDS.filter(function (t) {
            return t && t.length > 0;
        });
        i && (n = n.filter(function (t) {
            return t !== i;
        }));
        if (n.length < 18)
            return e;
        for (var l = n.length - 1; l > 0; l--) {
            var s = Math.floor(Math.random() * (l + 1));
            t = __read([n[s], n[l]], 2), n[l] = t[0], n[s] = t[1];
        }
        for (l = 0; l < 18; l++)
            e[a[l]] = n[l];
        return e;
    };
    CardTile8Trait.prototype._getOrCreateMapping = function (t) {
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
    CardTile8Trait.prototype._getCurrentGameMode = function () {
        return UserModel_1.default.getInstance().getCurrentGameType() || GameTypeEnums_1.MjGameType.Normal;
    };
    CardTile8Trait.prototype.onGsListener_onNewGame = function (t, e) {
        try {
            var a = this._getCurrentGameMode();
            if (a !== GameTypeEnums_1.MjGameType.Travel && a !== GameTypeEnums_1.MjGameType.DailyChallenge) {
                e();
                return;
            }
            this._currentMapping = this._getOrCreateMapping(a);
        }
        catch (t) {
            console.error("[" + CardTile8Trait_1.traitKey + "] 关卡切换处理失败: " + (null == t ? void 0 : t.message));
        }
        e();
    };
    CardTile8Trait.prototype.onCardUtil_atlasPathBundle = function (t, e) {
        var a;
        try {
            var i = this._getCurrentGameMode();
            if (i !== GameTypeEnums_1.MjGameType.Travel && i !== GameTypeEnums_1.MjGameType.DailyChallenge) {
                e();
                return;
            }
            if (!this._shouldEnableSkin) {
                e();
                return;
            }
            var n = null === (a = t.args) || void 0 === a ? void 0 : a[0];
            if (this._getTaskCardResName() === n) {
                e();
                return;
            }
            if (/^[tb][1-9]$/.test(n)) {
                var o = this.localData[i];
                if (!o || 0 === Object.keys(o.mapping).length) {
                    e();
                    return;
                }
                0 === Object.keys(this._currentMapping).length && (this._currentMapping = o.mapping);
                var s = "atlas/cardIconTile/" + (o.mapping[n] || n);
                e({
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    isBreak: true,
                    returnVal: {
                        path: s,
                        bundleName: CardUtil_1.default.getCardBundleName(),
                        fromAtlas: true
                    }
                });
                return;
            }
            e();
        }
        catch (t) {
            console.error("[" + CardTile8Trait_1.traitKey + "] 劫持图片失败: " + (null == t ? void 0 : t.message));
            e();
        }
    };
    var CardTile8Trait_1;
    CardTile8Trait.traitKey = "CardTile8";
    CardTile8Trait.ALL_CARDS = ["b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "t1", "t2", "t3", "t4", "t5", "t6", "t7", "t8", "t9", "W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"];
    CardTile8Trait = CardTile8Trait_1 = __decorate([
        mj.trait,
        mj.class("CardTile8Trait")
    ], CardTile8Trait);
    return CardTile8Trait;
}(Trait_1.default));
exports.default = CardTile8Trait;

cc._RF.pop();