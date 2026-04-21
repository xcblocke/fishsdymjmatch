
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_selectspine/Scripts/SelectSpine3Trait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b029604TGdHraGyuguMf4g2', 'SelectSpine3Trait');
// subpackages/l_selectspine/Scripts/SelectSpine3Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var DataReader_1 = require("../../../Scripts/framework/data/DataReader");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var ConfigType_1 = require("../../../Scripts/gamePlay/base/data/ConfigType");
var BaseSpine_1 = require("../../../Scripts/gamePlay/base/ui/BaseSpine");
var BaseSprite_1 = require("../../../Scripts/gamePlay/base/ui/BaseSprite");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var SelectSpine3Trait = /** @class */ (function (_super) {
    __extends(SelectSpine3Trait, _super);
    function SelectSpine3Trait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SelectSpine3Trait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    SelectSpine3Trait.prototype.getPicConfig = function (e) {
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
    SelectSpine3Trait.prototype.onGsListener_onReplayGame = function (e, t) {
        var i, a = null === (i = null == e ? void 0 : e.args) || void 0 === i ? void 0 : i[0];
        if (a && a == GameTypeEnums_1.MjGameType.DailyChallenge) {
            var r = UserModel_1.default.getInstance().getGameDataByGameType(a);
            this.localData[a] = r.getDailyChallengeTimestamp();
        }
        t();
    };
    SelectSpine3Trait.prototype.onMainGameCtrl_initRes = function (e, t) {
        var i = e.ins;
        if (i && i.addPreloadRes) {
            i.addPreloadRes("SkeletonData", ["l_selectspine:spine/selectspine/gameplay_selected_efx"]);
            i.addPreloadRes("SpriteFrame", ["l_selectspine:texture/selecttex/gameplay_select_mj_greenLight", "l_selectspine:texture/selecttex/gameplay_select_mj_purpleLight", "l_selectspine:texture/selecttex/gameplay_select_mj_redLight"]);
        }
        t();
    };
    SelectSpine3Trait.prototype.getDailyIdByYearMonth = function (e, t) {
        var i, a, r = DataReader_1.DataReader.getList(ConfigType_1.ConfigType.daily_challenge);
        try {
            for (var n = __values(r), o = n.next(); !o.done; o = n.next()) {
                var c = o.value;
                if (c.Year === e && c.Month === t)
                    return c.ID;
            }
        }
        catch (e) {
            i = {
                error: e
            };
        }
        finally {
            try {
                o && !o.done && (a = n.return) && a.call(n);
            }
            finally {
                if (i)
                    throw i.error;
            }
        }
    };
    SelectSpine3Trait.prototype.getDailyModel = function () {
        var e = mj.getClassByName("DailyModel");
        return null == e ? void 0 : e.getInstance();
    };
    SelectSpine3Trait.prototype.getFile = function (e) {
        var t;
        if (e != GameTypeEnums_1.MjGameType.DailyChallenge) {
            if (UserModel_1.default.getInstance().getGameDataByGameType(e).getReplayCount() > 1)
                return this.getPicConfig(1);
        }
        else {
            var i = UserModel_1.default.getInstance().getGameDataByGameType(e).getDailyChallengeTimestamp();
            if (i) {
                var a = i.split("-"), r = parseInt(a[0]), n = parseInt(a[1]), s = parseInt(a[2]), l = this.getDailyIdByYearMonth(r, n);
                if (null != l && 3 == (null === (t = this.getDailyModel()) || void 0 === t ? void 0 : t.getDayStatus(l, s)))
                    return this.getPicConfig(1);
                if (i == this.localData[e])
                    return this.getPicConfig(1);
            }
        }
    };
    SelectSpine3Trait.prototype.onBaseTileNode_rsSelectEff = function (e, t) {
        var i = e.ins, a = i.imgSelectedCardBg, r = i.effectSelected, n = i.context.gameType, s = this.getFile(n);
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
    SelectSpine3Trait.traitKey = "SelectSpine3";
    SelectSpine3Trait = __decorate([
        mj.trait,
        mj.class("SelectSpine3Trait")
    ], SelectSpine3Trait);
    return SelectSpine3Trait;
}(Trait_1.default));
exports.default = SelectSpine3Trait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3NlbGVjdHNwaW5lL1NjcmlwdHMvU2VsZWN0U3BpbmUzVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdGQUFvRjtBQUNwRix5RUFBd0U7QUFDeEUsZ0VBQTJEO0FBQzNELDZFQUE0RTtBQUM1RSx5RUFBb0U7QUFDcEUsMkVBQXNFO0FBQ3RFLHNFQUFpRTtBQUdqRTtJQUErQyxxQ0FBSztJQUFwRDs7SUFtR0EsQ0FBQztJQWpHQyxrQ0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0Qsd0NBQVksR0FBWixVQUFhLENBQUM7UUFDWixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2QsS0FBSyxFQUFFLGlEQUFpRDtZQUN4RCxLQUFLLEVBQUUseUNBQXlDO1lBQ2hELFNBQVMsRUFBRSxZQUFZO1NBQ3hCLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ1gsS0FBSyxFQUFFLGtEQUFrRDtZQUN6RCxLQUFLLEVBQUUseUNBQXlDO1lBQ2hELFNBQVMsRUFBRSxhQUFhO1NBQ3pCLENBQUMsQ0FBQyxDQUFDO1lBQ0YsS0FBSyxFQUFFLCtDQUErQztZQUN0RCxLQUFLLEVBQUUseUNBQXlDO1lBQ2hELFNBQVMsRUFBRSxVQUFVO1NBQ3RCLENBQUM7SUFDSixDQUFDO0lBQ0QscURBQXlCLEdBQXpCLFVBQTBCLENBQUMsRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxFQUNILENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUss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LGlCQUFpQixDQW1HckM7SUFBRCx3QkFBQztDQW5HRCxBQW1HQyxDQW5HOEMsZUFBSyxHQW1HbkQ7a0JBbkdvQixpQkFBaUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNakdhbWVUeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbmltcG9ydCB7IERhdGFSZWFkZXIgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay9kYXRhL0RhdGFSZWFkZXInO1xuaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCB7IENvbmZpZ1R5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L2Jhc2UvZGF0YS9Db25maWdUeXBlJztcbmltcG9ydCBCYXNlU3BpbmUgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS9iYXNlL3VpL0Jhc2VTcGluZSc7XG5pbXBvcnQgQmFzZVNwcml0ZSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L2Jhc2UvdWkvQmFzZVNwcml0ZSc7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvdXNlci9Vc2VyTW9kZWwnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJTZWxlY3RTcGluZTNUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0U3BpbmUzVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiU2VsZWN0U3BpbmUzXCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgfVxuICBnZXRQaWNDb25maWcoZSkge1xuICAgIHJldHVybiAxID09IGUgPyB7XG4gICAgICBiZ1BpYzogXCJ0ZXh0dXJlL3NlbGVjdHRleC9nYW1lcGxheV9zZWxlY3RfbWpfZ3JlZW5MaWdodFwiLFxuICAgICAgc3BpbmU6IFwic3BpbmUvc2VsZWN0c3BpbmUvZ2FtZXBsYXlfc2VsZWN0ZWRfZWZ4XCIsXG4gICAgICBhbmltYXRpb246IFwiaW5pdF9ncmVlblwiXG4gICAgfSA6IDIgPT0gZSA/IHtcbiAgICAgIGJnUGljOiBcInRleHR1cmUvc2VsZWN0dGV4L2dhbWVwbGF5X3NlbGVjdF9tal9wdXJwbGVMaWdodFwiLFxuICAgICAgc3BpbmU6IFwic3BpbmUvc2VsZWN0c3BpbmUvZ2FtZXBsYXlfc2VsZWN0ZWRfZWZ4XCIsXG4gICAgICBhbmltYXRpb246IFwiaW5pdF9wdXJwbGVcIlxuICAgIH0gOiB7XG4gICAgICBiZ1BpYzogXCJ0ZXh0dXJlL3NlbGVjdHRleC9nYW1lcGxheV9zZWxlY3RfbWpfcmVkTGlnaHRcIixcbiAgICAgIHNwaW5lOiBcInNwaW5lL3NlbGVjdHNwaW5lL2dhbWVwbGF5X3NlbGVjdGVkX2VmeFwiLFxuICAgICAgYW5pbWF0aW9uOiBcImluaXRfcmVkXCJcbiAgICB9O1xuICB9XG4gIG9uR3NMaXN0ZW5lcl9vblJlcGxheUdhbWUoZSwgdCkge1xuICAgIHZhciBpLFxuICAgICAgYSA9IG51bGwgPT09IChpID0gbnVsbCA9PSBlID8gdm9pZCAwIDogZS5hcmdzKSB8fCB2b2lkIDAgPT09IGkgPyB2b2lkIDAgOiBpWzBdO1xuICAgIGlmIChhICYmIGEgPT0gTWpHYW1lVHlwZS5EYWlseUNoYWxsZW5nZSkge1xuICAgICAgdmFyIHIgPSBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRHYW1lRGF0YUJ5R2FtZVR5cGUoYSk7XG4gICAgICB0aGlzLmxvY2FsRGF0YVthXSA9IHIuZ2V0RGFpbHlDaGFsbGVuZ2VUaW1lc3RhbXAoKTtcbiAgICB9XG4gICAgdCgpO1xuICB9XG4gIG9uTWFpbkdhbWVDdHJsX2luaXRSZXMoZSwgdCkge1xuICAgIHZhciBpID0gZS5pbnM7XG4gICAgaWYgKGkgJiYgaS5hZGRQcmVsb2FkUmVzKSB7XG4gICAgICBpLmFkZFByZWxvYWRSZXMoXCJTa2VsZXRvbkRhdGFcIiwgW1wibF9zZWxlY3RzcGluZTpzcGluZS9zZWxlY3RzcGluZS9nYW1lcGxheV9zZWxlY3RlZF9lZnhcIl0pO1xuICAgICAgaS5hZGRQcmVsb2FkUmVzKFwiU3ByaXRlRnJhbWVcIiwgW1wibF9zZWxlY3RzcGluZTp0ZXh0dXJlL3NlbGVjdHRleC9nYW1lcGxheV9zZWxlY3RfbWpfZ3JlZW5MaWdodFwiLCBcImxfc2VsZWN0c3BpbmU6dGV4dHVyZS9zZWxlY3R0ZXgvZ2FtZXBsYXlfc2VsZWN0X21qX3B1cnBsZUxpZ2h0XCIsIFwibF9zZWxlY3RzcGluZTp0ZXh0dXJlL3NlbGVjdHRleC9nYW1lcGxheV9zZWxlY3RfbWpfcmVkTGlnaHRcIl0pO1xuICAgIH1cbiAgICB0KCk7XG4gIH1cbiAgZ2V0RGFpbHlJZEJ5WWVhck1vbnRoKGUsIHQpIHtcbiAgICB2YXIgaSxcbiAgICAgIGEsXG4gICAgICByID0gRGF0YVJlYWRlci5nZXRMaXN0KENvbmZpZ1R5cGUuZGFpbHlfY2hhbGxlbmdlKTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgbiA9IF9fdmFsdWVzKHIpLCBvID0gbi5uZXh0KCk7ICFvLmRvbmU7IG8gPSBuLm5leHQoKSkge1xuICAgICAgICB2YXIgYyA9IG8udmFsdWU7XG4gICAgICAgIGlmIChjLlllYXIgPT09IGUgJiYgYy5Nb250aCA9PT0gdCkgcmV0dXJuIGMuSUQ7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaSA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIG8gJiYgIW8uZG9uZSAmJiAoYSA9IG4ucmV0dXJuKSAmJiBhLmNhbGwobik7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoaSkgdGhyb3cgaS5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZ2V0RGFpbHlNb2RlbCgpIHtcbiAgICB2YXIgZSA9IG1qLmdldENsYXNzQnlOYW1lKFwiRGFpbHlNb2RlbFwiKTtcbiAgICByZXR1cm4gbnVsbCA9PSBlID8gdm9pZCAwIDogZS5nZXRJbnN0YW5jZSgpO1xuICB9XG4gIGdldEZpbGUoZSkge1xuICAgIHZhciB0O1xuICAgIGlmIChlICE9IE1qR2FtZVR5cGUuRGFpbHlDaGFsbGVuZ2UpIHtcbiAgICAgIGlmIChVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRHYW1lRGF0YUJ5R2FtZVR5cGUoZSkuZ2V0UmVwbGF5Q291bnQoKSA+IDEpIHJldHVybiB0aGlzLmdldFBpY0NvbmZpZygxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGkgPSBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRHYW1lRGF0YUJ5R2FtZVR5cGUoZSkuZ2V0RGFpbHlDaGFsbGVuZ2VUaW1lc3RhbXAoKTtcbiAgICAgIGlmIChpKSB7XG4gICAgICAgIHZhciBhID0gaS5zcGxpdChcIi1cIiksXG4gICAgICAgICAgciA9IHBhcnNlSW50KGFbMF0pLFxuICAgICAgICAgIG4gPSBwYXJzZUludChhWzFdKSxcbiAgICAgICAgICBzID0gcGFyc2VJbnQoYVsyXSksXG4gICAgICAgICAgbCA9IHRoaXMuZ2V0RGFpbHlJZEJ5WWVhck1vbnRoKHIsIG4pO1xuICAgICAgICBpZiAobnVsbCAhPSBsICYmIDMgPT0gKG51bGwgPT09ICh0ID0gdGhpcy5nZXREYWlseU1vZGVsKCkpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQuZ2V0RGF5U3RhdHVzKGwsIHMpKSkgcmV0dXJuIHRoaXMuZ2V0UGljQ29uZmlnKDEpO1xuICAgICAgICBpZiAoaSA9PSB0aGlzLmxvY2FsRGF0YVtlXSkgcmV0dXJuIHRoaXMuZ2V0UGljQ29uZmlnKDEpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBvbkJhc2VUaWxlTm9kZV9yc1NlbGVjdEVmZihlLCB0KSB7XG4gICAgdmFyIGkgPSBlLmlucyxcbiAgICAgIGEgPSBpLmltZ1NlbGVjdGVkQ2FyZEJnLFxuICAgICAgciA9IGkuZWZmZWN0U2VsZWN0ZWQsXG4gICAgICBuID0gaS5jb250ZXh0LmdhbWVUeXBlLFxuICAgICAgcyA9IHRoaXMuZ2V0RmlsZShuKTtcbiAgICBpZiAocyAmJiBzLmJnUGljICYmIHMuc3BpbmUgJiYgcy5hbmltYXRpb24pIHtcbiAgICAgIGlmIChjYy5pc1ZhbGlkKGEpICYmIGNjLmlzVmFsaWQocikpIHtcbiAgICAgICAgdmFyIG8gPSBCYXNlU3ByaXRlLnJlZnJlc2hXaXRoTm9kZShhLCBzLmJnUGljLCBmYWxzZSwgZmFsc2UsIFwibF9zZWxlY3RzcGluZVwiKTtcbiAgICAgICAgby5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnRyaW0gPSBmYWxzZTtcbiAgICAgICAgby5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNpemVNb2RlID0gY2MuU3ByaXRlLlNpemVNb2RlLlJBVztcbiAgICAgICAgby5ub2RlLnNldFNjYWxlKGkuaW5mby50aWxlT2JqZWN0LmxheW91dFNjYWxlKTtcbiAgICAgICAgQmFzZVNwaW5lLnJlZnJlc2hXaXRoTm9kZShyLCBzLnNwaW5lLCBcImxfc2VsZWN0c3BpbmVcIikuc2V0QW5pbWF0aW9uKHMuYW5pbWF0aW9uLCAtMSk7XG4gICAgICAgIHQoe1xuICAgICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgICBpc0JyZWFrOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHQoKTtcbiAgICB9IGVsc2UgdCgpO1xuICB9XG59Il19