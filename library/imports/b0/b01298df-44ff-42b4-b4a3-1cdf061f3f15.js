"use strict";
cc._RF.push(module, 'b0129jfRP9CtLSjHN8GHz8V', 'E07GiftBox');
// Scripts/E07GiftBox.ts

Object.defineProperty(exports, "__esModule", { value: true });
var TravelMapInterface_1 = require("./TravelMapInterface");
var ESimpleGiftBox_1 = require("./ESimpleGiftBox");
var E07GiftBox = /** @class */ (function (_super) {
    __extends(E07GiftBox, _super);
    function E07GiftBox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    E07GiftBox.prototype.getBadgePath = function (e) {
        switch (e) {
            case TravelMapInterface_1.MapElementId.E07GiftBox1:
                return {
                    path: "texture/badge/journey_img_medal_7_1",
                    atlas: false
                };
            case TravelMapInterface_1.MapElementId.E07GiftBox2:
                return {
                    path: "texture/badge/journey_img_medal_7_2",
                    atlas: false
                };
            case TravelMapInterface_1.MapElementId.E07GiftBox3:
                return {
                    path: "texture/badge/journey_img_medal_7_3",
                    atlas: false
                };
            default:
                return {
                    path: null
                };
        }
    };
    E07GiftBox.prototype.getBadgeBgPath = function () {
        return {
            path: "texture/journey/journey_bg_medal",
            atlas: false,
            bundle: "mainRes"
        };
    };
    E07GiftBox.prototype.getBadgeId = function (e) {
        switch (e) {
            case TravelMapInterface_1.MapElementId.E07GiftBox1:
                return 1;
            case TravelMapInterface_1.MapElementId.E07GiftBox2:
                return 2;
            case TravelMapInterface_1.MapElementId.E07GiftBox3:
                return 3;
            default:
                return 1;
        }
    };
    E07GiftBox.prefabUrl = "prefabs/E07GiftBox";
    E07GiftBox.bundleName = "l_travel05";
    E07GiftBox = __decorate([
        mj.class
    ], E07GiftBox);
    return E07GiftBox;
}(ESimpleGiftBox_1.default));
exports.default = E07GiftBox;

cc._RF.pop();