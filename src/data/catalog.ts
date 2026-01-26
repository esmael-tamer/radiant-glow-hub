// Product and Category Data Catalog
// Edit this file to update products and categories

export interface Category {
  id: string;
  slug: string;
  name_ar: string;
  name_en: string;
}

export interface Product {
  id: string;
  slug: string;
  name_ar: string;
  name_en: string;
  price_kwd: number | null;
  currency: string;
  images: string[];
  featured: boolean;
  category_id: string;
  description_ar?: string;
  description_en?: string;
}

export const categories: Category[] = [
  { id: "sets", slug: "sets", name_ar: "المجموعات", name_en: "Sets" },
  { id: "body-butter", slug: "body-butter", name_ar: "زبدة الجسم", name_en: "Body Butter" },
  { id: "oils", slug: "oils", name_ar: "زيوت", name_en: "Oils" },
  { id: "body-soap", slug: "body-soap", name_ar: "صابون الجسم", name_en: "Body Soap" },
  { id: "perfumes", slug: "perfumes", name_ar: "عطور", name_en: "Perfumes" },
  { id: "body-cream", slug: "body-cream", name_ar: "كريم الجسم", name_en: "Body Cream" },
  { id: "body-scrub", slug: "body-scrub", name_ar: "مقشر الجسم", name_en: "Body Scrub" },
];

