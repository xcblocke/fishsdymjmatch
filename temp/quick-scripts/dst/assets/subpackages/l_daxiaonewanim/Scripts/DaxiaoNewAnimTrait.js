
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_daxiaonewanim/Scripts/DaxiaoNewAnimTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '81159eZnKpEw7oQS7CxHq73', 'DaxiaoNewAnimTrait');
// subpackages/l_daxiaonewanim/Scripts/DaxiaoNewAnimTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var RandomGenerator_1 = require("../../../Scripts/core/simulator/structures/RandomGenerator");
var DaxiaoClearEffectBehavior_1 = require("../../../Scripts/base/DaxiaoClearEffectBehavior");
var HaiyangAnimPlayer_1 = require("./HaiyangAnimPlayer");
var ShipinAnimPlayer_1 = require("./ShipinAnimPlayer");
var YinxiangAnimPlayer_1 = require("./YinxiangAnimPlayer");
var ZheshanAnimPlayer_1 = require("./ZheshanAnimPlayer");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var s = {
    Yinxiang: "Yinxiang",
    Shipin: "Shipin",
    Zheshan: "Zheshan",
    Haiyang: "Haiyang"
};
var DaxiaoNewAnimTrait = /** @class */ (function (_super) {
    __extends(DaxiaoNewAnimTrait, _super);
    function DaxiaoNewAnimTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._animConfig = [];
        _this._curTypeConfig = null;
        return _this;
    }
    DaxiaoNewAnimTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._animConfig.push({
            type: s.Yinxiang,
            playAnimType: DaxiaoClearEffectBehavior_1.EDaxiaoPlayAnimType.Yinxiang,
            bundle: "l_daxiaoyinxiang",
            ignoreShowTipEffect: true,
            nums: [5, 5]
        }, {
            type: s.Shipin,
            playAnimType: DaxiaoClearEffectBehavior_1.EDaxiaoPlayAnimType.Shipin,
            bundle: "l_daxiaoshipin",
            ignoreShowTipEffect: false,
            nums: [4, 4],
            flowLight: {
                path: "spine/idle/gameplay_flowingLight",
                bundle: "l_daxiaoshipin",
                anim: "idle"
            }
        }, {
            type: s.Zheshan,
            playAnimType: DaxiaoClearEffectBehavior_1.EDaxiaoPlayAnimType.Zheshan,
            bundle: "l_daxiaozheshan",
            ignoreShowTipEffect: false,
            nums: [3, 3],
            flowLight: {
                path: "spine/idle/gameplay_flowingLight",
                bundle: "l_daxiaozheshan",
                anim: "idle"
            }
        }, {
            type: s.Haiyang,
            playAnimType: DaxiaoClearEffectBehavior_1.EDaxiaoPlayAnimType.Haiyang,
            bundle: "l_daxiaohaiyang",
            ignoreShowTipEffect: false,
            nums: [3, 5],
            ignoreNums: [4],
            flowLight: {
                path: "spine/idle/gameplay_flowingLight",
                bundle: "l_daxiaohaiyang",
                anim: "idle"
            }
        });
    };
    DaxiaoNewAnimTrait.prototype.onDaxiaoAni_extendAnim = function (t, e) {
        e({
            returnVal: true,
            returnType: TraitCallbackReturnType.jump,
            isBreak: true
        });
    };
    DaxiaoNewAnimTrait.prototype.getType = function (t) {
        var e, i, a = [];
        try {
            for (var o = __values(this._animConfig), n = o.next(); !n.done; n = o.next()) {
                var s = n.value;
                t.length >= s.nums[0] && t.length <= s.nums[1] && (s.ignoreNums && s.ignoreNums.includes(t.length) || a.push(s));
            }
        }
        catch (t) {
            e = {
                error: t
            };
        }
        finally {
            try {
                n && !n.done && (i = o.return) && i.call(o);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        var l = new RandomGenerator_1.RandomGenerator(), h = l.random() < 0.5;
        return a.length > 0 && h ? a[l.randomInt(0, a.length)] : null;
    };
    DaxiaoNewAnimTrait.prototype.onDaxiaoTipBhr_showTip = function (t, e) {
        this._curTypeConfig = null;
        var i = t.args[0];
        this._curTypeConfig = this.getType(i);
        if (this._curTypeConfig && this._curTypeConfig.flowLight) {
            t.args[1] = this._curTypeConfig.flowLight.path;
            t.args[2] = this._curTypeConfig.flowLight.bundle;
        }
        if (this._curTypeConfig && this._curTypeConfig.ignoreShowTipEffect) {
            e({
                returnType: TraitCallbackReturnType.return,
                isBreak: true
            });
        }
        else {
            if (this._curTypeConfig) {
                e({
                    isBreak: true
                });
            }
            else {
                e();
            }
        }
    };
    DaxiaoNewAnimTrait.prototype.onDaxiaoBhr_playAni = function (t, e) {
        if (this._curTypeConfig) {
            t.ins.setAnimType(this._curTypeConfig.playAnimType);
            if (this.extendPlay(t.ins, t.args[1])) {
                e({
                    returnType: TraitCallbackReturnType.return,
                    isBreak: true
                });
            }
            else {
                e();
            }
        }
        else
            e();
    };
    DaxiaoNewAnimTrait.prototype.extendPlay = function (t, e) {
        if (this._curTypeConfig.type === s.Yinxiang) {
            YinxiangAnimPlayer_1.YinxiangAnimPlayer.playFullAnimation(t, e);
            return true;
        }
        if (this._curTypeConfig.type === s.Shipin) {
            ShipinAnimPlayer_1.ShipinAnimPlayer.playFullAnimation(t, e);
            return true;
        }
        if (this._curTypeConfig.type === s.Zheshan) {
            ZheshanAnimPlayer_1.ZheshanAnimPlayer.playFullAnimation(t, e);
            return true;
        }
        if (this._curTypeConfig.type === s.Haiyang) {
            HaiyangAnimPlayer_1.HaiyangAnimPlayer.playFullAnimation(t, e);
            return true;
        }
    };
    DaxiaoNewAnimTrait.traitKey = "DaxiaoNewAnim";
    DaxiaoNewAnimTrait = __decorate([
        mj.trait,
        mj.class("DaxiaoNewAnimTrait")
    ], DaxiaoNewAnimTrait);
    return DaxiaoNewAnimTrait;
}(Trait_1.default));
exports.default = DaxiaoNewAnimTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2RheGlhb25ld2FuaW0vU2NyaXB0cy9EYXhpYW9OZXdBbmltVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDhGQUE2RjtBQUM3Riw2RkFBc0Y7QUFDdEYseURBQXdEO0FBQ3hELHVEQUFzRDtBQUN0RCwyREFBMEQ7QUFDMUQseURBQXdEO0FBQ3hELGdFQUEyRDtBQUMzRCxJQUFJLENBQUMsR0FBRztJQUNOLFFBQVEsRUFBRSxVQUFVO0lBQ3BCLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLE9BQU8sRUFBRSxTQUFTO0lBQ2xCLE9BQU8sRUFBRSxTQUFTO0NBQ25CLENBQUM7QUFHRjtJQUFnRCxzQ0FBSztJQUFyRDtRQUFBLHFFQXFJQztRQXBJQyxpQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNqQixvQkFBYyxHQUFHLElBQUksQ0FBQzs7SUFtSXhCLENBQUM7SUFqSUMsbUNBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7WUFDcEIsSUFBSSxFQUFFLENBQUMsQ0FBQyxRQUFRO1lBQ2hCLFlBQVksRUFBRSwrQ0FBbUIsQ0FBQyxRQUFRO1lBQzFDLE1BQU0sRUFBRSxrQkFBa0I7WUFDMUIsbUJBQW1CLEVBQUUsSUFBSTtZQUN6QixJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ2IsRUFBRTtZQUNELElBQUksRUFBRSxDQUFDLENBQUMsTUFBTTtZQUNkLFlBQVksRUFBRSwrQ0FBbUIsQ0FBQyxNQUFNO1lBQ3hDLE1BQU0sRUFBRSxnQkFBZ0I7WUFDeEIsbUJBQW1CLEVBQUUsS0FBSztZQUMxQixJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ1osU0FBUyxFQUFFO2dCQUNULElBQUksRUFBRSxrQ0FBa0M7Z0JBQ3hDLE1BQU0sRUFB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b0IsQ0FBQztPQUNWLGtCQUFrQixDQXFJdEM7SUFBRCx5QkFBQztDQXJJRCxBQXFJQyxDQXJJK0MsZUFBSyxHQXFJcEQ7a0JBcklvQixrQkFBa0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSYW5kb21HZW5lcmF0b3IgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL3N0cnVjdHVyZXMvUmFuZG9tR2VuZXJhdG9yJztcbmltcG9ydCB7IEVEYXhpYW9QbGF5QW5pbVR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2Jhc2UvRGF4aWFvQ2xlYXJFZmZlY3RCZWhhdmlvcic7XG5pbXBvcnQgeyBIYWl5YW5nQW5pbVBsYXllciB9IGZyb20gJy4vSGFpeWFuZ0FuaW1QbGF5ZXInO1xuaW1wb3J0IHsgU2hpcGluQW5pbVBsYXllciB9IGZyb20gJy4vU2hpcGluQW5pbVBsYXllcic7XG5pbXBvcnQgeyBZaW54aWFuZ0FuaW1QbGF5ZXIgfSBmcm9tICcuL1lpbnhpYW5nQW5pbVBsYXllcic7XG5pbXBvcnQgeyBaaGVzaGFuQW5pbVBsYXllciB9IGZyb20gJy4vWmhlc2hhbkFuaW1QbGF5ZXInO1xuaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbnZhciBzID0ge1xuICBZaW54aWFuZzogXCJZaW54aWFuZ1wiLFxuICBTaGlwaW46IFwiU2hpcGluXCIsXG4gIFpoZXNoYW46IFwiWmhlc2hhblwiLFxuICBIYWl5YW5nOiBcIkhhaXlhbmdcIlxufTtcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiRGF4aWFvTmV3QW5pbVRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXhpYW9OZXdBbmltVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIF9hbmltQ29uZmlnID0gW107XG4gIF9jdXJUeXBlQ29uZmlnID0gbnVsbDtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJEYXhpYW9OZXdBbmltXCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLl9hbmltQ29uZmlnLnB1c2goe1xuICAgICAgdHlwZTogcy5ZaW54aWFuZyxcbiAgICAgIHBsYXlBbmltVHlwZTogRURheGlhb1BsYXlBbmltVHlwZS5ZaW54aWFuZyxcbiAgICAgIGJ1bmRsZTogXCJsX2RheGlhb3lpbnhpYW5nXCIsXG4gICAgICBpZ25vcmVTaG93VGlwRWZmZWN0OiB0cnVlLFxuICAgICAgbnVtczogWzUsIDVdXG4gICAgfSwge1xuICAgICAgdHlwZTogcy5TaGlwaW4sXG4gICAgICBwbGF5QW5pbVR5cGU6IEVEYXhpYW9QbGF5QW5pbVR5cGUuU2hpcGluLFxuICAgICAgYnVuZGxlOiBcImxfZGF4aWFvc2hpcGluXCIsXG4gICAgICBpZ25vcmVTaG93VGlwRWZmZWN0OiBmYWxzZSxcbiAgICAgIG51bXM6IFs0LCA0XSxcbiAgICAgIGZsb3dMaWdodDoge1xuICAgICAgICBwYXRoOiBcInNwaW5lL2lkbGUvZ2FtZXBsYXlfZmxvd2luZ0xpZ2h0XCIsXG4gICAgICAgIGJ1bmRsZTogXCJsX2RheGlhb3NoaXBpblwiLFxuICAgICAgICBhbmltOiBcImlkbGVcIlxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIHR5cGU6IHMuWmhlc2hhbixcbiAgICAgIHBsYXlBbmltVHlwZTogRURheGlhb1BsYXlBbmltVHlwZS5aaGVzaGFuLFxuICAgICAgYnVuZGxlOiBcImxfZGF4aWFvemhlc2hhblwiLFxuICAgICAgaWdub3JlU2hvd1RpcEVmZmVjdDogZmFsc2UsXG4gICAgICBudW1zOiBbMywgM10sXG4gICAgICBmbG93TGlnaHQ6IHtcbiAgICAgICAgcGF0aDogXCJzcGluZS9pZGxlL2dhbWVwbGF5X2Zsb3dpbmdMaWdodFwiLFxuICAgICAgICBidW5kbGU6IFwibF9kYXhpYW96aGVzaGFuXCIsXG4gICAgICAgIGFuaW06IFwiaWRsZVwiXG4gICAgICB9XG4gICAgfSwge1xuICAgICAgdHlwZTogcy5IYWl5YW5nLFxuICAgICAgcGxheUFuaW1UeXBlOiBFRGF4aWFvUGxheUFuaW1UeXBlLkhhaXlhbmcsXG4gICAgICBidW5kbGU6IFwibF9kYXhpYW9oYWl5YW5nXCIsXG4gICAgICBpZ25vcmVTaG93VGlwRWZmZWN0OiBmYWxzZSxcbiAgICAgIG51bXM6IFszLCA1XSxcbiAgICAgIGlnbm9yZU51bXM6IFs0XSxcbiAgICAgIGZsb3dMaWdodDoge1xuICAgICAgICBwYXRoOiBcInNwaW5lL2lkbGUvZ2FtZXBsYXlfZmxvd2luZ0xpZ2h0XCIsXG4gICAgICAgIGJ1bmRsZTogXCJsX2RheGlhb2hhaXlhbmdcIixcbiAgICAgICAgYW5pbTogXCJpZGxlXCJcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBvbkRheGlhb0FuaV9leHRlbmRBbmltKHQsIGUpIHtcbiAgICBlKHtcbiAgICAgIHJldHVyblZhbDogdHJ1ZSxcbiAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLmp1bXAsXG4gICAgICBpc0JyZWFrOiB0cnVlXG4gICAgfSk7XG4gIH1cbiAgZ2V0VHlwZSh0KSB7XG4gICAgdmFyIGUsXG4gICAgICBpLFxuICAgICAgYSA9IFtdO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBvID0gX192YWx1ZXModGhpcy5fYW5pbUNvbmZpZyksIG4gPSBvLm5leHQoKTsgIW4uZG9uZTsgbiA9IG8ubmV4dCgpKSB7XG4gICAgICAgIHZhciBzID0gbi52YWx1ZTtcbiAgICAgICAgdC5sZW5ndGggPj0gcy5udW1zWzBdICYmIHQubGVuZ3RoIDw9IHMubnVtc1sxXSAmJiAocy5pZ25vcmVOdW1zICYmIHMuaWdub3JlTnVtcy5pbmNsdWRlcyh0Lmxlbmd0aCkgfHwgYS5wdXNoKHMpKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICBlID0ge1xuICAgICAgICBlcnJvcjogdFxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbiAmJiAhbi5kb25lICYmIChpID0gby5yZXR1cm4pICYmIGkuY2FsbChvKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChlKSB0aHJvdyBlLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICB2YXIgbCA9IG5ldyBSYW5kb21HZW5lcmF0b3IoKSxcbiAgICAgIGggPSBsLnJhbmRvbSgpIDwgMC41O1xuICAgIHJldHVybiBhLmxlbmd0aCA+IDAgJiYgaCA/IGFbbC5yYW5kb21JbnQoMCwgYS5sZW5ndGgpXSA6IG51bGw7XG4gIH1cbiAgb25EYXhpYW9UaXBCaHJfc2hvd1RpcCh0LCBlKSB7XG4gICAgdGhpcy5fY3VyVHlwZUNvbmZpZyA9IG51bGw7XG4gICAgdmFyIGkgPSB0LmFyZ3NbMF07XG4gICAgdGhpcy5fY3VyVHlwZUNvbmZpZyA9IHRoaXMuZ2V0VHlwZShpKTtcbiAgICBpZiAodGhpcy5fY3VyVHlwZUNvbmZpZyAmJiB0aGlzLl9jdXJUeXBlQ29uZmlnLmZsb3dMaWdodCkge1xuICAgICAgdC5hcmdzWzFdID0gdGhpcy5fY3VyVHlwZUNvbmZpZy5mbG93TGlnaHQucGF0aDtcbiAgICAgIHQuYXJnc1syXSA9IHRoaXMuX2N1clR5cGVDb25maWcuZmxvd0xpZ2h0LmJ1bmRsZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2N1clR5cGVDb25maWcgJiYgdGhpcy5fY3VyVHlwZUNvbmZpZy5pZ25vcmVTaG93VGlwRWZmZWN0KSB7XG4gICAgICBlKHtcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICBpc0JyZWFrOiB0cnVlXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuX2N1clR5cGVDb25maWcpIHtcbiAgICAgICAgZSh7XG4gICAgICAgICAgaXNCcmVhazogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgb25EYXhpYW9CaHJfcGxheUFuaSh0LCBlKSB7XG4gICAgaWYgKHRoaXMuX2N1clR5cGVDb25maWcpIHtcbiAgICAgIHQuaW5zLnNldEFuaW1UeXBlKHRoaXMuX2N1clR5cGVDb25maWcucGxheUFuaW1UeXBlKTtcbiAgICAgIGlmICh0aGlzLmV4dGVuZFBsYXkodC5pbnMsIHQuYXJnc1sxXSkpIHtcbiAgICAgICAgZSh7XG4gICAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICAgIGlzQnJlYWs6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGUoKTtcbiAgfVxuICBleHRlbmRQbGF5KHQsIGUpIHtcbiAgICBpZiAodGhpcy5fY3VyVHlwZUNvbmZpZy50eXBlID09PSBzLllpbnhpYW5nKSB7XG4gICAgICBZaW54aWFuZ0FuaW1QbGF5ZXIucGxheUZ1bGxBbmltYXRpb24odCwgZSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2N1clR5cGVDb25maWcudHlwZSA9PT0gcy5TaGlwaW4pIHtcbiAgICAgIFNoaXBpbkFuaW1QbGF5ZXIucGxheUZ1bGxBbmltYXRpb24odCwgZSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2N1clR5cGVDb25maWcudHlwZSA9PT0gcy5aaGVzaGFuKSB7XG4gICAgICBaaGVzaGFuQW5pbVBsYXllci5wbGF5RnVsbEFuaW1hdGlvbih0LCBlKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fY3VyVHlwZUNvbmZpZy50eXBlID09PSBzLkhhaXlhbmcpIHtcbiAgICAgIEhhaXlhbmdBbmltUGxheWVyLnBsYXlGdWxsQW5pbWF0aW9uKHQsIGUpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG59Il19