
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/base/SelectBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1ee73HXAOpG0aO8jG3RwDVv', 'SelectBehavior');
// Scripts/base/SelectBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var TileTypeEnum_1 = require("../simulator/constant/TileTypeEnum");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var SelectBehavior = /** @class */ (function (_super) {
    __extends(SelectBehavior, _super);
    function SelectBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SelectBehavior.prototype.start = function (e) {
        var t = this.context.getTileNodeMap().get(e.data.tileId);
        if (t) {
            this.playCheckAudio(e);
            if (e.data.isCancel)
                t.cancelSelected();
            else {
                if (t.isSelect()) {
                    t.touchEndForMove();
                    this.finish(GameInputEnum_1.EBehaviorEnum.Success);
                    return;
                }
                t.selected();
            }
            this.finish(GameInputEnum_1.EBehaviorEnum.Success);
        }
        else
            this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    SelectBehavior.prototype.playCheckAudio = function (e) {
        if (e.data.isUserOperation) {
            if (e.data.isCancel) {
                this.playCancelAudio();
                return;
            }
            this.playAudio();
        }
    };
    SelectBehavior.prototype.playCancelAudio = function () {
        mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.Uncheck);
    };
    SelectBehavior.prototype.playAudio = function () {
        var e = this.effect, t = this.context.getTileNodeMap().get(e.data.tileId);
        if (t && t.tileObject.type == TileTypeEnum_1.ETileType.RankCard) {
            this.playRankCardAudio();
        }
        else {
            if (t && t.tileObject.type == TileTypeEnum_1.ETileType.RollCard && t.isBack) {
                this.playRollCardAudio();
            }
            else {
                this.playNormalAudio();
            }
        }
    };
    SelectBehavior.prototype.playRankCardAudio = function () {
        mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.SpecialTouch);
    };
    SelectBehavior.prototype.playRollCardAudio = function () {
        this.playNormalAudio();
    };
    SelectBehavior.prototype.playNormalAudio = function () {
        mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.Check1);
    };
    __decorate([
        mj.traitEvent("SelectBhv_rankCardAud")
    ], SelectBehavior.prototype, "playRankCardAudio", null);
    __decorate([
        mj.traitEvent("SelectBhv_rollCardAud")
    ], SelectBehavior.prototype, "playRollCardAudio", null);
    __decorate([
        mj.traitEvent("SelectBhv_playNmlAud")
    ], SelectBehavior.prototype, "playNormalAudio", null);
    return SelectBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.SelectBehavior = SelectBehavior;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2Jhc2UvU2VsZWN0QmVoYXZpb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxRUFBb0U7QUFDcEUsMEVBQW9FO0FBQ3BFLG1FQUErRDtBQUMvRCx5REFBd0Q7QUFDeEQ7SUFBb0Msa0NBQWlCO0lBQXJEOztJQXFEQSxDQUFDO0lBcERDLDhCQUFLLEdBQUwsVUFBTSxDQUFDO1FBQ0wsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsRUFBRTtZQUNMLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkIsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVE7Z0JBQUUsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO2lCQUFLO2dCQUMzQyxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRTtvQkFDaEIsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO29CQUNwQixJQUFJLENBQUMsTUFBTSxDQUFDLDZCQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ25DLE9BQU87aUJBQ1I7Z0JBQ0QsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQ2Q7WUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLDZCQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDcEM7O1lBQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyw2QkFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFDRCx1Q0FBYyxHQUFkLFVBQWUsQ0FBQztRQUNkLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDMUIsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDbkIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO2dCQUN2QixPQUFPO2FBQ1I7WUFDRCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDbEI7SUFDSCxDQUFDO0lBQ0Qsd0NBQWUsR0FBZjtRQUNFLEVBQUUsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLHdCQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUNELGtDQUFTLEdBQVQ7UUFDRSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUNqQixDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksSUFBSSx3QkFBUyxDQUFDLFFBQVEsRUFBRTtZQUNoRCxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztTQUMxQjthQUFNO1lBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLElBQUksd0JBQVMsQ0FBQyxRQUFRLElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRTtnQkFDNUQsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7YUFDMUI7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO2FBQ3hCO1NBQ0Y7SUFDSCxDQUFDO0lBRUQsMENBQWlCLEdBQWpCO1FBQ0UsRUFBRSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsd0JBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQsMENBQWlCLEdBQWpCO1FBQ0UsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRCx3Q0FBZSxHQUFmO1FBQ0UsRUFBRSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsd0JBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBVkQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHVCQUF1QixDQUFDOzJEQUd0QztJQUVEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyx1QkFBdUIsQ0FBQzsyREFHdEM7SUFFRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsc0JBQXNCLENBQUM7eURBR3JDO0lBQ0gscUJBQUM7Q0FyREQsQUFxREMsQ0FyRG1DLHFDQUFpQixHQXFEcEQ7QUFyRFksd0NBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFQmVoYXZpb3JFbnVtIH0gZnJvbSAnLi4vc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVJbnB1dEVudW0nO1xuaW1wb3J0IHsgRUF1ZGlvSUQgfSBmcm9tICcuLi9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbmltcG9ydCB7IEVUaWxlVHlwZSB9IGZyb20gJy4uL3NpbXVsYXRvci9jb25zdGFudC9UaWxlVHlwZUVudW0nO1xuaW1wb3J0IHsgR2FtZUJlaGF2aW9yc0Jhc2UgfSBmcm9tICcuL0dhbWVCZWhhdmlvcnNCYXNlJztcbmV4cG9ydCBjbGFzcyBTZWxlY3RCZWhhdmlvciBleHRlbmRzIEdhbWVCZWhhdmlvcnNCYXNlIHtcbiAgc3RhcnQoZSkge1xuICAgIHZhciB0ID0gdGhpcy5jb250ZXh0LmdldFRpbGVOb2RlTWFwKCkuZ2V0KGUuZGF0YS50aWxlSWQpO1xuICAgIGlmICh0KSB7XG4gICAgICB0aGlzLnBsYXlDaGVja0F1ZGlvKGUpO1xuICAgICAgaWYgKGUuZGF0YS5pc0NhbmNlbCkgdC5jYW5jZWxTZWxlY3RlZCgpO2Vsc2Uge1xuICAgICAgICBpZiAodC5pc1NlbGVjdCgpKSB7XG4gICAgICAgICAgdC50b3VjaEVuZEZvck1vdmUoKTtcbiAgICAgICAgICB0aGlzLmZpbmlzaChFQmVoYXZpb3JFbnVtLlN1Y2Nlc3MpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0LnNlbGVjdGVkKCk7XG4gICAgICB9XG4gICAgICB0aGlzLmZpbmlzaChFQmVoYXZpb3JFbnVtLlN1Y2Nlc3MpO1xuICAgIH0gZWxzZSB0aGlzLmZpbmlzaChFQmVoYXZpb3JFbnVtLlN1Y2Nlc3MpO1xuICB9XG4gIHBsYXlDaGVja0F1ZGlvKGUpIHtcbiAgICBpZiAoZS5kYXRhLmlzVXNlck9wZXJhdGlvbikge1xuICAgICAgaWYgKGUuZGF0YS5pc0NhbmNlbCkge1xuICAgICAgICB0aGlzLnBsYXlDYW5jZWxBdWRpbygpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLnBsYXlBdWRpbygpO1xuICAgIH1cbiAgfVxuICBwbGF5Q2FuY2VsQXVkaW8oKSB7XG4gICAgbWouYXVkaW9NYW5hZ2VyLnBsYXlFZmZlY3QoRUF1ZGlvSUQuVW5jaGVjayk7XG4gIH1cbiAgcGxheUF1ZGlvKCkge1xuICAgIHZhciBlID0gdGhpcy5lZmZlY3QsXG4gICAgICB0ID0gdGhpcy5jb250ZXh0LmdldFRpbGVOb2RlTWFwKCkuZ2V0KGUuZGF0YS50aWxlSWQpO1xuICAgIGlmICh0ICYmIHQudGlsZU9iamVjdC50eXBlID09IEVUaWxlVHlwZS5SYW5rQ2FyZCkge1xuICAgICAgdGhpcy5wbGF5UmFua0NhcmRBdWRpbygpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodCAmJiB0LnRpbGVPYmplY3QudHlwZSA9PSBFVGlsZVR5cGUuUm9sbENhcmQgJiYgdC5pc0JhY2spIHtcbiAgICAgICAgdGhpcy5wbGF5Um9sbENhcmRBdWRpbygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wbGF5Tm9ybWFsQXVkaW8oKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJTZWxlY3RCaHZfcmFua0NhcmRBdWRcIilcbiAgcGxheVJhbmtDYXJkQXVkaW8oKSB7XG4gICAgbWouYXVkaW9NYW5hZ2VyLnBsYXlFZmZlY3QoRUF1ZGlvSUQuU3BlY2lhbFRvdWNoKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlNlbGVjdEJodl9yb2xsQ2FyZEF1ZFwiKVxuICBwbGF5Um9sbENhcmRBdWRpbygpIHtcbiAgICB0aGlzLnBsYXlOb3JtYWxBdWRpbygpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiU2VsZWN0Qmh2X3BsYXlObWxBdWRcIilcbiAgcGxheU5vcm1hbEF1ZGlvKCkge1xuICAgIG1qLmF1ZGlvTWFuYWdlci5wbGF5RWZmZWN0KEVBdWRpb0lELkNoZWNrMSk7XG4gIH1cbn0iXX0=