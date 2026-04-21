"use strict";
cc._RF.push(module, '395bcjPVLFLFZQOem3tvAUe', 'Match1TimeTipsTrait');
// subpackages/l_match1TimeTips/Scripts/Match1TimeTipsTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BehaviorsInterface_1 = require("../../../Scripts/simulator/constant/BehaviorsInterface");
var GameInputEnum_1 = require("../../../Scripts/simulator/constant/GameInputEnum");
var SimulatorEvent_1 = require("../../../Scripts/core/simulator/events/SimulatorEvent");
var MotivationalWordsEffect_1 = require("../../../Scripts/MotivationalWordsEffect");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var Match1TimeTipsTrait = /** @class */ (function (_super) {
    __extends(Match1TimeTipsTrait, _super);
    function Match1TimeTipsTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._config = {
            matchTimeSec: Match1TimeTipsTrait_1.DEFAULT_MATCH_TIME_SEC
        };
        _this._preMatchPairs = null;
        _this._preTime = 0;
        _this._hasMotivationalWords = false;
        return _this;
    }
    Match1TimeTipsTrait_1 = Match1TimeTipsTrait;
    Match1TimeTipsTrait.prototype.onLoad = function () {
        var i, o;
        _super.prototype.onLoad.call(this);
        this._config = {
            matchTimeSec: Number(null !== (o = null === (i = this._traitData) || void 0 === i ? void 0 : i.matchTimeSec) && void 0 !== o ? o : Match1TimeTipsTrait_1.DEFAULT_MATCH_TIME_SEC)
        };
    };
    Match1TimeTipsTrait.prototype.onInitViewBhv_crtTls = function (t, i) {
        var e, o, r, n, a, l = null === (r = null === (o = null === (e = t.ins) || void 0 === e ? void 0 : e.context) || void 0 === o ? void 0 : o.getTileMapObject) || void 0 === r ? void 0 : r.call(o);
        this._preMatchPairs = null !== (a = null === (n = null == l ? void 0 : l.getCanMatchCardPairNum) || void 0 === n ? void 0 : n.call(l)) && void 0 !== a ? a : null;
        this._preTime = new Date().getTime();
        this._hasMotivationalWords = false;
        i();
    };
    Match1TimeTipsTrait.prototype.onClrNormHlp_motiv = function (t, i) {
        var e = __read(t.args, 1)[0];
        this._hasMotivationalWords = !!e;
        i();
    };
    Match1TimeTipsTrait.prototype.onClearBhv_collision = function (t, i) {
        var e, o, r, n, a, l, c, s, u = t.ins, d = null == u ? void 0 : u.context, p = null === (e = null == d ? void 0 : d.getGameData) || void 0 === e ? void 0 : e.call(d), f = null === (o = null == d ? void 0 : d.getTileMapObject) || void 0 === o ? void 0 : o.call(d), h = UserModel_1.default.getInstance().isGuideFinished(), _ = new Date().getTime(), m = _ - this._preTime;
        this._preTime = _;
        var T = null !== (n = null === (r = null == f ? void 0 : f.getCanMatchCardPairNum) || void 0 === r ? void 0 : r.call(f)) && void 0 !== n ? n : 0, g = this._preMatchPairs;
        this._preMatchPairs = T;
        var M = null !== (l = null === (a = null == p ? void 0 : p.getHasTriggeredFullCombo) || void 0 === a ? void 0 : a.call(p)) && void 0 !== l && l, y = null !== (s = null === (c = null == p ? void 0 : p.getHasTriggeredRewardCombo) || void 0 === c ? void 0 : c.call(p)) && void 0 !== s && s;
        h && 1 === g && m >= 1000 * this._config.matchTimeSec && !M && !y && !this._hasMotivationalWords && T >= 1 && this.triggerAmazingBehavior(d, p);
        this._hasMotivationalWords = false;
        i();
    };
    Match1TimeTipsTrait.prototype.triggerAmazingBehavior = function (t, i) {
        var o, r, n, a, v, d, p = null !== (r = null === (o = null == i ? void 0 : i.getClearRecords) || void 0 === o ? void 0 : o.call(i)) && void 0 !== r ? r : [], f = p.length > 0 ? p[p.length - 1] : [], h = null !== (n = null == f ? void 0 : f[0]) && void 0 !== n ? n : "", _ = null !== (a = null == f ? void 0 : f[1]) && void 0 !== a ? a : "", m = null !== (d = null === (v = null == i ? void 0 : i.getComboNum) || void 0 === v ? void 0 : v.call(i)) && void 0 !== d ? d : 0, T = new MotivationalWordsEffect_1.MotivationalWordsEffect({
            comboNum: m,
            index: Match1TimeTipsTrait_1.AMAZING_INDEX,
            tileId1: h,
            tileId2: _
        }), g = {
            behaviorExecution: {
                type: BehaviorsInterface_1.EBehaviorExecutionType.Single,
                data: T
            },
            inputType: GameInputEnum_1.EGameInputEnum.TouchEnd,
            names: [T.name]
        };
        mj.EventManager.emit(SimulatorEvent_1.EVT_MSG_KEY_SIMULATOR_DISPLAY, g);
    };
    var Match1TimeTipsTrait_1;
    Match1TimeTipsTrait.traitKey = "Match1TimeTips";
    Match1TimeTipsTrait.AMAZING_INDEX = 3;
    Match1TimeTipsTrait.DEFAULT_MATCH_TIME_SEC = 10.3;
    Match1TimeTipsTrait = Match1TimeTipsTrait_1 = __decorate([
        mj.trait,
        mj.class("Match1TimeTipsTrait")
    ], Match1TimeTipsTrait);
    return Match1TimeTipsTrait;
}(Trait_1.default));
exports.default = Match1TimeTipsTrait;

cc._RF.pop();