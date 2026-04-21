
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_journey/Scripts/TravelBtnCreateTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c7a96jFDkRBqossRMvoEoiV', 'TravelBtnCreateTrait');
// subpackages/l_journey/Scripts/TravelBtnCreateTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var DataReader_1 = require("../../../Scripts/framework/data/DataReader");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var ConfigType_1 = require("../../../Scripts/gamePlay/base/data/ConfigType");
var TravelGameModel_1 = require("../../../Scripts/gamePlay/travel/model/TravelGameModel");
var HallTravelBtn_1 = require("../../../Scripts/HallTravelBtn");
var TravelBtnCreateTrait = /** @class */ (function (_super) {
    __extends(TravelBtnCreateTrait, _super);
    function TravelBtnCreateTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TravelBtnCreateTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    TravelBtnCreateTrait.prototype.onJourney_CreateBtn = function (t, e) {
        this.createTravelBtn(t.ins, t.args[0]);
        e({
            returnType: TraitCallbackReturnType.return,
            isBreak: true
        });
    };
    TravelBtnCreateTrait.prototype.createTravelBtn = function (t, e) {
        if (cc.isValid(e)) {
            var r = TravelGameModel_1.default.getInstance().getCurJourney(), o = false;
            if (t.isSessionEnd()) {
                r = __read(t.getNextSession(), 1)[0];
                o = true;
            }
            if (o && "" === r)
                return;
            if (!DataReader_1.DataReader.getByKey(ConfigType_1.ConfigType.Travel, r))
                return;
            var n = e.getChildByName("HallJourneyBtn");
            if (cc.isValid(n, true)) {
                if (t.createdHallButton) {
                    n.destroy();
                    t.doCreateHallButton(e, r, o);
                    return;
                }
                var i = n.getComponent(HallTravelBtn_1.default);
                i && i.updateUI(r, t.getLimitLevel(), o);
            }
            else
                t.doCreateHallButton(e, r, o);
        }
    };
    TravelBtnCreateTrait.traitKey = "TravelBtnCreate";
    TravelBtnCreateTrait = __decorate([
        mj.trait,
        mj.class("TravelBtnCreateTrait")
    ], TravelBtnCreateTrait);
    return TravelBtnCreateTrait;
}(Trait_1.default));
exports.default = TravelBtnCreateTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2pvdXJuZXkvU2NyaXB0cy9UcmF2ZWxCdG5DcmVhdGVUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUVBQXdFO0FBQ3hFLGdFQUEyRDtBQUMzRCw2RUFBNEU7QUFDNUUsMEZBQXFGO0FBQ3JGLGdFQUEyRDtBQUczRDtJQUFrRCx3Q0FBSztJQUF2RDs7SUFrQ0EsQ0FBQztJQWhDQyxxQ0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0Qsa0RBQW1CLEdBQW5CLFVBQW9CLENBQUMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkMsQ0FBQyxDQUFDO1lBQ0EsVUFBVSxFQUFFLHVCQUF1QixDQUFDLE1BQU07WUFDMUMsT0FBTyxFQUFFLElBQUk7U0FDZCxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsOENBQWUsR0FBZixVQUFnQixDQUFDLEVBQUUsQ0FBQztRQUNsQixJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDakIsSUFBSSxDQUFDLEdBQUcseUJBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxhQUFhLEVBQUUsRUFDbkQsQ0FBQyxHQUFHLEtBQUssQ0FBQztZQUNaLElBQUksQ0FBQyxDQUFDLFlBQVksRUFBRSxFQUFFO2dCQUNwQixDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxjQUFjLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDckMsQ0FBQyxHQUFHLElBQUksQ0FBQzthQUNWO1lBQ0QsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUM7Z0JBQUUsT0FBTztZQUMxQixJQUFJLENBQUMsdUJBQVUsQ0FBQyxRQUFRLENBQUMsdUJBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO2dCQUFFLE9BQU87WUFDdkQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQzNDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUU7Z0JBQ3ZCLElBQUksQ0FBQyxDQUFDLGlCQUFpQixFQUFFO29CQUN2QixDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7b0JBQ1osQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQzlCLE9BQU87aUJBQ1I7Z0JBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyx1QkFBYSxDQUFDLENBQUM7Z0JBQ3RDLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDMUM7O2dCQUFNLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ3RDO0lBQ0gsQ0FBQztJQWhDTSw2QkFBUSxHQUFHLGlCQUFpQixDQUFDO0lBRGpCLG9CQUFvQjtRQUZ4QyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsc0JBQXNCLENBQUM7T0FDWixvQkFBb0IsQ0FrQ3hDO0lBQUQsMkJBQUM7Q0FsQ0QsQUFrQ0MsQ0FsQ2lELGVBQUssR0FrQ3REO2tCQWxDb0Isb0JBQW9CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVJlYWRlciB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL2RhdGEvRGF0YVJlYWRlcic7XG5pbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IHsgQ29uZmlnVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvYmFzZS9kYXRhL0NvbmZpZ1R5cGUnO1xuaW1wb3J0IFRyYXZlbEdhbWVNb2RlbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L3RyYXZlbC9tb2RlbC9UcmF2ZWxHYW1lTW9kZWwnO1xuaW1wb3J0IEhhbGxUcmF2ZWxCdG4gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9IYWxsVHJhdmVsQnRuJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiVHJhdmVsQnRuQ3JlYXRlVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyYXZlbEJ0bkNyZWF0ZVRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIlRyYXZlbEJ0bkNyZWF0ZVwiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gIH1cbiAgb25Kb3VybmV5X0NyZWF0ZUJ0bih0LCBlKSB7XG4gICAgdGhpcy5jcmVhdGVUcmF2ZWxCdG4odC5pbnMsIHQuYXJnc1swXSk7XG4gICAgZSh7XG4gICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICBpc0JyZWFrOiB0cnVlXG4gICAgfSk7XG4gIH1cbiAgY3JlYXRlVHJhdmVsQnRuKHQsIGUpIHtcbiAgICBpZiAoY2MuaXNWYWxpZChlKSkge1xuICAgICAgdmFyIHIgPSBUcmF2ZWxHYW1lTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRDdXJKb3VybmV5KCksXG4gICAgICAgIG8gPSBmYWxzZTtcbiAgICAgIGlmICh0LmlzU2Vzc2lvbkVuZCgpKSB7XG4gICAgICAgIHIgPSBfX3JlYWQodC5nZXROZXh0U2Vzc2lvbigpLCAxKVswXTtcbiAgICAgICAgbyA9IHRydWU7XG4gICAgICB9XG4gICAgICBpZiAobyAmJiBcIlwiID09PSByKSByZXR1cm47XG4gICAgICBpZiAoIURhdGFSZWFkZXIuZ2V0QnlLZXkoQ29uZmlnVHlwZS5UcmF2ZWwsIHIpKSByZXR1cm47XG4gICAgICB2YXIgbiA9IGUuZ2V0Q2hpbGRCeU5hbWUoXCJIYWxsSm91cm5leUJ0blwiKTtcbiAgICAgIGlmIChjYy5pc1ZhbGlkKG4sIHRydWUpKSB7XG4gICAgICAgIGlmICh0LmNyZWF0ZWRIYWxsQnV0dG9uKSB7XG4gICAgICAgICAgbi5kZXN0cm95KCk7XG4gICAgICAgICAgdC5kb0NyZWF0ZUhhbGxCdXR0b24oZSwgciwgbyk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpID0gbi5nZXRDb21wb25lbnQoSGFsbFRyYXZlbEJ0bik7XG4gICAgICAgIGkgJiYgaS51cGRhdGVVSShyLCB0LmdldExpbWl0TGV2ZWwoKSwgbyk7XG4gICAgICB9IGVsc2UgdC5kb0NyZWF0ZUhhbGxCdXR0b24oZSwgciwgbyk7XG4gICAgfVxuICB9XG59Il19