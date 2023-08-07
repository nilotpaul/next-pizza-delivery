"use client";

import { ImageLoaderProps } from "next/image";

export const loader = ({ src, width, quality }: ImageLoaderProps) => {
  const params = ["f_auto", "c_limit", `w_${width}`, `q_${quality || "auto"}`];
  return `${process.env.CLOUDINARY_URL_STRING}/${params.join(",")}${src}`;
};

export default loader;
