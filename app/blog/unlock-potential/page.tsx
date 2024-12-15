import Blog1 from "@/app/markdown/blog.mdx";
import Cta from "@/components/cta";
export default function Page() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col max-w-3xl mx-auto py-10 px-8 lg:px-0 lg:pt-52">
        <Blog1 />
      </div>
      <Cta />
    </div>
  );
}
