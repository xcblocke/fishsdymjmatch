
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/base/ChangeBatchBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1e264hwxtNDIJ30WEFIDnlk', 'ChangeBatchBehavior');
// Scripts/base/ChangeBatchBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeBatchBehavior = void 0;
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var ChangeBatchBehavior = /** @class */ (function (_super) {
    __extends(ChangeBatchBehavior, _super);
    function ChangeBatchBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChangeBatchBehavior.prototype.start = function () {
        this.finish();
    };
    __decorate([
        mj.traitEvent("ChangeBatchBhv_start")
    ], ChangeBatchBehavior.prototype, "start", null);
    return ChangeBatchBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.ChangeBatchBehavior = ChangeBatchBehavior;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2Jhc2UvQ2hhbmdlQmF0Y2hCZWhhdmlvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlEQUF3RDtBQUN4RDtJQUF5Qyx1Q0FBaUI7SUFBMUQ7O0lBS0EsQ0FBQztJQUhDLG1DQUFLLEdBQUw7UUFDRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUZEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxzQkFBc0IsQ0FBQztvREFHckM7SUFDSCwwQkFBQztDQUxELEFBS0MsQ0FMd0MscUNBQWlCLEdBS3pEO0FBTFksa0RBQW1CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2FtZUJlaGF2aW9yc0Jhc2UgfSBmcm9tICcuL0dhbWVCZWhhdmlvcnNCYXNlJztcbmV4cG9ydCBjbGFzcyBDaGFuZ2VCYXRjaEJlaGF2aW9yIGV4dGVuZHMgR2FtZUJlaGF2aW9yc0Jhc2Uge1xuICBAbWoudHJhaXRFdmVudChcIkNoYW5nZUJhdGNoQmh2X3N0YXJ0XCIpXG4gIHN0YXJ0KCkge1xuICAgIHRoaXMuZmluaXNoKCk7XG4gIH1cbn0iXX0=