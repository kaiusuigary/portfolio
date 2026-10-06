// 日本語（ルート）と英語（/en/ 配下）の切り替え用ヘルパー
export const langs = ["ja", "en"];

// [...lang] ルートの getStaticPaths 用（ja はルート、en は /en/）
export const langParams = [{ lang: undefined }, { lang: "en" }];

export function getLang(param) {
  return param === "en" ? "en" : "ja";
}

// 日本語・英語のどちらかを返す
export function useT(lang) {
  return (ja, en) => (lang === "en" ? en : ja);
}

// サイト内パスを言語に合わせて変換（"/projects/foo" → "/en/projects/foo"）
export function localePath(lang, path) {
  if (lang !== "en") return path;
  return path === "/" ? "/en/" : `/en${path}`;
}

// 現在のパスのもう一方の言語版
export function switchPath(pathname) {
  if (pathname === "/en" || pathname.startsWith("/en/")) {
    return pathname.replace(/^\/en/, "") || "/";
  }
  return pathname === "/" ? "/en/" : `/en${pathname}`;
}
