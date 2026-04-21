
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_changeMatchNumsPos/Scripts/ChangeMatchNumsPosTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cb7bdmW2HxNzpKa3F1jfbBf', 'ChangeMatchNumsPosTrait');
// subpackages/r_changeMatchNumsPos/Scripts/ChangeMatchNumsPosTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var DataReader_1 = require("../../../Scripts/framework/data/DataReader");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var ConfigType_1 = require("../../../Scripts/gamePlay/base/data/ConfigType");
var NodeSkinTool_1 = require("../../../Scripts/NodeSkinTool");
var GameUtils_1 = require("../../../Scripts/core/simulator/util/GameUtils");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var ChangeMatchNumsPosTrait = /** @class */ (function (_super) {
    __extends(ChangeMatchNumsPosTrait, _super);
    function ChangeMatchNumsPosTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._skinKey = "ChangeMatchNumsPos";
        _this._isInitialized = false;
        return _this;
    }
    ChangeMatchNumsPosTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    ChangeMatchNumsPosTrait.prototype.onMainGRTop_applyTSCfg = function (t, e) {
        var o;
        this._isInitialized = true;
        var i = null === (o = t.args) || void 0 === o ? void 0 : o[0];
        this.applySkinConfig(i);
        e();
    };
    ChangeMatchNumsPosTrait.prototype.applySkinConfig = function (t) {
        var e, o, i, a, r;
        if (t && t.topRootNode) {
            var s = (null === (e = this._traitData.config) || void 0 === e ? void 0 : e.skinKey) || this._skinKey, c = DataReader_1.DataReader.getTypeList(ConfigType_1.ConfigType.mainGameTopSkin, "SkinKey", s);
            if (c && 0 !== c.length) {
                var d = t.topRootNode;
                NodeSkinTool_1.default.parseConfigList(d, c, t.gameType, "nodeTop");
                var v = UserModel_1.default.getInstance().getGameDataByGameType(GameTypeEnums_1.MjGameType.Normal), y = null !== (r = null !== (i = null === (o = null == v ? void 0 : v.getCurrentLevelId) || void 0 === o ? void 0 : o.call(v)) && void 0 !== i ? i : null === (a = null == v ? void 0 : v.getLevelId) || void 0 === a ? void 0 : a.call(v)) && void 0 !== r ? r : null;
                if (!("number" == typeof y && y <= 1)) {
                    var m = mj.getClassByName("MainGameTxtShowTrait"), g = null == m ? void 0 : m.getInstance();
                    if (true === (null == g ? void 0 : g.eventEnabled)) {
                        var h = d.getChildByName("labelCanMatchNum");
                        if (h) {
                            h.active = false;
                            h.opacity = 0;
                        }
                    }
                }
            }
        }
    };
    ChangeMatchNumsPosTrait.prototype.onScoreItem_updScore = function (t, e) {
        var o, i;
        if (this._isInitialized) {
            var a = t.ins;
            if ((null === (o = t.args) || void 0 === o ? void 0 : o[2]) && a) {
                var r = null === (i = a.node) || void 0 === i ? void 0 : i.getChildByName("spin_combo");
                if (r && !r.active) {
                    var n = r.getComponent(sp.Skeleton);
                    n && GameUtils_1.default.playSpine(n, "init", true);
                }
            }
            e();
        }
        else
            e();
    };
    ChangeMatchNumsPosTrait.traitKey = "ChangeMatchNumsPos";
    __decorate([
        mj.traitEvent("ChgMtchNmsPos_applyCfg")
    ], ChangeMatchNumsPosTrait.prototype, "applySkinConfig", null);
    ChangeMatchNumsPosTrait = __decorate([
        mj.trait,
        mj.class("ChangeMatchNumsPosTrait")
    ], ChangeMatchNumsPosTrait);
    return ChangeMatchNumsPosTrait;
}(Trait_1.default));
exports.default = ChangeMatchNumsPosTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX2NoYW5nZU1hdGNoTnVtc1Bvcy9TY3JpcHRzL0NoYW5nZU1hdGNoTnVtc1Bvc1RyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5RUFBd0U7QUFDeEUsZ0VBQTJEO0FBQzNELDZFQUE0RTtBQUM1RSw4REFBeUQ7QUFDekQsNEVBQXVFO0FBQ3ZFLHNFQUFpRTtBQUNqRSx3RkFBb0Y7QUFHcEY7SUFBcUQsMkNBQUs7SUFBMUQ7UUFBQSxxRUFxREM7UUFwREMsY0FBUSxHQUFHLG9CQUFvQixDQUFDO1FBQ2hDLG9CQUFjLEdBQUcsS0FBSyxDQUFDOztJQW1EekIsQ0FBQztJQWpEQyx3Q0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0Qsd0RBQXNCLEdBQXRCLFVBQXVCLENBQUMsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxDQUFDO1FBQ04sSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7UUFDM0IsSUFBSSxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4QixDQUFDLEVBQUUsQ0FBQztJQUNOLENBQUM7SUFFRCxpREFBZSxHQUFmLFVBQWdCLENBQUM7UUFDZixJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsRUFBRTtZQUN0QixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUNuRyxDQUFDLEdBQUcsdUJBQVUsQ0FBQyxXQUFXLENBQUMsdUJBQVUsQ0FBQyxlQUFlLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3ZFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxFQUFFO2dCQUN2QixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxDQUFDO2dCQUN0QixzQkFBWSxDQUFDLGVBQWUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDLENBQUM7Z0JBQzFELElBQUksQ0FBQyxHQUFHLG1CQUFTLENBQUMsV0FBVyxFQUFFLENBQUMscUJBQXFCLENBQUMsMEJBQVUsQ0FBQyxNQUFNLENBQUMsRUFDdEUsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUN4USxJQUFJLENBQUMsQ0FBQyxRQUFRLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFO29CQUNyQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDLHNCQUFzQixDQUFDLEVBQy9DLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO29CQUMzQyxJQUFJLElBQUksS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUU7d0JBQ2xELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQUMsQ0FBQzt3QkFDN0MsSUFBSSxDQUFDLEVBQUU7NEJBQ0wsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7NEJBQ2pCLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO3lCQUNmO3FCQUNGO2lCQUNGO2FBQ0Y7U0FDRjtJQUNILENBQUM7SUFDRCxzREFBb0IsR0FBcEIsVUFBcUIsQ0FBQyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ1QsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUM7WUFDZCxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ2hFLElBQUksQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDeEYsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFO29CQUNsQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDcEMsQ0FBQyxJQUFJLG1CQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7aUJBQzNDO2FBQ0Y7WUFDRCxDQUFDLEVBQUUsQ0FBQztTQUNMOztZQUFNLENBQUMsRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQWpETSxnQ0FBUSxHQUFHLG9CQUFvQixDQUFDO0lBWXZDO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQztrRUF3QnZDO0lBdENrQix1QkFBdUI7UUFGM0MsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLHlCQUF5QixDQUFDO09BQ2YsdUJBQXVCLENBcUQzQztJQUFELDhCQUFDO0NBckRELEFBcURDLENBckRvRCxlQUFLLEdBcUR6RDtrQkFyRG9CLHVCQUF1QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFSZWFkZXIgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay9kYXRhL0RhdGFSZWFkZXInO1xuaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCB7IENvbmZpZ1R5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L2Jhc2UvZGF0YS9Db25maWdUeXBlJztcbmltcG9ydCBOb2RlU2tpblRvb2wgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9Ob2RlU2tpblRvb2wnO1xuaW1wb3J0IEdhbWVVdGlscyBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL3V0aWwvR2FtZVV0aWxzJztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS91c2VyL1VzZXJNb2RlbCc7XG5pbXBvcnQgeyBNakdhbWVUeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiQ2hhbmdlTWF0Y2hOdW1zUG9zVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYW5nZU1hdGNoTnVtc1Bvc1RyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBfc2tpbktleSA9IFwiQ2hhbmdlTWF0Y2hOdW1zUG9zXCI7XG4gIF9pc0luaXRpYWxpemVkID0gZmFsc2U7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiQ2hhbmdlTWF0Y2hOdW1zUG9zXCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgfVxuICBvbk1haW5HUlRvcF9hcHBseVRTQ2ZnKHQsIGUpIHtcbiAgICB2YXIgbztcbiAgICB0aGlzLl9pc0luaXRpYWxpemVkID0gdHJ1ZTtcbiAgICB2YXIgaSA9IG51bGwgPT09IChvID0gdC5hcmdzKSB8fCB2b2lkIDAgPT09IG8gPyB2b2lkIDAgOiBvWzBdO1xuICAgIHRoaXMuYXBwbHlTa2luQ29uZmlnKGkpO1xuICAgIGUoKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkNoZ010Y2hObXNQb3NfYXBwbHlDZmdcIilcbiAgYXBwbHlTa2luQ29uZmlnKHQpIHtcbiAgICB2YXIgZSwgbywgaSwgYSwgcjtcbiAgICBpZiAodCAmJiB0LnRvcFJvb3ROb2RlKSB7XG4gICAgICB2YXIgcyA9IChudWxsID09PSAoZSA9IHRoaXMuX3RyYWl0RGF0YS5jb25maWcpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUuc2tpbktleSkgfHwgdGhpcy5fc2tpbktleSxcbiAgICAgICAgYyA9IERhdGFSZWFkZXIuZ2V0VHlwZUxpc3QoQ29uZmlnVHlwZS5tYWluR2FtZVRvcFNraW4sIFwiU2tpbktleVwiLCBzKTtcbiAgICAgIGlmIChjICYmIDAgIT09IGMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBkID0gdC50b3BSb290Tm9kZTtcbiAgICAgICAgTm9kZVNraW5Ub29sLnBhcnNlQ29uZmlnTGlzdChkLCBjLCB0LmdhbWVUeXBlLCBcIm5vZGVUb3BcIik7XG4gICAgICAgIHZhciB2ID0gVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0R2FtZURhdGFCeUdhbWVUeXBlKE1qR2FtZVR5cGUuTm9ybWFsKSxcbiAgICAgICAgICB5ID0gbnVsbCAhPT0gKHIgPSBudWxsICE9PSAoaSA9IG51bGwgPT09IChvID0gbnVsbCA9PSB2ID8gdm9pZCAwIDogdi5nZXRDdXJyZW50TGV2ZWxJZCkgfHwgdm9pZCAwID09PSBvID8gdm9pZCAwIDogby5jYWxsKHYpKSAmJiB2b2lkIDAgIT09IGkgPyBpIDogbnVsbCA9PT0gKGEgPSBudWxsID09IHYgPyB2b2lkIDAgOiB2LmdldExldmVsSWQpIHx8IHZvaWQgMCA9PT0gYSA/IHZvaWQgMCA6IGEuY2FsbCh2KSkgJiYgdm9pZCAwICE9PSByID8gciA6IG51bGw7XG4gICAgICAgIGlmICghKFwibnVtYmVyXCIgPT0gdHlwZW9mIHkgJiYgeSA8PSAxKSkge1xuICAgICAgICAgIHZhciBtID0gbWouZ2V0Q2xhc3NCeU5hbWUoXCJNYWluR2FtZVR4dFNob3dUcmFpdFwiKSxcbiAgICAgICAgICAgIGcgPSBudWxsID09IG0gPyB2b2lkIDAgOiBtLmdldEluc3RhbmNlKCk7XG4gICAgICAgICAgaWYgKHRydWUgPT09IChudWxsID09IGcgPyB2b2lkIDAgOiBnLmV2ZW50RW5hYmxlZCkpIHtcbiAgICAgICAgICAgIHZhciBoID0gZC5nZXRDaGlsZEJ5TmFtZShcImxhYmVsQ2FuTWF0Y2hOdW1cIik7XG4gICAgICAgICAgICBpZiAoaCkge1xuICAgICAgICAgICAgICBoLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICBoLm9wYWNpdHkgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBvblNjb3JlSXRlbV91cGRTY29yZSh0LCBlKSB7XG4gICAgdmFyIG8sIGk7XG4gICAgaWYgKHRoaXMuX2lzSW5pdGlhbGl6ZWQpIHtcbiAgICAgIHZhciBhID0gdC5pbnM7XG4gICAgICBpZiAoKG51bGwgPT09IChvID0gdC5hcmdzKSB8fCB2b2lkIDAgPT09IG8gPyB2b2lkIDAgOiBvWzJdKSAmJiBhKSB7XG4gICAgICAgIHZhciByID0gbnVsbCA9PT0gKGkgPSBhLm5vZGUpIHx8IHZvaWQgMCA9PT0gaSA/IHZvaWQgMCA6IGkuZ2V0Q2hpbGRCeU5hbWUoXCJzcGluX2NvbWJvXCIpO1xuICAgICAgICBpZiAociAmJiAhci5hY3RpdmUpIHtcbiAgICAgICAgICB2YXIgbiA9IHIuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKTtcbiAgICAgICAgICBuICYmIEdhbWVVdGlscy5wbGF5U3BpbmUobiwgXCJpbml0XCIsIHRydWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlKCk7XG4gICAgfSBlbHNlIGUoKTtcbiAgfVxufSJdfQ==