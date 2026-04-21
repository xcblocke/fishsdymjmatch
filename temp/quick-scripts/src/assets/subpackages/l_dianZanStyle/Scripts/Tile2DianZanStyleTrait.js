"use strict";
cc._RF.push(module, 'c3b74/wOB9ENavLLsebK6/z', 'Tile2DianZanStyleTrait');
// subpackages/l_dianZanStyle/Scripts/Tile2DianZanStyleTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var Tile2DianZanStyleTrait = /** @class */ (function (_super) {
    __extends(Tile2DianZanStyleTrait, _super);
    function Tile2DianZanStyleTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Tile2DianZanStyleTrait.prototype, "styleCount", {
        get: function () {
            var t;
            return (null === (t = this.traitData) || void 0 === t ? void 0 : t.styleCount) || 5;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tile2DianZanStyleTrait.prototype, "switchInterval", {
        get: function () {
            var t;
            return (null === (t = this.traitData) || void 0 === t ? void 0 : t.switchInterval) || 5;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tile2DianZanStyleTrait.prototype, "animPrefix", {
        get: function () {
            var t;
            return (null === (t = this.traitData) || void 0 === t ? void 0 : t.animPrefix) || "in_";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tile2DianZanStyleTrait.prototype, "bundleName", {
        get: function () {
            var t;
            return (null === (t = this.traitData) || void 0 === t ? void 0 : t.spineBundle) || "l_dianZanStyle";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tile2DianZanStyleTrait.prototype, "spinePath", {
        get: function () {
            var t;
            return (null === (t = this.traitData) || void 0 === t ? void 0 : t.spinePath) || "spine/dianzan_styles";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tile2DianZanStyleTrait.prototype, "scale", {
        get: function () {
            var t;
            return (null === (t = this.traitData) || void 0 === t ? void 0 : t.scale) || 1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tile2DianZanStyleTrait.prototype, "gameTypes", {
        get: function () {
            var t;
            return (null === (t = this.traitData) || void 0 === t ? void 0 : t.gameTypes) || [];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tile2DianZanStyleTrait.prototype, "levelLimit", {
        get: function () {
            var t;
            return (null === (t = this.traitData) || void 0 === t ? void 0 : t.levelLimit) || 1;
        },
        enumerable: false,
        configurable: true
    });
    Tile2DianZanStyleTrait.prototype.getCurrentGameType = function () {
        return UserModel_1.default.getInstance().getCurrentGameType();
    };
    Tile2DianZanStyleTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    Tile2DianZanStyleTrait.prototype.isMatchGameType = function (t) {
        var e = UserModel_1.default.getInstance().getCurrentGameData();
        if (1 === ((null == e ? void 0 : e.getLevelId()) || 0))
            return false;
        var a = this.gameTypes;
        return !a || 0 === a.length || a.includes(t);
    };
    Tile2DianZanStyleTrait.prototype.getStyleData = function () {
        this.localData.modeData || (this.localData.modeData = {});
        var t = this.getCurrentGameType();
        if (!this.localData.modeData[t]) {
            this.localData.modeData[t] = {
                gameCount: 0,
                currentGameStyleIndex: 0,
                lastPlayedStyleIndex: 0
            };
            this.localData.modeData = this.localData.modeData;
        }
        return this.localData.modeData[t];
    };
    Tile2DianZanStyleTrait.prototype.saveStyleData = function (t) {
        var e = this.getCurrentGameType();
        this.localData.modeData[e] = t;
        this.localData.modeData = this.localData.modeData;
    };
    Tile2DianZanStyleTrait.prototype.onT2DianZCheck_isDianZan = function (t, e) {
        var a, r = (null === (a = UserModel_1.default.getInstance().getCurrentGameData()) || void 0 === a ? void 0 : a.getLevelId()) || 0;
        e({
            isBreak: true,
            returnType: TraitCallbackReturnType.return,
            returnVal: r > this.levelLimit
        });
    };
    Tile2DianZanStyleTrait.prototype.onGsListener_onNewGame = function (t, e) {
        this.isMatchGameType(this.getCurrentGameType()) && this.increaseGameCount();
        e();
    };
    Tile2DianZanStyleTrait.prototype.onGsListener_onReplayGame = function (t, e) {
        this.isMatchGameType(this.getCurrentGameType()) && this.increaseGameCount();
        e();
    };
    Tile2DianZanStyleTrait.prototype.increaseGameCount = function () {
        var t = this.getStyleData();
        t.gameCount += 1;
        if (t.currentGameStyleIndex > 0) {
            t.lastPlayedStyleIndex = t.currentGameStyleIndex;
            t.currentGameStyleIndex = 0;
        }
        this.saveStyleData(t);
    };
    Tile2DianZanStyleTrait.prototype.onTile2DZanBhv_spUrl = function (t, e) {
        var a;
        if (this.isMatchGameType(this.getCurrentGameType())) {
            null === (a = t.args) || void 0 === a || a[0];
            e({
                isBreak: true,
                returnType: TraitCallbackReturnType.return,
                returnVal: this.spinePath
            });
        }
        else
            e();
    };
    Tile2DianZanStyleTrait.prototype.onTile2DZanBhv_spBundle = function (t, e) {
        var a;
        if (this.isMatchGameType(this.getCurrentGameType())) {
            null === (a = t.args) || void 0 === a || a[0];
            e({
                isBreak: true,
                returnType: TraitCallbackReturnType.return,
                returnVal: this.bundleName
            });
        }
        else
            e();
    };
    Tile2DianZanStyleTrait.prototype.onTile2DZanBhv_scale = function (t, e) {
        if (this.isMatchGameType(this.getCurrentGameType())) {
            e({
                isBreak: true,
                returnType: TraitCallbackReturnType.return,
                returnVal: this.scale
            });
        }
        else {
            e();
        }
    };
    Tile2DianZanStyleTrait.prototype.onTile2DZanBhv_animName = function (t, e) {
        var a;
        if (this.isMatchGameType(this.getCurrentGameType())) {
            null === (a = t.args) || void 0 === a || a[0], this.getStyleData().lastPlayedStyleIndex;
            var r = this.getNextStyleIndex(), n = "" + this.animPrefix + r;
            e({
                isBreak: true,
                returnType: TraitCallbackReturnType.return,
                returnVal: n
            });
        }
        else
            e();
    };
    Tile2DianZanStyleTrait.prototype.getNextStyleIndex = function () {
        var t, e = this.getStyleData();
        if (0 !== e.currentGameStyleIndex)
            return e.currentGameStyleIndex;
        t = e.gameCount % this.switchInterval == 1 || 0 === e.lastPlayedStyleIndex ? this.randomStyleExcludeLast(e) : e.lastPlayedStyleIndex;
        e.currentGameStyleIndex = t;
        this.saveStyleData(e);
        return t;
    };
    Tile2DianZanStyleTrait.prototype.randomStyleExcludeLast = function (t) {
        var e = (t || this.getStyleData()).lastPlayedStyleIndex || 0, a = Array.from({
            length: this.styleCount
        }, function (t, e) {
            return e + 1;
        }), r = a.indexOf(e);
        -1 !== r && a.splice(r, 1);
        return a[Math.floor(Math.random() * a.length)];
    };
    Tile2DianZanStyleTrait.traitKey = "Tile2DianZanStyle";
    Tile2DianZanStyleTrait = __decorate([
        mj.trait,
        mj.class("Tile2DianZanStyleTrait")
    ], Tile2DianZanStyleTrait);
    return Tile2DianZanStyleTrait;
}(Trait_1.default));
exports.default = Tile2DianZanStyleTrait;

cc._RF.pop();