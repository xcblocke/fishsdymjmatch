
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_unlimitProp/Scripts/UnlimitPropTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '16994zDC/RA4LAiQ3wXDUFr', 'UnlimitPropTrait');
// subpackages/l_unlimitProp/Scripts/UnlimitPropTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var BaseSprite_1 = require("../../../Scripts/gamePlay/base/ui/BaseSprite");
var GameInputEnum_1 = require("../../../Scripts/simulator/constant/GameInputEnum");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var UnlimitPropTrait = /** @class */ (function (_super) {
    __extends(UnlimitPropTrait, _super);
    function UnlimitPropTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._config = {
            levels: []
        };
        _this._currentLevelId = 0;
        _this._btnShuffleProp = null;
        _this._btnHitTipsProp = null;
        _this._versionNumber = 0;
        return _this;
    }
    UnlimitPropTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._config = {
            levels: this._traitData.levels || []
        };
        this._versionNumber = this._traitData.versionNumber || 0;
    };
    UnlimitPropTrait.prototype.isNormalMode = function () {
        return UserModel_1.default.getInstance().getCurrentGameType() === GameTypeEnums_1.MjGameType.Normal;
    };
    UnlimitPropTrait.prototype.isUnlimitLevel = function () {
        if (!this.isNormalMode())
            return false;
        if (!this._config.levels || 0 === this._config.levels.length)
            return false;
        if (1 == this._versionNumber) {
            var e = UserModel_1.default.getInstance().normalData;
            return this._config.levels.includes(e.getLevelId());
        }
        return this._config.levels.includes(this._currentLevelId);
    };
    UnlimitPropTrait.prototype.onIptSetLv_setData = function (e, t) {
        if (1 != this._versionNumber) {
            var i = e.args[0];
            i && i.levelId && (this._currentLevelId = i.levelId);
            t();
        }
        else {
            if (!this.isNormalMode()) {
                t();
                return;
            }
            UserModel_1.default.getInstance().normalData.getLevelId();
            this.isUnlimitLevel() || this.restoreButtonImages();
            t();
        }
    };
    UnlimitPropTrait.prototype.onIptShuffle_exec = function (e, t) {
        var i;
        if (null !== (i = e.args[0]) && void 0 !== i && i.isFree)
            t();
        else if (this.isUnlimitLevel()) {
            e.args[0] = e.args[0] || {};
            e.args[0].from = GameInputEnum_1.EShuffleFrom.Free;
            t();
            if (1 == this._versionNumber) {
                var r = mj.getClassByName("TaskTrait");
                r && r.getInstance() && true === r.getInstance().eventEnabled && r.getInstance().updateItemTaskProgress(1001);
            }
        }
        else
            t();
    };
    UnlimitPropTrait.prototype.onGameData_chgHitTips = function (e, t) {
        if (this.isUnlimitLevel()) {
            var i = e.args[0], r = e.args[1];
            if (i < 0 && !r) {
                t({
                    isBreak: true,
                    returnType: TraitManager_1.TraitCallbackReturnType.return
                });
            }
            else {
                t();
            }
        }
        else
            t();
    };
    UnlimitPropTrait.prototype.onIptHitTips_exec = function (e, t) {
        if (this.isUnlimitLevel()) {
            var i = e.ins;
            if (i.gameController.gameContext.getCanHitTips().length)
                t();
            else {
                var r = i.gameController.tileMapObject.getCanMatchTilesHint();
                if (0 == r.length) {
                    i.gameController.tileMapObject.updateCanMatchTiles();
                    r = i.gameController.tileMapObject.getCanMatchTilesHint();
                }
                if (r.length > 0) {
                    var n = r[Math.floor(Math.random() * r.length)], o = (n = n.slice(0, 2))[0].id, s = n[1].id;
                    i.gameContext.trackerModifier.triggerHint(o, s);
                    i.gameController.tileMapObject.getTileObject(o).isHint = true;
                    i.gameController.tileMapObject.getTileObject(s).isHint = true;
                    i.gameController.gameContext.setCanHitTips([o, s]);
                    i.pushHitTipsEffect(o, s, false);
                    if (1 == this._versionNumber) {
                        var a = mj.getClassByName("TaskTrait");
                        a && a.getInstance() && true === a.getInstance().eventEnabled && a.getInstance().updateItemTaskProgress(1002);
                    }
                }
                t();
            }
        }
        else
            t();
    };
    UnlimitPropTrait.prototype.onUdShufflePropBhv_start = function (e, t) {
        var i, r;
        if (this.isNormalMode()) {
            if (this.isUnlimitLevel()) {
                var n = null === (i = e.ins.context) || void 0 === i ? void 0 : i.gameView;
                if (null === (r = null == n ? void 0 : n.gameUI) || void 0 === r ? void 0 : r.btnShuffleProp) {
                    this._btnShuffleProp = n.gameUI.btnShuffleProp;
                    this.changeButtonImage(this._btnShuffleProp, "texture/gamePlay/gameplay_icon_wuQiong", "shuffle");
                }
            }
            else
                1 == this._versionNumber && this.restoreButtonImages();
            t();
        }
        else
            t();
    };
    UnlimitPropTrait.prototype.onUdHitTipsPropBhv_start = function (e, t) {
        var i, r;
        if (this.isNormalMode()) {
            if (this.isUnlimitLevel()) {
                var n = null === (i = e.ins.context) || void 0 === i ? void 0 : i.gameView;
                if (null === (r = null == n ? void 0 : n.gameUI) || void 0 === r ? void 0 : r.btnHitTipsProp) {
                    this._btnHitTipsProp = n.gameUI.btnHitTipsProp;
                    this.changeButtonImage(this._btnHitTipsProp, "texture/gamePlay/gameplay_icon_wuQiong", "hitTips");
                }
            }
            else
                1 == this._versionNumber && this.restoreButtonImages();
            t();
        }
        else
            t();
    };
    UnlimitPropTrait.prototype.onGameUI_updateHitTipsProp = function (e, t) {
        if (this.isNormalMode()) {
            if (this.isUnlimitLevel()) {
                if (1 == this._versionNumber) {
                    var i = e.ins;
                    this._btnHitTipsProp = null == i ? void 0 : i.btnHitTipsProp;
                }
                this.changeButtonImage(this._btnHitTipsProp, "texture/gamePlay/gameplay_icon_wuQiong", "hitTips");
            }
            else
                1 == this._versionNumber && this.restoreButtonImages();
            t();
        }
        else
            t();
    };
    UnlimitPropTrait.prototype.onGameUI_updateShuffleProp = function (e, t) {
        if (this.isNormalMode()) {
            if (this.isUnlimitLevel()) {
                if (1 == this._versionNumber) {
                    var i = e.ins;
                    this._btnShuffleProp = null == i ? void 0 : i.btnShuffleProp;
                }
                this.changeButtonImage(this._btnShuffleProp, "texture/gamePlay/gameplay_icon_wuQiong", "shuffle");
            }
            else
                1 == this._versionNumber && this.restoreButtonImages();
            t();
        }
        else
            t();
    };
    UnlimitPropTrait.prototype.changeButtonImage = function (e, t) {
        if (cc.isValid(e)) {
            var i = e.getChildByName("nodeNum").getComponent(cc.Sprite);
            i && (i.node.active = true);
            var r = e.getChildByName("nodeVideo");
            r && (r.active = false);
            1 == this._versionNumber && i && (i.spriteFrame = null);
            BaseSprite_1.default.refreshWithNode(i.node, t, false);
            i.node.getChildByName("labelNum").active = false;
        }
    };
    UnlimitPropTrait.prototype.restoreButtonImages = function () {
        if (cc.isValid(this._btnShuffleProp) && (e = this._btnShuffleProp.getChildByName("nodeNum").getComponent(cc.Sprite))) {
            BaseSprite_1.default.refreshWithNode(e.node, "texture/gamePlay/gameplay_icon_time", false);
            e.node.getChildByName("labelNum").active = true;
            1 == this._versionNumber || (e.node.active = false);
        }
        if (cc.isValid(this._btnHitTipsProp)) {
            var e;
            if (e = this._btnHitTipsProp.getChildByName("nodeNum").getComponent(cc.Sprite)) {
                BaseSprite_1.default.refreshWithNode(e.node, "texture/gamePlay/gameplay_icon_time", false);
                e.node.getChildByName("labelNum").active = true;
                1 == this._versionNumber || (e.node.active = false);
            }
        }
        if (1 == this._versionNumber)
            ;
        else {
            this._btnShuffleProp = null;
            this._btnHitTipsProp = null;
        }
    };
    UnlimitPropTrait.prototype.onWinVw_showWinVw = function (e, t) {
        this.isUnlimitNextLevel() || this.restoreButtonImages();
        t();
    };
    UnlimitPropTrait.prototype.isUnlimitNextLevel = function () {
        if (!this.isNormalMode())
            return false;
        if (!this._config.levels || 0 === this._config.levels.length)
            return false;
        if (1 == this._versionNumber) {
            var e = UserModel_1.default.getInstance().normalData;
            return this._config.levels.includes(e.getCurrentLevelId() + 1);
        }
        return this._config.levels.includes(this._currentLevelId + 1);
    };
    UnlimitPropTrait.prototype.onFailVw_show = function (e, t) {
        t();
    };
    UnlimitPropTrait.prototype.onFailVw_initBtnUse = function (e, t) {
        if (this.isUnlimitLevel()) {
            var i = e.ins;
            i && i.nodeNum && (i.nodeNum.active = false);
        }
        t();
    };
    UnlimitPropTrait.traitKey = "UnlimitProp";
    UnlimitPropTrait = __decorate([
        mj.trait,
        mj.class("UnlimitPropTrait")
    ], UnlimitPropTrait);
    return UnlimitPropTrait;
}(Trait_1.default));
exports.default = UnlimitPropTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3VubGltaXRQcm9wL1NjcmlwdHMvVW5saW1pdFByb3BUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELDhFQUF3RjtBQUN4RiwyRUFBc0U7QUFDdEUsbUZBQWlGO0FBQ2pGLHdGQUFvRjtBQUNwRixzRUFBaUU7QUFHakU7SUFBOEMsb0NBQUs7SUFBbkQ7UUFBQSxxRUF1TUM7UUF0TUMsYUFBTyxHQUFHO1lBQ1IsTUFBTSxFQUFFLEVBQUU7U0FDWCxDQUFDO1FBQ0YscUJBQWUsR0FBRyxDQUFDLENBQUM7UUFDcEIscUJBQWUsR0FBRyxJQUFJLENBQUM7UUFDdkIscUJBQWUsR0FBRyxJQUFJLENBQUM7UUFDdkIsb0JBQWMsR0FBRyxDQUFDLENBQUM7O0lBZ01yQixDQUFDO0lBOUxDLGlDQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUc7WUFDYixNQUFNLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLElBQUksRUFBRTtTQUNyQyxDQUFDO1FBQ0YsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsSUFBSSxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUNELHVDQUFZLEdBQVo7UUFDRSxPQUFPLG1CQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsS0FBSywwQkFBVSxDQUFDLE1BQU0sQ0FBQztJQUM1RSxDQUFDO0lBQ0QseUNBQWMsR0FBZDtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQUUsT0FBTyxLQUFLLENBQUM7UUFDdkMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNO1lBQUUs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QUksQ0FBQyxjQUFjLEVBQUUsRUFBRTtZQUN6QixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDO1lBQ2QsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQztTQUM5QztRQUNELENBQUMsRUFBRSxDQUFDO0lBQ04sQ0FBQztJQTlMTSx5QkFBUSxHQUFHLGFBQWEsQ0FBQztJQVJiLGdCQUFnQjtRQUZwQyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUM7T0FDUixnQkFBZ0IsQ0F1TXBDO0lBQUQsdUJBQUM7Q0F2TUQsQUF1TUMsQ0F2TTZDLGVBQUssR0F1TWxEO2tCQXZNb0IsZ0JBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCB7IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXRNYW5hZ2VyJztcbmltcG9ydCBCYXNlU3ByaXRlIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvYmFzZS91aS9CYXNlU3ByaXRlJztcbmltcG9ydCB7IEVTaHVmZmxlRnJvbSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVJbnB1dEVudW0nO1xuaW1wb3J0IHsgTWpHYW1lVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9zaW11bGF0b3IvY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvdXNlci9Vc2VyTW9kZWwnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJVbmxpbWl0UHJvcFRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVbmxpbWl0UHJvcFRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBfY29uZmlnID0ge1xuICAgIGxldmVsczogW11cbiAgfTtcbiAgX2N1cnJlbnRMZXZlbElkID0gMDtcbiAgX2J0blNodWZmbGVQcm9wID0gbnVsbDtcbiAgX2J0bkhpdFRpcHNQcm9wID0gbnVsbDtcbiAgX3ZlcnNpb25OdW1iZXIgPSAwO1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIlVubGltaXRQcm9wXCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLl9jb25maWcgPSB7XG4gICAgICBsZXZlbHM6IHRoaXMuX3RyYWl0RGF0YS5sZXZlbHMgfHwgW11cbiAgICB9O1xuICAgIHRoaXMuX3ZlcnNpb25OdW1iZXIgPSB0aGlzLl90cmFpdERhdGEudmVyc2lvbk51bWJlciB8fCAwO1xuICB9XG4gIGlzTm9ybWFsTW9kZSgpIHtcbiAgICByZXR1cm4gVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0Q3VycmVudEdhbWVUeXBlKCkgPT09IE1qR2FtZVR5cGUuTm9ybWFsO1xuICB9XG4gIGlzVW5saW1pdExldmVsKCkge1xuICAgIGlmICghdGhpcy5pc05vcm1hbE1vZGUoKSkgcmV0dXJuIGZhbHNlO1xuICAgIGlmICghdGhpcy5fY29uZmlnLmxldmVscyB8fCAwID09PSB0aGlzLl9jb25maWcubGV2ZWxzLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICAgIGlmICgxID09IHRoaXMuX3ZlcnNpb25OdW1iZXIpIHtcbiAgICAgIHZhciBlID0gVXNlck1vZGVsLmdldEluc3RhbmNlKCkubm9ybWFsRGF0YTtcbiAgICAgIHJldHVybiB0aGlzLl9jb25maWcubGV2ZWxzLmluY2x1ZGVzKGUuZ2V0TGV2ZWxJZCgpKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZy5sZXZlbHMuaW5jbHVkZXModGhpcy5fY3VycmVudExldmVsSWQpO1xuICB9XG4gIG9uSXB0U2V0THZfc2V0RGF0YShlLCB0KSB7XG4gICAgaWYgKDEgIT0gdGhpcy5fdmVyc2lvbk51bWJlcikge1xuICAgICAgdmFyIGkgPSBlLmFyZ3NbMF07XG4gICAgICBpICYmIGkubGV2ZWxJZCAmJiAodGhpcy5fY3VycmVudExldmVsSWQgPSBpLmxldmVsSWQpO1xuICAgICAgdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIXRoaXMuaXNOb3JtYWxNb2RlKCkpIHtcbiAgICAgICAgdCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5ub3JtYWxEYXRhLmdldExldmVsSWQoKTtcbiAgICAgIHRoaXMuaXNVbmxpbWl0TGV2ZWwoKSB8fCB0aGlzLnJlc3RvcmVCdXR0b25JbWFnZXMoKTtcbiAgICAgIHQoKTtcbiAgICB9XG4gIH1cbiAgb25JcHRTaHVmZmxlX2V4ZWMoZSwgdCkge1xuICAgIHZhciBpO1xuICAgIGlmIChudWxsICE9PSAoaSA9IGUuYXJnc1swXSkgJiYgdm9pZCAwICE9PSBpICYmIGkuaXNGcmVlKSB0KCk7ZWxzZSBpZiAodGhpcy5pc1VubGltaXRMZXZlbCgpKSB7XG4gICAgICBlLmFyZ3NbMF0gPSBlLmFyZ3NbMF0gfHwge307XG4gICAgICBlLmFyZ3NbMF0uZnJvbSA9IEVTaHVmZmxlRnJvbS5GcmVlO1xuICAgICAgdCgpO1xuICAgICAgaWYgKDEgPT0gdGhpcy5fdmVyc2lvbk51bWJlcikge1xuICAgICAgICB2YXIgciA9IG1qLmdldENsYXNzQnlOYW1lKFwiVGFza1RyYWl0XCIpO1xuICAgICAgICByICYmIHIuZ2V0SW5zdGFuY2UoKSAmJiB0cnVlID09PSByLmdldEluc3RhbmNlKCkuZXZlbnRFbmFibGVkICYmIHIuZ2V0SW5zdGFuY2UoKS51cGRhdGVJdGVtVGFza1Byb2dyZXNzKDEwMDEpO1xuICAgICAgfVxuICAgIH0gZWxzZSB0KCk7XG4gIH1cbiAgb25HYW1lRGF0YV9jaGdIaXRUaXBzKGUsIHQpIHtcbiAgICBpZiAodGhpcy5pc1VubGltaXRMZXZlbCgpKSB7XG4gICAgICB2YXIgaSA9IGUuYXJnc1swXSxcbiAgICAgICAgciA9IGUuYXJnc1sxXTtcbiAgICAgIGlmIChpIDwgMCAmJiAhcikge1xuICAgICAgICB0KHtcbiAgICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVyblxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHQoKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgdCgpO1xuICB9XG4gIG9uSXB0SGl0VGlwc19leGVjKGUsIHQpIHtcbiAgICBpZiAodGhpcy5pc1VubGltaXRMZXZlbCgpKSB7XG4gICAgICB2YXIgaSA9IGUuaW5zO1xuICAgICAgaWYgKGkuZ2FtZUNvbnRyb2xsZXIuZ2FtZUNvbnRleHQuZ2V0Q2FuSGl0VGlwcygpLmxlbmd0aCkgdCgpO2Vsc2Uge1xuICAgICAgICB2YXIgciA9IGkuZ2FtZUNvbnRyb2xsZXIudGlsZU1hcE9iamVjdC5nZXRDYW5NYXRjaFRpbGVzSGludCgpO1xuICAgICAgICBpZiAoMCA9PSByLmxlbmd0aCkge1xuICAgICAgICAgIGkuZ2FtZUNvbnRyb2xsZXIudGlsZU1hcE9iamVjdC51cGRhdGVDYW5NYXRjaFRpbGVzKCk7XG4gICAgICAgICAgciA9IGkuZ2FtZUNvbnRyb2xsZXIudGlsZU1hcE9iamVjdC5nZXRDYW5NYXRjaFRpbGVzSGludCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICB2YXIgbiA9IHJbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogci5sZW5ndGgpXSxcbiAgICAgICAgICAgIG8gPSAobiA9IG4uc2xpY2UoMCwgMikpWzBdLmlkLFxuICAgICAgICAgICAgcyA9IG5bMV0uaWQ7XG4gICAgICAgICAgaS5nYW1lQ29udGV4dC50cmFja2VyTW9kaWZpZXIudHJpZ2dlckhpbnQobywgcyk7XG4gICAgICAgICAgaS5nYW1lQ29udHJvbGxlci50aWxlTWFwT2JqZWN0LmdldFRpbGVPYmplY3QobykuaXNIaW50ID0gdHJ1ZTtcbiAgICAgICAgICBpLmdhbWVDb250cm9sbGVyLnRpbGVNYXBPYmplY3QuZ2V0VGlsZU9iamVjdChzKS5pc0hpbnQgPSB0cnVlO1xuICAgICAgICAgIGkuZ2FtZUNvbnRyb2xsZXIuZ2FtZUNvbnRleHQuc2V0Q2FuSGl0VGlwcyhbbywgc10pO1xuICAgICAgICAgIGkucHVzaEhpdFRpcHNFZmZlY3QobywgcywgZmFsc2UpO1xuICAgICAgICAgIGlmICgxID09IHRoaXMuX3ZlcnNpb25OdW1iZXIpIHtcbiAgICAgICAgICAgIHZhciBhID0gbWouZ2V0Q2xhc3NCeU5hbWUoXCJUYXNrVHJhaXRcIik7XG4gICAgICAgICAgICBhICYmIGEuZ2V0SW5zdGFuY2UoKSAmJiB0cnVlID09PSBhLmdldEluc3RhbmNlKCkuZXZlbnRFbmFibGVkICYmIGEuZ2V0SW5zdGFuY2UoKS51cGRhdGVJdGVtVGFza1Byb2dyZXNzKDEwMDIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0KCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHQoKTtcbiAgfVxuICBvblVkU2h1ZmZsZVByb3BCaHZfc3RhcnQoZSwgdCkge1xuICAgIHZhciBpLCByO1xuICAgIGlmICh0aGlzLmlzTm9ybWFsTW9kZSgpKSB7XG4gICAgICBpZiAodGhpcy5pc1VubGltaXRMZXZlbCgpKSB7XG4gICAgICAgIHZhciBuID0gbnVsbCA9PT0gKGkgPSBlLmlucy5jb250ZXh0KSB8fCB2b2lkIDAgPT09IGkgPyB2b2lkIDAgOiBpLmdhbWVWaWV3O1xuICAgICAgICBpZiAobnVsbCA9PT0gKHIgPSBudWxsID09IG4gPyB2b2lkIDAgOiBuLmdhbWVVSSkgfHwgdm9pZCAwID09PSByID8gdm9pZCAwIDogci5idG5TaHVmZmxlUHJvcCkge1xuICAgICAgICAgIHRoaXMuX2J0blNodWZmbGVQcm9wID0gbi5nYW1lVUkuYnRuU2h1ZmZsZVByb3A7XG4gICAgICAgICAgdGhpcy5jaGFuZ2VCdXR0b25JbWFnZSh0aGlzLl9idG5TaHVmZmxlUHJvcCwgXCJ0ZXh0dXJlL2dhbWVQbGF5L2dhbWVwbGF5X2ljb25fd3VRaW9uZ1wiLCBcInNodWZmbGVcIik7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSAxID09IHRoaXMuX3ZlcnNpb25OdW1iZXIgJiYgdGhpcy5yZXN0b3JlQnV0dG9uSW1hZ2VzKCk7XG4gICAgICB0KCk7XG4gICAgfSBlbHNlIHQoKTtcbiAgfVxuICBvblVkSGl0VGlwc1Byb3BCaHZfc3RhcnQoZSwgdCkge1xuICAgIHZhciBpLCByO1xuICAgIGlmICh0aGlzLmlzTm9ybWFsTW9kZSgpKSB7XG4gICAgICBpZiAodGhpcy5pc1VubGltaXRMZXZlbCgpKSB7XG4gICAgICAgIHZhciBuID0gbnVsbCA9PT0gKGkgPSBlLmlucy5jb250ZXh0KSB8fCB2b2lkIDAgPT09IGkgPyB2b2lkIDAgOiBpLmdhbWVWaWV3O1xuICAgICAgICBpZiAobnVsbCA9PT0gKHIgPSBudWxsID09IG4gPyB2b2lkIDAgOiBuLmdhbWVVSSkgfHwgdm9pZCAwID09PSByID8gdm9pZCAwIDogci5idG5IaXRUaXBzUHJvcCkge1xuICAgICAgICAgIHRoaXMuX2J0bkhpdFRpcHNQcm9wID0gbi5nYW1lVUkuYnRuSGl0VGlwc1Byb3A7XG4gICAgICAgICAgdGhpcy5jaGFuZ2VCdXR0b25JbWFnZSh0aGlzLl9idG5IaXRUaXBzUHJvcCwgXCJ0ZXh0dXJlL2dhbWVQbGF5L2dhbWVwbGF5X2ljb25fd3VRaW9uZ1wiLCBcImhpdFRpcHNcIik7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSAxID09IHRoaXMuX3ZlcnNpb25OdW1iZXIgJiYgdGhpcy5yZXN0b3JlQnV0dG9uSW1hZ2VzKCk7XG4gICAgICB0KCk7XG4gICAgfSBlbHNlIHQoKTtcbiAgfVxuICBvbkdhbWVVSV91cGRhdGVIaXRUaXBzUHJvcChlLCB0KSB7XG4gICAgaWYgKHRoaXMuaXNOb3JtYWxNb2RlKCkpIHtcbiAgICAgIGlmICh0aGlzLmlzVW5saW1pdExldmVsKCkpIHtcbiAgICAgICAgaWYgKDEgPT0gdGhpcy5fdmVyc2lvbk51bWJlcikge1xuICAgICAgICAgIHZhciBpID0gZS5pbnM7XG4gICAgICAgICAgdGhpcy5fYnRuSGl0VGlwc1Byb3AgPSBudWxsID09IGkgPyB2b2lkIDAgOiBpLmJ0bkhpdFRpcHNQcm9wO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2hhbmdlQnV0dG9uSW1hZ2UodGhpcy5fYnRuSGl0VGlwc1Byb3AsIFwidGV4dHVyZS9nYW1lUGxheS9nYW1lcGxheV9pY29uX3d1UWlvbmdcIiwgXCJoaXRUaXBzXCIpO1xuICAgICAgfSBlbHNlIDEgPT0gdGhpcy5fdmVyc2lvbk51bWJlciAmJiB0aGlzLnJlc3RvcmVCdXR0b25JbWFnZXMoKTtcbiAgICAgIHQoKTtcbiAgICB9IGVsc2UgdCgpO1xuICB9XG4gIG9uR2FtZVVJX3VwZGF0ZVNodWZmbGVQcm9wKGUsIHQpIHtcbiAgICBpZiAodGhpcy5pc05vcm1hbE1vZGUoKSkge1xuICAgICAgaWYgKHRoaXMuaXNVbmxpbWl0TGV2ZWwoKSkge1xuICAgICAgICBpZiAoMSA9PSB0aGlzLl92ZXJzaW9uTnVtYmVyKSB7XG4gICAgICAgICAgdmFyIGkgPSBlLmlucztcbiAgICAgICAgICB0aGlzLl9idG5TaHVmZmxlUHJvcCA9IG51bGwgPT0gaSA/IHZvaWQgMCA6IGkuYnRuU2h1ZmZsZVByb3A7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jaGFuZ2VCdXR0b25JbWFnZSh0aGlzLl9idG5TaHVmZmxlUHJvcCwgXCJ0ZXh0dXJlL2dhbWVQbGF5L2dhbWVwbGF5X2ljb25fd3VRaW9uZ1wiLCBcInNodWZmbGVcIik7XG4gICAgICB9IGVsc2UgMSA9PSB0aGlzLl92ZXJzaW9uTnVtYmVyICYmIHRoaXMucmVzdG9yZUJ1dHRvbkltYWdlcygpO1xuICAgICAgdCgpO1xuICAgIH0gZWxzZSB0KCk7XG4gIH1cbiAgY2hhbmdlQnV0dG9uSW1hZ2UoZSwgdCkge1xuICAgIGlmIChjYy5pc1ZhbGlkKGUpKSB7XG4gICAgICB2YXIgaSA9IGUuZ2V0Q2hpbGRCeU5hbWUoXCJub2RlTnVtXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgaSAmJiAoaS5ub2RlLmFjdGl2ZSA9IHRydWUpO1xuICAgICAgdmFyIHIgPSBlLmdldENoaWxkQnlOYW1lKFwibm9kZVZpZGVvXCIpO1xuICAgICAgciAmJiAoci5hY3RpdmUgPSBmYWxzZSk7XG4gICAgICAxID09IHRoaXMuX3ZlcnNpb25OdW1iZXIgJiYgaSAmJiAoaS5zcHJpdGVGcmFtZSA9IG51bGwpO1xuICAgICAgQmFzZVNwcml0ZS5yZWZyZXNoV2l0aE5vZGUoaS5ub2RlLCB0LCBmYWxzZSk7XG4gICAgICBpLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJsYWJlbE51bVwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmVzdG9yZUJ1dHRvbkltYWdlcygpIHtcbiAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLl9idG5TaHVmZmxlUHJvcCkgJiYgKGUgPSB0aGlzLl9idG5TaHVmZmxlUHJvcC5nZXRDaGlsZEJ5TmFtZShcIm5vZGVOdW1cIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkpKSB7XG4gICAgICBCYXNlU3ByaXRlLnJlZnJlc2hXaXRoTm9kZShlLm5vZGUsIFwidGV4dHVyZS9nYW1lUGxheS9nYW1lcGxheV9pY29uX3RpbWVcIiwgZmFsc2UpO1xuICAgICAgZS5ub2RlLmdldENoaWxkQnlOYW1lKFwibGFiZWxOdW1cIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgIDEgPT0gdGhpcy5fdmVyc2lvbk51bWJlciB8fCAoZS5ub2RlLmFjdGl2ZSA9IGZhbHNlKTtcbiAgICB9XG4gICAgaWYgKGNjLmlzVmFsaWQodGhpcy5fYnRuSGl0VGlwc1Byb3ApKSB7XG4gICAgICB2YXIgZTtcbiAgICAgIGlmIChlID0gdGhpcy5fYnRuSGl0VGlwc1Byb3AuZ2V0Q2hpbGRCeU5hbWUoXCJub2RlTnVtXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpKSB7XG4gICAgICAgIEJhc2VTcHJpdGUucmVmcmVzaFdpdGhOb2RlKGUubm9kZSwgXCJ0ZXh0dXJlL2dhbWVQbGF5L2dhbWVwbGF5X2ljb25fdGltZVwiLCBmYWxzZSk7XG4gICAgICAgIGUubm9kZS5nZXRDaGlsZEJ5TmFtZShcImxhYmVsTnVtXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIDEgPT0gdGhpcy5fdmVyc2lvbk51bWJlciB8fCAoZS5ub2RlLmFjdGl2ZSA9IGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKDEgPT0gdGhpcy5fdmVyc2lvbk51bWJlcikgO2Vsc2Uge1xuICAgICAgdGhpcy5fYnRuU2h1ZmZsZVByb3AgPSBudWxsO1xuICAgICAgdGhpcy5fYnRuSGl0VGlwc1Byb3AgPSBudWxsO1xuICAgIH1cbiAgfVxuICBvbldpblZ3X3Nob3dXaW5WdyhlLCB0KSB7XG4gICAgdGhpcy5pc1VubGltaXROZXh0TGV2ZWwoKSB8fCB0aGlzLnJlc3RvcmVCdXR0b25JbWFnZXMoKTtcbiAgICB0KCk7XG4gIH1cbiAgaXNVbmxpbWl0TmV4dExldmVsKCkge1xuICAgIGlmICghdGhpcy5pc05vcm1hbE1vZGUoKSkgcmV0dXJuIGZhbHNlO1xuICAgIGlmICghdGhpcy5fY29uZmlnLmxldmVscyB8fCAwID09PSB0aGlzLl9jb25maWcubGV2ZWxzLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICAgIGlmICgxID09IHRoaXMuX3ZlcnNpb25OdW1iZXIpIHtcbiAgICAgIHZhciBlID0gVXNlck1vZGVsLmdldEluc3RhbmNlKCkubm9ybWFsRGF0YTtcbiAgICAgIHJldHVybiB0aGlzLl9jb25maWcubGV2ZWxzLmluY2x1ZGVzKGUuZ2V0Q3VycmVudExldmVsSWQoKSArIDEpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fY29uZmlnLmxldmVscy5pbmNsdWRlcyh0aGlzLl9jdXJyZW50TGV2ZWxJZCArIDEpO1xuICB9XG4gIG9uRmFpbFZ3X3Nob3coZSwgdCkge1xuICAgIHQoKTtcbiAgfVxuICBvbkZhaWxWd19pbml0QnRuVXNlKGUsIHQpIHtcbiAgICBpZiAodGhpcy5pc1VubGltaXRMZXZlbCgpKSB7XG4gICAgICB2YXIgaSA9IGUuaW5zO1xuICAgICAgaSAmJiBpLm5vZGVOdW0gJiYgKGkubm9kZU51bS5hY3RpdmUgPSBmYWxzZSk7XG4gICAgfVxuICAgIHQoKTtcbiAgfVxufSJdfQ==