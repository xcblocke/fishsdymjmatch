
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_changeOpenTips/Scripts/ChangeOpenTipsTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '519e92/yuRCjam3RLjvb0a9', 'ChangeOpenTipsTrait');
// subpackages/l_changeOpenTips/Scripts/ChangeOpenTipsTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var I18NStrings_1 = require("../../../Scripts/framework/data/I18NStrings");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var ChangeOpenTipsTrait = /** @class */ (function (_super) {
    __extends(ChangeOpenTipsTrait, _super);
    function ChangeOpenTipsTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChangeOpenTipsTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    ChangeOpenTipsTrait.prototype.onHallRankBLockTt_getLv = function (t, r) {
        var e = t.args[0];
        r({
            returnType: TraitManager_1.TraitCallbackReturnType.jump,
            returnVal: e + 1
        });
    };
    ChangeOpenTipsTrait.prototype.onHallRankBLockTt_getOTips = function (t, r) {
        var e = t.args[0], n = I18NStrings_1.default.get("MahjongTiles_ProHint_2", "Unlock at Level {0}").replace("{0}", String(e + 1));
        r({
            returnType: TraitManager_1.TraitCallbackReturnType.jump,
            returnVal: n
        });
    };
    ChangeOpenTipsTrait.prototype.onTaskTt_getLv = function (t, r) {
        var e = t.args[0];
        r({
            returnType: TraitManager_1.TraitCallbackReturnType.jump,
            returnVal: e + 1
        });
    };
    ChangeOpenTipsTrait.prototype.onTaskTt_getOTips = function (t, r) {
        var e = t.args[0], n = I18NStrings_1.default.get("MahjongTiles_ProHint_2", "Unlock at Level {0}").replace("{0}", String(e + 1));
        r({
            returnType: TraitManager_1.TraitCallbackReturnType.jump,
            returnVal: n
        });
    };
    ChangeOpenTipsTrait.traitKey = "ChangeOpenTips";
    ChangeOpenTipsTrait = __decorate([
        mj.trait,
        mj.class("ChangeOpenTipsTrait")
    ], ChangeOpenTipsTrait);
    return ChangeOpenTipsTrait;
}(Trait_1.default));
exports.default = ChangeOpenTipsTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2NoYW5nZU9wZW5UaXBzL1NjcmlwdHMvQ2hhbmdlT3BlblRpcHNUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkVBQXNFO0FBQ3RFLGdFQUEyRDtBQUMzRCw4RUFBd0Y7QUFHeEY7SUFBaUQsdUNBQUs7SUFBdEQ7O0lBbUNBLENBQUM7SUFqQ0Msb0NBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNELHFEQUF1QixHQUF2QixVQUF3QixDQUFDLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xCLENBQUMsQ0FBQztZQUNBLFVBQVUsRUFBRSxzQ0FBdUIsQ0FBQyxJQUFJO1lBQ3hDLFNBQVMsRUFBRSxDQUFDLEdBQUcsQ0FBQztTQUNqQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0Qsd0RBQTBCLEdBQTFCLFVBQTJCLENBQUMsRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ2YsQ0FBQyxHQUFHLHFCQUFXLENBQUMsR0FBRyxDQUFDLHdCQUF3QixFQUFFLHFCQUFxQixDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckcsQ0FBQyxDQUFDO1lBQ0EsVUFBVSxFQUFFLHNDQUF1QixDQUFDLElBQUk7WUFDeEMsU0FBUyxFQUFFLENBQUM7U0FDYixDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsNENBQWMsR0FBZCxVQUFlLENBQUMsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEIsQ0FBQyxDQUFDO1lBQ0EsVUFBVSxFQUFFLHNDQUF1QixDQUFDLElBQUk7WUFDeEMsU0FBUyxFQUFFLENBQUMsR0FBRyxDQUFDO1NBQ2pCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCwrQ0FBaUIsR0FBakIsVUFBa0IsQ0FBQyxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFDZixDQUFDLEdBQUcscUJBQVcsQ0FBQyxHQUFHLENBQUMsd0JBQXdCLEVBQUUscUJBQXFCLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyRyxDQUFDLENBQUM7WUFDQSxVQUFVLEVBQUUsc0NBQXVCLENBQUMsSUFBSTtZQUN4QyxTQUFTLEVBQUUsQ0FBQztTQUNiLENBQUMsQ0FBQztJQUNMLENBQUM7SUFqQ00sNEJBQVEsR0FBRyxnQkFBZ0IsQ0FBQztJQURoQixtQkFBbUI7UUFGdkMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDO09BQ1gsbUJBQW1CLENBbUN2QztJQUFELDBCQUFDO0NBbkNELEFBbUNDLENBbkNnRCxlQUFLLEdBbUNyRDtrQkFuQ29CLG1CQUFtQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJMThOU3RyaW5ncyBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay9kYXRhL0kxOE5TdHJpbmdzJztcbmltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgeyBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0TWFuYWdlcic7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIkNoYW5nZU9wZW5UaXBzVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYW5nZU9wZW5UaXBzVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiQ2hhbmdlT3BlblRpcHNcIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICB9XG4gIG9uSGFsbFJhbmtCTG9ja1R0X2dldEx2KHQsIHIpIHtcbiAgICB2YXIgZSA9IHQuYXJnc1swXTtcbiAgICByKHtcbiAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLmp1bXAsXG4gICAgICByZXR1cm5WYWw6IGUgKyAxXG4gICAgfSk7XG4gIH1cbiAgb25IYWxsUmFua0JMb2NrVHRfZ2V0T1RpcHModCwgcikge1xuICAgIHZhciBlID0gdC5hcmdzWzBdLFxuICAgICAgbiA9IEkxOE5TdHJpbmdzLmdldChcIk1haGpvbmdUaWxlc19Qcm9IaW50XzJcIiwgXCJVbmxvY2sgYXQgTGV2ZWwgezB9XCIpLnJlcGxhY2UoXCJ7MH1cIiwgU3RyaW5nKGUgKyAxKSk7XG4gICAgcih7XG4gICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5qdW1wLFxuICAgICAgcmV0dXJuVmFsOiBuXG4gICAgfSk7XG4gIH1cbiAgb25UYXNrVHRfZ2V0THYodCwgcikge1xuICAgIHZhciBlID0gdC5hcmdzWzBdO1xuICAgIHIoe1xuICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUuanVtcCxcbiAgICAgIHJldHVyblZhbDogZSArIDFcbiAgICB9KTtcbiAgfVxuICBvblRhc2tUdF9nZXRPVGlwcyh0LCByKSB7XG4gICAgdmFyIGUgPSB0LmFyZ3NbMF0sXG4gICAgICBuID0gSTE4TlN0cmluZ3MuZ2V0KFwiTWFoam9uZ1RpbGVzX1Byb0hpbnRfMlwiLCBcIlVubG9jayBhdCBMZXZlbCB7MH1cIikucmVwbGFjZShcInswfVwiLCBTdHJpbmcoZSArIDEpKTtcbiAgICByKHtcbiAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLmp1bXAsXG4gICAgICByZXR1cm5WYWw6IG5cbiAgICB9KTtcbiAgfVxufSJdfQ==