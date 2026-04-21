
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_badgeRewardNotClose/Scripts/BadgeRewardNotCloseTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7ca91Co8VZBX4DhS/A5pwHg', 'BadgeRewardNotCloseTrait');
// subpackages/l_badgeRewardNotClose/Scripts/BadgeRewardNotCloseTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var BadgeRewardNotCloseTrait = /** @class */ (function (_super) {
    __extends(BadgeRewardNotCloseTrait, _super);
    function BadgeRewardNotCloseTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BadgeRewardNotCloseTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    BadgeRewardNotCloseTrait.prototype.onDailyRewardVv_autoClose = function (t, e) {
        e({
            returnType: TraitCallbackReturnType.jump,
            returnVal: false
        });
    };
    BadgeRewardNotCloseTrait.traitKey = "BadgeRewardNotClose";
    BadgeRewardNotCloseTrait = __decorate([
        mj.trait,
        mj.class("BadgeRewardNotCloseTrait")
    ], BadgeRewardNotCloseTrait);
    return BadgeRewardNotCloseTrait;
}(Trait_1.default));
exports.default = BadgeRewardNotCloseTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2JhZGdlUmV3YXJkTm90Q2xvc2UvU2NyaXB0cy9CYWRnZVJld2FyZE5vdENsb3NlVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUczRDtJQUFzRCw0Q0FBSztJQUEzRDs7SUFXQSxDQUFDO0lBVEMseUNBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNELDREQUF5QixHQUF6QixVQUEwQixDQUFDLEVBQUUsQ0FBQztRQUM1QixDQUFDLENBQUM7WUFDQSxVQUFVLEVBQUUsdUJBQXVCLENBQUMsSUFBSTtZQUN4QyxTQUFTLEVBQUUsS0FBSztTQUNqQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBVE0saUNBQVEsR0FBRyxxQkFBcUIsQ0FBQztJQURyQix3QkFBd0I7UUFGNUMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLDBCQUEwQixDQUFDO09BQ2hCLHdCQUF3QixDQVc1QztJQUFELCtCQUFDO0NBWEQsQUFXQyxDQVhxRCxlQUFLLEdBVzFEO2tCQVhvQix3QkFBd0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJCYWRnZVJld2FyZE5vdENsb3NlVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhZGdlUmV3YXJkTm90Q2xvc2VUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJCYWRnZVJld2FyZE5vdENsb3NlXCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgfVxuICBvbkRhaWx5UmV3YXJkVnZfYXV0b0Nsb3NlKHQsIGUpIHtcbiAgICBlKHtcbiAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLmp1bXAsXG4gICAgICByZXR1cm5WYWw6IGZhbHNlXG4gICAgfSk7XG4gIH1cbn0iXX0=