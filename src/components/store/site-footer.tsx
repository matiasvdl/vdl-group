import { Box, Container, Flex, Link as ChakraLink, Text } from "@chakra-ui/react";
import Link from "next/link";

const navItems = [
  { label: "Catálogo", href: "/catalogo" },
  { label: "Soluciones", href: "/#soluciones" },
  { label: "Marcas", href: "/#marcas" },
  { label: "Cotizar", href: "/catalogo" },
];

export function SiteFooter() {
  return (
    <Box
      as="footer"
      bg="#070a10"
      color="white"
      borderTopWidth="1px"
      borderColor="whiteAlpha.200"
    >
      <Container maxW="1180px" px={{ base: 4, md: 5 }} py={{ base: 8, md: 10 }}>
        <Flex
          direction={{ base: "column", md: "row" }}
          align={{ base: "start", md: "center" }}
          justify="space-between"
          gap={{ base: 6, md: 8 }}
        >
          <Text
            fontSize="xl"
            fontWeight="extrabold"
            letterSpacing="-0.03em"
            color="white"
          >
            VDLGROUP
          </Text>

          <Flex
            as="nav"
            wrap="wrap"
            gap={{ base: 4, md: 6 }}
            color="whiteAlpha.700"
            fontSize="sm"
          >
            {navItems.map((item) => (
              <ChakraLink
                key={item.href}
                asChild
                color="whiteAlpha.700"
                _hover={{ color: "white", textDecoration: "none" }}
              >
                <Link href={item.href}>{item.label}</Link>
              </ChakraLink>
            ))}
          </Flex>

          <Flex
            wrap="wrap"
            align="center"
            gap={{ base: 3, md: 4 }}
            color="whiteAlpha.700"
            fontSize="sm"
          >
            <ChakraLink
              href="mailto:ventas@vdlgroup.cl"
              color="whiteAlpha.700"
              _hover={{ color: "white", textDecoration: "none" }}
            >
              ventas@vdlgroup.cl
            </ChakraLink>
            <Box w="3px" h="3px" rounded="full" bg="whiteAlpha.400" />
            <ChakraLink
              href="tel:+56900000000"
              color="whiteAlpha.700"
              _hover={{ color: "white", textDecoration: "none" }}
            >
              +56 9 0000 0000
            </ChakraLink>
          </Flex>
        </Flex>

        <Flex
          mt={{ base: 6, md: 8 }}
          pt="5"
          borderTopWidth="1px"
          borderColor="whiteAlpha.200"
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align={{ md: "center" }}
          gap="2"
          color="whiteAlpha.500"
          fontSize="xs"
        >
          <Text>© {new Date().getFullYear()} VDL Group · Santiago de Chile</Text>
          <Text>No realizamos compras en línea · Validación comercial requerida</Text>
        </Flex>
      </Container>
    </Box>
  );
}
