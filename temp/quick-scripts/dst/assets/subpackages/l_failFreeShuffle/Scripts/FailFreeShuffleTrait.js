
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_failFreeShuffle/Scripts/FailFreeShuffleTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'db6abxDQXBMU4nBc9haVkSR', 'FailFreeShuffleTrait');
// subpackages/l_failFreeShuffle/Scripts/FailFreeShuffleTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var GameInputEnum_1 = require("../../../Scripts/simulator/constant/GameInputEnum");
var GameInteraction_1 = require("../../../Scripts/GameInteraction/GameInteraction");
var ControllerManager_1 = require("../../../Scripts/framework/manager/ControllerManager");
var FailFreeShuffleTrait = /** @class */ (function (_super) {
    __extends(FailFreeShuffleTrait, _super);
    function FailFreeShuffleTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._config = {
            freeCount: 4
        };
        return _this;
    }
    FailFreeShuffleTrait.prototype.onLoad = function () {
        var t, o;
        _super.prototype.onLoad.call(this);
        this._config = {
            freeCount: null !== (o = null === (t = this._traitData) || void 0 === t ? void 0 : t.freeCount) && void 0 !== o ? o : 4
        };
        this.isLocalEmpty(this.localData.usedFreeShuffleCount) && (this.localData.usedFreeShuffleCount = 0);
    };
    FailFreeShuffleTrait.prototype.isLocalEmpty = function (e) {
        return null == e || "" === e;
    };
    FailFreeShuffleTrait.prototype.getRemainingFreeCount = function () {
        return Math.max(0, this._config.freeCount - this.localData.usedFreeShuffleCount);
    };
    FailFreeShuffleTrait.prototype.hasFreeCount = function () {
        return this.getRemainingFreeCount() > 0;
    };
    FailFreeShuffleTrait.prototype.consumeFreeCount = function () {
        this.localData.usedFreeShuffleCount = this.localData.usedFreeShuffleCount + 1;
    };
    FailFreeShuffleTrait.prototype.onGameUI_onBtnShuffle = function (e, t) {
        t();
    };
    FailFreeShuffleTrait.prototype.onFailBhv_start = function (e, t) {
        var o, r, n;
        if (this.hasFreeCount()) {
            var i = e.ins, l = null === (n = null === (r = null === (o = e.args) || void 0 === o ? void 0 : o[0]) || void 0 === r ? void 0 : r.data) || void 0 === n ? void 0 : n.isGM;
            if ((null == i ? void 0 : i.context) && !l && !i.context.getTileMapObject().checkIsDead([])) {
                t();
                return;
            }
            this.showFreeShuffleDialog();
            i && "function" == typeof i.finish && i.finish();
            t({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return
            });
        }
        else
            t();
    };
    FailFreeShuffleTrait.prototype.showFreeShuffleDialog = function () {
        var e = this;
        ControllerManager_1.default.getInstance().closeViewByName("WatchAdGetPropController");
        this.pushController("FailFreeShuffleDialogController", {
            onFreeShuffle: function () {
                e.executeFreeShuffleAndConsume();
            },
            onClose: function () { },
            bgStyle: null
        });
    };
    FailFreeShuffleTrait.prototype.executeFreeShuffleAndConsume = function () {
        this.consumeFreeCount();
        GameInteraction_1.GameInteraction.input({
            inputType: GameInputEnum_1.EGameInputEnum.Shuffle,
            from: GameInputEnum_1.EShuffleFrom.Free
        });
    };
    FailFreeShuffleTrait.traitKey = "FailFreeShuffle";
    FailFreeShuffleTrait = __decorate([
        mj.trait,
        mj.class("FailFreeShuffleTrait")
    ], FailFreeShuffleTrait);
    return FailFreeShuffleTrait;
}(Trait_1.default));
exports.default = FailFreeShuffleTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2ZhaWxGcmVlU2h1ZmZsZS9TY3JpcHRzL0ZhaWxGcmVlU2h1ZmZsZVRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFDM0QsOEVBQXdGO0FBQ3hGLG1GQUFpRztBQUNqRyxvRkFBbUY7QUFDbkYsMEZBQXFGO0FBR3JGO0lBQWtELHdDQUFLO0lBQXZEO1FBQUEscUVBK0RDO1FBOURDLGFBQU8sR0FBRztZQUNSLFNBQVMsRUFBRSxDQUFDO1NBQ2IsQ0FBQzs7SUE0REosQ0FBQztJQTFEQyxxQ0FBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ1QsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHO1lBQ2IsU0FBUyxFQUFFLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN4SCxDQUFDO1FBQ0YsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLG9CQUFvQixHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3RHLENBQUM7SUFDRCwyQ0FBWSxHQUFaLFVBQWEsQ0FBQztRQUNaLE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFDRCxvREFBcUIsR0FBckI7UUFDRSxPQUFPLElB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LG9CQUFvQjtRQUZ4QyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsc0JBQXNCLENBQUM7T0FDWixvQkFBb0IsQ0ErRHhDO0lBQUQsMkJBQUM7Q0EvREQsQUErREMsQ0EvRGlELGVBQUssR0ErRHREO2tCQS9Eb0Isb0JBQW9CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCB7IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXRNYW5hZ2VyJztcbmltcG9ydCB7IEVHYW1lSW5wdXRFbnVtLCBFU2h1ZmZsZUZyb20gfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL3NpbXVsYXRvci9jb25zdGFudC9HYW1lSW5wdXRFbnVtJztcbmltcG9ydCB7IEdhbWVJbnRlcmFjdGlvbiB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvR2FtZUludGVyYWN0aW9uL0dhbWVJbnRlcmFjdGlvbic7XG5pbXBvcnQgQ29udHJvbGxlck1hbmFnZXIgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvbWFuYWdlci9Db250cm9sbGVyTWFuYWdlcic7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIkZhaWxGcmVlU2h1ZmZsZVRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGYWlsRnJlZVNodWZmbGVUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgX2NvbmZpZyA9IHtcbiAgICBmcmVlQ291bnQ6IDRcbiAgfTtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJGYWlsRnJlZVNodWZmbGVcIjtcbiAgb25Mb2FkKCkge1xuICAgIHZhciB0LCBvO1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuX2NvbmZpZyA9IHtcbiAgICAgIGZyZWVDb3VudDogbnVsbCAhPT0gKG8gPSBudWxsID09PSAodCA9IHRoaXMuX3RyYWl0RGF0YSkgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC5mcmVlQ291bnQpICYmIHZvaWQgMCAhPT0gbyA/IG8gOiA0XG4gICAgfTtcbiAgICB0aGlzLmlzTG9jYWxFbXB0eSh0aGlzLmxvY2FsRGF0YS51c2VkRnJlZVNodWZmbGVDb3VudCkgJiYgKHRoaXMubG9jYWxEYXRhLnVzZWRGcmVlU2h1ZmZsZUNvdW50ID0gMCk7XG4gIH1cbiAgaXNMb2NhbEVtcHR5KGUpIHtcbiAgICByZXR1cm4gbnVsbCA9PSBlIHx8IFwiXCIgPT09IGU7XG4gIH1cbiAgZ2V0UmVtYWluaW5nRnJlZUNvdW50KCkge1xuICAgIHJldHVybiBNYXRoLm1heCgwLCB0aGlzLl9jb25maWcuZnJlZUNvdW50IC0gdGhpcy5sb2NhbERhdGEudXNlZEZyZWVTaHVmZmxlQ291bnQpO1xuICB9XG4gIGhhc0ZyZWVDb3VudCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRSZW1haW5pbmdGcmVlQ291bnQoKSA+IDA7XG4gIH1cbiAgY29uc3VtZUZyZWVDb3VudCgpIHtcbiAgICB0aGlzLmxvY2FsRGF0YS51c2VkRnJlZVNodWZmbGVDb3VudCA9IHRoaXMubG9jYWxEYXRhLnVzZWRGcmVlU2h1ZmZsZUNvdW50ICsgMTtcbiAgfVxuICBvbkdhbWVVSV9vbkJ0blNodWZmbGUoZSwgdCkge1xuICAgIHQoKTtcbiAgfVxuICBvbkZhaWxCaHZfc3RhcnQoZSwgdCkge1xuICAgIHZhciBvLCByLCBuO1xuICAgIGlmICh0aGlzLmhhc0ZyZWVDb3VudCgpKSB7XG4gICAgICB2YXIgaSA9IGUuaW5zLFxuICAgICAgICBsID0gbnVsbCA9PT0gKG4gPSBudWxsID09PSAociA9IG51bGwgPT09IChvID0gZS5hcmdzKSB8fCB2b2lkIDAgPT09IG8gPyB2b2lkIDAgOiBvWzBdKSB8fCB2b2lkIDAgPT09IHIgPyB2b2lkIDAgOiByLmRhdGEpIHx8IHZvaWQgMCA9PT0gbiA/IHZvaWQgMCA6IG4uaXNHTTtcbiAgICAgIGlmICgobnVsbCA9PSBpID8gdm9pZCAwIDogaS5jb250ZXh0KSAmJiAhbCAmJiAhaS5jb250ZXh0LmdldFRpbGVNYXBPYmplY3QoKS5jaGVja0lzRGVhZChbXSkpIHtcbiAgICAgICAgdCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLnNob3dGcmVlU2h1ZmZsZURpYWxvZygpO1xuICAgICAgaSAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGkuZmluaXNoICYmIGkuZmluaXNoKCk7XG4gICAgICB0KHtcbiAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuXG4gICAgICB9KTtcbiAgICB9IGVsc2UgdCgpO1xuICB9XG4gIHNob3dGcmVlU2h1ZmZsZURpYWxvZygpIHtcbiAgICB2YXIgZSA9IHRoaXM7XG4gICAgQ29udHJvbGxlck1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5jbG9zZVZpZXdCeU5hbWUoXCJXYXRjaEFkR2V0UHJvcENvbnRyb2xsZXJcIik7XG4gICAgdGhpcy5wdXNoQ29udHJvbGxlcihcIkZhaWxGcmVlU2h1ZmZsZURpYWxvZ0NvbnRyb2xsZXJcIiwge1xuICAgICAgb25GcmVlU2h1ZmZsZTogZnVuY3Rpb24gKCkge1xuICAgICAgICBlLmV4ZWN1dGVGcmVlU2h1ZmZsZUFuZENvbnN1bWUoKTtcbiAgICAgIH0sXG4gICAgICBvbkNsb3NlOiBmdW5jdGlvbiAoKSB7fSxcbiAgICAgIGJnU3R5bGU6IG51bGxcbiAgICB9KTtcbiAgfVxuICBleGVjdXRlRnJlZVNodWZmbGVBbmRDb25zdW1lKCkge1xuICAgIHRoaXMuY29uc3VtZUZyZWVDb3VudCgpO1xuICAgIEdhbWVJbnRlcmFjdGlvbi5pbnB1dCh7XG4gICAgICBpbnB1dFR5cGU6IEVHYW1lSW5wdXRFbnVtLlNodWZmbGUsXG4gICAgICBmcm9tOiBFU2h1ZmZsZUZyb20uRnJlZVxuICAgIH0pO1xuICB9XG59Il19