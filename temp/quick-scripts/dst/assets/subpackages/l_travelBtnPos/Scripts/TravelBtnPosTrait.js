
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_travelBtnPos/Scripts/TravelBtnPosTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b6c2ffnSPdH/bVnOHSpwM53', 'TravelBtnPosTrait');
// subpackages/l_travelBtnPos/Scripts/TravelBtnPosTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TravelBtnPosTrait = /** @class */ (function (_super) {
    __extends(TravelBtnPosTrait, _super);
    function TravelBtnPosTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TravelBtnPosTrait.prototype.onHallNmlBtn_updateUI = function (t, e) {
        var r = t.ins.node;
        cc.isValid(r) && r.setPosition(cc.v3(r.position.x, -755, 0));
        e();
    };
    TravelBtnPosTrait.prototype.onTravelBtn_updateUI = function (t, e) {
        var r = t.ins.node;
        cc.isValid(r) && r.setPosition(cc.v3(r.position.x, -532, 0));
        e();
    };
    TravelBtnPosTrait.traitKey = "TravelBtnPos";
    TravelBtnPosTrait = __decorate([
        mj.trait,
        mj.class("TravelBtnPosTrait")
    ], TravelBtnPosTrait);
    return TravelBtnPosTrait;
}(Trait_1.default));
exports.default = TravelBtnPosTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3RyYXZlbEJ0blBvcy9TY3JpcHRzL1RyYXZlbEJ0blBvc1RyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFHM0Q7SUFBK0MscUNBQUs7SUFBcEQ7O0lBWUEsQ0FBQztJQVZDLGlEQUFxQixHQUFyQixVQUFzQixDQUFDLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQztRQUNuQixFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdELENBQUMsRUFBRSxDQUFDO0lBQ04sQ0FBQztJQUNELGdEQUFvQixHQUFwQixVQUFxQixDQUFDLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQztRQUNuQixFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdELENBQUMsRUFBRSxDQUFDO0lBQ04sQ0FBQztJQVZNLDBCQUFRLEdBQUcsY0FBYyxDQUFDO0lBRGQsaUJBQWlCO1FBRnJDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQztPQUNULGlCQUFpQixDQVlyQztJQUFELHdCQUFDO0NBWkQsQUFZQyxDQVo4QyxlQUFLLEdBWW5EO2tCQVpvQixpQkFBaUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJUcmF2ZWxCdG5Qb3NUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJhdmVsQnRuUG9zVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiVHJhdmVsQnRuUG9zXCI7XG4gIG9uSGFsbE5tbEJ0bl91cGRhdGVVSSh0LCBlKSB7XG4gICAgdmFyIHIgPSB0Lmlucy5ub2RlO1xuICAgIGNjLmlzVmFsaWQocikgJiYgci5zZXRQb3NpdGlvbihjYy52MyhyLnBvc2l0aW9uLngsIC03NTUsIDApKTtcbiAgICBlKCk7XG4gIH1cbiAgb25UcmF2ZWxCdG5fdXBkYXRlVUkodCwgZSkge1xuICAgIHZhciByID0gdC5pbnMubm9kZTtcbiAgICBjYy5pc1ZhbGlkKHIpICYmIHIuc2V0UG9zaXRpb24oY2MudjMoci5wb3NpdGlvbi54LCAtNTMyLCAwKSk7XG4gICAgZSgpO1xuICB9XG59Il19