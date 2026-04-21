
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_changeResId/Scripts/ChangeResUtil.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2NoYW5nZVJlc0lkL1NjcmlwdHMvQ2hhbmdlUmVzVXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdGQUFrRjtBQUNsRixpRkFBNkU7QUFDN0Usd0VBQXVFO0FBQ3ZFLElBQVksbUJBS1g7QUFMRCxXQUFZLG1CQUFtQjtJQUM3Qiw2RUFBZ0IsQ0FBQTtJQUNoQixxRkFBb0IsQ0FBQTtJQUNwQix5RUFBYyxDQUFBO0lBQ2QseUVBQWMsQ0FBQTtBQUNoQixDQUFDLEVBTFcsbUJBQW1CLEdBQW5CLDJCQUFtQixLQUFuQiwyQkFBbUIsUUFLOUI7QUFDRDtJQUFBO0lBcUZBLENBQUM7SUFwRlEsb0NBQXNCLEdBQTdCLFVBQThCLENBQUM7UUFDN0IsSUFBSSxDQUFDLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNsQixDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQztZQUNuQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDO1lBQ2pCLENBQUMsQ0FBQyxJQUFJLEtBQUssd0JBQVMsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxQyxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUNNLHFDQUF1QixHQUE5QixVQUErQixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxFQUMxQixDQUFDLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNoQixDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQztZQUNuQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDO1lBQ2pCLDZCQUFhLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyx3QkFBUSxDQUFD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QUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUM3QztvQkFBUztnQkFDUixJQUFJLENBQUM7b0JBQUUsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDO2FBQ3RCO1NBQ0Y7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDZixDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQXJGQSxBQXFGQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWpDYXJkSWQgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuaW1wb3J0IHsgRVRpbGVUeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9zaW11bGF0b3IvY29uc3RhbnQvVGlsZVR5cGVFbnVtJztcbmltcG9ydCB7IFRpbGVNYXBPYmplY3QgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL29iamVjdHMvVGlsZU1hcE9iamVjdCc7XG5leHBvcnQgZW51bSBFRmFjZVZpc2liaWxpdHlUeXBlIHtcbiAgRnVsbHlWaXNpYmxlID0gMSxcbiAgUGFydGlhbGx5VmlzaWJsZSA9IDIsXG4gIFNlbGVjdGFibGUgPSAzLFxuICBOb3RWaXNpYmxlID0gNCxcbn1cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYW5nZVJlc1V0aWwge1xuICBzdGF0aWMgY29sbGVjdE9yaWdpbmFsQ2FyZElkcyhlKSB7XG4gICAgdmFyIHQgPSBuZXcgU2V0KCk7XG4gICAgZS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgciA9IGUuY2FyZElkO1xuICAgICAgZS50eXBlID09PSBFVGlsZVR5cGUuTm9ybWFsICYmIHQuYWRkKHIpO1xuICAgIH0pO1xuICAgIHJldHVybiB0O1xuICB9XG4gIHN0YXRpYyBidWlsZENhbmRpZGF0ZUNhcmRJZFNldChlLCB0LCByLCBpKSB7XG4gICAgdmFyIGEgPSBlLmdldENhcmRDb25maWdNYXAoKSxcbiAgICAgIG8gPSBuZXcgU2V0KCk7XG4gICAgYS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgciA9IGUuY2FyZElkO1xuICAgICAgVGlsZU1hcE9iamVjdC5pc1NwZWNpYWxDYXJkSWQocikgfHwgciA9PT0gTWpDYXJkSWQuZW1GbG93Q2FyZElkICYmIHQgPCA0IHx8IHIgPT09IE1qQ2FyZElkLmVtU2Vhc29uQ2FyZElkICYmIHQgPCA2IHx8IGkuaGFzQ2FyZChyKSAmJiBvLmFkZChyKTtcbiAgICB9KTtcbiAgICBpZiAoMSA9PT0gcikge1xuICAgICAgby5kZWxldGUoTWpDYXJkSWQuZW1GbG93Q2FyZElkTWVpKTtcbiAgICAgIG8uZGVsZXRlKE1qQ2FyZElkLmVtRmxvd0NhcmRJZExhbik7XG4gICAgICBvLmRlbGV0ZShNakNhcmRJZC5lbUZsb3dDYXJkSWRaaHUpO1xuICAgICAgby5kZWxldGUoTWpDYXJkSWQuZW1GbG93Q2FyZElkSnUpO1xuICAgIH0gZWxzZSBpZiAoMiA9PT0gcikge1xuICAgICAgby5kZWxldGUoTWpDYXJkSWQuZW1TZWFzb25DYXJkSWRDaHVuKTtcbiAgICAgIG8uZGVsZXRlKE1qQ2FyZElkLmVtU2Vhc29uQ2FyZElkWGlhKTtcbiAgICAgIG8uZGVsZXRlKE1qQ2FyZElkLmVtU2Vhc29uQ2FyZElkUWl1KTtcbiAgICAgIG8uZGVsZXRlKE1qQ2FyZElkLmVtU2Vhc29uQ2FyZElkRG9uZyk7XG4gICAgfSBlbHNlIGlmICgzID09PSByKSB7XG4gICAgICBvLmRlbGV0ZShNakNhcmRJZC5lbUZsb3dDYXJkSWRNZWkpO1xuICAgICAgby5kZWxldGUoTWpDYXJkSWQuZW1GbG93Q2FyZElkTGFuKTtcbiAgICAgIG8uZGVsZXRlKE1qQ2FyZElkLmVtRmxvd0NhcmRJZFpodSk7XG4gICAgICBvLmRlbGV0ZShNakNhcmRJZC5lbUZsb3dDYXJkSWRKdSk7XG4gICAgICBvLmRlbGV0ZShNakNhcmRJZC5lbVNlYXNvbkNhcmRJZENodW4pO1xuICAgICAgby5kZWxldGUoTWpDYXJkSWQuZW1TZWFzb25DYXJkSWRYaWEpO1xuICAgICAgby5kZWxldGUoTWpDYXJkSWQuZW1TZWFzb25DYXJkSWRRaXUpO1xuICAgICAgby5kZWxldGUoTWpDYXJkSWQuZW1TZWFzb25DYXJkSWREb25nKTtcbiAgICB9XG4gICAgcmV0dXJuIG87XG4gIH1cbiAgc3RhdGljIGNsYXNzaWZ5RmFjZXNCeUNhcmRJZChlKSB7XG4gICAgdmFyIHQgPSB0aGlzLFxuICAgICAgciA9IFtdO1xuICAgIGUuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIGkgPSBlLmNhcmRJZDtcbiAgICAgIGlmIChlLnR5cGUgPT0gRVRpbGVUeXBlLk5vcm1hbCkge1xuICAgICAgICB2YXIgYSA9IHQuZ2V0VmlzaWJpbGl0eVR5cGUoZSk7XG4gICAgICAgIHIucHVzaCh7XG4gICAgICAgICAgY2FyZElkOiBpLFxuICAgICAgICAgIHZpc2liaWxpdHlUeXBlOiBhLFxuICAgICAgICAgIHRpbGVPYmplY3Q6IGVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHI7XG4gIH1cbiAgc3RhdGljIGdldFZpc2liaWxpdHlUeXBlKGUpIHtcbiAgICB2YXIgdCA9IGUudGlsZU1hcE9iamVjdCxcbiAgICAgIHIgPSAwICE9PSB0LmlzQ2FyZExvY2soZSksXG4gICAgICBpID0gdC5pc0hhc0NvdmVyKGUpO1xuICAgIHJldHVybiBpIHx8IHIgPyAhaSAmJiByID8gRUZhY2VWaXNpYmlsaXR5VHlwZS5GdWxseVZpc2libGUgOiBpICYmIHRoaXMuaXNQYXJ0aWFsbHlWaXNpYmxlKGUpID8gRUZhY2VWaXNpYmlsaXR5VHlwZS5QYXJ0aWFsbHlWaXNpYmxlIDogRUZhY2VWaXNpYmlsaXR5VHlwZS5Ob3RWaXNpYmxlIDogRUZhY2VWaXNpYmlsaXR5VHlwZS5TZWxlY3RhYmxlO1xuICB9XG4gIHN0YXRpYyBpc1BhcnRpYWxseVZpc2libGUoZSkge1xuICAgIHZhciB0LFxuICAgICAgcixcbiAgICAgIGEgPSBlLnRpbGVNYXBPYmplY3QsXG4gICAgICBuID0gZS5sYXllciArIDE7XG4gICAgaWYgKG4gPj0gYS5tYXBMYXllcnMoKS5sZW5ndGgpIHJldHVybiB0cnVlO1xuICAgIHZhciBvID0gMDtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgbCA9IF9fdmFsdWVzKGUub3duZXJHcmlkSWRzKSwgcyA9IGwubmV4dCgpOyAhcy5kb25lOyBzID0gbC5uZXh0KCkpIHtcbiAgICAgICAgdmFyIGMgPSBzLnZhbHVlO1xuICAgICAgICBhLmlzSGFzQ2FyZChuLCBjKSAmJiBvKys7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdCA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHMgJiYgIXMuZG9uZSAmJiAociA9IGwucmV0dXJuKSAmJiByLmNhbGwobCk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAodCkgdGhyb3cgdC5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG8gPCA0O1xuICB9XG59Il19