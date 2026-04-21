
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_cardTile7/Scripts/CardTile7Trait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ca192TOIC5AY7wUIpZweCBX', 'CardTile7Trait');
// subpackages/l_cardTile7/Scripts/CardTile7Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var CardUtil_1 = require("../../../Scripts/gamePlay/user/CardUtil");
var CardTile7Trait = /** @class */ (function (_super) {
    __extends(CardTile7Trait, _super);
    function CardTile7Trait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._currentMapping = {};
        return _this;
    }
    CardTile7Trait_1 = CardTile7Trait;
    CardTile7Trait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    CardTile7Trait.prototype._getTaskCardResName = function () {
        var t, r = mj.getClassByName("TaskModel");
        return null === (t = null == r ? void 0 : r.getInstance()) || void 0 === t ? void 0 : t.getTaskCardResName();
    };
    CardTile7Trait.prototype._generateRandomMapping = function () {
        var t, r = {}, a = CardTile7Trait_1.ALL_CARDS.slice(0, 18).filter(function (t) {
            return t && t.length > 0;
        });
        if (18 !== a.length)
            return r;
        var n = this._getTaskCardResName(), i = CardTile7Trait_1.ALL_CARDS.filter(function (t) {
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
    CardTile7Trait.prototype._generateMapping = function (t) {
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
    CardTile7Trait.prototype._clearMapping = function (t) {
        var r = this.localData[t];
        if (r) {
            r.mapping = {};
            this.localData[t] = this.localData[t];
        }
    };
    CardTile7Trait.prototype._getCurrentGameMode = function () {
        return UserModel_1.default.getInstance().getCurrentGameType() || GameTypeEnums_1.MjGameType.Normal;
    };
    CardTile7Trait.prototype.onAdMgr_interAdClose = function (t, r) {
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
            console.error("[" + CardTile7Trait_1.traitKey + "] 插屏广告关闭处理失败: " + (null == t ? void 0 : t.message));
        }
        r();
    };
    CardTile7Trait.prototype.onGsListener_onNewGame = function (t, r) {
        try {
            var a = this._getCurrentGameMode();
            if (a !== GameTypeEnums_1.MjGameType.Travel && a !== GameTypeEnums_1.MjGameType.DailyChallenge) {
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
            console.error("[" + CardTile7Trait_1.traitKey + "] 关卡切换处理失败: " + (null == t ? void 0 : t.message));
        }
        r();
    };
    CardTile7Trait.prototype.onCardUtil_atlasPathBundle = function (t, r) {
        var a;
        try {
            var n = this._getCurrentGameMode();
            if (n !== GameTypeEnums_1.MjGameType.Travel && n !== GameTypeEnums_1.MjGameType.DailyChallenge) {
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
            console.error("[" + CardTile7Trait_1.traitKey + "] 劫持图片失败: " + (null == t ? void 0 : t.message));
            r();
        }
    };
    var CardTile7Trait_1;
    CardTile7Trait.traitKey = "CardTile7";
    CardTile7Trait.ALL_CARDS = ["b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "t1", "t2", "t3", "t4", "t5", "t6", "t7", "t8", "t9", "W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"];
    CardTile7Trait = CardTile7Trait_1 = __decorate([
        mj.trait,
        mj.class("CardTile7Trait")
    ], CardTile7Trait);
    return CardTile7Trait;
}(Trait_1.default));
exports.default = CardTile7Trait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2NhcmRUaWxlNy9TY3JpcHRzL0NhcmRUaWxlN1RyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw4RUFBd0Y7QUFDeEYsZ0VBQTJEO0FBQzNELHdGQUFvRjtBQUNwRixzRUFBaUU7QUFDakUsb0VBQStEO0FBRy9EO0lBQTRDLGtDQUFLO0lBQWpEO1FBQUEscUVBMElDO1FBeklDLHFCQUFlLEdBQUcsRUFBRSxDQUFDOztJQXlJdkIsQ0FBQzt1QkExSW9CLGNBQWM7SUFJakMsK0JBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNELDRDQUFtQixHQUFuQjtRQUNFLElBQUksQ0FBQyxFQUNILENBQUMsR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3JDLE9BQU8sSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUMvRyxDQUFDO0lBQ0QsK0NBQXNCLEdBQXRCO1FBQ0UsSUFBSSxDQUFDLEVBQ0gsQ0FBQyxHQUFHLEVBQUUsRUFDTixDQUFDLEdBQUcsZ0JBQWMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO1lBQzFELE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDO1FBQ0wsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLE1B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QVEsQ0FBQyxpQkFBaUIsRUFBRTt3QkFDeEMsU0FBUyxFQUFFLElBQUk7cUJBQ2hCO2lCQUNGLENBQUMsQ0FBQztnQkFDSCxPQUFPO2FBQ1I7WUFDRCxDQUFDLEVBQUUsQ0FBQztTQUNMO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxnQkFBYyxDQUFDLFFBQVEsR0FBRyxZQUFZLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDL0YsQ0FBQyxFQUFFLENBQUM7U0FDTDtJQUNILENBQUM7O0lBdklNLHVCQUFRLEdBQUcsV0FBVyxDQUFDO0lBQ3ZCLHdCQUFTLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFIN0osY0FBYztRQUZsQyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUM7T0FDTixjQUFjLENBMElsQztJQUFELHFCQUFDO0NBMUlELEFBMElDLENBMUkyQyxlQUFLLEdBMEloRDtrQkExSW9CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0TWFuYWdlcic7XG5pbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IHsgTWpHYW1lVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9zaW11bGF0b3IvY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvdXNlci9Vc2VyTW9kZWwnO1xuaW1wb3J0IENhcmRVdGlsIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvdXNlci9DYXJkVXRpbCc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIkNhcmRUaWxlN1RyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJkVGlsZTdUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgX2N1cnJlbnRNYXBwaW5nID0ge307XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiQ2FyZFRpbGU3XCI7XG4gIHN0YXRpYyBBTExfQ0FSRFMgPSBbXCJiMVwiLCBcImIyXCIsIFwiYjNcIiwgXCJiNFwiLCBcImI1XCIsIFwiYjZcIiwgXCJiN1wiLCBcImI4XCIsIFwiYjlcIiwgXCJ0MVwiLCBcInQyXCIsIFwidDNcIiwgXCJ0NFwiLCBcInQ1XCIsIFwidDZcIiwgXCJ0N1wiLCBcInQ4XCIsIFwidDlcIiwgXCJXMVwiLCBcIlcyXCIsIFwiVzNcIiwgXCJXNFwiLCBcIlc1XCIsIFwiVzZcIiwgXCJXN1wiLCBcIlc4XCJdO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gIH1cbiAgX2dldFRhc2tDYXJkUmVzTmFtZSgpIHtcbiAgICB2YXIgdCxcbiAgICAgIHIgPSBtai5nZXRDbGFzc0J5TmFtZShcIlRhc2tNb2RlbFwiKTtcbiAgICByZXR1cm4gbnVsbCA9PT0gKHQgPSBudWxsID09IHIgPyB2b2lkIDAgOiByLmdldEluc3RhbmNlKCkpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQuZ2V0VGFza0NhcmRSZXNOYW1lKCk7XG4gIH1cbiAgX2dlbmVyYXRlUmFuZG9tTWFwcGluZygpIHtcbiAgICB2YXIgdCxcbiAgICAgIHIgPSB7fSxcbiAgICAgIGEgPSBDYXJkVGlsZTdUcmFpdC5BTExfQ0FSRFMuc2xpY2UoMCwgMTgpLmZpbHRlcihmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gdCAmJiB0Lmxlbmd0aCA+IDA7XG4gICAgICB9KTtcbiAgICBpZiAoMTggIT09IGEubGVuZ3RoKSByZXR1cm4gcjtcbiAgICB2YXIgbiA9IHRoaXMuX2dldFRhc2tDYXJkUmVzTmFtZSgpLFxuICAgICAgaSA9IENhcmRUaWxlN1RyYWl0LkFMTF9DQVJEUy5maWx0ZXIoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuIHQgJiYgdC5sZW5ndGggPiAwO1xuICAgICAgfSk7XG4gICAgbiAmJiAoaSA9IGkuZmlsdGVyKGZ1bmN0aW9uICh0KSB7XG4gICAgICByZXR1cm4gdCAhPT0gbjtcbiAgICB9KSk7XG4gICAgaWYgKGkubGVuZ3RoIDwgMTgpIHJldHVybiByO1xuICAgIGZvciAodmFyIGwgPSBpLmxlbmd0aCAtIDE7IGwgPiAwOyBsLS0pIHtcbiAgICAgIHZhciBzID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGwgKyAxKSk7XG4gICAgICB0ID0gX19yZWFkKFtpW3NdLCBpW2xdXSwgMiksIGlbbF0gPSB0WzBdLCBpW3NdID0gdFsxXTtcbiAgICB9XG4gICAgZm9yIChsID0gMDsgbCA8IDE4OyBsKyspIHJbYVtsXV0gPSBpW2xdO1xuICAgIHJldHVybiByO1xuICB9XG4gIF9nZW5lcmF0ZU1hcHBpbmcodCkge1xuICAgIGlmICghdGhpcy5sb2NhbERhdGFbdF0pIHtcbiAgICAgIHRoaXMubG9jYWxEYXRhW3RdID0ge1xuICAgICAgICBtYXBwaW5nOiB7fSxcbiAgICAgICAgaGFkSW50ZXJBZExhc3RSb3VuZDogZmFsc2VcbiAgICAgIH07XG4gICAgICB0aGlzLmxvY2FsRGF0YVt0XSA9IHRoaXMubG9jYWxEYXRhW3RdO1xuICAgIH1cbiAgICB2YXIgciA9IHRoaXMubG9jYWxEYXRhW3RdO1xuICAgIGlmICghcikgcmV0dXJuIHt9O1xuICAgIHZhciBlID0gdGhpcy5fZ2VuZXJhdGVSYW5kb21NYXBwaW5nKCk7XG4gICAgaWYgKDAgPT09IE9iamVjdC5rZXlzKGUpLmxlbmd0aCkgcmV0dXJuIHt9O1xuICAgIHIubWFwcGluZyA9IGU7XG4gICAgdGhpcy5sb2NhbERhdGFbdF0gPSB0aGlzLmxvY2FsRGF0YVt0XTtcbiAgICByZXR1cm4gZTtcbiAgfVxuICBfY2xlYXJNYXBwaW5nKHQpIHtcbiAgICB2YXIgciA9IHRoaXMubG9jYWxEYXRhW3RdO1xuICAgIGlmIChyKSB7XG4gICAgICByLm1hcHBpbmcgPSB7fTtcbiAgICAgIHRoaXMubG9jYWxEYXRhW3RdID0gdGhpcy5sb2NhbERhdGFbdF07XG4gICAgfVxuICB9XG4gIF9nZXRDdXJyZW50R2FtZU1vZGUoKSB7XG4gICAgcmV0dXJuIFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEN1cnJlbnRHYW1lVHlwZSgpIHx8IE1qR2FtZVR5cGUuTm9ybWFsO1xuICB9XG4gIG9uQWRNZ3JfaW50ZXJBZENsb3NlKHQsIHIpIHtcbiAgICB0cnkge1xuICAgICAgdmFyIGEgPSB0aGlzLl9nZXRDdXJyZW50R2FtZU1vZGUoKTtcbiAgICAgIHRoaXMubG9jYWxEYXRhW2FdIHx8ICh0aGlzLmxvY2FsRGF0YVthXSA9IHtcbiAgICAgICAgbWFwcGluZzoge30sXG4gICAgICAgIGhhZEludGVyQWRMYXN0Um91bmQ6IGZhbHNlXG4gICAgICB9KTtcbiAgICAgIHZhciBuID0gdGhpcy5sb2NhbERhdGFbYV07XG4gICAgICBpZiAobikge1xuICAgICAgICBuLmhhZEludGVyQWRMYXN0Um91bmQgPSB0cnVlO1xuICAgICAgICB0aGlzLmxvY2FsRGF0YVthXSA9IHRoaXMubG9jYWxEYXRhW2FdO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJbXCIgKyBDYXJkVGlsZTdUcmFpdC50cmFpdEtleSArIFwiXSDmj5LlsY/lub/lkYrlhbPpl63lpITnkIblpLHotKU6IFwiICsgKG51bGwgPT0gdCA/IHZvaWQgMCA6IHQubWVzc2FnZSkpO1xuICAgIH1cbiAgICByKCk7XG4gIH1cbiAgb25Hc0xpc3RlbmVyX29uTmV3R2FtZSh0LCByKSB7XG4gICAgdHJ5IHtcbiAgICAgIHZhciBhID0gdGhpcy5fZ2V0Q3VycmVudEdhbWVNb2RlKCk7XG4gICAgICBpZiAoYSAhPT0gTWpHYW1lVHlwZS5UcmF2ZWwgJiYgYSAhPT0gTWpHYW1lVHlwZS5EYWlseUNoYWxsZW5nZSkge1xuICAgICAgICByKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBuID0gdGhpcy5sb2NhbERhdGFbYV07XG4gICAgICBpZiAobnVsbCA9PSBuID8gdm9pZCAwIDogbi5oYWRJbnRlckFkTGFzdFJvdW5kKSB7XG4gICAgICAgIHRoaXMuX2N1cnJlbnRNYXBwaW5nID0gdGhpcy5fZ2VuZXJhdGVNYXBwaW5nKGEpO1xuICAgICAgICBpZiAodGhpcy5sb2NhbERhdGFbYV0pIHtcbiAgICAgICAgICB0aGlzLmxvY2FsRGF0YVthXS5oYWRJbnRlckFkTGFzdFJvdW5kID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5sb2NhbERhdGFbYV0gPSB0aGlzLmxvY2FsRGF0YVthXTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fY2xlYXJNYXBwaW5nKGEpO1xuICAgICAgICB0aGlzLl9jdXJyZW50TWFwcGluZyA9IHt9O1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJbXCIgKyBDYXJkVGlsZTdUcmFpdC50cmFpdEtleSArIFwiXSDlhbPljaHliIfmjaLlpITnkIblpLHotKU6IFwiICsgKG51bGwgPT0gdCA/IHZvaWQgMCA6IHQubWVzc2FnZSkpO1xuICAgIH1cbiAgICByKCk7XG4gIH1cbiAgb25DYXJkVXRpbF9hdGxhc1BhdGhCdW5kbGUodCwgcikge1xuICAgIHZhciBhO1xuICAgIHRyeSB7XG4gICAgICB2YXIgbiA9IHRoaXMuX2dldEN1cnJlbnRHYW1lTW9kZSgpO1xuICAgICAgaWYgKG4gIT09IE1qR2FtZVR5cGUuVHJhdmVsICYmIG4gIT09IE1qR2FtZVR5cGUuRGFpbHlDaGFsbGVuZ2UpIHtcbiAgICAgICAgcigpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgaSA9IG51bGwgPT09IChhID0gdC5hcmdzKSB8fCB2b2lkIDAgPT09IGEgPyB2b2lkIDAgOiBhWzBdO1xuICAgICAgaWYgKHRoaXMuX2dldFRhc2tDYXJkUmVzTmFtZSgpID09PSBpKSB7XG4gICAgICAgIHIoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKC9eW3RiXVsxLTldJC8udGVzdChpKSkge1xuICAgICAgICB2YXIgbyA9IHRoaXMubG9jYWxEYXRhW25dO1xuICAgICAgICBpZiAoIW8gfHwgMCA9PT0gT2JqZWN0LmtleXMoby5tYXBwaW5nKS5sZW5ndGgpIHtcbiAgICAgICAgICByKCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIDAgPT09IE9iamVjdC5rZXlzKHRoaXMuX2N1cnJlbnRNYXBwaW5nKS5sZW5ndGggJiYgKHRoaXMuX2N1cnJlbnRNYXBwaW5nID0gby5tYXBwaW5nKTtcbiAgICAgICAgdmFyIHMgPSBcImF0bGFzL2NhcmRJY29uVGlsZS9cIiArIChvLm1hcHBpbmdbaV0gfHwgaSk7XG4gICAgICAgIHIoe1xuICAgICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICAgIHJldHVyblZhbDoge1xuICAgICAgICAgICAgcGF0aDogcyxcbiAgICAgICAgICAgIGJ1bmRsZU5hbWU6IENhcmRVdGlsLmdldENhcmRCdW5kbGVOYW1lKCksXG4gICAgICAgICAgICBmcm9tQXRsYXM6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICByKCk7XG4gICAgfSBjYXRjaCAodCkge1xuICAgICAgY29uc29sZS5lcnJvcihcIltcIiArIENhcmRUaWxlN1RyYWl0LnRyYWl0S2V5ICsgXCJdIOWKq+aMgeWbvueJh+Wksei0pTogXCIgKyAobnVsbCA9PSB0ID8gdm9pZCAwIDogdC5tZXNzYWdlKSk7XG4gICAgICByKCk7XG4gICAgfVxuICB9XG59Il19