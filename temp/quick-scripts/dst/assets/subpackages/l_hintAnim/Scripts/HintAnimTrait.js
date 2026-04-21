
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_hintAnim/Scripts/HintAnimTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0f058TNTD5M5rLomF/ebL02', 'HintAnimTrait');
// subpackages/l_hintAnim/Scripts/HintAnimTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var GameEvent_1 = require("../../../Scripts/simulator/constant/GameEvent");
var HintAnimTrait = /** @class */ (function (_super) {
    __extends(HintAnimTrait, _super);
    function HintAnimTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HintAnimTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._config = {
            enableShake: false !== this._traitData.enableShake,
            enableScale: false !== this._traitData.enableScale,
            scaleValue: this._traitData.scaleValue || 1.1,
            scaleDuration: this._traitData.scaleDuration || 0.2
        };
    };
    HintAnimTrait.prototype.getMessageListeners = function () {
        var _t = {};
        _t[GameEvent_1.EGameEvent.TileNode_BeginSelected] = this.onTileNodeBeginSelected.bind(this);
        _t[GameEvent_1.EGameEvent.TileNode_UnSelectedFinish] = this.onTileNodeUnSelectedFinish.bind(this);
        _t[GameEvent_1.EGameEvent.TileNode_HidePropHint] = this.onTileNodeHidePropHint.bind(this);
        return _t;
    };
    HintAnimTrait.prototype.onHitTipsBhv_trgHint = function (t, e) {
        var i = t.beforReturnVal || {}, n = i.tileNode1, r = i.tileNode2, o = i.direction1, a = i.direction2;
        if (n && r) {
            this.playHintAnimation(n, o);
            this.playHintAnimation(r, a);
            e();
        }
        else
            e();
    };
    HintAnimTrait.prototype.playHintAnimation = function (t, e) {
        var i = this;
        if (t) {
            var n = Object.assign(Object.assign({}, this._config), {
                direction: e
            });
            t.playHintAnimation(n, function () {
                mj.triggerInternalEvent("HintAnim_onEnd", i, [t]);
            });
        }
    };
    HintAnimTrait.prototype.onTileNodeBeginSelected = function (t) {
        t && t.pauseHintShake();
    };
    HintAnimTrait.prototype.onTileNodeUnSelectedFinish = function (t) {
        t && t.resumeHintShake();
    };
    HintAnimTrait.prototype.onTileNodeHidePropHint = function (t) {
        t && t.exitHintAnimation();
    };
    HintAnimTrait.traitKey = "HintAnim";
    HintAnimTrait = __decorate([
        mj.trait,
        mj.class("HintAnimTrait")
    ], HintAnimTrait);
    return HintAnimTrait;
}(Trait_1.default));
exports.default = HintAnimTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2hpbnRBbmltL1NjcmlwdHMvSGludEFuaW1UcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELDJFQUEyRTtBQUczRTtJQUEyQyxpQ0FBSztJQUFoRDs7SUFrREEsQ0FBQztJQWhEQyw4QkFBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHO1lBQ2IsV0FBVyxFQUFFLEtBQUssS0FBSyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVc7WUFDbEQsV0FBVyxFQUFFLEtBQUssS0FBSyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVc7WUFDbEQsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxJQUFJLEdBQUc7WUFDN0MsYUFBYSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxJQUFJLEdBQUc7U0FDcEQsQ0FBQztJQUNKLENBQUM7SUFDRCwyQ0FBbUIsR0FBbkI7UUFDRSxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDWixFQUFFLENBQUMsc0JBQVUsQ0FBQyxzQkFBc0IsQ0FBQyxHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEYsRUFBRSxDQUFDLHNCQUFVLENBQUMseUJBQXlCLENBQUMsR0FBRyxJQUFJLENBQUMsMEJBQTBCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RGLEVBQUUsQ0FBQyxzQkFBVSxDQUFDLHFCQUFxQixDQUFDLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5RSxPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFDRCw0Q0FBb0IsR0FBcEIsVUFBcUIsQ0FBQyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGNBQWMsSUFBSSxFQUFFLEVBQzVCLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxFQUNmLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxFQUNmLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxFQUNoQixDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQztRQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDVixJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzdCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDN0IsQ0FBQyxFQUFFLENBQUM7U0FDTDs7WUFBTSxDQUFDLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFDRCx5Q0FBaUIsR0FBakIsVUFBa0IsQ0FBQyxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ2IsSUFBSSxDQUFDLEVBQUU7WUFDTCxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDckQsU0FBUyxFQUFFLENBQUM7YUFDYixDQUFDLENBQUM7WUFDSCxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxFQUFFO2dCQUNyQixFQUFFLENBQUMsb0JBQW9CLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwRCxDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztJQUNELCtDQUF1QixHQUF2QixVQUF3QixDQUFDO1FBQ3ZCLENBQUMsSUFBSSxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUNELGtEQUEwQixHQUExQixVQUEyQixDQUFDO1FBQzFCLENBQUMsSUFBSSxDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUNELDhDQUFzQixHQUF0QixVQUF1QixDQUFDO1FBQ3RCLENBQUMsSUFBSSxDQUFDLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBaERNLHNCQUFRLEdBQUcsVUFBVSxDQUFDO0lBRFYsYUFBYTtRQUZqQyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDO09BQ0wsYUFBYSxDQWtEakM7SUFBRCxvQkFBQztDQWxERCxBQWtEQyxDQWxEMEMsZUFBSyxHQWtEL0M7a0JBbERvQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCB7IEVHYW1lRXZlbnQgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL3NpbXVsYXRvci9jb25zdGFudC9HYW1lRXZlbnQnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJIaW50QW5pbVRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIaW50QW5pbVRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIkhpbnRBbmltXCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLl9jb25maWcgPSB7XG4gICAgICBlbmFibGVTaGFrZTogZmFsc2UgIT09IHRoaXMuX3RyYWl0RGF0YS5lbmFibGVTaGFrZSxcbiAgICAgIGVuYWJsZVNjYWxlOiBmYWxzZSAhPT0gdGhpcy5fdHJhaXREYXRhLmVuYWJsZVNjYWxlLFxuICAgICAgc2NhbGVWYWx1ZTogdGhpcy5fdHJhaXREYXRhLnNjYWxlVmFsdWUgfHwgMS4xLFxuICAgICAgc2NhbGVEdXJhdGlvbjogdGhpcy5fdHJhaXREYXRhLnNjYWxlRHVyYXRpb24gfHwgMC4yXG4gICAgfTtcbiAgfVxuICBnZXRNZXNzYWdlTGlzdGVuZXJzKCkge1xuICAgIHZhciBfdCA9IHt9O1xuICAgIF90W0VHYW1lRXZlbnQuVGlsZU5vZGVfQmVnaW5TZWxlY3RlZF0gPSB0aGlzLm9uVGlsZU5vZGVCZWdpblNlbGVjdGVkLmJpbmQodGhpcyk7XG4gICAgX3RbRUdhbWVFdmVudC5UaWxlTm9kZV9VblNlbGVjdGVkRmluaXNoXSA9IHRoaXMub25UaWxlTm9kZVVuU2VsZWN0ZWRGaW5pc2guYmluZCh0aGlzKTtcbiAgICBfdFtFR2FtZUV2ZW50LlRpbGVOb2RlX0hpZGVQcm9wSGludF0gPSB0aGlzLm9uVGlsZU5vZGVIaWRlUHJvcEhpbnQuYmluZCh0aGlzKTtcbiAgICByZXR1cm4gX3Q7XG4gIH1cbiAgb25IaXRUaXBzQmh2X3RyZ0hpbnQodCwgZSkge1xuICAgIHZhciBpID0gdC5iZWZvclJldHVyblZhbCB8fCB7fSxcbiAgICAgIG4gPSBpLnRpbGVOb2RlMSxcbiAgICAgIHIgPSBpLnRpbGVOb2RlMixcbiAgICAgIG8gPSBpLmRpcmVjdGlvbjEsXG4gICAgICBhID0gaS5kaXJlY3Rpb24yO1xuICAgIGlmIChuICYmIHIpIHtcbiAgICAgIHRoaXMucGxheUhpbnRBbmltYXRpb24obiwgbyk7XG4gICAgICB0aGlzLnBsYXlIaW50QW5pbWF0aW9uKHIsIGEpO1xuICAgICAgZSgpO1xuICAgIH0gZWxzZSBlKCk7XG4gIH1cbiAgcGxheUhpbnRBbmltYXRpb24odCwgZSkge1xuICAgIHZhciBpID0gdGhpcztcbiAgICBpZiAodCkge1xuICAgICAgdmFyIG4gPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX2NvbmZpZyksIHtcbiAgICAgICAgZGlyZWN0aW9uOiBlXG4gICAgICB9KTtcbiAgICAgIHQucGxheUhpbnRBbmltYXRpb24obiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBtai50cmlnZ2VySW50ZXJuYWxFdmVudChcIkhpbnRBbmltX29uRW5kXCIsIGksIFt0XSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgb25UaWxlTm9kZUJlZ2luU2VsZWN0ZWQodCkge1xuICAgIHQgJiYgdC5wYXVzZUhpbnRTaGFrZSgpO1xuICB9XG4gIG9uVGlsZU5vZGVVblNlbGVjdGVkRmluaXNoKHQpIHtcbiAgICB0ICYmIHQucmVzdW1lSGludFNoYWtlKCk7XG4gIH1cbiAgb25UaWxlTm9kZUhpZGVQcm9wSGludCh0KSB7XG4gICAgdCAmJiB0LmV4aXRIaW50QW5pbWF0aW9uKCk7XG4gIH1cbn0iXX0=