
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_propShow/Scripts/PropShowTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ec6bckFYeBKwZVbOT9Oya3K', 'PropShowTrait');
// subpackages/l_propShow/Scripts/PropShowTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var PropShowTrait = /** @class */ (function (_super) {
    __extends(PropShowTrait, _super);
    function PropShowTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PropShowTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    PropShowTrait.prototype.onGameUI_onLoad = function (t, e) {
        if (this.isGuideActive())
            e();
        else {
            var r = UserModel_1.default.getInstance().getCurrentGameType(), o = UserModel_1.default.getInstance().getGameDataByGameType(r);
            if (o) {
                if (cc.isValid(t.ins)) {
                    t.ins.updateHitTipsProp(o.getHitTipsNums());
                    t.ins.updateShuffleProp(o.getShuffleNums());
                }
                e();
            }
            else
                e();
        }
    };
    PropShowTrait.prototype.isGuideActive = function () {
        var t = mj.getClassByName("GuideTrait");
        return !(!t || !t.getInstance() || true !== t.getInstance().eventEnabled || UserModel_1.default.getInstance().isGuideFinished());
    };
    PropShowTrait.traitKey = "PropShow";
    PropShowTrait = __decorate([
        mj.trait,
        mj.class("PropShowTrait")
    ], PropShowTrait);
    return PropShowTrait;
}(Trait_1.default));
exports.default = PropShowTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3Byb3BTaG93L1NjcmlwdHMvUHJvcFNob3dUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELHNFQUFpRTtBQUdqRTtJQUEyQyxpQ0FBSztJQUFoRDs7SUFzQkEsQ0FBQztJQXBCQyw4QkFBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0QsdUNBQWUsR0FBZixVQUFnQixDQUFDLEVBQUUsQ0FBQztRQUNsQixJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFBRSxDQUFDLEVBQUUsQ0FBQzthQUFLO1lBQ2pDLElBQUksQ0FBQyxHQUFHLG1CQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsRUFDbEQsQ0FBQyxHQUFHLG1CQUFTLENBQUMsV0FBVyxFQUFFLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkQsSUFBSSxDQUFDLEVBQUU7Z0JBQ0wsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRTtvQkFDckIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztvQkFDNUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztpQkFDN0M7Z0JBQ0QsQ0FBQyxFQUFFLENBQUM7YUFDTDs7Z0JBQU0sQ0FBQyxFQUFFLENBQUM7U0FDWjtJQUNILENBQUM7SUFDRCxxQ0FBYSxHQUFiO1FBQ0UsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN4QyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxJQUFJLEtBQUssQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLFlBQVksSUFBSSxtQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUM7SUFDekgsQ0FBQztJQXBCTSxzQkFBUSxHQUFHLFVBQVUsQ0FBQztJQURWLGFBQWE7UUFGakMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQztPQUNMLGFBQWEsQ0FzQmpDO0lBQUQsb0JBQUM7Q0F0QkQsQUFzQkMsQ0F0QjBDLGVBQUssR0FzQi9DO2tCQXRCb0IsYUFBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvdXNlci9Vc2VyTW9kZWwnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJQcm9wU2hvd1RyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9wU2hvd1RyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIlByb3BTaG93XCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgfVxuICBvbkdhbWVVSV9vbkxvYWQodCwgZSkge1xuICAgIGlmICh0aGlzLmlzR3VpZGVBY3RpdmUoKSkgZSgpO2Vsc2Uge1xuICAgICAgdmFyIHIgPSBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRDdXJyZW50R2FtZVR5cGUoKSxcbiAgICAgICAgbyA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEdhbWVEYXRhQnlHYW1lVHlwZShyKTtcbiAgICAgIGlmIChvKSB7XG4gICAgICAgIGlmIChjYy5pc1ZhbGlkKHQuaW5zKSkge1xuICAgICAgICAgIHQuaW5zLnVwZGF0ZUhpdFRpcHNQcm9wKG8uZ2V0SGl0VGlwc051bXMoKSk7XG4gICAgICAgICAgdC5pbnMudXBkYXRlU2h1ZmZsZVByb3Aoby5nZXRTaHVmZmxlTnVtcygpKTtcbiAgICAgICAgfVxuICAgICAgICBlKCk7XG4gICAgICB9IGVsc2UgZSgpO1xuICAgIH1cbiAgfVxuICBpc0d1aWRlQWN0aXZlKCkge1xuICAgIHZhciB0ID0gbWouZ2V0Q2xhc3NCeU5hbWUoXCJHdWlkZVRyYWl0XCIpO1xuICAgIHJldHVybiAhKCF0IHx8ICF0LmdldEluc3RhbmNlKCkgfHwgdHJ1ZSAhPT0gdC5nZXRJbnN0YW5jZSgpLmV2ZW50RW5hYmxlZCB8fCBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5pc0d1aWRlRmluaXNoZWQoKSk7XG4gIH1cbn0iXX0=