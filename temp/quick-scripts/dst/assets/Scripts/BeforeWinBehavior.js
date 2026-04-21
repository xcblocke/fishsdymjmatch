
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/BeforeWinBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f86ednJ9mpN3bcyzWAu3EaU', 'BeforeWinBehavior');
// Scripts/BeforeWinBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.BeforeWinBehavior = void 0;
var GameInputEnum_1 = require("./simulator/constant/GameInputEnum");
var GameBehaviorsBase_1 = require("./base/GameBehaviorsBase");
var BeforeWinBehavior = /** @class */ (function (_super) {
    __extends(BeforeWinBehavior, _super);
    function BeforeWinBehavior() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._timeout = 0;
        return _this;
    }
    BeforeWinBehavior.prototype.start = function (e) {
        var t = this, o = this.context.applauseAudioId;
        if (o) {
            if (-1 !== o) {
                mj.audioManager.stopEffect(o);
            }
            else {
                mj.audioManager.stopAllEffect();
            }
            this.context.applauseAudioId = null;
            mj.audioManager.resumeBGM();
        }
        this.doOtherLogic(function () {
            t.finish(GameInputEnum_1.EBehaviorEnum.Success);
        }, e.data);
    };
    BeforeWinBehavior.prototype.doOtherLogic = function (e) {
        e();
    };
    __decorate([
        mj.traitEvent("BeforeWinBhv_start")
    ], BeforeWinBehavior.prototype, "start", null);
    __decorate([
        mj.traitEvent("BeforeWinBhv_doOthLgc")
    ], BeforeWinBehavior.prototype, "doOtherLogic", null);
    return BeforeWinBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.BeforeWinBehavior = BeforeWinBehavior;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0JlZm9yZVdpbkJlaGF2aW9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0VBQW1FO0FBQ25FLDhEQUE2RDtBQUM3RDtJQUF1QyxxQ0FBaUI7SUFBeEQ7UUFBQSxxRUF1QkM7UUF0QkMsY0FBUSxHQUFHLENBQUMsQ0FBQzs7SUFzQmYsQ0FBQztJQXBCQyxpQ0FBSyxHQUFMLFVBQU0sQ0FBQztRQUNMLElBQUksQ0FBQyxHQUFHLElBQUksRUFDVixDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUM7UUFDbkMsSUFBSSxDQUFDLEVBQUU7WUFDTCxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDWixFQUFFLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUMvQjtpQkFBTTtnQkFDTCxFQUFFLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxDQUFDO2FBQ2pDO1lBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1lBQ3BDLEVBQUUsQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDN0I7UUFDRCxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2hCLENBQUMsQ0FBQyxNQUFNLENBQUMsNkJBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNsQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2IsQ0FBQztJQUVELHdDQUFZLEdBQVosVUFBYSxDQUFDO1FBQ1osQ0FBQyxFQUFFLENBQUM7SUFDTixDQUFDO0lBbkJEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQztrREFnQm5DO0lBRUQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHVCQUF1QixDQUFDO3lEQUd0QztJQUNILHdCQUFDO0NBdkJELEFBdUJDLENBdkJzQyxxQ0FBaUIsR0F1QnZEO0FBdkJZLDhDQUFpQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVCZWhhdmlvckVudW0gfSBmcm9tICcuL3NpbXVsYXRvci9jb25zdGFudC9HYW1lSW5wdXRFbnVtJztcbmltcG9ydCB7IEdhbWVCZWhhdmlvcnNCYXNlIH0gZnJvbSAnLi9iYXNlL0dhbWVCZWhhdmlvcnNCYXNlJztcbmV4cG9ydCBjbGFzcyBCZWZvcmVXaW5CZWhhdmlvciBleHRlbmRzIEdhbWVCZWhhdmlvcnNCYXNlIHtcbiAgX3RpbWVvdXQgPSAwO1xuICBAbWoudHJhaXRFdmVudChcIkJlZm9yZVdpbkJodl9zdGFydFwiKVxuICBzdGFydChlKSB7XG4gICAgdmFyIHQgPSB0aGlzLFxuICAgICAgbyA9IHRoaXMuY29udGV4dC5hcHBsYXVzZUF1ZGlvSWQ7XG4gICAgaWYgKG8pIHtcbiAgICAgIGlmICgtMSAhPT0gbykge1xuICAgICAgICBtai5hdWRpb01hbmFnZXIuc3RvcEVmZmVjdChvKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1qLmF1ZGlvTWFuYWdlci5zdG9wQWxsRWZmZWN0KCk7XG4gICAgICB9XG4gICAgICB0aGlzLmNvbnRleHQuYXBwbGF1c2VBdWRpb0lkID0gbnVsbDtcbiAgICAgIG1qLmF1ZGlvTWFuYWdlci5yZXN1bWVCR00oKTtcbiAgICB9XG4gICAgdGhpcy5kb090aGVyTG9naWMoZnVuY3Rpb24gKCkge1xuICAgICAgdC5maW5pc2goRUJlaGF2aW9yRW51bS5TdWNjZXNzKTtcbiAgICB9LCBlLmRhdGEpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiQmVmb3JlV2luQmh2X2RvT3RoTGdjXCIpXG4gIGRvT3RoZXJMb2dpYyhlKSB7XG4gICAgZSgpO1xuICB9XG59Il19