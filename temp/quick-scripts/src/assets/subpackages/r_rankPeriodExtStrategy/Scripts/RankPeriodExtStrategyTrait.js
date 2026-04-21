"use strict";
cc._RF.push(module, '18eecOPSzxLgZus3c+UTA1A', 'RankPeriodExtStrategyTrait');
// subpackages/r_rankPeriodExtStrategy/Scripts/RankPeriodExtStrategyTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var l = function l(r) {
    return null != r && ("string" != typeof r || 0 != r.length);
};
var RankPeriodExtStrategyTrait = /** @class */ (function (_super) {
    __extends(RankPeriodExtStrategyTrait, _super);
    function RankPeriodExtStrategyTrait() {
        var _this = _super.call(this) || this;
        _this.allPeriodArray = [];
        _this.localData.curLoopPeriodArray = l(_this.localData.curLoopPeriodArray) ? _this.localData.curLoopPeriodArray : [];
        return _this;
    }
    RankPeriodExtStrategyTrait_1 = RankPeriodExtStrategyTrait;
    RankPeriodExtStrategyTrait.prototype.initAllPeriodArray = function (r) {
        var t = this;
        this.allPeriodArray.length > 0 || r.forEach(function (r) {
            t.allPeriodArray.push(r.Period);
        });
    };
    RankPeriodExtStrategyTrait.prototype.onRankModel_getIdxByExc = function (r, t) {
        var e = r.ins.boardConfig;
        this.initAllPeriodArray(e);
        var o = r.args[0], a = this.getIdxByExclude(o);
        t({
            isBreak: true,
            returnType: TraitCallbackReturnType.return,
            returnVal: a
        });
    };
    RankPeriodExtStrategyTrait.prototype.getIdxByExclude = function (r) {
        0 == this.localData.curLoopPeriodArray.length && (this.localData.curLoopPeriodArray = this.allPeriodArray.slice());
        for (var t = -1, e = 0; e < 100; e++) {
            var o = Math.floor(Math.random() * this.localData.curLoopPeriodArray.length), a = this.localData.curLoopPeriodArray[o];
            if (!r.includes(a)) {
                this.localData.curLoopPeriodArray.splice(o, 1);
                this.localData.curLoopPeriodArray = this.localData.curLoopPeriodArray;
                t = a;
                break;
            }
        }
        return t < 0 || !this.allPeriodArray.includes(t) ? 0 : this.allPeriodArray.indexOf(t);
    };
    RankPeriodExtStrategyTrait.prototype.onCardUtil_atlasPathBundle = function (r, t) {
        var o = r.args[0], a = mj.getClassByName("RankModel");
        if (a) {
            var i = a.getInstance().getCurBoardData();
            if (i && i.CollectThing == o) {
                if (i.Period <= 5)
                    t();
                else {
                    var n = "res/" + o;
                    t({
                        returnType: TraitCallbackReturnType.return,
                        isBreak: true,
                        returnVal: {
                            path: n,
                            bundleName: RankPeriodExtStrategyTrait_1.BUNDLE_NAME,
                            fromAtlas: false
                        }
                    });
                }
            }
            else
                t();
        }
        else
            t();
    };
    RankPeriodExtStrategyTrait.prototype.onRankModel_getSameActCD = function (r, t) {
        t({
            returnVal: this.getSameActCD(),
            isBreak: true,
            returnType: TraitCallbackReturnType.return
        });
    };
    RankPeriodExtStrategyTrait.prototype.onRankModel_getLoopLen = function (r, t) {
        t({
            returnVal: this.getLoopLen(),
            isBreak: true,
            returnType: TraitCallbackReturnType.return
        });
    };
    RankPeriodExtStrategyTrait.prototype.getSameActCD = function () {
        var r, t;
        return null !== (t = null === (r = this._traitData) || void 0 === r ? void 0 : r.sameActTimesCD) && void 0 !== t ? t : 4;
    };
    RankPeriodExtStrategyTrait.prototype.getLoopLen = function () {
        var r, t;
        return null !== (t = null === (r = this._traitData) || void 0 === r ? void 0 : r.loopLen) && void 0 !== t ? t : 10;
    };
    var RankPeriodExtStrategyTrait_1;
    RankPeriodExtStrategyTrait.traitKey = "RankPeriodExtStrategy";
    RankPeriodExtStrategyTrait.BUNDLE_NAME = "r_rankPeriodExtStrategy";
    RankPeriodExtStrategyTrait = RankPeriodExtStrategyTrait_1 = __decorate([
        mj.trait,
        mj.class("RankPeriodExtStrategy")
    ], RankPeriodExtStrategyTrait);
    return RankPeriodExtStrategyTrait;
}(Trait_1.default));
exports.default = RankPeriodExtStrategyTrait;

cc._RF.pop();