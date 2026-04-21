import ExtractTool from '../../../Scripts/core/extractQuestion/ExtractTool';
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.trait
@mj.class("RollClearEffectTrait")
export default class RollClearEffectTrait extends Trait {
  _currSkData = null;
  _cardBackColor = "default";
  _gameType = MjGameType.None;
  static traitKey = "RollClearEffect";
  static COLORS = ["red", "purple", "pink", "cyan", "blue"];
  onLoad() {
    var t, i;
    super.onLoad.call(this);
    this._config = {
      gameTypes: (null === (t = this.traitData) || void 0 === t ? void 0 : t.gameTypes) || [MjGameType.Normal],
      onlyHard: (null === (i = this.traitData) || void 0 === i ? void 0 : i.onlyHard) || 0
    };
  }
  isGameTypeOpen(e) {
    var t = true;
    -1 === this._config.gameTypes.indexOf(e) && (t = false);
    if (1 === this._config.onlyHard && t) {
      var i = UserModel.getInstance().normalData.getLevelId();
      t = !!ExtractTool.getInstance().isHardLevel(i);
    }
    return t;
  }
  getColor() {
    var e,
      t,
      r,
      o = null === (e = mj.getClassByName) || void 0 === e ? void 0 : e.call(mj, "CardBackTrait"),
      a = null === (t = null == o ? void 0 : o.getInstance) || void 0 === t ? void 0 : t.call(o),
      l = null === (r = null == a ? void 0 : a.getCurCardBack) || void 0 === r ? void 0 : r.call(a);
    return "default" === l || RollClearEffectTrait.COLORS.includes(l) ? l : "default";
  }
  loadSpine(e) {
    var t = this;
    if (this.isGameTypeOpen(this._gameType)) {
      var i = e;
      if (i && "function" == typeof i.loadRes) {
        this._currSkData = null;
        i.loadRes("spine/gameplay_elimination_a", sp.SkeletonData, "r_rollClearEffect").then(function (e) {
          var i = Array.isArray(e) ? e[0] : e;
          t._currSkData = i || null;
        }).catch(function () {
          t._currSkData = null;
        });
      }
    }
  }
  getTileFaceSpriteFrameByTileId(e, t) {
    var i, r, o, a, l;
    try {
      var n = null == e ? void 0 : e.context,
        c = (null === (i = null == n ? void 0 : n.getTileNodeByTileId) || void 0 === i ? void 0 : i.call(n, t)) || (null === (a = null === (o = null === (r = null == n ? void 0 : n.getTileNodeMap) || void 0 === r ? void 0 : r.call(n)) || void 0 === o ? void 0 : o.get) || void 0 === a ? void 0 : a.call(o, t)),
        u = null == c ? void 0 : c.imgCard,
        s = (null === (l = null == u ? void 0 : u.getComponent) || void 0 === l ? void 0 : l.call(u, cc.Sprite)) || null,
        d = (null == s ? void 0 : s.spriteFrame) || null;
      return d && cc.isValid(d) ? d : null;
    } catch (e) {
      return null;
    }
  }
  getTileFaceSizeByTileId(e, t) {
    var i, r, o, a, l, n, c, u, s;
    try {
      var d = null == e ? void 0 : e.context,
        p = (null === (i = null == d ? void 0 : d.getTileNodeByTileId) || void 0 === i ? void 0 : i.call(d, t)) || (null === (a = null === (o = null === (r = null == d ? void 0 : d.getTileNodeMap) || void 0 === r ? void 0 : r.call(d)) || void 0 === o ? void 0 : o.get) || void 0 === a ? void 0 : a.call(o, t)),
        v = null == p ? void 0 : p.imgCard,
        f = null === (l = null == v ? void 0 : v.getContentSize) || void 0 === l ? void 0 : l.call(v);
      if (f && Number.isFinite(f.width) && Number.isFinite(f.height) && f.width > 0 && f.height > 0) {
        var h = Number(null !== (s = null !== (u = null === (c = null === (n = null == p ? void 0 : p.info) || void 0 === n ? void 0 : n.tileObject) || void 0 === c ? void 0 : c.layoutScale) && void 0 !== u ? u : null == d ? void 0 : d.layoutScale) && void 0 !== s ? s : 1),
          y = Number.isFinite(h) && h > 0 ? 1 / h : 1;
        return cc.size(f.width * y, f.height * y);
      }
    } catch (e) {}
    return null;
  }
  getSpineHookNode(e, t) {
    var i,
      r,
      o = null === (i = e) || void 0 === i ? void 0 : i.attachUtil;
    if (!o) return null;
    var a = null === (r = o.generateAttachedNodes) || void 0 === r ? void 0 : r.call(o, t);
    if (!a || 0 === a.length) return null;
    var l = a[0];
    return cc.isValid(l) ? l : null;
  }
  upsertFaceOnHook(e, t, i, r, o, a) {
    if (r && cc.isValid(r)) {
      var l = this.getSpineHookNode(e, t);
      if (l) {
        var n = l.getChildByName(i);
        if (!n) {
          (n = new cc.Node(i)).setAnchorPoint(0.5, 0.5);
          n.parent = l;
        }
        n.setPosition(0, 0, 0);
        n.setContentSize(o.width, o.height);
        n.setScale(a);
        var c = n.getComponent(cc.Sprite);
        if (!c) {
          (c = n.addComponent(cc.Sprite)).sizeMode = cc.Sprite.SizeMode.CUSTOM;
          c.trim = false;
        }
        c.spriteFrame !== r && (c.spriteFrame = r);
      }
    }
  }
  onChangeCEffTrait_isGTOpen(e, t) {
    if (this.isGameTypeOpen(this._gameType)) {
      t({
        returnType: TraitCallbackReturnType.return,
        returnVal: false,
        isBreak: true
      });
    } else {
      t();
    }
  }
  onInitViewBhv_crtTls(e, t) {
    var i, r, o, a;
    this._gameType = null === (r = null === (i = e.ins) || void 0 === i ? void 0 : i._context) || void 0 === r ? void 0 : r.gameType;
    this._cardBackColor = this.getColor();
    this.loadSpine(null === (a = null === (o = e.ins) || void 0 === o ? void 0 : o.context) || void 0 === a ? void 0 : a.gameCtr);
    t();
  }
  onClearEffBhv_attCFace(e, t) {
    var i,
      r,
      o = e.args[0],
      a = e.args[1],
      l = e.args[2];
    if (o && cc.isValid(o.node) && this.isGameTypeOpen(this._gameType)) {
      var n = this.getTileFaceSizeByTileId(e.ins, a),
        c = this.getTileFaceSizeByTileId(e.ins, l),
        u = Number(null !== (r = null === (i = this._traitData) || void 0 === i ? void 0 : i.mahjongFaceScale) && void 0 !== r ? r : 1),
        s = this.getTileFaceSpriteFrameByTileId(e.ins, a);
      s || (s = this.getTileFaceSpriteFrameByTileId(e.ins, l));
      if (s) {
        var d = n || cc.size(s.getRect().width, s.getRect().height),
          p = c || cc.size(s.getRect().width, s.getRect().height);
        this.upsertFaceOnHook(o, "hook_mahjong_1", "mahjong_face_1", s, d, u);
        this.upsertFaceOnHook(o, "hook_mahjong_2", "mahjong_face_2", s, p, u);
        t();
      } else t();
    } else t();
  }
  onClearEffBhv_changeSkd(e, t) {
    var i = e.args[0],
      r = this._currSkData;
    r && cc.isValid(r) && i && i.skeletonData !== r && this.isGameTypeOpen(this._gameType) && (i.skeletonData = r);
    t();
  }
  onClearEffBhv_getScale(e, t) {
    var i,
      r,
      o,
      a,
      l = Number(null !== (o = null === (r = null === (i = e.ins) || void 0 === i ? void 0 : i.context) || void 0 === r ? void 0 : r.layoutScale) && void 0 !== o ? o : 1),
      n = Number.isFinite(l) && l > 0 ? l : 1,
      c = Number(null === (a = this._traitData) || void 0 === a ? void 0 : a.scale),
      s = Number.isFinite(c) && c > 0 ? c : 1;
    t({
      returnType: TraitCallbackReturnType.jump,
      returnVal: n * s
    });
  }
  onClearEffBhv_getAnimName(e, t) {
    var r = "in_" + (Math.random() > 0.5 ? 1 : 2),
      o = this._cardBackColor,
      a = this.isGameTypeOpen(this._gameType) && this._currSkData && cc.isValid(this._currSkData) && o && "default" !== o && RollClearEffectTrait.COLORS.includes(o) ? r + "_" + o : r;
    t({
      returnType: TraitCallbackReturnType.return,
      isBreak: true,
      returnVal: a
    });
  }
}