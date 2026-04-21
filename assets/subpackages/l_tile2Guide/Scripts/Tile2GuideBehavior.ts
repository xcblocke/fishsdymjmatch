import { EBehaviorEnum } from '../../../Scripts/simulator/constant/GameInputEnum';
import { GameBehaviorsBase } from '../../../Scripts/base/GameBehaviorsBase';
import Tile2GuideUI from './Tile2GuideUI';
export class Tile2GuideBehavior extends GameBehaviorsBase {
  @mj.traitEvent("Tile2GuideBhv_start")
  start(e) {
    var t = e.data,
      i = t.status,
      o = t.boardTileId,
      a = t.slotbarTileId,
      r = t.text,
      l = t.guideStep,
      s = t.isShowHand,
      d = t.isShowSkip,
      c = t.isGrayGuide,
      u = t.isShowBottom,
      p = t.isShowSet,
      h = t.textPos,
      f = this.context.gameView,
      v = f.nodeTopView,
      _ = f.nodeBottomView,
      T = f.guideRootNode;
    switch (i) {
      case "init":
        void 0 !== u && _ && cc.isValid(_.node) && (_.node.active = !!u);
        void 0 !== p && v && v.btnSettings && cc.isValid(v.btnSettings) && (v.btnSettings.active = !!p);
        break;
      case "active":
        c && this._showDim(o, a);
        this._showGuideUI(T, o, r, null != l ? l : 0, !!s, !!d, h);
        break;
      case "hide":
        this._hideDim();
        this._hideGuideHand(T);
        break;
      case "finished":
        _ && (_.node.active = true);
        v && v.btnSettings && (v.btnSettings.active = true);
        this._destroyGuideUI(T);
    }
    this.finish(EBehaviorEnum.Success);
  }
  _showDim(e, t) {
    var i = this.context.getTileNodeMap(),
      o = new Set();
    e && o.add(e);
    t && o.add(t);
    t || i.forEach(function (e, t) {
      var i, a;
      (null === (a = null === (i = null == e ? void 0 : e.tileObject) || void 0 === i ? void 0 : i.getIsInSlotBar) || void 0 === a ? void 0 : a.call(i)) && o.add(t);
    });
    i.forEach(function (e, t) {
      if (!o.has(t)) {
        var i = null == e ? void 0 : e.imgLockBg;
        if (i && cc.isValid(i) && !i.active) {
          i.opacity = 255;
          i.active = true;
        }
      }
    });
  }
  _hideDim() {
    var e = this.context.getTileNodeMap();
    e.forEach(function (e) {
      var t;
      null === (t = null == e ? void 0 : e.tileObject) || void 0 === t || t.isHint;
    });
    e.forEach(function (e) {
      var t = null == e ? void 0 : e.imgLockBg;
      t && cc.isValid(t) && t.active && (t.active = false);
    });
  }
  _getBoardTileWorldPos(e) {
    var t,
      i,
      o = this.context.getTileNodeByTileId(e),
      a = null == o ? void 0 : o.tileObject;
    if (!(null == a ? void 0 : a.isValid)) return null;
    if (o.tileNode && cc.isValid(o.tileNode)) {
      var r = o.tileNode.convertToWorldSpaceAR(cc.v2(0, 0));
      return cc.v3(r.x, r.y, 0);
    }
    var n = null === (i = null === (t = this.context.getTileNodeManager()) || void 0 === t ? void 0 : t.getFirstLayer) || void 0 === i ? void 0 : i.call(t);
    if (n && cc.isValid(n)) {
      r = n.convertToWorldSpaceAR(a.getPosition());
      return cc.v3(r.x, r.y, 0);
    }
    return null;
  }
  _showGuideUI(e, t, i, o, a, r, n) {
    var l,
      d = this;
    if (e && cc.isValid(e)) {
      var c = this._getBoardTileWorldPos(t);
      if (e.getChildByName("tile2GuideNode")) {
        var u = e.tile2GuideUI;
        if (u) {
          var p = null !== (l = this._getBoardTileWorldPos(t)) && void 0 !== l ? l : c;
          this._applyStepToUI(u, t, p, i, o, a, r, n);
        }
      } else Tile2GuideUI.createUI().then(function (l) {
        var u;
        if (cc.isValid(e)) {
          l.parent = e;
          l.name = "tile2GuideNode";
          var p = l.getComponent(Tile2GuideUI);
          e.tile2GuideUI = p;
          if (p) {
            var h = null !== (u = d._getBoardTileWorldPos(t)) && void 0 !== u ? u : c;
            d._applyStepToUI(p, t, h, i, o, a, r, n);
          }
        }
      });
    }
  }
  _applyStepToUI(e, t, i, o, a, r, n, l) {
    e.setText(o, a);
    e.setShowSkip(n);
    l && e.setTipPos(l);
    if (i) {
      e.setGuidePosition(t, i, r);
    } else {
      e.setShowHand(r);
    }
  }
  _hideGuideHand(e) {
    if (e && cc.isValid(e)) {
      var t = e.tile2GuideUI;
      if (t && cc.isValid(t.node)) {
        t.setShowHand(false);
        t.playTextAnim({
          type: "hide"
        });
      }
    }
  }
  _destroyGuideUI(e) {
    if (e && cc.isValid(e)) {
      var t = e.getChildByName("tile2GuideNode");
      t && cc.isValid(t) && t.destroy();
      e.tile2GuideUI = null;
    }
  }
}