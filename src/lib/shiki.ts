import { readFileSync } from "fs";
import { join } from "path";
import shiki, {
  getHighlighter as getHighlighterFromShiki,
  type Highlighter,
  type Lang,
  type Theme,
} from "shiki";

type Options = {
  lang: Lang;
  showLineNumbers?: boolean;
};

/** ✅ Config */
const theme: Theme = "github-dark";
const bg: React.CSSProperties["backgroundColor"] = "#011627";
const componentsDir = "./src/library/components";
const lang: Lang = "tsx";

export function getCode(filename: string) {
  return readFileSync(join("./src/library/components", filename), "utf8");
}

export async function getHighlighter() {
  /* ✅ Create a highlighter instance with a theme */
  return await getHighlighterFromShiki({ theme });
}

export async function highlight(highlighter: Highlighter, code: string) {
  /* ✅ Highlight your code using the right syntax */
  const tokens = highlighter.codeToThemedTokens(code, lang);
  /* ⚠️ Optional: Custom rendering of code blocks */
  return shiki.renderToHtml(tokens, {
    bg,
    elements: {
      line({ children, className, index }) {
        return `<span data-line=${index + 1}
         class=${className}>${children}</span>`;
      },
    },
  });
}
