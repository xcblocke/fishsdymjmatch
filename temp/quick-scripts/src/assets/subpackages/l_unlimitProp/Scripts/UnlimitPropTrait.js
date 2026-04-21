"use strict";
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