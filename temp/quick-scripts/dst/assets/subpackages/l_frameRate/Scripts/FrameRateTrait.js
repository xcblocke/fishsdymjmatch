
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_frameRate/Scripts/FrameRateTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e5c01z4PW1DZoW3QzUFkjdQ', 'FrameRateTrait');
// subpackages/l_frameRate/Scripts/FrameRateTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameEvent_1 = require("../../../Scripts/simulator/constant/GameEvent");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var FrameRateTrait = /** @class */ (function (_super) {
    __extends(FrameRateTrait, _super);
    function FrameRateTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._targetFrameRate = 60;
        return _this;
    }
    FrameRateTrait.prototype.onLoad = function () {
        var e, r;
        _super.prototype.onLoad.call(this);
        this._targetFrameRate = null !== (r = null === (e = this._traitData) || void 0 === e ? void 0 : e.frameRate) && void 0 !== r ? r : 60;
        cc.game.setFrameRate(this._targetFrameRate);
    };
    FrameRateTrait.prototype.getMessageListeners = function () {
        var _t = {};
        _t[GameEvent_1.EGameEvent.Behavior_ShuffleBehaviorFinish] = this.onShuffleFinish.bind(this);
        return _t;
    };
    FrameRateTrait.prototype.boostFrameRate = function () {
        this._targetFrameRate < 60 && cc.game.setFrameRate(60);
    };
    FrameRateTrait.prototype.restoreFrameRate = function () {
        this._targetFrameRate < 60 && cc.game.setFrameRate(this._targetFrameRate);
    };
    FrameRateTrait.prototype.onEnterAniBhv_startPlay = function (t, e) {
        this.boostFrameRate("入场动画开始");
        e();
    };
    FrameRateTrait.prototype.onEntAniFiBhv_start = function (t, e) {
        this.restoreFrameRate("入场动画结束");
        e();
    };
    FrameRateTrait.prototype.onIptShuffle_exec = function (t, e) {
        this.boostFrameRate("洗牌动画开始");
        e();
    };
    FrameRateTrait.prototype.onShuffleFinish = function () {
        this.restoreFrameRate("洗牌动画结束");
    };
    FrameRateTrait.traitKey = "FrameRate";
    FrameRateTrait = __decorate([
        mj.trait,
        mj.class("FrameRateTrait")
    ], FrameRateTrait);
    return FrameRateTrait;
}(Trait_1.default));
exports.default = FrameRateTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2ZyYW1lUmF0ZS9TY3JpcHRzL0ZyYW1lUmF0ZVRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyRUFBMkU7QUFDM0UsZ0VBQTJEO0FBRzNEO0lBQTRDLGtDQUFLO0lBQWpEO1FBQUEscUVBbUNDO1FBbENDLHNCQUFnQixHQUFHLEVBQUUsQ0FBQzs7SUFrQ3hCLENBQUM7SUFoQ0MsK0JBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNULGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ3RJLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFDRCw0Q0FBbUIsR0FBbkI7UUFDRSxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDWixFQUFFLENBQUMsc0JBQVUsQ0FBQyw4QkFBOEIsQ0FBQyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hGLE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUNELHVDQUFjLEdBQWQ7UUFDRSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFDRCx5Q0FBZ0IsR0FBaEI7UUFDRSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFDRCxnREFBdUIsR0FBdkIsVUFBd0IsQ0FBQyxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM5QixDQUFDLEVBQUUsQ0FBQztJQUNOLENBQUM7SUFDRCw0Q0FBbUIsR0FBbkIsVUFBb0IsQ0FBQyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsRUFBRSxDQUFDO0lBQ04sQ0FBQztJQUNELDBDQUFpQixHQUFqQixVQUFrQixDQUFDLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzlCLENBQUMsRUFBRSxDQUFDO0lBQ04sQ0FBQztJQUNELHdDQUFlLEdBQWY7UUFDRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQWhDTSx1QkFBUSxHQUFHLFdBQVcsQ0FBQztJQUZYLGNBQWM7UUFGbEMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDO09BQ04sY0FBYyxDQW1DbEM7SUFBRCxxQkFBQztDQW5DRCxBQW1DQyxDQW5DMkMsZUFBSyxHQW1DaEQ7a0JBbkNvQixjQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRUdhbWVFdmVudCB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVFdmVudCc7XG5pbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJGcmFtZVJhdGVUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnJhbWVSYXRlVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIF90YXJnZXRGcmFtZVJhdGUgPSA2MDtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJGcmFtZVJhdGVcIjtcbiAgb25Mb2FkKCkge1xuICAgIHZhciBlLCByO1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuX3RhcmdldEZyYW1lUmF0ZSA9IG51bGwgIT09IChyID0gbnVsbCA9PT0gKGUgPSB0aGlzLl90cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUuZnJhbWVSYXRlKSAmJiB2b2lkIDAgIT09IHIgPyByIDogNjA7XG4gICAgY2MuZ2FtZS5zZXRGcmFtZVJhdGUodGhpcy5fdGFyZ2V0RnJhbWVSYXRlKTtcbiAgfVxuICBnZXRNZXNzYWdlTGlzdGVuZXJzKCkge1xuICAgIHZhciBfdCA9IHt9O1xuICAgIF90W0VHYW1lRXZlbnQuQmVoYXZpb3JfU2h1ZmZsZUJlaGF2aW9yRmluaXNoXSA9IHRoaXMub25TaHVmZmxlRmluaXNoLmJpbmQodGhpcyk7XG4gICAgcmV0dXJuIF90O1xuICB9XG4gIGJvb3N0RnJhbWVSYXRlKCkge1xuICAgIHRoaXMuX3RhcmdldEZyYW1lUmF0ZSA8IDYwICYmIGNjLmdhbWUuc2V0RnJhbWVSYXRlKDYwKTtcbiAgfVxuICByZXN0b3JlRnJhbWVSYXRlKCkge1xuICAgIHRoaXMuX3RhcmdldEZyYW1lUmF0ZSA8IDYwICYmIGNjLmdhbWUuc2V0RnJhbWVSYXRlKHRoaXMuX3RhcmdldEZyYW1lUmF0ZSk7XG4gIH1cbiAgb25FbnRlckFuaUJodl9zdGFydFBsYXkodCwgZSkge1xuICAgIHRoaXMuYm9vc3RGcmFtZVJhdGUoXCLlhaXlnLrliqjnlLvlvIDlp4tcIik7XG4gICAgZSgpO1xuICB9XG4gIG9uRW50QW5pRmlCaHZfc3RhcnQodCwgZSkge1xuICAgIHRoaXMucmVzdG9yZUZyYW1lUmF0ZShcIuWFpeWcuuWKqOeUu+e7k+adn1wiKTtcbiAgICBlKCk7XG4gIH1cbiAgb25JcHRTaHVmZmxlX2V4ZWModCwgZSkge1xuICAgIHRoaXMuYm9vc3RGcmFtZVJhdGUoXCLmtJfniYzliqjnlLvlvIDlp4tcIik7XG4gICAgZSgpO1xuICB9XG4gIG9uU2h1ZmZsZUZpbmlzaCgpIHtcbiAgICB0aGlzLnJlc3RvcmVGcmFtZVJhdGUoXCLmtJfniYzliqjnlLvnu5PmnZ9cIik7XG4gIH1cbn0iXX0=