import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

// 環境変数の読み込み
dotenv.config()

const app = express()
const PORT = process.env.API_PORT || 3000

// ミドルウェア
app.use(cors())
app.use(express.json())

// ヘルスチェックエンドポイント
app.get('/health', (_req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    service: 'tokium-intern-api',
    version: '1.0.0',
  })
})

// サーバー起動
app.listen(PORT, () => {
  console.log(`APIサーバーが起動しました: http://localhost:${PORT}`)
  console.log(`ヘルスチェック: http://localhost:${PORT}/health`)
})