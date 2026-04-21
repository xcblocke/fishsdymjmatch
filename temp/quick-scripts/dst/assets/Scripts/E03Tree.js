
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/E03Tree.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '92d7dRNMc1NsYNcZJgPrSOR', 'E03Tree');
// Scripts/E03Tree.ts

Object.defineProperty(exports, "__esModule", { value: true });
var E01House_1 = require("./E01House");
var E03Tree = /** @class */ (function (_super) {
    __extends(E03Tree, _super);
    function E03Tree() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    E03Tree.prefabUrl = "prefabs/journeyMap/03/E03Tree";
    E03Tree = __decorate([
        mj.class
    ], E03Tree);
    return E03Tree;
}(E01House_1.default));
exports.default = E03Tree;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0UwM1RyZWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVDQUFrQztBQUVsQztJQUFxQywyQkFBUTtJQUE3Qzs7SUFFQSxDQUFDO0lBRFEsaUJBQVMsR0FBRywrQkFBK0IsQ0FBQztJQURoQyxPQUFPO1FBRDNCLEVBQUUsQ0FBQyxLQUFLO09BQ1ksT0FBTyxDQUUzQjtJQUFELGNBQUM7Q0FGRCxBQUVDLENBRm9DLGtCQUFRLEdBRTVDO2tCQUZvQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEUwMUhvdXNlIGZyb20gJy4vRTAxSG91c2UnO1xuQG1qLmNsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFMDNUcmVlIGV4dGVuZHMgRTAxSG91c2Uge1xuICBzdGF0aWMgcHJlZmFiVXJsID0gXCJwcmVmYWJzL2pvdXJuZXlNYXAvMDMvRTAzVHJlZVwiO1xufSJdfQ==