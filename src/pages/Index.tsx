import Header from '@/components/Header';
import StatsRow from '@/components/StatsRow';
import InstallButton from '@/components/InstallButton';
import ImageGallery from '@/components/ImageGallery';
import AboutSection from '@/components/AboutSection';
import WhatsNew from '@/components/WhatsNew';
import DataSafety from '@/components/DataSafety';
import RatingsReviews from '@/components/RatingsReviews';
import Footer from '@/components/Footer';

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[800px] mx-auto">
        <Header />
        <StatsRow />
        <InstallButton />
        <ImageGallery />
        <AboutSection />
        <WhatsNew />
        <DataSafety />
        <RatingsReviews />
        <Footer />
      </div>
    </div>
  );
}