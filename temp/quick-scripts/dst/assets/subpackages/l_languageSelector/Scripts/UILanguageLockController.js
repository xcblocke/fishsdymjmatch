
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_languageSelector/Scripts/UILanguageLockController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c929d/kjKRBUK//AhxskMo1', 'UILanguageLockController');
// subpackages/l_languageSelector/Scripts/UILanguageLockController.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ViewController_1 = require("../../../Scripts/framework/controller/ViewController");
var AdManager_1 = require("../../../Scripts/base/ad/AdManager");
var DChangeBaseSkin_1 = require("../../../Scripts/gamePlay/dot/DChangeBaseSkin");
var DGameAdShow_1 = require("../../../Scripts/gamePlay/dot/DGameAdShow");
var DGameAdShowStage_1 = require("../../../Scripts/gamePlay/dot/DGameAdShowStage");
var UILanguageLockView_1 = require("./UILanguageLockView");
var d = {
    l_lanCardRU: "t5",
    l_lanCardES: "b1",
    l_lanCardFR: "W2",
    l_lanCardJP: "W2",
    l_lanCardKO: "W2",
    l_lanCardPT: "t4",
    l_lanCardDE: "b6",
    l_lanCardCN: "W9",
    l_lanCardTW: "W9",
    l_lanCardEN: "H_zhu"
};
var p = {
    en: "EN",
    "zh-cn": "CN",
    "zh-tw": "TW",
    "zh-hk": "TW",
    ko: "KO",
    ja: "JP",
    ru: "RU",
    es: "ES",
    pt: "PT",
    de: "DE",
    fr: "FR"
};
var UILanguageLockController = /** @class */ (function (_super) {
    __extends(UILanguageLockController, _super);
    function UILanguageLockController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewClass = UILanguageLockView_1.UILanguageLockView;
        _this.viewMode = ViewController_1.viewMode.ALERT;
        _this.bundleName = "r_changeBaseCardByLan";
        _this._skinBundleName = null;
        return _this;
    }
    UILanguageLockController.prototype.viewDidLoad = function () {
        var e;
        _super.prototype.viewDidLoad.call(this);
        var o = (null === (e = this.args) || void 0 === e ? void 0 : e.code) || "en";
        this._skinBundleName = "l_lanCard" + p[o];
        var n = d[this._skinBundleName];
        n && this._skinBundleName && this.viewDoAction("setCard", n, this._skinBundleName);
        DChangeBaseSkin_1.DotChangeBaseSkin.dotPopupView(this._skinBundleName);
    };
    UILanguageLockController.prototype.onUIDestroy = function () {
        _super.prototype.onUIDestroy.call(this);
    };
    UILanguageLockController.prototype.playAd = function () {
        var t = this, e = DGameAdShow_1.EAdPosition.OpenSkinByLanguageAd;
        DChangeBaseSkin_1.DotChangeBaseSkin.dotPopupClick(this._skinBundleName);
        DGameAdShowStage_1.DotGameAdShowStage.dot(false, "clickAdLock");
        AdManager_1.default.getInstance().checkVideoAdIsReady() && cc.isValid(this.rootView) && (this.rootView.opacity = 0);
        AdManager_1.default.getInstance().playVideoAd(e, {
            onSuccess: function () {
                t.onAdSuccess();
            },
            onFailed: function (e) {
                t.onAdFailed(e);
            }
        });
    };
    UILanguageLockController.prototype.onAdSuccess = function () {
        var t, e, o;
        if (this._skinBundleName) {
            var n = mj.getClassByName("ChangeBaseCardByLanTrait"), a = null === (t = null == n ? void 0 : n.getInstance) || void 0 === t ? void 0 : t.call(n);
            null == a || a.unlockSkin(this._skinBundleName);
            DChangeBaseSkin_1.DotChangeBaseSkin.dotSkinUnlockSuccess(this._skinBundleName);
        }
        cc.isValid(this.rootView) && this.close();
        null === (o = null === (e = this.args) || void 0 === e ? void 0 : e.onSuccess) || void 0 === o || o.call(e);
    };
    UILanguageLockController.prototype.onAdFailed = function (t) {
        if (this.rootView && cc.isValid(this.rootView))
            if (t) {
                this.rootView.opacity = 255;
                this.viewDoAction("onFail");
            }
            else
                this.close();
    };
    UILanguageLockController = __decorate([
        mj.class("UILanguageLockController")
    ], UILanguageLockController);
    return UILanguageLockController;
}(ViewController_1.default));
exports.default = UILanguageLockController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2xhbmd1YWdlU2VsZWN0b3IvU2NyaXB0cy9VSUxhbmd1YWdlTG9ja0NvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVGQUFnRztBQUNoRyxnRUFBMkQ7QUFDM0QsaUZBQWtGO0FBQ2xGLHlFQUF3RTtBQUN4RSxtRkFBb0Y7QUFDcEYsMkRBQTBEO0FBQzFELElBQUksQ0FBQyxHQUFHO0lBQ04sV0FBVyxFQUFFLElBQUk7SUFDakIsV0FBVyxFQUFFLElBQUk7SUFDakIsV0FBVyxFQUFFLElBQUk7SUFDakIsV0FBVyxFQUFFLElBQUk7SUFDakIsV0FBVyxFQUFFLElBQUk7SUFDakIsV0FBVyxFQUFFLElBQUk7SUFDakIsV0FBVyxFQUFFLElBQUk7SUFDakIsV0FBVyxFQUFFLElBQUk7SUFDakIsV0FBVyxFQUFFLElBQUk7SUFDakIsV0FBVyxFQUFFLE9BQU87Q0FDckIsQ0FBQztBQUNGLElBQUksQ0FBQyxHQUFHO0lBQ04sRUFBRSxFQUFFLElBQUk7SUFDUixPQUFPLEVBQUUsSUFBSTtJQUNiLE9BQU8sRUFBRSxJQUFJO0lBQ2IsT0FBTyxFQUFFLElBQUk7SUFDYixFQUFFLEVBQUUsSUFBSTtJQUNSLEVBQUUsRUFBRSxJQUFJO0lBQ1IsRUFBRSxFQUFFLElBQUk7SUFDUixFQUFFLEVBQUUsSUFBSTtJQUNSLEVBQUUsRUFBRSxJQUFJO0lBQ1IsRUFBRSxFQUFFLElBQUk7SUFDUixFQUFFLEVBQUUsSUFBSTtDQUNULENBQUM7QUFFRjtJQUFzRCw0Q0FBYztJQUFwRTtRQUFBLHFFQWlEQztRQWhEQyxlQUFTLEdBQUcsdUNBQWtCLENBQUM7UUFDL0IsY0FBUSxHQUFHLHlCQUFRLENBQUMsS0FBSyxDQUFDO1FBQzFCLGdCQUFVLEdBQUcsdUJBQXVCLENBQUM7UUFDckMscUJBQWUsR0FBRyxJQUFJLENBQUM7O0lBNkN6QixDQUFDO0lBNUNDLDhDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsQ0FBQztRQUNOLGlCQUFNLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUM7UUFDN0UsSUFBSSxDQUFDLGVBQWUsR0FBRyxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDaEMsQ0FBQyxJQUFJLElBQUksQ0FBQyxlQUFlLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUNuRixtQ0FBaUIsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFDRCw4Q0FBVyxHQUFYO1FBQ0UsaUJBQU0sV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBQ0QseUNBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxHQUFHLElBQUksRUFDVixDQUFDLEdBQUcseUJBQVcsQ0FBQyxvQkFBb0IsQ0FBQztRQUN2QyxtQ0FBaUIsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3RELHFDQUFrQixDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFDN0MsbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDMUcsbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFO1lBQ3JDLFNBQVMsRUFBRTtnQkFDVCxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDbEIsQ0FBQztZQUNELFFBQVEsRUFBRSxVQUFVLENBQUM7Z0JBQ25CLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEIsQ0FBQztTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCw4Q0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNaLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN4QixJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDLDBCQUEwQixDQUFDLEVBQ25ELENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdGLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDaEQsbUNBQWlCLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQzlEO1FBQ0QsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM5RyxDQUFDO0lBQ0QsNkNBQVUsR0FBVixVQUFXLENBQUM7UUFDVixJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQUUsSUFBSSxDQUFDLEVBQUU7Z0JBQ3JELElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztnQkFDNUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUM3Qjs7Z0JBQU0sSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFoRGtCLHdCQUF3QjtRQUQ1QyxFQUFFLENBQUMsS0FBSyxDQUFDLDBCQUEwQixDQUFDO09BQ2hCLHdCQUF3QixDQWlENUM7SUFBRCwrQkFBQztDQWpERCxBQWlEQyxDQWpEcUQsd0JBQWMsR0FpRG5FO2tCQWpEb0Isd0JBQXdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZpZXdDb250cm9sbGVyLCB7IHZpZXdNb2RlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvY29udHJvbGxlci9WaWV3Q29udHJvbGxlcic7XG5pbXBvcnQgQWRNYW5hZ2VyIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvYmFzZS9hZC9BZE1hbmFnZXInO1xuaW1wb3J0IHsgRG90Q2hhbmdlQmFzZVNraW4gfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L2RvdC9EQ2hhbmdlQmFzZVNraW4nO1xuaW1wb3J0IHsgRUFkUG9zaXRpb24gfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L2RvdC9ER2FtZUFkU2hvdyc7XG5pbXBvcnQgeyBEb3RHYW1lQWRTaG93U3RhZ2UgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L2RvdC9ER2FtZUFkU2hvd1N0YWdlJztcbmltcG9ydCB7IFVJTGFuZ3VhZ2VMb2NrVmlldyB9IGZyb20gJy4vVUlMYW5ndWFnZUxvY2tWaWV3JztcbnZhciBkID0ge1xuICBsX2xhbkNhcmRSVTogXCJ0NVwiLFxuICBsX2xhbkNhcmRFUzogXCJiMVwiLFxuICBsX2xhbkNhcmRGUjogXCJXMlwiLFxuICBsX2xhbkNhcmRKUDogXCJXMlwiLFxuICBsX2xhbkNhcmRLTzogXCJXMlwiLFxuICBsX2xhbkNhcmRQVDogXCJ0NFwiLFxuICBsX2xhbkNhcmRERTogXCJiNlwiLFxuICBsX2xhbkNhcmRDTjogXCJXOVwiLFxuICBsX2xhbkNhcmRUVzogXCJXOVwiLFxuICBsX2xhbkNhcmRFTjogXCJIX3podVwiXG59O1xudmFyIHAgPSB7XG4gIGVuOiBcIkVOXCIsXG4gIFwiemgtY25cIjogXCJDTlwiLFxuICBcInpoLXR3XCI6IFwiVFdcIixcbiAgXCJ6aC1oa1wiOiBcIlRXXCIsXG4gIGtvOiBcIktPXCIsXG4gIGphOiBcIkpQXCIsXG4gIHJ1OiBcIlJVXCIsXG4gIGVzOiBcIkVTXCIsXG4gIHB0OiBcIlBUXCIsXG4gIGRlOiBcIkRFXCIsXG4gIGZyOiBcIkZSXCJcbn07XG5AbWouY2xhc3MoXCJVSUxhbmd1YWdlTG9ja0NvbnRyb2xsZXJcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJTGFuZ3VhZ2VMb2NrQ29udHJvbGxlciBleHRlbmRzIFZpZXdDb250cm9sbGVyIHtcbiAgdmlld0NsYXNzID0gVUlMYW5ndWFnZUxvY2tWaWV3O1xuICB2aWV3TW9kZSA9IHZpZXdNb2RlLkFMRVJUO1xuICBidW5kbGVOYW1lID0gXCJyX2NoYW5nZUJhc2VDYXJkQnlMYW5cIjtcbiAgX3NraW5CdW5kbGVOYW1lID0gbnVsbDtcbiAgdmlld0RpZExvYWQoKSB7XG4gICAgdmFyIGU7XG4gICAgc3VwZXIudmlld0RpZExvYWQuY2FsbCh0aGlzKTtcbiAgICB2YXIgbyA9IChudWxsID09PSAoZSA9IHRoaXMuYXJncykgfHwgdm9pZCAwID09PSBlID8gdm9pZCAwIDogZS5jb2RlKSB8fCBcImVuXCI7XG4gICAgdGhpcy5fc2tpbkJ1bmRsZU5hbWUgPSBcImxfbGFuQ2FyZFwiICsgcFtvXTtcbiAgICB2YXIgbiA9IGRbdGhpcy5fc2tpbkJ1bmRsZU5hbWVdO1xuICAgIG4gJiYgdGhpcy5fc2tpbkJ1bmRsZU5hbWUgJiYgdGhpcy52aWV3RG9BY3Rpb24oXCJzZXRDYXJkXCIsIG4sIHRoaXMuX3NraW5CdW5kbGVOYW1lKTtcbiAgICBEb3RDaGFuZ2VCYXNlU2tpbi5kb3RQb3B1cFZpZXcodGhpcy5fc2tpbkJ1bmRsZU5hbWUpO1xuICB9XG4gIG9uVUlEZXN0cm95KCkge1xuICAgIHN1cGVyLm9uVUlEZXN0cm95LmNhbGwodGhpcyk7XG4gIH1cbiAgcGxheUFkKCkge1xuICAgIHZhciB0ID0gdGhpcyxcbiAgICAgIGUgPSBFQWRQb3NpdGlvbi5PcGVuU2tpbkJ5TGFuZ3VhZ2VBZDtcbiAgICBEb3RDaGFuZ2VCYXNlU2tpbi5kb3RQb3B1cENsaWNrKHRoaXMuX3NraW5CdW5kbGVOYW1lKTtcbiAgICBEb3RHYW1lQWRTaG93U3RhZ2UuZG90KGZhbHNlLCBcImNsaWNrQWRMb2NrXCIpO1xuICAgIEFkTWFuYWdlci5nZXRJbnN0YW5jZSgpLmNoZWNrVmlkZW9BZElzUmVhZHkoKSAmJiBjYy5pc1ZhbGlkKHRoaXMucm9vdFZpZXcpICYmICh0aGlzLnJvb3RWaWV3Lm9wYWNpdHkgPSAwKTtcbiAgICBBZE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5wbGF5VmlkZW9BZChlLCB7XG4gICAgICBvblN1Y2Nlc3M6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdC5vbkFkU3VjY2VzcygpO1xuICAgICAgfSxcbiAgICAgIG9uRmFpbGVkOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICB0Lm9uQWRGYWlsZWQoZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgb25BZFN1Y2Nlc3MoKSB7XG4gICAgdmFyIHQsIGUsIG87XG4gICAgaWYgKHRoaXMuX3NraW5CdW5kbGVOYW1lKSB7XG4gICAgICB2YXIgbiA9IG1qLmdldENsYXNzQnlOYW1lKFwiQ2hhbmdlQmFzZUNhcmRCeUxhblRyYWl0XCIpLFxuICAgICAgICBhID0gbnVsbCA9PT0gKHQgPSBudWxsID09IG4gPyB2b2lkIDAgOiBuLmdldEluc3RhbmNlKSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0LmNhbGwobik7XG4gICAgICBudWxsID09IGEgfHwgYS51bmxvY2tTa2luKHRoaXMuX3NraW5CdW5kbGVOYW1lKTtcbiAgICAgIERvdENoYW5nZUJhc2VTa2luLmRvdFNraW5VbmxvY2tTdWNjZXNzKHRoaXMuX3NraW5CdW5kbGVOYW1lKTtcbiAgICB9XG4gICAgY2MuaXNWYWxpZCh0aGlzLnJvb3RWaWV3KSAmJiB0aGlzLmNsb3NlKCk7XG4gICAgbnVsbCA9PT0gKG8gPSBudWxsID09PSAoZSA9IHRoaXMuYXJncykgfHwgdm9pZCAwID09PSBlID8gdm9pZCAwIDogZS5vblN1Y2Nlc3MpIHx8IHZvaWQgMCA9PT0gbyB8fCBvLmNhbGwoZSk7XG4gIH1cbiAgb25BZEZhaWxlZCh0KSB7XG4gICAgaWYgKHRoaXMucm9vdFZpZXcgJiYgY2MuaXNWYWxpZCh0aGlzLnJvb3RWaWV3KSkgaWYgKHQpIHtcbiAgICAgIHRoaXMucm9vdFZpZXcub3BhY2l0eSA9IDI1NTtcbiAgICAgIHRoaXMudmlld0RvQWN0aW9uKFwib25GYWlsXCIpO1xuICAgIH0gZWxzZSB0aGlzLmNsb3NlKCk7XG4gIH1cbn0iXX0=