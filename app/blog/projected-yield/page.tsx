import Copy from "@/app/markdown/projected-yield.mdx";
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
  title: "Unlock an Exceptional Investment Opportunity",
  description:
    "Investing in a luxury Lombok villas is not just about securing a slice of paradise—it’s also a smart financial decision with high projected yields.",
  openGraph: {
    title: "Unlock an Exceptional Investment Opportunity",
    description:
      "Investing in a luxury Lombok villas is not just about securing a slice of paradise—it’s also a smart financial decision with high projected yields."
  },
  twitter: {
    title: "Unlock an Exceptional Investment Opportunity",
    description:
      "Investing in a luxury Lombok villas is not just about securing a slice of paradise—it’s also a smart financial decision with high projected yields."
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
