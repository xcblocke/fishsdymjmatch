
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_rankSynXingyun/Scripts/RankEndSequenceTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e2826oOFJpA8ZOsR2UmAqV+', 'RankEndSequenceTrait');
// subpackages/l_rankSynXingyun/Scripts/RankEndSequenceTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var GameUtils_1 = require("../../../Scripts/core/simulator/util/GameUtils");
var ControllerManager_1 = require("../../../Scripts/framework/manager/ControllerManager");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var RankEndSequenceTrait = /** @class */ (function (_super) {
    __extends(RankEndSequenceTrait, _super);
    function RankEndSequenceTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rankDataUsed = {};
        _this.introViewIns = null;
        return _this;
    }
    RankEndSequenceTrait.prototype.getMessageListeners = function () {
        return {
            RankBoxVw_destroy: this.onRankBoxVwDestroy.bind(this)
        };
    };
    RankEndSequenceTrait.prototype.isInGameScene = function () {
        return GameTypeEnums_1.MjGameType.None != UserModel_1.default.getInstance().getCurrentGameType();
    };
    RankEndSequenceTrait.prototype.onRankBoxVwDestroy = function () {
        var t, e, r = null === (e = null === (t = this.introViewIns) || void 0 === t ? void 0 : t.delegate) || void 0 === e ? void 0 : e.rootView;
        this.isInGameScene() || ControllerManager_1.default.getInstance().pushViewByController("RankController", {
            isReuse: true,
            isShowAction: false
        });
        if (cc.isValid(r)) {
            r.opacity = 255;
            var n = this.introViewIns.node;
            cc.Tween.stopAllByTarget(n);
            var o = n.getComponent(cc.Widget);
            o.enabled = false;
            n.scale = 0.8;
            cc.tween(n).to(0.1, {
                scale: 1
            }).call(function () {
                cc.isValid(n) && (o.enabled = true);
            }).start();
        }
    };
    RankEndSequenceTrait.prototype.onRankIntroVw_show = function (t, e) {
        if ("prefabs/rank/RankBoxView" == ControllerManager_1.default.getInstance().getTopViewControllerIncludingAlerts().viewClass.getUrl()) {
            this.introViewIns = t.ins;
            this.introViewIns.delegate.rootView.opacity = 0;
        }
        e();
    };
    RankEndSequenceTrait.prototype.onRankBoxVw_show = function (t, e) {
        t.ins.setBgOpacity(118);
        e();
    };
    RankEndSequenceTrait.prototype.onRankBoxCtrl_initRes = function (t, e) {
        var r = mj.getClassByName("RankModel");
        if (r) {
            var n = r.getInstance();
            this.rankDataUsed.selfRank = n.getSelfRank();
            this.rankDataUsed.boardData = GameUtils_1.default.deepClone(n.getCurBoardData());
            this.rankDataUsed.rankList = GameUtils_1.default.deepClone(n.getRankList(true) || []);
            this.isInGameScene() || ControllerManager_1.default.getInstance().pushViewByController("RankController", {
                isReuse: true,
                isShowAction: false,
                isOldData: true
            });
            e();
        }
        else
            e();
    };
    RankEndSequenceTrait.prototype.onRankVw_getLeftTime = function (t, e) {
        if (t.ins._isOldData) {
            e({
                isBreak: true,
                returnType: TraitCallbackReturnType.return,
                returnVal: 0
            });
        }
        else {
            e();
        }
    };
    RankEndSequenceTrait.prototype.onRankVw_getSelfRank = function (t, e) {
        if (t.ins._isOldData) {
            e({
                isBreak: true,
                returnType: TraitCallbackReturnType.return,
                returnVal: this.rankDataUsed.selfRank
            });
        }
        else {
            e();
        }
    };
    RankEndSequenceTrait.prototype.onRankVw_getRankList = function (t, e) {
        if (t.ins._isOldData) {
            e({
                isBreak: true,
                returnType: TraitCallbackReturnType.return,
                returnVal: this.rankDataUsed.rankList
            });
        }
        else {
            e();
        }
    };
    RankEndSequenceTrait.prototype.onRankVw_getBoardData = function (t, e) {
        if (t.ins._isOldData) {
            e({
                isBreak: true,
                returnType: TraitCallbackReturnType.return,
                returnVal: this.rankDataUsed.boardData
            });
        }
        else {
            e();
        }
    };
    RankEndSequenceTrait.prototype.onRankVw_closeOutCD = function (t, e) {
        if (t.ins._isOldData) {
            e({
                isBreak: true,
                returnType: TraitCallbackReturnType.return
            });
            t.ins.setTimeString();
        }
        else
            e();
    };
    RankEndSequenceTrait.traitKey = "RankEndSequence";
    RankEndSequenceTrait = __decorate([
        mj.trait,
        mj.class("RankEndSequenceTrait")
    ], RankEndSequenceTrait);
    return RankEndSequenceTrait;
}(Trait_1.default));
exports.default = RankEndSequenceTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3JhbmtTeW5YaW5neXVuL1NjcmlwdHMvUmFua0VuZFNlcXVlbmNlVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdGQUFvRjtBQUNwRiw0RUFBdUU7QUFDdkUsMEZBQXFGO0FBQ3JGLGdFQUEyRDtBQUMzRCxzRUFBaUU7QUFHakU7SUFBa0Qsd0NBQUs7SUFBdkQ7UUFBQSxxRUFpSEM7UUFoSEMsa0JBQVksR0FBRyxFQUFFLENBQUM7UUFDbEIsa0JBQVksR0FBRyxJQUFJLENBQUM7O0lBK0d0QixDQUFDO0lBN0dDLGtEQUFtQixHQUFuQjtRQUNFLE9BQU87WUFDTCxpQkFBaUIsRUFBRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztTQUN0RCxDQUFDO0lBQ0osQ0FBQztJQUNELDRDQUFhLEdBQWI7UUFDRSxPQUFPLDBCQUFVLENBQUMsSUFBSSxJQUFJLG1CQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUN6RSxDQUFDO0lBQ0QsaURBQWtCLEdBQWxCO1FBQ0UsSUFBSSxDQUFDLEVBQ0gsQ0FBQyxFQUNELENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztRQUNsSSxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksMkJBQWlCLENBQUMsV0FBVyxFQUFFLENBQUMsb0JBQW9CLENBQUMsZ0JBQWdCLEVBQUU7WUFDN0YsT0FB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QUFDLFVBQVUsRUFBRTtZQUNwQixDQUFDLENBQUM7Z0JBQ0EsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsVUFBVSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDM0MsQ0FBQyxDQUFDO1lBQ0gsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUN2Qjs7WUFBTSxDQUFDLEVBQUUsQ0FBQztJQUNiLENBQUM7SUE3R00sNkJBQVEsR0FBRyxpQkFBaUIsQ0FBQztJQUhqQixvQkFBb0I7UUFGeEMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLHNCQUFzQixDQUFDO09BQ1osb0JBQW9CLENBaUh4QztJQUFELDJCQUFDO0NBakhELEFBaUhDLENBakhpRCxlQUFLLEdBaUh0RDtrQkFqSG9CLG9CQUFvQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1qR2FtZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuaW1wb3J0IEdhbWVVdGlscyBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL3V0aWwvR2FtZVV0aWxzJztcbmltcG9ydCBDb250cm9sbGVyTWFuYWdlciBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay9tYW5hZ2VyL0NvbnRyb2xsZXJNYW5hZ2VyJztcbmltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvdXNlci9Vc2VyTW9kZWwnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJSYW5rRW5kU2VxdWVuY2VUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFua0VuZFNlcXVlbmNlVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHJhbmtEYXRhVXNlZCA9IHt9O1xuICBpbnRyb1ZpZXdJbnMgPSBudWxsO1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIlJhbmtFbmRTZXF1ZW5jZVwiO1xuICBnZXRNZXNzYWdlTGlzdGVuZXJzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBSYW5rQm94VndfZGVzdHJveTogdGhpcy5vblJhbmtCb3hWd0Rlc3Ryb3kuYmluZCh0aGlzKVxuICAgIH07XG4gIH1cbiAgaXNJbkdhbWVTY2VuZSgpIHtcbiAgICByZXR1cm4gTWpHYW1lVHlwZS5Ob25lICE9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEN1cnJlbnRHYW1lVHlwZSgpO1xuICB9XG4gIG9uUmFua0JveFZ3RGVzdHJveSgpIHtcbiAgICB2YXIgdCxcbiAgICAgIGUsXG4gICAgICByID0gbnVsbCA9PT0gKGUgPSBudWxsID09PSAodCA9IHRoaXMuaW50cm9WaWV3SW5zKSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0LmRlbGVnYXRlKSB8fCB2b2lkIDAgPT09IGUgPyB2b2lkIDAgOiBlLnJvb3RWaWV3O1xuICAgIHRoaXMuaXNJbkdhbWVTY2VuZSgpIHx8IENvbnRyb2xsZXJNYW5hZ2VyLmdldEluc3RhbmNlKCkucHVzaFZpZXdCeUNvbnRyb2xsZXIoXCJSYW5rQ29udHJvbGxlclwiLCB7XG4gICAgICBpc1JldXNlOiB0cnVlLFxuICAgICAgaXNTaG93QWN0aW9uOiBmYWxzZVxuICAgIH0pO1xuICAgIGlmIChjYy5pc1ZhbGlkKHIpKSB7XG4gICAgICByLm9wYWNpdHkgPSAyNTU7XG4gICAgICB2YXIgbiA9IHRoaXMuaW50cm9WaWV3SW5zLm5vZGU7XG4gICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQobik7XG4gICAgICB2YXIgbyA9IG4uZ2V0Q29tcG9uZW50KGNjLldpZGdldCk7XG4gICAgICBvLmVuYWJsZWQgPSBmYWxzZTtcbiAgICAgIG4uc2NhbGUgPSAwLjg7XG4gICAgICBjYy50d2VlbihuKS50bygwLjEsIHtcbiAgICAgICAgc2NhbGU6IDFcbiAgICAgIH0pLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICBjYy5pc1ZhbGlkKG4pICYmIChvLmVuYWJsZWQgPSB0cnVlKTtcbiAgICAgIH0pLnN0YXJ0KCk7XG4gICAgfVxuICB9XG4gIG9uUmFua0ludHJvVndfc2hvdyh0LCBlKSB7XG4gICAgaWYgKFwicHJlZmFicy9yYW5rL1JhbmtCb3hWaWV3XCIgPT0gQ29udHJvbGxlck1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXRUb3BWaWV3Q29udHJvbGxlckluY2x1ZGluZ0FsZXJ0cygpLnZpZXdDbGFzcy5nZXRVcmwoKSkge1xuICAgICAgdGhpcy5pbnRyb1ZpZXdJbnMgPSB0LmlucztcbiAgICAgIHRoaXMuaW50cm9WaWV3SW5zLmRlbGVnYXRlLnJvb3RWaWV3Lm9wYWNpdHkgPSAwO1xuICAgIH1cbiAgICBlKCk7XG4gIH1cbiAgb25SYW5rQm94Vndfc2hvdyh0LCBlKSB7XG4gICAgdC5pbnMuc2V0QmdPcGFjaXR5KDExOCk7XG4gICAgZSgpO1xuICB9XG4gIG9uUmFua0JveEN0cmxfaW5pdFJlcyh0LCBlKSB7XG4gICAgdmFyIHIgPSBtai5nZXRDbGFzc0J5TmFtZShcIlJhbmtNb2RlbFwiKTtcbiAgICBpZiAocikge1xuICAgICAgdmFyIG4gPSByLmdldEluc3RhbmNlKCk7XG4gICAgICB0aGlzLnJhbmtEYXRhVXNlZC5zZWxmUmFuayA9IG4uZ2V0U2VsZlJhbmsoKTtcbiAgICAgIHRoaXMucmFua0RhdGFVc2VkLmJvYXJkRGF0YSA9IEdhbWVVdGlscy5kZWVwQ2xvbmUobi5nZXRDdXJCb2FyZERhdGEoKSk7XG4gICAgICB0aGlzLnJhbmtEYXRhVXNlZC5yYW5rTGlzdCA9IEdhbWVVdGlscy5kZWVwQ2xvbmUobi5nZXRSYW5rTGlzdCh0cnVlKSB8fCBbXSk7XG4gICAgICB0aGlzLmlzSW5HYW1lU2NlbmUoKSB8fCBDb250cm9sbGVyTWFuYWdlci5nZXRJbnN0YW5jZSgpLnB1c2hWaWV3QnlDb250cm9sbGVyKFwiUmFua0NvbnRyb2xsZXJcIiwge1xuICAgICAgICBpc1JldXNlOiB0cnVlLFxuICAgICAgICBpc1Nob3dBY3Rpb246IGZhbHNlLFxuICAgICAgICBpc09sZERhdGE6IHRydWVcbiAgICAgIH0pO1xuICAgICAgZSgpO1xuICAgIH0gZWxzZSBlKCk7XG4gIH1cbiAgb25SYW5rVndfZ2V0TGVmdFRpbWUodCwgZSkge1xuICAgIGlmICh0Lmlucy5faXNPbGREYXRhKSB7XG4gICAgICBlKHtcbiAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICByZXR1cm5WYWw6IDBcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBlKCk7XG4gICAgfVxuICB9XG4gIG9uUmFua1Z3X2dldFNlbGZSYW5rKHQsIGUpIHtcbiAgICBpZiAodC5pbnMuX2lzT2xkRGF0YSkge1xuICAgICAgZSh7XG4gICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgcmV0dXJuVmFsOiB0aGlzLnJhbmtEYXRhVXNlZC5zZWxmUmFua1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGUoKTtcbiAgICB9XG4gIH1cbiAgb25SYW5rVndfZ2V0UmFua0xpc3QodCwgZSkge1xuICAgIGlmICh0Lmlucy5faXNPbGREYXRhKSB7XG4gICAgICBlKHtcbiAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICByZXR1cm5WYWw6IHRoaXMucmFua0RhdGFVc2VkLnJhbmtMaXN0XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZSgpO1xuICAgIH1cbiAgfVxuICBvblJhbmtWd19nZXRCb2FyZERhdGEodCwgZSkge1xuICAgIGlmICh0Lmlucy5faXNPbGREYXRhKSB7XG4gICAgICBlKHtcbiAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICByZXR1cm5WYWw6IHRoaXMucmFua0RhdGFVc2VkLmJvYXJkRGF0YVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGUoKTtcbiAgICB9XG4gIH1cbiAgb25SYW5rVndfY2xvc2VPdXRDRCh0LCBlKSB7XG4gICAgaWYgKHQuaW5zLl9pc09sZERhdGEpIHtcbiAgICAgIGUoe1xuICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm5cbiAgICAgIH0pO1xuICAgICAgdC5pbnMuc2V0VGltZVN0cmluZygpO1xuICAgIH0gZWxzZSBlKCk7XG4gIH1cbn0iXX0=