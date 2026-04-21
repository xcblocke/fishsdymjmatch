
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_tile2FailAdRevive/Scripts/Tile2FailAdReviveTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '32575AwHFZOR7ZgDuKiJC9u', 'Tile2FailAdReviveTrait');
// subpackages/l_tile2FailAdRevive/Scripts/Tile2FailAdReviveTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
this && this.__read;
this && this.__spread;
var Tile2FailAdReviveTrait = /** @class */ (function (_super) {
    __extends(Tile2FailAdReviveTrait, _super);
    function Tile2FailAdReviveTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._maxN = -1;
        return _this;
    }
    Tile2FailAdReviveTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        var t = this._traitData || {};
        void 0 !== t.maxAdRevivePerRound && (this._maxN = t.maxAdRevivePerRound);
        if (void 0 === this.localData.usedAdReviveThisRound) {
            this.localData.usedAdReviveThisRound = 0;
            this.localData = this.localData;
        }
        this._log("onLoad maxAdRevivePerRound=" + this._maxN + " usedAdReviveThisRound=" + this.localData.usedAdReviveThisRound);
    };
    Tile2FailAdReviveTrait.prototype._isTile2Normal = function () {
        return UserModel_1.default.getInstance().getCurrentGameType() === GameTypeEnums_1.MjGameType.Tile2Normal;
    };
    Tile2FailAdReviveTrait.prototype._log = function () {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
    };
    Tile2FailAdReviveTrait.prototype.onIptT2InitSlotBar_exec = function (e, t) {
        if (this._isTile2Normal()) {
            var i = e.ins, o = null == i ? void 0 : i.gameContext, a = !!(null == o ? void 0 : o.getIsNewGame()), l = !!(null == o ? void 0 : o.getIsRestart());
            if (a || l) {
                this.localData.usedAdReviveThisRound = 0;
                this.localData = this.localData;
                this._log("IptT2InitSlotBar_exec 清零展示次数: isNewGame=" + a + " isRestart=" + l);
                t();
            }
            else {
                this._log("IptT2InitSlotBar_exec 不清零展示次数: isNewGame=" + a + " isRestart=" + l + "（冷启恢复等）");
                t();
            }
        }
        else {
            this._log("IptT2InitSlotBar_exec 跳过: 非 Tile2Normal");
            t();
        }
    };
    Tile2FailAdReviveTrait.prototype.onTile2FailBhv_pushView = function (e, t) {
        var i, o, a;
        if (this._isTile2Normal()) {
            if (e.ins) {
                var l = null === (i = e.args) || void 0 === i ? void 0 : i[0];
                if (null == l ? void 0 : l.data) {
                    var r = null !== (o = l.data.reviveNum) && void 0 !== o ? o : 0;
                    if (r > 0) {
                        l.data.adReviveAllowed = true;
                        this._log("Tile2FailBhv_pushView reviveNum=" + r + " → adReviveAllowed=true（有免费复活）");
                        t();
                    }
                    else {
                        var s, n = this.getMaxCount(), u = null !== (a = this.localData.usedAdReviveThisRound) && void 0 !== a ? a : 0;
                        s = 0 !== n && (-1 === n || u < n);
                        l.data.adReviveAllowed = s;
                        this._log("Tile2FailBhv_pushView 无免费复活: maxN=" + n + " usedShown=" + u + " → adReviveAllowed=" + s);
                        t();
                    }
                }
                else {
                    this._log("Tile2FailBhv_pushView 跳过: 无 effect.data");
                    t();
                }
            }
            else {
                this._log("Tile2FailBhv_pushView 跳过: 无 behavior");
                t();
            }
        }
        else {
            this._log("Tile2FailBhv_pushView 跳过: 非 Tile2Normal");
            t();
        }
    };
    Tile2FailAdReviveTrait.prototype.onTile2FailVw_showAdBtnVw = function (e, t) {
        var i;
        if (this._isTile2Normal()) {
            var o = null !== (i = this.localData.usedAdReviveThisRound) && void 0 !== i ? i : 0;
            this.localData.usedAdReviveThisRound = o + 1;
            this.localData = this.localData;
            this._log("showAdBtnVw 展示广告入口 +1: " + o + " → " + this.localData.usedAdReviveThisRound);
            t();
        }
        else {
            this._log("showAdBtnVw 跳过: 非 Tile2Normal");
            t();
        }
    };
    Tile2FailAdReviveTrait.prototype.onTile2FailVw_adReviveSucc = function (e, t) {
        var i;
        if (this._isTile2Normal()) {
            var o = null !== (i = this.localData.usedAdReviveThisRound) && void 0 !== i ? i : 0;
            this.localData.usedAdReviveThisRound = o + 1;
            this.localData = this.localData;
            this._log("adReviveSucc 看完广告复活 +1: " + o + " → " + this.localData.usedAdReviveThisRound);
            t();
        }
        else {
            this._log("adReviveSucc 跳过: 非 Tile2Normal");
            t();
        }
    };
    Tile2FailAdReviveTrait.prototype.getMaxCount = function () {
        return this._maxN;
    };
    Tile2FailAdReviveTrait.traitKey = "Tile2FailAdRevive";
    __decorate([
        mj.traitEvent("T2FailAdRevi_getMaxCnt")
    ], Tile2FailAdReviveTrait.prototype, "getMaxCount", null);
    Tile2FailAdReviveTrait = __decorate([
        mj.trait,
        mj.class("Tile2FailAdReviveTrait")
    ], Tile2FailAdReviveTrait);
    return Tile2FailAdReviveTrait;
}(Trait_1.default));
exports.default = Tile2FailAdReviveTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3RpbGUyRmFpbEFkUmV2aXZlL1NjcmlwdHMvVGlsZTJGYWlsQWRSZXZpdmVUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0ZBQW9GO0FBQ3BGLGdFQUEyRDtBQUMzRCxzRUFBaUU7QUFDakUsSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUM7QUFDcEIsSUFBSSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUM7QUFHdEI7SUFBb0QsMENBQUs7SUFBekQ7UUFBQSxxRUFzR0M7UUFyR0MsV0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDOztJQXFHYixDQUFDO0lBbkdDLHVDQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLElBQUksRUFBRSxDQUFDO1FBQzlCLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxtQkFBbUIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDekUsSUFBSSxLQUFLLENBQUMsS0FBSyxJQUFJLENBQUMsU0FBUyxDQUFDLHFCQUFxQixFQUFFO1lBQ25ELElBQUksQ0FBQyxTQUFTLENBQUMscUJBQXFCLEdBQUcsQ0FBQyxDQUFDO1lBQ3pDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztTQUNqQztRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsNkJBQTZCLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyx5QkFBeUIsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDM0gsQ0FBQztJQUNELCtDQUFjLEdBQWQ7UUFDRSxPQUFPLG1CQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsS0FBSywwQkFBVSxDQUFDLFdBQVcsQ0FB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Q0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQW5HTSwrQkFBUSxHQUFHLG1CQUFtQixDQUFDO0lBaUd0QztRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsd0JBQXdCLENBQUM7NkRBR3ZDO0lBckdrQixzQkFBc0I7UUFGMUMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLHdCQUF3QixDQUFDO09BQ2Qsc0JBQXNCLENBc0cxQztJQUFELDZCQUFDO0NBdEdELEFBc0dDLENBdEdtRCxlQUFLLEdBc0d4RDtrQkF0R29CLHNCQUFzQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1qR2FtZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS91c2VyL1VzZXJNb2RlbCc7XG50aGlzICYmIHRoaXMuX19yZWFkO1xudGhpcyAmJiB0aGlzLl9fc3ByZWFkO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJUaWxlMkZhaWxBZFJldml2ZVRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaWxlMkZhaWxBZFJldml2ZVRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBfbWF4TiA9IC0xO1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIlRpbGUyRmFpbEFkUmV2aXZlXCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICB2YXIgdCA9IHRoaXMuX3RyYWl0RGF0YSB8fCB7fTtcbiAgICB2b2lkIDAgIT09IHQubWF4QWRSZXZpdmVQZXJSb3VuZCAmJiAodGhpcy5fbWF4TiA9IHQubWF4QWRSZXZpdmVQZXJSb3VuZCk7XG4gICAgaWYgKHZvaWQgMCA9PT0gdGhpcy5sb2NhbERhdGEudXNlZEFkUmV2aXZlVGhpc1JvdW5kKSB7XG4gICAgICB0aGlzLmxvY2FsRGF0YS51c2VkQWRSZXZpdmVUaGlzUm91bmQgPSAwO1xuICAgICAgdGhpcy5sb2NhbERhdGEgPSB0aGlzLmxvY2FsRGF0YTtcbiAgICB9XG4gICAgdGhpcy5fbG9nKFwib25Mb2FkIG1heEFkUmV2aXZlUGVyUm91bmQ9XCIgKyB0aGlzLl9tYXhOICsgXCIgdXNlZEFkUmV2aXZlVGhpc1JvdW5kPVwiICsgdGhpcy5sb2NhbERhdGEudXNlZEFkUmV2aXZlVGhpc1JvdW5kKTtcbiAgfVxuICBfaXNUaWxlMk5vcm1hbCgpIHtcbiAgICByZXR1cm4gVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0Q3VycmVudEdhbWVUeXBlKCkgPT09IE1qR2FtZVR5cGUuVGlsZTJOb3JtYWw7XG4gIH1cbiAgX2xvZygpIHtcbiAgICBmb3IgKHZhciBlID0gW10sIHQgPSAwOyB0IDwgYXJndW1lbnRzLmxlbmd0aDsgdCsrKSBlW3RdID0gYXJndW1lbnRzW3RdO1xuICB9XG4gIG9uSXB0VDJJbml0U2xvdEJhcl9leGVjKGUsIHQpIHtcbiAgICBpZiAodGhpcy5faXNUaWxlMk5vcm1hbCgpKSB7XG4gICAgICB2YXIgaSA9IGUuaW5zLFxuICAgICAgICBvID0gbnVsbCA9PSBpID8gdm9pZCAwIDogaS5nYW1lQ29udGV4dCxcbiAgICAgICAgYSA9ICEhKG51bGwgPT0gbyA/IHZvaWQgMCA6IG8uZ2V0SXNOZXdHYW1lKCkpLFxuICAgICAgICBsID0gISEobnVsbCA9PSBvID8gdm9pZCAwIDogby5nZXRJc1Jlc3RhcnQoKSk7XG4gICAgICBpZiAoYSB8fCBsKSB7XG4gICAgICAgIHRoaXMubG9jYWxEYXRhLnVzZWRBZFJldml2ZVRoaXNSb3VuZCA9IDA7XG4gICAgICAgIHRoaXMubG9jYWxEYXRhID0gdGhpcy5sb2NhbERhdGE7XG4gICAgICAgIHRoaXMuX2xvZyhcIklwdFQySW5pdFNsb3RCYXJfZXhlYyDmuIXpm7blsZXnpLrmrKHmlbA6IGlzTmV3R2FtZT1cIiArIGEgKyBcIiBpc1Jlc3RhcnQ9XCIgKyBsKTtcbiAgICAgICAgdCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fbG9nKFwiSXB0VDJJbml0U2xvdEJhcl9leGVjIOS4jea4hembtuWxleekuuasoeaVsDogaXNOZXdHYW1lPVwiICsgYSArIFwiIGlzUmVzdGFydD1cIiArIGwgKyBcIu+8iOWGt+WQr+aBouWkjeetie+8iVwiKTtcbiAgICAgICAgdCgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9sb2coXCJJcHRUMkluaXRTbG90QmFyX2V4ZWMg6Lez6L+HOiDpnZ4gVGlsZTJOb3JtYWxcIik7XG4gICAgICB0KCk7XG4gICAgfVxuICB9XG4gIG9uVGlsZTJGYWlsQmh2X3B1c2hWaWV3KGUsIHQpIHtcbiAgICB2YXIgaSwgbywgYTtcbiAgICBpZiAodGhpcy5faXNUaWxlMk5vcm1hbCgpKSB7XG4gICAgICBpZiAoZS5pbnMpIHtcbiAgICAgICAgdmFyIGwgPSBudWxsID09PSAoaSA9IGUuYXJncykgfHwgdm9pZCAwID09PSBpID8gdm9pZCAwIDogaVswXTtcbiAgICAgICAgaWYgKG51bGwgPT0gbCA/IHZvaWQgMCA6IGwuZGF0YSkge1xuICAgICAgICAgIHZhciByID0gbnVsbCAhPT0gKG8gPSBsLmRhdGEucmV2aXZlTnVtKSAmJiB2b2lkIDAgIT09IG8gPyBvIDogMDtcbiAgICAgICAgICBpZiAociA+IDApIHtcbiAgICAgICAgICAgIGwuZGF0YS5hZFJldml2ZUFsbG93ZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5fbG9nKFwiVGlsZTJGYWlsQmh2X3B1c2hWaWV3IHJldml2ZU51bT1cIiArIHIgKyBcIiDihpIgYWRSZXZpdmVBbGxvd2VkPXRydWXvvIjmnInlhY3otLnlpI3mtLvvvIlcIik7XG4gICAgICAgICAgICB0KCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBzLFxuICAgICAgICAgICAgICBuID0gdGhpcy5nZXRNYXhDb3VudCgpLFxuICAgICAgICAgICAgICB1ID0gbnVsbCAhPT0gKGEgPSB0aGlzLmxvY2FsRGF0YS51c2VkQWRSZXZpdmVUaGlzUm91bmQpICYmIHZvaWQgMCAhPT0gYSA/IGEgOiAwO1xuICAgICAgICAgICAgcyA9IDAgIT09IG4gJiYgKC0xID09PSBuIHx8IHUgPCBuKTtcbiAgICAgICAgICAgIGwuZGF0YS5hZFJldml2ZUFsbG93ZWQgPSBzO1xuICAgICAgICAgICAgdGhpcy5fbG9nKFwiVGlsZTJGYWlsQmh2X3B1c2hWaWV3IOaXoOWFjei0ueWkjea0uzogbWF4Tj1cIiArIG4gKyBcIiB1c2VkU2hvd249XCIgKyB1ICsgXCIg4oaSIGFkUmV2aXZlQWxsb3dlZD1cIiArIHMpO1xuICAgICAgICAgICAgdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9sb2coXCJUaWxlMkZhaWxCaHZfcHVzaFZpZXcg6Lez6L+HOiDml6AgZWZmZWN0LmRhdGFcIik7XG4gICAgICAgICAgdCgpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9sb2coXCJUaWxlMkZhaWxCaHZfcHVzaFZpZXcg6Lez6L+HOiDml6AgYmVoYXZpb3JcIik7XG4gICAgICAgIHQoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fbG9nKFwiVGlsZTJGYWlsQmh2X3B1c2hWaWV3IOi3s+i/hzog6Z2eIFRpbGUyTm9ybWFsXCIpO1xuICAgICAgdCgpO1xuICAgIH1cbiAgfVxuICBvblRpbGUyRmFpbFZ3X3Nob3dBZEJ0blZ3KGUsIHQpIHtcbiAgICB2YXIgaTtcbiAgICBpZiAodGhpcy5faXNUaWxlMk5vcm1hbCgpKSB7XG4gICAgICB2YXIgbyA9IG51bGwgIT09IChpID0gdGhpcy5sb2NhbERhdGEudXNlZEFkUmV2aXZlVGhpc1JvdW5kKSAmJiB2b2lkIDAgIT09IGkgPyBpIDogMDtcbiAgICAgIHRoaXMubG9jYWxEYXRhLnVzZWRBZFJldml2ZVRoaXNSb3VuZCA9IG8gKyAxO1xuICAgICAgdGhpcy5sb2NhbERhdGEgPSB0aGlzLmxvY2FsRGF0YTtcbiAgICAgIHRoaXMuX2xvZyhcInNob3dBZEJ0blZ3IOWxleekuuW5v+WRiuWFpeWPoyArMTogXCIgKyBvICsgXCIg4oaSIFwiICsgdGhpcy5sb2NhbERhdGEudXNlZEFkUmV2aXZlVGhpc1JvdW5kKTtcbiAgICAgIHQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fbG9nKFwic2hvd0FkQnRuVncg6Lez6L+HOiDpnZ4gVGlsZTJOb3JtYWxcIik7XG4gICAgICB0KCk7XG4gICAgfVxuICB9XG4gIG9uVGlsZTJGYWlsVndfYWRSZXZpdmVTdWNjKGUsIHQpIHtcbiAgICB2YXIgaTtcbiAgICBpZiAodGhpcy5faXNUaWxlMk5vcm1hbCgpKSB7XG4gICAgICB2YXIgbyA9IG51bGwgIT09IChpID0gdGhpcy5sb2NhbERhdGEudXNlZEFkUmV2aXZlVGhpc1JvdW5kKSAmJiB2b2lkIDAgIT09IGkgPyBpIDogMDtcbiAgICAgIHRoaXMubG9jYWxEYXRhLnVzZWRBZFJldml2ZVRoaXNSb3VuZCA9IG8gKyAxO1xuICAgICAgdGhpcy5sb2NhbERhdGEgPSB0aGlzLmxvY2FsRGF0YTtcbiAgICAgIHRoaXMuX2xvZyhcImFkUmV2aXZlU3VjYyDnnIvlrozlub/lkYrlpI3mtLsgKzE6IFwiICsgbyArIFwiIOKGkiBcIiArIHRoaXMubG9jYWxEYXRhLnVzZWRBZFJldml2ZVRoaXNSb3VuZCk7XG4gICAgICB0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2xvZyhcImFkUmV2aXZlU3VjYyDot7Pov4c6IOmdniBUaWxlMk5vcm1hbFwiKTtcbiAgICAgIHQoKTtcbiAgICB9XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJUMkZhaWxBZFJldmlfZ2V0TWF4Q250XCIpXG4gIGdldE1heENvdW50KCkge1xuICAgIHJldHVybiB0aGlzLl9tYXhOO1xuICB9XG59Il19