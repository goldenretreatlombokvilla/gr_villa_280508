import Copy from "@/app/markdown/beyond-bali.mdx";
import Book from "@/components/book";
import Cta from "@/components/cta";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Beyond Bali: Discovering the Next Luxury Real Estate Frontier in Southeast Asia",
  description: `Discover the emerging landscape of luxury property investments beyond traditional markets.`,
  openGraph: {
    title:
      "Beyond Bali: Discovering the Next Luxury Real Estate Frontier in Southeast Asia",
    description: `Discover the emerging landscape of luxury property investments beyond traditional markets.`
  },
  twitter: {
    title:
      "Beyond Bali: Discovering the Next Luxury Real Estate Frontier in Southeast Asia",
    description: `Discover the emerging landscape of luxury property investments beyond traditional markets.`
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
