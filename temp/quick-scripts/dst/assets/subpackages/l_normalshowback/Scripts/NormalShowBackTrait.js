
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_normalshowback/Scripts/NormalShowBackTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '57d0dUSZwFJ/4t9w8YBEnqd', 'NormalShowBackTrait');
// subpackages/l_normalshowback/Scripts/NormalShowBackTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var TileTypeEnum_1 = require("../../../Scripts/simulator/constant/TileTypeEnum");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var NormalShowBackTrait = /** @class */ (function (_super) {
    __extends(NormalShowBackTrait, _super);
    function NormalShowBackTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NormalShowBackTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    NormalShowBackTrait.prototype.onBaseTileNode_upAnimMgr = function (e, t) {
        var o, i, r, a, p = e.ins;
        if (p.context.gameType == GameTypeEnums_1.MjGameType.Normal) {
            var s = null === (i = null === (o = p.context) || void 0 === o ? void 0 : o.gameView) || void 0 === i ? void 0 : i.delegate;
            s && s.loadRes("spine/spinebase/gameplay_flip_regular", sp.SkeletonData, "l_normalshowback");
            if (p.info.tileObject.type === TileTypeEnum_1.ETileType.Normal || p.info.tileObject.type === TileTypeEnum_1.ETileType.Bomb) {
                p.updateNormalFlip();
                if (p.info.tileObject.isCardLock()) {
                    null === (r = p.normalFlip) || void 0 === r || r.forceExit();
                }
                else {
                    null === (a = p.normalFlip) || void 0 === a || a.forceEnter();
                }
            }
            t();
        }
        else
            t();
    };
    NormalShowBackTrait.prototype.onClearBhv_collision = function (e, t) {
        var o = e.ins;
        if (o.context.gameType == GameTypeEnums_1.MjGameType.Normal) {
            o.context.getTileNodeManager().getTileNodes().forEach(function (e) {
                var t = e.normalFlip;
                !t || t.hasRun || e.info.tileObject.isCardLock() || t.tryPlayAni();
            });
            t();
        }
        else
            t();
    };
    NormalShowBackTrait.prototype.getAnimCfg = function () {
        return {
            path: "spine/spinebase/gameplay_flip_regular",
            anims: ["normal_in_1", "normal_in_2"],
            bundleName: "l_normalshowback"
        };
    };
    NormalShowBackTrait.prototype.onNorFlipStateAni_spineCfg = function (e, t) {
        t({
            returnVal: this.getAnimCfg(),
            isBreak: true,
            returnType: TraitCallbackReturnType.jump
        });
    };
    NormalShowBackTrait.prototype.onTileNodeObj_reToNormal = function (e, t) {
        var o, i = e.ins;
        if (i.context.gameType == GameTypeEnums_1.MjGameType.Normal) {
            null === (o = i.normalFlip) || void 0 === o || o.forceEnter();
            t();
        }
        else
            t();
    };
    NormalShowBackTrait.traitKey = "NormalShowBack";
    NormalShowBackTrait = __decorate([
        mj.trait,
        mj.class("NormalShowBackTrait")
    ], NormalShowBackTrait);
    return NormalShowBackTrait;
}(Trait_1.default));
exports.default = NormalShowBackTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX25vcm1hbHNob3diYWNrL1NjcmlwdHMvTm9ybWFsU2hvd0JhY2tUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0ZBQW9GO0FBQ3BGLGlGQUE2RTtBQUM3RSxnRUFBMkQ7QUFHM0Q7SUFBaUQsdUNBQUs7SUFBdEQ7O0lBeURBLENBQUM7SUF2REMsb0NBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNELHNEQUF3QixHQUF4QixVQUF5QixDQUFDLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsRUFDSCxDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsRUFDRCxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUNaLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLElBQUksMEJBQVUsQ0FBQyxNQUFNLEVBQUU7WUFDM0MsSUFBSSxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7WUFDNUgsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsdUNBQXVDLEVBQUUsRUFBRSxDQUFDLFlBQVksRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1lBQzdGLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLHdCQUFTLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksS0FBSyx3QkFBUyxDQUFDLElBQUksRUFBRTtnQkFDNUYsQ0FBQyxDQUFDLGdCQUFnQixFQUFFLENBQUM7Z0JBQ3JCLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLEVBQUU7b0JBQ2xDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztpQkFDOUQ7cUJBQU07b0JBQ0wsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO2lCQUMvRDthQUNGO1lBQ0QsQ0FBQyxFQUFFLENBQUM7U0FDTDs7WUFBTSxDQUFDLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFDRCxrREFBb0IsR0FBcEIsVUFBcUIsQ0FBQyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUNkLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLElBQUksMEJBQVUsQ0FBQyxNQUFNLEVBQUU7WUFDM0MsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7Z0JBQy9ELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUM7Z0JBQ3JCLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ3JFLENBQUMsQ0FBQyxDQUFDO1lBQ0gsQ0FBQyxFQUFFLENBQUM7U0FDTDs7WUFBTSxDQUFDLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFDRCx3Q0FBVSxHQUFWO1FBQ0UsT0FBTztZQUNMLElBQUksRUFBRSx1Q0FBdUM7WUFDN0MsS0FBSyxFQUFFLENBQUMsYUFBYSxFQUFFLGFBQWEsQ0FBQztZQUNyQyxVQUFVLEVBQUUsa0JBQWtCO1NBQy9CLENBQUM7SUFDSixDQUFDO0lBQ0Qsd0RBQTBCLEdBQTFCLFVBQTJCLENBQUMsRUFBRSxDQUFDO1FBQzdCLENBQUMsQ0FBQztZQUNBLFNBQVMsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQzVCLE9BQU8sRUFBRSxJQUFJO1lBQ2IsVUFBVSxFQUFFLHVCQUF1QixDQUFDLElBQUk7U0FDekMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELHNEQUF3QixHQUF4QixVQUF5QixDQUFDLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsRUFDSCxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUNaLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLElBQUksMEJBQVUsQ0FBQyxNQUFNLEVBQUU7WUFDM0MsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQzlELENBQUMsRUFBRSxDQUFDO1NBQ0w7O1lBQU0sQ0FBQyxFQUFFLENBQUM7SUFDYixDQUFDO0lBdkRNLDRCQUFRLEdBQUcsZ0JBQWdCLENBQUM7SUFEaEIsbUJBQW1CO1FBRnZDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQztPQUNYLG1CQUFtQixDQXlEdkM7SUFBRCwwQkFBQztDQXpERCxBQXlEQyxDQXpEZ0QsZUFBSyxHQXlEckQ7a0JBekRvQixtQkFBbUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNakdhbWVUeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbmltcG9ydCB7IEVUaWxlVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvc2ltdWxhdG9yL2NvbnN0YW50L1RpbGVUeXBlRW51bSc7XG5pbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJOb3JtYWxTaG93QmFja1RyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb3JtYWxTaG93QmFja1RyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIk5vcm1hbFNob3dCYWNrXCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgfVxuICBvbkJhc2VUaWxlTm9kZV91cEFuaW1NZ3IoZSwgdCkge1xuICAgIHZhciBvLFxuICAgICAgaSxcbiAgICAgIHIsXG4gICAgICBhLFxuICAgICAgcCA9IGUuaW5zO1xuICAgIGlmIChwLmNvbnRleHQuZ2FtZVR5cGUgPT0gTWpHYW1lVHlwZS5Ob3JtYWwpIHtcbiAgICAgIHZhciBzID0gbnVsbCA9PT0gKGkgPSBudWxsID09PSAobyA9IHAuY29udGV4dCkgfHwgdm9pZCAwID09PSBvID8gdm9pZCAwIDogby5nYW1lVmlldykgfHwgdm9pZCAwID09PSBpID8gdm9pZCAwIDogaS5kZWxlZ2F0ZTtcbiAgICAgIHMgJiYgcy5sb2FkUmVzKFwic3BpbmUvc3BpbmViYXNlL2dhbWVwbGF5X2ZsaXBfcmVndWxhclwiLCBzcC5Ta2VsZXRvbkRhdGEsIFwibF9ub3JtYWxzaG93YmFja1wiKTtcbiAgICAgIGlmIChwLmluZm8udGlsZU9iamVjdC50eXBlID09PSBFVGlsZVR5cGUuTm9ybWFsIHx8IHAuaW5mby50aWxlT2JqZWN0LnR5cGUgPT09IEVUaWxlVHlwZS5Cb21iKSB7XG4gICAgICAgIHAudXBkYXRlTm9ybWFsRmxpcCgpO1xuICAgICAgICBpZiAocC5pbmZvLnRpbGVPYmplY3QuaXNDYXJkTG9jaygpKSB7XG4gICAgICAgICAgbnVsbCA9PT0gKHIgPSBwLm5vcm1hbEZsaXApIHx8IHZvaWQgMCA9PT0gciB8fCByLmZvcmNlRXhpdCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG51bGwgPT09IChhID0gcC5ub3JtYWxGbGlwKSB8fCB2b2lkIDAgPT09IGEgfHwgYS5mb3JjZUVudGVyKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHQoKTtcbiAgICB9IGVsc2UgdCgpO1xuICB9XG4gIG9uQ2xlYXJCaHZfY29sbGlzaW9uKGUsIHQpIHtcbiAgICB2YXIgbyA9IGUuaW5zO1xuICAgIGlmIChvLmNvbnRleHQuZ2FtZVR5cGUgPT0gTWpHYW1lVHlwZS5Ob3JtYWwpIHtcbiAgICAgIG8uY29udGV4dC5nZXRUaWxlTm9kZU1hbmFnZXIoKS5nZXRUaWxlTm9kZXMoKS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciB0ID0gZS5ub3JtYWxGbGlwO1xuICAgICAgICAhdCB8fCB0Lmhhc1J1biB8fCBlLmluZm8udGlsZU9iamVjdC5pc0NhcmRMb2NrKCkgfHwgdC50cnlQbGF5QW5pKCk7XG4gICAgICB9KTtcbiAgICAgIHQoKTtcbiAgICB9IGVsc2UgdCgpO1xuICB9XG4gIGdldEFuaW1DZmcoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhdGg6IFwic3BpbmUvc3BpbmViYXNlL2dhbWVwbGF5X2ZsaXBfcmVndWxhclwiLFxuICAgICAgYW5pbXM6IFtcIm5vcm1hbF9pbl8xXCIsIFwibm9ybWFsX2luXzJcIl0sXG4gICAgICBidW5kbGVOYW1lOiBcImxfbm9ybWFsc2hvd2JhY2tcIlxuICAgIH07XG4gIH1cbiAgb25Ob3JGbGlwU3RhdGVBbmlfc3BpbmVDZmcoZSwgdCkge1xuICAgIHQoe1xuICAgICAgcmV0dXJuVmFsOiB0aGlzLmdldEFuaW1DZmcoKSxcbiAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5qdW1wXG4gICAgfSk7XG4gIH1cbiAgb25UaWxlTm9kZU9ial9yZVRvTm9ybWFsKGUsIHQpIHtcbiAgICB2YXIgbyxcbiAgICAgIGkgPSBlLmlucztcbiAgICBpZiAoaS5jb250ZXh0LmdhbWVUeXBlID09IE1qR2FtZVR5cGUuTm9ybWFsKSB7XG4gICAgICBudWxsID09PSAobyA9IGkubm9ybWFsRmxpcCkgfHwgdm9pZCAwID09PSBvIHx8IG8uZm9yY2VFbnRlcigpO1xuICAgICAgdCgpO1xuICAgIH0gZWxzZSB0KCk7XG4gIH1cbn0iXX0=