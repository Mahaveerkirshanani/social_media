"use client";

import React, { useState } from "react";
import AuthLayout from "@/components/layouts/authlayout";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FcGoogle } from "react-icons/fc";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

const formSchema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long" })
    .max(20, { message: "Username must be at most 20 characters long" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" })
    .max(100, { message: "Password must be at most 100 characters long" }),
  privacyConsent: z.boolean().refine((val) => val === true, {
    message: "You must accept the privacy policy to proceed.",
  }),
});

const Login = () => {
  const [isloading, setIsloading] = useState(false);

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      privacyConsent: false,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <AuthLayout>
      <div>
        <Image
          src={"/logo.svg"}
          width={1000}
          height={1000}
          alt="logo"
          className="w-[130px] h-[30px] "
        />
      </div>
      <div className="text-center mt-10 flex flex-col gap-3 mx-auto ">
        <div>
          <h1 className="font-extrabold text-2xl  ">Create your account</h1>
          <p className="text-semibold tracking-wider text-sm text-gray-400">
            Lets get started with 30 days free trial
          </p>
        </div>
        <Button className="flex items-center justify-center w-full px-3 py-2 font-semibold text-gray-700 bg-white border border-gray-300 rounded-full shadow-sm hover:bg-gray-100">
          <FcGoogle className="w-4 h-4 mr-2" />
          Sign Up with Google
        </Button>
        <div className="flex items-center justify-center ">
          <div className="w-full border-t border-gray-300"></div>
          <span className="px-4 text-gray-500">or</span>
          <div className="w-full border-t border-gray-300"></div>
        </div>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-5 max-w-[370px] w-full mx-auto"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold text-gray-600 tracking-wider">
                  Username
                </FormLabel>
                <FormControl>
                  <Input
                    className="rounded-full outline-none focus:outline-none border border-gray-400"
                    placeholder="Enter your username"
                    {...field}
                  />
                </FormControl>

                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold text-gray-600 tracking-wider">
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                    className="rounded-full outline-none focus:outline-none border border-gray-400"
                    placeholder="Enter your email"
                    {...field}
                  />
                </FormControl>

                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold text-gray-600 tracking-wider">
                  Password
                </FormLabel>
                <FormControl>
                  <Input
                    className="rounded-full outline-none focus:outline-none border border-gray-400"
                    placeholder="*************"
                    {...field}
                  />
                </FormControl>

                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="privacyConsent"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="flex items-center gap-4">
                    <Checkbox
                      id="privacyPolicyConsent"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                    <FormLabel
                      className="text-sm flex items-center gap-2"
                      htmlFor="privacyPolicyConsent"
                    >
                      <p className="text-sm text-gray-600 font-semibold tracking-wider">
                        I consent to Privacy & Policy
                      </p>
                    </FormLabel>
                  </div>
                </FormControl>{" "}
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full rounded-full bg-orange-400">
            {isloading ? "Loading ..." : "Get Started "}
          </Button>
        </form>
      </Form>

        <div className="flex gap-1 mx-auto mt-4">
          <p>Already have an account ? </p>
          <Link
            className=" text-orange-400 cursor-pointer"
            href={"/auth/login"}
          >
            Login
          </Link>
        </div>
        <p className="text-center mt-6 text-gray-500 lg:text-sm text-xs tracking-wider">
          &copy; {new Date().getFullYear()} Mahaveer Kumar. All rights reserved.
        </p>
       
    </AuthLayout>
  );
};

export default Login;
