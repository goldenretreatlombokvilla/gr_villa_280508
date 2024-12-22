import Copy from "@/app/markdown/discover-lombok.mdx";
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
  title:
    "Discover Lombok: A Haven of Accessibility for International Travelers",
  description: `Lombok, the idyllic island in Indonesia’s West Nusa Tenggara province, has long been a hidden gem for travelers seeking pristine beaches, majestic mountains, and rich cultural experiences.`,
  openGraph: {
    title:
      "Discover Lombok: A Haven of Accessibility for International Travelers",
    description: `Lombok, the idyllic island in Indonesia’s West Nusa Tenggara province, has long been a hidden gem for travelers seeking pristine beaches, majestic mountains, and rich cultural experiences.`
  },
  twitter: {
    title:
      "Discover Lombok: A Haven of Accessibility for International Travelers",
    description: `Lombok, the idyllic island in Indonesia’s West Nusa Tenggara province, has long been a hidden gem for travelers seeking pristine beaches, majestic mountains, and rich cultural experiences.`
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
