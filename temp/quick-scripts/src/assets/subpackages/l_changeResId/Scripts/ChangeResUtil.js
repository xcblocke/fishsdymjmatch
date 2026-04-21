"use strict";
cc._RF.push(module, '18133hZAaVBMpvszOit83Un', 'ChangeResUtil');
// subpackages/l_changeResId/Scripts/ChangeResUtil.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.EFaceVisibilityType = void 0;
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var TileTypeEnum_1 = require("../../../Scripts/simulator/constant/TileTypeEnum");
var TileMapObject_1 = require("../../../Scripts/objects/TileMapObject");
var EFaceVisibilityType;
(function (EFaceVisibilityType) {
    EFaceVisibilityType[EFaceVisibilityType["FullyVisible"] = 1] = "FullyVisible";
    EFaceVisibilityType[EFaceVisibilityType["PartiallyVisible"] = 2] = "PartiallyVisible";
    EFaceVisibilityType[EFaceVisibilityType["Selectable"] = 3] = "Selectable";
    EFaceVisibilityType[EFaceVisibilityType["NotVisible"] = 4] = "NotVisible";
})(EFaceVisibilityType = exports.EFaceVisibilityType || (exports.EFaceVisibilityType = {}));
var ChangeResUtil = /** @class */ (function () {
    function ChangeResUtil() {
    }
    ChangeResUtil.collectOriginalCardIds = function (e) {
        var t = new Set();
        e.forEach(function (e) {
            var r = e.cardId;
            e.type === TileTypeEnum_1.ETileType.Normal && t.add(r);
        });
        return t;
    };
    ChangeResUtil.buildCandidateCardIdSet = function (e, t, r, i) {
        var a = e.getCardConfigMap(), o = new Set();
        a.forEach(function (e) {
            var r = e.cardId;
            TileMapObject_1.TileMapObject.isSpecialCardId(r) || r === GameTypeEnums_1.MjCardId.emFlowCardId && t < 4 || r === GameTypeEnums_1.MjCardId.emSeasonCardId && t < 6 || i.hasCard(r) && o.add(r);
        });
        if (1 === r) {
            o.delete(GameTypeEnums_1.MjCardId.emFlowCardIdMei);
            o.delete(GameTypeEnums_1.MjCardId.emFlowCardIdLan);
            o.delete(GameTypeEnums_1.MjCardId.emFlowCardIdZhu);
            o.delete(GameTypeEnums_1.MjCardId.emFlowCardIdJu);
        }
        else if (2 === r) {
            o.delete(GameTypeEnums_1.MjCardId.emSeasonCardIdChun);
            o.delete(GameTypeEnums_1.MjCardId.emSeasonCardIdXia);
            o.delete(GameTypeEnums_1.MjCardId.emSeasonCardIdQiu);
            o.delete(GameTypeEnums_1.MjCardId.emSeasonCardIdDong);
        }
        else if (3 === r) {
            o.delete(GameTypeEnums_1.MjCardId.emFlowCardIdMei);
            o.delete(GameTypeEnums_1.MjCardId.emFlowCardIdLan);
            o.delete(GameTypeEnums_1.MjCardId.emFlowCardIdZhu);
            o.delete(GameTypeEnums_1.MjCardId.emFlowCardIdJu);
            o.delete(GameTypeEnums_1.MjCardId.emSeasonCardIdChun);
            o.delete(GameTypeEnums_1.MjCardId.emSeasonCardIdXia);
            o.delete(GameTypeEnums_1.MjCardId.emSeasonCardIdQiu);
            o.delete(GameTypeEnums_1.MjCardId.emSeasonCardIdDong);
        }
        return o;
    };
    ChangeResUtil.classifyFacesByCardId = function (e) {
        var t = this, r = [];
        e.forEach(function (e) {
            var i = e.cardId;
            if (e.type == TileTypeEnum_1.ETileType.Normal) {
                var a = t.getVisibilityType(e);
                r.push({
                    cardId: i,
                    visibilityType: a,
                    tileObject: e
                });
            }
        });
        return r;
    };
    ChangeResUtil.getVisibilityType = function (e) {
        var t = e.tileMapObject, r = 0 !== t.isCardLock(e), i = t.isHasCover(e);
        return i || r ? !i && r ? EFaceVisibilityType.FullyVisible : i && this.isPartiallyVisible(e) ? EFaceVisibilityType.PartiallyVisible : EFaceVisibilityType.NotVisible : EFaceVisibilityType.Selectable;
    };
    ChangeResUtil.isPartiallyVisible = function (e) {
        var t, r, a = e.tileMapObject, n = e.layer + 1;
        if (n >= a.mapLayers().length)
            return true;
        var o = 0;
        try {
            for (var l = __values(e.ownerGridIds), s = l.next(); !s.done; s = l.next()) {
                var c = s.value;
                a.isHasCard(n, c) && o++;
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                s && !s.done && (r = l.return) && r.call(l);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        return o < 4;
    };
    return ChangeResUtil;
}());
exports.default = ChangeResUtil;

cc._RF.pop();