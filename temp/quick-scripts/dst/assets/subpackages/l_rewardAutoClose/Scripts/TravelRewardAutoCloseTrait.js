
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_rewardAutoClose/Scripts/TravelRewardAutoCloseTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3d78cmSBLdM1pjevavY804i', 'TravelRewardAutoCloseTrait');
// subpackages/l_rewardAutoClose/Scripts/TravelRewardAutoCloseTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TravelRewardAutoCloseTrait = /** @class */ (function (_super) {
    __extends(TravelRewardAutoCloseTrait, _super);
    function TravelRewardAutoCloseTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TravelRewardAutoCloseTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    TravelRewardAutoCloseTrait.prototype.onTravelRewardVv_autoClose = function (t, e) {
        e({
            returnType: TraitCallbackReturnType.jump,
            returnVal: true
        });
    };
    TravelRewardAutoCloseTrait.traitKey = "TravelRewardAutoClose";
    TravelRewardAutoCloseTrait = __decorate([
        mj.trait,
        mj.class("TravelRewardAutoCloseTrait")
    ], TravelRewardAutoCloseTrait);
    return TravelRewardAutoCloseTrait;
}(Trait_1.default));
exports.default = TravelRewardAutoCloseTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3Jld2FyZEF1dG9DbG9zZS9TY3JpcHRzL1RyYXZlbFJld2FyZEF1dG9DbG9zZVRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFHM0Q7SUFBd0QsOENBQUs7SUFBN0Q7O0lBV0EsQ0FBQztJQVRDLDJDQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDRCwrREFBMEIsR0FBMUIsVUFBMkIsQ0FBQyxFQUFFLENBQUM7UUFDN0IsQ0FBQyxDQUFDO1lBQ0EsVUFBVSxFQUFFLHVCQUF1QixDQUFDLElBQUk7WUFDeEMsU0FBUyxFQUFFLElBQUk7U0FDaEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQVRNLG1DQUFRLEdBQUcsdUJBQXVCLENBQUM7SUFEdkIsMEJBQTBCO1FBRjlDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyw0QkFBNEIsQ0FBQztPQUNsQiwwQkFBMEIsQ0FXOUM7SUFBRCxpQ0FBQztDQVhELEFBV0MsQ0FYdUQsZUFBSyxHQVc1RDtrQkFYb0IsMEJBQTBCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiVHJhdmVsUmV3YXJkQXV0b0Nsb3NlVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyYXZlbFJld2FyZEF1dG9DbG9zZVRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIlRyYXZlbFJld2FyZEF1dG9DbG9zZVwiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gIH1cbiAgb25UcmF2ZWxSZXdhcmRWdl9hdXRvQ2xvc2UodCwgZSkge1xuICAgIGUoe1xuICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUuanVtcCxcbiAgICAgIHJldHVyblZhbDogdHJ1ZVxuICAgIH0pO1xuICB9XG59Il19