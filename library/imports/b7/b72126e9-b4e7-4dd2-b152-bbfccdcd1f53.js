"use strict";
cc._RF.push(module, 'b7212bptOdN0rFSu/zNzR9T', 'MainGameBackIconTrait');
// subpackages/l_mainGameBackIcon/Scripts/MainGameBackIconTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var BaseSprite_1 = require("../../../Scripts/gamePlay/base/ui/BaseSprite");
var MainGameBackIconTrait = /** @class */ (function (_super) {
    __extends(MainGameBackIconTrait, _super);
    function MainGameBackIconTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainGameBackIconTrait_1 = MainGameBackIconTrait;
    MainGameBackIconTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    MainGameBackIconTrait.prototype.getIconPath = function () {
        var t;
        return (null === (t = this._traitData) || void 0 === t ? void 0 : t.iconPath) || MainGameBackIconTrait_1.DEFAULT_ICON_PATH;
    };
    MainGameBackIconTrait.prototype.isMatchGameType = function (t) {
        var e;
        return !((null === (e = this._traitData) || void 0 === e ? void 0 : e.gameTypes) && Array.isArray(this._traitData.gameTypes)) || this._traitData.gameTypes.includes(t);
    };
    MainGameBackIconTrait.prototype.onMainGRTop_applyTSCfg = function (t, e) {
        var r, o = null === (r = t.args) || void 0 === r ? void 0 : r[0];
        if (o && this.isMatchGameType(o.gameType)) {
            var a = cc.find("btnBack/Background/icon", o.topRootNode), i = this.getIconPath();
            BaseSprite_1.default.refreshWithNode(a, i, false, false, "mainRes");
            a.setPosition(1, 4);
            e();
        }
        else
            e();
    };
    var MainGameBackIconTrait_1;
    MainGameBackIconTrait.traitKey = "MainGameBackIcon";
    MainGameBackIconTrait.DEFAULT_ICON_PATH = "texture/gamePlayTop/gameplay_img_home";
    MainGameBackIconTrait = MainGameBackIconTrait_1 = __decorate([
        mj.trait,
        mj.class("MainGameBackIconTrait")
    ], MainGameBackIconTrait);
    return MainGameBackIconTrait;
}(Trait_1.default));
exports.default = MainGameBackIconTrait;

cc._RF.pop();