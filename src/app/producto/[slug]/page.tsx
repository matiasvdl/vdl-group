import { Badge, Box, Button, Heading, Text } from "@chakra-ui/react";
import { SiteFooter } from "@/components/store/site-footer";
import { SiteHeader } from "@/components/store/site-header";
import { getProductBySlug } from "@/sanity/queries";
import {
  CheckCircle2,
  ClipboardList,
  Headphones,
  MessageSquareQuote,
  ShieldCheck,
  Truck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

const defaultFeatures = [
  "Producto disponible para evaluacion comercial",
  "Cotizacion segun volumen y requerimiento",
  "Asesoria para elegir alternativa compatible",
  "Soporte para empresas y proyectos",
];

const trustItems = [
  {
    icon: ClipboardList,
    title: "Cotizacion formal",
    text: "Respuesta comercial con disponibilidad, plazo y condiciones.",
  },
  {
    icon: ShieldCheck,
    title: "Garantia y respaldo",
    text: "Validamos garantia, compatibilidad y soporte antes de recomendar.",
  },
  {
    icon: Truck,
    title: "Despacho coordinado",
    text: "Opciones de entrega segun zona, stock y urgencia del proyecto.",
  },
  {
    icon: Headphones,
    title: "Asesoria tecnica",
    text: "Acompanamiento para compras corporativas y renovaciones.",
  },
];

export default async function ProductoDetallePage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const features = product.features?.length ? product.features : defaultFeatures;
  const specifications = product.specifications?.length
    ? product.specifications
    : [
        { label: "Marca o categoria", value: product.brand },
        { label: "Estado", value: product.badge || "Disponible para cotizar" },
        { label: "Modalidad", value: "Cotizacion comercial" },
        { label: "Origen", value: "Catalogo administrado desde Sanity" },
      ];

  return (
    <div className="min-h-screen bg-[#eceef1]">
      <SiteHeader />

      <main className="mx-auto w-full max-w-[1180px] px-5 py-6 text-[#12141a]">
        <p className="mb-4 text-xs text-[#68707c]">
          Catalogo <span className="mx-2">/</span> {product.brand}{" "}
          <span className="mx-2">/</span>
          <span className="font-semibold text-[#151821]">{product.name}</span>
        </p>

        <section className="overflow-hidden rounded-2xl border border-[#d7dbe2] bg-white shadow-sm">
          <div className="grid lg:grid-cols-[1.12fr_0.88fr]">
            <div className="relative min-h-[380px] bg-[#f4f6f8] lg:min-h-[620px]">
              {product.imageUrl ? (
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  fill
                  sizes="(min-width: 1024px) 680px, 100vw"
                  className="object-contain p-8 lg:p-14"
                  priority
                />
              ) : (
                <div className="h-full w-full bg-[radial-gradient(circle_at_50%_35%,rgba(23,26,34,.12),rgba(23,26,34,.04)_42%,rgba(23,26,34,.08))]" />
              )}
            </div>

            <div className="flex flex-col p-6 lg:p-10">
              <div className="flex flex-wrap items-center gap-2">
                {product.badge ? (
                  <Badge bg="#11151c" color="white">
                    {product.badge}
                  </Badge>
                ) : null}
                <Badge variant="outline" borderColor="#cbd0d8" color="#4f5968">
                  Solo cotizacion
                </Badge>
              </div>

              <h1 className="mt-5 text-3xl font-semibold leading-tight text-[#0d1016] lg:text-5xl">
                {product.name}
              </h1>
              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#667080]">
                {product.brand}
              </p>
              <p className="mt-6 text-base leading-7 text-[#404854] lg:text-lg">
                {product.description ||
                  "Producto disponible para cotizacion. Nuestro equipo puede ayudarte a validar disponibilidad, compatibilidad y condiciones comerciales."}
              </p>

              <div className="mt-8 rounded-xl border border-[#dfe3e8] bg-[#fafbfc] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#737c89]">
                  Precio bajo cotizacion
                </p>
                <p className="mt-2 text-2xl font-semibold tracking-tight text-black">
                  Valor segun dolar, volumen y disponibilidad
                </p>
                <p className="mt-2 text-sm text-[#6b7280]">
                  No mostramos precios fijos porque los costos varian diariamente y se validan al
                  emitir la cotizacion.
                </p>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg border border-[#e0e3e8] p-4">
                  <p className="text-xs uppercase tracking-[0.14em] text-[#7b8491]">Respuesta</p>
                  <p className="mt-1 font-semibold">24-48 hrs</p>
                </div>
                <div className="rounded-lg border border-[#e0e3e8] p-4">
                  <p className="text-xs uppercase tracking-[0.14em] text-[#7b8491]">Documento</p>
                  <p className="mt-1 font-semibold">Cotizacion formal</p>
                </div>
              </div>

              <Button asChild mt="6" h="12" bg="#11151c" color="white" _hover={{ bg: "#2a303b" }}>
                <Link href="/catalogo">
                  <MessageSquareQuote className="size-4" />
                  Solicitar cotizacion
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Box rounded="xl" borderWidth="1px" borderColor="#d7dbe2" bg="white" boxShadow="sm">
            <Box p="6">
              <Heading as="h2" size="md">Caracteristicas principales</Heading>
            </Box>
            <Box className="grid gap-3" px="6" pb="6">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3 rounded-lg border border-[#e0e3e8] bg-[#fafbfc] p-3 text-sm text-[#343b46]"
                >
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[#0f766e]" />
                  <span>{feature}</span>
                </div>
              ))}
            </Box>
          </Box>

          <Box rounded="xl" borderWidth="1px" borderColor="#d7dbe2" bg="white" boxShadow="sm">
            <Box p="6">
              <Heading as="h2" size="md">Ficha tecnica</Heading>
            </Box>
            <Box px="6" pb="6">
              <div className="overflow-hidden rounded-lg border border-[#e0e3e8]">
                {specifications.map((item, index) => (
                  <div
                    key={`${item.label}-${index}`}
                    className="grid grid-cols-[0.85fr_1.15fr] border-b border-[#e0e3e8] text-sm last:border-b-0"
                  >
                    <div className="bg-[#f6f7f9] px-4 py-3 font-medium text-[#555e6c]">
                      {item.label}
                    </div>
                    <div className="px-4 py-3 text-[#222934]">{item.value}</div>
                  </div>
                ))}
              </div>
            </Box>
          </Box>
        </section>

        <section className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {trustItems.map((item) => {
            const Icon = item.icon;

            return (
              <Box key={item.title} rounded="xl" borderWidth="1px" borderColor="#d7dbe2" bg="white" p="4" boxShadow="sm">
                  <Icon className="size-5 text-[#11151c]" />
                  <Text mt="3" fontWeight="semibold" color="#141821">{item.title}</Text>
                  <Text mt="1" fontSize="sm" lineHeight="6" color="#5d6572">{item.text}</Text>
              </Box>
            );
          })}
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
