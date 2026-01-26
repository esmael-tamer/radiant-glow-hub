import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ProductCard } from "@/components/shop/ProductCard";
import { useLocale } from "@/contexts/LocaleContext";
import { products, categories } from "@/data/catalog";

type SortOption = "featured" | "name-az" | "name-za";

export function ProductsPage() {
  const { locale, t } = useLocale();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<SortOption>("featured");

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name_ar.toLowerCase().includes(query) ||
          p.name_en.toLowerCase().includes(query)
      );
    }

    // Filter by category
    if (selectedCategory !== "all") {
      result = result.filter((p) => p.category_id === selectedCategory);
    }

    // Sort
    switch (sortBy) {
      case "featured":
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
      case "name-az":
        result.sort((a, b) => {
          const nameA = locale === "ar" ? a.name_ar : a.name_en;
          const nameB = locale === "ar" ? b.name_ar : b.name_en;
          return nameA.localeCompare(nameB, locale);
        });
        break;
      case "name-za":
        result.sort((a, b) => {
          const nameA = locale === "ar" ? a.name_ar : a.name_en;
          const nameB = locale === "ar" ? b.name_ar : b.name_en;
          return nameB.localeCompare(nameA, locale);
        });
        break;
    }

    return result;
  }, [products, searchQuery, selectedCategory, sortBy, locale]);

  const getCategoryName = (cat: { name_ar: string; name_en: string }) => {
    return locale === "ar" ? cat.name_ar : cat.name_en;
  };

  return (
    <div className="container px-4 py-8">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          {t.products.title}
        </h1>
        <p className="text-muted-foreground">{t.products.allProducts}</p>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="absolute start-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder={t.products.searchPlaceholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="ps-10"
          />
        </div>

        {/* Category Filter */}
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-full sm:w-48">
            <SelectValue placeholder={t.products.filterByCategory} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">{t.products.allCategories}</SelectItem>
            {categories.map((cat) => (
              <SelectItem key={cat.id} value={cat.id}>
                {getCategoryName(cat)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Sort */}
        <Select value={sortBy} onValueChange={(v) => setSortBy(v as SortOption)}>
          <SelectTrigger className="w-full sm:w-48">
            <SelectValue placeholder={t.products.sortBy} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="featured">{t.products.sortFeatured}</SelectItem>
            <SelectItem value="name-az">{t.products.sortNameAZ}</SelectItem>
            <SelectItem value="name-za">{t.products.sortNameZA}</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-muted-foreground text-lg">{t.products.noProducts}</p>
        </div>
      )}
    </div>
  );
}
