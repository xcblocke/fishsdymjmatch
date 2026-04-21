
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/core/dynamicCurve/models/ExtractModel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2NvcmUvZHluYW1pY0N1cnZlL21vZGVscy9FeHRyYWN0TW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1REFBa0Q7QUFDbEQsZ0RBQW1FO0FBRW5FO0lBQWtDLGdDQUFLO0lBQ3JDO1FBQUEsWUFDRSxpQkFBTyxTQUVSO1FBREMsS0FBSSxDQUFDLGVBQWUsRUFBRSxDQUFDOztJQUN6QixDQUFDO0lBQ0Qsc0NBQWUsR0FBZjtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQ25GLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQ3JGLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQ2pGLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3RGLENBQUM7SUFDRCxtQ0FBWSxHQUFaLFVBQWEsQ0FBQztRQUNaLE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFDRCwwQ0FBbUIsR0FBbkI7UUFDRSxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFDRCx5Q0FBa0IsR0FBbEI7UUFDRSxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFDRCxnQ0FBUyxH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aUJBQVEsQ0FBQyxhQUFhO0lBQUcsQ0FBQztJQXhJOUIsWUFBWTtRQUR4QixFQUFFLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQztPQUNaLFlBQVksQ0F5SXhCO0lBQUQsbUJBQUM7Q0F6SUQsQUF5SUMsQ0F6SWlDLGVBQUssR0F5SXRDO0FBeklZLG9DQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vZGVsIGZyb20gJy4uLy4uLy4uL2ZyYW1ld29yay9kYXRhL01vZGVsJztcbmltcG9ydCB7IFByZWZpeENhcGFiaWxpdHksIEVEQ0NvbG9yIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMvQ29tbW9uJztcbkBtai5jbGFzcyhcIkV4dHJhY3RNb2RlbFwiKVxuZXhwb3J0IGNsYXNzIEV4dHJhY3RNb2RlbCBleHRlbmRzIE1vZGVsIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmluaXREZWZhdWx0RGF0YSgpO1xuICB9XG4gIGluaXREZWZhdWx0RGF0YSgpIHtcbiAgICB0aGlzLmlzTG9jYWxFbXB0eSh0aGlzLmxvY2FsRGF0YS5sYXN0MTAwR2FtZSkgJiYgKHRoaXMubG9jYWxEYXRhLmxhc3QxMDBHYW1lID0gW10pO1xuICAgIHRoaXMuaXNMb2NhbEVtcHR5KHRoaXMubG9jYWxEYXRhLmxhc3QxMDBMZXZlbCkgJiYgKHRoaXMubG9jYWxEYXRhLmxhc3QxMDBMZXZlbCA9IFtdKTtcbiAgICB0aGlzLmlzTG9jYWxFbXB0eSh0aGlzLmxvY2FsRGF0YS5jdXN0b21LZXlzKSAmJiAodGhpcy5sb2NhbERhdGEuY3VzdG9tS2V5cyA9IFtdKTtcbiAgICB0aGlzLmlzTG9jYWxFbXB0eSh0aGlzLmxvY2FsRGF0YS5leHRyYWN0Q291bnQpICYmICh0aGlzLmxvY2FsRGF0YS5leHRyYWN0Q291bnQgPSAwKTtcbiAgfVxuICBpc0xvY2FsRW1wdHkoZSkge1xuICAgIHJldHVybiBudWxsID09IGUgfHwgXCJcIiA9PT0gZTtcbiAgfVxuICBnZXRMaW1pdExldmVsUmVjb3JkKCkge1xuICAgIHJldHVybiAxMDA7XG4gIH1cbiAgZ2V0TGltaXRHYW1lUmVjb3JkKCkge1xuICAgIHJldHVybiAxMDA7XG4gIH1cbiAgZ2FtZVN0YXJ0KGUpIHtcbiAgICB2YXIgdCA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZSksIHtcbiAgICAgICAgc2h1ZmZsZTogMCxcbiAgICAgICAgcmVwbGF5OiAwLFxuICAgICAgICBwYXNzVGltZTogMFxuICAgICAgfSksXG4gICAgICBvID0gdGhpcy5sb2NhbERhdGEubGFzdDEwMExldmVsO1xuICAgIG8udW5zaGlmdCh0KTtcbiAgICB2YXIgbiA9IHRoaXMuZ2V0TGltaXRMZXZlbFJlY29yZCgpO1xuICAgIG8ubGVuZ3RoID4gbiAmJiBvLnNwbGljZShuKTtcbiAgICB0aGlzLmxvY2FsRGF0YS5sYXN0MTAwTGV2ZWwgPSBvO1xuICAgIHRoaXMubG9jYWxEYXRhLmV4dHJhY3RDb3VudCsrO1xuICAgIHRoaXMubG9nSW5mbyhcIuWFs+WNoeW8gOWniyzmnKzlhbPmlbDmja46IFwiICsgSlNPTi5zdHJpbmdpZnkodCkpO1xuICB9XG4gIGdhbWVSZXBsYXkoKSB7XG4gICAgaWYgKCEodGhpcy5sb2NhbERhdGEubGFzdDEwMExldmVsLmxlbmd0aCA8PSAwKSkge1xuICAgICAgdmFyIGUgPSB0aGlzLmxvY2FsRGF0YS5sYXN0MTAwTGV2ZWw7XG4gICAgICBlWzBdLnJlcGxheSsrO1xuICAgICAgdGhpcy5sb2NhbERhdGEubGFzdDEwMExldmVsID0gZTtcbiAgICB9XG4gIH1cbiAgdXNlU2h1ZmZsZSgpIHtcbiAgICBpZiAoISh0aGlzLmxvY2FsRGF0YS5sYXN0MTAwTGV2ZWwubGVuZ3RoIDw9IDApKSB7XG4gICAgICB2YXIgZSA9IHRoaXMubG9jYWxEYXRhLmxhc3QxMDBMZXZlbDtcbiAgICAgIGVbMF0uc2h1ZmZsZSsrO1xuICAgICAgdGhpcy5sb2NhbERhdGEubGFzdDEwMExldmVsID0gZTtcbiAgICB9XG4gIH1cbiAgZ2FtZUVuZChlKSB7XG4gICAgdGhpcy5hZGROZXdHYW1lUmVjb3JkKGUpO1xuICAgIHRoaXMudXBkYXRlTGFzdExldmVsUmVjb3JkKGUpO1xuICAgIHRoaXMudXBkYXRlT3RoZXJEYXRhKGUpO1xuICB9XG4gIGFkZE5ld0dhbWVSZWNvcmQoZSkge1xuICAgIGlmICghKHRoaXMubG9jYWxEYXRhLmxhc3QxMDBMZXZlbC5sZW5ndGggPD0gMCkpIHtcbiAgICAgIHZhciB0ID0gdGhpcy5sb2NhbERhdGEubGFzdDEwMExldmVsWzBdLFxuICAgICAgICBvID0gdC5sZXZlbERhdGEuaW5kZXgsXG4gICAgICAgIG4gPSB0LnJlcGxheSxcbiAgICAgICAgaSA9IHQubGV2ZWxJZCxcbiAgICAgICAgciA9IHtcbiAgICAgICAgICBpZDogaSArIFwiLVwiICsgbyArIFwiLVwiICsgbixcbiAgICAgICAgICBsZXZlbElkOiBpLFxuICAgICAgICAgIGdhbWVUaW1lOiBlLnRpbWUsXG4gICAgICAgICAgd2luOiBlLndpbixcbiAgICAgICAgICBjbGVhcjogZS5jbGVhclBhaXJcbiAgICAgICAgfTtcbiAgICAgIHRoaXMuYWRkRXh0cmFHYW1lUmVjb3JkRGF0YShyKTtcbiAgICAgIHZhciBhID0gdGhpcy5sb2NhbERhdGEubGFzdDEwMEdhbWU7XG4gICAgICBhLnVuc2hpZnQocik7XG4gICAgICB2YXIgbCA9IHRoaXMuZ2V0TGltaXRHYW1lUmVjb3JkKCk7XG4gICAgICBhLmxlbmd0aCA+IGwgJiYgYS5zcGxpY2UobCk7XG4gICAgICB0aGlzLmxvY2FsRGF0YS5sYXN0MTAwR2FtZSA9IGE7XG4gICAgfVxuICB9XG4gIGFkZEV4dHJhR2FtZVJlY29yZERhdGEoKSB7fVxuICB1cGRhdGVMYXN0TGV2ZWxSZWNvcmQoKSB7fVxuICB1cGRhdGVPdGhlckRhdGEoKSB7fVxuICBnZXRMYXN0TGV2ZWxSZWNvcmQoZSA9IDEpIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbERhdGEubGFzdDEwMExldmVsLnNsaWNlKDAsIGUpO1xuICB9XG4gIGdldExhc3RHYW1lUmVjb3JkKGUgPSAxKSB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxEYXRhLmxhc3QxMDBHYW1lLmxlbmd0aCA8IGUgPyBbXSA6IHRoaXMubG9jYWxEYXRhLmxhc3QxMDBHYW1lLnNsaWNlKDAsIGUpO1xuICB9XG4gIGdldEFsbEdhbWVUaW1lKCkge1xuICAgIHJldHVybiB0aGlzLmxvY2FsRGF0YS5sYXN0MTAwR2FtZS5yZWR1Y2UoZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgIHJldHVybiBlICsgdC5nYW1lVGltZTtcbiAgICB9LCAwKTtcbiAgfVxuICBnZXRBbGxDbGVhckNvdW50KCkge1xuICAgIHJldHVybiB0aGlzLmxvY2FsRGF0YS5sYXN0MTAwR2FtZS5yZWR1Y2UoZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgIHJldHVybiBlICsgdC5jbGVhcjtcbiAgICB9LCAwKTtcbiAgfVxuICBnZXRGaXJzdFBhc3NDb3VudChlKSB7XG4gICAgdmFyIHQgPSB0aGlzLmxvY2FsRGF0YS5sYXN0MTAwTGV2ZWw7XG4gICAgcmV0dXJuIHQubGVuZ3RoIDw9IDAgPyAwIDogKHQgPSBlID8gdCA6IHQuc2xpY2UoMSkpLmZpbHRlcihmdW5jdGlvbiAoZSkge1xuICAgICAgcmV0dXJuIDAgPT09IGUucmVwbGF5O1xuICAgIH0pLmxlbmd0aDtcbiAgfVxuICBnZXRFeHBlY3RlZEZpcnN0UGFzc0NvdW50KCkge1xuICAgIHJldHVybiB0aGlzLmxvY2FsRGF0YS5sYXN0MTAwTGV2ZWwucmVkdWNlKGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICByZXR1cm4gZSArIHQubGV2ZWxEYXRhLnJhdGVTdWNjZXNzO1xuICAgIH0sIDApO1xuICB9XG4gIGNhY2hlRGF0YShlLCB0KSB7XG4gICAgdGhpcy5sb2NhbERhdGFbZV0gPSB0O1xuICAgIHZhciBvID0gdGhpcy5sb2NhbERhdGEuY3VzdG9tS2V5cztcbiAgICBpZiAoIW8uaW5jbHVkZXMoZSkpIHtcbiAgICAgIG8ucHVzaChlKTtcbiAgICAgIHRoaXMubG9jYWxEYXRhLmN1c3RvbUtleXMgPSBvO1xuICAgIH1cbiAgfVxuICBnZXRDYWNoZWREYXRhKGUsIHQpIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbERhdGFbZV0gPyB0aGlzLmxvY2FsRGF0YVtlXSA6IHQ7XG4gIH1cbiAgcmVzZXRDYXBhYmlsaXR5RGF0YShlKSB7XG4gICAgdmFyIHQsXG4gICAgICBvLFxuICAgICAgbiA9IHRoaXMubG9jYWxEYXRhLmN1c3RvbUtleXM7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIGkgPSBfX3ZhbHVlcyhuKSwgciA9IGkubmV4dCgpOyAhci5kb25lOyByID0gaS5uZXh0KCkpIHtcbiAgICAgICAgdmFyIGEgPSByLnZhbHVlO1xuICAgICAgICBhLnN0YXJ0c1dpdGgoUHJlZml4Q2FwYWJpbGl0eSkgJiYgKHRoaXMubG9jYWxEYXRhW2FdID0gZSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdCA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHIgJiYgIXIuZG9uZSAmJiAobyA9IGkucmV0dXJuKSAmJiBvLmNhbGwoaSk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAodCkgdGhyb3cgdC5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgbG9nSW5mbyhlLCB0ID0gRURDQ29sb3IuRVhUUkFDVF9NT0RFTCkge31cbn0iXX0=