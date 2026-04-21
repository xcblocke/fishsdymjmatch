
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_i18NAdBtn/Scripts/I18NAdBtnTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f8182EKG3pBfZDootpZes6E', 'I18NAdBtnTrait');
// subpackages/l_i18NAdBtn/Scripts/I18NAdBtnTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var I18NAdBtnLayout_1 = require("../../../Scripts/component/I18NAdBtnLayout");
var I18NAdBtnTrait = /** @class */ (function (_super) {
    __extends(I18NAdBtnTrait, _super);
    function I18NAdBtnTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    I18NAdBtnTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    I18NAdBtnTrait.prototype.onLvBoxVw_initComps = function (t, o) {
        var e = t.ins;
        I18NAdBtnLayout_1.default.setupLayout(e.adClaimBtn, "BgBtn/layout/Ad", "BgBtn/layout/Label", I18NAdBtnLayout_1.default.MAX_WIDTH_1, I18NAdBtnLayout_1.default.MARGIN);
        o();
    };
    I18NAdBtnTrait.prototype.onBoxOpenUI_initComponents = function (t, o) {
        var e = t.ins;
        I18NAdBtnLayout_1.default.setupLayout(e.adClaimBtn, "BgBtn/layout/Ad", "BgBtn/layout/Label", I18NAdBtnLayout_1.default.MAX_WIDTH_1, I18NAdBtnLayout_1.default.MARGIN);
        o();
    };
    I18NAdBtnTrait.prototype.onTLBoxVw_initComponents = function (t, o) {
        var e = t.ins;
        I18NAdBtnLayout_1.default.setupLayout(e.adClaimBtn, "BgBtn/layout/Ad", "BgBtn/layout/Label", I18NAdBtnLayout_1.default.MAX_WIDTH_1, I18NAdBtnLayout_1.default.MARGIN);
        o();
    };
    I18NAdBtnTrait.prototype.onRankBoxVw_initComps = function (t, o) {
        var e = t.ins;
        I18NAdBtnLayout_1.default.setupLayout(e._claimAdBtnNode, "bg/Ad", "bg/Claim", I18NAdBtnLayout_1.default.MAX_WIDTH_1, I18NAdBtnLayout_1.default.MARGIN);
        o();
    };
    I18NAdBtnTrait.prototype.onFailVw_onLoad = function (t, o) {
        var e = t.ins;
        I18NAdBtnLayout_1.default.setupLayout(e.btnUse, "ad/icon", "ad/desc", I18NAdBtnLayout_1.default.MAX_WIDTH_2, I18NAdBtnLayout_1.default.MARGIN);
        o();
    };
    I18NAdBtnTrait.prototype.onWatchAdVw_onLoad = function (t, o) {
        var e = t.ins;
        I18NAdBtnLayout_1.default.setupLayout(e._btnConfirm, "bg/layout/icon", "bg/layout/text", I18NAdBtnLayout_1.default.MAX_WIDTH_2, I18NAdBtnLayout_1.default.MARGIN);
        o();
    };
    I18NAdBtnTrait.prototype.onAdUnavailVw_onLoad = function (t, o) {
        var e = t.ins;
        I18NAdBtnLayout_1.default.setupLayout(e._btnRetry, "layout/icon", "layout/title", I18NAdBtnLayout_1.default.MAX_WIDTH_2, I18NAdBtnLayout_1.default.MARGIN);
        o();
    };
    I18NAdBtnTrait.traitKey = "I18NAdBtn";
    I18NAdBtnTrait = __decorate([
        mj.trait,
        mj.class("I18NAdBtnTrait")
    ], I18NAdBtnTrait);
    return I18NAdBtnTrait;
}(Trait_1.default));
exports.default = I18NAdBtnTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2kxOE5BZEJ0bi9TY3JpcHRzL0kxOE5BZEJ0blRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFDM0QsOEVBQXlFO0FBR3pFO0lBQTRDLGtDQUFLO0lBQWpEOztJQXdDQSxDQUFDO0lBdENDLCtCQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDRCw0Q0FBbUIsR0FBbkIsVUFBb0IsQ0FBQyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUNkLHlCQUFlLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsaUJBQWlCLEVBQUUsb0JBQW9CLEVBQUUseUJBQWUsQ0FBQyxXQUFXLEVBQUUseUJBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4SSxDQUFDLEVBQUUsQ0FBQztJQUNOLENBQUM7SUFDRCxtREFBMEIsR0FBMUIsVUFBMkIsQ0FBQyxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUNkLHlCQUFlLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsaUJBQWlCLEVBQUUsb0JBQW9CLEVBQUUseUJBQWUsQ0FBQyxXQUFXLEVBQUUseUJBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4SSxDQUFDLEVBQUUsQ0FBQztJQUNOLENBQUM7SUFDRCxpREFBd0IsR0FBeEIsVUFBeUIsQ0FBQyxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUNkLHlCQUFlLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsaUJBQWlCLEVBQUUsb0JBQW9CLEVBQUUseUJBQWUsQ0FBQyxXQUFXLEVBQUUseUJBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4SSxDQUFDLEVBQUUsQ0FBQztJQUNOLENBQUM7SUFDRCw4Q0FBcUIsR0FBckIsVUFBc0IsQ0FBQyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUNkLHlCQUFlLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxlQUFlLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSx5QkFBZSxDQUFDLFdBQVcsRUFBRSx5QkFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3pILENBQUMsRUFBRSxDQUFDO0lBQ04sQ0FBQztJQUNELHdDQUFlLEdBQWYsVUFBZ0IsQ0FBQyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUNkLHlCQUFlLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSx5QkFBZSxDQUFDLFdBQVcsRUFBRSx5QkFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2pILENBQUMsRUFBRSxDQUFDO0lBQ04sQ0FBQztJQUNELDJDQUFrQixHQUFsQixVQUFtQixDQUFDLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQ2QseUJBQWUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxnQkFBZ0IsRUFBRSx5QkFBZSxDQUFDLFdBQVcsRUFBRSx5QkFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BJLENBQUMsRUFBRSxDQUFDO0lBQ04sQ0FBQztJQUNELDZDQUFvQixHQUFwQixVQUFxQixDQUFDLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQ2QseUJBQWUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxhQUFhLEVBQUUsY0FBYyxFQUFFLHlCQUFlLENBQUMsV0FBVyxFQUFFLHlCQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDN0gsQ0FBQyxFQUFFLENBQUM7SUFDTixDQUFDO0lBdENNLHVCQUFRLEdBQUcsV0FBVyxDQUFDO0lBRFgsY0FBYztRQUZsQyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUM7T0FDTixjQUFjLENBd0NsQztJQUFELHFCQUFDO0NBeENELEFBd0NDLENBeEMyQyxlQUFLLEdBd0NoRDtrQkF4Q29CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IEkxOE5BZEJ0bkxheW91dCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvbXBvbmVudC9JMThOQWRCdG5MYXlvdXQnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJJMThOQWRCdG5UcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSTE4TkFkQnRuVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiSTE4TkFkQnRuXCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgfVxuICBvbkx2Qm94VndfaW5pdENvbXBzKHQsIG8pIHtcbiAgICB2YXIgZSA9IHQuaW5zO1xuICAgIEkxOE5BZEJ0bkxheW91dC5zZXR1cExheW91dChlLmFkQ2xhaW1CdG4sIFwiQmdCdG4vbGF5b3V0L0FkXCIsIFwiQmdCdG4vbGF5b3V0L0xhYmVsXCIsIEkxOE5BZEJ0bkxheW91dC5NQVhfV0lEVEhfMSwgSTE4TkFkQnRuTGF5b3V0Lk1BUkdJTik7XG4gICAgbygpO1xuICB9XG4gIG9uQm94T3BlblVJX2luaXRDb21wb25lbnRzKHQsIG8pIHtcbiAgICB2YXIgZSA9IHQuaW5zO1xuICAgIEkxOE5BZEJ0bkxheW91dC5zZXR1cExheW91dChlLmFkQ2xhaW1CdG4sIFwiQmdCdG4vbGF5b3V0L0FkXCIsIFwiQmdCdG4vbGF5b3V0L0xhYmVsXCIsIEkxOE5BZEJ0bkxheW91dC5NQVhfV0lEVEhfMSwgSTE4TkFkQnRuTGF5b3V0Lk1BUkdJTik7XG4gICAgbygpO1xuICB9XG4gIG9uVExCb3hWd19pbml0Q29tcG9uZW50cyh0LCBvKSB7XG4gICAgdmFyIGUgPSB0LmlucztcbiAgICBJMThOQWRCdG5MYXlvdXQuc2V0dXBMYXlvdXQoZS5hZENsYWltQnRuLCBcIkJnQnRuL2xheW91dC9BZFwiLCBcIkJnQnRuL2xheW91dC9MYWJlbFwiLCBJMThOQWRCdG5MYXlvdXQuTUFYX1dJRFRIXzEsIEkxOE5BZEJ0bkxheW91dC5NQVJHSU4pO1xuICAgIG8oKTtcbiAgfVxuICBvblJhbmtCb3hWd19pbml0Q29tcHModCwgbykge1xuICAgIHZhciBlID0gdC5pbnM7XG4gICAgSTE4TkFkQnRuTGF5b3V0LnNldHVwTGF5b3V0KGUuX2NsYWltQWRCdG5Ob2RlLCBcImJnL0FkXCIsIFwiYmcvQ2xhaW1cIiwgSTE4TkFkQnRuTGF5b3V0Lk1BWF9XSURUSF8xLCBJMThOQWRCdG5MYXlvdXQuTUFSR0lOKTtcbiAgICBvKCk7XG4gIH1cbiAgb25GYWlsVndfb25Mb2FkKHQsIG8pIHtcbiAgICB2YXIgZSA9IHQuaW5zO1xuICAgIEkxOE5BZEJ0bkxheW91dC5zZXR1cExheW91dChlLmJ0blVzZSwgXCJhZC9pY29uXCIsIFwiYWQvZGVzY1wiLCBJMThOQWRCdG5MYXlvdXQuTUFYX1dJRFRIXzIsIEkxOE5BZEJ0bkxheW91dC5NQVJHSU4pO1xuICAgIG8oKTtcbiAgfVxuICBvbldhdGNoQWRWd19vbkxvYWQodCwgbykge1xuICAgIHZhciBlID0gdC5pbnM7XG4gICAgSTE4TkFkQnRuTGF5b3V0LnNldHVwTGF5b3V0KGUuX2J0bkNvbmZpcm0sIFwiYmcvbGF5b3V0L2ljb25cIiwgXCJiZy9sYXlvdXQvdGV4dFwiLCBJMThOQWRCdG5MYXlvdXQuTUFYX1dJRFRIXzIsIEkxOE5BZEJ0bkxheW91dC5NQVJHSU4pO1xuICAgIG8oKTtcbiAgfVxuICBvbkFkVW5hdmFpbFZ3X29uTG9hZCh0LCBvKSB7XG4gICAgdmFyIGUgPSB0LmlucztcbiAgICBJMThOQWRCdG5MYXlvdXQuc2V0dXBMYXlvdXQoZS5fYnRuUmV0cnksIFwibGF5b3V0L2ljb25cIiwgXCJsYXlvdXQvdGl0bGVcIiwgSTE4TkFkQnRuTGF5b3V0Lk1BWF9XSURUSF8yLCBJMThOQWRCdG5MYXlvdXQuTUFSR0lOKTtcbiAgICBvKCk7XG4gIH1cbn0iXX0=