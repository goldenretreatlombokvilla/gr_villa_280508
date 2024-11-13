"use client";

import * as React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import PhoneInput from "react-phone-number-input";
import { cn } from "@/lib/utils";

// Import the styles for react-phone-number-input
import "react-phone-number-input/style.css";

export default function PhoneInputComp({
  className,
  label = "Phone number"
}: {
  className?: string;
  label?: string;
}) {
  const [value, setValue] = React.useState("");
  const [isValid, setIsValid] = React.useState(false);

  return (
    <div className={cn("grid w-full gap-1.5", className)}>
      <Label htmlFor="phone">{label}</Label>
      <div className="relative w-full">
        <PhoneInput
          required
          international
          defaultCountry="MY"
          value={value}
          onChange={(value) => {
            setValue(value || "");
            setIsValid(!!value && value.length > 8);
          }}
          className={cn(
            "flex h-12 w-full rounded-full border border-input bg-stone-50 px-6 py-2 text-sm ring-offset-background font-mono file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mb-4"
          )}
        />
      </div>
      {value && !isValid && (
        <p className="text-xs italic -mt-4 text-red-500 text-right">
          Please enter a valid phone number
        </p>
      )}
    </div>
  );
}
