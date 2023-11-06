import React from "react";
import Link from "next/link";

const AuthLayout = ({
  options,
  children,
}: {
  options: {
    title: string;
    description?: string;
    altAuth: {
      link: string;
      preText: string;
      postText: string;
    };
  };
  children: JSX.Element[] | JSX.Element;
}) => {
  return (
    <div className="container relative h-full flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
        <div className="absolute inset-0 auth-image" />
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg drop-shadow-2xl">
              &ldquo;This platform is goated. It has saved me numerous hours of
              searching for precisely the type of content I need. It offers an
              extensive array of everything one could ever desire.&rdquo;
            </p>
            <footer className="text-sm drop-shadow-2xl">@anonymous</footer>
          </blockquote>
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              {options.title}
            </h1>
            {options?.description && (
              <p className="text-sm text-muted-foreground">
                {options.description}
              </p>
            )}
          </div>
          {children}
          <p className="text-sm text-muted-foreground">
            {options.altAuth.preText}
            <Link className="text-primary" href={options.altAuth.link}>
              {options.altAuth.postText}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
