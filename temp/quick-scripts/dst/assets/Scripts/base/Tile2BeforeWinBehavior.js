
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/base/Tile2BeforeWinBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c4c78LGY8BMsauZDSJiSLel', 'Tile2BeforeWinBehavior');
// Scripts/base/Tile2BeforeWinBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2BeforeWinBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var Tile2BeforeWinBehavior = /** @class */ (function (_super) {
    __extends(Tile2BeforeWinBehavior, _super);
    function Tile2BeforeWinBehavior() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._timeout = 0;
        return _this;
    }
    Tile2BeforeWinBehavior.prototype.start = function () {
        var e = this, t = this.context.applauseAudioId;
        if (t) {
            if (-1 !== t) {
                mj.audioManager.stopEffect(t);
            }
            else {
                mj.audioManager.stopAllEffect();
            }
            this.context.applauseAudioId = null;
            mj.audioManager.resumeBGM();
        }
        this.context.hasAutoMergeTimers() && this.context.clearAutoMergeTimers();
        this.context.gameView.setSwallowEventNodeActive(false);
        this._context.gameView.unregisterScreenTouchEnd();
        this.doOtherLogic(function () {
            e.finish(GameInputEnum_1.EBehaviorEnum.Success);
        });
    };
    Tile2BeforeWinBehavior.prototype.doOtherLogic = function (e) {
        e();
    };
    __decorate([
        mj.traitEvent("Tile2BfWinBhv_start")
    ], Tile2BeforeWinBehavior.prototype, "start", null);
    __decorate([
        mj.traitEvent("Tile2BfWinBhv_doOthLgc")
    ], Tile2BeforeWinBehavior.prototype, "doOtherLogic", null);
    return Tile2BeforeWinBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.Tile2BeforeWinBehavior = Tile2BeforeWinBehavior;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2Jhc2UvVGlsZTJCZWZvcmVXaW5CZWhhdmlvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFFQUFvRTtBQUNwRSx5REFBd0Q7QUFDeEQ7SUFBNEMsMENBQWlCO0lBQTdEO1FBQUEscUVBMEJDO1FBekJDLGNBQVEsR0FBRyxDQUFDLENBQUM7O0lBeUJmLENBQUM7SUF2QkMsc0NBQUssR0FBTDtRQUNFLElBQUksQ0FBQyxHQUFHLElBQUksRUFDVixDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUM7UUFDbkMsSUFBSSxDQUFDLEVBQUU7WUFDTCxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDWixFQUFFLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUMvQjtpQkFBTTtnQkFDTCxFQUFFLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxDQUFDO2FBQ2pDO1lBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1lBQ3BDLEVBQUUsQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDN0I7UUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLGtCQUFrQixFQUFFLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBQ3pFLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLHlCQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLHdCQUF3QixFQUFFLENBQUM7UUFDbEQsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNoQixDQUFDLENBQUMsTUFBTSxDQUFDLDZCQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbEMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsNkNBQVksR0FBWixVQUFhLENBQUM7UUFDWixDQUFDLEVBQUUsQ0FBQztJQUNOLENBQUM7SUF0QkQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDO3VEQW1CcEM7SUFFRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsd0JBQXdCLENBQUM7OERBR3ZDO0lBQ0gsNkJBQUM7Q0ExQkQsQUEwQkMsQ0ExQjJDLHFDQUFpQixHQTBCNUQ7QUExQlksd0RBQXNCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRUJlaGF2aW9yRW51bSB9IGZyb20gJy4uL3NpbXVsYXRvci9jb25zdGFudC9HYW1lSW5wdXRFbnVtJztcbmltcG9ydCB7IEdhbWVCZWhhdmlvcnNCYXNlIH0gZnJvbSAnLi9HYW1lQmVoYXZpb3JzQmFzZSc7XG5leHBvcnQgY2xhc3MgVGlsZTJCZWZvcmVXaW5CZWhhdmlvciBleHRlbmRzIEdhbWVCZWhhdmlvcnNCYXNlIHtcbiAgX3RpbWVvdXQgPSAwO1xuICBAbWoudHJhaXRFdmVudChcIlRpbGUyQmZXaW5CaHZfc3RhcnRcIilcbiAgc3RhcnQoKSB7XG4gICAgdmFyIGUgPSB0aGlzLFxuICAgICAgdCA9IHRoaXMuY29udGV4dC5hcHBsYXVzZUF1ZGlvSWQ7XG4gICAgaWYgKHQpIHtcbiAgICAgIGlmICgtMSAhPT0gdCkge1xuICAgICAgICBtai5hdWRpb01hbmFnZXIuc3RvcEVmZmVjdCh0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1qLmF1ZGlvTWFuYWdlci5zdG9wQWxsRWZmZWN0KCk7XG4gICAgICB9XG4gICAgICB0aGlzLmNvbnRleHQuYXBwbGF1c2VBdWRpb0lkID0gbnVsbDtcbiAgICAgIG1qLmF1ZGlvTWFuYWdlci5yZXN1bWVCR00oKTtcbiAgICB9XG4gICAgdGhpcy5jb250ZXh0Lmhhc0F1dG9NZXJnZVRpbWVycygpICYmIHRoaXMuY29udGV4dC5jbGVhckF1dG9NZXJnZVRpbWVycygpO1xuICAgIHRoaXMuY29udGV4dC5nYW1lVmlldy5zZXRTd2FsbG93RXZlbnROb2RlQWN0aXZlKGZhbHNlKTtcbiAgICB0aGlzLl9jb250ZXh0LmdhbWVWaWV3LnVucmVnaXN0ZXJTY3JlZW5Ub3VjaEVuZCgpO1xuICAgIHRoaXMuZG9PdGhlckxvZ2ljKGZ1bmN0aW9uICgpIHtcbiAgICAgIGUuZmluaXNoKEVCZWhhdmlvckVudW0uU3VjY2Vzcyk7XG4gICAgfSk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJUaWxlMkJmV2luQmh2X2RvT3RoTGdjXCIpXG4gIGRvT3RoZXJMb2dpYyhlKSB7XG4gICAgZSgpO1xuICB9XG59Il19