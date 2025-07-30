import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowDownCircle } from "lucide-react";

export default function PromoLink() {
  return (
    <Button variant={"link"} size={"icon"} asChild>
      <Link
        href="#book-journey"
        className="font-sans hover:font-bold text-md px-0 w-fit group animate-pulse animate-duration-600 animate-ease-in-out animate-iteration-infinite"
      >
        Discover Launch Promotion Only for Next 5 Villas!{" "}
        <ArrowDownCircle className="w-5 h-5 group-hover:w-7 group-hover:h-7" />
      </Link>
    </Button>
  );
}
