
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_hallTheme/Scripts/HallThemeTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '99331J/3TNJcY6p4d+PAJsQ', 'HallThemeTrait');
// subpackages/l_hallTheme/Scripts/HallThemeTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var HallThemeTrait = /** @class */ (function (_super) {
    __extends(HallThemeTrait, _super);
    function HallThemeTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(HallThemeTrait.prototype, "hallTheme", {
        get: function () {
            var t, e;
            return null !== (e = null === (t = this.traitData) || void 0 === t ? void 0 : t.theme) && void 0 !== e ? e : "";
        },
        enumerable: false,
        configurable: true
    });
    HallThemeTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    HallThemeTrait.prototype.onHallVw_chgTheme = function (t, e) {
        if (t.args[1]) {
            t.args[0] = this.hallTheme;
            e({
                isBreak: true
            });
        }
        else
            e();
    };
    HallThemeTrait.traitKey = "HallTheme";
    HallThemeTrait = __decorate([
        mj.trait,
        mj.class("HallThemeTrait")
    ], HallThemeTrait);
    return HallThemeTrait;
}(Trait_1.default));
exports.default = HallThemeTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2hhbGxUaGVtZS9TY3JpcHRzL0hhbGxUaGVtZVRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFHM0Q7SUFBNEMsa0NBQUs7SUFBakQ7O0lBaUJBLENBQUM7SUFmQyxzQkFBSSxxQ0FBUzthQUFiO1lBQ0UsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ1QsT0FBTyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNsSCxDQUFDOzs7T0FBQTtJQUNELCtCQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDRCwwQ0FBaUIsR0FBakIsVUFBa0IsQ0FBQyxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ2IsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQzNCLENBQUMsQ0FBQztnQkFDQSxPQUFPLEVBQUUsSUFBSTthQUNkLENBQUMsQ0FBQztTQUNKOztZQUFNLENBQUMsRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQWZNLHVCQUFRLEdBQUcsV0FBVyxDQUFDO0lBRFgsY0FBYztRQUZsQyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUM7T0FDTixjQUFjLENBaUJsQztJQUFELHFCQUFDO0NBakJELEFBaUJDLENBakIyQyxlQUFLLEdBaUJoRDtrQkFqQm9CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJIYWxsVGhlbWVUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGFsbFRoZW1lVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiSGFsbFRoZW1lXCI7XG4gIGdldCBoYWxsVGhlbWUoKSB7XG4gICAgdmFyIHQsIGU7XG4gICAgcmV0dXJuIG51bGwgIT09IChlID0gbnVsbCA9PT0gKHQgPSB0aGlzLnRyYWl0RGF0YSkgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC50aGVtZSkgJiYgdm9pZCAwICE9PSBlID8gZSA6IFwiXCI7XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICB9XG4gIG9uSGFsbFZ3X2NoZ1RoZW1lKHQsIGUpIHtcbiAgICBpZiAodC5hcmdzWzFdKSB7XG4gICAgICB0LmFyZ3NbMF0gPSB0aGlzLmhhbGxUaGVtZTtcbiAgICAgIGUoe1xuICAgICAgICBpc0JyZWFrOiB0cnVlXG4gICAgICB9KTtcbiAgICB9IGVsc2UgZSgpO1xuICB9XG59Il19