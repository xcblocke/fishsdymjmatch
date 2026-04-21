import GameUtils from '../../../Scripts/core/simulator/util/GameUtils';
import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
import BaseSprite from '../../../Scripts/gamePlay/base/ui/BaseSprite';
import CardUtil from '../../../Scripts/gamePlay/user/CardUtil';
export enum EGuideDisplayType {
  None = 0,
  Click = 1,
  Drag = 2,
  DoubleClick = 3,
}
@mj.trait
@mj.class("GuideNewTrait")
export default class GuideNewTrait extends Trait {
  _guideUI = null;
  _guideStep = -1;
  _displayType = [EGuideDisplayType.Click, EGuideDisplayType.Drag, EGuideDisplayType.DoubleClick];
  static traitKey = "GuideNew";
  onLoad() {
    super.onLoad.call(this);
    this._displayType = this.traitData.displayType;
  }
  isGuideActive() {
    var e = mj.getClassByName("GuideTrait");
    return !(!e || !e.getInstance() || true !== e.getInstance().eventEnabled || UserModel.getInstance().isGuideFinished());
  }
  getGuideStep() {
    return this.isGuideActive() ? mj.getClassByName("GuideTrait").getInstance().guideStep : -1;
  }
  showGuide(e, t, i) {
    if (i === EGuideDisplayType.Drag) {
      this.showDragGuide(e, t);
    } else {
      if (i === EGuideDisplayType.DoubleClick) {
        this.showDoubleClickGuide(e, t);
      } else {
        i === EGuideDisplayType.None && cc.isValid(this._guideUI) && (this._guideUI.getNodeHand().active = false);
      }
    }
  }
  createDragGuideNode() {
    var e = new cc.Node();
    this._dragGuideNode = e;
    var t = new cc.Node();
    this._guideUI.getNodeHand().addChild(e, -1);
    e.addComponent(cc.Sprite);
    t.parent = e;
    t.addComponent(cc.Sprite);
    this._dragGuideFlowerNode = t;
  }
  refreshDragSprite(e) {
    var t = CardUtil.getAtlasPathAndBundleName("gameplay_img_mj_up"),
      i = t.path,
      a = t.bundleName,
      o = t.fromAtlas;
    BaseSprite.refreshWithNode(this._dragGuideNode, i, o, false, a);
    this._dragGuideNode.setContentSize(e.info.tileObject.getBgContentSize());
    var n = CardUtil.getAtlasPathAndBundleName(e.info.tileObject.resName),
      r = n.path,
      d = n.bundleName,
      s = n.fromAtlas;
    BaseSprite.refreshWithNode(this._dragGuideFlowerNode, r, s, false, d);
    this._dragGuideFlowerNode.scale = e.animNode.scale;
  }
  showDragGuide(e, t) {
    var i = this;
    if (cc.isValid(this._guideUI)) {
      var a = this._guideUI.getNodeHand();
      if (cc.isValid(a)) {
        this._dragGuideNode || this.createDragGuideNode();
        this._dragGuideNode.active = true;
        this.refreshDragSprite(e);
        this._dragGuideNode.opacity = 0;
        this._dragGuideNode.scale = 1.2;
        var o = e.layerNode.convertToWorldSpaceAR(e.info.tileObject.getPosition()),
          n = this._guideUI.node.parent.convertToNodeSpaceAR(o),
          r = t.layerNode.convertToWorldSpaceAR(t.info.tileObject.getPosition()),
          s = this._guideUI.node.parent.convertToNodeSpaceAR(r);
        cc.Tween.stopAllByTarget(a);
        var c = function c() {
          if (cc.isValid(i._guideUI)) {
            a.opacity = 255;
            i._dragGuideNode.opacity = 0;
            GameUtils.playSpine(i._guideUI._handSpine, "in_drag", false, function () {
              GameUtils.playSpine(i._guideUI._handSpine, "init_drag", true);
              cc.tween(a).delay(0.1).call(function () {
                cc.isValid(i._guideUI) && (i._dragGuideNode.opacity = 153);
              }).to(0.5, {
                position: s
              }).call(function () {
                cc.isValid(i._guideUI) && (a.opacity = 0);
              }).delay(0.33).call(function () {
                cc.isValid(i._guideUI) && a.setPosition(n);
                c();
              }).start();
            });
            if (cc.isValid(i._guideUI)) {
              cc.Tween.stopAllByTarget(a);
              a.setPosition(n);
            }
          }
        };
        c();
      }
    }
  }
  showDoubleClickGuide(e, t) {
    var i = this;
    if (cc.isValid(this._guideUI)) {
      var a = this._guideUI.getNodeHand();
      if (cc.isValid(a)) {
        cc.Tween.stopAllByTarget(a);
        a.scaleX = -1;
        var o = e.layerNode.convertToWorldSpaceAR(e.info.tileObject.getPosition()),
          n = (this._guideUI.node.parent.convertToNodeSpaceAR(o), t.layerNode.convertToWorldSpaceAR(t.info.tileObject.getPosition())),
          r = this._guideUI.node.parent.convertToNodeSpaceAR(n);
        if (!this._nodeHandRight) {
          var s = new cc.Node();
          s.parent = a.parent;
          s.setPosition(cc.v2(-a.position.x, a.position.y));
          s.name = "nodeHand2";
          this._nodeHandRight = s;
        }
        this._nodeHandRight.active = true;
        this._guideUI.loadRes("prefabs/guide/guidehand", cc.Prefab, "mainRes").then(function (e) {
          if (cc.isValid(i._guideUI)) {
            i._nodeHandRight.removeAllChildren();
            var t = cc.instantiate(e);
            t.parent = i._nodeHandRight;
            var a = t.getComponent(sp.Skeleton);
            GameUtils.playSpine(a, "in", false, function () {
              GameUtils.playSpine(a, "init", true);
            });
            GameUtils.playSpine(i._guideUI._handSpine, "in", false, function () {
              GameUtils.playSpine(i._guideUI._handSpine, "init", true);
            });
          }
        });
        cc.Tween.stopAllByTarget(this._nodeHandRight);
        this._nodeHandRight.opacity = 255;
        cc.tween(this._nodeHandRight).to(0.23, {
          position: r
        }).call(function () {
          cc.isValid(i._guideUI) && i._nodeHandRight.setPosition(r);
        }).start();
      }
    }
  }
  onGuideBhv_start(e, t) {
    if (this.isGuideActive()) {
      this._guideContext = e.ins.context;
      this._guideStep = this.getGuideStep();
      t();
    } else t();
  }
  onGuide_getSelectTileId(e, t) {
    if (this.isGuideActive()) {
      this._gameController = e.args[0];
      t();
    } else t();
  }
  onGtc_isOpenTouchMove(e, t) {
    if (this.isGuideActive()) {
      t({
        isBreak: true,
        returnType: TraitCallbackReturnType.jump,
        returnVal: true
      });
    } else {
      t();
    }
  }
  onIptBTchEnd_checkIsSame(e, t) {
    if (this.isGuideActive()) {
      t({
        isBreak: true,
        returnType: TraitCallbackReturnType.jump,
        returnVal: false
      });
    } else {
      t();
    }
  }
  onGuideUI_playHandSpi(e, t) {
    var i, a;
    if (this.isGuideActive()) {
      var o = mj.getClassByName("GuideTrait"),
        n = e.ins;
      this._guideUI = n;
      if (o && o.getInstance()) {
        var d = o.getInstance().guideStep,
          s = this._displayType[d];
        if (s === EGuideDisplayType.Click) {
          t();
          return;
        }
        var l = this._gameController.tileMapObject.getCanMatchTilesHint();
        if (0 == l.length) {
          this._gameController.tileMapObject.updateCanMatchTiles();
          l = this._gameController.tileMapObject.getCanMatchTilesHint();
        }
        if (!l.length) {
          t();
          return;
        }
        var u = l[0],
          p = null === (i = u[0]) || void 0 === i ? void 0 : i.id,
          g = null === (a = u[1]) || void 0 === a ? void 0 : a.id;
        if (p && g) {
          this._gameController.tileMapObject.getTileObject(p), this._gameController.tileMapObject.getTileObject(g);
          var h = this._guideContext.getTileNodeMap().get(p),
            f = this._guideContext.getTileNodeMap().get(g);
          this.showGuide(h, f, s);
          t({
            returnType: TraitCallbackReturnType.return,
            isBreak: true
          });
          return;
        }
      }
      t();
    } else t();
  }
  onIptBase_pushClrEff(e, t) {
    if (this.isGuideActive()) {
      if (cc.isValid(this._guideUI)) {
        var i = this._guideUI.getNodeHand();
        if (cc.isValid(i)) {
          this._nodeHandRight && (this._nodeHandRight.active = false);
          this._dragGuideNode && (this._dragGuideNode.active = false);
          i.scaleX = 1;
          i.scaleY = 1;
          t();
        } else t();
      } else t();
    } else t();
  }
  onInputGuide_pushEfData(e, t) {
    if (this.isGuideActive() && cc.isValid(this._guideUI)) {
      var i = this._guideUI.getNodeHand();
      if (cc.isValid(i)) {
        var a = this._displayType[this.getGuideStep()];
        if (a !== EGuideDisplayType.None && a !== EGuideDisplayType.Click) {
          var o = e.args[0],
            n = e.args[1];
          if (o.isSelect || n.isSelect) {
            i.scale = 0;
            a === EGuideDisplayType.DoubleClick && this._nodeHandRight && (this._nodeHandRight.scale = 0);
            t({
              returnType: TraitCallbackReturnType.return,
              isBreak: true
            });
          } else {
            if (a === EGuideDisplayType.Drag) {
              var d = this._guideContext.getTileNodeMap().get(o.id),
                s = this._guideContext.getTileNodeMap().get(n.id);
              this.showDragGuide(d, s);
              i.scale = 1;
            } else if (a === EGuideDisplayType.DoubleClick) {
              this._nodeHandRight && (this._nodeHandRight.scale = 1);
              i.scale = 1;
              i.scaleX = -1;
              i.opacity = 255;
            }
            t();
          }
        } else t();
      } else t();
    } else t();
  }
}