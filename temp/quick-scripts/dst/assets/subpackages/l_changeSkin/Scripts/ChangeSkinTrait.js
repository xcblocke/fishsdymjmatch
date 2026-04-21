
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_changeSkin/Scripts/ChangeSkinTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2NoYW5nZVNraW4vU2NyaXB0cy9DaGFuZ2VTa2luVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDRFQUEyRTtBQUMzRSxnRUFBMkQ7QUFDM0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztBQUc3QztJQUE2QyxtQ0FBSztJQUFsRDtRQUFBLHFFQThHQztRQTdHQyxrQkFBWSxHQUFHLEtBQUssQ0FBQztRQUNyQixpQkFBVyxHQUFHLElBQUksQ0FBQzs7SUE0R3JCLENBQUM7d0JBOUdvQixlQUFlO0lBS2xDLGdDQUFNLEdBQU4sVUFBTyxDQUFDO1FBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVO1lBQUUsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLFNBQVM7Z0JBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFdBQVcsQ0FBQyxDQUFDO2lCQUFLLElBQUksQ0FBQyxpQkFBZSxDQUFDLGlCQUFpQixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDbEosaUJBQWUsQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7Z0JBQ3pDLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQzVCO0lBQ0gsQ0FBQztJQUNELG1DQUFTLEdBQVQsVUFBVSxDQUFDO1FBQ1QsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFDRCxnQ0FBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ2IsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLFFB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USxHQUFHLFlBQVksQ0FBQztJQUN4QixpQ0FBaUIsR0FBRyxLQUFLLENBQUM7SUFKZCxlQUFlO1FBRm5DLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQztPQUNQLGVBQWUsQ0E4R25DO0lBQUQsc0JBQUM7Q0E5R0QsQUE4R0MsQ0E5RzRDLGVBQUssR0E4R2pEO2tCQTlHb0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlc01hbmFnZXIgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay9tYW5hZ2VyL1Jlc01hbmFnZXInO1xuaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbnZhciBzID0gW1wiR2FtZU1ncl9sb2dpblwiLCBcIkxvZ2luTV9zaG93TG9hZFwiXTtcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiQ2hhbmdlU2tpblRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGFuZ2VTa2luVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIGlzUmVkaXJlY3RlZCA9IGZhbHNlO1xuICBfc2tpbkJ1bmRsZSA9IG51bGw7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiQ2hhbmdlU2tpblwiO1xuICBzdGF0aWMgaXNFeGlzdENoYW5nZVNraW4gPSBmYWxzZTtcbiAgX19pbml0KGUpIHtcbiAgICBpZiAoIXRoaXMuX3RyYWl0RGF0YSkgaWYgKGNjLnN5cy5pc0Jyb3dzZXIpIGNjLmdhbWUuZW1pdChcImpzRXJyb3JcIiwgXCJ3ZWLmmoLkuI3mlK/mjIHmjaLogqRcIik7ZWxzZSBpZiAoIUNoYW5nZVNraW5UcmFpdC5pc0V4aXN0Q2hhbmdlU2tpbiAmJiAhdGhpcy5pc0xpbWl0ZWQoZSkpIHtcbiAgICAgIENoYW5nZVNraW5UcmFpdC5pc0V4aXN0Q2hhbmdlU2tpbiA9IHRydWU7XG4gICAgICBzdXBlci5fX2luaXQuY2FsbCh0aGlzLCBlKTtcbiAgICB9XG4gIH1cbiAgaXNMaW1pdGVkKHQpIHtcbiAgICByZXR1cm4gISghdC53ZWVrTGltaXQgfHwgdC53ZWVrTGltaXQuaW5jbHVkZXMobmV3IERhdGUoKS5nZXREYXkoKSkpO1xuICB9XG4gIG9uTG9hZCgpIHtcbiAgICB2YXIgZSA9IHRoaXM7XG4gICAgaWYgKHRoaXMuX3RyYWl0RGF0YS5za0J1bmRsZSkge1xuICAgICAgaWYgKHJlc01hbmFnZXIuaXNSZW1vdGVCdW5kbGUodGhpcy5fdHJhaXREYXRhLnNrQnVuZGxlKSkge1xuICAgICAgICByZXNNYW5hZ2VyLnByZURvd25Mb2FkQnlEaXIoXCJcIiwgbnVsbCwgKGksIG4pID0+IHtcbiAgICAgICAgICBpZiAobikge1xuICAgICAgICAgICAgdmFyIHIgPSBcIkZhaWxlZCB0byBkb3dubG9hZCBidW5kbGUgXCIgKyBpICsgXCI6IFwiICsgbjtcbiAgICAgICAgICAgIC0zICE9IG4uY2F1c2UgJiYgY29uc29sZS5lcnJvcihyKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZS5fc2tpbkJ1bmRsZSA9IGNjLmFzc2V0TWFuYWdlci5nZXRCdW5kbGUoZS5fdHJhaXREYXRhLnNrQnVuZGxlKTtcbiAgICAgICAgICAgIHN1cGVyLm9uTG9hZC5jYWxsKGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgdGhpcy5fdHJhaXREYXRhLnNrQnVuZGxlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc01hbmFnZXIubG9hZEJ1bmRsZSh0aGlzLl90cmFpdERhdGEuc2tCdW5kbGUpLnRoZW4oaSA9PiB7XG4gICAgICAgICAgZS5fc2tpbkJ1bmRsZSA9IGk7XG4gICAgICAgICAgc3VwZXIub25Mb2FkLmNhbGwoZSk7XG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgdmFyIGkgPSBcIkZhaWxlZCB0byBsb2FkIGJ1bmRsZSBcIiArIGUuX3RyYWl0RGF0YS5za0J1bmRsZSArIFwiOiBcIiArIHQ7XG4gICAgICAgICAgLTMgIT0gdC5jYXVzZSAmJiBjb25zb2xlLmVycm9yKGkpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5lcnJvcihcIltDaGFuZ2VTa2luVHJhaXRdIHNrQnVuZGxlIOacquWumuS5iVwiKTtcbiAgICB9XG4gIH1cbiAgb25HYW1lTWdyX2xvZ2luKHQsIGUpIHtcbiAgICB0aGlzLnJlZGlyZWN0aW9uKCk7XG4gICAgZSgpO1xuICB9XG4gIG9uTG9naW5NX3Nob3dMb2FkKHQsIGUpIHtcbiAgICB0aGlzLnJlZGlyZWN0aW9uKCk7XG4gICAgZSgpO1xuICB9XG4gIGluaXRFdmVudCgpIHtcbiAgICB2YXIgdCA9IHRoaXMuX3RyYWl0RGF0YS5ldmVudHM7XG4gICAgdGhpcy5yZWdpc3RlckV2ZW50KHQuZmlsdGVyKGZ1bmN0aW9uICh0KSB7XG4gICAgICByZXR1cm4gcy5pbmNsdWRlcyh0LmV2ZW50KTtcbiAgICB9KSk7XG4gIH1cbiAgaW5pdEN1c250b21FdmVudCgpIHtcbiAgICB2YXIgdCA9IHRoaXMuX3RyYWl0RGF0YS5ldmVudHM7XG4gICAgdGhpcy5yZWdpc3RlckV2ZW50KHQuZmlsdGVyKGZ1bmN0aW9uICh0KSB7XG4gICAgICByZXR1cm4gIXMuaW5jbHVkZXModC5ldmVudCk7XG4gICAgfSkpO1xuICB9XG4gIHJlZGlyZWNJdGVtSW5mbyh0LCBlLCBpKSB7XG4gICAgdmFyIG4gPSBlICYmIHRoaXMuX3NraW5CdW5kbGUuZ2V0SW5mb1dpdGhQYXRoKGUsIHQuY3Rvcik7XG4gICAgaWYgKG4gPSBuIHx8IHRoaXMuX3NraW5CdW5kbGUuZ2V0QXNzZXRJbmZvKGkpKSB7XG4gICAgICBpZiAobi5yZWRpcmVjdCkge1xuICAgICAgICB0ID0gKHMgPSBjYy5hc3NldE1hbmFnZXIuYnVuZGxlcy5nZXQobi5yZWRpcmVjdCkuX2NvbmZpZykuZ2V0QXNzZXRJbmZvKGkpO1xuICAgICAgICByZXR1cm4gW2ksIHMsIHRdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFtuLnV1aWQsIHRoaXMuX3NraW5CdW5kbGUuX2NvbmZpZywgbl07XG4gICAgfVxuICAgIGlmICghdCkgZm9yICh2YXIgciA9IFtcImludGVybmFsXCIsIFwicmVzb3VyY2VzXCIsIFwibWFpblwiXSwgYSA9IDA7IGEgPCByLmxlbmd0aDsgYSsrKSB7XG4gICAgICB2YXIgbyA9IHJbYV0sXG4gICAgICAgIGMgPSBjYy5hc3NldE1hbmFnZXIuYnVuZGxlcy5nZXQobyk7XG4gICAgICBpZiAoYykge1xuICAgICAgICB2YXIgcztcbiAgICAgICAgaWYgKG4gPSAocyA9IGMuX2NvbmZpZykuZ2V0QXNzZXRJbmZvKGkpKSByZXR1cm4gW2ksIHMsIG5dO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZWRpcmVjdGlvbigpIHtcbiAgICB2YXIgdCA9IHRoaXM7XG4gICAgaWYgKCF0aGlzLmlzUmVkaXJlY3RlZCkge1xuICAgICAgdGhpcy5pc1JlZGlyZWN0ZWQgPSB0cnVlO1xuICAgICAgdGhpcy5pbml0Q3VzbnRvbUV2ZW50KCk7XG4gICAgICBjYy5hc3NldE1hbmFnZXIudHJhbnNmb3JtUGlwZWxpbmUucmVtb3ZlKDEpLmluc2VydChmdW5jdGlvbiAoZSkge1xuICAgICAgICBmb3IgKHZhciBpID0gZS5vdXRwdXQgPSBlLmlucHV0LCBuID0gMDsgbiA8IGkubGVuZ3RoOyBuKyspIHtcbiAgICAgICAgICB2YXIgciA9IGlbbl07XG4gICAgICAgICAgaWYgKCFyLnVybCkge1xuICAgICAgICAgICAgdmFyIGEsXG4gICAgICAgICAgICAgIG8sXG4gICAgICAgICAgICAgIGMgPSByLmNvbmZpZyxcbiAgICAgICAgICAgICAgcyA9IHIudXVpZCxcbiAgICAgICAgICAgICAgbCA9IHIuaW5mbyxcbiAgICAgICAgICAgICAgdSA9IG51bGwgPT0gbCA/IHZvaWQgMCA6IGwucGF0aCxcbiAgICAgICAgICAgICAgZiA9IHQucmVkaXJlY0l0ZW1JbmZvKGwsIHUsIHMpO1xuICAgICAgICAgICAgaWYgKGYpIHtcbiAgICAgICAgICAgICAgcyA9IGZbMF07XG4gICAgICAgICAgICAgIGMgPSBmWzFdO1xuICAgICAgICAgICAgICBsID0gZlsyXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG8gPSByLmlzTmF0aXZlID8gYyAmJiBjLm5hdGl2ZUJhc2UgPyBjLmJhc2UgKyBjLm5hdGl2ZUJhc2UgOiBjYy5hc3NldE1hbmFnZXIuZ2VuZXJhbE5hdGl2ZUJhc2UgOiBjICYmIGMuaW1wb3J0QmFzZSA/IGMuYmFzZSArIGMuaW1wb3J0QmFzZSA6IGNjLmFzc2V0TWFuYWdlci5nZW5lcmFsSW1wb3J0QmFzZTtcbiAgICAgICAgICAgIHZhciBwID0gXCJcIjtcbiAgICAgICAgICAgIGwgJiYgKHAgPSByLmlzTmF0aXZlID8gbC5uYXRpdmVWZXIgPyBcIi5cIiArIGwubmF0aXZlVmVyIDogXCJcIiA6IGwudmVyID8gXCIuXCIgKyBsLnZlciA6IFwiXCIpO1xuICAgICAgICAgICAgYSA9IFwiLnR0ZlwiID09PSByLmV4dCA/IG8gKyBcIi9cIiArIHMuc2xpY2UoMCwgMikgKyBcIi9cIiArIHMgKyBwICsgXCIvXCIgKyByLm9wdGlvbnMuX19uYXRpdmVOYW1lX18gOiBvICsgXCIvXCIgKyBzLnNsaWNlKDAsIDIpICsgXCIvXCIgKyBzICsgcCArIHIuZXh0O1xuICAgICAgICAgICAgci51cmwgPSBhO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0sIDEpO1xuICAgIH1cbiAgfVxufSJdfQ==