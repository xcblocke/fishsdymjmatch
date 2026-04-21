
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_deadlockRestart/Scripts/DeadlockRestartTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '508aeDtDExEhKQkfdeiOEpP', 'DeadlockRestartTrait');
// subpackages/l_deadlockRestart/Scripts/DeadlockRestartTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var DeadlockRestartTrait = /** @class */ (function (_super) {
    __extends(DeadlockRestartTrait, _super);
    function DeadlockRestartTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DeadlockRestartTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    DeadlockRestartTrait.prototype.onIptTile2InitVw_pushEff = function (t, e) {
        var r, o = null === (r = t.ins) || void 0 === r ? void 0 : r.gameContext;
        if (o) {
            if (o.tile2ResultChecker.checkIsDead()) {
                o.tile2SlotBarModifier.returnSlotBarToBoard();
                e();
            }
            else
                e();
        }
        else
            e();
    };
    DeadlockRestartTrait.prototype.onIptInitView_pushEff = function (t, e) {
        var r, o = null === (r = t.ins) || void 0 === r ? void 0 : r.gameContext;
        if (o) {
            if (o.gameType !== GameTypeEnums_1.MjGameType.Classic) {
                var i = o.getTileMapObject();
                if (i.checkIsDead([])) {
                    o.shuffleModifier.shuffle();
                    i.updateCanMatchTiles();
                    o.gameModifier.modifyShuffle();
                    e();
                }
                else
                    e();
            }
            else
                e();
        }
        else
            e();
    };
    DeadlockRestartTrait.traitKey = "DeadlockRestart";
    DeadlockRestartTrait = __decorate([
        mj.trait,
        mj.class("DeadlockRestartTrait")
    ], DeadlockRestartTrait);
    return DeadlockRestartTrait;
}(Trait_1.default));
exports.default = DeadlockRestartTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2RlYWRsb2NrUmVzdGFydC9TY3JpcHRzL0RlYWRsb2NrUmVzdGFydFRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3RkFBb0Y7QUFDcEYsZ0VBQTJEO0FBRzNEO0lBQWtELHdDQUFLO0lBQXZEOztJQThCQSxDQUFDO0lBNUJDLHFDQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDRCx1REFBd0IsR0FBeEIsVUFBeUIsQ0FBQyxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLEVBQ0gsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQztRQUNwRSxJQUFJLENBQUMsRUFBRTtZQUNMLElBQUksQ0FBQyxDQUFDLGtCQUFrQixDQUFDLFdBQVcsRUFBRSxFQUFFO2dCQUN0QyxDQUFDLENBQUMsb0JBQW9CLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztnQkFDOUMsQ0FBQyxFQUFFLENBQUM7YUFDTDs7Z0JBQU0sQ0FBQyxFQUFFLENBQUM7U0FDWjs7WUFBTSxDQUFDLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFDRCxvREFBcUIsR0FBckIsVUFBc0IsQ0FBQyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLEVBQ0gsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQztRQUNwRSxJQUFJLENBQUMsRUFBRTtZQUNMLElBQUksQ0FBQyxDQUFDLFFBQVEsS0FBSywwQkFBVSxDQUFDLE9BQU8sRUFBRTtnQkFDckMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGdCQUFnQixFQUFFLENBQUM7Z0JBQzdCLElBQUksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsRUFBRTtvQkFDckIsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztvQkFDNUIsQ0FBQyxDQUFDLG1CQUFtQixFQUFFLENBQUM7b0JBQ3hCLENBQUMsQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLENBQUM7b0JBQy9CLENBQUMsRUFBRSxDQUFDO2lCQUNMOztvQkFBTSxDQUFDLEVBQUUsQ0FBQzthQUNaOztnQkFBTSxDQUFDLEVBQUUsQ0FBQztTQUNaOztZQUFNLENBQUMsRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQTVCTSw2QkFBUSxHQUFHLGlCQUFpQixDQUFDO0lBRGpCLG9CQUFvQjtRQUZ4QyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsc0JBQXNCLENBQUM7T0FDWixvQkFBb0IsQ0E4QnhDO0lBQUQsMkJBQUM7Q0E5QkQsQUE4QkMsQ0E5QmlELGVBQUssR0E4QnREO2tCQTlCb0Isb0JBQW9CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWpHYW1lVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9zaW11bGF0b3IvY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG5pbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJEZWFkbG9ja1Jlc3RhcnRUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVhZGxvY2tSZXN0YXJ0VHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiRGVhZGxvY2tSZXN0YXJ0XCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgfVxuICBvbklwdFRpbGUySW5pdFZ3X3B1c2hFZmYodCwgZSkge1xuICAgIHZhciByLFxuICAgICAgbyA9IG51bGwgPT09IChyID0gdC5pbnMpIHx8IHZvaWQgMCA9PT0gciA/IHZvaWQgMCA6IHIuZ2FtZUNvbnRleHQ7XG4gICAgaWYgKG8pIHtcbiAgICAgIGlmIChvLnRpbGUyUmVzdWx0Q2hlY2tlci5jaGVja0lzRGVhZCgpKSB7XG4gICAgICAgIG8udGlsZTJTbG90QmFyTW9kaWZpZXIucmV0dXJuU2xvdEJhclRvQm9hcmQoKTtcbiAgICAgICAgZSgpO1xuICAgICAgfSBlbHNlIGUoKTtcbiAgICB9IGVsc2UgZSgpO1xuICB9XG4gIG9uSXB0SW5pdFZpZXdfcHVzaEVmZih0LCBlKSB7XG4gICAgdmFyIHIsXG4gICAgICBvID0gbnVsbCA9PT0gKHIgPSB0LmlucykgfHwgdm9pZCAwID09PSByID8gdm9pZCAwIDogci5nYW1lQ29udGV4dDtcbiAgICBpZiAobykge1xuICAgICAgaWYgKG8uZ2FtZVR5cGUgIT09IE1qR2FtZVR5cGUuQ2xhc3NpYykge1xuICAgICAgICB2YXIgaSA9IG8uZ2V0VGlsZU1hcE9iamVjdCgpO1xuICAgICAgICBpZiAoaS5jaGVja0lzRGVhZChbXSkpIHtcbiAgICAgICAgICBvLnNodWZmbGVNb2RpZmllci5zaHVmZmxlKCk7XG4gICAgICAgICAgaS51cGRhdGVDYW5NYXRjaFRpbGVzKCk7XG4gICAgICAgICAgby5nYW1lTW9kaWZpZXIubW9kaWZ5U2h1ZmZsZSgpO1xuICAgICAgICAgIGUoKTtcbiAgICAgICAgfSBlbHNlIGUoKTtcbiAgICAgIH0gZWxzZSBlKCk7XG4gICAgfSBlbHNlIGUoKTtcbiAgfVxufSJdfQ==