export const products: Product[] = [
  {
    id: "96",
    slug: "p-96",
    name_en: "جايدن",
    name_ar: "جايدن",
    price_kwd: null,
    currency: "KWD",
    images: [],
    featured: false,
    category_id: "perfumes",
    description_ar: "عطر جايدن الفاخر برائحة مميزة تدوم طوال اليوم",
    description_en: "Jayden luxury perfume with a distinctive long-lasting scent",
  },
  {
    id: "93",
    slug: "atractivo-special-offer",
    name_en: "Atractivo Special Offer",
    name_ar: "Atractivo عرض خاص",
    price_kwd: null,
    currency: "KWD",
    images: [],
    featured: true,
    category_id: "sets",
    description_ar: "مجموعة Atractivo الخاصة بعرض مميز",
    description_en: "Atractivo special collection with exclusive offer",
  },
  {
    id: "90",
    slug: "jayden-special-offer",
    name_en: "Jayden Special Offer",
    name_ar: "Jayden عرض خاص",
    price_kwd: null,
    currency: "KWD",
    images: [],
    featured: true,
    category_id: "sets",
    description_ar: "مجموعة Jayden الكاملة بعرض خاص",
    description_en: "Complete Jayden collection with special offer",
  },
  {
    id: "87",
    slug: "calida-special-offer",
    name_en: "Calida Special Offer",
    name_ar: "Calida عرض خاص",
    price_kwd: null,
    currency: "KWD",
    images: [],
    featured: true,
    category_id: "sets",
    description_ar: "مجموعة Calida الخاصة بعرض مميز",
    description_en: "Calida special collection with exclusive offer",
  },
  {
    id: "84",
    slug: "aroma-amor-special-offer",
    name_en: "Aroma Amor Special Offer",
    name_ar: "Aroma Amor عرض خاص",
    price_kwd: null,
    currency: "KWD",
    images: [],
    featured: true,
    category_id: "sets",
    description_ar: "مجموعة Aroma Amor الخاصة بعرض مميز",
    description_en: "Aroma Amor special collection with exclusive offer",
  },
  {
    id: "81",
    slug: "blue-special-offer",
    name_en: "Blue Special Offer",
    name_ar: "Blue عرض خاص",
    price_kwd: null,
    currency: "KWD",
    images: [],
    featured: true,
    category_id: "sets",
    description_ar: "مجموعة Blue الخاصة بعرض مميز",
    description_en: "Blue special collection with exclusive offer",
  },
  {
    id: "78",
    slug: "vittoria-special-offer",
    name_en: "Vittoria Special Offer",
    name_ar: "Vittoria عرض خاص",
    price_kwd: null,
    currency: "KWD",
    images: [],
    featured: true,
    category_id: "sets",
    description_ar: "مجموعة Vittoria الخاصة بعرض مميز",
    description_en: "Vittoria special collection with exclusive offer",
  },
  {
    id: "75",
    slug: "winter-care-oil",
    name_en: "Winter Care oil",
    name_ar: "Winter Care زيت",
    price_kwd: null,
    currency: "KWD",
    images: [],
    featured: false,
    category_id: "oils",
    description_ar: "زيت العناية الشتوية للبشرة الجافة",
    description_en: "Winter care oil for dry skin",
  },
  {
    id: "72",
    slug: "velvet-oil",
    name_en: "Velvet oil",
    name_ar: "Velvet زيت",
    price_kwd: null,
    currency: "KWD",
    images: [],
    featured: false,
    category_id: "oils",
    description_ar: "زيت فلفت الناعم للبشرة",
    description_en: "Velvet smooth oil for skin",
  },
  {
    id: "69",
    slug: "poppy-oil",
    name_en: "Poppy oil",
    name_ar: "Poppy زيت",
    price_kwd: null,
    currency: "KWD",
    images: [],
    featured: false,
    category_id: "oils",
    description_ar: "زيت بوبي الطبيعي",
    description_en: "Natural Poppy oil",
  },
  {
    id: "66",
    slug: "hair-tonic",
    name_en: "Hair tonic",
    name_ar: "Hair tonic تونك الشعر",
    price_kwd: null,
    currency: "KWD",
    images: [],
    featured: false,
    category_id: "oils",
    description_ar: "تونك الشعر لتقوية وتغذية الشعر",
    description_en: "Hair tonic for strengthening and nourishing hair",
  },
  {
    id: "63",
    slug: "velvet-butter",
    name_en: "Velvet butter",
    name_ar: "Velvet زبدة",
    price_kwd: null,
    currency: "KWD",
    images: [],
    featured: false,
    category_id: "body-butter",
    description_ar: "زبدة فلفت الفاخرة للجسم",
    description_en: "Luxurious Velvet body butter",
  },
  {
    id: "60",
    slug: "winter-care-butter",
    name_en: "Winter Care butter",
    name_ar: "Winter Care زبدة",
    price_kwd: null,
    currency: "KWD",
    images: [],
    featured: false,
    category_id: "body-butter",
    description_ar: "زبدة العناية الشتوية للبشرة الجافة",
    description_en: "Winter care butter for dry skin",
  },
  {
    id: "57",
    slug: "bilsan-body-scrub",
    name_en: "Bilsan body scrub",
    name_ar: "Bilsan مقشر الجسم",
    price_kwd: null,
    currency: "KWD",
    images: [],
    featured: false,
    category_id: "body-scrub",
    description_ar: "مقشر الجسم بلسان لبشرة ناعمة",
    description_en: "Bilsan body scrub for smooth skin",
  },
  {
    id: "54",
    slug: "bilsan-body-soap",
    name_en: "Bilsan body soap",
    name_ar: "Bilsan صابون الجسم",
    price_kwd: null,
    currency: "KWD",
    images: [],
    featured: false,
    category_id: "body-soap",
    description_ar: "صابون الجسم بلسان الطبيعي",
    description_en: "Bilsan natural body soap",
  },
  {
    id: "51",
    slug: "lemon-body-soap",
    name_en: "Lemon body soap",
    name_ar: "Lemon صابون الجسم",
    price_kwd: null,
    currency: "KWD",
    images: [],
    featured: false,
    category_id: "body-soap",
    description_ar: "صابون الجسم بالليمون المنعش",
    description_en: "Refreshing lemon body soap",
  },
  {
    id: "48",
    slug: "bilsan-body-cream",
    name_en: "Bilsan body cream",
    name_ar: "Bilsan كريم الجسم",
    price_kwd: null,
    currency: "KWD",
    images: [],
    featured: false,
    category_id: "body-cream",
    description_ar: "كريم الجسم بلسان المرطب",
    description_en: "Bilsan moisturizing body cream",
  },
  {
    id: "45",
    slug: "velvet-body-cream",
    name_en: "Velvet body cream",
    name_ar: "Velvet كريم الجسم",
    price_kwd: null,
    currency: "KWD",
    images: [],
    featured: false,
    category_id: "body-cream",
    description_ar: "كريم الجسم فلفت الناعم",
    description_en: "Velvet smooth body cream",
  },
  {
    id: "42",
    slug: "winter-care-body-cream",
    name_en: "Winter Care body cream",
    name_ar: "Winter Care كريم الجسم",
    price_kwd: null,
    currency: "KWD",
    images: [],
    featured: false,
    category_id: "body-cream",
    description_ar: "كريم الجسم للعناية الشتوية",
    description_en: "Winter care body cream",
  },
  {
    id: "39",
    slug: "poppy-body-cream",
    name_en: "Poppy body cream",
    name_ar: "Poppy كريم الجسم",
    price_kwd: null,
    currency: "KWD",
    images: [],
    featured: false,
    category_id: "body-cream",
    description_ar: "كريم الجسم بوبي الطبيعي",
    description_en: "Natural Poppy body cream",
  },
];

// Helper functions
export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find((p) => p.slug === slug);
};

export const getProductsByCategory = (categoryId: string): Product[] => {
  return products.filter((p) => p.category_id === categoryId);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter((p) => p.featured);
};

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find((c) => c.slug === slug);
};
