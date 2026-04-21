
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_stopComboWithSpecial/Scripts/StopComboWithSpecialTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a131arUc5NEibhQiiLY7XZ7', 'StopComboWithSpecialTrait');
// subpackages/l_stopComboWithSpecial/Scripts/StopComboWithSpecialTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var TileTypeEnum_1 = require("../../../Scripts/simulator/constant/TileTypeEnum");
var StopComboWithSpecialTrait = /** @class */ (function (_super) {
    __extends(StopComboWithSpecialTrait, _super);
    function StopComboWithSpecialTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._typesToCheck = [];
        return _this;
    }
    StopComboWithSpecialTrait.prototype.onLoad = function () {
        var e, o, i;
        _super.prototype.onLoad.call(this);
        this._initTypesToCheck((null === (e = this.traitData) || void 0 === e ? void 0 : e.checkBomb) || false, (null === (o = this.traitData) || void 0 === o ? void 0 : o.checkDuoxiao) || false, (null === (i = this.traitData) || void 0 === i ? void 0 : i.checkDaxiao) || false);
    };
    StopComboWithSpecialTrait.prototype._initTypesToCheck = function (t, e, o) {
        this._typesToCheck = [];
        t && this._typesToCheck.push(TileTypeEnum_1.ETileType.Bomb);
        e && this._typesToCheck.push(TileTypeEnum_1.ETileType.DuoxiaoCard);
        o && this._typesToCheck.push(TileTypeEnum_1.ETileType.DaxiaoCard);
    };
    StopComboWithSpecialTrait.prototype.hasRemainSpecialTiles = function (t) {
        var e, o = (null == t ? void 0 : t.context) || (null == t ? void 0 : t._context), i = null === (e = null == o ? void 0 : o.getTileMapObject) || void 0 === e ? void 0 : e.call(o);
        return !(!i || "function" != typeof i.isBoardTileHasType) && 0 !== this._typesToCheck.length && i.isBoardTileHasType(this._typesToCheck, true);
    };
    StopComboWithSpecialTrait.prototype.onFullComboChk_canFullCb = function (t, e) {
        var o;
        if ((null === (o = this.traitData) || void 0 === o ? void 0 : o.blockCombo) && this.hasRemainSpecialTiles(t.ins)) {
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                returnVal: false
            });
        }
        else {
            e();
        }
    };
    StopComboWithSpecialTrait.prototype.onRwdComboChk_sTriNow = function (t, e) {
        var o;
        if ((null === (o = this.traitData) || void 0 === o ? void 0 : o.blockCombo) && this.hasRemainSpecialTiles(t.ins)) {
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                returnVal: false
            });
        }
        else {
            e();
        }
    };
    StopComboWithSpecialTrait.traitKey = "StopComboWithSpecial";
    StopComboWithSpecialTrait = __decorate([
        mj.trait,
        mj.class("StopComboWithSpecialTrait")
    ], StopComboWithSpecialTrait);
    return StopComboWithSpecialTrait;
}(Trait_1.default));
exports.default = StopComboWithSpecialTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3N0b3BDb21ib1dpdGhTcGVjaWFsL1NjcmlwdHMvU3RvcENvbWJvV2l0aFNwZWNpYWxUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELDhFQUF3RjtBQUN4RixpRkFBNkU7QUFHN0U7SUFBdUQsNkNBQUs7SUFBNUQ7UUFBQSxxRUE0Q0M7UUEzQ0MsbUJBQWEsR0FBRyxFQUFFLENBQUM7O0lBMkNyQixDQUFDO0lBekNDLDBDQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ1osaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxLQUFLLEVBQUUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsSUFBSSxLQUFLLEVBQUUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQztJQUNqUixDQUFDO0lBQ0QscURBQWlCLEdBQWpCLFVBQWtCLENBQUMsRUFBRSxDQUFDLEVBQUUs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Q0FBQywyQkFBMkIsQ0FBQztPQUNqQix5QkFBeUIsQ0E0QzdDO0lBQUQsZ0NBQUM7Q0E1Q0QsQUE0Q0MsQ0E1Q3NELGVBQUssR0E0QzNEO2tCQTVDb0IseUJBQXlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCB7IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXRNYW5hZ2VyJztcbmltcG9ydCB7IEVUaWxlVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvc2ltdWxhdG9yL2NvbnN0YW50L1RpbGVUeXBlRW51bSc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIlN0b3BDb21ib1dpdGhTcGVjaWFsVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0b3BDb21ib1dpdGhTcGVjaWFsVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIF90eXBlc1RvQ2hlY2sgPSBbXTtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJTdG9wQ29tYm9XaXRoU3BlY2lhbFwiO1xuICBvbkxvYWQoKSB7XG4gICAgdmFyIGUsIG8sIGk7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5faW5pdFR5cGVzVG9DaGVjaygobnVsbCA9PT0gKGUgPSB0aGlzLnRyYWl0RGF0YSkgfHwgdm9pZCAwID09PSBlID8gdm9pZCAwIDogZS5jaGVja0JvbWIpIHx8IGZhbHNlLCAobnVsbCA9PT0gKG8gPSB0aGlzLnRyYWl0RGF0YSkgfHwgdm9pZCAwID09PSBvID8gdm9pZCAwIDogby5jaGVja0R1b3hpYW8pIHx8IGZhbHNlLCAobnVsbCA9PT0gKGkgPSB0aGlzLnRyYWl0RGF0YSkgfHwgdm9pZCAwID09PSBpID8gdm9pZCAwIDogaS5jaGVja0RheGlhbykgfHwgZmFsc2UpO1xuICB9XG4gIF9pbml0VHlwZXNUb0NoZWNrKHQsIGUsIG8pIHtcbiAgICB0aGlzLl90eXBlc1RvQ2hlY2sgPSBbXTtcbiAgICB0ICYmIHRoaXMuX3R5cGVzVG9DaGVjay5wdXNoKEVUaWxlVHlwZS5Cb21iKTtcbiAgICBlICYmIHRoaXMuX3R5cGVzVG9DaGVjay5wdXNoKEVUaWxlVHlwZS5EdW94aWFvQ2FyZCk7XG4gICAgbyAmJiB0aGlzLl90eXBlc1RvQ2hlY2sucHVzaChFVGlsZVR5cGUuRGF4aWFvQ2FyZCk7XG4gIH1cbiAgaGFzUmVtYWluU3BlY2lhbFRpbGVzKHQpIHtcbiAgICB2YXIgZSxcbiAgICAgIG8gPSAobnVsbCA9PSB0ID8gdm9pZCAwIDogdC5jb250ZXh0KSB8fCAobnVsbCA9PSB0ID8gdm9pZCAwIDogdC5fY29udGV4dCksXG4gICAgICBpID0gbnVsbCA9PT0gKGUgPSBudWxsID09IG8gPyB2b2lkIDAgOiBvLmdldFRpbGVNYXBPYmplY3QpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUuY2FsbChvKTtcbiAgICByZXR1cm4gISghaSB8fCBcImZ1bmN0aW9uXCIgIT0gdHlwZW9mIGkuaXNCb2FyZFRpbGVIYXNUeXBlKSAmJiAwICE9PSB0aGlzLl90eXBlc1RvQ2hlY2subGVuZ3RoICYmIGkuaXNCb2FyZFRpbGVIYXNUeXBlKHRoaXMuX3R5cGVzVG9DaGVjaywgdHJ1ZSk7XG4gIH1cbiAgb25GdWxsQ29tYm9DaGtfY2FuRnVsbENiKHQsIGUpIHtcbiAgICB2YXIgbztcbiAgICBpZiAoKG51bGwgPT09IChvID0gdGhpcy50cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gbyA/IHZvaWQgMCA6IG8uYmxvY2tDb21ibykgJiYgdGhpcy5oYXNSZW1haW5TcGVjaWFsVGlsZXModC5pbnMpKSB7XG4gICAgICBlKHtcbiAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICByZXR1cm5WYWw6IGZhbHNlXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZSgpO1xuICAgIH1cbiAgfVxuICBvblJ3ZENvbWJvQ2hrX3NUcmlOb3codCwgZSkge1xuICAgIHZhciBvO1xuICAgIGlmICgobnVsbCA9PT0gKG8gPSB0aGlzLnRyYWl0RGF0YSkgfHwgdm9pZCAwID09PSBvID8gdm9pZCAwIDogby5ibG9ja0NvbWJvKSAmJiB0aGlzLmhhc1JlbWFpblNwZWNpYWxUaWxlcyh0LmlucykpIHtcbiAgICAgIGUoe1xuICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICAgIHJldHVyblZhbDogZmFsc2VcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBlKCk7XG4gICAgfVxuICB9XG59Il19