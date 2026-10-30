// WORKS の分類（ヘッダーのプルダウンとトップのボタンから各一覧ページへ）
import { otherProjects } from "./otherProjects.js";

export const categories = [
  { id: "miraiz-enechange", ja: "ミライズエネチェンジ", en: "MIRAIZ ENECHANGE" },
  { id: "mitsue-links", ja: "ミツエーリンクス", en: "Mitsue-Links" },
  { id: "other", ja: "有限会社ゲイル・Creasant Digital Limited（香港）・自主制作", en: "Gale Co., Ltd. / Creasant Digital Limited (Hong Kong) / Personal" },
];

// CASE 番号 → 分類（ここにない番号は「その他」）
const caseCategory = {
  "miraiz-enechange": ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13"],
  "mitsue-links": ["14", "15", "16", "17", "18", "19", "20"],
};

export function categoryOf(caseNumber) {
  for (const [id, nums] of Object.entries(caseCategory)) if (nums.includes(caseNumber)) return id;
  return "other";
}

// CASE 01–03 はトップページの WORKS 内にあるので、一覧からはトップの各 CASE へリンク
const featured = [
  { caseNumber: "01", src: "/images/app-top3.jpg", ja: "EV充電エネチェンジ アプリ改修 — v4.0「ニコラ」メジャーアップデート", en: "EV Charge ENECHANGE App Redesign — v4.0 “Nikola” Major Update" },
  { caseNumber: "02", src: "/images/lg-top.webp", ja: "EV充電エネチェンジ アプリ 全体リニューアル", en: "EV Charge ENECHANGE App Redesign" },
  { caseNumber: "03", src: "/images/evplus-top.jpg", ja: "EV PLUS — EVオーナー向けライフスタイルメディアの立ち上げ", en: "EV PLUS — Launching a Lifestyle Media Site for EV Owners" },
];

// 分類ごとの CASE 一覧（番号順）。path は言語なしのサイト内パス
export function casesIn(categoryId, lang) {
  const all = [
    ...featured.map((c) => ({ caseNumber: c.caseNumber, src: c.src, label: lang === "en" ? c.en : c.ja, path: `/#case-${c.caseNumber}` })),
    ...otherProjects.map((p) => {
      const l = lang === "en" && p.en ? { ...p, ...p.en } : p;
      return { caseNumber: p.caseNumber, src: p.src, label: l.label, path: `/projects/${p.slug}` };
    }),
  ];
  return all.filter((c) => categoryOf(c.caseNumber) === categoryId).sort((a, b) => Number(a.caseNumber) - Number(b.caseNumber));
}
