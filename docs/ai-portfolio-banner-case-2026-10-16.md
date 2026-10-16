# AIポートフォリオ｜バナー・SNS広告デザイン制作（2026-10-16）

## 目的・成果
通常ポートフォリオの自主制作実績をAIポートフォリオ向けに構成し直し、画像生成だけでなく訴求整理・デザインの比較・採用判断を見せる。

## 表示箇所
- AIポートフォリオ: https://ai-portfolio.aoiroymgc.workers.dev/
- 新規事例: https://ai-portfolio.aoiroymgc.workers.dev/case-banner-design
- 通常版: https://aoi-ymgc.github.io/portfolio/%E4%BD%9C%E5%93%81%E8%A9%B3%E7%B4%B013.html

## 実装
- `public/index.html`: Aoi Tools、SCSSナビの次に新事例カードを追加。紹介文・メタ説明も更新
- `public/case-banner-design.html`: 新規詳細ページ。制作概要、本人/AIの役割、2シリーズ×各3案×2サイズ（12画像）、コピー・視線誘導の狙いを記述
- `public/assets/css/banner-case.css`: 既存の色とタイポグラフィを使ったカード／ギャラリーの追加スタイル
- `public/assets/js/banner-case.js`: 横長／Instagram版を切り替えるアクセシブルなタブ。JavaScript無効時には両サイズを表示
- `public/assets/img/banner-gallery/`: 通常版の最適化済WebP13ファイル（12画像＋一覧用）
- `public/sitemap.xml`: 新規事例URLを追加
- `.htmlvalidate.json`: 既存サイトと同じHTML表記の検証設定
- `README.md`: ページ追加を反映

## 事実の扱い
- カフェと賃貸物件は架空の広告案件。広告の公開実績や配信実績・成果数値は主張しない
- 画像生成・デザイン案をChatGPTで支援し、Canvaも制作に使用。デザイン上の判断を本人が行ったと説明
- 画像の元データを再加工せず通常版の完成WebPを再利用する

## 今後追加する場合
同じ `banner-series` セクション構造と `banner-gallery/{シリーズ名}/` の画像を追加する。画像サイズを増やす場合はタブとJSの対応も確認。トップカードの代表画像は任意に更新。既存のWeb制作事例、プロフィールの記述は維持する。

## QA・公開情報
- `node --check public/assets/js/banner-case.js`
- `npm.cmd run build`
- `npx.cmd --yes html-validate public/index.html public/case-banner-design.html`
- 画像・内部リンクの存在確認、主要画面幅の表示確認
- GitHub `aoi-ymgc/ai-portfolio` main → Cloudflare Workers Builds により自動公開（公開後に状態追記）
