import { defineField, defineType } from "sanity";

export const eventType = defineType({
  name: "erson",
  title: "Person",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string",
    }),
  ],
});
