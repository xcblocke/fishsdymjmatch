"use strict";
cc._RF.push(module, '9a34926dxFA1KYSmYVDUa3j', 'RankSynBoxTipsTrait');
// subpackages/l_rankSynXingyun/Scripts/RankSynBoxTipsTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var RankSynBoxTipsTrait = /** @class */ (function (_super) {
    __extends(RankSynBoxTipsTrait, _super);
    function RankSynBoxTipsTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rankViewUpBgNode = null;
        _this.rankViewDownBgNode = null;
        _this.rankViewScrollRootNode = null;
        _this.rankIntroViewIns = null;
        return _this;
    }
    RankSynBoxTipsTrait.prototype.isTouchInRankViewUpDown = function (t) {
        if (!cc.isValid(this.rankViewUpBgNode) || !cc.isValid(this.rankViewDownBgNode))
            return false;
        var e = this.rankViewUpBgNode.getBoundingBoxToWorld(), r = this.rankViewDownBgNode.getBoundingBoxToWorld(), n = t.getLocation();
        return e.contains(n) || r.contains(n);
    };
    RankSynBoxTipsTrait.prototype.hasRankIntroView = function () {
        return cc.isValid(this.rankIntroViewIns);
    };
    RankSynBoxTipsTrait.prototype.onRankBoxTips_touchStart = function (t, e) {
        var r = t.args[0];
        if (this.isTouchInRankViewUpDown(r) || this.hasRankIntroView()) {
            e({
                isBreak: true,
                returnType: TraitCallbackReturnType.return
            });
        }
        else {
            e();
        }
    };
    RankSynBoxTipsTrait.prototype.onRankVw_show = function (t, e) {
        this.rankViewUpBgNode = t.ins._upBgNode;
        this.rankViewDownBgNode = t.ins._downBgNode;
        this.rankViewScrollRootNode = t.ins._contentNode;
        e();
    };
    RankSynBoxTipsTrait.prototype.onRankIntroVw_show = function (t, e) {
        this.rankIntroViewIns = t.ins;
        e();
    };
    RankSynBoxTipsTrait.prototype.onRankVw_getTipsParent = function (t, e) {
        if (cc.isValid(this.rankViewScrollRootNode)) {
            e({
                isBreak: true,
                returnType: TraitCallbackReturnType.return,
                returnVal: this.rankViewScrollRootNode
            });
        }
        else {
            e();
        }
    };
    RankSynBoxTipsTrait.traitKey = "RankSynBoxTips";
    RankSynBoxTipsTrait = __decorate([
        mj.trait,
        mj.class("RankSynBoxTipsTrait")
    ], RankSynBoxTipsTrait);
    return RankSynBoxTipsTrait;
}(Trait_1.default));
exports.default = RankSynBoxTipsTrait;

cc._RF.pop();