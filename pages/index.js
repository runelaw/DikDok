import HomeMainSection from 'components/HomeMainSection';
import Navigation from 'components/Navigation';
import Head from 'next/head';
import WhatIs100bhagya from 'components/WhatIs100bhagya';
import Help from 'components/Help';

export default function Home() {
  return (
    <>
      <Navigation />

      <Head>
        <title>100bhagya - Make a Pledge for #India100</title>
      </Head>

      <HomeMainSection />
      <Help />
      <WhatIs100bhagya />
    </>
  );
}
