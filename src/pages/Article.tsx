import { Button } from "@/components/ui/button";
import { useGetArticlesQuery } from "@/features/Article/articlesApi";
import { articleColumns } from "@/features/Article/columns";
import { DataTable } from "@/components/DataTable";
import { Trash2Icon, XCircleIcon, Loader2Icon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ArticleForm } from "@/features/Article/ArticleForm";
import { useState } from "react";

export function ArticlePage() {
  const { data, error, isLoading } = useGetArticlesQuery("");
  const [open, setOpen] = useState(false);

  return (
    <div className="h-full flex flex-col space-y-4">
      <div className="flex justify-between">
        <h1 className=" text-3xl font-bold tracking-tight">Article</h1>
        <div className="flex gap-2 items-stretch">
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button>Add new article</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Article</DialogTitle>
              </DialogHeader>
              <ArticleForm onSuccess={() => setOpen(false)} />
            </DialogContent>
          </Dialog>

          <Button className="bg-red-100 text-red-500 hover:bg-red-400 hover:text-white">
            <Trash2Icon />
          </Button>
        </div>
      </div>

      {isLoading && (
        <Card>
          <CardContent className="flex justify-center items-center h-32">
            <Loader2Icon className="h-8 w-8 animate-spin text-primary" />
          </CardContent>
        </Card>
      )}

      {error && (
        <Card className="border-destructive">
          <CardContent className="flex items-center gap-2 h-32 text-destructive">
            <XCircleIcon className="h-8 w-8" />
            <div>
              <h3 className="font-semibold">Error Loading Articles</h3>
              <p>
                {error instanceof Error
                  ? error.message
                  : "An error occurred while fetching articles"}
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {data && <DataTable columns={articleColumns} data={data.data.docs} />}
    </div>
  );
}
