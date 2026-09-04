const disciplineLinks = [
  "Roof Repairs",
  "Re-roofing",
  "Leadwork & Chimneys",
  "Limework & Mortars",
];

const documentationLinks = [
  "Survey Standards",
  "Material Specifications",
  "Conservation Compliance",
];

export function SiteFooter() {
  return (
    <footer className="mt-20 w-full bg-surface-container-low px-margin-page py-16">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-gutter-lg md:grid-cols-4">
        <div>
          <h3 className="mb-4 font-serif text-headline-sm text-primary">
            REDWREN
          </h3>
          <p className="font-sans text-body-sm text-on-surface-variant">
            Specialist heritage roofing, structural limework, and traditional
            masonry conservation.
          </p>
        </div>
        <div>
          <h4 className="mb-4 font-sans text-label-md uppercase text-primary">
            Disciplines
          </h4>
          <ul className="space-y-2 font-sans text-body-sm text-on-surface-variant">
            {disciplineLinks.map((link) => (
              <li key={link}>{link}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-4 font-sans text-label-md uppercase text-primary">
            Documentation
          </h4>
          <ul className="space-y-2 font-sans text-body-sm text-on-surface-variant">
            {documentationLinks.map((link) => (
              <li key={link}>{link}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-4 font-sans text-label-md uppercase text-primary">
            Survey Office
          </h4>
          <p className="font-sans text-body-sm text-on-surface-variant">
            Log 04 // Structural Audit Unit
            <br />© 2025 Redwren Roofing &amp; Limework Ltd.
          </p>
        </div>
      </div>
    </footer>
  );
}
