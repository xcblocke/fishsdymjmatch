
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_failFreeShuffle/Scripts/FailFreeShuffleDialogView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7e5d3214HFIlrT5SmOm/WsJ', 'FailFreeShuffleDialogView');
// subpackages/l_failFreeShuffle/Scripts/FailFreeShuffleDialogView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var UIView_1 = require("../../../Scripts/framework/ui/UIView");
var FailFreeShuffleDialogView = /** @class */ (function (_super) {
    __extends(FailFreeShuffleDialogView, _super);
    function FailFreeShuffleDialogView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._closeBtn = null;
        _this._freeShuffleBtn = null;
        _this._onFreeShuffleCallback = null;
        _this._onCloseCallback = null;
        return _this;
    }
    FailFreeShuffleDialogView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.initUI();
        this.initEvents();
    };
    FailFreeShuffleDialogView.prototype.initUI = function () {
        this._freeShuffleBtn = cc.find("content/btn_use", this.node);
    };
    FailFreeShuffleDialogView.prototype.initEvents = function () {
        this._closeBtn && this.OnButtonClick(this._closeBtn, this.onCloseBtnClick.bind(this));
        this._freeShuffleBtn && this.OnButtonClick(this._freeShuffleBtn, this.onFreeShuffleBtnClick.bind(this));
    };
    FailFreeShuffleDialogView.prototype.setCallbacks = function (e) {
        this._onFreeShuffleCallback = e.onFreeShuffle || null;
        this._onCloseCallback = e.onClose || null;
    };
    FailFreeShuffleDialogView.prototype.onCloseBtnClick = function () {
        var e, t;
        null === (e = this._onCloseCallback) || void 0 === e || e.call(this);
        null === (t = this.delegate) || void 0 === t || t.close();
    };
    FailFreeShuffleDialogView.prototype.onFreeShuffleBtnClick = function () {
        var e, t;
        null === (e = this._onFreeShuffleCallback) || void 0 === e || e.call(this);
        null === (t = this.delegate) || void 0 === t || t.close();
    };
    FailFreeShuffleDialogView.prefabUrl = "prefabs/FailFreeShuffleDialog";
    FailFreeShuffleDialogView = __decorate([
        mj.class
    ], FailFreeShuffleDialogView);
    return FailFreeShuffleDialogView;
}(UIView_1.default));
exports.default = FailFreeShuffleDialogView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2ZhaWxGcmVlU2h1ZmZsZS9TY3JpcHRzL0ZhaWxGcmVlU2h1ZmZsZURpYWxvZ1ZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtEQUEwRDtBQUUxRDtJQUF1RCw2Q0FBTTtJQUE3RDtRQUFBLHFFQWdDQztRQS9CQyxlQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLHFCQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLDRCQUFzQixHQUFHLElBQUksQ0FBQztRQUM5QixzQkFBZ0IsR0FBRyxJQUFJLENBQUM7O0lBNEIxQixDQUFDO0lBMUJDLDBDQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNkLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBQ0QsMENBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUNELDhDQUFVLEdBQVY7UUFDRSxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3RGLElBQUksQ0FBQyxlQUFlLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUMxRyxDQUFDO0lBQ0QsZ0RBQVksR0FBWixVQUFhLENBQUM7UUFDWixJQUFJLENBQUMsc0JBQXNCLEdBQUcsQ0FBQyxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUM7UUFDdEQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDO0lBQzVDLENBQUM7SUFDRCxtREFBZSxHQUFmO1FBQ0UsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ1QsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JFLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM1RCxDQUFDO0lBQ0QseURBQXFCLEdBQXJCO1FBQ0UsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ1QsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNFLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM1RCxDQUFDO0lBMUJNLG1DQUFTLEdBQUcsK0JBQStCLENBQUM7SUFMaEMseUJBQXlCO1FBRDdDLEVBQUUsQ0FBQyxLQUFLO09BQ1kseUJBQXlCLENBZ0M3QztJQUFELGdDQUFDO0NBaENELEFBZ0NDLENBaENzRCxnQkFBTSxHQWdDNUQ7a0JBaENvQix5QkFBeUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVUlWaWV3IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3VpL1VJVmlldyc7XG5AbWouY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZhaWxGcmVlU2h1ZmZsZURpYWxvZ1ZpZXcgZXh0ZW5kcyBVSVZpZXcge1xuICBfY2xvc2VCdG4gPSBudWxsO1xuICBfZnJlZVNodWZmbGVCdG4gPSBudWxsO1xuICBfb25GcmVlU2h1ZmZsZUNhbGxiYWNrID0gbnVsbDtcbiAgX29uQ2xvc2VDYWxsYmFjayA9IG51bGw7XG4gIHN0YXRpYyBwcmVmYWJVcmwgPSBcInByZWZhYnMvRmFpbEZyZWVTaHVmZmxlRGlhbG9nXCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLmluaXRVSSgpO1xuICAgIHRoaXMuaW5pdEV2ZW50cygpO1xuICB9XG4gIGluaXRVSSgpIHtcbiAgICB0aGlzLl9mcmVlU2h1ZmZsZUJ0biA9IGNjLmZpbmQoXCJjb250ZW50L2J0bl91c2VcIiwgdGhpcy5ub2RlKTtcbiAgfVxuICBpbml0RXZlbnRzKCkge1xuICAgIHRoaXMuX2Nsb3NlQnRuICYmIHRoaXMuT25CdXR0b25DbGljayh0aGlzLl9jbG9zZUJ0biwgdGhpcy5vbkNsb3NlQnRuQ2xpY2suYmluZCh0aGlzKSk7XG4gICAgdGhpcy5fZnJlZVNodWZmbGVCdG4gJiYgdGhpcy5PbkJ1dHRvbkNsaWNrKHRoaXMuX2ZyZWVTaHVmZmxlQnRuLCB0aGlzLm9uRnJlZVNodWZmbGVCdG5DbGljay5iaW5kKHRoaXMpKTtcbiAgfVxuICBzZXRDYWxsYmFja3MoZSkge1xuICAgIHRoaXMuX29uRnJlZVNodWZmbGVDYWxsYmFjayA9IGUub25GcmVlU2h1ZmZsZSB8fCBudWxsO1xuICAgIHRoaXMuX29uQ2xvc2VDYWxsYmFjayA9IGUub25DbG9zZSB8fCBudWxsO1xuICB9XG4gIG9uQ2xvc2VCdG5DbGljaygpIHtcbiAgICB2YXIgZSwgdDtcbiAgICBudWxsID09PSAoZSA9IHRoaXMuX29uQ2xvc2VDYWxsYmFjaykgfHwgdm9pZCAwID09PSBlIHx8IGUuY2FsbCh0aGlzKTtcbiAgICBudWxsID09PSAodCA9IHRoaXMuZGVsZWdhdGUpIHx8IHZvaWQgMCA9PT0gdCB8fCB0LmNsb3NlKCk7XG4gIH1cbiAgb25GcmVlU2h1ZmZsZUJ0bkNsaWNrKCkge1xuICAgIHZhciBlLCB0O1xuICAgIG51bGwgPT09IChlID0gdGhpcy5fb25GcmVlU2h1ZmZsZUNhbGxiYWNrKSB8fCB2b2lkIDAgPT09IGUgfHwgZS5jYWxsKHRoaXMpO1xuICAgIG51bGwgPT09ICh0ID0gdGhpcy5kZWxlZ2F0ZSkgfHwgdm9pZCAwID09PSB0IHx8IHQuY2xvc2UoKTtcbiAgfVxufSJdfQ==