
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_journey/Scripts/SeasonRepeatTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8b0a3+1nF9DtL++3IwGkce5', 'SeasonRepeatTrait');
// subpackages/l_journey/Scripts/SeasonRepeatTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TravelGameModel_1 = require("../../../Scripts/gamePlay/travel/model/TravelGameModel");
var SeasonRepeatTrait = /** @class */ (function (_super) {
    __extends(SeasonRepeatTrait, _super);
    function SeasonRepeatTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SeasonRepeatTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    SeasonRepeatTrait.prototype.onJourney_NextSession = function (t, e) {
        var r = __read(this.getNextSession(t.ins), 2), o = r[0], n = r[1];
        e({
            returnType: TraitCallbackReturnType.return,
            isBreak: true,
            returnVal: [o, n]
        });
    };
    SeasonRepeatTrait.prototype.getCurSessionIndex = function () {
        return TravelGameModel_1.default.getInstance().getCurSessionIndex();
    };
    SeasonRepeatTrait.prototype.getNextSession = function (t) {
        var e = t.getJourneyList(), r = this.getCurSessionIndex(e);
        if (0 === e.length)
            return ["", -1];
        var o = this.getNextRepeatSession(t, r + 1, e, false);
        -1 === o && (o = this.getNextRepeatSession(t, r + 1, e, true));
        return o < 0 ? ["", -1] : [e[o], o];
    };
    SeasonRepeatTrait.prototype.getNextRepeatSession = function (t, e, r, o) {
        for (var n = TravelGameModel_1.default.getInstance(), i = r.length, a = 0; a < i; a++) {
            var s = (e + a) % i, l = r[s];
            if ((o || !n.isBadgeComplete(l)) && t.isSessionValid(s))
                return s;
        }
        return -1;
    };
    SeasonRepeatTrait.traitKey = "SeasonRepeat";
    __decorate([
        mj.traitEvent("SeasonRpt_getCurIndex")
    ], SeasonRepeatTrait.prototype, "getCurSessionIndex", null);
    SeasonRepeatTrait = __decorate([
        mj.trait,
        mj.class("SeasonRepeatTrait")
    ], SeasonRepeatTrait);
    return SeasonRepeatTrait;
}(Trait_1.default));
exports.default = SeasonRepeatTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2pvdXJuZXkvU2NyaXB0cy9TZWFzb25SZXBlYXRUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELDBGQUFxRjtBQUdyRjtJQUErQyxxQ0FBSztJQUFwRDs7SUFtQ0EsQ0FBQztJQWpDQyxrQ0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0QsaURBQXFCLEdBQXJCLFVBQXNCLENBQUMsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDM0MsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDUixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ1gsQ0FBQyxDQUFDO1lBQ0EsVUFBVSxFQUFFLHVCQUF1QixDQUFDLE1BQU07WUFDMUMsT0FBTyxFQUFFLElBQUk7WUFDYixTQUFTLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ2xCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCw4Q0FBa0IsR0FBbEI7UUFDRSxPQUFPLHlCQUFlLENBQUMsV0FBVyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUM1RCxDQUFDO0lBQ0QsMENBQWMsR0FBZCxVQUFlLENBQUM7UUFDZCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsY0FBYyxFQUFFLEVBQ3hCLENBQUMsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU07WUFBRSxPQUFPLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN0RCxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQy9ELE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUNELGdEQUFvQixHQUFwQixVQUFxQixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQzdCLEtBQUssSUFBSSxDQUFDLEdBQUcseUJBQWUsQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDM0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUNqQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ1gsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztnQkFBRSxPQUFPLENBQUMsQ0FBQztTQUNuRTtRQUNELE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDWixDQUFDO0lBakNNLDBCQUFRLEdBQUcsY0FBYyxDQUFDO0lBZWpDO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyx1QkFBdUIsQ0FBQzsrREFHdEM7SUFsQmtCLGlCQUFpQjtRQUZyQyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsbUJBQW1CLENBQUM7T0FDVCxpQkFBaUIsQ0FtQ3JDO0lBQUQsd0JBQUM7Q0FuQ0QsQUFtQ0MsQ0FuQzhDLGVBQUssR0FtQ25EO2tCQW5Db0IsaUJBQWlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCBUcmF2ZWxHYW1lTW9kZWwgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS90cmF2ZWwvbW9kZWwvVHJhdmVsR2FtZU1vZGVsJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiU2Vhc29uUmVwZWF0VHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXNvblJlcGVhdFRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIlNlYXNvblJlcGVhdFwiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gIH1cbiAgb25Kb3VybmV5X05leHRTZXNzaW9uKHQsIGUpIHtcbiAgICB2YXIgciA9IF9fcmVhZCh0aGlzLmdldE5leHRTZXNzaW9uKHQuaW5zKSwgMiksXG4gICAgICBvID0gclswXSxcbiAgICAgIG4gPSByWzFdO1xuICAgIGUoe1xuICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgIHJldHVyblZhbDogW28sIG5dXG4gICAgfSk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJTZWFzb25ScHRfZ2V0Q3VySW5kZXhcIilcbiAgZ2V0Q3VyU2Vzc2lvbkluZGV4KCkge1xuICAgIHJldHVybiBUcmF2ZWxHYW1lTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRDdXJTZXNzaW9uSW5kZXgoKTtcbiAgfVxuICBnZXROZXh0U2Vzc2lvbih0KSB7XG4gICAgdmFyIGUgPSB0LmdldEpvdXJuZXlMaXN0KCksXG4gICAgICByID0gdGhpcy5nZXRDdXJTZXNzaW9uSW5kZXgoZSk7XG4gICAgaWYgKDAgPT09IGUubGVuZ3RoKSByZXR1cm4gW1wiXCIsIC0xXTtcbiAgICB2YXIgbyA9IHRoaXMuZ2V0TmV4dFJlcGVhdFNlc3Npb24odCwgciArIDEsIGUsIGZhbHNlKTtcbiAgICAtMSA9PT0gbyAmJiAobyA9IHRoaXMuZ2V0TmV4dFJlcGVhdFNlc3Npb24odCwgciArIDEsIGUsIHRydWUpKTtcbiAgICByZXR1cm4gbyA8IDAgPyBbXCJcIiwgLTFdIDogW2Vbb10sIG9dO1xuICB9XG4gIGdldE5leHRSZXBlYXRTZXNzaW9uKHQsIGUsIHIsIG8pIHtcbiAgICBmb3IgKHZhciBuID0gVHJhdmVsR2FtZU1vZGVsLmdldEluc3RhbmNlKCksIGkgPSByLmxlbmd0aCwgYSA9IDA7IGEgPCBpOyBhKyspIHtcbiAgICAgIHZhciBzID0gKGUgKyBhKSAlIGksXG4gICAgICAgIGwgPSByW3NdO1xuICAgICAgaWYgKChvIHx8ICFuLmlzQmFkZ2VDb21wbGV0ZShsKSkgJiYgdC5pc1Nlc3Npb25WYWxpZChzKSkgcmV0dXJuIHM7XG4gICAgfVxuICAgIHJldHVybiAtMTtcbiAgfVxufSJdfQ==