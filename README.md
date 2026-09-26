# AI活用ポートフォリオ

既存のメインポートフォリオとは別に公開する、山口 碧のAI活用事例サイトです。ネイビー、オレンジ、ロゴ、タイポグラフィの基調を引き継ぎ、5ページの静的サイトとして構成しています。

## ページ

- `public/index.html`: AI活用方針、事例一覧、Workflow、Tools、プロフィール
- `public/case-aoi-tools.html`: Aoi Tools
- `public/case-scss.html`: SCSSナビ
- `public/case-knowledge.html`: ChatGPT × Google Drive Knowledge
- `public/case-excel.html`: Excel × Microsoft Copilot

掲載画面は公開済みプロダクトから取得したスクリーンショットです。KnowledgeとExcelはHTML/CSSの図解で説明し、Excel事例に実データ・勤務先名・実業務画面は含めていません。プロフィールの線画は依頼に添付された画像を加工せず使用しています。

## Build / Deploy

```powershell
npm ci
npm run build
npm run deploy
```

Cloudflare Workers BuildsはGitHubの`main`ブランチを監視し、pushごとに`npm ci && npm run build`の後、`npx wrangler deploy`で公開します。
