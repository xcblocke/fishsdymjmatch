"use strict";
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