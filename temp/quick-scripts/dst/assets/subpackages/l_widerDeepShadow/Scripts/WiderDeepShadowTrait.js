
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_widerDeepShadow/Scripts/WiderDeepShadowTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '456eeFd1YJEzZDdnkGRF/Yf', 'WiderDeepShadowTrait');
// subpackages/l_widerDeepShadow/Scripts/WiderDeepShadowTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var WiderDeepShadowTrait = /** @class */ (function (_super) {
    __extends(WiderDeepShadowTrait, _super);
    function WiderDeepShadowTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WiderDeepShadowTrait_1 = WiderDeepShadowTrait;
    WiderDeepShadowTrait.prototype.onCardUtil_atlasPathBundle = function (t, r) {
        var a;
        try {
            var i = null === (a = t.args) || void 0 === a ? void 0 : a[0];
            if ("gameplay_img_shadow_dn" === i || "gameplay_img_shadow_up" === i) {
                r({
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    isBreak: true,
                    returnVal: {
                        path: "texture/" + i,
                        bundleName: WiderDeepShadowTrait_1.BUNDLE_NAME,
                        fromAtlas: false
                    }
                });
                return;
            }
            r();
        }
        catch (t) {
            r();
        }
    };
    WiderDeepShadowTrait.prototype.onMainGameCtrl_crtCardLyt = function (t, r) {
        try {
            var e = t.beforReturnVal;
            if (e) {
                e.shadowSize = [this.traitData.shadowWith || 219, this.traitData.shadowHeight || 263];
                e.shadowSizeUp = [this.traitData.shadowWith || 219, this.traitData.shadowHeight || 263];
            }
        }
        catch (t) { }
        r();
    };
    var WiderDeepShadowTrait_1;
    WiderDeepShadowTrait.traitKey = "WiderDeepShadow";
    WiderDeepShadowTrait.BUNDLE_NAME = "l_widerDeepShadow";
    WiderDeepShadowTrait = WiderDeepShadowTrait_1 = __decorate([
        mj.trait,
        mj.class("WiderDeepShadowTrait")
    ], WiderDeepShadowTrait);
    return WiderDeepShadowTrait;
}(Trait_1.default));
exports.default = WiderDeepShadowTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3dpZGVyRGVlcFNoYWRvdy9TY3JpcHRzL1dpZGVyRGVlcFNoYWRvd1RyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFDM0QsOEVBQXdGO0FBR3hGO0lBQWtELHdDQUFLO0lBQXZEOztJQWtDQSxDQUFDOzZCQWxDb0Isb0JBQW9CO0lBR3ZDLHlEQUEwQixHQUExQixVQUEyQixDQUFDLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsQ0FBQztRQUNOLElBQUk7WUFDRixJQUFJLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5RCxJQUFJLHdCQUF3QixLQUFLLENBQUMsSUFBSSx3QkFBd0IsS0FBSyxDQUFDLEVBQUU7Z0JBQ3BFLENBQUMsQ0FBQztvQkFDQSxVQUFVLEVBQUUsc0NBQXVCLENBQUMsTUFBTTtvQkFDMUMsT0FBTyxFQUFFLElBQUk7b0JBQ2IsU0FBUyxFQUFFO3dCQUNULElBQUksRUFBRSxVQUFVLEdBQUcsQ0FBQzt3QkFDcEIsVUFBVSxFQUFFLHNCQUFvQixDQUFDLFdBQVc7d0JBQzVDLFNBQVMsRUFBRSxLQUFLO3FCQUNqQjtpQkFDRixDQUFDLENBQUM7Z0JBQ0gsT0FBTzthQUNSO1lBQ0QsQ0FBQyxFQUFFLENBQUM7U0FDTDtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsQ0FBQyxFQUFFLENBQUM7U0FDTDtJQUNILENBQUM7SUFDRCx3REFBeUIsR0FBekIsVUFBMEIsQ0FBQyxFQUFFLENBQUM7UUFDNUIsSUFBSTtZQUNGLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxjQUFjLENBQUM7WUFDekIsSUFBSSxDQUFDLEVBQUU7Z0JBQ0wsQ0FBQyxDQUFDLFVBQVUsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxJQUFJLEdBQUcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksSUFBSSxHQUFHLENBQUMsQ0FBQztnQkFDdEYsQ0FBQyxDQUFDLFlBQVksR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxJQUFJLEdBQUcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksSUFBSSxHQUFHLENBQUMsQ0FBQzthQUN6RjtTQUNGO1FBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRTtRQUNkLENBQUMsRUFBRSxDQUFDO0lBQ04sQ0FBQzs7SUFoQ00sNkJBQVEsR0FBRyxpQkFBaUIsQ0FBQztJQUM3QixnQ0FBVyxHQUFHLG1CQUFtQixDQUFDO0lBRnRCLG9CQUFvQjtRQUZ4QyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsc0JBQXNCLENBQUM7T0FDWixvQkFBb0IsQ0FrQ3hDO0lBQUQsMkJBQUM7Q0FsQ0QsQUFrQ0MsQ0FsQ2lELGVBQUssR0FrQ3REO2tCQWxDb0Isb0JBQW9CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCB7IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXRNYW5hZ2VyJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiV2lkZXJEZWVwU2hhZG93VHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdpZGVyRGVlcFNoYWRvd1RyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIldpZGVyRGVlcFNoYWRvd1wiO1xuICBzdGF0aWMgQlVORExFX05BTUUgPSBcImxfd2lkZXJEZWVwU2hhZG93XCI7XG4gIG9uQ2FyZFV0aWxfYXRsYXNQYXRoQnVuZGxlKHQsIHIpIHtcbiAgICB2YXIgYTtcbiAgICB0cnkge1xuICAgICAgdmFyIGkgPSBudWxsID09PSAoYSA9IHQuYXJncykgfHwgdm9pZCAwID09PSBhID8gdm9pZCAwIDogYVswXTtcbiAgICAgIGlmIChcImdhbWVwbGF5X2ltZ19zaGFkb3dfZG5cIiA9PT0gaSB8fCBcImdhbWVwbGF5X2ltZ19zaGFkb3dfdXBcIiA9PT0gaSkge1xuICAgICAgICByKHtcbiAgICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgICByZXR1cm5WYWw6IHtcbiAgICAgICAgICAgIHBhdGg6IFwidGV4dHVyZS9cIiArIGksXG4gICAgICAgICAgICBidW5kbGVOYW1lOiBXaWRlckRlZXBTaGFkb3dUcmFpdC5CVU5ETEVfTkFNRSxcbiAgICAgICAgICAgIGZyb21BdGxhczogZmFsc2VcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICByKCk7XG4gICAgfSBjYXRjaCAodCkge1xuICAgICAgcigpO1xuICAgIH1cbiAgfVxuICBvbk1haW5HYW1lQ3RybF9jcnRDYXJkTHl0KHQsIHIpIHtcbiAgICB0cnkge1xuICAgICAgdmFyIGUgPSB0LmJlZm9yUmV0dXJuVmFsO1xuICAgICAgaWYgKGUpIHtcbiAgICAgICAgZS5zaGFkb3dTaXplID0gW3RoaXMudHJhaXREYXRhLnNoYWRvd1dpdGggfHwgMjE5LCB0aGlzLnRyYWl0RGF0YS5zaGFkb3dIZWlnaHQgfHwgMjYzXTtcbiAgICAgICAgZS5zaGFkb3dTaXplVXAgPSBbdGhpcy50cmFpdERhdGEuc2hhZG93V2l0aCB8fCAyMTksIHRoaXMudHJhaXREYXRhLnNoYWRvd0hlaWdodCB8fCAyNjNdO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKHQpIHt9XG4gICAgcigpO1xuICB9XG59Il19