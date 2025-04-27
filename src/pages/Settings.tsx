"use client";
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
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

import { TagsInput } from "@/components/ui/tags-input";
import { PhoneInput } from "@/components/ui/phone-input";

const formSchema = z.object({
  logo: z
    .union([
      z.instanceof(File).refine((file) => file.type.startsWith("image/"), {
        message: "Logo must be an image.",
      }),
      z.string().url(),
    ])
    .optional(),
  website: z.string().min(1),
  tags: z.array(z.string()).nonempty("Please at least one item"),
  phone: z.string(),
  email: z.string(),
});

export function SettingsPage() {
  const defaultImageUrl = "/logo.png";
  const [previewUrl, setPreviewUrl] = useState<string>(defaultImageUrl);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      logo: defaultImageUrl,
      website: "Free shopps",
      tags: ["Test1", "Test2"],
      phone: "+915555555555",
      email: "dev@ahmadullah.in",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      console.log(values);
      toast(
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      );
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Failed to submit the form. Please try again.");
    }
  }

  const handleLogoChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    onChange: (value: File | string) => void
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      onChange(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    } else if (typeof e === "string") {
      // Handle server-provided image URL
      onChange(e);
      setPreviewUrl(e);
    }
  };

  return (
    <div className="h-full flex flex-col space-y-4">
      <h1 className=" text-3xl font-bold tracking-tight">settings</h1>
      <Card>
        <CardHeader>
          <CardTitle>Generall Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4 mx-auto"
            >
              <FormField
                control={form.control}
                name="logo"
                render={({ field: { onChange, name, ref, onBlur } }) => (
                  <FormItem>
                    <FormLabel>Website Logo</FormLabel>
                    <FormControl>
                      <div className="flex items-center gap-2">
                        {previewUrl ? (
                          <div className="relative size-32 flex justify-center items-center ounded-lg overflow-hidden">
                            <img
                              src={previewUrl}
                              alt="Logo preview"
                              className="object-cover"
                            />
                          </div>
                        ) : null}
                        <label
                          htmlFor="logo-upload"
                          className="inline-block cursor-pointer border border-dashed rounded-lg px-4 py-2 text-center hover:bg-gray-100 transition"
                        >
                          {previewUrl ? "Change Logo" : "Add Logo"}
                        </label>
                        <input
                          id="logo-upload"
                          type="file"
                          accept="image/*"
                          name={name}
                          ref={ref}
                          onBlur={onBlur}
                          onChange={(e) => handleLogoChange(e, onChange)}
                          className="hidden"
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="website"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Website Name</FormLabel>
                    <FormControl>
                      <Input placeholder="" type="text" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="tags"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tags</FormLabel>
                    <FormControl>
                      <TagsInput
                        value={field.value}
                        onValueChange={field.onChange}
                        placeholder="Enter your tags"
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-6">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem className="flex flex-col items-start">
                        <FormLabel>Phone number</FormLabel>
                        <FormControl className="w-full">
                          <PhoneInput
                            placeholder=""
                            {...field}
                            defaultCountry="TR"
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="col-span-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="" type="email" {...field} />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
