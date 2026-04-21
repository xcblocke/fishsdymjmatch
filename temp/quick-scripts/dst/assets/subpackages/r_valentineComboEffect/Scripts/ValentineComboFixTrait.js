
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_valentineComboEffect/Scripts/ValentineComboFixTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'dd82aVTR/JDqb6MlrR8TEwf', 'ValentineComboFixTrait');
// subpackages/r_valentineComboEffect/Scripts/ValentineComboFixTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var ValentineComboFixTrait = /** @class */ (function (_super) {
    __extends(ValentineComboFixTrait, _super);
    function ValentineComboFixTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._valComboEff = null;
        return _this;
    }
    ValentineComboFixTrait.prototype.onValComboEff_enter = function (t, e) {
        e();
        this._valComboEff = t.ins;
    };
    ValentineComboFixTrait.prototype.onInitViewBhv_crtTls = function (t, e) {
        var o, r;
        e();
        cc.isValid(this._valComboEff) && (null === (r = (o = this._valComboEff).loadResPools) || void 0 === r || r.call(o));
    };
    ValentineComboFixTrait.traitKey = "ValentineComboFix";
    ValentineComboFixTrait = __decorate([
        mj.trait,
        mj.class("ValentineComboFixTrait")
    ], ValentineComboFixTrait);
    return ValentineComboFixTrait;
}(Trait_1.default));
exports.default = ValentineComboFixTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX3ZhbGVudGluZUNvbWJvRWZmZWN0L1NjcmlwdHMvVmFsZW50aW5lQ29tYm9GaXhUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBRzNEO0lBQW9ELDBDQUFLO0lBQXpEO1FBQUEscUVBWUM7UUFYQyxrQkFBWSxHQUFHLElBQUksQ0FBQzs7SUFXdEIsQ0FBQztJQVRDLG9EQUFtQixHQUFuQixVQUFvQixDQUFDLEVBQUUsQ0FBQztRQUN0QixDQUFDLEVBQUUsQ0FBQztRQUNKLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUM1QixDQUFDO0lBQ0QscURBQW9CLEdBQXBCLFVBQXFCLENBQUMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNULENBQUMsRUFBRSxDQUFDO1FBQ0osRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLFlBQVksQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEgsQ0FBQztJQVRNLCtCQUFRLEdBQUcsbUJBQW1CLENBQUM7SUFGbkIsc0JBQXNCO1FBRjFDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQztPQUNkLHNCQUFzQixDQVkxQztJQUFELDZCQUFDO0NBWkQsQUFZQyxDQVptRCxlQUFLLEdBWXhEO2tCQVpvQixzQkFBc0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJWYWxlbnRpbmVDb21ib0ZpeFRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWYWxlbnRpbmVDb21ib0ZpeFRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBfdmFsQ29tYm9FZmYgPSBudWxsO1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIlZhbGVudGluZUNvbWJvRml4XCI7XG4gIG9uVmFsQ29tYm9FZmZfZW50ZXIodCwgZSkge1xuICAgIGUoKTtcbiAgICB0aGlzLl92YWxDb21ib0VmZiA9IHQuaW5zO1xuICB9XG4gIG9uSW5pdFZpZXdCaHZfY3J0VGxzKHQsIGUpIHtcbiAgICB2YXIgbywgcjtcbiAgICBlKCk7XG4gICAgY2MuaXNWYWxpZCh0aGlzLl92YWxDb21ib0VmZikgJiYgKG51bGwgPT09IChyID0gKG8gPSB0aGlzLl92YWxDb21ib0VmZikubG9hZFJlc1Bvb2xzKSB8fCB2b2lkIDAgPT09IHIgfHwgci5jYWxsKG8pKTtcbiAgfVxufSJdfQ==