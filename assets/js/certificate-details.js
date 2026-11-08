
/* ==========================================================
   CERTIFICATE DETAILS
   Shalom Natanael Dano
   ========================================================== */

const certificates = {

  // 1. BNSP - Analisa Program
  bnsp: {
    title: "BNSP – Analisa Program",
    category: "Professional Certification",
    provider: "BNSP",
    documentType: "Professional Competency Certificate",

    image: "assets/img/certificates/bnsp.jpg",
    file: "assets/img/certificates/bnsp.jpg",

    description:
      "Professional certification in Program Analysis, representing competency in understanding program requirements, analyzing program logic, and supporting software development activities.",

    additional:
      "This certification complements my academic background in Information Technology and my interest in software development and information systems.",

    skills: [
      "Program Analysis",
      "Requirement Analysis",
      "Programming Fundamentals",
      "Software Development"
    ]
  },


  // 2. Microsoft Word
  word: {
    title: "Microsoft Word",
    category: "Office Productivity",
    provider: "Microsoft Word Course",
    documentType: "Course Completion Certificate",

    image: "assets/img/certificates/word.jpg",
    file: "assets/img/certificates/word.jpg",

    description:
      "Training and certification in Microsoft Word, covering document creation, formatting, and professional documentation.",

    additional:
      "These skills support administrative activities, report preparation, and professional business documentation.",

    skills: [
      "Document Creation",
      "Document Formatting",
      "Professional Documentation",
      "Report Preparation"
    ]
  },


  // 3. Microsoft PowerPoint
  powerpoint: {
    title: "Microsoft PowerPoint",
    category: "Presentation Skills",
    provider: "Microsoft PowerPoint Course",
    documentType: "Course Completion Certificate",

    image: "assets/img/certificates/powerpoint.jpg",
    file: "assets/img/certificates/powerpoint.jpg",

    description:
      "Training and certification in Microsoft PowerPoint, focusing on presentation development, slide organization, and visual communication.",

    additional:
      "These skills support the preparation of professional presentations and the communication of operational information.",

    skills: [
      "Presentation Development",
      "Slide Design",
      "Visual Communication",
      "Information Presentation"
    ]
  },


  // 4. Microsoft Excel
  excel: {
    title: "Microsoft Excel",
    category: "Data Management",
    provider: "Microsoft Excel Course",
    documentType: "Course Completion Certificate",

    image: "assets/img/certificates/excel.jpg",
    file: "assets/img/certificates/excel.jpg",

    description:
      "Training and certification in Microsoft Excel, covering spreadsheet management, formulas, data processing, and reporting.",

    additional:
      "These competencies are relevant to my professional experience in operational administration, data management, reporting, and Excel VBA automation.",

    skills: [
      "Spreadsheet Management",
      "Excel Formulas",
      "Data Processing",
      "Data Reporting"
    ]
  },


  // 5. BSI IT Bootcamp 2024
  "bsi-bootcamp": {
    title: "BSI IT Bootcamp 2024 – Software Development",
    category: "Software Development",
    provider: "BSI IT Bootcamp 2024",
    documentType: "Training Certificate",

    image: "assets/img/certificates/bsi-bootcamp.jpg",
    file: "assets/img/certificates/bsi-bootcamp.jpg",

    description:
      "Software Development training program focused on programming fundamentals, application development, and practical information technology skills.",

    additional:
      "This training complements my Bachelor's degree in Information Technology and practical experience in developing web-based information systems.",

    skills: [
      "Programming Fundamentals",
      "Software Development",
      "Application Development",
      "Information Technology"
    ]
  },


  // 6. ATMI Technical Training
  atmi: {
    title: "ATMI Technical Training",
    category: "Manufacturing Technology",
    provider: "Politeknik Industri ATMI Cikarang",
    documentType: "Technical Training Certificate",

    image: "assets/img/certificates/atmi.jpg",
    file: "assets/img/certificates/atmi.jpg",

    description:
      "Technical training in Industrial Manufacturing Technology, covering basic machining, industrial electronics, electrical systems, PLC, pneumatics, and hydraulics.",

    additional:
      "This training provided a technical foundation in manufacturing processes and industrial technology, complementing my vocational background in Industrial Electronics.",

    skills: [
      "Basic Machining Processes",
      "Industrial Electronics",
      "Industrial Electrical Systems",
      "PLC Fundamentals",
      "Pneumatic Systems",
      "Hydraulic Systems",
      "Technical Drawing"
    ]
  }

};


