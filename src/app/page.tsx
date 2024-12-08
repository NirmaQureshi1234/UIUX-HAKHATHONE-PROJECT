
import Header from "@/app/components/Header";
import Side from "@/app/components/Side";
import TopPicks from "@/app/components/TopPicks";
import NewArrivals from "@/app/components/NewArrivals";
import OurBlogs from "@/app/components/OurBlogs";
import OurInstagram from "@/app/components/OurInstagram";
import Footer from "@/app/components/Footer";

function Home() {
  return (
    <>
    
      <Header />
      <Side />
      <TopPicks />
      <NewArrivals />
      <OurBlogs />
      <OurInstagram />
      <Footer />
    </>
  );
}

export default Home;