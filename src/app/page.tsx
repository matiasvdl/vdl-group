import {
  Badge,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { SiteFooter } from "@/components/store/site-footer";
import { SiteHeader } from "@/components/store/site-header";
import { ArrowRight, Barcode, ChevronDown, CreditCard, Printer } from "lucide-react";
import Link from "next/link";

const categories = [
  {
    icon: Barcode,
    title: "Captura de datos",
    text: "Lectores de código, terminales móviles, impresoras de etiquetas y consumibles para operación en terreno.",
    accent: "#0f766e",
    href: "/catalogo",
  },
  {
    icon: CreditCard,
    title: "Punto de venta",
    text: "Hardware POS para comercio, bodega y caja: terminales, cajones monederos, displays y kits completos.",
    accent: "#4f46e5",
    href: "/catalogo",
  },
  {
    icon: Printer,
    title: "Impresión",
    text: "Impresoras térmicas, de etiquetas, multifuncionales e insumos para procesos comerciales y logísticos.",
    accent: "#b45309",
    href: "/catalogo",
  },
];

const brands = [
  "Zebra",
  "Honeywell",
  "Datalogic",
  "Epson",
  "Bixolon",
  "Star Micronics",
  "Bematech",
];

const quoteRows = [
  { name: "Lector código de barras", qty: "5" },
  { name: "Impresora térmica POS", qty: "10" },
  { name: "Terminal punto de venta", qty: "3" },
];

const faqs = [
  {
    q: "¿Por qué no muestran precios en el sitio?",
    a: "Los precios cambian a diario por variación del dólar, disponibilidad de stock y volumen del pedido. Cotizar al momento garantiza un valor exacto y actualizado, sin sorpresas para tu empresa.",
  },
  {
    q: "¿Cuánto demoran en responder una cotización?",
    a: "Entre 24 y 48 horas hábiles desde recibida la solicitud. Si necesitas una respuesta más rápida, indícalo en el mensaje y priorizamos tu caso.",
  },
  {
    q: "¿Qué incluye la cotización formal?",
    a: "Disponibilidad y stock, plazo de entrega, valor en CLP y USD, formas de pago aceptadas, condiciones de garantía y la validez del documento.",
  },
  {
    q: "¿Realizan despacho a todo Chile?",
    a: "Sí. Coordinamos despachos a Santiago y regiones según peso, urgencia y volumen del pedido. El costo de envío se incluye dentro de la misma cotización.",
  },
  {
    q: "¿Qué formas de pago aceptan?",
    a: "Transferencia electrónica y depósito. Para empresas, previa evaluación comercial, también ofrecemos factura a 30 días.",
  },
  {
    q: "¿Los productos tienen garantía?",
    a: "Sí. Todos los productos cuentan con garantía oficial del fabricante. Validamos el plazo y el alcance de cobertura antes de emitir la cotización.",
  },
];

export default function Home() {
  return (
    <Box minH="100vh" bg="#eef0f3" color="#11151c">
      <SiteHeader />

      <Box as="main">
      <Container maxW="1180px" px={{ base: 4, md: 5 }} py={{ base: 5, md: 8 }}>
        <Box
          overflow="hidden"
          rounded="2xl"
          bg="#0b1018"
          color="white"
          position="relative"
          minH={{ base: "560px", lg: "480px" }}
          px={{ base: 5, md: 8, lg: 10 }}
          py={{ base: 8, md: 10 }}
        >
          <Box
            position="absolute"
            inset="0"
            bg="radial-gradient(circle at 78% 32%, rgba(22, 163, 174, .34), transparent 32%), radial-gradient(circle at 52% 58%, rgba(88, 58, 140, .34), transparent 38%)"
          />

          <Flex
            position="relative"
            zIndex="1"
            direction={{ base: "column", lg: "row" }}
            gap={{ base: 10, lg: 10 }}
            align={{ lg: "center" }}
          >
            <Box maxW="580px">
              <Badge rounded="full" bg="white" color="#11151c" px="3" py="1">
                Plataforma de cotización
              </Badge>
              <Heading
                as="h1"
                mt="5"
                fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
                lineHeight="0.95"
                letterSpacing="-0.04em"
              >
                Equipamiento tecnológico para operar mejor
              </Heading>
              <Text
                mt="5"
                maxW="520px"
                color="whiteAlpha.800"
                fontSize={{ base: "md", md: "lg" }}
                lineHeight="1.8"
              >
                Cotiza productos para captura de datos, punto de venta, impresión e infraestructura
                con asesoría comercial y validación técnica.
              </Text>
              <Flex mt="7" gap="3" wrap="wrap">
                <Button asChild h="11" bg="white" color="#11151c" _hover={{ bg: "#e4e4e7" }}>
                  <Link href="/catalogo">
                    Ver catálogo
                    <ArrowRight size={16} />
                  </Link>
                </Button>
                <Button
                  asChild
                  h="11"
                  variant="outline"
                  borderColor="whiteAlpha.300"
                  color="white"
                  _hover={{ bg: "whiteAlpha.100" }}
                >
                  <Link href="/catalogo">Solicitar cotización</Link>
                </Button>
              </Flex>
            </Box>

            <Box ml={{ lg: "auto" }} w={{ base: "full", lg: "380px" }} position="relative">
              <Box
                position="absolute"
                inset="0"
                rounded="xl"
                bg="whiteAlpha.100"
                borderWidth="1px"
                borderColor="whiteAlpha.200"
                transform="rotate(-3deg) translate(-10px, 8px)"
                display={{ base: "none", sm: "block" }}
              />
              <Box
                position="relative"
                rounded="xl"
                bg="white"
                color="#141821"
                overflow="hidden"
                boxShadow="0 30px 60px rgba(0,0,0,0.45)"
              >
                <Flex
                  justify="space-between"
                  align="center"
                  px="5"
                  pt="5"
                  pb="4"
                  borderBottomWidth="1px"
                  borderColor="#e5e7ec"
                >
                  <Box>
                    <Text
                      fontSize="10px"
                      fontWeight="bold"
                      textTransform="uppercase"
                      letterSpacing="0.18em"
                      color="#7b8491"
                    >
                      Cotización
                    </Text>
                    <Text mt="1" fontSize="sm" fontWeight="bold" color="#11151c" className="font-mono">
                      VDL-2026-0142
                    </Text>
                  </Box>
                  <Badge
                    bg="#0f766e"
                    color="white"
                    rounded="full"
                    px="3"
                    py="1"
                    fontSize="10px"
                    textTransform="uppercase"
                    letterSpacing="0.12em"
                  >
                    Oficial
                  </Badge>
                </Flex>

                <Box px="5" pt="4" pb="3">
                  <Text
                    fontSize="10px"
                    textTransform="uppercase"
                    letterSpacing="0.16em"
                    color="#7b8491"
                  >
                    Cliente
                  </Text>
                  <Text mt="1" fontSize="sm" fontWeight="semibold" color="#11151c">
                    Empresa demo SpA
                  </Text>
                </Box>

                <Box px="5">
                  <Flex justify="space-between" pb="2" borderBottomWidth="1px" borderColor="#e5e7ec">
                    <Text
                      fontSize="10px"
                      fontWeight="bold"
                      textTransform="uppercase"
                      letterSpacing="0.16em"
                      color="#7b8491"
                    >
                      Ítem
                    </Text>
                    <Text
                      fontSize="10px"
                      fontWeight="bold"
                      textTransform="uppercase"
                      letterSpacing="0.16em"
                      color="#7b8491"
                    >
                      Cant
                    </Text>
                  </Flex>
                  {quoteRows.map((row) => (
                    <Flex
                      key={row.name}
                      justify="space-between"
                      align="center"
                      py="2.5"
                      borderBottomWidth="1px"
                      borderColor="#f1f3f5"
                      fontSize="sm"
                      _last={{ borderBottomWidth: 0 }}
                    >
                      <Text color="#303846">{row.name}</Text>
                      <Text fontWeight="semibold" color="#11151c">
                        {row.qty}
                      </Text>
                    </Flex>
                  ))}
                </Box>

                <Box px="5" py="4" mt="2" bg="#fafbfc" borderTopWidth="1px" borderColor="#e5e7ec">
                  <Flex justify="space-between" align="center">
                    <Box>
                      <Text
                        fontSize="10px"
                        fontWeight="bold"
                        textTransform="uppercase"
                        letterSpacing="0.16em"
                        color="#7b8491"
                      >
                        Total
                      </Text>
                      <Text mt="1" fontSize="md" fontWeight="bold" color="#11151c">
                        USD bajo cotización
                      </Text>
                    </Box>
                    <Box
                      rounded="full"
                      bg="#11151c"
                      color="white"
                      px="3"
                      py="1.5"
                      fontSize="11px"
                      fontWeight="semibold"
                    >
                      Respuesta 24-48 hrs
                    </Box>
                  </Flex>
                </Box>
              </Box>
            </Box>
          </Flex>
        </Box>

        <Box id="soluciones" mt={{ base: 10, md: 14 }}>
          <Box mb="5" maxW="640px">
            <Heading as="h2" fontSize={{ base: "3xl", md: "4xl" }} letterSpacing="-0.03em">
              Soluciones para cada operación
            </Heading>
            <Text mt="2" color="#5d6572" lineHeight="1.7">
              Tres líneas de producto para cubrir captura, venta e impresión, con asesoría
              comercial y validación técnica.
            </Text>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 3 }} gap="4">
            {categories.map((cat) => {
              const Icon = cat.icon;

              return (
                <Link key={cat.title} href={cat.href} className="block h-full">
                  <Box
                    rounded="2xl"
                    bg="white"
                    borderWidth="1px"
                    borderColor="#d8dbe2"
                    p="6"
                    h="full"
                    boxShadow="0 8px 24px rgba(17,21,28,0.04)"
                    transition="all .22s ease"
                    _hover={{
                      transform: "translateY(-4px)",
                      borderColor: "#aab2bf",
                      boxShadow: "0 18px 42px rgba(17,21,28,0.10)",
                    }}
                  >
                    <Box
                      w="48px"
                      h="48px"
                      rounded="xl"
                      bg={`${cat.accent}1A`}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Icon size={22} color={cat.accent} />
                    </Box>
                    <Heading as="h3" mt="5" fontSize="xl">
                      {cat.title}
                    </Heading>
                    <Text mt="2" color="#5d6572" lineHeight="1.7" fontSize="sm">
                      {cat.text}
                    </Text>
                    <Flex
                      mt="5"
                      align="center"
                      gap="2"
                      color="#11151c"
                      fontWeight="semibold"
                      fontSize="sm"
                    >
                      Ver productos
                      <ArrowRight size={14} />
                    </Flex>
                  </Box>
                </Link>
              );
            })}
          </SimpleGrid>
        </Box>
      </Container>

      <Box bg="#e7eaee" borderTopWidth="1px" borderColor="#d8dbe2" mt={{ base: 10, md: 14 }}>
        <Container maxW="1180px" px={{ base: 4, md: 5 }} py={{ base: 10, md: 14 }}>
        <Box id="faq">
          <Flex direction={{ base: "column", lg: "row" }} gap={{ base: 6, lg: 16 }} align="start">
            <Box flexShrink={0} w={{ base: "full", lg: "300px" }}>
              <Text
                fontSize="xs"
                fontWeight="bold"
                textTransform="uppercase"
                letterSpacing="0.2em"
                color="#7b8491"
              >
                Preguntas frecuentes
              </Text>
              <Heading
                as="h2"
                mt="3"
                fontSize={{ base: "2xl", md: "3xl" }}
                letterSpacing="-0.03em"
                lineHeight="1.1"
              >
                Lo que más nos preguntan
              </Heading>
              <Text mt="3" color="#5d6572" fontSize="sm" lineHeight="1.7">
                Resolvemos las consultas más comunes sobre cotizaciones, despacho y formas de pago.
              </Text>
            </Box>

            <Flex direction="column" gap="2.5" flex="1" w={{ base: "full" }} maxW={{ lg: "780px" }}>
              {faqs.map((faq) => (
                <Box
                  as="details"
                  key={faq.q}
                  bg="white"
                  rounded="xl"
                  borderWidth="1px"
                  borderColor="#e5e7ec"
                  transition="border-color .15s ease"
                  _hover={{ borderColor: "#d2d6dc" }}
                  _open={{ borderColor: "#11151c" }}
                  className="group"
                >
                  <Box
                    as="summary"
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    gap="4"
                    cursor="pointer"
                    listStyleType="none"
                    px="5"
                    py="3.5"
                    className="[&::-webkit-details-marker]:hidden"
                  >
                    <Text
                      fontSize={{ base: "sm", md: "md" }}
                      fontWeight="semibold"
                      color="#11151c"
                    >
                      {faq.q}
                    </Text>
                    <Box
                      as="span"
                      color="#9ca3af"
                      flexShrink="0"
                      transition="transform 0.2s ease"
                      className="group-open:rotate-180"
                    >
                      <ChevronDown size={16} />
                    </Box>
                  </Box>
                  <Box px="5" pb="4">
                    <Text fontSize="sm" color="#5d6572" lineHeight="1.7">
                      {faq.a}
                    </Text>
                  </Box>
                </Box>
              ))}
            </Flex>
          </Flex>
        </Box>

        <Box
          id="marcas"
          mt={{ base: 10, md: 14 }}
          pt={{ base: 10, md: 14 }}
          borderTopWidth="1px"
          borderColor="#d8dbe2"
        >
          <Text
            fontSize="xs"
            fontWeight="bold"
            textTransform="uppercase"
            letterSpacing="0.2em"
            color="#7b8491"
            textAlign="center"
          >
            Trabajamos con marcas líderes del rubro
          </Text>
          <Flex
            mt="5"
            wrap="wrap"
            justify="center"
            align="center"
            rowGap="4"
            columnGap={{ base: 6, md: 10 }}
            opacity="0.7"
          >
            {brands.map((brand) => (
              <Text
                key={brand}
                fontFamily="var(--font-barlow)"
                fontSize={{ base: "lg", md: "xl" }}
                fontWeight="bold"
                color="#5d6572"
                letterSpacing="-0.02em"
              >
                {brand}
              </Text>
            ))}
          </Flex>
        </Box>
        </Container>
      </Box>

      <Box
        bg="#0b1018"
        color="white"
        position="relative"
        overflow="hidden"
      >
        <Box
          position="absolute"
          inset="0"
          bg="radial-gradient(circle at 20% 30%, rgba(22, 163, 174, .28), transparent 35%), radial-gradient(circle at 80% 70%, rgba(88, 58, 140, .28), transparent 35%)"
        />
        <Container
          maxW="1180px"
          px={{ base: 4, md: 5 }}
          py={{ base: 12, md: 16 }}
          position="relative"
          zIndex="1"
        >
          <Flex
            direction={{ base: "column", md: "row" }}
            align={{ md: "center" }}
            justify="space-between"
            gap={{ base: 6, md: 8 }}
          >
            <Box maxW="640px">
              <Heading
                as="h2"
                fontSize={{ base: "3xl", md: "4xl" }}
                letterSpacing="-0.03em"
                lineHeight="1.05"
              >
                ¿Tienes un proyecto en mente?
              </Heading>
              <Text
                mt="4"
                color="whiteAlpha.800"
                fontSize={{ base: "md", md: "lg" }}
                lineHeight="1.7"
              >
                Cuéntanos qué necesitas y te entregamos una cotización formal con disponibilidad,
                plazos y condiciones comerciales.
              </Text>
            </Box>
            <Flex gap="3" wrap="wrap">
              <Button asChild h="12" px="6" bg="white" color="#11151c" _hover={{ bg: "#e4e4e7" }}>
                <Link href="/catalogo">
                  Solicitar cotización
                  <ArrowRight size={16} />
                </Link>
              </Button>
              <Button
                asChild
                h="12"
                px="6"
                variant="outline"
                borderColor="whiteAlpha.300"
                color="white"
                _hover={{ bg: "whiteAlpha.100" }}
              >
                <Link href="/catalogo">Ver catálogo</Link>
              </Button>
            </Flex>
          </Flex>
        </Container>
      </Box>
      </Box>

      <SiteFooter />
    </Box>
  );
}
