"use strict";
cc._RF.push(module, '41696r9tFdNtZR9oLI0Rr1E', 'MainGameBottomBtnsTrait');
// subpackages/r_mainGameBottomBtns/Scripts/MainGameBottomBtnsTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseSprite_1 = require("../../../Scripts/gamePlay/base/ui/BaseSprite");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var MainGameBottomBtnsTrait = /** @class */ (function (_super) {
    __extends(MainGameBottomBtnsTrait, _super);
    function MainGameBottomBtnsTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainGameBottomBtnsTrait_1 = MainGameBottomBtnsTrait;
    MainGameBottomBtnsTrait.prototype.onLoad = function () {
        var e, i;
        _super.prototype.onLoad.call(this);
        var n = null === (e = this._traitData) || void 0 === e ? void 0 : e.configs;
        this._bundle = (null === (i = this._traitData) || void 0 === i ? void 0 : i.bundle) || MainGameBottomBtnsTrait_1.DEFAULT_BUNDLE;
        this._imgRefreshPath = (null == n ? void 0 : n.imgRefreshPath) || MainGameBottomBtnsTrait_1.DEFAULT_IMG_REFRESH_PATH;
        this._imgHintPath = (null == n ? void 0 : n.imgHintPath) || MainGameBottomBtnsTrait_1.DEFAULT_IMG_HINT_PATH;
    };
    MainGameBottomBtnsTrait.prototype.onGameUI_onLoad = function (t, e) {
        var r = t.ins;
        if (r) {
            this.refreshBtnBackground(r.btnShuffle, this._imgRefreshPath);
            this.refreshBtnBackground(r.btnHitTips, this._imgHintPath);
            e();
        }
        else
            e();
    };
    MainGameBottomBtnsTrait.prototype.refreshBtnBackground = function (t, e) {
        if (t) {
            var r = t.getChildByName("Background");
            r && BaseSprite_1.default.refreshWithNode(r, e, false, true, this._bundle);
        }
    };
    var MainGameBottomBtnsTrait_1;
    MainGameBottomBtnsTrait.traitKey = "MainGameBottomBtns";
    MainGameBottomBtnsTrait.DEFAULT_BUNDLE = "r_mainGameBottomBtns";
    MainGameBottomBtnsTrait.DEFAULT_IMG_REFRESH_PATH = "texture/gameplay_btn_refresh";
    MainGameBottomBtnsTrait.DEFAULT_IMG_HINT_PATH = "texture/gameplay_btn_hint";
    MainGameBottomBtnsTrait = MainGameBottomBtnsTrait_1 = __decorate([
        mj.trait,
        mj.class("MainGameBottomBtnsTrait")
    ], MainGameBottomBtnsTrait);
    return MainGameBottomBtnsTrait;
}(Trait_1.default));
exports.default = MainGameBottomBtnsTrait;

cc._RF.pop();