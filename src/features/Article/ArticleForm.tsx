"use client";
import { useState } from "react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { CameraIcon, Paperclip } from "lucide-react";
import {
  FileInput,
  FileUploader,
  FileUploaderContent,
  FileUploaderItem,
} from "@/components/ui/file-upload";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useCreateArticleMutation } from "./articlesApi";
import { MAX_FILE_SIZE_MB } from "@/constants/media";
import { checkFileType } from "@/utils/checkFileType";

const formSchema = z.object({
  title: z.string().min(1),
  desc: z.string(),
  image: z
    .instanceof(File)
    .refine(
      (file) => file.size < MAX_FILE_SIZE_MB * 1024 * 1024,
      `Max size is ${MAX_FILE_SIZE_MB} MB.`
    )
    .refine((file) => checkFileType(file), "File type is not supported."),
});

export function ArticleForm() {
  const [files, setFiles] = useState<File[] | null>(null);

  const [createArticle] = useCreateArticleMutation();

  const dropZoneConfig = {
    maxFiles: 5,
    maxSize: 1024 * 1024 * 4,
    multiple: true,
  };
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const formData = new FormData();
      formData.append("title", values.title);
      formData.append("description", values.desc);
      formData.append("image", values.image);

      createArticle(formData)
        .then(() => {
          toast.success("Article created successfully");
          form.reset();
          setFiles(null);
        })
        .catch((err) => {
          toast.error(err.data.message);
        });
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Failed to submit the form. Please try again.");
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-3 flex flex-col "
      >
        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel></FormLabel>
              <FormControl>
                <FileUploader
                  value={files}
                  onValueChange={(files) => {
                    field.onChange(files?.[0]);
                    setFiles(files);
                  }}
                  dropzoneOptions={dropZoneConfig}
                  className="relative"
                >
                  <FileInput
                    id="fileInput"
                    className="flex flex-col gap-1 items-center"
                  >
                    <div className="flex items-center justify-center bg-gray-100 rounded-full size-16">
                      <CameraIcon className="size-8" />
                    </div>
                    <p className="text-xs text-blue-400 font-semibold">
                      upload image
                    </p>
                  </FileInput>
                  <FileUploaderContent>
                    {files &&
                      files.length > 0 &&
                      files.map((file, i) => (
                        <FileUploaderItem key={i} index={i}>
                          <Paperclip className="h-4 w-4 stroke-current" />
                          <span>{file.name}</span>
                        </FileUploaderItem>
                      ))}
                  </FileUploaderContent>
                </FileUploader>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input
                  className="bg-accent"
                  placeholder="Enter title"
                  type="text"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="desc"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Enter article description"
                  className="resize-none bg-accent h-36"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-1/2 self-center rounded-lg py-4" type="submit">
          Submit
        </Button>
      </form>
    </Form>
  );
}
