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
      <Cta />
    </div>
  );
}
