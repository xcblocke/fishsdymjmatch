
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_winMaskFade/Scripts/WinMaskFadeTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '70a21c5I2dF15mFeXZwlPsC', 'WinMaskFadeTrait');
// subpackages/l_winMaskFade/Scripts/WinMaskFadeTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var ControllerManager_1 = require("../../../Scripts/framework/manager/ControllerManager");
var WinMaskFadeTrait = /** @class */ (function (_super) {
    __extends(WinMaskFadeTrait, _super);
    function WinMaskFadeTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._isHideBonusView = false;
        _this._blackOpacity = 215;
        _this._maskOpacity = 255;
        return _this;
    }
    WinMaskFadeTrait.prototype.onLoad = function () {
        var e, i;
        _super.prototype.onLoad.call(this);
        this._blackOpacity = (null === (e = this.traitData.config) || void 0 === e ? void 0 : e.blackOpacity) || 215;
        this._maskOpacity = (null === (i = this.traitData.config) || void 0 === i ? void 0 : i.maskOpacity) || 255;
    };
    WinMaskFadeTrait.prototype.onRankBonusVw_destroy = function (t, e) {
        this._isHideBonusView = true;
        e();
    };
    WinMaskFadeTrait.prototype.onWinVw_onLoad = function (t, e) {
        if (this._isHideBonusView) {
            var i = t.ins;
            (null == i ? void 0 : i.maskNode) && (i.maskNode.opacity = 0);
        }
        e();
    };
    WinMaskFadeTrait.prototype.onWinBhv_pushWinView = function (t, e) {
        if (this._isHideBonusView) {
            var i = t.args[0];
            ControllerManager_1.default.getInstance().pushViewByController("WinController", {
                data: i.data,
                bgStyle: {
                    blackOpacity: this._blackOpacity
                },
                isShowAction: false
            }, null);
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.jump
            });
        }
        else
            e();
    };
    WinMaskFadeTrait.prototype.onWinVw_playMaskFadeIn = function (t, e) {
        var i, r;
        if (this._isHideBonusView) {
            this._isHideBonusView = false;
            var o = t.ins;
            if (o) {
                var a = null === (i = o.node.parent) || void 0 === i ? void 0 : i.getChildByName("BlurBg");
                a && (a.opacity = 0);
                null === (r = o.stopMaskAnimation) || void 0 === r || r.call(o);
                o.maskNode && (o.maskNode.opacity = this._maskOpacity);
            }
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.jump
            });
        }
        else
            e();
    };
    WinMaskFadeTrait.traitKey = "WinMaskFade";
    WinMaskFadeTrait = __decorate([
        mj.trait,
        mj.class("WinMaskFadeTrait")
    ], WinMaskFadeTrait);
    return WinMaskFadeTrait;
}(Trait_1.default));
exports.default = WinMaskFadeTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3dpbk1hc2tGYWRlL1NjcmlwdHMvV2luTWFza0ZhZGVUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOEVBQXdGO0FBQ3hGLGdFQUEyRDtBQUMzRCwwRkFBcUY7QUFHckY7SUFBOEMsb0NBQUs7SUFBbkQ7UUFBQSxxRUFxREM7UUFwREMsc0JBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLG1CQUFhLEdBQUcsR0FBRyxDQUFDO1FBQ3BCLGtCQUFZLEdBQUcsR0FBRyxDQUFDOztJQWtEckIsQ0FBQztJQWhEQyxpQ0FBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ1QsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxJQUFJLEdBQUcsQ0FBQztRQUM3RyxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEdBQUcsQ0FBQztJQUM3RyxDQUFDO0lBQ0QsZ0RBQXFCLEdBQXJCLFVBQXNCLENBQUMsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7UUFDN0IsQ0FBQyxFQUFFLENBQUM7SUFDTixDQUFDO0lBQ0QseUNBQWMsR0FBZCxVQUFlLENBQUMsRUFBRSxDQUFDO1FBQ2pCLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ3pCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUM7WUFDZCxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQztTQUMvRDtRQUNELENBQUMsRUFBRSxDQUFDO0lBQ04sQ0FBQztJQUNELCtDQUFvQixHQUFwQixVQUFxQixDQUFDLEVBQUUsQ0FBQztRQUN2QixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUN6QixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLDJCQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDLG9CQUFvQixDQUFDLGVBQWUsRUFBRTtnQkFDcEUsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJO2dCQUNaLE9BQU8sRUFBRTtvQkFDUCxZQUFZLEVBQUUsSUFBSSxDQUFDLGFBQWE7aUJBQ2pDO2dCQUNELFlBQVksRUFBRSxLQUFLO2FBQ3BCLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDVCxDQUFDLENBQUM7Z0JBQ0EsVUFBVSxFQUFFLHNDQUF1QixDQUFDLElBQUk7YUFDekMsQ0FBQyxDQUFDO1NBQ0o7O1lBQU0sQ0FBQyxFQUFFLENBQUM7SUFDYixDQUFDO0lBQ0QsaURBQXNCLEdBQXRCLFVBQXVCLENBQUMsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNULElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ3pCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7WUFDOUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQztZQUNkLElBQUksQ0FBQyxFQUFFO2dCQUNMLElBQUksQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQzNGLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JCLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsaUJBQWlCLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDaEUsQ0FBQyxDQUFDLFFBQVEsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUN4RDtZQUNELENBQUMsQ0FBQztnQkFDQSxVQUFVLEVBQUUsc0NBQXVCLENBQUMsSUFBSTthQUN6QyxDQUFDLENBQUM7U0FDSjs7WUFBTSxDQUFDLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFoRE0seUJBQVEsR0FBRyxhQUFhLENBQUM7SUFKYixnQkFBZ0I7UUFGcEMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDO09BQ1IsZ0JBQWdCLENBcURwQztJQUFELHVCQUFDO0NBckRELEFBcURDLENBckQ2QyxlQUFLLEdBcURsRDtrQkFyRG9CLGdCQUFnQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXRNYW5hZ2VyJztcbmltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgQ29udHJvbGxlck1hbmFnZXIgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvbWFuYWdlci9Db250cm9sbGVyTWFuYWdlcic7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIldpbk1hc2tGYWRlVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdpbk1hc2tGYWRlVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIF9pc0hpZGVCb251c1ZpZXcgPSBmYWxzZTtcbiAgX2JsYWNrT3BhY2l0eSA9IDIxNTtcbiAgX21hc2tPcGFjaXR5ID0gMjU1O1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIldpbk1hc2tGYWRlXCI7XG4gIG9uTG9hZCgpIHtcbiAgICB2YXIgZSwgaTtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLl9ibGFja09wYWNpdHkgPSAobnVsbCA9PT0gKGUgPSB0aGlzLnRyYWl0RGF0YS5jb25maWcpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUuYmxhY2tPcGFjaXR5KSB8fCAyMTU7XG4gICAgdGhpcy5fbWFza09wYWNpdHkgPSAobnVsbCA9PT0gKGkgPSB0aGlzLnRyYWl0RGF0YS5jb25maWcpIHx8IHZvaWQgMCA9PT0gaSA/IHZvaWQgMCA6IGkubWFza09wYWNpdHkpIHx8IDI1NTtcbiAgfVxuICBvblJhbmtCb251c1Z3X2Rlc3Ryb3kodCwgZSkge1xuICAgIHRoaXMuX2lzSGlkZUJvbnVzVmlldyA9IHRydWU7XG4gICAgZSgpO1xuICB9XG4gIG9uV2luVndfb25Mb2FkKHQsIGUpIHtcbiAgICBpZiAodGhpcy5faXNIaWRlQm9udXNWaWV3KSB7XG4gICAgICB2YXIgaSA9IHQuaW5zO1xuICAgICAgKG51bGwgPT0gaSA/IHZvaWQgMCA6IGkubWFza05vZGUpICYmIChpLm1hc2tOb2RlLm9wYWNpdHkgPSAwKTtcbiAgICB9XG4gICAgZSgpO1xuICB9XG4gIG9uV2luQmh2X3B1c2hXaW5WaWV3KHQsIGUpIHtcbiAgICBpZiAodGhpcy5faXNIaWRlQm9udXNWaWV3KSB7XG4gICAgICB2YXIgaSA9IHQuYXJnc1swXTtcbiAgICAgIENvbnRyb2xsZXJNYW5hZ2VyLmdldEluc3RhbmNlKCkucHVzaFZpZXdCeUNvbnRyb2xsZXIoXCJXaW5Db250cm9sbGVyXCIsIHtcbiAgICAgICAgZGF0YTogaS5kYXRhLFxuICAgICAgICBiZ1N0eWxlOiB7XG4gICAgICAgICAgYmxhY2tPcGFjaXR5OiB0aGlzLl9ibGFja09wYWNpdHlcbiAgICAgICAgfSxcbiAgICAgICAgaXNTaG93QWN0aW9uOiBmYWxzZVxuICAgICAgfSwgbnVsbCk7XG4gICAgICBlKHtcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUuanVtcFxuICAgICAgfSk7XG4gICAgfSBlbHNlIGUoKTtcbiAgfVxuICBvbldpblZ3X3BsYXlNYXNrRmFkZUluKHQsIGUpIHtcbiAgICB2YXIgaSwgcjtcbiAgICBpZiAodGhpcy5faXNIaWRlQm9udXNWaWV3KSB7XG4gICAgICB0aGlzLl9pc0hpZGVCb251c1ZpZXcgPSBmYWxzZTtcbiAgICAgIHZhciBvID0gdC5pbnM7XG4gICAgICBpZiAobykge1xuICAgICAgICB2YXIgYSA9IG51bGwgPT09IChpID0gby5ub2RlLnBhcmVudCkgfHwgdm9pZCAwID09PSBpID8gdm9pZCAwIDogaS5nZXRDaGlsZEJ5TmFtZShcIkJsdXJCZ1wiKTtcbiAgICAgICAgYSAmJiAoYS5vcGFjaXR5ID0gMCk7XG4gICAgICAgIG51bGwgPT09IChyID0gby5zdG9wTWFza0FuaW1hdGlvbikgfHwgdm9pZCAwID09PSByIHx8IHIuY2FsbChvKTtcbiAgICAgICAgby5tYXNrTm9kZSAmJiAoby5tYXNrTm9kZS5vcGFjaXR5ID0gdGhpcy5fbWFza09wYWNpdHkpO1xuICAgICAgfVxuICAgICAgZSh7XG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLmp1bXBcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBlKCk7XG4gIH1cbn0iXX0=