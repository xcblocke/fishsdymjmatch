
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/gamePlay/badge/mode/BadgeMode.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'aa6d1hDnblGZ5h1/AuGL2Pv', 'BadgeMode');
// Scripts/gamePlay/badge/mode/BadgeMode.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.BadgeType = void 0;
var GameTypeEnums_1 = require("../../../core/simulator/constant/GameTypeEnums");
var TravelGameData_1 = require("../../../core/simulator/data/TravelGameData");
var DataReader_1 = require("../../../framework/data/DataReader");
var I18NStrings_1 = require("../../../framework/data/I18NStrings");
var Model_1 = require("../../../framework/data/Model");
var ConfigType_1 = require("../../base/data/ConfigType");
var DGameGetItem_1 = require("../../dot/DGameGetItem");
var UserModel_1 = require("../../user/UserModel");
var BadgeType;
(function (BadgeType) {
    BadgeType[BadgeType["Journey"] = 4] = "Journey";
    BadgeType[BadgeType["Daily"] = 5] = "Daily";
})(BadgeType = exports.BadgeType || (exports.BadgeType = {}));
var BadgeMode = /** @class */ (function (_super) {
    __extends(BadgeMode, _super);
    function BadgeMode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(BadgeMode.prototype, "badges", {
        get: function () {
            this.localData.badgeInfo || (this.localData.badgeInfo = {
                badges: {}
            });
            return this.localData.badgeInfo.badges;
        },
        enumerable: false,
        configurable: true
    });
    BadgeMode.prototype.addBadge = function (e, t, o, n) {
        if (e && !(e <= 0)) {
            var i = e.toString(), r = DataReader_1.DataReader.getByKey(ConfigType_1.ConfigType.item_config, e);
            t || (t = r ? r.Type : 0);
            var a = Date.now();
            n && (n += a);
            this.badges[i] = {
                itemId: e,
                timestamp: a,
                type: t,
                session: o,
                expireTime: n
            };
            var l = UserModel_1.default.getInstance().getCurrentGameData();
            DGameGetItem_1.DotGameGetItem.dotGetItem(l, {
                itemId: "" + e,
                itemName: I18NStrings_1.default.getCN(null == r ? void 0 : r.NameKey),
                number: 1,
                afterNum: 1,
                reasonId: this.getReasonId(t),
                reasonInfo: this.getReasonInfo(t, o)
            });
            this.save();
        }
    };
    BadgeMode.prototype.getReasonId = function (e) {
        switch (e) {
            case BadgeType.Daily:
                return GameTypeEnums_1.EGetItemReasonId.DailyChallengeAd;
            case BadgeType.Journey:
                return GameTypeEnums_1.EGetItemReasonId.Journey;
        }
    };
    BadgeMode.prototype.getReasonInfo = function (e, t) {
        switch (e) {
            case BadgeType.Daily:
                var o = DataReader_1.DataReader.getByKey(ConfigType_1.ConfigType.daily_challenge, t);
                return "每日挑战奖励_完成_" + (null == o ? void 0 : o.Year) + "年" + (null == o ? void 0 : o.Month) + "月挑战";
            case BadgeType.Journey:
                return "旅行活动奖励_到达第" + TravelGameData_1.default.getInstance().getCurrentLevelId() + "关";
        }
    };
    BadgeMode.prototype.removeBadge = function (e) {
        if (e) {
            var t = e.toString();
            if (this.badges[t]) {
                delete this.badges[t];
                this.save();
            }
        }
    };
    BadgeMode.prototype.hasBadge = function (e) {
        if (!e)
            return false;
        var t = e.toString();
        return !!this.badges[t];
    };
    BadgeMode.prototype.getBadgesByType = function (e) {
        var t = Date.now(), o = Object.values(this.badges).filter(function (o) {
            return o.type === e && !(o.expireTime > 0 && o.expireTime < t);
        });
        null == o || o.sort(function (e, t) {
            return e.itemId - t.itemId;
        });
        return o;
    };
    BadgeMode.prototype.getBadge = function (e) {
        return this.badges["" + e] || null;
    };
    BadgeMode.prototype.clearBadgesByType = function (e) {
        var t = this, o = 0;
        Object.keys(this.badges).forEach(function (n) {
            if (t.badges[n].type === e) {
                delete t.badges[n];
                o++;
            }
        });
        return o;
    };
    BadgeMode.prototype.save = function () {
        this.localData.badgeInfo = {
            badges: this.badges
        };
    };
    __decorate([
        mj.traitEvent("BadgeMode_addBadge")
    ], BadgeMode.prototype, "addBadge", null);
    BadgeMode = __decorate([
        mj.class("BadgeMode")
    ], BadgeMode);
    return BadgeMode;
}(Model_1.default));
exports.default = BadgeMode;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2dhbWVQbGF5L2JhZGdlL21vZGUvQmFkZ2VNb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0ZBQWtGO0FBQ2xGLDhFQUF5RTtBQUN6RSxpRUFBZ0U7QUFDaEUsbUVBQThEO0FBQzlELHVEQUFrRDtBQUNsRCx5REFBd0Q7QUFDeEQsdURBQXdEO0FBQ3hELGtEQUE2QztBQUM3QyxJQUFZLFNBR1g7QUFIRCxXQUFZLFNBQVM7SUFDbkIsK0NBQVcsQ0FBQTtJQUNYLDJDQUFTLENBQUE7QUFDWCxDQUFDLEVBSFcsU0FBUyxHQUFULGlCQUFTLEtBQVQsaUJBQVMsUUFHcEI7QUFFRDtJQUF1Qyw2QkFBSztJQUE1Qzs7SUE4RkEsQ0FBQztJQTdGQyxzQkFBSSw2QkFBTTthQUFWO1lBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsR0FBRztnQkFDdEQsTUFBTSxFQUFFLEVBQUU7YUFDWCxDQUFDLENBQUM7WUFDSCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQztRQUN6QyxDQUFDOzs7T0FBQTtJQUVELDRCQUFRLEdBQVIsVUFBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUU7WUFDbEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUNsQixDQUFDLEdBQUcsdUJBQVUsQ0FBQyxRQUFRLENBQUMsdUJBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDckQsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDMUIsSUFBSSxDQUFD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LENBQUMsU0FBUyxHQUFHO1lBQ3pCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtTQUNwQixDQUFDO0lBQ0osQ0FBQztJQXJGRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsb0JBQW9CLENBQUM7NkNBMEJuQztJQWpDa0IsU0FBUztRQUQ3QixFQUFFLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQztPQUNELFNBQVMsQ0E4RjdCO0lBQUQsZ0JBQUM7Q0E5RkQsQUE4RkMsQ0E5RnNDLGVBQUssR0E4RjNDO2tCQTlGb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVHZXRJdGVtUmVhc29uSWQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbmltcG9ydCBUcmF2ZWxHYW1lRGF0YSBmcm9tICcuLi8uLi8uLi9jb3JlL3NpbXVsYXRvci9kYXRhL1RyYXZlbEdhbWVEYXRhJztcbmltcG9ydCB7IERhdGFSZWFkZXIgfSBmcm9tICcuLi8uLi8uLi9mcmFtZXdvcmsvZGF0YS9EYXRhUmVhZGVyJztcbmltcG9ydCBJMThOU3RyaW5ncyBmcm9tICcuLi8uLi8uLi9mcmFtZXdvcmsvZGF0YS9JMThOU3RyaW5ncyc7XG5pbXBvcnQgTW9kZWwgZnJvbSAnLi4vLi4vLi4vZnJhbWV3b3JrL2RhdGEvTW9kZWwnO1xuaW1wb3J0IHsgQ29uZmlnVHlwZSB9IGZyb20gJy4uLy4uL2Jhc2UvZGF0YS9Db25maWdUeXBlJztcbmltcG9ydCB7IERvdEdhbWVHZXRJdGVtIH0gZnJvbSAnLi4vLi4vZG90L0RHYW1lR2V0SXRlbSc7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uLy4uL3VzZXIvVXNlck1vZGVsJztcbmV4cG9ydCBlbnVtIEJhZGdlVHlwZSB7XG4gIEpvdXJuZXkgPSA0LFxuICBEYWlseSA9IDUsXG59XG5AbWouY2xhc3MoXCJCYWRnZU1vZGVcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhZGdlTW9kZSBleHRlbmRzIE1vZGVsIHtcbiAgZ2V0IGJhZGdlcygpIHtcbiAgICB0aGlzLmxvY2FsRGF0YS5iYWRnZUluZm8gfHwgKHRoaXMubG9jYWxEYXRhLmJhZGdlSW5mbyA9IHtcbiAgICAgIGJhZGdlczoge31cbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcy5sb2NhbERhdGEuYmFkZ2VJbmZvLmJhZGdlcztcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkJhZGdlTW9kZV9hZGRCYWRnZVwiKVxuICBhZGRCYWRnZShlLCB0LCBvLCBuKSB7XG4gICAgaWYgKGUgJiYgIShlIDw9IDApKSB7XG4gICAgICB2YXIgaSA9IGUudG9TdHJpbmcoKSxcbiAgICAgICAgciA9IERhdGFSZWFkZXIuZ2V0QnlLZXkoQ29uZmlnVHlwZS5pdGVtX2NvbmZpZywgZSk7XG4gICAgICB0IHx8ICh0ID0gciA/IHIuVHlwZSA6IDApO1xuICAgICAgdmFyIGEgPSBEYXRlLm5vdygpO1xuICAgICAgbiAmJiAobiArPSBhKTtcbiAgICAgIHRoaXMuYmFkZ2VzW2ldID0ge1xuICAgICAgICBpdGVtSWQ6IGUsXG4gICAgICAgIHRpbWVzdGFtcDogYSxcbiAgICAgICAgdHlwZTogdCxcbiAgICAgICAgc2Vzc2lvbjogbyxcbiAgICAgICAgZXhwaXJlVGltZTogblxuICAgICAgfTtcbiAgICAgIHZhciBsID0gVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0Q3VycmVudEdhbWVEYXRhKCk7XG4gICAgICBEb3RHYW1lR2V0SXRlbS5kb3RHZXRJdGVtKGwsIHtcbiAgICAgICAgaXRlbUlkOiBcIlwiICsgZSxcbiAgICAgICAgaXRlbU5hbWU6IEkxOE5TdHJpbmdzLmdldENOKG51bGwgPT0gciA/IHZvaWQgMCA6IHIuTmFtZUtleSksXG4gICAgICAgIG51bWJlcjogMSxcbiAgICAgICAgYWZ0ZXJOdW06IDEsXG4gICAgICAgIHJlYXNvbklkOiB0aGlzLmdldFJlYXNvbklkKHQpLFxuICAgICAgICByZWFzb25JbmZvOiB0aGlzLmdldFJlYXNvbkluZm8odCwgbylcbiAgICAgIH0pO1xuICAgICAgdGhpcy5zYXZlKCk7XG4gICAgfVxuICB9XG4gIGdldFJlYXNvbklkKGUpIHtcbiAgICBzd2l0Y2ggKGUpIHtcbiAgICAgIGNhc2UgQmFkZ2VUeXBlLkRhaWx5OlxuICAgICAgICByZXR1cm4gRUdldEl0ZW1SZWFzb25JZC5EYWlseUNoYWxsZW5nZUFkO1xuICAgICAgY2FzZSBCYWRnZVR5cGUuSm91cm5leTpcbiAgICAgICAgcmV0dXJuIEVHZXRJdGVtUmVhc29uSWQuSm91cm5leTtcbiAgICB9XG4gIH1cbiAgZ2V0UmVhc29uSW5mbyhlLCB0KSB7XG4gICAgc3dpdGNoIChlKSB7XG4gICAgICBjYXNlIEJhZGdlVHlwZS5EYWlseTpcbiAgICAgICAgdmFyIG8gPSBEYXRhUmVhZGVyLmdldEJ5S2V5KENvbmZpZ1R5cGUuZGFpbHlfY2hhbGxlbmdlLCB0KTtcbiAgICAgICAgcmV0dXJuIFwi5q+P5pel5oyR5oiY5aWW5YqxX+WujOaIkF9cIiArIChudWxsID09IG8gPyB2b2lkIDAgOiBvLlllYXIpICsgXCLlubRcIiArIChudWxsID09IG8gPyB2b2lkIDAgOiBvLk1vbnRoKSArIFwi5pyI5oyR5oiYXCI7XG4gICAgICBjYXNlIEJhZGdlVHlwZS5Kb3VybmV5OlxuICAgICAgICByZXR1cm4gXCLml4XooYzmtLvliqjlpZblirFf5Yiw6L6+56ysXCIgKyBUcmF2ZWxHYW1lRGF0YS5nZXRJbnN0YW5jZSgpLmdldEN1cnJlbnRMZXZlbElkKCkgKyBcIuWFs1wiO1xuICAgIH1cbiAgfVxuICByZW1vdmVCYWRnZShlKSB7XG4gICAgaWYgKGUpIHtcbiAgICAgIHZhciB0ID0gZS50b1N0cmluZygpO1xuICAgICAgaWYgKHRoaXMuYmFkZ2VzW3RdKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmJhZGdlc1t0XTtcbiAgICAgICAgdGhpcy5zYXZlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGhhc0JhZGdlKGUpIHtcbiAgICBpZiAoIWUpIHJldHVybiBmYWxzZTtcbiAgICB2YXIgdCA9IGUudG9TdHJpbmcoKTtcbiAgICByZXR1cm4gISF0aGlzLmJhZGdlc1t0XTtcbiAgfVxuICBnZXRCYWRnZXNCeVR5cGUoZSkge1xuICAgIHZhciB0ID0gRGF0ZS5ub3coKSxcbiAgICAgIG8gPSBPYmplY3QudmFsdWVzKHRoaXMuYmFkZ2VzKS5maWx0ZXIoZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgcmV0dXJuIG8udHlwZSA9PT0gZSAmJiAhKG8uZXhwaXJlVGltZSA+IDAgJiYgby5leHBpcmVUaW1lIDwgdCk7XG4gICAgICB9KTtcbiAgICBudWxsID09IG8gfHwgby5zb3J0KGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICByZXR1cm4gZS5pdGVtSWQgLSB0Lml0ZW1JZDtcbiAgICB9KTtcbiAgICByZXR1cm4gbztcbiAgfVxuICBnZXRCYWRnZShlKSB7XG4gICAgcmV0dXJuIHRoaXMuYmFkZ2VzW1wiXCIgKyBlXSB8fCBudWxsO1xuICB9XG4gIGNsZWFyQmFkZ2VzQnlUeXBlKGUpIHtcbiAgICB2YXIgdCA9IHRoaXMsXG4gICAgICBvID0gMDtcbiAgICBPYmplY3Qua2V5cyh0aGlzLmJhZGdlcykuZm9yRWFjaChmdW5jdGlvbiAobikge1xuICAgICAgaWYgKHQuYmFkZ2VzW25dLnR5cGUgPT09IGUpIHtcbiAgICAgICAgZGVsZXRlIHQuYmFkZ2VzW25dO1xuICAgICAgICBvKys7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG87XG4gIH1cbiAgc2F2ZSgpIHtcbiAgICB0aGlzLmxvY2FsRGF0YS5iYWRnZUluZm8gPSB7XG4gICAgICBiYWRnZXM6IHRoaXMuYmFkZ2VzXG4gICAgfTtcbiAgfVxufSJdfQ==