"use strict";
cc._RF.push(module, '3355fwO0CBK66OzWdEogKls', 'E05GiftBox');
// Scripts/E05GiftBox.ts

Object.defineProperty(exports, "__esModule", { value: true });
var TravelMapInterface_1 = require("./TravelMapInterface");
var ESimpleGiftBox_1 = require("./ESimpleGiftBox");
var E05GiftBox = /** @class */ (function (_super) {
    __extends(E05GiftBox, _super);
    function E05GiftBox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    E05GiftBox.prototype.getBadgePath = function (e) {
        switch (e) {
            case TravelMapInterface_1.MapElementId.E05GiftBox1:
                return {
                    path: "texture/badge/journey_img_medal_5_1",
                    atlas: false
                };
            case TravelMapInterface_1.MapElementId.E05GiftBox2:
                return {
                    path: "texture/badge/journey_img_medal_5_2",
                    atlas: false
                };
            case TravelMapInterface_1.MapElementId.E05GiftBox3:
                return {
                    path: "texture/badge/journey_img_medal_5_3",
                    atlas: false
                };
            default:
                return {
                    path: null
                };
        }
    };
    E05GiftBox.prototype.getBadgeBgPath = function () {
        return {
            path: null
        };
    };
    E05GiftBox.prototype.getBadgeId = function (e) {
        switch (e) {
            case TravelMapInterface_1.MapElementId.E05GiftBox1:
                return 1;
            case TravelMapInterface_1.MapElementId.E05GiftBox2:
                return 2;
            case TravelMapInterface_1.MapElementId.E05GiftBox3:
                return 3;
            default:
                return 1;
        }
    };
    E05GiftBox.prefabUrl = "prefabs/journeyMap/05/E05GiftBox";
    E05GiftBox = __decorate([
        mj.class
    ], E05GiftBox);
    return E05GiftBox;
}(ESimpleGiftBox_1.default));
exports.default = E05GiftBox;

cc._RF.pop();