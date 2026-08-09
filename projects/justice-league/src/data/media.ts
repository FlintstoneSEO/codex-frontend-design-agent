export type GalleryVideo = { id?: string; title: string; description: string; poster?: string; kind: "youtube" | "social" };

export const galleryVideos: GalleryVideo[] = [
  ["vJOlNLxMS8U", "Inside the Justice League’s 4th Anniversary Fall Celebration | Lansing, MI", "Highlights from the Justice League’s Fall Celebration and Fundraiser."],
  ["IZV7PVrDafI", "MSU Broad Art Museum (Art speaks: Reparations Reframed)", "A feature on reparations, art, and public conversation."],
  ["GdkVeMe_6Vc", "Lansing’s First Reparations Payment: A New Model for Social Justice", "Community leaders discuss a local model for repair and social justice."],
  ["Qb6aIB3ZRZA", "Congrats to the 2024 Justice League of Greater Lansing Michigan Reparations Scholarship Winners!", "Celebrating Justice League scholarship recipients."],
  ["_2KOhsb0Cds", "Justice League GLM: Bridging Gaps and Building Futures in Lansing", "A conversation about faith-based reparations work."],
  ["Wx-Tvwmf2ds", "Screening: ‘The Cost of Inheritance’ Explores U.S. Racial History | Justice League GLM", "A Justice League-hosted screening and discussion."],
  ["sze95cQ0ymc", "4. First Presbyterian Church", "A Justice League video record from First Presbyterian Church."],
  ["rsUhBBhSfcI", "Repairing The Breach Sermon", "A sermon connected to the Justice League’s reparations work."],
  ["tj0CTpaMY88", "2. Red Cedar Meeting", "A Justice League meeting video record."],
  ["qBxtM9M6NmM", "1. All Saints Episcopal", "A Justice League video record from All Saints Episcopal."],
  ["A6rXWBNGYeQ", "Justice League of Greater Lansing Apology", "A public Justice League apology video."],
  ["lKugD1tvANc", "Historic Apology at Michigan State Capitol on Juneteenth", "Coverage of a Juneteenth public apology and community gathering."],
  ["7hPWJN4oenU", "Historic Juneteenth Public Apology Event in Lansing", "A record of Lansing’s Juneteenth public apology event."],
  ["COI4SfA-N1I", "Local Church Commits $100,000 to Close Racial Wealth Gap in Lansing", "News coverage of an All Saints Episcopal Church commitment."],
  ["PyGyA-pApJU", "Celebrating Trailblazer Willye Bryan for Black History Month", "A Black History Month feature on Justice League founder Willye Bryan."],
  ["0Gn1M1RVS3U", "Leadership in Action: Our President Discusses Community Change | Mission Control Podcast S3E10", "President Prince Solace discusses community change and reparations."],
  ["NUXjmKMgkaw", "Reparations Initiative in Lansing: First Presbyterian Church Donates $40K | Justice League GLM", "Coverage of First Presbyterian Church’s reparations initiative."]
].map(([id, title, description]) => ({ id: String(id), title: String(title), description: String(description), kind: "youtube" as const }));

galleryVideos.push(
  { title: "Twitter (1/2)", description: "A social-media video record from the Justice League’s public gallery.", poster: "https://static.wixstatic.com/media/de1bf2_2f97383c9b0d45d59e4b798f5548d488f000.jpg/v1/fill/w_900,h_506,al_c,q_85,enc_auto/file.jpeg", kind: "social" },
  { title: "Twitter (2/2)", description: "A social-media video record from the Justice League’s public gallery.", poster: "https://static.wixstatic.com/media/de1bf2_591b3ffb004843e8b645676a7ed102b6f002.jpg/v1/fill/w_900,h_506,al_c,q_85,enc_auto/file.jpeg", kind: "social" }
);

export const galleryPhotos = [
  ["city-pulse-2023-a", "de1bf2_4d3eb23600914d94ae92ef8653821626~mv2.jpg", 1200, 900, "City Pulse Newspaper Cover story", "2023", "City Pulse Newspaper cover story featuring the Justice League, 2023."],
  ["annual-celebration", "de1bf2_2ea332812fd947ef928c56ab90217450~mv2.png", 1200, 1129, "Justice League Annual celebration", "2022", "Justice League Annual celebration, 2022."],
  ["socialite-celebration", "de1bf2_68b404033e04400896af2e847fdce2d0~mv2.jpg", 1200, 900, "Justice League annual celebration weekend at Socialite Society", "2022", "Justice League annual celebration weekend at Socialite Society, 2022."],
  ["bryan-darlene-anthony", "de1bf2_7071b347f7964d899831ab1f7b6f549b~mv2.jpg", 900, 1200, "Founder Willye Bryan, Queen Darlene, Senator Sarah Anthony", "2022", "Founder Willye Bryan, Queen Darlene, and Senator Sarah Anthony, 2022."],
  ["unbroken-unbowed", "de1bf2_b09c7b52111f43ce9c1fe66e0b33a3c5~mv2.jpg", 1200, 900, "Unbroken & Unbowed: A History of Black Protest in America", "2022", "Unbroken & Unbowed: A History of Black Protest in America, authored by Rev. Jimmy Hawkins, 2022."],
  ["untitled-gallery-image", "de1bf2_54ceafc88c944fe98cec27fd892c1b67~mv2.png", 1200, 1108, "Justice League gallery image", undefined, "Justice League gallery image; the live source does not provide a caption."],
  ["city-pulse-2023-b", "de1bf2_8c76322d0dfb45548f451575c5982ac8~mv2.png", 1000, 1164, "City Pulse Newspaper Cover story", "2023", "A second City Pulse Newspaper cover story image featuring the Justice League, 2023."],
  ["lansing-state-journal", "de1bf2_57ccbed894af4d908b67838391ed5d37~mv2.jpg", 1200, 796, "Lansing State Journal Cover Story", "2022", "Lansing State Journal cover story featuring the Justice League, 2022."],
  ["bryan-solace-brown", "de1bf2_2f78c969eaf348ee80571b8b49547b7e~mv2.jpg", 1200, 800, "Founder Willye Bryan, President Prince Solace, Anne Brown", "2022", "Founder Willye Bryan, President Prince Solace, and Anne Brown, 2022."],
  ["msufcu-presentation", "de1bf2_1903683618f84233b023276bb4abc688~mv2.jpg", 1200, 900, "MSUFCU African American Employee Resource Group presentation", "2022", "Justice League presentation for the MSUFCU African American Employee Resource Group on the legacy of slavery and its aftermath, 2022."]
].map((entry) => { const [id, asset, width, height, title, year, alt] = entry as [string, string, number, number, string, string | undefined, string]; return { id, src: `https://static.wixstatic.com/media/${asset}/v1/fill/w_${width},h_${height},al_c,q_88,enc_auto/file.${asset.endsWith(".png") ? "png" : "jpeg"}`, width, height, title, year, alt }; });

export const requiredGalleryVideoIds = galleryVideos.filter((video): video is GalleryVideo & { id: string } => Boolean(video.id)).map((video) => video.id);
export const requiredGalleryPhotoIds = galleryPhotos.map((photo) => photo.id);
