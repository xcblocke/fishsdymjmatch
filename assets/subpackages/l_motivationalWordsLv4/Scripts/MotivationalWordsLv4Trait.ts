import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import ControllerManager from '../../../Scripts/framework/manager/ControllerManager';
import BaseUI from '../../../Scripts/framework/ui/BaseUI';
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import { EInsertType } from '../../../Scripts/constant/BehaviorsEnum';
import { MotivationalWordsEffectEffect } from '../../../Scripts/MotivationalWordsEffectEffect';
import { MotivationalWordsEffect } from '../../../Scripts/MotivationalWordsEffect';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.trait
@mj.class("MotivationalWordsLv4Trait")
export default class MotivationalWordsLv4Trait extends Trait {
  _triggerPoints = [];
  _isLoaded = false;
  _lightNode = null;
  _isLoadingLight = false;
  _url = "prefabs/EffectMotivationalWordsItem";
  _lightUrl = "prefabs/EffectMotivationalLights";
  _gameType = MjGameType.None;
  static traitKey = "MotivationalWordsLv4";
  static MotivationalWordsLv4 = "MotivationalWordsLv4";
  onLoad() {
    super.onLoad.call(this);
    this._trigSteps = this._traitData.trigSteps || [2, 1, 1, 5];
    for (var e = 0, i = 0; i < this._trigSteps.length; i++) {
      e += this._trigSteps[i];
      this._triggerPoints.push(e);
    }
  }
  onInitViewBhv_crtTls(t, e) {
    var i, r;
    this._gameType = null === (r = null === (i = t.ins) || void 0 === i ? void 0 : i._context) || void 0 === r ? void 0 : r.gameType;
    this._isLoaded = false;
    e();
  }
  loadResPools() {
    if (!this._isLoaded) {
      this._isLoaded = true;
      var t = ControllerManager.getInstance().getControByName("MainGameController");
      t && t.loadRes(this._url, cc.Prefab, "l_motivationalWordsLv4").then(function (e) {
        var r = Array.isArray(e) ? e[0] : e;
        r && t.gameObjectPool.createObjectPool(MotivationalWordsLv4Trait.MotivationalWordsLv4, r, 1);
      }).catch(function () {});
    }
  }
  calcLevel(t) {
    for (var e = 0; e < this._triggerPoints.length; e++) if (t === this._triggerPoints[e]) return e + 1;
    var i = this._triggerPoints[this._triggerPoints.length - 1];
    return t > i && (t - i) % this._trigSteps[this._trigSteps.length - 1] == 0 ? 4 : 0;
  }
  getCurrentTier(t) {
    for (var e = 0; e < this._triggerPoints.length; e++) {
      if (t < this._triggerPoints[e]) return e;
      if (t === this._triggerPoints[e]) return e + 1;
    }
    return t > this._triggerPoints[this._triggerPoints.length - 1] ? 4 : 0;
  }
  onMotivWdsChk_canShow(t, e) {
    var i;
    if (this._gameType == MjGameType.Normal) {
      if (UserModel.getInstance().isGuideFinished()) {
        this.loadResPools();
        var r = t.ins.context,
          o = (null === (i = null == r ? void 0 : r.getGameData()) || void 0 === i ? void 0 : i.getComboNum()) || 0,
          a = this.calcLevel(o);
        e(a > 0 ? {
          isBreak: true,
          returnType: TraitCallbackReturnType.return,
          returnVal: {
            isShow: true,
            index: a
          }
        } : {
          isBreak: true,
          returnType: TraitCallbackReturnType.return,
          returnVal: {
            isShow: false,
            index: 0
          }
        });
      } else e({
        isBreak: true,
        returnType: TraitCallbackReturnType.return,
        returnVal: {
          isShow: false,
          index: 0
        }
      });
    } else e();
  }
  onMotivWordsBhv_nodeName(t, e) {
    if (this._gameType == MjGameType.Normal) {
      e({
        returnType: TraitCallbackReturnType.jump,
        returnVal: MotivationalWordsLv4Trait.MotivationalWordsLv4
      });
    } else {
      e();
    }
  }
  onMotivWordsBhv_start(t, e) {
    var i, r, o;
    if (this._gameType == MjGameType.Normal) {
      var a = t.args[0];
      3 === ((null === (i = null == a ? void 0 : a.data) || void 0 === i ? void 0 : i.index) || 0) && this.playLightEffect(null === (o = null === (r = t.ins) || void 0 === r ? void 0 : r.context) || void 0 === o ? void 0 : o.gameView);
      e();
    } else e();
  }
  onComboChk_canBreakCb(t, e) {
    if (this._gameType == MjGameType.Normal) {
      true === t.beforReturnVal && this.removeLightEffect();
      e();
    } else e();
  }
  onClrNormHlp_chkBombMotiv(t, e) {
    this.handleBombMotivationalWords(t);
    e({
      returnType: TraitCallbackReturnType.return,
      isBreak: true
    });
  }
  playLightEffect(t) {
    var e = this;
    if (!(this._isLoadingLight || this._lightNode && cc.isValid(this._lightNode) && this._lightNode.parent)) {
      this._lightNode = null;
      var i = this.getEffectNode(t);
      if (i) {
        this._isLoadingLight = true;
        BaseUI.createUI(this._lightUrl, "l_motivationalWordsLv4").then(function (t) {
          e._isLoadingLight = false;
          t.parent = i;
          t.position = cc.v3(0, 0, 0);
          t.active = true;
          e._lightNode = t;
        });
      }
    }
  }
  getEffectNode(t) {
    if (!t) return null;
    var e = t.effectNode;
    return e && cc.isValid(e) ? e : null;
  }
  removeLightEffect() {
    this._lightNode && cc.isValid(this._lightNode) && this._lightNode.destroy();
    this._lightNode = null;
    this._isLoadingLight = false;
  }
  onClearBhv_matchAud(t, e) {
    var i, r, o;
    if (this._gameType == MjGameType.Normal) {
      var a = t.ins,
        n = null === (r = null === (i = null == a ? void 0 : a.context) || void 0 === i ? void 0 : i.getTileMapObject) || void 0 === r ? void 0 : r.call(i);
      if (n) {
        var l = n.gameContext;
        if (l) {
          var c = (null === (o = l.getGameData()) || void 0 === o ? void 0 : o.getComboNum()) || 0;
          if (c < this._triggerPoints[0]) e();else {
            var u = this.getCurrentTier(c);
            if (0 !== u) {
              var p = 61 + u;
              mj.audioManager.playEffect(p);
              e({
                isBreak: true,
                returnType: TraitCallbackReturnType.return
              });
            } else e();
          }
        } else e();
      } else e();
    } else e();
  }
  handleBombMotivationalWords(t) {
    var e = t.args[0],
      i = t.args[1],
      r = t.ins,
      o = r._gameContext,
      a = r._baseInput;
    if (o && a) {
      var n = o.motivationalWordsChecker.canShowMotivationalWords(),
        s = n.isShow,
        l = n.index;
      if (s && e && e.length >= 2) {
        var c = o.getGameData().getComboNum(),
          f = new MotivationalWordsEffect({
            index: l,
            comboNum: c,
            tileId1: e[1],
            tileId2: e[0]
          });
        a.pushEffect(f, EInsertType.Parallel, i, false);
        var h = new MotivationalWordsEffectEffect({
          index: l
        });
        a.pushEffect(h, EInsertType.Parallel, i, false);
      }
    }
  }
}