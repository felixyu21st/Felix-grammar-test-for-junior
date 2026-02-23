# GrammarMaster - 英语语法互动练习

一个专为初中生设计的英语语法填空互动练习平台。

## 部署到 Vercel 指南

### 第一步：同步到 GitHub
1. 在 GitHub 上创建一个新的仓库（Repository）。
2. 在本地机器上，将代码下载并初始化 Git：
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <你的GitHub仓库地址>
   git push -u origin main
   ```

### 第二步：在 Vercel 上部署
1. 登录 [Vercel 控制台](https://vercel.com/)。
2. 点击 **"Add New"** -> **"Project"**。
3. 导入你刚刚创建的 GitHub 仓库。
4. **环境变量配置（重要）**：
   - 在部署设置的 **Environment Variables** 部分，添加 `GEMINI_API_KEY`。
   - 虽然目前应用主要使用本地题库，但如果你后续扩展了 AI 功能，这个 Key 是必需的。
5. 点击 **"Deploy"**。

### 技术栈
- React 19
- TypeScript
- Tailwind CSS 4
- Lucide React (图标)
- Motion (动画)
