
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_fixTravelCollect/Scripts/FixTravelCollectTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3611asNTahGa7RTzHyYpzeN', 'FixTravelCollectTrait');
// subpackages/l_fixTravelCollect/Scripts/FixTravelCollectTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BehaviorsEnum_1 = require("../../../Scripts/constant/BehaviorsEnum");
var InitCollectTargetEffect_1 = require("../../../Scripts/InitCollectTargetEffect");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var FixTravelCollectTrait = /** @class */ (function (_super) {
    __extends(FixTravelCollectTrait, _super);
    function FixTravelCollectTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FixTravelCollectTrait.prototype.onIptEnterAni_pushColTag = function (t, e) {
        var r, o, i = t.ins, n = null === (o = null === (r = i.gameContext) || void 0 === r ? void 0 : r.getTileMapObject()) || void 0 === o ? void 0 : o.collectSystem;
        if (n) {
            var a = new InitCollectTargetEffect_1.InitCollectTargetEffect({
                collectDetails: n.getAllCollectDetails()
            });
            i.pushEffect(a, BehaviorsEnum_1.EInsertType.Parallel);
            e();
        }
        else
            e();
    };
    FixTravelCollectTrait.prototype.onIptEnterAniFin_pushColTag = function (t, e) {
        e({
            returnType: TraitCallbackReturnType.jump
        });
    };
    FixTravelCollectTrait.traitKey = "FixTravelCollect";
    FixTravelCollectTrait = __decorate([
        mj.trait,
        mj.class("FixTravelCollectTrait")
    ], FixTravelCollectTrait);
    return FixTravelCollectTrait;
}(Trait_1.default));
exports.default = FixTravelCollectTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2ZpeFRyYXZlbENvbGxlY3QvU2NyaXB0cy9GaXhUcmF2ZWxDb2xsZWN0VHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlFQUFzRTtBQUN0RSxvRkFBbUY7QUFDbkYsZ0VBQTJEO0FBRzNEO0lBQW1ELHlDQUFLO0lBQXhEOztJQW9CQSxDQUFDO0lBbEJDLHdEQUF3QixHQUF4QixVQUF5QixDQUFDLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsRUFDSCxDQUFDLEVBQ0QsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQ1QsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQztRQUM3SSxJQUFJLENBQUMsRUFBRTtZQUNMLElBQUksQ0FBQyxHQUFHLElBQUksaURBQXVCLENBQUM7Z0JBQ2xDLGNBQWMsRUFBRSxDQUFDLENBQUMsb0JBQW9CLEVBQUU7YUFDekMsQ0FBQyxDQUFDO1lBQ0gsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsMkJBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN0QyxDQUFDLEVBQUUsQ0FBQztTQUNMOztZQUFNLENBQUMsRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQUNELDJEQUEyQixHQUEzQixVQUE0QixDQUFDLEVBQUUsQ0FBQztRQUM5QixDQUFDLENBQUM7WUFDQSxVQUFVLEVBQUUsdUJBQXVCLENBQUMsSUFBSTtTQUN6QyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBbEJNLDhCQUFRLEdBQUcsa0JBQWtCLENBQUM7SUFEbEIscUJBQXFCO1FBRnpDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQztPQUNiLHFCQUFxQixDQW9CekM7SUFBRCw0QkFBQztDQXBCRCxBQW9CQyxDQXBCa0QsZUFBSyxHQW9CdkQ7a0JBcEJvQixxQkFBcUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFSW5zZXJ0VHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29uc3RhbnQvQmVoYXZpb3JzRW51bSc7XG5pbXBvcnQgeyBJbml0Q29sbGVjdFRhcmdldEVmZmVjdCB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvSW5pdENvbGxlY3RUYXJnZXRFZmZlY3QnO1xuaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiRml4VHJhdmVsQ29sbGVjdFRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaXhUcmF2ZWxDb2xsZWN0VHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiRml4VHJhdmVsQ29sbGVjdFwiO1xuICBvbklwdEVudGVyQW5pX3B1c2hDb2xUYWcodCwgZSkge1xuICAgIHZhciByLFxuICAgICAgbyxcbiAgICAgIGkgPSB0LmlucyxcbiAgICAgIG4gPSBudWxsID09PSAobyA9IG51bGwgPT09IChyID0gaS5nYW1lQ29udGV4dCkgfHwgdm9pZCAwID09PSByID8gdm9pZCAwIDogci5nZXRUaWxlTWFwT2JqZWN0KCkpIHx8IHZvaWQgMCA9PT0gbyA/IHZvaWQgMCA6IG8uY29sbGVjdFN5c3RlbTtcbiAgICBpZiAobikge1xuICAgICAgdmFyIGEgPSBuZXcgSW5pdENvbGxlY3RUYXJnZXRFZmZlY3Qoe1xuICAgICAgICBjb2xsZWN0RGV0YWlsczogbi5nZXRBbGxDb2xsZWN0RGV0YWlscygpXG4gICAgICB9KTtcbiAgICAgIGkucHVzaEVmZmVjdChhLCBFSW5zZXJ0VHlwZS5QYXJhbGxlbCk7XG4gICAgICBlKCk7XG4gICAgfSBlbHNlIGUoKTtcbiAgfVxuICBvbklwdEVudGVyQW5pRmluX3B1c2hDb2xUYWcodCwgZSkge1xuICAgIGUoe1xuICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUuanVtcFxuICAgIH0pO1xuICB9XG59Il19