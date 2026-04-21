"use strict";
cc._RF.push(module, '4999ekR66JMfLIMmLvyO2/W', 'Tile4GuideTrait');
// subpackages/l_tile4Guide/Scripts/Tile4GuideTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameUtils_1 = require("../../../Scripts/core/simulator/util/GameUtils");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var Tile4GuideMask_1 = require("./Tile4GuideMask");
var Tile4GuideTrait = /** @class */ (function (_super) {
    __extends(Tile4GuideTrait, _super);
    function Tile4GuideTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._pendingWarnTimer = null;
        _this._guideMaskNode = null;
        return _this;
    }
    Tile4GuideTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        GameUtils_1.default.isEmpty(this.localData.slotFullWarnShown) && (this.localData.slotFullWarnShown = false);
    };
    Tile4GuideTrait.prototype._showT4GuideMask = function (e, t) {
        this._clearWarnTimer();
        cc.isValid(this._guideMaskNode) || this._showT4GuideMaskImmediately(e, t);
    };
    Tile4GuideTrait.prototype._showT4GuideMaskImmediately = function (e, t) {
        var i = this;
        this.localData.slotFullWarnShown = true;
        Tile4GuideMask_1.default.createUI().then(function (o) {
            if (cc.isValid(e) && cc.isValid(t)) {
                var n = o.getComponent(Tile4GuideMask_1.default);
                o.parent = e.parent;
                n.setCloseCallback(e.zIndex, e.getSiblingIndex(), function (t, i) {
                    !cc.isValid(e) || t < 0 || i < 0 || e.setSiblingIndex(i);
                });
                e.setSiblingIndex(t.getSiblingIndex() - 1);
                o.setSiblingIndex(t.getSiblingIndex() - 1);
                i._guideMaskNode = o;
            }
        });
    };
    Tile4GuideTrait.prototype.onTile2FailVw_onLoad = function (e, t) {
        if (cc.isValid(this._guideMaskNode)) {
            this._guideMaskNode.destroy();
            this._guideMaskNode = null;
        }
        t();
    };
    Tile4GuideTrait.prototype.onT2GameCtrl_initRes = function (e, t) {
        e.ins.addPreloadRes("Prefab", "l_tile4Guide:prefabs/Tile4GuideMask");
        t();
    };
    Tile4GuideTrait.prototype.onT2SlotNumChg_start = function (e, t) {
        this._clearWarnTimer();
        var i = UserModel_1.default.getInstance().tile2NormalData.getLevelId();
        if (this.localData.slotFullWarnShown || i < 2)
            t();
        else {
            var o = e.ins.context.gameView, n = o.nodeDragCardRoot, r = o.getSlotBarNode();
            if (3 == e.args[0].data.endSlotBarCardCount) {
                this._showT4GuideMask(r, n);
            }
            else {
                this._clearWarnTimer();
            }
            t();
        }
    };
    Tile4GuideTrait.prototype._clearWarnTimer = function () {
        if (null != this._pendingWarnTimer) {
            clearTimeout(this._pendingWarnTimer);
            this._pendingWarnTimer = null;
        }
    };
    Tile4GuideTrait.traitKey = "Tile4Guide";
    Tile4GuideTrait = __decorate([
        mj.trait,
        mj.class("Tile4GuideTrait")
    ], Tile4GuideTrait);
    return Tile4GuideTrait;
}(Trait_1.default));
exports.default = Tile4GuideTrait;

cc._RF.pop();