import ControllerManager from '../framework/manager/ControllerManager';
import UIView from '../framework/ui/UIView';
import { EJourneyMapState, FinishLevelElement } from '../TravelMapInterface';
import { MapView } from '../map/MapView';
import { MapElementFactory } from '../elements/MapElementFactory';
import I18NStrings from '../framework/data/I18NStrings';
import TravelGameData from '../core/simulator/data/TravelGameData';
import BaseCell from '../base/ui/BaseCell';
import BaseSprite from '../gamePlay/base/ui/BaseSprite';
import TravelGameModel, { ETravelRedPointState } from '../gamePlay/travel/model/TravelGameModel';
import { DataReader } from '../framework/data/DataReader';
import { MapConfigMap, ConfigType } from '../gamePlay/base/data/ConfigType';
import GameUtils from '../core/simulator/util/GameUtils';
import { TRAVEL_GAME_COLLECT_BADGE, ETravelRewardType } from '../config/TravelConfig';
import { BadgeType } from '../gamePlay/badge/mode/BadgeMode';
import Adapter from '../component/Adapter';
import { DotGamePageShow, EPageShowType } from '../dot/DGamePageShow';
import { DotGameBtnClick, ETravelMapClickType, EBadgeClickType } from '../dot/DGameBtnClick';
import { EAudioID } from '../core/simulator/constant/GameTypeEnums';
import { EGameEvent } from '../simulator/constant/GameEvent';
import JumpManager from '../base/jump/JumpManager';
@mj.class
export default class TravelMapView extends UIView {
  @mj.node("Top/BackBtn")
  backBtn: "Top/BackBtn" = null;
  @mj.node("Bottom/LevelBtn")
  enterBtn: "Bottom/LevelBtn" = null;
  @mj.node("Bottom")
  bottomNode: "Bottom" = null;
  @mj.component("Bottom/LevelBtn/Value", cc.Label)
  levelBtnLabel: "Bottom/LevelBtn/Value" = null;
  @mj.component("Map", cc.ScrollView)
  mapScrollView: "Map" = null;
  @mj.node("Left")
  leftNode: "Left" = null;
  @mj.node("Top")
  topNode: "Top" = null;
  @mj.node("Left/Btn")
  leftBtn: "Left/Btn" = null;
  @mj.node("Top/BadgeBtn")
  leftBadgeNode: "Top/BadgeBtn" = null;
  @mj.component("Left/Btn/Icon", cc.Sprite)
  leftIcon: "Left/Btn/Icon" = null;
  @mj.component("Left/Value", cc.Label)
  leftValue: "Left/Value" = null;
  @mj.component("Left/ProgressBar", cc.ProgressBar)
  leftProgressBar: "Left/ProgressBar" = null;
  @mj.node("Left/ProgressBar/Bar2")
  leftProgressBar2: "Left/ProgressBar/Bar2" = null;
  @mj.component("Top/Timer/Layout/Label", cc.Label)
  timerLabel: "Top/Timer/Layout/Label" = null;
  @mj.component("Top/Title", cc.Label)
  titleLabel: "Top/Title" = null;
  @mj.node("Bottom/LevelBtn/BgHard")
  hardBgNode: "Bottom/LevelBtn/BgHard" = null;
  @mj.node("Bottom/LevelBtn/BgWood")
  woodBgNode: "Bottom/LevelBtn/BgWood" = null;
  @mj.node("Bottom/LevelBtn/BgHardUp")
  hardUpBgNode: "Bottom/LevelBtn/BgHardUp" = null;
  @mj.node("Bottom/LevelBtn/HardTip")
  hardTipNode: "Bottom/LevelBtn/HardTip" = null;
  mapView = null;
  mapConfig = null;
  levelConfig = null;
  curLevelId = 0;
  stateConfig = null;
  nextBadgeLevel = -1;
  isCollecting = false;
  lastPassLevel = 0;
  journeyNameCN = "";
  static prefabUrl = "prefabs/journeyMap/01/JourneyMap";
  onLoad() {
    super.onLoad.call(this);
    MapElementFactory.init();
    Adapter.ignoreSafeRect(this.bottomNode);
    var t = Adapter.getSafeY();
    this.mapScrollView.node.getComponent(cc.Widget).bottom = -t;
    this.OnButtonClick(this.backBtn, this.onBackBtnClick.bind(this));
    this.OnButtonClick(this.enterBtn, this.onEnterBtnClick.bind(this));
    this.OnButtonClick(this.leftBtn, {
      func: this.onLeftBtnClick.bind(this),
      clickAudio: EAudioID.TravelButton1
    });
    this.OnButtonClick(this.leftBadgeNode, this.onLeftBadgeBtnClick.bind(this));
  }
  getMessageListeners() {
    var _e = {};
    _e[TRAVEL_GAME_COLLECT_BADGE] = this.onTravelGameCollectBadge.bind(this);
    return _e;
  }
  @mj.traitEvent("TLMapVw_collectBadge")
  onTravelGameCollectBadge() {}
  playEnterBtnAnim() {
    this.enterBtn.scale = 0.95;
    cc.tween(this.enterBtn).to(0.2, {
      scale: 1.05
    }, {
      easing: cc.easing.sineIn
    }).to(0.266, {
      scale: 1
    }, {
      easing: cc.easing.sineOut
    }).start();
  }
  onDestroy() {
    super.onDestroy.call(this);
    if (this.mapView) {
      this.mapView.clear();
      this.mapView = null;
    }
  }
  onBackBtnClick() {
    JumpManager.getInstance().jumpToHall();
    DotGameBtnClick.dotTravelMap(ETravelMapClickType.Back, this.journeyNameCN);
    DotGamePageShow.dot(EPageShowType.TravelToMainPage);
  }
  onLeftBadgeBtnClick() {
    DotGameBtnClick.dotBadge(EBadgeClickType.JourneyBtn);
    DotGameBtnClick.dotTravelMap(ETravelMapClickType.Badge, this.journeyNameCN);
    ControllerManager.getInstance().pushViewByController("DailyCollController", {
      isShowAction: false,
      type: BadgeType.Journey,
      enterType: 2
    });
  }
  onEnterBtnClick() {
    if (!(this.curLevelId > this.levelConfig.levelCount)) if (TravelGameModel.getInstance().isSessionActive()) {
      DotGameBtnClick.dotTravelMap(ETravelMapClickType.Play, this.journeyNameCN, this.curLevelId);
      this.goToTravelGame();
    } else JumpManager.getInstance().jumpToHall();
  }
  @mj.traitEvent("TLMapVw_goTravelGm")
  goToTravelGame() {
    var e = this;
    this.node && cc.isValid(this.node) && ControllerManager.getInstance().pushViewByController("TravelGameController", {}, function () {
      var t;
      null === (t = e.delegate) || void 0 === t || t.close();
    });
  }
  clearRedDot() {
    var e = TravelGameModel.getInstance();
    e.setFirstOpen(true);
    if (e.getRedPointState() === ETravelRedPointState.Show) {
      e.setRedPointState(ETravelRedPointState.Hide);
      mj.EventManager.emit(EGameEvent.RedDot_clearNotify, "journey");
    }
  }
  viewDidLoad(e) {
    var t = this,
      o = TravelGameModel.getInstance();
    this.curLevelId = TravelGameData.getInstance().getLevelId();
    var n = o.getCurJourney(),
      i = o.getLevelConfig(n),
      r = MapConfigMap[i.mapConfig];
    this.mapConfig = DataReader.getList(r);
    this.levelConfig = i;
    this.clearRedDot();
    this.initTableView();
    this.lastPassLevel = o.getLastMapLevel();
    this.lastPassLevel = Math.max(this.lastPassLevel, 1);
    o.setLastMapLevel(this.curLevelId);
    this.isCollecting = false;
    if (null == e ? void 0 : e.badge) {
      this.isCollecting = true;
      ControllerManager.getInstance().pushViewByController("TravelRewardController", {
        levelId: this.curLevelId - 1,
        isShowAction: false
      });
    }
    this.updateView();
    this.scheduleOnce(function () {
      if (t.mapView) {
        t.mapView.resetViewSize();
        t.mapView.checkUpdateCell();
      }
    }, 0);
    this.schedule(this.updateTime.bind(this), 5);
  }
  @mj.traitEvent("TLMapVw_viewShow")
  viewDidShow() {}
  updateTime() {
    var e = TravelGameModel.getInstance().getRemainTime(),
      t = __read(GameUtils.getRemainTimeParts(e), 4),
      o = t[0],
      n = t[1],
      i = t[2],
      r = (t[3], function (e) {
        return e.toString().padStart(2, "0");
      });
    I18NStrings.setText(this.timerLabel.node, r(o) + "d" + r(n) + "h" + r(i) + "m", "Common_CountDown_Minute", [o, n, i]);
  }
  updateBottom() {
    this.levelBtnLabel = this.enterBtn.getComponentInChildren(cc.Label);
    I18NStrings.setText(this.levelBtnLabel.node, "Level " + this.curLevelId, "MahjongTiles_MapPage_Level", [this.curLevelId]);
    this.bottomNode.active = this.curLevelId <= this.levelConfig.levelCount;
    var e = TravelGameModel.getInstance();
    this.hardBgNode.active = false;
    this.woodBgNode.active = true;
    this.hardUpBgNode.active = false;
    this.hardTipNode.active = false;
    if (e.isHardLevel(this.curLevelId)) {
      this.woodBgNode.active = false;
      this.hardBgNode.active = true;
      this.hardUpBgNode.active = true;
      this.hardTipNode.active = true;
      this.updateDiffBgWidth();
    }
    this.playEnterBtnAnim();
  }
  updateDiffBgWidth() {
    var e = this;
    this.scheduleOnce(function () {
      cc.isValid(e.hardTipNode) && (e.hardUpBgNode.width = e.hardTipNode.width + 50);
    }, 0);
  }
  updateLeft() {
    var e = this,
      t = TravelGameModel.getInstance(),
      o = t.getCurJourney(),
      n = t.getRewardInfo(o).find(function (t) {
        return t.type === ETravelRewardType.EBadge && t.lv >= e.curLevelId && !t.gain;
      });
    if (n) {
      var i = t.getLevelById(n.lv, o),
        r = n.lv;
      this.leftNode.active = true;
      var l = (this.lastPassLevel - 1) / r,
        s = DataReader.getByKey(ConfigType.TravelNavigation, i.type);
      if (s && "" !== s.path) {
        var c = __read(s.path.split(":"), 2),
          u = c[0],
          p = c[1];
        BaseSprite.refreshWithNode(this.leftIcon.node, u, s.atlas, true, p);
      }
      this.nextBadgeLevel = n.lv;
      var f = (this.curLevelId - 1) / r;
      if (f === l) {
        this.leftProgressBar.progress = f;
        this.leftValue.string = this.curLevelId - 1 + "/" + r;
        this.leftProgressBar2.width = 150 * f;
        this.leftProgressBar2.opacity = 0;
      } else {
        this.leftProgressBar.progress = l;
        this.leftValue.string = this.curLevelId - 1 + "/" + r;
        cc.tween(this.leftProgressBar).to(0.333, {
          progress: f
        }).start();
        this.leftProgressBar2.opacity = 255;
        this.leftProgressBar2.width = 150 * l;
        cc.tween(this.leftProgressBar2).to(0.333, {
          width: 150 * f
        }).to(0.333, {
          opacity: 0
        }).start();
        this.leftValue.node.scale = 1;
        cc.tween(this.leftValue.node).to(0.266, {
          scale: 1.2
        }, {
          easing: cc.easing.sineOut
        }).to(0.234, {
          scale: 1
        }, {
          easing: cc.easing.sineIn
        }).start();
      }
    } else {
      this.nextBadgeLevel = -1;
      this.leftNode.active = false;
    }
  }
  updateMap() {
    this.updateMapElementsConfig();
    this.mapView.reloadData();
    var e = this.getCellPosById(this.curLevelId);
    e && this.mapView.setContentPosition(e, true);
  }
  updateTitle() {
    var e = TravelGameModel.getInstance().getCurJourney(),
      t = DataReader.getByKey(ConfigType.Travel, e);
    I18NStrings.setText(this.titleLabel.node, "Adventure", t.name);
    this.journeyNameCN = I18NStrings.getCN(t.name);
  }
  updateView() {
    this.updateMap();
    this.updateLeft();
    this.updateTime();
    this.updateBottom();
    this.updateTitle();
  }
  getCellPosById(e) {
    var t = this.stateConfig.elements.filter(function (e) {
        return e.level > 0;
      }),
      o = t.findIndex(function (t) {
        return t.level === e;
      });
    return o >= 0 ? t[o].pos : t.length > 0 ? t[t.length - 1].pos : null;
  }
  @mj.traitEvent("TLMapVw_updateMapEleCfg")
  updateMapElementsConfig() {
    var e,
      t,
      o = false;
    this.curLevelId > this.levelConfig.levelCount && (o = true);
    var n = o ? this.levelConfig.finishOffset : 0,
      i = cc.size(1080, this.levelConfig.height + n);
    i.height += n;
    this.stateConfig = {
      size: i,
      finishOffset: n,
      elements: [],
      map: this.levelConfig.mapRes,
      path: this.levelConfig.mapConfig
    };
    var r = Date.now(),
      a = this.curLevelId - this.lastPassLevel,
      s = Math.min(a, 10),
      c = this.curLevelId - s,
      p = TravelGameModel.getInstance().getCurJourney(),
      d = TravelGameModel.getInstance().getRewardInfo(p).filter(function (e) {
        return e.type === ETravelRewardType.EBadge && e.gain;
      }).map(function (e) {
        return e.lv;
      });
    try {
      for (var h = __values(this.mapConfig), y = h.next(); !y.done; y = h.next()) {
        var m = y.value,
          g = EJourneyMapState.Locked,
          _ = 0;
        if (this.curLevelId === m.level) {
          g = EJourneyMapState.Selected;
          d.includes(m.level) && (g = EJourneyMapState.SelectedUnlocked);
        } else if (this.curLevelId > m.level) {
          g = EJourneyMapState.Unlocked;
          if (this.isCollecting && this.curLevelId - 1 === m.level) g = EJourneyMapState.Collecting;else if (m.level > c) {
            g = EJourneyMapState.UnlockedPass;
            _ = 0.1 * (m.level - c);
          }
        } else d.includes(m.level) && (g = EJourneyMapState.Unlocked);
        FinishLevelElement.includes(m.type) && !o || this.stateConfig.elements.push({
          level: m.level,
          type: m.type,
          state: g,
          pos: cc.v2(m.pos[0], m.pos[1] - n),
          size: MapElementFactory.getSize(m.type),
          endTime: r + 1000 * _
        });
      }
    } catch (t) {
      e = {
        error: t
      };
    } finally {
      try {
        y && !y.done && (t = h.return) && t.call(h);
      } finally {
        if (e) throw e.error;
      }
    }
  }
  scrollToCellById(e) {
    var t = this.stateConfig.elements.findIndex(function (t) {
      return t.level === e;
    });
    t >= 0 && this.scrollToIndex(t, 300);
  }
  scrollToIndex(e, t = 50, o = 0.3) {
    if (!(e < 0 || e >= this.stateConfig.elements.length)) {
      var n = this.stateConfig.elements[e].pos,
        i = this.mapScrollView.node.height,
        r = i / 2 - t,
        a = this.mapScrollView.node.convertToWorldSpaceAR(cc.v2(0, r)),
        l = this.mapScrollView.content.convertToNodeSpaceAR(a).sub(n),
        s = this.mapScrollView.getScrollOffset().add(l);
      s.x = 0;
      var c = this.mapScrollView.content.height - i;
      s.y = Math.max(0, Math.min(c, s.y));
      this.mapScrollView.scrollToOffset(s, o);
    }
  }
  onLeftBtnClick() {
    -1 !== this.nextBadgeLevel && this.scrollToCellById(this.nextBadgeLevel);
  }
  initTableView() {
    this.mapView = new MapView({
      view: this.mapScrollView
    });
    this.mapView.viewContentSize = this.viewContentSize.bind(this);
    this.mapView.elementTypeAtIndex = this.elementTypeAtIndex.bind(this);
    this.mapView.elementSizeAtIndex = this.elementSizeAtIndex.bind(this);
    this.mapView.elementCount = this.elementCount.bind(this);
    this.mapView.elementAtIndex = this.elementAtIndex.bind(this);
    this.mapView.elementPosAtIndex = this.elementPosAtIndex.bind(this);
    this.mapView.elementWillHide = this.elementWillHide.bind(this);
    this.mapView.elementWillShow = this.elementWillShow.bind(this);
    this.mapView.elementWillMove = this.elementWillMove.bind(this);
  }
  createMapElements(e, t) {
    var o = this.getElementData(t),
      n = MapElementFactory.createCell(o.type),
      i = n.getComponent(BaseCell);
    if (i) {
      i.delegate = this.delegate;
      i.updateCell(o);
    }
    n.setContentSize(o.size);
    return n;
  }
  getElementData(e) {
    return this.stateConfig.elements[e];
  }
  viewContentSize() {
    return cc.size(1080, this.levelConfig.height);
  }
  elementTypeAtIndex(e, t) {
    var o = this.getElementData(t);
    return o ? o.type.toString() : "";
  }
  elementSizeAtIndex(e, t) {
    return this.getElementData(t).size;
  }
  elementCount() {
    var e, t;
    return (null === (t = null === (e = this.stateConfig) || void 0 === e ? void 0 : e.elements) || void 0 === t ? void 0 : t.length) || 0;
  }
  elementAtIndex(e, t) {
    return this.createMapElements(e, t);
  }
  elementPosAtIndex(e, t) {
    return this.getElementData(t).pos;
  }
  elementWillHide() {}
  elementWillShow(e, t, o) {
    var n = this.getElementData(t),
      i = o.getComponent(BaseCell);
    i && i.updateCell(n);
  }
  elementWillMove() {}
}