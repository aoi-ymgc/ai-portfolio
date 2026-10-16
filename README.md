# AI活用ポートフォリオ

山口 碧のWeb/UIデザインとAI活用事例を紹介する、6ページの静的サイトです。ネイビー、青緑、オレンジを基調に、実際の制作画面と、本人が設計・判断した工程を掲載しています。

公開サイト: https://ai-portfolio.aoiroymgc.workers.dev/

## ページ

- `public/index.html`: Hero、制作事例、制作方針、制作フロー、使用ツール、プロフィール
- `public/case-aoi-tools.html`: Web制作支援ツール3点の企画・UI設計とCodexによる実装支援
- `public/case-scss.html`: SCSS初心者向け教材・UI・ロゴの設計と制作
- `public/case-banner-design.html`: カフェ・賃貸物件のバナー12点と、デザイン判断・AI活用の説明
- `public/case-knowledge.html`: Google Drive Knowledgeを使った制作知識の整理・参照
- `public/case-excel.html`: Microsoft Copilotを使った照合・集計手順の整理

バナー事例は通常ポートフォリオの完成画像を使用し、架空広告・AI生成素材であることを明記しています。横長／Instagram版は各シリーズで切り替え可能です。画像は `public/assets/img/banner-gallery/` に保管しています。

KnowledgeとExcelは、公開できるHTML/CSSの図解で説明しています。Excel事例に実データ、勤務先名、実際の業務画面は含めていません。プロフィールの線画は依頼に添付された画像を加工せず使用しています。

## Build / Deploy

```powershell
npm ci
npm run build
npm run deploy
```

Cloudflare Workers BuildsはGitHubの`main`ブランチを監視し、pushごとに`npm ci && npm run build`の後、`npx wrangler deploy`で公開します。
