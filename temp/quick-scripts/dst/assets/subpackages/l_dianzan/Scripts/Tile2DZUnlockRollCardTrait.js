
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_dianzan/Scripts/Tile2DZUnlockRollCardTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c09e2QePkxHUqoFVpUEBLND', 'Tile2DZUnlockRollCardTrait');
// subpackages/l_dianzan/Scripts/Tile2DZUnlockRollCardTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var Tile2DZUnlockRollCardTrait = /** @class */ (function (_super) {
    __extends(Tile2DZUnlockRollCardTrait, _super);
    function Tile2DZUnlockRollCardTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2DZUnlockRollCardTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    Tile2DZUnlockRollCardTrait.prototype.onT2DianZCheck_isChkDZState = function (t, e) {
        e({
            isBreak: true,
            returnType: TraitCallbackReturnType.return,
            returnVal: true
        });
    };
    Tile2DZUnlockRollCardTrait.traitKey = "Tile2DZUnlockRollCard";
    Tile2DZUnlockRollCardTrait = __decorate([
        mj.trait,
        mj.class("Tile2DZUnlockRollCardTrait")
    ], Tile2DZUnlockRollCardTrait);
    return Tile2DZUnlockRollCardTrait;
}(Trait_1.default));
exports.default = Tile2DZUnlockRollCardTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2RpYW56YW4vU2NyaXB0cy9UaWxlMkRaVW5sb2NrUm9sbENhcmRUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBRzNEO0lBQXdELDhDQUFLO0lBQTdEOztJQVlBLENBQUM7SUFWQywyQ0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0QsZ0VBQTJCLEdBQTNCLFVBQTRCLENBQUMsRUFBRSxDQUFDO1FBQzlCLENBQUMsQ0FBQztZQUNBLE9BQU8sRUFBRSxJQUFJO1lBQ2IsVUFBVSxFQUFFLHVCQUF1QixDQUFDLE1BQU07WUFDMUMsU0FBUyxFQUFFLElBQUk7U0FDaEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQVZNLG1DQUFRLEdBQUcsdUJBQXVCLENBQUM7SUFEdkIsMEJBQTBCO1FBRjlDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyw0QkFBNEIsQ0FBQztPQUNsQiwwQkFBMEIsQ0FZOUM7SUFBRCxpQ0FBQztDQVpELEFBWUMsQ0FadUQsZUFBSyxHQVk1RDtrQkFab0IsMEJBQTBCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiVGlsZTJEWlVubG9ja1JvbGxDYXJkVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbGUyRFpVbmxvY2tSb2xsQ2FyZFRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIlRpbGUyRFpVbmxvY2tSb2xsQ2FyZFwiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gIH1cbiAgb25UMkRpYW5aQ2hlY2tfaXNDaGtEWlN0YXRlKHQsIGUpIHtcbiAgICBlKHtcbiAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICByZXR1cm5WYWw6IHRydWVcbiAgICB9KTtcbiAgfVxufSJdfQ==