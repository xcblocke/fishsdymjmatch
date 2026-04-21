"use strict";
cc._RF.push(module, '2655flc/+NME6uPMZl0gjLe', 'UILanguageLockItem');
// subpackages/l_languageSelector/Scripts/UILanguageLockItem.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.UILanguageLockItem = void 0;
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var ControllerManager_1 = require("../../../Scripts/framework/manager/ControllerManager");
var BaseSpine_1 = require("../../../Scripts/gamePlay/base/ui/BaseSpine");
var VibrateManager_1 = require("../../../Scripts/gamePlay/base/vibrate/VibrateManager");
var UILanguageItem_1 = require("./UILanguageItem");
var UILanguageLockItem = /** @class */ (function (_super) {
    __extends(UILanguageLockItem, _super);
    function UILanguageLockItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._lockNode = null;
        _this._imgMask = null;
        _this._lockNode2 = null;
        _this._imgMask2 = null;
        _this._locked = false;
        _this._originalOnClick = null;
        return _this;
    }
    UILanguageLockItem.prototype.uiOnLoad = function () {
        var e, o, n, a, i, r, l, c;
        _super.prototype.uiOnLoad.call(this);
        if (cc.isValid(this._cellUI)) {
            this._lockNode = null === (o = null === (e = this._cellUI.getChildByName("btn_normal")) || void 0 === e ? void 0 : e.getChildByName("bg")) || void 0 === o ? void 0 : o.getChildByName("img_lock");
            this._imgMask = null === (a = null === (n = this._cellUI.getChildByName("btn_normal")) || void 0 === n ? void 0 : n.getChildByName("bg")) || void 0 === a ? void 0 : a.getChildByName("img_mask");
            this._lockNode2 = null === (r = null === (i = this._cellUI.getChildByName("btn_selected")) || void 0 === i ? void 0 : i.getChildByName("bg")) || void 0 === r ? void 0 : r.getChildByName("img_lock2");
            this._imgMask2 = null === (c = null === (l = this._cellUI.getChildByName("btn_selected")) || void 0 === l ? void 0 : l.getChildByName("bg")) || void 0 === c ? void 0 : c.getChildByName("img_mask2");
        }
    };
    UILanguageLockItem.prototype.updateUI = function () {
        _super.prototype.updateUI.call(this);
        this._refreshLockState();
    };
    UILanguageLockItem.prototype.setOnClick = function (e) {
        var o = this;
        this._originalOnClick = e;
        _super.prototype.setOnClick.call(this, function (t) {
            if (o._locked) {
                o._onLockedClick(t);
            }
            else {
                e(t);
            }
        });
    };
    UILanguageLockItem.prototype._refreshLockState = function () {
        this._locked = this._checkIsLocked();
        if (cc.isValid(this._lockNode)) {
            this._lockNode.active = this._locked;
            this._lockNode.opacity = 255;
            this._lockNode.scale = 1;
            this._lockNode2.active = this._locked;
            this._lockNode2.opacity = 255;
            this._lockNode2.scale = 1;
            this._imgMask.active = this._locked;
            this._imgMask.opacity = 255;
            this._imgMask.width = 670;
            this._imgMask2.active = this._locked;
            this._imgMask2.opacity = 255;
            this._imgMask2.width = 670;
        }
    };
    UILanguageLockItem.prototype._checkIsLocked = function () {
        var t;
        if (!this._data)
            return false;
        var e = mj.getClassByName("ChangeBaseCardByLanTrait"), o = null === (t = null == e ? void 0 : e.getInstance) || void 0 === t ? void 0 : t.call(e);
        if (!o)
            return false;
        var n = o.getBundleByLang(this._data.code);
        return !o.getUnlockedSkins().includes(n);
    };
    UILanguageLockItem.prototype._onLockedClick = function (t) {
        var e, o, n = this;
        if (this._data) {
            var a = mj.getClassByName("ChangeBaseCardByLanTrait");
            (null === (e = null == a ? void 0 : a.getInstance) || void 0 === e ? void 0 : e.call(a)) && ControllerManager_1.default.getInstance().pushViewByController("UILanguageLockController", {
                isGlobal: true,
                bundleName: "r_changeBaseCardByLan",
                code: null === (o = this._data.code) || void 0 === o ? void 0 : o.toLowerCase(),
                onSuccess: function () {
                    n._locked = false;
                    n._playUnlockEffect(function () {
                        cc.tween(n._imgMask).to(0.8, {
                            width: 0
                        }).call(function () {
                            var e;
                            null === (e = n._originalOnClick) || void 0 === e || e.call(n, t);
                        }).start();
                        cc.tween(n._imgMask2).to(0.8, {
                            width: 0
                        }).start();
                    });
                }
            });
        }
    };
    UILanguageLockItem.prototype._playUnlockEffect = function (t) {
        cc.isValid(this._lockNode) && (this._lockNode.active = false);
        cc.isValid(this._lockNode2) && (this._lockNode2.active = false);
        if (cc.isValid(this._cellUI)) {
            var e = cc.Vec2.ZERO;
            if (cc.isValid(this._lockNode)) {
                var o = this._lockNode.convertToWorldSpaceAR(cc.Vec2.ZERO);
                e = this._cellUI.convertToNodeSpaceAR(o);
            }
            var n = BaseSpine_1.default.create("spine/game_kaisuo1", "in", 1, function () {
                null == t || t();
            }, true, "r_changeBaseCardByLan");
            n.node.setPosition(e);
            n.node.parent = this._cellUI;
            VibrateManager_1.default.executeVibrate(VibrateManager_1.EVibrateStrength.Strong);
            mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.SkinUnlock);
        }
        else
            null == t || t();
    };
    UILanguageLockItem.prefabUrl = "prefab/UILanguageLockItem";
    UILanguageLockItem.bundleName = "r_changeBaseCardByLan";
    UILanguageLockItem = __decorate([
        mj.class
    ], UILanguageLockItem);
    return UILanguageLockItem;
}(UILanguageItem_1.UILanguageItem));
exports.UILanguageLockItem = UILanguageLockItem;

cc._RF.pop();