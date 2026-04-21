
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_guideDragZ/Scripts/GuideDragZTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5c8cdB2lQVO6oVSayJeltRV', 'GuideDragZTrait');
// subpackages/l_guideDragZ/Scripts/GuideDragZTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var GuideDragZTrait = /** @class */ (function (_super) {
    __extends(GuideDragZTrait, _super);
    function GuideDragZTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GuideDragZTrait_1 = GuideDragZTrait;
    GuideDragZTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    GuideDragZTrait.prototype.onGuideBhv_start = function (t, r) {
        var o;
        try {
            var i = t.ins, n = null === (o = null == i ? void 0 : i.context) || void 0 === o ? void 0 : o.gameView;
            if (n) {
                var a = n.guideRootNode, u = n.nodeDragCardRoot;
                if (a && u) {
                    var c = a.getSiblingIndex(), f = u.getSiblingIndex();
                    c > f && a.setSiblingIndex(f);
                }
            }
            r();
        }
        catch (t) {
            console.error("[" + GuideDragZTrait_1.traitKey + "] 调整引导层级失败: " + (null == t ? void 0 : t.message));
            r();
        }
    };
    var GuideDragZTrait_1;
    GuideDragZTrait.traitKey = "GuideDragZ";
    GuideDragZTrait = GuideDragZTrait_1 = __decorate([
        mj.trait,
        mj.class("GuideDragZTrait")
    ], GuideDragZTrait);
    return GuideDragZTrait;
}(Trait_1.default));
exports.default = GuideDragZTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2d1aWRlRHJhZ1ovU2NyaXB0cy9HdWlkZURyYWdaVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUczRDtJQUE2QyxtQ0FBSztJQUFsRDs7SUF5QkEsQ0FBQzt3QkF6Qm9CLGVBQWU7SUFFbEMsZ0NBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNELDBDQUFnQixHQUFoQixVQUFpQixDQUFDLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsQ0FBQztRQUNOLElBQUk7WUFDRixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUNYLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO1lBQzFGLElBQUksQ0FBQyxFQUFFO2dCQUNMLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxhQUFhLEVBQ3JCLENBQUMsR0FBRyxDQUFDLENBQUMsZ0JBQWdCLENBQUM7Z0JBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtvQkFDVixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsZUFBZSxFQUFFLEVBQ3pCLENBQUMsR0FBRyxDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7b0JBQzFCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDL0I7YUFDRjtZQUNELENBQUMsRUFBRSxDQUFDO1NBQ0w7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLGlCQUFlLENBQUMsUUFBUSxHQUFHLGNBQWMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNsRyxDQUFDLEVBQUUsQ0FBQztTQUNMO0lBQ0gsQ0FBQzs7SUF2Qk0sd0JBQVEsR0FBRyxZQUFZLENBQUM7SUFEWixlQUFlO1FBRm5DLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQztPQUNQLGVBQWUsQ0F5Qm5DO0lBQUQsc0JBQUM7Q0F6QkQsQUF5QkMsQ0F6QjRDLGVBQUssR0F5QmpEO2tCQXpCb0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIkd1aWRlRHJhZ1pUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3VpZGVEcmFnWlRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIkd1aWRlRHJhZ1pcIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICB9XG4gIG9uR3VpZGVCaHZfc3RhcnQodCwgcikge1xuICAgIHZhciBvO1xuICAgIHRyeSB7XG4gICAgICB2YXIgaSA9IHQuaW5zLFxuICAgICAgICBuID0gbnVsbCA9PT0gKG8gPSBudWxsID09IGkgPyB2b2lkIDAgOiBpLmNvbnRleHQpIHx8IHZvaWQgMCA9PT0gbyA/IHZvaWQgMCA6IG8uZ2FtZVZpZXc7XG4gICAgICBpZiAobikge1xuICAgICAgICB2YXIgYSA9IG4uZ3VpZGVSb290Tm9kZSxcbiAgICAgICAgICB1ID0gbi5ub2RlRHJhZ0NhcmRSb290O1xuICAgICAgICBpZiAoYSAmJiB1KSB7XG4gICAgICAgICAgdmFyIGMgPSBhLmdldFNpYmxpbmdJbmRleCgpLFxuICAgICAgICAgICAgZiA9IHUuZ2V0U2libGluZ0luZGV4KCk7XG4gICAgICAgICAgYyA+IGYgJiYgYS5zZXRTaWJsaW5nSW5kZXgoZik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHIoKTtcbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiW1wiICsgR3VpZGVEcmFnWlRyYWl0LnRyYWl0S2V5ICsgXCJdIOiwg+aVtOW8leWvvOWxgue6p+Wksei0pTogXCIgKyAobnVsbCA9PSB0ID8gdm9pZCAwIDogdC5tZXNzYWdlKSk7XG4gICAgICByKCk7XG4gICAgfVxuICB9XG59Il19