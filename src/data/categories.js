// WORKS の分類（ヘッダーのプルダウンとトップのボタンから各一覧ページへ）
import { otherProjects } from "./otherProjects.js";

export const categories = [
  { id: "miraiz-enechange", ja: "ミライズエネチェンジ", en: "MIRAIZ ENECHANGE" },
  { id: "mitsue-links", ja: "ミツエーリンクス", en: "Mitsue-Links" },
  { id: "other", ja: "その他", en: "Others" },
];

// CASE 番号 → 分類（ここにない番号は「その他」）
const caseCategory = {
  "miraiz-enechange": ["01", "02", "03", "04", "05", "09", "10", "11", "12", "24"],
  "mitsue-links": ["06", "07", "14", "16", "21", "22"],
};

export function categoryOf(caseNumber) {
  for (const [id, nums] of Object.entries(caseCategory)) if (nums.includes(caseNumber)) return id;
  return "other";
}

// CASE 01–08 はトップページの WORKS 内にあるので、一覧からはトップの各 CASE へリンク
const featured = [
  { caseNumber: "01", src: "/images/badge-top.jpg", ja: "EV充電エネチェンジ アプリ v4.1.0 — 新機能「マイバッジ」", en: "EV Charge ENECHANGE App v4.1.0 — New “My Badge” Feature" },
  { caseNumber: "02", src: "/images/app-top3.jpg", ja: "EV充電エネチェンジ アプリ改修 — v4.0「ニコラ」メジャーアップデート", en: "EV Charge ENECHANGE App Redesign — v4.0 “Nikola” Major Update" },
  { caseNumber: "03", src: "/images/evplus-top.jpg", ja: "EV PLUS — EVオーナー向けライフスタイルメディアの立ち上げ", en: "EV PLUS — Launching a Lifestyle Media Site for EV Owners" },
  { caseNumber: "04", src: "/images/stay-top.jpg", ja: "EV STAY & CHARGE — EV充電できる宿泊施設の紹介サイト", en: "EV STAY & CHARGE — A Guide to Hotels with EV Charging" },
  { caseNumber: "05", src: "/images/hakone-top.jpg", ja: "「そうだ、箱根に行こう！」— EVおでかけ推進プロジェクト キャンペーンページ", en: "“Let’s Go to Hakone!” — EV Outing Promotion Project Campaign Page" },
  { caseNumber: "06", src: "/images/case1-top.jpg", ja: "大手企業の新商品特化ページ", en: "New Product Page for a Major Company" },
  { caseNumber: "07", src: "/images/case2-top.jpg", ja: "大手企業の既存商品ラインアップページ リニューアル", en: "Product Lineup Page Redesign for a Major Company" },
  { caseNumber: "08", src: "/images/case3-top.jpg", ja: "YES Pay — クレジットカード連携型電子マネーサービス（自主制作）", en: "YES Pay — A Credit Card–Linked E-Money Service (Personal Project)" },
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
