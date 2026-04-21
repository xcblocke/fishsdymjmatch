
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_vibrate/Scripts/VibrateDragEndPatchTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '98077eHuDRBf5T6ANOJyQ04', 'VibrateDragEndPatchTrait');
// subpackages/l_vibrate/Scripts/VibrateDragEndPatchTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var VibrateManager_1 = require("../../../Scripts/gamePlay/base/vibrate/VibrateManager");
var VibrateDragEndPatchTrait = /** @class */ (function (_super) {
    __extends(VibrateDragEndPatchTrait, _super);
    function VibrateDragEndPatchTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VibrateDragEndPatchTrait.prototype.onIptTchMove_startMove = function (t, e) {
        t.extra = t.extra || {};
        t.extra.skipDragStartVibrate = true;
        e();
    };
    VibrateDragEndPatchTrait.prototype.onIptBTchEnd_moveEnd = function (t, e) {
        VibrateManager_1.default.executeVibrate(VibrateManager_1.EVibrateStrength.Medium);
        e();
    };
    VibrateDragEndPatchTrait.traitKey = "VibrateDragEndPatch";
    VibrateDragEndPatchTrait = __decorate([
        mj.trait,
        mj.class("VibrateDragEndPatchTrait")
    ], VibrateDragEndPatchTrait);
    return VibrateDragEndPatchTrait;
}(Trait_1.default));
exports.default = VibrateDragEndPatchTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3ZpYnJhdGUvU2NyaXB0cy9WaWJyYXRlRHJhZ0VuZFBhdGNoVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUMzRCx3RkFBeUc7QUFHekc7SUFBc0QsNENBQUs7SUFBM0Q7O0lBV0EsQ0FBQztJQVRDLHlEQUFzQixHQUF0QixVQUF1QixDQUFDLEVBQUUsQ0FBQztRQUN6QixDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxLQUFLLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDO1FBQ3BDLENBQUMsRUFBRSxDQUFDO0lBQ04sQ0FBQztJQUNELHVEQUFvQixHQUFwQixVQUFxQixDQUFDLEVBQUUsQ0FBQztRQUN2Qix3QkFBYyxDQUFDLGNBQWMsQ0FBQyxpQ0FBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN2RCxDQUFDLEVBQUUsQ0FBQztJQUNOLENBQUM7SUFUTSxpQ0FBUSxHQUFHLHFCQUFxQixDQUFDO0lBRHJCLHdCQUF3QjtRQUY1QyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsMEJBQTBCLENBQUM7T0FDaEIsd0JBQXdCLENBVzVDO0lBQUQsK0JBQUM7Q0FYRCxBQVdDLENBWHFELGVBQUssR0FXMUQ7a0JBWG9CLHdCQUF3QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgVmlicmF0ZU1hbmFnZXIsIHsgRVZpYnJhdGVTdHJlbmd0aCB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvYmFzZS92aWJyYXRlL1ZpYnJhdGVNYW5hZ2VyJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiVmlicmF0ZURyYWdFbmRQYXRjaFRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWJyYXRlRHJhZ0VuZFBhdGNoVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiVmlicmF0ZURyYWdFbmRQYXRjaFwiO1xuICBvbklwdFRjaE1vdmVfc3RhcnRNb3ZlKHQsIGUpIHtcbiAgICB0LmV4dHJhID0gdC5leHRyYSB8fCB7fTtcbiAgICB0LmV4dHJhLnNraXBEcmFnU3RhcnRWaWJyYXRlID0gdHJ1ZTtcbiAgICBlKCk7XG4gIH1cbiAgb25JcHRCVGNoRW5kX21vdmVFbmQodCwgZSkge1xuICAgIFZpYnJhdGVNYW5hZ2VyLmV4ZWN1dGVWaWJyYXRlKEVWaWJyYXRlU3RyZW5ndGguTWVkaXVtKTtcbiAgICBlKCk7XG4gIH1cbn0iXX0=