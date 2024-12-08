import { Header } from '../components/header/page';
import { Navbar } from '../components/navbar/page';
import { Banner } from '../components/banner/page';
import { EditorsPick } from '../components/editorsPick/page';
import { FeaturedProducts } from '../components/featuredProducts/page';
import { Box } from '@mui/material';
import { ClassicProduct } from '../components/classicProduct/page';
import { NeuralUniverse } from '../components/neualUniverse/page';
import { FeaturedPosts } from '../components/featuredPosts/page';
import { Footer } from '../components/footer/page';

export default function Home() {
  return (
    <Box>
      <Header />
      <Navbar />
      <Banner />
      <EditorsPick />
      <FeaturedProducts />
      <ClassicProduct />
      <NeuralUniverse />
      <FeaturedPosts />
      <Footer />
    </Box>
  );
}