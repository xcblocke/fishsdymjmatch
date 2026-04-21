
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_journey/Scripts/JourneySeasonTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '752da5JgmBP3ah3vXZxAysE', 'JourneySeasonTrait');
// subpackages/l_journey/Scripts/JourneySeasonTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var JourneySeasonTrait = /** @class */ (function (_super) {
    __extends(JourneySeasonTrait, _super);
    function JourneySeasonTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JourneySeasonTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    JourneySeasonTrait.prototype.onJourney_tryAddSeason = function (t, e) {
        var r = t.ins, o = r.getCachedJourney(), n = this.getSeasonKey();
        if (!o.includes(n)) {
            var i = {
                position: 0,
                session: n
            };
            mj.triggerInternalEvent("Journey_NewSeasonPos", this, [r, i]);
            o.splice(i.position, 0, n);
            r.cacheJourney(o);
        }
        this.localData.AddedSeason = true;
        e();
    };
    JourneySeasonTrait.traitKey = "JourneySeason";
    return JourneySeasonTrait;
}(Trait_1.default));
exports.default = JourneySeasonTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2pvdXJuZXkvU2NyaXB0cy9Kb3VybmV5U2Vhc29uVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUMzRDtJQUFnRCxzQ0FBSztJQUFyRDs7SUFxQkEsQ0FBQztJQW5CQyxtQ0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0QsbURBQXNCLEdBQXRCLFVBQXVCLENBQUMsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQ1gsQ0FBQyxHQUFHLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxFQUN4QixDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxHQUFHO2dCQUNOLFFBQVEsRUFBRSxDQUFDO2dCQUNYLE9BQU8sRUFBRSxDQUFDO2FBQ1gsQ0FBQztZQUNGLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxzQkFBc0IsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5RCxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzNCLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDbkI7UUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDbEMsQ0FBQyxFQUFFLENBQUM7SUFDTixDQUFDO0lBbkJNLDJCQUFRLEdBQUcsZUFBZSxDQUFDO0lBb0JwQyx5QkFBQztDQXJCRCxBQXFCQyxDQXJCK0MsZUFBSyxHQXFCcEQ7a0JBckJvQixrQkFBa0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSm91cm5leVNlYXNvblRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIkpvdXJuZXlTZWFzb25cIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICB9XG4gIG9uSm91cm5leV90cnlBZGRTZWFzb24odCwgZSkge1xuICAgIHZhciByID0gdC5pbnMsXG4gICAgICBvID0gci5nZXRDYWNoZWRKb3VybmV5KCksXG4gICAgICBuID0gdGhpcy5nZXRTZWFzb25LZXkoKTtcbiAgICBpZiAoIW8uaW5jbHVkZXMobikpIHtcbiAgICAgIHZhciBpID0ge1xuICAgICAgICBwb3NpdGlvbjogMCxcbiAgICAgICAgc2Vzc2lvbjogblxuICAgICAgfTtcbiAgICAgIG1qLnRyaWdnZXJJbnRlcm5hbEV2ZW50KFwiSm91cm5leV9OZXdTZWFzb25Qb3NcIiwgdGhpcywgW3IsIGldKTtcbiAgICAgIG8uc3BsaWNlKGkucG9zaXRpb24sIDAsIG4pO1xuICAgICAgci5jYWNoZUpvdXJuZXkobyk7XG4gICAgfVxuICAgIHRoaXMubG9jYWxEYXRhLkFkZGVkU2Vhc29uID0gdHJ1ZTtcbiAgICBlKCk7XG4gIH1cbn0iXX0=