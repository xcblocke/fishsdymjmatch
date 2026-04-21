"use strict";
cc._RF.push(module, '07ee4PiLL5LPoWcaT2yZzuH', 'E04GiftBox');
// Scripts/E04GiftBox.ts

Object.defineProperty(exports, "__esModule", { value: true });
var TravelMapInterface_1 = require("./TravelMapInterface");
var ESimpleGiftBox_1 = require("./ESimpleGiftBox");
var E04GiftBox = /** @class */ (function (_super) {
    __extends(E04GiftBox, _super);
    function E04GiftBox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    E04GiftBox.prototype.getBadgePath = function (e) {
        switch (e) {
            case TravelMapInterface_1.MapElementId.E04GiftBox1:
                return {
                    path: "texture/badge/journey_img_medal_4_1",
                    atlas: false
                };
            case TravelMapInterface_1.MapElementId.E04GiftBox2:
                return {
                    path: "texture/badge/journey_img_medal_4_2",
                    atlas: false
                };
            case TravelMapInterface_1.MapElementId.E04GiftBox3:
                return {
                    path: "texture/badge/journey_img_medal_4_3",
                    atlas: false
                };
            default:
                return {
                    path: null
                };
        }
    };
    E04GiftBox.prototype.getBadgeBgPath = function (e) {
        switch (e) {
            case TravelMapInterface_1.MapElementId.E04GiftBox1:
                return {
                    path: "texture/journeyMap/04/journey_bg_medal",
                    atlas: false
                };
            case TravelMapInterface_1.MapElementId.E04GiftBox2:
                return {
                    path: "texture/journeyMap/04/journey_bg_medal_2",
                    atlas: false
                };
            case TravelMapInterface_1.MapElementId.E04GiftBox3:
                return {
                    path: "texture/journeyMap/04/journey_bg_medal_3",
                    atlas: false
                };
            default:
                return {
                    path: null
                };
        }
    };
    E04GiftBox.prototype.getBadgeId = function (e) {
        switch (e) {
            case TravelMapInterface_1.MapElementId.E04GiftBox1:
                return 1;
            case TravelMapInterface_1.MapElementId.E04GiftBox2:
                return 2;
            case TravelMapInterface_1.MapElementId.E04GiftBox3:
                return 3;
            default:
                return 1;
        }
    };
    E04GiftBox.prefabUrl = "prefabs/journeyMap/04/E04GiftBox";
    E04GiftBox = __decorate([
        mj.class
    ], E04GiftBox);
    return E04GiftBox;
}(ESimpleGiftBox_1.default));
exports.default = E04GiftBox;

cc._RF.pop();