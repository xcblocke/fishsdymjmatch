"use strict";
cc._RF.push(module, '4f874FSgNpGr4UAGRPvna99', 'BoxRewardTrait');
// subpackages/l_boxReward/Scripts/BoxRewardTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var BoxRewardUI_1 = require("./BoxRewardUI");
var BoxRewardTrait = /** @class */ (function (_super) {
    __extends(BoxRewardTrait, _super);
    function BoxRewardTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.requireRes = ["prefabs/boxReward/RewardUI", "prefabs/boxReward/OpenAnim", "prefabs/boxReward/BoxBarItem"];
        return _this;
    }
    BoxRewardTrait_1 = BoxRewardTrait;
    BoxRewardTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    BoxRewardTrait.prototype.onWinCtrl_initRes = function (t, e) {
        var i = t.ins;
        null == i || i.addPreloadRes("Prefab", this.requireRes);
        e();
    };
    BoxRewardTrait.prototype.onWinCtrl_viewShow = function (t, e) {
        var o, n = t.ins, a = null == n ? void 0 : n.rootView;
        try {
            if (cc.isValid(a)) {
                var r = ((null === (o = n.args) || void 0 === o ? void 0 : o.data) || {}).curLv, c = void 0 === r ? 1 : r, l = n._viewComponent;
                if (cc.isValid(l)) {
                    var d = l.getContentNode();
                    if (cc.isValid(d)) {
                        var p = d.getChildByName("RewardUI");
                        if (!cc.isValid(p)) {
                            p = l.createUISync(BoxRewardUI_1.default);
                            if (cc.isValid(p)) {
                                d.addChild(p);
                                var u = p.getComponent(BoxRewardUI_1.default);
                                cc.isValid(u) && u.showBoxRewardUI(c, this._traitData.config);
                            }
                        }
                    }
                }
            }
        }
        catch (t) {
            console.error("[" + BoxRewardTrait_1.traitKey + "] 显示宝箱奖励UI失败: " + (null == t ? void 0 : t.message));
        }
        e();
    };
    var BoxRewardTrait_1;
    BoxRewardTrait.traitKey = "BoxReward";
    BoxRewardTrait = BoxRewardTrait_1 = __decorate([
        mj.trait,
        mj.class("BoxRewardTrait")
    ], BoxRewardTrait);
    return BoxRewardTrait;
}(Trait_1.default));
exports.default = BoxRewardTrait;

cc._RF.pop();