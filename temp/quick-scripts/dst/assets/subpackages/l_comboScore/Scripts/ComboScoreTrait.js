
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_comboScore/Scripts/ComboScoreTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9106eCJVTxFMKBQp3E9wVa3', 'ComboScoreTrait');
// subpackages/l_comboScore/Scripts/ComboScoreTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var n;
(function (n) {
    n[n["Fixed"] = 0] = "Fixed";
    n[n["LevelMultiply"] = 1] = "LevelMultiply";
})(n || (n = {}));
var ComboScoreTrait = /** @class */ (function (_super) {
    __extends(ComboScoreTrait, _super);
    function ComboScoreTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ComboScoreTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        var r = void 0 !== this._traitData.mode ? this._traitData.mode : 0;
        this._config = {
            mode: 1 === r ? n.LevelMultiply : n.Fixed,
            value: void 0 !== this._traitData.value ? this._traitData.value : 10,
            upperLimit: void 0 !== this._traitData.upperLimit ? this._traitData.upperLimit : Number.MAX_SAFE_INTEGER
        };
    };
    ComboScoreTrait.prototype.onScoreMod_baseComboScr = function (t, r) {
        var e;
        if (this._config.mode === n.LevelMultiply) {
            var o = t.ins.context.getGameData().getLevelId();
            e = this._config.value * o;
        }
        else
            e = this._config.value;
        r({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            returnVal: e
        });
    };
    ComboScoreTrait.prototype.onScoreMod_maxComboScr = function (t, r) {
        r({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            returnVal: this._config.upperLimit > 0 ? this._config.upperLimit : -1
        });
    };
    ComboScoreTrait.traitKey = "ComboScore";
    ComboScoreTrait = __decorate([
        mj.trait,
        mj.class("ComboScoreTrait")
    ], ComboScoreTrait);
    return ComboScoreTrait;
}(Trait_1.default));
exports.default = ComboScoreTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2NvbWJvU2NvcmUvU2NyaXB0cy9Db21ib1Njb3JlVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUMzRCw4RUFBd0Y7QUFDeEYsSUFBSyxDQUdKO0FBSEQsV0FBSyxDQUFDO0lBQ0osMkJBQVMsQ0FBQTtJQUNULDJDQUFpQixDQUFBO0FBQ25CLENBQUMsRUFISSxDQUFDLEtBQUQsQ0FBQyxRQUdMO0FBR0Q7SUFBNkMsbUNBQUs7SUFBbEQ7O0lBOEJBLENBQUM7SUE1QkMsZ0NBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLEtBQUssSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLE9BQU8sR0FBRztZQUNiLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSztZQUN6QyxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ3BFLFVBQVUsRUFBRSxLQUFLLENBQUMsS0FBSyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0I7U0FDekcsQ0FBQztJQUNKLENBQUM7SUFDRCxpREFBdUIsR0FBdkIsVUFBd0IsQ0FBQyxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLENBQUM7UUFDTixJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxhQUFhLEVBQUU7WUFDekMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDakQsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztTQUM1Qjs7WUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDOUIsQ0FBQyxDQUFDO1lBQ0EsT0FBTyxFQUFFLElBQUk7WUFDYixVQUFVLEVBQUUsc0NBQXVCLENBQUMsTUFBTTtZQUMxQyxTQUFTLEVBQUUsQ0FBQztTQUNiLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxnREFBc0IsR0FBdEIsVUFBdUIsQ0FBQyxFQUFFLENBQUM7UUFDekIsQ0FBQyxDQUFDO1lBQ0EsT0FBTyxFQUFFLElBQUk7WUFDYixVQUFVLEVBQUUsc0NBQXVCLENBQUMsTUFBTTtZQUMxQyxTQUFTLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3RFLENBQUMsQ0FBQztJQUNMLENBQUM7SUE1Qk0sd0JBQVEsR0FBRyxZQUFZLENBQUM7SUFEWixlQUFlO1FBRm5DLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQztPQUNQLGVBQWUsQ0E4Qm5DO0lBQUQsc0JBQUM7Q0E5QkQsQUE4QkMsQ0E5QjRDLGVBQUssR0E4QmpEO2tCQTlCb0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgeyBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0TWFuYWdlcic7XG5lbnVtIG4ge1xuICBGaXhlZCA9IDAsXG4gIExldmVsTXVsdGlwbHkgPSAxLFxufVxuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJDb21ib1Njb3JlVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbWJvU2NvcmVUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJDb21ib1Njb3JlXCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICB2YXIgciA9IHZvaWQgMCAhPT0gdGhpcy5fdHJhaXREYXRhLm1vZGUgPyB0aGlzLl90cmFpdERhdGEubW9kZSA6IDA7XG4gICAgdGhpcy5fY29uZmlnID0ge1xuICAgICAgbW9kZTogMSA9PT0gciA/IG4uTGV2ZWxNdWx0aXBseSA6IG4uRml4ZWQsXG4gICAgICB2YWx1ZTogdm9pZCAwICE9PSB0aGlzLl90cmFpdERhdGEudmFsdWUgPyB0aGlzLl90cmFpdERhdGEudmFsdWUgOiAxMCxcbiAgICAgIHVwcGVyTGltaXQ6IHZvaWQgMCAhPT0gdGhpcy5fdHJhaXREYXRhLnVwcGVyTGltaXQgPyB0aGlzLl90cmFpdERhdGEudXBwZXJMaW1pdCA6IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSXG4gICAgfTtcbiAgfVxuICBvblNjb3JlTW9kX2Jhc2VDb21ib1Njcih0LCByKSB7XG4gICAgdmFyIGU7XG4gICAgaWYgKHRoaXMuX2NvbmZpZy5tb2RlID09PSBuLkxldmVsTXVsdGlwbHkpIHtcbiAgICAgIHZhciBvID0gdC5pbnMuY29udGV4dC5nZXRHYW1lRGF0YSgpLmdldExldmVsSWQoKTtcbiAgICAgIGUgPSB0aGlzLl9jb25maWcudmFsdWUgKiBvO1xuICAgIH0gZWxzZSBlID0gdGhpcy5fY29uZmlnLnZhbHVlO1xuICAgIHIoe1xuICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgIHJldHVyblZhbDogZVxuICAgIH0pO1xuICB9XG4gIG9uU2NvcmVNb2RfbWF4Q29tYm9TY3IodCwgcikge1xuICAgIHIoe1xuICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgIHJldHVyblZhbDogdGhpcy5fY29uZmlnLnVwcGVyTGltaXQgPiAwID8gdGhpcy5fY29uZmlnLnVwcGVyTGltaXQgOiAtMVxuICAgIH0pO1xuICB9XG59Il19