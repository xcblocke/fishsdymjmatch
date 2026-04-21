import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import BaseSprite from '../../../Scripts/gamePlay/base/ui/BaseSprite';
import { EShuffleFrom } from '../../../Scripts/simulator/constant/GameInputEnum';
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.trait
@mj.class("UnlimitPropTrait")
export default class UnlimitPropTrait extends Trait {
  _config = {
    levels: []
  };
  _currentLevelId = 0;
  _btnShuffleProp = null;
  _btnHitTipsProp = null;
  _versionNumber = 0;
  static traitKey = "UnlimitProp";
  onLoad() {
    super.onLoad.call(this);
    this._config = {
      levels: this._traitData.levels || []
    };
    this._versionNumber = this._traitData.versionNumber || 0;
  }
  isNormalMode() {
    return UserModel.getInstance().getCurrentGameType() === MjGameType.Normal;
  }
  isUnlimitLevel() {
    if (!this.isNormalMode()) return false;
    if (!this._config.levels || 0 === this._config.levels.length) return false;
    if (1 == this._versionNumber) {
      var e = UserModel.getInstance().normalData;
      return this._config.levels.includes(e.getLevelId());
    }
    return this._config.levels.includes(this._currentLevelId);
  }
  onIptSetLv_setData(e, t) {
    if (1 != this._versionNumber) {
      var i = e.args[0];
      i && i.levelId && (this._currentLevelId = i.levelId);
      t();
    } else {
      if (!this.isNormalMode()) {
        t();
        return;
      }
      UserModel.getInstance().normalData.getLevelId();
      this.isUnlimitLevel() || this.restoreButtonImages();
      t();
    }
  }
  onIptShuffle_exec(e, t) {
    var i;
    if (null !== (i = e.args[0]) && void 0 !== i && i.isFree) t();else if (this.isUnlimitLevel()) {
      e.args[0] = e.args[0] || {};
      e.args[0].from = EShuffleFrom.Free;
      t();
      if (1 == this._versionNumber) {
        var r = mj.getClassByName("TaskTrait");
        r && r.getInstance() && true === r.getInstance().eventEnabled && r.getInstance().updateItemTaskProgress(1001);
      }
    } else t();
  }
  onGameData_chgHitTips(e, t) {
    if (this.isUnlimitLevel()) {
      var i = e.args[0],
        r = e.args[1];
      if (i < 0 && !r) {
        t({
          isBreak: true,
          returnType: TraitCallbackReturnType.return
        });
      } else {
        t();
      }
    } else t();
  }
  onIptHitTips_exec(e, t) {
    if (this.isUnlimitLevel()) {
      var i = e.ins;
      if (i.gameController.gameContext.getCanHitTips().length) t();else {
        var r = i.gameController.tileMapObject.getCanMatchTilesHint();
        if (0 == r.length) {
          i.gameController.tileMapObject.updateCanMatchTiles();
          r = i.gameController.tileMapObject.getCanMatchTilesHint();
        }
        if (r.length > 0) {
          var n = r[Math.floor(Math.random() * r.length)],
            o = (n = n.slice(0, 2))[0].id,
            s = n[1].id;
          i.gameContext.trackerModifier.triggerHint(o, s);
          i.gameController.tileMapObject.getTileObject(o).isHint = true;
          i.gameController.tileMapObject.getTileObject(s).isHint = true;
          i.gameController.gameContext.setCanHitTips([o, s]);
          i.pushHitTipsEffect(o, s, false);
          if (1 == this._versionNumber) {
            var a = mj.getClassByName("TaskTrait");
            a && a.getInstance() && true === a.getInstance().eventEnabled && a.getInstance().updateItemTaskProgress(1002);
          }
        }
        t();
      }
    } else t();
  }
  onUdShufflePropBhv_start(e, t) {
    var i, r;
    if (this.isNormalMode()) {
      if (this.isUnlimitLevel()) {
        var n = null === (i = e.ins.context) || void 0 === i ? void 0 : i.gameView;
        if (null === (r = null == n ? void 0 : n.gameUI) || void 0 === r ? void 0 : r.btnShuffleProp) {
          this._btnShuffleProp = n.gameUI.btnShuffleProp;
          this.changeButtonImage(this._btnShuffleProp, "texture/gamePlay/gameplay_icon_wuQiong", "shuffle");
        }
      } else 1 == this._versionNumber && this.restoreButtonImages();
      t();
    } else t();
  }
  onUdHitTipsPropBhv_start(e, t) {
    var i, r;
    if (this.isNormalMode()) {
      if (this.isUnlimitLevel()) {
        var n = null === (i = e.ins.context) || void 0 === i ? void 0 : i.gameView;
        if (null === (r = null == n ? void 0 : n.gameUI) || void 0 === r ? void 0 : r.btnHitTipsProp) {
          this._btnHitTipsProp = n.gameUI.btnHitTipsProp;
          this.changeButtonImage(this._btnHitTipsProp, "texture/gamePlay/gameplay_icon_wuQiong", "hitTips");
        }
      } else 1 == this._versionNumber && this.restoreButtonImages();
      t();
    } else t();
  }
  onGameUI_updateHitTipsProp(e, t) {
    if (this.isNormalMode()) {
      if (this.isUnlimitLevel()) {
        if (1 == this._versionNumber) {
          var i = e.ins;
          this._btnHitTipsProp = null == i ? void 0 : i.btnHitTipsProp;
        }
        this.changeButtonImage(this._btnHitTipsProp, "texture/gamePlay/gameplay_icon_wuQiong", "hitTips");
      } else 1 == this._versionNumber && this.restoreButtonImages();
      t();
    } else t();
  }
  onGameUI_updateShuffleProp(e, t) {
    if (this.isNormalMode()) {
      if (this.isUnlimitLevel()) {
        if (1 == this._versionNumber) {
          var i = e.ins;
          this._btnShuffleProp = null == i ? void 0 : i.btnShuffleProp;
        }
        this.changeButtonImage(this._btnShuffleProp, "texture/gamePlay/gameplay_icon_wuQiong", "shuffle");
      } else 1 == this._versionNumber && this.restoreButtonImages();
      t();
    } else t();
  }
  changeButtonImage(e, t) {
    if (cc.isValid(e)) {
      var i = e.getChildByName("nodeNum").getComponent(cc.Sprite);
      i && (i.node.active = true);
      var r = e.getChildByName("nodeVideo");
      r && (r.active = false);
      1 == this._versionNumber && i && (i.spriteFrame = null);
      BaseSprite.refreshWithNode(i.node, t, false);
      i.node.getChildByName("labelNum").active = false;
    }
  }
  restoreButtonImages() {
    if (cc.isValid(this._btnShuffleProp) && (e = this._btnShuffleProp.getChildByName("nodeNum").getComponent(cc.Sprite))) {
      BaseSprite.refreshWithNode(e.node, "texture/gamePlay/gameplay_icon_time", false);
      e.node.getChildByName("labelNum").active = true;
      1 == this._versionNumber || (e.node.active = false);
    }
    if (cc.isValid(this._btnHitTipsProp)) {
      var e;
      if (e = this._btnHitTipsProp.getChildByName("nodeNum").getComponent(cc.Sprite)) {
        BaseSprite.refreshWithNode(e.node, "texture/gamePlay/gameplay_icon_time", false);
        e.node.getChildByName("labelNum").active = true;
        1 == this._versionNumber || (e.node.active = false);
      }
    }
    if (1 == this._versionNumber) ;else {
      this._btnShuffleProp = null;
      this._btnHitTipsProp = null;
    }
  }
  onWinVw_showWinVw(e, t) {
    this.isUnlimitNextLevel() || this.restoreButtonImages();
    t();
  }
  isUnlimitNextLevel() {
    if (!this.isNormalMode()) return false;
    if (!this._config.levels || 0 === this._config.levels.length) return false;
    if (1 == this._versionNumber) {
      var e = UserModel.getInstance().normalData;
      return this._config.levels.includes(e.getCurrentLevelId() + 1);
    }
    return this._config.levels.includes(this._currentLevelId + 1);
  }
  onFailVw_show(e, t) {
    t();
  }
  onFailVw_initBtnUse(e, t) {
    if (this.isUnlimitLevel()) {
      var i = e.ins;
      i && i.nodeNum && (i.nodeNum.active = false);
    }
    t();
  }
}