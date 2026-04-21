
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_newDiffCalc/Scripts/NewDiffCalcTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f510et9NEJIVLmTgVPJCpXJ', 'NewDiffCalcTrait');
// subpackages/l_newDiffCalc/Scripts/NewDiffCalcTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ExtractTrait_1 = require("../../../Scripts/ExtractTrait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var NewDiffCalcTrait = /** @class */ (function (_super) {
    __extends(NewDiffCalcTrait, _super);
    function NewDiffCalcTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewDiffCalcTrait.prototype.onLoad = function () {
        var r, e, i, o, n, a, l, c;
        _super.prototype.onLoad.call(this);
        this._initAverage = null !== (e = null === (r = this._traitData) || void 0 === r ? void 0 : r.initAverage) && void 0 !== e ? e : 160;
        this._finalAverage = null !== (o = null === (i = this._traitData) || void 0 === i ? void 0 : i.finalAverage) && void 0 !== o ? o : 160;
        this._transitionLevels = null !== (a = null === (n = this._traitData) || void 0 === n ? void 0 : n.transitionLevels) && void 0 !== a ? a : 1;
        this._stdDev = null !== (c = null === (l = this._traitData) || void 0 === l ? void 0 : l.stdDev) && void 0 !== c ? c : 5;
    };
    NewDiffCalcTrait.prototype.normalDistribution2 = function (t, r, e, i, o) {
        var n = 1 - Math.random(), a = 1 - Math.random(), l = Math.sqrt(-2 * Math.log(n)), c = i + l * Math.cos(2 * Math.PI * a) * o, s = i + l * Math.sin(2 * Math.PI * a) * o, f = 0 === Math.floor(2 * Math.random()) ? c : s;
        return Math.sqrt(t * e * f * r);
    };
    NewDiffCalcTrait.prototype.onExtNormLv_calcD = function (t, r) {
        if (this.checkGameMode()) {
            var e = __read(t.args, 5), i = e[0], o = (e[1], e[2]), n = e[3], l = e[4], s = this._initAverage + Math.min(1, 1 * l / (1 * this._transitionLevels)) * (this._finalAverage - this._initAverage), f = this.normalDistribution2(i, n, o, s, this._stdDev);
            r({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                returnVal: f
            });
        }
        else
            r();
    };
    NewDiffCalcTrait.traitKey = "NewDiffCalc";
    NewDiffCalcTrait = __decorate([
        mj.trait,
        mj.class("NewDiffCalcTrait")
    ], NewDiffCalcTrait);
    return NewDiffCalcTrait;
}(ExtractTrait_1.default));
exports.default = NewDiffCalcTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX25ld0RpZmZDYWxjL1NjcmlwdHMvTmV3RGlmZkNhbGNUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOERBQXlEO0FBQ3pELDhFQUF3RjtBQUd4RjtJQUE4QyxvQ0FBWTtJQUExRDs7SUFtQ0EsQ0FBQztJQWpDQyxpQ0FBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzNCLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUNySSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQ3ZJLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdJLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDM0gsQ0FBQztJQUNELDhDQUFtQixHQUFuQixVQUFvQixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUN2QixDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFDckIsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUMvQixDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFDekMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQ3pDLENBQUMsR0FBRyxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBQ0QsNENBQWlCLEdBQWpCLFVBQWtCLENBQUMsRUFBRSxDQUFDO1FBQ3BCLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUN2QixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUNSLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDaEIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDUixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUNSLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUNwSCxDQUFDLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDekQsQ0FBQyxDQUFDO2dCQUNBLE9BQU8sRUFBRSxJQUFJO2dCQUNiLFVBQVUsRUFBRSxzQ0FBdUIsQ0FBQyxNQUFNO2dCQUMxQyxTQUFTLEVBQUUsQ0FBQzthQUNiLENBQUMsQ0FBQztTQUNKOztZQUFNLENBQUMsRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQWpDTSx5QkFBUSxHQUFHLGFBQWEsQ0FBQztJQURiLGdCQUFnQjtRQUZwQyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUM7T0FDUixnQkFBZ0IsQ0FtQ3BDO0lBQUQsdUJBQUM7Q0FuQ0QsQUFtQ0MsQ0FuQzZDLHNCQUFZLEdBbUN6RDtrQkFuQ29CLGdCQUFnQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFeHRyYWN0VHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9FeHRyYWN0VHJhaXQnO1xuaW1wb3J0IHsgVHJhaXRDYWxsYmFja1JldHVyblR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdE1hbmFnZXInO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJOZXdEaWZmQ2FsY1RyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdEaWZmQ2FsY1RyYWl0IGV4dGVuZHMgRXh0cmFjdFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJOZXdEaWZmQ2FsY1wiO1xuICBvbkxvYWQoKSB7XG4gICAgdmFyIHIsIGUsIGksIG8sIG4sIGEsIGwsIGM7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5faW5pdEF2ZXJhZ2UgPSBudWxsICE9PSAoZSA9IG51bGwgPT09IChyID0gdGhpcy5fdHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IHIgPyB2b2lkIDAgOiByLmluaXRBdmVyYWdlKSAmJiB2b2lkIDAgIT09IGUgPyBlIDogMTYwO1xuICAgIHRoaXMuX2ZpbmFsQXZlcmFnZSA9IG51bGwgIT09IChvID0gbnVsbCA9PT0gKGkgPSB0aGlzLl90cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gaSA/IHZvaWQgMCA6IGkuZmluYWxBdmVyYWdlKSAmJiB2b2lkIDAgIT09IG8gPyBvIDogMTYwO1xuICAgIHRoaXMuX3RyYW5zaXRpb25MZXZlbHMgPSBudWxsICE9PSAoYSA9IG51bGwgPT09IChuID0gdGhpcy5fdHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IG4gPyB2b2lkIDAgOiBuLnRyYW5zaXRpb25MZXZlbHMpICYmIHZvaWQgMCAhPT0gYSA/IGEgOiAxO1xuICAgIHRoaXMuX3N0ZERldiA9IG51bGwgIT09IChjID0gbnVsbCA9PT0gKGwgPSB0aGlzLl90cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gbCA/IHZvaWQgMCA6IGwuc3RkRGV2KSAmJiB2b2lkIDAgIT09IGMgPyBjIDogNTtcbiAgfVxuICBub3JtYWxEaXN0cmlidXRpb24yKHQsIHIsIGUsIGksIG8pIHtcbiAgICB2YXIgbiA9IDEgLSBNYXRoLnJhbmRvbSgpLFxuICAgICAgYSA9IDEgLSBNYXRoLnJhbmRvbSgpLFxuICAgICAgbCA9IE1hdGguc3FydCgtMiAqIE1hdGgubG9nKG4pKSxcbiAgICAgIGMgPSBpICsgbCAqIE1hdGguY29zKDIgKiBNYXRoLlBJICogYSkgKiBvLFxuICAgICAgcyA9IGkgKyBsICogTWF0aC5zaW4oMiAqIE1hdGguUEkgKiBhKSAqIG8sXG4gICAgICBmID0gMCA9PT0gTWF0aC5mbG9vcigyICogTWF0aC5yYW5kb20oKSkgPyBjIDogcztcbiAgICByZXR1cm4gTWF0aC5zcXJ0KHQgKiBlICogZiAqIHIpO1xuICB9XG4gIG9uRXh0Tm9ybUx2X2NhbGNEKHQsIHIpIHtcbiAgICBpZiAodGhpcy5jaGVja0dhbWVNb2RlKCkpIHtcbiAgICAgIHZhciBlID0gX19yZWFkKHQuYXJncywgNSksXG4gICAgICAgIGkgPSBlWzBdLFxuICAgICAgICBvID0gKGVbMV0sIGVbMl0pLFxuICAgICAgICBuID0gZVszXSxcbiAgICAgICAgbCA9IGVbNF0sXG4gICAgICAgIHMgPSB0aGlzLl9pbml0QXZlcmFnZSArIE1hdGgubWluKDEsIDEgKiBsIC8gKDEgKiB0aGlzLl90cmFuc2l0aW9uTGV2ZWxzKSkgKiAodGhpcy5fZmluYWxBdmVyYWdlIC0gdGhpcy5faW5pdEF2ZXJhZ2UpLFxuICAgICAgICBmID0gdGhpcy5ub3JtYWxEaXN0cmlidXRpb24yKGksIG4sIG8sIHMsIHRoaXMuX3N0ZERldik7XG4gICAgICByKHtcbiAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICByZXR1cm5WYWw6IGZcbiAgICAgIH0pO1xuICAgIH0gZWxzZSByKCk7XG4gIH1cbn0iXX0=