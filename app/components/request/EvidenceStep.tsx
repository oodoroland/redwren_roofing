"use client";

import { useRef, useState, type DragEvent, type KeyboardEvent } from "react";
import { Image as ImageIcon, ImagePlus, Plus, X } from "lucide-react";
import { StepHeader } from "@/app/components/request/StepHeader";
import { StepActions } from "@/app/components/request/StepActions";

const MAX_PHOTOS = 6;
const ACCEPTED_TYPES = ["image/jpeg", "image/png", "image/heic"];

interface UploadedPhoto {
  id: string;
  file: File;
  previewUrl: string;
}

interface EvidenceStepProps {
  onBack: () => void;
  onNext: () => void;
}

export function EvidenceStep({ onBack, onNext }: EvidenceStepProps) {
  const [photos, setPhotos] = useState<UploadedPhoto[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  function addFiles(fileList: FileList | null) {
    if (!fileList) return;
    const remaining = MAX_PHOTOS - photos.length;
    if (remaining <= 0) return;

    const accepted = Array.from(fileList)
      .filter((file) => ACCEPTED_TYPES.includes(file.type))
      .slice(0, remaining)
      .map((file) => ({
        id: `${file.name}-${file.lastModified}-${Math.random().toString(36).slice(2)}`,
        file,
        previewUrl: URL.createObjectURL(file),
      }));

    setPhotos((current) => [...current, ...accepted]);
  }

  function removePhoto(id: string) {
    setPhotos((current) => {
      const target = current.find((photo) => photo.id === id);
      if (target) URL.revokeObjectURL(target.previewUrl);
      return current.filter((photo) => photo.id !== id);
    });
  }

  function handleDrop(event: DragEvent<HTMLDivElement>) {
    event.preventDefault();
    addFiles(event.dataTransfer.files);
  }

  function handleDropzoneKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      fileInputRef.current?.click();
    }
  }

  const hasCapacity = photos.length < MAX_PHOTOS;

  return (
    <div className="space-y-6">
      <StepHeader
        stepNumber={5}
        title="Add Photographs & Documentation"
        description="Photos can help us prepare, but they cannot replace an inspection. Upload up to 6 images."
      />

      <div
        role="button"
        tabIndex={0}
        onClick={() => fileInputRef.current?.click()}
        onKeyDown={handleDropzoneKeyDown}
        onDragOver={(event) => event.preventDefault()}
        onDrop={handleDrop}
        className="cursor-pointer rounded-xl border-2 border-dashed border-outline-variant bg-surface p-8 text-center transition-colors hover:bg-surface-container"
      >
        <input
          ref={fileInputRef}
          type="file"
          accept={ACCEPTED_TYPES.join(",")}
          multiple
          className="hidden"
          onChange={(event) => addFiles(event.target.files)}
        />
        <ImagePlus className="mx-auto mb-3 h-12 w-12 text-primary" />
        <div className="font-serif text-headline-sm text-primary">
          Drop photographs here or browse files
        </div>
        <p className="mt-1 font-sans text-body-sm text-on-surface-variant">
          Supports JPEG, PNG, HEIC up to 25MB per file. Maximum 6 images.
        </p>
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            fileInputRef.current?.click();
          }}
          className="mt-4 rounded border border-outline-variant bg-surface-container px-5 py-2 font-sans text-label-md uppercase text-primary"
        >
          Select files
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="group relative flex aspect-video flex-col items-center justify-center overflow-hidden rounded-lg border border-outline-variant bg-surface"
          >
            {/* eslint-disable-next-line @next/next/no-img-element -- local blob: object URL, not an optimizable remote/static asset */}
            <img
              src={photo.previewUrl}
              alt={photo.file.name}
              className="absolute inset-0 h-full w-full object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-primary/20" />
            <ImageIcon className="z-10 h-6 w-6 text-white" />
            <span className="z-10 mt-1 max-w-[90%] truncate font-sans text-label-sm text-white">
              {photo.file.name}
            </span>
            <button
              type="button"
              onClick={() => removePhoto(photo.id)}
              className="absolute top-2 right-2 z-10 rounded-full bg-primary p-1 text-white transition-colors hover:bg-red-700"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        ))}

        {hasCapacity && (
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="flex aspect-video flex-col items-center justify-center rounded-lg border border-dashed border-outline-variant text-on-surface-variant/60"
          >
            <Plus className="h-6 w-6" />
            <span className="mt-1 font-sans text-label-sm">
              SLOT {String(photos.length + 1).padStart(2, "0")}
            </span>
          </button>
        )}
      </div>

      <StepActions
        onBack={onBack}
        onNext={onNext}
        nextLabel="Proceed to Contact"
      />
    </div>
  );
}
