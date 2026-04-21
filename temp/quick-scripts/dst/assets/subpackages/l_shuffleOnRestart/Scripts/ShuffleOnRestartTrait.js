
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_shuffleOnRestart/Scripts/ShuffleOnRestartTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd4e1aonjCxJ0ICg4FYd8oWC', 'ShuffleOnRestartTrait');
// subpackages/l_shuffleOnRestart/Scripts/ShuffleOnRestartTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var ShuffleOnRestartTrait = /** @class */ (function (_super) {
    __extends(ShuffleOnRestartTrait, _super);
    function ShuffleOnRestartTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.needAutoShuffle = false;
        _this.maxCount = 2;
        _this.minLevel = 2;
        return _this;
    }
    ShuffleOnRestartTrait_1 = ShuffleOnRestartTrait;
    ShuffleOnRestartTrait.prototype.onLoad = function () {
        var e, r, o, i;
        _super.prototype.onLoad.call(this);
        this.maxCount = null !== (r = null === (e = this._traitData) || void 0 === e ? void 0 : e.maxCount) && void 0 !== r ? r : 2;
        this.minLevel = null !== (i = null === (o = this._traitData) || void 0 === o ? void 0 : o.minLevel) && void 0 !== i ? i : 2;
        if (this.isLocalEmpty(this.localData.lvID)) {
            this.localData.lvID = 0;
            this.localData.count = 0;
        }
    };
    ShuffleOnRestartTrait.prototype.onIptRestart_excute = function (t, e) {
        try {
            var o = t.ins, i = null == o ? void 0 : o.gameContext;
            if (!i) {
                e();
                return;
            }
            if (i.gameType !== GameTypeEnums_1.MjGameType.Normal) {
                e();
                return;
            }
            var n = UserModel_1.default.getInstance().normalData.getLevelId();
            if (n < this.minLevel) {
                e();
                return;
            }
            if (this.localData.lvID !== n) {
                this.localData.lvID = n;
                this.localData.count = 0;
            }
            if (this.localData.count >= this.maxCount) {
                e();
                return;
            }
            this.localData.count++;
            this.needAutoShuffle = true;
        }
        catch (t) {
            console.error("[" + ShuffleOnRestartTrait_1.traitKey + "] 重玩处理异常: " + (t.message || t));
        }
        e();
    };
    ShuffleOnRestartTrait.prototype.onIptInitView_pushEff = function (t, e) {
        if (this.needAutoShuffle) {
            this.needAutoShuffle = false;
            var r = t.ins;
            if (r && r.gameContext) {
                var o = r.gameContext, i = o.getTileMapObject();
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
    };
    ShuffleOnRestartTrait.prototype.isLocalEmpty = function (t) {
        return null == t || "" === t;
    };
    var ShuffleOnRestartTrait_1;
    ShuffleOnRestartTrait.traitKey = "ShuffleOnRestart";
    ShuffleOnRestartTrait = ShuffleOnRestartTrait_1 = __decorate([
        mj.trait,
        mj.class("ShuffleOnRestartTrait")
    ], ShuffleOnRestartTrait);
    return ShuffleOnRestartTrait;
}(Trait_1.default));
exports.default = ShuffleOnRestartTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3NodWZmbGVPblJlc3RhcnQvU2NyaXB0cy9TaHVmZmxlT25SZXN0YXJ0VHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdGQUFvRjtBQUNwRixnRUFBMkQ7QUFDM0Qsc0VBQWlFO0FBR2pFO0lBQW1ELHlDQUFLO0lBQXhEO1FBQUEscUVBZ0VDO1FBL0RDLHFCQUFlLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLGNBQVEsR0FBRyxDQUFDLENBQUM7UUFDYixjQUFRLEdBQUcsQ0FBQyxDQUFDOztJQTZEZixDQUFDOzhCQWhFb0IscUJBQXFCO0lBS3hDLHNDQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNmLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1SCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFD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O1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQztPQUNiLHFCQUFxQixDQWdFekM7SUFBRCw0QkFBQztDQWhFRCxBQWdFQyxDQWhFa0QsZUFBSyxHQWdFdkQ7a0JBaEVvQixxQkFBcUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNakdhbWVUeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbmltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvdXNlci9Vc2VyTW9kZWwnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJTaHVmZmxlT25SZXN0YXJ0VHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNodWZmbGVPblJlc3RhcnRUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgbmVlZEF1dG9TaHVmZmxlID0gZmFsc2U7XG4gIG1heENvdW50ID0gMjtcbiAgbWluTGV2ZWwgPSAyO1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIlNodWZmbGVPblJlc3RhcnRcIjtcbiAgb25Mb2FkKCkge1xuICAgIHZhciBlLCByLCBvLCBpO1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMubWF4Q291bnQgPSBudWxsICE9PSAociA9IG51bGwgPT09IChlID0gdGhpcy5fdHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IGUgPyB2b2lkIDAgOiBlLm1heENvdW50KSAmJiB2b2lkIDAgIT09IHIgPyByIDogMjtcbiAgICB0aGlzLm1pbkxldmVsID0gbnVsbCAhPT0gKGkgPSBudWxsID09PSAobyA9IHRoaXMuX3RyYWl0RGF0YSkgfHwgdm9pZCAwID09PSBvID8gdm9pZCAwIDogby5taW5MZXZlbCkgJiYgdm9pZCAwICE9PSBpID8gaSA6IDI7XG4gICAgaWYgKHRoaXMuaXNMb2NhbEVtcHR5KHRoaXMubG9jYWxEYXRhLmx2SUQpKSB7XG4gICAgICB0aGlzLmxvY2FsRGF0YS5sdklEID0gMDtcbiAgICAgIHRoaXMubG9jYWxEYXRhLmNvdW50ID0gMDtcbiAgICB9XG4gIH1cbiAgb25JcHRSZXN0YXJ0X2V4Y3V0ZSh0LCBlKSB7XG4gICAgdHJ5IHtcbiAgICAgIHZhciBvID0gdC5pbnMsXG4gICAgICAgIGkgPSBudWxsID09IG8gPyB2b2lkIDAgOiBvLmdhbWVDb250ZXh0O1xuICAgICAgaWYgKCFpKSB7XG4gICAgICAgIGUoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGkuZ2FtZVR5cGUgIT09IE1qR2FtZVR5cGUuTm9ybWFsKSB7XG4gICAgICAgIGUoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIG4gPSBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5ub3JtYWxEYXRhLmdldExldmVsSWQoKTtcbiAgICAgIGlmIChuIDwgdGhpcy5taW5MZXZlbCkge1xuICAgICAgICBlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmxvY2FsRGF0YS5sdklEICE9PSBuKSB7XG4gICAgICAgIHRoaXMubG9jYWxEYXRhLmx2SUQgPSBuO1xuICAgICAgICB0aGlzLmxvY2FsRGF0YS5jb3VudCA9IDA7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5sb2NhbERhdGEuY291bnQgPj0gdGhpcy5tYXhDb3VudCkge1xuICAgICAgICBlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMubG9jYWxEYXRhLmNvdW50Kys7XG4gICAgICB0aGlzLm5lZWRBdXRvU2h1ZmZsZSA9IHRydWU7XG4gICAgfSBjYXRjaCAodCkge1xuICAgICAgY29uc29sZS5lcnJvcihcIltcIiArIFNodWZmbGVPblJlc3RhcnRUcmFpdC50cmFpdEtleSArIFwiXSDph43njqnlpITnkIblvILluLg6IFwiICsgKHQubWVzc2FnZSB8fCB0KSk7XG4gICAgfVxuICAgIGUoKTtcbiAgfVxuICBvbklwdEluaXRWaWV3X3B1c2hFZmYodCwgZSkge1xuICAgIGlmICh0aGlzLm5lZWRBdXRvU2h1ZmZsZSkge1xuICAgICAgdGhpcy5uZWVkQXV0b1NodWZmbGUgPSBmYWxzZTtcbiAgICAgIHZhciByID0gdC5pbnM7XG4gICAgICBpZiAociAmJiByLmdhbWVDb250ZXh0KSB7XG4gICAgICAgIHZhciBvID0gci5nYW1lQ29udGV4dCxcbiAgICAgICAgICBpID0gby5nZXRUaWxlTWFwT2JqZWN0KCk7XG4gICAgICAgIG8uc2h1ZmZsZU1vZGlmaWVyLnNodWZmbGUoKTtcbiAgICAgICAgaS51cGRhdGVDYW5NYXRjaFRpbGVzKCk7XG4gICAgICAgIG8uZ2FtZU1vZGlmaWVyLm1vZGlmeVNodWZmbGUoKTtcbiAgICAgICAgZSgpO1xuICAgICAgfSBlbHNlIGUoKTtcbiAgICB9IGVsc2UgZSgpO1xuICB9XG4gIGlzTG9jYWxFbXB0eSh0KSB7XG4gICAgcmV0dXJuIG51bGwgPT0gdCB8fCBcIlwiID09PSB0O1xuICB9XG59Il19