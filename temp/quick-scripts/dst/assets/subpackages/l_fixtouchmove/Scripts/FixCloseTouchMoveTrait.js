
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_fixtouchmove/Scripts/FixCloseTouchMoveTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '25e8aVHaFhN6L1/Emklv/8E', 'FixCloseTouchMoveTrait');
// subpackages/l_fixtouchmove/Scripts/FixCloseTouchMoveTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var FixCloseTouchMoveTrait = /** @class */ (function (_super) {
    __extends(FixCloseTouchMoveTrait, _super);
    function FixCloseTouchMoveTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FixCloseTouchMoveTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    FixCloseTouchMoveTrait.prototype.onIptBTchEnd_isFixNotMove = function (t, e) {
        e({
            isBreak: true,
            returnType: TraitCallbackReturnType.jump,
            returnVal: true
        });
    };
    FixCloseTouchMoveTrait.traitKey = "FixCloseTouchMove";
    FixCloseTouchMoveTrait = __decorate([
        mj.trait,
        mj.class("FixCloseTouchMoveTrait")
    ], FixCloseTouchMoveTrait);
    return FixCloseTouchMoveTrait;
}(Trait_1.default));
exports.default = FixCloseTouchMoveTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2ZpeHRvdWNobW92ZS9TY3JpcHRzL0ZpeENsb3NlVG91Y2hNb3ZlVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUczRDtJQUFvRCwwQ0FBSztJQUF6RDs7SUFZQSxDQUFDO0lBVkMsdUNBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNELDBEQUF5QixHQUF6QixVQUEwQixDQUFDLEVBQUUsQ0FBQztRQUM1QixDQUFDLENBQUM7WUFDQSxPQUFPLEVBQUUsSUFBSTtZQUNiLFVBQVUsRUFBRSx1QkFBdUIsQ0FBQyxJQUFJO1lBQ3hDLFNBQVMsRUFBRSxJQUFJO1NBQ2hCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFWTSwrQkFBUSxHQUFHLG1CQUFtQixDQUFDO0lBRG5CLHNCQUFzQjtRQUYxQyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsd0JBQXdCLENBQUM7T0FDZCxzQkFBc0IsQ0FZMUM7SUFBRCw2QkFBQztDQVpELEFBWUMsQ0FabUQsZUFBSyxHQVl4RDtrQkFab0Isc0JBQXNCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiRml4Q2xvc2VUb3VjaE1vdmVUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRml4Q2xvc2VUb3VjaE1vdmVUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJGaXhDbG9zZVRvdWNoTW92ZVwiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gIH1cbiAgb25JcHRCVGNoRW5kX2lzRml4Tm90TW92ZSh0LCBlKSB7XG4gICAgZSh7XG4gICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUuanVtcCxcbiAgICAgIHJldHVyblZhbDogdHJ1ZVxuICAgIH0pO1xuICB9XG59Il19