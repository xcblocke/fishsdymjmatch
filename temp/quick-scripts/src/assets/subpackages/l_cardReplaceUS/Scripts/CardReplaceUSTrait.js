"use strict";
cc._RF.push(module, '36a8e7GlpNPFJN6oHKzM5iE', 'CardReplaceUSTrait');
// subpackages/l_cardReplaceUS/Scripts/CardReplaceUSTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var CardUtil_1 = require("../../../Scripts/gamePlay/user/CardUtil");
var CardReplaceUSTrait = /** @class */ (function (_super) {
    __extends(CardReplaceUSTrait, _super);
    function CardReplaceUSTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._currentMapping = {};
        return _this;
    }
    CardReplaceUSTrait_1 = CardReplaceUSTrait;
    CardReplaceUSTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._checkCountryCondition();
    };
    CardReplaceUSTrait.prototype._checkCountryCondition = function () {
        var t = this._tm.getConditionInfo(), e = null == t ? void 0 : t.country;
        e && "" !== e || (this.eventEnabled = false);
    };
    CardReplaceUSTrait.prototype._getTaskCardResName = function () {
        var t, e = mj.getClassByName("TaskModel");
        return null === (t = null == e ? void 0 : e.getInstance()) || void 0 === t ? void 0 : t.getTaskCardResName();
    };
    CardReplaceUSTrait.prototype._generateRandomMapping = function () {
        var t, e = {}, a = CardReplaceUSTrait_1.ALL_CARDS.slice(0, 18).filter(function (t) {
            return t && t.length > 0;
        });
        if (18 !== a.length)
            return e;
        var n = this._getTaskCardResName(), o = CardReplaceUSTrait_1.ALL_CARDS.filter(function (t) {
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
    CardReplaceUSTrait.prototype._getOrCreateMapping = function (t) {
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
    CardReplaceUSTrait.prototype._getCurrentGameMode = function () {
        return UserModel_1.default.getInstance().getCurrentGameType() || GameTypeEnums_1.MjGameType.Normal;
    };
    CardReplaceUSTrait.prototype.onGsListener_onNewGame = function (t, e) {
        try {
            if (UserModel_1.default.getInstance().getMainGameData().getLevelId() < 1) {
                e();
                return;
            }
            var a = this._getCurrentGameMode();
            if (a !== GameTypeEnums_1.MjGameType.Normal && a !== GameTypeEnums_1.MjGameType.Tile2Normal) {
                e();
                return;
            }
            this._currentMapping = this._getOrCreateMapping(a);
        }
        catch (t) {
            console.error("[" + CardReplaceUSTrait_1.traitKey + "] 关卡切换处理失败: " + (null == t ? void 0 : t.message));
        }
        e();
    };
    CardReplaceUSTrait.prototype.onCardUtil_atlasPathBundle = function (t, e) {
        var a;
        try {
            var n = this._getCurrentGameMode();
            if (n !== GameTypeEnums_1.MjGameType.Normal && n !== GameTypeEnums_1.MjGameType.Tile2Normal) {
                e();
                return;
            }
            if (UserModel_1.default.getInstance().getMainGameData().getLevelId() < 1) {
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
                var s = "atlas/cardIconTile/" + (i.mapping[o] || o);
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
            console.error("[" + CardReplaceUSTrait_1.traitKey + "] 劫持图片失败: " + (null == t ? void 0 : t.message));
            e();
        }
    };
    var CardReplaceUSTrait_1;
    CardReplaceUSTrait.traitKey = "CardReplaceUS";
    CardReplaceUSTrait.BUNDLE_NAME = "l_cardReplaceUS";
    CardReplaceUSTrait.ALL_CARDS = ["b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "t1", "t2", "t3", "t4", "t5", "t6", "t7", "t8", "t9", "W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"];
    CardReplaceUSTrait = CardReplaceUSTrait_1 = __decorate([
        mj.trait,
        mj.class("CardReplaceUSTrait")
    ], CardReplaceUSTrait);
    return CardReplaceUSTrait;
}(Trait_1.default));
exports.default = CardReplaceUSTrait;

cc._RF.pop();