
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_dotChange/Scripts/DotChange251217Trait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ac7b8jlCdZCbK870B/R1srR', 'DotChange251217Trait');
// subpackages/l_dotChange/Scripts/DotChange251217Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ExtractTool_1 = require("../../../Scripts/core/extractQuestion/ExtractTool");
var LevelUtil_1 = require("../../../Scripts/core/simulator/config/LevelUtil");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var TrackerInterface_1 = require("../../../Scripts/tracker/TrackerInterface");
var TrackerUtils_1 = require("../../../Scripts/tracker/TrackerUtils");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var DotChange251217Trait = /** @class */ (function (_super) {
    __extends(DotChange251217Trait, _super);
    function DotChange251217Trait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DotChange251217Trait.prototype.isSupportMode = function (t) {
        return [GameTypeEnums_1.MjGameType.Normal, GameTypeEnums_1.MjGameType.Travel, GameTypeEnums_1.MjGameType.DailyChallenge, GameTypeEnums_1.MjGameType.Classic].includes(t);
    };
    DotChange251217Trait.prototype.onDGameStart_addComplex = function (t, e) {
        e({
            returnType: TraitCallbackReturnType.return,
            isBreak: true
        });
    };
    DotChange251217Trait.prototype.onDGameStart_adjust = function (t, e) {
        var r = t.ins, a = __read(t.args, 2), o = a[0], i = a[1];
        this.dotGameStartAdd(r, o, i);
        e();
    };
    DotChange251217Trait.prototype.dotGameStartAdd = function (t, e, r) {
        if (this.isSupportMode(r.gameType)) {
            e.initial_board_structure = r.getGameData().getOriginalLevelDataWithCardId();
            var a = ExtractTool_1.default.getInstance().getExtractInfo(r.getGameData().gameType);
            a && a.ok && (e.predict_rate = a.rateSuccess);
        }
    };
    DotChange251217Trait.prototype.onDGameEnd_adjust = function (t, e) {
        var r = t.ins, a = __read(t.args, 3), o = a[0], i = a[1], c = a[2];
        this.dotGameEndAdd(r, o, i, c);
        e();
    };
    DotChange251217Trait.prototype.dotGameEndAdd = function (t, e, r, a) {
        if (this.isSupportMode(r.gameType)) {
            a.win || (e.end_reason = "setting" === a.from ? 1 : 0);
            var o = r.getGameData().getOriginalLevelData(), i = r.getGameData().getOriWithSpecialCards();
            e.initial_board_id = r.getGameData().getLevelIndex();
            e.initial_board_string = i || o;
            e.initial_board_structure = r.getGameData().getOriginalLevelDataWithCardId();
            var n = ExtractTool_1.default.getInstance().getExtractInfo(r.getGameData().gameType);
            n && n.ok && (e.predict_rate = n.rateSuccess);
        }
    };
    DotChange251217Trait.prototype.onTrackerUtils_addComplex = function (t, e) {
        e({
            returnType: TraitCallbackReturnType.return,
            isBreak: true
        });
    };
    DotChange251217Trait.prototype.onTrackerUtils_blockStatus = function (t, e) {
        var r = this.getBlockStatusPositionList(t.args[0]);
        e({
            returnType: TraitCallbackReturnType.return,
            isBreak: true,
            returnVal: r
        });
    };
    DotChange251217Trait.prototype.getBlockStatusPositionList = function (t) {
        var e, r, a = t.tileObjectMap(), o = [];
        try {
            for (var i = __values(a), s = i.next(); !s.done; s = i.next()) {
                var u = __read(s.value, 2), l = (u[0], u[1]);
                if (l.isValid && 0 === l.isCardLock()) {
                    var d = __read(TrackerUtils_1.default.object2position(l), 3), y = d[0], g = d[1], m = d[2];
                    o.push({
                        suit: l.cardId,
                        status: TrackerInterface_1.EBlockStatus.Movable,
                        pos: TrackerUtils_1.default.position2id([y, g, m])
                    });
                }
            }
        }
        catch (t) {
            e = {
                error: t
            };
        }
        finally {
            try {
                s && !s.done && (r = i.return) && r.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return o;
    };
    DotChange251217Trait.prototype.onTrackerUtils_pairCoord = function (t, e) {
        var r = __read(t.args, 3), a = r[0], o = r[1], i = r[2], c = this.getPairCoordinate(a, o, i);
        e({
            returnType: TraitCallbackReturnType.return,
            isBreak: true,
            returnVal: c
        });
    };
    DotChange251217Trait.prototype.getPairCoordinate = function (t, e, r) {
        var a = t.getTileObject(e), o = t.getTileObject(r), i = __read(TrackerUtils_1.default.object2position(a), 3), c = i[0], s = i[1], l = i[2], p = __read(TrackerUtils_1.default.object2position(o), 3);
        return [c, s, l, p[0], p[1], p[2]].map(function (t) {
            return LevelUtil_1.LevelUtil.translatePosToChar(t);
        }).join("");
    };
    DotChange251217Trait.prototype.onDGameLog_dot = function (t, e) {
        e({
            returnType: TraitCallbackReturnType.return,
            isBreak: true
        });
    };
    DotChange251217Trait.traitKey = "DotChange251217";
    DotChange251217Trait = __decorate([
        mj.trait,
        mj.class("DotChange251217Trait")
    ], DotChange251217Trait);
    return DotChange251217Trait;
}(Trait_1.default));
exports.default = DotChange251217Trait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2RvdENoYW5nZS9TY3JpcHRzL0RvdENoYW5nZTI1MTIxN1RyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpRkFBNEU7QUFDNUUsOEVBQTZFO0FBQzdFLHdGQUFvRjtBQUNwRiw4RUFBeUU7QUFDekUsc0VBQWlFO0FBQ2pFLGdFQUEyRDtBQUczRDtJQUFrRCx3Q0FBSztJQUF2RDs7SUE2SEEsQ0FBQztJQTNIQyw0Q0FBYSxHQUFiLFVBQWMsQ0FBQztRQUNiLE9BQU8sQ0FBQywwQkFBVSxDQUFDLE1BQU0sRUFBRSwwQkFBVSxDQUFDLE1BQU0sRUFBRSwwQkFBVSxDQUFDLGNBQWMsRUFBRSwwQkFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzRyxDQUFDO0lBQ0Qsc0RBQXVCLEdBQXZCLFVBQXdCLENBQUMsRUFBRSxDQUFDO1FBQzFCLENBQUMsQ0FBQztZQUNBLFVBQVUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO1lBQzFDLE9BQU8sRUFBRSxJQUFJO1NBQ2QsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELGtEQUFtQixHQUFuQixVQUFvQixDQUFDLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUNYLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsRUFDckIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDUixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ1gsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzlCLENBQUMsRUFBRSxDQUFDO0lBQ04sQ0FBQztJQUNELDhDQUFlLEdBQWYsVUFBZ0IsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQ3JCLElBQUksSUFB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Q0FBQyxDQUFDLEVBQ1IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDUixDQUFDLEdBQUcsTUFBTSxDQUFDLHNCQUFZLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2pELE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUM7WUFDaEQsT0FBTyxxQkFBUyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNkLENBQUM7SUFDRCw2Q0FBYyxHQUFkLFVBQWUsQ0FBQyxFQUFFLENBQUM7UUFDakIsQ0FBQyxDQUFDO1lBQ0EsVUFBVSxFQUFFLHVCQUF1QixDQUFDLE1BQU07WUFDMUMsT0FBTyxFQUFFLElBQUk7U0FDZCxDQUFDLENBQUM7SUFDTCxDQUFDO0lBM0hNLDZCQUFRLEdBQUcsaUJBQWlCLENBQUM7SUFEakIsb0JBQW9CO1FBRnhDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQztPQUNaLG9CQUFvQixDQTZIeEM7SUFBRCwyQkFBQztDQTdIRCxBQTZIQyxDQTdIaUQsZUFBSyxHQTZIdEQ7a0JBN0hvQixvQkFBb0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRXh0cmFjdFRvb2wgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL2V4dHJhY3RRdWVzdGlvbi9FeHRyYWN0VG9vbCc7XG5pbXBvcnQgeyBMZXZlbFV0aWwgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2NvbmZpZy9MZXZlbFV0aWwnO1xuaW1wb3J0IHsgTWpHYW1lVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9zaW11bGF0b3IvY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG5pbXBvcnQgeyBFQmxvY2tTdGF0dXMgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL3RyYWNrZXIvVHJhY2tlckludGVyZmFjZSc7XG5pbXBvcnQgVHJhY2tlclV0aWxzIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvdHJhY2tlci9UcmFja2VyVXRpbHMnO1xuaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiRG90Q2hhbmdlMjUxMjE3VHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERvdENoYW5nZTI1MTIxN1RyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIkRvdENoYW5nZTI1MTIxN1wiO1xuICBpc1N1cHBvcnRNb2RlKHQpIHtcbiAgICByZXR1cm4gW01qR2FtZVR5cGUuTm9ybWFsLCBNakdhbWVUeXBlLlRyYXZlbCwgTWpHYW1lVHlwZS5EYWlseUNoYWxsZW5nZSwgTWpHYW1lVHlwZS5DbGFzc2ljXS5pbmNsdWRlcyh0KTtcbiAgfVxuICBvbkRHYW1lU3RhcnRfYWRkQ29tcGxleCh0LCBlKSB7XG4gICAgZSh7XG4gICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICBpc0JyZWFrOiB0cnVlXG4gICAgfSk7XG4gIH1cbiAgb25ER2FtZVN0YXJ0X2FkanVzdCh0LCBlKSB7XG4gICAgdmFyIHIgPSB0LmlucyxcbiAgICAgIGEgPSBfX3JlYWQodC5hcmdzLCAyKSxcbiAgICAgIG8gPSBhWzBdLFxuICAgICAgaSA9IGFbMV07XG4gICAgdGhpcy5kb3RHYW1lU3RhcnRBZGQociwgbywgaSk7XG4gICAgZSgpO1xuICB9XG4gIGRvdEdhbWVTdGFydEFkZCh0LCBlLCByKSB7XG4gICAgaWYgKHRoaXMuaXNTdXBwb3J0TW9kZShyLmdhbWVUeXBlKSkge1xuICAgICAgZS5pbml0aWFsX2JvYXJkX3N0cnVjdHVyZSA9IHIuZ2V0R2FtZURhdGEoKS5nZXRPcmlnaW5hbExldmVsRGF0YVdpdGhDYXJkSWQoKTtcbiAgICAgIHZhciBhID0gRXh0cmFjdFRvb2wuZ2V0SW5zdGFuY2UoKS5nZXRFeHRyYWN0SW5mbyhyLmdldEdhbWVEYXRhKCkuZ2FtZVR5cGUpO1xuICAgICAgYSAmJiBhLm9rICYmIChlLnByZWRpY3RfcmF0ZSA9IGEucmF0ZVN1Y2Nlc3MpO1xuICAgIH1cbiAgfVxuICBvbkRHYW1lRW5kX2FkanVzdCh0LCBlKSB7XG4gICAgdmFyIHIgPSB0LmlucyxcbiAgICAgIGEgPSBfX3JlYWQodC5hcmdzLCAzKSxcbiAgICAgIG8gPSBhWzBdLFxuICAgICAgaSA9IGFbMV0sXG4gICAgICBjID0gYVsyXTtcbiAgICB0aGlzLmRvdEdhbWVFbmRBZGQociwgbywgaSwgYyk7XG4gICAgZSgpO1xuICB9XG4gIGRvdEdhbWVFbmRBZGQodCwgZSwgciwgYSkge1xuICAgIGlmICh0aGlzLmlzU3VwcG9ydE1vZGUoci5nYW1lVHlwZSkpIHtcbiAgICAgIGEud2luIHx8IChlLmVuZF9yZWFzb24gPSBcInNldHRpbmdcIiA9PT0gYS5mcm9tID8gMSA6IDApO1xuICAgICAgdmFyIG8gPSByLmdldEdhbWVEYXRhKCkuZ2V0T3JpZ2luYWxMZXZlbERhdGEoKSxcbiAgICAgICAgaSA9IHIuZ2V0R2FtZURhdGEoKS5nZXRPcmlXaXRoU3BlY2lhbENhcmRzKCk7XG4gICAgICBlLmluaXRpYWxfYm9hcmRfaWQgPSByLmdldEdhbWVEYXRhKCkuZ2V0TGV2ZWxJbmRleCgpO1xuICAgICAgZS5pbml0aWFsX2JvYXJkX3N0cmluZyA9IGkgfHwgbztcbiAgICAgIGUuaW5pdGlhbF9ib2FyZF9zdHJ1Y3R1cmUgPSByLmdldEdhbWVEYXRhKCkuZ2V0T3JpZ2luYWxMZXZlbERhdGFXaXRoQ2FyZElkKCk7XG4gICAgICB2YXIgbiA9IEV4dHJhY3RUb29sLmdldEluc3RhbmNlKCkuZ2V0RXh0cmFjdEluZm8oci5nZXRHYW1lRGF0YSgpLmdhbWVUeXBlKTtcbiAgICAgIG4gJiYgbi5vayAmJiAoZS5wcmVkaWN0X3JhdGUgPSBuLnJhdGVTdWNjZXNzKTtcbiAgICB9XG4gIH1cbiAgb25UcmFja2VyVXRpbHNfYWRkQ29tcGxleCh0LCBlKSB7XG4gICAgZSh7XG4gICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICBpc0JyZWFrOiB0cnVlXG4gICAgfSk7XG4gIH1cbiAgb25UcmFja2VyVXRpbHNfYmxvY2tTdGF0dXModCwgZSkge1xuICAgIHZhciByID0gdGhpcy5nZXRCbG9ja1N0YXR1c1Bvc2l0aW9uTGlzdCh0LmFyZ3NbMF0pO1xuICAgIGUoe1xuICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgIHJldHVyblZhbDogclxuICAgIH0pO1xuICB9XG4gIGdldEJsb2NrU3RhdHVzUG9zaXRpb25MaXN0KHQpIHtcbiAgICB2YXIgZSxcbiAgICAgIHIsXG4gICAgICBhID0gdC50aWxlT2JqZWN0TWFwKCksXG4gICAgICBvID0gW107XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIGkgPSBfX3ZhbHVlcyhhKSwgcyA9IGkubmV4dCgpOyAhcy5kb25lOyBzID0gaS5uZXh0KCkpIHtcbiAgICAgICAgdmFyIHUgPSBfX3JlYWQocy52YWx1ZSwgMiksXG4gICAgICAgICAgbCA9ICh1WzBdLCB1WzFdKTtcbiAgICAgICAgaWYgKGwuaXNWYWxpZCAmJiAwID09PSBsLmlzQ2FyZExvY2soKSkge1xuICAgICAgICAgIHZhciBkID0gX19yZWFkKFRyYWNrZXJVdGlscy5vYmplY3QycG9zaXRpb24obCksIDMpLFxuICAgICAgICAgICAgeSA9IGRbMF0sXG4gICAgICAgICAgICBnID0gZFsxXSxcbiAgICAgICAgICAgIG0gPSBkWzJdO1xuICAgICAgICAgIG8ucHVzaCh7XG4gICAgICAgICAgICBzdWl0OiBsLmNhcmRJZCxcbiAgICAgICAgICAgIHN0YXR1czogRUJsb2NrU3RhdHVzLk1vdmFibGUsXG4gICAgICAgICAgICBwb3M6IFRyYWNrZXJVdGlscy5wb3NpdGlvbjJpZChbeSwgZywgbV0pXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICBlID0ge1xuICAgICAgICBlcnJvcjogdFxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcyAmJiAhcy5kb25lICYmIChyID0gaS5yZXR1cm4pICYmIHIuY2FsbChpKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChlKSB0aHJvdyBlLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbztcbiAgfVxuICBvblRyYWNrZXJVdGlsc19wYWlyQ29vcmQodCwgZSkge1xuICAgIHZhciByID0gX19yZWFkKHQuYXJncywgMyksXG4gICAgICBhID0gclswXSxcbiAgICAgIG8gPSByWzFdLFxuICAgICAgaSA9IHJbMl0sXG4gICAgICBjID0gdGhpcy5nZXRQYWlyQ29vcmRpbmF0ZShhLCBvLCBpKTtcbiAgICBlKHtcbiAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICByZXR1cm5WYWw6IGNcbiAgICB9KTtcbiAgfVxuICBnZXRQYWlyQ29vcmRpbmF0ZSh0LCBlLCByKSB7XG4gICAgdmFyIGEgPSB0LmdldFRpbGVPYmplY3QoZSksXG4gICAgICBvID0gdC5nZXRUaWxlT2JqZWN0KHIpLFxuICAgICAgaSA9IF9fcmVhZChUcmFja2VyVXRpbHMub2JqZWN0MnBvc2l0aW9uKGEpLCAzKSxcbiAgICAgIGMgPSBpWzBdLFxuICAgICAgcyA9IGlbMV0sXG4gICAgICBsID0gaVsyXSxcbiAgICAgIHAgPSBfX3JlYWQoVHJhY2tlclV0aWxzLm9iamVjdDJwb3NpdGlvbihvKSwgMyk7XG4gICAgcmV0dXJuIFtjLCBzLCBsLCBwWzBdLCBwWzFdLCBwWzJdXS5tYXAoZnVuY3Rpb24gKHQpIHtcbiAgICAgIHJldHVybiBMZXZlbFV0aWwudHJhbnNsYXRlUG9zVG9DaGFyKHQpO1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH1cbiAgb25ER2FtZUxvZ19kb3QodCwgZSkge1xuICAgIGUoe1xuICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgaXNCcmVhazogdHJ1ZVxuICAgIH0pO1xuICB9XG59Il19