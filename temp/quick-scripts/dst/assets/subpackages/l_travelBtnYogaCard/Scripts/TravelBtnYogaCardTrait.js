
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_travelBtnYogaCard/Scripts/TravelBtnYogaCardTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e97187irolMapJepIIc8Tsi', 'TravelBtnYogaCardTrait');
// subpackages/l_travelBtnYogaCard/Scripts/TravelBtnYogaCardTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var DataReader_1 = require("../../../Scripts/framework/data/DataReader");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var ConfigType_1 = require("../../../Scripts/gamePlay/base/data/ConfigType");
var NodeSkinTool_1 = require("../../../Scripts/NodeSkinTool");
var BaseSprite_1 = require("../../../Scripts/gamePlay/base/ui/BaseSprite");
var TravelGameModel_1 = require("../../../Scripts/gamePlay/travel/model/TravelGameModel");
var TravelBtnYogaCardTrait = /** @class */ (function (_super) {
    __extends(TravelBtnYogaCardTrait, _super);
    function TravelBtnYogaCardTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TravelBtnYogaCardTrait_1 = TravelBtnYogaCardTrait;
    Object.defineProperty(TravelBtnYogaCardTrait.prototype, "haveCardConfigList", {
        get: function () {
            var e, t = (null === (e = this.traitData.config) || void 0 === e ? void 0 : e.haveCardSkinKey) || "HallTravelBtnHaveCard";
            return DataReader_1.DataReader.getTypeList(ConfigType_1.ConfigType.mainGameTopSkin, "SkinKey", t);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TravelBtnYogaCardTrait.prototype, "noCardConfigList", {
        get: function () {
            var e, t = (null === (e = this.traitData.config) || void 0 === e ? void 0 : e.noCardSkinKey) || "HallTravelBtnNoCard";
            return DataReader_1.DataReader.getTypeList(ConfigType_1.ConfigType.mainGameTopSkin, "SkinKey", t);
        },
        enumerable: false,
        configurable: true
    });
    TravelBtnYogaCardTrait.prototype.onTravelBtn_onLoad = function (e, t) {
        try {
            var a = e.ins, o = null == a ? void 0 : a.rootNode;
            if (!cc.isValid(o)) {
                t();
                return;
            }
            this.createCardNode(o);
            t();
        }
        catch (e) {
            console.error("[" + TravelBtnYogaCardTrait_1.traitKey + "] onTravelBtn_onLoad 错误: " + (null == e ? void 0 : e.message));
            t();
        }
    };
    TravelBtnYogaCardTrait.prototype.onTravelBtn_updateUI = function (e, t) {
        try {
            var a = e.ins, o = null == a ? void 0 : a.rootNode;
            this.updateCardDisplay(o, null == a ? void 0 : a.journeyKey);
            t();
        }
        catch (e) {
            console.error("[" + TravelBtnYogaCardTrait_1.traitKey + "] onTravelBtn_updateUI 错误: " + (null == e ? void 0 : e.message));
            t();
        }
    };
    TravelBtnYogaCardTrait.prototype.createCardNode = function (e) {
        var t = this.noCardConfigList;
        cc.isValid(e) && t && 0 !== t.length && NodeSkinTool_1.default.parseConfigList(e, t, GameTypeEnums_1.MjGameType.Normal, e.name);
    };
    TravelBtnYogaCardTrait.prototype.updateCardDisplay = function (e, t) {
        if (cc.isValid(e)) {
            var r = TravelGameModel_1.default.getInstance().isUnlocked();
            if (t && r) {
                NodeSkinTool_1.default.parseConfigList(e, this.haveCardConfigList, GameTypeEnums_1.MjGameType.Normal, e.name);
                this.updateCardSprite(cc.find("cardNode/card", e), t);
            }
            else {
                NodeSkinTool_1.default.parseConfigList(e, this.noCardConfigList, GameTypeEnums_1.MjGameType.Normal, e.name);
                if (!r) {
                    var a = e.getChildByName("Title");
                    a && (a.x = 30);
                }
            }
        }
    };
    TravelBtnYogaCardTrait.prototype.updateCardSprite = function (e, t) {
        if (cc.isValid(e))
            try {
                var a = TravelGameModel_1.default.getInstance().getConfig(t);
                if (!(null == a ? void 0 : a.yoga))
                    return;
                var o = "texture/journey/yoga/" + a.yoga;
                BaseSprite_1.default.refreshWithNode(e, o, false, false, "mainRes");
            }
            catch (e) {
                console.error("[" + TravelBtnYogaCardTrait_1.traitKey + "] 刷新瑜伽牌图片失败: " + (null == e ? void 0 : e.message));
            }
    };
    var TravelBtnYogaCardTrait_1;
    TravelBtnYogaCardTrait.traitKey = "TravelBtnYogaCard";
    TravelBtnYogaCardTrait = TravelBtnYogaCardTrait_1 = __decorate([
        mj.trait,
        mj.class("TravelBtnYogaCardTrait")
    ], TravelBtnYogaCardTrait);
    return TravelBtnYogaCardTrait;
}(Trait_1.default));
exports.default = TravelBtnYogaCardTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3RyYXZlbEJ0bllvZ2FDYXJkL1NjcmlwdHMvVHJhdmVsQnRuWW9nYUNhcmRUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0ZBQW9GO0FBQ3BGLHlFQUF3RTtBQUN4RSxnRUFBMkQ7QUFDM0QsNkVBQTRFO0FBQzVFLDhEQUF5RDtBQUN6RCwyRUFBc0U7QUFDdEUsMEZBQXFGO0FBR3JGO0lBQW9ELDBDQUFLO0lBQXpEOztJQW1FQSxDQUFDOytCQW5Fb0Isc0JBQXNCO0lBRXpDLHNCQUFJLHNEQUFrQjthQUF0QjtZQUNFLElBQUksQ0FBQyxFQUNILENBQUMsR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsSUFBSSx1QkFBdUIsQ0FBQztZQUNySCxPQUFPLHVCQUFVLENBQUMsV0FBVyxDQUFDLHVCQUFVLENBQUMsZUFBZSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMxRSxDQUFDOzs7T0FBQTtJQUNELHNCQUFJLG9EQUFnQjthQUFwQjtZQUNFLElBQUksQ0FBQyxFQUNILENBQUMsR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsSUFBSSxxQkFBcUIsQ0FBQztZQUNqSCxPQUFPLHVCQUFVLENBQUMsV0FBVyxDQUFDLHVCQUFVLENBQUMsZUFBZSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMxRSxDQUFDOzs7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LHNCQUFzQixDQW1FMUM7SUFBRCw2QkFBQztDQW5FRCxBQW1FQyxDQW5FbUQsZUFBSyxHQW1FeEQ7a0JBbkVvQixzQkFBc0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNakdhbWVUeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbmltcG9ydCB7IERhdGFSZWFkZXIgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay9kYXRhL0RhdGFSZWFkZXInO1xuaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCB7IENvbmZpZ1R5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L2Jhc2UvZGF0YS9Db25maWdUeXBlJztcbmltcG9ydCBOb2RlU2tpblRvb2wgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9Ob2RlU2tpblRvb2wnO1xuaW1wb3J0IEJhc2VTcHJpdGUgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS9iYXNlL3VpL0Jhc2VTcHJpdGUnO1xuaW1wb3J0IFRyYXZlbEdhbWVNb2RlbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L3RyYXZlbC9tb2RlbC9UcmF2ZWxHYW1lTW9kZWwnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJUcmF2ZWxCdG5Zb2dhQ2FyZFRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmF2ZWxCdG5Zb2dhQ2FyZFRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIlRyYXZlbEJ0bllvZ2FDYXJkXCI7XG4gIGdldCBoYXZlQ2FyZENvbmZpZ0xpc3QoKSB7XG4gICAgdmFyIGUsXG4gICAgICB0ID0gKG51bGwgPT09IChlID0gdGhpcy50cmFpdERhdGEuY29uZmlnKSB8fCB2b2lkIDAgPT09IGUgPyB2b2lkIDAgOiBlLmhhdmVDYXJkU2tpbktleSkgfHwgXCJIYWxsVHJhdmVsQnRuSGF2ZUNhcmRcIjtcbiAgICByZXR1cm4gRGF0YVJlYWRlci5nZXRUeXBlTGlzdChDb25maWdUeXBlLm1haW5HYW1lVG9wU2tpbiwgXCJTa2luS2V5XCIsIHQpO1xuICB9XG4gIGdldCBub0NhcmRDb25maWdMaXN0KCkge1xuICAgIHZhciBlLFxuICAgICAgdCA9IChudWxsID09PSAoZSA9IHRoaXMudHJhaXREYXRhLmNvbmZpZykgfHwgdm9pZCAwID09PSBlID8gdm9pZCAwIDogZS5ub0NhcmRTa2luS2V5KSB8fCBcIkhhbGxUcmF2ZWxCdG5Ob0NhcmRcIjtcbiAgICByZXR1cm4gRGF0YVJlYWRlci5nZXRUeXBlTGlzdChDb25maWdUeXBlLm1haW5HYW1lVG9wU2tpbiwgXCJTa2luS2V5XCIsIHQpO1xuICB9XG4gIG9uVHJhdmVsQnRuX29uTG9hZChlLCB0KSB7XG4gICAgdHJ5IHtcbiAgICAgIHZhciBhID0gZS5pbnMsXG4gICAgICAgIG8gPSBudWxsID09IGEgPyB2b2lkIDAgOiBhLnJvb3ROb2RlO1xuICAgICAgaWYgKCFjYy5pc1ZhbGlkKG8pKSB7XG4gICAgICAgIHQoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5jcmVhdGVDYXJkTm9kZShvKTtcbiAgICAgIHQoKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiW1wiICsgVHJhdmVsQnRuWW9nYUNhcmRUcmFpdC50cmFpdEtleSArIFwiXSBvblRyYXZlbEJ0bl9vbkxvYWQg6ZSZ6K+vOiBcIiArIChudWxsID09IGUgPyB2b2lkIDAgOiBlLm1lc3NhZ2UpKTtcbiAgICAgIHQoKTtcbiAgICB9XG4gIH1cbiAgb25UcmF2ZWxCdG5fdXBkYXRlVUkoZSwgdCkge1xuICAgIHRyeSB7XG4gICAgICB2YXIgYSA9IGUuaW5zLFxuICAgICAgICBvID0gbnVsbCA9PSBhID8gdm9pZCAwIDogYS5yb290Tm9kZTtcbiAgICAgIHRoaXMudXBkYXRlQ2FyZERpc3BsYXkobywgbnVsbCA9PSBhID8gdm9pZCAwIDogYS5qb3VybmV5S2V5KTtcbiAgICAgIHQoKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiW1wiICsgVHJhdmVsQnRuWW9nYUNhcmRUcmFpdC50cmFpdEtleSArIFwiXSBvblRyYXZlbEJ0bl91cGRhdGVVSSDplJnor686IFwiICsgKG51bGwgPT0gZSA/IHZvaWQgMCA6IGUubWVzc2FnZSkpO1xuICAgICAgdCgpO1xuICAgIH1cbiAgfVxuICBjcmVhdGVDYXJkTm9kZShlKSB7XG4gICAgdmFyIHQgPSB0aGlzLm5vQ2FyZENvbmZpZ0xpc3Q7XG4gICAgY2MuaXNWYWxpZChlKSAmJiB0ICYmIDAgIT09IHQubGVuZ3RoICYmIE5vZGVTa2luVG9vbC5wYXJzZUNvbmZpZ0xpc3QoZSwgdCwgTWpHYW1lVHlwZS5Ob3JtYWwsIGUubmFtZSk7XG4gIH1cbiAgdXBkYXRlQ2FyZERpc3BsYXkoZSwgdCkge1xuICAgIGlmIChjYy5pc1ZhbGlkKGUpKSB7XG4gICAgICB2YXIgciA9IFRyYXZlbEdhbWVNb2RlbC5nZXRJbnN0YW5jZSgpLmlzVW5sb2NrZWQoKTtcbiAgICAgIGlmICh0ICYmIHIpIHtcbiAgICAgICAgTm9kZVNraW5Ub29sLnBhcnNlQ29uZmlnTGlzdChlLCB0aGlzLmhhdmVDYXJkQ29uZmlnTGlzdCwgTWpHYW1lVHlwZS5Ob3JtYWwsIGUubmFtZSk7XG4gICAgICAgIHRoaXMudXBkYXRlQ2FyZFNwcml0ZShjYy5maW5kKFwiY2FyZE5vZGUvY2FyZFwiLCBlKSwgdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBOb2RlU2tpblRvb2wucGFyc2VDb25maWdMaXN0KGUsIHRoaXMubm9DYXJkQ29uZmlnTGlzdCwgTWpHYW1lVHlwZS5Ob3JtYWwsIGUubmFtZSk7XG4gICAgICAgIGlmICghcikge1xuICAgICAgICAgIHZhciBhID0gZS5nZXRDaGlsZEJ5TmFtZShcIlRpdGxlXCIpO1xuICAgICAgICAgIGEgJiYgKGEueCA9IDMwKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICB1cGRhdGVDYXJkU3ByaXRlKGUsIHQpIHtcbiAgICBpZiAoY2MuaXNWYWxpZChlKSkgdHJ5IHtcbiAgICAgIHZhciBhID0gVHJhdmVsR2FtZU1vZGVsLmdldEluc3RhbmNlKCkuZ2V0Q29uZmlnKHQpO1xuICAgICAgaWYgKCEobnVsbCA9PSBhID8gdm9pZCAwIDogYS55b2dhKSkgcmV0dXJuO1xuICAgICAgdmFyIG8gPSBcInRleHR1cmUvam91cm5leS95b2dhL1wiICsgYS55b2dhO1xuICAgICAgQmFzZVNwcml0ZS5yZWZyZXNoV2l0aE5vZGUoZSwgbywgZmFsc2UsIGZhbHNlLCBcIm1haW5SZXNcIik7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihcIltcIiArIFRyYXZlbEJ0bllvZ2FDYXJkVHJhaXQudHJhaXRLZXkgKyBcIl0g5Yi35paw55Gc5Ly954mM5Zu+54mH5aSx6LSlOiBcIiArIChudWxsID09IGUgPyB2b2lkIDAgOiBlLm1lc3NhZ2UpKTtcbiAgICB9XG4gIH1cbn0iXX0=