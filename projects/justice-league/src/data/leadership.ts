export type LeadershipGroup = "Executive Team" | "Board of Directors" | "Advisory Council";

export type LeadershipPerson = {
  name: string;
  role: string;
  group: LeadershipGroup;
  image: string;
  imageWidth: number;
  imageHeight: number;
  sourceUrl: string;
  focalPosition?: string;
};

export const leadershipHero = {
  image: "/images/leadership/leadership-hero.avif",
  width: 1265,
  height: 864,
  alt: "Justice League members and community participants gathered outdoors for a group photograph",
  sourceUrl: "https://static.wixstatic.com/media/de1bf2_521314e51ce446fa99a3a9d79afd6258~mv2.jpg/v1/fill/w_1265,h_864,al_b,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/de1bf2_521314e51ce446fa99a3a9d79afd6258~mv2.jpg",
  focalPosition: "center bottom"
} as const;

export const leadershipGroups: ReadonlyArray<{
  id: string;
  label: LeadershipGroup;
  members: readonly LeadershipPerson[];
}> = [
  {
    id: "executive-team",
    label: "Executive Team",
    members: [
      { name: "Willye Bryan", role: "Founder", group: "Executive Team", image: "/images/leadership/willye-bryan.avif", imageWidth: 271, imageHeight: 307, sourceUrl: "https://static.wixstatic.com/media/de1bf2_d351de14b3f8433d8295a442f50d67fb~mv2.jpg/v1/fill/w_271,h_307,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/willye2-10-13-3.jpg" },
      { name: "Prince Solace", role: "President", group: "Executive Team", image: "/images/leadership/prince-solace.avif", imageWidth: 271, imageHeight: 307, sourceUrl: "https://static.wixstatic.com/media/de1bf2_6aea79c991b34b3eaf195dfc11cc26e5~mv2.jpg/v1/fill/w_271,h_307,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/willye2-10-13-3.jpg" },
      { name: "Ross Yednock", role: "Treasurer / Board of Directors", group: "Executive Team", image: "/images/leadership/ross-yednock.avif", imageWidth: 271, imageHeight: 307, sourceUrl: "https://static.wixstatic.com/media/de1bf2_f2788816036d4bfba10cb80ce29fd031~mv2.jpg/v1/fill/w_271,h_307,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/willye2-10-13-3.jpg" },
      { name: "Dana Watson", role: "Secretary / Board of Directors", group: "Executive Team", image: "/images/leadership/dana-watson.avif", imageWidth: 271, imageHeight: 307, sourceUrl: "https://static.wixstatic.com/media/ce499e_eeb6be7efa6640f29a87436ca0370c36~mv2.png/v1/fill/w_271,h_307,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/willye2-10-13-3.png" }
    ]
  },
  {
    id: "board-of-directors",
    label: "Board of Directors",
    members: [
      { name: "Betsy Sneller", role: "Board of Directors", group: "Board of Directors", image: "/images/leadership/betsy-sneller.avif", imageWidth: 302, imageHeight: 307, sourceUrl: "https://static.wixstatic.com/media/ce499e_adf708a2869b46c4984365269a224208~mv2.png/v1/fill/w_302,h_307,al_c,lg_1,q_85,enc_avif,quality_auto/Sallie_Campbell.png" },
      { name: "Peggy Vaughn-Payne", role: "Board of Directors", group: "Board of Directors", image: "/images/leadership/peggy-vaughn-payne.avif", imageWidth: 302, imageHeight: 307, sourceUrl: "https://static.wixstatic.com/media/de1bf2_9d403bd3e647480e8d045ff82835e77d~mv2.jpg/v1/fill/w_302,h_307,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Sallie_Campbell.jpg" },
      { name: "Sarah Allen", role: "Board Chair", group: "Board of Directors", image: "/images/leadership/sarah-allen.avif", imageWidth: 302, imageHeight: 307, sourceUrl: "https://static.wixstatic.com/media/de1bf2_61c081cce4004d0a8fcbee7a3eef4511~mv2.jpg/v1/fill/w_302,h_307,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Sallie_Campbell.jpg" },
      { name: "Dr. Nakia Parker", role: "Board of Directors / Advisory Council", group: "Board of Directors", image: "/images/leadership/nakia-parker.avif", imageWidth: 302, imageHeight: 307, sourceUrl: "https://static.wixstatic.com/media/de1bf2_e2539d16903d433d84366bee9e40057b~mv2.jpg/v1/fill/w_302,h_307,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Sallie_Campbell.jpg" },
      { name: "Dr. Sean L. Holland", role: "Board of Directors / Advisory Council", group: "Board of Directors", image: "/images/leadership/sean-holland.avif", imageWidth: 302, imageHeight: 307, sourceUrl: "https://static.wixstatic.com/media/de1bf2_ba8f223ed91d41d8901ad4642974733d~mv2.jpg/v1/fill/w_302,h_307,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Sallie_Campbell.jpg" }
    ]
  },
  {
    id: "advisory-council",
    label: "Advisory Council",
    members: [
      { name: "Courtney Minor", role: "Advisory Council", group: "Advisory Council", image: "/images/leadership/courtney-minor.avif", imageWidth: 302, imageHeight: 317, sourceUrl: "https://static.wixstatic.com/media/de1bf2_ffd8d60f900f4859aaf3b58779fe9cba~mv2.jpg/v1/fill/w_302,h_317,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/willye2-10-13-3.jpg" },
      { name: "Terrence J. King", role: "Advisory Council", group: "Advisory Council", image: "/images/leadership/terrence-king.avif", imageWidth: 302, imageHeight: 317, sourceUrl: "https://static.wixstatic.com/media/de1bf2_680732a1d9354356a7230f76b7501433~mv2.png/v1/fill/w_302,h_317,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/willye2-10-13-3.png" },
      { name: "Bishop Samuel Duncan, Jr.", role: "Advisory Council", group: "Advisory Council", image: "/images/leadership/samuel-duncan.avif", imageWidth: 302, imageHeight: 317, sourceUrl: "https://static.wixstatic.com/media/de1bf2_917c0c398596449ea1cfc0918bed5c20~mv2.jpg/v1/fill/w_302,h_317,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/willye2-10-13-3.jpg" },
      { name: "Cheryl Smith", role: "Advisory Council", group: "Advisory Council", image: "/images/leadership/cheryl-smith.avif", imageWidth: 302, imageHeight: 317, sourceUrl: "https://static.wixstatic.com/media/de1bf2_aa3436bbedc54149a71a7f38e0b30689~mv2.jpg/v1/fill/w_302,h_317,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/willye2-10-13-3.jpg" },
      { name: "David Foreman", role: "Advisory Council", group: "Advisory Council", image: "/images/leadership/david-foreman.avif", imageWidth: 302, imageHeight: 317, sourceUrl: "https://static.wixstatic.com/media/de1bf2_c31ca0a5693247f5b77fcac4da25126f~mv2.jpg/v1/fill/w_302,h_317,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/willye2-10-13-3.jpg" },
      { name: "Betty Sanford", role: "Advisory Council", group: "Advisory Council", image: "/images/leadership/betty-sanford.avif", imageWidth: 302, imageHeight: 317, sourceUrl: "https://static.wixstatic.com/media/de1bf2_e62e79d9cf084ae785953e1aa6453876~mv2.png/v1/fill/w_302,h_317,al_c,lg_1,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/willye2-10-13-3.png" },
      { name: "Tony Willis", role: "Advisory Council", group: "Advisory Council", image: "/images/leadership/tony-willis.avif", imageWidth: 302, imageHeight: 317, sourceUrl: "https://static.wixstatic.com/media/de1bf2_9314a171d4454ead99929468f8624ffb~mv2.jpg/v1/fill/w_302,h_317,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/willye2-10-13-3.jpg" }
    ]
  }
] as const;

export const leadershipMembers = leadershipGroups.flatMap((group) => group.members);
