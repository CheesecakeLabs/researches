import { Box } from '@chakra-ui/react';
import { Fragment } from 'react';

import {
  AnimalHealthSolutions,
  ExoticWildlifeCare,
  Formulations,
  HeroSection,
  LearnMoreBanner,
  Library,
  LoginSection,
  Testimonials,
  WhatSTheDifference,
  WildGrowth,
  ZooHeroSection,
} from '../sections';
import type { PagesComponent } from '~/lib/types/pages';

interface RenderComponentsProps {
  pageComponents: PagesComponent[];
}

function RenderComponents({ pageComponents }: RenderComponentsProps) {
  return (
    <Box display="flex" flexDir="column" flex={1}>
      {pageComponents?.map((components, i) => {
        if (components.hero_section) {
          console.log(components.hero_section);
          return (
            <HeroSection
              key="hero-section"
              rightbackgroundImage={
                components.hero_section.right_background_image.url
              }
              animalImages={components.hero_section.animal_images}
              backgroundImage={components.hero_section.background_image.url}
              boldTitle={components.hero_section.bold_title}
              description={components.hero_section.description}
              normalTitle={components.hero_section.normal_title}
              singlePromoImage={components.hero_section.single_promo_image?.url}
            />
          );
        }
        if (components.animal_health_solutions) {
          return (
            <AnimalHealthSolutions
              key="animal-health-solutions"
              data={components.animal_health_solutions}
            />
          );
        }

        if (components.login_section) {
          return (
            <LoginSection key="login-section" data={components.login_section} />
          );
        }

        if (components.testimonials) {
          return (
            <Testimonials key="testimonials" data={components.testimonials} />
          );
        }

        if (components.wild_growth) {
          return <WildGrowth key="wild-growth" data={components.wild_growth} />;
        }

        if (components.learn_more_banner) {
          return (
            <LearnMoreBanner
              key="wild-growth"
              data={components.learn_more_banner}
            />
          );
        }

        if (components.what_s_the_difference) {
          return (
            <WhatSTheDifference
              key="what-s-the-difference"
              data={components.what_s_the_difference}
            />
          );
        }

        if (components.exotic_wildlife_care) {
          return (
            <ExoticWildlifeCare
              key="exotic_wildlife_care"
              data={components.exotic_wildlife_care}
            />
          );
        }

        if (components.library) {
          return <Library key="library" data={components.library} />;
        }

        if (components.zoo_hero_section) {
          return (
            <ZooHeroSection
              key="zoo_hero_section"
              data={components.zoo_hero_section}
            />
          );
        }

        if (components.formulations) {
          return (
            <Formulations key="formulations" data={components.formulations} />
          );
        }

        return <Fragment key={`empty-${i}`} />;
      })}
    </Box>
  );
}

export default RenderComponents;
