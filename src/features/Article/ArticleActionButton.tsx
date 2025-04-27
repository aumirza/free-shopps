import { Button } from "@/components/ui/button";
import { useDeleteArticleMutation } from "./articlesApi";
import { AlertDeleteButton } from "@/components/AlertDeleteButton";
import { IArticle } from "./columns";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ArticleForm } from "./ArticleForm";

export function ArticleActionButton({ data }: { data: IArticle }) {
  const [deleteArticle] = useDeleteArticleMutation();

  const handleDelete = async (id: string) => deleteArticle(id).unwrap();

  return (
    <div className="flex gap-2">
      <Dialog>
        <DialogTrigger asChild>
          <Button className="bg-blue-100 text-blue-500 hover:bg-blue-400 hover:text-white">
            <span>Edit</span>
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Article</DialogTitle>
          </DialogHeader>
          <ArticleForm data={data} id={data._id} />
        </DialogContent>
      </Dialog>

      <AlertDeleteButton
        id={data._id}
        title={data.title}
        description="article"
        onDelete={handleDelete}
      />
    </div>
  );
}
