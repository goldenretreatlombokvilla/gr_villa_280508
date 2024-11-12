import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

export default function InterestSelect() {
  return (
    <Select>
      <SelectTrigger className="w-full font-mono">
        <SelectValue />
      </SelectTrigger>
      <SelectContent
        className=" font-mono bg-black text-white"
        position="popper"
      >
        <SelectGroup className="flex flex-col gap-4 px-4 py-2">
          <SelectItem value="investment">Property Investment</SelectItem>
          <SelectItem value="selfstay">Self Stay (Holiday Villa)</SelectItem>
          <SelectItem value="curious">Just Curious</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
