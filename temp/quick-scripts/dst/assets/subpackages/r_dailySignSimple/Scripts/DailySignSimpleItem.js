
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_dailySignSimple/Scripts/DailySignSimpleItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '67f9foE++lG+5HoyDzgra+I', 'DailySignSimpleItem');
// subpackages/r_dailySignSimple/Scripts/DailySignSimpleItem.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseUI_1 = require("../../../Scripts/framework/ui/BaseUI");
var CommonUtils_1 = require("../../../Scripts/framework/utils/CommonUtils");
var DailySignSimpleModel_1 = require("./DailySignSimpleModel");
var DailySignSimpleItem = /** @class */ (function (_super) {
    __extends(DailySignSimpleItem, _super);
    function DailySignSimpleItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._nodeUncompleted = null;
        _this._nodeReady = null;
        _this._nodeClaimed = null;
        _this._nodeClaimedAni = null;
        _this._box = null;
        _this._btn = null;
        _this._index = 0;
        _this._model = null;
        _this._dayData = null;
        _this._currentState = DailySignSimpleModel_1.DailySignSimpleState.Uncompleted;
        _this.onClaimCallback = null;
        _this.onBoxClickCallback = null;
        return _this;
    }
    DailySignSimpleItem.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._model = DailySignSimpleModel_1.default.getInstance();
        this._nodeClaimed = this.node.getChildByName("node_getted");
        this._nodeClaimedAni = this._nodeClaimed.getChildByName("spine");
        this._nodeReady = this.node.getChildByName("node_isReady");
        this._nodeUncompleted = this.node.getChildByName("node_uncompletted");
        this._box = this.node.getChildByName("box");
        this._btn = this.node.getChildByName("btn");
        this.registerBoxClick();
    };
    DailySignSimpleItem.prototype.registerBoxClick = function () {
        this._btn && this.OnButtonClick(this._btn, this.onBoxClick.bind(this));
    };
    DailySignSimpleItem.prototype.onBoxClick = function () {
        if (this._currentState != DailySignSimpleModel_1.DailySignSimpleState.Claimed) {
            var t = this._box.convertToWorldSpaceAR(cc.Vec2.ZERO), e = cc.v3(t.x, t.y, 0);
            this.onBoxClickCallback && this.onBoxClickCallback(this._index, e);
        }
    };
    DailySignSimpleItem.prototype.setState = function (t) {
        var e = this._currentState;
        this._currentState = t;
        this._nodeUncompleted && (this._nodeUncompleted.active = t === DailySignSimpleModel_1.DailySignSimpleState.Uncompleted);
        this._nodeReady && (this._nodeReady.active = t === DailySignSimpleModel_1.DailySignSimpleState.Ready);
        this._nodeClaimed && (this._nodeClaimed.active = t === DailySignSimpleModel_1.DailySignSimpleState.Claimed);
        var i = this._box.getComponent(sp.Skeleton);
        if (i)
            if (t === DailySignSimpleModel_1.DailySignSimpleState.Uncompleted)
                CommonUtils_1.playSpineAnim(i, 1, this._index + 1 + "_init_1", null, false);
            else if (t === DailySignSimpleModel_1.DailySignSimpleState.Ready)
                ;
            else if (t === DailySignSimpleModel_1.DailySignSimpleState.Claimed) {
                CommonUtils_1.playSpineAnim(i, 1, this._index + 1 + "_init_2", null, false);
                if (e == DailySignSimpleModel_1.DailySignSimpleState.Ready) {
                    CommonUtils_1.playSpineAnim(this._nodeClaimedAni.getComponent(sp.Skeleton), 1, "in", null, false);
                }
                else {
                    CommonUtils_1.playSpineAnim(this._nodeClaimedAni.getComponent(sp.Skeleton), 1, "init", null, false);
                }
            }
    };
    DailySignSimpleItem.prototype.setIndex = function (t) {
        this._index = t;
        this._model && (this._dayData = this._model.getDay(t));
        this._nodeReady && (e = this._nodeReady.getChildByName("txt")) && (e.getComponent(cc.Label).string = (t + 1).toString());
        if (this._nodeUncompleted) {
            var e;
            (e = this._nodeUncompleted.getChildByName("txt")) && (e.getComponent(cc.Label).string = (t + 1).toString());
        }
    };
    DailySignSimpleItem.prototype.refresh = function () {
        if (this._model) {
            this._dayData = this._model.getDay(this._index);
            var t = this._model.getDayState(this._index);
            this.setState(t);
        }
    };
    DailySignSimpleItem.prototype.getIndex = function () {
        return this._index;
    };
    DailySignSimpleItem.prototype.getDayData = function () {
        return this._dayData;
    };
    DailySignSimpleItem.prototype.canClaim = function () {
        return !!this._model && this._model.getDayState(this._index) === DailySignSimpleModel_1.DailySignSimpleState.Ready;
    };
    DailySignSimpleItem.prototype.playReadyAnimation = function () {
        var t, e = this;
        if (this._model && this._dayData && this._model.getDayState(this._index) === DailySignSimpleModel_1.DailySignSimpleState.Ready) {
            var i = null === (t = this._box) || void 0 === t ? void 0 : t.getComponent(sp.Skeleton);
            if (i) {
                CommonUtils_1.playSpineAnim(i, 1, this._index + 1 + "_in", function () { }, false);
                this.scheduleOnce(function () {
                    e.onClaimCallback && e.onClaimCallback(e._index);
                }, 0.8);
            }
        }
    };
    DailySignSimpleItem.prefabUrl = "prefabs/DailySignSimpleItem";
    DailySignSimpleItem.bundleName = "r_dailySignSimple";
    DailySignSimpleItem = __decorate([
        mj.class
    ], DailySignSimpleItem);
    return DailySignSimpleItem;
}(BaseUI_1.default));
exports.default = DailySignSimpleItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX2RhaWx5U2lnblNpbXBsZS9TY3JpcHRzL0RhaWx5U2lnblNpbXBsZUl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtEQUEwRDtBQUMxRCw0RUFBNkU7QUFDN0UsK0RBQW9GO0FBRXBGO0lBQWlELHVDQUFNO0lBQXZEO1FBQUEscUVBMEZDO1FBekZDLHNCQUFnQixHQUFHLElBQUksQ0FBQztRQUN4QixnQkFBVSxHQUFHLElBQUksQ0FBQztRQUNsQixrQkFBWSxHQUFHLElBQUksQ0FBQztRQUNwQixxQkFBZSxHQUFHLElBQUksQ0FBQztRQUN2QixVQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ1osVUFBSSxHQUFHLElBQUksQ0FBQztRQUNaLFlBQU0sR0FBRyxDQUFDLENBQUM7UUFDWCxZQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2QsY0FBUSxHQUFHLElBQUksQ0FBQztRQUNoQixtQkFBYSxHQUFHLDJDQUFvQixDQUFDLFdBQVcsQ0FBQztRQUNqRCxxQkFBZSxHQUFHLElBQUksQ0FBQztRQUN2Qix3QkFBa0IsR0FBRyxJQUFJLENBQUM7O0lBOEU1QixDQUFDO0lBM0VDLG9DQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxNQUFNLEdBQUcsOEJBQW9CLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDakQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLGdCQUFn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QUFFLEdBQUcsQ0FBQyxDQUFDO2FBQ1Q7U0FDRjtJQUNILENBQUM7SUE1RU0sNkJBQVMsR0FBRyw2QkFBNkIsQ0FBQztJQUMxQyw4QkFBVSxHQUFHLG1CQUFtQixDQUFDO0lBZHJCLG1CQUFtQjtRQUR2QyxFQUFFLENBQUMsS0FBSztPQUNZLG1CQUFtQixDQTBGdkM7SUFBRCwwQkFBQztDQTFGRCxBQTBGQyxDQTFGZ0QsZ0JBQU0sR0EwRnREO2tCQTFGb0IsbUJBQW1CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2VVSSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay91aS9CYXNlVUknO1xuaW1wb3J0IHsgcGxheVNwaW5lQW5pbSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3V0aWxzL0NvbW1vblV0aWxzJztcbmltcG9ydCBEYWlseVNpZ25TaW1wbGVNb2RlbCwgeyBEYWlseVNpZ25TaW1wbGVTdGF0ZSB9IGZyb20gJy4vRGFpbHlTaWduU2ltcGxlTW9kZWwnO1xuQG1qLmNsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYWlseVNpZ25TaW1wbGVJdGVtIGV4dGVuZHMgQmFzZVVJIHtcbiAgX25vZGVVbmNvbXBsZXRlZCA9IG51bGw7XG4gIF9ub2RlUmVhZHkgPSBudWxsO1xuICBfbm9kZUNsYWltZWQgPSBudWxsO1xuICBfbm9kZUNsYWltZWRBbmkgPSBudWxsO1xuICBfYm94ID0gbnVsbDtcbiAgX2J0biA9IG51bGw7XG4gIF9pbmRleCA9IDA7XG4gIF9tb2RlbCA9IG51bGw7XG4gIF9kYXlEYXRhID0gbnVsbDtcbiAgX2N1cnJlbnRTdGF0ZSA9IERhaWx5U2lnblNpbXBsZVN0YXRlLlVuY29tcGxldGVkO1xuICBvbkNsYWltQ2FsbGJhY2sgPSBudWxsO1xuICBvbkJveENsaWNrQ2FsbGJhY2sgPSBudWxsO1xuICBzdGF0aWMgcHJlZmFiVXJsID0gXCJwcmVmYWJzL0RhaWx5U2lnblNpbXBsZUl0ZW1cIjtcbiAgc3RhdGljIGJ1bmRsZU5hbWUgPSBcInJfZGFpbHlTaWduU2ltcGxlXCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLl9tb2RlbCA9IERhaWx5U2lnblNpbXBsZU1vZGVsLmdldEluc3RhbmNlKCk7XG4gICAgdGhpcy5fbm9kZUNsYWltZWQgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJub2RlX2dldHRlZFwiKTtcbiAgICB0aGlzLl9ub2RlQ2xhaW1lZEFuaSA9IHRoaXMuX25vZGVDbGFpbWVkLmdldENoaWxkQnlOYW1lKFwic3BpbmVcIik7XG4gICAgdGhpcy5fbm9kZVJlYWR5ID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwibm9kZV9pc1JlYWR5XCIpO1xuICAgIHRoaXMuX25vZGVVbmNvbXBsZXRlZCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIm5vZGVfdW5jb21wbGV0dGVkXCIpO1xuICAgIHRoaXMuX2JveCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJveFwiKTtcbiAgICB0aGlzLl9idG4gPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJidG5cIik7XG4gICAgdGhpcy5yZWdpc3RlckJveENsaWNrKCk7XG4gIH1cbiAgcmVnaXN0ZXJCb3hDbGljaygpIHtcbiAgICB0aGlzLl9idG4gJiYgdGhpcy5PbkJ1dHRvbkNsaWNrKHRoaXMuX2J0biwgdGhpcy5vbkJveENsaWNrLmJpbmQodGhpcykpO1xuICB9XG4gIG9uQm94Q2xpY2soKSB7XG4gICAgaWYgKHRoaXMuX2N1cnJlbnRTdGF0ZSAhPSBEYWlseVNpZ25TaW1wbGVTdGF0ZS5DbGFpbWVkKSB7XG4gICAgICB2YXIgdCA9IHRoaXMuX2JveC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MuVmVjMi5aRVJPKSxcbiAgICAgICAgZSA9IGNjLnYzKHQueCwgdC55LCAwKTtcbiAgICAgIHRoaXMub25Cb3hDbGlja0NhbGxiYWNrICYmIHRoaXMub25Cb3hDbGlja0NhbGxiYWNrKHRoaXMuX2luZGV4LCBlKTtcbiAgICB9XG4gIH1cbiAgc2V0U3RhdGUodCkge1xuICAgIHZhciBlID0gdGhpcy5fY3VycmVudFN0YXRlO1xuICAgIHRoaXMuX2N1cnJlbnRTdGF0ZSA9IHQ7XG4gICAgdGhpcy5fbm9kZVVuY29tcGxldGVkICYmICh0aGlzLl9ub2RlVW5jb21wbGV0ZWQuYWN0aXZlID0gdCA9PT0gRGFpbHlTaWduU2ltcGxlU3RhdGUuVW5jb21wbGV0ZWQpO1xuICAgIHRoaXMuX25vZGVSZWFkeSAmJiAodGhpcy5fbm9kZVJlYWR5LmFjdGl2ZSA9IHQgPT09IERhaWx5U2lnblNpbXBsZVN0YXRlLlJlYWR5KTtcbiAgICB0aGlzLl9ub2RlQ2xhaW1lZCAmJiAodGhpcy5fbm9kZUNsYWltZWQuYWN0aXZlID0gdCA9PT0gRGFpbHlTaWduU2ltcGxlU3RhdGUuQ2xhaW1lZCk7XG4gICAgdmFyIGkgPSB0aGlzLl9ib3guZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKTtcbiAgICBpZiAoaSkgaWYgKHQgPT09IERhaWx5U2lnblNpbXBsZVN0YXRlLlVuY29tcGxldGVkKSBwbGF5U3BpbmVBbmltKGksIDEsIHRoaXMuX2luZGV4ICsgMSArIFwiX2luaXRfMVwiLCBudWxsLCBmYWxzZSk7ZWxzZSBpZiAodCA9PT0gRGFpbHlTaWduU2ltcGxlU3RhdGUuUmVhZHkpIDtlbHNlIGlmICh0ID09PSBEYWlseVNpZ25TaW1wbGVTdGF0ZS5DbGFpbWVkKSB7XG4gICAgICBwbGF5U3BpbmVBbmltKGksIDEsIHRoaXMuX2luZGV4ICsgMSArIFwiX2luaXRfMlwiLCBudWxsLCBmYWxzZSk7XG4gICAgICBpZiAoZSA9PSBEYWlseVNpZ25TaW1wbGVTdGF0ZS5SZWFkeSkge1xuICAgICAgICBwbGF5U3BpbmVBbmltKHRoaXMuX25vZGVDbGFpbWVkQW5pLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbiksIDEsIFwiaW5cIiwgbnVsbCwgZmFsc2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGxheVNwaW5lQW5pbSh0aGlzLl9ub2RlQ2xhaW1lZEFuaS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLCAxLCBcImluaXRcIiwgbnVsbCwgZmFsc2UpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBzZXRJbmRleCh0KSB7XG4gICAgdGhpcy5faW5kZXggPSB0O1xuICAgIHRoaXMuX21vZGVsICYmICh0aGlzLl9kYXlEYXRhID0gdGhpcy5fbW9kZWwuZ2V0RGF5KHQpKTtcbiAgICB0aGlzLl9ub2RlUmVhZHkgJiYgKGUgPSB0aGlzLl9ub2RlUmVhZHkuZ2V0Q2hpbGRCeU5hbWUoXCJ0eHRcIikpICYmIChlLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gKHQgKyAxKS50b1N0cmluZygpKTtcbiAgICBpZiAodGhpcy5fbm9kZVVuY29tcGxldGVkKSB7XG4gICAgICB2YXIgZTtcbiAgICAgIChlID0gdGhpcy5fbm9kZVVuY29tcGxldGVkLmdldENoaWxkQnlOYW1lKFwidHh0XCIpKSAmJiAoZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9ICh0ICsgMSkudG9TdHJpbmcoKSk7XG4gICAgfVxuICB9XG4gIHJlZnJlc2goKSB7XG4gICAgaWYgKHRoaXMuX21vZGVsKSB7XG4gICAgICB0aGlzLl9kYXlEYXRhID0gdGhpcy5fbW9kZWwuZ2V0RGF5KHRoaXMuX2luZGV4KTtcbiAgICAgIHZhciB0ID0gdGhpcy5fbW9kZWwuZ2V0RGF5U3RhdGUodGhpcy5faW5kZXgpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh0KTtcbiAgICB9XG4gIH1cbiAgZ2V0SW5kZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2luZGV4O1xuICB9XG4gIGdldERheURhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RheURhdGE7XG4gIH1cbiAgY2FuQ2xhaW0oKSB7XG4gICAgcmV0dXJuICEhdGhpcy5fbW9kZWwgJiYgdGhpcy5fbW9kZWwuZ2V0RGF5U3RhdGUodGhpcy5faW5kZXgpID09PSBEYWlseVNpZ25TaW1wbGVTdGF0ZS5SZWFkeTtcbiAgfVxuICBwbGF5UmVhZHlBbmltYXRpb24oKSB7XG4gICAgdmFyIHQsXG4gICAgICBlID0gdGhpcztcbiAgICBpZiAodGhpcy5fbW9kZWwgJiYgdGhpcy5fZGF5RGF0YSAmJiB0aGlzLl9tb2RlbC5nZXREYXlTdGF0ZSh0aGlzLl9pbmRleCkgPT09IERhaWx5U2lnblNpbXBsZVN0YXRlLlJlYWR5KSB7XG4gICAgICB2YXIgaSA9IG51bGwgPT09ICh0ID0gdGhpcy5fYm94KSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XG4gICAgICBpZiAoaSkge1xuICAgICAgICBwbGF5U3BpbmVBbmltKGksIDEsIHRoaXMuX2luZGV4ICsgMSArIFwiX2luXCIsIGZ1bmN0aW9uICgpIHt9LCBmYWxzZSk7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBlLm9uQ2xhaW1DYWxsYmFjayAmJiBlLm9uQ2xhaW1DYWxsYmFjayhlLl9pbmRleCk7XG4gICAgICAgIH0sIDAuOCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59Il19