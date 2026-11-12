/**
 * ────────────────────────────────────────────────────────────
 *  WEDDING CONFIGURATION — แก้ไขข้อมูลทั้งเว็บไซต์ที่ไฟล์นี้ไฟล์เดียว
 *  ข้อมูลทั้งหมดในไฟล์นี้เป็นข้อมูลสมมติ (DEMO)
 * ────────────────────────────────────────────────────────────
 *  เปลี่ยน Placeholder เป็นภาพจริง:
 *   1) วางไฟล์ใน public/images/<folder>/
 *   2) ใส่ src: asset('images/couple/hero.jpg')
 *   ถ้าไม่ใส่ src ระบบจะแสดงกรอบ Placeholder อัตโนมัติ
 */
import { asset } from "../lib/utils";
void asset; // ใช้ตอนใส่ภาพจริง

export type Lang = "th" | "en";
export type Bilingual = Record<Lang, string>;

export interface ImageSlot {
  src?: string;
  alt: string;
  label: string;
  /** CSS aspect-ratio เช่น '4 / 5' */
  ratio?: string;
}
export interface Person {
  firstName: string;
  fullName: string;
  nameTh: string;
  fullNameTh: string;
}
export interface ScheduleItem {
  time: string;
  title: Bilingual;
  description?: Bilingual;
}
export type QRType = "payment" | "location" | "rsvp" | "contact" | "other";
export interface QRItem {
  id: string;
  type: QRType;
  title: Bilingual;
  description: Bilingual;
  image: ImageSlot;
  meta?: { label: string; value: string }[];
}
export interface SectionCopy {
  index: string;
  title: string;
  subtitle: string;
}
export interface InvitationCopy {
  eyebrow: string;
  intro: string;
  request: string;
  sonOf: string;
  daughterOf: string;
  closing: string;
}
export type ThemeColor =
  | "warm"
  | "ivory"
  | "beige"
  | "taupe"
  | "taupe-deep"
  | "charcoal"
  | "ink";

export interface WeddingConfig {
  isDemo: boolean;
  showOpening: boolean;
  couple: {
    groom: Person;
    bride: Person;
    monogram: [string, string];
    hashtag: string;
  };
  date: { iso: string; display: Bilingual; short: string; time: Bilingual };
  venue: {
    name: string;
    nameTh: string;
    hall: Bilingual;
    city: string;
    address: Bilingual;
    mapsUrl: string;
    mapEmbedUrl?: string;
    photo: ImageSlot;
    mapPlaceholder: ImageSlot;
  };
  hero: { tagline: string; photo: ImageSlot };
  story: { quote: Bilingual; text: Bilingual; portrait: ImageSlot };
  gallery: ImageSlot[];
  invitation: Record<Lang, InvitationCopy>;
  parents: { groom: Bilingual; bride: Bilingual };
  details: {
    dressCode: {
      title: Bilingual;
      description: Bilingual;
      palette: { name: string; hex: string }[];
    };
    theme: { title: Bilingual; description: Bilingual };
  };
  schedule: ScheduleItem[];
  qrCodes: QRItem[];
  contact: { role: Bilingual; name: string; phone?: string; email?: string }[];
  social: { label: string; handle: string; url: string }[];
  closing: { title: string; message: Bilingual };
  sections: Record<
    "gallery" | "invitation" | "details" | "schedule" | "location" | "qr",
    SectionCopy
  >;
  theme: { colors: Partial<Record<ThemeColor, string>> };
}

