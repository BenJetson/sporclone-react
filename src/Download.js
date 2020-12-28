import { format } from "prettier/standalone";
import parserBabel from "prettier/parser-babel";

const makeFileURL = ({ filename, contentType, contents }) =>
  URL.createObjectURL(
    new File([contents], filename, {
      type: contentType,
    })
  );

const makeBlobURL = ({ contentType, contents }) =>
  URL.createObjectURL(
    new Blob([contents], {
      type: contentType,
    })
  );

const makeDataURL = ({ contentType, contents }) =>
  "data:" + contentType + ";charset=utf-8," + encodeURIComponent(contents);

const download = ({ filename, contents, contentType }) => {
  const payload = {
    filename,
    contents,
    contentType,
  };
  let url;

  try {
    url = makeFileURL(payload);
  } catch (e) {
    try {
      console.warn("The files API is unavailable; fallback to blob API.\n", e);
      url = makeBlobURL(payload);
    } catch (e) {
      console.warn("The blob API is unavailable; fallback to data URL.\n", e);
      url = makeDataURL(payload);
    }
  }

  const anchor = document.createElement("a");
  anchor.setAttribute("href", url);
  anchor.setAttribute("download", filename);

  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
};

export const downloadAsJSON = ({ filename, object }) => {
  const out = format(JSON.stringify(object), {
    parser: "json",
    plugins: [parserBabel],
  });

  download({
    filename: `${filename}.json`,
    contents: out,
    contentType: "application/json",
  });
};
