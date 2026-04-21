
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/input/InputOpenGenerateState.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8585cyHfC5FEZaQPmrwUMU1', 'InputOpenGenerateState');
// Scripts/input/InputOpenGenerateState.ts

Object.defineProperty(exports, "__esModule", { value: true });
var InputBase_1 = require("../inputbase/InputBase");
var InputOpenGenerateState = /** @class */ (function (_super) {
    __extends(InputOpenGenerateState, _super);
    function InputOpenGenerateState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputOpenGenerateState.prototype.excute = function (e) {
        if (e.openGenerateState) {
            this.gameContext.setOpenGenerateState(true);
        }
        else {
            this.gameContext.setOpenGenerateState(false);
        }
    };
    return InputOpenGenerateState;
}(InputBase_1.InputBase));
exports.default = InputOpenGenerateState;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2lucHV0L0lucHV0T3BlbkdlbmVyYXRlU3RhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9EQUFtRDtBQUNuRDtJQUFvRCwwQ0FBUztJQUE3RDs7SUFRQSxDQUFDO0lBUEMsdUNBQU0sR0FBTixVQUFPLENBQUM7UUFDTixJQUFJLENBQUMsQ0FBQyxpQkFBaUIsRUFBRTtZQUN2QixJQUFJLENBQUMsV0FBVyxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzdDO2FBQU07WUFDTCxJQUFJLENBQUMsV0FBVyxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzlDO0lBQ0gsQ0FBQztJQUNILDZCQUFDO0FBQUQsQ0FSQSxBQVFDLENBUm1ELHFCQUFTLEdBUTVEIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5wdXRCYXNlIH0gZnJvbSAnLi4vaW5wdXRiYXNlL0lucHV0QmFzZSc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dE9wZW5HZW5lcmF0ZVN0YXRlIGV4dGVuZHMgSW5wdXRCYXNlIHtcbiAgZXhjdXRlKGUpIHtcbiAgICBpZiAoZS5vcGVuR2VuZXJhdGVTdGF0ZSkge1xuICAgICAgdGhpcy5nYW1lQ29udGV4dC5zZXRPcGVuR2VuZXJhdGVTdGF0ZSh0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5nYW1lQ29udGV4dC5zZXRPcGVuR2VuZXJhdGVTdGF0ZShmYWxzZSk7XG4gICAgfVxuICB9XG59Il19