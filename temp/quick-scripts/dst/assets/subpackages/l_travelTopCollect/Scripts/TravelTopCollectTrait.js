
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_travelTopCollect/Scripts/TravelTopCollectTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6ff7fP2U4tJg7fvcWT4IDct', 'TravelTopCollectTrait');
// subpackages/l_travelTopCollect/Scripts/TravelTopCollectTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var TileTypeEnum_1 = require("../../../Scripts/simulator/constant/TileTypeEnum");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var BaseSprite_1 = require("../../../Scripts/gamePlay/base/ui/BaseSprite");
var TravelGameModel_1 = require("../../../Scripts/gamePlay/travel/model/TravelGameModel");
var TravelTopCollectTrait = /** @class */ (function (_super) {
    __extends(TravelTopCollectTrait, _super);
    function TravelTopCollectTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TravelTopCollectTrait.prototype.onTravelGmVw_initExpands = function (e, t) {
        var r = e.ins;
        r.gameType === GameTypeEnums_1.MjGameType.Travel && this.fixTopCollectNode(r);
        t();
    };
    TravelTopCollectTrait.prototype.fixTopCollectNode = function (e) {
        if (e && e.nodeCollect) {
            var t = BaseSprite_1.default.create("texture/gamePlayTop/gameplay_bg", "mainRes", cc.Sprite.SizeMode.CUSTOM);
            t.getComponent(cc.Sprite).type = cc.Sprite.Type.SLICED;
            t.node.name = "nodeCollectBg";
            t.node.setPosition(e.nodeCollect.position);
            t.node.setContentSize(cc.size(726, 152));
            t.node.parent = e.nodeCollect.parent;
            t.node.setSiblingIndex(e.nodeCollect.getSiblingIndex());
        }
    };
    TravelTopCollectTrait.prototype.getOffsetY = function (e) {
        var t = 8;
        if (1 === e.length && e[0].type === TileTypeEnum_1.ETileType.Yoga)
            switch (TravelGameModel_1.default.getInstance().getCurJourney()) {
                case "Journey01":
                    t = -2;
                    break;
                case "Journey02":
                    t = 0;
                    break;
                case "Journey03":
                    t = 4;
                    break;
                case "Journey04":
                    t = -6;
                    break;
                default:
                    t = -2;
            }
        return t;
    };
    TravelTopCollectTrait.prototype.onInitColTagBhv_crtItems = function (e, t) {
        var r = __read(e.args, 1)[0], o = this.getOffsetY(r);
        e.args[0] = r;
        e.args[1] = r.length > 6 ? 20 : 15;
        e.args[2] = 157;
        e.args[3] = 0.56;
        e.args[4] = o;
        t();
    };
    TravelTopCollectTrait.traitKey = "TravelTopCollect";
    TravelTopCollectTrait = __decorate([
        mj.trait,
        mj.class("TravelTopCollectTrait")
    ], TravelTopCollectTrait);
    return TravelTopCollectTrait;
}(Trait_1.default));
exports.default = TravelTopCollectTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3RyYXZlbFRvcENvbGxlY3QvU2NyaXB0cy9UcmF2ZWxUb3BDb2xsZWN0VHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdGQUFvRjtBQUNwRixpRkFBNkU7QUFDN0UsZ0VBQTJEO0FBQzNELDJFQUFzRTtBQUN0RSwwRkFBcUY7QUFHckY7SUFBbUQseUNBQUs7SUFBeEQ7O0lBZ0RBLENBQUM7SUE5Q0Msd0RBQXdCLEdBQXhCLFVBQXlCLENBQUMsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDZCxDQUFDLENBQUMsUUFBUSxLQUFLLDBCQUFVLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5RCxDQUFDLEVBQUUsQ0FBQztJQUNOLENBQUM7SUFDRCxpREFBaUIsR0FBakIsVUFBa0IsQ0FBQztRQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxHQUFHLG9CQUFVLENBQUMsTUFBTSxDQUFDLGlDQUFpQyxFQUFFLFNBQVMsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNuRyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQ3ZELENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLGVBQWUsQ0FBQztZQUM5QixDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzNDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDekMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUM7WUFDckMsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDO1NBQ3pEO0lBQ0gsQ0FBQztJQUNELDBDQUFVLEdBQVYsVUFBVyxDQUFDO1FBQ1YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1YsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLHdCQUFTLENBQUMsSUFBSTtZQUFFLFFBQVEseUJBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxhQUFhLEVBQUUsRUFBRTtnQkFDekcsS0FBSyxXQUFXO29CQUNkLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDUCxNQUFNO2dCQUNSLEtBQUssV0FBVztvQkFDZCxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNOLE1BQU07Z0JBQ1IsS0FBSyxXQUFXO29CQUNkLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ04sTUFBTTtnQkFDUixLQUFLLFdBQVc7b0JBQ2QsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUNQLE1BQU07Z0JBQ1I7b0JBQ0UsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQ1Y7UUFDRCxPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7SUFDRCx3REFBd0IsR0FBeEIsVUFBeUIsQ0FBQyxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQzFCLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pCLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDbkMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDaEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDakIsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDZCxDQUFDLEVBQUUsQ0FBQztJQUNOLENBQUM7SUE5Q00sOEJBQVEsR0FBRyxrQkFBa0IsQ0FBQztJQURsQixxQkFBcUI7UUFGekMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLHVCQUF1QixDQUFDO09BQ2IscUJBQXFCLENBZ0R6QztJQUFELDRCQUFDO0NBaERELEFBZ0RDLENBaERrRCxlQUFLLEdBZ0R2RDtrQkFoRG9CLHFCQUFxQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1qR2FtZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuaW1wb3J0IHsgRVRpbGVUeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9zaW11bGF0b3IvY29uc3RhbnQvVGlsZVR5cGVFbnVtJztcbmltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgQmFzZVNwcml0ZSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L2Jhc2UvdWkvQmFzZVNwcml0ZSc7XG5pbXBvcnQgVHJhdmVsR2FtZU1vZGVsIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvdHJhdmVsL21vZGVsL1RyYXZlbEdhbWVNb2RlbCc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIlRyYXZlbFRvcENvbGxlY3RUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJhdmVsVG9wQ29sbGVjdFRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIlRyYXZlbFRvcENvbGxlY3RcIjtcbiAgb25UcmF2ZWxHbVZ3X2luaXRFeHBhbmRzKGUsIHQpIHtcbiAgICB2YXIgciA9IGUuaW5zO1xuICAgIHIuZ2FtZVR5cGUgPT09IE1qR2FtZVR5cGUuVHJhdmVsICYmIHRoaXMuZml4VG9wQ29sbGVjdE5vZGUocik7XG4gICAgdCgpO1xuICB9XG4gIGZpeFRvcENvbGxlY3ROb2RlKGUpIHtcbiAgICBpZiAoZSAmJiBlLm5vZGVDb2xsZWN0KSB7XG4gICAgICB2YXIgdCA9IEJhc2VTcHJpdGUuY3JlYXRlKFwidGV4dHVyZS9nYW1lUGxheVRvcC9nYW1lcGxheV9iZ1wiLCBcIm1haW5SZXNcIiwgY2MuU3ByaXRlLlNpemVNb2RlLkNVU1RPTSk7XG4gICAgICB0LmdldENvbXBvbmVudChjYy5TcHJpdGUpLnR5cGUgPSBjYy5TcHJpdGUuVHlwZS5TTElDRUQ7XG4gICAgICB0Lm5vZGUubmFtZSA9IFwibm9kZUNvbGxlY3RCZ1wiO1xuICAgICAgdC5ub2RlLnNldFBvc2l0aW9uKGUubm9kZUNvbGxlY3QucG9zaXRpb24pO1xuICAgICAgdC5ub2RlLnNldENvbnRlbnRTaXplKGNjLnNpemUoNzI2LCAxNTIpKTtcbiAgICAgIHQubm9kZS5wYXJlbnQgPSBlLm5vZGVDb2xsZWN0LnBhcmVudDtcbiAgICAgIHQubm9kZS5zZXRTaWJsaW5nSW5kZXgoZS5ub2RlQ29sbGVjdC5nZXRTaWJsaW5nSW5kZXgoKSk7XG4gICAgfVxuICB9XG4gIGdldE9mZnNldFkoZSkge1xuICAgIHZhciB0ID0gODtcbiAgICBpZiAoMSA9PT0gZS5sZW5ndGggJiYgZVswXS50eXBlID09PSBFVGlsZVR5cGUuWW9nYSkgc3dpdGNoIChUcmF2ZWxHYW1lTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRDdXJKb3VybmV5KCkpIHtcbiAgICAgIGNhc2UgXCJKb3VybmV5MDFcIjpcbiAgICAgICAgdCA9IC0yO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJKb3VybmV5MDJcIjpcbiAgICAgICAgdCA9IDA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIkpvdXJuZXkwM1wiOlxuICAgICAgICB0ID0gNDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiSm91cm5leTA0XCI6XG4gICAgICAgIHQgPSAtNjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0ID0gLTI7XG4gICAgfVxuICAgIHJldHVybiB0O1xuICB9XG4gIG9uSW5pdENvbFRhZ0Jodl9jcnRJdGVtcyhlLCB0KSB7XG4gICAgdmFyIHIgPSBfX3JlYWQoZS5hcmdzLCAxKVswXSxcbiAgICAgIG8gPSB0aGlzLmdldE9mZnNldFkocik7XG4gICAgZS5hcmdzWzBdID0gcjtcbiAgICBlLmFyZ3NbMV0gPSByLmxlbmd0aCA+IDYgPyAyMCA6IDE1O1xuICAgIGUuYXJnc1syXSA9IDE1NztcbiAgICBlLmFyZ3NbM10gPSAwLjU2O1xuICAgIGUuYXJnc1s0XSA9IG87XG4gICAgdCgpO1xuICB9XG59Il19