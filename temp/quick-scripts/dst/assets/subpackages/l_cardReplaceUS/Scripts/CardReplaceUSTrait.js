
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_cardReplaceUS/Scripts/CardReplaceUSTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2NhcmRSZXBsYWNlVVMvU2NyaXB0cy9DYXJkUmVwbGFjZVVTVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDhFQUF3RjtBQUN4RixnRUFBMkQ7QUFDM0Qsd0ZBQW9GO0FBQ3BGLHNFQUFpRTtBQUNqRSxvRUFBK0Q7QUFHL0Q7SUFBZ0Qsc0NBQUs7SUFBckQ7UUFBQSxxRUFxSEM7UUFwSEMscUJBQWUsR0FBRyxFQUFFLENBQUM7O0lBb0h2QixDQUFDOzJCQXJIb0Isa0JBQWtCO0lBS3JDLG1DQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFDRCxtREFBc0IsR0FBdEI7UUFDRSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLEVBQ2pDLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztRQUNyQyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUNELGdEQUFtQixHQUFuQjtRQUNFLElBQUksQ0FBQyxFQUNILENBQUMsR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3JDLE9BQU8sSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMs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dENhbGxiYWNrUmV0dXJuVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0TWFuYWdlcic7XG5pbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IHsgTWpHYW1lVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9zaW11bGF0b3IvY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvdXNlci9Vc2VyTW9kZWwnO1xuaW1wb3J0IENhcmRVdGlsIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvdXNlci9DYXJkVXRpbCc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIkNhcmRSZXBsYWNlVVNUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZFJlcGxhY2VVU1RyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBfY3VycmVudE1hcHBpbmcgPSB7fTtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJDYXJkUmVwbGFjZVVTXCI7XG4gIHN0YXRpYyBCVU5ETEVfTkFNRSA9IFwibF9jYXJkUmVwbGFjZVVTXCI7XG4gIHN0YXRpYyBBTExfQ0FSRFMgPSBbXCJiMVwiLCBcImIyXCIsIFwiYjNcIiwgXCJiNFwiLCBcImI1XCIsIFwiYjZcIiwgXCJiN1wiLCBcImI4XCIsIFwiYjlcIiwgXCJ0MVwiLCBcInQyXCIsIFwidDNcIiwgXCJ0NFwiLCBcInQ1XCIsIFwidDZcIiwgXCJ0N1wiLCBcInQ4XCIsIFwidDlcIiwgXCJXMVwiLCBcIlcyXCIsIFwiVzNcIiwgXCJXNFwiLCBcIlc1XCIsIFwiVzZcIiwgXCJXN1wiLCBcIlc4XCJdO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5fY2hlY2tDb3VudHJ5Q29uZGl0aW9uKCk7XG4gIH1cbiAgX2NoZWNrQ291bnRyeUNvbmRpdGlvbigpIHtcbiAgICB2YXIgdCA9IHRoaXMuX3RtLmdldENvbmRpdGlvbkluZm8oKSxcbiAgICAgIGUgPSBudWxsID09IHQgPyB2b2lkIDAgOiB0LmNvdW50cnk7XG4gICAgZSAmJiBcIlwiICE9PSBlIHx8ICh0aGlzLmV2ZW50RW5hYmxlZCA9IGZhbHNlKTtcbiAgfVxuICBfZ2V0VGFza0NhcmRSZXNOYW1lKCkge1xuICAgIHZhciB0LFxuICAgICAgZSA9IG1qLmdldENsYXNzQnlOYW1lKFwiVGFza01vZGVsXCIpO1xuICAgIHJldHVybiBudWxsID09PSAodCA9IG51bGwgPT0gZSA/IHZvaWQgMCA6IGUuZ2V0SW5zdGFuY2UoKSkgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC5nZXRUYXNrQ2FyZFJlc05hbWUoKTtcbiAgfVxuICBfZ2VuZXJhdGVSYW5kb21NYXBwaW5nKCkge1xuICAgIHZhciB0LFxuICAgICAgZSA9IHt9LFxuICAgICAgYSA9IENhcmRSZXBsYWNlVVNUcmFpdC5BTExfQ0FSRFMuc2xpY2UoMCwgMTgpLmZpbHRlcihmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gdCAmJiB0Lmxlbmd0aCA+IDA7XG4gICAgICB9KTtcbiAgICBpZiAoMTggIT09IGEubGVuZ3RoKSByZXR1cm4gZTtcbiAgICB2YXIgbiA9IHRoaXMuX2dldFRhc2tDYXJkUmVzTmFtZSgpLFxuICAgICAgbyA9IENhcmRSZXBsYWNlVVNUcmFpdC5BTExfQ0FSRFMuZmlsdGVyKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHJldHVybiB0ICYmIHQubGVuZ3RoID4gMDtcbiAgICAgIH0pO1xuICAgIG4gJiYgKG8gPSBvLmZpbHRlcihmdW5jdGlvbiAodCkge1xuICAgICAgcmV0dXJuIHQgIT09IG47XG4gICAgfSkpO1xuICAgIGlmIChvLmxlbmd0aCA8IDE4KSByZXR1cm4gZTtcbiAgICBmb3IgKHZhciBsID0gby5sZW5ndGggLSAxOyBsID4gMDsgbC0tKSB7XG4gICAgICB2YXIgcyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChsICsgMSkpO1xuICAgICAgdCA9IF9fcmVhZChbb1tzXSwgb1tsXV0sIDIpLCBvW2xdID0gdFswXSwgb1tzXSA9IHRbMV07XG4gICAgfVxuICAgIGZvciAobCA9IDA7IGwgPCAxODsgbCsrKSBlW2FbbF1dID0gb1tsXTtcbiAgICByZXR1cm4gZTtcbiAgfVxuICBfZ2V0T3JDcmVhdGVNYXBwaW5nKHQpIHtcbiAgICBpZiAoIXRoaXMubG9jYWxEYXRhW3RdKSB7XG4gICAgICB0aGlzLmxvY2FsRGF0YVt0XSA9IHtcbiAgICAgICAgbWFwcGluZzoge31cbiAgICAgIH07XG4gICAgICB0aGlzLmxvY2FsRGF0YVt0XSA9IHRoaXMubG9jYWxEYXRhW3RdO1xuICAgIH1cbiAgICB2YXIgZSA9IHRoaXMubG9jYWxEYXRhW3RdLFxuICAgICAgciA9IHRoaXMuX2dlbmVyYXRlUmFuZG9tTWFwcGluZygpO1xuICAgIGlmICgwID09PSBPYmplY3Qua2V5cyhyKS5sZW5ndGgpIHJldHVybiB7fTtcbiAgICBlLm1hcHBpbmcgPSByO1xuICAgIHRoaXMubG9jYWxEYXRhW3RdID0gdGhpcy5sb2NhbERhdGFbdF07XG4gICAgcmV0dXJuIHI7XG4gIH1cbiAgX2dldEN1cnJlbnRHYW1lTW9kZSgpIHtcbiAgICByZXR1cm4gVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0Q3VycmVudEdhbWVUeXBlKCkgfHwgTWpHYW1lVHlwZS5Ob3JtYWw7XG4gIH1cbiAgb25Hc0xpc3RlbmVyX29uTmV3R2FtZSh0LCBlKSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRNYWluR2FtZURhdGEoKS5nZXRMZXZlbElkKCkgPCAxKSB7XG4gICAgICAgIGUoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIGEgPSB0aGlzLl9nZXRDdXJyZW50R2FtZU1vZGUoKTtcbiAgICAgIGlmIChhICE9PSBNakdhbWVUeXBlLk5vcm1hbCAmJiBhICE9PSBNakdhbWVUeXBlLlRpbGUyTm9ybWFsKSB7XG4gICAgICAgIGUoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5fY3VycmVudE1hcHBpbmcgPSB0aGlzLl9nZXRPckNyZWF0ZU1hcHBpbmcoYSk7XG4gICAgfSBjYXRjaCAodCkge1xuICAgICAgY29uc29sZS5lcnJvcihcIltcIiArIENhcmRSZXBsYWNlVVNUcmFpdC50cmFpdEtleSArIFwiXSDlhbPljaHliIfmjaLlpITnkIblpLHotKU6IFwiICsgKG51bGwgPT0gdCA/IHZvaWQgMCA6IHQubWVzc2FnZSkpO1xuICAgIH1cbiAgICBlKCk7XG4gIH1cbiAgb25DYXJkVXRpbF9hdGxhc1BhdGhCdW5kbGUodCwgZSkge1xuICAgIHZhciBhO1xuICAgIHRyeSB7XG4gICAgICB2YXIgbiA9IHRoaXMuX2dldEN1cnJlbnRHYW1lTW9kZSgpO1xuICAgICAgaWYgKG4gIT09IE1qR2FtZVR5cGUuTm9ybWFsICYmIG4gIT09IE1qR2FtZVR5cGUuVGlsZTJOb3JtYWwpIHtcbiAgICAgICAgZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0TWFpbkdhbWVEYXRhKCkuZ2V0TGV2ZWxJZCgpIDwgMSkge1xuICAgICAgICBlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBvID0gbnVsbCA9PT0gKGEgPSB0LmFyZ3MpIHx8IHZvaWQgMCA9PT0gYSA/IHZvaWQgMCA6IGFbMF07XG4gICAgICBpZiAodGhpcy5fZ2V0VGFza0NhcmRSZXNOYW1lKCkgPT09IG8pIHtcbiAgICAgICAgZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoL15bdGJdWzEtOV0kLy50ZXN0KG8pKSB7XG4gICAgICAgIHZhciBpID0gdGhpcy5sb2NhbERhdGFbbl07XG4gICAgICAgIGlmICghaSB8fCAwID09PSBPYmplY3Qua2V5cyhpLm1hcHBpbmcpLmxlbmd0aCkge1xuICAgICAgICAgIGUoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgMCA9PT0gT2JqZWN0LmtleXModGhpcy5fY3VycmVudE1hcHBpbmcpLmxlbmd0aCAmJiAodGhpcy5fY3VycmVudE1hcHBpbmcgPSBpLm1hcHBpbmcpO1xuICAgICAgICB2YXIgcyA9IFwiYXRsYXMvY2FyZEljb25UaWxlL1wiICsgKGkubWFwcGluZ1tvXSB8fCBvKTtcbiAgICAgICAgZSh7XG4gICAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgICAgcmV0dXJuVmFsOiB7XG4gICAgICAgICAgICBwYXRoOiBzLFxuICAgICAgICAgICAgYnVuZGxlTmFtZTogQ2FyZFV0aWwuZ2V0Q2FyZEJ1bmRsZU5hbWUoKSxcbiAgICAgICAgICAgIGZyb21BdGxhczogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGUoKTtcbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiW1wiICsgQ2FyZFJlcGxhY2VVU1RyYWl0LnRyYWl0S2V5ICsgXCJdIOWKq+aMgeWbvueJh+Wksei0pTogXCIgKyAobnVsbCA9PSB0ID8gdm9pZCAwIDogdC5tZXNzYWdlKSk7XG4gICAgICBlKCk7XG4gICAgfVxuICB9XG59Il19