import { defineField, defineType } from "sanity";

export const Blogs = defineType({
  name: "blogs",
  title: "Blogs",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string",
    }),
    defineField({
      name: "description",
      type: "text",
    }),
    defineField({
      name: "image",
      type: "image",
    }),
    defineField({
      name: "date",
      type: "date",
    }),
    defineField({
      name: "author",
      type: "string",
    }),
    defineField({
      name: "category",
      type: "string",
    }),
  ],
});
