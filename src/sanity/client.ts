import { createClient, type SanityClient } from "next-sanity";
import { sanityApiVersion, sanityDataset, sanityProjectId } from "./env";

let client: SanityClient | null = null;

export function getSanityClient() {
  if (!sanityProjectId) {
    return null;
  }

  if (!client) {
    client = createClient({
      projectId: sanityProjectId,
      dataset: sanityDataset,
      apiVersion: sanityApiVersion,
      useCdn: false,
    });
  }

  return client;
}
