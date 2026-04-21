"use strict";
cc._RF.push(module, '5d4c0jq6RpHYqag0TGH1pnF', 'MapElementFactory');
// Scripts/elements/MapElementFactory.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.MapElementFactory = void 0;
var E01GiftBox_1 = require("../E01GiftBox");
var E01House_1 = require("../E01House");
var E01Normal_1 = require("../E01Normal");
var E01Snowman_1 = require("../E01Snowman");
var E01TopFinish_1 = require("../E01TopFinish");
var E02Bg1_1 = require("../E02Bg1");
var E02Bg2_1 = require("../E02Bg2");
var E02Bg3_1 = require("../E02Bg3");
var E02Building1_1 = require("../E02Building1");
var E02Building2_1 = require("../E02Building2");
var E02Building3_1 = require("../E02Building3");
var E02GiftBox1_1 = require("../E02GiftBox1");
var E02GiftBox2_1 = require("../E02GiftBox2");
var E02GiftBox3_1 = require("../E02GiftBox3");
var E02LevelBox_1 = require("../E02LevelBox");
var E02Normal_1 = require("../E02Normal");
var E02TopFinish_1 = require("../E02TopFinish");
var E03GiftBox_1 = require("../E03GiftBox");
var E03Scarf_1 = require("../E03Scarf");
var E03Tree_1 = require("../E03Tree");
var E04GiftBox_1 = require("../E04GiftBox");
var E04Panda1_1 = require("../E04Panda1");
var E04Panda2_1 = require("../E04Panda2");
var E05Balloon_1 = require("../E05Balloon");
var E05GiftBox_1 = require("../E05GiftBox");
var E05Jeep_1 = require("../E05Jeep");
var E07Ball_1 = require("../E07Ball");
var E07Dog_1 = require("../E07Dog");
var E07GiftBox_1 = require("../E07GiftBox");
var E07Normal_1 = require("./E07Normal");
var TravelMapInterface_1 = require("../TravelMapInterface");
var MapElementFactory = /** @class */ (function () {
    function MapElementFactory() {
    }
    MapElementFactory.getMapElement = function (e) {
        return this._mapElementMap.get(e);
    };
    MapElementFactory.registerMapElement = function (e, t) {
        this._mapElementMap.set(e, t);
    };
    MapElementFactory.clear = function () {
        this._mapElementMap.clear();
        this._hasInit = false;
    };
    MapElementFactory.init = function () {
        if (!this._hasInit) {
            this._hasInit = true;
            this.registerMapElement(TravelMapInterface_1.MapElementId.E01GiftBox1, E01GiftBox_1.default);
            this.registerMapElement(TravelMapInterface_1.MapElementId.E01GiftBox2, E01GiftBox_1.default);
            this.registerMapElement(TravelMapInterface_1.MapElementId.E01GiftBox3, E01GiftBox_1.default);
            this.registerMapElement(TravelMapInterface_1.MapElementId.E01Snowman, E01Snowman_1.default);
            this.registerMapElement(TravelMapInterface_1.MapElementId.E01House, E01House_1.default);
            this.registerMapElement(TravelMapInterface_1.MapElementId.E01Normal, E01Normal_1.default);
            this.registerMapElement(TravelMapInterface_1.MapElementId.E01TopFinish, E01TopFinish_1.default);
            this.registerMapElement(TravelMapInterface_1.MapElementId.E01LevelGiftBox1, E01Normal_1.default);
            this.registerMapElement(TravelMapInterface_1.MapElementId.E01LevelGiftBox2, E01Normal_1.default);
            this.registerMapElement(TravelMapInterface_1.MapElementId.E01LevelGiftBox3, E01Normal_1.default);
            this.registerMapElement(TravelMapInterface_1.MapElementId.E01LevelGiftBox4, E01Normal_1.default);
            this.registerMapElement(TravelMapInterface_1.MapElementId.E02Normal, E02Normal_1.default);
            this.registerMapElement(TravelMapInterface_1.MapElementId.E02Bg1, E02Bg1_1.default);
            this.registerMapElement(TravelMapInterface_1.MapElementId.E02Bg2, E02Bg2_1.default);
            this.registerMapElement(TravelMapInterface_1.MapElementId.E02Bg3, E02Bg3_1.default);
            this.registerMapElement(TravelMapInterface_1.MapElementId.E02Building1, E02Building1_1.default);
            this.registerMapElement(TravelMapInterface_1.MapElementId.E02Building2, E02Building2_1.default);
            this.registerMapElement(TravelMapInterface_1.MapElementId.E02Building3, E02Building3_1.default);
            this.registerMapElement(TravelMapInterface_1.MapElementId.E02GiftBox1, E02GiftBox1_1.default);
            this.registerMapElement(TravelMapInterface_1.MapElementId.E02GiftBox2, E02GiftBox2_1.default);
            this.registerMapElement(TravelMapInterface_1.MapElementId.E02GiftBox3, E02GiftBox3_1.default);
            this.registerMapElement(TravelMapInterface_1.MapElementId.E02LevelGiftBox1, E02LevelBox_1.default);
            this.registerMapElement(TravelMapInterface_1.MapElementId.E02LevelGiftBox2, E02LevelBox_1.default);
            this.registerMapElement(TravelMapInterface_1.MapElementId.E02LevelGiftBox3, E02LevelBox_1.default);
            this.registerMapElement(TravelMapInterface_1.MapElementId.E02LevelGiftBox4, E02LevelBox_1.default);
            this.registerMapElement(TravelMapInterface_1.MapElementId.E02TopFinish, E02TopFinish_1.default);
            this.registerMapElement(TravelMapInterface_1.MapElementId.E03GiftBox1, E03GiftBox_1.default);
            this.registerMapElement(TravelMapInterface_1.MapElementId.E03GiftBox2, E03GiftBox_1.default);
            this.registerMapElement(TravelMapInterface_1.MapElementId.E03GiftBox3, E03GiftBox_1.default);
            this.registerMapElement(TravelMapInterface_1.MapElementId.E03Scarf, E03Scarf_1.default);
            this.registerMapElement(TravelMapInterface_1.MapElementId.E03Tree, E03Tree_1.default);
            this.registerMapElement(TravelMapInterface_1.MapElementId.E04GiftBox1, E04GiftBox_1.default);
            this.registerMapElement(TravelMapInterface_1.MapElementId.E04GiftBox2, E04GiftBox_1.default);
            this.registerMapElement(TravelMapInterface_1.MapElementId.E04GiftBox3, E04GiftBox_1.default);
            this.registerMapElement(TravelMapInterface_1.MapElementId.E04Panda1, E04Panda1_1.default);
            this.registerMapElement(TravelMapInterface_1.MapElementId.E04Panda2, E04Panda2_1.default);
            this.registerMapElement(TravelMapInterface_1.MapElementId.E05GiftBox1, E05GiftBox_1.default);
            this.registerMapElement(TravelMapInterface_1.MapElementId.E05GiftBox2, E05GiftBox_1.default);
            this.registerMapElement(TravelMapInterface_1.MapElementId.E05GiftBox3, E05GiftBox_1.default);
            this.registerMapElement(TravelMapInterface_1.MapElementId.E05Jeep, E05Jeep_1.default);
            this.registerMapElement(TravelMapInterface_1.MapElementId.E05Balloon, E05Balloon_1.default);
            this.registerMapElement(TravelMapInterface_1.MapElementId.E07Normal, E07Normal_1.default);
            this.registerMapElement(TravelMapInterface_1.MapElementId.E07GiftBox1, E07GiftBox_1.default);
            this.registerMapElement(TravelMapInterface_1.MapElementId.E07GiftBox2, E07GiftBox_1.default);
            this.registerMapElement(TravelMapInterface_1.MapElementId.E07GiftBox3, E07GiftBox_1.default);
            this.registerMapElement(TravelMapInterface_1.MapElementId.E07Dog, E07Dog_1.default);
            this.registerMapElement(TravelMapInterface_1.MapElementId.E07Ball, E07Ball_1.default);
            this.registerMapElement(TravelMapInterface_1.MapElementId.E07LevelGiftBox1, E07Normal_1.default);
            this.registerMapElement(TravelMapInterface_1.MapElementId.E07LevelGiftBox2, E07Normal_1.default);
            this.registerMapElement(TravelMapInterface_1.MapElementId.E07LevelGiftBox3, E07Normal_1.default);
            this.registerMapElement(TravelMapInterface_1.MapElementId.E07LevelGiftBox4, E07Normal_1.default);
        }
    };
    MapElementFactory.createCell = function (e) {
        var t = this.getMapElement(e);
        return t ? t.createCell(e.toString(), false) : null;
    };
    MapElementFactory.getSize = function (e) {
        var t = this.getMapElement(e);
        return t ? t.size : new cc.Size(0, 0);
    };
    MapElementFactory._mapElementMap = new Map();
    MapElementFactory._hasInit = false;
    return MapElementFactory;
}());
exports.MapElementFactory = MapElementFactory;

cc._RF.pop();