import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { VerificationResult } from "./types";

// Model Map for PDF generation
const modelMap: Record<string, { label: string; description: string }> = {
  "rd-img-ensemble": {
    label: "Facial Analysis",
    description:
      "Combines the fakeness scores from all face-based models into a single, more accurate fakeness score.",
  },
  "rd-oak-img": {
    label: "Faceswaps",
    description: "Detects faces manipulated using faceswap methods.",
  },
  "rd-elm-img": {
    label: "Diffusion",
    description: "Detects fake images created using diffusion methods.",
  },
  "rd-cedar-img": {
    label: "GANs",
    description: "Detects images manipulated or generated using Generative Adversarial Networks.",
  },
  "rd-pine-img": {
    label: "Visual Noise Analysis",
    description: "Detects fake images by analyzing texture and noise patterns.",
  },
  "rd-context-img": {
    label: "Context-Aware Results",
    description: "Evaluates the full visual context of the image to detect deepfake manipulation.",
  },
  "rd-context-vid": {
    label: "Video Context Analysis",
    description:
      "Evaluates the temporal and spatial context of video frames to detect synthetic or manipulated content.",
  },
  "rd-elm-vid": {
    label: "Diffusion (Video)",
    description:
      "Detects fake or AI-generated videos created using diffusion-based synthesis methods.",
  },
  "rd-cedar-vid": {
    label: "GANs (Video)",
    description:
      "Detects manipulated or generated videos using GAN-based methods.",
  },
  "rd-pine-vid": {
    label: "Noise & Compression Analysis",
    description:
      "Analyzes temporal noise, artifacts, and compression inconsistencies in videos to detect fakes.",
  },
  "rd-oak-aud": {
    label: "Voice Swap Detection",
    description: "Detects audio segments manipulated using voice cloning or voice swap methods.",
  },
  "rd-cedar-aud": {
    label: "GAN-based Audio Detection",
    description: "Detects fake or manipulated audio generated using adversarial neural networks.",
  },
  "rd-context-aud": {
    label: "Context-Aware Audio",
    description:
      "Analyzes the full acoustic and temporal context of an audio clip to identify deepfake or synthetic speech.",
  },
};

export const handleDownloadPDF = (result: VerificationResult) => {
  const doc = new jsPDF("p", "mm", "a4");
  const margin = 20;
  const lineHeight = 8;
  let y = margin + 20;

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();

  const infoStartY = margin + 30;
  let infoY = infoStartY;

  // Header / Footer images
  const headerImg = "/pdfHeader.png";
  const footerImg = "/pdfFooter.png";
  const headerHeight = 32;
  const footerHeight = 25;

  // --- Header & Footer ---
  try {
    doc.addImage(headerImg, "PNG", 0, 0, pageWidth, headerHeight);
    doc.addImage(footerImg, "PNG", 0, pageHeight - footerHeight, pageWidth, footerHeight);
  } catch (err) {
    console.warn("Header/Footer not loaded:", err);
  }

  // --- Title ---
  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.text("Deeptrack Gotham Media Verification Report", margin, y);
  y += 20;

  // --- File Information ---
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.text("File Information", margin, (infoY += 5));
  doc.setFont("helvetica", "normal");
  doc.setTextColor(60);

  infoY += 10;
  doc.text(`File Name: ${result.fileMeta?.name || "N/A"}`, margin, infoY);
  doc.text(`Type: ${result.fileMeta?.type || "N/A"}`, margin, (infoY += lineHeight));
  doc.text(
    `Size: ${result.fileMeta?.size ? (result.fileMeta.size / 1024).toFixed(2) + " KB" : "N/A"}`,
    margin,
    (infoY += lineHeight)
  );
  doc.text(
    `Uploaded: ${result.timestamp ? new Date(result.timestamp).toLocaleString() : "N/A"}`,
    margin,
    (infoY += lineHeight)
  );

  // --- Uploaded Media Preview (right side) ---
  if (result.fileMeta?.type?.startsWith("image/")) {
    try {
      const imgX = pageWidth - 80;
      doc.addImage(
        result.mediaPreview || result.fileUrl || "",
        "JPEG",
        imgX,
        infoStartY,
        60,
        55
      );
    } catch (err) {
      console.error("Image not added to PDF:", err);
    }
  }

  y += 60;

  // --- Overall Result ---
  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.setTextColor(0);
  doc.text("Overall Result", margin, (y += 10));
  doc.line(margin, y + 2, 190, y + 2);
  y += 10;

  const status = result.result?.status || "Unknown";
  const score = result.result?.score;
  const statusColor: [number, number, number] =
    status === "MANIPULATED" ? [255, 0, 0] : [0, 128, 0];

  doc.setFont("helvetica", "normal");
  doc.setFontSize(12);
  doc.text("Status:", margin, (y += lineHeight));
  doc.setTextColor(...statusColor);
  doc.text(status, margin + 20, y);
  doc.setTextColor(0);

  if (score !== null && score !== undefined) {
    doc.text(
      `Confidence Score: ${(score * 100).toFixed(1)}%`,
      margin,
      (y += lineHeight)
    );
  }

  y += 10;
  doc.setFont("helvetica", "italic");
  doc.setFontSize(11);
  doc.setTextColor(60);
  doc.text(
    "Combines the fakeness scores from all image models into a single, more accurate confidence score.",
    margin,
    (y += 5),
    { maxWidth: 170 }
  );

  y += 15;

  // --- Detailed Model Breakdown ---
  doc.setFont("helvetica", "bold");
  doc.setTextColor(0);
  doc.setFontSize(14);
  doc.text("Detailed Analysis Breakdown", margin, (y += 10));
  doc.line(margin, y + 2, 190, y + 2);

  const modelDetails = Array.isArray(result.result?.models)
    ? result.result.models
    : [];

  if (modelDetails.length > 0) {
    const tableData = modelDetails.map(
      (model: { name: string; status?: string; score?: number }, index: number) => {
        const mapped = modelMap[model.name] || {
          label: model.name,
          description: "No description available.",
        };
        return [
          index + 1,
          mapped.label,
          model.status || "Unknown",
          model.score !== null && model.score !== undefined
            ? `${(model.score * 100).toFixed(1)}%`
            : "N/A",
          mapped.description,
        ];
      }
    );

    (autoTable as any)(doc, {
      startY: y + 8,
      head: [["#", "Model", "Status", "Confidence", "Description"]],
      body: tableData,
      styles: {
        font: "helvetica",
        fontSize: 9,
        cellPadding: 4,
        valign: "middle",
      },
      headStyles: {
        fillColor: [32, 132, 230],
        textColor: [255, 255, 255],
        halign: "center",
      },
      bodyStyles: {
        halign: "center",
        textColor: [30, 30, 30],
      },
      columnStyles: {
        1: { halign: "left", cellWidth: 35 },
        4: { halign: "left", cellWidth: 75 },
      },
      theme: "grid",
    });
  } else {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.text("No model data available.", margin, (y += 8));
  }

  // --- Save PDF ---
  const safeName = result.fileMeta?.name?.replace(/[\\/:*?"<>|]/g, "_") || "report";
  doc.save(`Gotham-Verification-${safeName}.pdf`);
};
