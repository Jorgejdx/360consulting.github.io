import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function createPageUrl(pageName: string): string {
  const pageUrls: Record<string, string> = {
    "Home": "/",
    "Services": "/services",
    "Contact": "/contact",
    "Blog": "/blog",
    "Dashboard": "/portal",
    "About": "/about",
    "Methodology": "/methodology",
    "Cases": "/cases"
  };
  
  return pageUrls[pageName] || "/";
} 