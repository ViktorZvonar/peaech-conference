import Container from './Container/Container';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./Home/Home'));
const Speakers = lazy(() => import('./Speakers/Speakers'));
const Materials = lazy(() => import('./Materials/Materials'));

export const App = () => {
  return (
    <>
      <Suspense>
        <Header />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/speakers" element={<Speakers />} />
            <Route path="/proceedings" element={<Materials />} />
          </Routes>
        </Container>
        <Footer />
      </Suspense>
    </>
  );
};
