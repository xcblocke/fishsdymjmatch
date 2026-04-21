
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_rankFilterList/Scripts/RankFilterListTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8df40GXtJND5oICMpx7XMZO', 'RankFilterListTrait');
// subpackages/l_rankFilterList/Scripts/RankFilterListTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var RankFilterListTrait = /** @class */ (function (_super) {
    __extends(RankFilterListTrait, _super);
    function RankFilterListTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RankFilterListTrait.prototype.onRankModel_filterList = function (t, r) {
        var e, n = t.ins;
        r({
            returnVal: ((null === (e = n.localData.rankGameData) || void 0 === e ? void 0 : e.rankList) || []).filter(function (t) {
                return t.score > 0 || n.isMySelf(t.id);
            }),
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return
        });
    };
    RankFilterListTrait.prototype.onRankItem_updRank = function (t, r) {
        var e = t.ins;
        if (e.isZeroScore() && e.isMySelf()) {
            e.setRankString("-");
            r({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return
            });
        }
        else
            r();
    };
    RankFilterListTrait.traitKey = "RankFilterList";
    RankFilterListTrait = __decorate([
        mj.trait,
        mj.class("RankFilterListTrait")
    ], RankFilterListTrait);
    return RankFilterListTrait;
}(Trait_1.default));
exports.default = RankFilterListTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3JhbmtGaWx0ZXJMaXN0L1NjcmlwdHMvUmFua0ZpbHRlckxpc3RUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELDhFQUF3RjtBQUd4RjtJQUFpRCx1Q0FBSztJQUF0RDs7SUF1QkEsQ0FBQztJQXJCQyxvREFBc0IsR0FBdEIsVUFBdUIsQ0FBQyxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLEVBQ0gsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDWixDQUFDLENBQUM7WUFDQSxTQUFTLEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO2dCQUNuSCxPQUFPLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3pDLENBQUMsQ0FBQztZQUNGLE9BQU8sRUFBRSxJQUFJO1lBQ2IsVUFBVSxFQUFFLHNDQUF1QixDQUFDLE1BQU07U0FDM0MsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELGdEQUFrQixHQUFsQixVQUFtQixDQUFDLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQ2QsSUFBSSxDQUFDLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFO1lBQ25DLENBQUMsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDckIsQ0FBQyxDQUFDO2dCQUNBLE9BQU8sRUFBRSxJQUFJO2dCQUNiLFVBQVUsRUFBRSxzQ0FBdUIsQ0FBQyxNQUFNO2FBQzNDLENBQUMsQ0FBQztTQUNKOztZQUFNLENBQUMsRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQXJCTSw0QkFBUSxHQUFHLGdCQUFnQixDQUFDO0lBRGhCLG1CQUFtQjtRQUZ2QyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQUM7T0FDWCxtQkFBbUIsQ0F1QnZDO0lBQUQsMEJBQUM7Q0F2QkQsQUF1QkMsQ0F2QmdELGVBQUssR0F1QnJEO2tCQXZCb0IsbUJBQW1CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCB7IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXRNYW5hZ2VyJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiUmFua0ZpbHRlckxpc3RUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFua0ZpbHRlckxpc3RUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJSYW5rRmlsdGVyTGlzdFwiO1xuICBvblJhbmtNb2RlbF9maWx0ZXJMaXN0KHQsIHIpIHtcbiAgICB2YXIgZSxcbiAgICAgIG4gPSB0LmlucztcbiAgICByKHtcbiAgICAgIHJldHVyblZhbDogKChudWxsID09PSAoZSA9IG4ubG9jYWxEYXRhLnJhbmtHYW1lRGF0YSkgfHwgdm9pZCAwID09PSBlID8gdm9pZCAwIDogZS5yYW5rTGlzdCkgfHwgW10pLmZpbHRlcihmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gdC5zY29yZSA+IDAgfHwgbi5pc015U2VsZih0LmlkKTtcbiAgICAgIH0pLFxuICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVyblxuICAgIH0pO1xuICB9XG4gIG9uUmFua0l0ZW1fdXBkUmFuayh0LCByKSB7XG4gICAgdmFyIGUgPSB0LmlucztcbiAgICBpZiAoZS5pc1plcm9TY29yZSgpICYmIGUuaXNNeVNlbGYoKSkge1xuICAgICAgZS5zZXRSYW5rU3RyaW5nKFwiLVwiKTtcbiAgICAgIHIoe1xuICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm5cbiAgICAgIH0pO1xuICAgIH0gZWxzZSByKCk7XG4gIH1cbn0iXX0=