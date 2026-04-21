
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_daxiaoAnim/Scripts/DaxiaoAnimTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '715924An2tCoYo0p3YEedBT', 'DaxiaoAnimTrait');
// subpackages/r_daxiaoAnim/Scripts/DaxiaoAnimTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var RandomGenerator_1 = require("../../../Scripts/core/simulator/structures/RandomGenerator");
var DaxiaoClearEffectBehavior_1 = require("../../../Scripts/base/DaxiaoClearEffectBehavior");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var LowPriorityBundleLoader_1 = require("../../../Scripts/gamePlay/base/ui/LowPriorityBundleLoader");
var CaiDaiAnimPlayer_1 = require("./CaiDaiAnimPlayer");
var GardenAnimPlayer_1 = require("./GardenAnimPlayer");
var GuofengAnimPlayer_1 = require("./GuofengAnimPlayer");
var HudieAnimPlayer_1 = require("./HudieAnimPlayer");
var MaxituanAnimPlayer_1 = require("./MaxituanAnimPlayer");
var c = {
    CaiDai: "CaiDai",
    Maxituan: "Maxituan",
    Garden: "Garden",
    Guofeng: "Guofeng",
    Hudie: "Hudie"
};
var DaxiaoAnimTrait = /** @class */ (function (_super) {
    __extends(DaxiaoAnimTrait, _super);
    function DaxiaoAnimTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._animConfig = [];
        _this._curTypeConfig = null;
        return _this;
    }
    DaxiaoAnimTrait.prototype.onLoad = function () {
        var t, i;
        _super.prototype.onLoad.call(this);
        this._animConfig = [{
                type: c.CaiDai,
                playAnimType: DaxiaoClearEffectBehavior_1.EDaxiaoPlayAnimType.CaiDai,
                bundle: "r_daxiaocaidai",
                ignoreShowTipEffect: true,
                nums: [4, 10]
            }, {
                type: c.Maxituan,
                playAnimType: DaxiaoClearEffectBehavior_1.EDaxiaoPlayAnimType.Maxituan,
                bundle: "r_daxiaomaxituan",
                flowLight: {
                    path: "spine/maxituan/gameplay_flowingLight_mx",
                    bundle: "r_daxiaomaxituan",
                    anim: "gameplay_flowingLight_mx_idle"
                },
                ignoreShowTipEffect: false,
                nums: [7, 7]
            }, {
                type: c.Garden,
                playAnimType: DaxiaoClearEffectBehavior_1.EDaxiaoPlayAnimType.Garden,
                bundle: "r_daxiaogarden",
                ignoreShowTipEffect: false,
                nums: [6, 9],
                flowLight: {
                    path: "spine/garden/gameplay_flowingLight",
                    bundle: "r_daxiaogarden",
                    anim: "idle"
                }
            }];
        this.extendAnims();
        try {
            for (var n = __values(this._animConfig), o = n.next(); !o.done; o = n.next()) {
                var a = o.value;
                LowPriorityBundleLoader_1.default.getInstance().addTask(a.bundle, LowPriorityBundleLoader_1.ELowPriorityBundlePriority.DefaultDaXiao);
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                o && !o.done && (i = n.return) && i.call(n);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
    };
    DaxiaoAnimTrait.prototype.getType = function (e) {
        var t, i, n = [];
        try {
            for (var o = __values(this._animConfig), a = o.next(); !a.done; a = o.next()) {
                var c = a.value;
                LowPriorityBundleLoader_1.default.getInstance().isBundlePreLoaded(c.bundle) && e.length >= c.nums[0] && e.length <= c.nums[1] && (c.ignoreNums && c.ignoreNums.includes(e.length) || n.push(c));
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                a && !a.done && (i = o.return) && i.call(o);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        var l = new RandomGenerator_1.RandomGenerator(), d = l.random() < 0.5;
        return n.length > 0 && d ? n[l.randomInt(0, n.length)] : null;
    };
    DaxiaoAnimTrait.prototype.onDaxiaoTipBhr_showTip = function (e, t) {
        this._curTypeConfig = null;
        var i = e.args[0];
        this._curTypeConfig = this.getType(i);
        if (this._curTypeConfig && this._curTypeConfig.flowLight) {
            e.args[1] = this._curTypeConfig.flowLight.path;
            e.args[2] = this._curTypeConfig.flowLight.bundle;
        }
        if (this._curTypeConfig && this._curTypeConfig.ignoreShowTipEffect) {
            t({
                returnType: TraitCallbackReturnType.return,
                isBreak: true
            });
        }
        else {
            if (this._curTypeConfig) {
                t({
                    isBreak: true
                });
            }
            else {
                t();
            }
        }
    };
    DaxiaoAnimTrait.prototype.onDaxiaoBhr_playAni = function (e, t) {
        if (this._curTypeConfig) {
            e.ins.setAnimType(this._curTypeConfig.playAnimType);
            if (this._curTypeConfig.type !== c.CaiDai) {
                if (this._curTypeConfig.type !== c.Maxituan) {
                    if (this._curTypeConfig.type !== c.Garden) {
                        if (this.extendPlay(e.ins, e.args[1])) {
                            t({
                                returnType: TraitCallbackReturnType.return,
                                isBreak: true
                            });
                        }
                        else {
                            t();
                        }
                    }
                    else {
                        GardenAnimPlayer_1.GardenAnimPlayer.playFullAnimation(e.ins, e.args[1]);
                        t({
                            returnType: TraitCallbackReturnType.return,
                            isBreak: true
                        });
                    }
                }
                else {
                    MaxituanAnimPlayer_1.MaxituanAnimPlayer.playFullAnimation(e.ins, e.args[1]);
                    t({
                        returnType: TraitCallbackReturnType.return,
                        isBreak: true
                    });
                }
            }
            else {
                CaiDaiAnimPlayer_1.CaiDaiAnimPlayer.playCaiDaiAnim(e.ins, e.args[1]);
                t({
                    returnType: TraitCallbackReturnType.return,
                    isBreak: true
                });
            }
        }
        else
            t();
    };
    DaxiaoAnimTrait.prototype.isOpenExtendAnims = function () {
        return false;
    };
    DaxiaoAnimTrait.prototype.extendAnims = function () {
        this.isOpenExtendAnims() && this._animConfig.push({
            type: c.Guofeng,
            playAnimType: DaxiaoClearEffectBehavior_1.EDaxiaoPlayAnimType.Guofeng,
            bundle: "r_daxiaoguofeng",
            ignoreShowTipEffect: false,
            nums: [2, 10],
            flowLight: {
                path: "spine/idle/gameplay_flowingLight_gf",
                bundle: "r_daxiaoguofeng",
                anim: "idle"
            }
        }, {
            type: c.Hudie,
            playAnimType: DaxiaoClearEffectBehavior_1.EDaxiaoPlayAnimType.Hudie,
            bundle: "r_daxiaohudie",
            ignoreShowTipEffect: true,
            nums: [4, 9]
        });
    };
    DaxiaoAnimTrait.prototype.extendPlay = function (e, t) {
        if (this.isOpenExtendAnims()) {
            if (this._curTypeConfig.type === c.Guofeng) {
                GuofengAnimPlayer_1.GuofengAnimPlayer.playFullAnimation(e, t);
                return true;
            }
            if (this._curTypeConfig.type === c.Hudie) {
                HudieAnimPlayer_1.HudieAnimPlayer.playFullAnimation(e, t);
                return true;
            }
        }
    };
    DaxiaoAnimTrait.traitKey = "DaxiaoAnim";
    __decorate([
        mj.traitEvent("DaxiaoAni_extendAnim")
    ], DaxiaoAnimTrait.prototype, "isOpenExtendAnims", null);
    DaxiaoAnimTrait = __decorate([
        mj.trait,
        mj.class("DaxiaoAnimTrait")
    ], DaxiaoAnimTrait);
    return DaxiaoAnimTrait;
}(Trait_1.default));
exports.default = DaxiaoAnimTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX2RheGlhb0FuaW0vU2NyaXB0cy9EYXhpYW9BbmltVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDhGQUE2RjtBQUM3Riw2RkFBc0Y7QUFDdEYsZ0VBQTJEO0FBQzNELHFHQUFnSTtBQUNoSSx1REFBc0Q7QUFDdEQsdURBQXNEO0FBQ3RELHlEQUF3RDtBQUN4RCxxREFBb0Q7QUFDcEQsMkRBQTBEO0FBQzFELElBQUksQ0FBQyxHQUFHO0lBQ04sTUFBTSxFQUFFLFFBQVE7SUFDaEIsUUFBUSxFQUFFLFVBQVU7SUFDcEIsTUFBTSxFQUFFLFFBQVE7SUFDaEIsT0FBTyxFQUFFLFNBQVM7SUFDbEIsS0FBSyxFQUFFLE9BQU87Q0FDZixDQUFDO0FBR0Y7SUFBNkMsbUNBQUs7SUFBbEQ7UUFBQSxxRUE4S0M7UUE3S0MsaUJBQVcsR0FBRyxFQUFFLENBQUM7UUFDakIsb0JBQWMsR0FBRyxJQUFJLENBQUM7O0lBNEt4QixDQUFDO0lBMUtDLGdDQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDVCxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQztnQkFDbEIsSUFBSSxFQUFFLENBQUMsQ0FBQyxNQUFNO2dCQUNkLFlBQVksRUFBRSwrQ0FBbUIsQ0FBQyxNQUFNO2dCQUN4QyxNQUFNLEVBQUUsZ0JBQWdCO2dCQUN4QixtQkFBbUIsRUFBRSxJQUFJO2dCQUN6QixJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO2FBQ2QsRUFBRTtnQkFDRCxJQUFJLEVBQUUsQ0FBQyxDQUFDLFFBQVE7Z0JBQ2hCLFlBQVksRUFBRSwrQ0FBbUIsQ0FBQyxRQUFRO2dCQUMxQyxNQUFNLEVBQUUsa0JBQWtCO2dCQUMxQixTQUFTLEVBQUU7b0JBQ1QsSUFBSSxFQUFFLHlDQUF5QztvQkFD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QUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ2IsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELG9DQUFVLEdBQVYsVUFBVyxDQUFDLEVBQUUsQ0FBQztRQUNiLElBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFLEVBQUU7WUFDNUIsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsT0FBTyxFQUFFO2dCQUMxQyxxQ0FBaUIsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQzFDLE9BQU8sSUFBSSxDQUFDO2FBQ2I7WUFDRCxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUU7Z0JBQ3hDLGlDQUFlLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUN4QyxPQUFPLElBQUksQ0FBQzthQUNiO1NBQ0Y7SUFDSCxDQUFDO0lBMUtNLHdCQUFRLEdBQUcsWUFBWSxDQUFDO0lBd0kvQjtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsc0JBQXNCLENBQUM7NERBR3JDO0lBN0lrQixlQUFlO1FBRm5DLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQztPQUNQLGVBQWUsQ0E4S25DO0lBQUQsc0JBQUM7Q0E5S0QsQUE4S0MsQ0E5SzRDLGVBQUssR0E4S2pEO2tCQTlLb0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJhbmRvbUdlbmVyYXRvciB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9zaW11bGF0b3Ivc3RydWN0dXJlcy9SYW5kb21HZW5lcmF0b3InO1xuaW1wb3J0IHsgRURheGlhb1BsYXlBbmltVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvYmFzZS9EYXhpYW9DbGVhckVmZmVjdEJlaGF2aW9yJztcbmltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgTG93UHJpb3JpdHlCdW5kbGVMb2FkZXIsIHsgRUxvd1ByaW9yaXR5QnVuZGxlUHJpb3JpdHkgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L2Jhc2UvdWkvTG93UHJpb3JpdHlCdW5kbGVMb2FkZXInO1xuaW1wb3J0IHsgQ2FpRGFpQW5pbVBsYXllciB9IGZyb20gJy4vQ2FpRGFpQW5pbVBsYXllcic7XG5pbXBvcnQgeyBHYXJkZW5BbmltUGxheWVyIH0gZnJvbSAnLi9HYXJkZW5BbmltUGxheWVyJztcbmltcG9ydCB7IEd1b2ZlbmdBbmltUGxheWVyIH0gZnJvbSAnLi9HdW9mZW5nQW5pbVBsYXllcic7XG5pbXBvcnQgeyBIdWRpZUFuaW1QbGF5ZXIgfSBmcm9tICcuL0h1ZGllQW5pbVBsYXllcic7XG5pbXBvcnQgeyBNYXhpdHVhbkFuaW1QbGF5ZXIgfSBmcm9tICcuL01heGl0dWFuQW5pbVBsYXllcic7XG52YXIgYyA9IHtcbiAgQ2FpRGFpOiBcIkNhaURhaVwiLFxuICBNYXhpdHVhbjogXCJNYXhpdHVhblwiLFxuICBHYXJkZW46IFwiR2FyZGVuXCIsXG4gIEd1b2Zlbmc6IFwiR3VvZmVuZ1wiLFxuICBIdWRpZTogXCJIdWRpZVwiXG59O1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJEYXhpYW9BbmltVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERheGlhb0FuaW1UcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgX2FuaW1Db25maWcgPSBbXTtcbiAgX2N1clR5cGVDb25maWcgPSBudWxsO1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIkRheGlhb0FuaW1cIjtcbiAgb25Mb2FkKCkge1xuICAgIHZhciB0LCBpO1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuX2FuaW1Db25maWcgPSBbe1xuICAgICAgdHlwZTogYy5DYWlEYWksXG4gICAgICBwbGF5QW5pbVR5cGU6IEVEYXhpYW9QbGF5QW5pbVR5cGUuQ2FpRGFpLFxuICAgICAgYnVuZGxlOiBcInJfZGF4aWFvY2FpZGFpXCIsXG4gICAgICBpZ25vcmVTaG93VGlwRWZmZWN0OiB0cnVlLFxuICAgICAgbnVtczogWzQsIDEwXVxuICAgIH0sIHtcbiAgICAgIHR5cGU6IGMuTWF4aXR1YW4sXG4gICAgICBwbGF5QW5pbVR5cGU6IEVEYXhpYW9QbGF5QW5pbVR5cGUuTWF4aXR1YW4sXG4gICAgICBidW5kbGU6IFwicl9kYXhpYW9tYXhpdHVhblwiLFxuICAgICAgZmxvd0xpZ2h0OiB7XG4gICAgICAgIHBhdGg6IFwic3BpbmUvbWF4aXR1YW4vZ2FtZXBsYXlfZmxvd2luZ0xpZ2h0X214XCIsXG4gICAgICAgIGJ1bmRsZTogXCJyX2RheGlhb21heGl0dWFuXCIsXG4gICAgICAgIGFuaW06IFwiZ2FtZXBsYXlfZmxvd2luZ0xpZ2h0X214X2lkbGVcIlxuICAgICAgfSxcbiAgICAgIGlnbm9yZVNob3dUaXBFZmZlY3Q6IGZhbHNlLFxuICAgICAgbnVtczogWzcsIDddXG4gICAgfSwge1xuICAgICAgdHlwZTogYy5HYXJkZW4sXG4gICAgICBwbGF5QW5pbVR5cGU6IEVEYXhpYW9QbGF5QW5pbVR5cGUuR2FyZGVuLFxuICAgICAgYnVuZGxlOiBcInJfZGF4aWFvZ2FyZGVuXCIsXG4gICAgICBpZ25vcmVTaG93VGlwRWZmZWN0OiBmYWxzZSxcbiAgICAgIG51bXM6IFs2LCA5XSxcbiAgICAgIGZsb3dMaWdodDoge1xuICAgICAgICBwYXRoOiBcInNwaW5lL2dhcmRlbi9nYW1lcGxheV9mbG93aW5nTGlnaHRcIixcbiAgICAgICAgYnVuZGxlOiBcInJfZGF4aWFvZ2FyZGVuXCIsXG4gICAgICAgIGFuaW06IFwiaWRsZVwiXG4gICAgICB9XG4gICAgfV07XG4gICAgdGhpcy5leHRlbmRBbmltcygpO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBuID0gX192YWx1ZXModGhpcy5fYW5pbUNvbmZpZyksIG8gPSBuLm5leHQoKTsgIW8uZG9uZTsgbyA9IG4ubmV4dCgpKSB7XG4gICAgICAgIHZhciBhID0gby52YWx1ZTtcbiAgICAgICAgTG93UHJpb3JpdHlCdW5kbGVMb2FkZXIuZ2V0SW5zdGFuY2UoKS5hZGRUYXNrKGEuYnVuZGxlLCBFTG93UHJpb3JpdHlCdW5kbGVQcmlvcml0eS5EZWZhdWx0RGFYaWFvKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0ID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbyAmJiAhby5kb25lICYmIChpID0gbi5yZXR1cm4pICYmIGkuY2FsbChuKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmICh0KSB0aHJvdyB0LmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBnZXRUeXBlKGUpIHtcbiAgICB2YXIgdCxcbiAgICAgIGksXG4gICAgICBuID0gW107XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIG8gPSBfX3ZhbHVlcyh0aGlzLl9hbmltQ29uZmlnKSwgYSA9IG8ubmV4dCgpOyAhYS5kb25lOyBhID0gby5uZXh0KCkpIHtcbiAgICAgICAgdmFyIGMgPSBhLnZhbHVlO1xuICAgICAgICBMb3dQcmlvcml0eUJ1bmRsZUxvYWRlci5nZXRJbnN0YW5jZSgpLmlzQnVuZGxlUHJlTG9hZGVkKGMuYnVuZGxlKSAmJiBlLmxlbmd0aCA+PSBjLm51bXNbMF0gJiYgZS5sZW5ndGggPD0gYy5udW1zWzFdICYmIChjLmlnbm9yZU51bXMgJiYgYy5pZ25vcmVOdW1zLmluY2x1ZGVzKGUubGVuZ3RoKSB8fCBuLnB1c2goYykpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHQgPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBhICYmICFhLmRvbmUgJiYgKGkgPSBvLnJldHVybikgJiYgaS5jYWxsKG8pO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKHQpIHRocm93IHQuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHZhciBsID0gbmV3IFJhbmRvbUdlbmVyYXRvcigpLFxuICAgICAgZCA9IGwucmFuZG9tKCkgPCAwLjU7XG4gICAgcmV0dXJuIG4ubGVuZ3RoID4gMCAmJiBkID8gbltsLnJhbmRvbUludCgwLCBuLmxlbmd0aCldIDogbnVsbDtcbiAgfVxuICBvbkRheGlhb1RpcEJocl9zaG93VGlwKGUsIHQpIHtcbiAgICB0aGlzLl9jdXJUeXBlQ29uZmlnID0gbnVsbDtcbiAgICB2YXIgaSA9IGUuYXJnc1swXTtcbiAgICB0aGlzLl9jdXJUeXBlQ29uZmlnID0gdGhpcy5nZXRUeXBlKGkpO1xuICAgIGlmICh0aGlzLl9jdXJUeXBlQ29uZmlnICYmIHRoaXMuX2N1clR5cGVDb25maWcuZmxvd0xpZ2h0KSB7XG4gICAgICBlLmFyZ3NbMV0gPSB0aGlzLl9jdXJUeXBlQ29uZmlnLmZsb3dMaWdodC5wYXRoO1xuICAgICAgZS5hcmdzWzJdID0gdGhpcy5fY3VyVHlwZUNvbmZpZy5mbG93TGlnaHQuYnVuZGxlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fY3VyVHlwZUNvbmZpZyAmJiB0aGlzLl9jdXJUeXBlQ29uZmlnLmlnbm9yZVNob3dUaXBFZmZlY3QpIHtcbiAgICAgIHQoe1xuICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICAgIGlzQnJlYWs6IHRydWVcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5fY3VyVHlwZUNvbmZpZykge1xuICAgICAgICB0KHtcbiAgICAgICAgICBpc0JyZWFrOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBvbkRheGlhb0Jocl9wbGF5QW5pKGUsIHQpIHtcbiAgICBpZiAodGhpcy5fY3VyVHlwZUNvbmZpZykge1xuICAgICAgZS5pbnMuc2V0QW5pbVR5cGUodGhpcy5fY3VyVHlwZUNvbmZpZy5wbGF5QW5pbVR5cGUpO1xuICAgICAgaWYgKHRoaXMuX2N1clR5cGVDb25maWcudHlwZSAhPT0gYy5DYWlEYWkpIHtcbiAgICAgICAgaWYgKHRoaXMuX2N1clR5cGVDb25maWcudHlwZSAhPT0gYy5NYXhpdHVhbikge1xuICAgICAgICAgIGlmICh0aGlzLl9jdXJUeXBlQ29uZmlnLnR5cGUgIT09IGMuR2FyZGVuKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5leHRlbmRQbGF5KGUuaW5zLCBlLmFyZ3NbMV0pKSB7XG4gICAgICAgICAgICAgIHQoe1xuICAgICAgICAgICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgICAgICAgICBpc0JyZWFrOiB0cnVlXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBHYXJkZW5BbmltUGxheWVyLnBsYXlGdWxsQW5pbWF0aW9uKGUuaW5zLCBlLmFyZ3NbMV0pO1xuICAgICAgICAgICAgdCh7XG4gICAgICAgICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgICAgICAgaXNCcmVhazogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIE1heGl0dWFuQW5pbVBsYXllci5wbGF5RnVsbEFuaW1hdGlvbihlLmlucywgZS5hcmdzWzFdKTtcbiAgICAgICAgICB0KHtcbiAgICAgICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgICAgIGlzQnJlYWs6IHRydWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgQ2FpRGFpQW5pbVBsYXllci5wbGF5Q2FpRGFpQW5pbShlLmlucywgZS5hcmdzWzFdKTtcbiAgICAgICAgdCh7XG4gICAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICAgIGlzQnJlYWs6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHQoKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkRheGlhb0FuaV9leHRlbmRBbmltXCIpXG4gIGlzT3BlbkV4dGVuZEFuaW1zKCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBleHRlbmRBbmltcygpIHtcbiAgICB0aGlzLmlzT3BlbkV4dGVuZEFuaW1zKCkgJiYgdGhpcy5fYW5pbUNvbmZpZy5wdXNoKHtcbiAgICAgIHR5cGU6IGMuR3VvZmVuZyxcbiAgICAgIHBsYXlBbmltVHlwZTogRURheGlhb1BsYXlBbmltVHlwZS5HdW9mZW5nLFxuICAgICAgYnVuZGxlOiBcInJfZGF4aWFvZ3VvZmVuZ1wiLFxuICAgICAgaWdub3JlU2hvd1RpcEVmZmVjdDogZmFsc2UsXG4gICAgICBudW1zOiBbMiwgMTBdLFxuICAgICAgZmxvd0xpZ2h0OiB7XG4gICAgICAgIHBhdGg6IFwic3BpbmUvaWRsZS9nYW1lcGxheV9mbG93aW5nTGlnaHRfZ2ZcIixcbiAgICAgICAgYnVuZGxlOiBcInJfZGF4aWFvZ3VvZmVuZ1wiLFxuICAgICAgICBhbmltOiBcImlkbGVcIlxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIHR5cGU6IGMuSHVkaWUsXG4gICAgICBwbGF5QW5pbVR5cGU6IEVEYXhpYW9QbGF5QW5pbVR5cGUuSHVkaWUsXG4gICAgICBidW5kbGU6IFwicl9kYXhpYW9odWRpZVwiLFxuICAgICAgaWdub3JlU2hvd1RpcEVmZmVjdDogdHJ1ZSxcbiAgICAgIG51bXM6IFs0LCA5XVxuICAgIH0pO1xuICB9XG4gIGV4dGVuZFBsYXkoZSwgdCkge1xuICAgIGlmICh0aGlzLmlzT3BlbkV4dGVuZEFuaW1zKCkpIHtcbiAgICAgIGlmICh0aGlzLl9jdXJUeXBlQ29uZmlnLnR5cGUgPT09IGMuR3VvZmVuZykge1xuICAgICAgICBHdW9mZW5nQW5pbVBsYXllci5wbGF5RnVsbEFuaW1hdGlvbihlLCB0KTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5fY3VyVHlwZUNvbmZpZy50eXBlID09PSBjLkh1ZGllKSB7XG4gICAgICAgIEh1ZGllQW5pbVBsYXllci5wbGF5RnVsbEFuaW1hdGlvbihlLCB0KTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG59Il19