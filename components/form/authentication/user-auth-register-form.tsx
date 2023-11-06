"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Icons } from "@/components/icons";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import { registerValidate } from "@/lib/validate";
import { signIn } from "next-auth/react";

interface UserAuthRegisterFormProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthRegisterForm({
  className,
  ...props
}: UserAuthRegisterFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      cpassword: "",
    },
    validate: registerValidate,
    onSubmit: async (values) => {
      setIsLoading(true);
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: values.email,
          password: values.password,
        }),
      };
      const response = await fetch(
        "http://localhost:3000/api/auth/register",
        options
      );

      if (response.ok) {
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
      }
      setIsLoading(false);
    },
  });

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
          <div className="grid gap-2">
            <Label htmlFor="cpassword">Confirm password</Label>
            <Input
              id="cpassword"
              type="password"
              autoCapitalize="none"
              autoCorrect="off"
              disabled={isLoading}
              className={`${
                formik.errors.cpassword && formik.touched.cpassword
                  ? "border-destructive focus-visible:ring-destructive"
                  : ""
              }`}
              {...formik.getFieldProps("cpassword")}
            />
          </div>
          <Button disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Sign up
          </Button>
        </div>
      </form>
    </div>
  );
}
