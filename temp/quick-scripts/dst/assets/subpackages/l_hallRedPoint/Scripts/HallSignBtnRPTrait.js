
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_hallRedPoint/Scripts/HallSignBtnRPTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e60e6ImbA1PwZUa2HIou77i', 'HallSignBtnRPTrait');
// subpackages/l_hallRedPoint/Scripts/HallSignBtnRPTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var BaseSprite_1 = require("../../../Scripts/gamePlay/base/ui/BaseSprite");
var HallSignBtnRPTrait = /** @class */ (function (_super) {
    __extends(HallSignBtnRPTrait, _super);
    function HallSignBtnRPTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._config = {};
        return _this;
    }
    HallSignBtnRPTrait_1 = HallSignBtnRPTrait;
    Object.defineProperty(HallSignBtnRPTrait.prototype, "isClicked", {
        get: function () {
            return true === this.localData.clicked;
        },
        enumerable: false,
        configurable: true
    });
    HallSignBtnRPTrait.prototype.setClicked = function () {
        this.localData.clicked = true;
    };
    HallSignBtnRPTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._config = this._traitData || {};
    };
    HallSignBtnRPTrait.prototype.isEnabled = function () {
        var t;
        return null !== (t = this._config.enabled) && void 0 !== t ? t : HallSignBtnRPTrait_1.DEFAULT_CONFIG.enabled;
    };
    HallSignBtnRPTrait.prototype.getRedDotPath = function () {
        return this._config.redDotPath || HallSignBtnRPTrait_1.DEFAULT_CONFIG.redDotPath;
    };
    HallSignBtnRPTrait.prototype.shouldShowRedDot = function () {
        var t, e;
        if (!this.isEnabled())
            return false;
        if (this.isClicked)
            return false;
        var o = mj.getClassByName("DailySignClassicModel"), i = null === (t = null == o ? void 0 : o.getInstance) || void 0 === t ? void 0 : t.call(o);
        return !(null === (e = null == i ? void 0 : i.isUnlocked) || void 0 === e || !e.call(i));
    };
    HallSignBtnRPTrait.prototype.updateRedDotOnNode = function (t, e) {
        if (cc.isValid(t)) {
            var o = t.getChildByName("unlockRedDot_sign");
            if (e) {
                var i = t.getChildByName("img_red");
                i && (i.active = false);
                if (o)
                    o.active = true;
                else if (o = new cc.Node("unlockRedDot_sign")) {
                    var r = o.addComponent(cc.Sprite);
                    if (r) {
                        r.sizeMode = cc.Sprite.SizeMode.RAW;
                        r.trim = false;
                    }
                    BaseSprite_1.default.refreshWithNode(o, this.getRedDotPath(), false, false, "mainRes");
                    o.setPosition(cc.v2(55, 70));
                    t.addChild(o);
                }
            }
            else
                o && (o.active = false);
        }
    };
    HallSignBtnRPTrait.prototype.onSignBtn_onLoad = function (t, e) {
        var o;
        try {
            var i = null === (o = t.ins) || void 0 === o ? void 0 : o.node;
            if (!cc.isValid(i)) {
                e();
                return;
            }
            var r = this.shouldShowRedDot();
            this.updateRedDotOnNode(i, r);
        }
        catch (t) {
            console.error("[HallSignBtnRPTrait] onSignBtn_onLoad 异常: " + (null == t ? void 0 : t.message));
        }
        e();
    };
    HallSignBtnRPTrait.prototype.onSignBtn_updateLock = function (t, e) {
        var o;
        try {
            var i = null === (o = t.ins) || void 0 === o ? void 0 : o.node;
            if (!cc.isValid(i)) {
                e();
                return;
            }
            var r = this.shouldShowRedDot();
            this.updateRedDotOnNode(i, r);
        }
        catch (t) {
            console.error("[HallSignBtnRPTrait] onSignBtn_updateLock 异常: " + (null == t ? void 0 : t.message));
        }
        e();
    };
    HallSignBtnRPTrait.prototype.onSignBtn_click = function (t, e) {
        var o, i = null === (o = t.ins) || void 0 === o ? void 0 : o.node;
        if (cc.isValid(i)) {
            var r = i.getChildByName("unlockRedDot_sign");
            if (r && r.active) {
                this.setClicked();
                r.active = false;
            }
        }
        e();
    };
    HallSignBtnRPTrait.prototype.onSignBtn_checkRedDot = function (t, e) {
        var o, i = null === (o = t.ins) || void 0 === o ? void 0 : o.node;
        if (cc.isValid(i) && this.shouldShowRedDot()) {
            var r = i.getChildByName("img_red");
            r && (r.active = false);
        }
        e();
    };
    HallSignBtnRPTrait.prototype.onSignBtn_updateRedDot = function (t, e) {
        if (this.shouldShowRedDot()) {
            e({
                isBreak: true
            });
        }
        else {
            e();
        }
    };
    HallSignBtnRPTrait.prototype.onDSClassic_showPopVw = function (t, e) {
        var o, i;
        if (this.shouldShowRedDot()) {
            null === (i = null === (o = t.ins) || void 0 === o ? void 0 : o.updateSettingRedDot) || void 0 === i || i.call(o);
            e({
                returnVal: false,
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return
            });
        }
        else
            e();
    };
    var HallSignBtnRPTrait_1;
    HallSignBtnRPTrait.traitKey = "HallSignBtnRP";
    HallSignBtnRPTrait.DEFAULT_CONFIG = {
        enabled: true,
        redDotPath: "texture/gamePlay/gameplay_img_hongdian"
    };
    HallSignBtnRPTrait = HallSignBtnRPTrait_1 = __decorate([
        mj.trait,
        mj.class("HallSignBtnRPTrait")
    ], HallSignBtnRPTrait);
    return HallSignBtnRPTrait;
}(Trait_1.default));
exports.default = HallSignBtnRPTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2hhbGxSZWRQb2ludC9TY3JpcHRzL0hhbGxTaWduQnRuUlBUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELDhFQUF3RjtBQUN4RiwyRUFBc0U7QUFHdEU7SUFBZ0Qsc0NBQUs7SUFBckQ7UUFBQSxxRUEwSEM7UUF6SEMsYUFBTyxHQUFHLEVBQUUsQ0FBQzs7SUF5SGYsQ0FBQzsyQkExSG9CLGtCQUFrQjtJQU9yQyxzQkFBSSx5Q0FBUzthQUFiO1lBQ0UsT0FBTyxJQUFJLEtBQUssSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUM7UUFDekMsQ0FBQzs7O09BQUE7SUFDRCx1Q0FBVSxHQUFWO1FBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ2hDLENBQUM7SUFDRCxtQ0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLElBQUksRUFBRSxDQUFDO0lBQ3ZDLENBQUM7SUFDRCxzQ0FBUyxHQUFUO1FBQ0UsSUFBSSxDQUFDLENBQUM7UUFDTixPQUFPLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxvQkFBa0IsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDO0lBQzdHLENBQUM7SUFDRCwwQ0FBYSxHQUFiO1FBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsSUFBSSxvQkFBa0IsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDO0lBQ2pGLENBQUM7SUFDRCw2Q0FBZ0IsR0FBaEI7UUFDRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7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b20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCB7IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXRNYW5hZ2VyJztcbmltcG9ydCBCYXNlU3ByaXRlIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvYmFzZS91aS9CYXNlU3ByaXRlJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiSGFsbFNpZ25CdG5SUFRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIYWxsU2lnbkJ0blJQVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIF9jb25maWcgPSB7fTtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJIYWxsU2lnbkJ0blJQXCI7XG4gIHN0YXRpYyBERUZBVUxUX0NPTkZJRyA9IHtcbiAgICBlbmFibGVkOiB0cnVlLFxuICAgIHJlZERvdFBhdGg6IFwidGV4dHVyZS9nYW1lUGxheS9nYW1lcGxheV9pbWdfaG9uZ2RpYW5cIlxuICB9O1xuICBnZXQgaXNDbGlja2VkKCkge1xuICAgIHJldHVybiB0cnVlID09PSB0aGlzLmxvY2FsRGF0YS5jbGlja2VkO1xuICB9XG4gIHNldENsaWNrZWQoKSB7XG4gICAgdGhpcy5sb2NhbERhdGEuY2xpY2tlZCA9IHRydWU7XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX3RyYWl0RGF0YSB8fCB7fTtcbiAgfVxuICBpc0VuYWJsZWQoKSB7XG4gICAgdmFyIHQ7XG4gICAgcmV0dXJuIG51bGwgIT09ICh0ID0gdGhpcy5fY29uZmlnLmVuYWJsZWQpICYmIHZvaWQgMCAhPT0gdCA/IHQgOiBIYWxsU2lnbkJ0blJQVHJhaXQuREVGQVVMVF9DT05GSUcuZW5hYmxlZDtcbiAgfVxuICBnZXRSZWREb3RQYXRoKCkge1xuICAgIHJldHVybiB0aGlzLl9jb25maWcucmVkRG90UGF0aCB8fCBIYWxsU2lnbkJ0blJQVHJhaXQuREVGQVVMVF9DT05GSUcucmVkRG90UGF0aDtcbiAgfVxuICBzaG91bGRTaG93UmVkRG90KCkge1xuICAgIHZhciB0LCBlO1xuICAgIGlmICghdGhpcy5pc0VuYWJsZWQoKSkgcmV0dXJuIGZhbHNlO1xuICAgIGlmICh0aGlzLmlzQ2xpY2tlZCkgcmV0dXJuIGZhbHNlO1xuICAgIHZhciBvID0gbWouZ2V0Q2xhc3NCeU5hbWUoXCJEYWlseVNpZ25DbGFzc2ljTW9kZWxcIiksXG4gICAgICBpID0gbnVsbCA9PT0gKHQgPSBudWxsID09IG8gPyB2b2lkIDAgOiBvLmdldEluc3RhbmNlKSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0LmNhbGwobyk7XG4gICAgcmV0dXJuICEobnVsbCA9PT0gKGUgPSBudWxsID09IGkgPyB2b2lkIDAgOiBpLmlzVW5sb2NrZWQpIHx8IHZvaWQgMCA9PT0gZSB8fCAhZS5jYWxsKGkpKTtcbiAgfVxuICB1cGRhdGVSZWREb3RPbk5vZGUodCwgZSkge1xuICAgIGlmIChjYy5pc1ZhbGlkKHQpKSB7XG4gICAgICB2YXIgbyA9IHQuZ2V0Q2hpbGRCeU5hbWUoXCJ1bmxvY2tSZWREb3Rfc2lnblwiKTtcbiAgICAgIGlmIChlKSB7XG4gICAgICAgIHZhciBpID0gdC5nZXRDaGlsZEJ5TmFtZShcImltZ19yZWRcIik7XG4gICAgICAgIGkgJiYgKGkuYWN0aXZlID0gZmFsc2UpO1xuICAgICAgICBpZiAobykgby5hY3RpdmUgPSB0cnVlO2Vsc2UgaWYgKG8gPSBuZXcgY2MuTm9kZShcInVubG9ja1JlZERvdF9zaWduXCIpKSB7XG4gICAgICAgICAgdmFyIHIgPSBvLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgICAgIGlmIChyKSB7XG4gICAgICAgICAgICByLnNpemVNb2RlID0gY2MuU3ByaXRlLlNpemVNb2RlLlJBVztcbiAgICAgICAgICAgIHIudHJpbSA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBCYXNlU3ByaXRlLnJlZnJlc2hXaXRoTm9kZShvLCB0aGlzLmdldFJlZERvdFBhdGgoKSwgZmFsc2UsIGZhbHNlLCBcIm1haW5SZXNcIik7XG4gICAgICAgICAgby5zZXRQb3NpdGlvbihjYy52Mig1NSwgNzApKTtcbiAgICAgICAgICB0LmFkZENoaWxkKG8pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgbyAmJiAoby5hY3RpdmUgPSBmYWxzZSk7XG4gICAgfVxuICB9XG4gIG9uU2lnbkJ0bl9vbkxvYWQodCwgZSkge1xuICAgIHZhciBvO1xuICAgIHRyeSB7XG4gICAgICB2YXIgaSA9IG51bGwgPT09IChvID0gdC5pbnMpIHx8IHZvaWQgMCA9PT0gbyA/IHZvaWQgMCA6IG8ubm9kZTtcbiAgICAgIGlmICghY2MuaXNWYWxpZChpKSkge1xuICAgICAgICBlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciByID0gdGhpcy5zaG91bGRTaG93UmVkRG90KCk7XG4gICAgICB0aGlzLnVwZGF0ZVJlZERvdE9uTm9kZShpLCByKTtcbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiW0hhbGxTaWduQnRuUlBUcmFpdF0gb25TaWduQnRuX29uTG9hZCDlvILluLg6IFwiICsgKG51bGwgPT0gdCA/IHZvaWQgMCA6IHQubWVzc2FnZSkpO1xuICAgIH1cbiAgICBlKCk7XG4gIH1cbiAgb25TaWduQnRuX3VwZGF0ZUxvY2sodCwgZSkge1xuICAgIHZhciBvO1xuICAgIHRyeSB7XG4gICAgICB2YXIgaSA9IG51bGwgPT09IChvID0gdC5pbnMpIHx8IHZvaWQgMCA9PT0gbyA/IHZvaWQgMCA6IG8ubm9kZTtcbiAgICAgIGlmICghY2MuaXNWYWxpZChpKSkge1xuICAgICAgICBlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciByID0gdGhpcy5zaG91bGRTaG93UmVkRG90KCk7XG4gICAgICB0aGlzLnVwZGF0ZVJlZERvdE9uTm9kZShpLCByKTtcbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiW0hhbGxTaWduQnRuUlBUcmFpdF0gb25TaWduQnRuX3VwZGF0ZUxvY2sg5byC5bi4OiBcIiArIChudWxsID09IHQgPyB2b2lkIDAgOiB0Lm1lc3NhZ2UpKTtcbiAgICB9XG4gICAgZSgpO1xuICB9XG4gIG9uU2lnbkJ0bl9jbGljayh0LCBlKSB7XG4gICAgdmFyIG8sXG4gICAgICBpID0gbnVsbCA9PT0gKG8gPSB0LmlucykgfHwgdm9pZCAwID09PSBvID8gdm9pZCAwIDogby5ub2RlO1xuICAgIGlmIChjYy5pc1ZhbGlkKGkpKSB7XG4gICAgICB2YXIgciA9IGkuZ2V0Q2hpbGRCeU5hbWUoXCJ1bmxvY2tSZWREb3Rfc2lnblwiKTtcbiAgICAgIGlmIChyICYmIHIuYWN0aXZlKSB7XG4gICAgICAgIHRoaXMuc2V0Q2xpY2tlZCgpO1xuICAgICAgICByLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICBlKCk7XG4gIH1cbiAgb25TaWduQnRuX2NoZWNrUmVkRG90KHQsIGUpIHtcbiAgICB2YXIgbyxcbiAgICAgIGkgPSBudWxsID09PSAobyA9IHQuaW5zKSB8fCB2b2lkIDAgPT09IG8gPyB2b2lkIDAgOiBvLm5vZGU7XG4gICAgaWYgKGNjLmlzVmFsaWQoaSkgJiYgdGhpcy5zaG91bGRTaG93UmVkRG90KCkpIHtcbiAgICAgIHZhciByID0gaS5nZXRDaGlsZEJ5TmFtZShcImltZ19yZWRcIik7XG4gICAgICByICYmIChyLmFjdGl2ZSA9IGZhbHNlKTtcbiAgICB9XG4gICAgZSgpO1xuICB9XG4gIG9uU2lnbkJ0bl91cGRhdGVSZWREb3QodCwgZSkge1xuICAgIGlmICh0aGlzLnNob3VsZFNob3dSZWREb3QoKSkge1xuICAgICAgZSh7XG4gICAgICAgIGlzQnJlYWs6IHRydWVcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBlKCk7XG4gICAgfVxuICB9XG4gIG9uRFNDbGFzc2ljX3Nob3dQb3BWdyh0LCBlKSB7XG4gICAgdmFyIG8sIGk7XG4gICAgaWYgKHRoaXMuc2hvdWxkU2hvd1JlZERvdCgpKSB7XG4gICAgICBudWxsID09PSAoaSA9IG51bGwgPT09IChvID0gdC5pbnMpIHx8IHZvaWQgMCA9PT0gbyA/IHZvaWQgMCA6IG8udXBkYXRlU2V0dGluZ1JlZERvdCkgfHwgdm9pZCAwID09PSBpIHx8IGkuY2FsbChvKTtcbiAgICAgIGUoe1xuICAgICAgICByZXR1cm5WYWw6IGZhbHNlLFxuICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm5cbiAgICAgIH0pO1xuICAgIH0gZWxzZSBlKCk7XG4gIH1cbn0iXX0=