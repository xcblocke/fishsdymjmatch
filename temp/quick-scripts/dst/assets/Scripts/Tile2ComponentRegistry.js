
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Tile2ComponentRegistry.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '30980eWI5BEka519vSuVJZL', 'Tile2ComponentRegistry');
// Scripts/Tile2ComponentRegistry.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2ComponentRegistry = void 0;
var TileTypeEnum_1 = require("./simulator/constant/TileTypeEnum");
var RollCardComponent_1 = require("./RollCardComponent");
var Tile2BombCardComponent_1 = require("./Tile2BombCardComponent");
var Tile2ColorCardComponent_1 = require("./Tile2ColorCardComponent");
var Tile2DaxiaoCardComponent_1 = require("./Tile2DaxiaoCardComponent");
var Tile2DuoxiaoCardComponent_1 = require("./Tile2DuoxiaoCardComponent");
var Tile2DarkenComponent_1 = require("./Tile2DarkenComponent");
var Tile2HintComponent_1 = require("./Tile2HintComponent");
var Tile2RankCardComponent_1 = require("./Tile2RankCardComponent");
var Tile2SlotBarAniComponent_1 = require("./Tile2SlotBarAniComponent");
var Tile2YogaCardComponent_1 = require("./Tile2YogaCardComponent");
var TileNodeComponent_1 = require("./TileNodeComponent");
var Tile2ComponentRegistry = /** @class */ (function () {
    function Tile2ComponentRegistry() {
    }
    Tile2ComponentRegistry.registerAll = function () {
        if (!Tile2ComponentRegistry._registered) {
            Tile2ComponentRegistry._registered = true;
            TileNodeComponent_1.TileNodeComponent.register(TileTypeEnum_1.ETileComponent.Tile2ComponentRollCard, function () {
                return new RollCardComponent_1.RollCardComponent();
            });
            TileNodeComponent_1.TileNodeComponent.register(TileTypeEnum_1.ETileComponent.Tile2ComponentSlotBarAni, function () {
                return new Tile2SlotBarAniComponent_1.Tile2SlotBarAniComponent();
            });
            TileNodeComponent_1.TileNodeComponent.register(TileTypeEnum_1.ETileComponent.Tile2ComponentHint, function () {
                return new Tile2HintComponent_1.Tile2HintComponent();
            });
            TileNodeComponent_1.TileNodeComponent.register(TileTypeEnum_1.ETileComponent.Tile2ComponentLockDarken, function () {
                return new Tile2DarkenComponent_1.Tile2DarkenComponent();
            });
            TileNodeComponent_1.TileNodeComponent.register(TileTypeEnum_1.ETileComponent.Tile2ComponentBomb, function () {
                return new Tile2BombCardComponent_1.Tile2BombCardComponent();
            });
            TileNodeComponent_1.TileNodeComponent.register(TileTypeEnum_1.ETileComponent.Tile2ComponentColor, function () {
                return new Tile2ColorCardComponent_1.Tile2ColorCardComponent();
            });
            TileNodeComponent_1.TileNodeComponent.register(TileTypeEnum_1.ETileComponent.Tile2ComponentRank, function () {
                return new Tile2RankCardComponent_1.Tile2RankCardComponent();
            });
            TileNodeComponent_1.TileNodeComponent.register(TileTypeEnum_1.ETileComponent.Tile2ComponentYoga, function () {
                return new Tile2YogaCardComponent_1.Tile2YogaCardComponent();
            });
            TileNodeComponent_1.TileNodeComponent.register(TileTypeEnum_1.ETileComponent.Tile2ComponentDaxiao, function () {
                return new Tile2DaxiaoCardComponent_1.Tile2DaxiaoCardComponent();
            });
            TileNodeComponent_1.TileNodeComponent.register(TileTypeEnum_1.ETileComponent.Tile2ComponentDuoxiao, function () {
                return new Tile2DuoxiaoCardComponent_1.Tile2DuoxiaoCardComponent();
            });
        }
    };
    Tile2ComponentRegistry._registered = false;
    return Tile2ComponentRegistry;
}());
exports.Tile2ComponentRegistry = Tile2ComponentRegistry;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1RpbGUyQ29tcG9uZW50UmVnaXN0cnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxrRUFBbUU7QUFDbkUseURBQXdEO0FBQ3hELG1FQUFrRTtBQUNsRSxxRUFBb0U7QUFDcEUsdUVBQXNFO0FBQ3RFLHlFQUF3RTtBQUN4RSwrREFBOEQ7QUFDOUQsMkRBQTBEO0FBQzFELG1FQUFrRTtBQUNsRSx1RUFBc0U7QUFDdEUsbUVBQWtFO0FBQ2xFLHlEQUF3RDtBQUN4RDtJQUFBO0lBcUNBLENBQUM7SUFuQ1Esa0NBQVcsR0FBbEI7UUFDRSxJQUFJLENBQUMsc0JBQXNCLENBQUMsV0FBVyxFQUFFO1lBQ3ZDLHNCQUFzQixDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7WUFDMUMscUNBQWlCLENBQUMsUUFBUSxDQUFDLDZCQUFjLENBQUMsc0JBQXNCLEVBQUU7Z0JBQ2hFLE9BQU8sSUFBSSxxQ0FBaUIsRUFBRSxDQUFDO1lBQ2pDLENBQUMsQ0FBQyxDQUFDO1lBQ0gscUNBQWlCLENBQUMsUUFBUSxDQUFDLDZCQUFjLENBQUMsd0JBQXdCLEVBQUU7Z0JBQ2xFLE9BQU8sSUFBSSxtREFBd0IsRUFBRSxDQUFDO1lBQ3hDLENBQUMsQ0FBQyxDQUFDO1lBQ0gscUNBQWlCLENBQUMsUUFBUSxDQUFDLDZCQUFjLENBQUMsa0JBQWtCLEVBQUU7Z0JBQzVELE9BQU8sSUFBSSx1Q0FBa0IsRUFBRSxDQUFDO1lBQ2xDLENBQUMsQ0FBQyxDQUFDO1lBQ0gscUNBQWlCLENBQUMsUUFBUSxDQUFDLDZCQUFjLENBQUMsd0JBQXdCLEVBQUU7Z0JBQ2xFLE9BQU8sSUFBSSwyQ0FBb0IsRUFBRSxDQUFDO1lBQ3BDLENBQUMsQ0FBQyxDQUFDO1lBQ0gscUNBQWlCLENBQUMsUUFBUSxDQUFDLDZCQUFjLENBQUMsa0JBQWtCLEVBQUU7Z0JBQzVELE9BQU8sSUFBSSwrQ0FBc0IsRUFBRSxDQUFDO1lBQ3RDLENBQUMsQ0FBQyxDQUFDO1lBQ0gscUNBQWlCLENBQUMsUUFBUSxDQUFDLDZCQUFjLENBQUMsbUJBQW1CLEVBQUU7Z0JBQzdELE9BQU8sSUFBSSxpREFBdUIsRUFBRSxDQUFDO1lBQ3ZDLENBQUMsQ0FBQyxDQUFDO1lBQ0gscUNBQWlCLENBQUMsUUFBUSxDQUFDLDZCQUFjLENBQUMsa0JBQWtCLEVBQUU7Z0JBQzVELE9BQU8sSUFBSSwrQ0FBc0IsRUFBRSxDQUFDO1lBQ3RDLENBQUMsQ0FBQyxDQUFDO1lBQ0gscUNBQWlCLENBQUMsUUFBUSxDQUFDLDZCQUFjLENBQUMsa0JBQWtCLEVBQUU7Z0JBQzVELE9BQU8sSUFBSSwrQ0FBc0IsRUFBRSxDQUFDO1lBQ3RDLENBQUMsQ0FBQyxDQUFDO1lBQ0gscUNBQWlCLENBQUMsUUFBUSxDQUFDLDZCQUFjLENBQUMsb0JBQW9CLEVBQUU7Z0JBQzlELE9BQU8sSUFBSSxtREFBd0IsRUFBRSxDQUFDO1lBQ3hDLENBQUMsQ0FBQyxDQUFDO1lBQ0gscUNBQWlCLENBQUMsUUFBUSxDQUFDLDZCQUFjLENBQUMscUJBQXFCLEVBQUU7Z0JBQy9ELE9BQU8sSUFBSSxxREFBeUIsRUFBRSxDQUFDO1lBQ3pDLENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBbkNNLGtDQUFXLEdBQUcsS0FBSyxDQUFDO0lBb0M3Qiw2QkFBQztDQXJDRCxBQXFDQyxJQUFBO0FBckNZLHdEQUFzQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVUaWxlQ29tcG9uZW50IH0gZnJvbSAnLi9zaW11bGF0b3IvY29uc3RhbnQvVGlsZVR5cGVFbnVtJztcbmltcG9ydCB7IFJvbGxDYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9Sb2xsQ2FyZENvbXBvbmVudCc7XG5pbXBvcnQgeyBUaWxlMkJvbWJDYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9UaWxlMkJvbWJDYXJkQ29tcG9uZW50JztcbmltcG9ydCB7IFRpbGUyQ29sb3JDYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9UaWxlMkNvbG9yQ2FyZENvbXBvbmVudCc7XG5pbXBvcnQgeyBUaWxlMkRheGlhb0NhcmRDb21wb25lbnQgfSBmcm9tICcuL1RpbGUyRGF4aWFvQ2FyZENvbXBvbmVudCc7XG5pbXBvcnQgeyBUaWxlMkR1b3hpYW9DYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9UaWxlMkR1b3hpYW9DYXJkQ29tcG9uZW50JztcbmltcG9ydCB7IFRpbGUyRGFya2VuQ29tcG9uZW50IH0gZnJvbSAnLi9UaWxlMkRhcmtlbkNvbXBvbmVudCc7XG5pbXBvcnQgeyBUaWxlMkhpbnRDb21wb25lbnQgfSBmcm9tICcuL1RpbGUySGludENvbXBvbmVudCc7XG5pbXBvcnQgeyBUaWxlMlJhbmtDYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9UaWxlMlJhbmtDYXJkQ29tcG9uZW50JztcbmltcG9ydCB7IFRpbGUyU2xvdEJhckFuaUNvbXBvbmVudCB9IGZyb20gJy4vVGlsZTJTbG90QmFyQW5pQ29tcG9uZW50JztcbmltcG9ydCB7IFRpbGUyWW9nYUNhcmRDb21wb25lbnQgfSBmcm9tICcuL1RpbGUyWW9nYUNhcmRDb21wb25lbnQnO1xuaW1wb3J0IHsgVGlsZU5vZGVDb21wb25lbnQgfSBmcm9tICcuL1RpbGVOb2RlQ29tcG9uZW50JztcbmV4cG9ydCBjbGFzcyBUaWxlMkNvbXBvbmVudFJlZ2lzdHJ5IHtcbiAgc3RhdGljIF9yZWdpc3RlcmVkID0gZmFsc2U7XG4gIHN0YXRpYyByZWdpc3RlckFsbCgpIHtcbiAgICBpZiAoIVRpbGUyQ29tcG9uZW50UmVnaXN0cnkuX3JlZ2lzdGVyZWQpIHtcbiAgICAgIFRpbGUyQ29tcG9uZW50UmVnaXN0cnkuX3JlZ2lzdGVyZWQgPSB0cnVlO1xuICAgICAgVGlsZU5vZGVDb21wb25lbnQucmVnaXN0ZXIoRVRpbGVDb21wb25lbnQuVGlsZTJDb21wb25lbnRSb2xsQ2FyZCwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbmV3IFJvbGxDYXJkQ29tcG9uZW50KCk7XG4gICAgICB9KTtcbiAgICAgIFRpbGVOb2RlQ29tcG9uZW50LnJlZ2lzdGVyKEVUaWxlQ29tcG9uZW50LlRpbGUyQ29tcG9uZW50U2xvdEJhckFuaSwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbmV3IFRpbGUyU2xvdEJhckFuaUNvbXBvbmVudCgpO1xuICAgICAgfSk7XG4gICAgICBUaWxlTm9kZUNvbXBvbmVudC5yZWdpc3RlcihFVGlsZUNvbXBvbmVudC5UaWxlMkNvbXBvbmVudEhpbnQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUaWxlMkhpbnRDb21wb25lbnQoKTtcbiAgICAgIH0pO1xuICAgICAgVGlsZU5vZGVDb21wb25lbnQucmVnaXN0ZXIoRVRpbGVDb21wb25lbnQuVGlsZTJDb21wb25lbnRMb2NrRGFya2VuLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBuZXcgVGlsZTJEYXJrZW5Db21wb25lbnQoKTtcbiAgICAgIH0pO1xuICAgICAgVGlsZU5vZGVDb21wb25lbnQucmVnaXN0ZXIoRVRpbGVDb21wb25lbnQuVGlsZTJDb21wb25lbnRCb21iLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBuZXcgVGlsZTJCb21iQ2FyZENvbXBvbmVudCgpO1xuICAgICAgfSk7XG4gICAgICBUaWxlTm9kZUNvbXBvbmVudC5yZWdpc3RlcihFVGlsZUNvbXBvbmVudC5UaWxlMkNvbXBvbmVudENvbG9yLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBuZXcgVGlsZTJDb2xvckNhcmRDb21wb25lbnQoKTtcbiAgICAgIH0pO1xuICAgICAgVGlsZU5vZGVDb21wb25lbnQucmVnaXN0ZXIoRVRpbGVDb21wb25lbnQuVGlsZTJDb21wb25lbnRSYW5rLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBuZXcgVGlsZTJSYW5rQ2FyZENvbXBvbmVudCgpO1xuICAgICAgfSk7XG4gICAgICBUaWxlTm9kZUNvbXBvbmVudC5yZWdpc3RlcihFVGlsZUNvbXBvbmVudC5UaWxlMkNvbXBvbmVudFlvZ2EsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUaWxlMllvZ2FDYXJkQ29tcG9uZW50KCk7XG4gICAgICB9KTtcbiAgICAgIFRpbGVOb2RlQ29tcG9uZW50LnJlZ2lzdGVyKEVUaWxlQ29tcG9uZW50LlRpbGUyQ29tcG9uZW50RGF4aWFvLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBuZXcgVGlsZTJEYXhpYW9DYXJkQ29tcG9uZW50KCk7XG4gICAgICB9KTtcbiAgICAgIFRpbGVOb2RlQ29tcG9uZW50LnJlZ2lzdGVyKEVUaWxlQ29tcG9uZW50LlRpbGUyQ29tcG9uZW50RHVveGlhbywgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbmV3IFRpbGUyRHVveGlhb0NhcmRDb21wb25lbnQoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufSJdfQ==