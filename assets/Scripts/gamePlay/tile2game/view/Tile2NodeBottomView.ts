import { EGameInputEnum, EShuffleFrom } from '../../../simulator/constant/GameInputEnum';
import { GameInteraction } from '../../../GameInteraction/GameInteraction';
import BaseUI from '../../../framework/ui/BaseUI';
import { DotGameBtnClick, EBoardClickType } from '../../../dot/DGameBtnClick';
import { EItemType } from '../../../user/IUserData';
@mj.class
export default class Tile2NodeBottomView extends BaseUI {
  _btnShuffle = null;
  _btnShuffleProp = null;
  _btnHitTips = null;
  _btnHitTipsProp = null;
  _btnRevert = null;
  _btnRevertProp = null;
  static prefabUrl = "prefabs/game/Tile2nodeBottom";
  @mj.traitEvent("T2NodeBtmVw_onLoad")
  onLoad() {
    var t, o, n;
    super.onLoad.call(this);
    this._btnShuffle = this.node.getChildByName("btnShuffle");
    this._btnShuffleProp = null === (t = this._btnShuffle) || void 0 === t ? void 0 : t.getChildByName("propCornerItem");
    this._btnHitTips = this.node.getChildByName("btnPropHint");
    this._btnHitTipsProp = null === (o = this._btnHitTips) || void 0 === o ? void 0 : o.getChildByName("propCornerItem");
    this._btnRevert = this.node.getChildByName("btnPropRevert");
    this._btnRevertProp = null === (n = this._btnRevert) || void 0 === n ? void 0 : n.getChildByName("propCornerItem");
    if (this._btnShuffleProp) {
      this._btnShuffleProp.getChildByName("nodeNum").active = false;
      this._btnShuffleProp.getChildByName("nodeVideo").active = false;
    }
    if (this._btnHitTipsProp) {
      this._btnHitTipsProp.getChildByName("nodeNum").active = false;
      this._btnHitTipsProp.getChildByName("nodeVideo").active = false;
    }
    if (this._btnRevertProp) {
      this._btnRevertProp.getChildByName("nodeNum").active = false;
      this._btnRevertProp.getChildByName("nodeVideo").active = false;
    }
    this._btnShuffle && this.OnButtonClick(this._btnShuffle, this.onBtnShuffle.bind(this));
    this._btnHitTips && this.OnButtonClick(this._btnHitTips, this.onBtnHitTips.bind(this));
    this._btnRevert && this.OnButtonClick(this._btnRevert, this.onBtnRevert.bind(this));
  }
  updatePropNode(e, t) {
    if (e) {
      e.active = true;
      if (this.isPropUnlimit(e)) {
        this.setPropUnlimit(e);
      } else {
        if (this.isPropLocked(e)) {
          this.setPropLocked(e);
        } else {
          this.setUnlockState(e, t);
        }
      }
    }
  }
  @mj.traitEvent("T2NodeBtmVw_isPropUnlimit")
  isPropUnlimit() {
    return false;
  }
  @mj.traitEvent("T2NodeBtmVw_isPropLocked")
  isPropLocked() {
    return false;
  }
  setUnlockState(e, t) {
    var o = t <= 0;
    e.getChildByName("nodeNum").active = !o;
    e.getChildByName("nodeNum").getChildByName("labelNum").getComponent(cc.Label).string = t.toString();
    e.getChildByName("nodeVideo").active = o;
    e.getChildByName("nodeLock").active = false;
    e.getChildByName("nodeUnlimit").active = false;
    e.parent.getChildByName("GrayMask").active = false;
  }
  setPropUnlimit(e) {
    e.getChildByName("nodeNum").active = false;
    e.getChildByName("nodeVideo").active = false;
    e.getChildByName("nodeLock").active = false;
    e.getChildByName("nodeUnlimit").active = true;
    e.parent.getChildByName("GrayMask").active = false;
  }
  setPropLocked(e) {
    e.getChildByName("nodeNum").active = false;
    e.getChildByName("nodeVideo").active = false;
    e.getChildByName("nodeLock").active = true;
    e.getChildByName("nodeUnlimit").active = false;
    e.parent.getChildByName("GrayMask").active = true;
  }
  updateShuffleNum(e) {
    this.updatePropNode(this._btnShuffleProp, e);
  }
  updateHitTipsNum(e) {
    this.updatePropNode(this._btnHitTipsProp, e);
  }
  updateRevertNum(e) {
    this.updatePropNode(this._btnRevertProp, e);
  }
  onBtnShuffle() {
    var e, t;
    if (null === (t = null === (e = this.delegate) || void 0 === e ? void 0 : e.isDisplaying) || void 0 === t || !t.call(e)) {
      DotGameBtnClick.dotGame(EBoardClickType.Shuffle);
      if (this.isPropLocked(this._btnShuffleProp)) {
        this.showLockTips(EItemType.Shuffle);
      } else {
        GameInteraction.input({
          inputType: EGameInputEnum.Tile2Shuffle,
          from: EShuffleFrom.Normal,
          isFree: false
        });
      }
    }
  }
  onBtnHitTips() {
    var e, t;
    if (null === (t = null === (e = this.delegate) || void 0 === e ? void 0 : e.isDisplaying) || void 0 === t || !t.call(e)) {
      DotGameBtnClick.dotGame(EBoardClickType.Hint);
      if (this.isPropLocked(this._btnHitTipsProp)) {
        this.showLockTips(EItemType.Hint);
      } else {
        GameInteraction.input({
          inputType: EGameInputEnum.Tile2HitTips
        });
      }
    }
  }
  onBtnRevert() {
    var e, t;
    if (null === (t = null === (e = this.delegate) || void 0 === e ? void 0 : e.isDisplaying) || void 0 === t || !t.call(e)) {
      DotGameBtnClick.dotGame(EBoardClickType.Undo);
      if (this.isPropLocked(this._btnRevertProp)) {
        this.showLockTips(EItemType.Undo);
      } else {
        GameInteraction.input({
          inputType: EGameInputEnum.Tile2Revert
        });
      }
    }
  }
  @mj.traitEvent("T2NodeBtmVw_showLockTips")
  showLockTips() {}
}