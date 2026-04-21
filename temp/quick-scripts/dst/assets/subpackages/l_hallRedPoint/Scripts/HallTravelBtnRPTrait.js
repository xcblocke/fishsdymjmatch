
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_hallRedPoint/Scripts/HallTravelBtnRPTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '557b4tIv+BCX7OMHeycAm8W', 'HallTravelBtnRPTrait');
// subpackages/l_hallRedPoint/Scripts/HallTravelBtnRPTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var BaseSprite_1 = require("../../../Scripts/gamePlay/base/ui/BaseSprite");
var HallTravelBtnRPTrait = /** @class */ (function (_super) {
    __extends(HallTravelBtnRPTrait, _super);
    function HallTravelBtnRPTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._config = {};
        _this._curSessionRed = false;
        return _this;
    }
    HallTravelBtnRPTrait_1 = HallTravelBtnRPTrait;
    Object.defineProperty(HallTravelBtnRPTrait.prototype, "isClicked", {
        get: function () {
            return true === this.localData.clicked;
        },
        enumerable: false,
        configurable: true
    });
    HallTravelBtnRPTrait.prototype.setClicked = function () {
        this.localData.clicked = true;
    };
    HallTravelBtnRPTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._curSessionRed = false;
        this._config = this._traitData || {};
    };
    HallTravelBtnRPTrait.prototype.isEnabled = function () {
        var t;
        return null !== (t = this._config.enabled) && void 0 !== t ? t : HallTravelBtnRPTrait_1.DEFAULT_CONFIG.enabled;
    };
    HallTravelBtnRPTrait.prototype.getRedDotPath = function () {
        return this._config.redDotPath || HallTravelBtnRPTrait_1.DEFAULT_CONFIG.redDotPath;
    };
    HallTravelBtnRPTrait.prototype.isTravelUnlocked = function () {
        try {
            var t = mj.getClassByName("JourneyTrait");
            if (null == t ? void 0 : t.getInstance) {
                var e = t.getInstance();
                if (null == e ? void 0 : e.isActiveJourney)
                    return e.isActiveJourney();
            }
        }
        catch (t) { }
        return false;
    };
    HallTravelBtnRPTrait.prototype.shouldShowRedDot = function () {
        return !!this.isEnabled() && !!this.isTravelUnlocked() && !this.isClicked;
    };
    HallTravelBtnRPTrait.prototype.updateRedDotOnNode = function (t, e, o) {
        var i;
        if (cc.isValid(e)) {
            var r = e.getChildByName("unlockRedDot_travel");
            if (o) {
                t.redDotNode && cc.isValid(t.redDotNode) && (t.redDotNode.active = false);
                if (r)
                    r.active = true;
                else if (r = new cc.Node("unlockRedDot_travel")) {
                    r.addComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.RAW;
                    BaseSprite_1.default.refreshWithNode(r, this.getRedDotPath(), false, false, "mainRes");
                    var n = this.getDotPos(t);
                    r.setPosition(n);
                    e.addChild(r);
                }
            }
            else {
                r && (r.active = false);
                null === (i = t.updateState) || void 0 === i || i.call(t);
            }
        }
    };
    HallTravelBtnRPTrait.prototype.getDotPos = function () {
        return cc.v2(294, 80);
    };
    HallTravelBtnRPTrait.prototype.onTravelBtn_updateUI = function (t, e) {
        var o;
        try {
            var i = null === (o = t.ins) || void 0 === o ? void 0 : o.node;
            if (!cc.isValid(i)) {
                e();
                return;
            }
            var r = this.shouldShowRedDot();
            r && (this._curSessionRed = true);
            this.updateRedDotOnNode(t.ins, i, r);
        }
        catch (t) {
            console.error("[HallTravelBtnRPTrait] onTravelBtn_updateUI 异常: " + (null == t ? void 0 : t.message));
        }
        e();
    };
    HallTravelBtnRPTrait.prototype.onTravelBtn_onBtnClick = function (t, e) {
        var o, i = null === (o = t.ins) || void 0 === o ? void 0 : o.node;
        if (cc.isValid(i)) {
            var r = i.getChildByName("unlockRedDot_travel");
            if (r && r.active) {
                this.setClicked();
                r.active = false;
            }
        }
        e();
    };
    HallTravelBtnRPTrait.prototype.onJourney_ShowActiveVw = function (t, e) {
        if (this._curSessionRed) {
            e({
                returnVal: false,
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return
            });
        }
        else {
            e();
        }
    };
    var HallTravelBtnRPTrait_1;
    HallTravelBtnRPTrait.traitKey = "HallTravelBtnRP";
    HallTravelBtnRPTrait.DEFAULT_CONFIG = {
        enabled: true,
        redDotPath: "texture/gamePlay/gameplay_img_hongdian"
    };
    __decorate([
        mj.traitEvent("HTravelBtnRP_getDotPos")
    ], HallTravelBtnRPTrait.prototype, "getDotPos", null);
    HallTravelBtnRPTrait = HallTravelBtnRPTrait_1 = __decorate([
        mj.trait,
        mj.class("HallTravelBtnRPTrait")
    ], HallTravelBtnRPTrait);
    return HallTravelBtnRPTrait;
}(Trait_1.default));
exports.default = HallTravelBtnRPTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2hhbGxSZWRQb2ludC9TY3JpcHRzL0hhbGxUcmF2ZWxCdG5SUFRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFDM0QsOEVBQXdGO0FBQ3hGLDJFQUFzRTtBQUd0RTtJQUFrRCx3Q0FBSztJQUF2RDtRQUFBLHFFQXFHQztRQXBHQyxhQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2Isb0JBQWMsR0FBRyxLQUFLLENBQUM7O0lBbUd6QixDQUFDOzZCQXJHb0Isb0JBQW9CO0lBUXZDLHNCQUFJLDJDQUFTO2FBQWI7WUFDRSxPQUFPLElBQUksS0FBSyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQztRQUN6QyxDQUFDOzs7T0FBQTtJQUNELHlDQUFVLEdBQVY7UUFDRSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDaEMsQ0FBQztJQUNELHFDQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1FBQzVCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsSUFBSSxFQUFFLENBQUM7SUFDdkMsQ0FBQztJQUNELHdDQUFTLEdBQVQ7UUFDRSxJQUFJLENBQUMsQ0FBQztRQUNOLE9BQU8sSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLHNCQUFvQixDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUM7SUFDL0csQ0FBQztJQUNELDRDQUFhLEdBQWI7UUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxJQUFJLHNCQUFvQixDQUFDLGNBQWMsQ0FBQyxVQUFV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LENBQUM7YUFDbEI7U0FDRjtRQUNELENBQUMsRUFBRSxDQUFDO0lBQ04sQ0FBQztJQUNELHFEQUFzQixHQUF0QixVQUF1QixDQUFDLEVBQUUsQ0FBQztRQUN6QixJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDdkIsQ0FBQyxDQUFDO2dCQUNBLFNBQVMsRUFBRSxLQUFLO2dCQUNoQixPQUFPLEVBQUUsSUFBSTtnQkFDYixVQUFVLEVBQUUsc0NBQXVCLENBQUMsTUFBTTthQUMzQyxDQUFDLENBQUM7U0FDSjthQUFNO1lBQ0wsQ0FBQyxFQUFFLENBQUM7U0FDTDtJQUNILENBQUM7O0lBakdNLDZCQUFRLEdBQUcsaUJBQWlCLENBQUM7SUFDN0IsbUNBQWMsR0FBRztRQUN0QixPQUFPLEVBQUUsSUFBSTtRQUNiLFVBQVUsRUFBRSx3Q0FBd0M7S0FDckQsQ0FBQztJQW9ERjtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsd0JBQXdCLENBQUM7eURBR3ZDO0lBN0RrQixvQkFBb0I7UUFGeEMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLHNCQUFzQixDQUFDO09BQ1osb0JBQW9CLENBcUd4QztJQUFELDJCQUFDO0NBckdELEFBcUdDLENBckdpRCxlQUFLLEdBcUd0RDtrQkFyR29CLG9CQUFvQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgeyBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0TWFuYWdlcic7XG5pbXBvcnQgQmFzZVNwcml0ZSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L2Jhc2UvdWkvQmFzZVNwcml0ZSc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIkhhbGxUcmF2ZWxCdG5SUFRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIYWxsVHJhdmVsQnRuUlBUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgX2NvbmZpZyA9IHt9O1xuICBfY3VyU2Vzc2lvblJlZCA9IGZhbHNlO1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIkhhbGxUcmF2ZWxCdG5SUFwiO1xuICBzdGF0aWMgREVGQVVMVF9DT05GSUcgPSB7XG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICByZWREb3RQYXRoOiBcInRleHR1cmUvZ2FtZVBsYXkvZ2FtZXBsYXlfaW1nX2hvbmdkaWFuXCJcbiAgfTtcbiAgZ2V0IGlzQ2xpY2tlZCgpIHtcbiAgICByZXR1cm4gdHJ1ZSA9PT0gdGhpcy5sb2NhbERhdGEuY2xpY2tlZDtcbiAgfVxuICBzZXRDbGlja2VkKCkge1xuICAgIHRoaXMubG9jYWxEYXRhLmNsaWNrZWQgPSB0cnVlO1xuICB9XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLl9jdXJTZXNzaW9uUmVkID0gZmFsc2U7XG4gICAgdGhpcy5fY29uZmlnID0gdGhpcy5fdHJhaXREYXRhIHx8IHt9O1xuICB9XG4gIGlzRW5hYmxlZCgpIHtcbiAgICB2YXIgdDtcbiAgICByZXR1cm4gbnVsbCAhPT0gKHQgPSB0aGlzLl9jb25maWcuZW5hYmxlZCkgJiYgdm9pZCAwICE9PSB0ID8gdCA6IEhhbGxUcmF2ZWxCdG5SUFRyYWl0LkRFRkFVTFRfQ09ORklHLmVuYWJsZWQ7XG4gIH1cbiAgZ2V0UmVkRG90UGF0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnLnJlZERvdFBhdGggfHwgSGFsbFRyYXZlbEJ0blJQVHJhaXQuREVGQVVMVF9DT05GSUcucmVkRG90UGF0aDtcbiAgfVxuICBpc1RyYXZlbFVubG9ja2VkKCkge1xuICAgIHRyeSB7XG4gICAgICB2YXIgdCA9IG1qLmdldENsYXNzQnlOYW1lKFwiSm91cm5leVRyYWl0XCIpO1xuICAgICAgaWYgKG51bGwgPT0gdCA/IHZvaWQgMCA6IHQuZ2V0SW5zdGFuY2UpIHtcbiAgICAgICAgdmFyIGUgPSB0LmdldEluc3RhbmNlKCk7XG4gICAgICAgIGlmIChudWxsID09IGUgPyB2b2lkIDAgOiBlLmlzQWN0aXZlSm91cm5leSkgcmV0dXJuIGUuaXNBY3RpdmVKb3VybmV5KCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAodCkge31cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc2hvdWxkU2hvd1JlZERvdCgpIHtcbiAgICByZXR1cm4gISF0aGlzLmlzRW5hYmxlZCgpICYmICEhdGhpcy5pc1RyYXZlbFVubG9ja2VkKCkgJiYgIXRoaXMuaXNDbGlja2VkO1xuICB9XG4gIHVwZGF0ZVJlZERvdE9uTm9kZSh0LCBlLCBvKSB7XG4gICAgdmFyIGk7XG4gICAgaWYgKGNjLmlzVmFsaWQoZSkpIHtcbiAgICAgIHZhciByID0gZS5nZXRDaGlsZEJ5TmFtZShcInVubG9ja1JlZERvdF90cmF2ZWxcIik7XG4gICAgICBpZiAobykge1xuICAgICAgICB0LnJlZERvdE5vZGUgJiYgY2MuaXNWYWxpZCh0LnJlZERvdE5vZGUpICYmICh0LnJlZERvdE5vZGUuYWN0aXZlID0gZmFsc2UpO1xuICAgICAgICBpZiAocikgci5hY3RpdmUgPSB0cnVlO2Vsc2UgaWYgKHIgPSBuZXcgY2MuTm9kZShcInVubG9ja1JlZERvdF90cmF2ZWxcIikpIHtcbiAgICAgICAgICByLmFkZENvbXBvbmVudChjYy5TcHJpdGUpLnNpemVNb2RlID0gY2MuU3ByaXRlLlNpemVNb2RlLlJBVztcbiAgICAgICAgICBCYXNlU3ByaXRlLnJlZnJlc2hXaXRoTm9kZShyLCB0aGlzLmdldFJlZERvdFBhdGgoKSwgZmFsc2UsIGZhbHNlLCBcIm1haW5SZXNcIik7XG4gICAgICAgICAgdmFyIG4gPSB0aGlzLmdldERvdFBvcyh0KTtcbiAgICAgICAgICByLnNldFBvc2l0aW9uKG4pO1xuICAgICAgICAgIGUuYWRkQ2hpbGQocik7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHIgJiYgKHIuYWN0aXZlID0gZmFsc2UpO1xuICAgICAgICBudWxsID09PSAoaSA9IHQudXBkYXRlU3RhdGUpIHx8IHZvaWQgMCA9PT0gaSB8fCBpLmNhbGwodCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiSFRyYXZlbEJ0blJQX2dldERvdFBvc1wiKVxuICBnZXREb3RQb3MoKSB7XG4gICAgcmV0dXJuIGNjLnYyKDI5NCwgODApO1xuICB9XG4gIG9uVHJhdmVsQnRuX3VwZGF0ZVVJKHQsIGUpIHtcbiAgICB2YXIgbztcbiAgICB0cnkge1xuICAgICAgdmFyIGkgPSBudWxsID09PSAobyA9IHQuaW5zKSB8fCB2b2lkIDAgPT09IG8gPyB2b2lkIDAgOiBvLm5vZGU7XG4gICAgICBpZiAoIWNjLmlzVmFsaWQoaSkpIHtcbiAgICAgICAgZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgciA9IHRoaXMuc2hvdWxkU2hvd1JlZERvdCgpO1xuICAgICAgciAmJiAodGhpcy5fY3VyU2Vzc2lvblJlZCA9IHRydWUpO1xuICAgICAgdGhpcy51cGRhdGVSZWREb3RPbk5vZGUodC5pbnMsIGksIHIpO1xuICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJbSGFsbFRyYXZlbEJ0blJQVHJhaXRdIG9uVHJhdmVsQnRuX3VwZGF0ZVVJIOW8guW4uDogXCIgKyAobnVsbCA9PSB0ID8gdm9pZCAwIDogdC5tZXNzYWdlKSk7XG4gICAgfVxuICAgIGUoKTtcbiAgfVxuICBvblRyYXZlbEJ0bl9vbkJ0bkNsaWNrKHQsIGUpIHtcbiAgICB2YXIgbyxcbiAgICAgIGkgPSBudWxsID09PSAobyA9IHQuaW5zKSB8fCB2b2lkIDAgPT09IG8gPyB2b2lkIDAgOiBvLm5vZGU7XG4gICAgaWYgKGNjLmlzVmFsaWQoaSkpIHtcbiAgICAgIHZhciByID0gaS5nZXRDaGlsZEJ5TmFtZShcInVubG9ja1JlZERvdF90cmF2ZWxcIik7XG4gICAgICBpZiAociAmJiByLmFjdGl2ZSkge1xuICAgICAgICB0aGlzLnNldENsaWNrZWQoKTtcbiAgICAgICAgci5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgZSgpO1xuICB9XG4gIG9uSm91cm5leV9TaG93QWN0aXZlVncodCwgZSkge1xuICAgIGlmICh0aGlzLl9jdXJTZXNzaW9uUmVkKSB7XG4gICAgICBlKHtcbiAgICAgICAgcmV0dXJuVmFsOiBmYWxzZSxcbiAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZSgpO1xuICAgIH1cbiAgfVxufSJdfQ==