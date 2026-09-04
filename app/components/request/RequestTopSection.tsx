interface RequestTopSectionProps {
  progressPercent: number;
}

export function RequestTopSection({ progressPercent }: RequestTopSectionProps) {
  return (
    <div className="mb-12 grid grid-cols-1 gap-gutter-lg lg:grid-cols-12">
      <div className="flex flex-col justify-end lg:col-span-8">
        <div className="mb-3 flex items-center gap-2">
          <span className="font-sans text-label-sm uppercase tracking-widest text-on-surface-variant">
            Survey application portal
          </span>
          <span className="h-2 w-2 rounded-full bg-tertiary-container" />
          <span className="font-sans text-label-sm font-semibold text-tertiary-container">
            STAGE 01 OF 06
          </span>
        </div>
        <h1 className="font-serif text-headline-xl font-bold tracking-tight text-primary">
          Request a Professional Survey
        </h1>
        <p className="mt-2 max-w-2xl font-sans text-body-lg text-on-surface-variant">
          Complete our structured diagnostic intake. Our heritage
          conservation surveyors and timber-slate specialists review all
          architectural logs within 4 business hours.
        </p>
      </div>

      <div className="flex flex-col justify-end rounded-lg bg-surface-container-low p-6 shadow-sm lg:col-span-4">
        <div className="mb-2 flex items-center justify-between">
          <span className="font-sans text-label-md uppercase text-primary">
            Portal Status
          </span>
          <span className="rounded bg-emerald-100 px-2 py-0.5 font-sans text-label-sm font-semibold text-emerald-700">
            SECURE // SSL 256-BIT
          </span>
        </div>
        <div className="font-sans text-body-sm text-on-surface-variant">
          Active Survey Queue:{" "}
          <span className="font-semibold text-primary">
            Region 04 (Southern &amp; Historic Districts)
          </span>
        </div>
        <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-surface-container-highest">
          <div
            className="h-full bg-tertiary-container transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>
    </div>
  );
}
