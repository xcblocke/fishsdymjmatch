
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_dianzan/Scripts/Tile2DianZanTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fa0cfc3yTdKxY8FgwtZfKkI', 'Tile2DianZanTrait');
// subpackages/l_dianzan/Scripts/Tile2DianZanTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var Tile2DianZanTrait = /** @class */ (function (_super) {
    __extends(Tile2DianZanTrait, _super);
    function Tile2DianZanTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2DianZanTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    Tile2DianZanTrait.prototype.onT2DianZCheck_isDianZan = function (t, e) {
        var n, r = (null === (n = UserModel_1.default.getInstance().getCurrentGameData()) || void 0 === n ? void 0 : n.getLevelId()) || 0;
        e({
            isBreak: true,
            returnType: TraitCallbackReturnType.return,
            returnVal: r > 1
        });
    };
    Tile2DianZanTrait.prototype.getSpineUrl = function () {
        return this.traitData.spineUrl || "spine/dianzan/gameplay_hand";
    };
    Tile2DianZanTrait.prototype.getSpineBundleName = function () {
        return this.traitData.spineBundle || "mainRes";
    };
    Tile2DianZanTrait.prototype.getAnimName = function () {
        return "" + (this.traitData.animPrefix || "in_") + (Math.floor(5 * Math.random()) + 1);
    };
    Tile2DianZanTrait.prototype.getScale = function () {
        return this.traitData.scale || 1;
    };
    Tile2DianZanTrait.prototype.onTile2DZanBhv_spUrl = function (t, e) {
        var n, r = null === (n = t.args) || void 0 === n ? void 0 : n[0];
        e({
            isBreak: true,
            returnType: TraitCallbackReturnType.return,
            returnVal: this.getSpineUrl(r)
        });
    };
    Tile2DianZanTrait.prototype.onTile2DZanBhv_spBundle = function (t, e) {
        var n, r = null === (n = t.args) || void 0 === n ? void 0 : n[0];
        e({
            isBreak: true,
            returnType: TraitCallbackReturnType.return,
            returnVal: this.getSpineBundleName(r)
        });
    };
    Tile2DianZanTrait.prototype.onTile2DZanBhv_animName = function (t, e) {
        var n, r = null === (n = t.args) || void 0 === n ? void 0 : n[0];
        e({
            isBreak: true,
            returnType: TraitCallbackReturnType.return,
            returnVal: this.getAnimName(r)
        });
    };
    Tile2DianZanTrait.prototype.onTile2DZanBhv_scale = function (t, e) {
        var n, r = null === (n = t.args) || void 0 === n ? void 0 : n[0];
        e({
            isBreak: true,
            returnType: TraitCallbackReturnType.return,
            returnVal: this.getScale(r)
        });
    };
    Tile2DianZanTrait.traitKey = "Tile2DianZan";
    Tile2DianZanTrait = __decorate([
        mj.trait,
        mj.class("Tile2DianZanTrait")
    ], Tile2DianZanTrait);
    return Tile2DianZanTrait;
}(Trait_1.default));
exports.default = Tile2DianZanTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2RpYW56YW4vU2NyaXB0cy9UaWxlMkRpYW5aYW5UcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELHNFQUFpRTtBQUdqRTtJQUErQyxxQ0FBSztJQUFwRDs7SUE4REEsQ0FBQztJQTVEQyxrQ0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0Qsb0RBQXdCLEdBQXhCLFVBQXlCLENBQUMsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxFQUNILENBQUMsR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxtQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLGtCQUFrQixFQUFFLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkgsQ0FBQyxDQUFDO1lBQ0EsT0FBTyxFQUFFLElBQUk7WUFDYixVQUFVLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtZQUMxQyxTQUFTLEVBQUUsQ0FBQyxHQUFHLENBQUM7U0FDakIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELHVDQUFXLEdBQVg7UUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxJQUFJLDZCQUE2QixDQUFDO0lBQ2xFLENBQUM7SUFDRCw4Q0FBa0IsR0FBbEI7UUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxJQUFJLFNBQVMsQ0FBQztJQUNqRCxDQUFDO0lBQ0QsdUNBQVcsR0FBWDtRQUNFLE9BQU8sRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN6RixDQUFDO0lBQ0Qsb0NBQVEsR0FBUjtRQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFDRCxnREFBb0IsR0FBcEIsVUFBcUIsQ0FBQyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLEVBQ0gsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVELENBQUMsQ0FBQztZQUNBLE9BQU8sRUFBRSxJQUFJO1lBQ2IsVUFBVSxFQUFFLHVCQUF1QixDQUFDLE1BQU07WUFDMUMsU0FBUyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1NBQy9CLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxtREFBdUIsR0FBdkIsVUFBd0IsQ0FBQyxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLEVBQ0gsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVELENBQUMsQ0FBQztZQUNBLE9BQU8sRUFBRSxJQUFJO1lBQ2IsVUFBVSxFQUFFLHVCQUF1QixDQUFDLE1BQU07WUFDMUMsU0FBUyxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7U0FDdEMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELG1EQUF1QixHQUF2QixVQUF3QixDQUFDLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsRUFDSCxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUQsQ0FBQyxDQUFDO1lBQ0EsT0FBTyxFQUFFLElBQUk7WUFDYixVQUFVLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtZQUMxQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7U0FDL0IsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELGdEQUFvQixHQUFwQixVQUFxQixDQUFDLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsRUFDSCxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUQsQ0FBQyxDQUFDO1lBQ0EsT0FBTyxFQUFFLElBQUk7WUFDYixVQUFVLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtZQUMxQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7U0FDNUIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQTVETSwwQkFBUSxHQUFHLGNBQWMsQ0FBQztJQURkLGlCQUFpQjtRQUZyQyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsbUJBQW1CLENBQUM7T0FDVCxpQkFBaUIsQ0E4RHJDO0lBQUQsd0JBQUM7Q0E5REQsQUE4REMsQ0E5RDhDLGVBQUssR0E4RG5EO2tCQTlEb0IsaUJBQWlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS91c2VyL1VzZXJNb2RlbCc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIlRpbGUyRGlhblphblRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaWxlMkRpYW5aYW5UcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJUaWxlMkRpYW5aYW5cIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICB9XG4gIG9uVDJEaWFuWkNoZWNrX2lzRGlhblphbih0LCBlKSB7XG4gICAgdmFyIG4sXG4gICAgICByID0gKG51bGwgPT09IChuID0gVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0Q3VycmVudEdhbWVEYXRhKCkpIHx8IHZvaWQgMCA9PT0gbiA/IHZvaWQgMCA6IG4uZ2V0TGV2ZWxJZCgpKSB8fCAwO1xuICAgIGUoe1xuICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgIHJldHVyblZhbDogciA+IDFcbiAgICB9KTtcbiAgfVxuICBnZXRTcGluZVVybCgpIHtcbiAgICByZXR1cm4gdGhpcy50cmFpdERhdGEuc3BpbmVVcmwgfHwgXCJzcGluZS9kaWFuemFuL2dhbWVwbGF5X2hhbmRcIjtcbiAgfVxuICBnZXRTcGluZUJ1bmRsZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHJhaXREYXRhLnNwaW5lQnVuZGxlIHx8IFwibWFpblJlc1wiO1xuICB9XG4gIGdldEFuaW1OYW1lKCkge1xuICAgIHJldHVybiBcIlwiICsgKHRoaXMudHJhaXREYXRhLmFuaW1QcmVmaXggfHwgXCJpbl9cIikgKyAoTWF0aC5mbG9vcig1ICogTWF0aC5yYW5kb20oKSkgKyAxKTtcbiAgfVxuICBnZXRTY2FsZSgpIHtcbiAgICByZXR1cm4gdGhpcy50cmFpdERhdGEuc2NhbGUgfHwgMTtcbiAgfVxuICBvblRpbGUyRFphbkJodl9zcFVybCh0LCBlKSB7XG4gICAgdmFyIG4sXG4gICAgICByID0gbnVsbCA9PT0gKG4gPSB0LmFyZ3MpIHx8IHZvaWQgMCA9PT0gbiA/IHZvaWQgMCA6IG5bMF07XG4gICAgZSh7XG4gICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgcmV0dXJuVmFsOiB0aGlzLmdldFNwaW5lVXJsKHIpXG4gICAgfSk7XG4gIH1cbiAgb25UaWxlMkRaYW5CaHZfc3BCdW5kbGUodCwgZSkge1xuICAgIHZhciBuLFxuICAgICAgciA9IG51bGwgPT09IChuID0gdC5hcmdzKSB8fCB2b2lkIDAgPT09IG4gPyB2b2lkIDAgOiBuWzBdO1xuICAgIGUoe1xuICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgIHJldHVyblZhbDogdGhpcy5nZXRTcGluZUJ1bmRsZU5hbWUocilcbiAgICB9KTtcbiAgfVxuICBvblRpbGUyRFphbkJodl9hbmltTmFtZSh0LCBlKSB7XG4gICAgdmFyIG4sXG4gICAgICByID0gbnVsbCA9PT0gKG4gPSB0LmFyZ3MpIHx8IHZvaWQgMCA9PT0gbiA/IHZvaWQgMCA6IG5bMF07XG4gICAgZSh7XG4gICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgcmV0dXJuVmFsOiB0aGlzLmdldEFuaW1OYW1lKHIpXG4gICAgfSk7XG4gIH1cbiAgb25UaWxlMkRaYW5CaHZfc2NhbGUodCwgZSkge1xuICAgIHZhciBuLFxuICAgICAgciA9IG51bGwgPT09IChuID0gdC5hcmdzKSB8fCB2b2lkIDAgPT09IG4gPyB2b2lkIDAgOiBuWzBdO1xuICAgIGUoe1xuICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgIHJldHVyblZhbDogdGhpcy5nZXRTY2FsZShyKVxuICAgIH0pO1xuICB9XG59Il19