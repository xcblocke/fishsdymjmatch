
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_boardParamRule/Scripts/BoardParamRuleEasyTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f32e8FiyMVIVrLANpEwgkEC', 'BoardParamRuleEasyTrait');
// subpackages/l_boardParamRule/Scripts/BoardParamRuleEasyTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BoardParamRuleEngine_1 = require("../../../Scripts/BoardParamRuleEngine");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var BoardParamRuleTrait_1 = require("./BoardParamRuleTrait");
var BoardParamRuleEasyTrait = /** @class */ (function (_super) {
    __extends(BoardParamRuleEasyTrait, _super);
    function BoardParamRuleEasyTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BoardParamRuleEasyTrait.prototype.onLoginM_enterGame = function (t, e) {
        var r = BoardParamRuleEngine_1.default.getInstance(), a = BoardParamRuleTrait_1.default.extractGroupIds(this._traitData);
        r.addPlayerGroupIds(a);
        e();
    };
    BoardParamRuleEasyTrait.prototype.initEvent = function () {
        var t = [{
                event: "LoginM_enterGame",
                type: 0
            }];
        this._traitData.events = t;
        this.registerEvent(t);
    };
    BoardParamRuleEasyTrait.traitKey = "BoardParamRuleEasy";
    BoardParamRuleEasyTrait = __decorate([
        mj.trait,
        mj.class("BoardParamRuleEasyTrait")
    ], BoardParamRuleEasyTrait);
    return BoardParamRuleEasyTrait;
}(Trait_1.default));
exports.default = BoardParamRuleEasyTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2JvYXJkUGFyYW1SdWxlL1NjcmlwdHMvQm9hcmRQYXJhbVJ1bGVFYXN5VHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDhFQUF5RTtBQUN6RSxnRUFBMkQ7QUFDM0QsNkRBQXdEO0FBR3hEO0lBQXFELDJDQUFLO0lBQTFEOztJQWdCQSxDQUFDO0lBZEMsb0RBQWtCLEdBQWxCLFVBQW1CLENBQUMsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxHQUFHLDhCQUFvQixDQUFDLFdBQVcsRUFBRSxFQUN4QyxDQUFDLEdBQUcsNkJBQW1CLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMzRCxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkIsQ0FBQyxFQUFFLENBQUM7SUFDTixDQUFDO0lBQ0QsMkNBQVMsR0FBVDtRQUNFLElBQUksQ0FBQyxHQUFHLENBQUM7Z0JBQ1AsS0FBSyxFQUFFLGtCQUFrQjtnQkFDekIsSUFBSSxFQUFFLENBQUM7YUFDUixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBZE0sZ0NBQVEsR0FBRyxvQkFBb0IsQ0FBQztJQURwQix1QkFBdUI7UUFGM0MsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLHlCQUF5QixDQUFDO09BQ2YsdUJBQXVCLENBZ0IzQztJQUFELDhCQUFDO0NBaEJELEFBZ0JDLENBaEJvRCxlQUFLLEdBZ0J6RDtrQkFoQm9CLHVCQUF1QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCb2FyZFBhcmFtUnVsZUVuZ2luZSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL0JvYXJkUGFyYW1SdWxlRW5naW5lJztcbmltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgQm9hcmRQYXJhbVJ1bGVUcmFpdCBmcm9tICcuL0JvYXJkUGFyYW1SdWxlVHJhaXQnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJCb2FyZFBhcmFtUnVsZUVhc3lUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9hcmRQYXJhbVJ1bGVFYXN5VHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiQm9hcmRQYXJhbVJ1bGVFYXN5XCI7XG4gIG9uTG9naW5NX2VudGVyR2FtZSh0LCBlKSB7XG4gICAgdmFyIHIgPSBCb2FyZFBhcmFtUnVsZUVuZ2luZS5nZXRJbnN0YW5jZSgpLFxuICAgICAgYSA9IEJvYXJkUGFyYW1SdWxlVHJhaXQuZXh0cmFjdEdyb3VwSWRzKHRoaXMuX3RyYWl0RGF0YSk7XG4gICAgci5hZGRQbGF5ZXJHcm91cElkcyhhKTtcbiAgICBlKCk7XG4gIH1cbiAgaW5pdEV2ZW50KCkge1xuICAgIHZhciB0ID0gW3tcbiAgICAgIGV2ZW50OiBcIkxvZ2luTV9lbnRlckdhbWVcIixcbiAgICAgIHR5cGU6IDBcbiAgICB9XTtcbiAgICB0aGlzLl90cmFpdERhdGEuZXZlbnRzID0gdDtcbiAgICB0aGlzLnJlZ2lzdGVyRXZlbnQodCk7XG4gIH1cbn0iXX0=