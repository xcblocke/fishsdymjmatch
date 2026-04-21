
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_langDlgCloseSettings/Scripts/LangDlgCloseSettingsTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd3591m+o5ZHKrhvfCBPKQui', 'LangDlgCloseSettingsTrait');
// subpackages/l_langDlgCloseSettings/Scripts/LangDlgCloseSettingsTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ControllerManager_1 = require("../../../Scripts/framework/manager/ControllerManager");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var LangDlgCloseSettingsTrait = /** @class */ (function (_super) {
    __extends(LangDlgCloseSettingsTrait, _super);
    function LangDlgCloseSettingsTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._previousSettingsController = null;
        return _this;
    }
    LangDlgCloseSettingsTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    LangDlgCloseSettingsTrait.prototype.onLangSelTrt_showLangSel = function (t, e) {
        this._previousSettingsController = null;
        var r = ControllerManager_1.default.getInstance(), o = r.getControByName("UISettingsDialogController");
        if (o) {
            this._previousSettingsController = "UISettingsDialogController";
            r.closeView(o);
            e();
        }
        else {
            var n = r.getControByName("UISettingsHomeController");
            if (n) {
                this._previousSettingsController = "UISettingsHomeController";
                r.closeView(n);
            }
            e();
        }
    };
    LangDlgCloseSettingsTrait.prototype.onUILangSelCtrl_UIDestroy = function (t, e) {
        if (this._previousSettingsController) {
            this.pushController(this._previousSettingsController, {});
            this._previousSettingsController = null;
        }
        e();
    };
    LangDlgCloseSettingsTrait.traitKey = "LangDlgCloseSettings";
    LangDlgCloseSettingsTrait = __decorate([
        mj.trait,
        mj.class("LangDlgCloseSettingsTrait")
    ], LangDlgCloseSettingsTrait);
    return LangDlgCloseSettingsTrait;
}(Trait_1.default));
exports.default = LangDlgCloseSettingsTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2xhbmdEbGdDbG9zZVNldHRpbmdzL1NjcmlwdHMvTGFuZ0RsZ0Nsb3NlU2V0dGluZ3NUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMEZBQXFGO0FBQ3JGLGdFQUEyRDtBQUczRDtJQUF1RCw2Q0FBSztJQUE1RDtRQUFBLHFFQThCQztRQTdCQyxpQ0FBMkIsR0FBRyxJQUFJLENBQUM7O0lBNkJyQyxDQUFDO0lBM0JDLDBDQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDRCw0REFBd0IsR0FBeEIsVUFBeUIsQ0FBQyxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLDJCQUEyQixHQUFHLElBQUksQ0FBQztRQUN4QyxJQUFJLENBQUMsR0FBRywyQkFBaUIsQ0FBQyxXQUFXLEVBQUUsRUFDckMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxlQUFlLENBQUMsNEJBQTRCLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsRUFBRTtZQUNMLElBQUksQ0FBQywyQkFBMkIsR0FBRyw0QkFBNEIsQ0FBQztZQUNoRSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2YsQ0FBQyxFQUFFLENBQUM7U0FDTDthQUFNO1lBQ0wsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGVBQWUsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1lBQ3RELElBQUksQ0FBQyxFQUFFO2dCQUNMLElBQUksQ0FBQywyQkFBMkIsR0FBRywwQkFBMEIsQ0FBQztnQkFDOUQsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNoQjtZQUNELENBQUMsRUFBRSxDQUFDO1NBQ0w7SUFDSCxDQUFDO0lBQ0QsNkRBQXlCLEdBQXpCLFVBQTBCLENBQUMsRUFBRSxDQUFDO1FBQzVCLElBQUksSUFBSSxDQUFDLDJCQUEyQixFQUFFO1lBQ3BDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLDJCQUEyQixFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQzFELElBQUksQ0FBQywyQkFBMkIsR0FBRyxJQUFJLENBQUM7U0FDekM7UUFDRCxDQUFDLEVBQUUsQ0FBQztJQUNOLENBQUM7SUEzQk0sa0NBQVEsR0FBRyxzQkFBc0IsQ0FBQztJQUZ0Qix5QkFBeUI7UUFGN0MsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLDJCQUEyQixDQUFDO09BQ2pCLHlCQUF5QixDQThCN0M7SUFBRCxnQ0FBQztDQTlCRCxBQThCQyxDQTlCc0QsZUFBSyxHQThCM0Q7a0JBOUJvQix5QkFBeUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29udHJvbGxlck1hbmFnZXIgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvbWFuYWdlci9Db250cm9sbGVyTWFuYWdlcic7XG5pbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJMYW5nRGxnQ2xvc2VTZXR0aW5nc1RyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYW5nRGxnQ2xvc2VTZXR0aW5nc1RyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBfcHJldmlvdXNTZXR0aW5nc0NvbnRyb2xsZXIgPSBudWxsO1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIkxhbmdEbGdDbG9zZVNldHRpbmdzXCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgfVxuICBvbkxhbmdTZWxUcnRfc2hvd0xhbmdTZWwodCwgZSkge1xuICAgIHRoaXMuX3ByZXZpb3VzU2V0dGluZ3NDb250cm9sbGVyID0gbnVsbDtcbiAgICB2YXIgciA9IENvbnRyb2xsZXJNYW5hZ2VyLmdldEluc3RhbmNlKCksXG4gICAgICBvID0gci5nZXRDb250cm9CeU5hbWUoXCJVSVNldHRpbmdzRGlhbG9nQ29udHJvbGxlclwiKTtcbiAgICBpZiAobykge1xuICAgICAgdGhpcy5fcHJldmlvdXNTZXR0aW5nc0NvbnRyb2xsZXIgPSBcIlVJU2V0dGluZ3NEaWFsb2dDb250cm9sbGVyXCI7XG4gICAgICByLmNsb3NlVmlldyhvKTtcbiAgICAgIGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIG4gPSByLmdldENvbnRyb0J5TmFtZShcIlVJU2V0dGluZ3NIb21lQ29udHJvbGxlclwiKTtcbiAgICAgIGlmIChuKSB7XG4gICAgICAgIHRoaXMuX3ByZXZpb3VzU2V0dGluZ3NDb250cm9sbGVyID0gXCJVSVNldHRpbmdzSG9tZUNvbnRyb2xsZXJcIjtcbiAgICAgICAgci5jbG9zZVZpZXcobik7XG4gICAgICB9XG4gICAgICBlKCk7XG4gICAgfVxuICB9XG4gIG9uVUlMYW5nU2VsQ3RybF9VSURlc3Ryb3kodCwgZSkge1xuICAgIGlmICh0aGlzLl9wcmV2aW91c1NldHRpbmdzQ29udHJvbGxlcikge1xuICAgICAgdGhpcy5wdXNoQ29udHJvbGxlcih0aGlzLl9wcmV2aW91c1NldHRpbmdzQ29udHJvbGxlciwge30pO1xuICAgICAgdGhpcy5fcHJldmlvdXNTZXR0aW5nc0NvbnRyb2xsZXIgPSBudWxsO1xuICAgIH1cbiAgICBlKCk7XG4gIH1cbn0iXX0=