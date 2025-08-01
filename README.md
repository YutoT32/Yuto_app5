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
├── src/               # ソースコード
├── config/            # 設定ファイル
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

3. n8nの起動
```bash
docker compose up -d
```

4. n8nにアクセス
- ブラウザで http://localhost:5678 を開く
- 初回アクセス時はアカウント作成画面が表示されます

### n8nの操作

```bash
# ログを確認
docker compose logs -f n8n

# n8nを停止
docker compose down

# n8nを再起動
docker compose restart n8n
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