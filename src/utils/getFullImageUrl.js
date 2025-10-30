// utils/getFullImageUrl.js
export const getFullImageUrl = (image) => {
  const baseURL = "https://committed-delight-2680eb60f9.media.strapiapp.com/";
  if (!image) return null;
  return image.url || (image.hash ? `${baseURL}${image.hash}${image.ext}` : null);
};
