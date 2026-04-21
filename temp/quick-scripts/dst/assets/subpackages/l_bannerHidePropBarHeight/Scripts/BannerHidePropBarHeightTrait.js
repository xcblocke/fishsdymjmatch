
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_bannerHidePropBarHeight/Scripts/BannerHidePropBarHeightTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6fb3cFlOVhJiq6Jx/5UX2Wa', 'BannerHidePropBarHeightTrait');
// subpackages/l_bannerHidePropBarHeight/Scripts/BannerHidePropBarHeightTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var BannerHidePropBarHeightTrait = /** @class */ (function (_super) {
    __extends(BannerHidePropBarHeightTrait, _super);
    function BannerHidePropBarHeightTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BannerHidePropBarHeightTrait.prototype.onAdMgr_showBanner = function (t, r) {
        r({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return
        });
    };
    BannerHidePropBarHeightTrait.prototype.onGameUI_onLoad = function (t, r) {
        var e, i, o = t.ins;
        if (o && cc.isValid(o.node)) {
            var n = o.node.getChildByName("nodeBottom");
            if (n && cc.isValid(n)) {
                var a = n.getComponent(cc.Widget);
                if (a) {
                    void 0 !== (null === (e = this.traitData) || void 0 === e ? void 0 : e.propBarHeight) && (a.bottom = (null === (i = this.traitData) || void 0 === i ? void 0 : i.propBarHeight) - 85);
                    r();
                }
                else
                    r();
            }
            else
                r();
        }
        else
            r();
    };
    BannerHidePropBarHeightTrait.traitKey = "BannerHidePropBarHeight";
    BannerHidePropBarHeightTrait = __decorate([
        mj.trait,
        mj.class("BannerHidePropBarHeightTrait")
    ], BannerHidePropBarHeightTrait);
    return BannerHidePropBarHeightTrait;
}(Trait_1.default));
exports.default = BannerHidePropBarHeightTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2Jhbm5lckhpZGVQcm9wQmFySGVpZ2h0L1NjcmlwdHMvQmFubmVySGlkZVByb3BCYXJIZWlnaHRUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELDhFQUF3RjtBQUd4RjtJQUEwRCxnREFBSztJQUEvRDs7SUF1QkEsQ0FBQztJQXJCQyx5REFBa0IsR0FBbEIsVUFBbUIsQ0FBQyxFQUFFLENBQUM7UUFDckIsQ0FBQyxDQUFDO1lBQ0EsT0FBTyxFQUFFLElBQUk7WUFDYixVQUFVLEVBQUUsc0NBQXVCLENBQUMsTUFBTTtTQUMzQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0Qsc0RBQWUsR0FBZixVQUFnQixDQUFDLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsRUFDSCxDQUFDLEVBQ0QsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDWixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUMzQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUM1QyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUN0QixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDbEMsSUFBSSxDQUFDLEVBQUU7b0JBQ0wsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztvQkFDdEwsQ0FBQyxFQUFFLENBQUM7aUJBQ0w7O29CQUFNLENBQUMsRUFBRSxDQUFDO2FBQ1o7O2dCQUFNLENBQUMsRUFBRSxDQUFDO1NBQ1o7O1lBQU0sQ0FBQyxFQUFFLENBQUM7SUFDYixDQUFDO0lBckJNLHFDQUFRLEdBQUcseUJBQXlCLENBQUM7SUFEekIsNEJBQTRCO1FBRmhELEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyw4QkFBOEIsQ0FBQztPQUNwQiw0QkFBNEIsQ0F1QmhEO0lBQUQsbUNBQUM7Q0F2QkQsQUF1QkMsQ0F2QnlELGVBQUssR0F1QjlEO2tCQXZCb0IsNEJBQTRCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCB7IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXRNYW5hZ2VyJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiQmFubmVySGlkZVByb3BCYXJIZWlnaHRUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFubmVySGlkZVByb3BCYXJIZWlnaHRUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJCYW5uZXJIaWRlUHJvcEJhckhlaWdodFwiO1xuICBvbkFkTWdyX3Nob3dCYW5uZXIodCwgcikge1xuICAgIHIoe1xuICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVyblxuICAgIH0pO1xuICB9XG4gIG9uR2FtZVVJX29uTG9hZCh0LCByKSB7XG4gICAgdmFyIGUsXG4gICAgICBpLFxuICAgICAgbyA9IHQuaW5zO1xuICAgIGlmIChvICYmIGNjLmlzVmFsaWQoby5ub2RlKSkge1xuICAgICAgdmFyIG4gPSBvLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJub2RlQm90dG9tXCIpO1xuICAgICAgaWYgKG4gJiYgY2MuaXNWYWxpZChuKSkge1xuICAgICAgICB2YXIgYSA9IG4uZ2V0Q29tcG9uZW50KGNjLldpZGdldCk7XG4gICAgICAgIGlmIChhKSB7XG4gICAgICAgICAgdm9pZCAwICE9PSAobnVsbCA9PT0gKGUgPSB0aGlzLnRyYWl0RGF0YSkgfHwgdm9pZCAwID09PSBlID8gdm9pZCAwIDogZS5wcm9wQmFySGVpZ2h0KSAmJiAoYS5ib3R0b20gPSAobnVsbCA9PT0gKGkgPSB0aGlzLnRyYWl0RGF0YSkgfHwgdm9pZCAwID09PSBpID8gdm9pZCAwIDogaS5wcm9wQmFySGVpZ2h0KSAtIDg1KTtcbiAgICAgICAgICByKCk7XG4gICAgICAgIH0gZWxzZSByKCk7XG4gICAgICB9IGVsc2UgcigpO1xuICAgIH0gZWxzZSByKCk7XG4gIH1cbn0iXX0=