export const wedding: WeddingConfig = {
  isDemo: true,
  showOpening: true,

  couple: {
    groom: {
      firstName: "Alexander",
      fullName: "Alexander Whitmore",
      nameTh: "อเล็กซานเดอร์",
      fullNameTh: "อเล็กซานเดอร์ วิทมอร์",
    },
    bride: {
      firstName: "Olivia",
      fullName: "Olivia Bennett",
      nameTh: "โอลิเวีย",
      fullNameTh: "โอลิเวีย เบนเน็ตต์",
    },
    monogram: ["A", "O"],
    hashtag: "#AlexanderAndOlivia2026",
  },

  date: {
    iso: "2026-12-20T16:00:00+07:00",
    display: {
      en: "Sunday, 20 December 2026",
      th: "วันอาทิตย์ที่ 20 ธันวาคม 2569",
    },
    short: "20 . 12 . 2026",
    time: { en: "4:00 PM – 10:00 PM", th: "16.00 – 22.00 น." },
  },

  venue: {
    name: "The Grand Celebration",
    nameTh: "เดอะ แกรนด์ เซเลเบรชัน",
    hall: { en: "The Ivory Ballroom", th: "ห้องไอวอรี่ บอลรูม" },
    city: "Bangkok, Thailand",
    address: {
      en: "123 Celebration Avenue, Pathum Wan, Bangkok 10330, Thailand (Demo)",
      th: "123 ถนนเซเลเบรชัน เขตปทุมวัน กรุงเทพฯ 10330 (ข้อมูลสาธิต)",
    },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Bangkok%2C%20Thailand",
    mapEmbedUrl: "", // ใส่ URL จาก Google Maps > Share > Embed a map (ค่า src ของ iframe)
    photo: { alt: "Venue exterior", label: "VENUE PHOTO", ratio: "4 / 3" },
    mapPlaceholder: {
      alt: "Map to the venue",
      label: "GOOGLE MAPS",
      ratio: "16 / 10",
    },
  },

  hero: {
    tagline: "Together with our families",
    photo: {
      alt: "Alexander and Olivia",
      label: "COUPLE HERO PHOTO",
      ratio: "4 / 5" /* src: asset('images/couple/hero.jpg') */,
    },
  },

  story: {
    quote: {
      en: "Two paths, one quiet beginning.",
      th: "สองเส้นทาง หนึ่งจุดเริ่มต้นอันเรียบง่าย",
    },
    text: {
      en: "We met on an ordinary afternoon that became the start of everything. Years of laughter, journeys and small moments later, we are ready to begin our next chapter — and we would love for you to be there.",
      th: "เราพบกันในบ่ายวันธรรมดาที่กลายเป็นจุดเริ่มต้นของทุกสิ่ง ผ่านเสียงหัวเราะ การเดินทาง และช่วงเวลาเล็ก ๆ มากมาย วันนี้เราพร้อมเริ่มต้นบทใหม่ และอยากให้คุณมาเป็นส่วนหนึ่งในวันนั้น",
    },
    portrait: {
      alt: "Portrait of the couple",
      label: "COUPLE PORTRAIT",
      ratio: "3 / 4",
    },
  },

  gallery: [
    { alt: "Gallery image 1", label: "GALLERY IMAGE 01", ratio: "4 / 5" },
    { alt: "Gallery image 2", label: "GALLERY IMAGE 02", ratio: "3 / 4" },
    { alt: "Gallery image 3", label: "GALLERY IMAGE 03", ratio: "1 / 1" },
    { alt: "Gallery image 4", label: "GALLERY IMAGE 04", ratio: "3 / 4" },
    { alt: "Gallery image 5", label: "GALLERY IMAGE 05", ratio: "4 / 5" },
    { alt: "Gallery image 6", label: "GALLERY IMAGE 06", ratio: "1 / 1" },
  ],

  invitation: {
    en: {
      eyebrow: "Wedding Invitation",
      intro: "Together with their families",
      request:
        "joyfully request the pleasure of your company at the celebration of the marriage of",
      sonOf: "Son of",
      daughterOf: "Daughter of",
      closing: "Your presence is the greatest gift of all.",
    },
    th: {
      eyebrow: "การ์ดเชิญงานมงคลสมรส",
      intro: "ด้วยความยินดียิ่ง ครอบครัวของเรา",
      request: "ขอเรียนเชิญท่านร่วมเป็นเกียรติในงานฉลองมงคลสมรสของ",
      sonOf: "บุตรของ",
      daughterOf: "ธิดาของ",
      closing: "การมาร่วมงานของท่าน คือของขวัญที่มีค่าที่สุดสำหรับเรา",
    },
  },

  parents: {
    groom: {
      en: "Mr. Richard & Mrs. Eleanor Whitmore",
      th: "นายริชาร์ด และนางเอลีเนอร์ วิทมอร์",
    },
    bride: {
      en: "Mr. Henry & Mrs. Charlotte Bennett",
      th: "นายเฮนรี และนางชาร์ลอตต์ เบนเน็ตต์",
    },
  },

  details: {
    dressCode: {
      title: { en: "Formal · Earth Tones", th: "ชุดสุภาพ โทนสีเอิร์ธโทน" },
      description: {
        en: "Soft neutrals are warmly encouraged.",
        th: "แนะนำโทนสีอ่อนละมุน",
      },
      palette: [
        { name: "Ivory", hex: "#F4F0E9" },
        { name: "Beige", hex: "#E8DFD2" },
        { name: "Taupe", hex: "#A89B8B" },
        { name: "Charcoal", hex: "#292929" },
      ],
    },
    theme: {
      title: { en: "Modern Minimal Luxury", th: "มินิมอล หรูหรา อบอุ่น" },
      description: {
        en: "Timeless, intimate and understated.",
        th: "เรียบง่าย ใกล้ชิด และเหนือกาลเวลา",
      },
    },
  },

  schedule: [
    {
      time: "15:30",
      title: { en: "Ceremony", th: "พิธีสมรส" },
      description: {
        en: "An intimate exchange of vows.",
        th: "พิธีกล่าวคำสัญญา",
      },
    },
    {
      time: "16:00",
      title: { en: "Ring Exchange", th: "พิธีสวมแหวน" },
      description: {
        en: "A promise sealed with rings.",
        th: "สัญลักษณ์แห่งคำมั่นสัญญา",
      },
    },
    {
      time: "16:30",
      title: { en: "Thai Traditional Ceremony", th: "พิธีรดน้ำสังข์" },
      description: {
        en: "Blessings from family and friends.",
        th: "รับพรจากญาติผู้ใหญ่และแขกผู้มีเกียรติ",
      },
    },
    {
      time: "18:30",
      title: { en: "Reception", th: "งานเลี้ยงฉลองมงคลสมรส" },
      description: {
        en: "Cocktails, music and celebration.",
        th: "ค็อกเทล ดนตรี และการเฉลิมฉลอง",
      },
    },
    {
      time: "19:30",
      title: { en: "Dinner", th: "รับประทานอาหารค่ำ" },
      description: {
        en: "An evening of good food and company.",
        th: "ร่วมรับประทานอาหารค่ำร่วมกัน",
      },
    },
  ],

  qrCodes: [
    {
      id: "payment",
      type: "payment",
      title: { en: "Wedding Gift", th: "ร่วมแสดงความยินดี" },
      description: {
        en: "Scan to send your blessing via PromptPay.",
        th: "สแกนเพื่อร่วมแสดงความยินดีผ่านพร้อมเพย์",
      },
      image: { alt: "Payment QR code", label: "QR PAYMENT", ratio: "1 / 1" },
      meta: [
        { label: "Account", value: "DEMO ACCOUNT" },
        { label: "Bank", value: "Demo Bank" },
      ],
    },
    {
      id: "location",
      type: "location",
      title: { en: "Venue Location", th: "แผนที่สถานที่จัดงาน" },
      description: {
        en: "Scan to open directions on your phone.",
        th: "สแกนเพื่อเปิดเส้นทางบนมือถือ",
      },
      image: { alt: "Location QR code", label: "QR LOCATION", ratio: "1 / 1" },
    },
    {
      id: "rsvp",
      type: "rsvp",
      title: { en: "RSVP", th: "ยืนยันการเข้าร่วมงาน" },
      description: {
        en: "Kindly reply by 20 November 2026.",
        th: "กรุณาตอบกลับภายใน 20 พฤศจิกายน 2569",
      },
      image: { alt: "RSVP QR code", label: "QR RSVP", ratio: "1 / 1" },
    },
    {
      id: "contact",
      type: "contact",
      title: { en: "Contact", th: "ติดต่อสอบถาม" },
      description: {
        en: "Reach our coordinator via LINE.",
        th: "ติดต่อผู้ประสานงานผ่าน LINE",
      },
      image: { alt: "Contact QR code", label: "QR CONTACT", ratio: "1 / 1" },
    },
    {
      id: "photos",
      type: "other",
      title: { en: "Share Your Photos", th: "แชร์ภาพในงาน" },
      description: {
        en: "Upload your moments from the day.",
        th: "ร่วมแบ่งปันภาพความประทับใจ",
      },
      image: {
        alt: "Photo sharing QR code",
        label: "QR OTHER",
        ratio: "1 / 1",
      },
    },
  ],

  contact: [
    {
      role: { en: "Wedding Coordinator", th: "ผู้ประสานงาน" },
      name: "Demo Coordinator",
      email: "hello@example.com",
    },
  ],
  social: [
    {
      label: "Instagram",
      handle: "#AlexanderAndOlivia2026",
      url: "https://www.instagram.com/explore/tags/alexanderandolivia2026/",
    },
  ],

  closing: {
    title: "Thank You",
    message: {
      en: "Thank you for being part of our story. We cannot wait to celebrate with you.",
      th: "ขอบพระคุณที่เป็นส่วนหนึ่งในเรื่องราวของเรา แล้วพบกันในวันพิเศษ",
    },
  },

  sections: {
    gallery: {
      index: "01 — Our Story",
      title: "Our Story",
      subtitle: "เรื่องราวของเรา",
    },
    invitation: {
      index: "02 — Invitation",
      title: "The Invitation",
      subtitle: "การ์ดเชิญ",
    },
    details: {
      index: "03 — Details",
      title: "Wedding Details",
      subtitle: "รายละเอียดงาน",
    },
    schedule: {
      index: "04 — Schedule",
      title: "The Day",
      subtitle: "กำหนดการ",
    },
    location: {
      index: "05 — Location",
      title: "Location",
      subtitle: "สถานที่จัดงาน",
    },
    qr: {
      index: "06 — QR Codes",
      title: "Quick Access",
      subtitle: "สแกนเพื่อดูข้อมูลเพิ่มเติม",
    },
  },

  /** ใส่เฉพาะสีที่ต้องการเปลี่ยน เช่น { taupe: '#9C8F80' } */
  theme: { colors: {} },
};
