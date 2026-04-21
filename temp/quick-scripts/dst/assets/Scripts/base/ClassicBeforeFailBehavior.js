
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/base/ClassicBeforeFailBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '68eb6GlbpxBaanHTCIaJzJ6', 'ClassicBeforeFailBehavior');
// Scripts/base/ClassicBeforeFailBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassicBeforeFailBehavior = void 0;
var I18NStrings_1 = require("../framework/data/I18NStrings");
var BaseUI_1 = require("../framework/ui/BaseUI");
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var FailMaskNodeStateAni_1 = require("../tilenodes/fsm/ani/FailMaskNodeStateAni");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var ClassicBeforeFailBehavior = /** @class */ (function (_super) {
    __extends(ClassicBeforeFailBehavior, _super);
    function ClassicBeforeFailBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClassicBeforeFailBehavior.prototype.onAbort = function () {
        _super.prototype.onAbort.call(this);
        this.context.gameView.setSwallowEventNodeActive(false);
    };
    ClassicBeforeFailBehavior.prototype.start = function () {
        var e = this;
        this.context.gameView.setSwallowEventNodeActive(true);
        this.showView(function () {
            e.context.gameView.setSwallowEventNodeActive(false);
            e.finish(GameInputEnum_1.EBehaviorEnum.Success);
        });
    };
    ClassicBeforeFailBehavior.prototype.showView = function (e) {
        var t = this;
        BaseUI_1.default.createUI("prefabs/game/ClassicBeforeFail").then(function (o) {
            if (o && cc.isValid(o)) {
                o.parent = t.context.gameView.nodeTopEffectRoot;
                var n = o.getChildByName("LabelText");
                if (n) {
                    n.getComponent(cc.Label).string = I18NStrings_1.default.get("MahjongTiles_Revive_Title_1");
                    n.opacity = 0;
                }
                var i = o.getChildByName("showbg");
                i && (i.opacity = 0);
                t.playFailAnimation(o, n, i, e);
            }
        });
    };
    ClassicBeforeFailBehavior.prototype.playFailAnimation = function (e, t, o, n) {
        this.playTilesGrayAnimation(0.4);
        this.playBgFadeIn(o, 0.4, 178);
        this.playLabelScaleAndFadeIn(t, 0.4, function () { });
        cc.tween(e).delay(0.9).call(function () {
            null == n || n();
        }).to(0.3, {
            opacity: 0
        }, {
            easing: cc.easing.sineInOut
        }).call(function () {
            cc.isValid(e) && e.destroy();
        }).start();
    };
    ClassicBeforeFailBehavior.prototype.playTilesGrayAnimation = function (e) {
        if (e === void 0) { e = 0.4; }
        var t = this.context.getTileNodeManager();
        if (t) {
            var o = t.getTileNodes();
            o && 0 !== o.length && o.forEach(function (e) {
                if (e && cc.isValid(e.tileNode)) {
                    var t = new FailMaskNodeStateAni_1.FailMaskNodeStateAni(e.tileNode, e, 0);
                    e.attachNodeStateAnis([t]);
                    e.playAttachEnterAni(null, function () { });
                }
            });
        }
    };
    ClassicBeforeFailBehavior.prototype.playBgFadeIn = function (e, t, o) {
        if (t === void 0) { t = 0.4; }
        if (o === void 0) { o = 178; }
        if (e && cc.isValid(e)) {
            e.opacity = 0;
            cc.tween(e).to(t, {
                opacity: o
            }, {
                easing: cc.easing.sineInOut
            }).start();
        }
    };
    ClassicBeforeFailBehavior.prototype.playLabelScaleAndFadeIn = function (e, t, o) {
        if (t === void 0) { t = 0.4; }
        if (e && cc.isValid(e)) {
            e.opacity = 0;
            cc.tween(e).to(0, {
                scale: 0,
                opacity: 0
            }).to(t, {
                scale: 1,
                opacity: 255
            }, {
                easing: cc.easing.backOut
            }).start();
        }
        else
            null == o || o();
    };
    return ClassicBeforeFailBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.ClassicBeforeFailBehavior = ClassicBeforeFailBehavior;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2Jhc2UvQ2xhc3NpY0JlZm9yZUZhaWxCZWhhdmlvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZEQUF3RDtBQUN4RCxpREFBNEM7QUFDNUMscUVBQW9FO0FBQ3BFLGtGQUFpRjtBQUNqRix5REFBd0Q7QUFDeEQ7SUFBK0MsNkNBQWlCO0lBQWhFOztJQWdGQSxDQUFDO0lBL0VDLDJDQUFPLEdBQVA7UUFDRSxpQkFBTSxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLHlCQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFDRCx5Q0FBSyxHQUFMO1FBQ0UsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ2IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMseUJBQXlCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNaLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLHlCQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3BELENBQUMsQ0FBQyxNQUFNLENBQUMsNkJBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNsQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCw0Q0FBUSxHQUFSLFVBQVMsQ0FBQztRQUNSLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNiLGdCQUFNLENBQUMsUUFBUSxDQUFDLGdDQUFnQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUNoRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUN0QixDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDO2dCQUNoRCxJQUFJLENBQUMsR0FBRyxD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QUFDLENBQUMsRUFBRTtnQkFDaEIsT0FBTyxFQUFFLENBQUM7YUFDWCxFQUFFO2dCQUNELE1BQU0sRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLFNBQVM7YUFDNUIsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ1o7SUFDSCxDQUFDO0lBQ0QsMkRBQXVCLEdBQXZCLFVBQXdCLENBQUMsRUFBRSxDQUFPLEVBQUUsQ0FBRTtRQUFYLGtCQUFBLEVBQUEsT0FBTztRQUNoQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ3RCLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1lBQ2QsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFO2dCQUNoQixLQUFLLEVBQUUsQ0FBQztnQkFDUixPQUFPLEVBQUUsQ0FBQzthQUNYLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFO2dCQUNQLEtBQUssRUFBRSxDQUFDO2dCQUNSLE9BQU8sRUFBRSxHQUFHO2FBQ2IsRUFBRTtnQkFDRCxNQUFNLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPO2FBQzFCLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNaOztZQUFNLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUNILGdDQUFDO0FBQUQsQ0FoRkEsQUFnRkMsQ0FoRjhDLHFDQUFpQixHQWdGL0Q7QUFoRlksOERBQXlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEkxOE5TdHJpbmdzIGZyb20gJy4uL2ZyYW1ld29yay9kYXRhL0kxOE5TdHJpbmdzJztcbmltcG9ydCBCYXNlVUkgZnJvbSAnLi4vZnJhbWV3b3JrL3VpL0Jhc2VVSSc7XG5pbXBvcnQgeyBFQmVoYXZpb3JFbnVtIH0gZnJvbSAnLi4vc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVJbnB1dEVudW0nO1xuaW1wb3J0IHsgRmFpbE1hc2tOb2RlU3RhdGVBbmkgfSBmcm9tICcuLi90aWxlbm9kZXMvZnNtL2FuaS9GYWlsTWFza05vZGVTdGF0ZUFuaSc7XG5pbXBvcnQgeyBHYW1lQmVoYXZpb3JzQmFzZSB9IGZyb20gJy4vR2FtZUJlaGF2aW9yc0Jhc2UnO1xuZXhwb3J0IGNsYXNzIENsYXNzaWNCZWZvcmVGYWlsQmVoYXZpb3IgZXh0ZW5kcyBHYW1lQmVoYXZpb3JzQmFzZSB7XG4gIG9uQWJvcnQoKSB7XG4gICAgc3VwZXIub25BYm9ydC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuY29udGV4dC5nYW1lVmlldy5zZXRTd2FsbG93RXZlbnROb2RlQWN0aXZlKGZhbHNlKTtcbiAgfVxuICBzdGFydCgpIHtcbiAgICB2YXIgZSA9IHRoaXM7XG4gICAgdGhpcy5jb250ZXh0LmdhbWVWaWV3LnNldFN3YWxsb3dFdmVudE5vZGVBY3RpdmUodHJ1ZSk7XG4gICAgdGhpcy5zaG93VmlldyhmdW5jdGlvbiAoKSB7XG4gICAgICBlLmNvbnRleHQuZ2FtZVZpZXcuc2V0U3dhbGxvd0V2ZW50Tm9kZUFjdGl2ZShmYWxzZSk7XG4gICAgICBlLmZpbmlzaChFQmVoYXZpb3JFbnVtLlN1Y2Nlc3MpO1xuICAgIH0pO1xuICB9XG4gIHNob3dWaWV3KGUpIHtcbiAgICB2YXIgdCA9IHRoaXM7XG4gICAgQmFzZVVJLmNyZWF0ZVVJKFwicHJlZmFicy9nYW1lL0NsYXNzaWNCZWZvcmVGYWlsXCIpLnRoZW4oZnVuY3Rpb24gKG8pIHtcbiAgICAgIGlmIChvICYmIGNjLmlzVmFsaWQobykpIHtcbiAgICAgICAgby5wYXJlbnQgPSB0LmNvbnRleHQuZ2FtZVZpZXcubm9kZVRvcEVmZmVjdFJvb3Q7XG4gICAgICAgIHZhciBuID0gby5nZXRDaGlsZEJ5TmFtZShcIkxhYmVsVGV4dFwiKTtcbiAgICAgICAgaWYgKG4pIHtcbiAgICAgICAgICBuLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gSTE4TlN0cmluZ3MuZ2V0KFwiTWFoam9uZ1RpbGVzX1Jldml2ZV9UaXRsZV8xXCIpO1xuICAgICAgICAgIG4ub3BhY2l0eSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGkgPSBvLmdldENoaWxkQnlOYW1lKFwic2hvd2JnXCIpO1xuICAgICAgICBpICYmIChpLm9wYWNpdHkgPSAwKTtcbiAgICAgICAgdC5wbGF5RmFpbEFuaW1hdGlvbihvLCBuLCBpLCBlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBwbGF5RmFpbEFuaW1hdGlvbihlLCB0LCBvLCBuKSB7XG4gICAgdGhpcy5wbGF5VGlsZXNHcmF5QW5pbWF0aW9uKDAuNCk7XG4gICAgdGhpcy5wbGF5QmdGYWRlSW4obywgMC40LCAxNzgpO1xuICAgIHRoaXMucGxheUxhYmVsU2NhbGVBbmRGYWRlSW4odCwgMC40LCBmdW5jdGlvbiAoKSB7fSk7XG4gICAgY2MudHdlZW4oZSkuZGVsYXkoMC45KS5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgIG51bGwgPT0gbiB8fCBuKCk7XG4gICAgfSkudG8oMC4zLCB7XG4gICAgICBvcGFjaXR5OiAwXG4gICAgfSwge1xuICAgICAgZWFzaW5nOiBjYy5lYXNpbmcuc2luZUluT3V0XG4gICAgfSkuY2FsbChmdW5jdGlvbiAoKSB7XG4gICAgICBjYy5pc1ZhbGlkKGUpICYmIGUuZGVzdHJveSgpO1xuICAgIH0pLnN0YXJ0KCk7XG4gIH1cbiAgcGxheVRpbGVzR3JheUFuaW1hdGlvbihlID0gMC40KSB7XG4gICAgdmFyIHQgPSB0aGlzLmNvbnRleHQuZ2V0VGlsZU5vZGVNYW5hZ2VyKCk7XG4gICAgaWYgKHQpIHtcbiAgICAgIHZhciBvID0gdC5nZXRUaWxlTm9kZXMoKTtcbiAgICAgIG8gJiYgMCAhPT0gby5sZW5ndGggJiYgby5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmIChlICYmIGNjLmlzVmFsaWQoZS50aWxlTm9kZSkpIHtcbiAgICAgICAgICB2YXIgdCA9IG5ldyBGYWlsTWFza05vZGVTdGF0ZUFuaShlLnRpbGVOb2RlLCBlLCAwKTtcbiAgICAgICAgICBlLmF0dGFjaE5vZGVTdGF0ZUFuaXMoW3RdKTtcbiAgICAgICAgICBlLnBsYXlBdHRhY2hFbnRlckFuaShudWxsLCBmdW5jdGlvbiAoKSB7fSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBwbGF5QmdGYWRlSW4oZSwgdCA9IDAuNCwgbyA9IDE3OCkge1xuICAgIGlmIChlICYmIGNjLmlzVmFsaWQoZSkpIHtcbiAgICAgIGUub3BhY2l0eSA9IDA7XG4gICAgICBjYy50d2VlbihlKS50byh0LCB7XG4gICAgICAgIG9wYWNpdHk6IG9cbiAgICAgIH0sIHtcbiAgICAgICAgZWFzaW5nOiBjYy5lYXNpbmcuc2luZUluT3V0XG4gICAgICB9KS5zdGFydCgpO1xuICAgIH1cbiAgfVxuICBwbGF5TGFiZWxTY2FsZUFuZEZhZGVJbihlLCB0ID0gMC40LCBvPykge1xuICAgIGlmIChlICYmIGNjLmlzVmFsaWQoZSkpIHtcbiAgICAgIGUub3BhY2l0eSA9IDA7XG4gICAgICBjYy50d2VlbihlKS50bygwLCB7XG4gICAgICAgIHNjYWxlOiAwLFxuICAgICAgICBvcGFjaXR5OiAwXG4gICAgICB9KS50byh0LCB7XG4gICAgICAgIHNjYWxlOiAxLFxuICAgICAgICBvcGFjaXR5OiAyNTVcbiAgICAgIH0sIHtcbiAgICAgICAgZWFzaW5nOiBjYy5lYXNpbmcuYmFja091dFxuICAgICAgfSkuc3RhcnQoKTtcbiAgICB9IGVsc2UgbnVsbCA9PSBvIHx8IG8oKTtcbiAgfVxufSJdfQ==