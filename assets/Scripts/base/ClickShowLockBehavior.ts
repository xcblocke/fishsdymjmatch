import { EBehaviorEnum } from '../simulator/constant/GameInputEnum';
import { PoolName } from '../constant/enumRes';
import { GameBehaviorsBase } from './GameBehaviorsBase';
export class ClickShowLockBehavior extends GameBehaviorsBase {
  static activeLocks = [];
  static LOCK_OFFSET_RATIO = 0.5;
  static LOCK_Z_INDEX = 9999;
  start(e) {
    this.finish(EBehaviorEnum.Success);
    var t = this.getTileNode(e.data.tileId);
    if (t) {
      var o = this.getOrCreateLocks(t),
        n = o.leftLock,
        i = o.rightLock;
      this.setupLocksAndPlayAnimation(t, n, i);
    }
  }
  getTileNode(e) {
    var t;
    return (null === (t = this.context.getTileNodeMap().get(e)) || void 0 === t ? void 0 : t.cardNode) || null;
  }
  getOrCreateLocks(e) {
    if (2 === ClickShowLockBehavior.activeLocks.length) {
      var o = __read(ClickShowLockBehavior.activeLocks, 2),
        n = o[0],
        i = o[1];
      if (!cc.isValid(n) || !cc.isValid(i)) return this.createNewLocks(e);
      this.resetExistingLocks(n, i, e);
      return {
        leftLock: n,
        rightLock: i
      };
    }
    return this.createNewLocks(e);
  }
  createNewLocks(e) {
    this.clearActiveLocks();
    return this.createLockPair(e.parent);
  }
  resetExistingLocks(e, o, n) {
    cc.Tween.stopAllByTarget(e);
    cc.Tween.stopAllByTarget(o);
    [e, o].forEach(function (e) {
      e.opacity = 0;
      e.scale = 0;
      e.angle = 0;
      e.parent = n.parent;
      e.zIndex = ClickShowLockBehavior.LOCK_Z_INDEX;
    });
  }
  setupLocksAndPlayAnimation(e, t, o) {
    this.setLockPositions(e, t, o);
    this.playLockAnimation(t);
    this.playLockAnimation(o);
  }
  clearActiveLocks() {
    var e = this.context.gameView.gameObjectPool;
    ClickShowLockBehavior.activeLocks.forEach(function (t) {
      if (cc.isValid(t)) {
        cc.Tween.stopAllByTarget(t);
        e.push(PoolName.LockSide, t);
      }
    });
    ClickShowLockBehavior.activeLocks = [];
  }
  createLockPair(e) {
    var o = this.context.gameView.gameObjectPool,
      n = o.get(PoolName.LockSide),
      i = o.get(PoolName.LockSide);
    n.parent = e;
    i.parent = e;
    n.zIndex = ClickShowLockBehavior.LOCK_Z_INDEX;
    i.zIndex = ClickShowLockBehavior.LOCK_Z_INDEX;
    n.opacity = 0;
    i.opacity = 0;
    n.scale = 0;
    i.scale = 0;
    ClickShowLockBehavior.activeLocks.push(n, i);
    return {
      leftLock: n,
      rightLock: i
    };
  }
  setLockPositions(e, o, n) {
    var i = e.convertToWorldSpaceAR(cc.v2(0, 0)),
      r = e.getContentSize().width * ClickShowLockBehavior.LOCK_OFFSET_RATIO,
      a = cc.v2(i.x - r, i.y),
      l = cc.v2(i.x + r, i.y),
      s = o.parent.convertToNodeSpaceAR(a),
      c = n.parent.convertToNodeSpaceAR(l);
    o.position = cc.v3(s.x, s.y, 0);
    n.position = cc.v3(c.x, c.y, 0);
  }
  createLockAnimation(e) {
    return cc.tween(e).parallel(cc.tween().to(0.125, {
      scale: 1
    }), cc.tween().to(0.125, {
      opacity: 255
    })).to(0.1, {
      angle: 13
    }).to(0.1, {
      angle: -13
    }).to(0.1, {
      angle: 13
    }).to(0.1, {
      angle: -13
    }).to(0.1, {
      angle: 13
    }).to(0.1, {
      angle: 0
    }).parallel(cc.tween().to(0.025, {
      scale: 0.9
    }).to(0.075, {
      scale: 0
    }), cc.tween().to(0.025, {
      opacity: 230
    }).to(0.075, {
      opacity: 0
    }));
  }
  @mj.traitEvent("ClickSwLkBhv_playLockAni")
  playLockAnimation(e) {
    var o = this.context.gameView.gameObjectPool;
    this.createLockAnimation(e).call(function () {
      if (cc.isValid(e)) {
        var n = ClickShowLockBehavior.activeLocks.indexOf(e);
        -1 !== n && ClickShowLockBehavior.activeLocks.splice(n, 1);
        o.push(PoolName.LockSide, e);
      }
    }).start();
  }
}