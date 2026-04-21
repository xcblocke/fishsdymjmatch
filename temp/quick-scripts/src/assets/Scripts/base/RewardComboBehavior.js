"use strict";
cc._RF.push(module, '2210dZfh29Fpr2QJEXrrvqQ', 'RewardComboBehavior');
// Scripts/base/RewardComboBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.RewardComboBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var GameInteraction_1 = require("../GameInteraction/GameInteraction");
var RewardComboItem_1 = require("../items/RewardComboItem");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var RewardComboBehavior = /** @class */ (function (_super) {
    __extends(RewardComboBehavior, _super);
    function RewardComboBehavior() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._timeout = 12000;
        _this._rewardComboNode = null;
        _this._rewardComboNode2 = null;
        return _this;
    }
    RewardComboBehavior.prototype.start = function () {
        var e = this;
        if (this.shouldSkip())
            this.finish(GameInputEnum_1.EBehaviorEnum.Success);
        else {
            var t = this.context.gameView.effectNode;
            Promise.all([RewardComboItem_1.default.createUI(), RewardComboItem_1.default.createUI()]).then(function (o) {
                var n = __read(o, 2), i = n[0], r = n[1];
                if (i && r) {
                    e._rewardComboNode = i;
                    e._rewardComboNode2 = r;
                    i.setParent(t);
                    r.setParent(t);
                    var s = i.getComponent(RewardComboItem_1.default);
                    if (s) {
                        var c = r.getComponent(RewardComboItem_1.default);
                        if (c) {
                            e.playBonusAudio();
                            e.context.gameView.setSwallowEventNodeActive(true);
                            i.position = cc.v3(0, 0);
                            r.position = cc.v3(0, 280);
                            s.startPlayAni("in_bonus", function () { });
                            cc.Tween.stopAllByTarget(r);
                            cc.Tween.stopAllByTarget(i);
                            cc.tween(r).delay(0.23).call(function () {
                                c.startPlayAni("in_comboBonus", function () {
                                    e.finish(GameInputEnum_1.EBehaviorEnum.Success);
                                    e.autoMerger();
                                });
                            }).start();
                        }
                        else {
                            r.destroy();
                            e.finish(GameInputEnum_1.EBehaviorEnum.Success);
                        }
                    }
                    else {
                        i.destroy();
                        e.finish(GameInputEnum_1.EBehaviorEnum.Success);
                    }
                }
                else
                    e.finish(GameInputEnum_1.EBehaviorEnum.Success);
            }).catch(function () {
                e.finish(GameInputEnum_1.EBehaviorEnum.Success);
            });
        }
    };
    RewardComboBehavior.prototype.onAbort = function () {
        var t;
        null === (t = this.context.gameView) || void 0 === t || t.setSwallowEventNodeActive(false);
        this.cleanupNodes();
        _super.prototype.onAbort.call(this);
    };
    RewardComboBehavior.prototype.cleanupNodes = function () {
        if (this._rewardComboNode && cc.isValid(this._rewardComboNode)) {
            cc.Tween.stopAllByTarget(this._rewardComboNode);
            this._rewardComboNode.destroy();
        }
        if (this._rewardComboNode2 && cc.isValid(this._rewardComboNode2)) {
            cc.Tween.stopAllByTarget(this._rewardComboNode2);
            this._rewardComboNode2.destroy();
        }
        this._rewardComboNode = null;
        this._rewardComboNode2 = null;
    };
    RewardComboBehavior.prototype.autoMerger = function () {
        GameInteraction_1.GameInteraction.input({
            inputType: GameInputEnum_1.EGameInputEnum.StartAutoMerge,
            type: "rewardCombo"
        });
    };
    RewardComboBehavior.prototype.playBonusAudio = function () {
        var e = this;
        mj.audioManager.pauseBGM();
        this.context.applauseAudioId = -1;
        mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.Bonus, false, function () {
            null !== e.context.applauseAudioId && mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.Applause, true).then(function (t) {
                e.context.applauseAudioId = t;
            });
        });
    };
    RewardComboBehavior.prototype.shouldSkip = function () {
        return false;
    };
    __decorate([
        mj.traitEvent("RwdComboBhv_bonusAud")
    ], RewardComboBehavior.prototype, "playBonusAudio", null);
    __decorate([
        mj.traitEvent("RwdComboBhv_shouldSkip")
    ], RewardComboBehavior.prototype, "shouldSkip", null);
    return RewardComboBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.RewardComboBehavior = RewardComboBehavior;

cc._RF.pop();