import Trait from '../../../Scripts/framework/trait/Trait';
import OutOfMatchesUI from './OutOfMatchesUI';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.trait
@mj.class("OutOfMatchesTrait")
export default class OutOfMatchesTrait extends Trait {
  animationMode = 1;
  outOfMatchesUI = null;
  _minShuffleCount = 0;
  static traitKey = "OutOfMatches";
  onLoad() {
    super.onLoad.call(this);
    this._traitData && this._traitData.animationMode && (this.animationMode = this._traitData.animationMode);
    this._traitData && void 0 !== this._traitData.minShuffleCount && (this._minShuffleCount = this._traitData.minShuffleCount);
  }
  onFailBhv_start(t, e) {
    var o = t.ins;
    if (o && o.context) {
      var n = o.context,
        r = n.gameView;
      if (cc.isValid(r) && cc.isValid(r.nodeTopEffectRoot)) {
        if (this._minShuffleCount > 0) {
          if (UserModel.getInstance().getGameDataByGameType(n.gameType).getShuffleNums() < this._minShuffleCount) {
            e();
            return;
          }
        }
        this.playDeadAnimation(o, r.nodeTopEffectRoot);
        e();
      } else e();
    } else e();
  }
  playDeadAnimation(t, e) {
    var o = this;
    if (1 === this.animationMode) Promise.all([this.preloadOutOfMatchesUI(e)]).then(function () {
      o.grayoutAllTiles(t);
      return o.playAllAnimations(t, false);
    }).then(function () {
      o.resetTiles(t);
      o.emitAnimationCompleteEvent();
      o.closeOutOfMatchesUI();
    }).catch(function () {
      o.closeOutOfMatchesUI();
      o.emitAnimationCompleteEvent();
    });else if (2 === this.animationMode) {
      this.grayoutAllTiles(t);
      Promise.all([this.preloadOutOfMatchesUI(e)]).then(function () {
        return o.playAllAnimations(t, true);
      }).then(function () {
        o.resetTiles(t);
        o.emitAnimationCompleteEvent();
        o.closeOutOfMatchesUI();
      }).catch(function () {
        o.closeOutOfMatchesUI();
        o.emitAnimationCompleteEvent();
      });
    }
  }
  dropSingleTile(t) {
    if (t && t.cardNode && cc.isValid(t.cardNode)) {
      var e = t.cardNode,
        o = t.shadowCardNode,
        n = Math.random() > 0.5 ? 180 : -180,
        r = cc.view.getVisibleSize().height;
      cc.tween(e).parallel(cc.tween().by(0.66, {
        y: -r
      }), cc.tween().by(0.66, {
        angle: n
      })).start();
      o && cc.isValid(o) && cc.tween(o).parallel(cc.tween().by(0.66, {
        y: -r
      }), cc.tween().by(0.66, {
        angle: n
      })).start();
    }
  }
  grayoutAllTiles(t) {
    try {
      if (!t || !t.context) return;
      var e = t.context.getTileNodeMap();
      if (!e) return;
      e.forEach(function (t) {
        if (t && t.cardNode && cc.isValid(t.cardNode)) {
          var e = t.imgCardBg,
            o = t.imgCard;
          cc.tween(e).to(0.5, {
            color: cc.color(107, 107, 107)
          }, {
            easing: "sineInOut"
          }).start();
          cc.tween(o).to(0.5, {
            color: cc.color(107, 107, 107)
          }, {
            easing: "sineInOut"
          }).start();
        }
      });
    } catch (t) {}
  }
  delay(t) {
    return new Promise(function (e) {
      setTimeout(function () {
        e();
      }, t);
    });
  }
  preloadOutOfMatchesUI(t) {
    var e = this;
    return new Promise(function (o, n) {
      if (e.outOfMatchesUI && cc.isValid(e.outOfMatchesUI.node)) {
        o();
      } else {
        OutOfMatchesUI.createUI().then(function (r) {
          if (r) {
            var i = r.getComponent(OutOfMatchesUI);
            if (i) {
              if (cc.isValid(t)) {
                t.addChild(r);
                r.opacity = 0;
                e.outOfMatchesUI = i;
                o();
              } else {
                r.destroy();
                n(new Error("nodeTopEffectRoot 无效"));
              }
            } else {
              r.destroy();
              n(new Error("获取UI组件失败"));
            }
          } else n(new Error("创建UI失败"));
        }).catch(function (t) {
          n(t);
        });
      }
    });
  }
  playAllAnimations(t, e) {
    if (!t || !t.context) return Promise.resolve();
    if (!this.outOfMatchesUI || !cc.isValid(this.outOfMatchesUI.node)) return Promise.resolve();
    var o = [];
    o.push(this.playUIAnimation());
    e && o.push(this.dropAllTilesAsync(t));
    return Promise.all(o).then(function () {});
  }
  playUIAnimation() {
    var t = this;
    return new Promise(function (e) {
      t.outOfMatchesUI.node.opacity = 255;
      t.outOfMatchesUI.playAnimation(function () {
        e();
      });
    });
  }
  dropAllTilesAsync(t) {
    var e = this;
    return new Promise(function (o) {
      try {
        if (!t || !t.context) {
          o();
          return;
        }
        var n = t.context.getTileNodeMap();
        if (!n) {
          o();
          return;
        }
        var r = [];
        n.forEach(function (t) {
          t && t.tileObject && cc.isValid(t.cardNode) && r.push({
            tileNode: t,
            row: t.tileObject.gridPosY,
            layer: t.tileObject.layer
          });
        });
        if (0 === r.length) {
          o();
          return;
        }
        var i = Math.max.apply(Math, [...r.map(function (t) {
            return t.row;
          })]),
          a = Math.max.apply(Math, [...r.map(function (t) {
            return t.layer;
          })]),
          s = 1000 * (0.03 * (i - Math.min.apply(Math, [...r.map(function (t) {
            return t.row;
          })])) + 0.1 * a + 0.66);
        r.forEach(function (t) {
          var o = t.tileNode,
            n = t.row,
            r = t.layer;
          setTimeout(function () {
            e.dropSingleTile(o);
          }, 1000 * (0.03 * (i - n) + 0.1 * r));
        });
        setTimeout(function () {
          o();
        }, s);
      } catch (t) {
        o();
      }
    });
  }
  closeOutOfMatchesUI() {
    if (this.outOfMatchesUI && cc.isValid(this.outOfMatchesUI.node)) {
      this.outOfMatchesUI.node.destroy();
      this.outOfMatchesUI = null;
    }
  }
  resetTiles(t) {
    if (t && t.context) {
      var e = t.context.getTileNodeMap();
      e && e.forEach(function (t) {
        if (t && t.cardNode && cc.isValid(t.cardNode)) {
          cc.Tween.stopAllByTarget(t.cardNode);
          cc.Tween.stopAllByTarget(t.shadowCardNode);
          cc.Tween.stopAllByTarget(t.imgCardBg);
          cc.Tween.stopAllByTarget(t.imgCard);
          t.cardNode.angle = 0;
          t.shadowCardNode.angle = 0;
          t.imgCardBg.color = cc.color(255, 255, 255);
          t.imgCard.color = cc.color(255, 255, 255);
        }
      });
    }
  }
  emitAnimationCompleteEvent() {
    mj.EventManager.emit("OutOfMatches_AnimationComplete");
  }
}