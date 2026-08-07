export type ScholarshipRecipientSnapshot = {
  id: string;
  name: string;
  year: number;
  displayOrder: number;
  city: string;
  highSchool: string;
  institution: string;
  essayUrl: string;
  essayFormat: "PDF" | "Image";
  sourceUrl: string;
  sourceObservedAt: string;
  reviewStatus: string;
};

const sourceUrl = "https://www.justiceleagueglm.org/scholarship";
const sourceObservedAt = "2026-08-07";
const reviewStatus = "client-approved";

export const scholarshipRecipientFallback: ScholarshipRecipientSnapshot[] = [
  { id: "2026-01", name: "Asa Pumphrey", year: 2026, displayOrder: 1, city: "Lansing", highSchool: "Lansing Eastern High School", institution: "Michigan State University", essayFormat: "Image", essayUrl: "https://static.wixstatic.com/media/de1bf2_6117b9c3be09465e89c0fa05d5685dfc~mv2.png/v1/fill/w_1545,h_2000,al_c,q_95,enc_auto/1.png", sourceUrl, sourceObservedAt, reviewStatus },
  { id: "2026-02", name: "Jah’Reice Kelso-McKinney", year: 2026, displayOrder: 2, city: "Lansing", highSchool: "J.W. Sexton High School", institution: "University of Michigan", essayFormat: "Image", essayUrl: "https://static.wixstatic.com/media/de1bf2_00c3e6e125da49088bd8b5313d6e27b7~mv2.png/v1/fill/w_1545,h_2000,al_c,q_95,enc_auto/3.png", sourceUrl, sourceObservedAt, reviewStatus },
  { id: "2026-03", name: "Jayla Reese", year: 2026, displayOrder: 3, city: "Lansing", highSchool: "Everett High School", institution: "Ferris State University", essayFormat: "Image", essayUrl: "https://static.wixstatic.com/media/de1bf2_9b38c94e0966476fa78e6659906f3fac~mv2.png/v1/fill/w_1545,h_2000,al_c,q_95,enc_auto/5.png", sourceUrl, sourceObservedAt, reviewStatus },
  { id: "2026-04", name: "Jerimiah Jackson", year: 2026, displayOrder: 4, city: "East Lansing", highSchool: "East Lansing High School", institution: "Michigan State University", essayFormat: "Image", essayUrl: "https://static.wixstatic.com/media/de1bf2_73a1301edf6d4c009f0d5a14425a8a88~mv2.png/v1/fill/w_1545,h_2000,al_c,q_95,enc_auto/7.png", sourceUrl, sourceObservedAt, reviewStatus },
  { id: "2026-05", name: "Kah’Reice Kelso-McKinney", year: 2026, displayOrder: 5, city: "Lansing", highSchool: "J.W. Sexton High School", institution: "University of Michigan", essayFormat: "Image", essayUrl: "https://static.wixstatic.com/media/de1bf2_33f9f2c7da7647c989df338fe2bb8d39~mv2.png/v1/fill/w_1545,h_2000,al_c,q_95,enc_auto/9.png", sourceUrl, sourceObservedAt, reviewStatus },
  { id: "2026-06", name: "Gabrielle Ferguson", year: 2026, displayOrder: 6, city: "East Lansing", highSchool: "East Lansing High School", institution: "North Carolina A&T State University", essayFormat: "Image", essayUrl: "https://static.wixstatic.com/media/de1bf2_8962cdc394474931b96c89fa7d32453d~mv2.png/v1/fill/w_1545,h_2000,al_c,q_95,enc_auto/2.png", sourceUrl, sourceObservedAt, reviewStatus },
  { id: "2026-07", name: "Jaleah Townsley", year: 2026, displayOrder: 7, city: "Lansing", highSchool: "Waverly High School", institution: "University of Michigan", essayFormat: "Image", essayUrl: "https://static.wixstatic.com/media/de1bf2_f109aac0bf5642efadc52d3a0459e255~mv2.png/v1/fill/w_1545,h_2000,al_c,q_95,enc_auto/4.png", sourceUrl, sourceObservedAt, reviewStatus },
  { id: "2026-08", name: "Jeremiah Woods", year: 2026, displayOrder: 8, city: "Lansing", highSchool: "Capital Area K-12", institution: "Lansing Community College", essayFormat: "Image", essayUrl: "https://static.wixstatic.com/media/de1bf2_2747f792d96a46d090ca7d0c24d24232~mv2.png/v1/fill/w_1545,h_2000,al_c,q_95,enc_auto/6.png", sourceUrl, sourceObservedAt, reviewStatus },
  { id: "2026-09", name: "Josie Smith", year: 2026, displayOrder: 9, city: "East Lansing", highSchool: "East Lansing High School", institution: "Baker College", essayFormat: "Image", essayUrl: "https://static.wixstatic.com/media/de1bf2_41b47b3a6c794266a4fe6a48babed1c9~mv2.png/v1/fill/w_1545,h_2000,al_c,q_95,enc_auto/8.png", sourceUrl, sourceObservedAt, reviewStatus },
  { id: "2026-10", name: "Lundyn Elam", year: 2026, displayOrder: 10, city: "East Lansing", highSchool: "East Lansing High School", institution: "University of Michigan", essayFormat: "Image", essayUrl: "https://static.wixstatic.com/media/de1bf2_a4ba4ee9e6c74970a9b6720e6da6ee8a~mv2.png/v1/fill/w_1545,h_2000,al_c,q_95,enc_auto/10.png", sourceUrl, sourceObservedAt, reviewStatus },
  { id: "2025-01", name: "Malachi Turner", year: 2025, displayOrder: 1, city: "East Lansing", highSchool: "East Lansing High School", institution: "Alabama A&M University", essayFormat: "PDF", essayUrl: "https://www.justiceleagueglm.org/_files/ugd/de1bf2_6489087cf3874a8e878d87c806c66e1b.pdf", sourceUrl, sourceObservedAt, reviewStatus },
  { id: "2025-02", name: "Gabrielle Pruitt", year: 2025, displayOrder: 2, city: "East Lansing", highSchool: "East Lansing High School", institution: "Grand Valley State University", essayFormat: "PDF", essayUrl: "https://www.justiceleagueglm.org/_files/ugd/de1bf2_466668f3ec3648b396f2244b439e93d2.pdf", sourceUrl, sourceObservedAt, reviewStatus },
  { id: "2025-03", name: "Ryleigh Lewis", year: 2025, displayOrder: 3, city: "Holt", highSchool: "Holt High School", institution: "University of Southern Florida", essayFormat: "PDF", essayUrl: "https://www.justiceleagueglm.org/_files/ugd/de1bf2_0904e1ea9e434ac4bf5b26933bd0a233.pdf", sourceUrl, sourceObservedAt, reviewStatus },
  { id: "2025-04", name: "Karrington Cosey", year: 2025, displayOrder: 4, city: "Okemos", highSchool: "Okemos High School", institution: "North Carolina Central University", essayFormat: "PDF", essayUrl: "https://www.justiceleagueglm.org/_files/ugd/de1bf2_5ecee3f1313942efb8daa58c9b6031ba.pdf", sourceUrl, sourceObservedAt, reviewStatus },
  { id: "2025-05", name: "Elaina Andrews", year: 2025, displayOrder: 5, city: "East Lansing", highSchool: "East Lansing High School", institution: "Louisiana State University", essayFormat: "PDF", essayUrl: "https://www.justiceleagueglm.org/_files/ugd/de1bf2_06c373a10712441aa003fb46b0ca583d.pdf", sourceUrl, sourceObservedAt, reviewStatus },
  { id: "2025-06", name: "Markell Richardson", year: 2025, displayOrder: 6, city: "Lansing", highSchool: "J.W. Sexton High School", institution: "Michigan State University", essayFormat: "PDF", essayUrl: "https://www.justiceleagueglm.org/_files/ugd/de1bf2_abb98471dd7a43629ff68d4db76f63c3.pdf", sourceUrl, sourceObservedAt, reviewStatus },
  { id: "2025-07", name: "Cameron Minor", year: 2025, displayOrder: 7, city: "Lansing", highSchool: "Eastern High School", institution: "Western Michigan University", essayFormat: "PDF", essayUrl: "https://www.justiceleagueglm.org/_files/ugd/de1bf2_ef9d34774fb64d98a78f7f985dfca41a.pdf", sourceUrl, sourceObservedAt, reviewStatus },
  { id: "2025-08", name: "Talia Dunn", year: 2025, displayOrder: 8, city: "East Lansing", highSchool: "East Lansing High School", institution: "Oakland University", essayFormat: "PDF", essayUrl: "https://www.justiceleagueglm.org/_files/ugd/de1bf2_7832a1ce177340e7a411a2b2adc25aaa.pdf", sourceUrl, sourceObservedAt, reviewStatus },
  { id: "2025-09", name: "Jourdyn Carter", year: 2025, displayOrder: 9, city: "Lansing", highSchool: "Everett High School", institution: "Michigan State University", essayFormat: "PDF", essayUrl: "https://www.justiceleagueglm.org/_files/ugd/de1bf2_db2a7181847147d88dfdd9ef3df1de8c.pdf", sourceUrl, sourceObservedAt, reviewStatus },
  { id: "2025-10", name: "Corinne Williams-Hough", year: 2025, displayOrder: 10, city: "East Lansing", highSchool: "East Lansing High School", institution: "Florida State University", essayFormat: "PDF", essayUrl: "https://www.justiceleagueglm.org/_files/ugd/de1bf2_b31ddd5bd7794dcf94069c8fe060f8ee.pdf", sourceUrl, sourceObservedAt, reviewStatus },
  { id: "2024-01", name: "Zachary Barker", year: 2024, displayOrder: 1, city: "East Lansing", highSchool: "Okemos High School", institution: "Michigan State University", essayFormat: "PDF", essayUrl: "https://www.justiceleagueglm.org/_files/ugd/de1bf2_1542986ec0634a67b9c76da647bda9b5.pdf", sourceUrl, sourceObservedAt, reviewStatus },
  { id: "2024-02", name: "Ahja Crawford", year: 2024, displayOrder: 2, city: "Lansing", highSchool: "Holt Senior High School", institution: "Lansing Community College", essayFormat: "PDF", essayUrl: "https://www.justiceleagueglm.org/_files/ugd/de1bf2_b601589316b047d3b50a9edd67bd567a.pdf", sourceUrl, sourceObservedAt, reviewStatus },
  { id: "2024-03", name: "Lydia-Anne Ding-Mejok", year: 2024, displayOrder: 3, city: "Lansing", highSchool: "East Lansing High School", institution: "Central Michigan University", essayFormat: "PDF", essayUrl: "https://www.justiceleagueglm.org/_files/ugd/de1bf2_dbd6aab2c8ca4180a23ad9205ba6573e.pdf", sourceUrl, sourceObservedAt, reviewStatus },
  { id: "2024-04", name: "Braelyn Jackson-Pointer", year: 2024, displayOrder: 4, city: "Lansing", highSchool: "Grand Ledge High School", institution: "Howard University", essayFormat: "PDF", essayUrl: "https://www.justiceleagueglm.org/_files/ugd/de1bf2_ff8f746857fe4796b0c10f3ae4c5ccf0.pdf", sourceUrl, sourceObservedAt, reviewStatus },
  { id: "2024-05", name: "Hailey Perkins", year: 2024, displayOrder: 5, city: "Okemos", highSchool: "Okemos High School", institution: "Howard University", essayFormat: "PDF", essayUrl: "https://www.justiceleagueglm.org/_files/ugd/de1bf2_e337a12689f641619d6f9813678ae778.pdf", sourceUrl, sourceObservedAt, reviewStatus },
  { id: "2024-06", name: "Olivia Burns", year: 2024, displayOrder: 6, city: "East Lansing", highSchool: "East Lansing High School", institution: "Michigan State University Honors College", essayFormat: "PDF", essayUrl: "https://www.justiceleagueglm.org/_files/ugd/de1bf2_3bb9a53e63594c1c98e4ab8fe5367a88.pdf", sourceUrl, sourceObservedAt, reviewStatus },
  { id: "2024-07", name: "Marvin Deh", year: 2024, displayOrder: 7, city: "Lansing", highSchool: "Eaton Rapids High School", institution: "Michigan State University", essayFormat: "PDF", essayUrl: "https://www.justiceleagueglm.org/_files/ugd/de1bf2_87e0e32a99d942e5a3abb018e23c10d1.pdf", sourceUrl, sourceObservedAt, reviewStatus },
  { id: "2024-08", name: "J'Kyla Hobbs", year: 2024, displayOrder: 8, city: "Lansing", highSchool: "Haslett High School", institution: "University of Michigan", essayFormat: "PDF", essayUrl: "https://www.justiceleagueglm.org/_files/ugd/de1bf2_06a11b04492a402c9be59cf6a802fa81.pdf", sourceUrl, sourceObservedAt, reviewStatus },
  { id: "2024-09", name: "Nala Noel", year: 2024, displayOrder: 9, city: "East Lansing", highSchool: "East Lansing High School", institution: "School of the Art Institute of Chicago", essayFormat: "PDF", essayUrl: "https://www.justiceleagueglm.org/_files/ugd/de1bf2_ef5acb4f72f94831b82781e1c37c9f3e.pdf", sourceUrl, sourceObservedAt, reviewStatus },
  { id: "2024-10", name: "Joseph Pizzo", year: 2024, displayOrder: 10, city: "Lansing", highSchool: "J.W. Sexton High School", institution: "Siena Heights University", essayFormat: "PDF", essayUrl: "https://www.justiceleagueglm.org/_files/ugd/de1bf2_ba25cd015a2343eea401c1dcf6c7abdf.pdf", sourceUrl, sourceObservedAt, reviewStatus }
];

export const scholarshipCohortFallback = [{
  id: "2025-group",
  title: "2025 Reparations Scholarship recipients",
  year: 2025,
  imageUrl: "https://static.wixstatic.com/media/de1bf2_59c188973427435f9dc026b58f8e6961~mv2.jpg/v1/fill/w_1222,h_726,al_c,q_85,enc_auto/de1bf2_59c188973427435f9dc026b58f8e6961~mv2.jpg",
  imageAlt: "2025 Justice League reparations scholarship recipients",
  imageCaption: "The 2025 reparations scholarship cohort, as published on the current Justice League GLM scholarship page.",
  sourceUrl,
  sourceObservedAt,
  reviewStatus
}];
