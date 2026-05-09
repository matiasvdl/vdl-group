import { Button } from "@/components/ui/button";

const nav = ["PC Parts", "Laptops", "Peripherals", "Monitors", "Deals"];

const featuredTiles = [
  { title: "Processors", subtitle: "Elite multi-core performance" },
  { title: "GPUs", subtitle: "Unrivaled visuals" },
  { title: "Monitors", subtitle: "Ultra-High Refresh" },
];

const products = [
  {
    tag: "NEW",
    category: "PERIPHERALS",
    name: "Tactile-X Pro Mechanical Gaming Keyboard",
    price: "$129.99",
    oldPrice: "",
  },
  {
    tag: "",
    category: "CASES",
    name: "Phantom Flow Airflow ATX Case - Matte Black",
    price: "$89.00",
    oldPrice: "",
  },
  {
    tag: "",
    category: "AUDIO",
    name: "SonicEdge H5 Wireless Surround Sound Headset",
    price: "$199.99",
    oldPrice: "",
  },
  {
    tag: "SALE",
    category: "STORAGE",
    name: "Velocity NVMe Gen4 2TB Internal SSD",
    price: "$145.00",
    oldPrice: "$179.00",
  },
];

const footerCols = [
  {
    title: "TIENDA",
    items: ["Graphics Cards", "Processors", "Motherboards", "Storage Solutions"],
  },
  {
    title: "SUPPORT",
    items: ["Customer Support", "Shipping Policy", "Returns & Warranty", "Technical Services"],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#e9e9ea] text-white">
      <header className="border-b border-white/10 bg-[#05070d]">
        <div className="mx-auto flex h-16 w-full max-w-[1180px] items-center gap-6 px-5">
          <p className="min-w-36 text-2xl font-extrabold tracking-tight">VDLGROUP</p>
          <nav className="hidden items-center gap-6 text-sm text-white/80 lg:flex">
            {nav.map((item) => (
              <a key={item} href="#" className="hover:text-white">
                {item}
              </a>
            ))}
          </nav>
          <div className="ml-auto hidden items-center gap-6 lg:flex">
            <div className="relative">
              <svg
                viewBox="0 0 24 24"
                className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/60"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5" />
              </svg>
              <input
                className="h-10 w-[360px] rounded-2xl border border-white/20 bg-white/10 pl-12 pr-4 text-sm text-white placeholder:text-white/40 outline-none"
                placeholder="Search hardware..."
              />
            </div>
            <button className="text-white/90" aria-label="Cuenta">
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="8" r="3.2" />
                <path d="M4.5 19.2c1.9-3.2 4.5-4.8 7.5-4.8s5.6 1.6 7.5 4.8" />
              </svg>
            </button>
            <button className="relative text-white/90" aria-label="Carrito">
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="9" cy="20" r="1.4" />
                <circle cx="18" cy="20" r="1.4" />
                <path d="M3.5 4h2.4l2.1 10.4h10.2l2-7.2H7.1" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-[1180px] px-5 py-6 text-[#111318]">
        <section className="relative overflow-hidden rounded-xl bg-[#0a0f19] p-6 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(90,120,255,.25),transparent_40%),radial-gradient(circle_at_30%_70%,rgba(0,220,255,.2),transparent_45%)]" />
          <div className="relative z-10 max-w-md py-6">
            <p className="inline-flex rounded-full bg-white px-4 py-1 text-xs font-semibold text-black">
              LIMITED OFFER
            </p>
            <h1 className="mt-4 text-3xl font-semibold leading-tight">Next-Gen Gaming At Your Fingertips</h1>
            <p className="mt-4 text-base leading-relaxed text-white/75">
              Experience raw power with the new RTX 40-Series laptops. Engineering perfection
              meets uncompromised performance.
            </p>
            <Button className="mt-6 h-10 rounded-lg bg-white px-6 text-sm text-black hover:bg-zinc-200">
              SHOP GAMING LAPTOPS
            </Button>
          </div>
          <div className="pointer-events-none absolute right-0 top-0 h-full w-2/3 bg-[linear-gradient(120deg,transparent,rgba(115,20,74,.35),rgba(0,140,170,.35))]" />
        </section>

        <section className="mt-6 grid gap-4 md:grid-cols-12">
          <article className="relative overflow-hidden rounded-xl bg-[#0d111a] p-5 text-white md:col-span-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_35%,rgba(255,255,255,.08),transparent_45%)]" />
            <p className="relative mt-20 text-2xl">{featuredTiles[0].title}</p>
            <p className="relative text-base text-white/70">{featuredTiles[0].subtitle}</p>
          </article>
          <article className="relative overflow-hidden rounded-xl bg-[#0d111a] p-5 text-white md:col-span-3">
            <p className="relative mt-20 text-2xl">{featuredTiles[1].title}</p>
            <p className="relative text-base text-white/70">{featuredTiles[1].subtitle}</p>
          </article>
          <article className="relative overflow-hidden rounded-xl bg-[#0d111a] p-5 text-white md:col-span-3">
            <p className="relative mt-20 text-2xl">{featuredTiles[2].title}</p>
            <p className="relative text-base text-white/70">{featuredTiles[2].subtitle}</p>
          </article>
        </section>

        <section className="mt-8">
          <div className="mb-3 flex items-end justify-between">
            <div>
              <h2 className="text-3xl font-semibold text-[#12141a]">New Arrivals</h2>
              <p className="text-base text-[#444a57]">The latest hardware just landed in our warehouse.</p>
            </div>
            <a href="#" className="text-base text-[#202431]">
              View All New Arrivals
            </a>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <article key={product.name} className="rounded-xl bg-[#161922] p-3.5 text-white">
                <div className="rounded-lg bg-[#0b0d13] p-2">
                  <div className="mb-2 min-h-8">
                    {product.tag ? (
                      <span className="rounded-full bg-white/15 px-3 py-1 text-xs">{product.tag}</span>
                    ) : null}
                  </div>
                  <div className="h-40 rounded-lg bg-[radial-gradient(circle,rgba(255,255,255,.16),rgba(0,0,0,.4))]" />
                </div>
                <p className="mt-4 text-xs tracking-[0.2em] text-white/60">{product.category}</p>
                <h3 className="mt-2 min-h-14 text-xl leading-tight">{product.name}</h3>
                <div className="mt-3 flex items-end gap-2">
                  <p className="text-2xl font-semibold">{product.price}</p>
                  {product.oldPrice ? (
                    <p className="pb-1 text-sm text-white/40 line-through">{product.oldPrice}</p>
                  ) : null}
                </div>
                <Button className="mt-4 h-10 w-full rounded-lg bg-white/10 text-base hover:bg-white/20">
                  Add to Cart
                </Button>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-8 grid gap-4 lg:grid-cols-2">
          <article className="rounded-xl bg-[#222631] p-6 text-white">
            <p className="text-2xl">Precision Powered by Intel</p>
            <p className="mt-4 text-base leading-relaxed text-white/75">
              Our partnership with Intel brings you the latest 14th Gen Hybrid Architecture
              processors, optimized for the most demanding workloads and gaming scenarios.
            </p>
            <div className="mt-8 flex gap-3">
              <Button variant="outline" className="h-10 rounded-lg border-white/50 text-white">
                Learn More
              </Button>
              <Button className="h-10 rounded-lg bg-white text-black hover:bg-zinc-200">
                Explore Chips
              </Button>
            </div>
          </article>
          <article className="rounded-xl bg-[#131720] p-6 text-white">
            <p className="text-sm tracking-[0.2em] text-white/60">TECH INSIGHTS</p>
            <h3 className="mt-4 text-3xl leading-tight">Building Your First PC? 2024 Guide</h3>
            <p className="mt-4 text-base leading-relaxed text-white/75">
              Everything you need to know about component compatibility, thermal management, and
              cable organization for your next dream build.
            </p>
            <a href="#" className="mt-6 inline-block text-base text-white">
              Read the Full Guide →
            </a>
          </article>
        </section>
      </main>

      <footer className="mt-8 bg-[#05070d] text-white">
        <div className="mx-auto grid w-full max-w-[1180px] gap-8 px-5 py-12 md:grid-cols-4">
          <div>
            <p className="text-2xl font-extrabold">VDLGROUP</p>
            <p className="mt-4 text-base text-white/70">
              Precision-engineered for performance. Your ultimate destination for professional
              hardware.
            </p>
            <p className="mt-6 text-xl text-white/80">◎   ↗   ✉</p>
          </div>
          {footerCols.map((col) => (
            <div key={col.title}>
              <p className="text-sm tracking-[0.2em] text-white/65">{col.title}</p>
              <ul className="mt-4 space-y-3 text-base text-white/80">
                {col.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <p className="text-sm tracking-[0.2em] text-white/65">NEWSLETTER</p>
            <p className="mt-4 text-base text-white/80">Get early access to tech deals and releases.</p>
            <div className="mt-6 flex gap-2">
              <input
                className="h-12 flex-1 rounded-xl border border-white/15 bg-white/5 px-4 text-white placeholder:text-white/40"
                placeholder="Dirección de correo"
              />
              <Button className="h-12 rounded-xl bg-white px-6 text-black hover:bg-zinc-200">
                ENVIAR
              </Button>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 py-5 text-center text-sm text-white/50">
          © 2024 TECHGEAR HARDWARE SOLUTIONS. PRECISION-ENGINEERED FOR PERFORMANCE.
        </div>
      </footer>
    </div>
  );
}
