import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

///////////
type StyleDefinition = {
  [key: string]: string;
};

type StyleTagOptions = {
  className?: string;
  media?: string;
  id?: string;
};

export const injectStyles = (
  styles: StyleDefinition,
  options?: StyleTagOptions
) => {
  const styleTag = makeStyleTag(styles, options);

  if (document.head) {
    document.head.appendChild(styleTag);
  }
};

export const makeStyleTag = (
  styles: StyleDefinition,
  options?: StyleTagOptions
): HTMLStyleElement => {
  const { className, media, id } = options || {};

  const styleTag = document.createElement("style");

  if (id) {
    styleTag.id = id;
  }

  if (media) {
    styleTag.media = media;
  }

  if (className) {
    styleTag.classList.add(className);
  }

  let css = "";

  for (const key in styles) {
    const value = styles[key];
    css += `${key}:${value};`;
  }

  styleTag.textContent = css;
  return styleTag;
};

// Example usage:
const customStyles = {
  ".container": "width: 100%; height: 100vh;",
  ".header": "background-color: #f1f1f1; color: #333; font-size: 24px;",
  ".button":
    "padding: 10px 20px; background-color: #007bff; color: #fff; border: none; cursor: pointer;",
};

injectStyles(customStyles);
