import { metadata as studioMetadata, viewport as studioViewport } from "next-sanity/studio";
import { StudioLoader } from "./studio-loader";

export const metadata = studioMetadata;
export const viewport = studioViewport;

export default function StudioPage() {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    return (
      <main className="min-h-screen bg-[#111318] px-6 py-10 text-white">
        <div className="mx-auto max-w-2xl rounded-lg border border-white/15 bg-white/5 p-6">
          <h1 className="text-2xl font-semibold">Configura Sanity</h1>
          <p className="mt-3 text-sm text-white/75">
            Agrega NEXT_PUBLIC_SANITY_PROJECT_ID y NEXT_PUBLIC_SANITY_DATASET en .env.local para
            abrir el Studio y cargar productos.
          </p>
        </div>
      </main>
    );
  }

  return <StudioLoader />;
}
