import { Container, Stack, Typography } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Box } from '@mui/system';
import { usePledgesCount } from 'store/pledge';
import Image from 'next/image';
import { images } from '../constants';
import PledgeDocument from 'components/PledgeDocument';
import SlideUp from './SlideUp';

export default function HomeMainSection() {
  const { data: count } = usePledgesCount();

  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <div className="flex justify-center items-center w-full md:h-full bg-desk">
        <div className="flex md:flex-row flex-col justify-between items-center w-11/12">
          <div className="flex flex-col justify-start mt-32 md:mt-60 md:mb-44 mb-16">
            <div className="flex flex-col justify-start relative text-center md:text-left font-martel lg:text-7xl md:text-5xl text-[44px] md:font-bold font-extrabold">
              Make a pledge for India&apos;s{' '}
              <div className="relative overflow-visible flex justify-center md:justify-start">
                <div className=" text-oranges absolute inline-block z-10 md:mt-5 mt-2">
                  #100bhagya
                </div>
                <div className="absolute inline-block top-7 md:left-0 md:top-12 -z-5">
                  <Image
                    src={images.green}
                    alt="green"
                    width={images.green.width}
                    height={images.green.height}
                  />
                </div>
              </div>
            </div>
            <div className="mt-36 font-gbasic text-xl text-center md:text-left md:text-3xl md:w-[750px] font-normal">
              25 years is long enough to make a meaningful impact but not long
              enough to wait and watch
            </div>
            <div className=" flex flex-row md:justify-start justify-around mt-12">
              <PledgeDocument but={1} />
              <div className="flex flex-row md:ml-10 font-inter text-base px-6 md:px-10 py-3 rounded-sm border border-solid border-black hover:cursor-pointer">
                Discover
                <ArrowRightAltIcon />
              </div>
            </div>
          </div>
          <div className="mt-32 hidden md:block">
            <Image src={images.india} alt="India" />
          </div>
          {/* <div className="md:hidden">
            <Image src={images.kids} alt="kids" />
          </div> */}
        </div>
      </div>
    </>
  );
}

{
  /* <Container sx={{ position: 'relative', pt: 20, pb: { md: 12 } }}>
        <Box
          sx={{
            position: 'relative',
            top: { xs: '30%', sm: '50%' },
            left: '50%',
            width: '90%',
            height: '90%',
            zIndex: -100,
            transform: 'translate(-50%, -50%)',
            '& img': {
              WebkitFilter:
                'contrast(0) sepia(0) hue-rotate(180deg) saturate(0%) brightness(170%)',
              filter:
                'contrast(0) sepia(0) hue-rotate(180deg) saturate(0%) brightness(170%)',
              opacity: 1,
            },
          }}
        > */
}
{
  /* <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
            <Image
              src={india}
              alt="India Landscape"
              layout="fill"
              objectFit="contain"
            />
          </Box> */
}
{
  /* </Box>

        <Typography
          variant="h1"
          component="div"
          textAlign="center"
          sx={{
            mt: -2,
            textShadow:
              '-1px 0px 0 white,' +
              ' 0px -1px 0 white,' +
              ' 0px 1px 0 white,' +
              ' 1px 0px 0 white',
            fontSize: {
              xs: '2.5rem',
              sm: '3rem',
              md: '5rem',
            },
          }}
        >
          Make a Pledge <br />
          for{' '}
          <Typography
            variant="h1"
            component="span"
            sx={{
              fontSize: {
                xs: '2.5rem',
                sm: '3rem',
                md: '5rem',
              },
              color: '#FF7722',
            }}
          >
            #100bhagya
          </Typography>
        </Typography>
        <Typography
          variant="h6"
          component="div"
          textAlign="center"
          sx={{
            fontWeight: 'medium',
            mt: 1,
            textShadow:
              '-1px 0px 0 white,' +
              ' 0px -1px 0 white,' +
              ' 0px 1px 0 white,' +
              ' 1px 0px 0 white',
            color: 'black',
          }}
        >
          25 years is long enough to create a <br />
          meaningful impact, but not long <br />
          enough to wait and watch.
        </Typography>

        <Stack alignItems="center" sx={{ mt: 2 }}>
          
        </Stack>

        <Stack alignItems="center" sx={{ mt: 4, pb: 6 }}>
          <Typography
            variant="h6"
            color="primary"
            textAlign="center"
            sx={{
              fontWeight: 'normal',
              bgcolor: 'primary.50',
              py: 1,
              px: 4,
              borderRadius: 2,
            }}
          >
            {count ?? 0} pledges made till now
          </Typography>
        </Stack>
      </Container> */
}
{
  /* <PledgeDocument but={2} /> */
}
