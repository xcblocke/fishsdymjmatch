
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_changeSkin/Scripts/ChangeSkinTrait70.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5bd5c4gE4tKMJVdNtW+5YA3', 'ChangeSkinTrait70');
// subpackages/l_changeSkin/Scripts/ChangeSkinTrait70.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ChangeSkinTrait_1 = require("./ChangeSkinTrait");
var CommonUtils_1 = require("../../../Scripts/framework/utils/CommonUtils");
var Adapter_1 = require("../../../Scripts/component/Adapter");
var ChangeSkinTrait70 = /** @class */ (function (_super) {
    __extends(ChangeSkinTrait70, _super);
    function ChangeSkinTrait70() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChangeSkinTrait70.prototype.onWinVw_showWinVw = function (t, e) {
        var i = t.ins;
        if (cc.isValid(i)) {
            var n = i.getContentNode();
            if (cc.isValid(n)) {
                var r = n.getChildByName("spine_victory");
                if (cc.isValid(r)) {
                    var a = r.getComponent(sp.Skeleton);
                    a && CommonUtils_1.playSpineAnim(a, 1, "in_1", function () {
                        CommonUtils_1.playSpineAnim(a, -1, "init");
                    });
                }
                var o = n.getChildByName("lbl_subtitle");
                cc.isValid(o) && (o.y = -149);
            }
        }
        e();
    };
    ChangeSkinTrait70.prototype.onWinVw_getDescAniDly = function (t, e) {
        e({
            returnType: TraitCallbackReturnType.return,
            returnVal: 0.9,
            isBreak: true
        });
    };
    ChangeSkinTrait70.prototype.onWinVw_playWdAni2 = function (t, e) {
        var i = t.ins;
        if (cc.isValid(i)) {
            var n = i.getContentNode();
            if (cc.isValid(n)) {
                var r = n.getChildByName("lbl_title");
                if (cc.isValid(r)) {
                    r.scale = 1.8;
                    r.opacity = 0;
                    r.stopAllActions();
                    cc.tween(r).to(0.2, {
                        scale: 0.7
                    }, {
                        easing: cc.easing.sineInOut
                    }).to(0.13, {
                        scale: 1.05
                    }, {
                        easing: cc.easing.sineInOut
                    }).to(0.1, {
                        scale: 1
                    }, {
                        easing: cc.easing.quadIn
                    }).start();
                    cc.tween(r).to(0.43, {
                        opacity: 255
                    }).start();
                    e({
                        returnType: TraitCallbackReturnType.return,
                        isBreak: true
                    });
                    return;
                }
            }
        }
        e();
    };
    ChangeSkinTrait70.prototype.onBoxRwdUI_barBoxEnter = function (t, e) {
        var i = t.ins;
        if (cc.isValid(i) && cc.isValid(i.node)) {
            var n = i.node, r = n.getChildByName("sp_bottom_bg");
            if (cc.isValid(r)) {
                r.active = true;
                Adapter_1.default.ignoreSafeRect(r);
            }
            var a = n.getChildByName("BarLayout");
            if (cc.isValid(a)) {
                a.active = true;
                Adapter_1.default.ignoreSafeRect(a);
            }
            var o = n.getChildByName("BoxBtn");
            if (cc.isValid(o)) {
                o.active = true;
                Adapter_1.default.ignoreSafeRect(o);
            }
            n.opacity = 0;
            cc.tween(n).delay(1).to(0.5, {
                opacity: 255
            }).start();
            e({
                returnType: TraitCallbackReturnType.return,
                isBreak: true
            });
        }
        else
            e();
    };
    ChangeSkinTrait70.prototype.onLvBoxProg_barBoxEnter = function (t, e) {
        var i = t.ins;
        if (cc.isValid(i) && cc.isValid(i.node)) {
            var n = i.node, r = n.getChildByName("sp_bottom_bg");
            if (cc.isValid(r)) {
                r.active = true;
                Adapter_1.default.ignoreSafeRect(r);
            }
            var a = n.getChildByName("BarLayout");
            if (cc.isValid(a)) {
                a.active = true;
                Adapter_1.default.ignoreSafeRect(a);
            }
            var o = n.getChildByName("BoxBtn");
            if (cc.isValid(o)) {
                o.active = true;
                Adapter_1.default.ignoreSafeRect(o);
            }
            n.opacity = 0;
            cc.tween(n).delay(1).to(0.5, {
                opacity: 255
            }).start();
            e({
                returnType: TraitCallbackReturnType.return,
                isBreak: true
            });
        }
        else
            e();
    };
    ChangeSkinTrait70.traitKey = "ChangeSkin70";
    ChangeSkinTrait70 = __decorate([
        mj.trait,
        mj.class("ChangeSkinTrait70")
    ], ChangeSkinTrait70);
    return ChangeSkinTrait70;
}(ChangeSkinTrait_1.default));
exports.default = ChangeSkinTrait70;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2NoYW5nZVNraW4vU2NyaXB0cy9DaGFuZ2VTa2luVHJhaXQ3MC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscURBQWdEO0FBQ2hELDRFQUE2RTtBQUM3RSw4REFBeUQ7QUFHekQ7SUFBK0MscUNBQWU7SUFBOUQ7O0lBeUhBLENBQUM7SUF2SEMsNkNBQWlCLEdBQWpCLFVBQWtCLENBQUMsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDZCxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDakIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQzNCLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDakIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQztnQkFDMUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUNqQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDcEMsQ0FBQyxJQUFJLDJCQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUU7d0JBQy9CLDJCQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO29CQUMvQixDQUFDLENBQUMsQ0FBQztpQkFDSjtnQkFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDO2dCQUN6QyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQy9CO1NBQ0Y7UUFDRCxDQUFDLEVB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R0FBRyxDQUFDLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3RDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDakIsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQ2hCLGlCQUFPLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzNCO1lBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNuQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ2pCLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUNoQixpQkFBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUMzQjtZQUNELENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1lBQ2QsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRTtnQkFDM0IsT0FBTyxFQUFFLEdBQUc7YUFDYixDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDWCxDQUFDLENBQUM7Z0JBQ0EsVUFBVSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQzFDLE9BQU8sRUFBRSxJQUFJO2FBQ2QsQ0FBQyxDQUFDO1NBQ0o7O1lBQU0sQ0FBQyxFQUFFLENBQUM7SUFDYixDQUFDO0lBdkhNLDBCQUFRLEdBQUcsY0FBYyxDQUFDO0lBRGQsaUJBQWlCO1FBRnJDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQztPQUNULGlCQUFpQixDQXlIckM7SUFBRCx3QkFBQztDQXpIRCxBQXlIQyxDQXpIOEMseUJBQWUsR0F5SDdEO2tCQXpIb0IsaUJBQWlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENoYW5nZVNraW5UcmFpdCBmcm9tICcuL0NoYW5nZVNraW5UcmFpdCc7XG5pbXBvcnQgeyBwbGF5U3BpbmVBbmltIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdXRpbHMvQ29tbW9uVXRpbHMnO1xuaW1wb3J0IEFkYXB0ZXIgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb21wb25lbnQvQWRhcHRlcic7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIkNoYW5nZVNraW5UcmFpdDcwXCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGFuZ2VTa2luVHJhaXQ3MCBleHRlbmRzIENoYW5nZVNraW5UcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiQ2hhbmdlU2tpbjcwXCI7XG4gIG9uV2luVndfc2hvd1dpblZ3KHQsIGUpIHtcbiAgICB2YXIgaSA9IHQuaW5zO1xuICAgIGlmIChjYy5pc1ZhbGlkKGkpKSB7XG4gICAgICB2YXIgbiA9IGkuZ2V0Q29udGVudE5vZGUoKTtcbiAgICAgIGlmIChjYy5pc1ZhbGlkKG4pKSB7XG4gICAgICAgIHZhciByID0gbi5nZXRDaGlsZEJ5TmFtZShcInNwaW5lX3ZpY3RvcnlcIik7XG4gICAgICAgIGlmIChjYy5pc1ZhbGlkKHIpKSB7XG4gICAgICAgICAgdmFyIGEgPSByLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XG4gICAgICAgICAgYSAmJiBwbGF5U3BpbmVBbmltKGEsIDEsIFwiaW5fMVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBwbGF5U3BpbmVBbmltKGEsIC0xLCBcImluaXRcIik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG8gPSBuLmdldENoaWxkQnlOYW1lKFwibGJsX3N1YnRpdGxlXCIpO1xuICAgICAgICBjYy5pc1ZhbGlkKG8pICYmIChvLnkgPSAtMTQ5KTtcbiAgICAgIH1cbiAgICB9XG4gICAgZSgpO1xuICB9XG4gIG9uV2luVndfZ2V0RGVzY0FuaURseSh0LCBlKSB7XG4gICAgZSh7XG4gICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICByZXR1cm5WYWw6IDAuOSxcbiAgICAgIGlzQnJlYWs6IHRydWVcbiAgICB9KTtcbiAgfVxuICBvbldpblZ3X3BsYXlXZEFuaTIodCwgZSkge1xuICAgIHZhciBpID0gdC5pbnM7XG4gICAgaWYgKGNjLmlzVmFsaWQoaSkpIHtcbiAgICAgIHZhciBuID0gaS5nZXRDb250ZW50Tm9kZSgpO1xuICAgICAgaWYgKGNjLmlzVmFsaWQobikpIHtcbiAgICAgICAgdmFyIHIgPSBuLmdldENoaWxkQnlOYW1lKFwibGJsX3RpdGxlXCIpO1xuICAgICAgICBpZiAoY2MuaXNWYWxpZChyKSkge1xuICAgICAgICAgIHIuc2NhbGUgPSAxLjg7XG4gICAgICAgICAgci5vcGFjaXR5ID0gMDtcbiAgICAgICAgICByLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgICAgY2MudHdlZW4ocikudG8oMC4yLCB7XG4gICAgICAgICAgICBzY2FsZTogMC43XG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgZWFzaW5nOiBjYy5lYXNpbmcuc2luZUluT3V0XG4gICAgICAgICAgfSkudG8oMC4xMywge1xuICAgICAgICAgICAgc2NhbGU6IDEuMDVcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBlYXNpbmc6IGNjLmVhc2luZy5zaW5lSW5PdXRcbiAgICAgICAgICB9KS50bygwLjEsIHtcbiAgICAgICAgICAgIHNjYWxlOiAxXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgZWFzaW5nOiBjYy5lYXNpbmcucXVhZEluXG4gICAgICAgICAgfSkuc3RhcnQoKTtcbiAgICAgICAgICBjYy50d2VlbihyKS50bygwLjQzLCB7XG4gICAgICAgICAgICBvcGFjaXR5OiAyNTVcbiAgICAgICAgICB9KS5zdGFydCgpO1xuICAgICAgICAgIGUoe1xuICAgICAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICAgICAgaXNCcmVhazogdHJ1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBlKCk7XG4gIH1cbiAgb25Cb3hSd2RVSV9iYXJCb3hFbnRlcih0LCBlKSB7XG4gICAgdmFyIGkgPSB0LmlucztcbiAgICBpZiAoY2MuaXNWYWxpZChpKSAmJiBjYy5pc1ZhbGlkKGkubm9kZSkpIHtcbiAgICAgIHZhciBuID0gaS5ub2RlLFxuICAgICAgICByID0gbi5nZXRDaGlsZEJ5TmFtZShcInNwX2JvdHRvbV9iZ1wiKTtcbiAgICAgIGlmIChjYy5pc1ZhbGlkKHIpKSB7XG4gICAgICAgIHIuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgQWRhcHRlci5pZ25vcmVTYWZlUmVjdChyKTtcbiAgICAgIH1cbiAgICAgIHZhciBhID0gbi5nZXRDaGlsZEJ5TmFtZShcIkJhckxheW91dFwiKTtcbiAgICAgIGlmIChjYy5pc1ZhbGlkKGEpKSB7XG4gICAgICAgIGEuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgQWRhcHRlci5pZ25vcmVTYWZlUmVjdChhKTtcbiAgICAgIH1cbiAgICAgIHZhciBvID0gbi5nZXRDaGlsZEJ5TmFtZShcIkJveEJ0blwiKTtcbiAgICAgIGlmIChjYy5pc1ZhbGlkKG8pKSB7XG4gICAgICAgIG8uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgQWRhcHRlci5pZ25vcmVTYWZlUmVjdChvKTtcbiAgICAgIH1cbiAgICAgIG4ub3BhY2l0eSA9IDA7XG4gICAgICBjYy50d2VlbihuKS5kZWxheSgxKS50bygwLjUsIHtcbiAgICAgICAgb3BhY2l0eTogMjU1XG4gICAgICB9KS5zdGFydCgpO1xuICAgICAgZSh7XG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgaXNCcmVhazogdHJ1ZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIGUoKTtcbiAgfVxuICBvbkx2Qm94UHJvZ19iYXJCb3hFbnRlcih0LCBlKSB7XG4gICAgdmFyIGkgPSB0LmlucztcbiAgICBpZiAoY2MuaXNWYWxpZChpKSAmJiBjYy5pc1ZhbGlkKGkubm9kZSkpIHtcbiAgICAgIHZhciBuID0gaS5ub2RlLFxuICAgICAgICByID0gbi5nZXRDaGlsZEJ5TmFtZShcInNwX2JvdHRvbV9iZ1wiKTtcbiAgICAgIGlmIChjYy5pc1ZhbGlkKHIpKSB7XG4gICAgICAgIHIuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgQWRhcHRlci5pZ25vcmVTYWZlUmVjdChyKTtcbiAgICAgIH1cbiAgICAgIHZhciBhID0gbi5nZXRDaGlsZEJ5TmFtZShcIkJhckxheW91dFwiKTtcbiAgICAgIGlmIChjYy5pc1ZhbGlkKGEpKSB7XG4gICAgICAgIGEuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgQWRhcHRlci5pZ25vcmVTYWZlUmVjdChhKTtcbiAgICAgIH1cbiAgICAgIHZhciBvID0gbi5nZXRDaGlsZEJ5TmFtZShcIkJveEJ0blwiKTtcbiAgICAgIGlmIChjYy5pc1ZhbGlkKG8pKSB7XG4gICAgICAgIG8uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgQWRhcHRlci5pZ25vcmVTYWZlUmVjdChvKTtcbiAgICAgIH1cbiAgICAgIG4ub3BhY2l0eSA9IDA7XG4gICAgICBjYy50d2VlbihuKS5kZWxheSgxKS50bygwLjUsIHtcbiAgICAgICAgb3BhY2l0eTogMjU1XG4gICAgICB9KS5zdGFydCgpO1xuICAgICAgZSh7XG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgaXNCcmVhazogdHJ1ZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIGUoKTtcbiAgfVxufSJdfQ==