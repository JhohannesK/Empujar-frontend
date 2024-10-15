import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const getBaseUrl = () => {
  if (import.meta.env.MODE === 'development') {
    return import.meta.env.VITE_API_BASE_URL;
  } else if (import.meta.env.MODE === 'production') {
    return import.meta.env.VITE_API_BASE_URL;
  } else {
    return '';
  }
};