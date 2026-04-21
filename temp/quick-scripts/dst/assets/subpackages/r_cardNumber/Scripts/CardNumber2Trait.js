
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_cardNumber/Scripts/CardNumber2Trait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '31934DlGcVFRr2Ueaw3cCVk', 'CardNumber2Trait');
// subpackages/r_cardNumber/Scripts/CardNumber2Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var CardUtil_1 = require("../../../Scripts/gamePlay/user/CardUtil");
var CardNumber2Trait = /** @class */ (function (_super) {
    __extends(CardNumber2Trait, _super);
    function CardNumber2Trait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._currentMapping = {};
        return _this;
    }
    CardNumber2Trait_1 = CardNumber2Trait;
    CardNumber2Trait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    CardNumber2Trait.prototype._getTaskCardResName = function () {
        var t, r = mj.getClassByName("TaskModel");
        return null === (t = null == r ? void 0 : r.getInstance()) || void 0 === t ? void 0 : t.getTaskCardResName();
    };
    CardNumber2Trait.prototype._generateRandomMapping = function () {
        var t, r = {}, a = CardNumber2Trait_1.ALL_CARDS.slice(0, 18).filter(function (t) {
            return t && t.length > 0;
        });
        if (18 !== a.length)
            return r;
        var n = this._getTaskCardResName(), o = CardNumber2Trait_1.ALL_CARDS.filter(function (t) {
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
    CardNumber2Trait.prototype._getOrCreateMapping = function (t) {
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
    CardNumber2Trait.prototype._getCurrentGameMode = function () {
        return UserModel_1.default.getInstance().getCurrentGameType() || GameTypeEnums_1.MjGameType.Normal;
    };
    CardNumber2Trait.prototype.onGsListener_onNewGame = function (t, r) {
        try {
            if (UserModel_1.default.getInstance().normalData.getLevelId() < 3) {
                r();
                return;
            }
            var a = this._getCurrentGameMode();
            if (a !== GameTypeEnums_1.MjGameType.Travel && a !== GameTypeEnums_1.MjGameType.DailyChallenge) {
                r();
                return;
            }
            this._currentMapping = this._getOrCreateMapping(a);
        }
        catch (t) {
            console.error("[" + CardNumber2Trait_1.traitKey + "] 关卡切换处理失败: " + (null == t ? void 0 : t.message));
        }
        r();
    };
    CardNumber2Trait.prototype.onCardUtil_atlasPathBundle = function (t, r) {
        var a;
        try {
            var n = this._getCurrentGameMode();
            if (n !== GameTypeEnums_1.MjGameType.Travel && n !== GameTypeEnums_1.MjGameType.DailyChallenge) {
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
                        bundleName: CardNumber2Trait_1.BUNDLE_NAME,
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
            console.error("[" + CardNumber2Trait_1.traitKey + "] 劫持图片失败: " + (null == t ? void 0 : t.message));
            r();
        }
    };
    var CardNumber2Trait_1;
    CardNumber2Trait.traitKey = "CardNumber2";
    CardNumber2Trait.BUNDLE_NAME = "r_cardNumber";
    CardNumber2Trait.ALL_CARDS = ["b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "t1", "t2", "t3", "t4", "t5", "t6", "t7", "t8", "t9", "W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"];
    CardNumber2Trait = CardNumber2Trait_1 = __decorate([
        mj.trait,
        mj.class("CardNumber2Trait")
    ], CardNumber2Trait);
    return CardNumber2Trait;
}(Trait_1.default));
exports.default = CardNumber2Trait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX2NhcmROdW1iZXIvU2NyaXB0cy9DYXJkTnVtYmVyMlRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw4RUFBd0Y7QUFDeEYsZ0VBQTJEO0FBQzNELHdGQUFvRjtBQUNwRixzRUFBaUU7QUFDakUsb0VBQStEO0FBRy9EO0lBQThDLG9DQUFLO0lBQW5EO1FBQUEscUVBOEhDO1FBN0hDLHFCQUFlLEdBQUcsRUFBRSxDQUFDOztJQTZIdkIsQ0FBQzt5QkE5SG9CLGdCQUFnQjtJQUtuQyxpQ0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0QsOENBQW1CLEdBQW5CO1FBQ0UsSUFBSSxDQUFDLEVBQ0gsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDckMsT0FBTyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQy9HLENBQUM7SUFDRCxpREFBc0IsR0FBdEI7UUFDRSxJQUFJLENBQUMsRUFDSCxDQUFDLEdBQUcsRUFBRSxFQUNOLENBQUMsR0FBRyxrQkFBZ0IsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO1lBQzVELE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDO1FBQ0wsSUFBSSxFQUFFLEtBQUssQ0FBQyxD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dCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0TWFuYWdlcic7XG5pbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IHsgTWpHYW1lVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9zaW11bGF0b3IvY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvdXNlci9Vc2VyTW9kZWwnO1xuaW1wb3J0IENhcmRVdGlsIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvdXNlci9DYXJkVXRpbCc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIkNhcmROdW1iZXIyVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcmROdW1iZXIyVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIF9jdXJyZW50TWFwcGluZyA9IHt9O1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIkNhcmROdW1iZXIyXCI7XG4gIHN0YXRpYyBCVU5ETEVfTkFNRSA9IFwicl9jYXJkTnVtYmVyXCI7XG4gIHN0YXRpYyBBTExfQ0FSRFMgPSBbXCJiMVwiLCBcImIyXCIsIFwiYjNcIiwgXCJiNFwiLCBcImI1XCIsIFwiYjZcIiwgXCJiN1wiLCBcImI4XCIsIFwiYjlcIiwgXCJ0MVwiLCBcInQyXCIsIFwidDNcIiwgXCJ0NFwiLCBcInQ1XCIsIFwidDZcIiwgXCJ0N1wiLCBcInQ4XCIsIFwidDlcIiwgXCJXMVwiLCBcIlcyXCIsIFwiVzNcIiwgXCJXNFwiLCBcIlc1XCIsIFwiVzZcIiwgXCJXN1wiLCBcIlc4XCJdO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gIH1cbiAgX2dldFRhc2tDYXJkUmVzTmFtZSgpIHtcbiAgICB2YXIgdCxcbiAgICAgIHIgPSBtai5nZXRDbGFzc0J5TmFtZShcIlRhc2tNb2RlbFwiKTtcbiAgICByZXR1cm4gbnVsbCA9PT0gKHQgPSBudWxsID09IHIgPyB2b2lkIDAgOiByLmdldEluc3RhbmNlKCkpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQuZ2V0VGFza0NhcmRSZXNOYW1lKCk7XG4gIH1cbiAgX2dlbmVyYXRlUmFuZG9tTWFwcGluZygpIHtcbiAgICB2YXIgdCxcbiAgICAgIHIgPSB7fSxcbiAgICAgIGEgPSBDYXJkTnVtYmVyMlRyYWl0LkFMTF9DQVJEUy5zbGljZSgwLCAxOCkuZmlsdGVyKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHJldHVybiB0ICYmIHQubGVuZ3RoID4gMDtcbiAgICAgIH0pO1xuICAgIGlmICgxOCAhPT0gYS5sZW5ndGgpIHJldHVybiByO1xuICAgIHZhciBuID0gdGhpcy5fZ2V0VGFza0NhcmRSZXNOYW1lKCksXG4gICAgICBvID0gQ2FyZE51bWJlcjJUcmFpdC5BTExfQ0FSRFMuZmlsdGVyKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHJldHVybiB0ICYmIHQubGVuZ3RoID4gMDtcbiAgICAgIH0pO1xuICAgIG4gJiYgKG8gPSBvLmZpbHRlcihmdW5jdGlvbiAodCkge1xuICAgICAgcmV0dXJuIHQgIT09IG47XG4gICAgfSkpO1xuICAgIGlmIChvLmxlbmd0aCA8IDE4KSByZXR1cm4gcjtcbiAgICBmb3IgKHZhciBsID0gby5sZW5ndGggLSAxOyBsID4gMDsgbC0tKSB7XG4gICAgICB2YXIgcyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChsICsgMSkpO1xuICAgICAgdCA9IF9fcmVhZChbb1tzXSwgb1tsXV0sIDIpLCBvW2xdID0gdFswXSwgb1tzXSA9IHRbMV07XG4gICAgfVxuICAgIGZvciAobCA9IDA7IGwgPCAxODsgbCsrKSByW2FbbF1dID0gb1tsXTtcbiAgICByZXR1cm4gcjtcbiAgfVxuICBfZ2V0T3JDcmVhdGVNYXBwaW5nKHQpIHtcbiAgICBpZiAoIXRoaXMubG9jYWxEYXRhW3RdKSB7XG4gICAgICB0aGlzLmxvY2FsRGF0YVt0XSA9IHtcbiAgICAgICAgbWFwcGluZzoge31cbiAgICAgIH07XG4gICAgICB0aGlzLmxvY2FsRGF0YVt0XSA9IHRoaXMubG9jYWxEYXRhW3RdO1xuICAgIH1cbiAgICB2YXIgciA9IHRoaXMubG9jYWxEYXRhW3RdLFxuICAgICAgZSA9IHRoaXMuX2dlbmVyYXRlUmFuZG9tTWFwcGluZygpO1xuICAgIGlmICgwID09PSBPYmplY3Qua2V5cyhlKS5sZW5ndGgpIHJldHVybiB7fTtcbiAgICByLm1hcHBpbmcgPSBlO1xuICAgIHRoaXMubG9jYWxEYXRhW3RdID0gdGhpcy5sb2NhbERhdGFbdF07XG4gICAgcmV0dXJuIGU7XG4gIH1cbiAgX2dldEN1cnJlbnRHYW1lTW9kZSgpIHtcbiAgICByZXR1cm4gVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0Q3VycmVudEdhbWVUeXBlKCkgfHwgTWpHYW1lVHlwZS5Ob3JtYWw7XG4gIH1cbiAgb25Hc0xpc3RlbmVyX29uTmV3R2FtZSh0LCByKSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5ub3JtYWxEYXRhLmdldExldmVsSWQoKSA8IDMpIHtcbiAgICAgICAgcigpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgYSA9IHRoaXMuX2dldEN1cnJlbnRHYW1lTW9kZSgpO1xuICAgICAgaWYgKGEgIT09IE1qR2FtZVR5cGUuVHJhdmVsICYmIGEgIT09IE1qR2FtZVR5cGUuRGFpbHlDaGFsbGVuZ2UpIHtcbiAgICAgICAgcigpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLl9jdXJyZW50TWFwcGluZyA9IHRoaXMuX2dldE9yQ3JlYXRlTWFwcGluZyhhKTtcbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiW1wiICsgQ2FyZE51bWJlcjJUcmFpdC50cmFpdEtleSArIFwiXSDlhbPljaHliIfmjaLlpITnkIblpLHotKU6IFwiICsgKG51bGwgPT0gdCA/IHZvaWQgMCA6IHQubWVzc2FnZSkpO1xuICAgIH1cbiAgICByKCk7XG4gIH1cbiAgb25DYXJkVXRpbF9hdGxhc1BhdGhCdW5kbGUodCwgcikge1xuICAgIHZhciBhO1xuICAgIHRyeSB7XG4gICAgICB2YXIgbiA9IHRoaXMuX2dldEN1cnJlbnRHYW1lTW9kZSgpO1xuICAgICAgaWYgKG4gIT09IE1qR2FtZVR5cGUuVHJhdmVsICYmIG4gIT09IE1qR2FtZVR5cGUuRGFpbHlDaGFsbGVuZ2UpIHtcbiAgICAgICAgcigpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoVXNlck1vZGVsLmdldEluc3RhbmNlKCkubm9ybWFsRGF0YS5nZXRMZXZlbElkKCkgPCAzKSB7XG4gICAgICAgIHIoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIG8gPSBudWxsID09PSAoYSA9IHQuYXJncykgfHwgdm9pZCAwID09PSBhID8gdm9pZCAwIDogYVswXTtcbiAgICAgIGlmICh0aGlzLl9nZXRUYXNrQ2FyZFJlc05hbWUoKSA9PT0gbykge1xuICAgICAgICByKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBpID0gL15XWzEtOV0kLy50ZXN0KG8pLFxuICAgICAgICBzID0gL15bdGJdWzEtOV0kLy50ZXN0KG8pO1xuICAgICAgaWYgKGkpIHtcbiAgICAgICAgdmFyIGYgPSBcImF0bGFzL251bWJlckNhcmRJY29uL1wiICsgbztcbiAgICAgICAgcih7XG4gICAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgICAgcmV0dXJuVmFsOiB7XG4gICAgICAgICAgICBwYXRoOiBmLFxuICAgICAgICAgICAgYnVuZGxlTmFtZTogQ2FyZE51bWJlcjJUcmFpdC5CVU5ETEVfTkFNRSxcbiAgICAgICAgICAgIGZyb21BdGxhczogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChzKSB7XG4gICAgICAgIHZhciBkID0gdGhpcy5sb2NhbERhdGFbbl07XG4gICAgICAgIGlmICghZCB8fCAwID09PSBPYmplY3Qua2V5cyhkLm1hcHBpbmcpLmxlbmd0aCkge1xuICAgICAgICAgIHIoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgMCA9PT0gT2JqZWN0LmtleXModGhpcy5fY3VycmVudE1hcHBpbmcpLmxlbmd0aCAmJiAodGhpcy5fY3VycmVudE1hcHBpbmcgPSBkLm1hcHBpbmcpO1xuICAgICAgICBmID0gXCJhdGxhcy9jYXJkSWNvbi9cIiArIChkLm1hcHBpbmdbb10gfHwgbyk7XG4gICAgICAgIHIoe1xuICAgICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICAgIHJldHVyblZhbDoge1xuICAgICAgICAgICAgcGF0aDogZixcbiAgICAgICAgICAgIGJ1bmRsZU5hbWU6IENhcmRVdGlsLmdldENhcmRCdW5kbGVOYW1lKCksXG4gICAgICAgICAgICBmcm9tQXRsYXM6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICByKCk7XG4gICAgfSBjYXRjaCAodCkge1xuICAgICAgY29uc29sZS5lcnJvcihcIltcIiArIENhcmROdW1iZXIyVHJhaXQudHJhaXRLZXkgKyBcIl0g5Yqr5oyB5Zu+54mH5aSx6LSlOiBcIiArIChudWxsID09IHQgPyB2b2lkIDAgOiB0Lm1lc3NhZ2UpKTtcbiAgICAgIHIoKTtcbiAgICB9XG4gIH1cbn0iXX0=