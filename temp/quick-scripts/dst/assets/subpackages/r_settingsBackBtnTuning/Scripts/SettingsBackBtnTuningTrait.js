
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_settingsBackBtnTuning/Scripts/SettingsBackBtnTuningTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '24818Ptj0ZITbQOdiq1g43S', 'SettingsBackBtnTuningTrait');
// subpackages/r_settingsBackBtnTuning/Scripts/SettingsBackBtnTuningTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var BaseSprite_1 = require("../../../Scripts/gamePlay/base/ui/BaseSprite");
var I18NStrings_1 = require("../../../Scripts/framework/data/I18NStrings");
var SettingsBackBtnTuningTrait = /** @class */ (function (_super) {
    __extends(SettingsBackBtnTuningTrait, _super);
    function SettingsBackBtnTuningTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SettingsBackBtnTuningTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    SettingsBackBtnTuningTrait.prototype.onUISetDlgCtrl_initDRes = function (t, e) {
        var r = t.ins;
        (null == r ? void 0 : r.addPreloadRes) && r.addPreloadRes("SpriteFrame", ["r_settingsBackBtnTuning:texture/com_btn_red"]);
        e();
    };
    SettingsBackBtnTuningTrait.prototype.onUISetBtnBack_onLoad = function (t, e) {
        var r = t.ins;
        if ((null == r ? void 0 : r.node) && cc.isValid(r.node)) {
            var n = r.node.getChildByName("bg");
            if (cc.isValid(n)) {
                BaseSprite_1.default.refreshWithNode(n, "texture/com_btn_red", false, true, "r_settingsBackBtnTuning");
                var i = n.getChildByName("btn_text");
                if (cc.isValid(i)) {
                    i.color = new cc.Color().fromHEX("#fce8e8");
                    I18NStrings_1.default.setText(i, "Exit", "Mahjong_InGameSettings_Exit");
                }
            }
            e();
        }
        else
            e();
    };
    SettingsBackBtnTuningTrait.traitKey = "SettingsBackBtnTuning";
    SettingsBackBtnTuningTrait = __decorate([
        mj.trait,
        mj.class("SettingsBackBtnTuning")
    ], SettingsBackBtnTuningTrait);
    return SettingsBackBtnTuningTrait;
}(Trait_1.default));
exports.default = SettingsBackBtnTuningTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX3NldHRpbmdzQmFja0J0blR1bmluZy9TY3JpcHRzL1NldHRpbmdzQmFja0J0blR1bmluZ1RyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFDM0QsMkVBQXNFO0FBQ3RFLDJFQUFzRTtBQUd0RTtJQUF3RCw4Q0FBSztJQUE3RDs7SUF5QkEsQ0FBQztJQXZCQywyQ0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0QsNERBQXVCLEdBQXZCLFVBQXdCLENBQUMsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDZCxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLGFBQWEsQ0FBQyxhQUFhLEVBQUUsQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFDLENBQUM7UUFDMUgsQ0FBQyxFQUFFLENBQUM7SUFDTixDQUFDO0lBQ0QsMERBQXFCLEdBQXJCLFVBQXNCLENBQUMsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDZCxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN2RCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNwQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ2pCLG9CQUFVLENBQUMsZUFBZSxDQUFDLENBQUMsRUFBRSxxQkFBcUIsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLHlCQUF5QixDQUFDLENBQUM7Z0JBQzdGLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ3JDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtvQkFDakIsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQzVDLHFCQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsNkJBQTZCLENBQUMsQ0FBQztpQkFDL0Q7YUFDRjtZQUNELENBQUMsRUFBRSxDQUFDO1NBQ0w7O1lBQU0sQ0FBQyxFQUFFLENBQUM7SUFDYixDQUFDO0lBdkJNLG1DQUFRLEdBQUcsdUJBQXVCLENBQUM7SUFEdkIsMEJBQTBCO1FBRjlDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQztPQUNiLDBCQUEwQixDQXlCOUM7SUFBRCxpQ0FBQztDQXpCRCxBQXlCQyxDQXpCdUQsZUFBSyxHQXlCNUQ7a0JBekJvQiwwQkFBMEIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IEJhc2VTcHJpdGUgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS9iYXNlL3VpL0Jhc2VTcHJpdGUnO1xuaW1wb3J0IEkxOE5TdHJpbmdzIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL2RhdGEvSTE4TlN0cmluZ3MnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJTZXR0aW5nc0JhY2tCdG5UdW5pbmdcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNldHRpbmdzQmFja0J0blR1bmluZ1RyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIlNldHRpbmdzQmFja0J0blR1bmluZ1wiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gIH1cbiAgb25VSVNldERsZ0N0cmxfaW5pdERSZXModCwgZSkge1xuICAgIHZhciByID0gdC5pbnM7XG4gICAgKG51bGwgPT0gciA/IHZvaWQgMCA6IHIuYWRkUHJlbG9hZFJlcykgJiYgci5hZGRQcmVsb2FkUmVzKFwiU3ByaXRlRnJhbWVcIiwgW1wicl9zZXR0aW5nc0JhY2tCdG5UdW5pbmc6dGV4dHVyZS9jb21fYnRuX3JlZFwiXSk7XG4gICAgZSgpO1xuICB9XG4gIG9uVUlTZXRCdG5CYWNrX29uTG9hZCh0LCBlKSB7XG4gICAgdmFyIHIgPSB0LmlucztcbiAgICBpZiAoKG51bGwgPT0gciA/IHZvaWQgMCA6IHIubm9kZSkgJiYgY2MuaXNWYWxpZChyLm5vZGUpKSB7XG4gICAgICB2YXIgbiA9IHIubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJnXCIpO1xuICAgICAgaWYgKGNjLmlzVmFsaWQobikpIHtcbiAgICAgICAgQmFzZVNwcml0ZS5yZWZyZXNoV2l0aE5vZGUobiwgXCJ0ZXh0dXJlL2NvbV9idG5fcmVkXCIsIGZhbHNlLCB0cnVlLCBcInJfc2V0dGluZ3NCYWNrQnRuVHVuaW5nXCIpO1xuICAgICAgICB2YXIgaSA9IG4uZ2V0Q2hpbGRCeU5hbWUoXCJidG5fdGV4dFwiKTtcbiAgICAgICAgaWYgKGNjLmlzVmFsaWQoaSkpIHtcbiAgICAgICAgICBpLmNvbG9yID0gbmV3IGNjLkNvbG9yKCkuZnJvbUhFWChcIiNmY2U4ZThcIik7XG4gICAgICAgICAgSTE4TlN0cmluZ3Muc2V0VGV4dChpLCBcIkV4aXRcIiwgXCJNYWhqb25nX0luR2FtZVNldHRpbmdzX0V4aXRcIik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGUoKTtcbiAgICB9IGVsc2UgZSgpO1xuICB9XG59Il19