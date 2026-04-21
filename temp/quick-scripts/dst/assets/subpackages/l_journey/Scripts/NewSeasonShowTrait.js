
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_journey/Scripts/NewSeasonShowTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '17e89gxEx9B0Yj36eBeUws9', 'NewSeasonShowTrait');
// subpackages/l_journey/Scripts/NewSeasonShowTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var NewSeasonShowTrait = /** @class */ (function (_super) {
    __extends(NewSeasonShowTrait, _super);
    function NewSeasonShowTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewSeasonShowTrait.prototype.onNewSeason_isVisible = function (t, e) {
        t.args[0].visible = true;
        e();
    };
    NewSeasonShowTrait.traitKey = "NewSeasonShow";
    NewSeasonShowTrait = __decorate([
        mj.trait,
        mj.class("NewSeasonShowTrait")
    ], NewSeasonShowTrait);
    return NewSeasonShowTrait;
}(Trait_1.default));
exports.default = NewSeasonShowTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2pvdXJuZXkvU2NyaXB0cy9OZXdTZWFzb25TaG93VHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUczRDtJQUFnRCxzQ0FBSztJQUFyRDs7SUFNQSxDQUFDO0lBSkMsa0RBQXFCLEdBQXJCLFVBQXNCLENBQUMsRUFBRSxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUN6QixDQUFDLEVBQUUsQ0FBQztJQUNOLENBQUM7SUFKTSwyQkFBUSxHQUFHLGVBQWUsQ0FBQztJQURmLGtCQUFrQjtRQUZ0QyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUM7T0FDVixrQkFBa0IsQ0FNdEM7SUFBRCx5QkFBQztDQU5ELEFBTUMsQ0FOK0MsZUFBSyxHQU1wRDtrQkFOb0Isa0JBQWtCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiTmV3U2Vhc29uU2hvd1RyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdTZWFzb25TaG93VHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiTmV3U2Vhc29uU2hvd1wiO1xuICBvbk5ld1NlYXNvbl9pc1Zpc2libGUodCwgZSkge1xuICAgIHQuYXJnc1swXS52aXNpYmxlID0gdHJ1ZTtcbiAgICBlKCk7XG4gIH1cbn0iXX0=