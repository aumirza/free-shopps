import { Button } from "@/components/ui/button";
import { useGetArticlesQuery } from "@/features/Article/articlesApi";
import { articleColumns } from "@/features/Article/columns";
import { DataTable } from "@/components/DataTable";
import { Trash2Icon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import AddArticleForm from "@/features/Article/AddArticleForm";

export function ArticlePage() {
  const { data, error } = useGetArticlesQuery("");
  console.log({ data, error });
  return (
    <div className="h-full flex flex-col space-y-4">
      <div className="flex justify-between">
        <h1 className=" text-3xl font-bold tracking-tight">Article</h1>
        <div className="flex gap-2 items-stretch">
          <Dialog>
            <DialogTrigger asChild>
              <Button>Add new article</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Article</DialogTitle>
              </DialogHeader>
              <AddArticleForm />
            </DialogContent>
          </Dialog>

          <Button className="bg-red-100 text-red-500 hover:bg-red-400 hover:text-white">
            <Trash2Icon />
          </Button>
        </div>
      </div>
      {data ? <DataTable columns={articleColumns} data={data.data.docs} /> : ""}
    </div>
  );
}
