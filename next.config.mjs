const repoBase = process.env.BASE_PATH || "";
const assetPrefix = process.env.ASSET_PREFIX || undefined;

export default {
  output: "export",
  basePath: repoBase,
  assetPrefix,
  images: { unoptimized: true },
  trailingSlash: true,
};
