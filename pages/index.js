import { Container, Stack, Box, Typography } from '@mui/material';
import HomeMainSection from 'components/HomeMainSection';
import Navigation from 'components/Navigation';
import PledgeCard from 'components/PledgeCard';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Navigation position="fixed" />

      <Head>
        <title>100bhagya - Make a Pledge for #India100</title>
      </Head>

      <HomeMainSection />
      <Container sx={{ pb: 8 }}>
        <Typography variant="h5" component="div" sx={{ mt: 8, mb: 1 }}>
          What is 100bhagya (India@100)?
        </Typography>
        <Typography variant="h6" component="p" sx={{ fontWeight: 400 }}>
          India celebrated its 75th Independence Day on Aug 15, 2021. In 25
          years, we celebrate India at 100!
        </Typography>
        <Typography
          variant="h6"
          component="p"
          sx={{ fontWeight: 400, mt: 0.25 }}
        >
          The next 25 years of our active lives coincide with the 25 years to
          India at 100.
        </Typography>
        <Typography
          variant="h6"
          component="p"
          color="primary"
          sx={{ mt: 0.25 }}
        >
          How will we contribute?
        </Typography>

        <Typography
          variant="h5"
          component="div"
          sx={{ mt: { xs: 8, md: 12 }, mb: 3 }}
        >
          Top Initiatives
        </Typography>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={4}>
          <PledgeCard
            title="To promote education among the underprivileged."
            description="Their development program includes Education, health, livelihood for children and women, provision to be equally affected by lack of resources."
            tags={['Education', 'Child Welfare']}
          />
          <PledgeCard
            title="Supports education for underprivileged girls in India.."
            description="Project Nani Kali educated girls and women to influence India in the long run positively."
            tags={['Education', 'Women']}
          />
        </Stack>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} mt={4}>
          <PledgeCard
            title="Online donation platform for NGOs."
            description="As a web portal, it helps raise funds and contributions from individuals in India and around the world and then distributes these donations to trusted NGOs."
            tags={['Donation', 'NGO']}
          />
          <PledgeCard
            title="Improve standard of living for Elderly."
            description="HelpAge is taking action against universal, pension, healthcare, Elder Abuse at the national, state and social levels with the central and state governments and advocates for the needy."
            tags={['Elders', 'Healthcare']}
          />
        </Stack>
      </Container>
    </>
  );
}
