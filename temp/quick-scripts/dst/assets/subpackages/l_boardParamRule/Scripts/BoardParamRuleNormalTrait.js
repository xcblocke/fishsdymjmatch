
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_boardParamRule/Scripts/BoardParamRuleNormalTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4e2e1p9hjNEaaUud5SpQAu8', 'BoardParamRuleNormalTrait');
// subpackages/l_boardParamRule/Scripts/BoardParamRuleNormalTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BoardParamRuleEngine_1 = require("../../../Scripts/BoardParamRuleEngine");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var BoardParamRuleTrait_1 = require("./BoardParamRuleTrait");
var BoardParamRuleNormalTrait = /** @class */ (function (_super) {
    __extends(BoardParamRuleNormalTrait, _super);
    function BoardParamRuleNormalTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BoardParamRuleNormalTrait.prototype.onLoginM_enterGame = function (t, e) {
        var r = BoardParamRuleEngine_1.default.getInstance(), a = BoardParamRuleTrait_1.default.extractGroupIds(this._traitData);
        r.addPlayerGroupIds(a);
        e();
    };
    BoardParamRuleNormalTrait.prototype.initEvent = function () {
        var t = [{
                event: "LoginM_enterGame",
                type: 0
            }];
        this._traitData.events = t;
        this.registerEvent(t);
    };
    BoardParamRuleNormalTrait.traitKey = "BoardParamRuleNormal";
    BoardParamRuleNormalTrait = __decorate([
        mj.trait,
        mj.class("BoardParamRuleNormalTrait")
    ], BoardParamRuleNormalTrait);
    return BoardParamRuleNormalTrait;
}(Trait_1.default));
exports.default = BoardParamRuleNormalTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2JvYXJkUGFyYW1SdWxlL1NjcmlwdHMvQm9hcmRQYXJhbVJ1bGVOb3JtYWxUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOEVBQXlFO0FBQ3pFLGdFQUEyRDtBQUMzRCw2REFBd0Q7QUFHeEQ7SUFBdUQsNkNBQUs7SUFBNUQ7O0lBZ0JBLENBQUM7SUFkQyxzREFBa0IsR0FBbEIsVUFBbUIsQ0FBQyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLEdBQUcsOEJBQW9CLENBQUMsV0FBVyxFQUFFLEVBQ3hDLENBQUMsR0FBRyw2QkFBbUIsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzNELENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2QixDQUFDLEVBQUUsQ0FBQztJQUNOLENBQUM7SUFDRCw2Q0FBUyxHQUFUO1FBQ0UsSUFBSSxDQUFDLEdBQUcsQ0FBQztnQkFDUCxLQUFLLEVBQUUsa0JBQWtCO2dCQUN6QixJQUFJLEVBQUUsQ0FBQzthQUNSLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFkTSxrQ0FBUSxHQUFHLHNCQUFzQixDQUFDO0lBRHRCLHlCQUF5QjtRQUY3QyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsMkJBQTJCLENBQUM7T0FDakIseUJBQXlCLENBZ0I3QztJQUFELGdDQUFDO0NBaEJELEFBZ0JDLENBaEJzRCxlQUFLLEdBZ0IzRDtrQkFoQm9CLHlCQUF5QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCb2FyZFBhcmFtUnVsZUVuZ2luZSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL0JvYXJkUGFyYW1SdWxlRW5naW5lJztcbmltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgQm9hcmRQYXJhbVJ1bGVUcmFpdCBmcm9tICcuL0JvYXJkUGFyYW1SdWxlVHJhaXQnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJCb2FyZFBhcmFtUnVsZU5vcm1hbFRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb2FyZFBhcmFtUnVsZU5vcm1hbFRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIkJvYXJkUGFyYW1SdWxlTm9ybWFsXCI7XG4gIG9uTG9naW5NX2VudGVyR2FtZSh0LCBlKSB7XG4gICAgdmFyIHIgPSBCb2FyZFBhcmFtUnVsZUVuZ2luZS5nZXRJbnN0YW5jZSgpLFxuICAgICAgYSA9IEJvYXJkUGFyYW1SdWxlVHJhaXQuZXh0cmFjdEdyb3VwSWRzKHRoaXMuX3RyYWl0RGF0YSk7XG4gICAgci5hZGRQbGF5ZXJHcm91cElkcyhhKTtcbiAgICBlKCk7XG4gIH1cbiAgaW5pdEV2ZW50KCkge1xuICAgIHZhciB0ID0gW3tcbiAgICAgIGV2ZW50OiBcIkxvZ2luTV9lbnRlckdhbWVcIixcbiAgICAgIHR5cGU6IDBcbiAgICB9XTtcbiAgICB0aGlzLl90cmFpdERhdGEuZXZlbnRzID0gdDtcbiAgICB0aGlzLnJlZ2lzdGVyRXZlbnQodCk7XG4gIH1cbn0iXX0=