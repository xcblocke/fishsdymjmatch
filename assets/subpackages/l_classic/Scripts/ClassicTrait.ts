import GameUtils from '../../../Scripts/core/simulator/util/GameUtils';
import Trait from '../../../Scripts/framework/trait/Trait';
import HallClassicBtn from './HallClassicBtn';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import HallBtnTip, { ETipAnimType } from './HallBtnTip';
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
import HighestScoreItem from './HighestScoreItem';
import ClassicGameData from '../../../Scripts/core/simulator/data/ClassicGameData';
import { resManager } from '../../../Scripts/framework/manager/ResManager';
@mj.trait
@mj.class("ClassicTrait")
export default class ClassicTrait extends Trait {
  _classicBtn = null;
  _highestScoreItem = null;
  _stageRightItem = null;
  _lastBatchId = -1;
  _isClassicMode = false;
  static traitKey = "Classic";
  onLoad() {
    super.onLoad.call(this);
    this.registerEvent([{
      event: "UpdComboBhv_getPos"
    }, {
      event: "GameUI_onLoad",
      priority: 999,
      type: 2
    }, {
      event: "ScoreItem_updScore"
    }, {
      event: "HallCtl_initRes"
    }, {
      event: "ValHallBtn_setLabCol"
    }, {
      event: "HTravelBtnRP_getDotPos"
    }]);
  }
  onHTravelBtnRP_getDotPos(t, e) {
    e({
      returnType: TraitCallbackReturnType.return,
      returnVal: cc.v2(55, 78)
    });
  }
  onHallCtl_initRes(t, e) {
    e();
    t.ins.addPreloadRes("Prefab", ["l_classic:prefabs/HallTravelLeftBtn"]);
    this.bandConflictTrait("TravelBtnYogaCardTrait");
  }
  bandConflictTrait(t) {
    var e,
      n = mj.getClassByName(t);
    n && (null === (e = n.getInstance()) || void 0 === e ? void 0 : e.eventEnabled) && (n.getInstance().eventEnabled = false);
  }
  onValHallBtn_setLabCol(t, e) {
    var n,
      i,
      o = t.args[0];
    if (cc.isValid(o)) {
      var r = null === (i = null === (n = null == o ? void 0 : o.parent) || void 0 === n ? void 0 : n.parent) || void 0 === i ? void 0 : i.name;
      if (!["HallClassicBtn", "HallNormalBtn"].includes(r)) {
        e({
          returnType: TraitCallbackReturnType.jump,
          returnVal: false
        });
        return;
      }
    }
    e();
  }
  onHallVw_updateUI(t, e) {
    var n;
    this.addEnterHallCount();
    this.createHallButton(null === (n = t.ins) || void 0 === n ? void 0 : n.node);
    e();
  }
  onJourney_doCreateBtn(t, e) {
    t.args[3] = "prefabs/HallTravelLeftBtn";
    t.args[4] = "l_classic";
    e();
  }
  onTravelBtn_changeLock(t, e) {
    var n = t.ins;
    n.lockNode.active = true;
    n.titleNode.active = false;
    GameUtils.playSpine(n.lockAnim, "in", false, function () {
      n.lockAnim.setAnimation(0, "init", false);
    });
    n.lockDesc.string = "Lv." + n.unlockLevel;
    e({
      returnType: TraitCallbackReturnType.jump
    });
  }
  createHallButton(t) {
    var e,
      i = this;
    if ((null === (e = this._classicBtn) || void 0 === e ? void 0 : e.parent) && cc.isValid(this._classicBtn)) {
      this.updateBtnShow();
    } else {
      cc.isValid(t) && HallClassicBtn.createUI().then(function (e) {
        i._classicBtn = e;
        cc.isValid(e) && cc.isValid(t) && t.addChild(e);
        i.updateBtnShow();
      }).catch(function (t) {
        console.error("[" + ClassicTrait.traitKey + "] 创建按钮失败:" + ((null == t ? void 0 : t.message) || "HallClassicBtn按钮加载失败"));
      });
    }
  }
  updateBtnShow() {
    if (cc.isValid(this._classicBtn)) {
      var t = this._classicBtn.getComponent(HallClassicBtn);
      t && t.updateUI();
    }
  }
  onClassicBtn_updateUI(t, e) {
    if (this.getEnterHallCount() > 1) {
      this.hideTipAnim(t.ins);
    } else {
      this.playTipAnim(t.ins, ETipAnimType.NewModel);
    }
    e();
  }
  onHallNmlBtn_updateUI(t, e) {
    if (this.getEnterHallCount() > 1) {
      this.hideTipAnim(t.ins);
    } else {
      this.playTipAnim(t.ins, ETipAnimType.Continue);
    }
    e();
  }
  playTipAnim(t, e) {
    if (cc.isValid(t) && cc.isValid(t.node) && !t._tipNode_) {
      var i = t.node,
        o = t.node.parent;
      HallBtnTip.createUI().then(function (n) {
        if (cc.isValid(t) && cc.isValid(i)) {
          var r = i.convertToWorldSpaceAR(cc.v2(300, 60)),
            a = o.convertToNodeSpaceAR(r);
          n.setPosition(a.x, a.y);
          o.addChild(n, 10);
          n.getComponent(HallBtnTip).playTipAnim(e);
          t._tipNode_ = n;
        }
      }).catch(function (t) {
        console.error("[" + ClassicTrait.traitKey + "] 创建按钮失败:" + ((null == t ? void 0 : t.message) || "HallClassicBtn按钮加载失败"));
      });
    }
  }
  hideTipAnim(t) {
    if (cc.isValid(t)) {
      var e = t._tipNode_;
      if (cc.isValid(e)) {
        e.destroy();
        t._tipNode_ = null;
      }
    }
  }
  isLocalEmpty(t) {
    return null == t || "" === t;
  }
  addEnterHallCount() {
    this.isLocalEmpty(this.localData.enterHallCount) && (this.localData.enterHallCount = 0);
    this.localData.enterHallCount++;
  }
  getEnterHallCount() {
    return this.isLocalEmpty(this.localData.enterHallCount) ? 0 : this.localData.enterHallCount;
  }
  isClassicMode() {
    return this._isClassicMode;
  }
  onGameUI_onLoad(t, e) {
    var n;
    this._isClassicMode = UserModel.getInstance().getCurrentGameType() === MjGameType.Classic;
    if (this._isClassicMode) {
      this.createHighestScoreItem(null === (n = t.ins) || void 0 === n ? void 0 : n.node);
      e({
        isBreak: true
      });
    } else e();
  }
  createHighestScoreItem(t) {
    if (cc.isValid(t)) {
      if (cc.isValid(this._highestScoreItem)) {
        this._highestScoreItem.destroy();
        this._highestScoreItem = null;
      }
      var e = resManager.getBundle("l_classic");
      if (e) {
        var n = e.get(HighestScoreItem.getUrl(), cc.Prefab);
        if (cc.isValid(n)) {
          var i = HighestScoreItem.createUISync(n);
          if (cc.isValid(i)) {
            this._highestScoreItem = i;
            var o = t.getChildByName("nodeTop");
            if (cc.isValid(o)) {
              o.addChild(i);
              i.x = 98 - o.width * o.anchorX;
              i.y = o.height * (1 - o.anchorY) - 89;
            }
            var r = i.getComponent(HighestScoreItem);
            if (cc.isValid(r)) {
              var a = ClassicGameData.getInstance().getMaxScore();
              r.updateScore(a);
            }
          }
        }
      }
    }
  }
  onScoreItem_updScore(t, e) {
    if (this.isClassicMode()) {
      this.updateHighestScore();
      e();
    } else e();
  }
  updateHighestScore() {
    if (cc.isValid(this._highestScoreItem)) {
      var t = this._highestScoreItem.getComponent(HighestScoreItem);
      if (cc.isValid(t)) {
        var e = ClassicGameData.getInstance(),
          n = e.getScore(),
          i = e.getMaxScore();
        t.checkAndUpdate(n, i);
      }
    }
  }
  onUpdComboBhv_getPos(t, e) {
    if (this.isClassicMode()) {
      e({
        isBreak: true,
        returnType: TraitCallbackReturnType.return,
        returnVal: cc.v3(t.args[0].x - 56, t.args[0].y - 240, 0)
      });
    } else {
      e();
    }
  }
}