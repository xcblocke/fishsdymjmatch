"use strict";
cc._RF.push(module, '5f619h6mQNNkpnzUaIMpyuc', 'NewRankCardTrait');
// subpackages/r_newRankCard/Scripts/NewRankCardTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var n;
(function (n) {
    n[n["FIRST"] = 1] = "FIRST";
    n[n["SECOND"] = 2] = "SECOND";
    n[n["THIRD"] = 3] = "THIRD";
    n[n["FOURTH"] = 4] = "FOURTH";
    n[n["FIFTH"] = 5] = "FIFTH";
    n[n["SIXTH"] = 6] = "SIXTH";
})(n || (n = {}));
var s = function s(e) {
    return null != e && ("string" != typeof e || 0 != e.length);
};
var NewRankCardTrait = /** @class */ (function (_super) {
    __extends(NewRankCardTrait, _super);
    function NewRankCardTrait() {
        var _this = _super.call(this) || this;
        _this._solutionType = n.SECOND;
        _this.localData.periodTimesArray = s(_this.localData.periodTimesArray) ? _this.localData.periodTimesArray : [0, 0, 0, 0, 0];
        return _this;
    }
    NewRankCardTrait_1 = NewRankCardTrait;
    Object.defineProperty(NewRankCardTrait.prototype, "solutionType", {
        get: function () {
            return null == this._traitData.solutionType ? n.SECOND : this._traitData.solutionType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NewRankCardTrait.prototype, "replaceCardTimes", {
        get: function () {
            return null == this._traitData.replaceCardTimes ? 2 : this._traitData.replaceCardTimes;
        },
        enumerable: false,
        configurable: true
    });
    NewRankCardTrait.prototype.onRankModel_addCount = function (e, t) {
        t();
        var r = mj.getClassByName("RankModel");
        if (r) {
            var a = r.getInstance().getCurBoardData();
            if (a && !(a.Period > 5)) {
                var o = a.Period - 1;
                this.localData.periodTimesArray[o]++;
                this.localData.periodTimesArray = this.localData.periodTimesArray;
            }
        }
    };
    NewRankCardTrait.prototype.onCardUtil_atlasPathBundle = function (e, t) {
        var a = e.args[0], o = mj.getClassByName("RankModel");
        if (o) {
            var i = o.getInstance().getCurBoardData();
            if (i && i.CollectThing == a) {
                if (i.Period > 5)
                    t();
                else {
                    var l = true, s = i.Period, u = this.localData.periodTimesArray[s - 1];
                    n.FIRST != this.solutionType && u < this.replaceCardTimes && (l = false);
                    if (l) {
                        n.FIRST, this.solutionType;
                        t({
                            returnType: TraitCallbackReturnType.return,
                            isBreak: true,
                            returnVal: {
                                path: "res/" + a,
                                bundleName: NewRankCardTrait_1.BUNDLE_NAME,
                                fromAtlas: false
                            }
                        });
                    }
                    else
                        t();
                }
            }
            else
                t();
        }
        else
            t();
    };
    var NewRankCardTrait_1;
    NewRankCardTrait.traitKey = "NewRankCard";
    NewRankCardTrait.BUNDLE_NAME = "r_newRankCard";
    NewRankCardTrait = NewRankCardTrait_1 = __decorate([
        mj.trait,
        mj.class("NewRankCardTrait")
    ], NewRankCardTrait);
    return NewRankCardTrait;
}(Trait_1.default));
exports.default = NewRankCardTrait;

cc._RF.pop();