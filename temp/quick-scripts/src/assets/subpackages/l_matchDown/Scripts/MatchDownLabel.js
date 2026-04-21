"use strict";
cc._RF.push(module, '81ecaagm1xDcJ1w0q4FW9wt', 'MatchDownLabel');
// subpackages/l_matchDown/Scripts/MatchDownLabel.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseUI_1 = require("../../../Scripts/framework/ui/BaseUI");
var CommonUtils_1 = require("../../../Scripts/framework/utils/CommonUtils");
var BaseSprite_1 = require("../../../Scripts/gamePlay/base/ui/BaseSprite");
var LoginModel_1 = require("../../../Scripts/gamePlay/login/model/LoginModel");
var u = {
    EN_US: "English",
    EN_GB: "English",
    ZH_CN: "Chinese",
    ZH_HK: "TraditionalChinese",
    ZH_TW: "TraditionalChinese",
    PT_PT: "Portuguese",
    PT_BR: "Portuguese",
    ES: "Spanish",
    ES_419: "Spanish",
    FR: "French",
    DE: "German",
    JA: "Japanese",
    KO: "Korean",
    RU: "Russian"
};
var p = Object.keys(u);
var MatchDownLabel = /** @class */ (function (_super) {
    __extends(MatchDownLabel, _super);
    function MatchDownLabel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.matchCount = null;
        _this.matchDesc = null;
        return _this;
    }
    MatchDownLabel.prototype.onLoad = function () {
        var t;
        _super.prototype.onLoad.call(this);
        this.matchCount = null === (t = this.node.getChildByName("MatchCount")) || void 0 === t ? void 0 : t.getComponent(cc.Label);
        this.matchDesc = this.node.getChildByName("MatchDesc");
        mj.EventManager.on("language-changed", this.updateDesc, this);
        this.updateDesc();
    };
    MatchDownLabel.prototype.getLanguageCode = function () {
        var e = LoginModel_1.default.getInstance().language, t = CommonUtils_1.formatLanguageCodeToString(e);
        -1 == p.indexOf(t) && (t = "EN_US");
        return t;
    };
    MatchDownLabel.prototype.updateDesc = function () {
        if (cc.isValid(this.matchDesc)) {
            var e = this.getLanguageCode();
            BaseSprite_1.default.refreshWithNode(this.matchDesc, "atlas/match_down/gameplay_txt_" + u[e], true, true, "l_matchDown");
        }
    };
    MatchDownLabel.prototype.updateCount = function (e) {
        cc.isValid(this.matchCount) && (this.matchCount.string = e.toString());
    };
    MatchDownLabel.prefabUrl = "prefabs/matchDown";
    MatchDownLabel.bundleName = "l_matchDown";
    MatchDownLabel = __decorate([
        mj.class
    ], MatchDownLabel);
    return MatchDownLabel;
}(BaseUI_1.default));
exports.default = MatchDownLabel;

cc._RF.pop();