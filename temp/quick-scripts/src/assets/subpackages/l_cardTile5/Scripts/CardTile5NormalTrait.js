"use strict";
cc._RF.push(module, '1702fV0cj1LTIoVIG1WTCSh', 'CardTile5NormalTrait');
// subpackages/l_cardTile5/Scripts/CardTile5NormalTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var CardUtil_1 = require("../../../Scripts/gamePlay/user/CardUtil");
var CardTile5NormalTrait = /** @class */ (function (_super) {
    __extends(CardTile5NormalTrait, _super);
    function CardTile5NormalTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._currentMapping = {};
        _this._challengeCount = 2;
        return _this;
    }
    CardTile5NormalTrait_1 = CardTile5NormalTrait;
    CardTile5NormalTrait.prototype.onLoad = function () {
        var r;
        _super.prototype.onLoad.call(this);
        void 0 !== (null === (r = this._traitData) || void 0 === r ? void 0 : r.challengeCount) && (this._challengeCount = this._traitData.challengeCount);
    };
    CardTile5NormalTrait.prototype._getTaskCardResName = function () {
        var t, r = mj.getClassByName("TaskModel");
        return null === (t = null == r ? void 0 : r.getInstance()) || void 0 === t ? void 0 : t.getTaskCardResName();
    };
    CardTile5NormalTrait.prototype._generateRandomMapping = function () {
        var t, r = {}, a = CardTile5NormalTrait_1.ALL_CARDS.slice(0, 18).filter(function (t) {
            return t && t.length > 0;
        });
        if (18 !== a.length)
            return r;
        var n = this._getTaskCardResName(), o = CardTile5NormalTrait_1.ALL_CARDS.filter(function (t) {
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
    CardTile5NormalTrait.prototype._getOrCreateMapping = function (t) {
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
    CardTile5NormalTrait.prototype._getCurrentGameMode = function () {
        return UserModel_1.default.getInstance().getCurrentGameType() || GameTypeEnums_1.MjGameType.Normal;
    };
    CardTile5NormalTrait.prototype.onGsListener_onNewGame = function (t, r) {
        try {
            var a = this._getCurrentGameMode();
            if (a !== GameTypeEnums_1.MjGameType.Normal) {
                r();
                return;
            }
            this._currentMapping = this._getOrCreateMapping(a);
        }
        catch (t) {
            console.error("[" + CardTile5NormalTrait_1.traitKey + "] 关卡切换处理失败: " + (null == t ? void 0 : t.message));
        }
        r();
    };
    CardTile5NormalTrait.prototype.onCardUtil_atlasPathBundle = function (t, r) {
        var a;
        try {
            var n = this._getCurrentGameMode();
            if (n !== GameTypeEnums_1.MjGameType.Normal) {
                r();
                return;
            }
            if (UserModel_1.default.getInstance().normalData.getReplayCount() < this._challengeCount) {
                r();
                return;
            }
            var o = null === (a = t.args) || void 0 === a ? void 0 : a[0];
            if (this._getTaskCardResName() === o) {
                r();
                return;
            }
            if (/^[tb][1-9]$/.test(o)) {
                var i = this.localData[n];
                if (!i || 0 === Object.keys(i.mapping).length) {
                    r();
                    return;
                }
                0 === Object.keys(this._currentMapping).length && (this._currentMapping = i.mapping);
                var s = "atlas/cardIconTile/" + (i.mapping[o] || o);
                r({
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
            r();
        }
        catch (t) {
            console.error("[" + CardTile5NormalTrait_1.traitKey + "] 劫持图片失败: " + (null == t ? void 0 : t.message));
            r();
        }
    };
    var CardTile5NormalTrait_1;
    CardTile5NormalTrait.traitKey = "CardTile5Normal";
    CardTile5NormalTrait.ALL_CARDS = ["b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "t1", "t2", "t3", "t4", "t5", "t6", "t7", "t8", "t9", "W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"];
    CardTile5NormalTrait = CardTile5NormalTrait_1 = __decorate([
        mj.trait,
        mj.class("CardTile5NormalTrait")
    ], CardTile5NormalTrait);
    return CardTile5NormalTrait;
}(Trait_1.default));
exports.default = CardTile5NormalTrait;

cc._RF.pop();