
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_dianZanScale/Scripts/DianZanScaleTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '95011JmpXRGmo8CURW6pGn3', 'DianZanScaleTrait');
// subpackages/l_dianZanScale/Scripts/DianZanScaleTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var DianZanScaleTrait = /** @class */ (function (_super) {
    __extends(DianZanScaleTrait, _super);
    function DianZanScaleTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DianZanScaleTrait.prototype.onDianZanBhv_getScale = function (t, e) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Tile2Normal) {
            var r = (t.args && t.args.length > 0 ? t.args[0] : 1) * this.traitData.scale;
            e({
                returnType: TraitCallbackReturnType.jump,
                returnVal: r
            });
        }
        else
            e();
    };
    DianZanScaleTrait.traitKey = "DianZanScale";
    DianZanScaleTrait = __decorate([
        mj.trait,
        mj.class("DianZanScaleTrait")
    ], DianZanScaleTrait);
    return DianZanScaleTrait;
}(Trait_1.default));
exports.default = DianZanScaleTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2RpYW5aYW5TY2FsZS9TY3JpcHRzL0RpYW5aYW5TY2FsZVRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3RkFBb0Y7QUFDcEYsZ0VBQTJEO0FBQzNELHNFQUFpRTtBQUdqRTtJQUErQyxxQ0FBSztJQUFwRDs7SUFXQSxDQUFDO0lBVEMsaURBQXFCLEdBQXJCLFVBQXNCLENBQUMsRUFBRSxDQUFDO1FBQ3hCLElBQUksbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxLQUFLLDBCQUFVLENBQUMsV0FBVyxFQUFFO1lBQzNFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO1lBQzdFLENBQUMsQ0FBQztnQkFDQSxVQUFVLEVBQUUsdUJBQXVCLENBQUMsSUFBSTtnQkFDeEMsU0FBUyxFQUFFLENBQUM7YUFDYixDQUFDLENBQUM7U0FDSjs7WUFBTSxDQUFDLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFUTSwwQkFBUSxHQUFHLGNBQWMsQ0FBQztJQURkLGlCQUFpQjtRQUZyQyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsbUJBQW1CLENBQUM7T0FDVCxpQkFBaUIsQ0FXckM7SUFBRCx3QkFBQztDQVhELEFBV0MsQ0FYOEMsZUFBSyxHQVduRDtrQkFYb0IsaUJBQWlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWpHYW1lVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9zaW11bGF0b3IvY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG5pbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L3VzZXIvVXNlck1vZGVsJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiRGlhblphblNjYWxlVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpYW5aYW5TY2FsZVRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIkRpYW5aYW5TY2FsZVwiO1xuICBvbkRpYW5aYW5CaHZfZ2V0U2NhbGUodCwgZSkge1xuICAgIGlmIChVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRDdXJyZW50R2FtZVR5cGUoKSAhPT0gTWpHYW1lVHlwZS5UaWxlMk5vcm1hbCkge1xuICAgICAgdmFyIHIgPSAodC5hcmdzICYmIHQuYXJncy5sZW5ndGggPiAwID8gdC5hcmdzWzBdIDogMSkgKiB0aGlzLnRyYWl0RGF0YS5zY2FsZTtcbiAgICAgIGUoe1xuICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5qdW1wLFxuICAgICAgICByZXR1cm5WYWw6IHJcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBlKCk7XG4gIH1cbn0iXX0=