import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useDeleteArticleMutation } from "./articlesApi";
import { toast } from "sonner";

export function AlertDeleteButton({
  id,
  title,
}: {
  id: string;
  title: string;
}) {
  const [deleteArticle] = useDeleteArticleMutation();

  const handleDelete = async () => {
    try {
      await deleteArticle(id).unwrap();
      toast.success("Article deleted successfully");
    } catch (error) {
      console.log(error);
      toast.error("Error deleting article");
    }
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="bg-red-100 text-red-500 hover:bg-red-400 hover:text-white">
          Delete
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete the
            article. "{title}"
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
