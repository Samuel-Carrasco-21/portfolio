import { PDFDocument } from "pdf-lib";
import { Button } from "@/components/ui/button";
import { DownloadArrow } from "@/components/icons/ui/DownloadArrow";

interface DownloadCVButtonProps {
  resumeUrl: string;
}

const TARGET_TITLE = "José Samuel — Built by Results";
const FILE_NAME = "Jose_Samuel_SWE_Resume.pdf";

export function DownloadCVButton({ resumeUrl }: DownloadCVButtonProps) {
  const handleDownload = async () => {
    try {
      const response = await fetch(resumeUrl);
      const originalBytes = await response.arrayBuffer();

      const pdfDoc = await PDFDocument.load(originalBytes);
      const currentTitle = pdfDoc.getTitle();

      let finalBytes = originalBytes;

      if (currentTitle !== TARGET_TITLE) {
        pdfDoc.setTitle(TARGET_TITLE);
        pdfDoc.setAuthor("José Samuel Carrasco Encinas");
        pdfDoc.setSubject("Software Engineer Resume");
        pdfDoc.setKeywords(["SWE", "Backend", "Software Engineer"]);

        finalBytes = (await pdfDoc.save()).buffer as ArrayBuffer;
      }

      const blob = new Blob([finalBytes], { type: "application/pdf" });
      const link = document.createElement("a");

      link.href = URL.createObjectURL(blob);
      link.download = FILE_NAME;
      link.click();

      URL.revokeObjectURL(link.href);
    } catch (error) {
      console.error("Error downloading CV:", error);
    }
  };

  return (
    <Button
      onClick={handleDownload}
      className="[&_svg]:size-8 px-4 md:px-8 h-14 flex-1 max-w-96 md:max-w-max"
    >
      Download CV
      <DownloadArrow width={24} height={24} />
    </Button>
  );
}
