
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_hallRankBtnPos/Scripts/HallRankBtnPosTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '03e69eyu1RD64r1JL0iRKDa', 'HallRankBtnPosTrait');
// subpackages/l_hallRankBtnPos/Scripts/HallRankBtnPosTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var HallRankBtnPosTrait = /** @class */ (function (_super) {
    __extends(HallRankBtnPosTrait, _super);
    function HallRankBtnPosTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HallRankBtnPosTrait.prototype.onRankBtn_onLoad = function (t, r) {
        var e = t.ins.node;
        cc.isValid(e) && e.setPosition(e.position.x, 106);
        r();
    };
    HallRankBtnPosTrait.traitKey = "HallRankBtnPos";
    HallRankBtnPosTrait = __decorate([
        mj.trait,
        mj.class("HallRankBtnPosTrait")
    ], HallRankBtnPosTrait);
    return HallRankBtnPosTrait;
}(Trait_1.default));
exports.default = HallRankBtnPosTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2hhbGxSYW5rQnRuUG9zL1NjcmlwdHMvSGFsbFJhbmtCdG5Qb3NUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBRzNEO0lBQWlELHVDQUFLO0lBQXREOztJQU9BLENBQUM7SUFMQyw4Q0FBZ0IsR0FBaEIsVUFBaUIsQ0FBQyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDbkIsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ2xELENBQUMsRUFBRSxDQUFDO0lBQ04sQ0FBQztJQUxNLDRCQUFRLEdBQUcsZ0JBQWdCLENBQUM7SUFEaEIsbUJBQW1CO1FBRnZDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQztPQUNYLG1CQUFtQixDQU92QztJQUFELDBCQUFDO0NBUEQsQUFPQyxDQVBnRCxlQUFLLEdBT3JEO2tCQVBvQixtQkFBbUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJIYWxsUmFua0J0blBvc1RyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIYWxsUmFua0J0blBvc1RyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIkhhbGxSYW5rQnRuUG9zXCI7XG4gIG9uUmFua0J0bl9vbkxvYWQodCwgcikge1xuICAgIHZhciBlID0gdC5pbnMubm9kZTtcbiAgICBjYy5pc1ZhbGlkKGUpICYmIGUuc2V0UG9zaXRpb24oZS5wb3NpdGlvbi54LCAxMDYpO1xuICAgIHIoKTtcbiAgfVxufSJdfQ==