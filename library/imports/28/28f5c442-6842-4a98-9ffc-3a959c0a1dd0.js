"use strict";
cc._RF.push(module, '28f5cRCaEJKmJ/8OpWcCh3Q', 'NormalBtnDiffUI');
// subpackages/l_normalBtnDiff/Scripts/NormalBtnDiffUI.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ELevelDiff = void 0;
var BaseUI_1 = require("../../../Scripts/framework/ui/BaseUI");
var I18NStrings_1 = require("../../../Scripts/framework/data/I18NStrings");
var ELevelDiff;
(function (ELevelDiff) {
    ELevelDiff[ELevelDiff["Normal"] = 0] = "Normal";
    ELevelDiff[ELevelDiff["Expert"] = 1] = "Expert";
    ELevelDiff[ELevelDiff["Hard"] = 2] = "Hard";
})(ELevelDiff = exports.ELevelDiff || (exports.ELevelDiff = {}));
var NormalBtnDiffUI = /** @class */ (function (_super) {
    __extends(NormalBtnDiffUI, _super);
    function NormalBtnDiffUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.expertBgNode = null;
        _this.expertUpBgNode = null;
        _this.hardBgNode = null;
        _this.hardUpBgNode = null;
        _this.labelUpNode = null;
        return _this;
    }
    NormalBtnDiffUI.prototype.getMessageListeners = function () {
        return {
            "language-changed": this.onLanguageChanged.bind(this)
        };
    };
    NormalBtnDiffUI.prototype.onLanguageChanged = function () {
        var t = this;
        this.enabledInHierarchy && this.scheduleOnce(function () {
            cc.isValid(t.labelUpNode) && t.labelUpNode.active && t.updateBgWidth();
        }, 0);
    };
    NormalBtnDiffUI.prototype.updateBgWidth = function () {
        this.hardUpBgNode.width = this.labelUpNode.width + 50;
        this.expertUpBgNode.width = this.labelUpNode.width + 50;
    };
    NormalBtnDiffUI.prototype.updateDiff = function (t) {
        if (!cc.isValid(this.expertBgNode))
            return false;
        this.expertBgNode.active = false;
        this.expertUpBgNode.active = false;
        this.hardBgNode.active = false;
        this.hardUpBgNode.active = false;
        this.labelUpNode.active = false;
        if (t === ELevelDiff.Expert) {
            this.showExpert();
        }
        else {
            if (t === ELevelDiff.Hard) {
                this.showHard();
            }
            else {
                t === ELevelDiff.Normal && this.showNormal();
            }
        }
        this.onLanguageChanged();
        return true;
    };
    NormalBtnDiffUI.prototype.showExpert = function () {
        this.expertBgNode.active = true;
        this.expertUpBgNode.active = true;
        this.labelUpNode.active = true;
        I18NStrings_1.default.setText(this.labelUpNode, "Expert", "MahjongTiles_VeryHard");
    };
    NormalBtnDiffUI.prototype.showHard = function () {
        this.hardBgNode.active = true;
        this.hardUpBgNode.active = true;
        this.labelUpNode.active = true;
        I18NStrings_1.default.setText(this.labelUpNode, "Hard", "MahjongTiles_Hard");
    };
    NormalBtnDiffUI.prototype.showNormal = function () { };
    NormalBtnDiffUI.prefabUrl = "prefabs/hall/NormalBtnDiff";
    __decorate([
        mj.node("BgExpert")
    ], NormalBtnDiffUI.prototype, "expertBgNode", void 0);
    __decorate([
        mj.node("BgExpertUp")
    ], NormalBtnDiffUI.prototype, "expertUpBgNode", void 0);
    __decorate([
        mj.node("BgHard")
    ], NormalBtnDiffUI.prototype, "hardBgNode", void 0);
    __decorate([
        mj.node("BgHardUP")
    ], NormalBtnDiffUI.prototype, "hardUpBgNode", void 0);
    __decorate([
        mj.node("LabeUp")
    ], NormalBtnDiffUI.prototype, "labelUpNode", void 0);
    __decorate([
        mj.traitEvent("NorBtnDiffUI_updateBgW")
    ], NormalBtnDiffUI.prototype, "updateBgWidth", null);
    __decorate([
        mj.traitEvent("NorBtnDiffUI_showExpert")
    ], NormalBtnDiffUI.prototype, "showExpert", null);
    __decorate([
        mj.traitEvent("NorBtnDiffUI_showHard")
    ], NormalBtnDiffUI.prototype, "showHard", null);
    __decorate([
        mj.traitEvent("NorBtnDiffUI_showNormal")
    ], NormalBtnDiffUI.prototype, "showNormal", null);
    NormalBtnDiffUI = __decorate([
        mj.class
    ], NormalBtnDiffUI);
    return NormalBtnDiffUI;
}(BaseUI_1.default));
exports.default = NormalBtnDiffUI;

cc._RF.pop();