
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/base/InitNextLevelBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'af483dGDM9Lg6Tc9r6Ajzll', 'InitNextLevelBehavior');
// Scripts/base/InitNextLevelBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.InitNextLevelBehavior = void 0;
var UserModel_1 = require("../gamePlay/user/UserModel");
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameInteraction_1 = require("../GameInteraction/GameInteraction");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var InitNextLevelBehavior = /** @class */ (function (_super) {
    __extends(InitNextLevelBehavior, _super);
    function InitNextLevelBehavior() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._timeout = 0;
        return _this;
    }
    InitNextLevelBehavior.prototype.onAbort = function () {
        _super.prototype.onAbort.call(this);
    };
    InitNextLevelBehavior.prototype.start = function (e) {
        var t = this;
        Date.now();
        e.data.addGameLayerInfo.openGenerateState || this.cancelAnim(e);
        this.createNextLevelTileNodes(e).then(function () {
            Date.now();
            e.data.addGameLayerInfo.openGenerateState || t.refreshCardLockDarken(e);
            t.finish();
        });
    };
    InitNextLevelBehavior.prototype.refreshCardLockDarken = function () {
        UserModel_1.default.getInstance().isLockHighlightEnabled() && GameInteraction_1.GameInteraction.input({
            inputType: GameInputEnum_1.EGameInputEnum.RefreshCardLockDarken,
            isShowAni: false
        });
    };
    InitNextLevelBehavior.prototype.cancelAnim = function (e) {
        var t, o, n = this.context.getTileNodeManager();
        (null !== (o = null === (t = e.data.addGameLayerInfo.failingTiles) || void 0 === t ? void 0 : t.map(function (e) {
            return e.tile.id;
        })) && void 0 !== o ? o : []).forEach(function (e) {
            var t = n.getTileNodeByTileId(e);
            if (t) {
                t.cancelSelected();
                t.hidePropHint();
                t.stopAllAnimation();
            }
        });
    };
    InitNextLevelBehavior.prototype.createNextLevelTileNodes = function (e) {
        return this.context.getTileNodeManager().createNextLevelTileNodes(e.data.addGameLayerInfo);
    };
    return InitNextLevelBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.InitNextLevelBehavior = InitNextLevelBehavior;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2Jhc2UvSW5pdE5leHRMZXZlbEJlaGF2aW9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0RBQW1EO0FBQ25ELHFFQUFxRTtBQUNyRSxzRUFBcUU7QUFDckUseURBQXdEO0FBQ3hEO0lBQTJDLHlDQUFpQjtJQUE1RDtRQUFBLHFFQXVDQztRQXRDQyxjQUFRLEdBQUcsQ0FBQyxDQUFDOztJQXNDZixDQUFDO0lBckNDLHVDQUFPLEdBQVA7UUFDRSxpQkFBTSxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFDRCxxQ0FBSyxHQUFMLFVBQU0sQ0FBQztRQUNMLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNiLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNYLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ3BDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNYLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCLElBQUksQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hFLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNiLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELHFEQUFxQixHQUFyQjtRQUNFLG1CQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsc0JBQXNCLEVBQUUsSUFBSSxpQ0FBZSxDQUFDLEtBQUssQ0FBQztZQUN4RSxTQUFTLEVBQUUsOEJBQWMsQ0FBQyxxQkFBcUI7WUFDL0MsU0FBUyxFQUFFLEtBQUs7U0FDakIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELDBDQUFVLEdBQVYsVUFBVyxDQUFDO1FBQ1YsSUFBSSxDQUFDLEVBQ0gsQ0FBQyxFQUNELENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDeEMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUM7WUFDN0csT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUNuQixDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO1lBQy9DLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsRUFBRTtnQkFDTCxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQ25CLENBQUMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztnQkFDakIsQ0FBQyxDQUFDLGdCQUFnQixFQUFFLENBQUM7YUFDdEI7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCx3REFBd0IsR0FBeEIsVUFBeUIsQ0FBQztRQUN4QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDN0YsQ0FBQztJQUNILDRCQUFDO0FBQUQsQ0F2Q0EsQUF1Q0MsQ0F2QzBDLHFDQUFpQixHQXVDM0Q7QUF2Q1ksc0RBQXFCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi9nYW1lUGxheS91c2VyL1VzZXJNb2RlbCc7XG5pbXBvcnQgeyBFR2FtZUlucHV0RW51bSB9IGZyb20gJy4uL3NpbXVsYXRvci9jb25zdGFudC9HYW1lSW5wdXRFbnVtJztcbmltcG9ydCB7IEdhbWVJbnRlcmFjdGlvbiB9IGZyb20gJy4uL0dhbWVJbnRlcmFjdGlvbi9HYW1lSW50ZXJhY3Rpb24nO1xuaW1wb3J0IHsgR2FtZUJlaGF2aW9yc0Jhc2UgfSBmcm9tICcuL0dhbWVCZWhhdmlvcnNCYXNlJztcbmV4cG9ydCBjbGFzcyBJbml0TmV4dExldmVsQmVoYXZpb3IgZXh0ZW5kcyBHYW1lQmVoYXZpb3JzQmFzZSB7XG4gIF90aW1lb3V0ID0gMDtcbiAgb25BYm9ydCgpIHtcbiAgICBzdXBlci5vbkFib3J0LmNhbGwodGhpcyk7XG4gIH1cbiAgc3RhcnQoZSkge1xuICAgIHZhciB0ID0gdGhpcztcbiAgICBEYXRlLm5vdygpO1xuICAgIGUuZGF0YS5hZGRHYW1lTGF5ZXJJbmZvLm9wZW5HZW5lcmF0ZVN0YXRlIHx8IHRoaXMuY2FuY2VsQW5pbShlKTtcbiAgICB0aGlzLmNyZWF0ZU5leHRMZXZlbFRpbGVOb2RlcyhlKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIERhdGUubm93KCk7XG4gICAgICBlLmRhdGEuYWRkR2FtZUxheWVySW5mby5vcGVuR2VuZXJhdGVTdGF0ZSB8fCB0LnJlZnJlc2hDYXJkTG9ja0RhcmtlbihlKTtcbiAgICAgIHQuZmluaXNoKCk7XG4gICAgfSk7XG4gIH1cbiAgcmVmcmVzaENhcmRMb2NrRGFya2VuKCkge1xuICAgIFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmlzTG9ja0hpZ2hsaWdodEVuYWJsZWQoKSAmJiBHYW1lSW50ZXJhY3Rpb24uaW5wdXQoe1xuICAgICAgaW5wdXRUeXBlOiBFR2FtZUlucHV0RW51bS5SZWZyZXNoQ2FyZExvY2tEYXJrZW4sXG4gICAgICBpc1Nob3dBbmk6IGZhbHNlXG4gICAgfSk7XG4gIH1cbiAgY2FuY2VsQW5pbShlKSB7XG4gICAgdmFyIHQsXG4gICAgICBvLFxuICAgICAgbiA9IHRoaXMuY29udGV4dC5nZXRUaWxlTm9kZU1hbmFnZXIoKTtcbiAgICAobnVsbCAhPT0gKG8gPSBudWxsID09PSAodCA9IGUuZGF0YS5hZGRHYW1lTGF5ZXJJbmZvLmZhaWxpbmdUaWxlcykgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC5tYXAoZnVuY3Rpb24gKGUpIHtcbiAgICAgIHJldHVybiBlLnRpbGUuaWQ7XG4gICAgfSkpICYmIHZvaWQgMCAhPT0gbyA/IG8gOiBbXSkuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIHQgPSBuLmdldFRpbGVOb2RlQnlUaWxlSWQoZSk7XG4gICAgICBpZiAodCkge1xuICAgICAgICB0LmNhbmNlbFNlbGVjdGVkKCk7XG4gICAgICAgIHQuaGlkZVByb3BIaW50KCk7XG4gICAgICAgIHQuc3RvcEFsbEFuaW1hdGlvbigpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGNyZWF0ZU5leHRMZXZlbFRpbGVOb2RlcyhlKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRUaWxlTm9kZU1hbmFnZXIoKS5jcmVhdGVOZXh0TGV2ZWxUaWxlTm9kZXMoZS5kYXRhLmFkZEdhbWVMYXllckluZm8pO1xuICB9XG59Il19