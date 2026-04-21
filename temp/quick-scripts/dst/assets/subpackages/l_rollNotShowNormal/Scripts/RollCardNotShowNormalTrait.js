
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_rollNotShowNormal/Scripts/RollCardNotShowNormalTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'eb2f1TpdSRMA6fM5f5hH3oI', 'RollCardNotShowNormalTrait');
// subpackages/l_rollNotShowNormal/Scripts/RollCardNotShowNormalTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var TileTypeEnum_1 = require("../../../Scripts/simulator/constant/TileTypeEnum");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var RollCardNotShowNormalTrait = /** @class */ (function (_super) {
    __extends(RollCardNotShowNormalTrait, _super);
    function RollCardNotShowNormalTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RollCardNotShowNormalTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    RollCardNotShowNormalTrait.prototype.onMainGameCtrl_getTile = function (t, r) {
        var e, o = t.ins;
        if ((null !== (e = null == o ? void 0 : o.gameType) && void 0 !== e ? e : GameTypeEnums_1.MjGameType.None) === GameTypeEnums_1.MjGameType.Normal) {
            var n = "string" == typeof t.beforReturnVal ? t.beforReturnVal : "";
            if (n) {
                var i = this.removeOneType(n, TileTypeEnum_1.ETileType.RollCard);
                if (i !== n) {
                    r({
                        isBreak: true,
                        returnType: TraitManager_1.TraitCallbackReturnType.return,
                        returnVal: i
                    });
                }
                else {
                    r();
                }
            }
            else
                r();
        }
        else
            r();
    };
    RollCardNotShowNormalTrait.prototype.removeOneType = function (t, r) {
        if (!t || t.indexOf(r) < 0)
            return t;
        var e = t.split(","), o = e.indexOf(r);
        if (o < 0)
            return t;
        e.splice(o, 1);
        return e.join(",");
    };
    RollCardNotShowNormalTrait.traitKey = "RollCardNotShowNormal";
    RollCardNotShowNormalTrait = __decorate([
        mj.trait,
        mj.class("RollCardNotShowNormalTrait")
    ], RollCardNotShowNormalTrait);
    return RollCardNotShowNormalTrait;
}(Trait_1.default));
exports.default = RollCardNotShowNormalTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3JvbGxOb3RTaG93Tm9ybWFsL1NjcmlwdHMvUm9sbENhcmROb3RTaG93Tm9ybWFsVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdGQUFvRjtBQUNwRixpRkFBNkU7QUFDN0UsZ0VBQTJEO0FBQzNELDhFQUF3RjtBQUd4RjtJQUF3RCw4Q0FBSztJQUE3RDs7SUFnQ0EsQ0FBQztJQTlCQywyQ0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0QsMkRBQXNCLEdBQXRCLFVBQXVCLENBQUMsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxFQUNILENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQ1osSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQywwQkFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLDBCQUFVLENBQUMsTUFBTSxFQUFFO1lBQ2hILElBQUksQ0FBQyxHQUFHLFFBQVEsSUFBSSxPQUFPLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUNwRSxJQUFJLENBQUMsRUFBRTtnQkFDTCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsRUFBRSx3QkFBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNsRCxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7b0JBQ1gsQ0FBQyxDQUFDO3dCQUNBLE9BQU8sRUFBRSxJQUFJO3dCQUNiLFVBQVUsRUFBRSxzQ0FBdUIsQ0FBQyxNQUFNO3dCQUMxQyxTQUFTLEVBQUUsQ0FBQztxQkFDYixDQUFDLENBQUM7aUJBQ0o7cUJBQU07b0JBQ0wsQ0FBQyxFQUFFLENBQUM7aUJBQ0w7YUFDRjs7Z0JBQU0sQ0FBQyxFQUFFLENBQUM7U0FDWjs7WUFBTSxDQUFDLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFDRCxrREFBYSxHQUFiLFVBQWMsQ0FBQyxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7WUFBRSxPQUFPLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUNsQixDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuQixJQUFJLENBQUMsR0FBRyxDQUFDO1lBQUUsT0FBTyxDQUFDLENBQUM7UUFDcEIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDZixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDckIsQ0FBQztJQTlCTSxtQ0FBUSxHQUFHLHVCQUF1QixDQUFDO0lBRHZCLDBCQUEwQjtRQUY5QyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsNEJBQTRCLENBQUM7T0FDbEIsMEJBQTBCLENBZ0M5QztJQUFELGlDQUFDO0NBaENELEFBZ0NDLENBaEN1RCxlQUFLLEdBZ0M1RDtrQkFoQ29CLDBCQUEwQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1qR2FtZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuaW1wb3J0IHsgRVRpbGVUeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9zaW11bGF0b3IvY29uc3RhbnQvVGlsZVR5cGVFbnVtJztcbmltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgeyBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0TWFuYWdlcic7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIlJvbGxDYXJkTm90U2hvd05vcm1hbFRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb2xsQ2FyZE5vdFNob3dOb3JtYWxUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJSb2xsQ2FyZE5vdFNob3dOb3JtYWxcIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICB9XG4gIG9uTWFpbkdhbWVDdHJsX2dldFRpbGUodCwgcikge1xuICAgIHZhciBlLFxuICAgICAgbyA9IHQuaW5zO1xuICAgIGlmICgobnVsbCAhPT0gKGUgPSBudWxsID09IG8gPyB2b2lkIDAgOiBvLmdhbWVUeXBlKSAmJiB2b2lkIDAgIT09IGUgPyBlIDogTWpHYW1lVHlwZS5Ob25lKSA9PT0gTWpHYW1lVHlwZS5Ob3JtYWwpIHtcbiAgICAgIHZhciBuID0gXCJzdHJpbmdcIiA9PSB0eXBlb2YgdC5iZWZvclJldHVyblZhbCA/IHQuYmVmb3JSZXR1cm5WYWwgOiBcIlwiO1xuICAgICAgaWYgKG4pIHtcbiAgICAgICAgdmFyIGkgPSB0aGlzLnJlbW92ZU9uZVR5cGUobiwgRVRpbGVUeXBlLlJvbGxDYXJkKTtcbiAgICAgICAgaWYgKGkgIT09IG4pIHtcbiAgICAgICAgICByKHtcbiAgICAgICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICAgICAgICByZXR1cm5WYWw6IGlcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSByKCk7XG4gICAgfSBlbHNlIHIoKTtcbiAgfVxuICByZW1vdmVPbmVUeXBlKHQsIHIpIHtcbiAgICBpZiAoIXQgfHwgdC5pbmRleE9mKHIpIDwgMCkgcmV0dXJuIHQ7XG4gICAgdmFyIGUgPSB0LnNwbGl0KFwiLFwiKSxcbiAgICAgIG8gPSBlLmluZGV4T2Yocik7XG4gICAgaWYgKG8gPCAwKSByZXR1cm4gdDtcbiAgICBlLnNwbGljZShvLCAxKTtcbiAgICByZXR1cm4gZS5qb2luKFwiLFwiKTtcbiAgfVxufSJdfQ==