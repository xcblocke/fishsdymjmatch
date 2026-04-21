"use strict";
cc._RF.push(module, '5ff28bUPblCqoZLTGRoMGvU', 'CardTile7NormalTrait');
// subpackages/l_cardTile7/Scripts/CardTile7NormalTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var CardUtil_1 = require("../../../Scripts/gamePlay/user/CardUtil");
var CardTile7NormalTrait = /** @class */ (function (_super) {
    __extends(CardTile7NormalTrait, _super);
    function CardTile7NormalTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._currentMapping = {};
        return _this;
    }
    CardTile7NormalTrait_1 = CardTile7NormalTrait;
    CardTile7NormalTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    CardTile7NormalTrait.prototype._getTaskCardResName = function () {
        var t, r = mj.getClassByName("TaskModel");
        return null === (t = null == r ? void 0 : r.getInstance()) || void 0 === t ? void 0 : t.getTaskCardResName();
    };
    CardTile7NormalTrait.prototype._generateRandomMapping = function () {
        var t, r = {}, a = CardTile7NormalTrait_1.ALL_CARDS.slice(0, 18).filter(function (t) {
            return t && t.length > 0;
        });
        if (18 !== a.length)
            return r;
        var n = this._getTaskCardResName(), i = CardTile7NormalTrait_1.ALL_CARDS.filter(function (t) {
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
    CardTile7NormalTrait.prototype._generateMapping = function (t) {
        if (!this.localData[t]) {
            this.localData[t] = {
                mapping: {},
                hadInterAdLastRound: false
            };
            this.localData[t] = this.localData[t];
        }
        var r = this.localData[t];
        if (!r)
            return {};
        var e = this._generateRandomMapping();
        if (0 === Object.keys(e).length)
            return {};
        r.mapping = e;
        this.localData[t] = this.localData[t];
        return e;
    };
    CardTile7NormalTrait.prototype._clearMapping = function (t) {
        var r = this.localData[t];
        if (r) {
            r.mapping = {};
            this.localData[t] = this.localData[t];
        }
    };
    CardTile7NormalTrait.prototype._getCurrentGameMode = function () {
        return UserModel_1.default.getInstance().getCurrentGameType() || GameTypeEnums_1.MjGameType.Normal;
    };
    CardTile7NormalTrait.prototype.onAdMgr_interAdClose = function (t, r) {
        try {
            var a = this._getCurrentGameMode();
            this.localData[a] || (this.localData[a] = {
                mapping: {},
                hadInterAdLastRound: false
            });
            var n = this.localData[a];
            if (n) {
                n.hadInterAdLastRound = true;
                this.localData[a] = this.localData[a];
            }
        }
        catch (t) {
            console.error("[" + CardTile7NormalTrait_1.traitKey + "] 插屏广告关闭处理失败: " + (null == t ? void 0 : t.message));
        }
        r();
    };
    CardTile7NormalTrait.prototype.onGsListener_onNewGame = function (t, r) {
        try {
            var a = this._getCurrentGameMode();
            if (a !== GameTypeEnums_1.MjGameType.Normal) {
                r();
                return;
            }
            var n = this.localData[a];
            if (null == n ? void 0 : n.hadInterAdLastRound) {
                this._currentMapping = this._generateMapping(a);
                if (this.localData[a]) {
                    this.localData[a].hadInterAdLastRound = false;
                    this.localData[a] = this.localData[a];
                }
            }
            else {
                this._clearMapping(a);
                this._currentMapping = {};
            }
        }
        catch (t) {
            console.error("[" + CardTile7NormalTrait_1.traitKey + "] 关卡切换处理失败: " + (null == t ? void 0 : t.message));
        }
        r();
    };
    CardTile7NormalTrait.prototype.onCardUtil_atlasPathBundle = function (t, r) {
        var a;
        try {
            var n = this._getCurrentGameMode();
            if (n !== GameTypeEnums_1.MjGameType.Normal) {
                r();
                return;
            }
            var i = null === (a = t.args) || void 0 === a ? void 0 : a[0];
            if (this._getTaskCardResName() === i) {
                r();
                return;
            }
            if (/^[tb][1-9]$/.test(i)) {
                var o = this.localData[n];
                if (!o || 0 === Object.keys(o.mapping).length) {
                    r();
                    return;
                }
                0 === Object.keys(this._currentMapping).length && (this._currentMapping = o.mapping);
                var s = "atlas/cardIconTile/" + (o.mapping[i] || i);
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
            console.error("[" + CardTile7NormalTrait_1.traitKey + "] 劫持图片失败: " + (null == t ? void 0 : t.message));
            r();
        }
    };
    var CardTile7NormalTrait_1;
    CardTile7NormalTrait.traitKey = "CardTile7Normal";
    CardTile7NormalTrait.ALL_CARDS = ["b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "t1", "t2", "t3", "t4", "t5", "t6", "t7", "t8", "t9", "W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"];
    CardTile7NormalTrait = CardTile7NormalTrait_1 = __decorate([
        mj.trait,
        mj.class("CardTile7NormalTrait")
    ], CardTile7NormalTrait);
    return CardTile7NormalTrait;
}(Trait_1.default));
exports.default = CardTile7NormalTrait;

cc._RF.pop();