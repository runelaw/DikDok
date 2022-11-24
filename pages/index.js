import HomeMainSection from 'components/HomeMainSection';
import Navigation from 'components/Navigation';
import Head from 'next/head';
import WhatIs100bhagya from 'components/WhatIs100bhagya';
import Help from 'components/Help';
import Footer from 'components/Footer';
import Slider from 'components/Slider';

export default function Home() {
  return (
    <>
      <Head>
        <title>100bhagya - Make a Pledge for #India100</title>
      </Head>
      <div className="md:bg-desk">
        <Navigation />
        <HomeMainSection />
        <Help />
        <WhatIs100bhagya />
        <Footer />
      </div>
    </>
  );
}
