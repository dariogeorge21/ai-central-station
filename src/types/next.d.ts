// This adds type definitions for Next.js app router pages

declare module 'next' {
  export interface PageProps {
    params: { [key: string]: string };
    searchParams?: { [key: string]: string | string[] };
  }
}