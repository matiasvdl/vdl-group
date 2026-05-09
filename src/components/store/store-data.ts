export const storeNav = ["Inicio", "Captura de datos", "Punto de venta", "Impresion"];

export const storeFooterCols = [
  {
    title: "TIENDA",
    items: ["Graphics Cards", "Processors", "Motherboards", "Storage Solutions"],
  },
  {
    title: "SUPPORT",
    items: ["Customer Support", "Shipping Policy", "Returns & Warranty", "Technical Services"],
  },
];

export type StoreProduct = {
  id?: string;
  badge?: string;
  brand: string;
  name: string;
  description?: string;
  features?: string[];
  specifications?: {
    label: string;
    value: string;
  }[];
  imageUrl?: string;
  slug?: string;
};
