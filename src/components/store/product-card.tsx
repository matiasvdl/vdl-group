import { Badge, Box, Text } from "@chakra-ui/react";
import type { StoreProduct } from "@/components/store/store-data";
import Image from "next/image";
import Link from "next/link";

type ProductCardProps = {
  product: StoreProduct;
  compact?: boolean;
  href?: string;
};

export function ProductCard({ product, compact = false, href }: ProductCardProps) {
  const productHref = href || (product.slug ? `/producto/${product.slug}` : "/catalogo");

  return (
    <Link href={productHref} className="group block h-full">
      <Box
        position="relative"
        h="full"
        overflow="hidden"
        rounded="2xl"
        borderWidth="1px"
        borderColor="#d4d9e2"
        bg="white"
        color="#141821"
        boxShadow="0 12px 30px rgba(17, 21, 28, 0.06)"
        transition="all 0.22s ease"
        _hover={{
          transform: "translateY(-4px)",
          borderColor: "#aab2bf",
          boxShadow: "0 18px 42px rgba(17, 21, 28, 0.12)",
        }}
      >
        {product.badge ? (
          <Badge
            position="absolute"
            right="4"
            top="4"
            zIndex="1"
            rounded="full"
            bg="#11151c"
            color="white"
            px="3"
            py="1"
            fontSize="11px"
          >
            {product.badge}
          </Badge>
        ) : null}

        <Box p="3" pb="0">
          <div
            className={`relative overflow-hidden rounded-xl bg-[#f3f5f8] ${
              compact ? "aspect-[5/4]" : "aspect-[16/11]"
            }`}
          >
            {product.imageUrl ? (
              <Image
                src={product.imageUrl}
                alt={product.name}
                fill
                sizes={compact ? "(min-width: 1024px) 25vw, 50vw" : "320px"}
                className="object-contain p-5 transition duration-300 group-hover:scale-[1.04]"
              />
            ) : (
              <div className="h-full w-full bg-[radial-gradient(circle_at_50%_35%,rgba(23,26,34,.12),rgba(23,26,34,.04)_42%,rgba(23,26,34,.08))]" />
            )}
          </div>
        </Box>

        <Box px="4" pb="4" pt="4">
          <Text fontSize="11px" fontWeight="semibold" textTransform="uppercase" letterSpacing="0.18em" color="#6a7280">
            {product.brand}
          </Text>
          <Text
            mt="2"
            minH={compact ? "3.25rem" : "3.75rem"}
            fontSize={compact ? "md" : "lg"}
            fontWeight="bold"
            lineHeight="1.2"
            color="#141821"
          >
            {product.name}
          </Text>

          <Box mt="4" display="flex" alignItems="center" justifyContent="space-between" gap="3">
            <Box>
              <Text fontSize="xs" color="#7b8491">
                Modalidad
              </Text>
              <Text fontSize="sm" fontWeight="semibold" color="#303846">
                Bajo cotizacion
              </Text>
            </Box>
            <Box
              rounded="full"
              bg="#11151c"
              color="white"
              px="4"
              py="2"
              fontSize="sm"
              fontWeight="semibold"
              whiteSpace="nowrap"
            >
              Cotizar
            </Box>
          </Box>

          <Box mt="4" borderTopWidth="1px" borderColor="#e4e7ec" pt="3">
            <Text fontSize="xs" color="#697386" lineHeight="1.5">
              Valor actualizado al emitir cotizacion segun dolar, stock y volumen.
            </Text>
          </Box>
        </Box>
      </Box>
    </Link>
  );
}