/* ==========================================================
   GET CERTIFICATE FROM URL
   ========================================================== */

document.addEventListener("DOMContentLoaded", function () {

  const params = new URLSearchParams(window.location.search);
  const certificateId = params.get("certificate");

  const certificate = certificates[certificateId];


  /* ========================================================
     ELEMENT REFERENCES
     ======================================================== */

  const pageTitle = document.getElementById("page-title");
  const breadcrumbTitle = document.getElementById("breadcrumb-title");

  const certificateTitle = document.getElementById("certificate-title");
  const certificateCategory = document.getElementById("certificate-category");
  const certificateDescription = document.getElementById("certificate-description");
  const certificateAdditional = document.getElementById("certificate-additional");

  const certificateImage = document.getElementById("certificate-image");
  const certificateImageError = document.getElementById("certificate-image-error");

  const certificateSkills = document.getElementById("certificate-skills");

  const infoName = document.getElementById("info-certificate-name");
  const infoCategory = document.getElementById("info-category");
  const infoProvider = document.getElementById("info-provider");
  const infoDocumentType = document.getElementById("info-document-type");

  const downloadButton = document.getElementById("certificate-download");


  /* ========================================================
     CERTIFICATE NOT FOUND
     ======================================================== */

  if (!certificate) {

    document.title = "Certificate Not Found | Shalom Natanael Dano";

    pageTitle.textContent = "Certificate Not Found";
    breadcrumbTitle.textContent = "Not Found";

    certificateTitle.textContent = "Certificate Not Found";
    certificateCategory.textContent = "Unavailable";

    certificateDescription.textContent =
      "The requested certificate could not be found. Please return to the Certificates & Training section.";

    certificateAdditional.textContent = "";

    certificateImage.style.display = "none";
    certificateImageError.hidden = true;

    certificateSkills.innerHTML = "";

    infoName.textContent = "Not Available";
    infoCategory.textContent = "-";
    infoProvider.textContent = "-";
    infoDocumentType.textContent = "-";

    downloadButton.style.display = "none";

    return;
  }


  /* ========================================================
     UPDATE PAGE INFORMATION
     ======================================================== */

  document.title = certificate.title + " | Shalom Natanael Dano";

  pageTitle.textContent = certificate.title;
  breadcrumbTitle.textContent = certificate.title;

  certificateTitle.textContent = certificate.title;
  certificateCategory.textContent = certificate.category;

  certificateDescription.textContent =
    certificate.description;

  certificateAdditional.textContent =
    certificate.additional;


  /* ========================================================
     UPDATE CERTIFICATE IMAGE
     ======================================================== */

  certificateImage.style.display = "block";
  certificateImageError.hidden = true;

  certificateImage.src = certificate.image;
  certificateImage.alt = certificate.title + " Certificate";

  certificateImage.onerror = function () {
    certificateImage.style.display = "none";
    certificateImageError.hidden = false;
  };


  /* ========================================================
     UPDATE SIDEBAR INFORMATION
     ======================================================== */

  infoName.textContent = certificate.title;
  infoCategory.textContent = certificate.category;
  infoProvider.textContent = certificate.provider;
  infoDocumentType.textContent = certificate.documentType;


  /* ========================================================
     UPDATE DOWNLOAD BUTTON
     ======================================================== */

  downloadButton.href = "certificates.html";

  downloadButton.removeAttribute("download");
  downloadButton.removeAttribute("target");

  downloadButton.innerHTML = `
    <i class="bi bi-award me-2"></i>
    View / Download Certificate`;

  /* ========================================================
     GENERATE SKILLS & COMPETENCIES
     ======================================================== */

  certificateSkills.innerHTML = "";

  certificate.skills.forEach(function (skill, index) {

    const column = document.createElement("div");
    column.className = "col-md-6";

    const feature = document.createElement("div");
    feature.className = "feature-box d-flex align-items-center";

    const icon = document.createElement("i");
    icon.className = "bi bi-check";

    const heading = document.createElement("h4");
    heading.textContent = skill;

    feature.appendChild(icon);
    feature.appendChild(heading);

    column.appendChild(feature);

    certificateSkills.appendChild(column);

  });

});
