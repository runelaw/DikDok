// import React from 'react';
// import { useQuery } from 'react-query';
// import Axios from 'axios';

// const Twitter = (props) => {
//   const { data: tweet } = useQuery({
//     queryKey: ['twit'],
//     queryFn: getTweets,
//     initialData: props.tweets,
//   });

//   return <div>{tweet?.statuses?.text}</div>;
// };

// function getTweets() {
//   const tweet = Axios.get(
//     'https://api.twitter.com/1.1/search/tweets.json?q=%23100bhagya&result_type=latest',
//     {
//       headers: {
//         Authorization:
//           'Bearer "AAAAAAAAAAAAAAAAAAAAABdeigEAAAAAU5He6%2Buxbl2ZQsKRXjYTlKVZt88%3DpOyIl3KpLWZERSWL9gSGILrypLXxnHhK64kolqwYSnjPGFKZTo"',
//       },
//     }
//   ).then((res) => res.data);

//   return tweet;
// }

// export async function getServerSideProps(context) {
//   const tweets = await getTweets();
//   return {
//     props: { tweets },
//   };
// }

// export default Twitter;

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Twitter = () => {
  return (
    <div className="h-9/12">
      <Swiper
        spaceBetween={100}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <blockquote className="twitter-tweet">
            <p lang="en" dir="ltr">
              Encourage all friends and family to support great work by ATMA
              (incubator for education NGOs), as
              <a href="https://twitter.com/india100bhagya?ref_src=twsrc%5Etfw">
                @india100bhagya
              </a>
              helps them raise funds for their work to *build NGOs building a
              bright future of our country this Diwali* 🇮🇳✨
              <a href="https://t.co/U4hSU3p1jm">https://t.co/U4hSU3p1jm</a>
              <a href="https://twitter.com/nitish_mehta?ref_src=twsrc%5Etfw">
                @nitish_mehta
              </a>
              <a href="https://twitter.com/tprateekrao?ref_src=twsrc%5Etfw">
                @tprateekrao
              </a>
            </p>
            &mdash; Anirudh Verma (@aniruddha_verma)
            <a href="https://twitter.com/aniruddha_verma/status/1582381664537546752?ref_src=twsrc%5Etfw">
              October 18, 2022
            </a>
          </blockquote>
          <script
            async
            src="https://platform.twitter.com/widgets.js"
            charSet="utf-8"
          ></script>
        </SwiperSlide>
        <SwiperSlide>
          <blockquote className="twitter-tweet">
            <p lang="en" dir="ltr">
              <a href="https://twitter.com/hashtag/IndiaAt75?src=hash&amp;ref_src=twsrc%5Etfw">
                #IndiaAt75
              </a>
              is special
              <br />
              With an average of ~28 years, the next 25 years will coincide with
              the most active years of our lives. We will all play a role in
              shaping
              <a href="https://twitter.com/hashtag/India100?src=hash&amp;ref_src=twsrc%5Etfw">
                #India100
              </a>{' '}
              !!
              <br />
              <br />
              How will we make the most of this opportunity?
              <br />
              <a href="https://twitter.com/hashtag/100bhagya?src=hash&amp;ref_src=twsrc%5Etfw">
                #100bhagya
              </a>
              <a href="https://twitter.com/india100bhagya?ref_src=twsrc%5Etfw">
                @india100bhagya
              </a>
            </p>
            &mdash; Anirudh Verma (@aniruddha_verma)
            <a href="https://twitter.com/aniruddha_verma/status/1559842923461505024?ref_src=twsrc%5Etfw">
              August 17, 2022
            </a>
          </blockquote>
          <script
            async
            src="https://platform.twitter.com/widgets.js"
            charSet="utf-8"
          ></script>
        </SwiperSlide>
        {/* <SwiperSlide>
          
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default Twitter;
