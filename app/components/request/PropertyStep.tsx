import { TextField } from "@/app/components/ui/TextField";
import { SelectField } from "@/app/components/ui/SelectField";
import { StepHeader } from "@/app/components/request/StepHeader";
import { StepActions } from "@/app/components/request/StepActions";
import {
  listingStatusOptions,
  propertyTypeOptions,
} from "@/app/data/property-options";

interface PropertyStepProps {
  address: string;
  onAddressChange: (value: string) => void;
  propertyType: string;
  onPropertyTypeChange: (value: string) => void;
  listingStatus: string;
  onListingStatusChange: (value: string) => void;
  onBack: () => void;
  onNext: () => void;
}

export function PropertyStep({
  address,
  onAddressChange,
  propertyType,
  onPropertyTypeChange,
  listingStatus,
  onListingStatusChange,
  onBack,
  onNext,
}: PropertyStepProps) {
  return (
    <div className="space-y-6">
      <StepHeader
        stepNumber={2}
        title="Property Information"
        description="Provide the site address and architectural classification."
      />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <TextField
          id="prop-address"
          label="Property Address & Postcode"
          placeholder="e.g. 42 Priory Street, Lewes, East Sussex"
          value={address}
          onChange={(event) => onAddressChange(event.target.value)}
          containerClassName="md:col-span-2"
        />
        <SelectField
          label="Property Type"
          options={propertyTypeOptions}
          value={propertyType}
          onChange={(event) => onPropertyTypeChange(event.target.value)}
        />
        <SelectField
          label="Heritage / Listing Status"
          options={listingStatusOptions}
          value={listingStatus}
          onChange={(event) => onListingStatusChange(event.target.value)}
        />
      </div>
      <StepActions
        onBack={onBack}
        onNext={onNext}
        nextLabel="Proceed to Urgency"
      />
    </div>
  );
}
