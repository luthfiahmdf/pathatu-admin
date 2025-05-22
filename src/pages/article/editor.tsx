import { useState } from "react";
import RichTextEditor, { BaseKit } from "reactjs-tiptap-editor";
import { Bold } from "reactjs-tiptap-editor/bold";
import { Clear } from "reactjs-tiptap-editor/clear";
import { FontFamily } from "reactjs-tiptap-editor/fontfamily";
import { FontSize } from "reactjs-tiptap-editor/fontsize";
import { FormatPainter } from "reactjs-tiptap-editor/formatpainter";
import { Heading } from "reactjs-tiptap-editor/heading";
import { History } from "reactjs-tiptap-editor/history";
import { Italic } from "reactjs-tiptap-editor/italic";
import { MoreMark } from "reactjs-tiptap-editor/moremark";
import { SearchAndReplace } from "reactjs-tiptap-editor/searchandreplace";
import { Strike } from "reactjs-tiptap-editor/strike";
import { TextUnderline } from "reactjs-tiptap-editor/textunderline";
import { Emoji } from "reactjs-tiptap-editor/emoji";
import { Image } from "reactjs-tiptap-editor/image";
import { TextAlign } from "reactjs-tiptap-editor/textalign";
import { OrderedList } from "reactjs-tiptap-editor/orderedlist";
import { BulletList } from "reactjs-tiptap-editor/bulletlist";

import "reactjs-tiptap-editor/style.css";
import { useTheme } from "@/components/themes-provider";

const extensions = [
  BaseKit.configure({
    placeholder: {
      showOnlyCurrent: true,
    },
    characterCount: {
      limit: 50_000,
    },
  }),
  History,
  SearchAndReplace,
  FormatPainter.configure({ spacer: true }),
  Clear,
  FontFamily,
  Heading.configure({ spacer: true }),
  FontSize,
  Image.configure({
    upload: (files: File) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(URL.createObjectURL(files));
        }, 500);
      });
    },
  }),
  Bold,
  Italic,
  TextUnderline,
  Strike,
  BulletList,
  OrderedList,

  TextAlign.configure({ types: ["heading", "paragraph"], spacer: true, defaultAlignment: "left" }),
  MoreMark,
  Emoji,
];
const DEFAULT = "";

const Editor = () => {
  const [content, setContent] = useState(DEFAULT);
  const onChangeContent = (value: string) => {
    setContent(value);
  };

  const { theme } = useTheme();
  return (
    <div >
      <div className="flex">
        <button className="bg-amber-400 p-3 rounded-full w-full" onClick={() => console.log(content)}> Kirim</button>
      </div>

      <RichTextEditor
        output="html"
        content={content}
        dark={theme === "dark"}
        onChangeContent={onChangeContent}
        extensions={extensions}
      />

    </div>
  );
};
export default Editor;
