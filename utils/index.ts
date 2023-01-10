import { darcula, darculaInit } from "@uiw/codemirror-theme-darcula";
import { tags as t } from "@lezer/highlight";

export const theme = darculaInit({
  settings: {
    caret: "#c6c6c6",
    fontFamily: "monospace"
  },
  styles: [{ tag: t.comment, color: "#6272a4" }],
}) as any;
