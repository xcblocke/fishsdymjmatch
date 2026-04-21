
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/view/AlertView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f2f3eSTXLVPEpNRlojX03lx', 'AlertView');
// Scripts/view/AlertView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var UIView_1 = require("../framework/ui/UIView");
var AlertView = /** @class */ (function (_super) {
    __extends(AlertView, _super);
    function AlertView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.cancelBtn = null;
        _this.sureBtn = null;
        _this.content = null;
        _this.sureCallback = null;
        _this.cancelCallback = null;
        _this.autoClose = false;
        return _this;
    }
    AlertView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.cancelBtn = cc.find("Container/main_img_bg/cancelBtn", this.node);
        this.cancelBtn.active = false;
        this.sureBtn = cc.find("Container/main_img_bg/sureBtn", this.node);
        this.sureBtn.active = false;
        this.content = cc.find("Container/main_img_bg/scrollview/view/content/tipsContent", this.node).getComponent(cc.Label);
        this.OnButtonClick(this.cancelBtn, this.onCancelBtnClick.bind(this));
        this.OnButtonClick(this.sureBtn, this.onSureBtnClick.bind(this));
    };
    AlertView.prototype.show = function (e) {
        this.content.string = e.content || "";
        this.sureCallback = e.sureCallback || null;
        this.cancelCallback = e.cancelCallback || null;
        this.autoClose = e.autoClose || false;
        e.cancelCallback && (this.cancelBtn.active = true);
        e.sureCallback && (this.sureBtn.active = true);
    };
    AlertView.prototype.onCancelBtnClick = function () {
        var e;
        null === (e = this.cancelCallback) || void 0 === e || e.call(this);
        this.autoClose && this.delegate.close();
    };
    AlertView.prototype.onSureBtnClick = function () {
        var e;
        null === (e = this.sureCallback) || void 0 === e || e.call(this);
        this.autoClose && this.delegate.close();
    };
    AlertView.prefabUrl = "prefabs/common/Alert";
    AlertView = __decorate([
        mj.class
    ], AlertView);
    return AlertView;
}(UIView_1.default));
exports.default = AlertView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL3ZpZXcvQWxlcnRWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpREFBNEM7QUFFNUM7SUFBdUMsNkJBQU07SUFBN0M7UUFBQSxxRUFvQ0M7UUFuQ0MsZUFBUyxHQUFHLElBQUksQ0FBQztRQUNqQixhQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2YsYUFBTyxHQUFHLElBQUksQ0FBQztRQUNmLGtCQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLG9CQUFjLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLGVBQVMsR0FBRyxLQUFLLENBQUM7O0lBOEJwQixDQUFDO0lBNUJDLDBCQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxpQ0FBaUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQzlCLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQywrQkFBK0IsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQzVCLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQywyREFBMkQsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0SCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFDRCx3QkFBSSxHQUFKLFVBQUssQ0FBQztRQUNKLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUM7UUFDM0MsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQztRQUMvQyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxTQUFTLElBQUksS0FBSyxDQUFDO1FBQ3RDLENBQUMsQ0FBQyxjQUFjLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQztRQUNuRCxDQUFDLENBQUMsWUFBWSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUNELG9DQUFnQixHQUFoQjtRQUNFLElBQUksQ0FBQyxDQUFDO1FBQ04sSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDMUMsQ0FBQztJQUNELGtDQUFjLEdBQWQ7UUFDRSxJQUFJLENBQUMsQ0FBQztRQUNOLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzFDLENBQUM7SUE1Qk0sbUJBQVMsR0FBRyxzQkFBc0IsQ0FBQztJQVB2QixTQUFTO1FBRDdCLEVBQUUsQ0FBQyxLQUFLO09BQ1ksU0FBUyxDQW9DN0I7SUFBRCxnQkFBQztDQXBDRCxBQW9DQyxDQXBDc0MsZ0JBQU0sR0FvQzVDO2tCQXBDb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVSVZpZXcgZnJvbSAnLi4vZnJhbWV3b3JrL3VpL1VJVmlldyc7XG5AbWouY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFsZXJ0VmlldyBleHRlbmRzIFVJVmlldyB7XG4gIGNhbmNlbEJ0biA9IG51bGw7XG4gIHN1cmVCdG4gPSBudWxsO1xuICBjb250ZW50ID0gbnVsbDtcbiAgc3VyZUNhbGxiYWNrID0gbnVsbDtcbiAgY2FuY2VsQ2FsbGJhY2sgPSBudWxsO1xuICBhdXRvQ2xvc2UgPSBmYWxzZTtcbiAgc3RhdGljIHByZWZhYlVybCA9IFwicHJlZmFicy9jb21tb24vQWxlcnRcIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuY2FuY2VsQnRuID0gY2MuZmluZChcIkNvbnRhaW5lci9tYWluX2ltZ19iZy9jYW5jZWxCdG5cIiwgdGhpcy5ub2RlKTtcbiAgICB0aGlzLmNhbmNlbEJ0bi5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLnN1cmVCdG4gPSBjYy5maW5kKFwiQ29udGFpbmVyL21haW5faW1nX2JnL3N1cmVCdG5cIiwgdGhpcy5ub2RlKTtcbiAgICB0aGlzLnN1cmVCdG4uYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5jb250ZW50ID0gY2MuZmluZChcIkNvbnRhaW5lci9tYWluX2ltZ19iZy9zY3JvbGx2aWV3L3ZpZXcvY29udGVudC90aXBzQ29udGVudFwiLCB0aGlzLm5vZGUpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgdGhpcy5PbkJ1dHRvbkNsaWNrKHRoaXMuY2FuY2VsQnRuLCB0aGlzLm9uQ2FuY2VsQnRuQ2xpY2suYmluZCh0aGlzKSk7XG4gICAgdGhpcy5PbkJ1dHRvbkNsaWNrKHRoaXMuc3VyZUJ0biwgdGhpcy5vblN1cmVCdG5DbGljay5iaW5kKHRoaXMpKTtcbiAgfVxuICBzaG93KGUpIHtcbiAgICB0aGlzLmNvbnRlbnQuc3RyaW5nID0gZS5jb250ZW50IHx8IFwiXCI7XG4gICAgdGhpcy5zdXJlQ2FsbGJhY2sgPSBlLnN1cmVDYWxsYmFjayB8fCBudWxsO1xuICAgIHRoaXMuY2FuY2VsQ2FsbGJhY2sgPSBlLmNhbmNlbENhbGxiYWNrIHx8IG51bGw7XG4gICAgdGhpcy5hdXRvQ2xvc2UgPSBlLmF1dG9DbG9zZSB8fCBmYWxzZTtcbiAgICBlLmNhbmNlbENhbGxiYWNrICYmICh0aGlzLmNhbmNlbEJ0bi5hY3RpdmUgPSB0cnVlKTtcbiAgICBlLnN1cmVDYWxsYmFjayAmJiAodGhpcy5zdXJlQnRuLmFjdGl2ZSA9IHRydWUpO1xuICB9XG4gIG9uQ2FuY2VsQnRuQ2xpY2soKSB7XG4gICAgdmFyIGU7XG4gICAgbnVsbCA9PT0gKGUgPSB0aGlzLmNhbmNlbENhbGxiYWNrKSB8fCB2b2lkIDAgPT09IGUgfHwgZS5jYWxsKHRoaXMpO1xuICAgIHRoaXMuYXV0b0Nsb3NlICYmIHRoaXMuZGVsZWdhdGUuY2xvc2UoKTtcbiAgfVxuICBvblN1cmVCdG5DbGljaygpIHtcbiAgICB2YXIgZTtcbiAgICBudWxsID09PSAoZSA9IHRoaXMuc3VyZUNhbGxiYWNrKSB8fCB2b2lkIDAgPT09IGUgfHwgZS5jYWxsKHRoaXMpO1xuICAgIHRoaXMuYXV0b0Nsb3NlICYmIHRoaXMuZGVsZWdhdGUuY2xvc2UoKTtcbiAgfVxufSJdfQ==