
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_skipAutoMerge/Scripts/SkipAutoMergeTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c3d025R4dJIq4uVnAgPBAKG', 'SkipAutoMergeTrait');
// subpackages/l_skipAutoMerge/Scripts/SkipAutoMergeTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.SkipMode = void 0;
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var SkipMode;
(function (SkipMode) {
    SkipMode[SkipMode["Immediate"] = 0] = "Immediate";
    SkipMode[SkipMode["ClickThenDelay"] = 1] = "ClickThenDelay";
    SkipMode[SkipMode["DelayThenClick"] = 2] = "DelayThenClick";
})(SkipMode = exports.SkipMode || (exports.SkipMode = {}));
var SkipAutoMergeTrait = /** @class */ (function (_super) {
    __extends(SkipAutoMergeTrait, _super);
    function SkipAutoMergeTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SkipAutoMergeTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        var e = void 0 !== this._traitData.mode ? this._traitData.mode : 0;
        this._config = {
            canSkip: void 0 === this._traitData.canSkip || this._traitData.canSkip,
            mode: e,
            delayTime: void 0 !== this._traitData.delayTime ? this._traitData.delayTime : 3
        };
        this._config.canSkip && this._config.mode;
    };
    SkipAutoMergeTrait.prototype.onStAutoMrgBhv_skipCfg = function (t, e) {
        e({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            returnVal: this._config
        });
    };
    SkipAutoMergeTrait.traitKey = "SkipAutoMerge";
    SkipAutoMergeTrait = __decorate([
        mj.trait,
        mj.class("SkipAutoMergeTrait")
    ], SkipAutoMergeTrait);
    return SkipAutoMergeTrait;
}(Trait_1.default));
exports.default = SkipAutoMergeTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3NraXBBdXRvTWVyZ2UvU2NyaXB0cy9Ta2lwQXV0b01lcmdlVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFDM0QsOEVBQXdGO0FBQ3hGLElBQVksUUFJWDtBQUpELFdBQVksUUFBUTtJQUNsQixpREFBYSxDQUFBO0lBQ2IsMkRBQWtCLENBQUE7SUFDbEIsMkRBQWtCLENBQUE7QUFDcEIsQ0FBQyxFQUpXLFFBQVEsR0FBUixnQkFBUSxLQUFSLGdCQUFRLFFBSW5CO0FBR0Q7SUFBZ0Qsc0NBQUs7SUFBckQ7O0lBbUJBLENBQUM7SUFqQkMsbUNBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLEtBQUssSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLE9BQU8sR0FBRztZQUNiLE9BQU8sRUFBRSxLQUFLLENBQUMsS0FBSyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU87WUFDdEUsSUFBSSxFQUFFLENBQUM7WUFDUCxTQUFTLEVBQUUsS0FBSyxDQUFDLEtBQUssSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2hGLENBQUM7UUFDRixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztJQUM1QyxDQUFDO0lBQ0QsbURBQXNCLEdBQXRCLFVBQXVCLENBQUMsRUFBRSxDQUFDO1FBQ3pCLENBQUMsQ0FBQztZQUNBLE9BQU8sRUFBRSxJQUFJO1lBQ2IsVUFBVSxFQUFFLHNDQUF1QixDQUFDLE1BQU07WUFDMUMsU0FBUyxFQUFFLElBQUksQ0FBQyxPQUFPO1NBQ3hCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFqQk0sMkJBQVEsR0FBRyxlQUFlLENBQUM7SUFEZixrQkFBa0I7UUFGdEMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDO09BQ1Ysa0JBQWtCLENBbUJ0QztJQUFELHlCQUFDO0NBbkJELEFBbUJDLENBbkIrQyxlQUFLLEdBbUJwRDtrQkFuQm9CLGtCQUFrQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgeyBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0TWFuYWdlcic7XG5leHBvcnQgZW51bSBTa2lwTW9kZSB7XG4gIEltbWVkaWF0ZSA9IDAsXG4gIENsaWNrVGhlbkRlbGF5ID0gMSxcbiAgRGVsYXlUaGVuQ2xpY2sgPSAyLFxufVxuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJTa2lwQXV0b01lcmdlVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNraXBBdXRvTWVyZ2VUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJTa2lwQXV0b01lcmdlXCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICB2YXIgZSA9IHZvaWQgMCAhPT0gdGhpcy5fdHJhaXREYXRhLm1vZGUgPyB0aGlzLl90cmFpdERhdGEubW9kZSA6IDA7XG4gICAgdGhpcy5fY29uZmlnID0ge1xuICAgICAgY2FuU2tpcDogdm9pZCAwID09PSB0aGlzLl90cmFpdERhdGEuY2FuU2tpcCB8fCB0aGlzLl90cmFpdERhdGEuY2FuU2tpcCxcbiAgICAgIG1vZGU6IGUsXG4gICAgICBkZWxheVRpbWU6IHZvaWQgMCAhPT0gdGhpcy5fdHJhaXREYXRhLmRlbGF5VGltZSA/IHRoaXMuX3RyYWl0RGF0YS5kZWxheVRpbWUgOiAzXG4gICAgfTtcbiAgICB0aGlzLl9jb25maWcuY2FuU2tpcCAmJiB0aGlzLl9jb25maWcubW9kZTtcbiAgfVxuICBvblN0QXV0b01yZ0Jodl9za2lwQ2ZnKHQsIGUpIHtcbiAgICBlKHtcbiAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICByZXR1cm5WYWw6IHRoaXMuX2NvbmZpZ1xuICAgIH0pO1xuICB9XG59Il19