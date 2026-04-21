
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/animation_old/manager/AnimationManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e599cbBwg5BO5HBr6AdNler', 'AnimationManager');
// Scripts/animation_old/manager/AnimationManager.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimationManager = void 0;
var AnimationEnums_1 = require("../../enums/AnimationEnums");
var AnimationUtil_1 = require("../../util/AnimationUtil");
var AnimationManager = /** @class */ (function () {
    function AnimationManager() {
        this.currentConfigName = AnimationEnums_1.EAnimationConfigName.INTERLACE;
        this.isPlaying = false;
        this.setAnimationConfig(AnimationEnums_1.EAnimationConfigName.INTERLACE);
    }
    AnimationManager.getInstance = function () {
        AnimationManager.instance || (AnimationManager.instance = new AnimationManager());
        return AnimationManager.instance;
    };
    AnimationManager.prototype.setAnimationConfig = function (e) {
        this.currentConfigName = e;
        AnimationUtil_1.AnimationUtil.setFadeInAnimation(e);
    };
    AnimationManager.prototype.getCurrentConfigName = function () {
        return this.currentConfigName;
    };
    AnimationManager.prototype.isAnimationPlaying = function () {
        return this.isPlaying;
    };
    AnimationManager.prototype.playFadeInAnimation = function (e) {
        var t = this;
        if (!this.isPlaying) {
            this.isPlaying = true;
            var o = e.endCallback;
            AnimationUtil_1.AnimationUtil.playFadeInAnimation(e.timerComponent, e.rects, e.shadows, e.halfCardWidth, e.halfMaxColNum, e.halfMaxRowNum, e.startCallback, e.beforeShadowCallback, function () {
                t.isPlaying = false;
                AnimationUtil_1.AnimationUtil.clearAnimatingNodes();
                o && o();
            }, e.refreshDuration || false);
        }
    };
    AnimationManager.prototype.stopCurrentAnimation = function () {
        if (this.isPlaying) {
            this.isPlaying = false;
            AnimationUtil_1.AnimationUtil.stopAllAnimations();
        }
    };
    AnimationManager.prototype.resetAnimationState = function () {
        this.isPlaying = false;
    };
    AnimationManager.prototype.getAvailableConfigNames = function () {
        return [AnimationEnums_1.EAnimationConfigName.ZIPPER, AnimationEnums_1.EAnimationConfigName.DOOR_CLOSE, AnimationEnums_1.EAnimationConfigName.INTERLACE];
    };
    AnimationManager.prototype.randomizeAnimationConfig = function () {
        var e = this.getAvailableConfigNames();
        Math.floor(Math.random() * e.length);
        var t = e[2];
        this.setAnimationConfig(t);
    };
    return AnimationManager;
}());
exports.AnimationManager = AnimationManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2FuaW1hdGlvbl9vbGQvbWFuYWdlci9BbmltYXRpb25NYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkRBQWtFO0FBQ2xFLDBEQUF5RDtBQUN6RDtJQUdFO1FBRkEsc0JBQWlCLEdBQUcscUNBQW9CLENBQUMsU0FBUyxDQUFDO1FBQ25ELGNBQVMsR0FBRyxLQUFLLENBQUM7UUFFaEIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLHFDQUFvQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFDTSw0QkFBVyxHQUFsQjtRQUNFLGdCQUFnQixDQUFDLFFBQVEsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsR0FBRyxJQUFJLGdCQUFnQixFQUFFLENBQUMsQ0FBQztRQUNsRixPQUFPLGdCQUFnQixDQUFDLFFBQVEsQ0FBQztJQUNuQyxDQUFDO0lBQ0QsNkNBQWtCLEdBQWxCLFVBQW1CLENBQUM7UUFDbEIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLENBQUMsQ0FBQztRQUMzQiw2QkFBYSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFDRCwrQ0FBb0IsR0FBcEI7UUFDRSxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztJQUNoQyxDQUFDO0lBQ0QsNkNBQWtCLEdBQWxCO1FBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7SUFDRCw4Q0FBbUIsR0FBbkIsVUFBb0IsQ0FBQztRQUNuQixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUN0QixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxDQUFDO1lBQ3RCLDZCQUFhLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsb0JBQW9CLEVBQUU7Z0JBQ2xLLENBQUMsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO2dCQUNwQiw2QkFBYSxDQUFDLG1CQUFtQixFQUFFLENBQUM7Z0JBQ3BDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUNYLENBQUMsRUFBRSxDQUFDLENBQUMsZUFBZSxJQUFJLEtBQUssQ0FBQyxDQUFDO1NBQ2hDO0lBQ0gsQ0FBQztJQUNELCtDQUFvQixHQUFwQjtRQUNFLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN2Qiw2QkFBYSxDQUFDLGlCQUFpQixFQUFFLENBQUM7U0FDbkM7SUFDSCxDQUFDO0lBQ0QsOENBQW1CLEdBQW5CO1FBQ0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDekIsQ0FBQztJQUNELGtEQUF1QixHQUF2QjtRQUNFLE9BQU8sQ0FBQyxxQ0FBb0IsQ0FBQyxNQUFNLEVBQUUscUNBQW9CLENBQUMsVUFBVSxFQUFFLHFDQUFvQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3hHLENBQUM7SUFDRCxtREFBd0IsR0FBeEI7UUFDRSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztRQUN2QyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2IsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFDSCx1QkFBQztBQUFELENBbERBLEFBa0RDLElBQUE7QUFsRFksNENBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRUFuaW1hdGlvbkNvbmZpZ05hbWUgfSBmcm9tICcuLi8uLi9lbnVtcy9BbmltYXRpb25FbnVtcyc7XG5pbXBvcnQgeyBBbmltYXRpb25VdGlsIH0gZnJvbSAnLi4vLi4vdXRpbC9BbmltYXRpb25VdGlsJztcbmV4cG9ydCBjbGFzcyBBbmltYXRpb25NYW5hZ2VyIHtcbiAgY3VycmVudENvbmZpZ05hbWUgPSBFQW5pbWF0aW9uQ29uZmlnTmFtZS5JTlRFUkxBQ0U7XG4gIGlzUGxheWluZyA9IGZhbHNlO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnNldEFuaW1hdGlvbkNvbmZpZyhFQW5pbWF0aW9uQ29uZmlnTmFtZS5JTlRFUkxBQ0UpO1xuICB9XG4gIHN0YXRpYyBnZXRJbnN0YW5jZSgpIHtcbiAgICBBbmltYXRpb25NYW5hZ2VyLmluc3RhbmNlIHx8IChBbmltYXRpb25NYW5hZ2VyLmluc3RhbmNlID0gbmV3IEFuaW1hdGlvbk1hbmFnZXIoKSk7XG4gICAgcmV0dXJuIEFuaW1hdGlvbk1hbmFnZXIuaW5zdGFuY2U7XG4gIH1cbiAgc2V0QW5pbWF0aW9uQ29uZmlnKGUpIHtcbiAgICB0aGlzLmN1cnJlbnRDb25maWdOYW1lID0gZTtcbiAgICBBbmltYXRpb25VdGlsLnNldEZhZGVJbkFuaW1hdGlvbihlKTtcbiAgfVxuICBnZXRDdXJyZW50Q29uZmlnTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50Q29uZmlnTmFtZTtcbiAgfVxuICBpc0FuaW1hdGlvblBsYXlpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNQbGF5aW5nO1xuICB9XG4gIHBsYXlGYWRlSW5BbmltYXRpb24oZSkge1xuICAgIHZhciB0ID0gdGhpcztcbiAgICBpZiAoIXRoaXMuaXNQbGF5aW5nKSB7XG4gICAgICB0aGlzLmlzUGxheWluZyA9IHRydWU7XG4gICAgICB2YXIgbyA9IGUuZW5kQ2FsbGJhY2s7XG4gICAgICBBbmltYXRpb25VdGlsLnBsYXlGYWRlSW5BbmltYXRpb24oZS50aW1lckNvbXBvbmVudCwgZS5yZWN0cywgZS5zaGFkb3dzLCBlLmhhbGZDYXJkV2lkdGgsIGUuaGFsZk1heENvbE51bSwgZS5oYWxmTWF4Um93TnVtLCBlLnN0YXJ0Q2FsbGJhY2ssIGUuYmVmb3JlU2hhZG93Q2FsbGJhY2ssIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdC5pc1BsYXlpbmcgPSBmYWxzZTtcbiAgICAgICAgQW5pbWF0aW9uVXRpbC5jbGVhckFuaW1hdGluZ05vZGVzKCk7XG4gICAgICAgIG8gJiYgbygpO1xuICAgICAgfSwgZS5yZWZyZXNoRHVyYXRpb24gfHwgZmFsc2UpO1xuICAgIH1cbiAgfVxuICBzdG9wQ3VycmVudEFuaW1hdGlvbigpIHtcbiAgICBpZiAodGhpcy5pc1BsYXlpbmcpIHtcbiAgICAgIHRoaXMuaXNQbGF5aW5nID0gZmFsc2U7XG4gICAgICBBbmltYXRpb25VdGlsLnN0b3BBbGxBbmltYXRpb25zKCk7XG4gICAgfVxuICB9XG4gIHJlc2V0QW5pbWF0aW9uU3RhdGUoKSB7XG4gICAgdGhpcy5pc1BsYXlpbmcgPSBmYWxzZTtcbiAgfVxuICBnZXRBdmFpbGFibGVDb25maWdOYW1lcygpIHtcbiAgICByZXR1cm4gW0VBbmltYXRpb25Db25maWdOYW1lLlpJUFBFUiwgRUFuaW1hdGlvbkNvbmZpZ05hbWUuRE9PUl9DTE9TRSwgRUFuaW1hdGlvbkNvbmZpZ05hbWUuSU5URVJMQUNFXTtcbiAgfVxuICByYW5kb21pemVBbmltYXRpb25Db25maWcoKSB7XG4gICAgdmFyIGUgPSB0aGlzLmdldEF2YWlsYWJsZUNvbmZpZ05hbWVzKCk7XG4gICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZS5sZW5ndGgpO1xuICAgIHZhciB0ID0gZVsyXTtcbiAgICB0aGlzLnNldEFuaW1hdGlvbkNvbmZpZyh0KTtcbiAgfVxufSJdfQ==