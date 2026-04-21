
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_showSlot3Combo/Scripts/ShowSlot3ComboTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7d4ccFIHDZJ9aKg+tJTnZqM', 'ShowSlot3ComboTrait');
// subpackages/l_showSlot3Combo/Scripts/ShowSlot3ComboTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var ShowSlot3ComboTrait = /** @class */ (function (_super) {
    __extends(ShowSlot3ComboTrait, _super);
    function ShowSlot3ComboTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.COMBO_STAGE_MAP = {
            5: 1,
            10: 1,
            15: 2,
            20: 2,
            25: 2,
            30: 3
        };
        return _this;
    }
    ShowSlot3ComboTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    ShowSlot3ComboTrait.prototype.onT2CmbChk_showTopEff = function (t, r) {
        r({
            returnVal: false,
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return
        });
    };
    ShowSlot3ComboTrait.prototype.onT2ScreenEdgeBhv_isSlot4 = function (t, r) {
        r({
            returnVal: false,
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return
        });
    };
    ShowSlot3ComboTrait.prototype.onT2SlotAdvBhv_isShow4 = function (t, r) {
        r({
            returnVal: false,
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return
        });
    };
    ShowSlot3ComboTrait.prototype.onIptT2InitSlotBar_isSlot3 = function (t, r) {
        r({
            returnVal: true,
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return
        });
    };
    ShowSlot3ComboTrait.prototype.onT2ScreenEdgeBhv_getStage = function (t, r) {
        var e = t.args[0] || 0;
        if (e % 5 != 0)
            r();
        else {
            var o = this.COMBO_STAGE_MAP[e];
            e > 30 && (o = 4);
            r({
                returnVal: o,
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return
            });
        }
    };
    ShowSlot3ComboTrait.prototype.onT2ScreenEEffIt_getSpPh = function (t, r) {
        r({
            returnVal: "spine/motivationalWords/gameplay_combo10",
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return
        });
    };
    ShowSlot3ComboTrait.traitKey = "ShowSlot3Combo";
    ShowSlot3ComboTrait = __decorate([
        mj.trait,
        mj.class("ShowSlot3ComboTrait")
    ], ShowSlot3ComboTrait);
    return ShowSlot3ComboTrait;
}(Trait_1.default));
exports.default = ShowSlot3ComboTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3Nob3dTbG90M0NvbWJvL1NjcmlwdHMvU2hvd1Nsb3QzQ29tYm9UcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELDhFQUF3RjtBQUd4RjtJQUFpRCx1Q0FBSztJQUF0RDtRQUFBLHFFQTREQztRQTNEQyxxQkFBZSxHQUFHO1lBQ2hCLENBQUMsRUFBRSxDQUFDO1lBQ0osRUFBRSxFQUFFLENBQUM7WUFDTCxFQUFFLEVBQUUsQ0FBQztZQUNMLEVBQUUsRUFBRSxDQUFDO1lBQ0wsRUFBRSxFQUFFLENBQUM7WUFDTCxFQUFFLEVBQUUsQ0FBQztTQUNOLENBQUM7O0lBb0RKLENBQUM7SUFsREMsb0NBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNELG1EQUFxQixHQUFyQixVQUFzQixDQUFDLEVBQUUsQ0FBQztRQUN4QixDQUFDLENBQUM7WUFDQSxTQUFTLEVBQUUsS0FBSztZQUNoQixPQUFPLEVBQUUsSUFBSTtZQUNiLFVBQVUsRUFBRSxzQ0FBdUIsQ0FBQyxNQUFNO1NBQzNDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCx1REFBeUIsR0FBekIsVUFBMEIsQ0FBQyxFQUFFLENBQUM7UUFDNUIsQ0FBQyxDQUFDO1lBQ0EsU0FBUyxFQUFFLEtBQUs7WUFDaEIsT0FBTyxFQUFFLElBQUk7WUFDYixVQUFVLEVBQUUsc0NBQXVCLENBQUMsTUFBTTtTQUMzQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0Qsb0RBQXNCLEdBQXRCLFVBQXVCLENBQUMsRUFBRSxDQUFDO1FBQ3pCLENBQUMsQ0FBQztZQUNBLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLE9BQU8sRUFBRSxJQUFJO1lBQ2IsVUFBVSxFQUFFLHNDQUF1QixDQUFDLE1BQU07U0FDM0MsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELHdEQUEwQixHQUExQixVQUEyQixDQUFDLEVBQUUsQ0FBQztRQUM3QixDQUFDLENBQUM7WUFDQSxTQUFTLEVBQUUsSUFBSTtZQUNmLE9BQU8sRUFBRSxJQUFJO1lBQ2IsVUFBVSxFQUFFLHNDQUF1QixDQUFDLE1BQU07U0FDM0MsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELHdEQUEwQixHQUExQixVQUEyQixDQUFDLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQztZQUFFLENBQUMsRUFBRSxDQUFDO2FBQUs7WUFDdkIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoQyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLENBQUMsQ0FBQztnQkFDQSxTQUFTLEVBQUUsQ0FBQztnQkFDWixPQUFPLEVBQUUsSUFBSTtnQkFDYixVQUFVLEVBQUUsc0NBQXVCLENBQUMsTUFBTTthQUMzQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUFDRCxzREFBd0IsR0FBeEIsVUFBeUIsQ0FBQyxFQUFFLENBQUM7UUFDM0IsQ0FBQyxDQUFDO1lBQ0EsU0FBUyxFQUFFLDBDQUEwQztZQUNyRCxPQUFPLEVBQUUsSUFBSTtZQUNiLFVBQVUsRUFBRSxzQ0FBdUIsQ0FBQyxNQUFNO1NBQzNDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFsRE0sNEJBQVEsR0FBRyxnQkFBZ0IsQ0FBQztJQVRoQixtQkFBbUI7UUFGdkMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDO09BQ1gsbUJBQW1CLENBNER2QztJQUFELDBCQUFDO0NBNURELEFBNERDLENBNURnRCxlQUFLLEdBNERyRDtrQkE1RG9CLG1CQUFtQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgeyBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0TWFuYWdlcic7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIlNob3dTbG90M0NvbWJvVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNob3dTbG90M0NvbWJvVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIENPTUJPX1NUQUdFX01BUCA9IHtcbiAgICA1OiAxLFxuICAgIDEwOiAxLFxuICAgIDE1OiAyLFxuICAgIDIwOiAyLFxuICAgIDI1OiAyLFxuICAgIDMwOiAzXG4gIH07XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiU2hvd1Nsb3QzQ29tYm9cIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICB9XG4gIG9uVDJDbWJDaGtfc2hvd1RvcEVmZih0LCByKSB7XG4gICAgcih7XG4gICAgICByZXR1cm5WYWw6IGZhbHNlLFxuICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVyblxuICAgIH0pO1xuICB9XG4gIG9uVDJTY3JlZW5FZGdlQmh2X2lzU2xvdDQodCwgcikge1xuICAgIHIoe1xuICAgICAgcmV0dXJuVmFsOiBmYWxzZSxcbiAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm5cbiAgICB9KTtcbiAgfVxuICBvblQyU2xvdEFkdkJodl9pc1Nob3c0KHQsIHIpIHtcbiAgICByKHtcbiAgICAgIHJldHVyblZhbDogZmFsc2UsXG4gICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuXG4gICAgfSk7XG4gIH1cbiAgb25JcHRUMkluaXRTbG90QmFyX2lzU2xvdDModCwgcikge1xuICAgIHIoe1xuICAgICAgcmV0dXJuVmFsOiB0cnVlLFxuICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVyblxuICAgIH0pO1xuICB9XG4gIG9uVDJTY3JlZW5FZGdlQmh2X2dldFN0YWdlKHQsIHIpIHtcbiAgICB2YXIgZSA9IHQuYXJnc1swXSB8fCAwO1xuICAgIGlmIChlICUgNSAhPSAwKSByKCk7ZWxzZSB7XG4gICAgICB2YXIgbyA9IHRoaXMuQ09NQk9fU1RBR0VfTUFQW2VdO1xuICAgICAgZSA+IDMwICYmIChvID0gNCk7XG4gICAgICByKHtcbiAgICAgICAgcmV0dXJuVmFsOiBvLFxuICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm5cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBvblQyU2NyZWVuRUVmZkl0X2dldFNwUGgodCwgcikge1xuICAgIHIoe1xuICAgICAgcmV0dXJuVmFsOiBcInNwaW5lL21vdGl2YXRpb25hbFdvcmRzL2dhbWVwbGF5X2NvbWJvMTBcIixcbiAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm5cbiAgICB9KTtcbiAgfVxufSJdfQ==