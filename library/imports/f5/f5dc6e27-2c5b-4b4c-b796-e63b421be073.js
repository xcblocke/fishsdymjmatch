"use strict";
cc._RF.push(module, 'f5dc64nLFtLTLeW5jtCG+Bz', 'AvatarIcon');
// subpackages/r_avatarCollection/Scripts/AvatarIcon.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseUI_1 = require("../../../Scripts/framework/ui/BaseUI");
var BaseSprite_1 = require("../../../Scripts/gamePlay/base/ui/BaseSprite");
var Utils_1 = require("./Utils");
var AvatarIcon = /** @class */ (function (_super) {
    __extends(AvatarIcon, _super);
    function AvatarIcon() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._yellowBg = null;
        _this._whiteBg = null;
        _this._rootNode = null;
        _this._cardSpr = null;
        return _this;
    }
    Object.defineProperty(AvatarIcon.prototype, "cardSpr", {
        get: function () {
            null == this._cardSpr && (this._cardSpr = this.node.getChildByName("bg").getChildByName("cardHead").getComponent(cc.Sprite));
            return this._cardSpr;
        },
        enumerable: false,
        configurable: true
    });
    AvatarIcon.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        var e = this.node.getChildByName("bg");
        this._yellowBg = e.getChildByName("yellow");
        this._whiteBg = e.getChildByName("white");
        this._cardSpr = e.getChildByName("cardHead").getComponent(cc.Sprite);
        this._rootNode = e;
        this.init();
    };
    AvatarIcon.prototype.init = function () { };
    AvatarIcon.prototype.updateUI = function (t) {
        var e = Utils_1.Key2Info(t.key);
        BaseSprite_1.default.refreshWithNode(this.cardSpr.node, e.path, e.fromAtlas, false, e.bundleName);
    };
    AvatarIcon.prototype.onDestroy = function () {
        _super.prototype.onDestroy.call(this);
    };
    AvatarIcon.prefabUrl = "prefabs/AvatarIcon";
    AvatarIcon.bundleName = Utils_1.getBundleName();
    AvatarIcon = __decorate([
        mj.class
    ], AvatarIcon);
    return AvatarIcon;
}(BaseUI_1.default));
exports.default = AvatarIcon;

cc._RF.pop();