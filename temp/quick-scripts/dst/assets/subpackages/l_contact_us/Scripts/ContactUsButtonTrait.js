
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_contact_us/Scripts/ContactUsButtonTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f0fecWErVBLw5abouBUM/t4', 'ContactUsButtonTrait');
// subpackages/l_contact_us/Scripts/ContactUsButtonTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UIContactUsButton_1 = require("./UIContactUsButton");
var ContactUsButtonTrait = /** @class */ (function (_super) {
    __extends(ContactUsButtonTrait, _super);
    function ContactUsButtonTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContactUsButtonTrait_1 = ContactUsButtonTrait;
    ContactUsButtonTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    ContactUsButtonTrait.prototype.onUISetDlgCtrl_initDRes = function (t, o) {
        if ("1" != this._traitData.home) {
            this.addPreloadRes(t);
            o();
        }
        else
            o();
    };
    ContactUsButtonTrait.prototype.onUISetHomeCtrl_initDRes = function (t, o) {
        this.addPreloadRes(t);
        o();
    };
    ContactUsButtonTrait.prototype.addPreloadRes = function (t) {
        var o = t.ins;
        o && "function" == typeof o.addPreloadRes && o.addPreloadRes("Prefab", UIContactUsButton_1.default.getUrl());
    };
    ContactUsButtonTrait.prototype.onUISetHome_adjustPH = function (t, o) {
        this.adjustPanelHeight(t, function () {
            o();
        });
    };
    ContactUsButtonTrait.prototype.onUISetDlg_adjustPH = function (t, o) {
        if ("1" != this._traitData.home) {
            this.adjustPanelHeight(t, function () {
                o();
            });
        }
        else {
            o();
        }
    };
    ContactUsButtonTrait.prototype.adjustPanelHeight = function (t, o) {
        UIContactUsButton_1.default.createUI().then(function (e) {
            if (cc.isValid(e) && (null == t ? void 0 : t.args)) {
                var n = t.args[0] || [];
                n.push(e);
                t.args[0] = n;
            }
            o();
        }).catch(function (t) {
            console.error("[" + ContactUsButtonTrait_1.traitKey + "] 创建按钮失败:" + ((null == t ? void 0 : t.message) || "contact us 按钮加载失败"));
            o();
        });
    };
    ContactUsButtonTrait.prototype.onContactUsBtnClick = function () {
        mj.sdk.contactUs();
    };
    var ContactUsButtonTrait_1;
    ContactUsButtonTrait.traitKey = "ContactUsButton";
    ContactUsButtonTrait = ContactUsButtonTrait_1 = __decorate([
        mj.trait,
        mj.class("ContactUsButtonTrait")
    ], ContactUsButtonTrait);
    return ContactUsButtonTrait;
}(Trait_1.default));
exports.default = ContactUsButtonTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2NvbnRhY3RfdXMvU2NyaXB0cy9Db250YWN0VXNCdXR0b25UcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELHlEQUFvRDtBQUdwRDtJQUFrRCx3Q0FBSztJQUF2RDs7SUFpREEsQ0FBQzs2QkFqRG9CLG9CQUFvQjtJQUV2QyxxQ0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0Qsc0RBQXVCLEdBQXZCLFVBQXdCLENBQUMsRUFBRSxDQUFDO1FBQzFCLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFO1lBQy9CLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEIsQ0FBQyxFQUFFLENBQUM7U0FDTDs7WUFBTSxDQUFDLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFDRCx1REFBd0IsR0FBeEIsVUFBeUIsQ0FBQyxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0QixDQUFDLEVBQUUsQ0FBQztJQUNOLENBQUM7SUFDRCw0Q0FBYSxHQUFiLFVBQWMsQ0FBQztRQUNiLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDZCxDQUFDLElBQUksVUFBVSxJQUFJLE9BQU8sQ0FBQyxDQUFDLGFBQWEsSUFBSSxDQUFDLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSwyQkFBaUIsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ3JHLENBQUM7SUFDRCxtREFBb0IsR0FBcEIsVUFBcUIsQ0FBQyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsRUFBRTtZQUN4QixDQUFDLEVBQUUsQ0FBQztRQUNOLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELGtEQUFtQixHQUFuQixVQUFvQixDQUFDLEVBQUUsQ0FBQztRQUN0QixJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRTtZQUMvQixJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxFQUFFO2dCQUN4QixDQUFDLEVBQUUsQ0FBQztZQUNOLENBQUMsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLENBQUMsRUFBRSxDQUFDO1NBQ0w7SUFDSCxDQUFDO0lBQ0QsZ0RBQWlCLEdBQWpCLFVBQWtCLENBQUMsRUFBRSxDQUFDO1FBQ3BCLDJCQUFpQixDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDM0MsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDbEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ3hCLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ1YsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDZjtZQUNELENBQUMsRUFBRSxDQUFDO1FBQ04sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQztZQUNsQixPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxzQkFBb0IsQ0FBQyxRQUFRLEdBQUcsV0FBVyxHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLG1CQUFtQixDQUFDLENBQUMsQ0FBQztZQUM3SCxDQUFDLEVBQUUsQ0FBQztRQUNOLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELGtEQUFtQixHQUFuQjtRQUNFLEVBQUUsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDckIsQ0FBQzs7SUEvQ00sNkJBQVEsR0FBRyxpQkFBaUIsQ0FBQztJQURqQixvQkFBb0I7UUFGeEMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLHNCQUFzQixDQUFDO09BQ1osb0JBQW9CLENBaUR4QztJQUFELDJCQUFDO0NBakRELEFBaURDLENBakRpRCxlQUFLLEdBaUR0RDtrQkFqRG9CLG9CQUFvQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgVUlDb250YWN0VXNCdXR0b24gZnJvbSAnLi9VSUNvbnRhY3RVc0J1dHRvbic7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIkNvbnRhY3RVc0J1dHRvblRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250YWN0VXNCdXR0b25UcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJDb250YWN0VXNCdXR0b25cIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICB9XG4gIG9uVUlTZXREbGdDdHJsX2luaXREUmVzKHQsIG8pIHtcbiAgICBpZiAoXCIxXCIgIT0gdGhpcy5fdHJhaXREYXRhLmhvbWUpIHtcbiAgICAgIHRoaXMuYWRkUHJlbG9hZFJlcyh0KTtcbiAgICAgIG8oKTtcbiAgICB9IGVsc2UgbygpO1xuICB9XG4gIG9uVUlTZXRIb21lQ3RybF9pbml0RFJlcyh0LCBvKSB7XG4gICAgdGhpcy5hZGRQcmVsb2FkUmVzKHQpO1xuICAgIG8oKTtcbiAgfVxuICBhZGRQcmVsb2FkUmVzKHQpIHtcbiAgICB2YXIgbyA9IHQuaW5zO1xuICAgIG8gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBvLmFkZFByZWxvYWRSZXMgJiYgby5hZGRQcmVsb2FkUmVzKFwiUHJlZmFiXCIsIFVJQ29udGFjdFVzQnV0dG9uLmdldFVybCgpKTtcbiAgfVxuICBvblVJU2V0SG9tZV9hZGp1c3RQSCh0LCBvKSB7XG4gICAgdGhpcy5hZGp1c3RQYW5lbEhlaWdodCh0LCBmdW5jdGlvbiAoKSB7XG4gICAgICBvKCk7XG4gICAgfSk7XG4gIH1cbiAgb25VSVNldERsZ19hZGp1c3RQSCh0LCBvKSB7XG4gICAgaWYgKFwiMVwiICE9IHRoaXMuX3RyYWl0RGF0YS5ob21lKSB7XG4gICAgICB0aGlzLmFkanVzdFBhbmVsSGVpZ2h0KHQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbygpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG8oKTtcbiAgICB9XG4gIH1cbiAgYWRqdXN0UGFuZWxIZWlnaHQodCwgbykge1xuICAgIFVJQ29udGFjdFVzQnV0dG9uLmNyZWF0ZVVJKCkudGhlbihmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKGNjLmlzVmFsaWQoZSkgJiYgKG51bGwgPT0gdCA/IHZvaWQgMCA6IHQuYXJncykpIHtcbiAgICAgICAgdmFyIG4gPSB0LmFyZ3NbMF0gfHwgW107XG4gICAgICAgIG4ucHVzaChlKTtcbiAgICAgICAgdC5hcmdzWzBdID0gbjtcbiAgICAgIH1cbiAgICAgIG8oKTtcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAodCkge1xuICAgICAgY29uc29sZS5lcnJvcihcIltcIiArIENvbnRhY3RVc0J1dHRvblRyYWl0LnRyYWl0S2V5ICsgXCJdIOWIm+W7uuaMiemSruWksei0pTpcIiArICgobnVsbCA9PSB0ID8gdm9pZCAwIDogdC5tZXNzYWdlKSB8fCBcImNvbnRhY3QgdXMg5oyJ6ZKu5Yqg6L295aSx6LSlXCIpKTtcbiAgICAgIG8oKTtcbiAgICB9KTtcbiAgfVxuICBvbkNvbnRhY3RVc0J0bkNsaWNrKCkge1xuICAgIG1qLnNkay5jb250YWN0VXMoKTtcbiAgfVxufSJdfQ==