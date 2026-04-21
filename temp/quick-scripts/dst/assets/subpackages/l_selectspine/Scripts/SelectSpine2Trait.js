
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_selectspine/Scripts/SelectSpine2Trait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '842b4VT5MdMmbs+ejCm9LMV', 'SelectSpine2Trait');
// subpackages/l_selectspine/Scripts/SelectSpine2Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ExtractTool_1 = require("../../../Scripts/core/extractQuestion/ExtractTool");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var TravelGameData_1 = require("../../../Scripts/core/simulator/data/TravelGameData");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var BaseSpine_1 = require("../../../Scripts/gamePlay/base/ui/BaseSpine");
var BaseSprite_1 = require("../../../Scripts/gamePlay/base/ui/BaseSprite");
var TravelGameModel_1 = require("../../../Scripts/gamePlay/travel/model/TravelGameModel");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var SelectSpine2Trait = /** @class */ (function (_super) {
    __extends(SelectSpine2Trait, _super);
    function SelectSpine2Trait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SelectSpine2Trait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    SelectSpine2Trait.prototype.getPicConfig = function (e) {
        return 1 == e ? {
            bgPic: "texture/selecttex/gameplay_select_mj_greenLight",
            spine: "spine/selectspine/gameplay_selected_efx",
            animation: "init_green"
        } : 2 == e ? {
            bgPic: "texture/selecttex/gameplay_select_mj_purpleLight",
            spine: "spine/selectspine/gameplay_selected_efx",
            animation: "init_purple"
        } : {
            bgPic: "texture/selecttex/gameplay_select_mj_redLight",
            spine: "spine/selectspine/gameplay_selected_efx",
            animation: "init_red"
        };
    };
    SelectSpine2Trait.prototype.onMainGameCtrl_initRes = function (e, t) {
        var i = e.ins;
        if (i && i.addPreloadRes) {
            i.addPreloadRes("SkeletonData", ["l_selectspine:spine/selectspine/gameplay_selected_efx"]);
            i.addPreloadRes("SpriteFrame", ["l_selectspine:texture/selecttex/gameplay_select_mj_greenLight", "l_selectspine:texture/selecttex/gameplay_select_mj_purpleLight", "l_selectspine:texture/selecttex/gameplay_select_mj_redLight"]);
        }
        t();
    };
    SelectSpine2Trait.prototype.getType2 = function (e) {
        var t = UserModel_1.default.getInstance().getGameDataByGameType(e);
        if (e == GameTypeEnums_1.MjGameType.Normal) {
            if (1 == this.localData[e])
                return this.getPicConfig(1);
            var i = t.getLevelId(), a = ExtractTool_1.default.getInstance().isHardUI(i);
            if (ExtractTool_1.default.getInstance().isExpertUI(i))
                return this.getPicConfig(3);
            if (a)
                return this.getPicConfig(2);
        }
        else if (e == GameTypeEnums_1.MjGameType.Travel) {
            if (1 == this.localData[e])
                return this.getPicConfig(1);
            var r = TravelGameModel_1.default.getInstance();
            i = TravelGameData_1.default.getInstance().getLevelId();
            if (r.isHardLevel(i))
                return this.getPicConfig(2);
        }
    };
    SelectSpine2Trait.prototype.onBaseTileNode_rsSelectEff = function (e, t) {
        var i = e.ins, a = i.imgSelectedCardBg, r = i.effectSelected, n = i.context.gameType, s = this.getType2(n);
        if (s && s.bgPic && s.spine && s.animation) {
            if (cc.isValid(a) && cc.isValid(r)) {
                var o = BaseSprite_1.default.refreshWithNode(a, s.bgPic, false, false, "l_selectspine");
                o.node.getComponent(cc.Sprite).trim = false;
                o.node.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.RAW;
                o.node.setScale(i.info.tileObject.layoutScale);
                BaseSpine_1.default.refreshWithNode(r, s.spine, "l_selectspine").setAnimation(s.animation, -1);
                t({
                    returnType: TraitCallbackReturnType.return,
                    isBreak: true
                });
            }
            else
                t();
        }
        else
            t();
    };
    SelectSpine2Trait.prototype.onAdMgr_videoSuccess = function (e, t) {
        var i = UserModel_1.default.getInstance().getCurrentGameType();
        i && (this.localData[i] = 1);
        t();
    };
    SelectSpine2Trait.prototype.onGsListener_onNewGame = function (e, t) {
        var i, a = null === (i = null == e ? void 0 : e.args) || void 0 === i ? void 0 : i[0];
        a && (this.localData[a] = 0);
        t();
    };
    SelectSpine2Trait.prototype.onGsListener_onReplayGame = function (e, t) {
        var i, a = null === (i = null == e ? void 0 : e.args) || void 0 === i ? void 0 : i[0];
        a && (this.localData[a] = 0);
        t();
    };
    SelectSpine2Trait.traitKey = "SelectSpine2";
    SelectSpine2Trait = __decorate([
        mj.trait,
        mj.class("SelectSpine2Trait")
    ], SelectSpine2Trait);
    return SelectSpine2Trait;
}(Trait_1.default));
exports.default = SelectSpine2Trait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3NlbGVjdHNwaW5lL1NjcmlwdHMvU2VsZWN0U3BpbmUyVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlGQUE0RTtBQUM1RSx3RkFBb0Y7QUFDcEYsc0ZBQWlGO0FBQ2pGLGdFQUEyRDtBQUMzRCx5RUFBb0U7QUFDcEUsMkVBQXNFO0FBQ3RFLDBGQUFxRjtBQUNyRixzRUFBaUU7QUFHakU7SUFBK0MscUNBQUs7SUFBcEQ7O0lBZ0ZBLENBQUM7SUE5RUMsa0NBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNELHdDQUFZLEdBQVosVUFBYSxDQUFDO1FBQ1osT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNkLEtBQUssRUFBRSxpREFBaUQ7WUFDeEQsS0FBSyxFQUFFLHlDQUF5QztZQUNoRCxTQUFTLEVBQUUsWUFBWTtTQUN4QixDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNYLEtBQUssRUFBRSxrREFBa0Q7WUFDekQsS0FBSyxFQUFFLHlDQUF5QztZQUNoRCxTQUFTLEVBQUUsYUFBYTtTQUN6QixDQUFDLENBQUMsQ0FBQztZQUNGLEtBQUssRUFBRSwrQ0FBK0M7WUFDdEQsS0FBSyxFQUFFLHlDQUF5QztZQUNoRCxTQUFTLEVBQUUsVUFBVTtTQUN0QixDQUFDO0lBQ0osQ0FBQztJQUNELGtEQUFzQixHQUF0QixVQUF1QixDQUFDLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLGFBQWEsRUFBRTtZQUN4QixDQUFDLENBQUMsYUFBYSxDQUFDLGNBQWMsRUFBRSxDQUFDLHVEQUF1RCxDQUFDLENBQUMsQ0FBQztZQUMzRixDQUFDLENBQUMsYUFB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QUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqRixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdCLENBQUMsRUFBRSxDQUFDO0lBQ04sQ0FBQztJQTlFTSwwQkFBUSxHQUFHLGNBQWMsQ0FBQztJQURkLGlCQUFpQjtRQUZyQyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsbUJBQW1CLENBQUM7T0FDVCxpQkFBaUIsQ0FnRnJDO0lBQUQsd0JBQUM7Q0FoRkQsQUFnRkMsQ0FoRjhDLGVBQUssR0FnRm5EO2tCQWhGb0IsaUJBQWlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEV4dHJhY3RUb29sIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9leHRyYWN0UXVlc3Rpb24vRXh0cmFjdFRvb2wnO1xuaW1wb3J0IHsgTWpHYW1lVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9zaW11bGF0b3IvY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG5pbXBvcnQgVHJhdmVsR2FtZURhdGEgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL3NpbXVsYXRvci9kYXRhL1RyYXZlbEdhbWVEYXRhJztcbmltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgQmFzZVNwaW5lIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvYmFzZS91aS9CYXNlU3BpbmUnO1xuaW1wb3J0IEJhc2VTcHJpdGUgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS9iYXNlL3VpL0Jhc2VTcHJpdGUnO1xuaW1wb3J0IFRyYXZlbEdhbWVNb2RlbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L3RyYXZlbC9tb2RlbC9UcmF2ZWxHYW1lTW9kZWwnO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L3VzZXIvVXNlck1vZGVsJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiU2VsZWN0U3BpbmUyVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdFNwaW5lMlRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIlNlbGVjdFNwaW5lMlwiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gIH1cbiAgZ2V0UGljQ29uZmlnKGUpIHtcbiAgICByZXR1cm4gMSA9PSBlID8ge1xuICAgICAgYmdQaWM6IFwidGV4dHVyZS9zZWxlY3R0ZXgvZ2FtZXBsYXlfc2VsZWN0X21qX2dyZWVuTGlnaHRcIixcbiAgICAgIHNwaW5lOiBcInNwaW5lL3NlbGVjdHNwaW5lL2dhbWVwbGF5X3NlbGVjdGVkX2VmeFwiLFxuICAgICAgYW5pbWF0aW9uOiBcImluaXRfZ3JlZW5cIlxuICAgIH0gOiAyID09IGUgPyB7XG4gICAgICBiZ1BpYzogXCJ0ZXh0dXJlL3NlbGVjdHRleC9nYW1lcGxheV9zZWxlY3RfbWpfcHVycGxlTGlnaHRcIixcbiAgICAgIHNwaW5lOiBcInNwaW5lL3NlbGVjdHNwaW5lL2dhbWVwbGF5X3NlbGVjdGVkX2VmeFwiLFxuICAgICAgYW5pbWF0aW9uOiBcImluaXRfcHVycGxlXCJcbiAgICB9IDoge1xuICAgICAgYmdQaWM6IFwidGV4dHVyZS9zZWxlY3R0ZXgvZ2FtZXBsYXlfc2VsZWN0X21qX3JlZExpZ2h0XCIsXG4gICAgICBzcGluZTogXCJzcGluZS9zZWxlY3RzcGluZS9nYW1lcGxheV9zZWxlY3RlZF9lZnhcIixcbiAgICAgIGFuaW1hdGlvbjogXCJpbml0X3JlZFwiXG4gICAgfTtcbiAgfVxuICBvbk1haW5HYW1lQ3RybF9pbml0UmVzKGUsIHQpIHtcbiAgICB2YXIgaSA9IGUuaW5zO1xuICAgIGlmIChpICYmIGkuYWRkUHJlbG9hZFJlcykge1xuICAgICAgaS5hZGRQcmVsb2FkUmVzKFwiU2tlbGV0b25EYXRhXCIsIFtcImxfc2VsZWN0c3BpbmU6c3BpbmUvc2VsZWN0c3BpbmUvZ2FtZXBsYXlfc2VsZWN0ZWRfZWZ4XCJdKTtcbiAgICAgIGkuYWRkUHJlbG9hZFJlcyhcIlNwcml0ZUZyYW1lXCIsIFtcImxfc2VsZWN0c3BpbmU6dGV4dHVyZS9zZWxlY3R0ZXgvZ2FtZXBsYXlfc2VsZWN0X21qX2dyZWVuTGlnaHRcIiwgXCJsX3NlbGVjdHNwaW5lOnRleHR1cmUvc2VsZWN0dGV4L2dhbWVwbGF5X3NlbGVjdF9tal9wdXJwbGVMaWdodFwiLCBcImxfc2VsZWN0c3BpbmU6dGV4dHVyZS9zZWxlY3R0ZXgvZ2FtZXBsYXlfc2VsZWN0X21qX3JlZExpZ2h0XCJdKTtcbiAgICB9XG4gICAgdCgpO1xuICB9XG4gIGdldFR5cGUyKGUpIHtcbiAgICB2YXIgdCA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEdhbWVEYXRhQnlHYW1lVHlwZShlKTtcbiAgICBpZiAoZSA9PSBNakdhbWVUeXBlLk5vcm1hbCkge1xuICAgICAgaWYgKDEgPT0gdGhpcy5sb2NhbERhdGFbZV0pIHJldHVybiB0aGlzLmdldFBpY0NvbmZpZygxKTtcbiAgICAgIHZhciBpID0gdC5nZXRMZXZlbElkKCksXG4gICAgICAgIGEgPSBFeHRyYWN0VG9vbC5nZXRJbnN0YW5jZSgpLmlzSGFyZFVJKGkpO1xuICAgICAgaWYgKEV4dHJhY3RUb29sLmdldEluc3RhbmNlKCkuaXNFeHBlcnRVSShpKSkgcmV0dXJuIHRoaXMuZ2V0UGljQ29uZmlnKDMpO1xuICAgICAgaWYgKGEpIHJldHVybiB0aGlzLmdldFBpY0NvbmZpZygyKTtcbiAgICB9IGVsc2UgaWYgKGUgPT0gTWpHYW1lVHlwZS5UcmF2ZWwpIHtcbiAgICAgIGlmICgxID09IHRoaXMubG9jYWxEYXRhW2VdKSByZXR1cm4gdGhpcy5nZXRQaWNDb25maWcoMSk7XG4gICAgICB2YXIgciA9IFRyYXZlbEdhbWVNb2RlbC5nZXRJbnN0YW5jZSgpO1xuICAgICAgaSA9IFRyYXZlbEdhbWVEYXRhLmdldEluc3RhbmNlKCkuZ2V0TGV2ZWxJZCgpO1xuICAgICAgaWYgKHIuaXNIYXJkTGV2ZWwoaSkpIHJldHVybiB0aGlzLmdldFBpY0NvbmZpZygyKTtcbiAgICB9XG4gIH1cbiAgb25CYXNlVGlsZU5vZGVfcnNTZWxlY3RFZmYoZSwgdCkge1xuICAgIHZhciBpID0gZS5pbnMsXG4gICAgICBhID0gaS5pbWdTZWxlY3RlZENhcmRCZyxcbiAgICAgIHIgPSBpLmVmZmVjdFNlbGVjdGVkLFxuICAgICAgbiA9IGkuY29udGV4dC5nYW1lVHlwZSxcbiAgICAgIHMgPSB0aGlzLmdldFR5cGUyKG4pO1xuICAgIGlmIChzICYmIHMuYmdQaWMgJiYgcy5zcGluZSAmJiBzLmFuaW1hdGlvbikge1xuICAgICAgaWYgKGNjLmlzVmFsaWQoYSkgJiYgY2MuaXNWYWxpZChyKSkge1xuICAgICAgICB2YXIgbyA9IEJhc2VTcHJpdGUucmVmcmVzaFdpdGhOb2RlKGEsIHMuYmdQaWMsIGZhbHNlLCBmYWxzZSwgXCJsX3NlbGVjdHNwaW5lXCIpO1xuICAgICAgICBvLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkudHJpbSA9IGZhbHNlO1xuICAgICAgICBvLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc2l6ZU1vZGUgPSBjYy5TcHJpdGUuU2l6ZU1vZGUuUkFXO1xuICAgICAgICBvLm5vZGUuc2V0U2NhbGUoaS5pbmZvLnRpbGVPYmplY3QubGF5b3V0U2NhbGUpO1xuICAgICAgICBCYXNlU3BpbmUucmVmcmVzaFdpdGhOb2RlKHIsIHMuc3BpbmUsIFwibF9zZWxlY3RzcGluZVwiKS5zZXRBbmltYXRpb24ocy5hbmltYXRpb24sIC0xKTtcbiAgICAgICAgdCh7XG4gICAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICAgIGlzQnJlYWs6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgdCgpO1xuICAgIH0gZWxzZSB0KCk7XG4gIH1cbiAgb25BZE1ncl92aWRlb1N1Y2Nlc3MoZSwgdCkge1xuICAgIHZhciBpID0gVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0Q3VycmVudEdhbWVUeXBlKCk7XG4gICAgaSAmJiAodGhpcy5sb2NhbERhdGFbaV0gPSAxKTtcbiAgICB0KCk7XG4gIH1cbiAgb25Hc0xpc3RlbmVyX29uTmV3R2FtZShlLCB0KSB7XG4gICAgdmFyIGksXG4gICAgICBhID0gbnVsbCA9PT0gKGkgPSBudWxsID09IGUgPyB2b2lkIDAgOiBlLmFyZ3MpIHx8IHZvaWQgMCA9PT0gaSA/IHZvaWQgMCA6IGlbMF07XG4gICAgYSAmJiAodGhpcy5sb2NhbERhdGFbYV0gPSAwKTtcbiAgICB0KCk7XG4gIH1cbiAgb25Hc0xpc3RlbmVyX29uUmVwbGF5R2FtZShlLCB0KSB7XG4gICAgdmFyIGksXG4gICAgICBhID0gbnVsbCA9PT0gKGkgPSBudWxsID09IGUgPyB2b2lkIDAgOiBlLmFyZ3MpIHx8IHZvaWQgMCA9PT0gaSA/IHZvaWQgMCA6IGlbMF07XG4gICAgYSAmJiAodGhpcy5sb2NhbERhdGFbYV0gPSAwKTtcbiAgICB0KCk7XG4gIH1cbn0iXX0=