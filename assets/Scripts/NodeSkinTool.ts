import I18NComponent from './component/I18NComponent';
import BaseSprite from './gamePlay/base/ui/BaseSprite';
import { MjGameType } from './core/simulator/constant/GameTypeEnums';
import BaseLabel from './gamePlay/base/ui/BaseLabel';
import CardUtil from './gamePlay/user/CardUtil';
import BaseSpine from './gamePlay/base/ui/BaseSpine';
export default class NodeSkinTool {
  static isGameTypeMatch(e, t) {
    var o, i;
    if (!e || 0 === e.length || 0 === e[0]) return true;
    var r = [MjGameType.None, MjGameType.Normal, MjGameType.Travel, MjGameType.DailyChallenge];
    try {
      for (var l = __values(e), s = l.next(); !s.done; s = l.next()) {
        var c = s.value;
        if (!(c < 0 || c >= r.length) && r[c] === t) return true;
      }
    } catch (e) {
      o = {
        error: e
      };
    } finally {
      try {
        s && !s.done && (i = l.return) && i.call(l);
      } finally {
        if (o) throw o.error;
      }
    }
    return false;
  }
  static parseConfigList(t, o, i, r = "") {
    var a, l;
    try {
      for (var s = __values(o), c = s.next(); !c.done; c = s.next()) {
        var u = c.value,
          p = u.Name,
          f = NodeSkinTool.getNodeByPath(t, p, r);
        if (!f) {
          if (!NodeSkinTool.isGameTypeMatch(u.GameTypes, i)) continue;
          f = NodeSkinTool.createNodeByPath(t, p, r);
        }
        if (f) {
          var d = NodeSkinTool.parseJson(u.NodeInfo);
          NodeSkinTool.applyNodeInfo(f, d);
          var h = NodeSkinTool.parseJson(u.LabelInfo);
          NodeSkinTool.applyLabelInfo(f, h);
          h && d && void 0 !== h.overflow && h.overflow === cc.Label.Overflow.SHRINK && void 0 !== d.size && f.setContentSize(d.size[0], d.size[1]);
          NodeSkinTool.applyOutlineInfo(f, NodeSkinTool.parseJson(u.OutlineInfo));
          NodeSkinTool.applySpriteInfo(f, NodeSkinTool.parseJson(u.SpriteInfo));
          NodeSkinTool.applyI18NInfo(f, NodeSkinTool.parseJson(u.I18NInfo));
          NodeSkinTool.applyButtonInfo(f, NodeSkinTool.parseJson(u.ButtonInfo));
          NodeSkinTool.applyWidgetInfo(f, NodeSkinTool.parseJson(u.WidgetInfo));
          NodeSkinTool.applySpineInfo(f, NodeSkinTool.parseJson(u.SpineInfo));
        }
      }
    } catch (e) {
      a = {
        error: e
      };
    } finally {
      try {
        c && !c.done && (l = s.return) && l.call(s);
      } finally {
        if (a) throw a.error;
      }
    }
  }
  static createNodeByPath(e, t, o = "") {
    if (!t || "-" === t) return null;
    if (t === o) return e;
    var n = t;
    o && t.startsWith(o + "/") && (n = t.substring(o.length + 1));
    for (var i = n.split("/"), r = e, a = 0; a < i.length; a++) {
      var l = i[a],
        s = r.getChildByName(l);
      if (!s) {
        s = new cc.Node(l);
        r.addChild(s);
      }
      r = s;
    }
    return r;
  }
  static getNodeByPath(e, t, o = "") {
    var i, r;
    if (!t || "-" === t) return null;
    var a = t;
    if (o) {
      if (t === o) return e;
      t.startsWith(o + "/") && (a = t.substring(o.length + 1));
    }
    var l = a.split("/"),
      s = e;
    try {
      for (var c = __values(l), u = c.next(); !u.done; u = c.next()) {
        var p = u.value;
        if (!s) return null;
        s = s.getChildByName(p);
      }
    } catch (e) {
      i = {
        error: e
      };
    } finally {
      try {
        u && !u.done && (r = c.return) && r.call(c);
      } finally {
        if (i) throw i.error;
      }
    }
    return s;
  }
  static parseJson(e) {
    if (!e || "-" === e) return null;
    try {
      return JSON.parse(e);
    } catch (e) {
      return null;
    }
  }
  static parseColor(e) {
    if (!e) return null;
    var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i.exec(e);
    return t ? new cc.Color(parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16), t[4] ? parseInt(t[4], 16) : 255) : null;
  }
  static applyNodeInfo(t, o) {
    if (o) {
      o.anchor && o.anchor.length >= 2 && t.setAnchorPoint(o.anchor[0], o.anchor[1]);
      o.size && o.size.length >= 2 && t.setContentSize(o.size[0], o.size[1]);
      o.position && o.position.length >= 2 && t.setPosition(o.position[0], o.position[1]);
      if (o.color) {
        var n = NodeSkinTool.parseColor(o.color);
        if (n) {
          t.color = new cc.Color(n.r, n.g, n.b);
          t.opacity = n.a;
        }
      }
      o.colorArr && o.colorArr.length >= 3 && (t.color = new cc.Color(o.colorArr[0], o.colorArr[1], o.colorArr[2]));
      void 0 !== o.opacity && (t.opacity = o.opacity);
      void 0 !== o.active && (t.active = o.active);
      false === o.enabled && (t.active = false);
      void 0 !== o.rotation && (t.angle = -o.rotation);
      void 0 !== o.scale && t.setScale(o.scale);
    }
  }
  static applyWidgetInfo(e, t) {
    if (t) {
      var o = e.getComponent(cc.Widget);
      if (false !== t.enabled) {
        o || (o = e.addComponent(cc.Widget));
        void 0 !== t.enabled && (o.enabled = t.enabled);
        void 0 !== t.isAlignTop && (o.isAlignTop = t.isAlignTop);
        void 0 !== t.isAlignBottom && (o.isAlignBottom = t.isAlignBottom);
        void 0 !== t.isAlignLeft && (o.isAlignLeft = t.isAlignLeft);
        void 0 !== t.isAlignRight && (o.isAlignRight = t.isAlignRight);
        void 0 !== t.isAlignHorizontalCenter && (o.isAlignHorizontalCenter = t.isAlignHorizontalCenter);
        void 0 !== t.isAlignVerticalCenter && (o.isAlignVerticalCenter = t.isAlignVerticalCenter);
        void 0 !== t.top && (o.top = t.top);
        void 0 !== t.bottom && (o.bottom = t.bottom);
        void 0 !== t.left && (o.left = t.left);
        void 0 !== t.right && (o.right = t.right);
      } else o && (o.enabled = false);
    }
  }
  static applySpriteInfo(e, t) {
    if (t) if (false !== t.enabled) {
      var o = e.getComponent(cc.Sprite);
      o || ((o = e.addComponent(cc.Sprite)).sizeMode = cc.Sprite.SizeMode.CUSTOM);
      if (void 0 !== t.sizeMode) {
        o.sizeMode = t.sizeMode;
        o.trim = false;
      }
      void 0 !== t.type && (o.type = t.type);
      if (t.spriteFrame) {
        var n = t.bundleName || "mainRes";
        if (t.spriteFrame.includes("atlas/cardIcon")) {
          var i = CardUtil.getAtlasPathAndBundleName(t.spriteFrame),
            a = i.path,
            l = i.bundleName,
            c = i.fromAtlas;
          BaseSprite.refreshWithNode(e, a, c, true, l);
        } else BaseSprite.refreshWithNode(e, t.spriteFrame, t.fromAtlas || false, true, n);
      }
    } else {
      var u = e.getComponent(cc.Sprite);
      u && (u.enabled = false);
    }
  }
  static applyLabelInfo(t, o) {
    if (o) if (false !== o.enabled) {
      var n = cc.Label.CacheMode.NONE;
      void 0 !== o.cacheMode && (n = o.cacheMode);
      var i = t.getComponent(cc.Label);
      i || ((i = t.addComponent(cc.Label)).cacheMode = n);
      void 0 !== o.fontSize && (i.fontSize = o.fontSize);
      void 0 !== o.lineHeight && (i.lineHeight = o.lineHeight);
      void 0 !== o.hAlign && (i.horizontalAlign = o.hAlign);
      void 0 !== o.vAlign && (i.verticalAlign = o.vAlign);
      void 0 !== o.overflow && (i.overflow = o.overflow);
      void 0 !== o.enableWrap && (i.enableWrapText = o.enableWrap);
      void 0 !== o.spacingX && (i.spacingX = o.spacingX);
      void 0 !== o.string && (i.string = o.string);
      if (o.font) {
        var r = o.bundleName || "mainRes";
        NodeSkinTool.loadFont(i, o.font, r);
      }
      if ("builtin-2d-sprite" === o.material) {
        var a = cc.Material.getBuiltinMaterial("2d-sprite");
        i.setMaterial(0, a);
      }
    } else {
      var l = t.getComponent(cc.Label);
      l && (l.enabled = false);
    }
  }
  static loadFont(e, t, o = "mainRes") {
    t && "-" !== t && BaseLabel.refreshWithNode(e.node, t, o, function () {
      var t;
      cc.isValid(e) && (null === (t = e.node.getComponent(I18NComponent)) || void 0 === t || t.setOrigFont());
    });
  }
  static applyButtonInfo(e, t) {
    if (t) {
      var o = e.getComponent(cc.Button);
      o || (o = e.addComponent(cc.Button));
      void 0 !== t.enabled && (o.enabled = t.enabled);
      void 0 !== t.transition && (o.transition = t.transition);
      void 0 !== t.zoomScale && (o.zoomScale = t.zoomScale);
      void 0 !== t.clickEventsNum && 0 === t.clickEventsNum && (o.clickEvents = []);
    }
  }
  static applyI18NInfo(e, t) {
    if (t) {
      var o = e.getComponent("I18NComponent");
      if (void 0 === t.enabled || t.enabled) {
        if (o || (o = e.addComponent(I18NComponent))) {
          void 0 !== t.enabled && (o.enabled = t.enabled);
          void 0 !== t.translateId && (o.translateId = t.translateId);
          void 0 !== t.defaultText && (o.defaultText = t.defaultText);
        }
      } else o && (o.enabled = false);
    }
  }
  static applyOutlineInfo(e, t) {
    if (t) {
      var o = e.getComponent("Outlight");
      o && void 0 !== t.enabled && (t.enabled || e.removeComponent(o));
      var n = e.getComponent(cc.LabelOutline);
      if (n && void 0 !== t.enabled) {
        n.enabled = t.enabled;
        t.enabled || e.removeComponent(n);
      }
    }
  }
  static applySpineInfo(e, t) {
    if (t) {
      var o = e.getComponent(sp.Skeleton);
      if (!o) {
        (o = e.addComponent(sp.Skeleton)).loop = false;
        o.premultipliedAlpha = false;
        o.setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.SHARED_CACHE);
      }
      var n = t.bundleName || "mainRes";
      if (t.skelPath) {
        var i = BaseSpine.refreshWithNode(e, t.skelPath, n);
        t.animName && -1 === t.animLoop && i.setAnimation(t.animName, -1);
      }
    }
  }
  static applyRichTextInfo(e, t) {
    if (t) if (false !== t.enabled) {
      var o = e.getComponent(cc.RichText);
      o || (o = e.addComponent(cc.RichText));
      void 0 !== t.fontSize && (o.fontSize = t.fontSize);
      void 0 !== t.lineHeight && (o.lineHeight = t.lineHeight);
      void 0 !== t.maxWidth && (o.maxWidth = t.maxWidth);
      void 0 !== t.hAlign && (o.horizontalAlign = t.hAlign);
      void 0 !== t.string && (o.string = t.string);
    } else {
      var n = e.getComponent(cc.RichText);
      n && (n.enabled = false);
    }
  }
}