import { EInsertType } from '../constant/BehaviorsEnum';
import { EGameInputEnum } from '../simulator/constant/GameInputEnum';
import { AddLevelDropAniEffect } from '../AddLevelDropAniEffect';
import { AddLevelDropEffect } from '../AddLevelDropEffect';
import { AddLevelEnterAniEffect } from '../AddLevelEnterAniEffect';
import { BlockInputRefEffect } from '../BlockInputRefEffect';
import { ClassicBeforeFailEffect } from '../ClassicBeforeFailEffect';
import { ClassicFailEffect } from '../ClassicFailEffect';
import { ClassicReviveEffect } from '../ClassicReviveEffect';
import { EmptyEffect } from '../EmptyEffect';
import { InputBase } from '../inputbase/InputBase';
export default class InputDropClassic extends InputBase {
  excute() {
    var e,
      t,
      o = this.gameContext.getGameData().getCurrentBatchId(),
      n = this.gameContext.classicLevelModifier.tryExcuteDrop() || [],
      i = [];
    try {
      for (var a = __values(this.gameContext.getTileMapObject().tileObjectMap().values()), l = a.next(); !l.done; l = a.next()) {
        var s = l.value;
        s.batchId == o && i.push(s);
      }
    } catch (t) {
      e = {
        error: t
      };
    } finally {
      try {
        l && !l.done && (t = a.return) && t.call(a);
      } finally {
        if (e) throw e.error;
      }
    }
    this.resetAllTileGenerated();
    this.pushAddLevelDropEffect(n);
    this.pushAddLevelEnterAniEffect(i);
    this.pushAddLevelDropAniEffect(n);
    this.tryExcuteFail();
  }
  pushAddLevelEnterAniEffect(e) {
    var t = new EmptyEffect({
      inputType: EGameInputEnum.AddLevelClassic
    });
    this.pushEffect(t, EInsertType.Root);
    var o = new AddLevelEnterAniEffect({
      tileObjects: e
    });
    this.pushEffect(o, EInsertType.Parallel);
  }
  tryExcuteFail() {
    if (this.gameContext.getTileMapObject().checkIsDead([])) if (this.gameContext.classicReviveChecker.canRevive()) this.pushReviveEffect();else {
      this.gameContext.gameModifier.modifyClassicEnd();
      this.pushClassicBeforeFailEffect();
      this.pushFailEffect();
    }
  }
  pushReviveEffect() {
    this.gameContext.getGameData();
    var e = new ClassicReviveEffect({});
    return this.pushEffect(e, EInsertType.Root);
  }
  pushClassicBeforeFailEffect() {
    var e = new ClassicBeforeFailEffect({});
    this.pushEffect(e, EInsertType.Root);
  }
  pushFailEffect() {
    var e = new ClassicFailEffect({});
    return this.pushEffect(e, EInsertType.Root);
  }
  pushBlockInputRefEffect(e, t) {
    var o = new BlockInputRefEffect({
      block: e,
      from: t
    });
    this.pushEffect(o, EInsertType.Root);
  }
  pushAddLevelDropEffect(e) {
    var t = new AddLevelDropEffect({
      fallingTiles: e
    });
    this.pushEffect(t, EInsertType.Root);
  }
  pushAddLevelDropAniEffect(e) {
    var t = new AddLevelDropAniEffect({
      fallingTiles: e,
      isOpenGenerateState: this.gameContext.getOpenGenerateState()
    });
    this.pushEffect(t, EInsertType.Parallel);
  }
  resetAllTileGenerated() {
    var e,
      t,
      o = this.gameContext.getTileMapObject();
    try {
      for (var n = __values(o.tileObjectMap()), i = n.next(); !i.done; i = n.next()) {
        var l = __read(i.value, 2),
          s = (l[0], l[1]);
        s.generating && o.setTileGenerated(s, false);
      }
    } catch (t) {
      e = {
        error: t
      };
    } finally {
      try {
        i && !i.done && (t = n.return) && t.call(n);
      } finally {
        if (e) throw e.error;
      }
    }
  }
}