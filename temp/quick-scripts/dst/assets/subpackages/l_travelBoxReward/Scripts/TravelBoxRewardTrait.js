
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_travelBoxReward/Scripts/TravelBoxRewardTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '042b1wQC69JbZQLmDX6eIT4', 'TravelBoxRewardTrait');
// subpackages/l_travelBoxReward/Scripts/TravelBoxRewardTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TravelConfig_1 = require("../../../Scripts/config/TravelConfig");
var o;
(o = {})[105] = 101;
o[106] = 101;
o[107] = 101;
o[108] = 101;
o[205] = 201;
o[206] = 201;
o[207] = 201;
o[208] = 201;
o[607] = 601;
o[608] = 601;
o[609] = 601;
o[610] = 601;
var u = o;
var TravelBoxRewardTrait = /** @class */ (function (_super) {
    __extends(TravelBoxRewardTrait, _super);
    function TravelBoxRewardTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TravelBoxRewardTrait.prototype.getReplaceInfo = function () {
        var e;
        return null !== (e = this.traitData.replace) && void 0 !== e ? e : [[19, -1], [31, 1002101], [61, 1002102], [81, 1002103]];
    };
    TravelBoxRewardTrait.prototype.onTLGameModel_getReward = function (e, t) {
        var r, n, o = e.beforReturnVal;
        if (!o || o.length <= 0)
            t();
        else {
            for (var i = this.getReplaceInfo(), a = i.filter(function (e) {
                return -1 === e[1];
            }), l = function l(e) {
                var t = o[e];
                if (t.type === TravelConfig_1.ETravelRewardType.EGiftBox) {
                    var r = i.find(function (e) {
                        return e[0] === t.lv;
                    });
                    r && -1 !== r[1] && (t.reward = r[1]);
                }
            }, u = 0; u < o.length; u++)
                l(u);
            var p = function p(e) {
                var t = o.findIndex(function (t) {
                    return t.lv === e[0];
                });
                -1 !== t && o.splice(t, 1);
            };
            try {
                for (var s = __values(a), v = s.next(); !v.done; v = s.next())
                    p(v.value);
            }
            catch (e) {
                r = {
                    error: e
                };
            }
            finally {
                try {
                    v && !v.done && (n = s.return) && n.call(s);
                }
                finally {
                    if (r)
                        throw r.error;
                }
            }
            t({
                returnVal: o
            });
        }
    };
    TravelBoxRewardTrait.prototype.onTLMapVw_updateMapEleCfg = function (e, t) {
        var r, n, o = e.ins.stateConfig;
        if (!o || !o.elements || o.elements.length <= 0)
            t();
        else {
            var i = this.getReplaceInfo().filter(function (e) {
                return -1 === e[1];
            }), a = function a(e) {
                i.find(function (t) {
                    return t[0] === e.level;
                }) && (e.type = u[e.type]);
            };
            try {
                for (var l = __values(o.elements), c = l.next(); !c.done; c = l.next())
                    a(c.value);
            }
            catch (e) {
                r = {
                    error: e
                };
            }
            finally {
                try {
                    c && !c.done && (n = l.return) && n.call(l);
                }
                finally {
                    if (r)
                        throw r.error;
                }
            }
            t();
        }
    };
    TravelBoxRewardTrait.traitKey = "TravelBoxReward";
    TravelBoxRewardTrait = __decorate([
        mj.trait,
        mj.class("TravelBoxRewardTrait")
    ], TravelBoxRewardTrait);
    return TravelBoxRewardTrait;
}(Trait_1.default));
exports.default = TravelBoxRewardTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3RyYXZlbEJveFJld2FyZC9TY3JpcHRzL1RyYXZlbEJveFJld2FyZFRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFDM0QscUVBQXlFO0FBQ3pFLElBQUksQ0FBQyxDQUFDO0FBQ04sQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO0FBQ3BCLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7QUFDYixDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO0FBQ2IsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztBQUNiLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7QUFDYixDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO0FBQ2IsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztBQUNiLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7QUFDYixDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO0FBQ2IsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztBQUNiLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7QUFDYixDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO0FBQ2IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBR1Y7SUFBa0Qsd0NBQUs7SUFBdkQ7O0lBMkVBLENBQUM7SUF6RUMsNkNBQWMsR0FBZDtRQUNFLElBQUksQ0FBQyxDQUFDO1FBQ04sT0FBTyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDN0gsQ0FBQztJQUNELHNEQUF1QixHQUF2QixVQUF3QixDQUFDLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsRUFDSCxDQUFDLEVBQ0QsQ0FBQyxHQUFHLENBQUMsQ0FBQyxjQUFjLENBQUM7UUFDdkIsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUM7WUFBRSxDQUFDLEVBQUUsQ0FBQzthQUFLO1lBQ2hDLEtBQUssSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQztnQkFDeEQsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDYixJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssZ0NBQWlCLENBQUMsUUFBUSxFQUFFO29CQUN6QyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQzt3QkFDeEIsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQztvQkFDdkIsQ0FBQyxDQUFDLENBQUM7b0JBQ0gsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ3ZDO1lBQ0gsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFO2dCQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwQyxJQUFJLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUNsQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQztvQkFDN0IsT0FBTyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdkIsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzdCLENBQUMsQ0FBQztZQUNGLElBQUk7Z0JBQ0YsS0FBSyxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUU7b0JBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUMzRTtZQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNWLENBQUMsR0FBRztvQkFDRixLQUFLLEVBQUUsQ0FBQztpQkFDVCxDQUFDO2FBQ0g7b0JBQVM7Z0JBQ1IsSUFBSTtvQkFDRixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUM3Qzt3QkFBUztvQkFDUixJQUFJLENBQUM7d0JBQUUsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDO2lCQUN0QjthQUNGO1lBQ0QsQ0FBQyxDQUFDO2dCQUNBLFNBQVMsRUFBRSxDQUFDO2FBQ2IsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBQ0Qsd0RBQXlCLEdBQXpCLFVBQTBCLENBQUMsRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxFQUNILENBQUMsRUFDRCxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUM7UUFDeEIsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLElBQUksQ0FBQztZQUFFLENBQUMsRUFBRSxDQUFDO2FBQUs7WUFDeEQsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUM7Z0JBQzVDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLENBQUMsQ0FBQyxFQUNGLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUNkLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO29CQUNoQixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDO2dCQUMxQixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQzdCLENBQUMsQ0FBQztZQUNKLElBQUk7Z0JBQ0YsS0FBSyxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFO29CQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDcEY7WUFBQyxPQUFPLENBQUMsRUFBRTtnQkFDVixDQUFDLEdBQUc7b0JBQ0YsS0FBSyxFQUFFLENBQUM7aUJBQ1QsQ0FBQzthQUNIO29CQUFTO2dCQUNSLElBQUk7b0JBQ0YsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDN0M7d0JBQVM7b0JBQ1IsSUFBSSxDQUFDO3dCQUFFLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQztpQkFDdEI7YUFDRjtZQUNELENBQUMsRUFBRSxDQUFDO1NBQ0w7SUFDSCxDQUFDO0lBekVNLDZCQUFRLEdBQUcsaUJBQWlCLENBQUM7SUFEakIsb0JBQW9CO1FBRnhDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQztPQUNaLG9CQUFvQixDQTJFeEM7SUFBRCwyQkFBQztDQTNFRCxBQTJFQyxDQTNFaUQsZUFBSyxHQTJFdEQ7a0JBM0VvQixvQkFBb0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IHsgRVRyYXZlbFJld2FyZFR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvbmZpZy9UcmF2ZWxDb25maWcnO1xudmFyIG87XG4obyA9IHt9KVsxMDVdID0gMTAxO1xub1sxMDZdID0gMTAxO1xub1sxMDddID0gMTAxO1xub1sxMDhdID0gMTAxO1xub1syMDVdID0gMjAxO1xub1syMDZdID0gMjAxO1xub1syMDddID0gMjAxO1xub1syMDhdID0gMjAxO1xub1s2MDddID0gNjAxO1xub1s2MDhdID0gNjAxO1xub1s2MDldID0gNjAxO1xub1s2MTBdID0gNjAxO1xudmFyIHUgPSBvO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJUcmF2ZWxCb3hSZXdhcmRUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJhdmVsQm94UmV3YXJkVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiVHJhdmVsQm94UmV3YXJkXCI7XG4gIGdldFJlcGxhY2VJbmZvKCkge1xuICAgIHZhciBlO1xuICAgIHJldHVybiBudWxsICE9PSAoZSA9IHRoaXMudHJhaXREYXRhLnJlcGxhY2UpICYmIHZvaWQgMCAhPT0gZSA/IGUgOiBbWzE5LCAtMV0sIFszMSwgMTAwMjEwMV0sIFs2MSwgMTAwMjEwMl0sIFs4MSwgMTAwMjEwM11dO1xuICB9XG4gIG9uVExHYW1lTW9kZWxfZ2V0UmV3YXJkKGUsIHQpIHtcbiAgICB2YXIgcixcbiAgICAgIG4sXG4gICAgICBvID0gZS5iZWZvclJldHVyblZhbDtcbiAgICBpZiAoIW8gfHwgby5sZW5ndGggPD0gMCkgdCgpO2Vsc2Uge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMuZ2V0UmVwbGFjZUluZm8oKSwgYSA9IGkuZmlsdGVyKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgcmV0dXJuIC0xID09PSBlWzFdO1xuICAgICAgICB9KSwgbCA9IGZ1bmN0aW9uIGwoZSkge1xuICAgICAgICAgIHZhciB0ID0gb1tlXTtcbiAgICAgICAgICBpZiAodC50eXBlID09PSBFVHJhdmVsUmV3YXJkVHlwZS5FR2lmdEJveCkge1xuICAgICAgICAgICAgdmFyIHIgPSBpLmZpbmQoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGVbMF0gPT09IHQubHY7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHIgJiYgLTEgIT09IHJbMV0gJiYgKHQucmV3YXJkID0gclsxXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCB1ID0gMDsgdSA8IG8ubGVuZ3RoOyB1KyspIGwodSk7XG4gICAgICB2YXIgcCA9IGZ1bmN0aW9uIHAoZSkge1xuICAgICAgICB2YXIgdCA9IG8uZmluZEluZGV4KGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgcmV0dXJuIHQubHYgPT09IGVbMF07XG4gICAgICAgIH0pO1xuICAgICAgICAtMSAhPT0gdCAmJiBvLnNwbGljZSh0LCAxKTtcbiAgICAgIH07XG4gICAgICB0cnkge1xuICAgICAgICBmb3IgKHZhciBzID0gX192YWx1ZXMoYSksIHYgPSBzLm5leHQoKTsgIXYuZG9uZTsgdiA9IHMubmV4dCgpKSBwKHYudmFsdWUpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByID0ge1xuICAgICAgICAgIGVycm9yOiBlXG4gICAgICAgIH07XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHYgJiYgIXYuZG9uZSAmJiAobiA9IHMucmV0dXJuKSAmJiBuLmNhbGwocyk7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgaWYgKHIpIHRocm93IHIuZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHQoe1xuICAgICAgICByZXR1cm5WYWw6IG9cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBvblRMTWFwVndfdXBkYXRlTWFwRWxlQ2ZnKGUsIHQpIHtcbiAgICB2YXIgcixcbiAgICAgIG4sXG4gICAgICBvID0gZS5pbnMuc3RhdGVDb25maWc7XG4gICAgaWYgKCFvIHx8ICFvLmVsZW1lbnRzIHx8IG8uZWxlbWVudHMubGVuZ3RoIDw9IDApIHQoKTtlbHNlIHtcbiAgICAgIHZhciBpID0gdGhpcy5nZXRSZXBsYWNlSW5mbygpLmZpbHRlcihmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIHJldHVybiAtMSA9PT0gZVsxXTtcbiAgICAgICAgfSksXG4gICAgICAgIGEgPSBmdW5jdGlvbiBhKGUpIHtcbiAgICAgICAgICBpLmZpbmQoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgIHJldHVybiB0WzBdID09PSBlLmxldmVsO1xuICAgICAgICAgIH0pICYmIChlLnR5cGUgPSB1W2UudHlwZV0pO1xuICAgICAgICB9O1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yICh2YXIgbCA9IF9fdmFsdWVzKG8uZWxlbWVudHMpLCBjID0gbC5uZXh0KCk7ICFjLmRvbmU7IGMgPSBsLm5leHQoKSkgYShjLnZhbHVlKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgciA9IHtcbiAgICAgICAgICBlcnJvcjogZVxuICAgICAgICB9O1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjICYmICFjLmRvbmUgJiYgKG4gPSBsLnJldHVybikgJiYgbi5jYWxsKGwpO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGlmIChyKSB0aHJvdyByLmVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0KCk7XG4gICAgfVxuICB9XG59Il19