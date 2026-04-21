"use strict";
cc._RF.push(module, '59826q2P8VLmYIJ7bkpp+3l', 'E06GiftBox');
// subpackages/l_travelValentine/Scripts/scripts/E06GiftBox.ts

Object.defineProperty(exports, "__esModule", { value: true });
var TravelMapInterface_1 = require("../../../../Scripts/TravelMapInterface");
var ESimpleGiftBox_1 = require("../../../../Scripts/ESimpleGiftBox");
var E06GiftBox = /** @class */ (function (_super) {
    __extends(E06GiftBox, _super);
    function E06GiftBox() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.boxBg = null;
        return _this;
    }
    E06GiftBox.prototype.uiOnLoad = function () {
        _super.prototype.uiOnLoad.call(this);
        this.boxBg = cc.find("Element/BoxBg", this.node);
    };
    E06GiftBox.prototype.getBadgePath = function (e) {
        switch (e) {
            case TravelMapInterface_1.MapElementId.E06GiftBox1:
                return {
                    path: "texture/badge/journey_img_medal_6_1",
                    atlas: false
                };
            case TravelMapInterface_1.MapElementId.E06GiftBox2:
                return {
                    path: "texture/badge/journey_img_medal_6_2",
                    atlas: false
                };
            case TravelMapInterface_1.MapElementId.E06GiftBox3:
                return {
                    path: "texture/badge/journey_img_medal_6_3",
                    atlas: false
                };
            default:
                return {
                    path: null
                };
        }
    };
    E06GiftBox.prototype.getBadgeBgPath = function (e) {
        switch (e) {
            case TravelMapInterface_1.MapElementId.E06GiftBox1:
                return {
                    path: "texture/journey_bg_medal",
                    atlas: false,
                    bundle: "l_travelValentine"
                };
            case TravelMapInterface_1.MapElementId.E06GiftBox2:
                return {
                    path: "texture/journey_bg_medal_2",
                    atlas: false,
                    bundle: "l_travelValentine"
                };
            case TravelMapInterface_1.MapElementId.E06GiftBox3:
                return {
                    path: "texture/journey_bg_medal_3",
                    atlas: false,
                    bundle: "l_travelValentine"
                };
            default:
                return {
                    path: null
                };
        }
    };
    E06GiftBox.prototype.getBadgeId = function (e) {
        switch (e) {
            case TravelMapInterface_1.MapElementId.E06GiftBox1:
                return 1;
            case TravelMapInterface_1.MapElementId.E06GiftBox2:
                return 2;
            case TravelMapInterface_1.MapElementId.E06GiftBox3:
                return 3;
            default:
                return 1;
        }
    };
    E06GiftBox.prototype.updateUI = function () {
        _super.prototype.updateUI.call(this);
        this.boxBg.active = this._data.type === TravelMapInterface_1.MapElementId.E06GiftBox3;
        this.updateBadgeIcon();
    };
    E06GiftBox.prototype.updateBadgeIcon = function () {
        var e = 0.55;
        switch (this._data.type) {
            case TravelMapInterface_1.MapElementId.E06GiftBox1:
                e = 0.635;
                break;
            case TravelMapInterface_1.MapElementId.E06GiftBox2:
                e = 0.64;
                break;
            case TravelMapInterface_1.MapElementId.E06GiftBox3:
                e = 0.675;
        }
        this.badgeIcon.setScale(e);
    };
    E06GiftBox.prefabUrl = "prefabs/E06GiftBox";
    E06GiftBox.bundleName = "l_travelValentine";
    E06GiftBox = __decorate([
        mj.class
    ], E06GiftBox);
    return E06GiftBox;
}(ESimpleGiftBox_1.default));
exports.default = E06GiftBox;

cc._RF.pop();