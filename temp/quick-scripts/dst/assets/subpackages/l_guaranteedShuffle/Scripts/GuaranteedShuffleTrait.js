
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_guaranteedShuffle/Scripts/GuaranteedShuffleTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'dbb64Z66IBKGb0P3kWsDnZg', 'GuaranteedShuffleTrait');
// subpackages/l_guaranteedShuffle/Scripts/GuaranteedShuffleTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameEvent_1 = require("../../../Scripts/simulator/constant/GameEvent");
var GuaranteedShuffleEffect_1 = require("../../../Scripts/GuaranteedShuffleEffect");
var BehaviorsMapping_1 = require("../../../Scripts/mapping/BehaviorsMapping");
var BehaviorFactory_1 = require("../../../Scripts/BehaviorFactory");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var GuaranteedShuffleBehavior_1 = require("../../../Scripts/base/GuaranteedShuffleBehavior");
var GuaranteedShuffleModifier_1 = require("./GuaranteedShuffleModifier");
var GuaranteedShuffleTrait = /** @class */ (function (_super) {
    __extends(GuaranteedShuffleTrait, _super);
    function GuaranteedShuffleTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._isGuaranteedShuffle = false;
        return _this;
    }
    GuaranteedShuffleTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._registerBehaviors();
    };
    GuaranteedShuffleTrait.prototype._registerBehaviors = function () {
        BehaviorFactory_1.BehaviorFactory.registerBehavior(BehaviorsMapping_1.BehaviorsMapping.GuaranteedShuffle, GuaranteedShuffleBehavior_1.GuaranteedShuffleBehavior);
    };
    GuaranteedShuffleTrait.prototype.onShuffleMod_verifySolu = function (e, t) {
        var r = e.ins, o = e.beforReturnVal;
        this._isGuaranteedShuffle = false;
        if (1 != o) {
            this._isGuaranteedShuffle = true;
            this._guaranteedShuffleModifier = new GuaranteedShuffleModifier_1.GuaranteedShuffleModifier(r._context);
            this._guaranteedShuffleModifier.shuffleToFixedArea();
            t({
                returnType: TraitCallbackReturnType.return,
                isBreak: true
            });
        }
        else
            t();
    };
    GuaranteedShuffleTrait.prototype.onIptShuffle_pushEffect = function (e, t) {
        var r = this._isGuaranteedShuffle;
        this._isGuaranteedShuffle = false;
        if (r) {
            var o = e.ins, i = new GuaranteedShuffleEffect_1.GuaranteedShuffleEffect({
                originalPositions: this._guaranteedShuffleModifier.getShuffleOriginalPositions()
            });
            o.pushEffect(i);
            mj.EventManager.emit(GameEvent_1.EGameEvent.Effect_Shuffle, o);
            t({
                returnType: TraitCallbackReturnType.return,
                isBreak: true
            });
        }
        else
            t();
    };
    GuaranteedShuffleTrait.traitKey = "GuaranteedShuffle";
    GuaranteedShuffleTrait = __decorate([
        mj.trait,
        mj.class("GuaranteedShuffleTrait")
    ], GuaranteedShuffleTrait);
    return GuaranteedShuffleTrait;
}(Trait_1.default));
exports.default = GuaranteedShuffleTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2d1YXJhbnRlZWRTaHVmZmxlL1NjcmlwdHMvR3VhcmFudGVlZFNodWZmbGVUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkVBQTJFO0FBQzNFLG9GQUFtRjtBQUNuRiw4RUFBNkU7QUFDN0Usb0VBQW1FO0FBQ25FLGdFQUEyRDtBQUMzRCw2RkFBNEY7QUFDNUYseUVBQXdFO0FBR3hFO0lBQW9ELDBDQUFLO0lBQXpEO1FBQUEscUVBd0NDO1FBdkNDLDBCQUFvQixHQUFHLEtBQUssQ0FBQzs7SUF1Qy9CLENBQUM7SUFyQ0MsdUNBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUNELG1EQUFrQixHQUFsQjtRQUNFLGlDQUFlLENBQUMsZ0JBQWdCLENBQUMsbUNBQWdCLENBQUMsaUJBQWlCLEVBQUUscURBQXlCLENBQUMsQ0FBQztJQUNsRyxDQUFDO0lBQ0Qsd0RBQXVCLEdBQXZCLFVBQXdCLENBQUMsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQ1gsQ0FBQyxHQUFHLENBQUMsQ0FBQyxjQUFjLENBQUM7UUFDdkIsSUFBSSxDQUFDLG9CQUFvQixHQUFHLEtBQUssQ0FBQztRQUNsQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDVixJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDO1lBQ2pDLElBQUksQ0FBQywwQkFBMEIsR0FBRyxJQUFJLHFEQUF5QixDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM1RSxJQUFJLENBQUMsMEJBQTBCLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztZQUNyRCxDQUFDLENBQUM7Z0JBQ0EsVUFBVSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQzFDLE9BQU8sRUFBRSxJQUFJO2FBQ2QsQ0FBQyxDQUFDO1NBQ0o7O1lBQU0sQ0FBQyxFQUFFLENBQUM7SUFDYixDQUFDO0lBQ0Qsd0RBQXVCLEdBQXZCLFVBQXdCLENBQUMsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztRQUNsQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsS0FBSyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxFQUFFO1lBQ0wsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFDWCxDQUFDLEdBQUcsSUFBSSxpREFBdUIsQ0FBQztnQkFDOUIsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLDBCQUEwQixDQUFDLDJCQUEyQixFQUFFO2FBQ2pGLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEIsRUFBRSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsc0JBQVUsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDbkQsQ0FBQyxDQUFDO2dCQUNBLFVBQVUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMxQyxPQUFPLEVBQUUsSUFBSTthQUNkLENBQUMsQ0FBQztTQUNKOztZQUFNLENBQUMsRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQXJDTSwrQkFBUSxHQUFHLG1CQUFtQixDQUFDO0lBRm5CLHNCQUFzQjtRQUYxQyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsd0JBQXdCLENBQUM7T0FDZCxzQkFBc0IsQ0F3QzFDO0lBQUQsNkJBQUM7Q0F4Q0QsQUF3Q0MsQ0F4Q21ELGVBQUssR0F3Q3hEO2tCQXhDb0Isc0JBQXNCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRUdhbWVFdmVudCB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVFdmVudCc7XG5pbXBvcnQgeyBHdWFyYW50ZWVkU2h1ZmZsZUVmZmVjdCB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvR3VhcmFudGVlZFNodWZmbGVFZmZlY3QnO1xuaW1wb3J0IHsgQmVoYXZpb3JzTWFwcGluZyB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvbWFwcGluZy9CZWhhdmlvcnNNYXBwaW5nJztcbmltcG9ydCB7IEJlaGF2aW9yRmFjdG9yeSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvQmVoYXZpb3JGYWN0b3J5JztcbmltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgeyBHdWFyYW50ZWVkU2h1ZmZsZUJlaGF2aW9yIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9iYXNlL0d1YXJhbnRlZWRTaHVmZmxlQmVoYXZpb3InO1xuaW1wb3J0IHsgR3VhcmFudGVlZFNodWZmbGVNb2RpZmllciB9IGZyb20gJy4vR3VhcmFudGVlZFNodWZmbGVNb2RpZmllcic7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIkd1YXJhbnRlZWRTaHVmZmxlVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEd1YXJhbnRlZWRTaHVmZmxlVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIF9pc0d1YXJhbnRlZWRTaHVmZmxlID0gZmFsc2U7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiR3VhcmFudGVlZFNodWZmbGVcIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuX3JlZ2lzdGVyQmVoYXZpb3JzKCk7XG4gIH1cbiAgX3JlZ2lzdGVyQmVoYXZpb3JzKCkge1xuICAgIEJlaGF2aW9yRmFjdG9yeS5yZWdpc3RlckJlaGF2aW9yKEJlaGF2aW9yc01hcHBpbmcuR3VhcmFudGVlZFNodWZmbGUsIEd1YXJhbnRlZWRTaHVmZmxlQmVoYXZpb3IpO1xuICB9XG4gIG9uU2h1ZmZsZU1vZF92ZXJpZnlTb2x1KGUsIHQpIHtcbiAgICB2YXIgciA9IGUuaW5zLFxuICAgICAgbyA9IGUuYmVmb3JSZXR1cm5WYWw7XG4gICAgdGhpcy5faXNHdWFyYW50ZWVkU2h1ZmZsZSA9IGZhbHNlO1xuICAgIGlmICgxICE9IG8pIHtcbiAgICAgIHRoaXMuX2lzR3VhcmFudGVlZFNodWZmbGUgPSB0cnVlO1xuICAgICAgdGhpcy5fZ3VhcmFudGVlZFNodWZmbGVNb2RpZmllciA9IG5ldyBHdWFyYW50ZWVkU2h1ZmZsZU1vZGlmaWVyKHIuX2NvbnRleHQpO1xuICAgICAgdGhpcy5fZ3VhcmFudGVlZFNodWZmbGVNb2RpZmllci5zaHVmZmxlVG9GaXhlZEFyZWEoKTtcbiAgICAgIHQoe1xuICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICAgIGlzQnJlYWs6IHRydWVcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB0KCk7XG4gIH1cbiAgb25JcHRTaHVmZmxlX3B1c2hFZmZlY3QoZSwgdCkge1xuICAgIHZhciByID0gdGhpcy5faXNHdWFyYW50ZWVkU2h1ZmZsZTtcbiAgICB0aGlzLl9pc0d1YXJhbnRlZWRTaHVmZmxlID0gZmFsc2U7XG4gICAgaWYgKHIpIHtcbiAgICAgIHZhciBvID0gZS5pbnMsXG4gICAgICAgIGkgPSBuZXcgR3VhcmFudGVlZFNodWZmbGVFZmZlY3Qoe1xuICAgICAgICAgIG9yaWdpbmFsUG9zaXRpb25zOiB0aGlzLl9ndWFyYW50ZWVkU2h1ZmZsZU1vZGlmaWVyLmdldFNodWZmbGVPcmlnaW5hbFBvc2l0aW9ucygpXG4gICAgICAgIH0pO1xuICAgICAgby5wdXNoRWZmZWN0KGkpO1xuICAgICAgbWouRXZlbnRNYW5hZ2VyLmVtaXQoRUdhbWVFdmVudC5FZmZlY3RfU2h1ZmZsZSwgbyk7XG4gICAgICB0KHtcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICBpc0JyZWFrOiB0cnVlXG4gICAgICB9KTtcbiAgICB9IGVsc2UgdCgpO1xuICB9XG59Il19