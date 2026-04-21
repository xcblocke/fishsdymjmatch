import { EBehaviorEnum, EGameInputEnum } from '../simulator/constant/GameInputEnum';
import { EAudioID } from '../core/simulator/constant/GameTypeEnums';
import { GameInteraction } from '../GameInteraction/GameInteraction';
import RewardComboItem from '../items/RewardComboItem';
import { GameBehaviorsBase } from './GameBehaviorsBase';
export class RewardComboBehavior extends GameBehaviorsBase {
  _timeout = 12000;
  _rewardComboNode = null;
  _rewardComboNode2 = null;
  start() {
    var e = this;
    if (this.shouldSkip()) this.finish(EBehaviorEnum.Success);else {
      var t = this.context.gameView.effectNode;
      Promise.all([RewardComboItem.createUI(), RewardComboItem.createUI()]).then(function (o) {
        var n = __read(o, 2),
          i = n[0],
          r = n[1];
        if (i && r) {
          e._rewardComboNode = i;
          e._rewardComboNode2 = r;
          i.setParent(t);
          r.setParent(t);
          var s = i.getComponent(RewardComboItem);
          if (s) {
            var c = r.getComponent(RewardComboItem);
            if (c) {
              e.playBonusAudio();
              e.context.gameView.setSwallowEventNodeActive(true);
              i.position = cc.v3(0, 0);
              r.position = cc.v3(0, 280);
              s.startPlayAni("in_bonus", function () {});
              cc.Tween.stopAllByTarget(r);
              cc.Tween.stopAllByTarget(i);
              cc.tween(r).delay(0.23).call(function () {
                c.startPlayAni("in_comboBonus", function () {
                  e.finish(EBehaviorEnum.Success);
                  e.autoMerger();
                });
              }).start();
            } else {
              r.destroy();
              e.finish(EBehaviorEnum.Success);
            }
          } else {
            i.destroy();
            e.finish(EBehaviorEnum.Success);
          }
        } else e.finish(EBehaviorEnum.Success);
      }).catch(function () {
        e.finish(EBehaviorEnum.Success);
      });
    }
  }
  onAbort() {
    var t;
    null === (t = this.context.gameView) || void 0 === t || t.setSwallowEventNodeActive(false);
    this.cleanupNodes();
    super.onAbort.call(this);
  }
  cleanupNodes() {
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
  }
  autoMerger() {
    GameInteraction.input({
      inputType: EGameInputEnum.StartAutoMerge,
      type: "rewardCombo"
    });
  }
  @mj.traitEvent("RwdComboBhv_bonusAud")
  playBonusAudio() {
    var e = this;
    mj.audioManager.pauseBGM();
    this.context.applauseAudioId = -1;
    mj.audioManager.playEffect(EAudioID.Bonus, false, function () {
      null !== e.context.applauseAudioId && mj.audioManager.playEffect(EAudioID.Applause, true).then(function (t) {
        e.context.applauseAudioId = t;
      });
    });
  }
  @mj.traitEvent("RwdComboBhv_shouldSkip")
  shouldSkip() {
    return false;
  }
}