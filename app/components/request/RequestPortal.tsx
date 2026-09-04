"use client";

import { useState, type FormEvent } from "react";
import { RequestTopSection } from "@/app/components/request/RequestTopSection";
import { SurveyPipelineNav } from "@/app/components/request/SurveyPipelineNav";
import { SurveyorNote } from "@/app/components/request/SurveyorNote";
import { DisciplineStep } from "@/app/components/request/DisciplineStep";
import { PropertyStep } from "@/app/components/request/PropertyStep";
import { UrgencyStep } from "@/app/components/request/UrgencyStep";
import { SymptomsStep } from "@/app/components/request/SymptomsStep";
import { EvidenceStep } from "@/app/components/request/EvidenceStep";
import { ContactStep } from "@/app/components/request/ContactStep";
import { SuccessModal } from "@/app/components/request/SuccessModal";
import { totalSurveySteps } from "@/app/data/survey-steps";
import { disciplineOptions } from "@/app/data/discipline-options";
import { urgencyOptions } from "@/app/data/urgency-options";
import {
  listingStatusOptions,
  propertyTypeOptions,
} from "@/app/data/property-options";

const DEFAULT_DISCIPLINE = "Roof repair";
const validDisciplineValues = new Set(
  disciplineOptions.map((option) => option.value),
);

interface RequestPortalProps {
  initialDiscipline?: string;
}

export function RequestPortal({ initialDiscipline }: RequestPortalProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [discipline, setDiscipline] = useState(
    initialDiscipline && validDisciplineValues.has(initialDiscipline)
      ? initialDiscipline
      : DEFAULT_DISCIPLINE,
  );
  const [address, setAddress] = useState("");
  const [propertyType, setPropertyType] = useState(propertyTypeOptions[0]);
  const [listingStatus, setListingStatus] = useState(listingStatusOptions[0]);
  const [urgency, setUrgency] = useState("Soon");
  const [symptoms, setSymptoms] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [contactMethod, setContactMethod] = useState("Phone");
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function goToStep(step: number) {
    if (step < 1 || step > totalSurveySteps) return;
    setCurrentStep(step);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  function handleReturnToPortal() {
    setSubmitted(false);
    setCurrentStep(1);
    setDiscipline(DEFAULT_DISCIPLINE);
    setAddress("");
    setPropertyType(propertyTypeOptions[0]);
    setListingStatus(listingStatusOptions[0]);
    setUrgency("Soon");
    setSymptoms("");
    setFullName("");
    setPhone("");
    setEmail("");
    setContactMethod("Phone");
    setConsent(false);
  }

  function renderStepContent() {
    switch (currentStep) {
      case 1:
        return (
          <DisciplineStep
            value={discipline}
            onChange={setDiscipline}
            onNext={() => goToStep(2)}
          />
        );
      case 2:
        return (
          <PropertyStep
            address={address}
            onAddressChange={setAddress}
            propertyType={propertyType}
            onPropertyTypeChange={setPropertyType}
            listingStatus={listingStatus}
            onListingStatusChange={setListingStatus}
            onBack={() => goToStep(1)}
            onNext={() => goToStep(3)}
          />
        );
      case 3:
        return (
          <UrgencyStep
            value={urgency}
            onChange={setUrgency}
            onBack={() => goToStep(2)}
            onNext={() => goToStep(4)}
          />
        );
      case 4:
        return (
          <SymptomsStep
            value={symptoms}
            onChange={setSymptoms}
            onBack={() => goToStep(3)}
            onNext={() => goToStep(5)}
          />
        );
      case 5:
        return (
          <EvidenceStep
            onBack={() => goToStep(4)}
            onNext={() => goToStep(6)}
          />
        );
      case 6:
      default:
        return (
          <ContactStep
            fullName={fullName}
            onFullNameChange={setFullName}
            phone={phone}
            onPhoneChange={setPhone}
            email={email}
            onEmailChange={setEmail}
            contactMethod={contactMethod}
            onContactMethodChange={setContactMethod}
            consent={consent}
            onConsentChange={setConsent}
            onBack={() => goToStep(5)}
          />
        );
    }
  }

  const disciplineLabel =
    disciplineOptions.find((option) => option.value === discipline)?.title ??
    discipline;
  const urgencyLabel =
    urgencyOptions.find((option) => option.value === urgency)?.summaryLabel ??
    urgency;

  return (
    <div className="mx-auto flex w-full max-w-[1440px] flex-col pb-24">
      <RequestTopSection
        progressPercent={(currentStep / totalSurveySteps) * 100}
      />

      <div className="grid grid-cols-1 items-start gap-gutter-lg lg:grid-cols-12">
        <div className="lg:col-span-3">
          <SurveyPipelineNav
            currentStep={currentStep}
            onSelectStep={goToStep}
          />
          <SurveyorNote />
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-xl bg-surface-container-low p-8 shadow-sm lg:col-span-9"
        >
          {renderStepContent()}
        </form>
      </div>

      <SuccessModal
        open={submitted}
        disciplineLabel={disciplineLabel}
        urgencyLabel={urgencyLabel}
        onReturnToPortal={handleReturnToPortal}
      />
    </div>
  );
}
