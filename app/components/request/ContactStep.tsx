import { TextField } from "@/app/components/ui/TextField";
import { StepHeader } from "@/app/components/request/StepHeader";
import { StepActions } from "@/app/components/request/StepActions";

const contactMethods = [
  { value: "Phone", label: "Telephone Call" },
  { value: "Email", label: "Email Dispatch" },
  { value: "WhatsApp", label: "WhatsApp / SMS" },
];

interface ContactStepProps {
  fullName: string;
  onFullNameChange: (value: string) => void;
  phone: string;
  onPhoneChange: (value: string) => void;
  email: string;
  onEmailChange: (value: string) => void;
  contactMethod: string;
  onContactMethodChange: (value: string) => void;
  consent: boolean;
  onConsentChange: (value: boolean) => void;
  onBack: () => void;
}

export function ContactStep({
  fullName,
  onFullNameChange,
  phone,
  onPhoneChange,
  email,
  onEmailChange,
  contactMethod,
  onContactMethodChange,
  consent,
  onConsentChange,
  onBack,
}: ContactStepProps) {
  return (
    <div className="space-y-6">
      <StepHeader
        stepNumber={6}
        title="Contact & Dispatch Details"
        description="Provide your contact coordinates to schedule the surveyor site visit."
      />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <TextField
          id="contact-name"
          label="Full Name"
          placeholder="e.g. Dr. Arthur Pendelton"
          value={fullName}
          onChange={(event) => onFullNameChange(event.target.value)}
        />
        <TextField
          id="contact-phone"
          label="Phone Number"
          type="tel"
          placeholder="e.g. 07700 900777"
          value={phone}
          onChange={(event) => onPhoneChange(event.target.value)}
        />
        <TextField
          id="contact-email"
          label="Email Address"
          type="email"
          placeholder="e.g. a.pendelton@heritage-trust.co.uk"
          value={email}
          onChange={(event) => onEmailChange(event.target.value)}
          containerClassName="md:col-span-2"
        />
        <div className="space-y-2 md:col-span-2">
          <span className="font-sans text-label-md uppercase text-primary">
            Preferred Contact Method
          </span>
          <div className="mt-2 flex gap-6">
            {contactMethods.map((method) => (
              <label
                key={method.value}
                className="flex cursor-pointer items-center gap-2"
              >
                <input
                  type="radio"
                  name="contact-method"
                  value={method.value}
                  checked={contactMethod === method.value}
                  onChange={() => onContactMethodChange(method.value)}
                  className="accent-tertiary-container"
                />
                <span className="font-sans text-body-md text-on-surface">
                  {method.label}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-lg border border-outline-variant bg-surface p-4">
        <label className="flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            required
            checked={consent}
            onChange={(event) => onConsentChange(event.target.checked)}
            className="mt-1 accent-tertiary-container"
          />
          <span className="font-sans text-body-sm text-on-surface-variant">
            I authorize Redwren Roofing &amp; Limework Ltd to conduct an
            external and/or internal building inspection in accordance with
            our standard survey terms. Data is handled securely under GDPR
            guidelines.
          </span>
        </label>
      </div>

      <StepActions
        onBack={onBack}
        nextLabel="Submit survey request"
        isSubmit
      />
    </div>
  );
}
