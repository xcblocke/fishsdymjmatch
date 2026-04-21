
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_materialCardOpt/Scripts/MaterialCardOpt3Trait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '31582/SEelDCrKpJjTheXj8', 'MaterialCardOpt3Trait');
// subpackages/l_materialCardOpt/Scripts/MaterialCardOpt3Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var MaterialCardOptBaseTrait_1 = require("./MaterialCardOptBaseTrait");
var MaterialCardOptListTrait_1 = require("./MaterialCardOptListTrait");
var GameUtils_1 = require("../../../Scripts/core/simulator/util/GameUtils");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var MaterialCardOpt3Trait = /** @class */ (function (_super) {
    __extends(MaterialCardOpt3Trait, _super);
    function MaterialCardOpt3Trait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._startLevel = 10;
        _this._baseProb = 50;
        _this._probIncrement = 0;
        _this._gameModes = [GameTypeEnums_1.MjGameType.Normal];
        return _this;
    }
    MaterialCardOpt3Trait_1 = MaterialCardOpt3Trait;
    MaterialCardOpt3Trait.prototype.onLoad = function () {
        var e, r, a, i, o, n, l, s;
        _super.prototype.onLoad.call(this);
        var u = null !== (r = null === (e = this._traitData) || void 0 === e ? void 0 : e.prob) && void 0 !== r ? r : [50];
        this._startLevel = null !== (i = null === (a = this._traitData) || void 0 === a ? void 0 : a.startLevel) && void 0 !== i ? i : 10;
        this._baseProb = null !== (o = u[0]) && void 0 !== o ? o : 50;
        this._probIncrement = null !== (n = u[1]) && void 0 !== n ? n : 0;
        this._gameModes = null !== (s = null === (l = this._traitData) || void 0 === l ? void 0 : l.gameModes) && void 0 !== s ? s : [GameTypeEnums_1.MjGameType.Normal];
        this.isLocalEmpty(this.localData.accumProb) && (this.localData.accumProb = {});
    };
    MaterialCardOpt3Trait.prototype.onGsListener_onNewGame = function (t, e) {
        try {
            if (!this.isGameModeMatch(this._gameModes)) {
                e();
                return;
            }
            var a = this.getCurrentGameType(), i = this.getCurrentGameDataLevel();
            if (i < this._startLevel) {
                0 !== this.getCurMaterialCard() && this.setCurMaterialCard(0);
                e();
                return;
            }
            if (this._isHardLevel(i)) {
                this._ensureAccumProbInitialized(a);
                this._tryTrigger(a);
            }
            else
                0 !== this.getCurMaterialCard() && this.setCurMaterialCard(0);
            e();
        }
        catch (t) {
            console.error("[" + MaterialCardOpt3Trait_1.traitKey + "] 处理新游戏事件失败: " + (null == t ? void 0 : t.message));
            e();
        }
    };
    MaterialCardOpt3Trait.prototype._ensureAccumProbInitialized = function (t) {
        if (null == this.localData.accumProb[t]) {
            this.localData.accumProb[t] = 0;
            this.localData.accumProb = this.localData.accumProb;
        }
    };
    MaterialCardOpt3Trait.prototype._isHardLevel = function (t) {
        return GameUtils_1.default.isTypeHardLevel(this.getCurrentGameType(), t);
    };
    MaterialCardOpt3Trait.prototype._tryTrigger = function (t) {
        var e = this.localData.accumProb[t], r = Math.min(100, this._baseProb + e);
        if (100 * Math.random() < r) {
            this._triggerMaterialChange();
            this.localData.accumProb[t] = 0;
            this.localData.accumProb = this.localData.accumProb;
        }
        else {
            var a = e + this._probIncrement;
            this.localData.accumProb[t] = a;
            this.localData.accumProb = this.localData.accumProb;
        }
    };
    MaterialCardOpt3Trait.prototype._triggerMaterialChange = function () {
        var t = MaterialCardOptListTrait_1.default.getInstance();
        t && t.switchToNextMaterialCard();
    };
    var MaterialCardOpt3Trait_1;
    MaterialCardOpt3Trait.traitKey = "MaterialCardOpt3";
    MaterialCardOpt3Trait = MaterialCardOpt3Trait_1 = __decorate([
        mj.trait,
        mj.class("MaterialCardOpt3Trait")
    ], MaterialCardOpt3Trait);
    return MaterialCardOpt3Trait;
}(MaterialCardOptBaseTrait_1.default));
exports.default = MaterialCardOpt3Trait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX21hdGVyaWFsQ2FyZE9wdC9TY3JpcHRzL01hdGVyaWFsQ2FyZE9wdDNUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUVBQWtFO0FBQ2xFLHVFQUFrRTtBQUNsRSw0RUFBdUU7QUFDdkUsd0ZBQW9GO0FBR3BGO0lBQW1ELHlDQUF3QjtJQUEzRTtRQUFBLHFFQWlFQztRQWhFQyxpQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNqQixlQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2Ysb0JBQWMsR0FBRyxDQUFDLENBQUM7UUFDbkIsZ0JBQVUsR0FBRyxDQUFDLDBCQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7O0lBNkRuQyxDQUFDOzhCQWpFb0IscUJBQXFCO0lBTXhDLHNDQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDM0IsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDbkgsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNsSSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQzlELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEUsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsMEJBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNqSixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUNqRixDQUFDO0lBQ0Qsc0RBQXNCLEdBQXRCLFVBQXVCLENBQUMsRUFBRSxDQUFDO1FBQ3pCLElBQUk7WUFDRixJQUFJLENBQUMsSUFBSSxDQUFD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Qyx3QkFBd0IsRUFBRSxDQUFDO0lBQ3BDLENBQUM7O0lBM0RNLDhCQUFRLEdBQUcsa0JBQWtCLENBQUM7SUFMbEIscUJBQXFCO1FBRnpDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQztPQUNiLHFCQUFxQixDQWlFekM7SUFBRCw0QkFBQztDQWpFRCxBQWlFQyxDQWpFa0Qsa0NBQXdCLEdBaUUxRTtrQkFqRW9CLHFCQUFxQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNYXRlcmlhbENhcmRPcHRCYXNlVHJhaXQgZnJvbSAnLi9NYXRlcmlhbENhcmRPcHRCYXNlVHJhaXQnO1xuaW1wb3J0IE1hdGVyaWFsQ2FyZE9wdExpc3RUcmFpdCBmcm9tICcuL01hdGVyaWFsQ2FyZE9wdExpc3RUcmFpdCc7XG5pbXBvcnQgR2FtZVV0aWxzIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9zaW11bGF0b3IvdXRpbC9HYW1lVXRpbHMnO1xuaW1wb3J0IHsgTWpHYW1lVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9zaW11bGF0b3IvY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIk1hdGVyaWFsQ2FyZE9wdDNUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWF0ZXJpYWxDYXJkT3B0M1RyYWl0IGV4dGVuZHMgTWF0ZXJpYWxDYXJkT3B0QmFzZVRyYWl0IHtcbiAgX3N0YXJ0TGV2ZWwgPSAxMDtcbiAgX2Jhc2VQcm9iID0gNTA7XG4gIF9wcm9iSW5jcmVtZW50ID0gMDtcbiAgX2dhbWVNb2RlcyA9IFtNakdhbWVUeXBlLk5vcm1hbF07XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiTWF0ZXJpYWxDYXJkT3B0M1wiO1xuICBvbkxvYWQoKSB7XG4gICAgdmFyIGUsIHIsIGEsIGksIG8sIG4sIGwsIHM7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdmFyIHUgPSBudWxsICE9PSAociA9IG51bGwgPT09IChlID0gdGhpcy5fdHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IGUgPyB2b2lkIDAgOiBlLnByb2IpICYmIHZvaWQgMCAhPT0gciA/IHIgOiBbNTBdO1xuICAgIHRoaXMuX3N0YXJ0TGV2ZWwgPSBudWxsICE9PSAoaSA9IG51bGwgPT09IChhID0gdGhpcy5fdHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IGEgPyB2b2lkIDAgOiBhLnN0YXJ0TGV2ZWwpICYmIHZvaWQgMCAhPT0gaSA/IGkgOiAxMDtcbiAgICB0aGlzLl9iYXNlUHJvYiA9IG51bGwgIT09IChvID0gdVswXSkgJiYgdm9pZCAwICE9PSBvID8gbyA6IDUwO1xuICAgIHRoaXMuX3Byb2JJbmNyZW1lbnQgPSBudWxsICE9PSAobiA9IHVbMV0pICYmIHZvaWQgMCAhPT0gbiA/IG4gOiAwO1xuICAgIHRoaXMuX2dhbWVNb2RlcyA9IG51bGwgIT09IChzID0gbnVsbCA9PT0gKGwgPSB0aGlzLl90cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gbCA/IHZvaWQgMCA6IGwuZ2FtZU1vZGVzKSAmJiB2b2lkIDAgIT09IHMgPyBzIDogW01qR2FtZVR5cGUuTm9ybWFsXTtcbiAgICB0aGlzLmlzTG9jYWxFbXB0eSh0aGlzLmxvY2FsRGF0YS5hY2N1bVByb2IpICYmICh0aGlzLmxvY2FsRGF0YS5hY2N1bVByb2IgPSB7fSk7XG4gIH1cbiAgb25Hc0xpc3RlbmVyX29uTmV3R2FtZSh0LCBlKSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghdGhpcy5pc0dhbWVNb2RlTWF0Y2godGhpcy5fZ2FtZU1vZGVzKSkge1xuICAgICAgICBlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBhID0gdGhpcy5nZXRDdXJyZW50R2FtZVR5cGUoKSxcbiAgICAgICAgaSA9IHRoaXMuZ2V0Q3VycmVudEdhbWVEYXRhTGV2ZWwoKTtcbiAgICAgIGlmIChpIDwgdGhpcy5fc3RhcnRMZXZlbCkge1xuICAgICAgICAwICE9PSB0aGlzLmdldEN1ck1hdGVyaWFsQ2FyZCgpICYmIHRoaXMuc2V0Q3VyTWF0ZXJpYWxDYXJkKDApO1xuICAgICAgICBlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9pc0hhcmRMZXZlbChpKSkge1xuICAgICAgICB0aGlzLl9lbnN1cmVBY2N1bVByb2JJbml0aWFsaXplZChhKTtcbiAgICAgICAgdGhpcy5fdHJ5VHJpZ2dlcihhKTtcbiAgICAgIH0gZWxzZSAwICE9PSB0aGlzLmdldEN1ck1hdGVyaWFsQ2FyZCgpICYmIHRoaXMuc2V0Q3VyTWF0ZXJpYWxDYXJkKDApO1xuICAgICAgZSgpO1xuICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJbXCIgKyBNYXRlcmlhbENhcmRPcHQzVHJhaXQudHJhaXRLZXkgKyBcIl0g5aSE55CG5paw5ri45oiP5LqL5Lu25aSx6LSlOiBcIiArIChudWxsID09IHQgPyB2b2lkIDAgOiB0Lm1lc3NhZ2UpKTtcbiAgICAgIGUoKTtcbiAgICB9XG4gIH1cbiAgX2Vuc3VyZUFjY3VtUHJvYkluaXRpYWxpemVkKHQpIHtcbiAgICBpZiAobnVsbCA9PSB0aGlzLmxvY2FsRGF0YS5hY2N1bVByb2JbdF0pIHtcbiAgICAgIHRoaXMubG9jYWxEYXRhLmFjY3VtUHJvYlt0XSA9IDA7XG4gICAgICB0aGlzLmxvY2FsRGF0YS5hY2N1bVByb2IgPSB0aGlzLmxvY2FsRGF0YS5hY2N1bVByb2I7XG4gICAgfVxuICB9XG4gIF9pc0hhcmRMZXZlbCh0KSB7XG4gICAgcmV0dXJuIEdhbWVVdGlscy5pc1R5cGVIYXJkTGV2ZWwodGhpcy5nZXRDdXJyZW50R2FtZVR5cGUoKSwgdCk7XG4gIH1cbiAgX3RyeVRyaWdnZXIodCkge1xuICAgIHZhciBlID0gdGhpcy5sb2NhbERhdGEuYWNjdW1Qcm9iW3RdLFxuICAgICAgciA9IE1hdGgubWluKDEwMCwgdGhpcy5fYmFzZVByb2IgKyBlKTtcbiAgICBpZiAoMTAwICogTWF0aC5yYW5kb20oKSA8IHIpIHtcbiAgICAgIHRoaXMuX3RyaWdnZXJNYXRlcmlhbENoYW5nZSgpO1xuICAgICAgdGhpcy5sb2NhbERhdGEuYWNjdW1Qcm9iW3RdID0gMDtcbiAgICAgIHRoaXMubG9jYWxEYXRhLmFjY3VtUHJvYiA9IHRoaXMubG9jYWxEYXRhLmFjY3VtUHJvYjtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGEgPSBlICsgdGhpcy5fcHJvYkluY3JlbWVudDtcbiAgICAgIHRoaXMubG9jYWxEYXRhLmFjY3VtUHJvYlt0XSA9IGE7XG4gICAgICB0aGlzLmxvY2FsRGF0YS5hY2N1bVByb2IgPSB0aGlzLmxvY2FsRGF0YS5hY2N1bVByb2I7XG4gICAgfVxuICB9XG4gIF90cmlnZ2VyTWF0ZXJpYWxDaGFuZ2UoKSB7XG4gICAgdmFyIHQgPSBNYXRlcmlhbENhcmRPcHRMaXN0VHJhaXQuZ2V0SW5zdGFuY2UoKTtcbiAgICB0ICYmIHQuc3dpdGNoVG9OZXh0TWF0ZXJpYWxDYXJkKCk7XG4gIH1cbn0iXX0=