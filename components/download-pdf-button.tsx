"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export function DownloadPdfButton({ targetId }: { targetId: string }) {
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    setLoading(true);
    const html2canvas = (await import("html2canvas-pro")).default;
    const { jsPDF } = await import("jspdf");

    const element = document.getElementById(targetId);
    if (!element) {
      setLoading(false);
      return;
    }

    const gridItems = Array.from(element.children) as HTMLElement[];

    // Measure BEFORE capture — boundaries must match the DOM state that
    // gets rendered into the canvas, not whatever it's shifted to by the
    // time the (async) capture finishes.
    const containerTop = element.getBoundingClientRect().top;
    const elementHeight = element.offsetHeight;
    const rawBoundaries = gridItems.map((item) => {
      const rect = item.getBoundingClientRect();
      return {
        top: rect.top - containerTop,
        bottom: rect.bottom - containerTop,
      };
    });

    const canvas = await html2canvas(element, {
      scale: 2,
      backgroundColor: "#FDF8F3",
      useCORS: true,
    });

    const actualScale = canvas.height / elementHeight;
    const boundaries = rawBoundaries.map((b) => ({
      top: b.top * actualScale,
      bottom: b.bottom * actualScale,
    }));

    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    const pxToMm = pdfWidth / canvas.width;
    const pageHeightPx = pdfHeight / pxToMm;

    const pageBreaks = [0];
    let currentPageBottom = pageHeightPx;
    for (const b of boundaries) {
      if (b.bottom > currentPageBottom) {
        pageBreaks.push(b.top);
        currentPageBottom = b.top + pageHeightPx;
      }
    }
    pageBreaks.push(canvas.height);

    for (let i = 0; i < pageBreaks.length - 1; i++) {
      const sliceTop = pageBreaks[i];
      const sliceBottom = Math.min(pageBreaks[i + 1], canvas.height);
      const sliceHeightPx = sliceBottom - sliceTop;
      if (sliceHeightPx <= 0) continue;

      const pageCanvas = document.createElement("canvas");
      pageCanvas.width = canvas.width;
      pageCanvas.height = sliceHeightPx;
      const ctx = pageCanvas.getContext("2d");
      ctx?.drawImage(
        canvas,
        0,
        sliceTop,
        canvas.width,
        sliceHeightPx,
        0,
        0,
        canvas.width,
        sliceHeightPx,
      );

      const imgData = pageCanvas.toDataURL("image/jpeg", 0.95);
      const sliceHeightMm = sliceHeightPx * pxToMm;

      if (i > 0) pdf.addPage();

      pdf.setFillColor(253, 248, 243);
      pdf.rect(0, 0, pdfWidth, pdfHeight, "F");
      pdf.addImage(imgData, "JPEG", 0, 0, pdfWidth, sliceHeightMm);
    }

    pdf.save("Srikunj-Daga-Biodata.pdf");
    setLoading(false);
  };

  return (
    <Button
      onClick={handleDownload}
      disabled={loading}
      className="bg-[#7A1F2B] hover:bg-[#6a1a25] text-white"
    >
      <Download size={16} className="mr-2" />
      {loading ? "Generating..." : "Download PDF"}
    </Button>
  );
}
