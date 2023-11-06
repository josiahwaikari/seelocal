import * as React from "react";

import { cn, getIcon } from "@/lib/utils";

import { InputProps } from "./input";
import { LucideIcon } from "lucide-react";

export type InputWithIconProps = React.InputHTMLAttributes<HTMLInputElement> & {
  icon?: string; // Add the Icon prop to the type
};

const InputWithIcon = React.forwardRef<HTMLInputElement, InputWithIconProps>(
  ({ className, ...props }, ref) => {
    const Icon = getIcon(props.icon) as LucideIcon;

    return (
      <div
        className={cn(
          "flex flex-col p-3 rounded-md border border-input bg-white text-sm ring-offset-background focus-within:ring-1 focus-within:ring-ring focus-within:ring-offset-2",
          className
        )}
      >
        {props.title && <span>{props.title}</span>}
        <div className="flex items-center">
          <input
            {...props}
            type="text"
            ref={ref}
            className="w-full placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
          />
          {props.icon && <Icon className="w-4 h-4" />}
        </div>
      </div>
    );
  }
);

InputWithIcon.displayName = "Input Icon";

export { InputWithIcon };
