
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_noLockPreClear/Scripts/NoLockPreClearTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c746ddW7elAXbuSpMgajhMz', 'NoLockPreClearTrait');
// subpackages/l_noLockPreClear/Scripts/NoLockPreClearTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var NoLockPreClearTrait = /** @class */ (function (_super) {
    __extends(NoLockPreClearTrait, _super);
    function NoLockPreClearTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NoLockPreClearTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    NoLockPreClearTrait.prototype.isIgnoreLockEnabled = function () {
        return false;
    };
    NoLockPreClearTrait.prototype.onIptTchStart_Lock = function (t, r) {
        if (this.isIgnoreLockEnabled()) {
            r({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return
            });
        }
        else {
            r();
        }
    };
    NoLockPreClearTrait.prototype.onComboChk_canBreakCb = function (t, r) {
        if (this.isIgnoreLockEnabled()) {
            r({
                returnType: TraitManager_1.TraitCallbackReturnType.jump,
                returnVal: false
            });
        }
        else {
            r();
        }
    };
    NoLockPreClearTrait.traitKey = "NoLockPreClear";
    __decorate([
        mj.traitEvent("NoLockPreClr_isEnabled")
    ], NoLockPreClearTrait.prototype, "isIgnoreLockEnabled", null);
    NoLockPreClearTrait = __decorate([
        mj.trait,
        mj.class("NoLockPreClearTrait")
    ], NoLockPreClearTrait);
    return NoLockPreClearTrait;
}(Trait_1.default));
exports.default = NoLockPreClearTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX25vTG9ja1ByZUNsZWFyL1NjcmlwdHMvTm9Mb2NrUHJlQ2xlYXJUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELDhFQUF3RjtBQUd4RjtJQUFpRCx1Q0FBSztJQUF0RDs7SUE2QkEsQ0FBQztJQTNCQyxvQ0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRUQsaURBQW1CLEdBQW5CO1FBQ0UsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBQ0QsZ0RBQWtCLEdBQWxCLFVBQW1CLENBQUMsRUFBRSxDQUFDO1FBQ3JCLElBQUksSUFBSSxDQUFDLG1CQUFtQixFQUFFLEVBQUU7WUFDOUIsQ0FBQyxDQUFDO2dCQUNBLE9BQU8sRUFBRSxJQUFJO2dCQUNiLFVBQVUsRUFBRSxzQ0FBdUIsQ0FBQyxNQUFNO2FBQzNDLENBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxDQUFDLEVBQUUsQ0FBQztTQUNMO0lBQ0gsQ0FBQztJQUNELG1EQUFxQixHQUFyQixVQUFzQixDQUFDLEVBQUUsQ0FBQztRQUN4QixJQUFJLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxFQUFFO1lBQzlCLENBQUMsQ0FBQztnQkFDQSxVQUFVLEVBQUUsc0NBQXVCLENBQUMsSUFBSTtnQkFDeEMsU0FBUyxFQUFFLEtBQUs7YUFDakIsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLENBQUMsRUFBRSxDQUFDO1NBQ0w7SUFDSCxDQUFDO0lBM0JNLDRCQUFRLEdBQUcsZ0JBQWdCLENBQUM7SUFLbkM7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHdCQUF3QixDQUFDO2tFQUd2QztJQVJrQixtQkFBbUI7UUFGdkMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDO09BQ1gsbUJBQW1CLENBNkJ2QztJQUFELDBCQUFDO0NBN0JELEFBNkJDLENBN0JnRCxlQUFLLEdBNkJyRDtrQkE3Qm9CLG1CQUFtQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgeyBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0TWFuYWdlcic7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIk5vTG9ja1ByZUNsZWFyVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vTG9ja1ByZUNsZWFyVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiTm9Mb2NrUHJlQ2xlYXJcIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiTm9Mb2NrUHJlQ2xyX2lzRW5hYmxlZFwiKVxuICBpc0lnbm9yZUxvY2tFbmFibGVkKCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBvbklwdFRjaFN0YXJ0X0xvY2sodCwgcikge1xuICAgIGlmICh0aGlzLmlzSWdub3JlTG9ja0VuYWJsZWQoKSkge1xuICAgICAgcih7XG4gICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVyblxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHIoKTtcbiAgICB9XG4gIH1cbiAgb25Db21ib0Noa19jYW5CcmVha0NiKHQsIHIpIHtcbiAgICBpZiAodGhpcy5pc0lnbm9yZUxvY2tFbmFibGVkKCkpIHtcbiAgICAgIHIoe1xuICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5qdW1wLFxuICAgICAgICByZXR1cm5WYWw6IGZhbHNlXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcigpO1xuICAgIH1cbiAgfVxufSJdfQ==