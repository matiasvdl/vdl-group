import { Badge, Box, Separator } from "@chakra-ui/react";
import { ProductCard } from "@/components/store/product-card";
import { SiteFooter } from "@/components/store/site-footer";
import { SiteHeader } from "@/components/store/site-header";
import { getProducts } from "@/sanity/queries";

export const dynamic = "force-dynamic";

export default async function CatalogoPage() {
  const products = await getProducts();

  return (
    <div className="min-h-screen bg-[#e9e9ea]">
      <SiteHeader />

      <main className="mx-auto w-full max-w-[1180px] px-5 py-6">
        <section className="grid gap-4 lg:grid-cols-12">
          <Box rounded="xl" bg="#171a22" color="white" className="lg:col-span-3">
            <Box display="grid" gridTemplateColumns="1fr auto" gap="1" px="4" pt="4">
              <Box as="p" fontSize="xs" textTransform="uppercase" letterSpacing="0.2em" color="whiteAlpha.700">
                Filters
              </Box>
              <Box>
                <button className="text-xs text-white/80 underline">Clear All</button>
              </Box>
            </Box>

            <Box className="space-y-4" px="4" py="4">
            <div>
              <div className="mb-3 flex items-center justify-between">
                <p className="text-lg">Brand</p>
                <span className="text-white/60">^</span>
              </div>
              <div className="space-y-2 text-sm text-white/85">
                <label className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-white" />
                  ASUS ROG
                </label>
                <label className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full border border-white/20" />
                  MSI Gaming
                </label>
                <label className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full border border-white/20" />
                  EVGA
                </label>
              </div>
            </div>

            <Separator bg="whiteAlpha.300" />

            <div>
              <p className="text-lg">Price Range</p>
              <div className="mt-4 h-1 rounded-full bg-white/20">
                <div className="relative h-full w-2/3 rounded-full bg-white/60">
                  <span className="absolute -left-1 -top-1.5 h-4 w-4 rounded-full bg-white" />
                  <span className="absolute -right-1 -top-1.5 h-4 w-4 rounded-full bg-white" />
                </div>
              </div>
              <div className="mt-4 grid grid-cols-[1fr_auto_1fr] items-center gap-2 text-sm">
                <div className="rounded-lg border border-white/15 bg-white/5 px-3 py-2">$ 500</div>
                <span className="text-white/60">to</span>
                <div className="rounded-lg border border-white/15 bg-white/5 px-3 py-2">$ 1500</div>
              </div>
            </div>

            <Separator bg="whiteAlpha.300" />

            <div className="space-y-3">
              <button className="flex w-full items-center justify-between border-b border-white/15 pb-3 text-lg">
                Socket Type <span className="text-white/60">v</span>
              </button>
              <button className="flex w-full items-center justify-between border-b border-white/15 pb-3 text-lg">
                Memory Tech <span className="text-white/60">v</span>
              </button>
              <label className="mt-2 flex items-center gap-2 text-sm text-white/85">
                <span className="h-3 w-3 rounded-full border border-white/25" />
                In Stock Only
              </label>
            </div>
            </Box>
          </Box>

          <section className="lg:col-span-9">
            <Box mb="4" rounded="xl" bg="#171a22" px="4" py="3" color="white">
              <Box display="grid" gridTemplateColumns={{ base: "1fr", md: "1fr auto" }} gap="3" alignItems="center">
              <div>
                <h1 className="text-2xl">High-Performance GPUs</h1>
                <p className="text-sm text-white/70">
                  Showing {products.length} {products.length === 1 ? "result" : "results"}
                </p>
              </div>
              <Box className="flex items-center gap-3">
                <p className="text-base">Sort by:</p>
                <Badge variant="outline" borderColor="whiteAlpha.300" bg="whiteAlpha.100" color="white">
                  Relevance v
                </Badge>
              </Box>
              </Box>
            </Box>

            {products.length > 0 ? (
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {products.map((product) => (
                  <ProductCard key={product.id || product.name} product={product} compact />
                ))}
              </div>
            ) : (
              <Box rounded="xl" borderWidth="1px" borderColor="#d8dbe2" bg="white" p="8" textAlign="center" color="#444a57">
                  Todavia no hay productos cargados en Sanity.
              </Box>
            )}

            {products.length > 0 ? (
              <div className="mt-8 flex items-center justify-center gap-3 text-[#222631]">
                <button className="h-10 w-10 rounded-xl border border-[#222631]/40">&lt;</button>
                <button className="h-10 w-10 rounded-xl border border-[#222631]/70 bg-white font-semibold">
                  1
                </button>
                <button className="h-10 w-10 rounded-xl border border-[#222631]/40">&gt;</button>
              </div>
            ) : null}
          </section>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
