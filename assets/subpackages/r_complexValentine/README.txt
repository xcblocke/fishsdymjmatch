# 情人节活动实现说明

## 📋 概述

本项目实现了一个完整的情人节活动系统，包括活动时间控制、进度追踪、弹窗管理和美术效果开关。

---

## 🗂️ 文件结构

```
assets/bundles/remote/valentine/r_complexValentine/
├── ComplexValentineTrait.ts          # 核心特性逻辑
├── ValentineModel.ts                 # 数据模型
├── HallValentineBtn.ts               # 主界面icon按钮
├── ValentineIntroView.ts             # 活动开启弹窗View
├── ValentineIntroController.ts       # 活动开启弹窗Controller
├── ValentineActivateView.ts          # 效果激活弹窗View
├── ValentineActivateController.ts    # 效果激活弹窗Controller
├── ValentineEndView.ts               # 活动结束弹窗View
└── ValentineEndController.ts         # 活动结束弹窗Controller
```

---

## ✨ 核心功能

### 1. 活动时间控制

**配置参数**：
```typescript
{
  startDate: "2026-02-06 00:00:00",     // 活动开始时间
  endDate: "2026-02-22 23:59:59",       // 活动结束时间
  phase1Duration: 168,                   // 第一阶段时长(小时)，7天
  phase2Duration: 360,                   // 第二阶段时长(小时)，15天
  requiredLevels: 10                     // 需要完成的关卡数
}
```

**时间判断逻辑**：
- 使用手机本地时间判断是否在活动期内
- 自动处理活动状态转换（未开始→进行中→已激活→已结束）
- 支持离线自动更新状态

### 2. 活动状态机

```
NotStarted (未开始)
    ↓ [进入活动时间]
InProgress (进行中)
    ↓ [完成10关]
Activated (已激活)
    ↓ [活动到期或手动结束]
Ended (已结束)
```

### 3. 主界面Icon

**进度中状态**：
- 显示进度条：X/10
- 点击：进入游戏（优先旅行模式）

**完成状态**：
- 显示ON/OFF开关
- 点击：切换美术效果开关
- ON状态：美术效果生效
- OFF状态：美术效果关闭

### 4. 弹窗系统

#### 活动开启弹窗
- **触发时机**：首次进入主界面且活动已开启
- **优先级**：最高（通过`onHallVw_onPopView`实现）
- **功能**：
  - 关闭按钮：关闭弹窗，变成主界面icon
  - Let's Go按钮：关闭弹窗并进入游戏（优先旅行）

#### 效果激活弹窗
- **触发时机**：进度达成后
  - 进入结算界面时，慢结算动画后0.2s弹出
  - 回到主界面时，立即检查并弹出
- **功能**：
  - 无需点击，弹出时自动激活效果
  - 3秒后自动关闭
  - 激活后效果持续360小时（15天）

#### 活动结束弹窗
- **触发时机**：活动到期后
  - 进入结算界面时，慢结算动画后0.2s弹出
  - 回到主界面时，立即检查并弹出
- **功能**：
  - 弹出时自动关闭美术效果
  - 主界面icon消失
  - 确认按钮：关闭弹窗

---

## 🔧 核心实现

### 1. 活动进度更新

```typescript
// 在主线关卡胜利后更新进度
onWinCtrl_viewDidShow(args, next) {
    // 只在主线关卡模式下更新
    if (currentGameType !== MjGameType.Normal) return;
    
    // 只在活动进行中才更新
    if (state !== ValentineActState.InProgress) return;
    
    // 增加进度
    model.addProgress(1);
    next();
}
```

### 2. 结算界面弹窗劫持

```typescript
onWinVw_popNextView(args, next) {
    // 检查是否需要弹出激活弹窗
    if (model.shouldShowActivatePopup()) {
        setTimeout(() => this.showActivatePopup(), 200); // 0.2s延迟
        next(); // 不阻断后续弹窗
        return;
    }
    
    // 检查是否需要弹出结束弹窗
    if (model.shouldShowEndPopup()) {
        setTimeout(() => this.showEndPopup(), 200); // 0.2s延迟
        next(); // 不阻断后续弹窗
        return;
    }
    
    next();
}
```

### 3. 美术效果开关

```typescript
// 检查效果是否应该生效
public isEffectActive(): boolean {
    return this.model.isEffectActive();
}

// 其他特性可以通过此方法判断是否应用美术效果
const ComplexValentineTrait = mj.getClassByName('ComplexValentineTrait');
if (ComplexValentineTrait?.getInstance()?.isEffectActive()) {
    // 应用情人节美术效果
}
```

---

## 📝 数据持久化

**ValentineModel** 使用 `localData` 自动持久化以下数据：

