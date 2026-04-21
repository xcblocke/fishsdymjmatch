
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/base/ui/BaseCell.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '234ee7Y4zBCK71eSrKJykKs', 'BaseCell');
// Scripts/base/ui/BaseCell.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseUI_1 = require("../../framework/ui/BaseUI");
var ResManager_1 = require("../../framework/manager/ResManager");
var BaseCell = /** @class */ (function (_super) {
    __extends(BaseCell, _super);
    function BaseCell() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BaseCell_1 = BaseCell;
    BaseCell.adapter = function (e) {
        e.isAlignTop = true;
        e.isAlignBottom = true;
        e.isAlignLeft = true;
        e.isAlignRight = true;
        e.isAbsoluteBottom = true;
        e.isAbsoluteTop = true;
        e.isAbsoluteLeft = true;
        e.isAbsoluteRight = true;
        e.left = 0;
        e.bottom = 0;
        e.right = 0;
        e.top = 0;
    };
    BaseCell.createCell = function (e, t) {
        if (t === void 0) { t = true; }
        var n = new cc.Node();
        n.cellType = e || "default";
        var i = n.addComponent(this);
        ResManager_1.resManager.loadRes(this.prefabUrl, cc.Prefab, this.bundleName).then(function (e) {
            var r = Array.isArray(e) ? e[0] : e;
            if (cc.isValid(r)) {
                i.cacheRes(r);
                if (cc.isValid(n)) {
                    var a = cc.instantiate(r);
                    n.setContentSize(a.getContentSize());
                    i.addUI(a);
                    if (t) {
                        var l = a.getComponent(cc.Widget);
                        if (!l) {
                            l = a.addComponent(cc.Widget);
                            BaseCell_1.adapter(l);
                        }
                    }
                }
            }
        }).catch(function () { });
        return n;
    };
    BaseCell.prototype.addUI = function (e) {
        this.node.addChild(e);
        this._cellUI = e;
        this.uiOnLoad();
        this._data && this.updateUI();
    };
    BaseCell.prototype.updateCell = function (e) {
        this._data = e;
        this._cellUI && cc.isValid(this._cellUI) && this.updateUI();
    };
    BaseCell.prototype.getData = function () {
        return this._data;
    };
    var BaseCell_1;
    BaseCell.prefabUrl = "";
    BaseCell = BaseCell_1 = __decorate([
        mj.class
    ], BaseCell);
    return BaseCell;
}(BaseUI_1.default));
exports.default = BaseCell;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2Jhc2UvdWkvQmFzZUNlbGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9EQUErQztBQUMvQyxpRUFBZ0U7QUFFaEU7SUFBc0MsNEJBQU07SUFBNUM7O0lBcURBLENBQUM7aUJBckRvQixRQUFRO0lBRXBCLGdCQUFPLEdBQWQsVUFBZSxDQUFDO1FBQ2QsQ0FBQyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDcEIsQ0FBQyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFDdkIsQ0FBQyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDckIsQ0FBQyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDdEIsQ0FBQyxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztRQUMxQixDQUFDLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztRQUN2QixDQUFDLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztRQUN4QixDQUFDLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUN6QixDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztRQUNYLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ2IsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDWixDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztJQUNaLENBQUM7SUFDTSxtQkFBVSxHQUFqQixVQUFrQixDQUFDLEVBQUUsQ0FBUTtRQUFSLGtCQUFBLEVBQUEsUUFBUTtRQUMzQixJQUFJLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN0QixDQUFDLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxTQUFTLENBQUM7UUFDNUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3Qix1QkFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDN0UsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNqQixDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNkLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtvQkFDakIsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDMUIsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztvQkFDckMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDWCxJQUFJLENBQUMsRUFBRTt3QkFDTCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQzt3QkFDbEMsSUFBSSxDQUFDLENBQUMsRUFBRTs0QkFDTixDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7NEJBQzlCLFVBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7eUJBQ3JCO3FCQUNGO2lCQUNGO2FBQ0Y7UUFDSCxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsY0FBYSxDQUFDLENBQUMsQ0FBQztRQUN6QixPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7SUFDRCx3QkFBSyxHQUFMLFVBQU0sQ0FBQztRQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBQ0QsNkJBQVUsR0FBVixVQUFXLENBQUM7UUFDVixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzlELENBQUM7SUFDRCwwQkFBTyxHQUFQO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7O0lBbkRNLGtCQUFTLEdBQUcsRUFBRSxDQUFDO0lBREgsUUFBUTtRQUQ1QixFQUFFLENBQUMsS0FBSztPQUNZLFFBQVEsQ0FxRDVCO0lBQUQsZUFBQztDQXJERCxBQXFEQyxDQXJEcUMsZ0JBQU0sR0FxRDNDO2tCQXJEb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlVUkgZnJvbSAnLi4vLi4vZnJhbWV3b3JrL3VpL0Jhc2VVSSc7XG5pbXBvcnQgeyByZXNNYW5hZ2VyIH0gZnJvbSAnLi4vLi4vZnJhbWV3b3JrL21hbmFnZXIvUmVzTWFuYWdlcic7XG5AbWouY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VDZWxsIGV4dGVuZHMgQmFzZVVJIHtcbiAgc3RhdGljIHByZWZhYlVybCA9IFwiXCI7XG4gIHN0YXRpYyBhZGFwdGVyKGUpIHtcbiAgICBlLmlzQWxpZ25Ub3AgPSB0cnVlO1xuICAgIGUuaXNBbGlnbkJvdHRvbSA9IHRydWU7XG4gICAgZS5pc0FsaWduTGVmdCA9IHRydWU7XG4gICAgZS5pc0FsaWduUmlnaHQgPSB0cnVlO1xuICAgIGUuaXNBYnNvbHV0ZUJvdHRvbSA9IHRydWU7XG4gICAgZS5pc0Fic29sdXRlVG9wID0gdHJ1ZTtcbiAgICBlLmlzQWJzb2x1dGVMZWZ0ID0gdHJ1ZTtcbiAgICBlLmlzQWJzb2x1dGVSaWdodCA9IHRydWU7XG4gICAgZS5sZWZ0ID0gMDtcbiAgICBlLmJvdHRvbSA9IDA7XG4gICAgZS5yaWdodCA9IDA7XG4gICAgZS50b3AgPSAwO1xuICB9XG4gIHN0YXRpYyBjcmVhdGVDZWxsKGUsIHQgPSB0cnVlKSB7XG4gICAgdmFyIG4gPSBuZXcgY2MuTm9kZSgpO1xuICAgIG4uY2VsbFR5cGUgPSBlIHx8IFwiZGVmYXVsdFwiO1xuICAgIHZhciBpID0gbi5hZGRDb21wb25lbnQodGhpcyk7XG4gICAgcmVzTWFuYWdlci5sb2FkUmVzKHRoaXMucHJlZmFiVXJsLCBjYy5QcmVmYWIsIHRoaXMuYnVuZGxlTmFtZSkudGhlbihmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIHIgPSBBcnJheS5pc0FycmF5KGUpID8gZVswXSA6IGU7XG4gICAgICBpZiAoY2MuaXNWYWxpZChyKSkge1xuICAgICAgICBpLmNhY2hlUmVzKHIpO1xuICAgICAgICBpZiAoY2MuaXNWYWxpZChuKSkge1xuICAgICAgICAgIHZhciBhID0gY2MuaW5zdGFudGlhdGUocik7XG4gICAgICAgICAgbi5zZXRDb250ZW50U2l6ZShhLmdldENvbnRlbnRTaXplKCkpO1xuICAgICAgICAgIGkuYWRkVUkoYSk7XG4gICAgICAgICAgaWYgKHQpIHtcbiAgICAgICAgICAgIHZhciBsID0gYS5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KTtcbiAgICAgICAgICAgIGlmICghbCkge1xuICAgICAgICAgICAgICBsID0gYS5hZGRDb21wb25lbnQoY2MuV2lkZ2V0KTtcbiAgICAgICAgICAgICAgQmFzZUNlbGwuYWRhcHRlcihsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoKSB7fSk7XG4gICAgcmV0dXJuIG47XG4gIH1cbiAgYWRkVUkoZSkge1xuICAgIHRoaXMubm9kZS5hZGRDaGlsZChlKTtcbiAgICB0aGlzLl9jZWxsVUkgPSBlO1xuICAgIHRoaXMudWlPbkxvYWQoKTtcbiAgICB0aGlzLl9kYXRhICYmIHRoaXMudXBkYXRlVUkoKTtcbiAgfVxuICB1cGRhdGVDZWxsKGUpIHtcbiAgICB0aGlzLl9kYXRhID0gZTtcbiAgICB0aGlzLl9jZWxsVUkgJiYgY2MuaXNWYWxpZCh0aGlzLl9jZWxsVUkpICYmIHRoaXMudXBkYXRlVUkoKTtcbiAgfVxuICBnZXREYXRhKCkge1xuICAgIHJldHVybiB0aGlzLl9kYXRhO1xuICB9XG59Il19