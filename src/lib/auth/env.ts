import zod from "zod";

const envValidation = zod.object({
  DATABASE_URL: zod.string().nonempty(),
  GOOGLE_ID: zod.string().nonempty(),
  GOOGLE_SECRET: zod.string().nonempty(),
  NEXTAUTH_URL: zod.string().nonempty(),
  NEXTAUTH_SECRET: zod.string().nonempty(),
});

export const env = envValidation.parse(process.env);
