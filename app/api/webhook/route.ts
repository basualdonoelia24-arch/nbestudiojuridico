export async function POST(req: Request) {
  const data = await req.json();

  try {
    await fetch('https://nbestudiojuridico.app.n8n.cloud/webhook/24b67f59-8654-4ffe-941c-65ab162765d9', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
  } catch (e) {
    console.log('Webhook sent');
  }

  return Response.json({ success: true });
}