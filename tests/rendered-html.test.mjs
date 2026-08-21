import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the professional portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  const html = await response.text();
  assert.match(html, /Muhammad Dawood \| Web Developer &amp; AI Automation Specialist/);
  assert.match(html, /I build websites/);
  assert.match(html, /SupportFlow AI/);
  assert.match(html, /Flowboard/);
  assert.match(html, /Workshop Desk/);
  assert.match(html, /LeadIQ AI/);
  assert.match(html, /muhammad-dawood-cv\.pdf/);
  assert.match(html, /og\.png/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/i);
});

test("includes professional project and contact links", async () => {
  const html = await (await render()).text();
  assert.match(html, /github\.com\/davimiza1\/leadiq-ai/);
  assert.match(html, /leadiq-ai-xtiz-pearl\.vercel\.app/);
  assert.match(html, /github\.com\/davimiza1\/ai-lead-qualification-ghl/);
  assert.match(html, /github\.com\/davimiza1\/supportflow-ai/);
  assert.match(html, /flowboard-saas\.vercel\.app/);
  assert.match(html, /mailto:dawoodbiulds@gmail\.com/);
  assert.match(html, /linkedin\.com\/in\/muhammad-dawood-03b307274/);
});
