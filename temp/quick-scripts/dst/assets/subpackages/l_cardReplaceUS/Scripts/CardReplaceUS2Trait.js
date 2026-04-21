
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_cardReplaceUS/Scripts/CardReplaceUS2Trait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '29487BczvFCoLr9qer+p4ei', 'CardReplaceUS2Trait');
// subpackages/l_cardReplaceUS/Scripts/CardReplaceUS2Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var CardUtil_1 = require("../../../Scripts/gamePlay/user/CardUtil");
var CardReplaceUS2Trait = /** @class */ (function (_super) {
    __extends(CardReplaceUS2Trait, _super);
    function CardReplaceUS2Trait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._currentMapping = {};
        return _this;
    }
    CardReplaceUS2Trait_1 = CardReplaceUS2Trait;
    CardReplaceUS2Trait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._checkCountryCondition();
    };
    CardReplaceUS2Trait.prototype._checkCountryCondition = function () {
        var t = this._tm.getConditionInfo(), e = null == t ? void 0 : t.country;
        e && "" !== e || (this.eventEnabled = false);
    };
    CardReplaceUS2Trait.prototype._getTaskCardResName = function () {
        var t, e = mj.getClassByName("TaskModel");
        return null === (t = null == e ? void 0 : e.getInstance()) || void 0 === t ? void 0 : t.getTaskCardResName();
    };
    CardReplaceUS2Trait.prototype._generateRandomMapping = function () {
        var t, e = {}, a = CardReplaceUS2Trait_1.ALL_CARDS.slice(0, 18).filter(function (t) {
            return t && t.length > 0;
        });
        if (18 !== a.length)
            return e;
        var n = this._getTaskCardResName(), o = CardReplaceUS2Trait_1.ALL_CARDS.filter(function (t) {
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
    CardReplaceUS2Trait.prototype._getOrCreateMapping = function (t) {
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
    CardReplaceUS2Trait.prototype._getCurrentGameMode = function () {
        return UserModel_1.default.getInstance().getCurrentGameType() || GameTypeEnums_1.MjGameType.Normal;
    };
    CardReplaceUS2Trait.prototype.onGsListener_onNewGame = function (t, e) {
        try {
            if (UserModel_1.default.getInstance().getMainGameData().getLevelId() < 1) {
                e();
                return;
            }
            var a = this._getCurrentGameMode();
            if (a !== GameTypeEnums_1.MjGameType.Travel && a !== GameTypeEnums_1.MjGameType.DailyChallenge) {
                e();
                return;
            }
            this._currentMapping = this._getOrCreateMapping(a);
        }
        catch (t) {
            console.error("[" + CardReplaceUS2Trait_1.traitKey + "] 关卡切换处理失败: " + (null == t ? void 0 : t.message));
        }
        e();
    };
    CardReplaceUS2Trait.prototype.onCardUtil_atlasPathBundle = function (t, e) {
        var a;
        try {
            var n = this._getCurrentGameMode();
            if (n !== GameTypeEnums_1.MjGameType.Travel && n !== GameTypeEnums_1.MjGameType.DailyChallenge) {
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
            console.error("[" + CardReplaceUS2Trait_1.traitKey + "] 劫持图片失败: " + (null == t ? void 0 : t.message));
            e();
        }
    };
    var CardReplaceUS2Trait_1;
    CardReplaceUS2Trait.traitKey = "CardReplaceUS2";
    CardReplaceUS2Trait.BUNDLE_NAME = "l_cardReplaceUS";
    CardReplaceUS2Trait.ALL_CARDS = ["b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "t1", "t2", "t3", "t4", "t5", "t6", "t7", "t8", "t9", "W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"];
    CardReplaceUS2Trait = CardReplaceUS2Trait_1 = __decorate([
        mj.trait,
        mj.class("CardReplaceUS2Trait")
    ], CardReplaceUS2Trait);
    return CardReplaceUS2Trait;
}(Trait_1.default));
exports.default = CardReplaceUS2Trait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2NhcmRSZXBsYWNlVVMvU2NyaXB0cy9DYXJkUmVwbGFjZVVTMlRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw4RUFBd0Y7QUFDeEYsZ0VBQTJEO0FBQzNELHdGQUFvRjtBQUNwRixzRUFBaUU7QUFDakUsb0VBQStEO0FBRy9EO0lBQWlELHVDQUFLO0lBQXREO1FBQUEscUVBcUhDO1FBcEhDLHFCQUFlLEdBQUcsRUFBRSxDQUFDOztJQW9IdkIsQ0FBQzs0QkFySG9CLG1CQUFtQjtJQUt0QyxvQ0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBQ0Qsb0RBQXNCLEdBQXRCO1FBQ0UsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxFQUNqQyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7UUFDckMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFDRCxpREFBbUIsR0FBbkI7UUFDRSxJQUFJLENBQUMsRUFDSCxDQUFDLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNyQyxPQUFPLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFD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cmFpdENhbGxiYWNrUmV0dXJuVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0TWFuYWdlcic7XG5pbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IHsgTWpHYW1lVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9zaW11bGF0b3IvY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvdXNlci9Vc2VyTW9kZWwnO1xuaW1wb3J0IENhcmRVdGlsIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvdXNlci9DYXJkVXRpbCc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIkNhcmRSZXBsYWNlVVMyVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcmRSZXBsYWNlVVMyVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIF9jdXJyZW50TWFwcGluZyA9IHt9O1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIkNhcmRSZXBsYWNlVVMyXCI7XG4gIHN0YXRpYyBCVU5ETEVfTkFNRSA9IFwibF9jYXJkUmVwbGFjZVVTXCI7XG4gIHN0YXRpYyBBTExfQ0FSRFMgPSBbXCJiMVwiLCBcImIyXCIsIFwiYjNcIiwgXCJiNFwiLCBcImI1XCIsIFwiYjZcIiwgXCJiN1wiLCBcImI4XCIsIFwiYjlcIiwgXCJ0MVwiLCBcInQyXCIsIFwidDNcIiwgXCJ0NFwiLCBcInQ1XCIsIFwidDZcIiwgXCJ0N1wiLCBcInQ4XCIsIFwidDlcIiwgXCJXMVwiLCBcIlcyXCIsIFwiVzNcIiwgXCJXNFwiLCBcIlc1XCIsIFwiVzZcIiwgXCJXN1wiLCBcIlc4XCJdO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5fY2hlY2tDb3VudHJ5Q29uZGl0aW9uKCk7XG4gIH1cbiAgX2NoZWNrQ291bnRyeUNvbmRpdGlvbigpIHtcbiAgICB2YXIgdCA9IHRoaXMuX3RtLmdldENvbmRpdGlvbkluZm8oKSxcbiAgICAgIGUgPSBudWxsID09IHQgPyB2b2lkIDAgOiB0LmNvdW50cnk7XG4gICAgZSAmJiBcIlwiICE9PSBlIHx8ICh0aGlzLmV2ZW50RW5hYmxlZCA9IGZhbHNlKTtcbiAgfVxuICBfZ2V0VGFza0NhcmRSZXNOYW1lKCkge1xuICAgIHZhciB0LFxuICAgICAgZSA9IG1qLmdldENsYXNzQnlOYW1lKFwiVGFza01vZGVsXCIpO1xuICAgIHJldHVybiBudWxsID09PSAodCA9IG51bGwgPT0gZSA/IHZvaWQgMCA6IGUuZ2V0SW5zdGFuY2UoKSkgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC5nZXRUYXNrQ2FyZFJlc05hbWUoKTtcbiAgfVxuICBfZ2VuZXJhdGVSYW5kb21NYXBwaW5nKCkge1xuICAgIHZhciB0LFxuICAgICAgZSA9IHt9LFxuICAgICAgYSA9IENhcmRSZXBsYWNlVVMyVHJhaXQuQUxMX0NBUkRTLnNsaWNlKDAsIDE4KS5maWx0ZXIoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuIHQgJiYgdC5sZW5ndGggPiAwO1xuICAgICAgfSk7XG4gICAgaWYgKDE4ICE9PSBhLmxlbmd0aCkgcmV0dXJuIGU7XG4gICAgdmFyIG4gPSB0aGlzLl9nZXRUYXNrQ2FyZFJlc05hbWUoKSxcbiAgICAgIG8gPSBDYXJkUmVwbGFjZVVTMlRyYWl0LkFMTF9DQVJEUy5maWx0ZXIoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuIHQgJiYgdC5sZW5ndGggPiAwO1xuICAgICAgfSk7XG4gICAgbiAmJiAobyA9IG8uZmlsdGVyKGZ1bmN0aW9uICh0KSB7XG4gICAgICByZXR1cm4gdCAhPT0gbjtcbiAgICB9KSk7XG4gICAgaWYgKG8ubGVuZ3RoIDwgMTgpIHJldHVybiBlO1xuICAgIGZvciAodmFyIGwgPSBvLmxlbmd0aCAtIDE7IGwgPiAwOyBsLS0pIHtcbiAgICAgIHZhciBzID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGwgKyAxKSk7XG4gICAgICB0ID0gX19yZWFkKFtvW3NdLCBvW2xdXSwgMiksIG9bbF0gPSB0WzBdLCBvW3NdID0gdFsxXTtcbiAgICB9XG4gICAgZm9yIChsID0gMDsgbCA8IDE4OyBsKyspIGVbYVtsXV0gPSBvW2xdO1xuICAgIHJldHVybiBlO1xuICB9XG4gIF9nZXRPckNyZWF0ZU1hcHBpbmcodCkge1xuICAgIGlmICghdGhpcy5sb2NhbERhdGFbdF0pIHtcbiAgICAgIHRoaXMubG9jYWxEYXRhW3RdID0ge1xuICAgICAgICBtYXBwaW5nOiB7fVxuICAgICAgfTtcbiAgICAgIHRoaXMubG9jYWxEYXRhW3RdID0gdGhpcy5sb2NhbERhdGFbdF07XG4gICAgfVxuICAgIHZhciBlID0gdGhpcy5sb2NhbERhdGFbdF0sXG4gICAgICByID0gdGhpcy5fZ2VuZXJhdGVSYW5kb21NYXBwaW5nKCk7XG4gICAgaWYgKDAgPT09IE9iamVjdC5rZXlzKHIpLmxlbmd0aCkgcmV0dXJuIHt9O1xuICAgIGUubWFwcGluZyA9IHI7XG4gICAgdGhpcy5sb2NhbERhdGFbdF0gPSB0aGlzLmxvY2FsRGF0YVt0XTtcbiAgICByZXR1cm4gcjtcbiAgfVxuICBfZ2V0Q3VycmVudEdhbWVNb2RlKCkge1xuICAgIHJldHVybiBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRDdXJyZW50R2FtZVR5cGUoKSB8fCBNakdhbWVUeXBlLk5vcm1hbDtcbiAgfVxuICBvbkdzTGlzdGVuZXJfb25OZXdHYW1lKHQsIGUpIHtcbiAgICB0cnkge1xuICAgICAgaWYgKFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldE1haW5HYW1lRGF0YSgpLmdldExldmVsSWQoKSA8IDEpIHtcbiAgICAgICAgZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgYSA9IHRoaXMuX2dldEN1cnJlbnRHYW1lTW9kZSgpO1xuICAgICAgaWYgKGEgIT09IE1qR2FtZVR5cGUuVHJhdmVsICYmIGEgIT09IE1qR2FtZVR5cGUuRGFpbHlDaGFsbGVuZ2UpIHtcbiAgICAgICAgZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLl9jdXJyZW50TWFwcGluZyA9IHRoaXMuX2dldE9yQ3JlYXRlTWFwcGluZyhhKTtcbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiW1wiICsgQ2FyZFJlcGxhY2VVUzJUcmFpdC50cmFpdEtleSArIFwiXSDlhbPljaHliIfmjaLlpITnkIblpLHotKU6IFwiICsgKG51bGwgPT0gdCA/IHZvaWQgMCA6IHQubWVzc2FnZSkpO1xuICAgIH1cbiAgICBlKCk7XG4gIH1cbiAgb25DYXJkVXRpbF9hdGxhc1BhdGhCdW5kbGUodCwgZSkge1xuICAgIHZhciBhO1xuICAgIHRyeSB7XG4gICAgICB2YXIgbiA9IHRoaXMuX2dldEN1cnJlbnRHYW1lTW9kZSgpO1xuICAgICAgaWYgKG4gIT09IE1qR2FtZVR5cGUuVHJhdmVsICYmIG4gIT09IE1qR2FtZVR5cGUuRGFpbHlDaGFsbGVuZ2UpIHtcbiAgICAgICAgZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0TWFpbkdhbWVEYXRhKCkuZ2V0TGV2ZWxJZCgpIDwgMSkge1xuICAgICAgICBlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBvID0gbnVsbCA9PT0gKGEgPSB0LmFyZ3MpIHx8IHZvaWQgMCA9PT0gYSA/IHZvaWQgMCA6IGFbMF07XG4gICAgICBpZiAodGhpcy5fZ2V0VGFza0NhcmRSZXNOYW1lKCkgPT09IG8pIHtcbiAgICAgICAgZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoL15bdGJdWzEtOV0kLy50ZXN0KG8pKSB7XG4gICAgICAgIHZhciBpID0gdGhpcy5sb2NhbERhdGFbbl07XG4gICAgICAgIGlmICghaSB8fCAwID09PSBPYmplY3Qua2V5cyhpLm1hcHBpbmcpLmxlbmd0aCkge1xuICAgICAgICAgIGUoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgMCA9PT0gT2JqZWN0LmtleXModGhpcy5fY3VycmVudE1hcHBpbmcpLmxlbmd0aCAmJiAodGhpcy5fY3VycmVudE1hcHBpbmcgPSBpLm1hcHBpbmcpO1xuICAgICAgICB2YXIgcyA9IFwiYXRsYXMvY2FyZEljb25UaWxlL1wiICsgKGkubWFwcGluZ1tvXSB8fCBvKTtcbiAgICAgICAgZSh7XG4gICAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgICAgcmV0dXJuVmFsOiB7XG4gICAgICAgICAgICBwYXRoOiBzLFxuICAgICAgICAgICAgYnVuZGxlTmFtZTogQ2FyZFV0aWwuZ2V0Q2FyZEJ1bmRsZU5hbWUoKSxcbiAgICAgICAgICAgIGZyb21BdGxhczogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGUoKTtcbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiW1wiICsgQ2FyZFJlcGxhY2VVUzJUcmFpdC50cmFpdEtleSArIFwiXSDliqvmjIHlm77niYflpLHotKU6IFwiICsgKG51bGwgPT0gdCA/IHZvaWQgMCA6IHQubWVzc2FnZSkpO1xuICAgICAgZSgpO1xuICAgIH1cbiAgfVxufSJdfQ==