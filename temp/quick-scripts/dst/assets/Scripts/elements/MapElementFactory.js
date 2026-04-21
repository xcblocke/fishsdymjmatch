
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/elements/MapElementFactory.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2VsZW1lbnRzL01hcEVsZW1lbnRGYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNENBQXVDO0FBQ3ZDLHdDQUFtQztBQUNuQywwQ0FBcUM7QUFDckMsNENBQXVDO0FBQ3ZDLGdEQUEyQztBQUMzQyxvQ0FBK0I7QUFDL0Isb0NBQStCO0FBQy9CLG9DQUErQjtBQUMvQixnREFBMkM7QUFDM0MsZ0RBQTJDO0FBQzNDLGdEQUEyQztBQUMzQyw4Q0FBeUM7QUFDekMsOENBQXlDO0FBQ3pDLDhDQUF5QztBQUN6Qyw4Q0FBeUM7QUFDekMsMENBQXFDO0FBQ3JDLGdEQUEyQztBQUMzQyw0Q0FBdUM7QUFDdkMsd0NBQW1DO0FBQ25DLHNDQUFpQztBQUNqQyw0Q0FBdUM7QUFDdkMsMENBQXFDO0FBQ3JDLDBDQUFxQztBQUNyQyw0Q0FBdUM7QUFDdkMsNENBQXVDO0FBQ3ZDLHNDQUFpQztBQUNqQyxzQ0FBaUM7QUFDakMsb0NBQStCO0FBQy9CLDRDQUF1QztBQUN2Qyx5Q0FBb0M7QUFDcEMsNERBQXFEO0FBQ3JEO0lBQUE7SUE2RUEsQ0FBQztJQTFFUSwrQkFBYSxHQUFwQixVQUFxQixDQUFDO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUNNLG9DQUFrQixHQUF6QixVQUEwQixDQUFDLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUNNLHVCQUFLLEdBQVo7UUFDRSxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQ3hCLENBQUM7SUFDTSxzQkFBSSxHQUFYO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFD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QkFBTyxHQUFkLFVBQWUsQ0FBQztRQUNkLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUIsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQTNFTSxnQ0FBYyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7SUFDM0IsMEJBQVEsR0FBRyxLQUFLLENBQUM7SUEyRTFCLHdCQUFDO0NBN0VELEFBNkVDLElBQUE7QUE3RVksOENBQWlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEUwMUdpZnRCb3ggZnJvbSAnLi4vRTAxR2lmdEJveCc7XG5pbXBvcnQgRTAxSG91c2UgZnJvbSAnLi4vRTAxSG91c2UnO1xuaW1wb3J0IEUwMU5vcm1hbCBmcm9tICcuLi9FMDFOb3JtYWwnO1xuaW1wb3J0IEUwMVNub3dtYW4gZnJvbSAnLi4vRTAxU25vd21hbic7XG5pbXBvcnQgRTAxVG9wRmluaXNoIGZyb20gJy4uL0UwMVRvcEZpbmlzaCc7XG5pbXBvcnQgRTAyQmcxIGZyb20gJy4uL0UwMkJnMSc7XG5pbXBvcnQgRTAyQmcyIGZyb20gJy4uL0UwMkJnMic7XG5pbXBvcnQgRTAyQmczIGZyb20gJy4uL0UwMkJnMyc7XG5pbXBvcnQgRTAyQnVpbGRpbmcxIGZyb20gJy4uL0UwMkJ1aWxkaW5nMSc7XG5pbXBvcnQgRTAyQnVpbGRpbmcyIGZyb20gJy4uL0UwMkJ1aWxkaW5nMic7XG5pbXBvcnQgRTAyQnVpbGRpbmczIGZyb20gJy4uL0UwMkJ1aWxkaW5nMyc7XG5pbXBvcnQgRTAyR2lmdEJveDEgZnJvbSAnLi4vRTAyR2lmdEJveDEnO1xuaW1wb3J0IEUwMkdpZnRCb3gyIGZyb20gJy4uL0UwMkdpZnRCb3gyJztcbmltcG9ydCBFMDJHaWZ0Qm94MyBmcm9tICcuLi9FMDJHaWZ0Qm94Myc7XG5pbXBvcnQgRTAyTGV2ZWxCb3ggZnJvbSAnLi4vRTAyTGV2ZWxCb3gnO1xuaW1wb3J0IEUwMk5vcm1hbCBmcm9tICcuLi9FMDJOb3JtYWwnO1xuaW1wb3J0IEUwMlRvcEZpbmlzaCBmcm9tICcuLi9FMDJUb3BGaW5pc2gnO1xuaW1wb3J0IEUwM0dpZnRCb3ggZnJvbSAnLi4vRTAzR2lmdEJveCc7XG5pbXBvcnQgRTAzU2NhcmYgZnJvbSAnLi4vRTAzU2NhcmYnO1xuaW1wb3J0IEUwM1RyZWUgZnJvbSAnLi4vRTAzVHJlZSc7XG5pbXBvcnQgRTA0R2lmdEJveCBmcm9tICcuLi9FMDRHaWZ0Qm94JztcbmltcG9ydCBFMDRQYW5kYTEgZnJvbSAnLi4vRTA0UGFuZGExJztcbmltcG9ydCBFMDRQYW5kYTIgZnJvbSAnLi4vRTA0UGFuZGEyJztcbmltcG9ydCBFMDVCYWxsb29uIGZyb20gJy4uL0UwNUJhbGxvb24nO1xuaW1wb3J0IEUwNUdpZnRCb3ggZnJvbSAnLi4vRTA1R2lmdEJveCc7XG5pbXBvcnQgRTA1SmVlcCBmcm9tICcuLi9FMDVKZWVwJztcbmltcG9ydCBFMDdCYWxsIGZyb20gJy4uL0UwN0JhbGwnO1xuaW1wb3J0IEUwN0RvZyBmcm9tICcuLi9FMDdEb2cnO1xuaW1wb3J0IEUwN0dpZnRCb3ggZnJvbSAnLi4vRTA3R2lmdEJveCc7XG5pbXBvcnQgRTA3Tm9ybWFsIGZyb20gJy4vRTA3Tm9ybWFsJztcbmltcG9ydCB7IE1hcEVsZW1lbnRJZCB9IGZyb20gJy4uL1RyYXZlbE1hcEludGVyZmFjZSc7XG5leHBvcnQgY2xhc3MgTWFwRWxlbWVudEZhY3Rvcnkge1xuICBzdGF0aWMgX21hcEVsZW1lbnRNYXAgPSBuZXcgTWFwKCk7XG4gIHN0YXRpYyBfaGFzSW5pdCA9IGZhbHNlO1xuICBzdGF0aWMgZ2V0TWFwRWxlbWVudChlKSB7XG4gICAgcmV0dXJuIHRoaXMuX21hcEVsZW1lbnRNYXAuZ2V0KGUpO1xuICB9XG4gIHN0YXRpYyByZWdpc3Rlck1hcEVsZW1lbnQoZSwgdCkge1xuICAgIHRoaXMuX21hcEVsZW1lbnRNYXAuc2V0KGUsIHQpO1xuICB9XG4gIHN0YXRpYyBjbGVhcigpIHtcbiAgICB0aGlzLl9tYXBFbGVtZW50TWFwLmNsZWFyKCk7XG4gICAgdGhpcy5faGFzSW5pdCA9IGZhbHNlO1xuICB9XG4gIHN0YXRpYyBpbml0KCkge1xuICAgIGlmICghdGhpcy5faGFzSW5pdCkge1xuICAgICAgdGhpcy5faGFzSW5pdCA9IHRydWU7XG4gICAgICB0aGlzLnJlZ2lzdGVyTWFwRWxlbWVudChNYXBFbGVtZW50SWQuRTAxR2lmdEJveDEsIEUwMUdpZnRCb3gpO1xuICAgICAgdGhpcy5yZWdpc3Rlck1hcEVsZW1lbnQoTWFwRWxlbWVudElkLkUwMUdpZnRCb3gyLCBFMDFHaWZ0Qm94KTtcbiAgICAgIHRoaXMucmVnaXN0ZXJNYXBFbGVtZW50KE1hcEVsZW1lbnRJZC5FMDFHaWZ0Qm94MywgRTAxR2lmdEJveCk7XG4gICAgICB0aGlzLnJlZ2lzdGVyTWFwRWxlbWVudChNYXBFbGVtZW50SWQuRTAxU25vd21hbiwgRTAxU25vd21hbik7XG4gICAgICB0aGlzLnJlZ2lzdGVyTWFwRWxlbWVudChNYXBFbGVtZW50SWQuRTAxSG91c2UsIEUwMUhvdXNlKTtcbiAgICAgIHRoaXMucmVnaXN0ZXJNYXBFbGVtZW50KE1hcEVsZW1lbnRJZC5FMDFOb3JtYWwsIEUwMU5vcm1hbCk7XG4gICAgICB0aGlzLnJlZ2lzdGVyTWFwRWxlbWVudChNYXBFbGVtZW50SWQuRTAxVG9wRmluaXNoLCBFMDFUb3BGaW5pc2gpO1xuICAgICAgdGhpcy5yZWdpc3Rlck1hcEVsZW1lbnQoTWFwRWxlbWVudElkLkUwMUxldmVsR2lmdEJveDEsIEUwMU5vcm1hbCk7XG4gICAgICB0aGlzLnJlZ2lzdGVyTWFwRWxlbWVudChNYXBFbGVtZW50SWQuRTAxTGV2ZWxHaWZ0Qm94MiwgRTAxTm9ybWFsKTtcbiAgICAgIHRoaXMucmVnaXN0ZXJNYXBFbGVtZW50KE1hcEVsZW1lbnRJZC5FMDFMZXZlbEdpZnRCb3gzLCBFMDFOb3JtYWwpO1xuICAgICAgdGhpcy5yZWdpc3Rlck1hcEVsZW1lbnQoTWFwRWxlbWVudElkLkUwMUxldmVsR2lmdEJveDQsIEUwMU5vcm1hbCk7XG4gICAgICB0aGlzLnJlZ2lzdGVyTWFwRWxlbWVudChNYXBFbGVtZW50SWQuRTAyTm9ybWFsLCBFMDJOb3JtYWwpO1xuICAgICAgdGhpcy5yZWdpc3Rlck1hcEVsZW1lbnQoTWFwRWxlbWVudElkLkUwMkJnMSwgRTAyQmcxKTtcbiAgICAgIHRoaXMucmVnaXN0ZXJNYXBFbGVtZW50KE1hcEVsZW1lbnRJZC5FMDJCZzIsIEUwMkJnMik7XG4gICAgICB0aGlzLnJlZ2lzdGVyTWFwRWxlbWVudChNYXBFbGVtZW50SWQuRTAyQmczLCBFMDJCZzMpO1xuICAgICAgdGhpcy5yZWdpc3Rlck1hcEVsZW1lbnQoTWFwRWxlbWVudElkLkUwMkJ1aWxkaW5nMSwgRTAyQnVpbGRpbmcxKTtcbiAgICAgIHRoaXMucmVnaXN0ZXJNYXBFbGVtZW50KE1hcEVsZW1lbnRJZC5FMDJCdWlsZGluZzIsIEUwMkJ1aWxkaW5nMik7XG4gICAgICB0aGlzLnJlZ2lzdGVyTWFwRWxlbWVudChNYXBFbGVtZW50SWQuRTAyQnVpbGRpbmczLCBFMDJCdWlsZGluZzMpO1xuICAgICAgdGhpcy5yZWdpc3Rlck1hcEVsZW1lbnQoTWFwRWxlbWVudElkLkUwMkdpZnRCb3gxLCBFMDJHaWZ0Qm94MSk7XG4gICAgICB0aGlzLnJlZ2lzdGVyTWFwRWxlbWVudChNYXBFbGVtZW50SWQuRTAyR2lmdEJveDIsIEUwMkdpZnRCb3gyKTtcbiAgICAgIHRoaXMucmVnaXN0ZXJNYXBFbGVtZW50KE1hcEVsZW1lbnRJZC5FMDJHaWZ0Qm94MywgRTAyR2lmdEJveDMpO1xuICAgICAgdGhpcy5yZWdpc3Rlck1hcEVsZW1lbnQoTWFwRWxlbWVudElkLkUwMkxldmVsR2lmdEJveDEsIEUwMkxldmVsQm94KTtcbiAgICAgIHRoaXMucmVnaXN0ZXJNYXBFbGVtZW50KE1hcEVsZW1lbnRJZC5FMDJMZXZlbEdpZnRCb3gyLCBFMDJMZXZlbEJveCk7XG4gICAgICB0aGlzLnJlZ2lzdGVyTWFwRWxlbWVudChNYXBFbGVtZW50SWQuRTAyTGV2ZWxHaWZ0Qm94MywgRTAyTGV2ZWxCb3gpO1xuICAgICAgdGhpcy5yZWdpc3Rlck1hcEVsZW1lbnQoTWFwRWxlbWVudElkLkUwMkxldmVsR2lmdEJveDQsIEUwMkxldmVsQm94KTtcbiAgICAgIHRoaXMucmVnaXN0ZXJNYXBFbGVtZW50KE1hcEVsZW1lbnRJZC5FMDJUb3BGaW5pc2gsIEUwMlRvcEZpbmlzaCk7XG4gICAgICB0aGlzLnJlZ2lzdGVyTWFwRWxlbWVudChNYXBFbGVtZW50SWQuRTAzR2lmdEJveDEsIEUwM0dpZnRCb3gpO1xuICAgICAgdGhpcy5yZWdpc3Rlck1hcEVsZW1lbnQoTWFwRWxlbWVudElkLkUwM0dpZnRCb3gyLCBFMDNHaWZ0Qm94KTtcbiAgICAgIHRoaXMucmVnaXN0ZXJNYXBFbGVtZW50KE1hcEVsZW1lbnRJZC5FMDNHaWZ0Qm94MywgRTAzR2lmdEJveCk7XG4gICAgICB0aGlzLnJlZ2lzdGVyTWFwRWxlbWVudChNYXBFbGVtZW50SWQuRTAzU2NhcmYsIEUwM1NjYXJmKTtcbiAgICAgIHRoaXMucmVnaXN0ZXJNYXBFbGVtZW50KE1hcEVsZW1lbnRJZC5FMDNUcmVlLCBFMDNUcmVlKTtcbiAgICAgIHRoaXMucmVnaXN0ZXJNYXBFbGVtZW50KE1hcEVsZW1lbnRJZC5FMDRHaWZ0Qm94MSwgRTA0R2lmdEJveCk7XG4gICAgICB0aGlzLnJlZ2lzdGVyTWFwRWxlbWVudChNYXBFbGVtZW50SWQuRTA0R2lmdEJveDIsIEUwNEdpZnRCb3gpO1xuICAgICAgdGhpcy5yZWdpc3Rlck1hcEVsZW1lbnQoTWFwRWxlbWVudElkLkUwNEdpZnRCb3gzLCBFMDRHaWZ0Qm94KTtcbiAgICAgIHRoaXMucmVnaXN0ZXJNYXBFbGVtZW50KE1hcEVsZW1lbnRJZC5FMDRQYW5kYTEsIEUwNFBhbmRhMSk7XG4gICAgICB0aGlzLnJlZ2lzdGVyTWFwRWxlbWVudChNYXBFbGVtZW50SWQuRTA0UGFuZGEyLCBFMDRQYW5kYTIpO1xuICAgICAgdGhpcy5yZWdpc3Rlck1hcEVsZW1lbnQoTWFwRWxlbWVudElkLkUwNUdpZnRCb3gxLCBFMDVHaWZ0Qm94KTtcbiAgICAgIHRoaXMucmVnaXN0ZXJNYXBFbGVtZW50KE1hcEVsZW1lbnRJZC5FMDVHaWZ0Qm94MiwgRTA1R2lmdEJveCk7XG4gICAgICB0aGlzLnJlZ2lzdGVyTWFwRWxlbWVudChNYXBFbGVtZW50SWQuRTA1R2lmdEJveDMsIEUwNUdpZnRCb3gpO1xuICAgICAgdGhpcy5yZWdpc3Rlck1hcEVsZW1lbnQoTWFwRWxlbWVudElkLkUwNUplZXAsIEUwNUplZXApO1xuICAgICAgdGhpcy5yZWdpc3Rlck1hcEVsZW1lbnQoTWFwRWxlbWVudElkLkUwNUJhbGxvb24sIEUwNUJhbGxvb24pO1xuICAgICAgdGhpcy5yZWdpc3Rlck1hcEVsZW1lbnQoTWFwRWxlbWVudElkLkUwN05vcm1hbCwgRTA3Tm9ybWFsKTtcbiAgICAgIHRoaXMucmVnaXN0ZXJNYXBFbGVtZW50KE1hcEVsZW1lbnRJZC5FMDdHaWZ0Qm94MSwgRTA3R2lmdEJveCk7XG4gICAgICB0aGlzLnJlZ2lzdGVyTWFwRWxlbWVudChNYXBFbGVtZW50SWQuRTA3R2lmdEJveDIsIEUwN0dpZnRCb3gpO1xuICAgICAgdGhpcy5yZWdpc3Rlck1hcEVsZW1lbnQoTWFwRWxlbWVudElkLkUwN0dpZnRCb3gzLCBFMDdHaWZ0Qm94KTtcbiAgICAgIHRoaXMucmVnaXN0ZXJNYXBFbGVtZW50KE1hcEVsZW1lbnRJZC5FMDdEb2csIEUwN0RvZyk7XG4gICAgICB0aGlzLnJlZ2lzdGVyTWFwRWxlbWVudChNYXBFbGVtZW50SWQuRTA3QmFsbCwgRTA3QmFsbCk7XG4gICAgICB0aGlzLnJlZ2lzdGVyTWFwRWxlbWVudChNYXBFbGVtZW50SWQuRTA3TGV2ZWxHaWZ0Qm94MSwgRTA3Tm9ybWFsKTtcbiAgICAgIHRoaXMucmVnaXN0ZXJNYXBFbGVtZW50KE1hcEVsZW1lbnRJZC5FMDdMZXZlbEdpZnRCb3gyLCBFMDdOb3JtYWwpO1xuICAgICAgdGhpcy5yZWdpc3Rlck1hcEVsZW1lbnQoTWFwRWxlbWVudElkLkUwN0xldmVsR2lmdEJveDMsIEUwN05vcm1hbCk7XG4gICAgICB0aGlzLnJlZ2lzdGVyTWFwRWxlbWVudChNYXBFbGVtZW50SWQuRTA3TGV2ZWxHaWZ0Qm94NCwgRTA3Tm9ybWFsKTtcbiAgICB9XG4gIH1cbiAgc3RhdGljIGNyZWF0ZUNlbGwoZSkge1xuICAgIHZhciB0ID0gdGhpcy5nZXRNYXBFbGVtZW50KGUpO1xuICAgIHJldHVybiB0ID8gdC5jcmVhdGVDZWxsKGUudG9TdHJpbmcoKSwgZmFsc2UpIDogbnVsbDtcbiAgfVxuICBzdGF0aWMgZ2V0U2l6ZShlKSB7XG4gICAgdmFyIHQgPSB0aGlzLmdldE1hcEVsZW1lbnQoZSk7XG4gICAgcmV0dXJuIHQgPyB0LnNpemUgOiBuZXcgY2MuU2l6ZSgwLCAwKTtcbiAgfVxufSJdfQ==