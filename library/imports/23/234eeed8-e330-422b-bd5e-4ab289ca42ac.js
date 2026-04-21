"use strict";
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