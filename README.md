# OLAB Tech 品牌网站和工具平台

这是一个包含两个网站的完整项目：
- **olabtech.com** - 品牌公司网站
- **olabapp.com** - 工具平台网站

## 🎯 项目概述

### 网站一：OLAB Tech 品牌网站 (olabtech.com)
- **首页** - 品牌介绍，欢迎语，跳转按钮到工具平台
- **产品页面** - 展示所有项目与应用
- **关于我们** - 公司愿景、理念、团队介绍
- **博客** - 项目进展和知识分享
- **联系我们** - 联系表单和公司信息

### 网站二：OLAB App 工具平台 (olabapp.com)
- **首页** - 工具平台介绍和分类导航
- **工具分类** - PDF工具、视频工具、图像工具、AI工具
- **具体工具页面** - 单页应用风格的工具界面
- **示例工具**：
  - PDF转Word工具
  - 视频文字提取工具
  - OLAB Coach AI助手

## 🛠️ 技术栈

- **框架**: Next.js 14 (App Router)
- **样式**: Tailwind CSS
- **图标**: Lucide React
- **语言**: TypeScript
- **部署**: 静态导出兼容

## 📁 项目结构

```
olabtech-platforms/
├── src/
│   ├── app/
│   │   ├── globals.css              # 全局样式
│   │   ├── layout.tsx               # 根布局
│   │   ├── page.tsx                 # OLAB Tech 首页
│   │   ├── products/                # 产品页面
│   │   ├── about/                   # 关于我们
│   │   ├── blog/                    # 博客页面
│   │   ├── contact/                 # 联系我们
│   │   └── olabapp/                 # 工具平台
│   │       ├── page.tsx             # 工具平台首页
│   │       ├── pdf2word/            # PDF转Word工具
│   │       ├── extract-video-text/  # 视频文字提取
│   │       ├── coach/               # OLAB Coach
│   │       └── category/            # 工具分类
│   └── components/
│       ├── olabtech/                # 品牌网站组件
│       │   ├── Navbar.tsx
│       │   └── Footer.tsx
│       └── olabapp/                 # 工具平台组件
│           ├── Navbar.tsx
│           └── Footer.tsx
├── tailwind.config.js               # Tailwind 配置
├── next.config.js                   # Next.js 配置
├── package.json                     # 项目依赖
└── README.md                        # 项目说明
```

## 🚀 快速开始

### 安装依赖
```bash
npm install
```

### 开发模式
```bash
npm run dev
```

### 构建生产版本
```bash
npm run build
```

### 启动生产服务器
```bash
npm start
```

## 🎨 设计特点

### 品牌统一性
- 两个网站使用相同的设计语言和色彩方案
- 统一的 OLAB Tech 品牌标识
- 一致的导航和底部设计

### 技术风格
- 高科技简约风格
- 蓝色主题色彩
- 现代化的 UI 组件
- 响应式设计

### 用户体验
- 直观的导航结构
- 清晰的信息层次
- 流畅的交互效果
- 移动端友好

## 🔗 网站跳转

### 品牌网站 → 工具平台
- 导航栏中的"使用工具"按钮
- 首页的 CTA 按钮
- 产品页面的工具链接

### 工具平台 → 品牌网站
- 导航栏中的"关于我们"链接
- 底部的品牌信息链接

## 📱 响应式设计

所有页面都支持：
- 桌面端 (1200px+)
- 平板端 (768px - 1199px)
- 移动端 (< 768px)

## 🚀 部署说明

项目配置为静态导出模式，可以部署到：
- Vercel
- Netlify
- GitHub Pages
- 任何静态文件托管服务

## 🔧 自定义配置

### 修改品牌信息
编辑 `src/components/olabtech/` 和 `src/components/olabapp/` 中的组件

### 添加新工具
在 `src/app/olabapp/` 下创建新的工具页面

### 修改样式
编辑 `tailwind.config.js` 和 `src/app/globals.css`

## 📄 许可证

© 2025 OLAB Tech. 保留所有权利。

## 🤝 贡献

欢迎提交 Issue 和 Pull Request 来改进项目。

---

**OLAB Tech** - 创新科技解决方案
