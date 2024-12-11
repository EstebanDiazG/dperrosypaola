import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import Body from "@/components/body/body";
export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <Body />
      </main>
      <Footer />
    </div>
  );
}
