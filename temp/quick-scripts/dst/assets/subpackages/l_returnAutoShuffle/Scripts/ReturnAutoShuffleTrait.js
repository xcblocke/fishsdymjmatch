
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_returnAutoShuffle/Scripts/ReturnAutoShuffleTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6590cF3t3dGy7aQ79HdQ3ZP', 'ReturnAutoShuffleTrait');
// subpackages/l_returnAutoShuffle/Scripts/ReturnAutoShuffleTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var ReturnAutoShuffleTrait = /** @class */ (function (_super) {
    __extends(ReturnAutoShuffleTrait, _super);
    function ReturnAutoShuffleTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._matchThreshold = 1;
        _this._cdHours = 3.5;
        _this._isCdChange = false;
        _this._startLevel = 2;
        return _this;
    }
    ReturnAutoShuffleTrait.prototype._getLastInGameTimeMs = function (t) {
        return this.localData.lastInGameTimeMsMap[t] || 0;
    };
    ReturnAutoShuffleTrait.prototype._setLastInGameTimeMs = function (t, a) {
        this.localData.lastInGameTimeMsMap[t] = a;
        this.localData.lastInGameTimeMsMap = this.localData.lastInGameTimeMsMap;
    };
    ReturnAutoShuffleTrait.prototype._getHasNormalExit = function (t) {
        return this.localData.hasNormalExitMap[t] || false;
    };
    ReturnAutoShuffleTrait.prototype._setHasNormalExit = function (t, a) {
        this.localData.hasNormalExitMap[t] = a;
        this.localData.hasNormalExitMap = this.localData.hasNormalExitMap;
    };
    ReturnAutoShuffleTrait.prototype._updateContinuousLoginDays = function () {
        var t = Date.now(), a = this.localData.lastLoginDate;
        if (a) {
            var e = new Date(a), i = new Date(t);
            if (e.getFullYear() !== i.getFullYear() || e.getMonth() !== i.getMonth() || e.getDate() !== i.getDate()) {
                if (1 === this._getDaysDiff(a, t)) {
                    this.localData.continuousLoginDays++;
                    this.localData.lastLoginDate = t;
                }
                else {
                    this.localData.continuousLoginDays = 0;
                    this.localData.lastLoginDate = t;
                }
                this.localData.continuousLoginDays = this.localData.continuousLoginDays;
                this.localData.lastLoginDate = this.localData.lastLoginDate;
            }
        }
        else {
            this.localData.continuousLoginDays = 0;
            this.localData.lastLoginDate = t;
        }
    };
    ReturnAutoShuffleTrait.prototype._getDaysDiff = function (t, a) {
        var e = new Date(t), i = new Date(a);
        e.setHours(0, 0, 0, 0);
        i.setHours(0, 0, 0, 0);
        var o = Math.abs(i.getTime() - e.getTime());
        return Math.floor(o / 86400000);
    };
    ReturnAutoShuffleTrait.prototype._getContinuousLoginDays = function () {
        return 0 === this.localData.continuousLoginDays ? 1 : this.localData.continuousLoginDays;
    };
    ReturnAutoShuffleTrait.prototype._getCurrentCdHours = function () {
        if (!this._isCdChange)
            return this._cdHours;
        var t = this._getContinuousLoginDays();
        return this._cdHours * t;
    };
    ReturnAutoShuffleTrait.prototype.onLoad = function () {
        var a, e, i, o, s;
        _super.prototype.onLoad.call(this);
        this._matchThreshold = (null === (a = this._traitData) || void 0 === a ? void 0 : a.matchThreshold) || 1;
        this._cdHours = (null === (e = this._traitData) || void 0 === e ? void 0 : e.cdHours) || 3.5;
        this._isCdChange = (null === (i = this._traitData) || void 0 === i ? void 0 : i.isCdChange) || false;
        this._startLevel = (null === (o = this._traitData) || void 0 === o ? void 0 : o.startLevel) || 2;
        this.localData.currentGameType || (this.localData.currentGameType = "");
        this.localData.lastInGameTimeMsMap || (this.localData.lastInGameTimeMsMap = {});
        this.localData.hasNormalExitMap || (this.localData.hasNormalExitMap = {});
        void 0 === this.localData.continuousLoginDays && (this.localData.continuousLoginDays = 0);
        this.localData.lastLoginDate || (this.localData.lastLoginDate = 0);
        this._isCdChange && this._updateContinuousLoginDays();
        if (this.localData.currentGameType) {
            var r = this.localData.currentGameType;
            if (!this._getHasNormalExit(r)) {
                var l = (null === (s = UserModel_1.default.getInstance().getGameDataByGameType(r).localData) || void 0 === s ? void 0 : s.lastUpdateTime) || 0;
                this._setLastInGameTimeMs(r, l || Date.now());
            }
        }
    };
    ReturnAutoShuffleTrait.prototype.onMainGameCtrl_uiDes = function (t, a) {
        if (UserModel_1.default.getInstance().normalData.getLevelId() < this._startLevel)
            a();
        else {
            var e = this.localData.currentGameType;
            if (e !== GameTypeEnums_1.MjGameType.Tile2Normal) {
                if (e) {
                    this._setHasNormalExit(e, true);
                    this._setLastInGameTimeMs(e, Date.now());
                    a();
                }
                else
                    a();
            }
            else
                a();
        }
    };
    ReturnAutoShuffleTrait.prototype.onIptInitView_pushEff = function (t, a) {
        var e = t.ins;
        if (e && e.gameContext) {
            var i = e.gameContext, o = i.getTileMapObject(), s = i.gameType;
            this.localData.currentGameType = s;
            if (s !== GameTypeEnums_1.MjGameType.Tile2Normal) {
                if (UserModel_1.default.getInstance().normalData.getLevelId() < this._startLevel)
                    a();
                else {
                    var r = i.getIsNewGame(), u = i.getIsRestart();
                    if (r || u) {
                        this._resetNormalExit(s);
                        a();
                    }
                    else {
                        var c = this._getLastInGameTimeMs(s);
                        this._getHasNormalExit(s);
                        if (c) {
                            var h = Date.now(), f = 3600000 * this._getCurrentCdHours(), p = h - c;
                            if (p < 0) {
                                this._resetNormalExit(s);
                                a();
                            }
                            else if (p < f) {
                                this._resetNormalExit(s);
                                a();
                            }
                            else {
                                if (o.getCanMatchCardPairNum() == this._matchThreshold) {
                                    i.shuffleModifier.shuffle();
                                    o.updateCanMatchTiles();
                                    i.gameModifier.modifyShuffle();
                                    this._resetNormalExit(s);
                                    a();
                                }
                                else {
                                    this._resetNormalExit(s);
                                    a();
                                }
                            }
                        }
                        else {
                            this._resetNormalExit(s);
                            a();
                        }
                    }
                }
            }
            else
                a();
        }
        else
            a();
    };
    ReturnAutoShuffleTrait.prototype._resetNormalExit = function (t) {
        this._setHasNormalExit(t, false);
        this._setLastInGameTimeMs(t, Date.now());
        this.localData.currentGameType = t;
    };
    ReturnAutoShuffleTrait.traitKey = "ReturnAutoShuffle";
    ReturnAutoShuffleTrait = __decorate([
        mj.trait,
        mj.class("ReturnAutoShuffleTrait")
    ], ReturnAutoShuffleTrait);
    return ReturnAutoShuffleTrait;
}(Trait_1.default));
exports.default = ReturnAutoShuffleTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3JldHVybkF1dG9TaHVmZmxlL1NjcmlwdHMvUmV0dXJuQXV0b1NodWZmbGVUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELHNFQUFpRTtBQUNqRSx3RkFBb0Y7QUFHcEY7SUFBb0QsMENBQUs7SUFBekQ7UUFBQSxxRUFnSkM7UUEvSUMscUJBQWUsR0FBRyxDQUFDLENBQUM7UUFDcEIsY0FBUSxHQUFHLEdBQUcsQ0FBQztRQUNmLGlCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLGlCQUFXLEdBQUcsQ0FBQyxDQUFDOztJQTRJbEIsQ0FBQztJQTFJQyxxREFBb0IsR0FBcEIsVUFBcUIsQ0FBQztRQUNwQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFDRCxxREFBb0IsR0FBcEIsVUFBcUIsQ0FBQyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFtQixDQUFDO0lBQzFFLENBQUM7SUFDRCxrREFBaUIsR0FBakIsVUFBa0IsQ0FBQztRQUNqQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDO0lBQ3JELENBQUM7SUFDRCxrREFBaUIsR0FBakIsVUFBa0IsQ0FBQyxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixD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QUMsQ0FBQzs0QkFDekIsQ0FBQyxFQUFFLENBQUM7eUJBQ0w7cUJBQ0Y7aUJBQ0Y7YUFDRjs7Z0JBQU0sQ0FBQyxFQUFFLENBQUM7U0FDWjs7WUFBTSxDQUFDLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFDRCxpREFBZ0IsR0FBaEIsVUFBaUIsQ0FBQztRQUNoQixJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUExSU0sK0JBQVEsR0FBRyxtQkFBbUIsQ0FBQztJQUxuQixzQkFBc0I7UUFGMUMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLHdCQUF3QixDQUFDO09BQ2Qsc0JBQXNCLENBZ0oxQztJQUFELDZCQUFDO0NBaEpELEFBZ0pDLENBaEptRCxlQUFLLEdBZ0p4RDtrQkFoSm9CLHNCQUFzQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvdXNlci9Vc2VyTW9kZWwnO1xuaW1wb3J0IHsgTWpHYW1lVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9zaW11bGF0b3IvY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIlJldHVybkF1dG9TaHVmZmxlVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJldHVybkF1dG9TaHVmZmxlVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIF9tYXRjaFRocmVzaG9sZCA9IDE7XG4gIF9jZEhvdXJzID0gMy41O1xuICBfaXNDZENoYW5nZSA9IGZhbHNlO1xuICBfc3RhcnRMZXZlbCA9IDI7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiUmV0dXJuQXV0b1NodWZmbGVcIjtcbiAgX2dldExhc3RJbkdhbWVUaW1lTXModCkge1xuICAgIHJldHVybiB0aGlzLmxvY2FsRGF0YS5sYXN0SW5HYW1lVGltZU1zTWFwW3RdIHx8IDA7XG4gIH1cbiAgX3NldExhc3RJbkdhbWVUaW1lTXModCwgYSkge1xuICAgIHRoaXMubG9jYWxEYXRhLmxhc3RJbkdhbWVUaW1lTXNNYXBbdF0gPSBhO1xuICAgIHRoaXMubG9jYWxEYXRhLmxhc3RJbkdhbWVUaW1lTXNNYXAgPSB0aGlzLmxvY2FsRGF0YS5sYXN0SW5HYW1lVGltZU1zTWFwO1xuICB9XG4gIF9nZXRIYXNOb3JtYWxFeGl0KHQpIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbERhdGEuaGFzTm9ybWFsRXhpdE1hcFt0XSB8fCBmYWxzZTtcbiAgfVxuICBfc2V0SGFzTm9ybWFsRXhpdCh0LCBhKSB7XG4gICAgdGhpcy5sb2NhbERhdGEuaGFzTm9ybWFsRXhpdE1hcFt0XSA9IGE7XG4gICAgdGhpcy5sb2NhbERhdGEuaGFzTm9ybWFsRXhpdE1hcCA9IHRoaXMubG9jYWxEYXRhLmhhc05vcm1hbEV4aXRNYXA7XG4gIH1cbiAgX3VwZGF0ZUNvbnRpbnVvdXNMb2dpbkRheXMoKSB7XG4gICAgdmFyIHQgPSBEYXRlLm5vdygpLFxuICAgICAgYSA9IHRoaXMubG9jYWxEYXRhLmxhc3RMb2dpbkRhdGU7XG4gICAgaWYgKGEpIHtcbiAgICAgIHZhciBlID0gbmV3IERhdGUoYSksXG4gICAgICAgIGkgPSBuZXcgRGF0ZSh0KTtcbiAgICAgIGlmIChlLmdldEZ1bGxZZWFyKCkgIT09IGkuZ2V0RnVsbFllYXIoKSB8fCBlLmdldE1vbnRoKCkgIT09IGkuZ2V0TW9udGgoKSB8fCBlLmdldERhdGUoKSAhPT0gaS5nZXREYXRlKCkpIHtcbiAgICAgICAgaWYgKDEgPT09IHRoaXMuX2dldERheXNEaWZmKGEsIHQpKSB7XG4gICAgICAgICAgdGhpcy5sb2NhbERhdGEuY29udGludW91c0xvZ2luRGF5cysrO1xuICAgICAgICAgIHRoaXMubG9jYWxEYXRhLmxhc3RMb2dpbkRhdGUgPSB0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMubG9jYWxEYXRhLmNvbnRpbnVvdXNMb2dpbkRheXMgPSAwO1xuICAgICAgICAgIHRoaXMubG9jYWxEYXRhLmxhc3RMb2dpbkRhdGUgPSB0O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubG9jYWxEYXRhLmNvbnRpbnVvdXNMb2dpbkRheXMgPSB0aGlzLmxvY2FsRGF0YS5jb250aW51b3VzTG9naW5EYXlzO1xuICAgICAgICB0aGlzLmxvY2FsRGF0YS5sYXN0TG9naW5EYXRlID0gdGhpcy5sb2NhbERhdGEubGFzdExvZ2luRGF0ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5sb2NhbERhdGEuY29udGludW91c0xvZ2luRGF5cyA9IDA7XG4gICAgICB0aGlzLmxvY2FsRGF0YS5sYXN0TG9naW5EYXRlID0gdDtcbiAgICB9XG4gIH1cbiAgX2dldERheXNEaWZmKHQsIGEpIHtcbiAgICB2YXIgZSA9IG5ldyBEYXRlKHQpLFxuICAgICAgaSA9IG5ldyBEYXRlKGEpO1xuICAgIGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gICAgaS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgICB2YXIgbyA9IE1hdGguYWJzKGkuZ2V0VGltZSgpIC0gZS5nZXRUaW1lKCkpO1xuICAgIHJldHVybiBNYXRoLmZsb29yKG8gLyA4NjQwMDAwMCk7XG4gIH1cbiAgX2dldENvbnRpbnVvdXNMb2dpbkRheXMoKSB7XG4gICAgcmV0dXJuIDAgPT09IHRoaXMubG9jYWxEYXRhLmNvbnRpbnVvdXNMb2dpbkRheXMgPyAxIDogdGhpcy5sb2NhbERhdGEuY29udGludW91c0xvZ2luRGF5cztcbiAgfVxuICBfZ2V0Q3VycmVudENkSG91cnMoKSB7XG4gICAgaWYgKCF0aGlzLl9pc0NkQ2hhbmdlKSByZXR1cm4gdGhpcy5fY2RIb3VycztcbiAgICB2YXIgdCA9IHRoaXMuX2dldENvbnRpbnVvdXNMb2dpbkRheXMoKTtcbiAgICByZXR1cm4gdGhpcy5fY2RIb3VycyAqIHQ7XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIHZhciBhLCBlLCBpLCBvLCBzO1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuX21hdGNoVGhyZXNob2xkID0gKG51bGwgPT09IChhID0gdGhpcy5fdHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IGEgPyB2b2lkIDAgOiBhLm1hdGNoVGhyZXNob2xkKSB8fCAxO1xuICAgIHRoaXMuX2NkSG91cnMgPSAobnVsbCA9PT0gKGUgPSB0aGlzLl90cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUuY2RIb3VycykgfHwgMy41O1xuICAgIHRoaXMuX2lzQ2RDaGFuZ2UgPSAobnVsbCA9PT0gKGkgPSB0aGlzLl90cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gaSA/IHZvaWQgMCA6IGkuaXNDZENoYW5nZSkgfHwgZmFsc2U7XG4gICAgdGhpcy5fc3RhcnRMZXZlbCA9IChudWxsID09PSAobyA9IHRoaXMuX3RyYWl0RGF0YSkgfHwgdm9pZCAwID09PSBvID8gdm9pZCAwIDogby5zdGFydExldmVsKSB8fCAyO1xuICAgIHRoaXMubG9jYWxEYXRhLmN1cnJlbnRHYW1lVHlwZSB8fCAodGhpcy5sb2NhbERhdGEuY3VycmVudEdhbWVUeXBlID0gXCJcIik7XG4gICAgdGhpcy5sb2NhbERhdGEubGFzdEluR2FtZVRpbWVNc01hcCB8fCAodGhpcy5sb2NhbERhdGEubGFzdEluR2FtZVRpbWVNc01hcCA9IHt9KTtcbiAgICB0aGlzLmxvY2FsRGF0YS5oYXNOb3JtYWxFeGl0TWFwIHx8ICh0aGlzLmxvY2FsRGF0YS5oYXNOb3JtYWxFeGl0TWFwID0ge30pO1xuICAgIHZvaWQgMCA9PT0gdGhpcy5sb2NhbERhdGEuY29udGludW91c0xvZ2luRGF5cyAmJiAodGhpcy5sb2NhbERhdGEuY29udGludW91c0xvZ2luRGF5cyA9IDApO1xuICAgIHRoaXMubG9jYWxEYXRhLmxhc3RMb2dpbkRhdGUgfHwgKHRoaXMubG9jYWxEYXRhLmxhc3RMb2dpbkRhdGUgPSAwKTtcbiAgICB0aGlzLl9pc0NkQ2hhbmdlICYmIHRoaXMuX3VwZGF0ZUNvbnRpbnVvdXNMb2dpbkRheXMoKTtcbiAgICBpZiAodGhpcy5sb2NhbERhdGEuY3VycmVudEdhbWVUeXBlKSB7XG4gICAgICB2YXIgciA9IHRoaXMubG9jYWxEYXRhLmN1cnJlbnRHYW1lVHlwZTtcbiAgICAgIGlmICghdGhpcy5fZ2V0SGFzTm9ybWFsRXhpdChyKSkge1xuICAgICAgICB2YXIgbCA9IChudWxsID09PSAocyA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEdhbWVEYXRhQnlHYW1lVHlwZShyKS5sb2NhbERhdGEpIHx8IHZvaWQgMCA9PT0gcyA/IHZvaWQgMCA6IHMubGFzdFVwZGF0ZVRpbWUpIHx8IDA7XG4gICAgICAgIHRoaXMuX3NldExhc3RJbkdhbWVUaW1lTXMociwgbCB8fCBEYXRlLm5vdygpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgb25NYWluR2FtZUN0cmxfdWlEZXModCwgYSkge1xuICAgIGlmIChVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5ub3JtYWxEYXRhLmdldExldmVsSWQoKSA8IHRoaXMuX3N0YXJ0TGV2ZWwpIGEoKTtlbHNlIHtcbiAgICAgIHZhciBlID0gdGhpcy5sb2NhbERhdGEuY3VycmVudEdhbWVUeXBlO1xuICAgICAgaWYgKGUgIT09IE1qR2FtZVR5cGUuVGlsZTJOb3JtYWwpIHtcbiAgICAgICAgaWYgKGUpIHtcbiAgICAgICAgICB0aGlzLl9zZXRIYXNOb3JtYWxFeGl0KGUsIHRydWUpO1xuICAgICAgICAgIHRoaXMuX3NldExhc3RJbkdhbWVUaW1lTXMoZSwgRGF0ZS5ub3coKSk7XG4gICAgICAgICAgYSgpO1xuICAgICAgICB9IGVsc2UgYSgpO1xuICAgICAgfSBlbHNlIGEoKTtcbiAgICB9XG4gIH1cbiAgb25JcHRJbml0Vmlld19wdXNoRWZmKHQsIGEpIHtcbiAgICB2YXIgZSA9IHQuaW5zO1xuICAgIGlmIChlICYmIGUuZ2FtZUNvbnRleHQpIHtcbiAgICAgIHZhciBpID0gZS5nYW1lQ29udGV4dCxcbiAgICAgICAgbyA9IGkuZ2V0VGlsZU1hcE9iamVjdCgpLFxuICAgICAgICBzID0gaS5nYW1lVHlwZTtcbiAgICAgIHRoaXMubG9jYWxEYXRhLmN1cnJlbnRHYW1lVHlwZSA9IHM7XG4gICAgICBpZiAocyAhPT0gTWpHYW1lVHlwZS5UaWxlMk5vcm1hbCkge1xuICAgICAgICBpZiAoVXNlck1vZGVsLmdldEluc3RhbmNlKCkubm9ybWFsRGF0YS5nZXRMZXZlbElkKCkgPCB0aGlzLl9zdGFydExldmVsKSBhKCk7ZWxzZSB7XG4gICAgICAgICAgdmFyIHIgPSBpLmdldElzTmV3R2FtZSgpLFxuICAgICAgICAgICAgdSA9IGkuZ2V0SXNSZXN0YXJ0KCk7XG4gICAgICAgICAgaWYgKHIgfHwgdSkge1xuICAgICAgICAgICAgdGhpcy5fcmVzZXROb3JtYWxFeGl0KHMpO1xuICAgICAgICAgICAgYSgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgYyA9IHRoaXMuX2dldExhc3RJbkdhbWVUaW1lTXMocyk7XG4gICAgICAgICAgICB0aGlzLl9nZXRIYXNOb3JtYWxFeGl0KHMpO1xuICAgICAgICAgICAgaWYgKGMpIHtcbiAgICAgICAgICAgICAgdmFyIGggPSBEYXRlLm5vdygpLFxuICAgICAgICAgICAgICAgIGYgPSAzNjAwMDAwICogdGhpcy5fZ2V0Q3VycmVudENkSG91cnMoKSxcbiAgICAgICAgICAgICAgICBwID0gaCAtIGM7XG4gICAgICAgICAgICAgIGlmIChwIDwgMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3Jlc2V0Tm9ybWFsRXhpdChzKTtcbiAgICAgICAgICAgICAgICBhKCk7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAocCA8IGYpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZXNldE5vcm1hbEV4aXQocyk7XG4gICAgICAgICAgICAgICAgYSgpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChvLmdldENhbk1hdGNoQ2FyZFBhaXJOdW0oKSA9PSB0aGlzLl9tYXRjaFRocmVzaG9sZCkge1xuICAgICAgICAgICAgICAgICAgaS5zaHVmZmxlTW9kaWZpZXIuc2h1ZmZsZSgpO1xuICAgICAgICAgICAgICAgICAgby51cGRhdGVDYW5NYXRjaFRpbGVzKCk7XG4gICAgICAgICAgICAgICAgICBpLmdhbWVNb2RpZmllci5tb2RpZnlTaHVmZmxlKCk7XG4gICAgICAgICAgICAgICAgICB0aGlzLl9yZXNldE5vcm1hbEV4aXQocyk7XG4gICAgICAgICAgICAgICAgICBhKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuX3Jlc2V0Tm9ybWFsRXhpdChzKTtcbiAgICAgICAgICAgICAgICAgIGEoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuX3Jlc2V0Tm9ybWFsRXhpdChzKTtcbiAgICAgICAgICAgICAgYSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGEoKTtcbiAgICB9IGVsc2UgYSgpO1xuICB9XG4gIF9yZXNldE5vcm1hbEV4aXQodCkge1xuICAgIHRoaXMuX3NldEhhc05vcm1hbEV4aXQodCwgZmFsc2UpO1xuICAgIHRoaXMuX3NldExhc3RJbkdhbWVUaW1lTXModCwgRGF0ZS5ub3coKSk7XG4gICAgdGhpcy5sb2NhbERhdGEuY3VycmVudEdhbWVUeXBlID0gdDtcbiAgfVxufSJdfQ==