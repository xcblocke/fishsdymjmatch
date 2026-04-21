
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_mainGameAnimAccel/Scripts/MainGameAnimAccelTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b0d3frSJR9Af64tjBdPD4aV', 'MainGameAnimAccelTrait');
// subpackages/l_mainGameAnimAccel/Scripts/MainGameAnimAccelTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var CommonUtils_1 = require("../../../Scripts/framework/utils/CommonUtils");
var MainGameAnimAccelTrait = /** @class */ (function (_super) {
    __extends(MainGameAnimAccelTrait, _super);
    function MainGameAnimAccelTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainGameAnimAccelTrait.prototype.onMainGameCtrl_vwLoad = function (t, e) {
        var r;
        e();
        var i = t.ins;
        this.setAnimSpeedRate(i, null !== (r = this._traitData.animSpeed) && void 0 !== r ? r : 1);
    };
    MainGameAnimAccelTrait.prototype.onMainGameCtrl_uiDes = function (t, e) {
        e();
        var r = t.ins;
        this.setAnimSpeedRate(r, 1);
    };
    MainGameAnimAccelTrait.prototype.setAnimSpeedRate = function (t, e) {
        cc.director.getScheduler().setTimeScale(e);
        CommonUtils_1.AniTimeScale.set(e);
        t.viewDoAction("setTimeScale", e);
    };
    MainGameAnimAccelTrait.traitKey = "MainGameAnimAccel";
    MainGameAnimAccelTrait = __decorate([
        mj.trait,
        mj.class("MainGameAnimAccelTrait")
    ], MainGameAnimAccelTrait);
    return MainGameAnimAccelTrait;
}(Trait_1.default));
exports.default = MainGameAnimAccelTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX21haW5HYW1lQW5pbUFjY2VsL1NjcmlwdHMvTWFpbkdhbWVBbmltQWNjZWxUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELDRFQUE0RTtBQUc1RTtJQUFvRCwwQ0FBSztJQUF6RDs7SUFrQkEsQ0FBQztJQWhCQyxzREFBcUIsR0FBckIsVUFBc0IsQ0FBQyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLENBQUM7UUFDTixDQUFDLEVBQUUsQ0FBQztRQUNKLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDZCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxFQUFFLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM3RixDQUFDO0lBQ0QscURBQW9CLEdBQXBCLFVBQXFCLENBQUMsRUFBRSxDQUFDO1FBQ3ZCLENBQUMsRUFBRSxDQUFDO1FBQ0osSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUNkLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUNELGlEQUFnQixHQUFoQixVQUFpQixDQUFDLEVBQUUsQ0FBQztRQUNuQixFQUFFLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzQywwQkFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwQixDQUFDLENBQUMsWUFBWSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBaEJNLCtCQUFRLEdBQUcsbUJBQW1CLENBQUM7SUFEbkIsc0JBQXNCO1FBRjFDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQztPQUNkLHNCQUFzQixDQWtCMUM7SUFBRCw2QkFBQztDQWxCRCxBQWtCQyxDQWxCbUQsZUFBSyxHQWtCeEQ7a0JBbEJvQixzQkFBc0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IHsgQW5pVGltZVNjYWxlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdXRpbHMvQ29tbW9uVXRpbHMnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJNYWluR2FtZUFuaW1BY2NlbFRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluR2FtZUFuaW1BY2NlbFRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIk1haW5HYW1lQW5pbUFjY2VsXCI7XG4gIG9uTWFpbkdhbWVDdHJsX3Z3TG9hZCh0LCBlKSB7XG4gICAgdmFyIHI7XG4gICAgZSgpO1xuICAgIHZhciBpID0gdC5pbnM7XG4gICAgdGhpcy5zZXRBbmltU3BlZWRSYXRlKGksIG51bGwgIT09IChyID0gdGhpcy5fdHJhaXREYXRhLmFuaW1TcGVlZCkgJiYgdm9pZCAwICE9PSByID8gciA6IDEpO1xuICB9XG4gIG9uTWFpbkdhbWVDdHJsX3VpRGVzKHQsIGUpIHtcbiAgICBlKCk7XG4gICAgdmFyIHIgPSB0LmlucztcbiAgICB0aGlzLnNldEFuaW1TcGVlZFJhdGUociwgMSk7XG4gIH1cbiAgc2V0QW5pbVNwZWVkUmF0ZSh0LCBlKSB7XG4gICAgY2MuZGlyZWN0b3IuZ2V0U2NoZWR1bGVyKCkuc2V0VGltZVNjYWxlKGUpO1xuICAgIEFuaVRpbWVTY2FsZS5zZXQoZSk7XG4gICAgdC52aWV3RG9BY3Rpb24oXCJzZXRUaW1lU2NhbGVcIiwgZSk7XG4gIH1cbn0iXX0=