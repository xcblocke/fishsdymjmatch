
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_topOnlyShowMatch/Scripts/TopOnlyMatchHideFloatTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '37f3cPnZh9DHoCDVs0oqtWW', 'TopOnlyMatchHideFloatTrait');
// subpackages/l_topOnlyShowMatch/Scripts/TopOnlyMatchHideFloatTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var TopOnlyMatchHideFloatTrait = /** @class */ (function (_super) {
    __extends(TopOnlyMatchHideFloatTrait, _super);
    function TopOnlyMatchHideFloatTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TopOnlyMatchHideFloatTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    TopOnlyMatchHideFloatTrait.prototype.getMainTraitIfEnabled = function () {
        var t, e = mj.getClassByName("TopOnlyShowMatchTrait"), i = null == e ? void 0 : e.getInstance();
        if (!(null == i ? void 0 : i.eventEnabled))
            return null;
        if (!(null === (t = i.isInitialized) || void 0 === t ? void 0 : t.call(i)))
            return null;
        var a = UserModel_1.default.getInstance().getCurrentGameType();
        return i.isMatchGameType(a) ? i : null;
    };
    TopOnlyMatchHideFloatTrait.prototype.onScrFloatBhv_getScale = function (t, e) {
        if (this.getMainTraitIfEnabled()) {
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                returnVal: {
                    inScale: 0,
                    outScale: 0
                }
            });
        }
        else {
            e();
        }
    };
    TopOnlyMatchHideFloatTrait.prototype.onScoreItem_updScore = function (t, e) {
        var i, a, o, n;
        if (this.getMainTraitIfEnabled()) {
            var r = null !== (a = null === (i = t.args) || void 0 === i ? void 0 : i[0]) && void 0 !== a ? a : 0, c = null !== (n = null === (o = t.args) || void 0 === o ? void 0 : o[2]) && void 0 !== n && n;
            if (r <= 0) {
                e();
            }
            else {
                if (c) {
                    e();
                }
                else {
                    e({
                        isBreak: true,
                        returnType: TraitManager_1.TraitCallbackReturnType.return,
                        returnVal: void 0
                    });
                }
            }
        }
        else
            e();
    };
    TopOnlyMatchHideFloatTrait.traitKey = "TopOnlyMatchHideFloat";
    TopOnlyMatchHideFloatTrait = __decorate([
        mj.trait,
        mj.class("TopOnlyMatchHideFloatTrait")
    ], TopOnlyMatchHideFloatTrait);
    return TopOnlyMatchHideFloatTrait;
}(Trait_1.default));
exports.default = TopOnlyMatchHideFloatTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3RvcE9ubHlTaG93TWF0Y2gvU2NyaXB0cy9Ub3BPbmx5TWF0Y2hIaWRlRmxvYXRUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELDhFQUF3RjtBQUN4RixzRUFBaUU7QUFHakU7SUFBd0QsOENBQUs7SUFBN0Q7O0lBZ0RBLENBQUM7SUE5Q0MsMkNBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNELDBEQUFxQixHQUFyQjtRQUNFLElBQUksQ0FBQyxFQUNILENBQUMsR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDLHVCQUF1QixDQUFDLEVBQzlDLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzNDLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDO1lBQUUsT0FBTyxJQUFJLENBQUM7UUFDeEQsSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQUUsT0FBTyxJQUFJLENBQUM7UUFDeEYsSUFBSSxDQUFDLEdBQUcsbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQ3JELE9BQU8sQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDekMsQ0FBQztJQUNELDJEQUFzQixHQUF0QixVQUF1QixDQUFDLEVBQUUsQ0FBQztRQUN6QixJQUFJLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxFQUFFO1lBQ2hDLENBQUMsQ0FBQztnQkFDQSxPQUFPLEVBQUUsSUFBSTtnQkFDYixVQUFVLEVBQUUsc0NBQXVCLENBQUMsTUFBTTtnQkFDMUMsU0FBUyxFQUFFO29CQUNULE9BQU8sRUFBRSxDQUFDO29CQUNWLFFBQVEsRUFBRSxDQUFDO2lCQUNaO2FBQ0YsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLENBQUMsRUFBRSxDQUFDO1NBQ0w7SUFDSCxDQUFDO0lBQ0QseURBQW9CLEdBQXBCLFVBQXFCLENBQUMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2YsSUFBSSxJQUFJLENBQUMscUJBQXFCLEVBQUUsRUFBRTtZQUNoQyxJQUFJLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUNsRyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNoRyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ1YsQ0FBQyxFQUFFLENBQUM7YUFDTDtpQkFBTTtnQkFDTCxJQUFJLENBQUMsRUFBRTtvQkFDTCxDQUFDLEVBQUUsQ0FBQztpQkFDTDtxQkFBTTtvQkFDTCxDQUFDLENBQUM7d0JBQ0EsT0FBTyxFQUFFLElBQUk7d0JBQ2IsVUFBVSxFQUFFLHNDQUF1QixDQUFDLE1BQU07d0JBQzFDLFNBQVMsRUFBRSxLQUFLLENBQUM7cUJBQ2xCLENBQUMsQ0FBQztpQkFDSjthQUNGO1NBQ0Y7O1lBQU0sQ0FBQyxFQUFFLENBQUM7SUFDYixDQUFDO0lBOUNNLG1DQUFRLEdBQUcsdUJBQXVCLENBQUM7SUFEdkIsMEJBQTBCO1FBRjlDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyw0QkFBNEIsQ0FBQztPQUNsQiwwQkFBMEIsQ0FnRDlDO0lBQUQsaUNBQUM7Q0FoREQsQUFnREMsQ0FoRHVELGVBQUssR0FnRDVEO2tCQWhEb0IsMEJBQTBCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCB7IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXRNYW5hZ2VyJztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS91c2VyL1VzZXJNb2RlbCc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIlRvcE9ubHlNYXRjaEhpZGVGbG9hdFRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb3BPbmx5TWF0Y2hIaWRlRmxvYXRUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJUb3BPbmx5TWF0Y2hIaWRlRmxvYXRcIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICB9XG4gIGdldE1haW5UcmFpdElmRW5hYmxlZCgpIHtcbiAgICB2YXIgdCxcbiAgICAgIGUgPSBtai5nZXRDbGFzc0J5TmFtZShcIlRvcE9ubHlTaG93TWF0Y2hUcmFpdFwiKSxcbiAgICAgIGkgPSBudWxsID09IGUgPyB2b2lkIDAgOiBlLmdldEluc3RhbmNlKCk7XG4gICAgaWYgKCEobnVsbCA9PSBpID8gdm9pZCAwIDogaS5ldmVudEVuYWJsZWQpKSByZXR1cm4gbnVsbDtcbiAgICBpZiAoIShudWxsID09PSAodCA9IGkuaXNJbml0aWFsaXplZCkgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC5jYWxsKGkpKSkgcmV0dXJuIG51bGw7XG4gICAgdmFyIGEgPSBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRDdXJyZW50R2FtZVR5cGUoKTtcbiAgICByZXR1cm4gaS5pc01hdGNoR2FtZVR5cGUoYSkgPyBpIDogbnVsbDtcbiAgfVxuICBvblNjckZsb2F0Qmh2X2dldFNjYWxlKHQsIGUpIHtcbiAgICBpZiAodGhpcy5nZXRNYWluVHJhaXRJZkVuYWJsZWQoKSkge1xuICAgICAgZSh7XG4gICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgcmV0dXJuVmFsOiB7XG4gICAgICAgICAgaW5TY2FsZTogMCxcbiAgICAgICAgICBvdXRTY2FsZTogMFxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZSgpO1xuICAgIH1cbiAgfVxuICBvblNjb3JlSXRlbV91cGRTY29yZSh0LCBlKSB7XG4gICAgdmFyIGksIGEsIG8sIG47XG4gICAgaWYgKHRoaXMuZ2V0TWFpblRyYWl0SWZFbmFibGVkKCkpIHtcbiAgICAgIHZhciByID0gbnVsbCAhPT0gKGEgPSBudWxsID09PSAoaSA9IHQuYXJncykgfHwgdm9pZCAwID09PSBpID8gdm9pZCAwIDogaVswXSkgJiYgdm9pZCAwICE9PSBhID8gYSA6IDAsXG4gICAgICAgIGMgPSBudWxsICE9PSAobiA9IG51bGwgPT09IChvID0gdC5hcmdzKSB8fCB2b2lkIDAgPT09IG8gPyB2b2lkIDAgOiBvWzJdKSAmJiB2b2lkIDAgIT09IG4gJiYgbjtcbiAgICAgIGlmIChyIDw9IDApIHtcbiAgICAgICAgZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGMpIHtcbiAgICAgICAgICBlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZSh7XG4gICAgICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICAgICAgcmV0dXJuVmFsOiB2b2lkIDBcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBlKCk7XG4gIH1cbn0iXX0=