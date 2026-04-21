"use strict";
cc._RF.push(module, '9198fm61EBBgLax6aox2X7N', 'ChangeSkinTrait');
// subpackages/l_changeSkin/Scripts/ChangeSkinTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ResManager_1 = require("../../../Scripts/framework/manager/ResManager");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var s = ["GameMgr_login", "LoginM_showLoad"];
var ChangeSkinTrait = /** @class */ (function (_super) {
    __extends(ChangeSkinTrait, _super);
    function ChangeSkinTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isRedirected = false;
        _this._skinBundle = null;
        return _this;
    }
    ChangeSkinTrait_1 = ChangeSkinTrait;
    ChangeSkinTrait.prototype.__init = function (e) {
        if (!this._traitData)
            if (cc.sys.isBrowser)
                cc.game.emit("jsError", "web暂不支持换肤");
            else if (!ChangeSkinTrait_1.isExistChangeSkin && !this.isLimited(e)) {
                ChangeSkinTrait_1.isExistChangeSkin = true;
                _super.prototype.__init.call(this, e);
            }
    };
    ChangeSkinTrait.prototype.isLimited = function (t) {
        return !(!t.weekLimit || t.weekLimit.includes(new Date().getDay()));
    };
    ChangeSkinTrait.prototype.onLoad = function () {
        var e = this;
        if (this._traitData.skBundle) {
            if (ResManager_1.resManager.isRemoteBundle(this._traitData.skBundle)) {
                ResManager_1.resManager.preDownLoadByDir("", null, function (i, n) {
                    if (n) {
                        var r = "Failed to download bundle " + i + ": " + n;
                        -3 != n.cause && console.error(r);
                    }
                    else {
                        e._skinBundle = cc.assetManager.getBundle(e._traitData.skBundle);
                        _super.prototype.onLoad.call(e);
                    }
                }, this._traitData.skBundle);
            }
            else {
                ResManager_1.resManager.loadBundle(this._traitData.skBundle).then(function (i) {
                    e._skinBundle = i;
                    _super.prototype.onLoad.call(e);
                }).catch(function (t) {
                    var i = "Failed to load bundle " + e._traitData.skBundle + ": " + t;
                    -3 != t.cause && console.error(i);
                });
            }
        }
        else {
            console.error("[ChangeSkinTrait] skBundle 未定义");
        }
    };
    ChangeSkinTrait.prototype.onGameMgr_login = function (t, e) {
        this.redirection();
        e();
    };
    ChangeSkinTrait.prototype.onLoginM_showLoad = function (t, e) {
        this.redirection();
        e();
    };
    ChangeSkinTrait.prototype.initEvent = function () {
        var t = this._traitData.events;
        this.registerEvent(t.filter(function (t) {
            return s.includes(t.event);
        }));
    };
    ChangeSkinTrait.prototype.initCusntomEvent = function () {
        var t = this._traitData.events;
        this.registerEvent(t.filter(function (t) {
            return !s.includes(t.event);
        }));
    };
    ChangeSkinTrait.prototype.redirecItemInfo = function (t, e, i) {
        var n = e && this._skinBundle.getInfoWithPath(e, t.ctor);
        if (n = n || this._skinBundle.getAssetInfo(i)) {
            if (n.redirect) {
                t = (s = cc.assetManager.bundles.get(n.redirect)._config).getAssetInfo(i);
                return [i, s, t];
            }
            return [n.uuid, this._skinBundle._config, n];
        }
        if (!t)
            for (var r = ["internal", "resources", "main"], a = 0; a < r.length; a++) {
                var o = r[a], c = cc.assetManager.bundles.get(o);
                if (c) {
                    var s;
                    if (n = (s = c._config).getAssetInfo(i))
                        return [i, s, n];
                }
            }
    };
    ChangeSkinTrait.prototype.redirection = function () {
        var t = this;
        if (!this.isRedirected) {
            this.isRedirected = true;
            this.initCusntomEvent();
            cc.assetManager.transformPipeline.remove(1).insert(function (e) {
                for (var i = e.output = e.input, n = 0; n < i.length; n++) {
                    var r = i[n];
                    if (!r.url) {
                        var a, o, c = r.config, s = r.uuid, l = r.info, u = null == l ? void 0 : l.path, f = t.redirecItemInfo(l, u, s);
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
    };
    var ChangeSkinTrait_1;
    ChangeSkinTrait.traitKey = "ChangeSkin";
    ChangeSkinTrait.isExistChangeSkin = false;
    ChangeSkinTrait = ChangeSkinTrait_1 = __decorate([
        mj.trait,
        mj.class("ChangeSkinTrait")
    ], ChangeSkinTrait);
    return ChangeSkinTrait;
}(Trait_1.default));
exports.default = ChangeSkinTrait;

cc._RF.pop();