export interface CaseStudy {
  ref: string;
  status: string;
  title: string;
  problem: string;
  workCompleted: string;
  image: { src: string; alt: string };
}

export const caseStudies: CaseStudy[] = [
  {
    ref: "REF: RW-882-C",
    status: "Grade II Listed",
    title: "17th Century Manor House",
    problem:
      "Severe water ingress through failing valley gutters and frost-spalled mathematical tiles.",
    workCompleted:
      "Re-lined lead valleys in code 6 lead, replaced damaged tiles with matching handmade specimens, and rebuilt chimney flaunching.",
    image: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCMvtcU8yld3tYWtLoaU7xwYn668ADP7dSm-kg4mgPY_m2AKVz6_f5xAVR51FKQMxIPO2GZabJIEXz8LhPO6ybZOt8hWq-5V2T8XL5qnv5ZmZzrId-HUZZ-D2khLuuoNZ_2d2hVQUMQ_c9TG1tzkdX_dh9AV3Bf-cOkaGdLwjsCPrwJDilqqKmjeMyFcu1s3pR681Fltd6UBh_nVFqDszRJdI_YiiXyhN5AZehYGHAW53CAVLA8QcmqEg",
      alt: "Wide shot of a 17th century stone manor house with scaffolding around a complex mathematical tile roof and restored brick chimney stacks. Natural overcast lighting, architectural documentary aesthetic.",
    },
  },
  {
    ref: "REF: RW-904-V",
    status: "Conservation Area",
    title: "Victorian Townhouse",
    problem:
      "Widespread nail sickness and slipped Welsh slates causing internal ceiling decay.",
    workCompleted:
      "Stripped front elevation, installed breathable sarking membrane, refixed sound slates on copper nails, and renewed lead flashings.",
    image: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB7FjPygQQniuvkRMOswz3C_JdNmDI6Sk6IXjqXLglX25DVyrZYqHyhIjzuP38U4aOhTtTJbM80KGAiz4VuIO5QKaVA4QBmA5dWzwqYjxesaKrOCqHI60fCbPgCIKfxW4mJGOvwyaUx4Kr4sQx_fO1PqZDQGyuA2gZYxur-YIHR40baCm_nYvC9wG0pDAKCzPwr7pDhS10wZEY-Rty2bxGKbvOwarX0eQrR8tJ1VOHXb1QuSxt3c3I7Bw",
      alt: "Medium shot of a Victorian terrace roof undergoing complete slate restoration with traditional timber laths and lead dormer flashings visible. Clear daylight, professional roofing documentation.",
    },
  },
  {
    ref: "REF: RW-712-L",
    status: "Scheduled Monument",
    title: "Medieval Tithe Barn",
    problem:
      "Cement mortar pointing trapping moisture and causing accelerated stone face spalling.",
    workCompleted:
      "Raked out inappropriate hard cement using hand tools and repointed throughout with mature lime-putt mortar mix.",
    image: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC1r2DVaH5cGEBaBggBF3L93URsloOGVuEL0GwY66QWFqpoK3ste5GRf-ZRLwx7eLter97eDQBPdK8lbYhZ2qu2gdI0fRS1Kc9V29IlNtOV4NiIm4-BvxNV7Z6JdPDTgamwjuOPEx5AlBUYg4bsBsdhFuGZJtHykIR30Dg8ynqRwBn8iF_xDxA9Zw7oFv1Iiif4Q9HGEkx2vy0eo4whohxMnZZjR8ZICoRQ2D-8Qx9r4d69AqF8ZCCK0Q",
      alt: "Close up architectural photo of traditional lime mortar repointing on historic rubblestone masonry wall and chimney stack. Textured stonework, warm morning light, conservation craftsmanship.",
    },
  },
];
