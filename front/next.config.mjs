/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: "/dperrosypaola",
  images: {
    unoptimized: true, // Desactiva la optimización de imágenes para exportación estática
  },
};

export default nextConfig;
