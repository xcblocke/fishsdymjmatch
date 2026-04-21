
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_moveStepEnd/Scripts/MoveStepEndTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6d3e329gwROxY9E/xNcv744', 'MoveStepEndTrait');
// subpackages/l_moveStepEnd/Scripts/MoveStepEndTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var DGameMoveStep_1 = require("../../../Scripts/gamePlay/dot/DGameMoveStep");
var MoveStepEndTrait = /** @class */ (function (_super) {
    __extends(MoveStepEndTrait, _super);
    function MoveStepEndTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MoveStepEndTrait.prototype.onDGameLog_dot = function (t, e) {
        this.dotGameMoveStep(t.args[0]);
        e();
    };
    MoveStepEndTrait.prototype.onTrackerUtils_dotGmStep = function (t, e) {
        e({
            returnType: TraitCallbackReturnType.return,
            isBreak: true
        });
    };
    MoveStepEndTrait.prototype.dotGameMoveStep = function (t) {
        var e, r, o = t.getGameTracker();
        if (o) {
            var n = o.stepAnalytics;
            Date.now();
            try {
                for (var i = __values(n), c = i.next(); !c.done; c = i.next()) {
                    var u = c.value;
                    DGameMoveStep_1.DotGameMoveStep.dot(t, u);
                }
            }
            catch (t) {
                e = {
                    error: t
                };
            }
            finally {
                try {
                    c && !c.done && (r = i.return) && r.call(i);
                }
                finally {
                    if (e)
                        throw e.error;
                }
            }
        }
    };
    MoveStepEndTrait.traitKey = "MoveStepEnd";
    MoveStepEndTrait = __decorate([
        mj.trait,
        mj.class("MoveStepEndTrait")
    ], MoveStepEndTrait);
    return MoveStepEndTrait;
}(Trait_1.default));
exports.default = MoveStepEndTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX21vdmVTdGVwRW5kL1NjcmlwdHMvTW92ZVN0ZXBFbmRUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELDZFQUE4RTtBQUc5RTtJQUE4QyxvQ0FBSztJQUFuRDs7SUFxQ0EsQ0FBQztJQW5DQyx5Q0FBYyxHQUFkLFVBQWUsQ0FBQyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxFQUFFLENBQUM7SUFDTixDQUFDO0lBQ0QsbURBQXdCLEdBQXhCLFVBQXlCLENBQUMsRUFBRSxDQUFDO1FBQzNCLENBQUMsQ0FBQztZQUNBLFVBQVUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO1lBQzFDLE9BQU8sRUFBRSxJQUFJO1NBQ2QsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELDBDQUFlLEdBQWYsVUFBZ0IsQ0FBQztRQUNmLElBQUksQ0FBQyxFQUNILENBQUMsRUFDRCxDQUFDLEdBQUcsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxFQUFFO1lBQ0wsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQztZQUN4QixJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDWCxJQUFJO2dCQUNGLEtBQUssSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7b0JBQzdELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7b0JBQ2hCLCtCQUFlLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztpQkFDM0I7YUFDRjtZQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNWLENBQUMsR0FBRztvQkFDRixLQUFLLEVBQUUsQ0FBQztpQkFDVCxDQUFDO2FBQ0g7b0JBQVM7Z0JBQ1IsSUFBSTtvQkFDRixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUM3Qzt3QkFBUztvQkFDUixJQUFJLENBQUM7d0JBQUUsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDO2lCQUN0QjthQUNGO1NBQ0Y7SUFDSCxDQUFDO0lBbkNNLHlCQUFRLEdBQUcsYUFBYSxDQUFDO0lBRGIsZ0JBQWdCO1FBRnBDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQztPQUNSLGdCQUFnQixDQXFDcEM7SUFBRCx1QkFBQztDQXJDRCxBQXFDQyxDQXJDNkMsZUFBSyxHQXFDbEQ7a0JBckNvQixnQkFBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IHsgRG90R2FtZU1vdmVTdGVwIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS9kb3QvREdhbWVNb3ZlU3RlcCc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIk1vdmVTdGVwRW5kVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vdmVTdGVwRW5kVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiTW92ZVN0ZXBFbmRcIjtcbiAgb25ER2FtZUxvZ19kb3QodCwgZSkge1xuICAgIHRoaXMuZG90R2FtZU1vdmVTdGVwKHQuYXJnc1swXSk7XG4gICAgZSgpO1xuICB9XG4gIG9uVHJhY2tlclV0aWxzX2RvdEdtU3RlcCh0LCBlKSB7XG4gICAgZSh7XG4gICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICBpc0JyZWFrOiB0cnVlXG4gICAgfSk7XG4gIH1cbiAgZG90R2FtZU1vdmVTdGVwKHQpIHtcbiAgICB2YXIgZSxcbiAgICAgIHIsXG4gICAgICBvID0gdC5nZXRHYW1lVHJhY2tlcigpO1xuICAgIGlmIChvKSB7XG4gICAgICB2YXIgbiA9IG8uc3RlcEFuYWx5dGljcztcbiAgICAgIERhdGUubm93KCk7XG4gICAgICB0cnkge1xuICAgICAgICBmb3IgKHZhciBpID0gX192YWx1ZXMobiksIGMgPSBpLm5leHQoKTsgIWMuZG9uZTsgYyA9IGkubmV4dCgpKSB7XG4gICAgICAgICAgdmFyIHUgPSBjLnZhbHVlO1xuICAgICAgICAgIERvdEdhbWVNb3ZlU3RlcC5kb3QodCwgdSk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgICAgZSA9IHtcbiAgICAgICAgICBlcnJvcjogdFxuICAgICAgICB9O1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjICYmICFjLmRvbmUgJiYgKHIgPSBpLnJldHVybikgJiYgci5jYWxsKGkpO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGlmIChlKSB0aHJvdyBlLmVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59Il19