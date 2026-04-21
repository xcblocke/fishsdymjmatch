
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_bombbrokenspine/Scripts/BombBrokenSpineTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7de17YMlalGn4fsN09yTeD8', 'BombBrokenSpineTrait');
// subpackages/l_bombbrokenspine/Scripts/BombBrokenSpineTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var BombBrokenSpineTrait = /** @class */ (function (_super) {
    __extends(BombBrokenSpineTrait, _super);
    function BombBrokenSpineTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BombBrokenSpineTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    BombBrokenSpineTrait.prototype.onBombBhv_spineBundleName = function (e, t) {
        t({
            returnType: TraitCallbackReturnType.jump,
            isBreak: true,
            returnVal: {
                name: "spine/broken/gameplay_props",
                bundleName: "l_bombbrokenspine"
            }
        });
    };
    BombBrokenSpineTrait.prototype.onBombBhv_moveTime = function (e, t) {
        t({
            returnType: TraitCallbackReturnType.jump,
            isBreak: true,
            returnVal: 0.233
        });
    };
    BombBrokenSpineTrait.traitKey = "BombBrokenSpine";
    BombBrokenSpineTrait = __decorate([
        mj.trait,
        mj.class("BombBrokenSpineTrait")
    ], BombBrokenSpineTrait);
    return BombBrokenSpineTrait;
}(Trait_1.default));
exports.default = BombBrokenSpineTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2JvbWJicm9rZW5zcGluZS9TY3JpcHRzL0JvbWJCcm9rZW5TcGluZVRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFHM0Q7SUFBa0Qsd0NBQUs7SUFBdkQ7O0lBc0JBLENBQUM7SUFwQkMscUNBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNELHdEQUF5QixHQUF6QixVQUEwQixDQUFDLEVBQUUsQ0FBQztRQUM1QixDQUFDLENBQUM7WUFDQSxVQUFVLEVBQUUsdUJBQXVCLENBQUMsSUFBSTtZQUN4QyxPQUFPLEVBQUUsSUFBSTtZQUNiLFNBQVMsRUFBRTtnQkFDVCxJQUFJLEVBQUUsNkJBQTZCO2dCQUNuQyxVQUFVLEVBQUUsbUJBQW1CO2FBQ2hDO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELGlEQUFrQixHQUFsQixVQUFtQixDQUFDLEVBQUUsQ0FBQztRQUNyQixDQUFDLENBQUM7WUFDQSxVQUFVLEVBQUUsdUJBQXVCLENBQUMsSUFBSTtZQUN4QyxPQUFPLEVBQUUsSUFBSTtZQUNiLFNBQVMsRUFBRSxLQUFLO1NBQ2pCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFwQk0sNkJBQVEsR0FBRyxpQkFBaUIsQ0FBQztJQURqQixvQkFBb0I7UUFGeEMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLHNCQUFzQixDQUFDO09BQ1osb0JBQW9CLENBc0J4QztJQUFELDJCQUFDO0NBdEJELEFBc0JDLENBdEJpRCxlQUFLLEdBc0J0RDtrQkF0Qm9CLG9CQUFvQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIkJvbWJCcm9rZW5TcGluZVRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb21iQnJva2VuU3BpbmVUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJCb21iQnJva2VuU3BpbmVcIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICB9XG4gIG9uQm9tYkJodl9zcGluZUJ1bmRsZU5hbWUoZSwgdCkge1xuICAgIHQoe1xuICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUuanVtcCxcbiAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICByZXR1cm5WYWw6IHtcbiAgICAgICAgbmFtZTogXCJzcGluZS9icm9rZW4vZ2FtZXBsYXlfcHJvcHNcIixcbiAgICAgICAgYnVuZGxlTmFtZTogXCJsX2JvbWJicm9rZW5zcGluZVwiXG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgb25Cb21iQmh2X21vdmVUaW1lKGUsIHQpIHtcbiAgICB0KHtcbiAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLmp1bXAsXG4gICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgcmV0dXJuVmFsOiAwLjIzM1xuICAgIH0pO1xuICB9XG59Il19