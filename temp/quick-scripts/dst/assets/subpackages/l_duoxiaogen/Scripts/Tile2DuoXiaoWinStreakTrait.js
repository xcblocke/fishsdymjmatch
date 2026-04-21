
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_duoxiaogen/Scripts/Tile2DuoXiaoWinStreakTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a9e21KuGcpMfrplfUJokuEd', 'Tile2DuoXiaoWinStreakTrait');
// subpackages/l_duoxiaogen/Scripts/Tile2DuoXiaoWinStreakTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var TileTypeEnum_1 = require("../../../Scripts/simulator/constant/TileTypeEnum");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var Tile2DuoXiaoWinStreakTrait = /** @class */ (function (_super) {
    __extends(Tile2DuoXiaoWinStreakTrait, _super);
    function Tile2DuoXiaoWinStreakTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._winStreak = 0;
        return _this;
    }
    Tile2DuoXiaoWinStreakTrait.prototype.getLevelLimit = function () {
        var t, e;
        return null !== (e = null === (t = this.traitData) || void 0 === t ? void 0 : t.levelLimit) && void 0 !== e ? e : 2;
    };
    Tile2DuoXiaoWinStreakTrait.prototype.getWinStreakLimit = function () {
        var t, e;
        return null !== (e = null === (t = this.traitData) || void 0 === t ? void 0 : t.winStreakLimit) && void 0 !== e ? e : 2;
    };
    Tile2DuoXiaoWinStreakTrait.prototype.getDuoXiaoCount = function () {
        var t, e;
        return null !== (e = null === (t = this.traitData) || void 0 === t ? void 0 : t.duoXiaoCount) && void 0 !== e ? e : 2;
    };
    Tile2DuoXiaoWinStreakTrait.prototype.getBombCntDefault = function () {
        var t, e;
        return null !== (e = null === (t = this.traitData) || void 0 === t ? void 0 : t.bombCntDefault) && void 0 !== e ? e : 2;
    };
    Tile2DuoXiaoWinStreakTrait.prototype.getBombCntAfterWin = function () {
        var t, e;
        return null !== (e = null === (t = this.traitData) || void 0 === t ? void 0 : t.bombCountAfterWin) && void 0 !== e ? e : 0;
    };
    Tile2DuoXiaoWinStreakTrait.prototype.setWinStreak = function (t) {
        this._winStreak = t;
    };
    Tile2DuoXiaoWinStreakTrait.prototype.getWinStreak = function () {
        return this._winStreak;
    };
    Tile2DuoXiaoWinStreakTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    Tile2DuoXiaoWinStreakTrait.prototype.enableTrait = function () {
        var t = UserModel_1.default.getInstance().getCurrentGameType();
        return this.isMatchGameType(t);
    };
    Tile2DuoXiaoWinStreakTrait.prototype.isMatchGameType = function (t) {
        return !(this.traitData.gameTypes && this.traitData.gameTypes.length > 0 && !this.traitData.gameTypes.includes(t));
    };
    Tile2DuoXiaoWinStreakTrait.prototype.onTile2FailBhv_start = function (t, e) {
        this.enableTrait() && this.setWinStreak(0);
        e();
    };
    Tile2DuoXiaoWinStreakTrait.prototype.onTile2WinBhv_start = function (t, e) {
        this.enableTrait() && this.setWinStreak(this.getWinStreak() + 1);
        e();
    };
    Tile2DuoXiaoWinStreakTrait.prototype.checkCanGen = function () {
        var t, e, r = this.getLevelLimit(), o = (null === (e = null === (t = UserModel_1.default.getInstance()) || void 0 === t ? void 0 : t.getCurrentGameData()) || void 0 === e ? void 0 : e.getLevelId()) || 0;
        return !(r > 0 && o <= r);
    };
    Tile2DuoXiaoWinStreakTrait.prototype.onT2DuoxiaoGenTt_genTypes = function (t, e) {
        var r = "";
        if (this.checkCanGen()) {
            if (this.getWinStreak() < this.getWinStreakLimit())
                r = "" + TileTypeEnum_1.ETileType.Bomb;
            else {
                var o = this.getDuoXiaoCount();
                o > 0 && (r = "" + TileTypeEnum_1.ETileType.DuoxiaoCard);
                this.getBombCntAfterWin() > 0 && (r = r + (o > 0 ? "," : "") + TileTypeEnum_1.ETileType.Bomb);
            }
        }
        e({
            returnVal: r,
            returnType: TraitCallbackReturnType.return,
            isBreak: true
        });
    };
    Tile2DuoXiaoWinStreakTrait.prototype.onDuoxiaoCt_genCountRange = function (t, e) {
        if (this.enableTrait()) {
            var r = this.getDuoXiaoCount();
            e({
                returnVal: [r, r],
                returnType: TraitCallbackReturnType.return,
                isBreak: true
            });
        }
        else
            e();
    };
    Tile2DuoXiaoWinStreakTrait.prototype.onBombCdTp_bombCount = function (t, e) {
        if (this.enableTrait()) {
            e({
                returnVal: this.getWinStreak() < this.getWinStreakLimit() ? this.getBombCntDefault() : this.getBombCntAfterWin(),
                returnType: TraitCallbackReturnType.return,
                isBreak: true
            });
        }
        else
            e();
    };
    Tile2DuoXiaoWinStreakTrait.traitKey = "Tile2DuoXiaoWinStreak";
    Tile2DuoXiaoWinStreakTrait = __decorate([
        mj.trait,
        mj.class("Tile2DuoXiaoWinStreakTrait")
    ], Tile2DuoXiaoWinStreakTrait);
    return Tile2DuoXiaoWinStreakTrait;
}(Trait_1.default));
exports.default = Tile2DuoXiaoWinStreakTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2R1b3hpYW9nZW4vU2NyaXB0cy9UaWxlMkR1b1hpYW9XaW5TdHJlYWtUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUZBQTZFO0FBQzdFLGdFQUEyRDtBQUMzRCxzRUFBaUU7QUFHakU7SUFBd0QsOENBQUs7SUFBN0Q7UUFBQSxxRUF3RkM7UUF2RkMsZ0JBQVUsR0FBRyxDQUFDLENBQUM7O0lBdUZqQixDQUFDO0lBckZDLGtEQUFhLEdBQWI7UUFDRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDVCxPQUFPLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RILENBQUM7SUFDRCxzREFBaUIsR0FBakI7UUFDRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDVCxPQUFPLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFILENBQUM7SUFDRCxvREFBZSxHQUFmO1FBQ0UsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ1QsT0FBTyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4SCxDQUFDO0lBQ0Qsc0RBQWlCLEdBQWpCO1FBQ0UsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ1QsT0FBTyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxSCxDQUFDO0lBQ0QsdURBQWtCLEdBQWxCO1FBQ0UsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ1QsT0FBTyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzdILENBQUM7SUFDRCxpREFBWSxHQUFaLFVBQWEsQ0FBQztRQUNaLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFDRCxpREFB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QUFFLElBQUk7U0FDZCxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsOERBQXlCLEdBQXpCLFVBQTBCLENBQUMsRUFBRSxDQUFDO1FBQzVCLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUMvQixDQUFDLENBQUM7Z0JBQ0EsU0FBUyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDakIsVUFBVSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQzFDLE9BQU8sRUFBRSxJQUFJO2FBQ2QsQ0FBQyxDQUFDO1NBQ0o7O1lBQU0sQ0FBQyxFQUFFLENBQUM7SUFDYixDQUFDO0lBQ0QseURBQW9CLEdBQXBCLFVBQXFCLENBQUMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFO1lBQ3RCLENBQUMsQ0FBQztnQkFDQSxTQUFTLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFO2dCQUNoSCxVQUFVLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDMUMsT0FBTyxFQUFFLElBQUk7YUFDZCxDQUFDLENBQUM7U0FDSjs7WUFBTSxDQUFDLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFyRk0sbUNBQVEsR0FBRyx1QkFBdUIsQ0FBQztJQUZ2QiwwQkFBMEI7UUFGOUMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLDRCQUE0QixDQUFDO09BQ2xCLDBCQUEwQixDQXdGOUM7SUFBRCxpQ0FBQztDQXhGRCxBQXdGQyxDQXhGdUQsZUFBSyxHQXdGNUQ7a0JBeEZvQiwwQkFBMEIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFVGlsZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL3NpbXVsYXRvci9jb25zdGFudC9UaWxlVHlwZUVudW0nO1xuaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS91c2VyL1VzZXJNb2RlbCc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIlRpbGUyRHVvWGlhb1dpblN0cmVha1RyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaWxlMkR1b1hpYW9XaW5TdHJlYWtUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgX3dpblN0cmVhayA9IDA7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiVGlsZTJEdW9YaWFvV2luU3RyZWFrXCI7XG4gIGdldExldmVsTGltaXQoKSB7XG4gICAgdmFyIHQsIGU7XG4gICAgcmV0dXJuIG51bGwgIT09IChlID0gbnVsbCA9PT0gKHQgPSB0aGlzLnRyYWl0RGF0YSkgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC5sZXZlbExpbWl0KSAmJiB2b2lkIDAgIT09IGUgPyBlIDogMjtcbiAgfVxuICBnZXRXaW5TdHJlYWtMaW1pdCgpIHtcbiAgICB2YXIgdCwgZTtcbiAgICByZXR1cm4gbnVsbCAhPT0gKGUgPSBudWxsID09PSAodCA9IHRoaXMudHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0LndpblN0cmVha0xpbWl0KSAmJiB2b2lkIDAgIT09IGUgPyBlIDogMjtcbiAgfVxuICBnZXREdW9YaWFvQ291bnQoKSB7XG4gICAgdmFyIHQsIGU7XG4gICAgcmV0dXJuIG51bGwgIT09IChlID0gbnVsbCA9PT0gKHQgPSB0aGlzLnRyYWl0RGF0YSkgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC5kdW9YaWFvQ291bnQpICYmIHZvaWQgMCAhPT0gZSA/IGUgOiAyO1xuICB9XG4gIGdldEJvbWJDbnREZWZhdWx0KCkge1xuICAgIHZhciB0LCBlO1xuICAgIHJldHVybiBudWxsICE9PSAoZSA9IG51bGwgPT09ICh0ID0gdGhpcy50cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQuYm9tYkNudERlZmF1bHQpICYmIHZvaWQgMCAhPT0gZSA/IGUgOiAyO1xuICB9XG4gIGdldEJvbWJDbnRBZnRlcldpbigpIHtcbiAgICB2YXIgdCwgZTtcbiAgICByZXR1cm4gbnVsbCAhPT0gKGUgPSBudWxsID09PSAodCA9IHRoaXMudHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0LmJvbWJDb3VudEFmdGVyV2luKSAmJiB2b2lkIDAgIT09IGUgPyBlIDogMDtcbiAgfVxuICBzZXRXaW5TdHJlYWsodCkge1xuICAgIHRoaXMuX3dpblN0cmVhayA9IHQ7XG4gIH1cbiAgZ2V0V2luU3RyZWFrKCkge1xuICAgIHJldHVybiB0aGlzLl93aW5TdHJlYWs7XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICB9XG4gIGVuYWJsZVRyYWl0KCkge1xuICAgIHZhciB0ID0gVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0Q3VycmVudEdhbWVUeXBlKCk7XG4gICAgcmV0dXJuIHRoaXMuaXNNYXRjaEdhbWVUeXBlKHQpO1xuICB9XG4gIGlzTWF0Y2hHYW1lVHlwZSh0KSB7XG4gICAgcmV0dXJuICEodGhpcy50cmFpdERhdGEuZ2FtZVR5cGVzICYmIHRoaXMudHJhaXREYXRhLmdhbWVUeXBlcy5sZW5ndGggPiAwICYmICF0aGlzLnRyYWl0RGF0YS5nYW1lVHlwZXMuaW5jbHVkZXModCkpO1xuICB9XG4gIG9uVGlsZTJGYWlsQmh2X3N0YXJ0KHQsIGUpIHtcbiAgICB0aGlzLmVuYWJsZVRyYWl0KCkgJiYgdGhpcy5zZXRXaW5TdHJlYWsoMCk7XG4gICAgZSgpO1xuICB9XG4gIG9uVGlsZTJXaW5CaHZfc3RhcnQodCwgZSkge1xuICAgIHRoaXMuZW5hYmxlVHJhaXQoKSAmJiB0aGlzLnNldFdpblN0cmVhayh0aGlzLmdldFdpblN0cmVhaygpICsgMSk7XG4gICAgZSgpO1xuICB9XG4gIGNoZWNrQ2FuR2VuKCkge1xuICAgIHZhciB0LFxuICAgICAgZSxcbiAgICAgIHIgPSB0aGlzLmdldExldmVsTGltaXQoKSxcbiAgICAgIG8gPSAobnVsbCA9PT0gKGUgPSBudWxsID09PSAodCA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpKSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0LmdldEN1cnJlbnRHYW1lRGF0YSgpKSB8fCB2b2lkIDAgPT09IGUgPyB2b2lkIDAgOiBlLmdldExldmVsSWQoKSkgfHwgMDtcbiAgICByZXR1cm4gIShyID4gMCAmJiBvIDw9IHIpO1xuICB9XG4gIG9uVDJEdW94aWFvR2VuVHRfZ2VuVHlwZXModCwgZSkge1xuICAgIHZhciByID0gXCJcIjtcbiAgICBpZiAodGhpcy5jaGVja0NhbkdlbigpKSB7XG4gICAgICBpZiAodGhpcy5nZXRXaW5TdHJlYWsoKSA8IHRoaXMuZ2V0V2luU3RyZWFrTGltaXQoKSkgciA9IFwiXCIgKyBFVGlsZVR5cGUuQm9tYjtlbHNlIHtcbiAgICAgICAgdmFyIG8gPSB0aGlzLmdldER1b1hpYW9Db3VudCgpO1xuICAgICAgICBvID4gMCAmJiAociA9IFwiXCIgKyBFVGlsZVR5cGUuRHVveGlhb0NhcmQpO1xuICAgICAgICB0aGlzLmdldEJvbWJDbnRBZnRlcldpbigpID4gMCAmJiAociA9IHIgKyAobyA+IDAgPyBcIixcIiA6IFwiXCIpICsgRVRpbGVUeXBlLkJvbWIpO1xuICAgICAgfVxuICAgIH1cbiAgICBlKHtcbiAgICAgIHJldHVyblZhbDogcixcbiAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgIGlzQnJlYWs6IHRydWVcbiAgICB9KTtcbiAgfVxuICBvbkR1b3hpYW9DdF9nZW5Db3VudFJhbmdlKHQsIGUpIHtcbiAgICBpZiAodGhpcy5lbmFibGVUcmFpdCgpKSB7XG4gICAgICB2YXIgciA9IHRoaXMuZ2V0RHVvWGlhb0NvdW50KCk7XG4gICAgICBlKHtcbiAgICAgICAgcmV0dXJuVmFsOiBbciwgcl0sXG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgaXNCcmVhazogdHJ1ZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIGUoKTtcbiAgfVxuICBvbkJvbWJDZFRwX2JvbWJDb3VudCh0LCBlKSB7XG4gICAgaWYgKHRoaXMuZW5hYmxlVHJhaXQoKSkge1xuICAgICAgZSh7XG4gICAgICAgIHJldHVyblZhbDogdGhpcy5nZXRXaW5TdHJlYWsoKSA8IHRoaXMuZ2V0V2luU3RyZWFrTGltaXQoKSA/IHRoaXMuZ2V0Qm9tYkNudERlZmF1bHQoKSA6IHRoaXMuZ2V0Qm9tYkNudEFmdGVyV2luKCksXG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgaXNCcmVhazogdHJ1ZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIGUoKTtcbiAgfVxufSJdfQ==