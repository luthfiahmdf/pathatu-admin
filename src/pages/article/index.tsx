import Editor from "./editor"

export const ArticlePage = () => {

  return (
    <div className="flex flex-col p-3 gap-5">
      <div>
        <h1 className="font-bold text-2xl">Buat Artikel</h1>
      </div>
      <Editor />
    </div>
  )


}
