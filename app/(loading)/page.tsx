import { Spinner } from "@/components/ui/spinner";

export default function Loading() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-yellow-900/10">
      <div className="flex flex-col items-center space-y-4">
        <div className="flex items-center gap-3">
          <Spinner size="large" />
        </div>
        <p className="text-stone-900 sr-only font-sans text-md uppercase">
          Loading
        </p>
      </div>
    </div>
  );
}
