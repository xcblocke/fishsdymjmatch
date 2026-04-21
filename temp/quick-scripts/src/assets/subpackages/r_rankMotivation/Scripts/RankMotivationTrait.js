"use strict";
cc._RF.push(module, 'ac28bi658NE+qvczrN7CeXi', 'RankMotivationTrait');
// subpackages/r_rankMotivation/Scripts/RankMotivationTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var RankMotivationUI_1 = require("./RankMotivationUI");
var RankMotivationTrait = /** @class */ (function (_super) {
    __extends(RankMotivationTrait, _super);
    function RankMotivationTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RankMotivationTrait_1 = RankMotivationTrait;
    Object.defineProperty(RankMotivationTrait.prototype, "increaseRankCount", {
        get: function () {
            return null != this._traitData.increaseRankCount ? this._traitData.increaseRankCount : 1;
        },
        enumerable: false,
        configurable: true
    });
    RankMotivationTrait.prototype.onMainGameCtrl_initRes = function (t, e) {
        e();
        t.ins.addPreloadRes("Prefab", [RankMotivationTrait_1.BUNDLE_NAME + ":prefabs/rankMotivation"]);
    };
    RankMotivationTrait.prototype.onRankBonusVw_show = function (t, e) {
        var n;
        e();
        var r = mj.getClassByName("RankModel");
        if (r && r.getInstance()) {
            var i = r.getInstance().getRankGameData(), a = r.getInstance().getSelfRank();
            if (i) {
                for (var s = a, l = 0; l < (null === (n = i.rankList) || void 0 === n ? void 0 : n.length); l++) {
                    var f = i.rankList[l];
                    if (i.joinActInfo.score >= f.score) {
                        s = l + 1;
                        break;
                    }
                }
                var p = a - s;
                if (!(p < this.increaseRankCount)) {
                    var u = t.ins._timeLabelNode;
                    u.getComponent(cc.Label).fontSize = 30;
                    u.color = new cc.Color().fromHEX("#89512a");
                    var d = t.ins.node, _ = t.ins._titleNode, v = t.ins._timeNode;
                    _.getSiblingIndex();
                    RankMotivationUI_1.default.createUI().then(function (t) {
                        if (cc.isValid(t) && cc.isValid(d) && cc.isValid(_) && cc.isValid(v)) {
                            t.setSiblingIndex(-1);
                            d.addChild(t);
                            t.getComponent(RankMotivationUI_1.default).updateUI(_, v, p);
                        }
                    }).catch(function (t) {
                        console.error("[" + RankMotivationTrait_1.traitKey + "] 游戏内创建RankMotivationUI失败:" + ((null == t ? void 0 : t.message) || "RankMotivationUI创建失败"));
                    });
                }
            }
        }
    };
    RankMotivationTrait.prototype.onRkBnsWinRate_show = function (t, e) {
        for (var o = t.ins._barLabelNodes, n = 0; n < o.length; n++) {
            var r = o[n];
            r[0].getComponent(cc.Label).fontSize = 52;
            r[1].getComponent(cc.Label).fontSize = 52;
        }
        e();
    };
    var RankMotivationTrait_1;
    RankMotivationTrait.traitKey = "RankMotivation";
    RankMotivationTrait.BUNDLE_NAME = "r_rankMotivation";
    RankMotivationTrait = RankMotivationTrait_1 = __decorate([
        mj.trait,
        mj.class("RankMotivationTrait")
    ], RankMotivationTrait);
    return RankMotivationTrait;
}(Trait_1.default));
exports.default = RankMotivationTrait;

cc._RF.pop();