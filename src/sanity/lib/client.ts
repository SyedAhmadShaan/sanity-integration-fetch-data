import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "u7msy7yk",
  dataset: "production",
  useCdn: false, // `false` if you want to ensure fresh data
});
