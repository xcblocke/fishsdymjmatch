
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_zeroRemainFullCombo/Scripts/ZeroRemainFullComboTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c13e8N2+4hI9rg4tVE0Wd+v', 'ZeroRemainFullComboTrait');
// subpackages/l_zeroRemainFullCombo/Scripts/ZeroRemainFullComboTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BehaviorsEnum_1 = require("../../../Scripts/constant/BehaviorsEnum");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var ZeroRemainFullComboTrait = /** @class */ (function (_super) {
    __extends(ZeroRemainFullComboTrait, _super);
    function ZeroRemainFullComboTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._isZeroRemainFullCombo = false;
        return _this;
    }
    ZeroRemainFullComboTrait.prototype.onInitViewBhv_crtTls = function (t, o) {
        this._isZeroRemainFullCombo = false;
        o();
    };
    ZeroRemainFullComboTrait.prototype.onFullComboChk_canFullCb = function (t, o) {
        var e, r, i, n = t.ins, l = (null == n ? void 0 : n.context) || (null == n ? void 0 : n._context), u = null === (e = null == l ? void 0 : l.getTileMapObject) || void 0 === e ? void 0 : e.call(l), a = null !== (i = null === (r = null == u ? void 0 : u.getCurTilesCnt) || void 0 === r ? void 0 : r.call(u)) && void 0 !== i ? i : -1;
        this._isZeroRemainFullCombo = 0 === a;
        this._isZeroRemainFullCombo;
        o();
    };
    ZeroRemainFullComboTrait.prototype.onFullComboBhv_skipMerge = function (t, o) {
        if (this._isZeroRemainFullCombo) {
            o({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                returnVal: true
            });
        }
        else {
            o();
        }
    };
    ZeroRemainFullComboTrait.prototype.onClrNormHlp_bfrPushEnd = function (t, o) {
        var e;
        if (this._isZeroRemainFullCombo) {
            var r = t.ins, i = null == r ? void 0 : r._options;
            if (null === (e = null == i ? void 0 : i.fullComboEffectOptions) || void 0 === e ? void 0 : e.newEffectId) {
                i.insertEndEffectId = i.fullComboEffectOptions.newEffectId;
                i.insertEndEffectType = BehaviorsEnum_1.EInsertType.Serial;
            }
        }
        o();
    };
    ZeroRemainFullComboTrait.traitKey = "ZeroRemainFullCombo";
    ZeroRemainFullComboTrait = __decorate([
        mj.trait,
        mj.class("ZeroRemainFullComboTrait")
    ], ZeroRemainFullComboTrait);
    return ZeroRemainFullComboTrait;
}(Trait_1.default));
exports.default = ZeroRemainFullComboTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3plcm9SZW1haW5GdWxsQ29tYm8vU2NyaXB0cy9aZXJvUmVtYWluRnVsbENvbWJvVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlFQUFzRTtBQUN0RSxnRUFBMkQ7QUFDM0QsOEVBQXdGO0FBR3hGO0lBQXNELDRDQUFLO0lBQTNEO1FBQUEscUVBMENDO1FBekNDLDRCQUFzQixHQUFHLEtBQUssQ0FBQzs7SUF5Q2pDLENBQUM7SUF2Q0MsdURBQW9CLEdBQXBCLFVBQXFCLENBQUMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxLQUFLLENBQUM7UUFDcEMsQ0FBQyxFQUFFLENBQUM7SUFDTixDQUFDO0lBQ0QsMkRBQXdCLEdBQXhCLFVBQXlCLENBQUMsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxFQUNILENBQUMsRUFDRCxDQUFDLEVBQ0QsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQ1QsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQ3pFLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQy9GLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4SSxJQUFJLENBQUMsc0JBQXNCLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsc0JBQXNCLENBQUM7UUFDNUIsQ0FBQyxFQUFFLENBQUM7SUFDTixDQUFDO0lBQ0QsMkRBQXdCLEdBQXhCLFVBQXlCLENBQUMsRUFBRSxDQUFDO1FBQzNCLElBQUksSUFBSSxDQUFDLHNCQUFzQixFQUFFO1lBQy9CLENBQUMsQ0FBQztnQkFDQSxPQUFPLEVBQUUsSUFBSTtnQkFDYixVQUFVLEVBQUUsc0NBQXVCLENBQUMsTUFBTTtnQkFDMUMsU0FBUyxFQUFFLElBQUk7YUFDaEIsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLENBQUMsRUFBRSxDQUFDO1NBQ0w7SUFDSCxDQUFDO0lBQ0QsMERBQXVCLEdBQXZCLFVBQXdCLENBQUMsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxDQUFDO1FBQ04sSUFBSSxJQUFJLENBQUMsc0JBQXNCLEVBQUU7WUFDL0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFDWCxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7WUFDdEMsSUFBSSxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUU7Z0JBQ3pHLENBQUMsQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLENBQUMsc0JBQXNCLENBQUMsV0FBVyxDQUFDO2dCQUMzRCxDQUFDLENBQUMsbUJBQW1CLEdBQUcsMkJBQVcsQ0FBQyxNQUFNLENBQUM7YUFDNUM7U0FDRjtRQUNELENBQUMsRUFBRSxDQUFDO0lBQ04sQ0FBQztJQXZDTSxpQ0FBUSxHQUFHLHFCQUFxQixDQUFDO0lBRnJCLHdCQUF3QjtRQUY1QyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsMEJBQTBCLENBQUM7T0FDaEIsd0JBQXdCLENBMEM1QztJQUFELCtCQUFDO0NBMUNELEFBMENDLENBMUNxRCxlQUFLLEdBMEMxRDtrQkExQ29CLHdCQUF3QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVJbnNlcnRUeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb25zdGFudC9CZWhhdmlvcnNFbnVtJztcbmltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgeyBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0TWFuYWdlcic7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIlplcm9SZW1haW5GdWxsQ29tYm9UcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgWmVyb1JlbWFpbkZ1bGxDb21ib1RyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBfaXNaZXJvUmVtYWluRnVsbENvbWJvID0gZmFsc2U7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiWmVyb1JlbWFpbkZ1bGxDb21ib1wiO1xuICBvbkluaXRWaWV3Qmh2X2NydFRscyh0LCBvKSB7XG4gICAgdGhpcy5faXNaZXJvUmVtYWluRnVsbENvbWJvID0gZmFsc2U7XG4gICAgbygpO1xuICB9XG4gIG9uRnVsbENvbWJvQ2hrX2NhbkZ1bGxDYih0LCBvKSB7XG4gICAgdmFyIGUsXG4gICAgICByLFxuICAgICAgaSxcbiAgICAgIG4gPSB0LmlucyxcbiAgICAgIGwgPSAobnVsbCA9PSBuID8gdm9pZCAwIDogbi5jb250ZXh0KSB8fCAobnVsbCA9PSBuID8gdm9pZCAwIDogbi5fY29udGV4dCksXG4gICAgICB1ID0gbnVsbCA9PT0gKGUgPSBudWxsID09IGwgPyB2b2lkIDAgOiBsLmdldFRpbGVNYXBPYmplY3QpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUuY2FsbChsKSxcbiAgICAgIGEgPSBudWxsICE9PSAoaSA9IG51bGwgPT09IChyID0gbnVsbCA9PSB1ID8gdm9pZCAwIDogdS5nZXRDdXJUaWxlc0NudCkgfHwgdm9pZCAwID09PSByID8gdm9pZCAwIDogci5jYWxsKHUpKSAmJiB2b2lkIDAgIT09IGkgPyBpIDogLTE7XG4gICAgdGhpcy5faXNaZXJvUmVtYWluRnVsbENvbWJvID0gMCA9PT0gYTtcbiAgICB0aGlzLl9pc1plcm9SZW1haW5GdWxsQ29tYm87XG4gICAgbygpO1xuICB9XG4gIG9uRnVsbENvbWJvQmh2X3NraXBNZXJnZSh0LCBvKSB7XG4gICAgaWYgKHRoaXMuX2lzWmVyb1JlbWFpbkZ1bGxDb21ibykge1xuICAgICAgbyh7XG4gICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgcmV0dXJuVmFsOiB0cnVlXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbygpO1xuICAgIH1cbiAgfVxuICBvbkNsck5vcm1IbHBfYmZyUHVzaEVuZCh0LCBvKSB7XG4gICAgdmFyIGU7XG4gICAgaWYgKHRoaXMuX2lzWmVyb1JlbWFpbkZ1bGxDb21ibykge1xuICAgICAgdmFyIHIgPSB0LmlucyxcbiAgICAgICAgaSA9IG51bGwgPT0gciA/IHZvaWQgMCA6IHIuX29wdGlvbnM7XG4gICAgICBpZiAobnVsbCA9PT0gKGUgPSBudWxsID09IGkgPyB2b2lkIDAgOiBpLmZ1bGxDb21ib0VmZmVjdE9wdGlvbnMpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUubmV3RWZmZWN0SWQpIHtcbiAgICAgICAgaS5pbnNlcnRFbmRFZmZlY3RJZCA9IGkuZnVsbENvbWJvRWZmZWN0T3B0aW9ucy5uZXdFZmZlY3RJZDtcbiAgICAgICAgaS5pbnNlcnRFbmRFZmZlY3RUeXBlID0gRUluc2VydFR5cGUuU2VyaWFsO1xuICAgICAgfVxuICAgIH1cbiAgICBvKCk7XG4gIH1cbn0iXX0=