# CLAUDE.md - AI開発アシスタントガイドライン

このファイルは、AI開発アシスタント（Claude）がこのプロジェクトで効果的にサポートを提供するためのガイドラインです。

## プロジェクト概要

- **目的**: TOKIUM開発インターン用のAIエージェント開発環境
- **期間**: 2025年8月〜9月（3日間の集中開発）
- **技術**: n8n、Node.js、AIエージェント開発

## 重要な規約

### コーディング規約

1. **言語**: TypeScriptを優先使用
2. **スタイル**: 
   - インデント: スペース2つ
   - セミコロン: 省略可
   - 引用符: シングルクォート優先
3. **命名規則**:
   - 変数・関数: camelCase
   - クラス・インターフェース: PascalCase
   - 定数: UPPER_SNAKE_CASE

### n8n開発規約

1. **ワークフロー命名**: 機能を明確に表す日本語名を使用
2. **ノード開発**:
   - エラーハンドリングを必須とする
   - 入出力の型定義を明確にする
   - ドキュメントコメントを記載

### APIサーバー開発規約

1. **エンドポイント設計**:
   - RESTfulな設計を心がける
   - レスポンスは必ずJSON形式
   - 適切なHTTPステータスコードを返す

2. **エラーハンドリング**:
   - try-catchでエラーを適切に処理
   - エラーレスポンスは統一フォーマット
   - ログ出力を忘れない

3. **開発フロー**:
   - 機能ごとにコミット
   - ESLint/Prettierでコード整形
   - TypeScriptの型を活用

### AIエージェント開発のベストプラクティス

1. **プロンプトエンジニアリング**:
   - 明確で具体的な指示を記述
   - コンテキストを適切に設定
   - エラーケースを考慮

2. **セキュリティ**:
   - APIキーは環境変数で管理
   - ユーザー入力は必ず検証
   - レート制限を実装

## ディレクトリ構造

```
/api/              # Node.js APIサーバー
  /src/            # TypeScriptソースコード
  /dist/           # ビルド出力
  package.json     # Node.js依存関係
  tsconfig.json    # TypeScript設定
  .eslintrc.json   # ESLint設定
  .prettierrc      # Prettier設定

/docker/           # Docker関連ファイル
  /n8n/            # n8n用Dockerfile（curlインストール付き）
  /node/           # APIサーバー用Dockerfile

/sample/           # サンプルワークフロー
  Weather Report.json         # 天気情報取得ワークフロー
  Node App Health Check.json  # APIヘルスチェックワークフロー

/scripts/          # ユーティリティスクリプト
  setup-env.sh     # 環境設定スクリプト

/docs/             # ドキュメント（今後追加予定）
```

## 開発サポート時の注意点

1. **インターン生のレベル**:
   - プログラミング経験はあるが、n8nは初心者
   - AIエージェント開発は初めて
   - 丁寧な説明を心がける

2. **時間制約**:
   - 3日間という短期間での開発
   - 必要最小限の機能に集中
   - 過度な最適化は避ける

3. **学習目標**:
   - n8nの基本操作の習得
   - AIエージェントの基本概念理解
   - 実装を通じた実践的な学習

## よくある質問と回答

### Q: n8nのカスタムノードはどう作成しますか？
A: `/n8n/nodes/`ディレクトリに新しいTypeScriptファイルを作成し、INodeType インターフェースを実装します。

### Q: 環境変数はどこで設定しますか？
A: `.env`ファイルに設定し、`process.env.VARIABLE_NAME`でアクセスします。

### Q: AIモデルのAPI連携はどう実装しますか？
A: n8nのHTTP Requestノードまたはカスタムノードを使用してAPIを呼び出します。

### Q: APIサーバーの開発はどう始めますか？
A: `/api`ディレクトリで`npm install`後、`npm run dev`で開発サーバーを起動します。

### Q: n8nとAPIサーバーの連携はどうしますか？
A: 同じDockerネットワーク内なので、`http://api:3000`でアクセス可能です。

## Docker構成

- **n8n**: カスタムDockerfile（curlコマンド付き）
- **APIサーバー**: Node.js 22-alpine ベース
- **ネットワーク**: 共有ネットワーク（tokium-network）
- **ボリューム**: n8n_dataで永続化

## 推奨ツール・ライブラリ

- **開発**: VS Code、n8n Desktop
- **テスト**: Jest、n8n-node-dev
- **デバッグ**: Chrome DevTools（n8n UI）
- **AI/LLM**: OpenAI API、Anthropic API（Claude）

## リンク集

- [n8nカスタムノード開発ガイド](https://docs.n8n.io/integrations/creating-nodes/)
- [n8nワークフロー例](https://n8n.io/workflows/)
- [TypeScript公式ドキュメント](https://www.typescriptlang.org/docs/)

## よく使うコマンド

### Docker関連
```bash
# 全サービス起動
docker compose up -d

# ログ確認
docker compose logs -f api
docker compose logs -f n8n

# 再起動
docker compose restart
```

### API開発
```bash
cd api
npm run dev    # 開発サーバー起動
npm run lint   # リント実行
npm run build  # TypeScriptビルド
```

## 更新履歴

- 2025年7月: 初版作成
- 2025年8月: APIサーバー環境追加

---

このガイドラインは随時更新されます。最新の情報はGitリポジトリを確認してください。