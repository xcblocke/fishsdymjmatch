
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_watchAdGetProp/Scripts/WatchAdGetPropNumTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '28596EjYC5Byrq6tcFKmcDm', 'WatchAdGetPropNumTrait');
// subpackages/l_watchAdGetProp/Scripts/WatchAdGetPropNumTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var WatchAdGetPropView_1 = require("./WatchAdGetPropView");
var WatchAdGetPropNumTrait = /** @class */ (function (_super) {
    __extends(WatchAdGetPropNumTrait, _super);
    function WatchAdGetPropNumTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WatchAdGetPropNumTrait.prototype.onWatchAdCtrl_itemNum = function (t, e) {
        var r, o, i, n, s;
        if (UserModel_1.default.getInstance().getCurrentGameType() === GameTypeEnums_1.MjGameType.Tile2Normal) {
            var u, d = t.ins.getPropType(), h = null !== (o = null === (r = this.traitData) || void 0 === r ? void 0 : r.nums) && void 0 !== o ? o : {};
            u = d === WatchAdGetPropView_1.WatchAdGetPropType.shuffle ? null !== (i = h.shuffle) && void 0 !== i ? i : 1 : d === WatchAdGetPropView_1.WatchAdGetPropType.hitTips ? null !== (n = h.hitTips) && void 0 !== n ? n : 1 : null !== (s = h.revert) && void 0 !== s ? s : 1;
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: u
            });
        }
        else
            e();
    };
    WatchAdGetPropNumTrait.traitKey = "WatchAdGetPropNum";
    WatchAdGetPropNumTrait = __decorate([
        mj.trait,
        mj.class("WatchAdGetPropNumTrait")
    ], WatchAdGetPropNumTrait);
    return WatchAdGetPropNumTrait;
}(Trait_1.default));
exports.default = WatchAdGetPropNumTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3dhdGNoQWRHZXRQcm9wL1NjcmlwdHMvV2F0Y2hBZEdldFByb3BOdW1UcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0ZBQW9GO0FBQ3BGLGdFQUEyRDtBQUMzRCw4RUFBd0Y7QUFDeEYsc0VBQWlFO0FBQ2pFLDJEQUEwRDtBQUcxRDtJQUFvRCwwQ0FBSztJQUF6RDs7SUFnQkEsQ0FBQztJQWRDLHNEQUFxQixHQUFyQixVQUFzQixDQUFDLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDbEIsSUFBSSxtQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLGtCQUFrQixFQUFFLEtBQUssMEJBQVUsQ0FBQyxXQUFXLEVBQUU7WUFDM0UsSUFBSSxDQUFDLEVBQ0gsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLEVBQ3ZCLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUM5RyxDQUFDLEdBQUcsQ0FBQyxLQUFLLHVDQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssdUNBQWtCLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoTyxDQUFDLENBQUM7Z0JBQ0EsVUFBVSxFQUFFLHNDQUF1QixDQUFDLE1BQU07Z0JBQzFDLE9BQU8sRUFBRSxJQUFJO2dCQUNiLFNBQVMsRUFBRSxDQUFDO2FBQ2IsQ0FBQyxDQUFDO1NBQ0o7O1lBQU0sQ0FBQyxFQUFFLENBQUM7SUFDYixDQUFDO0lBZE0sK0JBQVEsR0FBRyxtQkFBbUIsQ0FBQztJQURuQixzQkFBc0I7UUFGMUMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLHdCQUF3QixDQUFDO09BQ2Qsc0JBQXNCLENBZ0IxQztJQUFELDZCQUFDO0NBaEJELEFBZ0JDLENBaEJtRCxlQUFLLEdBZ0J4RDtrQkFoQm9CLHNCQUFzQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1qR2FtZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCB7IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXRNYW5hZ2VyJztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS91c2VyL1VzZXJNb2RlbCc7XG5pbXBvcnQgeyBXYXRjaEFkR2V0UHJvcFR5cGUgfSBmcm9tICcuL1dhdGNoQWRHZXRQcm9wVmlldyc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIldhdGNoQWRHZXRQcm9wTnVtVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdhdGNoQWRHZXRQcm9wTnVtVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiV2F0Y2hBZEdldFByb3BOdW1cIjtcbiAgb25XYXRjaEFkQ3RybF9pdGVtTnVtKHQsIGUpIHtcbiAgICB2YXIgciwgbywgaSwgbiwgcztcbiAgICBpZiAoVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0Q3VycmVudEdhbWVUeXBlKCkgPT09IE1qR2FtZVR5cGUuVGlsZTJOb3JtYWwpIHtcbiAgICAgIHZhciB1LFxuICAgICAgICBkID0gdC5pbnMuZ2V0UHJvcFR5cGUoKSxcbiAgICAgICAgaCA9IG51bGwgIT09IChvID0gbnVsbCA9PT0gKHIgPSB0aGlzLnRyYWl0RGF0YSkgfHwgdm9pZCAwID09PSByID8gdm9pZCAwIDogci5udW1zKSAmJiB2b2lkIDAgIT09IG8gPyBvIDoge307XG4gICAgICB1ID0gZCA9PT0gV2F0Y2hBZEdldFByb3BUeXBlLnNodWZmbGUgPyBudWxsICE9PSAoaSA9IGguc2h1ZmZsZSkgJiYgdm9pZCAwICE9PSBpID8gaSA6IDEgOiBkID09PSBXYXRjaEFkR2V0UHJvcFR5cGUuaGl0VGlwcyA/IG51bGwgIT09IChuID0gaC5oaXRUaXBzKSAmJiB2b2lkIDAgIT09IG4gPyBuIDogMSA6IG51bGwgIT09IChzID0gaC5yZXZlcnQpICYmIHZvaWQgMCAhPT0gcyA/IHMgOiAxO1xuICAgICAgZSh7XG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgcmV0dXJuVmFsOiB1XG4gICAgICB9KTtcbiAgICB9IGVsc2UgZSgpO1xuICB9XG59Il19