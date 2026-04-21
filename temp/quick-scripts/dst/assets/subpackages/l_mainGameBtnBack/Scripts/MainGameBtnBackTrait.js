
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_mainGameBtnBack/Scripts/MainGameBtnBackTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'dc913/COp9OOZRhqdCn8Yf2', 'MainGameBtnBackTrait');
// subpackages/l_mainGameBtnBack/Scripts/MainGameBtnBackTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var ControllerManager_1 = require("../../../Scripts/framework/manager/ControllerManager");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var BaseUI_1 = require("../../../Scripts/framework/ui/BaseUI");
var JumpManager_1 = require("../../../Scripts/base/jump/JumpManager");
var DGamePageShow_1 = require("../../../Scripts/dot/DGamePageShow");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var MainGameBtnBackTrait = /** @class */ (function (_super) {
    __extends(MainGameBtnBackTrait, _super);
    function MainGameBtnBackTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainGameBtnBackTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    MainGameBtnBackTrait.prototype.onGameUI_onLoad = function (e, t) {
        var a, o = e.ins, n = null === (a = null == o ? void 0 : o.node) || void 0 === a ? void 0 : a.getChildByName("nodeTop"), r = null == n ? void 0 : n.getChildByName("btnBack");
        if (r) {
            var i = UserModel_1.default.getInstance().isGuideFinished();
            i || (i = this.localData.isGuidedFinished);
            r.active = i;
            r.getComponent(BaseUI_1.default) || this.addBtnBackClickEvent(r);
        }
        t();
    };
    MainGameBtnBackTrait.prototype.onGuideBhv_finish = function (e, t) {
        var a, o;
        this.localData.isGuidedFinished = true;
        var n = null === (o = null === (a = e.ins) || void 0 === a ? void 0 : a.context) || void 0 === o ? void 0 : o.gameView;
        if (n && n.topRootNode) {
            var r = n.topRootNode.getChildByName("btnBack");
            if (r) {
                r.active = true;
                r.getComponent(BaseUI_1.default) || this.addBtnBackClickEvent(r);
            }
        }
        t();
    };
    MainGameBtnBackTrait.prototype.addBtnBackClickEvent = function (e) {
        if (e) {
            var t = e.getComponent(BaseUI_1.default);
            t || (t = e.addComponent(BaseUI_1.default)) && t.OnButtonClick(e, this.onBtnBackClick.bind(this));
        }
    };
    MainGameBtnBackTrait.prototype.onBtnBackClick = function () {
        var e = ControllerManager_1.default.getInstance().getTopSceneController();
        if (e && e.gameType === GameTypeEnums_1.MjGameType.Travel)
            ControllerManager_1.default.getInstance().pushViewByController("TravelMapController", {
                isReplace: true
            });
        else if (e && e.gameType === GameTypeEnums_1.MjGameType.DailyChallenge)
            ControllerManager_1.default.getInstance().pushViewByController("DailyController", {
                isReplace: true,
                isShowAction: false,
                isReuse: false
            });
        else {
            JumpManager_1.default.getInstance().jumpToHall();
            e && e.gameType === GameTypeEnums_1.MjGameType.Normal && DGamePageShow_1.DotGamePageShow.dot(DGamePageShow_1.EPageShowType.LevelToMainPage);
        }
    };
    MainGameBtnBackTrait.traitKey = "MainGameBtnBack";
    __decorate([
        mj.traitEvent("MainGameBtnBack_onClick")
    ], MainGameBtnBackTrait.prototype, "onBtnBackClick", null);
    MainGameBtnBackTrait = __decorate([
        mj.trait,
        mj.class("MainGameBtnBackTrait")
    ], MainGameBtnBackTrait);
    return MainGameBtnBackTrait;
}(Trait_1.default));
exports.default = MainGameBtnBackTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX21haW5HYW1lQnRuQmFjay9TY3JpcHRzL01haW5HYW1lQnRuQmFja1RyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3RkFBb0Y7QUFDcEYsMEZBQXFGO0FBQ3JGLGdFQUEyRDtBQUMzRCwrREFBMEQ7QUFDMUQsc0VBQWlFO0FBQ2pFLG9FQUFvRjtBQUNwRixzRUFBaUU7QUFHakU7SUFBa0Qsd0NBQUs7SUFBdkQ7O0lBbURBLENBQUM7SUFqREMscUNBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNELDhDQUFlLEdBQWYsVUFBZ0IsQ0FBQyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLEVBQ0gsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQ1QsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLEVBQ3JHLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsRUFBRTtZQUNMLElBQUksQ0FBQyxHQUFHLG1CQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDbEQsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUMzQyxDQUFDLENBQUMs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Q0FBQyxzQkFBc0IsQ0FBQztPQUNaLG9CQUFvQixDQW1EeEM7SUFBRCwyQkFBQztDQW5ERCxBQW1EQyxDQW5EaUQsZUFBSyxHQW1EdEQ7a0JBbkRvQixvQkFBb0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNakdhbWVUeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbmltcG9ydCBDb250cm9sbGVyTWFuYWdlciBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay9tYW5hZ2VyL0NvbnRyb2xsZXJNYW5hZ2VyJztcbmltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgQmFzZVVJIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3VpL0Jhc2VVSSc7XG5pbXBvcnQgSnVtcE1hbmFnZXIgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9iYXNlL2p1bXAvSnVtcE1hbmFnZXInO1xuaW1wb3J0IHsgRG90R2FtZVBhZ2VTaG93LCBFUGFnZVNob3dUeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9kb3QvREdhbWVQYWdlU2hvdyc7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvdXNlci9Vc2VyTW9kZWwnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJNYWluR2FtZUJ0bkJhY2tUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbkdhbWVCdG5CYWNrVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiTWFpbkdhbWVCdG5CYWNrXCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgfVxuICBvbkdhbWVVSV9vbkxvYWQoZSwgdCkge1xuICAgIHZhciBhLFxuICAgICAgbyA9IGUuaW5zLFxuICAgICAgbiA9IG51bGwgPT09IChhID0gbnVsbCA9PSBvID8gdm9pZCAwIDogby5ub2RlKSB8fCB2b2lkIDAgPT09IGEgPyB2b2lkIDAgOiBhLmdldENoaWxkQnlOYW1lKFwibm9kZVRvcFwiKSxcbiAgICAgIHIgPSBudWxsID09IG4gPyB2b2lkIDAgOiBuLmdldENoaWxkQnlOYW1lKFwiYnRuQmFja1wiKTtcbiAgICBpZiAocikge1xuICAgICAgdmFyIGkgPSBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5pc0d1aWRlRmluaXNoZWQoKTtcbiAgICAgIGkgfHwgKGkgPSB0aGlzLmxvY2FsRGF0YS5pc0d1aWRlZEZpbmlzaGVkKTtcbiAgICAgIHIuYWN0aXZlID0gaTtcbiAgICAgIHIuZ2V0Q29tcG9uZW50KEJhc2VVSSkgfHwgdGhpcy5hZGRCdG5CYWNrQ2xpY2tFdmVudChyKTtcbiAgICB9XG4gICAgdCgpO1xuICB9XG4gIG9uR3VpZGVCaHZfZmluaXNoKGUsIHQpIHtcbiAgICB2YXIgYSwgbztcbiAgICB0aGlzLmxvY2FsRGF0YS5pc0d1aWRlZEZpbmlzaGVkID0gdHJ1ZTtcbiAgICB2YXIgbiA9IG51bGwgPT09IChvID0gbnVsbCA9PT0gKGEgPSBlLmlucykgfHwgdm9pZCAwID09PSBhID8gdm9pZCAwIDogYS5jb250ZXh0KSB8fCB2b2lkIDAgPT09IG8gPyB2b2lkIDAgOiBvLmdhbWVWaWV3O1xuICAgIGlmIChuICYmIG4udG9wUm9vdE5vZGUpIHtcbiAgICAgIHZhciByID0gbi50b3BSb290Tm9kZS5nZXRDaGlsZEJ5TmFtZShcImJ0bkJhY2tcIik7XG4gICAgICBpZiAocikge1xuICAgICAgICByLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHIuZ2V0Q29tcG9uZW50KEJhc2VVSSkgfHwgdGhpcy5hZGRCdG5CYWNrQ2xpY2tFdmVudChyKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdCgpO1xuICB9XG4gIGFkZEJ0bkJhY2tDbGlja0V2ZW50KGUpIHtcbiAgICBpZiAoZSkge1xuICAgICAgdmFyIHQgPSBlLmdldENvbXBvbmVudChCYXNlVUkpO1xuICAgICAgdCB8fCAodCA9IGUuYWRkQ29tcG9uZW50KEJhc2VVSSkpICYmIHQuT25CdXR0b25DbGljayhlLCB0aGlzLm9uQnRuQmFja0NsaWNrLmJpbmQodGhpcykpO1xuICAgIH1cbiAgfVxuICBAbWoudHJhaXRFdmVudChcIk1haW5HYW1lQnRuQmFja19vbkNsaWNrXCIpXG4gIG9uQnRuQmFja0NsaWNrKCkge1xuICAgIHZhciBlID0gQ29udHJvbGxlck1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXRUb3BTY2VuZUNvbnRyb2xsZXIoKTtcbiAgICBpZiAoZSAmJiBlLmdhbWVUeXBlID09PSBNakdhbWVUeXBlLlRyYXZlbCkgQ29udHJvbGxlck1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5wdXNoVmlld0J5Q29udHJvbGxlcihcIlRyYXZlbE1hcENvbnRyb2xsZXJcIiwge1xuICAgICAgaXNSZXBsYWNlOiB0cnVlXG4gICAgfSk7ZWxzZSBpZiAoZSAmJiBlLmdhbWVUeXBlID09PSBNakdhbWVUeXBlLkRhaWx5Q2hhbGxlbmdlKSBDb250cm9sbGVyTWFuYWdlci5nZXRJbnN0YW5jZSgpLnB1c2hWaWV3QnlDb250cm9sbGVyKFwiRGFpbHlDb250cm9sbGVyXCIsIHtcbiAgICAgIGlzUmVwbGFjZTogdHJ1ZSxcbiAgICAgIGlzU2hvd0FjdGlvbjogZmFsc2UsXG4gICAgICBpc1JldXNlOiBmYWxzZVxuICAgIH0pO2Vsc2Uge1xuICAgICAgSnVtcE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5qdW1wVG9IYWxsKCk7XG4gICAgICBlICYmIGUuZ2FtZVR5cGUgPT09IE1qR2FtZVR5cGUuTm9ybWFsICYmIERvdEdhbWVQYWdlU2hvdy5kb3QoRVBhZ2VTaG93VHlwZS5MZXZlbFRvTWFpblBhZ2UpO1xuICAgIH1cbiAgfVxufSJdfQ==