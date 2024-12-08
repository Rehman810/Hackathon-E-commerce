import { Banner } from '../components/banner/page';
import { EditorsPick } from '../components/editorsPick/page';
import { FeaturedProducts } from '../components/featuredProducts/page';
import { Box } from '@mui/material';
import { ClassicProduct } from '../components/classicProduct/page';
import { NeuralUniverse } from '../components/neualUniverse/page';
import { FeaturedPosts } from '../components/featuredPosts/page';

export default function Home() {
  return (
    <Box>
      <Banner bg='banner.png'/>
      <EditorsPick />
      <FeaturedProducts />
      <ClassicProduct />
      <NeuralUniverse />
      <FeaturedPosts />
    </Box>
  );
}
