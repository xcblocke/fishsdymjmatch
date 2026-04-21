
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_winNextBtnRankCard/Scripts/WinNextBtnRankCardTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0e325aKG3BApbq4j8nhOgqd', 'WinNextBtnRankCardTrait');
// subpackages/l_winNextBtnRankCard/Scripts/WinNextBtnRankCardTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var DataReader_1 = require("../../../Scripts/framework/data/DataReader");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var ConfigType_1 = require("../../../Scripts/gamePlay/base/data/ConfigType");
var NodeSkinTool_1 = require("../../../Scripts/NodeSkinTool");
var BaseSprite_1 = require("../../../Scripts/gamePlay/base/ui/BaseSprite");
var CardUtil_1 = require("../../../Scripts/gamePlay/user/CardUtil");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var WinNextBtnRankCardTrait = /** @class */ (function (_super) {
    __extends(WinNextBtnRankCardTrait, _super);
    function WinNextBtnRankCardTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WinNextBtnRankCardTrait_1 = WinNextBtnRankCardTrait;
    Object.defineProperty(WinNextBtnRankCardTrait.prototype, "haveCardConfigList", {
        get: function () {
            var e, t = (null === (e = this.traitData.config) || void 0 === e ? void 0 : e.haveCardSkinKey) || "WinBtnLevelRankCard";
            return DataReader_1.DataReader.getTypeList(ConfigType_1.ConfigType.mainGameTopSkin, "SkinKey", t);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WinNextBtnRankCardTrait.prototype, "noCardConfigList", {
        get: function () {
            var e, t = (null === (e = this.traitData.config) || void 0 === e ? void 0 : e.noCardSkinKey) || "WinBtnLevelNoCard";
            return DataReader_1.DataReader.getTypeList(ConfigType_1.ConfigType.mainGameTopSkin, "SkinKey", t);
        },
        enumerable: false,
        configurable: true
    });
    WinNextBtnRankCardTrait.prototype.onTile2WinVw_onLoad = function (e, t) {
        try {
            var a = e.ins, i = null == a ? void 0 : a.btnNextNode;
            cc.isValid(i) && this.createCardNode(i);
        }
        catch (e) {
            console.error("[" + WinNextBtnRankCardTrait_1.traitKey + "] onTile2WinVw_onLoad 错误: " + (null == e ? void 0 : e.message));
        }
        t();
    };
    WinNextBtnRankCardTrait.prototype.onWinVw_onLoad = function (e, t) {
        try {
            var a = e.ins, i = null == a ? void 0 : a.btnNextNode;
            cc.isValid(i) && this.createCardNode(i);
        }
        catch (e) {
            console.error("[" + WinNextBtnRankCardTrait_1.traitKey + "] onWinVw_onLoad 错误: " + (null == e ? void 0 : e.message));
        }
        t();
    };
    WinNextBtnRankCardTrait.prototype.onTile2WinVw_show = function (e, t) {
        try {
            var a = e.ins, i = null == a ? void 0 : a.btnNextNode;
            this.updateCardDisplay(i);
        }
        catch (e) {
            console.error("[" + WinNextBtnRankCardTrait_1.traitKey + "] onTile2WinVw_show 错误: " + (null == e ? void 0 : e.message));
        }
        t();
    };
    WinNextBtnRankCardTrait.prototype.onWinVw_showWinVw = function (e, t) {
        try {
            var a = e.ins, i = null == a ? void 0 : a.btnNextNode;
            this.updateCardDisplay(i);
        }
        catch (e) {
            console.error("[" + WinNextBtnRankCardTrait_1.traitKey + "] onWinVw_showWinVw 错误: " + (null == e ? void 0 : e.message));
        }
        t();
    };
    WinNextBtnRankCardTrait.prototype.createCardNode = function (e) {
        var t = this.noCardConfigList;
        cc.isValid(e) && t && 0 !== t.length && NodeSkinTool_1.default.parseConfigList(e, t, GameTypeEnums_1.MjGameType.Normal, e.name);
    };
    WinNextBtnRankCardTrait.prototype.updateCardDisplay = function (e) {
        if (cc.isValid(e))
            if (this.checkShouldShow()) {
                NodeSkinTool_1.default.parseConfigList(e, this.haveCardConfigList, GameTypeEnums_1.MjGameType.Normal, e.name);
                this.updateCardBg(cc.find("cardNode/cardBg", e));
                this.updateCardSprite(cc.find("cardNode/card", e));
            }
            else
                NodeSkinTool_1.default.parseConfigList(e, this.noCardConfigList, GameTypeEnums_1.MjGameType.Normal, e.name);
    };
    WinNextBtnRankCardTrait.prototype.checkShouldShow = function () {
        var e, t, r;
        try {
            var a = mj.getClassByName("RankModel");
            if (!a)
                return false;
            var i = null === (e = a.getInstance) || void 0 === e ? void 0 : e.call(a);
            return null !== (r = null === (t = null == i ? void 0 : i.hasOpeningActivity) || void 0 === t ? void 0 : t.call(i)) && void 0 !== r && r;
        }
        catch (e) {
            return false;
        }
    };
    WinNextBtnRankCardTrait.prototype.updateCardBg = function (e) {
        if (cc.isValid(e)) {
            var t = CardUtil_1.default.getAtlasPathAndBundleName("gameplay_special_mj_2"), r = t.path, a = t.bundleName, i = t.fromAtlas;
            BaseSprite_1.default.refreshWithNode(e, r, i, false, a);
        }
    };
    WinNextBtnRankCardTrait.prototype.updateCardSprite = function (e) {
        cc.isValid(e) && this.updateImgCard(e);
    };
    WinNextBtnRankCardTrait.prototype.updateImgCard = function (e) {
        var t = UserModel_1.default.getInstance().getRankCardResName(), r = CardUtil_1.default.getAtlasPathAndBundleName(t), a = r.path, i = r.bundleName, n = r.fromAtlas;
        BaseSprite_1.default.refreshWithNode(e, a, n, false, i);
    };
    var WinNextBtnRankCardTrait_1;
    WinNextBtnRankCardTrait.traitKey = "WinNextBtnRankCard";
    WinNextBtnRankCardTrait = WinNextBtnRankCardTrait_1 = __decorate([
        mj.trait,
        mj.class("WinNextBtnRankCardTrait")
    ], WinNextBtnRankCardTrait);
    return WinNextBtnRankCardTrait;
}(Trait_1.default));
exports.default = WinNextBtnRankCardTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3dpbk5leHRCdG5SYW5rQ2FyZC9TY3JpcHRzL1dpbk5leHRCdG5SYW5rQ2FyZFRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3RkFBb0Y7QUFDcEYseUVBQXdFO0FBQ3hFLGdFQUEyRDtBQUMzRCw2RUFBNEU7QUFDNUUsOERBQXlEO0FBQ3pELDJFQUFzRTtBQUN0RSxvRUFBK0Q7QUFDL0Qsc0VBQWlFO0FBR2pFO0lBQXFELDJDQUFLO0lBQTFEOztJQThGQSxDQUFDO2dDQTlGb0IsdUJBQXVCO0lBRTFDLHNCQUFJLHVEQUFrQjthQUF0QjtZQUNFLElBQUksQ0FBQyxFQUNILENBQUMsR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsSUFBSSxxQkFBcUIsQ0FBQztZQUNuSCxPQUFPLHVCQUFVLENBQUMsV0FBVyxDQUFDLHVCQUFVLENBQUMsZUFBZSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMxRSxDQUFDOzs7T0FBQTtJQUNELHNCQUFJLHFEQUFnQjthQUFwQjtZQUNFLElBQUksQ0FBQyxFQUNILENBQUMsR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsSUFBSSxtQkFBbUIsQ0FBQztZQUMvRyxPQUFPLHVCQUFVLENBQUMsV0FBVyxDQUFDLHVCQUFVLENBQUMsZUFBZSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FB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aEIsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFDRCwrQ0FBYSxHQUFiLFVBQWMsQ0FBQztRQUNiLElBQUksQ0FBQyxHQUFHLG1CQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsRUFDbEQsQ0FBQyxHQUFHLGtCQUFRLENBQUMseUJBQXlCLENBQUMsQ0FBQyxDQUFDLEVBQ3pDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUNWLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxFQUNoQixDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNsQixvQkFBVSxDQUFDLGVBQWUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDaEQsQ0FBQzs7SUE1Rk0sZ0NBQVEsR0FBRyxvQkFBb0IsQ0FBQztJQURwQix1QkFBdUI7UUFGM0MsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLHlCQUF5QixDQUFDO09BQ2YsdUJBQXVCLENBOEYzQztJQUFELDhCQUFDO0NBOUZELEFBOEZDLENBOUZvRCxlQUFLLEdBOEZ6RDtrQkE5Rm9CLHVCQUF1QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1qR2FtZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuaW1wb3J0IHsgRGF0YVJlYWRlciB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL2RhdGEvRGF0YVJlYWRlcic7XG5pbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IHsgQ29uZmlnVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvYmFzZS9kYXRhL0NvbmZpZ1R5cGUnO1xuaW1wb3J0IE5vZGVTa2luVG9vbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL05vZGVTa2luVG9vbCc7XG5pbXBvcnQgQmFzZVNwcml0ZSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L2Jhc2UvdWkvQmFzZVNwcml0ZSc7XG5pbXBvcnQgQ2FyZFV0aWwgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS91c2VyL0NhcmRVdGlsJztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS91c2VyL1VzZXJNb2RlbCc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIldpbk5leHRCdG5SYW5rQ2FyZFRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXaW5OZXh0QnRuUmFua0NhcmRUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJXaW5OZXh0QnRuUmFua0NhcmRcIjtcbiAgZ2V0IGhhdmVDYXJkQ29uZmlnTGlzdCgpIHtcbiAgICB2YXIgZSxcbiAgICAgIHQgPSAobnVsbCA9PT0gKGUgPSB0aGlzLnRyYWl0RGF0YS5jb25maWcpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUuaGF2ZUNhcmRTa2luS2V5KSB8fCBcIldpbkJ0bkxldmVsUmFua0NhcmRcIjtcbiAgICByZXR1cm4gRGF0YVJlYWRlci5nZXRUeXBlTGlzdChDb25maWdUeXBlLm1haW5HYW1lVG9wU2tpbiwgXCJTa2luS2V5XCIsIHQpO1xuICB9XG4gIGdldCBub0NhcmRDb25maWdMaXN0KCkge1xuICAgIHZhciBlLFxuICAgICAgdCA9IChudWxsID09PSAoZSA9IHRoaXMudHJhaXREYXRhLmNvbmZpZykgfHwgdm9pZCAwID09PSBlID8gdm9pZCAwIDogZS5ub0NhcmRTa2luS2V5KSB8fCBcIldpbkJ0bkxldmVsTm9DYXJkXCI7XG4gICAgcmV0dXJuIERhdGFSZWFkZXIuZ2V0VHlwZUxpc3QoQ29uZmlnVHlwZS5tYWluR2FtZVRvcFNraW4sIFwiU2tpbktleVwiLCB0KTtcbiAgfVxuICBvblRpbGUyV2luVndfb25Mb2FkKGUsIHQpIHtcbiAgICB0cnkge1xuICAgICAgdmFyIGEgPSBlLmlucyxcbiAgICAgICAgaSA9IG51bGwgPT0gYSA/IHZvaWQgMCA6IGEuYnRuTmV4dE5vZGU7XG4gICAgICBjYy5pc1ZhbGlkKGkpICYmIHRoaXMuY3JlYXRlQ2FyZE5vZGUoaSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihcIltcIiArIFdpbk5leHRCdG5SYW5rQ2FyZFRyYWl0LnRyYWl0S2V5ICsgXCJdIG9uVGlsZTJXaW5Wd19vbkxvYWQg6ZSZ6K+vOiBcIiArIChudWxsID09IGUgPyB2b2lkIDAgOiBlLm1lc3NhZ2UpKTtcbiAgICB9XG4gICAgdCgpO1xuICB9XG4gIG9uV2luVndfb25Mb2FkKGUsIHQpIHtcbiAgICB0cnkge1xuICAgICAgdmFyIGEgPSBlLmlucyxcbiAgICAgICAgaSA9IG51bGwgPT0gYSA/IHZvaWQgMCA6IGEuYnRuTmV4dE5vZGU7XG4gICAgICBjYy5pc1ZhbGlkKGkpICYmIHRoaXMuY3JlYXRlQ2FyZE5vZGUoaSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihcIltcIiArIFdpbk5leHRCdG5SYW5rQ2FyZFRyYWl0LnRyYWl0S2V5ICsgXCJdIG9uV2luVndfb25Mb2FkIOmUmeivrzogXCIgKyAobnVsbCA9PSBlID8gdm9pZCAwIDogZS5tZXNzYWdlKSk7XG4gICAgfVxuICAgIHQoKTtcbiAgfVxuICBvblRpbGUyV2luVndfc2hvdyhlLCB0KSB7XG4gICAgdHJ5IHtcbiAgICAgIHZhciBhID0gZS5pbnMsXG4gICAgICAgIGkgPSBudWxsID09IGEgPyB2b2lkIDAgOiBhLmJ0bk5leHROb2RlO1xuICAgICAgdGhpcy51cGRhdGVDYXJkRGlzcGxheShpKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiW1wiICsgV2luTmV4dEJ0blJhbmtDYXJkVHJhaXQudHJhaXRLZXkgKyBcIl0gb25UaWxlMldpblZ3X3Nob3cg6ZSZ6K+vOiBcIiArIChudWxsID09IGUgPyB2b2lkIDAgOiBlLm1lc3NhZ2UpKTtcbiAgICB9XG4gICAgdCgpO1xuICB9XG4gIG9uV2luVndfc2hvd1dpblZ3KGUsIHQpIHtcbiAgICB0cnkge1xuICAgICAgdmFyIGEgPSBlLmlucyxcbiAgICAgICAgaSA9IG51bGwgPT0gYSA/IHZvaWQgMCA6IGEuYnRuTmV4dE5vZGU7XG4gICAgICB0aGlzLnVwZGF0ZUNhcmREaXNwbGF5KGkpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJbXCIgKyBXaW5OZXh0QnRuUmFua0NhcmRUcmFpdC50cmFpdEtleSArIFwiXSBvbldpblZ3X3Nob3dXaW5WdyDplJnor686IFwiICsgKG51bGwgPT0gZSA/IHZvaWQgMCA6IGUubWVzc2FnZSkpO1xuICAgIH1cbiAgICB0KCk7XG4gIH1cbiAgY3JlYXRlQ2FyZE5vZGUoZSkge1xuICAgIHZhciB0ID0gdGhpcy5ub0NhcmRDb25maWdMaXN0O1xuICAgIGNjLmlzVmFsaWQoZSkgJiYgdCAmJiAwICE9PSB0Lmxlbmd0aCAmJiBOb2RlU2tpblRvb2wucGFyc2VDb25maWdMaXN0KGUsIHQsIE1qR2FtZVR5cGUuTm9ybWFsLCBlLm5hbWUpO1xuICB9XG4gIHVwZGF0ZUNhcmREaXNwbGF5KGUpIHtcbiAgICBpZiAoY2MuaXNWYWxpZChlKSkgaWYgKHRoaXMuY2hlY2tTaG91bGRTaG93KCkpIHtcbiAgICAgIE5vZGVTa2luVG9vbC5wYXJzZUNvbmZpZ0xpc3QoZSwgdGhpcy5oYXZlQ2FyZENvbmZpZ0xpc3QsIE1qR2FtZVR5cGUuTm9ybWFsLCBlLm5hbWUpO1xuICAgICAgdGhpcy51cGRhdGVDYXJkQmcoY2MuZmluZChcImNhcmROb2RlL2NhcmRCZ1wiLCBlKSk7XG4gICAgICB0aGlzLnVwZGF0ZUNhcmRTcHJpdGUoY2MuZmluZChcImNhcmROb2RlL2NhcmRcIiwgZSkpO1xuICAgIH0gZWxzZSBOb2RlU2tpblRvb2wucGFyc2VDb25maWdMaXN0KGUsIHRoaXMubm9DYXJkQ29uZmlnTGlzdCwgTWpHYW1lVHlwZS5Ob3JtYWwsIGUubmFtZSk7XG4gIH1cbiAgY2hlY2tTaG91bGRTaG93KCkge1xuICAgIHZhciBlLCB0LCByO1xuICAgIHRyeSB7XG4gICAgICB2YXIgYSA9IG1qLmdldENsYXNzQnlOYW1lKFwiUmFua01vZGVsXCIpO1xuICAgICAgaWYgKCFhKSByZXR1cm4gZmFsc2U7XG4gICAgICB2YXIgaSA9IG51bGwgPT09IChlID0gYS5nZXRJbnN0YW5jZSkgfHwgdm9pZCAwID09PSBlID8gdm9pZCAwIDogZS5jYWxsKGEpO1xuICAgICAgcmV0dXJuIG51bGwgIT09IChyID0gbnVsbCA9PT0gKHQgPSBudWxsID09IGkgPyB2b2lkIDAgOiBpLmhhc09wZW5pbmdBY3Rpdml0eSkgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC5jYWxsKGkpKSAmJiB2b2lkIDAgIT09IHIgJiYgcjtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHVwZGF0ZUNhcmRCZyhlKSB7XG4gICAgaWYgKGNjLmlzVmFsaWQoZSkpIHtcbiAgICAgIHZhciB0ID0gQ2FyZFV0aWwuZ2V0QXRsYXNQYXRoQW5kQnVuZGxlTmFtZShcImdhbWVwbGF5X3NwZWNpYWxfbWpfMlwiKSxcbiAgICAgICAgciA9IHQucGF0aCxcbiAgICAgICAgYSA9IHQuYnVuZGxlTmFtZSxcbiAgICAgICAgaSA9IHQuZnJvbUF0bGFzO1xuICAgICAgQmFzZVNwcml0ZS5yZWZyZXNoV2l0aE5vZGUoZSwgciwgaSwgZmFsc2UsIGEpO1xuICAgIH1cbiAgfVxuICB1cGRhdGVDYXJkU3ByaXRlKGUpIHtcbiAgICBjYy5pc1ZhbGlkKGUpICYmIHRoaXMudXBkYXRlSW1nQ2FyZChlKTtcbiAgfVxuICB1cGRhdGVJbWdDYXJkKGUpIHtcbiAgICB2YXIgdCA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldFJhbmtDYXJkUmVzTmFtZSgpLFxuICAgICAgciA9IENhcmRVdGlsLmdldEF0bGFzUGF0aEFuZEJ1bmRsZU5hbWUodCksXG4gICAgICBhID0gci5wYXRoLFxuICAgICAgaSA9IHIuYnVuZGxlTmFtZSxcbiAgICAgIG4gPSByLmZyb21BdGxhcztcbiAgICBCYXNlU3ByaXRlLnJlZnJlc2hXaXRoTm9kZShlLCBhLCBuLCBmYWxzZSwgaSk7XG4gIH1cbn0iXX0=