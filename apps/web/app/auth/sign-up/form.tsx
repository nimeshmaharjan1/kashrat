"use client";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { SignUpSchemaType, signUpSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "react-query";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@ui/components/form";
import { Input } from "@ui/components/input";
import { Button } from "@ui/components/ui/button";
import { axiosInstance } from "@/lib/axios";
import { useToast } from "@ui/components/ui/use-toast";
import { Loader2 } from "lucide-react";
import { AxiosError, HttpStatusCode } from "axios";
import {
  ResponseExceptionType,
  ResponseSuccessType,
  UserType,
} from "@/types/shared.type";
import Link from "next/link";
import { useRouter } from "next/navigation";
const SignUpForm = () => {
  const form = useForm<SignUpSchemaType>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  const { toast } = useToast();
  const mutation = useMutation(
    async (values: SignUpSchemaType) => {
      const response: ResponseSuccessType<UserType> = await axiosInstance.post(
        "/auth/register",
        values
      );
      return response.data;
    },
    {
      onSuccess: (values) => {
        toast({
          title: values.message,
          variant: "default",
        });
      },
      onError: (error: ResponseExceptionType) => {
        if (error.response.data.entites.length) {
          error.response.data.entites.map((i) => {
            form.setError(i, {
              message: error.response.data.message,
              type: "pattern",
            });
          });
        } else {
          toast({
            title: error.response.data.message,
            variant: "destructive",
          });
        }
      },
    }
  );
  const onSubmit: SubmitHandler<SignUpSchemaType> = (values) => {
    mutation.mutate(values);
  };

  const router = useRouter();

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 lg:space-y-8"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input type="text" placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="example@gmail.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />{" "}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="**********" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <section className="flex justify-end gap-x-3">
          <Button
            variant="ghost"
            onClick={() => router.back()}
            type="button"
            disabled={mutation.isLoading}
          >
            Back
          </Button>
          <Button type="submit" disabled={mutation.isLoading}>
            {mutation.isLoading && (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            )}
            Submit
          </Button>
        </section>
      </form>
    </Form>
  );
};

export default SignUpForm;
