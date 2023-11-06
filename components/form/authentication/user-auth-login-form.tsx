"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Icons } from "@/components/icons";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import { loginValidate } from "@/lib/validate";
import { signIn } from "next-auth/react";

interface UserAuthLoginFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthLoginForm({
  className,
  ...props
}: UserAuthLoginFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: loginValidate,
    onSubmit: async (values) => {
      setIsLoading(true);
      const status = await signIn("credentials", {
        redirect: false,
        email: values.email,
        password: values.password,
        callbackUrl: "/",
      });
      setIsLoading(false);
      if (status?.ok) {
        router.push(status.url || "/");
        router.refresh();
      }
    },
  });

  // Discord Handler Function
  const handleDiscordSignIn = async () => {
    signIn("discord", { callbackUrl: "http://localhost:3000" });
  };

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={formik.handleSubmit}>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              className={`${
                formik.errors.email && formik.touched.email
                  ? "border-destructive focus-visible:ring-destructive"
                  : ""
              }`}
              {...formik.getFieldProps("email")}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              autoCapitalize="none"
              autoComplete="password"
              autoCorrect="off"
              disabled={isLoading}
              className={`${
                formik.errors.password && formik.touched.password
                  ? "border-destructive focus-visible:ring-destructive"
                  : ""
              }`}
              {...formik.getFieldProps("password")}
            />
          </div>
          <Button disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Sign in
          </Button>
        </div>
      </form>
    </div>
  );
}
