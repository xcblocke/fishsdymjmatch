
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/input/InputClassicFail.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f29b067+CxOvYZkeCY2BaS9', 'InputClassicFail');
// Scripts/input/InputClassicFail.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BehaviorsEnum_1 = require("../constant/BehaviorsEnum");
var ClassicBeforeFailEffect_1 = require("../ClassicBeforeFailEffect");
var ClassicFailEffect_1 = require("../ClassicFailEffect");
var InputBase_1 = require("../inputbase/InputBase");
var InputClassicFail = /** @class */ (function (_super) {
    __extends(InputClassicFail, _super);
    function InputClassicFail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputClassicFail.prototype.excute = function (e) {
        this.gameContext.gameModifier.modifyClassicEnd();
        (null == e ? void 0 : e.skipBeforeFailEffect) || this.pushClassicBeforeFailEffect();
        this.pushClassicFailEffect(e);
    };
    InputClassicFail.prototype.pushClassicBeforeFailEffect = function () {
        var e = new ClassicBeforeFailEffect_1.ClassicBeforeFailEffect({});
        this.pushEffect(e, BehaviorsEnum_1.EInsertType.Root);
    };
    InputClassicFail.prototype.pushClassicFailEffect = function (e) {
        var t = new ClassicFailEffect_1.ClassicFailEffect({
            isGM: null == e ? void 0 : e.isGM,
            skipInterAd: null == e ? void 0 : e.skipInterAd
        });
        this.pushEffect(t, BehaviorsEnum_1.EInsertType.Root);
    };
    return InputClassicFail;
}(InputBase_1.InputBase));
exports.default = InputClassicFail;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2lucHV0L0lucHV0Q2xhc3NpY0ZhaWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJEQUF3RDtBQUN4RCxzRUFBcUU7QUFDckUsMERBQXlEO0FBQ3pELG9EQUFtRDtBQUNuRDtJQUE4QyxvQ0FBUztJQUF2RDs7SUFpQkEsQ0FBQztJQWhCQyxpQ0FBTSxHQUFOLFVBQU8sQ0FBQztRQUNOLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDakQsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLElBQUksSUFBSSxDQUFDLDJCQUEyQixFQUFFLENBQUM7UUFDcEYsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFDRCxzREFBMkIsR0FBM0I7UUFDRSxJQUFJLENBQUMsR0FBRyxJQUFJLGlEQUF1QixDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLDJCQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUNELGdEQUFxQixHQUFyQixVQUFzQixDQUFDO1FBQ3JCLElBQUksQ0FBQyxHQUFHLElBQUkscUNBQWlCLENBQUM7WUFDNUIsSUFBSSxFQUFFLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTtZQUNqQyxXQUFXLEVBQUUsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXO1NBQ2hELENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLDJCQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FqQkEsQUFpQkMsQ0FqQjZDLHFCQUFTLEdBaUJ0RCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVJbnNlcnRUeXBlIH0gZnJvbSAnLi4vY29uc3RhbnQvQmVoYXZpb3JzRW51bSc7XG5pbXBvcnQgeyBDbGFzc2ljQmVmb3JlRmFpbEVmZmVjdCB9IGZyb20gJy4uL0NsYXNzaWNCZWZvcmVGYWlsRWZmZWN0JztcbmltcG9ydCB7IENsYXNzaWNGYWlsRWZmZWN0IH0gZnJvbSAnLi4vQ2xhc3NpY0ZhaWxFZmZlY3QnO1xuaW1wb3J0IHsgSW5wdXRCYXNlIH0gZnJvbSAnLi4vaW5wdXRiYXNlL0lucHV0QmFzZSc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dENsYXNzaWNGYWlsIGV4dGVuZHMgSW5wdXRCYXNlIHtcbiAgZXhjdXRlKGUpIHtcbiAgICB0aGlzLmdhbWVDb250ZXh0LmdhbWVNb2RpZmllci5tb2RpZnlDbGFzc2ljRW5kKCk7XG4gICAgKG51bGwgPT0gZSA/IHZvaWQgMCA6IGUuc2tpcEJlZm9yZUZhaWxFZmZlY3QpIHx8IHRoaXMucHVzaENsYXNzaWNCZWZvcmVGYWlsRWZmZWN0KCk7XG4gICAgdGhpcy5wdXNoQ2xhc3NpY0ZhaWxFZmZlY3QoZSk7XG4gIH1cbiAgcHVzaENsYXNzaWNCZWZvcmVGYWlsRWZmZWN0KCkge1xuICAgIHZhciBlID0gbmV3IENsYXNzaWNCZWZvcmVGYWlsRWZmZWN0KHt9KTtcbiAgICB0aGlzLnB1c2hFZmZlY3QoZSwgRUluc2VydFR5cGUuUm9vdCk7XG4gIH1cbiAgcHVzaENsYXNzaWNGYWlsRWZmZWN0KGUpIHtcbiAgICB2YXIgdCA9IG5ldyBDbGFzc2ljRmFpbEVmZmVjdCh7XG4gICAgICBpc0dNOiBudWxsID09IGUgPyB2b2lkIDAgOiBlLmlzR00sXG4gICAgICBza2lwSW50ZXJBZDogbnVsbCA9PSBlID8gdm9pZCAwIDogZS5za2lwSW50ZXJBZFxuICAgIH0pO1xuICAgIHRoaXMucHVzaEVmZmVjdCh0LCBFSW5zZXJ0VHlwZS5Sb290KTtcbiAgfVxufSJdfQ==