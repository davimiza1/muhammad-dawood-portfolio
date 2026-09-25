import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const content = await readFile(new URL("../src/data/content.ts", import.meta.url), "utf8");

test("preserves the required portfolio identity and contact details", () => {
  assert.match(content, /email: "dawoodbiulds@gmail\.com"/);
  assert.match(content, /value: 18, suffix: "", label: "public repositories"/);
});

test("includes the strongest recent projects with verified links", () => {
  assert.match(content, /title: "Dental Lead-to-Patient System"/);
  assert.match(content, /title: "Aster & Vale"/);
  assert.match(content, /title: "CommerceOps Pro"/);
  assert.match(content, /title: "Velmora Skin"/);
  assert.match(content, /leadiq-ai-xtiz-pearl\.vercel\.app/);
  assert.match(content, /supportflow-ai-psi\.vercel\.app/);
  assert.match(content, /aster-vale-demo\.myshopify\.com/);
  assert.match(content, /sites\.leadconnectorhq\.com\/preview\/oeJ6Wx9hXhrOwmxk936R/);
});
