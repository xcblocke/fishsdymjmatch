
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/fsm/ani/HintNodeStateAni.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'db327326YVPRJLiIslW2E7r', 'HintNodeStateAni');
// Scripts/fsm/ani/HintNodeStateAni.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.HintNodeStateAni = void 0;
var NodeStateAniBase_1 = require("../../base/NodeStateAniBase");
var HintNodeStateAni = /** @class */ (function (_super) {
    __extends(HintNodeStateAni, _super);
    function HintNodeStateAni(t, o, n) {
        var _this = _super.call(this, t, "hint") || this;
        _this._isShaking = false;
        _this._baseTileNode = null;
        _this._config = null;
        _this._baseTileNode = o;
        _this._config = {
            enableShake: false !== (null == n ? void 0 : n.enableShake),
            enableScale: false !== (null == n ? void 0 : n.enableScale),
            scaleValue: (null == n ? void 0 : n.scaleValue) || 1.1,
            scaleDuration: (null == n ? void 0 : n.scaleDuration) || 0.2,
            direction: (null == n ? void 0 : n.direction) || 1
        };
        return _this;
    }
    HintNodeStateAni.prototype.updateConfig = function (e) {
        this._config = Object.assign(Object.assign({}, this._config), e);
    };
    HintNodeStateAni.prototype.onEnterStart = function (t) {
        var o = this;
        _super.prototype.onEnterStart.call(this, t);
        if (cc.isValid(this._node)) {
            t && this.updateConfig(t);
            this.stopAllAnimations();
            if (this._config.enableScale)
                this.playScaleAnimation(function () {
                    o._config.enableShake && o.playShakeAnimation();
                    o.onEnterEnd(t);
                });
            else {
                this._config.enableShake && this.playShakeAnimation();
                this.onEnterEnd(t);
            }
        }
        else
            this.onEnterEnd(t);
    };
    HintNodeStateAni.prototype.onExitStart = function (t) {
        _super.prototype.onExitStart.call(this, t);
        this.stopAllAnimations();
        this._node.angle = 0;
        this._node.scale = 1;
        this.onExitEnd(t);
    };
    HintNodeStateAni.prototype.onEnter = function (t) {
        _super.prototype.onEnter.call(this, t);
        if (cc.isValid(this._node)) {
            this._node.scale = this._config.enableScale ? this._config.scaleValue : 1;
            this._config.enableShake && this.playShakeAnimation();
        }
    };
    HintNodeStateAni.prototype.onExit = function (t) {
        _super.prototype.onExit.call(this, t);
        this.stopAllAnimations();
        this._node.angle = 0;
        this._node.scale = 1;
    };
    HintNodeStateAni.prototype.playScaleAnimation = function (e) {
        this._scaleTween && this._scaleTween.stop();
        this._node.scale = 1;
        this._scaleTween = cc.tween(this._node).to(this._config.scaleDuration, {
            scale: this._config.scaleValue
        }, {
            easing: "cubicOut"
        }).call(function () {
            null == e || e();
        }).start();
    };
    HintNodeStateAni.prototype.playShakeAnimation = function () {
        var e = this;
        this._shakeTween && this._shakeTween.stop();
        this._isShaking = true;
        var t = [0, 2, -3, 4, -5, 4, -3, 2, 0].map(function (t) {
            return t * e._config.direction;
        }), o = [0, 0.07, 0.2, 0.33, 0.47, 0.6, 0.73, 0.87, 0.93];
        (function () {
            for (var n = cc.tween(e._node), i = 1; i < t.length; i++) {
                var r = o[i] - o[i - 1];
                n = n.to(r, {
                    angle: t[i]
                }, {
                    easing: "cubicInOut"
                });
            }
            n = n.delay(1);
            e._shakeTween = n.union().repeatForever().start();
        })();
    };
    HintNodeStateAni.prototype.pauseShake = function () {
        this._shakeTween && this._shakeTween.stop();
        this._isShaking = false;
        this._node.angle = 0;
    };
    HintNodeStateAni.prototype.resumeShake = function () {
        if ("entered" === this.behaviorState) {
            this._config.enableScale && (this._node.scale = this._config.scaleValue);
            this._config.enableShake && !this._isShaking && this.playShakeAnimation();
        }
    };
    HintNodeStateAni.prototype.stopAllAnimations = function () {
        if (this._scaleTween) {
            this._scaleTween.stop();
            this._scaleTween = void 0;
        }
        if (this._shakeTween) {
            this._shakeTween.stop();
            this._shakeTween = void 0;
        }
        this._isShaking = false;
    };
    HintNodeStateAni.prototype.reset = function () {
        _super.prototype.reset.call(this);
        this.stopAllAnimations();
        this._node.angle = 0;
        this._node.scale = 1;
    };
    HintNodeStateAni.prototype.applyImmediate = function () {
        if (cc.isValid(this._node)) {
            this._node.scale = this._config.enableScale ? this._config.scaleValue : 1;
            this._config.enableShake && this.playShakeAnimation();
        }
    };
    return HintNodeStateAni;
}(NodeStateAniBase_1.NodeStateAniBase));
exports.HintNodeStateAni = HintNodeStateAni;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2ZzbS9hbmkvSGludE5vZGVTdGF0ZUFuaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUErRDtBQUMvRDtJQUFzQyxvQ0FBZ0I7SUFJcEQsMEJBQVksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQW5CLFlBQ0Usa0JBQU0sQ0FBQyxFQUFFLE1BQU0sQ0FBQyxTQVNqQjtRQWJELGdCQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLG1CQUFhLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLGFBQU8sR0FBRyxJQUFJLENBQUM7UUFHYixLQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztRQUN2QixLQUFJLENBQUMsT0FBTyxHQUFHO1lBQ2IsV0FBVyxFQUFFLEtBQUssS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDO1lBQzNELFdBQVcsRUFBRSxLQUFLLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQztZQUMzRCxVQUFVLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUc7WUFDdEQsYUFBYSxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsSUFBSSxHQUFHO1lBQzVELFNBQVMsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQztTQUNuRCxDQUFD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LENBQUMsQ0FBQztTQUMzQjtRQUNELElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNwQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLENBQUM7U0FDM0I7UUFDRCxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztJQUMxQixDQUFDO0lBQ0QsZ0NBQUssR0FBTDtRQUNFLGlCQUFNLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBQ0QseUNBQWMsR0FBZDtRQUNFLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDMUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDMUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7U0FDdkQ7SUFDSCxDQUFDO0lBQ0gsdUJBQUM7QUFBRCxDQXZIQSxBQXVIQyxDQXZIcUMsbUNBQWdCLEdBdUhyRDtBQXZIWSw0Q0FBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOb2RlU3RhdGVBbmlCYXNlIH0gZnJvbSAnLi4vLi4vYmFzZS9Ob2RlU3RhdGVBbmlCYXNlJztcbmV4cG9ydCBjbGFzcyBIaW50Tm9kZVN0YXRlQW5pIGV4dGVuZHMgTm9kZVN0YXRlQW5pQmFzZSB7XG4gIF9pc1NoYWtpbmcgPSBmYWxzZTtcbiAgX2Jhc2VUaWxlTm9kZSA9IG51bGw7XG4gIF9jb25maWcgPSBudWxsO1xuICBjb25zdHJ1Y3Rvcih0LCBvLCBuKSB7XG4gICAgc3VwZXIodCwgXCJoaW50XCIpO1xuICAgIHRoaXMuX2Jhc2VUaWxlTm9kZSA9IG87XG4gICAgdGhpcy5fY29uZmlnID0ge1xuICAgICAgZW5hYmxlU2hha2U6IGZhbHNlICE9PSAobnVsbCA9PSBuID8gdm9pZCAwIDogbi5lbmFibGVTaGFrZSksXG4gICAgICBlbmFibGVTY2FsZTogZmFsc2UgIT09IChudWxsID09IG4gPyB2b2lkIDAgOiBuLmVuYWJsZVNjYWxlKSxcbiAgICAgIHNjYWxlVmFsdWU6IChudWxsID09IG4gPyB2b2lkIDAgOiBuLnNjYWxlVmFsdWUpIHx8IDEuMSxcbiAgICAgIHNjYWxlRHVyYXRpb246IChudWxsID09IG4gPyB2b2lkIDAgOiBuLnNjYWxlRHVyYXRpb24pIHx8IDAuMixcbiAgICAgIGRpcmVjdGlvbjogKG51bGwgPT0gbiA/IHZvaWQgMCA6IG4uZGlyZWN0aW9uKSB8fCAxXG4gICAgfTtcbiAgfVxuICB1cGRhdGVDb25maWcoZSkge1xuICAgIHRoaXMuX2NvbmZpZyA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fY29uZmlnKSwgZSk7XG4gIH1cbiAgb25FbnRlclN0YXJ0KHQpIHtcbiAgICB2YXIgbyA9IHRoaXM7XG4gICAgc3VwZXIub25FbnRlclN0YXJ0LmNhbGwodGhpcywgdCk7XG4gICAgaWYgKGNjLmlzVmFsaWQodGhpcy5fbm9kZSkpIHtcbiAgICAgIHQgJiYgdGhpcy51cGRhdGVDb25maWcodCk7XG4gICAgICB0aGlzLnN0b3BBbGxBbmltYXRpb25zKCk7XG4gICAgICBpZiAodGhpcy5fY29uZmlnLmVuYWJsZVNjYWxlKSB0aGlzLnBsYXlTY2FsZUFuaW1hdGlvbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIG8uX2NvbmZpZy5lbmFibGVTaGFrZSAmJiBvLnBsYXlTaGFrZUFuaW1hdGlvbigpO1xuICAgICAgICBvLm9uRW50ZXJFbmQodCk7XG4gICAgICB9KTtlbHNlIHtcbiAgICAgICAgdGhpcy5fY29uZmlnLmVuYWJsZVNoYWtlICYmIHRoaXMucGxheVNoYWtlQW5pbWF0aW9uKCk7XG4gICAgICAgIHRoaXMub25FbnRlckVuZCh0KTtcbiAgICAgIH1cbiAgICB9IGVsc2UgdGhpcy5vbkVudGVyRW5kKHQpO1xuICB9XG4gIG9uRXhpdFN0YXJ0KHQpIHtcbiAgICBzdXBlci5vbkV4aXRTdGFydC5jYWxsKHRoaXMsIHQpO1xuICAgIHRoaXMuc3RvcEFsbEFuaW1hdGlvbnMoKTtcbiAgICB0aGlzLl9ub2RlLmFuZ2xlID0gMDtcbiAgICB0aGlzLl9ub2RlLnNjYWxlID0gMTtcbiAgICB0aGlzLm9uRXhpdEVuZCh0KTtcbiAgfVxuICBvbkVudGVyKHQpIHtcbiAgICBzdXBlci5vbkVudGVyLmNhbGwodGhpcywgdCk7XG4gICAgaWYgKGNjLmlzVmFsaWQodGhpcy5fbm9kZSkpIHtcbiAgICAgIHRoaXMuX25vZGUuc2NhbGUgPSB0aGlzLl9jb25maWcuZW5hYmxlU2NhbGUgPyB0aGlzLl9jb25maWcuc2NhbGVWYWx1ZSA6IDE7XG4gICAgICB0aGlzLl9jb25maWcuZW5hYmxlU2hha2UgJiYgdGhpcy5wbGF5U2hha2VBbmltYXRpb24oKTtcbiAgICB9XG4gIH1cbiAgb25FeGl0KHQpIHtcbiAgICBzdXBlci5vbkV4aXQuY2FsbCh0aGlzLCB0KTtcbiAgICB0aGlzLnN0b3BBbGxBbmltYXRpb25zKCk7XG4gICAgdGhpcy5fbm9kZS5hbmdsZSA9IDA7XG4gICAgdGhpcy5fbm9kZS5zY2FsZSA9IDE7XG4gIH1cbiAgcGxheVNjYWxlQW5pbWF0aW9uKGUpIHtcbiAgICB0aGlzLl9zY2FsZVR3ZWVuICYmIHRoaXMuX3NjYWxlVHdlZW4uc3RvcCgpO1xuICAgIHRoaXMuX25vZGUuc2NhbGUgPSAxO1xuICAgIHRoaXMuX3NjYWxlVHdlZW4gPSBjYy50d2Vlbih0aGlzLl9ub2RlKS50byh0aGlzLl9jb25maWcuc2NhbGVEdXJhdGlvbiwge1xuICAgICAgc2NhbGU6IHRoaXMuX2NvbmZpZy5zY2FsZVZhbHVlXG4gICAgfSwge1xuICAgICAgZWFzaW5nOiBcImN1YmljT3V0XCJcbiAgICB9KS5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgIG51bGwgPT0gZSB8fCBlKCk7XG4gICAgfSkuc3RhcnQoKTtcbiAgfVxuICBwbGF5U2hha2VBbmltYXRpb24oKSB7XG4gICAgdmFyIGUgPSB0aGlzO1xuICAgIHRoaXMuX3NoYWtlVHdlZW4gJiYgdGhpcy5fc2hha2VUd2Vlbi5zdG9wKCk7XG4gICAgdGhpcy5faXNTaGFraW5nID0gdHJ1ZTtcbiAgICB2YXIgdCA9IFswLCAyLCAtMywgNCwgLTUsIDQsIC0zLCAyLCAwXS5tYXAoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuIHQgKiBlLl9jb25maWcuZGlyZWN0aW9uO1xuICAgICAgfSksXG4gICAgICBvID0gWzAsIDAuMDcsIDAuMiwgMC4zMywgMC40NywgMC42LCAwLjczLCAwLjg3LCAwLjkzXTtcbiAgICAoZnVuY3Rpb24gKCkge1xuICAgICAgZm9yICh2YXIgbiA9IGNjLnR3ZWVuKGUuX25vZGUpLCBpID0gMTsgaSA8IHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHIgPSBvW2ldIC0gb1tpIC0gMV07XG4gICAgICAgIG4gPSBuLnRvKHIsIHtcbiAgICAgICAgICBhbmdsZTogdFtpXVxuICAgICAgICB9LCB7XG4gICAgICAgICAgZWFzaW5nOiBcImN1YmljSW5PdXRcIlxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIG4gPSBuLmRlbGF5KDEpO1xuICAgICAgZS5fc2hha2VUd2VlbiA9IG4udW5pb24oKS5yZXBlYXRGb3JldmVyKCkuc3RhcnQoKTtcbiAgICB9KSgpO1xuICB9XG4gIHBhdXNlU2hha2UoKSB7XG4gICAgdGhpcy5fc2hha2VUd2VlbiAmJiB0aGlzLl9zaGFrZVR3ZWVuLnN0b3AoKTtcbiAgICB0aGlzLl9pc1NoYWtpbmcgPSBmYWxzZTtcbiAgICB0aGlzLl9ub2RlLmFuZ2xlID0gMDtcbiAgfVxuICByZXN1bWVTaGFrZSgpIHtcbiAgICBpZiAoXCJlbnRlcmVkXCIgPT09IHRoaXMuYmVoYXZpb3JTdGF0ZSkge1xuICAgICAgdGhpcy5fY29uZmlnLmVuYWJsZVNjYWxlICYmICh0aGlzLl9ub2RlLnNjYWxlID0gdGhpcy5fY29uZmlnLnNjYWxlVmFsdWUpO1xuICAgICAgdGhpcy5fY29uZmlnLmVuYWJsZVNoYWtlICYmICF0aGlzLl9pc1NoYWtpbmcgJiYgdGhpcy5wbGF5U2hha2VBbmltYXRpb24oKTtcbiAgICB9XG4gIH1cbiAgc3RvcEFsbEFuaW1hdGlvbnMoKSB7XG4gICAgaWYgKHRoaXMuX3NjYWxlVHdlZW4pIHtcbiAgICAgIHRoaXMuX3NjYWxlVHdlZW4uc3RvcCgpO1xuICAgICAgdGhpcy5fc2NhbGVUd2VlbiA9IHZvaWQgMDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3NoYWtlVHdlZW4pIHtcbiAgICAgIHRoaXMuX3NoYWtlVHdlZW4uc3RvcCgpO1xuICAgICAgdGhpcy5fc2hha2VUd2VlbiA9IHZvaWQgMDtcbiAgICB9XG4gICAgdGhpcy5faXNTaGFraW5nID0gZmFsc2U7XG4gIH1cbiAgcmVzZXQoKSB7XG4gICAgc3VwZXIucmVzZXQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLnN0b3BBbGxBbmltYXRpb25zKCk7XG4gICAgdGhpcy5fbm9kZS5hbmdsZSA9IDA7XG4gICAgdGhpcy5fbm9kZS5zY2FsZSA9IDE7XG4gIH1cbiAgYXBwbHlJbW1lZGlhdGUoKSB7XG4gICAgaWYgKGNjLmlzVmFsaWQodGhpcy5fbm9kZSkpIHtcbiAgICAgIHRoaXMuX25vZGUuc2NhbGUgPSB0aGlzLl9jb25maWcuZW5hYmxlU2NhbGUgPyB0aGlzLl9jb25maWcuc2NhbGVWYWx1ZSA6IDE7XG4gICAgICB0aGlzLl9jb25maWcuZW5hYmxlU2hha2UgJiYgdGhpcy5wbGF5U2hha2VBbmltYXRpb24oKTtcbiAgICB9XG4gIH1cbn0iXX0=