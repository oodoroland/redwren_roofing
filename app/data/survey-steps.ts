export interface SurveyStepMeta {
  id: number;
  label: string;
}

export const surveySteps: SurveyStepMeta[] = [
  { id: 1, label: "Discipline" },
  { id: 2, label: "Property" },
  { id: 3, label: "Urgency" },
  { id: 4, label: "Symptoms" },
  { id: 5, label: "Evidence" },
  { id: 6, label: "Dispatch" },
];

export const totalSurveySteps = surveySteps.length;
