
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_rankCardClearEff/Scripts/RankCardClearEffTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3612018YRFBn6K6zRkTd09B', 'RankCardClearEffTrait');
// subpackages/r_rankCardClearEff/Scripts/RankCardClearEffTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var BaseSpine_1 = require("../../../Scripts/gamePlay/base/ui/BaseSpine");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var TileTypeEnum_1 = require("../../../Scripts/simulator/constant/TileTypeEnum");
var RankCardClearEffTrait = /** @class */ (function (_super) {
    __extends(RankCardClearEffTrait, _super);
    function RankCardClearEffTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RankCardClearEffTrait_1 = RankCardClearEffTrait;
    RankCardClearEffTrait.prototype.onRankSpCardEff_clearEff = function (e, t) {
        var a = UserModel_1.default.getInstance().getRankCardResName();
        if (a) {
            var n = a.split("_");
            if (0 != n.length) {
                var i = "in_" + n[n.length - 1];
                BaseSpine_1.default.create("spine/gameplay_elimination_specialCard", i, 1, null, true, RankCardClearEffTrait_1.BundleName).node.parent = e.ins.node;
                t({
                    isBreak: true,
                    returnType: TraitCallbackReturnType.return
                });
            }
            else
                t();
        }
        else
            t();
    };
    RankCardClearEffTrait.prototype.getCollectEffectAudioId = function () {
        return null == this._traitData.collectEff ? GameTypeEnums_1.EAudioID.RankClearCol1 : this._traitData.collectEff;
    };
    RankCardClearEffTrait.prototype.onRankSpCardEff_colEff = function (e, t) {
        mj.audioManager.playEffect(this.getCollectEffectAudioId());
        t({
            isBreak: true,
            returnType: TraitCallbackReturnType.return
        });
    };
    RankCardClearEffTrait.prototype.onClearBhv_matchAud = function (e, t) {
        if (e.ins._type == TileTypeEnum_1.ETileType.RankCard) {
            mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.RankClearTouch);
            t({
                isBreak: true,
                returnType: TraitCallbackReturnType.return
            });
        }
        else
            t();
    };
    var RankCardClearEffTrait_1;
    RankCardClearEffTrait.traitKey = "RankCardClearEff";
    RankCardClearEffTrait.BundleName = "r_rankCardClearEff";
    RankCardClearEffTrait = RankCardClearEffTrait_1 = __decorate([
        mj.trait,
        mj.class("RankCardClearEffTrait")
    ], RankCardClearEffTrait);
    return RankCardClearEffTrait;
}(Trait_1.default));
exports.default = RankCardClearEffTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX3JhbmtDYXJkQ2xlYXJFZmYvU2NyaXB0cy9SYW5rQ2FyZENsZWFyRWZmVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUMzRCxzRUFBaUU7QUFDakUseUVBQW9FO0FBQ3BFLHdGQUFrRjtBQUNsRixpRkFBNkU7QUFHN0U7SUFBbUQseUNBQUs7SUFBeEQ7O0lBb0NBLENBQUM7OEJBcENvQixxQkFBcUI7SUFHeEMsd0RBQXdCLEdBQXhCLFVBQXlCLENBQUMsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxHQUFHLG1CQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUNyRCxJQUFJLENBQUMsRUFBRTtZQUNMLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRTtnQkFDakIsSUFBSSxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNoQyxtQkFBUyxDQUFDLE1BQU0sQ0FBQyx3Q0FBd0MsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsdUJBQXFCLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQztnQkFDeEksQ0FBQyxDQUFDO29CQUNBLE9BQU8sRUFBRSxJQUFJO29CQUNiLFVBQVUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUMzQyxDQUFDLENBQUM7YUFDSjs7Z0JBQU0sQ0FBQyxFQUFFLENBQUM7U0FDWjs7WUFBTSxDQUFDLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFDRCx1REFBdUIsR0FBdkI7UUFDRSxPQUFPLElBQUksSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsd0JBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDO0lBQ2xHLENBQUM7SUFDRCxzREFBc0IsR0FBdEIsVUFBdUIsQ0FBQyxFQUFFLENBQUM7UUFDekIsRUFBRSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUMsQ0FBQztRQUMzRCxDQUFDLENBQUM7WUFDQSxPQUFPLEVBQUUsSUFBSTtZQUNiLFVBQVUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO1NBQzNDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxtREFBbUIsR0FBbkIsVUFBb0IsQ0FBQyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssSUFBSSx3QkFBUyxDQUFDLFFBQVEsRUFBRTtZQUNyQyxFQUFFLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyx3QkFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ3BELENBQUMsQ0FBQztnQkFDQSxPQUFPLEVBQUUsSUFBSTtnQkFDYixVQUFVLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUMzQyxDQUFDLENBQUM7U0FDSjs7WUFBTSxDQUFDLEVBQUUsQ0FBQztJQUNiLENBQUM7O0lBbENNLDhCQUFRLEdBQUcsa0JBQWtCLENBQUM7SUFDOUIsZ0NBQVUsR0FBRyxvQkFBb0IsQ0FBQztJQUZ0QixxQkFBcUI7UUFGekMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLHVCQUF1QixDQUFDO09BQ2IscUJBQXFCLENBb0N6QztJQUFELDRCQUFDO0NBcENELEFBb0NDLENBcENrRCxlQUFLLEdBb0N2RDtrQkFwQ29CLHFCQUFxQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvdXNlci9Vc2VyTW9kZWwnO1xuaW1wb3J0IEJhc2VTcGluZSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L2Jhc2UvdWkvQmFzZVNwaW5lJztcbmltcG9ydCB7IEVBdWRpb0lEIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbmltcG9ydCB7IEVUaWxlVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvc2ltdWxhdG9yL2NvbnN0YW50L1RpbGVUeXBlRW51bSc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIlJhbmtDYXJkQ2xlYXJFZmZUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFua0NhcmRDbGVhckVmZlRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIlJhbmtDYXJkQ2xlYXJFZmZcIjtcbiAgc3RhdGljIEJ1bmRsZU5hbWUgPSBcInJfcmFua0NhcmRDbGVhckVmZlwiO1xuICBvblJhbmtTcENhcmRFZmZfY2xlYXJFZmYoZSwgdCkge1xuICAgIHZhciBhID0gVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0UmFua0NhcmRSZXNOYW1lKCk7XG4gICAgaWYgKGEpIHtcbiAgICAgIHZhciBuID0gYS5zcGxpdChcIl9cIik7XG4gICAgICBpZiAoMCAhPSBuLmxlbmd0aCkge1xuICAgICAgICB2YXIgaSA9IFwiaW5fXCIgKyBuW24ubGVuZ3RoIC0gMV07XG4gICAgICAgIEJhc2VTcGluZS5jcmVhdGUoXCJzcGluZS9nYW1lcGxheV9lbGltaW5hdGlvbl9zcGVjaWFsQ2FyZFwiLCBpLCAxLCBudWxsLCB0cnVlLCBSYW5rQ2FyZENsZWFyRWZmVHJhaXQuQnVuZGxlTmFtZSkubm9kZS5wYXJlbnQgPSBlLmlucy5ub2RlO1xuICAgICAgICB0KHtcbiAgICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVyblxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB0KCk7XG4gICAgfSBlbHNlIHQoKTtcbiAgfVxuICBnZXRDb2xsZWN0RWZmZWN0QXVkaW9JZCgpIHtcbiAgICByZXR1cm4gbnVsbCA9PSB0aGlzLl90cmFpdERhdGEuY29sbGVjdEVmZiA/IEVBdWRpb0lELlJhbmtDbGVhckNvbDEgOiB0aGlzLl90cmFpdERhdGEuY29sbGVjdEVmZjtcbiAgfVxuICBvblJhbmtTcENhcmRFZmZfY29sRWZmKGUsIHQpIHtcbiAgICBtai5hdWRpb01hbmFnZXIucGxheUVmZmVjdCh0aGlzLmdldENvbGxlY3RFZmZlY3RBdWRpb0lkKCkpO1xuICAgIHQoe1xuICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVyblxuICAgIH0pO1xuICB9XG4gIG9uQ2xlYXJCaHZfbWF0Y2hBdWQoZSwgdCkge1xuICAgIGlmIChlLmlucy5fdHlwZSA9PSBFVGlsZVR5cGUuUmFua0NhcmQpIHtcbiAgICAgIG1qLmF1ZGlvTWFuYWdlci5wbGF5RWZmZWN0KEVBdWRpb0lELlJhbmtDbGVhclRvdWNoKTtcbiAgICAgIHQoe1xuICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm5cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB0KCk7XG4gIH1cbn0iXX0=