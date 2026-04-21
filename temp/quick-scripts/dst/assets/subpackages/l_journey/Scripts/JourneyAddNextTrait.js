
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_journey/Scripts/JourneyAddNextTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'dc4e93wHqJBL7yCHpSHK6K0', 'JourneyAddNextTrait');
// subpackages/l_journey/Scripts/JourneyAddNextTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TravelGameModel_1 = require("../../../Scripts/gamePlay/travel/model/TravelGameModel");
var JourneyAddNextTrait = /** @class */ (function (_super) {
    __extends(JourneyAddNextTrait, _super);
    function JourneyAddNextTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JourneyAddNextTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    JourneyAddNextTrait.prototype.onJourney_NewSeasonPos = function (t, e) {
        var r = TravelGameModel_1.default.getInstance().getCurSessionIndex() + 1;
        t.args[1].position = r;
        e();
    };
    JourneyAddNextTrait.traitKey = "JourneyAddNext";
    JourneyAddNextTrait = __decorate([
        mj.trait,
        mj.class("JourneyAddNextTrait")
    ], JourneyAddNextTrait);
    return JourneyAddNextTrait;
}(Trait_1.default));
exports.default = JourneyAddNextTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2pvdXJuZXkvU2NyaXB0cy9Kb3VybmV5QWRkTmV4dFRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFDM0QsMEZBQXFGO0FBR3JGO0lBQWlELHVDQUFLO0lBQXREOztJQVVBLENBQUM7SUFSQyxvQ0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0Qsb0RBQXNCLEdBQXRCLFVBQXVCLENBQUMsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxHQUFHLHlCQUFlLENBQUMsV0FBVyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDL0QsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLENBQUMsRUFBRSxDQUFDO0lBQ04sQ0FBQztJQVJNLDRCQUFRLEdBQUcsZ0JBQWdCLENBQUM7SUFEaEIsbUJBQW1CO1FBRnZDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQztPQUNYLG1CQUFtQixDQVV2QztJQUFELDBCQUFDO0NBVkQsQUFVQyxDQVZnRCxlQUFLLEdBVXJEO2tCQVZvQixtQkFBbUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IFRyYXZlbEdhbWVNb2RlbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L3RyYXZlbC9tb2RlbC9UcmF2ZWxHYW1lTW9kZWwnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJKb3VybmV5QWRkTmV4dFRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBKb3VybmV5QWRkTmV4dFRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIkpvdXJuZXlBZGROZXh0XCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgfVxuICBvbkpvdXJuZXlfTmV3U2Vhc29uUG9zKHQsIGUpIHtcbiAgICB2YXIgciA9IFRyYXZlbEdhbWVNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEN1clNlc3Npb25JbmRleCgpICsgMTtcbiAgICB0LmFyZ3NbMV0ucG9zaXRpb24gPSByO1xuICAgIGUoKTtcbiAgfVxufSJdfQ==