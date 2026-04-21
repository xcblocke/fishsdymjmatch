"use strict";
cc._RF.push(module, '5ea6eYf0kFOAbVG2QN1Lcqz', 'RankBoxTipsTrait');
// subpackages/l_rankBoxTips/Scripts/RankBoxTipsTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var Config_1 = require("../../../Scripts/Config");
var RankBoxTipsTrait = /** @class */ (function (_super) {
    __extends(RankBoxTipsTrait, _super);
    function RankBoxTipsTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RankBoxTipsTrait.prototype.getMessageListeners = function () {
        var _t = {};
        _t[Config_1.EVT_MSG_KEY_EVENT_TOP_TOUCH_START] = this.onTopTouchStart.bind(this);
        return _t;
    };
    RankBoxTipsTrait.prototype.onTopTouchStart = function () {
        "function" == typeof this.dispatchEvent && this.dispatchEvent("msg_removeRankBoxTips");
    };
    RankBoxTipsTrait.prototype.onRankBoxBtn_boxClk = function (t, e) {
        var o, n = t.ins, r = n.getConfigReward(), i = [cc.v2(0, 80), cc.v2(0, 56), cc.v2(0, 56)][n.getRankNum() - 1];
        (null === (o = null == r ? void 0 : r.Items) || void 0 === o ? void 0 : o.length) > 0 && i && this.dispatchEvent("msg_addRankBoxTips", n.node, r, i);
        e();
    };
    RankBoxTipsTrait.prototype.onRankItem_btnTips = function (t, e) {
        var o, n = t.ins, r = n.getConfigReward();
        (null === (o = null == r ? void 0 : r.Items) || void 0 === o ? void 0 : o.length) > 0 && this.dispatchEvent("msg_addRankBoxTips", n.getBoxBtnNode(), r);
        e();
    };
    RankBoxTipsTrait.traitKey = "RankBoxTips";
    __decorate([
        mj.traitEvent("RankBoxTips_touchStart")
    ], RankBoxTipsTrait.prototype, "onTopTouchStart", null);
    RankBoxTipsTrait = __decorate([
        mj.trait,
        mj.class("RankBoxTipsTrait")
    ], RankBoxTipsTrait);
    return RankBoxTipsTrait;
}(Trait_1.default));
exports.default = RankBoxTipsTrait;

cc._RF.pop();