
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_redDotCtrl/Scripts/RedDotCtrlTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5a7a1LXV8FDL4JAE50Bap3D', 'RedDotCtrlTrait');
// subpackages/l_redDotCtrl/Scripts/RedDotCtrlTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var RedDotCtrlTrait = /** @class */ (function (_super) {
    __extends(RedDotCtrlTrait, _super);
    function RedDotCtrlTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RedDotCtrlTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    RedDotCtrlTrait.prototype.onRedDotCtrl_showRedDot = function (t, r) {
        var e = t.args;
        if (e && e.length > 0) {
            var o = e[0];
            o && (o.show = this._traitData.show);
        }
        r({
            returnType: TraitCallbackReturnType.return
        });
    };
    RedDotCtrlTrait.traitKey = "RedDotCtrl";
    RedDotCtrlTrait = __decorate([
        mj.trait,
        mj.class("RedDotCtrlTrait")
    ], RedDotCtrlTrait);
    return RedDotCtrlTrait;
}(Trait_1.default));
exports.default = RedDotCtrlTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3JlZERvdEN0cmwvU2NyaXB0cy9SZWREb3RDdHJsVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUczRDtJQUE2QyxtQ0FBSztJQUFsRDs7SUFlQSxDQUFDO0lBYkMsZ0NBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNELGlEQUF1QixHQUF2QixVQUF3QixDQUFDLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3RDO1FBQ0QsQ0FBQyxDQUFDO1lBQ0EsVUFBVSxFQUFFLHVCQUF1QixDQUFDLE1BQU07U0FDM0MsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQWJNLHdCQUFRLEdBQUcsWUFBWSxDQUFDO0lBRFosZUFBZTtRQUZuQyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUM7T0FDUCxlQUFlLENBZW5DO0lBQUQsc0JBQUM7Q0FmRCxBQWVDLENBZjRDLGVBQUssR0FlakQ7a0JBZm9CLGVBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJSZWREb3RDdHJsVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlZERvdEN0cmxUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJSZWREb3RDdHJsXCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgfVxuICBvblJlZERvdEN0cmxfc2hvd1JlZERvdCh0LCByKSB7XG4gICAgdmFyIGUgPSB0LmFyZ3M7XG4gICAgaWYgKGUgJiYgZS5sZW5ndGggPiAwKSB7XG4gICAgICB2YXIgbyA9IGVbMF07XG4gICAgICBvICYmIChvLnNob3cgPSB0aGlzLl90cmFpdERhdGEuc2hvdyk7XG4gICAgfVxuICAgIHIoe1xuICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuXG4gICAgfSk7XG4gIH1cbn0iXX0=