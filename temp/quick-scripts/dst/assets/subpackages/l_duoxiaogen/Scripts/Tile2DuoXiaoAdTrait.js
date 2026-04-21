
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_duoxiaogen/Scripts/Tile2DuoXiaoAdTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5b23blrxnVLC76CoB92k5uK', 'Tile2DuoXiaoAdTrait');
// subpackages/l_duoxiaogen/Scripts/Tile2DuoXiaoAdTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var TileTypeEnum_1 = require("../../../Scripts/simulator/constant/TileTypeEnum");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var Tile2DuoXiaoAdTrait = /** @class */ (function (_super) {
    __extends(Tile2DuoXiaoAdTrait, _super);
    function Tile2DuoXiaoAdTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._playAdCount = 0;
        return _this;
    }
    Tile2DuoXiaoAdTrait.prototype.getLevelLimit = function () {
        var t, e;
        return null !== (e = null === (t = this.traitData) || void 0 === t ? void 0 : t.levelLimit) && void 0 !== e ? e : 2;
    };
    Tile2DuoXiaoAdTrait.prototype.getPlayAdLimit = function () {
        var t, e;
        return null !== (e = null === (t = this.traitData) || void 0 === t ? void 0 : t.playAdLimit) && void 0 !== e ? e : 1;
    };
    Tile2DuoXiaoAdTrait.prototype.getDuoXiaoCount = function () {
        var t, e;
        return null !== (e = null === (t = this.traitData) || void 0 === t ? void 0 : t.duoXiaoCount) && void 0 !== e ? e : 2;
    };
    Tile2DuoXiaoAdTrait.prototype.getBombCntDefault = function () {
        var t, e;
        return null !== (e = null === (t = this.traitData) || void 0 === t ? void 0 : t.bombCntDefault) && void 0 !== e ? e : 2;
    };
    Tile2DuoXiaoAdTrait.prototype.getBombCntAfterWin = function () {
        var t, e;
        return null !== (e = null === (t = this.traitData) || void 0 === t ? void 0 : t.bombCountAfterWin) && void 0 !== e ? e : 0;
    };
    Tile2DuoXiaoAdTrait.prototype.isMatchGameType = function (t) {
        return !(this.traitData.gameTypes && this.traitData.gameTypes.length > 0 && !this.traitData.gameTypes.includes(t));
    };
    Tile2DuoXiaoAdTrait.prototype.enableTrait = function () {
        var t = UserModel_1.default.getInstance().getCurrentGameType();
        return this.isMatchGameType(t);
    };
    Tile2DuoXiaoAdTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    Tile2DuoXiaoAdTrait.prototype.onAdMgr_videoSuccess = function (t, e) {
        var r;
        this.enableTrait() && (null === (r = UserModel_1.default.getInstance()) || void 0 === r ? void 0 : r.isInGameView()) && this._playAdCount++;
        e();
    };
    Tile2DuoXiaoAdTrait.prototype.onGsListener_onNewGame = function (t, e) {
        this.enableTrait() && (this._playAdCount = 0);
        e();
    };
    Tile2DuoXiaoAdTrait.prototype.onGsListener_onReplayGame = function (t, e) {
        this.enableTrait() && (this._playAdCount = 0);
        e();
    };
    Tile2DuoXiaoAdTrait.prototype.checkCanGen = function () {
        var t, e, r = this.getLevelLimit(), o = (null === (e = null === (t = UserModel_1.default.getInstance()) || void 0 === t ? void 0 : t.getCurrentGameData()) || void 0 === e ? void 0 : e.getLevelId()) || 0;
        return !(r > 0 && o <= r);
    };
    Tile2DuoXiaoAdTrait.prototype.onT2DuoxiaoGenTt_genTypes = function (t, e) {
        var r = "", o = this.getPlayAdLimit();
        if (this.checkCanGen())
            if (this._playAdCount < o)
                r = "" + TileTypeEnum_1.ETileType.Bomb;
            else {
                var n = this.getDuoXiaoCount();
                n > 0 && (r = "" + TileTypeEnum_1.ETileType.DuoxiaoCard);
                this.getBombCntAfterWin() > 0 && (r = r + (n > 0 ? "," : "") + TileTypeEnum_1.ETileType.Bomb);
            }
        e({
            returnVal: r,
            returnType: TraitCallbackReturnType.return,
            isBreak: true
        });
    };
    Tile2DuoXiaoAdTrait.prototype.onDuoxiaoCt_genCountRange = function (t, e) {
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
    Tile2DuoXiaoAdTrait.prototype.onBombCdTp_bombCount = function (t, e) {
        if (this.enableTrait()) {
            var r = this.getPlayAdLimit();
            e({
                returnVal: this._playAdCount < r ? this.getBombCntDefault() : this.getBombCntAfterWin(),
                returnType: TraitCallbackReturnType.return,
                isBreak: true
            });
        }
        else
            e();
    };
    Tile2DuoXiaoAdTrait.traitKey = "Tile2DuoXiaoAd";
    Tile2DuoXiaoAdTrait = __decorate([
        mj.trait,
        mj.class("Tile2DuoXiaoAdTrait")
    ], Tile2DuoXiaoAdTrait);
    return Tile2DuoXiaoAdTrait;
}(Trait_1.default));
exports.default = Tile2DuoXiaoAdTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2R1b3hpYW9nZW4vU2NyaXB0cy9UaWxlMkR1b1hpYW9BZFRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpRkFBNkU7QUFDN0UsZ0VBQTJEO0FBQzNELHNFQUFpRTtBQUdqRTtJQUFpRCx1Q0FBSztJQUF0RDtRQUFBLHFFQXVGQztRQXRGQyxrQkFBWSxHQUFHLENBQUMsQ0FBQzs7SUFzRm5CLENBQUM7SUFwRkMsMkNBQWEsR0FBYjtRQUNFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNULE9BQU8sSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEgsQ0FBQztJQUNELDRDQUFjLEdBQWQ7UUFDRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDVCxPQUFPLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZILENBQUM7SUFDRCw2Q0FBZSxHQUFmO1FBQ0UsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ1QsT0FBTyxJQUFJLEtBQUssQ0FBQyxD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QUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDO09BQ1gsbUJBQW1CLENBdUZ2QztJQUFELDBCQUFDO0NBdkZELEFBdUZDLENBdkZnRCxlQUFLLEdBdUZyRDtrQkF2Rm9CLG1CQUFtQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVUaWxlVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvc2ltdWxhdG9yL2NvbnN0YW50L1RpbGVUeXBlRW51bSc7XG5pbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L3VzZXIvVXNlck1vZGVsJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiVGlsZTJEdW9YaWFvQWRUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlsZTJEdW9YaWFvQWRUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgX3BsYXlBZENvdW50ID0gMDtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJUaWxlMkR1b1hpYW9BZFwiO1xuICBnZXRMZXZlbExpbWl0KCkge1xuICAgIHZhciB0LCBlO1xuICAgIHJldHVybiBudWxsICE9PSAoZSA9IG51bGwgPT09ICh0ID0gdGhpcy50cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQubGV2ZWxMaW1pdCkgJiYgdm9pZCAwICE9PSBlID8gZSA6IDI7XG4gIH1cbiAgZ2V0UGxheUFkTGltaXQoKSB7XG4gICAgdmFyIHQsIGU7XG4gICAgcmV0dXJuIG51bGwgIT09IChlID0gbnVsbCA9PT0gKHQgPSB0aGlzLnRyYWl0RGF0YSkgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC5wbGF5QWRMaW1pdCkgJiYgdm9pZCAwICE9PSBlID8gZSA6IDE7XG4gIH1cbiAgZ2V0RHVvWGlhb0NvdW50KCkge1xuICAgIHZhciB0LCBlO1xuICAgIHJldHVybiBudWxsICE9PSAoZSA9IG51bGwgPT09ICh0ID0gdGhpcy50cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQuZHVvWGlhb0NvdW50KSAmJiB2b2lkIDAgIT09IGUgPyBlIDogMjtcbiAgfVxuICBnZXRCb21iQ250RGVmYXVsdCgpIHtcbiAgICB2YXIgdCwgZTtcbiAgICByZXR1cm4gbnVsbCAhPT0gKGUgPSBudWxsID09PSAodCA9IHRoaXMudHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0LmJvbWJDbnREZWZhdWx0KSAmJiB2b2lkIDAgIT09IGUgPyBlIDogMjtcbiAgfVxuICBnZXRCb21iQ250QWZ0ZXJXaW4oKSB7XG4gICAgdmFyIHQsIGU7XG4gICAgcmV0dXJuIG51bGwgIT09IChlID0gbnVsbCA9PT0gKHQgPSB0aGlzLnRyYWl0RGF0YSkgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC5ib21iQ291bnRBZnRlcldpbikgJiYgdm9pZCAwICE9PSBlID8gZSA6IDA7XG4gIH1cbiAgaXNNYXRjaEdhbWVUeXBlKHQpIHtcbiAgICByZXR1cm4gISh0aGlzLnRyYWl0RGF0YS5nYW1lVHlwZXMgJiYgdGhpcy50cmFpdERhdGEuZ2FtZVR5cGVzLmxlbmd0aCA+IDAgJiYgIXRoaXMudHJhaXREYXRhLmdhbWVUeXBlcy5pbmNsdWRlcyh0KSk7XG4gIH1cbiAgZW5hYmxlVHJhaXQoKSB7XG4gICAgdmFyIHQgPSBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRDdXJyZW50R2FtZVR5cGUoKTtcbiAgICByZXR1cm4gdGhpcy5pc01hdGNoR2FtZVR5cGUodCk7XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICB9XG4gIG9uQWRNZ3JfdmlkZW9TdWNjZXNzKHQsIGUpIHtcbiAgICB2YXIgcjtcbiAgICB0aGlzLmVuYWJsZVRyYWl0KCkgJiYgKG51bGwgPT09IChyID0gVXNlck1vZGVsLmdldEluc3RhbmNlKCkpIHx8IHZvaWQgMCA9PT0gciA/IHZvaWQgMCA6IHIuaXNJbkdhbWVWaWV3KCkpICYmIHRoaXMuX3BsYXlBZENvdW50Kys7XG4gICAgZSgpO1xuICB9XG4gIG9uR3NMaXN0ZW5lcl9vbk5ld0dhbWUodCwgZSkge1xuICAgIHRoaXMuZW5hYmxlVHJhaXQoKSAmJiAodGhpcy5fcGxheUFkQ291bnQgPSAwKTtcbiAgICBlKCk7XG4gIH1cbiAgb25Hc0xpc3RlbmVyX29uUmVwbGF5R2FtZSh0LCBlKSB7XG4gICAgdGhpcy5lbmFibGVUcmFpdCgpICYmICh0aGlzLl9wbGF5QWRDb3VudCA9IDApO1xuICAgIGUoKTtcbiAgfVxuICBjaGVja0NhbkdlbigpIHtcbiAgICB2YXIgdCxcbiAgICAgIGUsXG4gICAgICByID0gdGhpcy5nZXRMZXZlbExpbWl0KCksXG4gICAgICBvID0gKG51bGwgPT09IChlID0gbnVsbCA9PT0gKHQgPSBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKSkgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC5nZXRDdXJyZW50R2FtZURhdGEoKSkgfHwgdm9pZCAwID09PSBlID8gdm9pZCAwIDogZS5nZXRMZXZlbElkKCkpIHx8IDA7XG4gICAgcmV0dXJuICEociA+IDAgJiYgbyA8PSByKTtcbiAgfVxuICBvblQyRHVveGlhb0dlblR0X2dlblR5cGVzKHQsIGUpIHtcbiAgICB2YXIgciA9IFwiXCIsXG4gICAgICBvID0gdGhpcy5nZXRQbGF5QWRMaW1pdCgpO1xuICAgIGlmICh0aGlzLmNoZWNrQ2FuR2VuKCkpIGlmICh0aGlzLl9wbGF5QWRDb3VudCA8IG8pIHIgPSBcIlwiICsgRVRpbGVUeXBlLkJvbWI7ZWxzZSB7XG4gICAgICB2YXIgbiA9IHRoaXMuZ2V0RHVvWGlhb0NvdW50KCk7XG4gICAgICBuID4gMCAmJiAociA9IFwiXCIgKyBFVGlsZVR5cGUuRHVveGlhb0NhcmQpO1xuICAgICAgdGhpcy5nZXRCb21iQ250QWZ0ZXJXaW4oKSA+IDAgJiYgKHIgPSByICsgKG4gPiAwID8gXCIsXCIgOiBcIlwiKSArIEVUaWxlVHlwZS5Cb21iKTtcbiAgICB9XG4gICAgZSh7XG4gICAgICByZXR1cm5WYWw6IHIsXG4gICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICBpc0JyZWFrOiB0cnVlXG4gICAgfSk7XG4gIH1cbiAgb25EdW94aWFvQ3RfZ2VuQ291bnRSYW5nZSh0LCBlKSB7XG4gICAgaWYgKHRoaXMuZW5hYmxlVHJhaXQoKSkge1xuICAgICAgdmFyIHIgPSB0aGlzLmdldER1b1hpYW9Db3VudCgpO1xuICAgICAgZSh7XG4gICAgICAgIHJldHVyblZhbDogW3IsIHJdLFxuICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICAgIGlzQnJlYWs6IHRydWVcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBlKCk7XG4gIH1cbiAgb25Cb21iQ2RUcF9ib21iQ291bnQodCwgZSkge1xuICAgIGlmICh0aGlzLmVuYWJsZVRyYWl0KCkpIHtcbiAgICAgIHZhciByID0gdGhpcy5nZXRQbGF5QWRMaW1pdCgpO1xuICAgICAgZSh7XG4gICAgICAgIHJldHVyblZhbDogdGhpcy5fcGxheUFkQ291bnQgPCByID8gdGhpcy5nZXRCb21iQ250RGVmYXVsdCgpIDogdGhpcy5nZXRCb21iQ250QWZ0ZXJXaW4oKSxcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICBpc0JyZWFrOiB0cnVlXG4gICAgICB9KTtcbiAgICB9IGVsc2UgZSgpO1xuICB9XG59Il19