import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

// 環境変数の読み込み
dotenv.config()

const app = express()
const PORT = Number(process.env.API_PORT) || 3000
const N8N_URL = process.env.N8N_URL || "http://localhost:5678/webhook/plan-info.v1"

// ミドルウェア
app.use(cors())
app.use(express.json())

app.get("/hello_world", (_req, res) => {
  res.send("hello world!");
})

// ヘルスチェックエンドポイント
app.get('/health', (_req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    service: 'tokium-intern-api',
    version: '1.0.0',
  })
})

//フロントからのメッセージをn8nへ中継するエンドポイント
app.post('/api/chat', async (req, res) => {
  try {
    const r = await fetch(N8N_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json"},
      //期待する入力は{sessionId, query}の形
      body: JSON.stringify({ sessionId: req.body?.sessionId, query: req.body?.query }),
    })

    // n8nのレスポンスをそのまま返す
    const text = await r.text();
    res.status(r.status).type(r.headers.get("content-type") || "application/json").send(text);
  } catch (e: any) {
    res.status(502).json({ ok: false, error: e?.message || "gateway error"});
  }
})

// サーバー起動
app.listen(PORT, () => {
  console.log(`APIサーバーが起動しました: http://localhost:${PORT}`)
  console.log(`n8n Webhook 送信先: ${N8N_URL}`)
  console.log(`受け口(自分のAPI): http://localhost:${PORT}/api/chat`)
  console.log(`ヘルスチェック: http://localhost:${PORT}/health`)
})