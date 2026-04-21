
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_matchDown/Scripts/MatchDownLabel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '81ecaagm1xDcJ1w0q4FW9wt', 'MatchDownLabel');
// subpackages/l_matchDown/Scripts/MatchDownLabel.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseUI_1 = require("../../../Scripts/framework/ui/BaseUI");
var CommonUtils_1 = require("../../../Scripts/framework/utils/CommonUtils");
var BaseSprite_1 = require("../../../Scripts/gamePlay/base/ui/BaseSprite");
var LoginModel_1 = require("../../../Scripts/gamePlay/login/model/LoginModel");
var u = {
    EN_US: "English",
    EN_GB: "English",
    ZH_CN: "Chinese",
    ZH_HK: "TraditionalChinese",
    ZH_TW: "TraditionalChinese",
    PT_PT: "Portuguese",
    PT_BR: "Portuguese",
    ES: "Spanish",
    ES_419: "Spanish",
    FR: "French",
    DE: "German",
    JA: "Japanese",
    KO: "Korean",
    RU: "Russian"
};
var p = Object.keys(u);
var MatchDownLabel = /** @class */ (function (_super) {
    __extends(MatchDownLabel, _super);
    function MatchDownLabel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.matchCount = null;
        _this.matchDesc = null;
        return _this;
    }
    MatchDownLabel.prototype.onLoad = function () {
        var t;
        _super.prototype.onLoad.call(this);
        this.matchCount = null === (t = this.node.getChildByName("MatchCount")) || void 0 === t ? void 0 : t.getComponent(cc.Label);
        this.matchDesc = this.node.getChildByName("MatchDesc");
        mj.EventManager.on("language-changed", this.updateDesc, this);
        this.updateDesc();
    };
    MatchDownLabel.prototype.getLanguageCode = function () {
        var e = LoginModel_1.default.getInstance().language, t = CommonUtils_1.formatLanguageCodeToString(e);
        -1 == p.indexOf(t) && (t = "EN_US");
        return t;
    };
    MatchDownLabel.prototype.updateDesc = function () {
        if (cc.isValid(this.matchDesc)) {
            var e = this.getLanguageCode();
            BaseSprite_1.default.refreshWithNode(this.matchDesc, "atlas/match_down/gameplay_txt_" + u[e], true, true, "l_matchDown");
        }
    };
    MatchDownLabel.prototype.updateCount = function (e) {
        cc.isValid(this.matchCount) && (this.matchCount.string = e.toString());
    };
    MatchDownLabel.prefabUrl = "prefabs/matchDown";
    MatchDownLabel.bundleName = "l_matchDown";
    MatchDownLabel = __decorate([
        mj.class
    ], MatchDownLabel);
    return MatchDownLabel;
}(BaseUI_1.default));
exports.default = MatchDownLabel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX21hdGNoRG93bi9TY3JpcHRzL01hdGNoRG93bkxhYmVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrREFBMEQ7QUFDMUQsNEVBQTBGO0FBQzFGLDJFQUFzRTtBQUN0RSwrRUFBMEU7QUFDMUUsSUFBSSxDQUFDLEdBQUc7SUFDTixLQUFLLEVBQUUsU0FBUztJQUNoQixLQUFLLEVBQUUsU0FBUztJQUNoQixLQUFLLEVBQUUsU0FBUztJQUNoQixLQUFLLEVBQUUsb0JBQW9CO0lBQzNCLEtBQUssRUFBRSxvQkFBb0I7SUFDM0IsS0FBSyxFQUFFLFlBQVk7SUFDbkIsS0FBSyxFQUFFLFlBQVk7SUFDbkIsRUFBRSxFQUFFLFNBQVM7SUFDYixNQUFNLEVBQUUsU0FBUztJQUNqQixFQUFFLEVBQUUsUUFBUTtJQUNaLEVBQUUsRUFBRSxRQUFRO0lBQ1osRUFBRSxFQUFFLFVBQVU7SUFDZCxFQUFFLEVBQUUsUUFBUTtJQUNaLEVBQUUsRUFBRSxTQUFTO0NBQ2QsQ0FBQztBQUNGLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFFdkI7SUFBNEMsa0NBQU07SUFBbEQ7UUFBQSxxRUE0QkM7UUEzQkMsZ0JBQVUsR0FBRyxJQUFJLENBQUM7UUFDbEIsZUFBUyxHQUFHLElBQUksQ0FBQzs7SUEwQm5CLENBQUM7SUF2QkMsK0JBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxDQUFDO1FBQ04saUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVILElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDdkQsRUFBRSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUNELHdDQUFlLEdBQWY7UUFDRSxJQUFJLENBQUMsR0FBRyxvQkFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsRUFDdkMsQ0FBQyxHQUFHLHdDQUEwQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUM7UUFDcEMsT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBQ0QsbUNBQVUsR0FBVjtRQUNFLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDOUIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQy9CLG9CQUFVLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsZ0NBQWdDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsYUFBYSxDQUFDLENBQUM7U0FDaEg7SUFDSCxDQUFDO0lBQ0Qsb0NBQVcsR0FBWCxVQUFZLENBQUM7UUFDWCxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUF4Qk0sd0JBQVMsR0FBRyxtQkFBbUIsQ0FBQztJQUNoQyx5QkFBVSxHQUFHLGFBQWEsQ0FBQztJQUpmLGNBQWM7UUFEbEMsRUFBRSxDQUFDLEtBQUs7T0FDWSxjQUFjLENBNEJsQztJQUFELHFCQUFDO0NBNUJELEFBNEJDLENBNUIyQyxnQkFBTSxHQTRCakQ7a0JBNUJvQixjQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2VVSSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay91aS9CYXNlVUknO1xuaW1wb3J0IHsgZm9ybWF0TGFuZ3VhZ2VDb2RlVG9TdHJpbmcgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay91dGlscy9Db21tb25VdGlscyc7XG5pbXBvcnQgQmFzZVNwcml0ZSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L2Jhc2UvdWkvQmFzZVNwcml0ZSc7XG5pbXBvcnQgTG9naW5Nb2RlbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L2xvZ2luL21vZGVsL0xvZ2luTW9kZWwnO1xudmFyIHUgPSB7XG4gIEVOX1VTOiBcIkVuZ2xpc2hcIixcbiAgRU5fR0I6IFwiRW5nbGlzaFwiLFxuICBaSF9DTjogXCJDaGluZXNlXCIsXG4gIFpIX0hLOiBcIlRyYWRpdGlvbmFsQ2hpbmVzZVwiLFxuICBaSF9UVzogXCJUcmFkaXRpb25hbENoaW5lc2VcIixcbiAgUFRfUFQ6IFwiUG9ydHVndWVzZVwiLFxuICBQVF9CUjogXCJQb3J0dWd1ZXNlXCIsXG4gIEVTOiBcIlNwYW5pc2hcIixcbiAgRVNfNDE5OiBcIlNwYW5pc2hcIixcbiAgRlI6IFwiRnJlbmNoXCIsXG4gIERFOiBcIkdlcm1hblwiLFxuICBKQTogXCJKYXBhbmVzZVwiLFxuICBLTzogXCJLb3JlYW5cIixcbiAgUlU6IFwiUnVzc2lhblwiXG59O1xudmFyIHAgPSBPYmplY3Qua2V5cyh1KTtcbkBtai5jbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWF0Y2hEb3duTGFiZWwgZXh0ZW5kcyBCYXNlVUkge1xuICBtYXRjaENvdW50ID0gbnVsbDtcbiAgbWF0Y2hEZXNjID0gbnVsbDtcbiAgc3RhdGljIHByZWZhYlVybCA9IFwicHJlZmFicy9tYXRjaERvd25cIjtcbiAgc3RhdGljIGJ1bmRsZU5hbWUgPSBcImxfbWF0Y2hEb3duXCI7XG4gIG9uTG9hZCgpIHtcbiAgICB2YXIgdDtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLm1hdGNoQ291bnQgPSBudWxsID09PSAodCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk1hdGNoQ291bnRcIikpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICB0aGlzLm1hdGNoRGVzYyA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk1hdGNoRGVzY1wiKTtcbiAgICBtai5FdmVudE1hbmFnZXIub24oXCJsYW5ndWFnZS1jaGFuZ2VkXCIsIHRoaXMudXBkYXRlRGVzYywgdGhpcyk7XG4gICAgdGhpcy51cGRhdGVEZXNjKCk7XG4gIH1cbiAgZ2V0TGFuZ3VhZ2VDb2RlKCkge1xuICAgIHZhciBlID0gTG9naW5Nb2RlbC5nZXRJbnN0YW5jZSgpLmxhbmd1YWdlLFxuICAgICAgdCA9IGZvcm1hdExhbmd1YWdlQ29kZVRvU3RyaW5nKGUpO1xuICAgIC0xID09IHAuaW5kZXhPZih0KSAmJiAodCA9IFwiRU5fVVNcIik7XG4gICAgcmV0dXJuIHQ7XG4gIH1cbiAgdXBkYXRlRGVzYygpIHtcbiAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLm1hdGNoRGVzYykpIHtcbiAgICAgIHZhciBlID0gdGhpcy5nZXRMYW5ndWFnZUNvZGUoKTtcbiAgICAgIEJhc2VTcHJpdGUucmVmcmVzaFdpdGhOb2RlKHRoaXMubWF0Y2hEZXNjLCBcImF0bGFzL21hdGNoX2Rvd24vZ2FtZXBsYXlfdHh0X1wiICsgdVtlXSwgdHJ1ZSwgdHJ1ZSwgXCJsX21hdGNoRG93blwiKTtcbiAgICB9XG4gIH1cbiAgdXBkYXRlQ291bnQoZSkge1xuICAgIGNjLmlzVmFsaWQodGhpcy5tYXRjaENvdW50KSAmJiAodGhpcy5tYXRjaENvdW50LnN0cmluZyA9IGUudG9TdHJpbmcoKSk7XG4gIH1cbn0iXX0=