"use strict";
cc._RF.push(module, '874e4DRPgJDoYpqmC4628et', 'StartInitBehavior');
// Scripts/base/StartInitBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.StartInitBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameTouchComponent_1 = require("../component/GameTouchComponent");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var StartInitBehavior = /** @class */ (function (_super) {
    __extends(StartInitBehavior, _super);
    function StartInitBehavior() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._timeout = 0;
        return _this;
    }
    StartInitBehavior.prototype.start = function () {
        this.disableTouchEvents();
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    StartInitBehavior.prototype.disableTouchEvents = function () {
        var e = this.context.gameView;
        if (e) {
            var t = e._gameNode;
            if (t && cc.isValid(t)) {
                var o = t.getComponent(GameTouchComponent_1.GameTouchComponent);
                o && o.unregisterTouchEvents();
            }
        }
    };
    return StartInitBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.StartInitBehavior = StartInitBehavior;

cc._RF.pop();