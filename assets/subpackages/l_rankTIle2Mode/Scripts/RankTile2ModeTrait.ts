import Trait from '../../../Scripts/framework/trait/Trait';
import { ETileType } from '../../../Scripts/simulator/constant/TileTypeEnum';
import { EShuffleFrom } from '../../../Scripts/simulator/constant/GameInputEnum';
import Tile2NormalGameData from '../../../Scripts/core/simulator/data/Tile2NormalGameData';
@mj.trait
@mj.class("RankTile2ModeTrait")
export default class RankTile2ModeTrait extends Trait {
  _tile2BeforeWinBehavior = null;
  static traitKey = "RankTile2Mode";
  static nextTimeOut = -1;
  onLoad() {
    super.onLoad.call(this);
  }
  getMessageListeners() {
    return {
      RankBoxVw_destroy: this.onMsgRankBoxVwDestory.bind(this),
      RankBonusVw_destroy: this.onMsgRankBonusVwDestory.bind(this)
    };
  }
  onMsgRankBoxVwDestory() {
    cc.isValid(this._tile2BeforeWinBehavior) && this._tile2BeforeWinBehavior.finish();
    this._tile2BeforeWinBehavior = null;
  }
  onMsgRankBonusVwDestory() {
    cc.isValid(this._tile2BeforeWinBehavior) && this._tile2BeforeWinBehavior.finish();
    this._tile2BeforeWinBehavior = null;
  }
  onTile2BfWinBhv_doOthLgc(e, t) {
    this._tile2BeforeWinBehavior = e.ins;
    var n = mj.getClassByName("RankModel");
    if (n) {
      if (1 != n.getInstance().getNowState()) t();else {
        n.getInstance().levelPassed();
        if (Tile2NormalGameData.getInstance().getRankCardCount() > 0) {
          n.getInstance().addGameCount();
          this.pushController("RankBonusController", {
            isReuse: true,
            isShowAction: false,
            instance: e.ins
          });
          t({
            isBreak: true,
            returnType: TraitCallbackReturnType.return
          });
        } else {
          n.getInstance().resetWinStreakCount();
          t();
        }
      }
    } else t();
  }
  onTile2WinVw_destroy(e, t) {
    var n = mj.getClassByName("RankTrait");
    if (n) {
      n.getInstance().judgeHasRankReward(true);
      t();
    } else t();
  }
  onIptT2Shuffle_exec(e, t) {
    var n = e.args[0],
      r = mj.getClassByName("RankModel");
    if (r) {
      var i = r.getInstance();
      i.hasOpeningActivity() && n.from === EShuffleFrom.Free && i.levelFailed();
      t();
    } else t();
  }
  onTile2FailVw_replay(e, t) {
    var n = mj.getClassByName("RankModel");
    if (n) {
      var r = n.getInstance();
      r.hasOpeningActivity() && r.levelFailed();
      t();
    } else t();
  }
  onT2ClearEffBhv_playAni(e, t) {
    var n,
      r,
      i = mj.getClassByName("RankTrait"),
      o = mj.getClassByName("RankModel");
    if (i && o) {
      if (o.getInstance().hasOpeningActivity()) {
        var a = null === (n = e.args) || void 0 === n ? void 0 : n[1];
        if (null === (r = null == a ? void 0 : a.data) || void 0 === r ? void 0 : r.isRankCard) {
          i.getInstance().checkSpecialCard(null, e.ins.context);
          e.ins.finish();
          t({
            isBreak: true,
            returnType: TraitCallbackReturnType.return
          });
        } else t();
      } else t();
    } else t();
  }
  onT2GameCtrl_getTileTypes(e, t) {
    var n = mj.getClassByName("RankModel"),
      r = mj.getClassByName("RankTrait");
    if (n && r) {
      r.getInstance().judgeFirstOpenRank();
      n.getInstance().hasOpeningActivity() && (e.beforReturnVal = e.beforReturnVal + "," + ETileType.RankCard);
      t({
        returnVal: e.beforReturnVal
      });
    } else t();
  }
}