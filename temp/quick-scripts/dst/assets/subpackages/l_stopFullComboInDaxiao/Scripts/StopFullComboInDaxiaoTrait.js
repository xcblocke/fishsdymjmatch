
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_stopFullComboInDaxiao/Scripts/StopFullComboInDaxiaoTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '15ec4wpPQFNhJ26ukPqLShx', 'StopFullComboInDaxiaoTrait');
// subpackages/l_stopFullComboInDaxiao/Scripts/StopFullComboInDaxiaoTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var TileTypeEnum_1 = require("../../../Scripts/simulator/constant/TileTypeEnum");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var StopFullComboInDaxiaoTrait = /** @class */ (function (_super) {
    __extends(StopFullComboInDaxiaoTrait, _super);
    function StopFullComboInDaxiaoTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._gameType = GameTypeEnums_1.MjGameType.None;
        return _this;
    }
    StopFullComboInDaxiaoTrait.prototype.onLoad = function () {
        var t, o, i;
        _super.prototype.onLoad.call(this);
        this.localData.byGameType && "object" == typeof this.localData.byGameType || (this.localData.byGameType = {});
        this._config = {
            blockCombo: void 0 === (null === (t = this._traitData) || void 0 === t ? void 0 : t.blockCombo) || 1 === Number(this._traitData.blockCombo),
            isDaxiao: void 0 === (null === (o = this._traitData) || void 0 === o ? void 0 : o.isDaxiao) || 1 === Number(this._traitData.isDaxiao),
            isLianxiao: void 0 === (null === (i = this._traitData) || void 0 === i ? void 0 : i.isLianxiao) || 1 === Number(this._traitData.isLianxiao)
        };
    };
    StopFullComboInDaxiaoTrait.prototype.getBoardFlags = function (a) {
        var t, o = null === (t = this.localData.byGameType) || void 0 === t ? void 0 : t[a];
        return o ? "boolean" == typeof o ? {
            hasDaxiao: o,
            hasLianxiao: o
        } : "object" != typeof o ? {
            hasDaxiao: false,
            hasLianxiao: false
        } : {
            hasDaxiao: !!o.hasDaxiao,
            hasLianxiao: !!o.hasLianxiao
        } : {
            hasDaxiao: false,
            hasLianxiao: false
        };
    };
    StopFullComboInDaxiaoTrait.prototype.onInitViewBhv_crtTls = function (a, t) {
        var o, i;
        this._gameType = null === (i = null === (o = a.ins) || void 0 === o ? void 0 : o._context) || void 0 === i ? void 0 : i.gameType;
        t();
    };
    StopFullComboInDaxiaoTrait.prototype.onIptSetLv_newGComp = function (a, t) {
        var o, i, e = null === (o = a.ins) || void 0 === o ? void 0 : o.tileMapObject, r = false, n = false, s = GameTypeEnums_1.MjGameType.None;
        if (e && "function" == typeof e.isBoardTileHasType) {
            r = e.isBoardTileHasType([TileTypeEnum_1.ETileType.DaxiaoCard], true);
            n = e.isBoardTileHasType([TileTypeEnum_1.ETileType.DuoxiaoCard], true);
            s = (null === (i = e.gameContext) || void 0 === i ? void 0 : i.gameType) || GameTypeEnums_1.MjGameType.None;
        }
        this.localData.byGameType[s] = {
            hasDaxiao: r,
            hasLianxiao: n
        };
        this.localData.byGameType = this.localData.byGameType;
        t();
    };
    StopFullComboInDaxiaoTrait.prototype.onFullComboChk_canFullCb = function (a, t) {
        var o = this.getBoardFlags(this._gameType), i = this._config;
        if (i.blockCombo) {
            var e = i.isDaxiao && o.hasDaxiao, r = i.isLianxiao && o.hasLianxiao;
            if (e || r) {
                t({
                    isBreak: true,
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    returnVal: false
                });
            }
            else {
                t();
            }
        }
        else
            t();
    };
    StopFullComboInDaxiaoTrait.prototype.onRwdComboChk_sTriNow = function (a, t) {
        var o = this.getBoardFlags(this._gameType), i = this._config;
        if (i.blockCombo) {
            var e = i.isDaxiao && o.hasDaxiao, r = i.isLianxiao && o.hasLianxiao;
            if (e || r) {
                t({
                    isBreak: true,
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    returnVal: false
                });
            }
            else {
                t();
            }
        }
        else
            t();
    };
    StopFullComboInDaxiaoTrait.traitKey = "StopFullComboInDaxiao";
    StopFullComboInDaxiaoTrait = __decorate([
        mj.trait,
        mj.class("StopFullComboInDaxiaoTrait")
    ], StopFullComboInDaxiaoTrait);
    return StopFullComboInDaxiaoTrait;
}(Trait_1.default));
exports.default = StopFullComboInDaxiaoTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3N0b3BGdWxsQ29tYm9JbkRheGlhby9TY3JpcHRzL1N0b3BGdWxsQ29tYm9JbkRheGlhb1RyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFDM0QsOEVBQXdGO0FBQ3hGLGlGQUE2RTtBQUM3RSx3RkFBb0Y7QUFHcEY7SUFBd0QsOENBQUs7SUFBN0Q7UUFBQSxxRUF3RkM7UUF2RkMsZUFBUyxHQUFHLDBCQUFVLENBQUMsSUFBSSxDQUFDOztJQXVGOUIsQ0FBQztJQXJGQywyQ0FBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNaLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLElBQUksUUFBUSxJQUFJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUM5RyxJQUFJLENBQUMsT0FBTyxHQUFHO1lBQ2IsVUFBVSxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQztZQUMzSSxRQUFRLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDO1lBQ3JJLFVBQVUsRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUM7U0FDNUksQ0FBQztJQUNKLENBQUM7SUFDRCxrREFBYSxHQUFiLFVBQWMsQ0FBQztRQUNiLElBQUksQ0FBQyxFQUNILENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDL0UsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakMsU0FBUyxFQUFFLENBQUM7WUFDWixXQUFXLEVBQUUsQ0FBQztTQUNmLENBQUMsQ0FBQyxDQUFDLFFBQVEsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekIsU0FBUyxFQUFFLEtBQUs7WUFDaEIsV0FBVyxFQUFFLEtBQUs7U0FDbkIsQ0FBQyxDQUFDLENBQUM7WUFDRixTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTO1lBQ3hCLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVc7U0FDN0IsQ0FBQyxDQUFDLENBQUM7WUFDRixTQUFTLEVBQUUsS0FBSztZQUNoQixXQUFXLEVBQUUsS0FBSztTQUNuQixDQUFDO0lBQ0osQ0FBQztJQUNELHlEQUFvQixHQUFwQixVQUFxQixDQUFDLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDVCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO1FBQ2pJLENBQUMsRUFBRSxDQUFDO0lBQ04sQ0FBQztJQUNELHdEQUFtQixHQUFuQixVQUFvQixDQUFDLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsRUFDSCxDQUFDLEVBQ0QsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsRUFDbkUsQ0FBQyxHQUFHLEtBQUssRUFDVCxDQUFDLEdBQUcsS0FBSyxFQUNULENBQUMsR0FBRywwQkFBVSxDQUFDLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsSUFBSSxVQUFVLElBQUksT0FBTyxDQUFDLENBQUMsa0JBQWtCLEVBQUU7WUFDbEQsQ0FBQyxHQUFHLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLHdCQUFTLENBQUMsVUFBVSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDdkQsQ0FBQyxHQUFHLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLHdCQUFTLENBQUMsV0FBVyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDeEQsQ0FBQyxHQUFHLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksMEJBQVUsQ0FBQyxJQUFJLENBQUM7U0FDN0Y7UUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRztZQUM3QixTQUFTLEVBQUUsQ0FBQztZQUNaLFdBQVcsRUFBRSxDQUFDO1NBQ2YsQ0FBQztRQUNGLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDO1FBQ3RELENBQUMsRUFBRSxDQUFDO0lBQ04sQ0FBQztJQUNELDZEQUF3QixHQUF4QixVQUF5QixDQUFDLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFDeEMsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDbkIsSUFBSSxDQUFDLENBQUMsVUFBVSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLElBQUksQ0FBQyxDQUFDLFNBQVMsRUFDL0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLElBQUksQ0FBQyxDQUFDLFdBQVcsQ0FBQztZQUNwQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ1YsQ0FBQyxDQUFDO29CQUNBLE9BQU8sRUFBRSxJQUFJO29CQUNiLFVBQVUsRUFBRSxzQ0FBdUIsQ0FBQyxNQUFNO29CQUMxQyxTQUFTLEVBQUUsS0FBSztpQkFDakIsQ0FBQyxDQUFDO2FBQ0o7aUJBQU07Z0JBQ0wsQ0FBQyxFQUFFLENBQUM7YUFDTDtTQUNGOztZQUFNLENBQUMsRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQUNELDBEQUFxQixHQUFyQixVQUFzQixDQUFDLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFDeEMsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDbkIsSUFBSSxDQUFDLENBQUMsVUFBVSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLElBQUksQ0FBQyxDQUFDLFNBQVMsRUFDL0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLElBQUksQ0FBQyxDQUFDLFdBQVcsQ0FBQztZQUNwQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ1YsQ0FBQyxDQUFDO29CQUNBLE9BQU8sRUFBRSxJQUFJO29CQUNiLFVBQVUsRUFBRSxzQ0FBdUIsQ0FBQyxNQUFNO29CQUMxQyxTQUFTLEVBQUUsS0FBSztpQkFDakIsQ0FBQyxDQUFDO2FBQ0o7aUJBQU07Z0JBQ0wsQ0FBQyxFQUFFLENBQUM7YUFDTDtTQUNGOztZQUFNLENBQUMsRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQXJGTSxtQ0FBUSxHQUFHLHVCQUF1QixDQUFDO0lBRnZCLDBCQUEwQjtRQUY5QyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsNEJBQTRCLENBQUM7T0FDbEIsMEJBQTBCLENBd0Y5QztJQUFELGlDQUFDO0NBeEZELEFBd0ZDLENBeEZ1RCxlQUFLLEdBd0Y1RDtrQkF4Rm9CLDBCQUEwQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgeyBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0TWFuYWdlcic7XG5pbXBvcnQgeyBFVGlsZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL3NpbXVsYXRvci9jb25zdGFudC9UaWxlVHlwZUVudW0nO1xuaW1wb3J0IHsgTWpHYW1lVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9zaW11bGF0b3IvY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIlN0b3BGdWxsQ29tYm9JbkRheGlhb1RyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdG9wRnVsbENvbWJvSW5EYXhpYW9UcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgX2dhbWVUeXBlID0gTWpHYW1lVHlwZS5Ob25lO1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIlN0b3BGdWxsQ29tYm9JbkRheGlhb1wiO1xuICBvbkxvYWQoKSB7XG4gICAgdmFyIHQsIG8sIGk7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5sb2NhbERhdGEuYnlHYW1lVHlwZSAmJiBcIm9iamVjdFwiID09IHR5cGVvZiB0aGlzLmxvY2FsRGF0YS5ieUdhbWVUeXBlIHx8ICh0aGlzLmxvY2FsRGF0YS5ieUdhbWVUeXBlID0ge30pO1xuICAgIHRoaXMuX2NvbmZpZyA9IHtcbiAgICAgIGJsb2NrQ29tYm86IHZvaWQgMCA9PT0gKG51bGwgPT09ICh0ID0gdGhpcy5fdHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0LmJsb2NrQ29tYm8pIHx8IDEgPT09IE51bWJlcih0aGlzLl90cmFpdERhdGEuYmxvY2tDb21ibyksXG4gICAgICBpc0RheGlhbzogdm9pZCAwID09PSAobnVsbCA9PT0gKG8gPSB0aGlzLl90cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gbyA/IHZvaWQgMCA6IG8uaXNEYXhpYW8pIHx8IDEgPT09IE51bWJlcih0aGlzLl90cmFpdERhdGEuaXNEYXhpYW8pLFxuICAgICAgaXNMaWFueGlhbzogdm9pZCAwID09PSAobnVsbCA9PT0gKGkgPSB0aGlzLl90cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gaSA/IHZvaWQgMCA6IGkuaXNMaWFueGlhbykgfHwgMSA9PT0gTnVtYmVyKHRoaXMuX3RyYWl0RGF0YS5pc0xpYW54aWFvKVxuICAgIH07XG4gIH1cbiAgZ2V0Qm9hcmRGbGFncyhhKSB7XG4gICAgdmFyIHQsXG4gICAgICBvID0gbnVsbCA9PT0gKHQgPSB0aGlzLmxvY2FsRGF0YS5ieUdhbWVUeXBlKSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0W2FdO1xuICAgIHJldHVybiBvID8gXCJib29sZWFuXCIgPT0gdHlwZW9mIG8gPyB7XG4gICAgICBoYXNEYXhpYW86IG8sXG4gICAgICBoYXNMaWFueGlhbzogb1xuICAgIH0gOiBcIm9iamVjdFwiICE9IHR5cGVvZiBvID8ge1xuICAgICAgaGFzRGF4aWFvOiBmYWxzZSxcbiAgICAgIGhhc0xpYW54aWFvOiBmYWxzZVxuICAgIH0gOiB7XG4gICAgICBoYXNEYXhpYW86ICEhby5oYXNEYXhpYW8sXG4gICAgICBoYXNMaWFueGlhbzogISFvLmhhc0xpYW54aWFvXG4gICAgfSA6IHtcbiAgICAgIGhhc0RheGlhbzogZmFsc2UsXG4gICAgICBoYXNMaWFueGlhbzogZmFsc2VcbiAgICB9O1xuICB9XG4gIG9uSW5pdFZpZXdCaHZfY3J0VGxzKGEsIHQpIHtcbiAgICB2YXIgbywgaTtcbiAgICB0aGlzLl9nYW1lVHlwZSA9IG51bGwgPT09IChpID0gbnVsbCA9PT0gKG8gPSBhLmlucykgfHwgdm9pZCAwID09PSBvID8gdm9pZCAwIDogby5fY29udGV4dCkgfHwgdm9pZCAwID09PSBpID8gdm9pZCAwIDogaS5nYW1lVHlwZTtcbiAgICB0KCk7XG4gIH1cbiAgb25JcHRTZXRMdl9uZXdHQ29tcChhLCB0KSB7XG4gICAgdmFyIG8sXG4gICAgICBpLFxuICAgICAgZSA9IG51bGwgPT09IChvID0gYS5pbnMpIHx8IHZvaWQgMCA9PT0gbyA/IHZvaWQgMCA6IG8udGlsZU1hcE9iamVjdCxcbiAgICAgIHIgPSBmYWxzZSxcbiAgICAgIG4gPSBmYWxzZSxcbiAgICAgIHMgPSBNakdhbWVUeXBlLk5vbmU7XG4gICAgaWYgKGUgJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBlLmlzQm9hcmRUaWxlSGFzVHlwZSkge1xuICAgICAgciA9IGUuaXNCb2FyZFRpbGVIYXNUeXBlKFtFVGlsZVR5cGUuRGF4aWFvQ2FyZF0sIHRydWUpO1xuICAgICAgbiA9IGUuaXNCb2FyZFRpbGVIYXNUeXBlKFtFVGlsZVR5cGUuRHVveGlhb0NhcmRdLCB0cnVlKTtcbiAgICAgIHMgPSAobnVsbCA9PT0gKGkgPSBlLmdhbWVDb250ZXh0KSB8fCB2b2lkIDAgPT09IGkgPyB2b2lkIDAgOiBpLmdhbWVUeXBlKSB8fCBNakdhbWVUeXBlLk5vbmU7XG4gICAgfVxuICAgIHRoaXMubG9jYWxEYXRhLmJ5R2FtZVR5cGVbc10gPSB7XG4gICAgICBoYXNEYXhpYW86IHIsXG4gICAgICBoYXNMaWFueGlhbzogblxuICAgIH07XG4gICAgdGhpcy5sb2NhbERhdGEuYnlHYW1lVHlwZSA9IHRoaXMubG9jYWxEYXRhLmJ5R2FtZVR5cGU7XG4gICAgdCgpO1xuICB9XG4gIG9uRnVsbENvbWJvQ2hrX2NhbkZ1bGxDYihhLCB0KSB7XG4gICAgdmFyIG8gPSB0aGlzLmdldEJvYXJkRmxhZ3ModGhpcy5fZ2FtZVR5cGUpLFxuICAgICAgaSA9IHRoaXMuX2NvbmZpZztcbiAgICBpZiAoaS5ibG9ja0NvbWJvKSB7XG4gICAgICB2YXIgZSA9IGkuaXNEYXhpYW8gJiYgby5oYXNEYXhpYW8sXG4gICAgICAgIHIgPSBpLmlzTGlhbnhpYW8gJiYgby5oYXNMaWFueGlhbztcbiAgICAgIGlmIChlIHx8IHIpIHtcbiAgICAgICAgdCh7XG4gICAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICAgICAgcmV0dXJuVmFsOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHQoKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgdCgpO1xuICB9XG4gIG9uUndkQ29tYm9DaGtfc1RyaU5vdyhhLCB0KSB7XG4gICAgdmFyIG8gPSB0aGlzLmdldEJvYXJkRmxhZ3ModGhpcy5fZ2FtZVR5cGUpLFxuICAgICAgaSA9IHRoaXMuX2NvbmZpZztcbiAgICBpZiAoaS5ibG9ja0NvbWJvKSB7XG4gICAgICB2YXIgZSA9IGkuaXNEYXhpYW8gJiYgby5oYXNEYXhpYW8sXG4gICAgICAgIHIgPSBpLmlzTGlhbnhpYW8gJiYgby5oYXNMaWFueGlhbztcbiAgICAgIGlmIChlIHx8IHIpIHtcbiAgICAgICAgdCh7XG4gICAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICAgICAgcmV0dXJuVmFsOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHQoKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgdCgpO1xuICB9XG59Il19