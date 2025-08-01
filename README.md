# TOKIUM 開発インターン 2025年夏

このリポジトリは、2025年8月〜9月に実施される株式会社TOKIUM開発インターンシップの開発環境雛形です。

## 概要

3日間の開発インターンシップで、n8nとNode.jsを使用したAIエージェントの開発を体験します。

## 技術スタック

- **n8n**: ワークフロー自動化ツール
- **Node.js**: JavaScript実行環境
- **AI/LLM**: AIエージェント開発

## プロジェクト構成

```
summer-intern-2025/
├── README.md          # プロジェクト概要（このファイル）
├── CLAUDE.md          # AI開発アシスタントガイドライン
├── compose.yaml       # Docker Compose設定
├── scripts/           # ユーティリティスクリプト
├── api/               # Node.js APIサーバー
│   ├── src/           # TypeScriptソースコード
│   ├── package.json   # Node.js依存関係
│   └── Dockerfile     # APIサーバーのDockerイメージ
├── n8n/               # n8n関連ファイル（今後追加予定）
├── sample/            # サンプルワークフロー
└── docs/              # ドキュメント
```

## セットアップ

### 前提条件

- Docker Desktop
- Docker Compose (Docker Desktopに含まれています)

### インストール手順

1. リポジトリのクローン
```bash
git clone [repository-url]
cd summer-intern-2025
```

2. 環境変数の設定
```bash
# セットアップスクリプトを実行（.envファイルの生成とN8N_ENCRYPTION_KEYの自動生成）
./scripts/setup-env.sh

# 必要に応じて.envファイルを編集
```

3. サービスの起動
```bash
# すべてのサービスを起動（n8n + APIサーバー）
docker compose up -d

# 個別に起動する場合
docker compose up -d n8n    # n8nのみ
docker compose up -d api    # APIサーバーのみ
```

4. サービスへのアクセス
- **n8n**: http://localhost:5678
  - 初回アクセス時はアカウント作成画面が表示されます
- **APIサーバー**: http://localhost:3000
  - ヘルスチェック: http://localhost:3000/health

### Docker操作

```bash
# ログを確認
docker compose logs -f        # すべてのサービス
docker compose logs -f n8n    # n8nのみ
docker compose logs -f api    # APIサーバーのみ

# サービスを停止
docker compose down

# サービスを再起動
docker compose restart        # すべてのサービス
docker compose restart n8n    # n8nのみ
docker compose restart api    # APIサーバーのみ
```

### APIサーバーの開発

```bash
# APIディレクトリに移動
cd api

# 依存関係をインストール（初回のみ）
npm install

# 開発モードで起動（ホットリロード対応）
npm run dev

# TypeScriptのビルド
npm run build

# リンターの実行
npm run lint
npm run lint:fix

# コードフォーマット
npm run format
```

## 開発の進め方

### Day 1: 環境構築とn8n基礎
- 開発環境のセットアップ
- n8nの基本概念の理解
- 簡単なワークフローの作成

### Day 2: AIエージェント開発
- LLM連携の実装
- カスタムノードの開発
- エージェントロジックの構築

### Day 3: 統合と最適化
- システム統合
- パフォーマンス最適化
- デモ準備

## 開発ガイドライン

- コードはTypeScriptで記述することを推奨
- コミットメッセージは日本語で記述可
- プルリクエストを作成する前にlintとテストを実行

## リソース

- [n8n公式ドキュメント](https://docs.n8n.io/)
- [Node.js公式ドキュメント](https://nodejs.org/docs/)
- 社内Wiki（インターン開始時に共有）

## サポート

質問や問題がある場合は、以下の方法でサポートを受けられます：

- Slackチャンネル: #intern-2025-summer
- メンター: インターン開始時に割り当て

## ライセンス

このプロジェクトは株式会社TOKIUMの内部教育用途のために作成されています。

---

株式会社TOKIUM 開発チーム