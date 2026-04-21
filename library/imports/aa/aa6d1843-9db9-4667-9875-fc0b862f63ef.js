"use strict";
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