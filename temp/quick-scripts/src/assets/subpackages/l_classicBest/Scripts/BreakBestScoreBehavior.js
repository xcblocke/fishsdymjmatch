"use strict";
cc._RF.push(module, '8a5a4dmcSVFXrSkQnE/mxIu', 'BreakBestScoreBehavior');
// subpackages/l_classicBest/Scripts/BreakBestScoreBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameInputEnum_1 = require("../../../Scripts/simulator/constant/GameInputEnum");
var GameBehaviorsBase_1 = require("../../../Scripts/base/GameBehaviorsBase");
var ClassicBreakBestView_1 = require("./ClassicBreakBestView");
var BreakBestScoreBehavior = /** @class */ (function (_super) {
    __extends(BreakBestScoreBehavior, _super);
    function BreakBestScoreBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BreakBestScoreBehavior.prototype.start = function (e) {
        var t = e.data.breakType;
        this.showBreakEffect(t);
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    BreakBestScoreBehavior.prototype.showBreakEffect = function (e) {
        var i = this;
        ClassicBreakBestView_1.default.createUI().then(function (t) {
            if (cc.isValid(i.context.gameView.node)) {
                t.setPosition(0, 0, 0);
                t.getComponent(ClassicBreakBestView_1.default).setBreakType(e);
                i.context.gameView.node.addChild(t);
            }
        }).catch(function (e) {
            console.error("[" + BreakBestScoreBehavior.name + "] 创建突破最高分视图失败:" + ((null == e ? void 0 : e.message) || "创建突破最高分视图失败"));
        });
    };
    return BreakBestScoreBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.default = BreakBestScoreBehavior;

cc._RF.pop();