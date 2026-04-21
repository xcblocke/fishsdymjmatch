"use strict";
cc._RF.push(module, '47312kmU21BRq3x87yG/BQq', 'LevelHighLightTrait');
// subpackages/l_levelHighlight/Scripts/LevelHighLightTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var LevelHighLightTrait = /** @class */ (function (_super) {
    __extends(LevelHighLightTrait, _super);
    function LevelHighLightTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._enabledLevels = [];
        return _this;
    }
    LevelHighLightTrait_1 = LevelHighLightTrait;
    LevelHighLightTrait.prototype.onLoad = function () {
        var e;
        _super.prototype.onLoad.call(this);
        this._enabledLevels = (null === (e = this._traitData) || void 0 === e ? void 0 : e.levels) || [1, 2];
        this.localData.hasManuallySet || (this.localData.hasManuallySet = 0);
        this.localData.isSetInitHighlight || (this.localData.isSetInitHighlight = 0);
    };
    LevelHighLightTrait.prototype.onUISetDlg_onLckHLClk = function (t, e) {
        this.localData.hasManuallySet = 1;
        e();
    };
    LevelHighLightTrait.prototype.onIptSetLv_setData = function (t, e) {
        try {
            var r = t.args[0];
            if (!r) {
                e();
                return;
            }
            var a = r.levelId, o = UserModel_1.default.getInstance();
            if (0 === this.localData.isSetInitHighlight) {
                this.localData.isSetInitHighlight = 1;
                this.localData.isLockHighlightEnabled = o.isLockHighlightEnabled();
            }
            if (1 === this.localData.hasManuallySet) {
                e();
                return;
            }
            if (this._enabledLevels.includes(a)) {
                o.setLockHighlightEnabled(true);
            }
            else {
                o.setLockHighlightEnabled(this.localData.isLockHighlightEnabled);
            }
            e();
        }
        catch (t) {
            console.error("[" + LevelHighLightTrait_1.traitKey + "] 处理关卡设置事件失败: " + (null == t ? void 0 : t.message));
            e();
        }
    };
    var LevelHighLightTrait_1;
    LevelHighLightTrait.traitKey = "LevelHighLight";
    LevelHighLightTrait = LevelHighLightTrait_1 = __decorate([
        mj.trait,
        mj.class("LevelHighLightTrait")
    ], LevelHighLightTrait);
    return LevelHighLightTrait;
}(Trait_1.default));
exports.default = LevelHighLightTrait;

cc._RF.pop();