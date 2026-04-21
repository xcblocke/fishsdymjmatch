"use strict";
cc._RF.push(module, '5284alO4rVHIq93HZ4fwOhj', 'CardTile4NormalTrait');
// subpackages/l_cardTile4/Scripts/CardTile4NormalTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var CardUtil_1 = require("../../../Scripts/gamePlay/user/CardUtil");
var CardTile4NormalTrait = /** @class */ (function (_super) {
    __extends(CardTile4NormalTrait, _super);
    function CardTile4NormalTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._currentMapping = {};
        _this._startLevel = 5;
        _this._interval = 5;
        return _this;
    }
    CardTile4NormalTrait_1 = CardTile4NormalTrait;
    CardTile4NormalTrait.prototype.onLoad = function () {
        var r, e;
        _super.prototype.onLoad.call(this);
        void 0 !== (null === (r = this._traitData) || void 0 === r ? void 0 : r.startLevel) && (this._startLevel = this._traitData.startLevel);
        void 0 !== (null === (e = this._traitData) || void 0 === e ? void 0 : e.interval) && (this._interval = this._traitData.interval);
    };
    CardTile4NormalTrait.prototype._getTaskCardResName = function () {
        var t, r = mj.getClassByName("TaskModel");
        return null === (t = null == r ? void 0 : r.getInstance()) || void 0 === t ? void 0 : t.getTaskCardResName();
    };
    CardTile4NormalTrait.prototype._generateRandomMapping = function () {
        var t, r = {}, a = CardTile4NormalTrait_1.ALL_CARDS.slice(0, 18).filter(function (t) {
            return t && t.length > 0;
        });
        if (18 !== a.length)
            return r;
        var n = this._getTaskCardResName(), i = CardTile4NormalTrait_1.ALL_CARDS.filter(function (t) {
            return t && t.length > 0;
        });
        n && (i = i.filter(function (t) {
            return t !== n;
        }));
        if (i.length < 18)
            return r;
        for (var l = i.length - 1; l > 0; l--) {
            var s = Math.floor(Math.random() * (l + 1));
            t = __read([i[s], i[l]], 2), i[l] = t[0], i[s] = t[1];
        }
        for (l = 0; l < 18; l++)
            r[a[l]] = i[l];
        return r;
    };
    CardTile4NormalTrait.prototype._getOrCreateMapping = function (t) {
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
    CardTile4NormalTrait.prototype._getCurrentGameMode = function () {
        return UserModel_1.default.getInstance().getCurrentGameType() || GameTypeEnums_1.MjGameType.Normal;
    };
    CardTile4NormalTrait.prototype._shouldEnableForLevel = function (t) {
        return !(t < this._startLevel) && (t - this._startLevel) % this._interval == 0;
    };
    CardTile4NormalTrait.prototype.onGsListener_onNewGame = function (t, r) {
        try {
            var a = UserModel_1.default.getInstance().normalData.getLevelId();
            if (!this._shouldEnableForLevel(a)) {
                r();
                return;
            }
            var n = this._getCurrentGameMode();
            if (n !== GameTypeEnums_1.MjGameType.Normal) {
                r();
                return;
            }
            this._currentMapping = this._getOrCreateMapping(n);
        }
        catch (t) {
            console.error("[" + CardTile4NormalTrait_1.traitKey + "] 关卡切换处理失败: " + (null == t ? void 0 : t.message));
        }
        r();
    };
    CardTile4NormalTrait.prototype.onCardUtil_atlasPathBundle = function (t, r) {
        var a;
        try {
            var n = this._getCurrentGameMode();
            if (n !== GameTypeEnums_1.MjGameType.Normal) {
                r();
                return;
            }
            var i = UserModel_1.default.getInstance().normalData.getLevelId();
            if (!this._shouldEnableForLevel(i)) {
                r();
                return;
            }
            var o = null === (a = t.args) || void 0 === a ? void 0 : a[0];
            if (this._getTaskCardResName() === o) {
                r();
                return;
            }
            if (/^[tb][1-9]$/.test(o)) {
                var s = this.localData[n];
                if (!s || 0 === Object.keys(s.mapping).length) {
                    r();
                    return;
                }
                0 === Object.keys(this._currentMapping).length && (this._currentMapping = s.mapping);
                var f = "atlas/cardIconTile/" + (s.mapping[o] || o);
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
            console.error("[" + CardTile4NormalTrait_1.traitKey + "] 劫持图片失败: " + (null == t ? void 0 : t.message));
            r();
        }
    };
    var CardTile4NormalTrait_1;
    CardTile4NormalTrait.traitKey = "CardTile4Normal";
    CardTile4NormalTrait.ALL_CARDS = ["b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "t1", "t2", "t3", "t4", "t5", "t6", "t7", "t8", "t9", "W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"];
    CardTile4NormalTrait = CardTile4NormalTrait_1 = __decorate([
        mj.trait,
        mj.class("CardTile4NormalTrait")
    ], CardTile4NormalTrait);
    return CardTile4NormalTrait;
}(Trait_1.default));
exports.default = CardTile4NormalTrait;

cc._RF.pop();