```typescript
{
  progress: number;                // 当前进度（0-10）
  state: ValentineActState;        // 活动状态
  startTime: number;               // 活动开始时间戳
  activatedTime: number;           // 效果激活时间戳
  effectEndTime: number;           // 效果结束时间戳
  hasShownIntroPopup: boolean;     // 是否已弹出开启弹窗
  hasShownActivatePopup: boolean;  // 是否已弹出激活弹窗
  hasShownEndPopup: boolean;       // 是否已弹出结束弹窗
  effectEnabled: boolean;          // 效果开关状态（true=ON）
}
```

---

## 🎯 活动流程

### 阶段1：未完成进度（0-7天）

1. **进入主界面**：
   - 弹出活动开启弹窗（仅首次）
   - 显示主界面icon（进度状态）

2. **进行游戏**：
   - 每完成一关主线关卡，进度+1
   - icon实时更新进度显示

3. **超时处理**：
   - 如果7天内未完成10关
   - 活动直接结束，icon消失
   - 不弹激活弹窗和结束弹窗

### 阶段2：完成进度后（0-15天）

1. **首次完成10关**：
   - 结算界面延迟0.2s弹出激活弹窗
   - 自动激活效果
   - 主界面icon变为完成状态（显示ON/OFF开关）

2. **效果生效期间**：
   - 美术效果根据ON/OFF状态显示
   - 点击icon可切换开关
   - 效果持续360小时（15天）

3. **活动到期**：
   - 结算界面或主界面弹出结束弹窗
   - 自动关闭美术效果
   - 主界面icon消失

---

## 🔍 边界条件处理

1. **冷启重进**：
   - 弹窗状态已记录，不会重复弹出
   - 活动状态自动恢复
   
2. **强退再进**：
   - 数据持久化，进度不丢失
   - 弹窗状态记录，避免重复

3. **跨日期重进**：
   - 自动检查活动时间
   - 离线期间状态自动更新

4. **旅行模式优先**：
   - Let's Go按钮和icon点击均优先进入旅行
   - 无旅行活动时进入主线关卡

---

## ⚠️ 注意事项

### 必须完成的工作

1. **UI资源准备**：
   - 创建预制体：`prefabs/valentine/HallValentineBtn.prefab`
   - 创建预制体：`prefabs/valentine/ValentineIntro.prefab`
   - 创建预制体：`prefabs/valentine/ValentineActivate.prefab`
   - 创建预制体：`prefabs/valentine/ValentineEnd.prefab`
   - 添加必要的美术资源（按钮、图标、背景等）

2. **特性配置**：
   - 在特性配置中添加事件监听：
     ```json
     {
       "key": "ComplexValentine",
       "bundle": "r_complexValentine",
       "events": [
         { "event": "HallVw_updateUI", "type": 2 },
         { "event": "HallVw_onPopView", "type": 0, "priority": 100 },
         { "event": "WinCtrl_viewDidShow", "type": 2 },
         { "event": "WinVw_popNextView", "type": 1 },
         { "event": "HallCtrl_viewDidShow", "type": 2 }
       ]
     }
     ```

3. **文案本地化**：
   - 更新各弹窗的文案为实际需要的文案
   - 支持多语言（通过I18NStrings）

4. **美术效果接入**：
   - 其他特性通过 `ComplexValentineTrait.isEffectActive()` 判断
   - 在需要的地方应用情人节美术效果

### 代码规范检查

✅ 所有类都使用了 `@mj.class` 装饰器  
✅ Trait使用了 `@mj.trait` 装饰器  
✅ 所有事件回调都调用了 `next()`  
✅ Model对象修改后进行了自赋值  
✅ 无跨Bundle导入  
✅ 资源加载使用正确的API  

---

## 🧪 测试建议

### 功能测试

1. **活动开启测试**：
   - 修改系统时间到活动期内
   - 首次进入主界面应弹出开启弹窗

2. **进度测试**：
   - 完成主线关卡，检查进度更新
   - 检查icon进度显示是否正确

3. **激活测试**：
   - 完成10关后，检查激活弹窗
   - 检查icon状态切换为完成状态

4. **开关测试**：
   - 点击icon切换ON/OFF
   - 检查状态是否正确持久化

5. **结束测试**：
   - 修改系统时间到活动期后
   - 检查结束弹窗和icon消失

### 边界测试

1. 活动期外进入
2. 7天未完成10关
3. 冷启重进
4. 强退再进
5. 非主线关卡（旅行、每日挑战）

---

## 📦 打包清单

确保以下资源已添加到bundle：

- [ ] Trait脚本及meta文件
- [ ] Model脚本及meta文件
- [ ] 所有View/Controller脚本及meta文件
- [ ] UI按钮脚本及meta文件
- [ ] 所有预制体及meta文件
- [ ] 美术资源（纹理、Spine等）
- [ ] 特性配置JSON

---

## 版本信息

- **创建日期**：2026-01-19
- **作者**：wudaoquan
- **版本**：v1.0.0
