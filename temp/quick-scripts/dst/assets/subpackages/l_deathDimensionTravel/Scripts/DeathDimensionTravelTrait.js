
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_deathDimensionTravel/Scripts/DeathDimensionTravelTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '911bcK8WfZH2Z8KOEg5JdZn', 'DeathDimensionTravelTrait');
// subpackages/l_deathDimensionTravel/Scripts/DeathDimensionTravelTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ExtractTrait_1 = require("../../../Scripts/ExtractTrait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var DeathDimensionTravelTrait = /** @class */ (function (_super) {
    __extends(DeathDimensionTravelTrait, _super);
    function DeathDimensionTravelTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DeathDimensionTravelTrait.prototype.onLoad = function () {
        var e, r, i, a, n, o, l, s;
        this._traitData.gameType || (this._traitData.gameType = "Travel");
        _super.prototype.onLoad.call(this);
        this._config = {
            dimensionOrder: null !== (r = null === (e = this._traitData) || void 0 === e ? void 0 : e.dimensionOrder) && void 0 !== r ? r : [1, 2, 3, 2],
            allDirectReadWeights: null !== (a = null === (i = this._traitData) || void 0 === i ? void 0 : i.allDirectReadWeights) && void 0 !== a ? a : [[15, 45, 30, 10], [1, 6, 33, 66]],
            deathFailAdjust: null !== (o = null === (n = this._traitData) || void 0 === n ? void 0 : n.deathFailAdjust) && void 0 !== o ? o : [-2],
            deathPassAdjust: null !== (s = null === (l = this._traitData) || void 0 === l ? void 0 : l.deathPassAdjust) && void 0 !== s ? s : [1]
        };
    };
    DeathDimensionTravelTrait.prototype.onExtNormLv_getAllDirWgt = function (t, e) {
        if (this.checkGameMode()) {
            var r = this._config.allDirectReadWeights;
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: r
            });
        }
        else
            e();
    };
    DeathDimensionTravelTrait.prototype.onExtNormLv_getDimOrder = function (t, e) {
        if (this.checkGameMode()) {
            var r = this._config.dimensionOrder;
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: r
            });
        }
        else
            e();
    };
    DeathDimensionTravelTrait.prototype.onExtNormLv_getDeathFail = function (t, e) {
        var r, i;
        if (this.checkGameMode()) {
            var a = t.args[0] || 0, n = this._config.deathFailAdjust, o = null !== (i = null !== (r = n[a]) && void 0 !== r ? r : n[0]) && void 0 !== i ? i : -2;
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: o
            });
        }
        else
            e();
    };
    DeathDimensionTravelTrait.prototype.onExtNormLv_getDeathPass = function (t, e) {
        var r, i;
        if (this.checkGameMode()) {
            var a = t.args[0] || 0, n = this._config.deathPassAdjust, o = null !== (i = null !== (r = n[a]) && void 0 !== r ? r : n[0]) && void 0 !== i ? i : 1;
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: o
            });
        }
        else
            e();
    };
    DeathDimensionTravelTrait.traitKey = "DeathDimensionTravel";
    DeathDimensionTravelTrait = __decorate([
        mj.trait,
        mj.class("DeathDimensionTravelTrait")
    ], DeathDimensionTravelTrait);
    return DeathDimensionTravelTrait;
}(ExtractTrait_1.default));
exports.default = DeathDimensionTravelTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2RlYXRoRGltZW5zaW9uVHJhdmVsL1NjcmlwdHMvRGVhdGhEaW1lbnNpb25UcmF2ZWxUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOERBQXlEO0FBQ3pELDhFQUF3RjtBQUd4RjtJQUF1RCw2Q0FBWTtJQUFuRTs7SUEyREEsQ0FBQztJQXpEQywwQ0FBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLENBQUM7UUFDbEUsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHO1lBQ2IsY0FBYyxFQUFFLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDNUksb0JBQW9CLEVBQUUsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMs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Q0FBQyxDQUFDO1NBQ0o7O1lBQU0sQ0FBQyxFQUFFLENBQUM7SUFDYixDQUFDO0lBQ0QsNERBQXdCLEdBQXhCLFVBQXlCLENBQUMsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNULElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUNwQixDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQ2hDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVGLENBQUMsQ0FBQztnQkFDQSxVQUFVLEVBQUUsc0NBQXVCLENBQUMsTUFBTTtnQkFDMUMsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsU0FBUyxFQUFFLENBQUM7YUFDYixDQUFDLENBQUM7U0FDSjs7WUFBTSxDQUFDLEVBQUUsQ0FBQztJQUNiLENBQUM7SUF6RE0sa0NBQVEsR0FBRyxzQkFBc0IsQ0FBQztJQUR0Qix5QkFBeUI7UUFGN0MsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLDJCQUEyQixDQUFDO09BQ2pCLHlCQUF5QixDQTJEN0M7SUFBRCxnQ0FBQztDQTNERCxBQTJEQyxDQTNEc0Qsc0JBQVksR0EyRGxFO2tCQTNEb0IseUJBQXlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEV4dHJhY3RUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL0V4dHJhY3RUcmFpdCc7XG5pbXBvcnQgeyBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0TWFuYWdlcic7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIkRlYXRoRGltZW5zaW9uVHJhdmVsVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlYXRoRGltZW5zaW9uVHJhdmVsVHJhaXQgZXh0ZW5kcyBFeHRyYWN0VHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIkRlYXRoRGltZW5zaW9uVHJhdmVsXCI7XG4gIG9uTG9hZCgpIHtcbiAgICB2YXIgZSwgciwgaSwgYSwgbiwgbywgbCwgcztcbiAgICB0aGlzLl90cmFpdERhdGEuZ2FtZVR5cGUgfHwgKHRoaXMuX3RyYWl0RGF0YS5nYW1lVHlwZSA9IFwiVHJhdmVsXCIpO1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuX2NvbmZpZyA9IHtcbiAgICAgIGRpbWVuc2lvbk9yZGVyOiBudWxsICE9PSAociA9IG51bGwgPT09IChlID0gdGhpcy5fdHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IGUgPyB2b2lkIDAgOiBlLmRpbWVuc2lvbk9yZGVyKSAmJiB2b2lkIDAgIT09IHIgPyByIDogWzEsIDIsIDMsIDJdLFxuICAgICAgYWxsRGlyZWN0UmVhZFdlaWdodHM6IG51bGwgIT09IChhID0gbnVsbCA9PT0gKGkgPSB0aGlzLl90cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gaSA/IHZvaWQgMCA6IGkuYWxsRGlyZWN0UmVhZFdlaWdodHMpICYmIHZvaWQgMCAhPT0gYSA/IGEgOiBbWzE1LCA0NSwgMzAsIDEwXSwgWzEsIDYsIDMzLCA2Nl1dLFxuICAgICAgZGVhdGhGYWlsQWRqdXN0OiBudWxsICE9PSAobyA9IG51bGwgPT09IChuID0gdGhpcy5fdHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IG4gPyB2b2lkIDAgOiBuLmRlYXRoRmFpbEFkanVzdCkgJiYgdm9pZCAwICE9PSBvID8gbyA6IFstMl0sXG4gICAgICBkZWF0aFBhc3NBZGp1c3Q6IG51bGwgIT09IChzID0gbnVsbCA9PT0gKGwgPSB0aGlzLl90cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gbCA/IHZvaWQgMCA6IGwuZGVhdGhQYXNzQWRqdXN0KSAmJiB2b2lkIDAgIT09IHMgPyBzIDogWzFdXG4gICAgfTtcbiAgfVxuICBvbkV4dE5vcm1Mdl9nZXRBbGxEaXJXZ3QodCwgZSkge1xuICAgIGlmICh0aGlzLmNoZWNrR2FtZU1vZGUoKSkge1xuICAgICAgdmFyIHIgPSB0aGlzLl9jb25maWcuYWxsRGlyZWN0UmVhZFdlaWdodHM7XG4gICAgICBlKHtcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICByZXR1cm5WYWw6IHJcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBlKCk7XG4gIH1cbiAgb25FeHROb3JtTHZfZ2V0RGltT3JkZXIodCwgZSkge1xuICAgIGlmICh0aGlzLmNoZWNrR2FtZU1vZGUoKSkge1xuICAgICAgdmFyIHIgPSB0aGlzLl9jb25maWcuZGltZW5zaW9uT3JkZXI7XG4gICAgICBlKHtcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICByZXR1cm5WYWw6IHJcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBlKCk7XG4gIH1cbiAgb25FeHROb3JtTHZfZ2V0RGVhdGhGYWlsKHQsIGUpIHtcbiAgICB2YXIgciwgaTtcbiAgICBpZiAodGhpcy5jaGVja0dhbWVNb2RlKCkpIHtcbiAgICAgIHZhciBhID0gdC5hcmdzWzBdIHx8IDAsXG4gICAgICAgIG4gPSB0aGlzLl9jb25maWcuZGVhdGhGYWlsQWRqdXN0LFxuICAgICAgICBvID0gbnVsbCAhPT0gKGkgPSBudWxsICE9PSAociA9IG5bYV0pICYmIHZvaWQgMCAhPT0gciA/IHIgOiBuWzBdKSAmJiB2b2lkIDAgIT09IGkgPyBpIDogLTI7XG4gICAgICBlKHtcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICByZXR1cm5WYWw6IG9cbiAgICAgIH0pO1xuICAgIH0gZWxzZSBlKCk7XG4gIH1cbiAgb25FeHROb3JtTHZfZ2V0RGVhdGhQYXNzKHQsIGUpIHtcbiAgICB2YXIgciwgaTtcbiAgICBpZiAodGhpcy5jaGVja0dhbWVNb2RlKCkpIHtcbiAgICAgIHZhciBhID0gdC5hcmdzWzBdIHx8IDAsXG4gICAgICAgIG4gPSB0aGlzLl9jb25maWcuZGVhdGhQYXNzQWRqdXN0LFxuICAgICAgICBvID0gbnVsbCAhPT0gKGkgPSBudWxsICE9PSAociA9IG5bYV0pICYmIHZvaWQgMCAhPT0gciA/IHIgOiBuWzBdKSAmJiB2b2lkIDAgIT09IGkgPyBpIDogMTtcbiAgICAgIGUoe1xuICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgIHJldHVyblZhbDogb1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGUoKTtcbiAgfVxufSJdfQ==