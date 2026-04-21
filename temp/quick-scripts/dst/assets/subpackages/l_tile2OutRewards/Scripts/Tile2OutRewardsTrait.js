
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_tile2OutRewards/Scripts/Tile2OutRewardsTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6542eyR+QlHD78HZ1M3Kdx3', 'Tile2OutRewardsTrait');
// subpackages/l_tile2OutRewards/Scripts/Tile2OutRewardsTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TravelConfig_1 = require("../../../Scripts/config/TravelConfig");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var i;
(i = {})[105] = 101;
i[205] = 201;
i[607] = 601;
var p = i;
var Tile2OutRewardsTrait = /** @class */ (function (_super) {
    __extends(Tile2OutRewardsTrait, _super);
    function Tile2OutRewardsTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Tile2OutRewardsTrait.prototype, "taskRewards", {
        get: function () {
            var e;
            return null !== (e = this.traitData.taskRewards) && void 0 !== e ? e : [];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tile2OutRewardsTrait.prototype, "travelBoxes", {
        get: function () {
            var e;
            return null !== (e = this.traitData.travelBoxes) && void 0 !== e ? e : [];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tile2OutRewardsTrait.prototype, "rankRewards", {
        get: function () {
            var e;
            return null !== (e = this.traitData.rankRewards) && void 0 !== e ? e : [];
        },
        enumerable: false,
        configurable: true
    });
    Tile2OutRewardsTrait.prototype.isTile2Mode = function () {
        return UserModel_1.default.getInstance().getMainGameData().gameType === GameTypeEnums_1.MjGameType.Tile2Normal;
    };
    Tile2OutRewardsTrait.prototype.onTLGameModel_getReward = function (e, t) {
        var r, n;
        if (this.isTile2Mode()) {
            var i = e.beforReturnVal;
            if (!i || i.length <= 0)
                t();
            else {
                var o = this.travelBoxes;
                if (!o || o.length <= 0)
                    t();
                else {
                    for (var a = o.filter(function (e) {
                        return -1 === e[1];
                    }), s = function s(e) {
                        var t = i[e];
                        if (t.type === TravelConfig_1.ETravelRewardType.EGiftBox) {
                            var r = o.find(function (e) {
                                return e[0] === t.lv;
                            });
                            r && -1 !== r[1] && (t.reward = r[1]);
                        }
                    }, u = 0; u < i.length; u++)
                        s(u);
                    var c = function c(e) {
                        var t = i.findIndex(function (t) {
                            return t.lv === e[0];
                        });
                        -1 !== t && i.splice(t, 1);
                    };
                    try {
                        for (var p = __values(a), d = p.next(); !d.done; d = p.next())
                            c(d.value);
                    }
                    catch (e) {
                        r = {
                            error: e
                        };
                    }
                    finally {
                        try {
                            d && !d.done && (n = p.return) && n.call(p);
                        }
                        finally {
                            if (r)
                                throw r.error;
                        }
                    }
                    t({
                        returnVal: i
                    });
                }
            }
        }
        else
            t();
    };
    Tile2OutRewardsTrait.prototype.onTLMapVw_updateMapEleCfg = function (e, t) {
        var r, n, i;
        if (this.isTile2Mode()) {
            var o = e.ins.stateConfig;
            if (!o || !o.elements || o.elements.length <= 0)
                t();
            else {
                var a = this.travelBoxes;
                if (!a || a.length <= 0)
                    t();
                else {
                    var s = a.filter(function (e) {
                        return -1 === e[1];
                    }), u = function u(e) {
                        s.find(function (t) {
                            return t[0] === e.level;
                        }) && (e.type = null !== (i = p[e.type]) && void 0 !== i ? i : e.type);
                    };
                    try {
                        for (var f = __values(o.elements), c = f.next(); !c.done; c = f.next())
                            u(c.value);
                    }
                    catch (e) {
                        r = {
                            error: e
                        };
                    }
                    finally {
                        try {
                            c && !c.done && (n = f.return) && n.call(f);
                        }
                        finally {
                            if (r)
                                throw r.error;
                        }
                    }
                    t();
                }
            }
        }
        else
            t();
    };
    Tile2OutRewardsTrait.prototype.onTaskTrait_getStageRews = function (e, t) {
        if (this.isTile2Mode()) {
            if (!this.taskRewards || this.taskRewards.length <= 0) {
                t();
            }
            else {
                t({
                    isBreak: true,
                    returnType: TraitCallbackReturnType.return,
                    returnVal: this.taskRewards
                });
            }
        }
        else {
            t();
        }
    };
    Tile2OutRewardsTrait.prototype.onRankRobotCfg_getRewards = function (e, t) {
        if (this.isTile2Mode()) {
            if (!this.rankRewards || this.rankRewards.length <= 0) {
                t();
            }
            else {
                t({
                    isBreak: true,
                    returnType: TraitCallbackReturnType.return,
                    returnVal: this.rankRewards
                });
            }
        }
        else {
            t();
        }
    };
    Tile2OutRewardsTrait.traitKey = "Tile2OutRewards";
    Tile2OutRewardsTrait = __decorate([
        mj.trait,
        mj.class("Tile2OutRewardsTrait")
    ], Tile2OutRewardsTrait);
    return Tile2OutRewardsTrait;
}(Trait_1.default));
exports.default = Tile2OutRewardsTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3RpbGUyT3V0UmV3YXJkcy9TY3JpcHRzL1RpbGUyT3V0UmV3YXJkc1RyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3RkFBb0Y7QUFDcEYsZ0VBQTJEO0FBQzNELHFFQUF5RTtBQUN6RSxzRUFBaUU7QUFDakUsSUFBSSxDQUFDLENBQUM7QUFDTixDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7QUFDcEIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztBQUNiLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7QUFDYixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFHVjtJQUFrRCx3Q0FBSztJQUF2RDs7SUE0SEEsQ0FBQztJQTFIQyxzQkFBSSw2Q0FBVzthQUFmO1lBQ0UsSUFBSSxDQUFDLENBQUM7WUFDTixPQUFPLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDNUUsQ0FBQzs7O09BQUE7SUFDRCxzQkFBSSw2Q0FBVzthQUFmO1lBQ0UsSUFBSSxDQUFDLENBQUM7WUFDTixPQUFPLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDNUUsQ0FBQzs7O09BQUE7SUFDRCxzQkFBSSw2Q0FBVzthQUFmO1lBQ0UsSUFBSSxDQUFDLENBQUM7WUFDTixPQUFPLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFD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RSxDQUFDO2FBQ0w7aUJBQU07Z0JBQ0wsQ0FBQyxDQUFDO29CQUNBLE9BQU8sRUFBRSxJQUFJO29CQUNiLFVBQVUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMxQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFdBQVc7aUJBQzVCLENBQUMsQ0FBQzthQUNKO1NBQ0Y7YUFBTTtZQUNMLENBQUMsRUFBRSxDQUFDO1NBQ0w7SUFDSCxDQUFDO0lBQ0Qsd0RBQXlCLEdBQXpCLFVBQTBCLENBQUMsRUFBRSxDQUFDO1FBQzVCLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtnQkFDckQsQ0FBQyxFQUFFLENBQUM7YUFDTDtpQkFBTTtnQkFDTCxDQUFDLENBQUM7b0JBQ0EsT0FBTyxFQUFFLElBQUk7b0JBQ2IsVUFBVSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQzFDLFNBQVMsRUFBRSxJQUFJLENBQUMsV0FBVztpQkFDNUIsQ0FBQyxDQUFDO2FBQ0o7U0FDRjthQUFNO1lBQ0wsQ0FBQyxFQUFFLENBQUM7U0FDTDtJQUNILENBQUM7SUExSE0sNkJBQVEsR0FBRyxpQkFBaUIsQ0FBQztJQURqQixvQkFBb0I7UUFGeEMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLHNCQUFzQixDQUFDO09BQ1osb0JBQW9CLENBNEh4QztJQUFELDJCQUFDO0NBNUhELEFBNEhDLENBNUhpRCxlQUFLLEdBNEh0RDtrQkE1SG9CLG9CQUFvQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1qR2FtZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCB7IEVUcmF2ZWxSZXdhcmRUeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb25maWcvVHJhdmVsQ29uZmlnJztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS91c2VyL1VzZXJNb2RlbCc7XG52YXIgaTtcbihpID0ge30pWzEwNV0gPSAxMDE7XG5pWzIwNV0gPSAyMDE7XG5pWzYwN10gPSA2MDE7XG52YXIgcCA9IGk7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIlRpbGUyT3V0UmV3YXJkc1RyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaWxlMk91dFJld2FyZHNUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJUaWxlMk91dFJld2FyZHNcIjtcbiAgZ2V0IHRhc2tSZXdhcmRzKCkge1xuICAgIHZhciBlO1xuICAgIHJldHVybiBudWxsICE9PSAoZSA9IHRoaXMudHJhaXREYXRhLnRhc2tSZXdhcmRzKSAmJiB2b2lkIDAgIT09IGUgPyBlIDogW107XG4gIH1cbiAgZ2V0IHRyYXZlbEJveGVzKCkge1xuICAgIHZhciBlO1xuICAgIHJldHVybiBudWxsICE9PSAoZSA9IHRoaXMudHJhaXREYXRhLnRyYXZlbEJveGVzKSAmJiB2b2lkIDAgIT09IGUgPyBlIDogW107XG4gIH1cbiAgZ2V0IHJhbmtSZXdhcmRzKCkge1xuICAgIHZhciBlO1xuICAgIHJldHVybiBudWxsICE9PSAoZSA9IHRoaXMudHJhaXREYXRhLnJhbmtSZXdhcmRzKSAmJiB2b2lkIDAgIT09IGUgPyBlIDogW107XG4gIH1cbiAgaXNUaWxlMk1vZGUoKSB7XG4gICAgcmV0dXJuIFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldE1haW5HYW1lRGF0YSgpLmdhbWVUeXBlID09PSBNakdhbWVUeXBlLlRpbGUyTm9ybWFsO1xuICB9XG4gIG9uVExHYW1lTW9kZWxfZ2V0UmV3YXJkKGUsIHQpIHtcbiAgICB2YXIgciwgbjtcbiAgICBpZiAodGhpcy5pc1RpbGUyTW9kZSgpKSB7XG4gICAgICB2YXIgaSA9IGUuYmVmb3JSZXR1cm5WYWw7XG4gICAgICBpZiAoIWkgfHwgaS5sZW5ndGggPD0gMCkgdCgpO2Vsc2Uge1xuICAgICAgICB2YXIgbyA9IHRoaXMudHJhdmVsQm94ZXM7XG4gICAgICAgIGlmICghbyB8fCBvLmxlbmd0aCA8PSAwKSB0KCk7ZWxzZSB7XG4gICAgICAgICAgZm9yICh2YXIgYSA9IG8uZmlsdGVyKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgIHJldHVybiAtMSA9PT0gZVsxXTtcbiAgICAgICAgICAgIH0pLCBzID0gZnVuY3Rpb24gcyhlKSB7XG4gICAgICAgICAgICAgIHZhciB0ID0gaVtlXTtcbiAgICAgICAgICAgICAgaWYgKHQudHlwZSA9PT0gRVRyYXZlbFJld2FyZFR5cGUuRUdpZnRCb3gpIHtcbiAgICAgICAgICAgICAgICB2YXIgciA9IG8uZmluZChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGVbMF0gPT09IHQubHY7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgciAmJiAtMSAhPT0gclsxXSAmJiAodC5yZXdhcmQgPSByWzFdKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgdSA9IDA7IHUgPCBpLmxlbmd0aDsgdSsrKSBzKHUpO1xuICAgICAgICAgIHZhciBjID0gZnVuY3Rpb24gYyhlKSB7XG4gICAgICAgICAgICB2YXIgdCA9IGkuZmluZEluZGV4KGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgIHJldHVybiB0Lmx2ID09PSBlWzBdO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAtMSAhPT0gdCAmJiBpLnNwbGljZSh0LCAxKTtcbiAgICAgICAgICB9O1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmb3IgKHZhciBwID0gX192YWx1ZXMoYSksIGQgPSBwLm5leHQoKTsgIWQuZG9uZTsgZCA9IHAubmV4dCgpKSBjKGQudmFsdWUpO1xuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHIgPSB7XG4gICAgICAgICAgICAgIGVycm9yOiBlXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBkICYmICFkLmRvbmUgJiYgKG4gPSBwLnJldHVybikgJiYgbi5jYWxsKHApO1xuICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgaWYgKHIpIHRocm93IHIuZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHQoe1xuICAgICAgICAgICAgcmV0dXJuVmFsOiBpXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgdCgpO1xuICB9XG4gIG9uVExNYXBWd191cGRhdGVNYXBFbGVDZmcoZSwgdCkge1xuICAgIHZhciByLCBuLCBpO1xuICAgIGlmICh0aGlzLmlzVGlsZTJNb2RlKCkpIHtcbiAgICAgIHZhciBvID0gZS5pbnMuc3RhdGVDb25maWc7XG4gICAgICBpZiAoIW8gfHwgIW8uZWxlbWVudHMgfHwgby5lbGVtZW50cy5sZW5ndGggPD0gMCkgdCgpO2Vsc2Uge1xuICAgICAgICB2YXIgYSA9IHRoaXMudHJhdmVsQm94ZXM7XG4gICAgICAgIGlmICghYSB8fCBhLmxlbmd0aCA8PSAwKSB0KCk7ZWxzZSB7XG4gICAgICAgICAgdmFyIHMgPSBhLmZpbHRlcihmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICByZXR1cm4gLTEgPT09IGVbMV07XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHUgPSBmdW5jdGlvbiB1KGUpIHtcbiAgICAgICAgICAgICAgcy5maW5kKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRbMF0gPT09IGUubGV2ZWw7XG4gICAgICAgICAgICAgIH0pICYmIChlLnR5cGUgPSBudWxsICE9PSAoaSA9IHBbZS50eXBlXSkgJiYgdm9pZCAwICE9PSBpID8gaSA6IGUudHlwZSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmb3IgKHZhciBmID0gX192YWx1ZXMoby5lbGVtZW50cyksIGMgPSBmLm5leHQoKTsgIWMuZG9uZTsgYyA9IGYubmV4dCgpKSB1KGMudmFsdWUpO1xuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHIgPSB7XG4gICAgICAgICAgICAgIGVycm9yOiBlXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBjICYmICFjLmRvbmUgJiYgKG4gPSBmLnJldHVybikgJiYgbi5jYWxsKGYpO1xuICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgaWYgKHIpIHRocm93IHIuZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB0KCk7XG4gIH1cbiAgb25UYXNrVHJhaXRfZ2V0U3RhZ2VSZXdzKGUsIHQpIHtcbiAgICBpZiAodGhpcy5pc1RpbGUyTW9kZSgpKSB7XG4gICAgICBpZiAoIXRoaXMudGFza1Jld2FyZHMgfHwgdGhpcy50YXNrUmV3YXJkcy5sZW5ndGggPD0gMCkge1xuICAgICAgICB0KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0KHtcbiAgICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgICByZXR1cm5WYWw6IHRoaXMudGFza1Jld2FyZHNcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHQoKTtcbiAgICB9XG4gIH1cbiAgb25SYW5rUm9ib3RDZmdfZ2V0UmV3YXJkcyhlLCB0KSB7XG4gICAgaWYgKHRoaXMuaXNUaWxlMk1vZGUoKSkge1xuICAgICAgaWYgKCF0aGlzLnJhbmtSZXdhcmRzIHx8IHRoaXMucmFua1Jld2FyZHMubGVuZ3RoIDw9IDApIHtcbiAgICAgICAgdCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdCh7XG4gICAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICAgICAgcmV0dXJuVmFsOiB0aGlzLnJhbmtSZXdhcmRzXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0KCk7XG4gICAgfVxuICB9XG59Il19