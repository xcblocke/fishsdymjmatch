
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/InputTile2TouchEnd.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7e9ddTWYaNF6LYJx7po/M7k', 'InputTile2TouchEnd');
// Scripts/InputTile2TouchEnd.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BehaviorsEnum_1 = require("./constant/BehaviorsEnum");
var Tile2ResetMoveEffect_1 = require("./Tile2ResetMoveEffect");
var Tile2RollCardEffect_1 = require("./Tile2RollCardEffect");
var InputTile2BaseTouchEnd_1 = require("./inputbase/InputTile2BaseTouchEnd");
var ClearHelper_1 = require("./ClearHelper");
var InputTile2TouchEnd = /** @class */ (function (_super) {
    __extends(InputTile2TouchEnd, _super);
    function InputTile2TouchEnd() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputTile2TouchEnd.prototype.runClear = function (t) {
        _super.prototype.runClear.call(this, t);
        ClearHelper_1.default.runClear(this.gameContext, this.input, this, {
            tileIds: t
        });
    };
    InputTile2TouchEnd.prototype.runRollCard = function (t) {
        var o, n;
        _super.prototype.runRollCard.call(this, t);
        var i = this.pushNewRootEffect(this.input, "Tile2RollCardEffect");
        try {
            for (var r = __values(t), s = r.next(); !s.done; s = r.next()) {
                var u = s.value, p = new Tile2RollCardEffect_1.Tile2RollCardEffect({
                    tileId: u.tileId,
                    frontToBack: u.frontToBack
                });
                this.pushEffect(p, BehaviorsEnum_1.EInsertType.Parallel, i.newEffectId, false);
            }
        }
        catch (e) {
            o = {
                error: e
            };
        }
        finally {
            try {
                s && !s.done && (n = r.return) && n.call(r);
            }
            finally {
                if (o)
                    throw o.error;
            }
        }
    };
    InputTile2TouchEnd.prototype.runResetMove = function () {
        _super.prototype.runResetMove.call(this);
        var t = this.gameContext.tile2TouchData.tileId;
        if (this.gameContext.getTileMapObject().getTileObject(t)) {
            var o = new Tile2ResetMoveEffect_1.Tile2ResetMoveEffect({
                tileId: t
            });
            this.pushEffect(o, BehaviorsEnum_1.EInsertType.Root);
        }
    };
    InputTile2TouchEnd.prototype.runLock = function (t) {
        _super.prototype.runLock.call(this, t);
        this.gameContext.inputTile2TouchRunLock.runLock(t, this);
    };
    __decorate([
        mj.traitEvent("Tile2IptTchEnd_runClr")
    ], InputTile2TouchEnd.prototype, "runClear", null);
    return InputTile2TouchEnd;
}(InputTile2BaseTouchEnd_1.default));
exports.default = InputTile2TouchEnd;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0lucHV0VGlsZTJUb3VjaEVuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMERBQXVEO0FBQ3ZELCtEQUE4RDtBQUM5RCw2REFBNEQ7QUFDNUQsNkVBQXdFO0FBQ3hFLDZDQUF3QztBQUN4QztJQUFnRCxzQ0FBc0I7SUFBdEU7O0lBK0NBLENBQUM7SUE3Q0MscUNBQVEsR0FBUixVQUFTLENBQUM7UUFDUixpQkFBTSxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM3QixxQkFBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFO1lBQ3ZELE9BQU8sRUFBRSxDQUFDO1NBQ1gsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELHdDQUFXLEdBQVgsVUFBWSxDQUFDO1FBQ1gsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ1QsaUJBQU0sV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUscUJBQXFCLENBQUMsQ0FBQztRQUNsRSxJQUFJO1lBQ0YsS0FBSyxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDN0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFDYixDQUFDLEdBQUcsSUFBSSx5Q0FBbUIsQ0FBQztvQkFDMUIsTUFBTSxFQUFFLENBQUMsQ0FBQyxNQUFNO29CQUNoQixXQUFXLEVBQUUsQ0FBQyxDQUFDLFdBQVc7aUJBQzNCLENBQUMsQ0FBQztnQkFDTCxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSwyQkFBVyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQ2hFO1NBQ0Y7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLENBQUMsR0FBRztnQkFDRixLQUFLLEVBQUUsQ0FBQzthQUNULENBQUM7U0FDSDtnQkFBUztZQUNSLElBQUk7Z0JBQ0YsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUM3QztvQkFBUztnQkFDUixJQUFJLENBQUM7b0JBQUUsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDO2FBQ3RCO1NBQ0Y7SUFDSCxDQUFDO0lBQ0QseUNBQVksR0FBWjtRQUNFLGlCQUFNLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDO1FBQy9DLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUN4RCxJQUFJLENBQUMsR0FBRyxJQUFJLDJDQUFvQixDQUFDO2dCQUMvQixNQUFNLEVBQUUsQ0FBQzthQUNWLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLDJCQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdEM7SUFDSCxDQUFDO0lBQ0Qsb0NBQU8sR0FBUCxVQUFRLENBQUM7UUFDUCxpQkFBTSxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsV0FBVyxDQUFDLHNCQUFzQixDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQTVDRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsdUJBQXVCLENBQUM7c0RBTXRDO0lBd0NILHlCQUFDO0NBL0NELEFBK0NDLENBL0MrQyxnQ0FBc0IsR0ErQ3JFO2tCQS9Db0Isa0JBQWtCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRUluc2VydFR5cGUgfSBmcm9tICcuL2NvbnN0YW50L0JlaGF2aW9yc0VudW0nO1xuaW1wb3J0IHsgVGlsZTJSZXNldE1vdmVFZmZlY3QgfSBmcm9tICcuL1RpbGUyUmVzZXRNb3ZlRWZmZWN0JztcbmltcG9ydCB7IFRpbGUyUm9sbENhcmRFZmZlY3QgfSBmcm9tICcuL1RpbGUyUm9sbENhcmRFZmZlY3QnO1xuaW1wb3J0IElucHV0VGlsZTJCYXNlVG91Y2hFbmQgZnJvbSAnLi9pbnB1dGJhc2UvSW5wdXRUaWxlMkJhc2VUb3VjaEVuZCc7XG5pbXBvcnQgQ2xlYXJIZWxwZXIgZnJvbSAnLi9DbGVhckhlbHBlcic7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dFRpbGUyVG91Y2hFbmQgZXh0ZW5kcyBJbnB1dFRpbGUyQmFzZVRvdWNoRW5kIHtcbiAgQG1qLnRyYWl0RXZlbnQoXCJUaWxlMklwdFRjaEVuZF9ydW5DbHJcIilcbiAgcnVuQ2xlYXIodCkge1xuICAgIHN1cGVyLnJ1bkNsZWFyLmNhbGwodGhpcywgdCk7XG4gICAgQ2xlYXJIZWxwZXIucnVuQ2xlYXIodGhpcy5nYW1lQ29udGV4dCwgdGhpcy5pbnB1dCwgdGhpcywge1xuICAgICAgdGlsZUlkczogdFxuICAgIH0pO1xuICB9XG4gIHJ1blJvbGxDYXJkKHQpIHtcbiAgICB2YXIgbywgbjtcbiAgICBzdXBlci5ydW5Sb2xsQ2FyZC5jYWxsKHRoaXMsIHQpO1xuICAgIHZhciBpID0gdGhpcy5wdXNoTmV3Um9vdEVmZmVjdCh0aGlzLmlucHV0LCBcIlRpbGUyUm9sbENhcmRFZmZlY3RcIik7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIHIgPSBfX3ZhbHVlcyh0KSwgcyA9IHIubmV4dCgpOyAhcy5kb25lOyBzID0gci5uZXh0KCkpIHtcbiAgICAgICAgdmFyIHUgPSBzLnZhbHVlLFxuICAgICAgICAgIHAgPSBuZXcgVGlsZTJSb2xsQ2FyZEVmZmVjdCh7XG4gICAgICAgICAgICB0aWxlSWQ6IHUudGlsZUlkLFxuICAgICAgICAgICAgZnJvbnRUb0JhY2s6IHUuZnJvbnRUb0JhY2tcbiAgICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5wdXNoRWZmZWN0KHAsIEVJbnNlcnRUeXBlLlBhcmFsbGVsLCBpLm5ld0VmZmVjdElkLCBmYWxzZSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgbyA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHMgJiYgIXMuZG9uZSAmJiAobiA9IHIucmV0dXJuKSAmJiBuLmNhbGwocik7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAobykgdGhyb3cgby5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcnVuUmVzZXRNb3ZlKCkge1xuICAgIHN1cGVyLnJ1blJlc2V0TW92ZS5jYWxsKHRoaXMpO1xuICAgIHZhciB0ID0gdGhpcy5nYW1lQ29udGV4dC50aWxlMlRvdWNoRGF0YS50aWxlSWQ7XG4gICAgaWYgKHRoaXMuZ2FtZUNvbnRleHQuZ2V0VGlsZU1hcE9iamVjdCgpLmdldFRpbGVPYmplY3QodCkpIHtcbiAgICAgIHZhciBvID0gbmV3IFRpbGUyUmVzZXRNb3ZlRWZmZWN0KHtcbiAgICAgICAgdGlsZUlkOiB0XG4gICAgICB9KTtcbiAgICAgIHRoaXMucHVzaEVmZmVjdChvLCBFSW5zZXJ0VHlwZS5Sb290KTtcbiAgICB9XG4gIH1cbiAgcnVuTG9jayh0KSB7XG4gICAgc3VwZXIucnVuTG9jay5jYWxsKHRoaXMsIHQpO1xuICAgIHRoaXMuZ2FtZUNvbnRleHQuaW5wdXRUaWxlMlRvdWNoUnVuTG9jay5ydW5Mb2NrKHQsIHRoaXMpO1xuICB9XG59Il19