
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_daily/Scripts/BadgeHideTabTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ded59jOqxlP07EblST8fpOO', 'BadgeHideTabTrait');
// subpackages/l_daily/Scripts/BadgeHideTabTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var BadgeHideTabTrait = /** @class */ (function (_super) {
    __extends(BadgeHideTabTrait, _super);
    function BadgeHideTabTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BadgeHideTabTrait.prototype.onDailyCollVw_onLoad = function (t, e) {
        var i = t.ins.node;
        if (cc.isValid(i)) {
            var o = cc.find("btn_change", i);
            o && (o.active = false);
        }
        e();
    };
    BadgeHideTabTrait.traitKey = "BadgeHideTab";
    BadgeHideTabTrait = __decorate([
        mj.trait,
        mj.class("BadgeHideTabTrait")
    ], BadgeHideTabTrait);
    return BadgeHideTabTrait;
}(Trait_1.default));
exports.default = BadgeHideTabTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2RhaWx5L1NjcmlwdHMvQmFkZ2VIaWRlVGFiVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUczRDtJQUErQyxxQ0FBSztJQUFwRDs7SUFVQSxDQUFDO0lBUkMsZ0RBQW9CLEdBQXBCLFVBQXFCLENBQUMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ25CLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNqQixJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNqQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDO1NBQ3pCO1FBQ0QsQ0FBQyxFQUFFLENBQUM7SUFDTixDQUFDO0lBUk0sMEJBQVEsR0FBRyxjQUFjLENBQUM7SUFEZCxpQkFBaUI7UUFGckMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDO09BQ1QsaUJBQWlCLENBVXJDO0lBQUQsd0JBQUM7Q0FWRCxBQVVDLENBVjhDLGVBQUssR0FVbkQ7a0JBVm9CLGlCQUFpQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIkJhZGdlSGlkZVRhYlRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYWRnZUhpZGVUYWJUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJCYWRnZUhpZGVUYWJcIjtcbiAgb25EYWlseUNvbGxWd19vbkxvYWQodCwgZSkge1xuICAgIHZhciBpID0gdC5pbnMubm9kZTtcbiAgICBpZiAoY2MuaXNWYWxpZChpKSkge1xuICAgICAgdmFyIG8gPSBjYy5maW5kKFwiYnRuX2NoYW5nZVwiLCBpKTtcbiAgICAgIG8gJiYgKG8uYWN0aXZlID0gZmFsc2UpO1xuICAgIH1cbiAgICBlKCk7XG4gIH1cbn0iXX0=