import HomeMainSection from 'components/HomeMainSection';
import Navigation from 'components/Navigation';
import Head from 'next/head';
import WhatIs100bhagya from 'components/WhatIs100bhagya';

export default function Home() {
  return (
    <>
      <Navigation position="fixed" />

      <Head>
        <title>100bhagya - Make a Pledge for #India100</title>
      </Head>

      <HomeMainSection />
      <WhatIs100bhagya />
    </>
  );
}
