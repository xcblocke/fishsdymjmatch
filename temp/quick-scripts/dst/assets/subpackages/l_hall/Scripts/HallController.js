
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_hall/Scripts/HallController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f8124tlrSFDtaz538xWUhG4', 'HallController');
// subpackages/l_hall/Scripts/HallController.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ViewController_1 = require("../../../Scripts/framework/controller/ViewController");
var HallView_1 = require("./HallView");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var DGameBtnClick_1 = require("../../../Scripts/dot/DGameBtnClick");
var HallController = /** @class */ (function (_super) {
    __extends(HallController, _super);
    function HallController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewClass = HallView_1.default;
        _this.viewMode = ViewController_1.viewMode.SCENE;
        _this.bundleName = "mainRes";
        return _this;
    }
    HallController.prototype.init = function (e) {
        this.initViewResource();
        _super.prototype.init.call(this, e);
    };
    HallController.prototype.initViewResource = function () {
        this.viewClass.prefabUrl = "prefabs/hall/Hall";
    };
    HallController.prototype.getMessageListeners = function () {
        return {};
    };
    HallController.prototype.initDependRes = function () { };
    HallController.prototype.viewDidLoad = function () {
        _super.prototype.viewDidLoad.call(this);
        this.viewDoAction("createButtons", this.args);
        mj.audioManager.playBGM(GameTypeEnums_1.EAudioID.Bgm, true);
        mj.audioManager.fadeBGMIn();
    };
    HallController.prototype.viewDidShow = function (e) {
        _super.prototype.viewDidShow.call(this, e);
        this.viewDoAction("updateUI", null != e ? e : this.args);
        DGameBtnClick_1.DotGameBtnClick.dotBgmOccupation(DGameBtnClick_1.EBgmOccupationClickType.Hall);
    };
    __decorate([
        mj.traitEvent("HallCtl_initVwRes")
    ], HallController.prototype, "initViewResource", null);
    __decorate([
        mj.traitEvent("HallCtl_initRes")
    ], HallController.prototype, "initDependRes", null);
    __decorate([
        mj.traitEvent("HallCtl_viewDidLoad")
    ], HallController.prototype, "viewDidLoad", null);
    __decorate([
        mj.traitEvent("HallCtl_viewDidShow")
    ], HallController.prototype, "viewDidShow", null);
    HallController = __decorate([
        mj.class("HallController")
    ], HallController);
    return HallController;
}(ViewController_1.default));
exports.default = HallController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2hhbGwvU2NyaXB0cy9IYWxsQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUZBQWdHO0FBQ2hHLHVDQUFrQztBQUNsQyx3RkFBa0Y7QUFDbEYsb0VBQThGO0FBRTlGO0lBQTRDLGtDQUFjO0lBQTFEO1FBQUEscUVBOEJDO1FBN0JDLGVBQVMsR0FBRyxrQkFBUSxDQUFDO1FBQ3JCLGNBQVEsR0FBRyx5QkFBUSxDQUFDLEtBQUssQ0FBQztRQUMxQixnQkFBVSxHQUFHLFNBQVMsQ0FBQzs7SUEyQnpCLENBQUM7SUExQkMsNkJBQUksR0FBSixVQUFLLENBQUM7UUFDSixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUN4QixpQkFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQseUNBQWdCLEdBQWhCO1FBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsbUJBQW1CLENBQUM7SUFDakQsQ0FBQztJQUNELDRDQUFtQixHQUFuQjtRQUNFLE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUVELHNDQUFhLEdBQWIsY0FBaUIsQ0FBQztJQUVsQixvQ0FBVyxHQUFYO1FBQ0UsaUJBQU0sV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsd0JBQVEsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDNUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRUQsb0NBQVcsR0FBWCxVQUFZLENBQUM7UUFDWCxpQkFBTSxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6RCwrQkFBZSxDQUFDLGdCQUFnQixDQUFDLHVDQUF1QixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFwQkQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLG1CQUFtQixDQUFDOzBEQUdsQztJQUtEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQzt1REFDZjtJQUVsQjtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMscUJBQXFCLENBQUM7cURBTXBDO0lBRUQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDO3FEQUtwQztJQTdCa0IsY0FBYztRQURsQyxFQUFFLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDO09BQ04sY0FBYyxDQThCbEM7SUFBRCxxQkFBQztDQTlCRCxBQThCQyxDQTlCMkMsd0JBQWMsR0E4QnpEO2tCQTlCb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWaWV3Q29udHJvbGxlciwgeyB2aWV3TW9kZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL2NvbnRyb2xsZXIvVmlld0NvbnRyb2xsZXInO1xuaW1wb3J0IEhhbGxWaWV3IGZyb20gJy4vSGFsbFZpZXcnO1xuaW1wb3J0IHsgRUF1ZGlvSUQgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuaW1wb3J0IHsgRG90R2FtZUJ0bkNsaWNrLCBFQmdtT2NjdXBhdGlvbkNsaWNrVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZG90L0RHYW1lQnRuQ2xpY2snO1xuQG1qLmNsYXNzKFwiSGFsbENvbnRyb2xsZXJcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhhbGxDb250cm9sbGVyIGV4dGVuZHMgVmlld0NvbnRyb2xsZXIge1xuICB2aWV3Q2xhc3MgPSBIYWxsVmlldztcbiAgdmlld01vZGUgPSB2aWV3TW9kZS5TQ0VORTtcbiAgYnVuZGxlTmFtZSA9IFwibWFpblJlc1wiO1xuICBpbml0KGUpIHtcbiAgICB0aGlzLmluaXRWaWV3UmVzb3VyY2UoKTtcbiAgICBzdXBlci5pbml0LmNhbGwodGhpcywgZSk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJIYWxsQ3RsX2luaXRWd1Jlc1wiKVxuICBpbml0Vmlld1Jlc291cmNlKCkge1xuICAgIHRoaXMudmlld0NsYXNzLnByZWZhYlVybCA9IFwicHJlZmFicy9oYWxsL0hhbGxcIjtcbiAgfVxuICBnZXRNZXNzYWdlTGlzdGVuZXJzKCkge1xuICAgIHJldHVybiB7fTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkhhbGxDdGxfaW5pdFJlc1wiKVxuICBpbml0RGVwZW5kUmVzKCkge31cbiAgQG1qLnRyYWl0RXZlbnQoXCJIYWxsQ3RsX3ZpZXdEaWRMb2FkXCIpXG4gIHZpZXdEaWRMb2FkKCkge1xuICAgIHN1cGVyLnZpZXdEaWRMb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy52aWV3RG9BY3Rpb24oXCJjcmVhdGVCdXR0b25zXCIsIHRoaXMuYXJncyk7XG4gICAgbWouYXVkaW9NYW5hZ2VyLnBsYXlCR00oRUF1ZGlvSUQuQmdtLCB0cnVlKTtcbiAgICBtai5hdWRpb01hbmFnZXIuZmFkZUJHTUluKCk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJIYWxsQ3RsX3ZpZXdEaWRTaG93XCIpXG4gIHZpZXdEaWRTaG93KGUpIHtcbiAgICBzdXBlci52aWV3RGlkU2hvdy5jYWxsKHRoaXMsIGUpO1xuICAgIHRoaXMudmlld0RvQWN0aW9uKFwidXBkYXRlVUlcIiwgbnVsbCAhPSBlID8gZSA6IHRoaXMuYXJncyk7XG4gICAgRG90R2FtZUJ0bkNsaWNrLmRvdEJnbU9jY3VwYXRpb24oRUJnbU9jY3VwYXRpb25DbGlja1R5cGUuSGFsbCk7XG4gIH1cbn0iXX0=