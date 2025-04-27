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
import { CameraIcon } from "lucide-react";
import {
  FileInput,
  FileUploader,
  FileUploaderContent,
  FileUploaderItem,
} from "@/components/ui/file-upload";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  useCreateArticleMutation,
  useUpdateArticleMutation,
} from "./articlesApi";
import { MAX_FILE_SIZE_MB } from "@/constants/media";
import { checkFileType } from "@/utils/checkFileType";

const createFormSchema = (id?: string) =>
  z.object({
    title: z.string().min(1),
    desc: z.string(),
    image: z
      .any()
      .refine(
        (file) => {
          if (!file && !id) return false; // No file and creating => error
          if (!file) return true; // No file and editing => okay
          return file instanceof File; // Must be a File if provided
        },
        { message: "Image is required and must be a valid file." }
      )
      .refine(
        (file) => {
          if (!file || !(file instanceof File)) return true;
          return file.size < MAX_FILE_SIZE_MB * 1024 * 1024;
        },
        { message: `Max size is ${MAX_FILE_SIZE_MB} MB.` }
      )
      .refine(
        (file) => {
          if (!file || !(file instanceof File)) return true;
          return checkFileType(file);
        },
        { message: "File type is not supported." }
      ),
  });

export function ArticleForm({
  data,
  id,
  onSuccess,
}: {
  id?: string;
  data?: {
    title: string;
    description: string;
    image: string;
  };
  onSuccess?: () => void;
}) {
  const [files, setFiles] = useState<File[] | null>(null);

  const [createArticle] = useCreateArticleMutation();
  const [updateArticle] = useUpdateArticleMutation();

  const dropZoneConfig = {
    maxFiles: 5,
    maxSize: 1024 * 1024 * 4,
    multiple: true,
  };
  const formSchema = createFormSchema(id);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: data ? data.title : "",
      desc: data ? data.description : "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const formData = new FormData();
      formData.append("title", values.title);
      formData.append("description", values.desc);

      if (id) {
        updateArticle({ id, data: formData })
          .unwrap()
          .then(() => {
            toast.success("Article updated successfully");
          })
          .catch(() => {
            toast.error("Some error occured on server while updating.");
          });
      } else {
        formData.append("image", values.image);
        createArticle(formData)
          .unwrap()
          .then(() => {
            toast.success("Article created successfully");
            form.reset();
            setFiles(null);
            onSuccess?.();
          })
          .catch(() => {
            toast.error("Some error occured on server while creating.");
          });
      }
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
                          <div className="flex items-center gap-2">
                            <img
                              src={URL.createObjectURL(file)}
                              alt={file.name}
                              className="h-8 w-8 object-cover rounded"
                            />
                            <span>{file.name}</span>
                          </div>
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
