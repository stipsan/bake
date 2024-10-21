import { defineField, defineType } from "sanity";
import { baseBlockMarks } from "./portableText/baseBlockMarks";

export const alertType = defineType({
  name: "alert",
  title: "Alert",
  type: "object",
  fields: [
    defineField({
      name: "variant",
      type: "string",
      options: {
        list: ["default", "destructive"],
      },
      initialValue: "default",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "body",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            {
              title: "Normal",
              value: "normal",
            },
          ],
          lists: [],
          marks: baseBlockMarks,
        },
      ],
      validation: (rule) => rule.required(),
    }),
  ],
});