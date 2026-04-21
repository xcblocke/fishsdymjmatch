import { resManager } from '../../../Scripts/framework/manager/ResManager';
import Trait from '../../../Scripts/framework/trait/Trait';
var s = ["GameMgr_login", "LoginM_showLoad"];
@mj.trait
@mj.class("ChangeSkinTrait")
export default class ChangeSkinTrait extends Trait {
  isRedirected = false;
  _skinBundle = null;
  static traitKey = "ChangeSkin";
  static isExistChangeSkin = false;
  __init(e) {
    if (!this._traitData) if (cc.sys.isBrowser) cc.game.emit("jsError", "web暂不支持换肤");else if (!ChangeSkinTrait.isExistChangeSkin && !this.isLimited(e)) {
      ChangeSkinTrait.isExistChangeSkin = true;
      super.__init.call(this, e);
    }
  }
  isLimited(t) {
    return !(!t.weekLimit || t.weekLimit.includes(new Date().getDay()));
  }
  onLoad() {
    var e = this;
    if (this._traitData.skBundle) {
      if (resManager.isRemoteBundle(this._traitData.skBundle)) {
        resManager.preDownLoadByDir("", null, (i, n) => {
          if (n) {
            var r = "Failed to download bundle " + i + ": " + n;
            -3 != n.cause && console.error(r);
          } else {
            e._skinBundle = cc.assetManager.getBundle(e._traitData.skBundle);
            super.onLoad.call(e);
          }
        }, this._traitData.skBundle);
      } else {
        resManager.loadBundle(this._traitData.skBundle).then(i => {
          e._skinBundle = i;
          super.onLoad.call(e);
        }).catch(function (t) {
          var i = "Failed to load bundle " + e._traitData.skBundle + ": " + t;
          -3 != t.cause && console.error(i);
        });
      }
    } else {
      console.error("[ChangeSkinTrait] skBundle 未定义");
    }
  }
  onGameMgr_login(t, e) {
    this.redirection();
    e();
  }
  onLoginM_showLoad(t, e) {
    this.redirection();
    e();
  }
  initEvent() {
    var t = this._traitData.events;
    this.registerEvent(t.filter(function (t) {
      return s.includes(t.event);
    }));
  }
  initCusntomEvent() {
    var t = this._traitData.events;
    this.registerEvent(t.filter(function (t) {
      return !s.includes(t.event);
    }));
  }
  redirecItemInfo(t, e, i) {
    var n = e && this._skinBundle.getInfoWithPath(e, t.ctor);
    if (n = n || this._skinBundle.getAssetInfo(i)) {
      if (n.redirect) {
        t = (s = cc.assetManager.bundles.get(n.redirect)._config).getAssetInfo(i);
        return [i, s, t];
      }
      return [n.uuid, this._skinBundle._config, n];
    }
    if (!t) for (var r = ["internal", "resources", "main"], a = 0; a < r.length; a++) {
      var o = r[a],
        c = cc.assetManager.bundles.get(o);
      if (c) {
        var s;
        if (n = (s = c._config).getAssetInfo(i)) return [i, s, n];
      }
    }
  }
  redirection() {
    var t = this;
    if (!this.isRedirected) {
      this.isRedirected = true;
      this.initCusntomEvent();
      cc.assetManager.transformPipeline.remove(1).insert(function (e) {
        for (var i = e.output = e.input, n = 0; n < i.length; n++) {
          var r = i[n];
          if (!r.url) {
            var a,
              o,
              c = r.config,
              s = r.uuid,
              l = r.info,
              u = null == l ? void 0 : l.path,
              f = t.redirecItemInfo(l, u, s);
            if (f) {
              s = f[0];
              c = f[1];
              l = f[2];
            }
            o = r.isNative ? c && c.nativeBase ? c.base + c.nativeBase : cc.assetManager.generalNativeBase : c && c.importBase ? c.base + c.importBase : cc.assetManager.generalImportBase;
            var p = "";
            l && (p = r.isNative ? l.nativeVer ? "." + l.nativeVer : "" : l.ver ? "." + l.ver : "");
            a = ".ttf" === r.ext ? o + "/" + s.slice(0, 2) + "/" + s + p + "/" + r.options.__nativeName__ : o + "/" + s.slice(0, 2) + "/" + s + p + r.ext;
            r.url = a;
          }
        }
        return null;
      }, 1);
    }
  }
}