import I18NStrings from '../framework/data/I18NStrings';
import BaseUI from '../framework/ui/BaseUI';
import { EBehaviorEnum } from '../simulator/constant/GameInputEnum';
import { FailMaskNodeStateAni } from '../tilenodes/fsm/ani/FailMaskNodeStateAni';
import { GameBehaviorsBase } from './GameBehaviorsBase';
export class ClassicBeforeFailBehavior extends GameBehaviorsBase {
  onAbort() {
    super.onAbort.call(this);
    this.context.gameView.setSwallowEventNodeActive(false);
  }
  start() {
    var e = this;
    this.context.gameView.setSwallowEventNodeActive(true);
    this.showView(function () {
      e.context.gameView.setSwallowEventNodeActive(false);
      e.finish(EBehaviorEnum.Success);
    });
  }
  showView(e) {
    var t = this;
    BaseUI.createUI("prefabs/game/ClassicBeforeFail").then(function (o) {
      if (o && cc.isValid(o)) {
        o.parent = t.context.gameView.nodeTopEffectRoot;
        var n = o.getChildByName("LabelText");
        if (n) {
          n.getComponent(cc.Label).string = I18NStrings.get("MahjongTiles_Revive_Title_1");
          n.opacity = 0;
        }
        var i = o.getChildByName("showbg");
        i && (i.opacity = 0);
        t.playFailAnimation(o, n, i, e);
      }
    });
  }
  playFailAnimation(e, t, o, n) {
    this.playTilesGrayAnimation(0.4);
    this.playBgFadeIn(o, 0.4, 178);
    this.playLabelScaleAndFadeIn(t, 0.4, function () {});
    cc.tween(e).delay(0.9).call(function () {
      null == n || n();
    }).to(0.3, {
      opacity: 0
    }, {
      easing: cc.easing.sineInOut
    }).call(function () {
      cc.isValid(e) && e.destroy();
    }).start();
  }
  playTilesGrayAnimation(e = 0.4) {
    var t = this.context.getTileNodeManager();
    if (t) {
      var o = t.getTileNodes();
      o && 0 !== o.length && o.forEach(function (e) {
        if (e && cc.isValid(e.tileNode)) {
          var t = new FailMaskNodeStateAni(e.tileNode, e, 0);
          e.attachNodeStateAnis([t]);
          e.playAttachEnterAni(null, function () {});
        }
      });
    }
  }
  playBgFadeIn(e, t = 0.4, o = 178) {
    if (e && cc.isValid(e)) {
      e.opacity = 0;
      cc.tween(e).to(t, {
        opacity: o
      }, {
        easing: cc.easing.sineInOut
      }).start();
    }
  }
  playLabelScaleAndFadeIn(e, t = 0.4, o?) {
    if (e && cc.isValid(e)) {
      e.opacity = 0;
      cc.tween(e).to(0, {
        scale: 0,
        opacity: 0
      }).to(t, {
        scale: 1,
        opacity: 255
      }, {
        easing: cc.easing.backOut
      }).start();
    } else null == o || o();
  }
}