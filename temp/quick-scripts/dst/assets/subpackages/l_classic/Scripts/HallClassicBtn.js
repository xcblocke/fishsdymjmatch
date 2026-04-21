
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_classic/Scripts/HallClassicBtn.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4d74e8q5iZHpJDLenRpx0UD', 'HallClassicBtn');
// subpackages/l_classic/Scripts/HallClassicBtn.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseUI_1 = require("../../../Scripts/framework/ui/BaseUI");
var ControllerManager_1 = require("../../../Scripts/framework/manager/ControllerManager");
var DGameBtnClick_1 = require("../../../Scripts/dot/DGameBtnClick");
var EventDefine_1 = require("../../../Scripts/base/event/EventDefine");
var HallClassicBtn = /** @class */ (function (_super) {
    __extends(HallClassicBtn, _super);
    function HallClassicBtn() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.levelLabel = null;
        _this.levelId = 0;
        _this._bgBtnNode = null;
        return _this;
    }
    Object.defineProperty(HallClassicBtn.prototype, "BgBtnNode", {
        get: function () {
            return this._bgBtnNode;
        },
        enumerable: false,
        configurable: true
    });
    HallClassicBtn.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.OnButtonClick(this.node, this.onBtnClick.bind(this));
    };
    HallClassicBtn.prototype.getMessageListeners = function () {
        var _t = {};
        _t[EventDefine_1.EVT_MSG_HALL_FORCE_UPDATE] = this.onForceUpdate.bind(this);
        return _t;
    };
    HallClassicBtn.prototype.updateUI = function () { };
    HallClassicBtn.prototype.onForceUpdate = function () { };
    HallClassicBtn.prototype.onBtnClick = function () {
        ControllerManager_1.default.getInstance().pushViewByController("ClassicController");
        DGameBtnClick_1.DotGameBtnClick.dotHall(DGameBtnClick_1.EHomePageClickType.Classic, this.levelId);
    };
    HallClassicBtn.prefabUrl = "prefabs/hall/HallClassicBtn";
    HallClassicBtn.bundleName = "mainRes";
    __decorate([
        mj.component("BgBtn/Label", cc.Label)
    ], HallClassicBtn.prototype, "levelLabel", void 0);
    __decorate([
        mj.node("BgBtn")
    ], HallClassicBtn.prototype, "_bgBtnNode", void 0);
    __decorate([
        mj.traitEvent("ClassicBtn_updateUI")
    ], HallClassicBtn.prototype, "updateUI", null);
    __decorate([
        mj.traitEvent("ClassicBtn_forceUpdate")
    ], HallClassicBtn.prototype, "onForceUpdate", null);
    HallClassicBtn = __decorate([
        mj.class
    ], HallClassicBtn);
    return HallClassicBtn;
}(BaseUI_1.default));
exports.default = HallClassicBtn;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2NsYXNzaWMvU2NyaXB0cy9IYWxsQ2xhc3NpY0J0bi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0RBQTBEO0FBQzFELDBGQUFxRjtBQUNyRixvRUFBeUY7QUFDekYsdUVBQW9GO0FBRXBGO0lBQTRDLGtDQUFNO0lBQWxEO1FBQUEscUVBNEJDO1FBMUJDLGdCQUFVLEdBQWtCLElBQUksQ0FBQztRQUNqQyxhQUFPLEdBQUcsQ0FBQyxDQUFDO1FBRVosZ0JBQVUsR0FBWSxJQUFJLENBQUM7O0lBdUI3QixDQUFDO0lBcEJDLHNCQUFJLHFDQUFTO2FBQWI7WUFDRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDekIsQ0FBQzs7O09BQUE7SUFDRCwrQkFBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBQ0QsNENBQW1CLEdBQW5CO1FBQ0UsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ1osRUFBRSxDQUFDLHVDQUF5QixDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUQsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBRUQsaUNBQVEsR0FBUixjQUFZLENBQUM7SUFFYixzQ0FBYSxHQUFiLGNBQWlCLENBQUM7SUFDbEIsbUNBQVUsR0FBVjtRQUNFLDJCQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDLG9CQUFvQixDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDMUUsK0JBQWUsQ0FBQyxPQUFPLENBQUMsa0NBQWtCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBckJNLHdCQUFTLEdBQUcsNkJBQTZCLENBQUM7SUFDMUMseUJBQVUsR0FBRyxTQUFTLENBQUM7SUFMOUI7UUFEQyxFQUFFLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDO3NEQUNMO0lBR2pDO1FBREMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7c0RBQ1U7SUFnQjNCO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQztrREFDeEI7SUFFYjtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsd0JBQXdCLENBQUM7dURBQ3RCO0lBdkJDLGNBQWM7UUFEbEMsRUFBRSxDQUFDLEtBQUs7T0FDWSxjQUFjLENBNEJsQztJQUFELHFCQUFDO0NBNUJELEFBNEJDLENBNUIyQyxnQkFBTSxHQTRCakQ7a0JBNUJvQixjQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2VVSSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay91aS9CYXNlVUknO1xuaW1wb3J0IENvbnRyb2xsZXJNYW5hZ2VyIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL21hbmFnZXIvQ29udHJvbGxlck1hbmFnZXInO1xuaW1wb3J0IHsgRG90R2FtZUJ0bkNsaWNrLCBFSG9tZVBhZ2VDbGlja1R5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2RvdC9ER2FtZUJ0bkNsaWNrJztcbmltcG9ydCB7IEVWVF9NU0dfSEFMTF9GT1JDRV9VUERBVEUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2Jhc2UvZXZlbnQvRXZlbnREZWZpbmUnO1xuQG1qLmNsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIYWxsQ2xhc3NpY0J0biBleHRlbmRzIEJhc2VVSSB7XG4gIEBtai5jb21wb25lbnQoXCJCZ0J0bi9MYWJlbFwiLCBjYy5MYWJlbClcbiAgbGV2ZWxMYWJlbDogXCJCZ0J0bi9MYWJlbFwiID0gbnVsbDtcbiAgbGV2ZWxJZCA9IDA7XG4gIEBtai5ub2RlKFwiQmdCdG5cIilcbiAgX2JnQnRuTm9kZTogXCJCZ0J0blwiID0gbnVsbDtcbiAgc3RhdGljIHByZWZhYlVybCA9IFwicHJlZmFicy9oYWxsL0hhbGxDbGFzc2ljQnRuXCI7XG4gIHN0YXRpYyBidW5kbGVOYW1lID0gXCJtYWluUmVzXCI7XG4gIGdldCBCZ0J0bk5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2JnQnRuTm9kZTtcbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5PbkJ1dHRvbkNsaWNrKHRoaXMubm9kZSwgdGhpcy5vbkJ0bkNsaWNrLmJpbmQodGhpcykpO1xuICB9XG4gIGdldE1lc3NhZ2VMaXN0ZW5lcnMoKSB7XG4gICAgdmFyIF90ID0ge307XG4gICAgX3RbRVZUX01TR19IQUxMX0ZPUkNFX1VQREFURV0gPSB0aGlzLm9uRm9yY2VVcGRhdGUuYmluZCh0aGlzKTtcbiAgICByZXR1cm4gX3Q7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJDbGFzc2ljQnRuX3VwZGF0ZVVJXCIpXG4gIHVwZGF0ZVVJKCkge31cbiAgQG1qLnRyYWl0RXZlbnQoXCJDbGFzc2ljQnRuX2ZvcmNlVXBkYXRlXCIpXG4gIG9uRm9yY2VVcGRhdGUoKSB7fVxuICBvbkJ0bkNsaWNrKCkge1xuICAgIENvbnRyb2xsZXJNYW5hZ2VyLmdldEluc3RhbmNlKCkucHVzaFZpZXdCeUNvbnRyb2xsZXIoXCJDbGFzc2ljQ29udHJvbGxlclwiKTtcbiAgICBEb3RHYW1lQnRuQ2xpY2suZG90SGFsbChFSG9tZVBhZ2VDbGlja1R5cGUuQ2xhc3NpYywgdGhpcy5sZXZlbElkKTtcbiAgfVxufSJdfQ==