import { PrimaryPhoto } from "@/components/bento/primary-photo";
import { AboutMe } from "@/components/bento/about-me";
import { PersonalDetails } from "@/components/bento/personal-details";
import { AstroDetails } from "@/components/bento/astro-details";
import { ProfessionalDetails } from "@/components/bento/professional-details";
import { FamilyBackground } from "@/components/bento/family-background";
import { ExtendedFamily } from "@/components/bento/extended-family";
import { PhotoGallery } from "@/components/bento/photo-gallery";
import { Contact } from "@/components/bento/contact";
import { PartnerExpectations } from "@/components/bento/partner-expectations";
import { DownloadPdfButton } from "@/components/download-pdf-button";

export function BiodataGrid({
  showExtendedFamily = false,
}: {
  showExtendedFamily?: boolean;
}) {
  return (
    <>
      <div className="flex justify-end mb-4">
        <DownloadPdfButton targetId="biodata-content" />
      </div>
      <div
        id="biodata-content"
        className="grid grid-cols-1 md:grid-cols-4 gap-4"
      >
        <PrimaryPhoto />
        <AboutMe />
        <PersonalDetails />
        <AstroDetails />
        <ProfessionalDetails />
        <FamilyBackground />
        {showExtendedFamily && <ExtendedFamily />}
        <PhotoGallery />
        <Contact />
        <PartnerExpectations />
      </div>
    </>
  );
}
