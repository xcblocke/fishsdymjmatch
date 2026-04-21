
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_magnet/Scripts/Tile2MagnetTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '394b5feDbZGVqJQmlMjnlru', 'Tile2MagnetTrait');
// subpackages/l_magnet/Scripts/Tile2MagnetTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var AdManager_1 = require("../../../Scripts/base/ad/AdManager");
var Tile2MagnetTrait = /** @class */ (function (_super) {
    __extends(Tile2MagnetTrait, _super);
    function Tile2MagnetTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._magnetItemNode = null;
        return _this;
    }
    Tile2MagnetTrait.prototype.isMagnetNodeAlive = function () {
        return this._magnetItemNode && cc.isValid(this._magnetItemNode) && this._magnetItemNode.activeInHierarchy;
    };
    Tile2MagnetTrait.prototype.getMagnetItemNode = function () {
        return this._magnetItemNode;
    };
    Tile2MagnetTrait.prototype.getSlotLimit = function () {
        return 3;
    };
    Tile2MagnetTrait.prototype.getPopCnt = function () {
        return 2;
    };
    Tile2MagnetTrait.prototype.isPreconMet = function () {
        return true;
    };
    Tile2MagnetTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.localData.levelId || (this.localData.levelId = 0);
        this.localData.popupCount || (this.localData.popupCount = 0);
    };
    Tile2MagnetTrait.prototype.getNodeCfg = function () {
        return {
            url: this.traitData.magnetPrefabUrl || "prefabs/EffectMagnet",
            bundleName: this.traitData.magnetBundleName || "l_magnet"
        };
    };
    Tile2MagnetTrait.prototype.resetPopupCount = function () {
        this.localData.popupCount = 0;
    };
    Tile2MagnetTrait.prototype.onTile2MagnetBhv_nodeCfg = function (t, e) {
        e({
            isBreak: true,
            returnType: TraitCallbackReturnType.return,
            returnVal: this.getNodeCfg()
        });
    };
    Tile2MagnetTrait.prototype.onGsListener_onReplayGame = function (t, e) {
        t.args[0] && this.resetPopupCount();
        e();
    };
    Tile2MagnetTrait.prototype.onT2MagMrgBhv_spCfg = function (t, e) {
        e({
            isBreak: true,
            returnType: TraitCallbackReturnType.return,
            returnVal: {
                url1: "spine/gameplay_Black_hole",
                url2: "spine/gameplay_Black_hole2",
                bundleName: "l_magnet"
            }
        });
    };
    Tile2MagnetTrait.prototype.onT2MagnetItem_enterAni = function (t, e) {
        var r;
        e();
        try {
            var o = t.ins;
            if (!o || !cc.isValid(o.node))
                return;
            this._magnetItemNode = o.node;
            var n = (null === (r = UserModel_1.default.getInstance().getCurrentGameData()) || void 0 === r ? void 0 : r.getLevelId()) || 0;
            if (this.localData.levelId !== n) {
                this.localData.levelId = n;
                this.localData.popupCount = 1;
            }
            else
                this.localData.popupCount = this.localData.popupCount + 1;
        }
        catch (t) { }
    };
    Tile2MagnetTrait.prototype.onT2MagnetItem_onDestroy = function (t, e) {
        this._magnetItemNode = null;
        e();
    };
    Tile2MagnetTrait.prototype.onT2MagnetChk_canMagnet = function (t, e) {
        var r;
        if (this.isMagnetNodeAlive()) {
            e();
        }
        else {
            if (((null === (r = UserModel_1.default.getInstance().getCurrentGameData()) || void 0 === r ? void 0 : r.getLevelId()) || 0) <= 1) {
                e();
            }
            else {
                e({
                    isBreak: true,
                    returnType: TraitCallbackReturnType.return,
                    returnVal: true
                });
            }
        }
    };
    Tile2MagnetTrait.prototype.onT2MagnetChk_chkCon = function (t, e) {
        var r = this.isPreconMet();
        r && (r = this.checkCanShow(t.ins));
        e({
            isBreak: true,
            returnType: TraitCallbackReturnType.return,
            returnVal: r
        });
    };
    Tile2MagnetTrait.prototype.checkCanShow = function (t) {
        var e, r = false, o = (null === (e = UserModel_1.default.getInstance().getCurrentGameData()) || void 0 === e ? void 0 : e.getLevelId()) || 0;
        (this.localData.levelId != o || this.localData.popupCount < this.getPopCnt()) && (r = true);
        r && (r = this.checkSlotBarMatches(t));
        var n = AdManager_1.default.getInstance().checkVideoAdIsReady();
        return r && n;
    };
    Tile2MagnetTrait.prototype.checkSlotBarMatches = function (t) {
        var e, r;
        if (!t)
            return false;
        var o = t.context.getTileMapObject();
        o.updateCanMatchTiles();
        var n = o.getCanMatchTiles(), a = t.context.getGameData().slotBarIds || [];
        if (a.length < this.getSlotLimit())
            return false;
        try {
            for (var c = __values(a), l = c.next(); !l.done; l = c.next()) {
                var p = l.value, u = o.getTileObjectByPosId(p);
                if (null == u ? void 0 : u.isValid) {
                    var s = n.get(u.cardId);
                    if (s && s.length >= 2)
                        for (var f = 0; f < s.length; f++)
                            if (s[f].id === u.id)
                                return false;
                }
            }
        }
        catch (t) {
            e = {
                error: t
            };
        }
        finally {
            try {
                l && !l.done && (r = c.return) && r.call(c);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return true;
    };
    Tile2MagnetTrait.prototype.getOffset = function () {
        var t = this.traitData.itemOffset || [-455, -120];
        return cc.v2(t[0], t[1]);
    };
    Tile2MagnetTrait.prototype.getMergeOffset = function () {
        var t = this.traitData.mergeOffset || [210, 0];
        return cc.v2(t[0], t[1]);
    };
    Tile2MagnetTrait.prototype.onTile2MagnetBhv_offset = function (t, e) {
        e({
            isBreak: true,
            returnType: TraitCallbackReturnType.return,
            returnVal: this.getOffset()
        });
    };
    Tile2MagnetTrait.prototype.onT2ScoreFloatBhv_offset = function (t, e) {
        e({
            isBreak: true,
            returnType: TraitCallbackReturnType.return,
            returnVal: this.getMergeOffset().add(cc.v2(0, -50))
        });
    };
    Tile2MagnetTrait.prototype.onT2MagMrgBhv_offset = function (t, e) {
        e({
            isBreak: true,
            returnType: TraitCallbackReturnType.return,
            returnVal: this.getMergeOffset()
        });
    };
    Tile2MagnetTrait.traitKey = "Tile2Magnet";
    __decorate([
        mj.traitEvent("Tile2Magnet_slotLimit")
    ], Tile2MagnetTrait.prototype, "getSlotLimit", null);
    __decorate([
        mj.traitEvent("Tile2Magnet_popCnt")
    ], Tile2MagnetTrait.prototype, "getPopCnt", null);
    __decorate([
        mj.traitEvent("Tile2Magnet_preMet")
    ], Tile2MagnetTrait.prototype, "isPreconMet", null);
    Tile2MagnetTrait = __decorate([
        mj.trait,
        mj.class("Tile2MagnetTrait")
    ], Tile2MagnetTrait);
    return Tile2MagnetTrait;
}(Trait_1.default));
exports.default = Tile2MagnetTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX21hZ25ldC9TY3JpcHRzL1RpbGUyTWFnbmV0VHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUMzRCxzRUFBaUU7QUFDakUsZ0VBQTJEO0FBRzNEO0lBQThDLG9DQUFLO0lBQW5EO1FBQUEscUVBd0tDO1FBdktDLHFCQUFlLEdBQUcsSUFBSSxDQUFDOztJQXVLekIsQ0FBQztJQXJLQyw0Q0FBaUIsR0FBakI7UUFDRSxPQUFPLElBQUksQ0FBQyxlQUFlLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQztJQUM1RyxDQUFDO0lBQ0QsNENBQWlCLEdBQWpCO1FBQ0UsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQzlCLENBQUM7SUFFRCx1Q0FBWSxHQUFaO1FBQ0UsT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQsb0NBQVMsR0FBVDtRQUNFLE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELHNDQUFXLEdBQVg7UUFDRSxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFDRCxpQ0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUNELHFDQUFVLEdBQVY7UUFDRSxPQUFPO1lBQ0wsR0FBRyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxJQUFJLHNCQUFzQjtZQUM3RCxV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RCxBQXdLQyxDQXhLNkMsZUFBSyxHQXdLbEQ7a0JBeEtvQixnQkFBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L3VzZXIvVXNlck1vZGVsJztcbmltcG9ydCBBZE1hbmFnZXIgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9iYXNlL2FkL0FkTWFuYWdlcic7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIlRpbGUyTWFnbmV0VHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbGUyTWFnbmV0VHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIF9tYWduZXRJdGVtTm9kZSA9IG51bGw7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiVGlsZTJNYWduZXRcIjtcbiAgaXNNYWduZXROb2RlQWxpdmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21hZ25ldEl0ZW1Ob2RlICYmIGNjLmlzVmFsaWQodGhpcy5fbWFnbmV0SXRlbU5vZGUpICYmIHRoaXMuX21hZ25ldEl0ZW1Ob2RlLmFjdGl2ZUluSGllcmFyY2h5O1xuICB9XG4gIGdldE1hZ25ldEl0ZW1Ob2RlKCkge1xuICAgIHJldHVybiB0aGlzLl9tYWduZXRJdGVtTm9kZTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlRpbGUyTWFnbmV0X3Nsb3RMaW1pdFwiKVxuICBnZXRTbG90TGltaXQoKSB7XG4gICAgcmV0dXJuIDM7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJUaWxlMk1hZ25ldF9wb3BDbnRcIilcbiAgZ2V0UG9wQ250KCkge1xuICAgIHJldHVybiAyO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiVGlsZTJNYWduZXRfcHJlTWV0XCIpXG4gIGlzUHJlY29uTWV0KCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLmxvY2FsRGF0YS5sZXZlbElkIHx8ICh0aGlzLmxvY2FsRGF0YS5sZXZlbElkID0gMCk7XG4gICAgdGhpcy5sb2NhbERhdGEucG9wdXBDb3VudCB8fCAodGhpcy5sb2NhbERhdGEucG9wdXBDb3VudCA9IDApO1xuICB9XG4gIGdldE5vZGVDZmcoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVybDogdGhpcy50cmFpdERhdGEubWFnbmV0UHJlZmFiVXJsIHx8IFwicHJlZmFicy9FZmZlY3RNYWduZXRcIixcbiAgICAgIGJ1bmRsZU5hbWU6IHRoaXMudHJhaXREYXRhLm1hZ25ldEJ1bmRsZU5hbWUgfHwgXCJsX21hZ25ldFwiXG4gICAgfTtcbiAgfVxuICByZXNldFBvcHVwQ291bnQoKSB7XG4gICAgdGhpcy5sb2NhbERhdGEucG9wdXBDb3VudCA9IDA7XG4gIH1cbiAgb25UaWxlMk1hZ25ldEJodl9ub2RlQ2ZnKHQsIGUpIHtcbiAgICBlKHtcbiAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICByZXR1cm5WYWw6IHRoaXMuZ2V0Tm9kZUNmZygpXG4gICAgfSk7XG4gIH1cbiAgb25Hc0xpc3RlbmVyX29uUmVwbGF5R2FtZSh0LCBlKSB7XG4gICAgdC5hcmdzWzBdICYmIHRoaXMucmVzZXRQb3B1cENvdW50KCk7XG4gICAgZSgpO1xuICB9XG4gIG9uVDJNYWdNcmdCaHZfc3BDZmcodCwgZSkge1xuICAgIGUoe1xuICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgIHJldHVyblZhbDoge1xuICAgICAgICB1cmwxOiBcInNwaW5lL2dhbWVwbGF5X0JsYWNrX2hvbGVcIixcbiAgICAgICAgdXJsMjogXCJzcGluZS9nYW1lcGxheV9CbGFja19ob2xlMlwiLFxuICAgICAgICBidW5kbGVOYW1lOiBcImxfbWFnbmV0XCJcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBvblQyTWFnbmV0SXRlbV9lbnRlckFuaSh0LCBlKSB7XG4gICAgdmFyIHI7XG4gICAgZSgpO1xuICAgIHRyeSB7XG4gICAgICB2YXIgbyA9IHQuaW5zO1xuICAgICAgaWYgKCFvIHx8ICFjYy5pc1ZhbGlkKG8ubm9kZSkpIHJldHVybjtcbiAgICAgIHRoaXMuX21hZ25ldEl0ZW1Ob2RlID0gby5ub2RlO1xuICAgICAgdmFyIG4gPSAobnVsbCA9PT0gKHIgPSBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRDdXJyZW50R2FtZURhdGEoKSkgfHwgdm9pZCAwID09PSByID8gdm9pZCAwIDogci5nZXRMZXZlbElkKCkpIHx8IDA7XG4gICAgICBpZiAodGhpcy5sb2NhbERhdGEubGV2ZWxJZCAhPT0gbikge1xuICAgICAgICB0aGlzLmxvY2FsRGF0YS5sZXZlbElkID0gbjtcbiAgICAgICAgdGhpcy5sb2NhbERhdGEucG9wdXBDb3VudCA9IDE7XG4gICAgICB9IGVsc2UgdGhpcy5sb2NhbERhdGEucG9wdXBDb3VudCA9IHRoaXMubG9jYWxEYXRhLnBvcHVwQ291bnQgKyAxO1xuICAgIH0gY2F0Y2ggKHQpIHt9XG4gIH1cbiAgb25UMk1hZ25ldEl0ZW1fb25EZXN0cm95KHQsIGUpIHtcbiAgICB0aGlzLl9tYWduZXRJdGVtTm9kZSA9IG51bGw7XG4gICAgZSgpO1xuICB9XG4gIG9uVDJNYWduZXRDaGtfY2FuTWFnbmV0KHQsIGUpIHtcbiAgICB2YXIgcjtcbiAgICBpZiAodGhpcy5pc01hZ25ldE5vZGVBbGl2ZSgpKSB7XG4gICAgICBlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICgoKG51bGwgPT09IChyID0gVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0Q3VycmVudEdhbWVEYXRhKCkpIHx8IHZvaWQgMCA9PT0gciA/IHZvaWQgMCA6IHIuZ2V0TGV2ZWxJZCgpKSB8fCAwKSA8PSAxKSB7XG4gICAgICAgIGUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGUoe1xuICAgICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICAgIHJldHVyblZhbDogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgb25UMk1hZ25ldENoa19jaGtDb24odCwgZSkge1xuICAgIHZhciByID0gdGhpcy5pc1ByZWNvbk1ldCgpO1xuICAgIHIgJiYgKHIgPSB0aGlzLmNoZWNrQ2FuU2hvdyh0LmlucykpO1xuICAgIGUoe1xuICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgIHJldHVyblZhbDogclxuICAgIH0pO1xuICB9XG4gIGNoZWNrQ2FuU2hvdyh0KSB7XG4gICAgdmFyIGUsXG4gICAgICByID0gZmFsc2UsXG4gICAgICBvID0gKG51bGwgPT09IChlID0gVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0Q3VycmVudEdhbWVEYXRhKCkpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUuZ2V0TGV2ZWxJZCgpKSB8fCAwO1xuICAgICh0aGlzLmxvY2FsRGF0YS5sZXZlbElkICE9IG8gfHwgdGhpcy5sb2NhbERhdGEucG9wdXBDb3VudCA8IHRoaXMuZ2V0UG9wQ250KCkpICYmIChyID0gdHJ1ZSk7XG4gICAgciAmJiAociA9IHRoaXMuY2hlY2tTbG90QmFyTWF0Y2hlcyh0KSk7XG4gICAgdmFyIG4gPSBBZE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5jaGVja1ZpZGVvQWRJc1JlYWR5KCk7XG4gICAgcmV0dXJuIHIgJiYgbjtcbiAgfVxuICBjaGVja1Nsb3RCYXJNYXRjaGVzKHQpIHtcbiAgICB2YXIgZSwgcjtcbiAgICBpZiAoIXQpIHJldHVybiBmYWxzZTtcbiAgICB2YXIgbyA9IHQuY29udGV4dC5nZXRUaWxlTWFwT2JqZWN0KCk7XG4gICAgby51cGRhdGVDYW5NYXRjaFRpbGVzKCk7XG4gICAgdmFyIG4gPSBvLmdldENhbk1hdGNoVGlsZXMoKSxcbiAgICAgIGEgPSB0LmNvbnRleHQuZ2V0R2FtZURhdGEoKS5zbG90QmFySWRzIHx8IFtdO1xuICAgIGlmIChhLmxlbmd0aCA8IHRoaXMuZ2V0U2xvdExpbWl0KCkpIHJldHVybiBmYWxzZTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgYyA9IF9fdmFsdWVzKGEpLCBsID0gYy5uZXh0KCk7ICFsLmRvbmU7IGwgPSBjLm5leHQoKSkge1xuICAgICAgICB2YXIgcCA9IGwudmFsdWUsXG4gICAgICAgICAgdSA9IG8uZ2V0VGlsZU9iamVjdEJ5UG9zSWQocCk7XG4gICAgICAgIGlmIChudWxsID09IHUgPyB2b2lkIDAgOiB1LmlzVmFsaWQpIHtcbiAgICAgICAgICB2YXIgcyA9IG4uZ2V0KHUuY2FyZElkKTtcbiAgICAgICAgICBpZiAocyAmJiBzLmxlbmd0aCA+PSAyKSBmb3IgKHZhciBmID0gMDsgZiA8IHMubGVuZ3RoOyBmKyspIGlmIChzW2ZdLmlkID09PSB1LmlkKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICBlID0ge1xuICAgICAgICBlcnJvcjogdFxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbCAmJiAhbC5kb25lICYmIChyID0gYy5yZXR1cm4pICYmIHIuY2FsbChjKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChlKSB0aHJvdyBlLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBnZXRPZmZzZXQoKSB7XG4gICAgdmFyIHQgPSB0aGlzLnRyYWl0RGF0YS5pdGVtT2Zmc2V0IHx8IFstNDU1LCAtMTIwXTtcbiAgICByZXR1cm4gY2MudjIodFswXSwgdFsxXSk7XG4gIH1cbiAgZ2V0TWVyZ2VPZmZzZXQoKSB7XG4gICAgdmFyIHQgPSB0aGlzLnRyYWl0RGF0YS5tZXJnZU9mZnNldCB8fCBbMjEwLCAwXTtcbiAgICByZXR1cm4gY2MudjIodFswXSwgdFsxXSk7XG4gIH1cbiAgb25UaWxlMk1hZ25ldEJodl9vZmZzZXQodCwgZSkge1xuICAgIGUoe1xuICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgIHJldHVyblZhbDogdGhpcy5nZXRPZmZzZXQoKVxuICAgIH0pO1xuICB9XG4gIG9uVDJTY29yZUZsb2F0Qmh2X29mZnNldCh0LCBlKSB7XG4gICAgZSh7XG4gICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgcmV0dXJuVmFsOiB0aGlzLmdldE1lcmdlT2Zmc2V0KCkuYWRkKGNjLnYyKDAsIC01MCkpXG4gICAgfSk7XG4gIH1cbiAgb25UMk1hZ01yZ0Jodl9vZmZzZXQodCwgZSkge1xuICAgIGUoe1xuICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgIHJldHVyblZhbDogdGhpcy5nZXRNZXJnZU9mZnNldCgpXG4gICAgfSk7XG4gIH1cbn0iXX0=