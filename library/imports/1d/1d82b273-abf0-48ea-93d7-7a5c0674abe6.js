"use strict";
cc._RF.push(module, '1d82bJzq/BI6pPXelwGdKvm', 'TargetCollectedBehavior');
// subpackages/r_targetCollected/Scripts/TargetCollectedBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.TargetCollectedBehavior = exports.TargetCollectedEffect = void 0;
var GameInputEnum_1 = require("../../../Scripts/simulator/constant/GameInputEnum");
var BaseEffect_1 = require("../../../Scripts/BaseEffect");
var BehaviorsMapping_1 = require("../../../Scripts/mapping/BehaviorsMapping");
var GameBehaviorsBase_1 = require("../../../Scripts/base/GameBehaviorsBase");
var BaseSpine_1 = require("../../../Scripts/gamePlay/base/ui/BaseSpine");
var TargetCollectedEffect = /** @class */ (function (_super) {
    __extends(TargetCollectedEffect, _super);
    function TargetCollectedEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.TargetCollected;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(TargetCollectedEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return TargetCollectedEffect;
}(BaseEffect_1.default));
exports.TargetCollectedEffect = TargetCollectedEffect;
var TargetCollectedBehavior = /** @class */ (function (_super) {
    __extends(TargetCollectedBehavior, _super);
    function TargetCollectedBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TargetCollectedBehavior.prototype.start = function (e) {
        var t = this.context.gameView;
        if (cc.isValid(t) && cc.isValid(t.nodeTopEffectRoot)) {
            this.finish(GameInputEnum_1.EBehaviorEnum.Success);
            try {
                this.playAnimation(t.nodeTopEffectRoot, e);
            }
            catch (e) { }
        }
        else
            this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    TargetCollectedBehavior.prototype.playAnimation = function (e, t) {
        var r = e.width, o = BaseSpine_1.default.create(t.data.spinePath, "in", 1, null, true, t.data.bundleName);
        e.addChild(o.node);
        o.node.setPosition(-r / 2, 0, 0);
        var a = BaseSpine_1.default.create(t.data.spinePath, "in", 1, null, true, t.data.bundleName);
        e.addChild(a.node);
        a.node.setPosition(r / 2, 0, 0);
        a.node.scale = -1;
    };
    return TargetCollectedBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.TargetCollectedBehavior = TargetCollectedBehavior;

cc._RF.pop();