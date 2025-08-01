FROM node:22-alpine

WORKDIR /app

# package.jsonとpackage-lock.json（存在する場合）をコピー
COPY api/package*.json ./

# 依存関係をインストール
RUN npm install

# ソースコードをコピー
COPY api/ .

# TypeScriptをビルド
RUN npm run build

# ポートを公開
EXPOSE 3000

# アプリケーションを起動
CMD ["npm", "start"]