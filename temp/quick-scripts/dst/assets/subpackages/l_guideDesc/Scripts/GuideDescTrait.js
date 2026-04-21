
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_guideDesc/Scripts/GuideDescTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '156a9JUWRBPzq1bbFp7rgy8', 'GuideDescTrait');
// subpackages/l_guideDesc/Scripts/GuideDescTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var GuideDescTrait = /** @class */ (function (_super) {
    __extends(GuideDescTrait, _super);
    function GuideDescTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GuideDescTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    GuideDescTrait.prototype.onGuideUI_onLoad = function (t, e) {
        var r = t.ins;
        if (r && cc.isValid(r.node)) {
            var o = cc.find("nodeTip", r.node);
            o && cc.isValid(o) && (o.active = false);
            e();
        }
        else
            e();
    };
    GuideDescTrait.traitKey = "GuideDesc";
    GuideDescTrait = __decorate([
        mj.trait,
        mj.class("GuideDescTrait")
    ], GuideDescTrait);
    return GuideDescTrait;
}(Trait_1.default));
exports.default = GuideDescTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2d1aWRlRGVzYy9TY3JpcHRzL0d1aWRlRGVzY1RyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFHM0Q7SUFBNEMsa0NBQUs7SUFBakQ7O0lBYUEsQ0FBQztJQVhDLCtCQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDRCx5Q0FBZ0IsR0FBaEIsVUFBaUIsQ0FBQyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUNkLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzNCLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNuQyxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUM7WUFDekMsQ0FBQyxFQUFFLENBQUM7U0FDTDs7WUFBTSxDQUFDLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFYTSx1QkFBUSxHQUFHLFdBQVcsQ0FBQztJQURYLGNBQWM7UUFGbEMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDO09BQ04sY0FBYyxDQWFsQztJQUFELHFCQUFDO0NBYkQsQUFhQyxDQWIyQyxlQUFLLEdBYWhEO2tCQWJvQixjQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiR3VpZGVEZXNjVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEd1aWRlRGVzY1RyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIkd1aWRlRGVzY1wiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gIH1cbiAgb25HdWlkZVVJX29uTG9hZCh0LCBlKSB7XG4gICAgdmFyIHIgPSB0LmlucztcbiAgICBpZiAociAmJiBjYy5pc1ZhbGlkKHIubm9kZSkpIHtcbiAgICAgIHZhciBvID0gY2MuZmluZChcIm5vZGVUaXBcIiwgci5ub2RlKTtcbiAgICAgIG8gJiYgY2MuaXNWYWxpZChvKSAmJiAoby5hY3RpdmUgPSBmYWxzZSk7XG4gICAgICBlKCk7XG4gICAgfSBlbHNlIGUoKTtcbiAgfVxufSJdfQ==