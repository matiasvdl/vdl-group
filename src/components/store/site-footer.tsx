import {
  Box,
  Button,
  Container,
  Flex,
  Input,
  Link as ChakraLink,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";

const siteLinks = [
  { label: "Catálogo", href: "/catalogo" },
  { label: "Soluciones", href: "/#soluciones" },
  { label: "Marcas", href: "/#marcas" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contacto", href: "mailto:ventas@vdlgroup.cl" },
];

const legalLinks = [
  { label: "Términos", href: "#" },
  { label: "Privacidad", href: "#" },
  { label: "Cookies", href: "#" },
];

export function SiteFooter() {
  return (
    <Box as="footer" bg="#070a10" color="white">
      <Container maxW="1180px" px={{ base: 4, md: 5 }} py={{ base: 10, md: 12 }}>
        <Flex
          direction={{ base: "column", lg: "row" }}
          align={{ base: "start", lg: "start" }}
          justify="space-between"
          gap={{ base: 10, lg: 8 }}
        >
          <Box>
            <Text
              as="span"
              fontSize="xl"
              fontWeight="extrabold"
              letterSpacing="-0.03em"
              color="white"
            >
              VDLGROUP
            </Text>
            <Flex
              as="nav"
              mt="6"
              wrap="wrap"
              gap={{ base: 4, md: 6 }}
              color="whiteAlpha.700"
              fontSize="sm"
            >
              {siteLinks.map((item) => (
                <ChakraLink
                  key={item.label}
                  asChild
                  color="whiteAlpha.700"
                  _hover={{ color: "white", textDecoration: "none" }}
                >
                  <Link href={item.href}>{item.label}</Link>
                </ChakraLink>
              ))}
            </Flex>
          </Box>

          <Box w={{ base: "full", lg: "auto" }} maxW={{ lg: "420px" }}>
            <Text fontSize="sm" fontWeight="semibold" color="white">
              Mantente al día
            </Text>
            <Flex mt="3" gap="2" direction={{ base: "column", sm: "row" }}>
              <Input
                type="email"
                placeholder="Tu correo electrónico"
                h="40px"
                w={{ base: "full", sm: "260px" }}
                bg="whiteAlpha.50"
                borderColor="whiteAlpha.300"
                color="white"
                fontSize="sm"
                _placeholder={{ color: "whiteAlpha.400" }}
                _focus={{ borderColor: "whiteAlpha.500", boxShadow: "none" }}
                _focusVisible={{ borderColor: "whiteAlpha.500", boxShadow: "none" }}
              />
              <Button
                h="40px"
                px="5"
                bg="white"
                color="#11151c"
                fontWeight="semibold"
                fontSize="sm"
                _hover={{ bg: "#e4e4e7" }}
              >
                Suscribir
              </Button>
            </Flex>
          </Box>
        </Flex>

        <Box
          mt={{ base: 8, md: 10 }}
          pt={{ base: 5, md: 6 }}
          borderTopWidth="1px"
          borderColor="whiteAlpha.200"
        >
          <Flex
            direction={{ base: "column", md: "row" }}
            justify="space-between"
            align={{ md: "center" }}
            gap="4"
            color="whiteAlpha.500"
            fontSize="xs"
          >
            <Text>
              © {new Date().getFullYear()} VDL Group. Todos los derechos reservados.
            </Text>
            <Flex gap={{ base: 4, md: 6 }}>
              {legalLinks.map((item) => (
                <ChakraLink
                  key={item.label}
                  asChild
                  color="whiteAlpha.500"
                  _hover={{ color: "white", textDecoration: "none" }}
                >
                  <Link href={item.href}>{item.label}</Link>
                </ChakraLink>
              ))}
            </Flex>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
}
