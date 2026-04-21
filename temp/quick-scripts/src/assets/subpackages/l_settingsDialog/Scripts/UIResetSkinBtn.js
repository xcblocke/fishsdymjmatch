"use strict";
cc._RF.push(module, '7fad2gFRUFNQI9ugUDDagXn', 'UIResetSkinBtn');
// subpackages/l_settingsDialog/Scripts/UIResetSkinBtn.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.UIResetSkinBtn = void 0;
var I18NAdBtnLayout_1 = require("../../../Scripts/component/I18NAdBtnLayout");
var BaseUI_1 = require("../../../Scripts/framework/ui/BaseUI");
var UIResetSkinBtn = /** @class */ (function (_super) {
    __extends(UIResetSkinBtn, _super);
    function UIResetSkinBtn() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._data = null;
        _this._titleLabel = null;
        return _this;
    }
    UIResetSkinBtn.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.initEvents();
    };
    UIResetSkinBtn.prototype.initEvents = function () {
        if (cc.isValid(this.node)) {
            this.OnButtonClick(this.node, this.onButtonClick.bind(this));
            cc.find("bg/layout/btn_text", this.node).on(cc.Node.EventType.SIZE_CHANGED, this.onTextLengthChanged, this);
        }
    };
    UIResetSkinBtn.prototype.onTextLengthChanged = function () {
        if (cc.isValid(this.node)) {
            var t = this.node.getChildByName("bg");
            cc.isValid(t) && I18NAdBtnLayout_1.default.setupLayout(t, "layout/btn_icon", "layout/btn_text", 505, 10);
        }
    };
    UIResetSkinBtn.prototype.setData = function (t) {
        this._data = t;
    };
    UIResetSkinBtn.prototype.onButtonClick = function () {
        var t;
        (null === (t = this._data) || void 0 === t ? void 0 : t.onReset) && this._data.onReset();
    };
    UIResetSkinBtn.prefabUrl = "prefabs/ui/settingsDialog/UIResetSkinBtn";
    UIResetSkinBtn = __decorate([
        mj.class
    ], UIResetSkinBtn);
    return UIResetSkinBtn;
}(BaseUI_1.default));
exports.UIResetSkinBtn = UIResetSkinBtn;

cc._RF.pop();