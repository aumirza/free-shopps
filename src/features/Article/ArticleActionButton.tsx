import { Button } from "@/components/ui/button";
import { useDeleteArticleMutation } from "./articlesApi";
import { AlertDeleteButton } from "@/components/AlertDeleteButton";
import { IArticle } from "./columns";

export function ArticleActionButton({ data }: { data: IArticle }) {
  const [deleteArticle] = useDeleteArticleMutation();

  const handleDelete = async () => {
    await deleteArticle(data._id);
  };

  return (
    <div className="flex gap-2">
      <Button
        onClick={() => {
          console.log(data._id);
        }}
        className="bg-blue-100 text-blue-500 hover:bg-blue-400 hover:text-white"
      >
        <span>Edit</span>
      </Button>
      <AlertDeleteButton
        id={data._id}
        title={data.title}
        description="article"
        onDelete={handleDelete}
      />
    </div>
  );
}
