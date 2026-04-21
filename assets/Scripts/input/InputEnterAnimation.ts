import { EInsertType } from '../constant/BehaviorsEnum';
import { MjGameType } from '../core/simulator/constant/GameTypeEnums';
import { EnterAnimationEffect } from '../EnterAnimationEffect';
import { DailyChallengeDateEffect } from '../DailyChallengeDateEffect';
import { UpdateLevelEffect } from '../UpdateLevelEffect';
import { UpdateMatchNumEffect } from '../UpdateMatchNumEffect';
import { UpdateScoreEffect } from '../UpdateScoreEffect';
import { InputBase } from '../inputbase/InputBase';
import UserModel from '../gamePlay/user/UserModel';
export default class InputEnterAnimation extends InputBase {
  @mj.traitEvent("IptEnterAni_excute")
  excute() {
    UserModel.getInstance().isGuideFinished() && this.pushEnterAnimationEffect();
    if (this.gameContext.gameType === MjGameType.DailyChallenge) {
      this.pushUpdateDailyChallengeDateEffect();
      this.pushUpdateScoreEffect();
    } else if (this.gameContext.gameType === MjGameType.Travel) this.pushInitCollectTargetEffect();else {
      this.pushUpdateScoreEffect();
      this.pushUpdateLevelEffect();
    }
  }
  @mj.traitEvent("IptEnterAni_pushColTag")
  pushInitCollectTargetEffect() {}
  pushUpdateDailyChallengeDateEffect() {
    var e = new DailyChallengeDateEffect({
      date: this.gameContext.getGameData().getDailyChallengeTimestamp()
    });
    this.pushEffect(e, EInsertType.Parallel);
  }
  pushUpdateLevelEffect() {
    var e = new UpdateLevelEffect({
      level: this.gameContext.getGameData().getLevelId()
    });
    this.pushEffect(e, EInsertType.Parallel);
  }
  pushEnterAnimationEffect() {
    var e = new EnterAnimationEffect({
      cardLayoutConfig: this.gameContext.getCardLayoutConfig()
    });
    this.pushEffect(e, EInsertType.Root, null, true);
  }
  pushUpdateScoreEffect() {
    var e = this.gameContext.getGameData(),
      t = new UpdateScoreEffect({
        addScore: 0,
        targetScore: e.getScore(),
        isShowCombo: false
      });
    this.pushEffect(t, EInsertType.Parallel);
  }
  pushUpdateMatchNumEffect() {
    var e = new UpdateMatchNumEffect({
      canMatchCardPairNum: this.gameContext.getTileMapObject().getCanMatchCardPairNum()
    });
    this.pushEffect(e, EInsertType.Parallel);
  }
}