
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_hallRedPoint/Scripts/HallTaskBtnRPTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b0f0c5vJjJNrKvA7Z0V8CZx', 'HallTaskBtnRPTrait');
// subpackages/l_hallRedPoint/Scripts/HallTaskBtnRPTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var BaseSprite_1 = require("../../../Scripts/gamePlay/base/ui/BaseSprite");
var HallTaskBtnRPTrait = /** @class */ (function (_super) {
    __extends(HallTaskBtnRPTrait, _super);
    function HallTaskBtnRPTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._config = {};
        return _this;
    }
    HallTaskBtnRPTrait_1 = HallTaskBtnRPTrait;
    Object.defineProperty(HallTaskBtnRPTrait.prototype, "isClicked", {
        get: function () {
            return true === this.localData.clicked;
        },
        enumerable: false,
        configurable: true
    });
    HallTaskBtnRPTrait.prototype.setClicked = function () {
        this.localData.clicked = true;
    };
    HallTaskBtnRPTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._config = this._traitData || {};
    };
    HallTaskBtnRPTrait.prototype.isEnabled = function () {
        var t;
        return null !== (t = this._config.enabled) && void 0 !== t ? t : HallTaskBtnRPTrait_1.DEFAULT_CONFIG.enabled;
    };
    HallTaskBtnRPTrait.prototype.getRedDotPath = function () {
        return this._config.redDotPath || HallTaskBtnRPTrait_1.DEFAULT_CONFIG.redDotPath;
    };
    HallTaskBtnRPTrait.prototype.shouldShowRedDot = function () {
        var t, e;
        if (!this.isEnabled())
            return false;
        if (this.isClicked)
            return false;
        var o = null === (e = null === (t = mj.getClassByName("TaskModel")) || void 0 === t ? void 0 : t.getInstance) || void 0 === e ? void 0 : e.call(t);
        return !(null == o || !o.isTaskOpen());
    };
    HallTaskBtnRPTrait.prototype.updateRedDotOnNode = function (t, e) {
        if (cc.isValid(t)) {
            var o = t.getChildByName("unlockRedDot_task");
            if (e) {
                var i = cc.find("Bg/item_lock", t);
                i && (i.active = false);
                var r = cc.find("Bg/sp_red", t);
                r && (r.active = false);
                if (o)
                    o.active = true;
                else if (o = new cc.Node("unlockRedDot_task")) {
                    var n = o.addComponent(cc.Sprite);
                    n && (n.sizeMode = cc.Sprite.SizeMode.RAW);
                    BaseSprite_1.default.refreshWithNode(o, this.getRedDotPath(), false, false, "mainRes");
                    o.setPosition(cc.v2(60, 70));
                    t.addChild(o);
                }
            }
            else
                o && (o.active = false);
        }
    };
    HallTaskBtnRPTrait.prototype.onTaskTt_updateLock = function (t, e) {
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
            console.error("[HallTaskBtnRPTrait] onTaskTt_updateLock 异常: " + (null == t ? void 0 : t.message));
        }
        e();
    };
    HallTaskBtnRPTrait.prototype.onTaskTt_onBtnClick = function (t, e) {
        var o, i = null === (o = t.ins) || void 0 === o ? void 0 : o.node;
        if (cc.isValid(i)) {
            var r = i.getChildByName("unlockRedDot_task");
            if (r && r.active) {
                this.setClicked();
                r.active = false;
            }
        }
        e();
    };
    HallTaskBtnRPTrait.prototype.onTaskAutoPopT_showPopVw = function (t, e) {
        var o;
        if (this.shouldShowRedDot()) {
            var i = null === (o = t.args) || void 0 === o ? void 0 : o[0];
            null == i || i(false);
            e({
                returnVal: false,
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return
            });
        }
        else
            e();
    };
    HallTaskBtnRPTrait.prototype.onDSSimple_showPopVw = function (t, e) {
        if (this.shouldShowRedDot()) {
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
    HallTaskBtnRPTrait.prototype.onDailyTaskPush_showTaskVw = function (t, e) {
        var o;
        if (this.shouldShowRedDot()) {
            var i = null === (o = t.args) || void 0 === o ? void 0 : o[1];
            null == i || i(false);
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return
            });
        }
        else
            e();
    };
    var HallTaskBtnRPTrait_1;
    HallTaskBtnRPTrait.traitKey = "HallTaskBtnRP";
    HallTaskBtnRPTrait.DEFAULT_CONFIG = {
        enabled: true,
        redDotPath: "texture/gamePlay/gameplay_img_hongdian"
    };
    HallTaskBtnRPTrait = HallTaskBtnRPTrait_1 = __decorate([
        mj.trait,
        mj.class("HallTaskBtnRPTrait")
    ], HallTaskBtnRPTrait);
    return HallTaskBtnRPTrait;
}(Trait_1.default));
exports.default = HallTaskBtnRPTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2hhbGxSZWRQb2ludC9TY3JpcHRzL0hhbGxUYXNrQnRuUlBUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELDhFQUF3RjtBQUN4RiwyRUFBc0U7QUFHdEU7SUFBZ0Qsc0NBQUs7SUFBckQ7UUFBQSxxRUE4R0M7UUE3R0MsYUFBTyxHQUFHLEVBQUUsQ0FBQzs7SUE2R2YsQ0FBQzsyQkE5R29CLGtCQUFrQjtJQU9yQyxzQkFBSSx5Q0FBUzthQUFiO1lBQ0UsT0FBTyxJQUFJLEtBQUssSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUM7UUFDekMsQ0FBQzs7O09BQUE7SUFDRCx1Q0FBVSxHQUFWO1FBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ2hDLENBQUM7SUFDRCxtQ0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLElBQUksRUFBRSxDQUFDO0lBQ3ZDLENBQUM7SUFDRCxzQ0FBUyxHQUFUO1FBQ0UsSUFBSSxDQUFDLENBQUM7UUFDTixPQUFPLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxvQkFBa0IsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDO0lBQzdHLENBQUM7SUFDRCwwQ0FBYSxHQUFiO1FBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsSUFBSSxvQkFBa0IsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDO0lBQ2pGLENBQUM7SUFDRCw2Q0FBZ0IsR0FBaEI7UUFDRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7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QUUsQ0FBQztJQUNiLENBQUM7O0lBM0dNLDJCQUFRLEdBQUcsZUFBZSxDQUFDO0lBQzNCLGlDQUFjLEdBQUc7UUFDdEIsT0FBTyxFQUFFLElBQUk7UUFDYixVQUFVLEVBQUUsd0NBQXdDO0tBQ3JELENBQUM7SUFOaUIsa0JBQWtCO1FBRnRDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQztPQUNWLGtCQUFrQixDQThHdEM7SUFBRCx5QkFBQztDQTlHRCxBQThHQyxDQTlHK0MsZUFBSyxHQThHcEQ7a0JBOUdvQixrQkFBa0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IHsgVHJhaXRDYWxsYmFja1JldHVyblR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdE1hbmFnZXInO1xuaW1wb3J0IEJhc2VTcHJpdGUgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS9iYXNlL3VpL0Jhc2VTcHJpdGUnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJIYWxsVGFza0J0blJQVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhhbGxUYXNrQnRuUlBUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgX2NvbmZpZyA9IHt9O1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIkhhbGxUYXNrQnRuUlBcIjtcbiAgc3RhdGljIERFRkFVTFRfQ09ORklHID0ge1xuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgcmVkRG90UGF0aDogXCJ0ZXh0dXJlL2dhbWVQbGF5L2dhbWVwbGF5X2ltZ19ob25nZGlhblwiXG4gIH07XG4gIGdldCBpc0NsaWNrZWQoKSB7XG4gICAgcmV0dXJuIHRydWUgPT09IHRoaXMubG9jYWxEYXRhLmNsaWNrZWQ7XG4gIH1cbiAgc2V0Q2xpY2tlZCgpIHtcbiAgICB0aGlzLmxvY2FsRGF0YS5jbGlja2VkID0gdHJ1ZTtcbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5fY29uZmlnID0gdGhpcy5fdHJhaXREYXRhIHx8IHt9O1xuICB9XG4gIGlzRW5hYmxlZCgpIHtcbiAgICB2YXIgdDtcbiAgICByZXR1cm4gbnVsbCAhPT0gKHQgPSB0aGlzLl9jb25maWcuZW5hYmxlZCkgJiYgdm9pZCAwICE9PSB0ID8gdCA6IEhhbGxUYXNrQnRuUlBUcmFpdC5ERUZBVUxUX0NPTkZJRy5lbmFibGVkO1xuICB9XG4gIGdldFJlZERvdFBhdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZy5yZWREb3RQYXRoIHx8IEhhbGxUYXNrQnRuUlBUcmFpdC5ERUZBVUxUX0NPTkZJRy5yZWREb3RQYXRoO1xuICB9XG4gIHNob3VsZFNob3dSZWREb3QoKSB7XG4gICAgdmFyIHQsIGU7XG4gICAgaWYgKCF0aGlzLmlzRW5hYmxlZCgpKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKHRoaXMuaXNDbGlja2VkKSByZXR1cm4gZmFsc2U7XG4gICAgdmFyIG8gPSBudWxsID09PSAoZSA9IG51bGwgPT09ICh0ID0gbWouZ2V0Q2xhc3NCeU5hbWUoXCJUYXNrTW9kZWxcIikpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQuZ2V0SW5zdGFuY2UpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUuY2FsbCh0KTtcbiAgICByZXR1cm4gIShudWxsID09IG8gfHwgIW8uaXNUYXNrT3BlbigpKTtcbiAgfVxuICB1cGRhdGVSZWREb3RPbk5vZGUodCwgZSkge1xuICAgIGlmIChjYy5pc1ZhbGlkKHQpKSB7XG4gICAgICB2YXIgbyA9IHQuZ2V0Q2hpbGRCeU5hbWUoXCJ1bmxvY2tSZWREb3RfdGFza1wiKTtcbiAgICAgIGlmIChlKSB7XG4gICAgICAgIHZhciBpID0gY2MuZmluZChcIkJnL2l0ZW1fbG9ja1wiLCB0KTtcbiAgICAgICAgaSAmJiAoaS5hY3RpdmUgPSBmYWxzZSk7XG4gICAgICAgIHZhciByID0gY2MuZmluZChcIkJnL3NwX3JlZFwiLCB0KTtcbiAgICAgICAgciAmJiAoci5hY3RpdmUgPSBmYWxzZSk7XG4gICAgICAgIGlmIChvKSBvLmFjdGl2ZSA9IHRydWU7ZWxzZSBpZiAobyA9IG5ldyBjYy5Ob2RlKFwidW5sb2NrUmVkRG90X3Rhc2tcIikpIHtcbiAgICAgICAgICB2YXIgbiA9IG8uYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgICAgbiAmJiAobi5zaXplTW9kZSA9IGNjLlNwcml0ZS5TaXplTW9kZS5SQVcpO1xuICAgICAgICAgIEJhc2VTcHJpdGUucmVmcmVzaFdpdGhOb2RlKG8sIHRoaXMuZ2V0UmVkRG90UGF0aCgpLCBmYWxzZSwgZmFsc2UsIFwibWFpblJlc1wiKTtcbiAgICAgICAgICBvLnNldFBvc2l0aW9uKGNjLnYyKDYwLCA3MCkpO1xuICAgICAgICAgIHQuYWRkQ2hpbGQobyk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBvICYmIChvLmFjdGl2ZSA9IGZhbHNlKTtcbiAgICB9XG4gIH1cbiAgb25UYXNrVHRfdXBkYXRlTG9jayh0LCBlKSB7XG4gICAgdmFyIG87XG4gICAgdHJ5IHtcbiAgICAgIHZhciBpID0gbnVsbCA9PT0gKG8gPSB0LmlucykgfHwgdm9pZCAwID09PSBvID8gdm9pZCAwIDogby5ub2RlO1xuICAgICAgaWYgKCFjYy5pc1ZhbGlkKGkpKSB7XG4gICAgICAgIGUoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIHIgPSB0aGlzLnNob3VsZFNob3dSZWREb3QoKTtcbiAgICAgIHRoaXMudXBkYXRlUmVkRG90T25Ob2RlKGksIHIpO1xuICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJbSGFsbFRhc2tCdG5SUFRyYWl0XSBvblRhc2tUdF91cGRhdGVMb2NrIOW8guW4uDogXCIgKyAobnVsbCA9PSB0ID8gdm9pZCAwIDogdC5tZXNzYWdlKSk7XG4gICAgfVxuICAgIGUoKTtcbiAgfVxuICBvblRhc2tUdF9vbkJ0bkNsaWNrKHQsIGUpIHtcbiAgICB2YXIgbyxcbiAgICAgIGkgPSBudWxsID09PSAobyA9IHQuaW5zKSB8fCB2b2lkIDAgPT09IG8gPyB2b2lkIDAgOiBvLm5vZGU7XG4gICAgaWYgKGNjLmlzVmFsaWQoaSkpIHtcbiAgICAgIHZhciByID0gaS5nZXRDaGlsZEJ5TmFtZShcInVubG9ja1JlZERvdF90YXNrXCIpO1xuICAgICAgaWYgKHIgJiYgci5hY3RpdmUpIHtcbiAgICAgICAgdGhpcy5zZXRDbGlja2VkKCk7XG4gICAgICAgIHIuYWN0aXZlID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIGUoKTtcbiAgfVxuICBvblRhc2tBdXRvUG9wVF9zaG93UG9wVncodCwgZSkge1xuICAgIHZhciBvO1xuICAgIGlmICh0aGlzLnNob3VsZFNob3dSZWREb3QoKSkge1xuICAgICAgdmFyIGkgPSBudWxsID09PSAobyA9IHQuYXJncykgfHwgdm9pZCAwID09PSBvID8gdm9pZCAwIDogb1swXTtcbiAgICAgIG51bGwgPT0gaSB8fCBpKGZhbHNlKTtcbiAgICAgIGUoe1xuICAgICAgICByZXR1cm5WYWw6IGZhbHNlLFxuICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm5cbiAgICAgIH0pO1xuICAgIH0gZWxzZSBlKCk7XG4gIH1cbiAgb25EU1NpbXBsZV9zaG93UG9wVncodCwgZSkge1xuICAgIGlmICh0aGlzLnNob3VsZFNob3dSZWREb3QoKSkge1xuICAgICAgZSh7XG4gICAgICAgIHJldHVyblZhbDogZmFsc2UsXG4gICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVyblxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGUoKTtcbiAgICB9XG4gIH1cbiAgb25EYWlseVRhc2tQdXNoX3Nob3dUYXNrVncodCwgZSkge1xuICAgIHZhciBvO1xuICAgIGlmICh0aGlzLnNob3VsZFNob3dSZWREb3QoKSkge1xuICAgICAgdmFyIGkgPSBudWxsID09PSAobyA9IHQuYXJncykgfHwgdm9pZCAwID09PSBvID8gdm9pZCAwIDogb1sxXTtcbiAgICAgIG51bGwgPT0gaSB8fCBpKGZhbHNlKTtcbiAgICAgIGUoe1xuICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm5cbiAgICAgIH0pO1xuICAgIH0gZWxzZSBlKCk7XG4gIH1cbn0iXX0=