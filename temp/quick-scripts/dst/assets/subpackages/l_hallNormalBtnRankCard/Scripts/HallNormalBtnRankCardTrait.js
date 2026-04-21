
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_hallNormalBtnRankCard/Scripts/HallNormalBtnRankCardTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fe26bafEUBClaS7zm7Gr7WC', 'HallNormalBtnRankCardTrait');
// subpackages/l_hallNormalBtnRankCard/Scripts/HallNormalBtnRankCardTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var DataReader_1 = require("../../../Scripts/framework/data/DataReader");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var ConfigType_1 = require("../../../Scripts/gamePlay/base/data/ConfigType");
var NodeSkinTool_1 = require("../../../Scripts/NodeSkinTool");
var BaseSprite_1 = require("../../../Scripts/gamePlay/base/ui/BaseSprite");
var CardUtil_1 = require("../../../Scripts/gamePlay/user/CardUtil");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var HallNormalBtnRankCardTrait = /** @class */ (function (_super) {
    __extends(HallNormalBtnRankCardTrait, _super);
    function HallNormalBtnRankCardTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HallNormalBtnRankCardTrait_1 = HallNormalBtnRankCardTrait;
    Object.defineProperty(HallNormalBtnRankCardTrait.prototype, "haveCardConfigList", {
        get: function () {
            var t, e = (null === (t = this.traitData.config) || void 0 === t ? void 0 : t.haveCardSkinKey) || "HallNormalBtnRankCard";
            return DataReader_1.DataReader.getTypeList(ConfigType_1.ConfigType.mainGameTopSkin, "SkinKey", e);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HallNormalBtnRankCardTrait.prototype, "noCardConfigList", {
        get: function () {
            var t, e = (null === (t = this.traitData.config) || void 0 === t ? void 0 : t.noCardSkinKey) || "HallNormalBtnNoCard";
            return DataReader_1.DataReader.getTypeList(ConfigType_1.ConfigType.mainGameTopSkin, "SkinKey", e);
        },
        enumerable: false,
        configurable: true
    });
    HallNormalBtnRankCardTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    HallNormalBtnRankCardTrait.prototype.onHallNmlBtn_onLoad = function (t, e) {
        try {
            var r = t.ins, o = null == r ? void 0 : r.BgBtnNode;
            if (!cc.isValid(o)) {
                e();
                return;
            }
            this.createCardNode(o);
            e();
        }
        catch (t) {
            console.error("[" + HallNormalBtnRankCardTrait_1.traitKey + "] onHallNmlBtn_onLoad 错误: " + (null == t ? void 0 : t.message));
            e();
        }
    };
    HallNormalBtnRankCardTrait.prototype.onHallNmlBtn_updateUI = function (t, e) {
        try {
            var r = t.ins, o = null == r ? void 0 : r.BgBtnNode;
            this.updateCardDisplay(o);
            e();
        }
        catch (t) {
            console.error("[" + HallNormalBtnRankCardTrait_1.traitKey + "] onHallNmlBtn_updateUI 错误: " + (null == t ? void 0 : t.message));
            e();
        }
    };
    HallNormalBtnRankCardTrait.prototype.onHallNmlBtn_forceUpdate = function (t, e) {
        try {
            var r = t.ins, o = null == r ? void 0 : r.BgBtnNode;
            this.checkShouldShow();
            this.updateCardDisplay(o);
            e();
        }
        catch (t) {
            console.error("[" + HallNormalBtnRankCardTrait_1.traitKey + "] onHallNmlBtn_forceUpdate 错误: " + (null == t ? void 0 : t.message));
            e();
        }
    };
    HallNormalBtnRankCardTrait.prototype.createCardNode = function (t) {
        var e = this.noCardConfigList;
        cc.isValid(t) && e && 0 !== e.length && NodeSkinTool_1.default.parseConfigList(t, e, GameTypeEnums_1.MjGameType.Normal, t.name);
    };
    HallNormalBtnRankCardTrait.prototype.updateCardDisplay = function (t) {
        if (cc.isValid(t))
            if (this.checkShouldShow()) {
                NodeSkinTool_1.default.parseConfigList(t, this.haveCardConfigList, GameTypeEnums_1.MjGameType.Normal, t.name);
                this.updateCardBg(cc.find("cardNode/cardBg", t));
                this.updateCardSprite(cc.find("cardNode/card", t));
            }
            else
                NodeSkinTool_1.default.parseConfigList(t, this.noCardConfigList, GameTypeEnums_1.MjGameType.Normal, t.name);
    };
    HallNormalBtnRankCardTrait.prototype.checkShouldShow = function () {
        var t, e, a;
        try {
            var r = mj.getClassByName("RankModel");
            if (!r)
                return false;
            var o = null === (t = r.getInstance) || void 0 === t ? void 0 : t.call(r);
            return null !== (a = null === (e = null == o ? void 0 : o.hasOpeningActivity) || void 0 === e ? void 0 : e.call(o)) && void 0 !== a && a;
        }
        catch (t) {
            return false;
        }
    };
    HallNormalBtnRankCardTrait.prototype.updateCardBg = function (t) {
        if (cc.isValid(t)) {
            var e = CardUtil_1.default.getAtlasPathAndBundleName("gameplay_special_mj_2"), a = e.path, r = e.bundleName, o = e.fromAtlas;
            BaseSprite_1.default.refreshWithNode(t, a, o, false, r);
        }
    };
    HallNormalBtnRankCardTrait.prototype.updateCardSprite = function (t) {
        cc.isValid(t) && this.updateImgCard(t);
    };
    HallNormalBtnRankCardTrait.prototype.updateImgCard = function (t) {
        var e = UserModel_1.default.getInstance().getRankCardResName(), a = CardUtil_1.default.getAtlasPathAndBundleName(e), r = a.path, o = a.bundleName, i = a.fromAtlas;
        BaseSprite_1.default.refreshWithNode(t, r, i, false, o);
    };
    var HallNormalBtnRankCardTrait_1;
    HallNormalBtnRankCardTrait.traitKey = "HallNormalBtnRankCard";
    HallNormalBtnRankCardTrait = HallNormalBtnRankCardTrait_1 = __decorate([
        mj.trait,
        mj.class("HallNormalBtnRankCardTrait")
    ], HallNormalBtnRankCardTrait);
    return HallNormalBtnRankCardTrait;
}(Trait_1.default));
exports.default = HallNormalBtnRankCardTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2hhbGxOb3JtYWxCdG5SYW5rQ2FyZC9TY3JpcHRzL0hhbGxOb3JtYWxCdG5SYW5rQ2FyZFRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3RkFBb0Y7QUFDcEYseUVBQXdFO0FBQ3hFLGdFQUEyRDtBQUMzRCw2RUFBNEU7QUFDNUUsOERBQXlEO0FBQ3pELDJFQUFzRTtBQUN0RSxvRUFBK0Q7QUFDL0Qsc0VBQWlFO0FBR2pFO0lBQXdELDhDQUFLO0lBQTdEOztJQStGQSxDQUFDO21DQS9Gb0IsMEJBQTBCO0lBRTdDLHNCQUFJLDBEQUFrQjthQUF0QjtZQUNFLElBQUksQ0FBQyxFQUNILENBQUMsR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsSUFBSSx1QkFBdUIsQ0FBQztZQUNySCxPQUFPLHVCQUFVLENBQUMsV0FBVyxDQUFDLHVCQUFVLENBQUMsZUFBZSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMxRSxDQUFDOzs7T0FBQTtJQUNELHNCQUFJLHdEQUFnQjthQUFwQjtZQUNFLElBQUksQ0FBQyxFQUNILENBQUMsR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsSUFBSSxxQkFBcUIsQ0FBQztZQUNqSCxPQUFPLHVCQUFVLENBQUMsV0FBVyxDQUFDLHVCQUFVLENBQUMsZUFBZSxFQUFFLFNBQVMsRUFBRSxDQUFDLENB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SSxFQUNWLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxFQUNoQixDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNsQixvQkFBVSxDQUFDLGVBQWUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDaEQsQ0FBQzs7SUE3Rk0sbUNBQVEsR0FBRyx1QkFBdUIsQ0FBQztJQUR2QiwwQkFBMEI7UUFGOUMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLDRCQUE0QixDQUFDO09BQ2xCLDBCQUEwQixDQStGOUM7SUFBRCxpQ0FBQztDQS9GRCxBQStGQyxDQS9GdUQsZUFBSyxHQStGNUQ7a0JBL0ZvQiwwQkFBMEIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNakdhbWVUeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbmltcG9ydCB7IERhdGFSZWFkZXIgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay9kYXRhL0RhdGFSZWFkZXInO1xuaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCB7IENvbmZpZ1R5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L2Jhc2UvZGF0YS9Db25maWdUeXBlJztcbmltcG9ydCBOb2RlU2tpblRvb2wgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9Ob2RlU2tpblRvb2wnO1xuaW1wb3J0IEJhc2VTcHJpdGUgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS9iYXNlL3VpL0Jhc2VTcHJpdGUnO1xuaW1wb3J0IENhcmRVdGlsIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvdXNlci9DYXJkVXRpbCc7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvdXNlci9Vc2VyTW9kZWwnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJIYWxsTm9ybWFsQnRuUmFua0NhcmRUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGFsbE5vcm1hbEJ0blJhbmtDYXJkVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiSGFsbE5vcm1hbEJ0blJhbmtDYXJkXCI7XG4gIGdldCBoYXZlQ2FyZENvbmZpZ0xpc3QoKSB7XG4gICAgdmFyIHQsXG4gICAgICBlID0gKG51bGwgPT09ICh0ID0gdGhpcy50cmFpdERhdGEuY29uZmlnKSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0LmhhdmVDYXJkU2tpbktleSkgfHwgXCJIYWxsTm9ybWFsQnRuUmFua0NhcmRcIjtcbiAgICByZXR1cm4gRGF0YVJlYWRlci5nZXRUeXBlTGlzdChDb25maWdUeXBlLm1haW5HYW1lVG9wU2tpbiwgXCJTa2luS2V5XCIsIGUpO1xuICB9XG4gIGdldCBub0NhcmRDb25maWdMaXN0KCkge1xuICAgIHZhciB0LFxuICAgICAgZSA9IChudWxsID09PSAodCA9IHRoaXMudHJhaXREYXRhLmNvbmZpZykgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC5ub0NhcmRTa2luS2V5KSB8fCBcIkhhbGxOb3JtYWxCdG5Ob0NhcmRcIjtcbiAgICByZXR1cm4gRGF0YVJlYWRlci5nZXRUeXBlTGlzdChDb25maWdUeXBlLm1haW5HYW1lVG9wU2tpbiwgXCJTa2luS2V5XCIsIGUpO1xuICB9XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgfVxuICBvbkhhbGxObWxCdG5fb25Mb2FkKHQsIGUpIHtcbiAgICB0cnkge1xuICAgICAgdmFyIHIgPSB0LmlucyxcbiAgICAgICAgbyA9IG51bGwgPT0gciA/IHZvaWQgMCA6IHIuQmdCdG5Ob2RlO1xuICAgICAgaWYgKCFjYy5pc1ZhbGlkKG8pKSB7XG4gICAgICAgIGUoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5jcmVhdGVDYXJkTm9kZShvKTtcbiAgICAgIGUoKTtcbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiW1wiICsgSGFsbE5vcm1hbEJ0blJhbmtDYXJkVHJhaXQudHJhaXRLZXkgKyBcIl0gb25IYWxsTm1sQnRuX29uTG9hZCDplJnor686IFwiICsgKG51bGwgPT0gdCA/IHZvaWQgMCA6IHQubWVzc2FnZSkpO1xuICAgICAgZSgpO1xuICAgIH1cbiAgfVxuICBvbkhhbGxObWxCdG5fdXBkYXRlVUkodCwgZSkge1xuICAgIHRyeSB7XG4gICAgICB2YXIgciA9IHQuaW5zLFxuICAgICAgICBvID0gbnVsbCA9PSByID8gdm9pZCAwIDogci5CZ0J0bk5vZGU7XG4gICAgICB0aGlzLnVwZGF0ZUNhcmREaXNwbGF5KG8pO1xuICAgICAgZSgpO1xuICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJbXCIgKyBIYWxsTm9ybWFsQnRuUmFua0NhcmRUcmFpdC50cmFpdEtleSArIFwiXSBvbkhhbGxObWxCdG5fdXBkYXRlVUkg6ZSZ6K+vOiBcIiArIChudWxsID09IHQgPyB2b2lkIDAgOiB0Lm1lc3NhZ2UpKTtcbiAgICAgIGUoKTtcbiAgICB9XG4gIH1cbiAgb25IYWxsTm1sQnRuX2ZvcmNlVXBkYXRlKHQsIGUpIHtcbiAgICB0cnkge1xuICAgICAgdmFyIHIgPSB0LmlucyxcbiAgICAgICAgbyA9IG51bGwgPT0gciA/IHZvaWQgMCA6IHIuQmdCdG5Ob2RlO1xuICAgICAgdGhpcy5jaGVja1Nob3VsZFNob3coKTtcbiAgICAgIHRoaXMudXBkYXRlQ2FyZERpc3BsYXkobyk7XG4gICAgICBlKCk7XG4gICAgfSBjYXRjaCAodCkge1xuICAgICAgY29uc29sZS5lcnJvcihcIltcIiArIEhhbGxOb3JtYWxCdG5SYW5rQ2FyZFRyYWl0LnRyYWl0S2V5ICsgXCJdIG9uSGFsbE5tbEJ0bl9mb3JjZVVwZGF0ZSDplJnor686IFwiICsgKG51bGwgPT0gdCA/IHZvaWQgMCA6IHQubWVzc2FnZSkpO1xuICAgICAgZSgpO1xuICAgIH1cbiAgfVxuICBjcmVhdGVDYXJkTm9kZSh0KSB7XG4gICAgdmFyIGUgPSB0aGlzLm5vQ2FyZENvbmZpZ0xpc3Q7XG4gICAgY2MuaXNWYWxpZCh0KSAmJiBlICYmIDAgIT09IGUubGVuZ3RoICYmIE5vZGVTa2luVG9vbC5wYXJzZUNvbmZpZ0xpc3QodCwgZSwgTWpHYW1lVHlwZS5Ob3JtYWwsIHQubmFtZSk7XG4gIH1cbiAgdXBkYXRlQ2FyZERpc3BsYXkodCkge1xuICAgIGlmIChjYy5pc1ZhbGlkKHQpKSBpZiAodGhpcy5jaGVja1Nob3VsZFNob3coKSkge1xuICAgICAgTm9kZVNraW5Ub29sLnBhcnNlQ29uZmlnTGlzdCh0LCB0aGlzLmhhdmVDYXJkQ29uZmlnTGlzdCwgTWpHYW1lVHlwZS5Ob3JtYWwsIHQubmFtZSk7XG4gICAgICB0aGlzLnVwZGF0ZUNhcmRCZyhjYy5maW5kKFwiY2FyZE5vZGUvY2FyZEJnXCIsIHQpKTtcbiAgICAgIHRoaXMudXBkYXRlQ2FyZFNwcml0ZShjYy5maW5kKFwiY2FyZE5vZGUvY2FyZFwiLCB0KSk7XG4gICAgfSBlbHNlIE5vZGVTa2luVG9vbC5wYXJzZUNvbmZpZ0xpc3QodCwgdGhpcy5ub0NhcmRDb25maWdMaXN0LCBNakdhbWVUeXBlLk5vcm1hbCwgdC5uYW1lKTtcbiAgfVxuICBjaGVja1Nob3VsZFNob3coKSB7XG4gICAgdmFyIHQsIGUsIGE7XG4gICAgdHJ5IHtcbiAgICAgIHZhciByID0gbWouZ2V0Q2xhc3NCeU5hbWUoXCJSYW5rTW9kZWxcIik7XG4gICAgICBpZiAoIXIpIHJldHVybiBmYWxzZTtcbiAgICAgIHZhciBvID0gbnVsbCA9PT0gKHQgPSByLmdldEluc3RhbmNlKSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0LmNhbGwocik7XG4gICAgICByZXR1cm4gbnVsbCAhPT0gKGEgPSBudWxsID09PSAoZSA9IG51bGwgPT0gbyA/IHZvaWQgMCA6IG8uaGFzT3BlbmluZ0FjdGl2aXR5KSB8fCB2b2lkIDAgPT09IGUgPyB2b2lkIDAgOiBlLmNhbGwobykpICYmIHZvaWQgMCAhPT0gYSAmJiBhO1xuICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgdXBkYXRlQ2FyZEJnKHQpIHtcbiAgICBpZiAoY2MuaXNWYWxpZCh0KSkge1xuICAgICAgdmFyIGUgPSBDYXJkVXRpbC5nZXRBdGxhc1BhdGhBbmRCdW5kbGVOYW1lKFwiZ2FtZXBsYXlfc3BlY2lhbF9tal8yXCIpLFxuICAgICAgICBhID0gZS5wYXRoLFxuICAgICAgICByID0gZS5idW5kbGVOYW1lLFxuICAgICAgICBvID0gZS5mcm9tQXRsYXM7XG4gICAgICBCYXNlU3ByaXRlLnJlZnJlc2hXaXRoTm9kZSh0LCBhLCBvLCBmYWxzZSwgcik7XG4gICAgfVxuICB9XG4gIHVwZGF0ZUNhcmRTcHJpdGUodCkge1xuICAgIGNjLmlzVmFsaWQodCkgJiYgdGhpcy51cGRhdGVJbWdDYXJkKHQpO1xuICB9XG4gIHVwZGF0ZUltZ0NhcmQodCkge1xuICAgIHZhciBlID0gVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0UmFua0NhcmRSZXNOYW1lKCksXG4gICAgICBhID0gQ2FyZFV0aWwuZ2V0QXRsYXNQYXRoQW5kQnVuZGxlTmFtZShlKSxcbiAgICAgIHIgPSBhLnBhdGgsXG4gICAgICBvID0gYS5idW5kbGVOYW1lLFxuICAgICAgaSA9IGEuZnJvbUF0bGFzO1xuICAgIEJhc2VTcHJpdGUucmVmcmVzaFdpdGhOb2RlKHQsIHIsIGksIGZhbHNlLCBvKTtcbiAgfVxufSJdfQ==