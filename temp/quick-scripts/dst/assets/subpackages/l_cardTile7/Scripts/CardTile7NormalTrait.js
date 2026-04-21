
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_cardTile7/Scripts/CardTile7NormalTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2NhcmRUaWxlNy9TY3JpcHRzL0NhcmRUaWxlN05vcm1hbFRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw4RUFBd0Y7QUFDeEYsZ0VBQTJEO0FBQzNELHdGQUFvRjtBQUNwRixzRUFBaUU7QUFDakUsb0VBQStEO0FBRy9EO0lBQWtELHdDQUFLO0lBQXZEO1FBQUEscUVBMElDO1FBeklDLHFCQUFlLEdBQUcsRUFBRSxDQUFDOztJQXlJdkIsQ0FBQzs2QkExSW9CLG9CQUFvQjtJQUl2QyxxQ0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0Qsa0RBQW1CLEdBQW5CO1FBQ0UsSUFBSSxDQUFDLEVBQ0gsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDckMsT0FBTyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQy9HLENBQUM7SUFDRCxxREFBc0IsR0FBdEI7UUFDRSxJQUFJLENBQUMsRUFDSCxDQUFDLEdBQUcsRUFBRSxFQUNOLENBQUMsR0FBRyxzQkFBb0IsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO1lBQ2hFLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDO1FBQ0wsSUFBSSxFQUFFLEtBQUssQ0FB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QkFDRixDQUFDLENBQUM7Z0JBQ0gsT0FBTzthQUNSO1lBQ0QsQ0FBQyxFQUFFLENBQUM7U0FDTDtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsc0JBQW9CLENBQUMsUUFBUSxHQUFHLFlBQVksR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNyRyxDQUFDLEVBQUUsQ0FBQztTQUNMO0lBQ0gsQ0FBQzs7SUF2SU0sNkJBQVEsR0FBRyxpQkFBaUIsQ0FBQztJQUM3Qiw4QkFBUyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBSDdKLG9CQUFvQjtRQUZ4QyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsc0JBQXNCLENBQUM7T0FDWixvQkFBb0IsQ0EwSXhDO0lBQUQsMkJBQUM7Q0ExSUQsQUEwSUMsQ0ExSWlELGVBQUssR0EwSXREO2tCQTFJb0Isb0JBQW9CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHJhaXRDYWxsYmFja1JldHVyblR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdE1hbmFnZXInO1xuaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCB7IE1qR2FtZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L3VzZXIvVXNlck1vZGVsJztcbmltcG9ydCBDYXJkVXRpbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L3VzZXIvQ2FyZFV0aWwnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJDYXJkVGlsZTdOb3JtYWxUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZFRpbGU3Tm9ybWFsVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIF9jdXJyZW50TWFwcGluZyA9IHt9O1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIkNhcmRUaWxlN05vcm1hbFwiO1xuICBzdGF0aWMgQUxMX0NBUkRTID0gW1wiYjFcIiwgXCJiMlwiLCBcImIzXCIsIFwiYjRcIiwgXCJiNVwiLCBcImI2XCIsIFwiYjdcIiwgXCJiOFwiLCBcImI5XCIsIFwidDFcIiwgXCJ0MlwiLCBcInQzXCIsIFwidDRcIiwgXCJ0NVwiLCBcInQ2XCIsIFwidDdcIiwgXCJ0OFwiLCBcInQ5XCIsIFwiVzFcIiwgXCJXMlwiLCBcIlczXCIsIFwiVzRcIiwgXCJXNVwiLCBcIlc2XCIsIFwiVzdcIiwgXCJXOFwiXTtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICB9XG4gIF9nZXRUYXNrQ2FyZFJlc05hbWUoKSB7XG4gICAgdmFyIHQsXG4gICAgICByID0gbWouZ2V0Q2xhc3NCeU5hbWUoXCJUYXNrTW9kZWxcIik7XG4gICAgcmV0dXJuIG51bGwgPT09ICh0ID0gbnVsbCA9PSByID8gdm9pZCAwIDogci5nZXRJbnN0YW5jZSgpKSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0LmdldFRhc2tDYXJkUmVzTmFtZSgpO1xuICB9XG4gIF9nZW5lcmF0ZVJhbmRvbU1hcHBpbmcoKSB7XG4gICAgdmFyIHQsXG4gICAgICByID0ge30sXG4gICAgICBhID0gQ2FyZFRpbGU3Tm9ybWFsVHJhaXQuQUxMX0NBUkRTLnNsaWNlKDAsIDE4KS5maWx0ZXIoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuIHQgJiYgdC5sZW5ndGggPiAwO1xuICAgICAgfSk7XG4gICAgaWYgKDE4ICE9PSBhLmxlbmd0aCkgcmV0dXJuIHI7XG4gICAgdmFyIG4gPSB0aGlzLl9nZXRUYXNrQ2FyZFJlc05hbWUoKSxcbiAgICAgIGkgPSBDYXJkVGlsZTdOb3JtYWxUcmFpdC5BTExfQ0FSRFMuZmlsdGVyKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHJldHVybiB0ICYmIHQubGVuZ3RoID4gMDtcbiAgICAgIH0pO1xuICAgIG4gJiYgKGkgPSBpLmZpbHRlcihmdW5jdGlvbiAodCkge1xuICAgICAgcmV0dXJuIHQgIT09IG47XG4gICAgfSkpO1xuICAgIGlmIChpLmxlbmd0aCA8IDE4KSByZXR1cm4gcjtcbiAgICBmb3IgKHZhciBsID0gaS5sZW5ndGggLSAxOyBsID4gMDsgbC0tKSB7XG4gICAgICB2YXIgcyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChsICsgMSkpO1xuICAgICAgdCA9IF9fcmVhZChbaVtzXSwgaVtsXV0sIDIpLCBpW2xdID0gdFswXSwgaVtzXSA9IHRbMV07XG4gICAgfVxuICAgIGZvciAobCA9IDA7IGwgPCAxODsgbCsrKSByW2FbbF1dID0gaVtsXTtcbiAgICByZXR1cm4gcjtcbiAgfVxuICBfZ2VuZXJhdGVNYXBwaW5nKHQpIHtcbiAgICBpZiAoIXRoaXMubG9jYWxEYXRhW3RdKSB7XG4gICAgICB0aGlzLmxvY2FsRGF0YVt0XSA9IHtcbiAgICAgICAgbWFwcGluZzoge30sXG4gICAgICAgIGhhZEludGVyQWRMYXN0Um91bmQ6IGZhbHNlXG4gICAgICB9O1xuICAgICAgdGhpcy5sb2NhbERhdGFbdF0gPSB0aGlzLmxvY2FsRGF0YVt0XTtcbiAgICB9XG4gICAgdmFyIHIgPSB0aGlzLmxvY2FsRGF0YVt0XTtcbiAgICBpZiAoIXIpIHJldHVybiB7fTtcbiAgICB2YXIgZSA9IHRoaXMuX2dlbmVyYXRlUmFuZG9tTWFwcGluZygpO1xuICAgIGlmICgwID09PSBPYmplY3Qua2V5cyhlKS5sZW5ndGgpIHJldHVybiB7fTtcbiAgICByLm1hcHBpbmcgPSBlO1xuICAgIHRoaXMubG9jYWxEYXRhW3RdID0gdGhpcy5sb2NhbERhdGFbdF07XG4gICAgcmV0dXJuIGU7XG4gIH1cbiAgX2NsZWFyTWFwcGluZyh0KSB7XG4gICAgdmFyIHIgPSB0aGlzLmxvY2FsRGF0YVt0XTtcbiAgICBpZiAocikge1xuICAgICAgci5tYXBwaW5nID0ge307XG4gICAgICB0aGlzLmxvY2FsRGF0YVt0XSA9IHRoaXMubG9jYWxEYXRhW3RdO1xuICAgIH1cbiAgfVxuICBfZ2V0Q3VycmVudEdhbWVNb2RlKCkge1xuICAgIHJldHVybiBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRDdXJyZW50R2FtZVR5cGUoKSB8fCBNakdhbWVUeXBlLk5vcm1hbDtcbiAgfVxuICBvbkFkTWdyX2ludGVyQWRDbG9zZSh0LCByKSB7XG4gICAgdHJ5IHtcbiAgICAgIHZhciBhID0gdGhpcy5fZ2V0Q3VycmVudEdhbWVNb2RlKCk7XG4gICAgICB0aGlzLmxvY2FsRGF0YVthXSB8fCAodGhpcy5sb2NhbERhdGFbYV0gPSB7XG4gICAgICAgIG1hcHBpbmc6IHt9LFxuICAgICAgICBoYWRJbnRlckFkTGFzdFJvdW5kOiBmYWxzZVxuICAgICAgfSk7XG4gICAgICB2YXIgbiA9IHRoaXMubG9jYWxEYXRhW2FdO1xuICAgICAgaWYgKG4pIHtcbiAgICAgICAgbi5oYWRJbnRlckFkTGFzdFJvdW5kID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5sb2NhbERhdGFbYV0gPSB0aGlzLmxvY2FsRGF0YVthXTtcbiAgICAgIH1cbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiW1wiICsgQ2FyZFRpbGU3Tm9ybWFsVHJhaXQudHJhaXRLZXkgKyBcIl0g5o+S5bGP5bm/5ZGK5YWz6Zet5aSE55CG5aSx6LSlOiBcIiArIChudWxsID09IHQgPyB2b2lkIDAgOiB0Lm1lc3NhZ2UpKTtcbiAgICB9XG4gICAgcigpO1xuICB9XG4gIG9uR3NMaXN0ZW5lcl9vbk5ld0dhbWUodCwgcikge1xuICAgIHRyeSB7XG4gICAgICB2YXIgYSA9IHRoaXMuX2dldEN1cnJlbnRHYW1lTW9kZSgpO1xuICAgICAgaWYgKGEgIT09IE1qR2FtZVR5cGUuTm9ybWFsKSB7XG4gICAgICAgIHIoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIG4gPSB0aGlzLmxvY2FsRGF0YVthXTtcbiAgICAgIGlmIChudWxsID09IG4gPyB2b2lkIDAgOiBuLmhhZEludGVyQWRMYXN0Um91bmQpIHtcbiAgICAgICAgdGhpcy5fY3VycmVudE1hcHBpbmcgPSB0aGlzLl9nZW5lcmF0ZU1hcHBpbmcoYSk7XG4gICAgICAgIGlmICh0aGlzLmxvY2FsRGF0YVthXSkge1xuICAgICAgICAgIHRoaXMubG9jYWxEYXRhW2FdLmhhZEludGVyQWRMYXN0Um91bmQgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmxvY2FsRGF0YVthXSA9IHRoaXMubG9jYWxEYXRhW2FdO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9jbGVhck1hcHBpbmcoYSk7XG4gICAgICAgIHRoaXMuX2N1cnJlbnRNYXBwaW5nID0ge307XG4gICAgICB9XG4gICAgfSBjYXRjaCAodCkge1xuICAgICAgY29uc29sZS5lcnJvcihcIltcIiArIENhcmRUaWxlN05vcm1hbFRyYWl0LnRyYWl0S2V5ICsgXCJdIOWFs+WNoeWIh+aNouWkhOeQhuWksei0pTogXCIgKyAobnVsbCA9PSB0ID8gdm9pZCAwIDogdC5tZXNzYWdlKSk7XG4gICAgfVxuICAgIHIoKTtcbiAgfVxuICBvbkNhcmRVdGlsX2F0bGFzUGF0aEJ1bmRsZSh0LCByKSB7XG4gICAgdmFyIGE7XG4gICAgdHJ5IHtcbiAgICAgIHZhciBuID0gdGhpcy5fZ2V0Q3VycmVudEdhbWVNb2RlKCk7XG4gICAgICBpZiAobiAhPT0gTWpHYW1lVHlwZS5Ob3JtYWwpIHtcbiAgICAgICAgcigpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgaSA9IG51bGwgPT09IChhID0gdC5hcmdzKSB8fCB2b2lkIDAgPT09IGEgPyB2b2lkIDAgOiBhWzBdO1xuICAgICAgaWYgKHRoaXMuX2dldFRhc2tDYXJkUmVzTmFtZSgpID09PSBpKSB7XG4gICAgICAgIHIoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKC9eW3RiXVsxLTldJC8udGVzdChpKSkge1xuICAgICAgICB2YXIgbyA9IHRoaXMubG9jYWxEYXRhW25dO1xuICAgICAgICBpZiAoIW8gfHwgMCA9PT0gT2JqZWN0LmtleXMoby5tYXBwaW5nKS5sZW5ndGgpIHtcbiAgICAgICAgICByKCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIDAgPT09IE9iamVjdC5rZXlzKHRoaXMuX2N1cnJlbnRNYXBwaW5nKS5sZW5ndGggJiYgKHRoaXMuX2N1cnJlbnRNYXBwaW5nID0gby5tYXBwaW5nKTtcbiAgICAgICAgdmFyIHMgPSBcImF0bGFzL2NhcmRJY29uVGlsZS9cIiArIChvLm1hcHBpbmdbaV0gfHwgaSk7XG4gICAgICAgIHIoe1xuICAgICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICAgIHJldHVyblZhbDoge1xuICAgICAgICAgICAgcGF0aDogcyxcbiAgICAgICAgICAgIGJ1bmRsZU5hbWU6IENhcmRVdGlsLmdldENhcmRCdW5kbGVOYW1lKCksXG4gICAgICAgICAgICBmcm9tQXRsYXM6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICByKCk7XG4gICAgfSBjYXRjaCAodCkge1xuICAgICAgY29uc29sZS5lcnJvcihcIltcIiArIENhcmRUaWxlN05vcm1hbFRyYWl0LnRyYWl0S2V5ICsgXCJdIOWKq+aMgeWbvueJh+Wksei0pTogXCIgKyAobnVsbCA9PSB0ID8gdm9pZCAwIDogdC5tZXNzYWdlKSk7XG4gICAgICByKCk7XG4gICAgfVxuICB9XG59Il19