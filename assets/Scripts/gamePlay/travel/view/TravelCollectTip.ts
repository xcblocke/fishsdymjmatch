import { EAudioID } from '../../../core/simulator/constant/GameTypeEnums';
import Adapter from '../../../component/Adapter';
import BaseUI from '../../../framework/ui/BaseUI';
@mj.class
export default class TravelCollectTip extends BaseUI {
  @mj.node("Content")
  contentNode: "Content" = null;
  @mj.node("Mask")
  maskNode: "Mask" = null;
  _isPlayFlyAudio = false;
  static prefabUrl = "prefabs/journey/JourneyCollectTip";
  onLoad() {
    super.onLoad.call(this);
  }
  playShowAnim(e, t, o) {
    var n = this;
    if (cc.isValid(this.contentNode)) {
      Adapter.ignoreSafeRect(this.maskNode);
      this._isPlayFlyAudio = false;
      this.playPopAudio();
      this.contentNode.scale = 0.01;
      this.contentNode.opacity = 0;
      cc.Tween.stopAllByTarget(this.contentNode);
      var i = cc.tween().to(0.26, {
          scale: 1
        }, {
          easing: cc.easing.backOut
        }),
        r = cc.tween().to(0.16, {
          opacity: 255
        }, {
          easing: cc.easing.circOut
        }),
        a = cc.tween().to(0.17, {
          scale: 0
        }, {
          easing: cc.easing.elasticInOut
        }),
        s = cc.tween().to(0.17, {
          opacity: 0
        }, {
          easing: cc.easing.circOut
        }),
        c = this;
      cc.tween(this.contentNode).parallel(i, r).delay(0.57).parallel(a, s).call(function () {
        null == o || o();
      }).delay(0.5).call(function () {
        c.node.destroy();
      }).start();
      this.maskNode.opacity = 0;
      cc.Tween.stopAllByTarget(this.maskNode);
      cc.tween(this.maskNode).to(0.16, {
        opacity: 153
      }).delay(0.67).to(0.17, {
        opacity: 0
      }).start();
      for (var u = cc.tween().to(0.14, {
          scale: 1.3
        }, {
          easing: cc.easing.circOut
        }).to(0.2, {
          scale: 1
        }, {
          easing: cc.easing.cubicIn
        }), p = function p(o) {
          var i = e[o];
          if (!cc.isValid(i) || !cc.isValid(i.parent)) return "continue";
          var r = t[o],
            a = f.contentNode.convertToWorldSpaceAR(cc.Vec3.ZERO),
            l = i.parent.convertToNodeSpaceAR(a),
            s = i._designPos,
            c = cc.v3(s.x, l.y - 50, 0);
          i.active = true;
          i.position = c;
          i.scale = 0;
          i.opacity = 0;
          cc.Tween.stopAllByTarget(i);
          var p = cc.tween().to(0.34, {
            position: s
          });
          cc.tween(i).to(0.26, {
            scale: 1.16,
            opacity: 255
          }, {
            easing: cc.easing.backOut
          }).delay(0.4).delay(0.03 * o).call(function () {
            n.playFlyAudio(r);
          }).parallel(u.clone(), p).start();
        }, f = this, d = 0; d < e.length; d++) p(d);
    } else null == o || o();
  }
  playPopAudio() {
    mj.audioManager.playEffect(EAudioID.Blank);
  }
  playFlyAudio(e) {
    if (!this._isPlayFlyAudio) {
      this._isPlayFlyAudio = true;
      var t = 0;
      switch (e) {
        case "Yoga":
        case "Normal":
        case "ColorCard":
        case "RollCard":
        default:
          t = EAudioID.Targetfly3;
      }
      mj.audioManager.playEffect(t);
    }
    var o = 0;
    switch (e) {
      case "RollCard":
        o = EAudioID.Targetfly2;
        break;
      case "Yoga":
        o = EAudioID.CollectionShow;
        break;
      case "ColorCard":
        o = EAudioID.Targetfly1;
        break;
      case "Normal":
      case "RankCard":
      default:
        o = EAudioID.Targetfly1;
    }
    mj.audioManager.playEffect(o);
  }
}