"use strict";
cc._RF.push(module, '8fa34eDnl9Nxr2x6r0gkFJ3', 'ExtractModel');
// Scripts/core/dynamicCurve/models/ExtractModel.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtractModel = void 0;
var Model_1 = require("../../../framework/data/Model");
var Common_1 = require("../../../types/Common");
var ExtractModel = /** @class */ (function (_super) {
    __extends(ExtractModel, _super);
    function ExtractModel() {
        var _this = _super.call(this) || this;
        _this.initDefaultData();
        return _this;
    }
    ExtractModel.prototype.initDefaultData = function () {
        this.isLocalEmpty(this.localData.last100Game) && (this.localData.last100Game = []);
        this.isLocalEmpty(this.localData.last100Level) && (this.localData.last100Level = []);
        this.isLocalEmpty(this.localData.customKeys) && (this.localData.customKeys = []);
        this.isLocalEmpty(this.localData.extractCount) && (this.localData.extractCount = 0);
    };
    ExtractModel.prototype.isLocalEmpty = function (e) {
        return null == e || "" === e;
    };
    ExtractModel.prototype.getLimitLevelRecord = function () {
        return 100;
    };
    ExtractModel.prototype.getLimitGameRecord = function () {
        return 100;
    };
    ExtractModel.prototype.gameStart = function (e) {
        var t = Object.assign(Object.assign({}, e), {
            shuffle: 0,
            replay: 0,
            passTime: 0
        }), o = this.localData.last100Level;
        o.unshift(t);
        var n = this.getLimitLevelRecord();
        o.length > n && o.splice(n);
        this.localData.last100Level = o;
        this.localData.extractCount++;
        this.logInfo("关卡开始,本关数据: " + JSON.stringify(t));
    };
    ExtractModel.prototype.gameReplay = function () {
        if (!(this.localData.last100Level.length <= 0)) {
            var e = this.localData.last100Level;
            e[0].replay++;
            this.localData.last100Level = e;
        }
    };
    ExtractModel.prototype.useShuffle = function () {
        if (!(this.localData.last100Level.length <= 0)) {
            var e = this.localData.last100Level;
            e[0].shuffle++;
            this.localData.last100Level = e;
        }
    };
    ExtractModel.prototype.gameEnd = function (e) {
        this.addNewGameRecord(e);
        this.updateLastLevelRecord(e);
        this.updateOtherData(e);
    };
    ExtractModel.prototype.addNewGameRecord = function (e) {
        if (!(this.localData.last100Level.length <= 0)) {
            var t = this.localData.last100Level[0], o = t.levelData.index, n = t.replay, i = t.levelId, r = {
                id: i + "-" + o + "-" + n,
                levelId: i,
                gameTime: e.time,
                win: e.win,
                clear: e.clearPair
            };
            this.addExtraGameRecordData(r);
            var a = this.localData.last100Game;
            a.unshift(r);
            var l = this.getLimitGameRecord();
            a.length > l && a.splice(l);
            this.localData.last100Game = a;
        }
    };
    ExtractModel.prototype.addExtraGameRecordData = function () { };
    ExtractModel.prototype.updateLastLevelRecord = function () { };
    ExtractModel.prototype.updateOtherData = function () { };
    ExtractModel.prototype.getLastLevelRecord = function (e) {
        if (e === void 0) { e = 1; }
        return this.localData.last100Level.slice(0, e);
    };
    ExtractModel.prototype.getLastGameRecord = function (e) {
        if (e === void 0) { e = 1; }
        return this.localData.last100Game.length < e ? [] : this.localData.last100Game.slice(0, e);
    };
    ExtractModel.prototype.getAllGameTime = function () {
        return this.localData.last100Game.reduce(function (e, t) {
            return e + t.gameTime;
        }, 0);
    };
    ExtractModel.prototype.getAllClearCount = function () {
        return this.localData.last100Game.reduce(function (e, t) {
            return e + t.clear;
        }, 0);
    };
    ExtractModel.prototype.getFirstPassCount = function (e) {
        var t = this.localData.last100Level;
        return t.length <= 0 ? 0 : (t = e ? t : t.slice(1)).filter(function (e) {
            return 0 === e.replay;
        }).length;
    };
    ExtractModel.prototype.getExpectedFirstPassCount = function () {
        return this.localData.last100Level.reduce(function (e, t) {
            return e + t.levelData.rateSuccess;
        }, 0);
    };
    ExtractModel.prototype.cacheData = function (e, t) {
        this.localData[e] = t;
        var o = this.localData.customKeys;
        if (!o.includes(e)) {
            o.push(e);
            this.localData.customKeys = o;
        }
    };
    ExtractModel.prototype.getCachedData = function (e, t) {
        return this.localData[e] ? this.localData[e] : t;
    };
    ExtractModel.prototype.resetCapabilityData = function (e) {
        var t, o, n = this.localData.customKeys;
        try {
            for (var i = __values(n), r = i.next(); !r.done; r = i.next()) {
                var a = r.value;
                a.startsWith(Common_1.PrefixCapability) && (this.localData[a] = e);
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                r && !r.done && (o = i.return) && o.call(i);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
    };
    ExtractModel.prototype.logInfo = function (e, t) {
        if (t === void 0) { t = Common_1.EDCColor.EXTRACT_MODEL; }
    };
    ExtractModel = __decorate([
        mj.class("ExtractModel")
    ], ExtractModel);
    return ExtractModel;
}(Model_1.default));
exports.ExtractModel = ExtractModel;

cc._RF.pop();