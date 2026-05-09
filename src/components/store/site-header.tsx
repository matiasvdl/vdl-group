"use client";

import {
  Box,
  Button,
  Container,
  Flex,
  IconButton,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Catálogo", href: "/catalogo" },
  { label: "Soluciones", href: "/#soluciones" },
  { label: "Marcas", href: "/#marcas" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <Box
      as="header"
      bg="#070a10"
      borderBottomWidth="1px"
      borderColor="whiteAlpha.200"
      position="sticky"
      top="0"
      zIndex="20"
    >
      <Container maxW="1180px" px={{ base: 4, md: 5 }}>
        <Flex h="68px" align="center" gap={{ base: 4, lg: 8 }}>
          <ChakraLink
            asChild
            color="white"
            fontSize="xl"
            fontWeight="extrabold"
            letterSpacing="-0.03em"
            _hover={{ textDecoration: "none" }}
          >
            <Link href="/">VDLGROUP</Link>
          </ChakraLink>

          <Flex
            as="nav"
            display={{ base: "none", lg: "flex" }}
            gap="7"
            color="whiteAlpha.800"
            fontSize="sm"
          >
            {navItems.map((item) => (
              <ChakraLink
                key={item.href}
                asChild
                color="whiteAlpha.800"
                _hover={{ color: "white", textDecoration: "none" }}
              >
                <Link href={item.href}>{item.label}</Link>
              </ChakraLink>
            ))}
          </Flex>

          <Flex ml="auto" align="center" gap={{ base: 2, md: 4 }}>
            <Flex
              display={{ base: "none", md: "flex" }}
              align="center"
              gap="2"
              color="whiteAlpha.700"
              fontSize="sm"
            >
              <Phone size={14} />
              <Box as="span">+56 9 0000 0000</Box>
            </Flex>

            <Button
              display={{ base: "none", md: "inline-flex" }}
              asChild
              h="40px"
              px="5"
              bg="white"
              color="#11151c"
              rounded="full"
              fontWeight="semibold"
              _hover={{ bg: "#e4e4e7" }}
            >
              <Link href="/catalogo">Solicitar cotización</Link>
            </Button>

            <IconButton
              display={{ base: "inline-flex", lg: "none" }}
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              onClick={() => setOpen((v) => !v)}
              variant="outline"
              borderColor="whiteAlpha.300"
              color="white"
              bg="transparent"
              w="40px"
              h="40px"
              rounded="full"
              _hover={{ bg: "whiteAlpha.100" }}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </IconButton>
          </Flex>
        </Flex>
      </Container>

      {open ? (
        <Box
          display={{ base: "block", lg: "none" }}
          borderTopWidth="1px"
          borderColor="whiteAlpha.200"
          bg="#070a10"
        >
          <Container maxW="1180px" px={{ base: 4, md: 5 }} py="4">
            <Flex direction="column" gap="1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base text-white transition hover:bg-white/5"
                >
                  {item.label}
                </Link>
              ))}
              <Box mt="2" borderTopWidth="1px" borderColor="whiteAlpha.200" pt="3">
                <Flex align="center" gap="2" color="whiteAlpha.700" fontSize="sm" px="3" py="2">
                  <Phone size={14} />
                  <Box as="span">+56 9 0000 0000</Box>
                </Flex>
                <Button
                  asChild
                  w="full"
                  mt="2"
                  bg="white"
                  color="#11151c"
                  _hover={{ bg: "#e4e4e7" }}
                  onClick={() => setOpen(false)}
                >
                  <Link href="/catalogo">Solicitar cotización</Link>
                </Button>
              </Box>
            </Flex>
          </Container>
        </Box>
      ) : null}
    </Box>
  );
}
