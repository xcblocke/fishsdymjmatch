
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_mainGameTypeTile2/Scripts/MainGameTypeTile2Trait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bd494/SYpFBOrJHLZIvFWky', 'MainGameTypeTile2Trait');
// subpackages/l_mainGameTypeTile2/Scripts/MainGameTypeTile2Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var MainGameTypeTile2Trait = /** @class */ (function (_super) {
    __extends(MainGameTypeTile2Trait, _super);
    function MainGameTypeTile2Trait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainGameTypeTile2Trait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    MainGameTypeTile2Trait.prototype.onUserModel_getMainGameType = function (t, e) {
        e({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            returnVal: GameTypeEnums_1.MjGameType.Tile2Normal
        });
    };
    MainGameTypeTile2Trait.traitKey = "MainGameTypeTile2";
    MainGameTypeTile2Trait = __decorate([
        mj.trait,
        mj.class("MainGameTypeTile2Trait")
    ], MainGameTypeTile2Trait);
    return MainGameTypeTile2Trait;
}(Trait_1.default));
exports.default = MainGameTypeTile2Trait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX21haW5HYW1lVHlwZVRpbGUyL1NjcmlwdHMvTWFpbkdhbWVUeXBlVGlsZTJUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELDhFQUF3RjtBQUN4Rix3RkFBb0Y7QUFHcEY7SUFBb0QsMENBQUs7SUFBekQ7O0lBWUEsQ0FBQztJQVZDLHVDQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDRCw0REFBMkIsR0FBM0IsVUFBNEIsQ0FBQyxFQUFFLENBQUM7UUFDOUIsQ0FBQyxDQUFDO1lBQ0EsT0FBTyxFQUFFLElBQUk7WUFDYixVQUFVLEVBQUUsc0NBQXVCLENBQUMsTUFBTTtZQUMxQyxTQUFTLEVBQUUsMEJBQVUsQ0FBQyxXQUFXO1NBQ2xDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFWTSwrQkFBUSxHQUFHLG1CQUFtQixDQUFDO0lBRG5CLHNCQUFzQjtRQUYxQyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsd0JBQXdCLENBQUM7T0FDZCxzQkFBc0IsQ0FZMUM7SUFBRCw2QkFBQztDQVpELEFBWUMsQ0FabUQsZUFBSyxHQVl4RDtrQkFab0Isc0JBQXNCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCB7IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXRNYW5hZ2VyJztcbmltcG9ydCB7IE1qR2FtZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJNYWluR2FtZVR5cGVUaWxlMlRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluR2FtZVR5cGVUaWxlMlRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIk1haW5HYW1lVHlwZVRpbGUyXCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgfVxuICBvblVzZXJNb2RlbF9nZXRNYWluR2FtZVR5cGUodCwgZSkge1xuICAgIGUoe1xuICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgIHJldHVyblZhbDogTWpHYW1lVHlwZS5UaWxlMk5vcm1hbFxuICAgIH0pO1xuICB9XG59Il19