
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_cardCountDimension/Scripts/CardCountDimensionTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'db23fJgUDFC8qMaqmo4hpRJ', 'CardCountDimensionTrait');
// subpackages/l_cardCountDimension/Scripts/CardCountDimensionTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ExtractTrait_1 = require("../../../Scripts/ExtractTrait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var CardCountDimensionTrait = /** @class */ (function (_super) {
    __extends(CardCountDimensionTrait, _super);
    function CardCountDimensionTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardCountDimensionTrait.prototype.onLoad = function () {
        var i, e, r, o, n, a, l, s, c, u, h, d, f, p, v, _, D, m, y, g;
        _super.prototype.onLoad.call(this);
        this._config = {
            initValue: null !== (e = null === (i = this._traitData) || void 0 === i ? void 0 : i.initValue) && void 0 !== e ? e : 3,
            lowerThreshold: null !== (o = null === (r = this._traitData) || void 0 === r ? void 0 : r.lowerThreshold) && void 0 !== o ? o : 0.8,
            upperThreshold: null !== (a = null === (n = this._traitData) || void 0 === n ? void 0 : n.upperThreshold) && void 0 !== a ? a : 1.2,
            increaseStep: null !== (s = null === (l = this._traitData) || void 0 === l ? void 0 : l.increaseStep) && void 0 !== s ? s : 1,
            decreaseStep: null !== (u = null === (c = this._traitData) || void 0 === c ? void 0 : c.decreaseStep) && void 0 !== u ? u : -1,
            normalStep: null !== (d = null === (h = this._traitData) || void 0 === h ? void 0 : h.normalStep) && void 0 !== d ? d : 0,
            consecutiveCount: null !== (p = null === (f = this._traitData) || void 0 === f ? void 0 : f.consecutiveCount) && void 0 !== p ? p : 2,
            startLevelIndex: null !== (_ = null === (v = this._traitData) || void 0 === v ? void 0 : v.startLevelIndex) && void 0 !== _ ? _ : 2,
            minValue: null !== (m = null === (D = this._traitData) || void 0 === D ? void 0 : D.minValue) && void 0 !== m ? m : 1,
            maxValue: null !== (g = null === (y = this._traitData) || void 0 === y ? void 0 : y.maxValue) && void 0 !== g ? g : 10
        };
        this.initDimensionData();
    };
    CardCountDimensionTrait.prototype.initDimensionData = function () {
        this.isLocalEmpty(this.localData.currDimensionVal) && (this.localData.currDimensionVal = this._config.initValue);
        this.isLocalEmpty(this.localData.thresholdDirectionList) && (this.localData.thresholdDirectionList = []);
    };
    CardCountDimensionTrait.prototype.isLocalEmpty = function (t) {
        return null == t || "" === t;
    };
    CardCountDimensionTrait.prototype.isThresholdDirectionListAllSame = function (t) {
        var i = this.localData.thresholdDirectionList;
        if (!i || i.length < t)
            return false;
        if (1 === t)
            return true;
        for (var e = i.length - t, r = i[e], o = e + 1; o < i.length; o++)
            if (i[o] !== r)
                return false;
        return true;
    };
    CardCountDimensionTrait.prototype.onExtNormLv_afCapUpd = function (t, i) {
        var e;
        if (this.checkGameMode()) {
            var r = null === (e = t.args) || void 0 === e ? void 0 : e[0];
            if (r) {
                r.expectTime, r.actualTime;
                var o = r.levelID, n = r.rt;
                if (o <= this._config.startLevelIndex) {
                    this.localData.currDimensionVal = this._config.initValue;
                    i();
                }
                else {
                    var a, l;
                    if (n < this._config.lowerThreshold) {
                        a = 0;
                        l = this._config.increaseStep;
                    }
                    else if (n > this._config.upperThreshold) {
                        a = 1;
                        l = this._config.decreaseStep;
                    }
                    else {
                        a = 2;
                        l = this._config.normalStep;
                    }
                    var s = this.localData.thresholdDirectionList || [];
                    s.push(a);
                    s.length > this._config.consecutiveCount && s.shift();
                    this.localData.thresholdDirectionList = s;
                    if (this.isThresholdDirectionListAllSame(this._config.consecutiveCount)) {
                        var c = this.localData.currDimensionVal + l;
                        c = Math.max(this._config.minValue, Math.min(c, this._config.maxValue));
                        this.localData.currDimensionVal = c;
                    }
                    i();
                }
            }
            else
                i();
        }
        else
            i();
    };
    CardCountDimensionTrait.prototype.onExtNormLv_getTileDim = function (t, i) {
        var e;
        if (this.checkGameMode()) {
            var r = null !== (e = this.localData.currDimensionVal) && void 0 !== e ? e : this._config.initValue, o = r < 10 ? "0" + r : "" + r;
            i({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: o
            });
        }
        else
            i();
    };
    CardCountDimensionTrait.prototype.onExtNormLv_getLvPriority = function (t, i) {
        if (this.checkGameMode()) {
            i({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: [3, 2, 1, 4]
            });
        }
        else
            i();
    };
    CardCountDimensionTrait.traitKey = "CardCountDimension";
    CardCountDimensionTrait = __decorate([
        mj.trait,
        mj.class("CardCountDimensionTrait")
    ], CardCountDimensionTrait);
    return CardCountDimensionTrait;
}(ExtractTrait_1.default));
exports.default = CardCountDimensionTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2NhcmRDb3VudERpbWVuc2lvbi9TY3JpcHRzL0NhcmRDb3VudERpbWVuc2lvblRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw4REFBeUQ7QUFDekQsOEVBQXdGO0FBR3hGO0lBQXFELDJDQUFZO0lBQWpFOztJQTJGQSxDQUFDO0lBekZDLHdDQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDL0QsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHO1lBQ2IsU0FBUyxFQUFFLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2SCxjQUFjLEVBQUUsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHO1lBQ25JLGNBQWMsRUFBRSxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUc7WUFDbkksWUFBWSxFQUFFLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3SCxZQUFZLEVBQUUsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUgsVUFBVSxFQUFFLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6SCxnQkFBZ0IsRUFBRSxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNySSxlQUFlLEVBQUUsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25JLFFBQVEsRUFBRSxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckgsUUFBUSxFQUFFLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcs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cG9ydCBFeHRyYWN0VHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9FeHRyYWN0VHJhaXQnO1xuaW1wb3J0IHsgVHJhaXRDYWxsYmFja1JldHVyblR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdE1hbmFnZXInO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJDYXJkQ291bnREaW1lbnNpb25UcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZENvdW50RGltZW5zaW9uVHJhaXQgZXh0ZW5kcyBFeHRyYWN0VHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIkNhcmRDb3VudERpbWVuc2lvblwiO1xuICBvbkxvYWQoKSB7XG4gICAgdmFyIGksIGUsIHIsIG8sIG4sIGEsIGwsIHMsIGMsIHUsIGgsIGQsIGYsIHAsIHYsIF8sIEQsIG0sIHksIGc7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5fY29uZmlnID0ge1xuICAgICAgaW5pdFZhbHVlOiBudWxsICE9PSAoZSA9IG51bGwgPT09IChpID0gdGhpcy5fdHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IGkgPyB2b2lkIDAgOiBpLmluaXRWYWx1ZSkgJiYgdm9pZCAwICE9PSBlID8gZSA6IDMsXG4gICAgICBsb3dlclRocmVzaG9sZDogbnVsbCAhPT0gKG8gPSBudWxsID09PSAociA9IHRoaXMuX3RyYWl0RGF0YSkgfHwgdm9pZCAwID09PSByID8gdm9pZCAwIDogci5sb3dlclRocmVzaG9sZCkgJiYgdm9pZCAwICE9PSBvID8gbyA6IDAuOCxcbiAgICAgIHVwcGVyVGhyZXNob2xkOiBudWxsICE9PSAoYSA9IG51bGwgPT09IChuID0gdGhpcy5fdHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IG4gPyB2b2lkIDAgOiBuLnVwcGVyVGhyZXNob2xkKSAmJiB2b2lkIDAgIT09IGEgPyBhIDogMS4yLFxuICAgICAgaW5jcmVhc2VTdGVwOiBudWxsICE9PSAocyA9IG51bGwgPT09IChsID0gdGhpcy5fdHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IGwgPyB2b2lkIDAgOiBsLmluY3JlYXNlU3RlcCkgJiYgdm9pZCAwICE9PSBzID8gcyA6IDEsXG4gICAgICBkZWNyZWFzZVN0ZXA6IG51bGwgIT09ICh1ID0gbnVsbCA9PT0gKGMgPSB0aGlzLl90cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gYyA/IHZvaWQgMCA6IGMuZGVjcmVhc2VTdGVwKSAmJiB2b2lkIDAgIT09IHUgPyB1IDogLTEsXG4gICAgICBub3JtYWxTdGVwOiBudWxsICE9PSAoZCA9IG51bGwgPT09IChoID0gdGhpcy5fdHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IGggPyB2b2lkIDAgOiBoLm5vcm1hbFN0ZXApICYmIHZvaWQgMCAhPT0gZCA/IGQgOiAwLFxuICAgICAgY29uc2VjdXRpdmVDb3VudDogbnVsbCAhPT0gKHAgPSBudWxsID09PSAoZiA9IHRoaXMuX3RyYWl0RGF0YSkgfHwgdm9pZCAwID09PSBmID8gdm9pZCAwIDogZi5jb25zZWN1dGl2ZUNvdW50KSAmJiB2b2lkIDAgIT09IHAgPyBwIDogMixcbiAgICAgIHN0YXJ0TGV2ZWxJbmRleDogbnVsbCAhPT0gKF8gPSBudWxsID09PSAodiA9IHRoaXMuX3RyYWl0RGF0YSkgfHwgdm9pZCAwID09PSB2ID8gdm9pZCAwIDogdi5zdGFydExldmVsSW5kZXgpICYmIHZvaWQgMCAhPT0gXyA/IF8gOiAyLFxuICAgICAgbWluVmFsdWU6IG51bGwgIT09IChtID0gbnVsbCA9PT0gKEQgPSB0aGlzLl90cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gRCA/IHZvaWQgMCA6IEQubWluVmFsdWUpICYmIHZvaWQgMCAhPT0gbSA/IG0gOiAxLFxuICAgICAgbWF4VmFsdWU6IG51bGwgIT09IChnID0gbnVsbCA9PT0gKHkgPSB0aGlzLl90cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0geSA/IHZvaWQgMCA6IHkubWF4VmFsdWUpICYmIHZvaWQgMCAhPT0gZyA/IGcgOiAxMFxuICAgIH07XG4gICAgdGhpcy5pbml0RGltZW5zaW9uRGF0YSgpO1xuICB9XG4gIGluaXREaW1lbnNpb25EYXRhKCkge1xuICAgIHRoaXMuaXNMb2NhbEVtcHR5KHRoaXMubG9jYWxEYXRhLmN1cnJEaW1lbnNpb25WYWwpICYmICh0aGlzLmxvY2FsRGF0YS5jdXJyRGltZW5zaW9uVmFsID0gdGhpcy5fY29uZmlnLmluaXRWYWx1ZSk7XG4gICAgdGhpcy5pc0xvY2FsRW1wdHkodGhpcy5sb2NhbERhdGEudGhyZXNob2xkRGlyZWN0aW9uTGlzdCkgJiYgKHRoaXMubG9jYWxEYXRhLnRocmVzaG9sZERpcmVjdGlvbkxpc3QgPSBbXSk7XG4gIH1cbiAgaXNMb2NhbEVtcHR5KHQpIHtcbiAgICByZXR1cm4gbnVsbCA9PSB0IHx8IFwiXCIgPT09IHQ7XG4gIH1cbiAgaXNUaHJlc2hvbGREaXJlY3Rpb25MaXN0QWxsU2FtZSh0KSB7XG4gICAgdmFyIGkgPSB0aGlzLmxvY2FsRGF0YS50aHJlc2hvbGREaXJlY3Rpb25MaXN0O1xuICAgIGlmICghaSB8fCBpLmxlbmd0aCA8IHQpIHJldHVybiBmYWxzZTtcbiAgICBpZiAoMSA9PT0gdCkgcmV0dXJuIHRydWU7XG4gICAgZm9yICh2YXIgZSA9IGkubGVuZ3RoIC0gdCwgciA9IGlbZV0sIG8gPSBlICsgMTsgbyA8IGkubGVuZ3RoOyBvKyspIGlmIChpW29dICE9PSByKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgb25FeHROb3JtTHZfYWZDYXBVcGQodCwgaSkge1xuICAgIHZhciBlO1xuICAgIGlmICh0aGlzLmNoZWNrR2FtZU1vZGUoKSkge1xuICAgICAgdmFyIHIgPSBudWxsID09PSAoZSA9IHQuYXJncykgfHwgdm9pZCAwID09PSBlID8gdm9pZCAwIDogZVswXTtcbiAgICAgIGlmIChyKSB7XG4gICAgICAgIHIuZXhwZWN0VGltZSwgci5hY3R1YWxUaW1lO1xuICAgICAgICB2YXIgbyA9IHIubGV2ZWxJRCxcbiAgICAgICAgICBuID0gci5ydDtcbiAgICAgICAgaWYgKG8gPD0gdGhpcy5fY29uZmlnLnN0YXJ0TGV2ZWxJbmRleCkge1xuICAgICAgICAgIHRoaXMubG9jYWxEYXRhLmN1cnJEaW1lbnNpb25WYWwgPSB0aGlzLl9jb25maWcuaW5pdFZhbHVlO1xuICAgICAgICAgIGkoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgYSwgbDtcbiAgICAgICAgICBpZiAobiA8IHRoaXMuX2NvbmZpZy5sb3dlclRocmVzaG9sZCkge1xuICAgICAgICAgICAgYSA9IDA7XG4gICAgICAgICAgICBsID0gdGhpcy5fY29uZmlnLmluY3JlYXNlU3RlcDtcbiAgICAgICAgICB9IGVsc2UgaWYgKG4gPiB0aGlzLl9jb25maWcudXBwZXJUaHJlc2hvbGQpIHtcbiAgICAgICAgICAgIGEgPSAxO1xuICAgICAgICAgICAgbCA9IHRoaXMuX2NvbmZpZy5kZWNyZWFzZVN0ZXA7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGEgPSAyO1xuICAgICAgICAgICAgbCA9IHRoaXMuX2NvbmZpZy5ub3JtYWxTdGVwO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgcyA9IHRoaXMubG9jYWxEYXRhLnRocmVzaG9sZERpcmVjdGlvbkxpc3QgfHwgW107XG4gICAgICAgICAgcy5wdXNoKGEpO1xuICAgICAgICAgIHMubGVuZ3RoID4gdGhpcy5fY29uZmlnLmNvbnNlY3V0aXZlQ291bnQgJiYgcy5zaGlmdCgpO1xuICAgICAgICAgIHRoaXMubG9jYWxEYXRhLnRocmVzaG9sZERpcmVjdGlvbkxpc3QgPSBzO1xuICAgICAgICAgIGlmICh0aGlzLmlzVGhyZXNob2xkRGlyZWN0aW9uTGlzdEFsbFNhbWUodGhpcy5fY29uZmlnLmNvbnNlY3V0aXZlQ291bnQpKSB7XG4gICAgICAgICAgICB2YXIgYyA9IHRoaXMubG9jYWxEYXRhLmN1cnJEaW1lbnNpb25WYWwgKyBsO1xuICAgICAgICAgICAgYyA9IE1hdGgubWF4KHRoaXMuX2NvbmZpZy5taW5WYWx1ZSwgTWF0aC5taW4oYywgdGhpcy5fY29uZmlnLm1heFZhbHVlKSk7XG4gICAgICAgICAgICB0aGlzLmxvY2FsRGF0YS5jdXJyRGltZW5zaW9uVmFsID0gYztcbiAgICAgICAgICB9XG4gICAgICAgICAgaSgpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaSgpO1xuICAgIH0gZWxzZSBpKCk7XG4gIH1cbiAgb25FeHROb3JtTHZfZ2V0VGlsZURpbSh0LCBpKSB7XG4gICAgdmFyIGU7XG4gICAgaWYgKHRoaXMuY2hlY2tHYW1lTW9kZSgpKSB7XG4gICAgICB2YXIgciA9IG51bGwgIT09IChlID0gdGhpcy5sb2NhbERhdGEuY3VyckRpbWVuc2lvblZhbCkgJiYgdm9pZCAwICE9PSBlID8gZSA6IHRoaXMuX2NvbmZpZy5pbml0VmFsdWUsXG4gICAgICAgIG8gPSByIDwgMTAgPyBcIjBcIiArIHIgOiBcIlwiICsgcjtcbiAgICAgIGkoe1xuICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgIHJldHVyblZhbDogb1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGkoKTtcbiAgfVxuICBvbkV4dE5vcm1Mdl9nZXRMdlByaW9yaXR5KHQsIGkpIHtcbiAgICBpZiAodGhpcy5jaGVja0dhbWVNb2RlKCkpIHtcbiAgICAgIGkoe1xuICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgIHJldHVyblZhbDogWzMsIDIsIDEsIDRdXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaSgpO1xuICB9XG59Il19