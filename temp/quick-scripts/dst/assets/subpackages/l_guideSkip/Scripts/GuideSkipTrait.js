
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_guideSkip/Scripts/GuideSkipTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'df6ae2uqJ1GwpUr9160kzqI', 'GuideSkipTrait');
// subpackages/l_guideSkip/Scripts/GuideSkipTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var GuideSkipTrait = /** @class */ (function (_super) {
    __extends(GuideSkipTrait, _super);
    function GuideSkipTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GuideSkipTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    GuideSkipTrait.prototype.onGuideUI_onLoad = function (t, e) {
        var r = t.ins;
        if (r && cc.isValid(r.node)) {
            var i = cc.find("skip/btnSkip", r.node);
            i && cc.isValid(i) && (i.active = false);
            e();
        }
        else
            e();
    };
    GuideSkipTrait.traitKey = "GuideSkip";
    GuideSkipTrait = __decorate([
        mj.trait,
        mj.class("GuideSkipTrait")
    ], GuideSkipTrait);
    return GuideSkipTrait;
}(Trait_1.default));
exports.default = GuideSkipTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2d1aWRlU2tpcC9TY3JpcHRzL0d1aWRlU2tpcFRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFHM0Q7SUFBNEMsa0NBQUs7SUFBakQ7O0lBYUEsQ0FBQztJQVhDLCtCQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDRCx5Q0FBZ0IsR0FBaEIsVUFBaUIsQ0FBQyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUNkLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzNCLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN4QyxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUM7WUFDekMsQ0FBQyxFQUFFLENBQUM7U0FDTDs7WUFBTSxDQUFDLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFYTSx1QkFBUSxHQUFHLFdBQVcsQ0FBQztJQURYLGNBQWM7UUFGbEMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDO09BQ04sY0FBYyxDQWFsQztJQUFELHFCQUFDO0NBYkQsQUFhQyxDQWIyQyxlQUFLLEdBYWhEO2tCQWJvQixjQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiR3VpZGVTa2lwVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEd1aWRlU2tpcFRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIkd1aWRlU2tpcFwiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gIH1cbiAgb25HdWlkZVVJX29uTG9hZCh0LCBlKSB7XG4gICAgdmFyIHIgPSB0LmlucztcbiAgICBpZiAociAmJiBjYy5pc1ZhbGlkKHIubm9kZSkpIHtcbiAgICAgIHZhciBpID0gY2MuZmluZChcInNraXAvYnRuU2tpcFwiLCByLm5vZGUpO1xuICAgICAgaSAmJiBjYy5pc1ZhbGlkKGkpICYmIChpLmFjdGl2ZSA9IGZhbHNlKTtcbiAgICAgIGUoKTtcbiAgICB9IGVsc2UgZSgpO1xuICB9XG59Il19