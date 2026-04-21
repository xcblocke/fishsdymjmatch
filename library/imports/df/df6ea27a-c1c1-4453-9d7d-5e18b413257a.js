"use strict";
cc._RF.push(module, 'df6eaJ6wcFEU519Xhi0EyV6', 'CardTile6Trait');
// subpackages/l_cardTile6/Scripts/CardTile6Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var CardUtil_1 = require("../../../Scripts/gamePlay/user/CardUtil");
var CardTile6Trait = /** @class */ (function (_super) {
    __extends(CardTile6Trait, _super);
    function CardTile6Trait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._currentMapping = {};
        return _this;
    }
    CardTile6Trait_1 = CardTile6Trait;
    CardTile6Trait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        mj.EventManager.on("Tile6_setAdFlag", this._onSetInterAdFlag, this);
        mj.EventManager.on("Tile6_clearAdFlag", this._onClearInterAdFlag, this);
    };
    CardTile6Trait.prototype._onSetInterAdFlag = function () {
        var t = this;
        CardTile6Trait_1.ALL_MODES.forEach(function (a) {
            t.localData[a] || (t.localData[a] = {
                mapping: {},
                hadInterAdLastRound: false,
                hadInterAdThisRound: false
            });
            var e = t.localData[a];
            if (e) {
                e.hadInterAdLastRound = true;
                t.localData[a] = t.localData[a];
            }
        });
    };
    CardTile6Trait.prototype._onClearInterAdFlag = function () {
        var t = this;
        CardTile6Trait_1.ALL_MODES.forEach(function (a) {
            var e = t.localData[a];
            if (e) {
                e.hadInterAdLastRound = false;
                t.localData[a] = t.localData[a];
            }
        });
    };
    CardTile6Trait.prototype._getTaskCardResName = function () {
        var t, a = mj.getClassByName("TaskModel");
        return null === (t = null == a ? void 0 : a.getInstance()) || void 0 === t ? void 0 : t.getTaskCardResName();
    };
    CardTile6Trait.prototype._generateRandomMapping = function () {
        var t, a = {}, r = CardTile6Trait_1.ALL_CARDS.slice(0, 18).filter(function (t) {
            return t && t.length > 0;
        });
        if (18 !== r.length)
            return a;
        var n = this._getTaskCardResName(), o = CardTile6Trait_1.ALL_CARDS.filter(function (t) {
            return t && t.length > 0;
        });
        n && (o = o.filter(function (t) {
            return t !== n;
        }));
        if (o.length < 18)
            return a;
        for (var l = o.length - 1; l > 0; l--) {
            var s = Math.floor(Math.random() * (l + 1));
            t = __read([o[s], o[l]], 2), o[l] = t[0], o[s] = t[1];
        }
        for (l = 0; l < 18; l++)
            a[r[l]] = o[l];
        return a;
    };
    CardTile6Trait.prototype._generateMapping = function (t) {
        if (!this.localData[t]) {
            this.localData[t] = {
                mapping: {},
                hadInterAdLastRound: false,
                hadInterAdThisRound: false
            };
            this.localData[t] = this.localData[t];
        }
        var a = this.localData[t];
        if (!a)
            return {};
        var e = this._generateRandomMapping();
        if (0 === Object.keys(e).length)
            return {};
        a.mapping = e;
        this.localData[t] = this.localData[t];
        return e;
    };
    CardTile6Trait.prototype._clearMapping = function (t) {
        var a = this.localData[t];
        if (a) {
            a.mapping = {};
            this.localData[t] = this.localData[t];
        }
    };
    CardTile6Trait.prototype._getCurrentGameMode = function () {
        return UserModel_1.default.getInstance().getCurrentGameType() || GameTypeEnums_1.MjGameType.Normal;
    };
    CardTile6Trait.prototype.onAdMgr_interAdClose = function (t, a) {
        try {
            var r = this._getCurrentGameMode();
            this.localData[r] || (this.localData[r] = {
                mapping: {},
                hadInterAdLastRound: false,
                hadInterAdThisRound: false
            });
            var n = this.localData[r];
            if (n) {
                n.hadInterAdThisRound = true;
                this.localData[r] = this.localData[r];
            }
            mj.EventManager.emit("Tile6_setAdFlag");
        }
        catch (t) {
            console.error("[" + CardTile6Trait_1.traitKey + "] 插屏广告关闭处理失败: " + (null == t ? void 0 : t.message));
        }
        a();
    };
    CardTile6Trait.prototype.onGsListener_onNewGame = function (t, a) {
        try {
            var r = this._getCurrentGameMode();
            if (r !== GameTypeEnums_1.MjGameType.Travel && r !== GameTypeEnums_1.MjGameType.DailyChallenge) {
                a();
                return;
            }
            var n = this.localData[r];
            if (null == n ? void 0 : n.hadInterAdLastRound)
                this._currentMapping = this._generateMapping(r);
            else {
                this._clearMapping(r);
                this._currentMapping = {};
            }
        }
        catch (t) {
            console.error("[" + CardTile6Trait_1.traitKey + "] 关卡切换处理失败: " + (null == t ? void 0 : t.message));
        }
        a();
    };
    CardTile6Trait.prototype.onTLWinVw_showTLWinVw = function (t, a) {
        try {
            var r = GameTypeEnums_1.MjGameType.Travel, n = this.localData[r];
            (null == n ? void 0 : n.hadInterAdThisRound) || mj.EventManager.emit("Tile6_clearAdFlag");
            if (this.localData[r]) {
                this.localData[r].hadInterAdThisRound = false;
                this.localData[r] = this.localData[r];
            }
        }
        catch (t) {
            console.error("[" + CardTile6Trait_1.traitKey + "] 旅行模式胜利处理失败: " + (null == t ? void 0 : t.message));
        }
        a();
    };
    CardTile6Trait.prototype.onDCWinVw_showWinVw = function (t, a) {
        try {
            var r = GameTypeEnums_1.MjGameType.DailyChallenge, n = this.localData[r];
            (null == n ? void 0 : n.hadInterAdThisRound) || mj.EventManager.emit("Tile6_clearAdFlag");
            if (this.localData[r]) {
                this.localData[r].hadInterAdThisRound = false;
                this.localData[r] = this.localData[r];
            }
        }
        catch (t) {
            console.error("[" + CardTile6Trait_1.traitKey + "] 每日挑战胜利处理失败: " + (null == t ? void 0 : t.message));
        }
        a();
    };
    CardTile6Trait.prototype.onCardUtil_atlasPathBundle = function (t, a) {
        var r;
        try {
            var n = this._getCurrentGameMode();
            if (n !== GameTypeEnums_1.MjGameType.Travel && n !== GameTypeEnums_1.MjGameType.DailyChallenge) {
                a();
                return;
            }
            var o = null === (r = t.args) || void 0 === r ? void 0 : r[0];
            if (this._getTaskCardResName() === o) {
                a();
                return;
            }
            if (/^[tb][1-9]$/.test(o)) {
                var i = this.localData[n];
                if (!i || 0 === Object.keys(i.mapping).length) {
                    a();
                    return;
                }
                0 === Object.keys(this._currentMapping).length && (this._currentMapping = i.mapping);
                var s = "atlas/cardIconTile/" + (i.mapping[o] || o);
                a({
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
            a();
        }
        catch (t) {
            console.error("[" + CardTile6Trait_1.traitKey + "] 劫持图片失败: " + (null == t ? void 0 : t.message));
            a();
        }
    };
    var CardTile6Trait_1;
    CardTile6Trait.traitKey = "CardTile6";
    CardTile6Trait.ALL_CARDS = ["b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "t1", "t2", "t3", "t4", "t5", "t6", "t7", "t8", "t9", "W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"];
    CardTile6Trait.ALL_MODES = [GameTypeEnums_1.MjGameType.Normal, GameTypeEnums_1.MjGameType.Travel, GameTypeEnums_1.MjGameType.DailyChallenge];
    CardTile6Trait = CardTile6Trait_1 = __decorate([
        mj.trait,
        mj.class("CardTile6Trait")
    ], CardTile6Trait);
    return CardTile6Trait;
}(Trait_1.default));
exports.default = CardTile6Trait;

cc._RF.pop();