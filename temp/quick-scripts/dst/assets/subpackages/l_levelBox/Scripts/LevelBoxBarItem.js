
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_levelBox/Scripts/LevelBoxBarItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5bb73WOThpFzYrJFRToUXpn', 'LevelBoxBarItem');
// subpackages/l_levelBox/Scripts/LevelBoxBarItem.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ELevelBoxBarPos = exports.ELevelBoxBarState = void 0;
var BaseUI_1 = require("../../../Scripts/framework/ui/BaseUI");
var ELevelBoxBarState;
(function (ELevelBoxBarState) {
    ELevelBoxBarState[ELevelBoxBarState["Node"] = 0] = "Node";
    ELevelBoxBarState[ELevelBoxBarState["Normal"] = 1] = "Normal";
    ELevelBoxBarState[ELevelBoxBarState["HighLight"] = 2] = "HighLight";
    ELevelBoxBarState[ELevelBoxBarState["Completed"] = 3] = "Completed";
})(ELevelBoxBarState = exports.ELevelBoxBarState || (exports.ELevelBoxBarState = {}));
var ELevelBoxBarPos;
(function (ELevelBoxBarPos) {
    ELevelBoxBarPos[ELevelBoxBarPos["First"] = 0] = "First";
    ELevelBoxBarPos[ELevelBoxBarPos["Middle"] = 1] = "Middle";
    ELevelBoxBarPos[ELevelBoxBarPos["Last"] = 2] = "Last";
})(ELevelBoxBarPos = exports.ELevelBoxBarPos || (exports.ELevelBoxBarPos = {}));
var LevelBoxBarItem = /** @class */ (function (_super) {
    __extends(LevelBoxBarItem, _super);
    function LevelBoxBarItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._barBg = null;
        _this._bar = null;
        _this._highLight = null;
        _this._barNode = null;
        _this.pathIndex = ELevelBoxBarPos.Middle;
        return _this;
    }
    Object.defineProperty(LevelBoxBarItem.prototype, "barBg", {
        get: function () {
            if (this._barBg)
                return this._barBg;
            this._barBg = cc.find("n" + this.pathIndex + "/bg", this.node);
            return this._barBg;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LevelBoxBarItem.prototype, "bar", {
        get: function () {
            if (this._bar)
                return this._bar;
            this._bar = cc.find("n" + this.pathIndex + "/bar", this.node);
            return this._bar;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LevelBoxBarItem.prototype, "highLight", {
        get: function () {
            if (this._highLight)
                return this._highLight;
            this._highLight = cc.find("n" + this.pathIndex + "/light", this.node);
            return this._highLight;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LevelBoxBarItem.prototype, "barNode", {
        get: function () {
            if (this._barNode)
                return this._barNode;
            this._barNode = cc.find("n" + this.pathIndex, this.node);
            return this._barNode;
        },
        enumerable: false,
        configurable: true
    });
    LevelBoxBarItem.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.setState(ELevelBoxBarState.Normal);
    };
    LevelBoxBarItem.prototype.setPathIndex = function (t) {
        this.pathIndex = t;
    };
    LevelBoxBarItem.prototype.setItemSize = function (t) {
        this.node.width = t;
        for (var e = 0; e < 3; e++) {
            var i = cc.find("n" + e, this.node);
            if (cc.isValid(i)) {
                i.width = t;
                i.getChildByName("bg").width = t;
                i.getChildByName("bar").width = t - 4;
                i.getChildByName("light").width = t - 4;
            }
        }
    };
    LevelBoxBarItem.prototype.setState = function (t) {
        if (cc.isValid(this.barNode) && cc.isValid(this.bar) && cc.isValid(this.highLight) && cc.isValid(this.barBg)) {
            cc.Tween.stopAllByTarget(this.bar);
            cc.Tween.stopAllByTarget(this.highLight);
            switch (t) {
                case ELevelBoxBarState.Normal:
                    this.barNode.active = true;
                    this.barBg.active = true;
                    this.bar.active = false;
                    this.highLight.active = false;
                    break;
                case ELevelBoxBarState.HighLight:
                    this.playHighLight();
                    break;
                case ELevelBoxBarState.Completed:
                    this.barNode.active = true;
                    this.bar.active = true;
                    this.highLight.active = false;
            }
        }
    };
    LevelBoxBarItem.prototype.playHighLight = function () {
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
                t.setState(ELevelBoxBarState.Completed);
            });
            e.clone(this.bar).start();
            cc.tween(this.highLight).parallel(e.clone(), i.clone()).start();
        }
    };
    LevelBoxBarItem.prefabUrl = "prefabs/levelBox/BarItem";
    LevelBoxBarItem = __decorate([
        mj.class
    ], LevelBoxBarItem);
    return LevelBoxBarItem;
}(BaseUI_1.default));
exports.default = LevelBoxBarItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2xldmVsQm94L1NjcmlwdHMvTGV2ZWxCb3hCYXJJdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0RBQTBEO0FBQzFELElBQVksaUJBS1g7QUFMRCxXQUFZLGlCQUFpQjtJQUMzQix5REFBUSxDQUFBO0lBQ1IsNkRBQVUsQ0FBQTtJQUNWLG1FQUFhLENBQUE7SUFDYixtRUFBYSxDQUFBO0FBQ2YsQ0FBQyxFQUxXLGlCQUFpQixHQUFqQix5QkFBaUIsS0FBakIseUJBQWlCLFFBSzVCO0FBQ0QsSUFBWSxlQUlYO0FBSkQsV0FBWSxlQUFlO0lBQ3pCLHVEQUFTLENBQUE7SUFDVCx5REFBVSxDQUFBO0lBQ1YscURBQVEsQ0FBQTtBQUNWLENBQUMsRUFKVyxlQUFlLEdBQWYsdUJBQWUsS0FBZix1QkFBZSxRQUkxQjtBQUVEO0lBQTZDLG1DQUFNO0lBQW5EO1FBQUEscUVBb0dDO1FBbkdDLFlBQU0sR0FBRyxJQUFJLENBQUM7UUFDZCxVQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ1osZ0JBQVUsR0FBRyxJQUFJLENBQUM7UUFDbEIsY0FBUSxHQUFHLElBQUksQ0FBQztRQUNoQixlQUFTLEdBQUcsZUFBZSxDQUFDLE1BQU0sQ0FBQzs7SUErRnJDLENBQUM7SUE3RkMsc0JBQUksa0NBQUs7YUFBVDtZQUNFLElBQUksSUFBSSxDQUFDLE1BQU07Z0JBQUUsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQ3BDLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQy9ELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNyQixDQUFDOzs7T0FBQTtJQUNELHNCQUFJLGdDQUFHO2FBQVA7WUFDRSxJQUFJLElBQUksQ0FBQyxJQUFJO2dCQUFFLE9BQU8s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LGdCQUFNLEdBb0dsRDtrQkFwR29CLGVBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZVVJIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3VpL0Jhc2VVSSc7XG5leHBvcnQgZW51bSBFTGV2ZWxCb3hCYXJTdGF0ZSB7XG4gIE5vZGUgPSAwLFxuICBOb3JtYWwgPSAxLFxuICBIaWdoTGlnaHQgPSAyLFxuICBDb21wbGV0ZWQgPSAzLFxufVxuZXhwb3J0IGVudW0gRUxldmVsQm94QmFyUG9zIHtcbiAgRmlyc3QgPSAwLFxuICBNaWRkbGUgPSAxLFxuICBMYXN0ID0gMixcbn1cbkBtai5jbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGV2ZWxCb3hCYXJJdGVtIGV4dGVuZHMgQmFzZVVJIHtcbiAgX2JhckJnID0gbnVsbDtcbiAgX2JhciA9IG51bGw7XG4gIF9oaWdoTGlnaHQgPSBudWxsO1xuICBfYmFyTm9kZSA9IG51bGw7XG4gIHBhdGhJbmRleCA9IEVMZXZlbEJveEJhclBvcy5NaWRkbGU7XG4gIHN0YXRpYyBwcmVmYWJVcmwgPSBcInByZWZhYnMvbGV2ZWxCb3gvQmFySXRlbVwiO1xuICBnZXQgYmFyQmcoKSB7XG4gICAgaWYgKHRoaXMuX2JhckJnKSByZXR1cm4gdGhpcy5fYmFyQmc7XG4gICAgdGhpcy5fYmFyQmcgPSBjYy5maW5kKFwiblwiICsgdGhpcy5wYXRoSW5kZXggKyBcIi9iZ1wiLCB0aGlzLm5vZGUpO1xuICAgIHJldHVybiB0aGlzLl9iYXJCZztcbiAgfVxuICBnZXQgYmFyKCkge1xuICAgIGlmICh0aGlzLl9iYXIpIHJldHVybiB0aGlzLl9iYXI7XG4gICAgdGhpcy5fYmFyID0gY2MuZmluZChcIm5cIiArIHRoaXMucGF0aEluZGV4ICsgXCIvYmFyXCIsIHRoaXMubm9kZSk7XG4gICAgcmV0dXJuIHRoaXMuX2JhcjtcbiAgfVxuICBnZXQgaGlnaExpZ2h0KCkge1xuICAgIGlmICh0aGlzLl9oaWdoTGlnaHQpIHJldHVybiB0aGlzLl9oaWdoTGlnaHQ7XG4gICAgdGhpcy5faGlnaExpZ2h0ID0gY2MuZmluZChcIm5cIiArIHRoaXMucGF0aEluZGV4ICsgXCIvbGlnaHRcIiwgdGhpcy5ub2RlKTtcbiAgICByZXR1cm4gdGhpcy5faGlnaExpZ2h0O1xuICB9XG4gIGdldCBiYXJOb2RlKCkge1xuICAgIGlmICh0aGlzLl9iYXJOb2RlKSByZXR1cm4gdGhpcy5fYmFyTm9kZTtcbiAgICB0aGlzLl9iYXJOb2RlID0gY2MuZmluZChcIm5cIiArIHRoaXMucGF0aEluZGV4LCB0aGlzLm5vZGUpO1xuICAgIHJldHVybiB0aGlzLl9iYXJOb2RlO1xuICB9XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLnNldFN0YXRlKEVMZXZlbEJveEJhclN0YXRlLk5vcm1hbCk7XG4gIH1cbiAgc2V0UGF0aEluZGV4KHQpIHtcbiAgICB0aGlzLnBhdGhJbmRleCA9IHQ7XG4gIH1cbiAgc2V0SXRlbVNpemUodCkge1xuICAgIHRoaXMubm9kZS53aWR0aCA9IHQ7XG4gICAgZm9yICh2YXIgZSA9IDA7IGUgPCAzOyBlKyspIHtcbiAgICAgIHZhciBpID0gY2MuZmluZChcIm5cIiArIGUsIHRoaXMubm9kZSk7XG4gICAgICBpZiAoY2MuaXNWYWxpZChpKSkge1xuICAgICAgICBpLndpZHRoID0gdDtcbiAgICAgICAgaS5nZXRDaGlsZEJ5TmFtZShcImJnXCIpLndpZHRoID0gdDtcbiAgICAgICAgaS5nZXRDaGlsZEJ5TmFtZShcImJhclwiKS53aWR0aCA9IHQgLSA0O1xuICAgICAgICBpLmdldENoaWxkQnlOYW1lKFwibGlnaHRcIikud2lkdGggPSB0IC0gNDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgc2V0U3RhdGUodCkge1xuICAgIGlmIChjYy5pc1ZhbGlkKHRoaXMuYmFyTm9kZSkgJiYgY2MuaXNWYWxpZCh0aGlzLmJhcikgJiYgY2MuaXNWYWxpZCh0aGlzLmhpZ2hMaWdodCkgJiYgY2MuaXNWYWxpZCh0aGlzLmJhckJnKSkge1xuICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMuYmFyKTtcbiAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0aGlzLmhpZ2hMaWdodCk7XG4gICAgICBzd2l0Y2ggKHQpIHtcbiAgICAgICAgY2FzZSBFTGV2ZWxCb3hCYXJTdGF0ZS5Ob3JtYWw6XG4gICAgICAgICAgdGhpcy5iYXJOb2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgdGhpcy5iYXJCZy5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuYmFyLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuaGlnaExpZ2h0LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIEVMZXZlbEJveEJhclN0YXRlLkhpZ2hMaWdodDpcbiAgICAgICAgICB0aGlzLnBsYXlIaWdoTGlnaHQoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBFTGV2ZWxCb3hCYXJTdGF0ZS5Db21wbGV0ZWQ6XG4gICAgICAgICAgdGhpcy5iYXJOb2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgdGhpcy5iYXIuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLmhpZ2hMaWdodC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcGxheUhpZ2hMaWdodCgpIHtcbiAgICB2YXIgdCA9IHRoaXM7XG4gICAgaWYgKGNjLmlzVmFsaWQodGhpcy5iYXIpICYmIGNjLmlzVmFsaWQodGhpcy5oaWdoTGlnaHQpKSB7XG4gICAgICB0aGlzLmJhck5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgIHRoaXMuYmFyLmFjdGl2ZSA9IHRydWU7XG4gICAgICB0aGlzLmhpZ2hMaWdodC5hY3RpdmUgPSB0cnVlO1xuICAgICAgdGhpcy5iYXIuc2V0U2NhbGUoMC4yLCAxKTtcbiAgICAgIHRoaXMuaGlnaExpZ2h0LnNldFNjYWxlKDAuMiwgMSk7XG4gICAgICB0aGlzLmhpZ2hMaWdodC5vcGFjaXR5ID0gMDtcbiAgICAgIHZhciBlID0gY2MudHdlZW4oKS50bygwLjE3LCB7XG4gICAgICAgICAgc2NhbGVYOiAxLjA1XG4gICAgICAgIH0sIHtcbiAgICAgICAgICBlYXNpbmc6IGNjLmVhc2luZy5xdWFkT3V0XG4gICAgICAgIH0pLnRvKDAuMTMsIHtcbiAgICAgICAgICBzY2FsZVg6IDFcbiAgICAgICAgfSwge1xuICAgICAgICAgIGVhc2luZzogY2MuZWFzaW5nLnF1YWRJblxuICAgICAgICB9KSxcbiAgICAgICAgaSA9IGNjLnR3ZWVuKCkudG8oMC4xMywge1xuICAgICAgICAgIG9wYWNpdHk6IDI1NVxuICAgICAgICB9LCB7XG4gICAgICAgICAgZWFzaW5nOiBjYy5lYXNpbmcucXVhZE91dFxuICAgICAgICB9KS50bygwLjU3LCB7XG4gICAgICAgICAgb3BhY2l0eTogMFxuICAgICAgICB9LCB7XG4gICAgICAgICAgZWFzaW5nOiBjYy5lYXNpbmcuc2luZU91dFxuICAgICAgICB9KS5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB0LnNldFN0YXRlKEVMZXZlbEJveEJhclN0YXRlLkNvbXBsZXRlZCk7XG4gICAgICAgIH0pO1xuICAgICAgZS5jbG9uZSh0aGlzLmJhcikuc3RhcnQoKTtcbiAgICAgIGNjLnR3ZWVuKHRoaXMuaGlnaExpZ2h0KS5wYXJhbGxlbChlLmNsb25lKCksIGkuY2xvbmUoKSkuc3RhcnQoKTtcbiAgICB9XG4gIH1cbn0iXX0=