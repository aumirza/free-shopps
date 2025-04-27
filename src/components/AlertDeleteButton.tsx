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
import { capitalizeFirstLetter } from "@/utils/capitalizeFirst";
import { toast } from "sonner";

export function AlertDeleteButton({
  id,
  title,
  description,
  onDelete,
}: {
  id: string;
  title: string;
  description: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onDelete: (id: string) => Promise<any>;
}) {
  const handleDelete = async () => {
    try {
      await onDelete(id);
      toast.success(
        `${capitalizeFirstLetter(description)} deleted successfully`
      );
    } catch (error) {
      console.error(error);
      toast.error("Some error occured while deleting.");
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
            {description}. "{title}"
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
