import React from "react";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";

export default function SuggestStorePage() {
  return (
    <>
      <main className="relative z-10 pt-24 pb-20 min-h-[calc(100vh-160px)]">
        <div className="max-w-[800px] mx-auto px-6">

          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="font-display text-headline-lg text-on-surface mb-3">
              Suggest an Online Store
            </h1>
            <p className="font-body-md text-on-surface-variant max-w-xl mx-auto">
              Know a trusted Indian PC retailer we missed? Let us know so we can add them to our pricing engine.
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-surface-container-lowest border border-surface-container-high rounded-2xl p-6 md:p-8 shadow-sm">
            <form className="space-y-6">

              <div>
                <label className="block font-body-sm font-medium text-on-surface mb-1.5">
                  Store Name
                </label>
                <Input type="text" placeholder="e.g., EliteHubs" required />
              </div>

              <div>
                <label className="block font-body-sm font-medium text-on-surface mb-1.5">
                  Website URL
                </label>
                <Input type="url" placeholder="https://elitehubs.com" required />
              </div>

              <div>
                <label className="block font-body-sm font-medium text-on-surface mb-1.5">
                  Why should we add them? <span className="font-normal text-on-surface-variant ml-1">(Optional)</span>
                </label>
                <Textarea placeholder="Tell us about your experience with them..." />
              </div>

              <div className="pt-2">
                <Button type="submit" variant="primary" className="w-full text-base py-3">
                  Submit Suggestion
                </Button>
              </div>

            </form>
          </div>

        </div>
      </main>

          </>
  );
}
