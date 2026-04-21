"use strict";
cc._RF.push(module, 'e3eceZFuR5LYIFwHrSrBKyD', 'NormalBtnDiffTrait');
// subpackages/l_normalBtnDiff/Scripts/NormalBtnDiffTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ExtractTool_1 = require("../../../Scripts/core/extractQuestion/ExtractTool");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var NormalBtnEnum_1 = require("./NormalBtnEnum");
var NormalBtnDiffUI_1 = require("./NormalBtnDiffUI");
var NormalBtnDiffTrait = /** @class */ (function (_super) {
    __extends(NormalBtnDiffTrait, _super);
    function NormalBtnDiffTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NormalBtnDiffTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.isLocalEmpty(this.localData.lastLevelDiff) && (this.localData.lastLevelDiff = NormalBtnEnum_1.ELevelDiff.Normal);
        this.registerEvent([{
                event: "GameMod_modifyWinTile2",
                type: 2
            }]);
    };
    NormalBtnDiffTrait.prototype.isLocalEmpty = function (t) {
        return null == t || "" === t;
    };
    NormalBtnDiffTrait.prototype.onHallCtl_initRes = function (t, e) {
        t.ins.addPreloadRes("Prefab", NormalBtnDiffUI_1.default.getUrl());
        e();
    };
    NormalBtnDiffTrait.prototype.onHallNmlBtn_updateUI = function (t, e) {
        var o = cc.find("NormalBtnDiff", t.ins.node);
        if (!cc.isValid(o)) {
            o = t.ins.createUISync(NormalBtnDiffUI_1.default);
            if (cc.isValid(o)) {
                t.ins.node.addChild(o);
                o.setPosition(0, 0);
                o.setSiblingIndex(1);
            }
        }
        if (cc.isValid(o)) {
            var r = o.getComponent(NormalBtnDiffUI_1.default), i = cc.find("BgWood", t.ins.node);
            cc.isValid(i) && (i.active = true);
            if (cc.isValid(r)) {
                var n = this.localData.lastLevelDiff;
                r.updateDiff(n) && n != NormalBtnEnum_1.ELevelDiff.Normal && (i.active = false);
            }
        }
        e();
    };
    NormalBtnDiffTrait.prototype.onGameMod_modifyWin = function (t, e) {
        this.recordDiff(t.ins);
        e();
    };
    NormalBtnDiffTrait.prototype.onGameMod_modifyWinTile2 = function (t, e) {
        this.recordDiff(t.ins);
        e();
    };
    NormalBtnDiffTrait.prototype.recordDiff = function (t) {
        var e = t.context.getGameData().getLevelId(), o = ExtractTool_1.default.getInstance().isExpertUI(e), r = ExtractTool_1.default.getInstance().isHardUI(e);
        this.localData.lastLevelDiff = o ? NormalBtnEnum_1.ELevelDiff.Expert : r ? NormalBtnEnum_1.ELevelDiff.Hard : NormalBtnEnum_1.ELevelDiff.Normal;
    };
    NormalBtnDiffTrait.traitKey = "NormalBtnDiff";
    NormalBtnDiffTrait = __decorate([
        mj.trait,
        mj.class("NormalBtnDiff")
    ], NormalBtnDiffTrait);
    return NormalBtnDiffTrait;
}(Trait_1.default));
exports.default = NormalBtnDiffTrait;

cc._RF.pop();