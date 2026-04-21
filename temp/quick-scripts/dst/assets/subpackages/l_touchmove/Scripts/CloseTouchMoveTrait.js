
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_touchmove/Scripts/CloseTouchMoveTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0c37duV6wtBJZTHSjEbFfBP', 'CloseTouchMoveTrait');
// subpackages/l_touchmove/Scripts/CloseTouchMoveTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var CloseTouchMoveTrait = /** @class */ (function (_super) {
    __extends(CloseTouchMoveTrait, _super);
    function CloseTouchMoveTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CloseTouchMoveTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    CloseTouchMoveTrait.prototype.isIgnoreTile2 = function () {
        return false;
    };
    CloseTouchMoveTrait.prototype.onGtc_isOpenTouchMove = function (t, e) {
        if (t.ins.getGameType() == GameTypeEnums_1.MjGameType.Tile2Normal && this.isIgnoreTile2()) {
            e();
        }
        else {
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.jump,
                returnVal: false
            });
        }
    };
    CloseTouchMoveTrait.prototype.onIptBTchEnd_checkIsSame = function (t, e) {
        e({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.jump,
            returnVal: true
        });
    };
    CloseTouchMoveTrait.traitKey = "CloseTouchMove";
    __decorate([
        mj.traitEvent("Cltm_IsIgnoreTile2")
    ], CloseTouchMoveTrait.prototype, "isIgnoreTile2", null);
    CloseTouchMoveTrait = __decorate([
        mj.trait,
        mj.class("CloseTouchMoveTrait")
    ], CloseTouchMoveTrait);
    return CloseTouchMoveTrait;
}(Trait_1.default));
exports.default = CloseTouchMoveTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3RvdWNobW92ZS9TY3JpcHRzL0Nsb3NlVG91Y2hNb3ZlVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdGQUFvRjtBQUNwRixnRUFBMkQ7QUFDM0QsOEVBQXdGO0FBR3hGO0lBQWlELHVDQUFLO0lBQXREOztJQTJCQSxDQUFDO0lBekJDLG9DQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFRCwyQ0FBYSxHQUFiO1FBQ0UsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBQ0QsbURBQXFCLEdBQXJCLFVBQXNCLENBQUMsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsSUFBSSwwQkFBVSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUU7WUFDekUsQ0FBQyxFQUFFLENBQUM7U0FDTDthQUFNO1lBQ0wsQ0FBQyxDQUFDO2dCQUNBLE9BQU8sRUFBRSxJQUFJO2dCQUNiLFVBQVUsRUFBRSxzQ0FBdUIsQ0FBQyxJQUFJO2dCQUN4QyxTQUFTLEVBQUUsS0FBSzthQUNqQixDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUFDRCxzREFBd0IsR0FBeEIsVUFBeUIsQ0FBQyxFQUFFLENBQUM7UUFDM0IsQ0FBQyxDQUFDO1lBQ0EsT0FBTyxFQUFFLElBQUk7WUFDYixVQUFVLEVBQUUsc0NBQXVCLENBQUMsSUFBSTtZQUN4QyxTQUFTLEVBQUUsSUFBSTtTQUNoQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBekJNLDRCQUFRLEdBQUcsZ0JBQWdCLENBQUM7SUFLbkM7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLG9CQUFvQixDQUFDOzREQUduQztJQVJrQixtQkFBbUI7UUFGdkMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDO09BQ1gsbUJBQW1CLENBMkJ2QztJQUFELDBCQUFDO0NBM0JELEFBMkJDLENBM0JnRCxlQUFLLEdBMkJyRDtrQkEzQm9CLG1CQUFtQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1qR2FtZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCB7IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXRNYW5hZ2VyJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiQ2xvc2VUb3VjaE1vdmVUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2xvc2VUb3VjaE1vdmVUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJDbG9zZVRvdWNoTW92ZVwiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJDbHRtX0lzSWdub3JlVGlsZTJcIilcbiAgaXNJZ25vcmVUaWxlMigpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgb25HdGNfaXNPcGVuVG91Y2hNb3ZlKHQsIGUpIHtcbiAgICBpZiAodC5pbnMuZ2V0R2FtZVR5cGUoKSA9PSBNakdhbWVUeXBlLlRpbGUyTm9ybWFsICYmIHRoaXMuaXNJZ25vcmVUaWxlMigpKSB7XG4gICAgICBlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGUoe1xuICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5qdW1wLFxuICAgICAgICByZXR1cm5WYWw6IGZhbHNlXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgb25JcHRCVGNoRW5kX2NoZWNrSXNTYW1lKHQsIGUpIHtcbiAgICBlKHtcbiAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5qdW1wLFxuICAgICAgcmV0dXJuVmFsOiB0cnVlXG4gICAgfSk7XG4gIH1cbn0iXX0=