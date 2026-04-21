
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_propInit/Scripts/PropInitTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'acf64jNOnlIIK11pU/FJH7S', 'PropInitTrait');
// subpackages/l_propInit/Scripts/PropInitTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var I18NStrings_1 = require("../../../Scripts/framework/data/I18NStrings");
var ControllerManager_1 = require("../../../Scripts/framework/manager/ControllerManager");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var DGameGetItem_1 = require("../../../Scripts/gamePlay/dot/DGameGetItem");
var IUserData_1 = require("../../../Scripts/user/IUserData");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var PropInitTrait = /** @class */ (function (_super) {
    __extends(PropInitTrait, _super);
    function PropInitTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PropInitTrait.prototype.isNormalGame = function (t) {
        return t === GameTypeEnums_1.MjGameType.Tile2Normal;
    };
    PropInitTrait.prototype.isLocalEmpty = function (t) {
        return null == t || "" === t;
    };
    PropInitTrait.prototype.isPropInitDone = function (t) {
        var e = "isPropInitDone_" + t;
        return !this.isLocalEmpty(this.localData[e]) && this.localData[e];
    };
    PropInitTrait.prototype.setPropInitDone = function (t) {
        var e = "isPropInitDone_" + t;
        this.localData[e] = true;
    };
    PropInitTrait.prototype.onGsListener_onNewGame = function (t, e) {
        var r, o, i, n, p = t.args[0];
        if (this.isNormalGame(p)) {
            var s = UserModel_1.default.getInstance().getGameDataByGameType(p), l = s.getLevelId(), c = null !== (n = null === (i = this.traitData) || void 0 === i ? void 0 : i.propList) && void 0 !== n ? n : [];
            try {
                for (var u = __values(c), f = u.next(); !f.done; f = u.next()) {
                    var d = f.value;
                    if (!(d.initNum <= 0 || this.isPropInitDone(d.type) || l < d.unlockLv)) {
                        this.setPropInitDone(d.type);
                        this.deliverProp(s, d.type, d.initNum);
                    }
                }
            }
            catch (t) {
                r = {
                    error: t
                };
            }
            finally {
                try {
                    f && !f.done && (o = u.return) && o.call(u);
                }
                finally {
                    if (r)
                        throw r.error;
                }
            }
            e();
        }
        else
            e();
    };
    PropInitTrait.prototype.deliverProp = function (t, e, r) {
        var o = 0, i = GameTypeEnums_1.EItemId.Shuffle;
        if (e === IUserData_1.EItemType.Shuffle) {
            t.changeShuffleNums(r, true);
            t.toolChange(GameTypeEnums_1.EItemId.Shuffle, r);
            o = t.getShuffleNums();
        }
        else if (e === IUserData_1.EItemType.Hint) {
            t.changeHitTipsNums(r, true);
            t.toolChange(GameTypeEnums_1.EItemId.Hint, r);
            o = t.getHitTipsNums();
            i = GameTypeEnums_1.EItemId.Hint;
        }
        else if (e === IUserData_1.EItemType.Undo) {
            t.changeRevertNums(r, true);
            t.toolChange(GameTypeEnums_1.EItemId.Revert, r);
            o = t.getRevertNums();
            i = GameTypeEnums_1.EItemId.Revert;
        }
        DGameGetItem_1.DotGameGetItem.dotGetItem(t, {
            itemId: i,
            number: r,
            afterNum: o,
            reasonId: GameTypeEnums_1.EGetItemReasonId.SystemGift,
            reasonInfo: "首次进入送" + r + "次" + GameTypeEnums_1.EItemName[i],
            replace: true
        });
    };
    PropInitTrait.prototype.onT2NodeBtmVw_isPropUnlimit = function (t, e) {
        var r = t.args[0];
        if (cc.isValid(r) && cc.isValid(r.parent)) {
            var o = r.parent.name, i = this.getPropType(o), n = UserModel_1.default.getInstance().getCurrentGameType();
            if (this.isUnlimitLevel(n, i)) {
                e({
                    returnType: TraitCallbackReturnType.return,
                    returnVal: true
                });
            }
            else {
                e();
            }
        }
        else
            e();
    };
    PropInitTrait.prototype.onT2NodeBtmVw_isPropLocked = function (t, e) {
        var r = t.args[0];
        if (cc.isValid(r) && cc.isValid(r.parent)) {
            var o = r.parent.name, i = this.getPropType(o), n = UserModel_1.default.getInstance().getCurrentGameType();
            if (this.isUnlocked(n, i)) {
                e();
            }
            else {
                e({
                    returnType: TraitCallbackReturnType.return,
                    returnVal: true
                });
            }
        }
        else
            e();
    };
    PropInitTrait.prototype.isUnlimitLevel = function (t, e) {
        var r = this.getPropItem(e);
        if (!r)
            return false;
        if (!this.isNormalGame(t))
            return false;
        var o = UserModel_1.default.getInstance().getGameDataByGameType(t).getLevelId();
        return !!r.unlimitLvs.includes(o);
    };
    PropInitTrait.prototype.isUnlocked = function (t, e) {
        var r = this.getPropItem(e);
        return !!r && !!this.isNormalGame(t) && UserModel_1.default.getInstance().getGameDataByGameType(t).getLevelId() >= r.unlockLv;
    };
    PropInitTrait.prototype.getPropType = function (t) {
        return "btnShuffle" === t ? IUserData_1.EItemType.Shuffle : "btnPropHint" === t ? IUserData_1.EItemType.Hint : "btnPropRevert" === t ? IUserData_1.EItemType.Undo : IUserData_1.EItemType.None;
    };
    PropInitTrait.prototype.getPropItem = function (t) {
        var e, r;
        return (null !== (r = null === (e = this.traitData) || void 0 === e ? void 0 : e.propList) && void 0 !== r ? r : []).find(function (e) {
            return e.type === t;
        });
    };
    PropInitTrait.prototype.onGameData_isShuffleEnough = function (t, e) {
        if (this.isUnlimitLevel(t.ins.gameType, IUserData_1.EItemType.Shuffle)) {
            e({
                returnType: TraitCallbackReturnType.return,
                returnVal: true
            });
        }
        else {
            e();
        }
    };
    PropInitTrait.prototype.onGameData_isHitTipEnough = function (t, e) {
        if (this.isUnlimitLevel(t.ins.gameType, IUserData_1.EItemType.Hint)) {
            e({
                returnType: TraitCallbackReturnType.return,
                returnVal: true
            });
        }
        else {
            e();
        }
    };
    PropInitTrait.prototype.onGameData_isRevertEnough = function (t, e) {
        if (this.isUnlimitLevel(t.ins.gameType, IUserData_1.EItemType.Undo)) {
            e({
                returnType: TraitCallbackReturnType.return,
                returnVal: true
            });
        }
        else {
            e();
        }
    };
    PropInitTrait.prototype.onGameData_chgShuffle = function (t, e) {
        if (t.args[0] >= 0) {
            e();
        }
        else {
            if (this.isUnlimitLevel(t.ins.gameType, IUserData_1.EItemType.Shuffle)) {
                e({
                    returnType: TraitCallbackReturnType.jump
                });
            }
            else {
                e();
            }
        }
    };
    PropInitTrait.prototype.onGameData_chgHitTips = function (t, e) {
        if (t.args[0] >= 0) {
            e();
        }
        else {
            if (this.isUnlimitLevel(t.ins.gameType, IUserData_1.EItemType.Hint)) {
                e({
                    returnType: TraitCallbackReturnType.jump
                });
            }
            else {
                e();
            }
        }
    };
    PropInitTrait.prototype.onGameData_chgRevert = function (t, e) {
        if (t.args[0] >= 0) {
            e();
        }
        else {
            if (this.isUnlimitLevel(t.ins.gameType, IUserData_1.EItemType.Undo)) {
                e({
                    returnType: TraitCallbackReturnType.jump
                });
            }
            else {
                e();
            }
        }
    };
    PropInitTrait.prototype.onT2NodeBtmVw_showLockTips = function (t, e) {
        var r = t.args[0], o = this.getPropItem(r);
        if (o) {
            var i = I18NStrings_1.default.stringFormat(I18NStrings_1.default.get("MahjongTiles_ProHint_1"), o.unlockLv);
            ControllerManager_1.default.getInstance().pushViewByController("PropLockTipController", {
                isReuse: false,
                tips: i,
                noBlock: true,
                isGlobal: false,
                bgStyle: null,
                isShowAction: false,
                tipDelayTime: 0.5
            });
            e();
        }
        else
            e();
    };
    PropInitTrait.traitKey = "PropInit";
    PropInitTrait = __decorate([
        mj.trait,
        mj.class("PropInitTrait")
    ], PropInitTrait);
    return PropInitTrait;
}(Trait_1.default));
exports.default = PropInitTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3Byb3BJbml0L1NjcmlwdHMvUHJvcEluaXRUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0ZBQTBIO0FBQzFILDJFQUFzRTtBQUN0RSwwRkFBcUY7QUFDckYsZ0VBQTJEO0FBQzNELDJFQUE0RTtBQUM1RSw2REFBNEQ7QUFDNUQsc0VBQWlFO0FBR2pFO0lBQTJDLGlDQUFLO0lBQWhEOztJQXFOQSxDQUFDO0lBbk5DLG9DQUFZLEdBQVosVUFBYSxDQUFDO1FBQ1osT0FBTyxDQUFDLEtBQUssMEJBQVUsQ0FBQyxXQUFXLENBQUM7SUFDdEMsQ0FBQztJQUNELG9DQUFZLEdBQVosVUFBYSxDQUFDO1FBQ1osT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUNELHNDQUFjLEdBQWQsVUFBZSxDQUFDO1FBQ2QsSUFBSSxDQUFDLEdBQUcsaUJBQWlCLEdBQUcsQ0FBQyxDQUFDO1FBQzlCLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFDRCx1Q0FBZSxHQUFmLFVBQWdCLENBQUM7UUFDZixJQUFJLENBQUMsR0FBRyxpQkFBaUIsR0FBRyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7SUFDM0IsQ0FBQztJQUNELDhDQUFzQixHQUF0QixVQUF1QixDQUFDLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsRUFDSCxDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsRUFDRCxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoQixJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMs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QyxDQUFDLENBQUM7YUFDSjtpQkFBTTtnQkFDTCxDQUFDLEVBQUUsQ0FBQzthQUNMO1NBQ0Y7SUFDSCxDQUFDO0lBQ0Qsa0RBQTBCLEdBQTFCLFVBQTJCLENBQUMsRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ2YsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLEVBQUU7WUFDTCxJQUFJLENBQUMsR0FBRyxxQkFBVyxDQUFDLFlBQVksQ0FBQyxxQkFBVyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN4RiwyQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyx1QkFBdUIsRUFBRTtnQkFDNUUsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsSUFBSSxFQUFFLENBQUM7Z0JBQ1AsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsUUFBUSxFQUFFLEtBQUs7Z0JBQ2YsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsWUFBWSxFQUFFLEtBQUs7Z0JBQ25CLFlBQVksRUFBRSxHQUFHO2FBQ2xCLENBQUMsQ0FBQztZQUNILENBQUMsRUFBRSxDQUFDO1NBQ0w7O1lBQU0sQ0FBQyxFQUFFLENBQUM7SUFDYixDQUFDO0lBbk5NLHNCQUFRLEdBQUcsVUFBVSxDQUFDO0lBRFYsYUFBYTtRQUZqQyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDO09BQ0wsYUFBYSxDQXFOakM7SUFBRCxvQkFBQztDQXJORCxBQXFOQyxDQXJOMEMsZUFBSyxHQXFOL0M7a0JBck5vQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWpHYW1lVHlwZSwgRUl0ZW1JZCwgRUdldEl0ZW1SZWFzb25JZCwgRUl0ZW1OYW1lIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbmltcG9ydCBJMThOU3RyaW5ncyBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay9kYXRhL0kxOE5TdHJpbmdzJztcbmltcG9ydCBDb250cm9sbGVyTWFuYWdlciBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay9tYW5hZ2VyL0NvbnRyb2xsZXJNYW5hZ2VyJztcbmltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgeyBEb3RHYW1lR2V0SXRlbSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvZG90L0RHYW1lR2V0SXRlbSc7XG5pbXBvcnQgeyBFSXRlbVR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL3VzZXIvSVVzZXJEYXRhJztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS91c2VyL1VzZXJNb2RlbCc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIlByb3BJbml0VHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb3BJbml0VHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiUHJvcEluaXRcIjtcbiAgaXNOb3JtYWxHYW1lKHQpIHtcbiAgICByZXR1cm4gdCA9PT0gTWpHYW1lVHlwZS5UaWxlMk5vcm1hbDtcbiAgfVxuICBpc0xvY2FsRW1wdHkodCkge1xuICAgIHJldHVybiBudWxsID09IHQgfHwgXCJcIiA9PT0gdDtcbiAgfVxuICBpc1Byb3BJbml0RG9uZSh0KSB7XG4gICAgdmFyIGUgPSBcImlzUHJvcEluaXREb25lX1wiICsgdDtcbiAgICByZXR1cm4gIXRoaXMuaXNMb2NhbEVtcHR5KHRoaXMubG9jYWxEYXRhW2VdKSAmJiB0aGlzLmxvY2FsRGF0YVtlXTtcbiAgfVxuICBzZXRQcm9wSW5pdERvbmUodCkge1xuICAgIHZhciBlID0gXCJpc1Byb3BJbml0RG9uZV9cIiArIHQ7XG4gICAgdGhpcy5sb2NhbERhdGFbZV0gPSB0cnVlO1xuICB9XG4gIG9uR3NMaXN0ZW5lcl9vbk5ld0dhbWUodCwgZSkge1xuICAgIHZhciByLFxuICAgICAgbyxcbiAgICAgIGksXG4gICAgICBuLFxuICAgICAgcCA9IHQuYXJnc1swXTtcbiAgICBpZiAodGhpcy5pc05vcm1hbEdhbWUocCkpIHtcbiAgICAgIHZhciBzID0gVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0R2FtZURhdGFCeUdhbWVUeXBlKHApLFxuICAgICAgICBsID0gcy5nZXRMZXZlbElkKCksXG4gICAgICAgIGMgPSBudWxsICE9PSAobiA9IG51bGwgPT09IChpID0gdGhpcy50cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gaSA/IHZvaWQgMCA6IGkucHJvcExpc3QpICYmIHZvaWQgMCAhPT0gbiA/IG4gOiBbXTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZvciAodmFyIHUgPSBfX3ZhbHVlcyhjKSwgZiA9IHUubmV4dCgpOyAhZi5kb25lOyBmID0gdS5uZXh0KCkpIHtcbiAgICAgICAgICB2YXIgZCA9IGYudmFsdWU7XG4gICAgICAgICAgaWYgKCEoZC5pbml0TnVtIDw9IDAgfHwgdGhpcy5pc1Byb3BJbml0RG9uZShkLnR5cGUpIHx8IGwgPCBkLnVubG9ja0x2KSkge1xuICAgICAgICAgICAgdGhpcy5zZXRQcm9wSW5pdERvbmUoZC50eXBlKTtcbiAgICAgICAgICAgIHRoaXMuZGVsaXZlclByb3AocywgZC50eXBlLCBkLmluaXROdW0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAodCkge1xuICAgICAgICByID0ge1xuICAgICAgICAgIGVycm9yOiB0XG4gICAgICAgIH07XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGYgJiYgIWYuZG9uZSAmJiAobyA9IHUucmV0dXJuKSAmJiBvLmNhbGwodSk7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgaWYgKHIpIHRocm93IHIuZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGUoKTtcbiAgICB9IGVsc2UgZSgpO1xuICB9XG4gIGRlbGl2ZXJQcm9wKHQsIGUsIHIpIHtcbiAgICB2YXIgbyA9IDAsXG4gICAgICBpID0gRUl0ZW1JZC5TaHVmZmxlO1xuICAgIGlmIChlID09PSBFSXRlbVR5cGUuU2h1ZmZsZSkge1xuICAgICAgdC5jaGFuZ2VTaHVmZmxlTnVtcyhyLCB0cnVlKTtcbiAgICAgIHQudG9vbENoYW5nZShFSXRlbUlkLlNodWZmbGUsIHIpO1xuICAgICAgbyA9IHQuZ2V0U2h1ZmZsZU51bXMoKTtcbiAgICB9IGVsc2UgaWYgKGUgPT09IEVJdGVtVHlwZS5IaW50KSB7XG4gICAgICB0LmNoYW5nZUhpdFRpcHNOdW1zKHIsIHRydWUpO1xuICAgICAgdC50b29sQ2hhbmdlKEVJdGVtSWQuSGludCwgcik7XG4gICAgICBvID0gdC5nZXRIaXRUaXBzTnVtcygpO1xuICAgICAgaSA9IEVJdGVtSWQuSGludDtcbiAgICB9IGVsc2UgaWYgKGUgPT09IEVJdGVtVHlwZS5VbmRvKSB7XG4gICAgICB0LmNoYW5nZVJldmVydE51bXMociwgdHJ1ZSk7XG4gICAgICB0LnRvb2xDaGFuZ2UoRUl0ZW1JZC5SZXZlcnQsIHIpO1xuICAgICAgbyA9IHQuZ2V0UmV2ZXJ0TnVtcygpO1xuICAgICAgaSA9IEVJdGVtSWQuUmV2ZXJ0O1xuICAgIH1cbiAgICBEb3RHYW1lR2V0SXRlbS5kb3RHZXRJdGVtKHQsIHtcbiAgICAgIGl0ZW1JZDogaSxcbiAgICAgIG51bWJlcjogcixcbiAgICAgIGFmdGVyTnVtOiBvLFxuICAgICAgcmVhc29uSWQ6IEVHZXRJdGVtUmVhc29uSWQuU3lzdGVtR2lmdCxcbiAgICAgIHJlYXNvbkluZm86IFwi6aaW5qyh6L+b5YWl6YCBXCIgKyByICsgXCLmrKFcIiArIEVJdGVtTmFtZVtpXSxcbiAgICAgIHJlcGxhY2U6IHRydWVcbiAgICB9KTtcbiAgfVxuICBvblQyTm9kZUJ0bVZ3X2lzUHJvcFVubGltaXQodCwgZSkge1xuICAgIHZhciByID0gdC5hcmdzWzBdO1xuICAgIGlmIChjYy5pc1ZhbGlkKHIpICYmIGNjLmlzVmFsaWQoci5wYXJlbnQpKSB7XG4gICAgICB2YXIgbyA9IHIucGFyZW50Lm5hbWUsXG4gICAgICAgIGkgPSB0aGlzLmdldFByb3BUeXBlKG8pLFxuICAgICAgICBuID0gVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0Q3VycmVudEdhbWVUeXBlKCk7XG4gICAgICBpZiAodGhpcy5pc1VubGltaXRMZXZlbChuLCBpKSkge1xuICAgICAgICBlKHtcbiAgICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICAgICAgcmV0dXJuVmFsOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZSgpO1xuICAgICAgfVxuICAgIH0gZWxzZSBlKCk7XG4gIH1cbiAgb25UMk5vZGVCdG1Wd19pc1Byb3BMb2NrZWQodCwgZSkge1xuICAgIHZhciByID0gdC5hcmdzWzBdO1xuICAgIGlmIChjYy5pc1ZhbGlkKHIpICYmIGNjLmlzVmFsaWQoci5wYXJlbnQpKSB7XG4gICAgICB2YXIgbyA9IHIucGFyZW50Lm5hbWUsXG4gICAgICAgIGkgPSB0aGlzLmdldFByb3BUeXBlKG8pLFxuICAgICAgICBuID0gVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0Q3VycmVudEdhbWVUeXBlKCk7XG4gICAgICBpZiAodGhpcy5pc1VubG9ja2VkKG4sIGkpKSB7XG4gICAgICAgIGUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGUoe1xuICAgICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgICByZXR1cm5WYWw6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGUoKTtcbiAgfVxuICBpc1VubGltaXRMZXZlbCh0LCBlKSB7XG4gICAgdmFyIHIgPSB0aGlzLmdldFByb3BJdGVtKGUpO1xuICAgIGlmICghcikgcmV0dXJuIGZhbHNlO1xuICAgIGlmICghdGhpcy5pc05vcm1hbEdhbWUodCkpIHJldHVybiBmYWxzZTtcbiAgICB2YXIgbyA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEdhbWVEYXRhQnlHYW1lVHlwZSh0KS5nZXRMZXZlbElkKCk7XG4gICAgcmV0dXJuICEhci51bmxpbWl0THZzLmluY2x1ZGVzKG8pO1xuICB9XG4gIGlzVW5sb2NrZWQodCwgZSkge1xuICAgIHZhciByID0gdGhpcy5nZXRQcm9wSXRlbShlKTtcbiAgICByZXR1cm4gISFyICYmICEhdGhpcy5pc05vcm1hbEdhbWUodCkgJiYgVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0R2FtZURhdGFCeUdhbWVUeXBlKHQpLmdldExldmVsSWQoKSA+PSByLnVubG9ja0x2O1xuICB9XG4gIGdldFByb3BUeXBlKHQpIHtcbiAgICByZXR1cm4gXCJidG5TaHVmZmxlXCIgPT09IHQgPyBFSXRlbVR5cGUuU2h1ZmZsZSA6IFwiYnRuUHJvcEhpbnRcIiA9PT0gdCA/IEVJdGVtVHlwZS5IaW50IDogXCJidG5Qcm9wUmV2ZXJ0XCIgPT09IHQgPyBFSXRlbVR5cGUuVW5kbyA6IEVJdGVtVHlwZS5Ob25lO1xuICB9XG4gIGdldFByb3BJdGVtKHQpIHtcbiAgICB2YXIgZSwgcjtcbiAgICByZXR1cm4gKG51bGwgIT09IChyID0gbnVsbCA9PT0gKGUgPSB0aGlzLnRyYWl0RGF0YSkgfHwgdm9pZCAwID09PSBlID8gdm9pZCAwIDogZS5wcm9wTGlzdCkgJiYgdm9pZCAwICE9PSByID8gciA6IFtdKS5maW5kKGZ1bmN0aW9uIChlKSB7XG4gICAgICByZXR1cm4gZS50eXBlID09PSB0O1xuICAgIH0pO1xuICB9XG4gIG9uR2FtZURhdGFfaXNTaHVmZmxlRW5vdWdoKHQsIGUpIHtcbiAgICBpZiAodGhpcy5pc1VubGltaXRMZXZlbCh0Lmlucy5nYW1lVHlwZSwgRUl0ZW1UeXBlLlNodWZmbGUpKSB7XG4gICAgICBlKHtcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICByZXR1cm5WYWw6IHRydWVcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBlKCk7XG4gICAgfVxuICB9XG4gIG9uR2FtZURhdGFfaXNIaXRUaXBFbm91Z2godCwgZSkge1xuICAgIGlmICh0aGlzLmlzVW5saW1pdExldmVsKHQuaW5zLmdhbWVUeXBlLCBFSXRlbVR5cGUuSGludCkpIHtcbiAgICAgIGUoe1xuICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICAgIHJldHVyblZhbDogdHJ1ZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGUoKTtcbiAgICB9XG4gIH1cbiAgb25HYW1lRGF0YV9pc1JldmVydEVub3VnaCh0LCBlKSB7XG4gICAgaWYgKHRoaXMuaXNVbmxpbWl0TGV2ZWwodC5pbnMuZ2FtZVR5cGUsIEVJdGVtVHlwZS5VbmRvKSkge1xuICAgICAgZSh7XG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgcmV0dXJuVmFsOiB0cnVlXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZSgpO1xuICAgIH1cbiAgfVxuICBvbkdhbWVEYXRhX2NoZ1NodWZmbGUodCwgZSkge1xuICAgIGlmICh0LmFyZ3NbMF0gPj0gMCkge1xuICAgICAgZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5pc1VubGltaXRMZXZlbCh0Lmlucy5nYW1lVHlwZSwgRUl0ZW1UeXBlLlNodWZmbGUpKSB7XG4gICAgICAgIGUoe1xuICAgICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLmp1bXBcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIG9uR2FtZURhdGFfY2hnSGl0VGlwcyh0LCBlKSB7XG4gICAgaWYgKHQuYXJnc1swXSA+PSAwKSB7XG4gICAgICBlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLmlzVW5saW1pdExldmVsKHQuaW5zLmdhbWVUeXBlLCBFSXRlbVR5cGUuSGludCkpIHtcbiAgICAgICAgZSh7XG4gICAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUuanVtcFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgb25HYW1lRGF0YV9jaGdSZXZlcnQodCwgZSkge1xuICAgIGlmICh0LmFyZ3NbMF0gPj0gMCkge1xuICAgICAgZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5pc1VubGltaXRMZXZlbCh0Lmlucy5nYW1lVHlwZSwgRUl0ZW1UeXBlLlVuZG8pKSB7XG4gICAgICAgIGUoe1xuICAgICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLmp1bXBcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIG9uVDJOb2RlQnRtVndfc2hvd0xvY2tUaXBzKHQsIGUpIHtcbiAgICB2YXIgciA9IHQuYXJnc1swXSxcbiAgICAgIG8gPSB0aGlzLmdldFByb3BJdGVtKHIpO1xuICAgIGlmIChvKSB7XG4gICAgICB2YXIgaSA9IEkxOE5TdHJpbmdzLnN0cmluZ0Zvcm1hdChJMThOU3RyaW5ncy5nZXQoXCJNYWhqb25nVGlsZXNfUHJvSGludF8xXCIpLCBvLnVubG9ja0x2KTtcbiAgICAgIENvbnRyb2xsZXJNYW5hZ2VyLmdldEluc3RhbmNlKCkucHVzaFZpZXdCeUNvbnRyb2xsZXIoXCJQcm9wTG9ja1RpcENvbnRyb2xsZXJcIiwge1xuICAgICAgICBpc1JldXNlOiBmYWxzZSxcbiAgICAgICAgdGlwczogaSxcbiAgICAgICAgbm9CbG9jazogdHJ1ZSxcbiAgICAgICAgaXNHbG9iYWw6IGZhbHNlLFxuICAgICAgICBiZ1N0eWxlOiBudWxsLFxuICAgICAgICBpc1Nob3dBY3Rpb246IGZhbHNlLFxuICAgICAgICB0aXBEZWxheVRpbWU6IDAuNVxuICAgICAgfSk7XG4gICAgICBlKCk7XG4gICAgfSBlbHNlIGUoKTtcbiAgfVxufSJdfQ==