import Copy from "@/app/markdown/payment-structure.mdx";
import Cta from "@/components/cta";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import Book from "@/components/book";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Comprehensive Payment Structure",
  description:
    "To ensure a seamless experience, we have established a transparent and progressive payment structure which allows guyers to maintain financial flexibility and control over their investments.",
  openGraph: {
    title: "Comprehensive Payment Structure",
    description:
      "To ensure a seamless experience, we have established a transparent and progressive payment structure which allows guyers to maintain financial flexibility and control over their investments."
  },
  twitter: {
    title: "Comprehensive Payment Structure",
    description:
      "To ensure a seamless experience, we have established a transparent and progressive payment structure which allows guyers to maintain financial flexibility and control over their investments."
  }
};
export default function Page() {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col lg:max-w-3xl mx-auto px-8 lg:px-0 py-10">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink>...</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <Copy />
      </div>
      <Book />
    </div>
  );
}
