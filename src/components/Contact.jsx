"use client";
import { ContactMeSchema } from "@/validations";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
import { Textarea } from "./ui/textarea";
import phoneIcon from "../../public/icons/phone.svg";
import emailIcon from "../../public/icons/email.svg";
import Image from "next/image";
import Link from "next/link";
import linkedInIcon from "../../public/icons/linked_in.svg";
import githubIcon from "../../public/icons/github.svg";

const Contact = () => {
  const form = useForm({
    resolver: zodResolver(ContactMeSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  return (
    <div className="container flex min-h-[100vh] flex-col items-start justify-center text-white">
      <h2 className="-mb-20 text-[140px] font-bold text-white hover:-my-10">
        Contact<span className="text-web_red">.</span>
      </h2>
      <div className="flex w-full rounded-lg bg-web_dark_green px-32 py-20">
        <div className="flex flex-1 flex-col justify-between">
          <div>
            <p className="text-4xl font-semibold">
              {"Get in touch, let's talk"}
              <span className="text-web_red">.</span>
            </p>
            <p className="text-lg">
              {"Fill in the details and I'll get back to you as soon as I can"}
              <span className="text-web_red">.</span>
            </p>
          </div>

          <div className="flex flex-col space-y-5">
            <div className="flex items-center space-x-10 font-normal">
              <Image
                src={phoneIcon}
                alt="phone icon"
                height={20}
                width={20}
                className="cursor-pointer"
              />
              <p>+92 324 3368763</p>
            </div>

            <div className="flex items-center space-x-10 font-normal">
              <Image
                src={emailIcon}
                alt="email icon"
                height={20}
                width={20}
                className="cursor-pointer"
              />
              <p>abrar123789ali@gmail.com</p>
            </div>
          </div>

          <div className="mt-2 flex items-center space-x-9">
            <Link href={"/"}>
              <Image
                src={linkedInIcon}
                alt="linked-in logo"
                height={25}
                width={25}
                className="cursor-pointer"
              />
            </Link>
            <Link href={"/"}>
              <Image
                src={githubIcon}
                alt="github logo"
                height={25}
                width={25}
                className="cursor-pointer"
              />
            </Link>
          </div>
        </div>
        <div className="flex-1 space-y-2">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(() => {
                console.log("submit");
              })}
              className="space-y-8 rounded-lg bg-white p-10"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="inline text-black">Name</FormLabel>
                    <FormMessage className="ml-2 inline" />
                    <FormControl>
                      <Input
                        placeholder="John Doe"
                        {...field}
                        className="text-black"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="inline text-black">Email</FormLabel>
                    <FormMessage className="ml-2 inline" />
                    <FormControl>
                      <Input
                        placeholder="johndoe@acme.inc"
                        {...field}
                        className="text-black"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="inline text-black">Message</FormLabel>
                    <FormMessage className="ml-2 inline" />
                    <FormControl>
                      <Textarea
                        placeholder=""
                        className="resize-none text-black"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button type="submit" className="bg-web_red">
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
