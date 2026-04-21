import { DotGameUseItem } from '../gamePlay/dot/DGameUseItem';
import { EItemId } from '../core/simulator/constant/GameTypeEnums';
import { HitTipsEffect } from '../HitTipsEffect';
import { UpdateHitTipsPropEffect } from '../UpdateHitTipsPropEffect';
import { InputBase } from '../inputbase/InputBase';
export default class InputHitTips extends InputBase {
  @mj.traitEvent("IptHitTips_exec")
  excute() {
    if (!this.gameController.gameContext.getCanHitTips().length) {
      var e = this.gameContext.getGameData().getHitTipsNums();
      if (this.gameContext.getGameData().isHitTipsEnough()) {
        this.changePropNumDefault(e);
        var t = this.gameController.tileMapObject.getCanMatchTilesHint();
        if (0 == t.length) {
          this.gameController.tileMapObject.updateCanMatchTiles();
          t = this.gameController.tileMapObject.getCanMatchTilesHint();
        }
        if (t.length > 0) {
          var o = this.findHintTile(t),
            n = o[0].id,
            i = o[1].id;
          this.gameContext.trackerModifier.triggerHint(n, i);
          this.gameController.tileMapObject.getTileObject(n).isHint = true;
          this.gameController.tileMapObject.getTileObject(i).isHint = true;
          this.gameController.gameContext.setCanHitTips([n, i]);
          if (mj.triggerInternalEvent("IptHitTips_execTempFix", this, [e])) return;
          this.pushHitTipsEffect(n, i, false);
        }
      } else mj.EventManager.emit("SHOWTIPS", "Insufficient number of props.", cc.v2(0, 0));
    }
  }
  @mj.traitEvent("IptHitTips_findHint")
  findHintTile(e) {
    var t = e[Math.floor(Math.random() * e.length)];
    return t.slice(0, 2);
  }
  pushHitTipsEffect(e, t, o) {
    var n = new HitTipsEffect({
      isClearHit: o,
      tileId1: e,
      tileId2: t
    });
    this.pushEffect(n);
  }
  pushUpdateHitTipsPropEffect(e) {
    var t = new UpdateHitTipsPropEffect({
      curNum: e
    });
    this.pushEffect(t);
  }
  @mj.traitEvent("IptHitTips_chgPropDef")
  changePropNumDefault() {
    var e = this.gameContext.getGameData().getHitTipsNums();
    this.gameContext.getGameData().changeHitTipsNums(-1);
    this.gameContext.getGameData().recordToolUse(EItemId.Hint);
    this.gameContext.getGameData().toolChange(EItemId.Hint, -1);
    var t = this.gameContext.getGameData().getHitTipsNums();
    DotGameUseItem.dot(this.gameContext, {
      itemId: EItemId.Hint,
      afterNum: t,
      beforeNum: e
    });
    this.pushUpdateHitTipsPropEffect(t);
  }
}