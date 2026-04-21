
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_hallRedPoint/Scripts/HallRankBtnRPTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e98fd++VPxJCZ0ASgLNo4e5', 'HallRankBtnRPTrait');
// subpackages/l_hallRedPoint/Scripts/HallRankBtnRPTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var BaseSprite_1 = require("../../../Scripts/gamePlay/base/ui/BaseSprite");
var HallRankBtnRPTrait = /** @class */ (function (_super) {
    __extends(HallRankBtnRPTrait, _super);
    function HallRankBtnRPTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._config = {};
        return _this;
    }
    HallRankBtnRPTrait_1 = HallRankBtnRPTrait;
    Object.defineProperty(HallRankBtnRPTrait.prototype, "isClicked", {
        get: function () {
            return true === this.localData.clicked;
        },
        enumerable: false,
        configurable: true
    });
    HallRankBtnRPTrait.prototype.setClicked = function () {
        this.localData.clicked = true;
    };
    HallRankBtnRPTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._config = this._traitData || {};
    };
    HallRankBtnRPTrait.prototype.isEnabled = function () {
        var t;
        return null !== (t = this._config.enabled) && void 0 !== t ? t : HallRankBtnRPTrait_1.DEFAULT_CONFIG.enabled;
    };
    HallRankBtnRPTrait.prototype.getRedDotPath = function () {
        return this._config.redDotPath || HallRankBtnRPTrait_1.DEFAULT_CONFIG.redDotPath;
    };
    HallRankBtnRPTrait.prototype.shouldShowRedDot = function () {
        if (!this.isEnabled())
            return false;
        if (this.isClicked)
            return false;
        var t = mj.getClassByName("HallRankBtnLockTrait"), e = null == t ? void 0 : t.getInstance();
        return !(true === (null == e ? void 0 : e.eventEnabled) && !e.isRankOpen());
    };
    HallRankBtnRPTrait.prototype.updateRedDotOnNode = function (t, e) {
        if (cc.isValid(t)) {
            var o = t.getChildByName("unlockRedDot_rank");
            if (e) {
                if (o)
                    o.active = true;
                else if (o = new cc.Node("unlockRedDot_rank")) {
                    var i = o.addComponent(cc.Sprite);
                    if (i) {
                        i.sizeMode = cc.Sprite.SizeMode.RAW;
                        i.trim = false;
                    }
                    BaseSprite_1.default.refreshWithNode(o, this.getRedDotPath(), false, false, "mainRes");
                    o.setPosition(55, 78);
                    t.addChild(o);
                }
            }
            else
                o && (o.active = false);
        }
    };
    HallRankBtnRPTrait.prototype.onRankBtn_updateAll = function (t, e) {
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
            console.error("[HallRankBtnRPTrait] onRankBtn_updateAll 异常: " + (null == t ? void 0 : t.message));
        }
        e();
    };
    HallRankBtnRPTrait.prototype.onRankBtn_click = function (t, e) {
        var o, i = null === (o = t.ins) || void 0 === o ? void 0 : o.node;
        if (cc.isValid(i)) {
            var r = i.getChildByName("unlockRedDot_rank");
            if (r && r.active) {
                this.setClicked();
                r.active = false;
            }
        }
        e();
    };
    var HallRankBtnRPTrait_1;
    HallRankBtnRPTrait.traitKey = "HallRankBtnRP";
    HallRankBtnRPTrait.DEFAULT_CONFIG = {
        enabled: true,
        redDotPath: "texture/gamePlay/gameplay_img_hongdian"
    };
    HallRankBtnRPTrait = HallRankBtnRPTrait_1 = __decorate([
        mj.trait,
        mj.class("HallRankBtnRPTrait")
    ], HallRankBtnRPTrait);
    return HallRankBtnRPTrait;
}(Trait_1.default));
exports.default = HallRankBtnRPTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2hhbGxSZWRQb2ludC9TY3JpcHRzL0hhbGxSYW5rQnRuUlBUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELDJFQUFzRTtBQUd0RTtJQUFnRCxzQ0FBSztJQUFyRDtRQUFBLHFFQTJFQztRQTFFQyxhQUFPLEdBQUcsRUFBRSxDQUFDOztJQTBFZixDQUFDOzJCQTNFb0Isa0JBQWtCO0lBT3JDLHNCQUFJLHlDQUFTO2FBQWI7WUFDRSxPQUFPLElBQUksS0FBSyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQztRQUN6QyxDQUFDOzs7T0FBQTtJQUNELHVDQUFVLEdBQVY7UUFDRSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDaEMsQ0FBQztJQUNELG1DQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsSUFBSSxFQUFFLENBQUM7SUFDdkMsQ0FBQztJQUNELHNDQUFTLEdBQVQ7UUFDRSxJQUFJLENBQUMsQ0FBQztRQUNOLE9BQU8sSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLG9CQUFrQixDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUM7SUFDN0csQ0FBQztJQUNELDBDQUFhLEdBQWI7UUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxJQUFJLG9CQUFrQixDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUM7SUFDakYsQ0FBQztJQUNELDZDQUFnQixHQUFoQjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQUUsT0FB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QUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQzdELElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNqQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsY0FBYyxDQUFDLG1CQUFtQixDQUFDLENBQUM7WUFDOUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRTtnQkFDakIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUNsQixDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzthQUNsQjtTQUNGO1FBQ0QsQ0FBQyxFQUFFLENBQUM7SUFDTixDQUFDOztJQXhFTSwyQkFBUSxHQUFHLGVBQWUsQ0FBQztJQUMzQixpQ0FBYyxHQUFHO1FBQ3RCLE9BQU8sRUFBRSxJQUFJO1FBQ2IsVUFBVSxFQUFFLHdDQUF3QztLQUNyRCxDQUFDO0lBTmlCLGtCQUFrQjtRQUZ0QyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUM7T0FDVixrQkFBa0IsQ0EyRXRDO0lBQUQseUJBQUM7Q0EzRUQsQUEyRUMsQ0EzRStDLGVBQUssR0EyRXBEO2tCQTNFb0Isa0JBQWtCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCBCYXNlU3ByaXRlIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvYmFzZS91aS9CYXNlU3ByaXRlJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiSGFsbFJhbmtCdG5SUFRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIYWxsUmFua0J0blJQVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIF9jb25maWcgPSB7fTtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJIYWxsUmFua0J0blJQXCI7XG4gIHN0YXRpYyBERUZBVUxUX0NPTkZJRyA9IHtcbiAgICBlbmFibGVkOiB0cnVlLFxuICAgIHJlZERvdFBhdGg6IFwidGV4dHVyZS9nYW1lUGxheS9nYW1lcGxheV9pbWdfaG9uZ2RpYW5cIlxuICB9O1xuICBnZXQgaXNDbGlja2VkKCkge1xuICAgIHJldHVybiB0cnVlID09PSB0aGlzLmxvY2FsRGF0YS5jbGlja2VkO1xuICB9XG4gIHNldENsaWNrZWQoKSB7XG4gICAgdGhpcy5sb2NhbERhdGEuY2xpY2tlZCA9IHRydWU7XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX3RyYWl0RGF0YSB8fCB7fTtcbiAgfVxuICBpc0VuYWJsZWQoKSB7XG4gICAgdmFyIHQ7XG4gICAgcmV0dXJuIG51bGwgIT09ICh0ID0gdGhpcy5fY29uZmlnLmVuYWJsZWQpICYmIHZvaWQgMCAhPT0gdCA/IHQgOiBIYWxsUmFua0J0blJQVHJhaXQuREVGQVVMVF9DT05GSUcuZW5hYmxlZDtcbiAgfVxuICBnZXRSZWREb3RQYXRoKCkge1xuICAgIHJldHVybiB0aGlzLl9jb25maWcucmVkRG90UGF0aCB8fCBIYWxsUmFua0J0blJQVHJhaXQuREVGQVVMVF9DT05GSUcucmVkRG90UGF0aDtcbiAgfVxuICBzaG91bGRTaG93UmVkRG90KCkge1xuICAgIGlmICghdGhpcy5pc0VuYWJsZWQoKSkgcmV0dXJuIGZhbHNlO1xuICAgIGlmICh0aGlzLmlzQ2xpY2tlZCkgcmV0dXJuIGZhbHNlO1xuICAgIHZhciB0ID0gbWouZ2V0Q2xhc3NCeU5hbWUoXCJIYWxsUmFua0J0bkxvY2tUcmFpdFwiKSxcbiAgICAgIGUgPSBudWxsID09IHQgPyB2b2lkIDAgOiB0LmdldEluc3RhbmNlKCk7XG4gICAgcmV0dXJuICEodHJ1ZSA9PT0gKG51bGwgPT0gZSA/IHZvaWQgMCA6IGUuZXZlbnRFbmFibGVkKSAmJiAhZS5pc1JhbmtPcGVuKCkpO1xuICB9XG4gIHVwZGF0ZVJlZERvdE9uTm9kZSh0LCBlKSB7XG4gICAgaWYgKGNjLmlzVmFsaWQodCkpIHtcbiAgICAgIHZhciBvID0gdC5nZXRDaGlsZEJ5TmFtZShcInVubG9ja1JlZERvdF9yYW5rXCIpO1xuICAgICAgaWYgKGUpIHtcbiAgICAgICAgaWYgKG8pIG8uYWN0aXZlID0gdHJ1ZTtlbHNlIGlmIChvID0gbmV3IGNjLk5vZGUoXCJ1bmxvY2tSZWREb3RfcmFua1wiKSkge1xuICAgICAgICAgIHZhciBpID0gby5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgICBpZiAoaSkge1xuICAgICAgICAgICAgaS5zaXplTW9kZSA9IGNjLlNwcml0ZS5TaXplTW9kZS5SQVc7XG4gICAgICAgICAgICBpLnRyaW0gPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgQmFzZVNwcml0ZS5yZWZyZXNoV2l0aE5vZGUobywgdGhpcy5nZXRSZWREb3RQYXRoKCksIGZhbHNlLCBmYWxzZSwgXCJtYWluUmVzXCIpO1xuICAgICAgICAgIG8uc2V0UG9zaXRpb24oNTUsIDc4KTtcbiAgICAgICAgICB0LmFkZENoaWxkKG8pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgbyAmJiAoby5hY3RpdmUgPSBmYWxzZSk7XG4gICAgfVxuICB9XG4gIG9uUmFua0J0bl91cGRhdGVBbGwodCwgZSkge1xuICAgIHZhciBvO1xuICAgIHRyeSB7XG4gICAgICB2YXIgaSA9IG51bGwgPT09IChvID0gdC5pbnMpIHx8IHZvaWQgMCA9PT0gbyA/IHZvaWQgMCA6IG8ubm9kZTtcbiAgICAgIGlmICghY2MuaXNWYWxpZChpKSkge1xuICAgICAgICBlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciByID0gdGhpcy5zaG91bGRTaG93UmVkRG90KCk7XG4gICAgICB0aGlzLnVwZGF0ZVJlZERvdE9uTm9kZShpLCByKTtcbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiW0hhbGxSYW5rQnRuUlBUcmFpdF0gb25SYW5rQnRuX3VwZGF0ZUFsbCDlvILluLg6IFwiICsgKG51bGwgPT0gdCA/IHZvaWQgMCA6IHQubWVzc2FnZSkpO1xuICAgIH1cbiAgICBlKCk7XG4gIH1cbiAgb25SYW5rQnRuX2NsaWNrKHQsIGUpIHtcbiAgICB2YXIgbyxcbiAgICAgIGkgPSBudWxsID09PSAobyA9IHQuaW5zKSB8fCB2b2lkIDAgPT09IG8gPyB2b2lkIDAgOiBvLm5vZGU7XG4gICAgaWYgKGNjLmlzVmFsaWQoaSkpIHtcbiAgICAgIHZhciByID0gaS5nZXRDaGlsZEJ5TmFtZShcInVubG9ja1JlZERvdF9yYW5rXCIpO1xuICAgICAgaWYgKHIgJiYgci5hY3RpdmUpIHtcbiAgICAgICAgdGhpcy5zZXRDbGlja2VkKCk7XG4gICAgICAgIHIuYWN0aXZlID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIGUoKTtcbiAgfVxufSJdfQ==