
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_travelBindHall/Scripts/TravelBindHallTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '21e24vAd5lF0oE00s74aKWx', 'TravelBindHallTrait');
// subpackages/l_travelBindHall/Scripts/TravelBindHallTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var o;
(o = {})[1] = "Hall1";
o[2] = "Hall2";
o[3] = "Hall3";
o[4] = "Hall6";
o[-2] = "Hall4";
o[-1] = "Hall5";
var u = o;
var c = {
    Journey01: 1,
    Journey02: 2,
    Journey03: 3,
    Journey04: 4,
    Journey05: 5,
    Christmas25: -1,
    Valentine2026: -2
};
var TravelBindHallTrait = /** @class */ (function (_super) {
    __extends(TravelBindHallTrait, _super);
    function TravelBindHallTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TravelBindHallTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    TravelBindHallTrait.prototype.getHallTheme = function (e, t) {
        var r, n, o = null !== (n = null === (r = this.traitData) || void 0 === r ? void 0 : r.hallTheme) && void 0 !== n ? n : {}, i = t ? "" + c[e] : "0", a = o["" + i];
        "0" === i && void 0 === a && (a = o["" + c[e]]);
        if (void 0 === a)
            return "";
        var l = u[a];
        return void 0 === l ? "" : l;
    };
    TravelBindHallTrait.prototype.onHallVw_chgTheme = function (e, t) {
        if (e.args[1]) {
            var r = mj.getClassByName("JourneyTrait");
            if (r && r.getInstance() && r.getInstance().eventEnabled) {
                var n = r.getInstance().getCurOrNextJourney(), o = n.journey, i = (n.isNewSession, n.unlocked), a = this.getHallTheme(o, i);
                if ("" !== a && null != a) {
                    e.args[0] = a;
                    t();
                }
                else
                    t();
            }
            else
                t();
        }
        else
            t();
    };
    TravelBindHallTrait.traitKey = "TravelBindHall";
    TravelBindHallTrait = __decorate([
        mj.trait,
        mj.class("TravelBindHallTrait")
    ], TravelBindHallTrait);
    return TravelBindHallTrait;
}(Trait_1.default));
exports.default = TravelBindHallTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3RyYXZlbEJpbmRIYWxsL1NjcmlwdHMvVHJhdmVsQmluZEhhbGxUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELElBQUksQ0FBQyxDQUFDO0FBQ04sQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDO0FBQ3RCLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUM7QUFDZixDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDO0FBQ2YsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQztBQUNmLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQztBQUNoQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUM7QUFDaEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ1YsSUFBSSxDQUFDLEdBQUc7SUFDTixTQUFTLEVBQUUsQ0FBQztJQUNaLFNBQVMsRUFBRSxDQUFDO0lBQ1osU0FBUyxFQUFFLENBQUM7SUFDWixTQUFTLEVBQUUsQ0FBQztJQUNaLFNBQVMsRUFBRSxDQUFDO0lBQ1osV0FBVyxFQUFFLENBQUMsQ0FBQztJQUNmLGFBQWEsRUFBRSxDQUFDLENBQUM7Q0FDbEIsQ0FBQztBQUdGO0lBQWlELHVDQUFLO0lBQXREOztJQStCQSxDQUFDO0lBN0JDLG9DQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDRCwwQ0FBWSxHQUFaLFVBQWEsQ0FBQyxFQUFFLENBQUM7UUFDZixJQUFJLENBQUMsRUFDSCxDQUFDLEVBQ0QsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUNoSCxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQ3ZCLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2hCLEdBQUcsS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoRCxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUM7WUFBRSxPQUFPLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDYixPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUNELCtDQUFpQixHQUFqQixVQUFrQixDQUFDLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDYixJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQzFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsWUFBWSxFQUFFO2dCQUN4RCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsbUJBQW1CLEVBQUUsRUFDM0MsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQ2IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQ2hDLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDOUIsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLEVBQUU7b0JBQ3pCLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNkLENBQUMsRUFBRSxDQUFDO2lCQUNMOztvQkFBTSxDQUFDLEVBQUUsQ0FBQzthQUNaOztnQkFBTSxDQUFDLEVBQUUsQ0FBQztTQUNaOztZQUFNLENBQUMsRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQTdCTSw0QkFBUSxHQUFHLGdCQUFnQixDQUFDO0lBRGhCLG1CQUFtQjtRQUZ2QyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQUM7T0FDWCxtQkFBbUIsQ0ErQnZDO0lBQUQsMEJBQUM7Q0EvQkQsQUErQkMsQ0EvQmdELGVBQUssR0ErQnJEO2tCQS9Cb0IsbUJBQW1CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbnZhciBvO1xuKG8gPSB7fSlbMV0gPSBcIkhhbGwxXCI7XG5vWzJdID0gXCJIYWxsMlwiO1xub1szXSA9IFwiSGFsbDNcIjtcbm9bNF0gPSBcIkhhbGw2XCI7XG5vWy0yXSA9IFwiSGFsbDRcIjtcbm9bLTFdID0gXCJIYWxsNVwiO1xudmFyIHUgPSBvO1xudmFyIGMgPSB7XG4gIEpvdXJuZXkwMTogMSxcbiAgSm91cm5leTAyOiAyLFxuICBKb3VybmV5MDM6IDMsXG4gIEpvdXJuZXkwNDogNCxcbiAgSm91cm5leTA1OiA1LFxuICBDaHJpc3RtYXMyNTogLTEsXG4gIFZhbGVudGluZTIwMjY6IC0yXG59O1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJUcmF2ZWxCaW5kSGFsbFRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmF2ZWxCaW5kSGFsbFRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIlRyYXZlbEJpbmRIYWxsXCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgfVxuICBnZXRIYWxsVGhlbWUoZSwgdCkge1xuICAgIHZhciByLFxuICAgICAgbixcbiAgICAgIG8gPSBudWxsICE9PSAobiA9IG51bGwgPT09IChyID0gdGhpcy50cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gciA/IHZvaWQgMCA6IHIuaGFsbFRoZW1lKSAmJiB2b2lkIDAgIT09IG4gPyBuIDoge30sXG4gICAgICBpID0gdCA/IFwiXCIgKyBjW2VdIDogXCIwXCIsXG4gICAgICBhID0gb1tcIlwiICsgaV07XG4gICAgXCIwXCIgPT09IGkgJiYgdm9pZCAwID09PSBhICYmIChhID0gb1tcIlwiICsgY1tlXV0pO1xuICAgIGlmICh2b2lkIDAgPT09IGEpIHJldHVybiBcIlwiO1xuICAgIHZhciBsID0gdVthXTtcbiAgICByZXR1cm4gdm9pZCAwID09PSBsID8gXCJcIiA6IGw7XG4gIH1cbiAgb25IYWxsVndfY2hnVGhlbWUoZSwgdCkge1xuICAgIGlmIChlLmFyZ3NbMV0pIHtcbiAgICAgIHZhciByID0gbWouZ2V0Q2xhc3NCeU5hbWUoXCJKb3VybmV5VHJhaXRcIik7XG4gICAgICBpZiAociAmJiByLmdldEluc3RhbmNlKCkgJiYgci5nZXRJbnN0YW5jZSgpLmV2ZW50RW5hYmxlZCkge1xuICAgICAgICB2YXIgbiA9IHIuZ2V0SW5zdGFuY2UoKS5nZXRDdXJPck5leHRKb3VybmV5KCksXG4gICAgICAgICAgbyA9IG4uam91cm5leSxcbiAgICAgICAgICBpID0gKG4uaXNOZXdTZXNzaW9uLCBuLnVubG9ja2VkKSxcbiAgICAgICAgICBhID0gdGhpcy5nZXRIYWxsVGhlbWUobywgaSk7XG4gICAgICAgIGlmIChcIlwiICE9PSBhICYmIG51bGwgIT0gYSkge1xuICAgICAgICAgIGUuYXJnc1swXSA9IGE7XG4gICAgICAgICAgdCgpO1xuICAgICAgICB9IGVsc2UgdCgpO1xuICAgICAgfSBlbHNlIHQoKTtcbiAgICB9IGVsc2UgdCgpO1xuICB9XG59Il19