
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_materialCardOpt/Scripts/MaterialCardOpt2Trait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a74a7CFt15Bwr9gsqLUhApn', 'MaterialCardOpt2Trait');
// subpackages/l_materialCardOpt/Scripts/MaterialCardOpt2Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var MaterialCardOptBaseTrait_1 = require("./MaterialCardOptBaseTrait");
var MaterialCardOptListTrait_1 = require("./MaterialCardOptListTrait");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var MaterialCardOpt2Trait = /** @class */ (function (_super) {
    __extends(MaterialCardOpt2Trait, _super);
    function MaterialCardOpt2Trait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._startLevel = 10;
        _this._intervalRange = [3, 5];
        _this._gameModes = [GameTypeEnums_1.MjGameType.Normal];
        return _this;
    }
    MaterialCardOpt2Trait_1 = MaterialCardOpt2Trait;
    MaterialCardOpt2Trait.prototype.onLoad = function () {
        var e, r, a, i, o, n;
        _super.prototype.onLoad.call(this);
        this._startLevel = null !== (r = null === (e = this._traitData) || void 0 === e ? void 0 : e.startLevel) && void 0 !== r ? r : 10;
        this._intervalRange = null !== (i = null === (a = this._traitData) || void 0 === a ? void 0 : a.intervalRange) && void 0 !== i ? i : [3, 5];
        this._gameModes = null !== (n = null === (o = this._traitData) || void 0 === o ? void 0 : o.gameModes) && void 0 !== n ? n : [GameTypeEnums_1.MjGameType.Normal];
        this.isLocalEmpty(this.localData.modeData) && (this.localData.modeData = {});
    };
    MaterialCardOpt2Trait.prototype.onGsListener_onNewGame = function (t, e) {
        try {
            if (!this.isGameModeMatch(this._gameModes)) {
                e();
                return;
            }
            var a = this.getCurrentGameDataLevel();
            if (a >= this._getNextTriggerLevel()) {
                var i = this._generateRandomInterval();
                this._setNextTriggerLevel(a + i);
                this._triggerMaterialChange();
            }
            else
                0 !== this.getCurMaterialCard() && this.setCurMaterialCard(0);
            e();
        }
        catch (t) {
            console.error("[" + MaterialCardOpt2Trait_1.traitKey + "] 处理新游戏事件失败: " + (null == t ? void 0 : t.message));
            e();
        }
    };
    MaterialCardOpt2Trait.prototype._getNextTriggerLevel = function () {
        var t, e = this.getCurrentGameType();
        return null !== (t = this.localData.modeData[e]) && void 0 !== t ? t : this._startLevel;
    };
    MaterialCardOpt2Trait.prototype._setNextTriggerLevel = function (t) {
        var e = this.getCurrentGameType();
        this.localData.modeData[e] = t;
        this.localData.modeData = this.localData.modeData;
    };
    MaterialCardOpt2Trait.prototype._generateRandomInterval = function () {
        var t = __read(this._intervalRange, 2), e = t[0], r = t[1];
        return e + Math.floor(Math.random() * (r - e + 1));
    };
    MaterialCardOpt2Trait.prototype._triggerMaterialChange = function () {
        var t = MaterialCardOptListTrait_1.default.getInstance();
        t && t.switchToNextMaterialCard();
    };
    var MaterialCardOpt2Trait_1;
    MaterialCardOpt2Trait.traitKey = "MaterialCardOpt2";
    MaterialCardOpt2Trait = MaterialCardOpt2Trait_1 = __decorate([
        mj.trait,
        mj.class("MaterialCardOpt2Trait")
    ], MaterialCardOpt2Trait);
    return MaterialCardOpt2Trait;
}(MaterialCardOptBaseTrait_1.default));
exports.default = MaterialCardOpt2Trait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX21hdGVyaWFsQ2FyZE9wdC9TY3JpcHRzL01hdGVyaWFsQ2FyZE9wdDJUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUVBQWtFO0FBQ2xFLHVFQUFrRTtBQUNsRSx3RkFBb0Y7QUFHcEY7SUFBbUQseUNBQXdCO0lBQTNFO1FBQUEscUVBbURDO1FBbERDLGlCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLG9CQUFjLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDeEIsZ0JBQVUsR0FBRyxDQUFDLDBCQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7O0lBZ0RuQyxDQUFDOzhCQW5Eb0IscUJBQXFCO0lBS3hDLHNDQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3JCLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNsSSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FB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QUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDWCxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBQ0Qsc0RBQXNCLEdBQXRCO1FBQ0UsSUFBSSxDQUFDLEdBQUcsa0NBQXdCLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDL0MsQ0FBQyxJQUFJLENBQUMsQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO0lBQ3BDLENBQUM7O0lBOUNNLDhCQUFRLEdBQUcsa0JBQWtCLENBQUM7SUFKbEIscUJBQXFCO1FBRnpDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQztPQUNiLHFCQUFxQixDQW1EekM7SUFBRCw0QkFBQztDQW5ERCxBQW1EQyxDQW5Ea0Qsa0NBQXdCLEdBbUQxRTtrQkFuRG9CLHFCQUFxQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNYXRlcmlhbENhcmRPcHRCYXNlVHJhaXQgZnJvbSAnLi9NYXRlcmlhbENhcmRPcHRCYXNlVHJhaXQnO1xuaW1wb3J0IE1hdGVyaWFsQ2FyZE9wdExpc3RUcmFpdCBmcm9tICcuL01hdGVyaWFsQ2FyZE9wdExpc3RUcmFpdCc7XG5pbXBvcnQgeyBNakdhbWVUeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiTWF0ZXJpYWxDYXJkT3B0MlRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXRlcmlhbENhcmRPcHQyVHJhaXQgZXh0ZW5kcyBNYXRlcmlhbENhcmRPcHRCYXNlVHJhaXQge1xuICBfc3RhcnRMZXZlbCA9IDEwO1xuICBfaW50ZXJ2YWxSYW5nZSA9IFszLCA1XTtcbiAgX2dhbWVNb2RlcyA9IFtNakdhbWVUeXBlLk5vcm1hbF07XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiTWF0ZXJpYWxDYXJkT3B0MlwiO1xuICBvbkxvYWQoKSB7XG4gICAgdmFyIGUsIHIsIGEsIGksIG8sIG47XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5fc3RhcnRMZXZlbCA9IG51bGwgIT09IChyID0gbnVsbCA9PT0gKGUgPSB0aGlzLl90cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUuc3RhcnRMZXZlbCkgJiYgdm9pZCAwICE9PSByID8gciA6IDEwO1xuICAgIHRoaXMuX2ludGVydmFsUmFuZ2UgPSBudWxsICE9PSAoaSA9IG51bGwgPT09IChhID0gdGhpcy5fdHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IGEgPyB2b2lkIDAgOiBhLmludGVydmFsUmFuZ2UpICYmIHZvaWQgMCAhPT0gaSA/IGkgOiBbMywgNV07XG4gICAgdGhpcy5fZ2FtZU1vZGVzID0gbnVsbCAhPT0gKG4gPSBudWxsID09PSAobyA9IHRoaXMuX3RyYWl0RGF0YSkgfHwgdm9pZCAwID09PSBvID8gdm9pZCAwIDogby5nYW1lTW9kZXMpICYmIHZvaWQgMCAhPT0gbiA/IG4gOiBbTWpHYW1lVHlwZS5Ob3JtYWxdO1xuICAgIHRoaXMuaXNMb2NhbEVtcHR5KHRoaXMubG9jYWxEYXRhLm1vZGVEYXRhKSAmJiAodGhpcy5sb2NhbERhdGEubW9kZURhdGEgPSB7fSk7XG4gIH1cbiAgb25Hc0xpc3RlbmVyX29uTmV3R2FtZSh0LCBlKSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghdGhpcy5pc0dhbWVNb2RlTWF0Y2godGhpcy5fZ2FtZU1vZGVzKSkge1xuICAgICAgICBlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBhID0gdGhpcy5nZXRDdXJyZW50R2FtZURhdGFMZXZlbCgpO1xuICAgICAgaWYgKGEgPj0gdGhpcy5fZ2V0TmV4dFRyaWdnZXJMZXZlbCgpKSB7XG4gICAgICAgIHZhciBpID0gdGhpcy5fZ2VuZXJhdGVSYW5kb21JbnRlcnZhbCgpO1xuICAgICAgICB0aGlzLl9zZXROZXh0VHJpZ2dlckxldmVsKGEgKyBpKTtcbiAgICAgICAgdGhpcy5fdHJpZ2dlck1hdGVyaWFsQ2hhbmdlKCk7XG4gICAgICB9IGVsc2UgMCAhPT0gdGhpcy5nZXRDdXJNYXRlcmlhbENhcmQoKSAmJiB0aGlzLnNldEN1ck1hdGVyaWFsQ2FyZCgwKTtcbiAgICAgIGUoKTtcbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiW1wiICsgTWF0ZXJpYWxDYXJkT3B0MlRyYWl0LnRyYWl0S2V5ICsgXCJdIOWkhOeQhuaWsOa4uOaIj+S6i+S7tuWksei0pTogXCIgKyAobnVsbCA9PSB0ID8gdm9pZCAwIDogdC5tZXNzYWdlKSk7XG4gICAgICBlKCk7XG4gICAgfVxuICB9XG4gIF9nZXROZXh0VHJpZ2dlckxldmVsKCkge1xuICAgIHZhciB0LFxuICAgICAgZSA9IHRoaXMuZ2V0Q3VycmVudEdhbWVUeXBlKCk7XG4gICAgcmV0dXJuIG51bGwgIT09ICh0ID0gdGhpcy5sb2NhbERhdGEubW9kZURhdGFbZV0pICYmIHZvaWQgMCAhPT0gdCA/IHQgOiB0aGlzLl9zdGFydExldmVsO1xuICB9XG4gIF9zZXROZXh0VHJpZ2dlckxldmVsKHQpIHtcbiAgICB2YXIgZSA9IHRoaXMuZ2V0Q3VycmVudEdhbWVUeXBlKCk7XG4gICAgdGhpcy5sb2NhbERhdGEubW9kZURhdGFbZV0gPSB0O1xuICAgIHRoaXMubG9jYWxEYXRhLm1vZGVEYXRhID0gdGhpcy5sb2NhbERhdGEubW9kZURhdGE7XG4gIH1cbiAgX2dlbmVyYXRlUmFuZG9tSW50ZXJ2YWwoKSB7XG4gICAgdmFyIHQgPSBfX3JlYWQodGhpcy5faW50ZXJ2YWxSYW5nZSwgMiksXG4gICAgICBlID0gdFswXSxcbiAgICAgIHIgPSB0WzFdO1xuICAgIHJldHVybiBlICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKHIgLSBlICsgMSkpO1xuICB9XG4gIF90cmlnZ2VyTWF0ZXJpYWxDaGFuZ2UoKSB7XG4gICAgdmFyIHQgPSBNYXRlcmlhbENhcmRPcHRMaXN0VHJhaXQuZ2V0SW5zdGFuY2UoKTtcbiAgICB0ICYmIHQuc3dpdGNoVG9OZXh0TWF0ZXJpYWxDYXJkKCk7XG4gIH1cbn0iXX0=