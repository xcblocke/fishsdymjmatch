
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_idleReturnShuffle/Scripts/IdleReturnShuffleTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9409fnb/x5Oxb+/tEYTKmpD', 'IdleReturnShuffleTrait');
// subpackages/l_idleReturnShuffle/Scripts/IdleReturnShuffleTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var IdleReturnShuffleTrait = /** @class */ (function (_super) {
    __extends(IdleReturnShuffleTrait, _super);
    function IdleReturnShuffleTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._idleSeconds = 10;
        _this._maxTriggersPerLevel = 3;
        _this._startLevel = 2;
        return _this;
    }
    IdleReturnShuffleTrait.prototype._getLevelKey = function (t, e) {
        return t + "-" + e;
    };
    IdleReturnShuffleTrait.prototype._getTriggerCount = function (t, e) {
        var a = this._getLevelKey(t, e);
        return this.localData.triggerCountMap[a] || 0;
    };
    IdleReturnShuffleTrait.prototype._incrementTriggerCount = function (t, e) {
        var a = this._getLevelKey(t, e), r = this._getTriggerCount(t, e);
        this.localData.triggerCountMap[a] = r + 1;
        this.localData.triggerCountMap = this.localData.triggerCountMap;
    };
    IdleReturnShuffleTrait.prototype._getHasIdled = function (t) {
        return this.localData.hasIdledMap[t] || false;
    };
    IdleReturnShuffleTrait.prototype._setHasIdled = function (t, e) {
        this.localData.hasIdledMap[t] = e;
        this.localData.hasIdledMap = this.localData.hasIdledMap;
    };
    IdleReturnShuffleTrait.prototype._getLastMatchTimeMs = function (t) {
        return this.localData.lastMatchTimeMsMap[t] || 0;
    };
    IdleReturnShuffleTrait.prototype._setLastMatchTimeMs = function (t, e) {
        this.localData.lastMatchTimeMsMap[t] = e;
        this.localData.lastMatchTimeMsMap = this.localData.lastMatchTimeMsMap;
    };
    IdleReturnShuffleTrait.prototype._getHasNormalExit = function (t) {
        return this.localData.hasNormalExitMap[t] || false;
    };
    IdleReturnShuffleTrait.prototype._setHasNormalExit = function (t, e) {
        this.localData.hasNormalExitMap[t] = e;
        this.localData.hasNormalExitMap = this.localData.hasNormalExitMap;
    };
    IdleReturnShuffleTrait.prototype.onLoad = function () {
        var e, a, r, i;
        _super.prototype.onLoad.call(this);
        this._idleSeconds = (null === (e = this._traitData) || void 0 === e ? void 0 : e.idleSeconds) || 10;
        this._maxTriggersPerLevel = (null === (a = this._traitData) || void 0 === a ? void 0 : a.maxTriggersPerLevel) || 3;
        this._startLevel = (null === (r = this._traitData) || void 0 === r ? void 0 : r.startLevel) || 2;
        this.localData.currentGameType || (this.localData.currentGameType = "");
        this.localData.currentLevelId || (this.localData.currentLevelId = 0);
        this.localData.triggerCountMap || (this.localData.triggerCountMap = {});
        this.localData.hasIdledMap || (this.localData.hasIdledMap = {});
        this.localData.lastMatchTimeMsMap || (this.localData.lastMatchTimeMsMap = {});
        this.localData.hasNormalExitMap || (this.localData.hasNormalExitMap = {});
        if (this.localData.currentGameType) {
            var s = this.localData.currentGameType, l = this._getHasNormalExit(s), n = this._getLastMatchTimeMs(s);
            if (!l && n > 0) {
                (((null === (i = UserModel_1.default.getInstance().getGameDataByGameType(s).localData) || void 0 === i ? void 0 : i.lastUpdateTime) || 0) - n) / 1000 >= this._idleSeconds && this._setHasIdled(s, true);
            }
        }
        var c = this._getLevelKey(this.localData.currentGameType, this.localData.currentLevelId);
        this.localData.triggerCountMap[c], this._getHasIdled(this.localData.currentGameType);
    };
    IdleReturnShuffleTrait.prototype.onClearBhv_collision = function (t, e) {
        var a = UserModel_1.default.getInstance();
        if (a.normalData.getLevelId() < this._startLevel)
            e();
        else {
            var r = a.getCurrentGameType(), i = Date.now();
            this._setLastMatchTimeMs(r, i);
            e();
        }
    };
    IdleReturnShuffleTrait.prototype.onMainGameCtrl_uiDes = function (t, e) {
        var a = UserModel_1.default.getInstance();
        if (a.normalData.getLevelId() < this._startLevel)
            e();
        else {
            var r = this.localData.currentGameType || a.getCurrentGameType();
            this._setHasNormalExit(r, true);
            var i = this._getLastMatchTimeMs(r);
            if (i && 0 !== i) {
                if ((Date.now() - i) / 1000 >= this._idleSeconds) {
                    this._setHasIdled(r, true);
                }
                else {
                    this._setHasIdled(r, false);
                }
                e();
            }
            else
                e();
        }
    };
    IdleReturnShuffleTrait.prototype.onIptInitView_pushEff = function (t, e) {
        var a = t.ins;
        if (a && a.gameContext) {
            var r = a.gameContext, i = r.getTileMapObject();
            if (UserModel_1.default.getInstance().normalData.getLevelId() < this._startLevel)
                e();
            else {
                var s = r.getIsNewGame(), l = r.getIsRestart(), n = r.getGameData().getLevelId(), c = r.gameType;
                this.localData.currentGameType = c;
                if (s || l) {
                    this.localData.currentLevelId, this.localData.currentGameType;
                    this._setHasIdled(c, false);
                    this._setHasNormalExit(c, false);
                    this._setLastMatchTimeMs(c, Date.now());
                    this.localData.currentGameType = c;
                    this.localData.currentLevelId = n;
                    e();
                }
                else if (this._getHasIdled(c)) {
                    if (this._getTriggerCount(c, n) >= this._maxTriggersPerLevel) {
                        this._setHasIdled(c, false);
                        this._setHasNormalExit(c, false);
                        e();
                    }
                    else {
                        r.shuffleModifier.shuffle();
                        i.updateCanMatchTiles();
                        r.gameModifier.modifyShuffle();
                        this._incrementTriggerCount(c, n);
                        this._setHasIdled(c, false);
                        this._setHasNormalExit(c, false);
                        this._setLastMatchTimeMs(c, Date.now());
                        this.localData.currentGameType = c;
                        this.localData.currentLevelId = n;
                        this._getTriggerCount(c, n);
                        e();
                    }
                }
                else {
                    var h = this._getLastMatchTimeMs(c);
                    h && 0 !== h || this._setLastMatchTimeMs(c, Date.now());
                    this._setHasNormalExit(c, false);
                    e();
                }
            }
        }
        else
            e();
    };
    IdleReturnShuffleTrait.traitKey = "IdleReturnShuffle";
    IdleReturnShuffleTrait = __decorate([
        mj.trait,
        mj.class("IdleReturnShuffleTrait")
    ], IdleReturnShuffleTrait);
    return IdleReturnShuffleTrait;
}(Trait_1.default));
exports.default = IdleReturnShuffleTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2lkbGVSZXR1cm5TaHVmZmxlL1NjcmlwdHMvSWRsZVJldHVyblNodWZmbGVUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELHNFQUFpRTtBQUdqRTtJQUFvRCwwQ0FBSztJQUF6RDtRQUFBLHFFQXFJQztRQXBJQyxrQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUNsQiwwQkFBb0IsR0FBRyxDQUFDLENBQUM7UUFDekIsaUJBQVcsR0FBRyxDQUFDLENBQUM7O0lBa0lsQixDQUFDO0lBaElDLDZDQUFZLEdBQVosVUFBYSxDQUFDLEVBQUUsQ0FBQztRQUNmLE9BQU8sQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDckIsQ0FBQztJQUNELGlEQUFnQixHQUFoQixVQUFpQixDQUFDLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNoQyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBQ0QsdURBQXNCLEdBQXRCLFVBQXVCLENBQUMsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUM3QixDQUFDLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDO0lBQ2xFLENBQUM7SUFDRCw2Q0FBWSxHQUFaLFVBQWEsQ0FB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QUFDLENBQUM7d0JBQ2xDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7d0JBQzVCLENBQUMsRUFBRSxDQUFDO3FCQUNMO2lCQUNGO3FCQUFNO29CQUNMLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDcEMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztvQkFDeEQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztvQkFDakMsQ0FBQyxFQUFFLENBQUM7aUJBQ0w7YUFDRjtTQUNGOztZQUFNLENBQUMsRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQWhJTSwrQkFBUSxHQUFHLG1CQUFtQixDQUFDO0lBSm5CLHNCQUFzQjtRQUYxQyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsd0JBQXdCLENBQUM7T0FDZCxzQkFBc0IsQ0FxSTFDO0lBQUQsNkJBQUM7Q0FySUQsQUFxSUMsQ0FySW1ELGVBQUssR0FxSXhEO2tCQXJJb0Isc0JBQXNCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS91c2VyL1VzZXJNb2RlbCc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIklkbGVSZXR1cm5TaHVmZmxlVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElkbGVSZXR1cm5TaHVmZmxlVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIF9pZGxlU2Vjb25kcyA9IDEwO1xuICBfbWF4VHJpZ2dlcnNQZXJMZXZlbCA9IDM7XG4gIF9zdGFydExldmVsID0gMjtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJJZGxlUmV0dXJuU2h1ZmZsZVwiO1xuICBfZ2V0TGV2ZWxLZXkodCwgZSkge1xuICAgIHJldHVybiB0ICsgXCItXCIgKyBlO1xuICB9XG4gIF9nZXRUcmlnZ2VyQ291bnQodCwgZSkge1xuICAgIHZhciBhID0gdGhpcy5fZ2V0TGV2ZWxLZXkodCwgZSk7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxEYXRhLnRyaWdnZXJDb3VudE1hcFthXSB8fCAwO1xuICB9XG4gIF9pbmNyZW1lbnRUcmlnZ2VyQ291bnQodCwgZSkge1xuICAgIHZhciBhID0gdGhpcy5fZ2V0TGV2ZWxLZXkodCwgZSksXG4gICAgICByID0gdGhpcy5fZ2V0VHJpZ2dlckNvdW50KHQsIGUpO1xuICAgIHRoaXMubG9jYWxEYXRhLnRyaWdnZXJDb3VudE1hcFthXSA9IHIgKyAxO1xuICAgIHRoaXMubG9jYWxEYXRhLnRyaWdnZXJDb3VudE1hcCA9IHRoaXMubG9jYWxEYXRhLnRyaWdnZXJDb3VudE1hcDtcbiAgfVxuICBfZ2V0SGFzSWRsZWQodCkge1xuICAgIHJldHVybiB0aGlzLmxvY2FsRGF0YS5oYXNJZGxlZE1hcFt0XSB8fCBmYWxzZTtcbiAgfVxuICBfc2V0SGFzSWRsZWQodCwgZSkge1xuICAgIHRoaXMubG9jYWxEYXRhLmhhc0lkbGVkTWFwW3RdID0gZTtcbiAgICB0aGlzLmxvY2FsRGF0YS5oYXNJZGxlZE1hcCA9IHRoaXMubG9jYWxEYXRhLmhhc0lkbGVkTWFwO1xuICB9XG4gIF9nZXRMYXN0TWF0Y2hUaW1lTXModCkge1xuICAgIHJldHVybiB0aGlzLmxvY2FsRGF0YS5sYXN0TWF0Y2hUaW1lTXNNYXBbdF0gfHwgMDtcbiAgfVxuICBfc2V0TGFzdE1hdGNoVGltZU1zKHQsIGUpIHtcbiAgICB0aGlzLmxvY2FsRGF0YS5sYXN0TWF0Y2hUaW1lTXNNYXBbdF0gPSBlO1xuICAgIHRoaXMubG9jYWxEYXRhLmxhc3RNYXRjaFRpbWVNc01hcCA9IHRoaXMubG9jYWxEYXRhLmxhc3RNYXRjaFRpbWVNc01hcDtcbiAgfVxuICBfZ2V0SGFzTm9ybWFsRXhpdCh0KSB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxEYXRhLmhhc05vcm1hbEV4aXRNYXBbdF0gfHwgZmFsc2U7XG4gIH1cbiAgX3NldEhhc05vcm1hbEV4aXQodCwgZSkge1xuICAgIHRoaXMubG9jYWxEYXRhLmhhc05vcm1hbEV4aXRNYXBbdF0gPSBlO1xuICAgIHRoaXMubG9jYWxEYXRhLmhhc05vcm1hbEV4aXRNYXAgPSB0aGlzLmxvY2FsRGF0YS5oYXNOb3JtYWxFeGl0TWFwO1xuICB9XG4gIG9uTG9hZCgpIHtcbiAgICB2YXIgZSwgYSwgciwgaTtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLl9pZGxlU2Vjb25kcyA9IChudWxsID09PSAoZSA9IHRoaXMuX3RyYWl0RGF0YSkgfHwgdm9pZCAwID09PSBlID8gdm9pZCAwIDogZS5pZGxlU2Vjb25kcykgfHwgMTA7XG4gICAgdGhpcy5fbWF4VHJpZ2dlcnNQZXJMZXZlbCA9IChudWxsID09PSAoYSA9IHRoaXMuX3RyYWl0RGF0YSkgfHwgdm9pZCAwID09PSBhID8gdm9pZCAwIDogYS5tYXhUcmlnZ2Vyc1BlckxldmVsKSB8fCAzO1xuICAgIHRoaXMuX3N0YXJ0TGV2ZWwgPSAobnVsbCA9PT0gKHIgPSB0aGlzLl90cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gciA/IHZvaWQgMCA6IHIuc3RhcnRMZXZlbCkgfHwgMjtcbiAgICB0aGlzLmxvY2FsRGF0YS5jdXJyZW50R2FtZVR5cGUgfHwgKHRoaXMubG9jYWxEYXRhLmN1cnJlbnRHYW1lVHlwZSA9IFwiXCIpO1xuICAgIHRoaXMubG9jYWxEYXRhLmN1cnJlbnRMZXZlbElkIHx8ICh0aGlzLmxvY2FsRGF0YS5jdXJyZW50TGV2ZWxJZCA9IDApO1xuICAgIHRoaXMubG9jYWxEYXRhLnRyaWdnZXJDb3VudE1hcCB8fCAodGhpcy5sb2NhbERhdGEudHJpZ2dlckNvdW50TWFwID0ge30pO1xuICAgIHRoaXMubG9jYWxEYXRhLmhhc0lkbGVkTWFwIHx8ICh0aGlzLmxvY2FsRGF0YS5oYXNJZGxlZE1hcCA9IHt9KTtcbiAgICB0aGlzLmxvY2FsRGF0YS5sYXN0TWF0Y2hUaW1lTXNNYXAgfHwgKHRoaXMubG9jYWxEYXRhLmxhc3RNYXRjaFRpbWVNc01hcCA9IHt9KTtcbiAgICB0aGlzLmxvY2FsRGF0YS5oYXNOb3JtYWxFeGl0TWFwIHx8ICh0aGlzLmxvY2FsRGF0YS5oYXNOb3JtYWxFeGl0TWFwID0ge30pO1xuICAgIGlmICh0aGlzLmxvY2FsRGF0YS5jdXJyZW50R2FtZVR5cGUpIHtcbiAgICAgIHZhciBzID0gdGhpcy5sb2NhbERhdGEuY3VycmVudEdhbWVUeXBlLFxuICAgICAgICBsID0gdGhpcy5fZ2V0SGFzTm9ybWFsRXhpdChzKSxcbiAgICAgICAgbiA9IHRoaXMuX2dldExhc3RNYXRjaFRpbWVNcyhzKTtcbiAgICAgIGlmICghbCAmJiBuID4gMCkge1xuICAgICAgICAoKChudWxsID09PSAoaSA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEdhbWVEYXRhQnlHYW1lVHlwZShzKS5sb2NhbERhdGEpIHx8IHZvaWQgMCA9PT0gaSA/IHZvaWQgMCA6IGkubGFzdFVwZGF0ZVRpbWUpIHx8IDApIC0gbikgLyAxMDAwID49IHRoaXMuX2lkbGVTZWNvbmRzICYmIHRoaXMuX3NldEhhc0lkbGVkKHMsIHRydWUpO1xuICAgICAgfVxuICAgIH1cbiAgICB2YXIgYyA9IHRoaXMuX2dldExldmVsS2V5KHRoaXMubG9jYWxEYXRhLmN1cnJlbnRHYW1lVHlwZSwgdGhpcy5sb2NhbERhdGEuY3VycmVudExldmVsSWQpO1xuICAgIHRoaXMubG9jYWxEYXRhLnRyaWdnZXJDb3VudE1hcFtjXSwgdGhpcy5fZ2V0SGFzSWRsZWQodGhpcy5sb2NhbERhdGEuY3VycmVudEdhbWVUeXBlKTtcbiAgfVxuICBvbkNsZWFyQmh2X2NvbGxpc2lvbih0LCBlKSB7XG4gICAgdmFyIGEgPSBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKTtcbiAgICBpZiAoYS5ub3JtYWxEYXRhLmdldExldmVsSWQoKSA8IHRoaXMuX3N0YXJ0TGV2ZWwpIGUoKTtlbHNlIHtcbiAgICAgIHZhciByID0gYS5nZXRDdXJyZW50R2FtZVR5cGUoKSxcbiAgICAgICAgaSA9IERhdGUubm93KCk7XG4gICAgICB0aGlzLl9zZXRMYXN0TWF0Y2hUaW1lTXMociwgaSk7XG4gICAgICBlKCk7XG4gICAgfVxuICB9XG4gIG9uTWFpbkdhbWVDdHJsX3VpRGVzKHQsIGUpIHtcbiAgICB2YXIgYSA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpO1xuICAgIGlmIChhLm5vcm1hbERhdGEuZ2V0TGV2ZWxJZCgpIDwgdGhpcy5fc3RhcnRMZXZlbCkgZSgpO2Vsc2Uge1xuICAgICAgdmFyIHIgPSB0aGlzLmxvY2FsRGF0YS5jdXJyZW50R2FtZVR5cGUgfHwgYS5nZXRDdXJyZW50R2FtZVR5cGUoKTtcbiAgICAgIHRoaXMuX3NldEhhc05vcm1hbEV4aXQociwgdHJ1ZSk7XG4gICAgICB2YXIgaSA9IHRoaXMuX2dldExhc3RNYXRjaFRpbWVNcyhyKTtcbiAgICAgIGlmIChpICYmIDAgIT09IGkpIHtcbiAgICAgICAgaWYgKChEYXRlLm5vdygpIC0gaSkgLyAxMDAwID49IHRoaXMuX2lkbGVTZWNvbmRzKSB7XG4gICAgICAgICAgdGhpcy5fc2V0SGFzSWRsZWQociwgdHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fc2V0SGFzSWRsZWQociwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIGUoKTtcbiAgICAgIH0gZWxzZSBlKCk7XG4gICAgfVxuICB9XG4gIG9uSXB0SW5pdFZpZXdfcHVzaEVmZih0LCBlKSB7XG4gICAgdmFyIGEgPSB0LmlucztcbiAgICBpZiAoYSAmJiBhLmdhbWVDb250ZXh0KSB7XG4gICAgICB2YXIgciA9IGEuZ2FtZUNvbnRleHQsXG4gICAgICAgIGkgPSByLmdldFRpbGVNYXBPYmplY3QoKTtcbiAgICAgIGlmIChVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5ub3JtYWxEYXRhLmdldExldmVsSWQoKSA8IHRoaXMuX3N0YXJ0TGV2ZWwpIGUoKTtlbHNlIHtcbiAgICAgICAgdmFyIHMgPSByLmdldElzTmV3R2FtZSgpLFxuICAgICAgICAgIGwgPSByLmdldElzUmVzdGFydCgpLFxuICAgICAgICAgIG4gPSByLmdldEdhbWVEYXRhKCkuZ2V0TGV2ZWxJZCgpLFxuICAgICAgICAgIGMgPSByLmdhbWVUeXBlO1xuICAgICAgICB0aGlzLmxvY2FsRGF0YS5jdXJyZW50R2FtZVR5cGUgPSBjO1xuICAgICAgICBpZiAocyB8fCBsKSB7XG4gICAgICAgICAgdGhpcy5sb2NhbERhdGEuY3VycmVudExldmVsSWQsIHRoaXMubG9jYWxEYXRhLmN1cnJlbnRHYW1lVHlwZTtcbiAgICAgICAgICB0aGlzLl9zZXRIYXNJZGxlZChjLCBmYWxzZSk7XG4gICAgICAgICAgdGhpcy5fc2V0SGFzTm9ybWFsRXhpdChjLCBmYWxzZSk7XG4gICAgICAgICAgdGhpcy5fc2V0TGFzdE1hdGNoVGltZU1zKGMsIERhdGUubm93KCkpO1xuICAgICAgICAgIHRoaXMubG9jYWxEYXRhLmN1cnJlbnRHYW1lVHlwZSA9IGM7XG4gICAgICAgICAgdGhpcy5sb2NhbERhdGEuY3VycmVudExldmVsSWQgPSBuO1xuICAgICAgICAgIGUoKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9nZXRIYXNJZGxlZChjKSkge1xuICAgICAgICAgIGlmICh0aGlzLl9nZXRUcmlnZ2VyQ291bnQoYywgbikgPj0gdGhpcy5fbWF4VHJpZ2dlcnNQZXJMZXZlbCkge1xuICAgICAgICAgICAgdGhpcy5fc2V0SGFzSWRsZWQoYywgZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy5fc2V0SGFzTm9ybWFsRXhpdChjLCBmYWxzZSk7XG4gICAgICAgICAgICBlKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHIuc2h1ZmZsZU1vZGlmaWVyLnNodWZmbGUoKTtcbiAgICAgICAgICAgIGkudXBkYXRlQ2FuTWF0Y2hUaWxlcygpO1xuICAgICAgICAgICAgci5nYW1lTW9kaWZpZXIubW9kaWZ5U2h1ZmZsZSgpO1xuICAgICAgICAgICAgdGhpcy5faW5jcmVtZW50VHJpZ2dlckNvdW50KGMsIG4pO1xuICAgICAgICAgICAgdGhpcy5fc2V0SGFzSWRsZWQoYywgZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy5fc2V0SGFzTm9ybWFsRXhpdChjLCBmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLl9zZXRMYXN0TWF0Y2hUaW1lTXMoYywgRGF0ZS5ub3coKSk7XG4gICAgICAgICAgICB0aGlzLmxvY2FsRGF0YS5jdXJyZW50R2FtZVR5cGUgPSBjO1xuICAgICAgICAgICAgdGhpcy5sb2NhbERhdGEuY3VycmVudExldmVsSWQgPSBuO1xuICAgICAgICAgICAgdGhpcy5fZ2V0VHJpZ2dlckNvdW50KGMsIG4pO1xuICAgICAgICAgICAgZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgaCA9IHRoaXMuX2dldExhc3RNYXRjaFRpbWVNcyhjKTtcbiAgICAgICAgICBoICYmIDAgIT09IGggfHwgdGhpcy5fc2V0TGFzdE1hdGNoVGltZU1zKGMsIERhdGUubm93KCkpO1xuICAgICAgICAgIHRoaXMuX3NldEhhc05vcm1hbEV4aXQoYywgZmFsc2UpO1xuICAgICAgICAgIGUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBlKCk7XG4gIH1cbn0iXX0=