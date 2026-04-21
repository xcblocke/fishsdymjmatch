
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_batchWrite/Scripts/BatchWriteTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cdd580gpHxInpxX9FxHzWUf', 'BatchWriteTrait');
// subpackages/l_batchWrite/Scripts/BatchWriteTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var BatchWriteTrait = /** @class */ (function (_super) {
    __extends(BatchWriteTrait, _super);
    function BatchWriteTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BatchWriteTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        cc.sys.localStorage.batchWrite = true;
    };
    BatchWriteTrait.traitKey = "BatchWrite";
    BatchWriteTrait = __decorate([
        mj.trait,
        mj.class("BatchWriteTrait")
    ], BatchWriteTrait);
    return BatchWriteTrait;
}(Trait_1.default));
exports.default = BatchWriteTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2JhdGNoV3JpdGUvU2NyaXB0cy9CYXRjaFdyaXRlVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUczRDtJQUE2QyxtQ0FBSztJQUFsRDs7SUFNQSxDQUFDO0lBSkMsZ0NBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztJQUN4QyxDQUFDO0lBSk0sd0JBQVEsR0FBRyxZQUFZLENBQUM7SUFEWixlQUFlO1FBRm5DLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQztPQUNQLGVBQWUsQ0FNbkM7SUFBRCxzQkFBQztDQU5ELEFBTUMsQ0FONEMsZUFBSyxHQU1qRDtrQkFOb0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIkJhdGNoV3JpdGVUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmF0Y2hXcml0ZVRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIkJhdGNoV3JpdGVcIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2UuYmF0Y2hXcml0ZSA9IHRydWU7XG4gIH1cbn0iXX0=