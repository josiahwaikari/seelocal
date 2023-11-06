import { type ClassValue, clsx } from "clsx";
import { Locate, Utensils } from "lucide-react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getIcon = (icon: string | undefined) => {
  switch (icon?.toLowerCase()) {
    case "locate":
      return Locate;
    case "restaurant":
      return Utensils;
  }
};
