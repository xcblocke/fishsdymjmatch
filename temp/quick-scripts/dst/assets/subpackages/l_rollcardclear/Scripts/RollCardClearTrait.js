
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_rollcardclear/Scripts/RollCardClearTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'beb99ikEt5G5I+UTCbTdKAG', 'RollCardClearTrait');
// subpackages/l_rollcardclear/Scripts/RollCardClearTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var RollCardClearTrait = /** @class */ (function (_super) {
    __extends(RollCardClearTrait, _super);
    function RollCardClearTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RollCardClearTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    RollCardClearTrait.prototype.onRollCTNode_clearCelSel = function (t, r) {
        var e;
        null === (e = t.ins._tileFlipStateCtl) || void 0 === e || e.forceEnter();
        r({
            isBreak: true,
            returnType: TraitCallbackReturnType.return
        });
    };
    RollCardClearTrait.traitKey = "RollCardClear";
    RollCardClearTrait = __decorate([
        mj.trait,
        mj.class("RollCardClearTrait")
    ], RollCardClearTrait);
    return RollCardClearTrait;
}(Trait_1.default));
exports.default = RollCardClearTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3JvbGxjYXJkY2xlYXIvU2NyaXB0cy9Sb2xsQ2FyZENsZWFyVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUczRDtJQUFnRCxzQ0FBSztJQUFyRDs7SUFhQSxDQUFDO0lBWEMsbUNBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNELHFEQUF3QixHQUF4QixVQUF5QixDQUFDLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsQ0FBQztRQUNOLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUN6RSxDQUFDLENBQUM7WUFDQSxPQUFPLEVBQUUsSUFBSTtZQUNiLFVBQVUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO1NBQzNDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFYTSwyQkFBUSxHQUFHLGVBQWUsQ0FBQztJQURmLGtCQUFrQjtRQUZ0QyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUM7T0FDVixrQkFBa0IsQ0FhdEM7SUFBRCx5QkFBQztDQWJELEFBYUMsQ0FiK0MsZUFBSyxHQWFwRDtrQkFib0Isa0JBQWtCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiUm9sbENhcmRDbGVhclRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb2xsQ2FyZENsZWFyVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiUm9sbENhcmRDbGVhclwiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gIH1cbiAgb25Sb2xsQ1ROb2RlX2NsZWFyQ2VsU2VsKHQsIHIpIHtcbiAgICB2YXIgZTtcbiAgICBudWxsID09PSAoZSA9IHQuaW5zLl90aWxlRmxpcFN0YXRlQ3RsKSB8fCB2b2lkIDAgPT09IGUgfHwgZS5mb3JjZUVudGVyKCk7XG4gICAgcih7XG4gICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuXG4gICAgfSk7XG4gIH1cbn0iXX0=