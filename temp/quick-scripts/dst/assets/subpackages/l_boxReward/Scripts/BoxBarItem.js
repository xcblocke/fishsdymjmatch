
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_boxReward/Scripts/BoxBarItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9d17eZKZ7JA2rpdkgTjtKyC', 'BoxBarItem');
// subpackages/l_boxReward/Scripts/BoxBarItem.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.EBoxBarPos = exports.EBoxBarItemState = void 0;
var BaseUI_1 = require("../../../Scripts/framework/ui/BaseUI");
var EBoxBarItemState;
(function (EBoxBarItemState) {
    EBoxBarItemState[EBoxBarItemState["Node"] = 0] = "Node";
    EBoxBarItemState[EBoxBarItemState["Normal"] = 1] = "Normal";
    EBoxBarItemState[EBoxBarItemState["HighLight"] = 2] = "HighLight";
    EBoxBarItemState[EBoxBarItemState["Completed"] = 3] = "Completed";
})(EBoxBarItemState = exports.EBoxBarItemState || (exports.EBoxBarItemState = {}));
var EBoxBarPos;
(function (EBoxBarPos) {
    EBoxBarPos[EBoxBarPos["First"] = 0] = "First";
    EBoxBarPos[EBoxBarPos["Middle"] = 1] = "Middle";
    EBoxBarPos[EBoxBarPos["Last"] = 2] = "Last";
})(EBoxBarPos = exports.EBoxBarPos || (exports.EBoxBarPos = {}));
var BoxBarItem = /** @class */ (function (_super) {
    __extends(BoxBarItem, _super);
    function BoxBarItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nodeIndex = -1;
        _this._barBg = null;
        _this._bar = null;
        _this._highLight = null;
        _this._barNode = null;
        _this.pathIndex = EBoxBarPos.Middle;
        return _this;
    }
    Object.defineProperty(BoxBarItem.prototype, "barBg", {
        get: function () {
            if (this._barBg)
                return this._barBg;
            this._barBg = cc.find("n" + this.pathIndex + "/bg", this.node);
            return this._barBg;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BoxBarItem.prototype, "bar", {
        get: function () {
            if (this._bar)
                return this._bar;
            this._bar = cc.find("n" + this.pathIndex + "/bar", this.node);
            return this._bar;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BoxBarItem.prototype, "highLight", {
        get: function () {
            if (this._highLight)
                return this._highLight;
            this._highLight = cc.find("n" + this.pathIndex + "/light", this.node);
            return this._highLight;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BoxBarItem.prototype, "barNode", {
        get: function () {
            if (this._barNode)
                return this._barNode;
            this._barNode = cc.find("n" + this.pathIndex, this.node);
            return this._barNode;
        },
        enumerable: false,
        configurable: true
    });
    BoxBarItem.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.setState(EBoxBarItemState.Normal);
    };
    BoxBarItem.prototype.setPathIndex = function (t) {
        this.pathIndex = t;
    };
    BoxBarItem.prototype.setState = function (t) {
        if (cc.isValid(this.barNode) && cc.isValid(this.bar) && cc.isValid(this.highLight) && cc.isValid(this.barBg)) {
            cc.Tween.stopAllByTarget(this.bar);
            cc.Tween.stopAllByTarget(this.highLight);
            switch (t) {
                case EBoxBarItemState.Normal:
                    this.barNode.active = true;
                    this.barBg.active = true;
                    this.bar.active = false;
                    this.highLight.active = false;
                    break;
                case EBoxBarItemState.HighLight:
                    this.playHighLight();
                    break;
                case EBoxBarItemState.Completed:
                    this.barNode.active = true;
                    this.bar.active = true;
                    this.highLight.active = false;
            }
        }
    };
    BoxBarItem.prototype.playHighLight = function () {
        var t = this;
        if (cc.isValid(this.bar) && cc.isValid(this.highLight)) {
            this.barNode.active = true;
            this.bar.active = true;
            this.highLight.active = true;
            this.bar.setScale(0.2, 1);
            this.highLight.setScale(0.2, 1);
            this.highLight.opacity = 0;
            var e = cc.tween().to(0.17, {
                scaleX: 1.05
            }, {
                easing: cc.easing.quadOut
            }).to(0.13, {
                scaleX: 1
            }, {
                easing: cc.easing.quadIn
            }), i = cc.tween().to(0.13, {
                opacity: 255
            }, {
                easing: cc.easing.quadOut
            }).to(0.57, {
                opacity: 0
            }, {
                easing: cc.easing.sineOut
            }).call(function () {
                t.setState(EBoxBarItemState.Completed);
            });
            e.clone(this.bar).start();
            cc.tween(this.highLight).parallel(e.clone(), i.clone()).start();
        }
    };
    BoxBarItem.prefabUrl = "prefabs/boxReward/BoxBarItem";
    BoxBarItem = __decorate([
        mj.class
    ], BoxBarItem);
    return BoxBarItem;
}(BaseUI_1.default));
exports.default = BoxBarItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2JveFJld2FyZC9TY3JpcHRzL0JveEJhckl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrREFBMEQ7QUFDMUQsSUFBWSxnQkFLWDtBQUxELFdBQVksZ0JBQWdCO0lBQzFCLHVEQUFRLENBQUE7SUFDUiwyREFBVSxDQUFBO0lBQ1YsaUVBQWEsQ0FBQTtJQUNiLGlFQUFhLENBQUE7QUFDZixDQUFDLEVBTFcsZ0JBQWdCLEdBQWhCLHdCQUFnQixLQUFoQix3QkFBZ0IsUUFLM0I7QUFDRCxJQUFZLFVBSVg7QUFKRCxXQUFZLFVBQVU7SUFDcEIsNkNBQVMsQ0FBQTtJQUNULCtDQUFVLENBQUE7SUFDViwyQ0FBUSxDQUFBO0FBQ1YsQ0FBQyxFQUpXLFVBQVUsR0FBVixrQkFBVSxLQUFWLGtCQUFVLFFBSXJCO0FBRUQ7SUFBd0MsOEJBQU07SUFBOUM7UUFBQSxxRUF5RkM7UUF4RkMsZUFBUyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2YsWUFBTSxHQUFHLElBQUksQ0FBQztRQUNkLFVBQUksR0FBRyxJQUFJLENBQUM7UUFDWixnQkFBVSxHQUFHLElBQUksQ0FBQztRQUNsQixjQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLGVBQVMsR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDOztJQW1GaEMsQ0FBQztJQWpGQyxzQkFBSSw2QkFBSzthQUFUO1lBQ0UsSUFBSSxJQUFJLENBQUMsTUFBTTtnQkFBRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDcEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDL0QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3JCLENBQUM7OztPQUFBO0lBQ0Qsc0JBQUksMkJBQUc7YUFBUDtZQUNFLElBQUks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TixDQUFDLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3pDLENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDMUIsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNqRTtJQUNILENBQUM7SUFqRk0sb0JBQVMsR0FBRyw4QkFBOEIsQ0FBQztJQVAvQixVQUFVO1FBRDlCLEVBQUUsQ0FBQyxLQUFLO09BQ1ksVUFBVSxDQXlGOUI7SUFBRCxpQkFBQztDQXpGRCxBQXlGQyxDQXpGdUMsZ0JBQU0sR0F5RjdDO2tCQXpGb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlVUkgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdWkvQmFzZVVJJztcbmV4cG9ydCBlbnVtIEVCb3hCYXJJdGVtU3RhdGUge1xuICBOb2RlID0gMCxcbiAgTm9ybWFsID0gMSxcbiAgSGlnaExpZ2h0ID0gMixcbiAgQ29tcGxldGVkID0gMyxcbn1cbmV4cG9ydCBlbnVtIEVCb3hCYXJQb3Mge1xuICBGaXJzdCA9IDAsXG4gIE1pZGRsZSA9IDEsXG4gIExhc3QgPSAyLFxufVxuQG1qLmNsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb3hCYXJJdGVtIGV4dGVuZHMgQmFzZVVJIHtcbiAgbm9kZUluZGV4ID0gLTE7XG4gIF9iYXJCZyA9IG51bGw7XG4gIF9iYXIgPSBudWxsO1xuICBfaGlnaExpZ2h0ID0gbnVsbDtcbiAgX2Jhck5vZGUgPSBudWxsO1xuICBwYXRoSW5kZXggPSBFQm94QmFyUG9zLk1pZGRsZTtcbiAgc3RhdGljIHByZWZhYlVybCA9IFwicHJlZmFicy9ib3hSZXdhcmQvQm94QmFySXRlbVwiO1xuICBnZXQgYmFyQmcoKSB7XG4gICAgaWYgKHRoaXMuX2JhckJnKSByZXR1cm4gdGhpcy5fYmFyQmc7XG4gICAgdGhpcy5fYmFyQmcgPSBjYy5maW5kKFwiblwiICsgdGhpcy5wYXRoSW5kZXggKyBcIi9iZ1wiLCB0aGlzLm5vZGUpO1xuICAgIHJldHVybiB0aGlzLl9iYXJCZztcbiAgfVxuICBnZXQgYmFyKCkge1xuICAgIGlmICh0aGlzLl9iYXIpIHJldHVybiB0aGlzLl9iYXI7XG4gICAgdGhpcy5fYmFyID0gY2MuZmluZChcIm5cIiArIHRoaXMucGF0aEluZGV4ICsgXCIvYmFyXCIsIHRoaXMubm9kZSk7XG4gICAgcmV0dXJuIHRoaXMuX2JhcjtcbiAgfVxuICBnZXQgaGlnaExpZ2h0KCkge1xuICAgIGlmICh0aGlzLl9oaWdoTGlnaHQpIHJldHVybiB0aGlzLl9oaWdoTGlnaHQ7XG4gICAgdGhpcy5faGlnaExpZ2h0ID0gY2MuZmluZChcIm5cIiArIHRoaXMucGF0aEluZGV4ICsgXCIvbGlnaHRcIiwgdGhpcy5ub2RlKTtcbiAgICByZXR1cm4gdGhpcy5faGlnaExpZ2h0O1xuICB9XG4gIGdldCBiYXJOb2RlKCkge1xuICAgIGlmICh0aGlzLl9iYXJOb2RlKSByZXR1cm4gdGhpcy5fYmFyTm9kZTtcbiAgICB0aGlzLl9iYXJOb2RlID0gY2MuZmluZChcIm5cIiArIHRoaXMucGF0aEluZGV4LCB0aGlzLm5vZGUpO1xuICAgIHJldHVybiB0aGlzLl9iYXJOb2RlO1xuICB9XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLnNldFN0YXRlKEVCb3hCYXJJdGVtU3RhdGUuTm9ybWFsKTtcbiAgfVxuICBzZXRQYXRoSW5kZXgodCkge1xuICAgIHRoaXMucGF0aEluZGV4ID0gdDtcbiAgfVxuICBzZXRTdGF0ZSh0KSB7XG4gICAgaWYgKGNjLmlzVmFsaWQodGhpcy5iYXJOb2RlKSAmJiBjYy5pc1ZhbGlkKHRoaXMuYmFyKSAmJiBjYy5pc1ZhbGlkKHRoaXMuaGlnaExpZ2h0KSAmJiBjYy5pc1ZhbGlkKHRoaXMuYmFyQmcpKSB7XG4gICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodGhpcy5iYXIpO1xuICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMuaGlnaExpZ2h0KTtcbiAgICAgIHN3aXRjaCAodCkge1xuICAgICAgICBjYXNlIEVCb3hCYXJJdGVtU3RhdGUuTm9ybWFsOlxuICAgICAgICAgIHRoaXMuYmFyTm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuYmFyQmcuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLmJhci5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmhpZ2hMaWdodC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBFQm94QmFySXRlbVN0YXRlLkhpZ2hMaWdodDpcbiAgICAgICAgICB0aGlzLnBsYXlIaWdoTGlnaHQoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBFQm94QmFySXRlbVN0YXRlLkNvbXBsZXRlZDpcbiAgICAgICAgICB0aGlzLmJhck5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLmJhci5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuaGlnaExpZ2h0LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBwbGF5SGlnaExpZ2h0KCkge1xuICAgIHZhciB0ID0gdGhpcztcbiAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLmJhcikgJiYgY2MuaXNWYWxpZCh0aGlzLmhpZ2hMaWdodCkpIHtcbiAgICAgIHRoaXMuYmFyTm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgdGhpcy5iYXIuYWN0aXZlID0gdHJ1ZTtcbiAgICAgIHRoaXMuaGlnaExpZ2h0LmFjdGl2ZSA9IHRydWU7XG4gICAgICB0aGlzLmJhci5zZXRTY2FsZSgwLjIsIDEpO1xuICAgICAgdGhpcy5oaWdoTGlnaHQuc2V0U2NhbGUoMC4yLCAxKTtcbiAgICAgIHRoaXMuaGlnaExpZ2h0Lm9wYWNpdHkgPSAwO1xuICAgICAgdmFyIGUgPSBjYy50d2VlbigpLnRvKDAuMTcsIHtcbiAgICAgICAgICBzY2FsZVg6IDEuMDVcbiAgICAgICAgfSwge1xuICAgICAgICAgIGVhc2luZzogY2MuZWFzaW5nLnF1YWRPdXRcbiAgICAgICAgfSkudG8oMC4xMywge1xuICAgICAgICAgIHNjYWxlWDogMVxuICAgICAgICB9LCB7XG4gICAgICAgICAgZWFzaW5nOiBjYy5lYXNpbmcucXVhZEluXG4gICAgICAgIH0pLFxuICAgICAgICBpID0gY2MudHdlZW4oKS50bygwLjEzLCB7XG4gICAgICAgICAgb3BhY2l0eTogMjU1XG4gICAgICAgIH0sIHtcbiAgICAgICAgICBlYXNpbmc6IGNjLmVhc2luZy5xdWFkT3V0XG4gICAgICAgIH0pLnRvKDAuNTcsIHtcbiAgICAgICAgICBvcGFjaXR5OiAwXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBlYXNpbmc6IGNjLmVhc2luZy5zaW5lT3V0XG4gICAgICAgIH0pLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHQuc2V0U3RhdGUoRUJveEJhckl0ZW1TdGF0ZS5Db21wbGV0ZWQpO1xuICAgICAgICB9KTtcbiAgICAgIGUuY2xvbmUodGhpcy5iYXIpLnN0YXJ0KCk7XG4gICAgICBjYy50d2Vlbih0aGlzLmhpZ2hMaWdodCkucGFyYWxsZWwoZS5jbG9uZSgpLCBpLmNsb25lKCkpLnN0YXJ0KCk7XG4gICAgfVxuICB9XG59Il19