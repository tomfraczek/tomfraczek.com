import { MainLogo } from '@/app/components/mainLogo';
import { motion } from 'framer-motion';
import styled from 'styled-components';
// import { useTranslations } from 'next-intl';
import { MAIN_NAVIGATION, LNGS } from './navMenu.constants';
import { OFFERS } from '@/app/global/menuVariables';
import {
  NavMenuContainer,
  NavigationContainer,
  NavigationHeader,
  variants,
  BodyContainer,
  NavigationBody,
  Subheader,
  MenuContainer,
  MenuItem,
  NavigationContainerSmall,
  MenuContainerSmall,
  MenuSmall,
  CountryIcon,
} from './navMenu.styles';
import Link from 'next/link';

type NavMenuProps = {
  isOpen: boolean;
  toggleMenu: () => void;
};

export function NavMenu({ isOpen, toggleMenu }: NavMenuProps) {
  // const t = useTranslations();
  // const { resolvedLanguage } = i18n;
  return (
    <NavMenuContainer>
      <NavigationContainer>
        <NavigationHeader
          initial={false}
          animate={isOpen ? 'show' : 'hide'}
          variants={{
            show: {
              ...variants.show,
              transition: { delay: 0.4, duration: 0.2 },
            },
            hide: {
              ...variants.hide,
              transition: { delay: 0, duration: 0.5 },
            },
          }}
        >
          <MainLogo toggleMenu={toggleMenu} />
        </NavigationHeader>
        <BodyContainer>
          <NavigationBody>
            <Subheader
              initial={false}
              animate={isOpen ? 'show' : 'hide'}
              variants={{
                show: {
                  ...variants.show,
                  transition: { delay: 0.8, duration: 0.2 },
                },
                hide: {
                  ...variants.hide,
                  transition: { delay: 0, duration: 0.5 },
                },
              }}
            >
              navigation
            </Subheader>
            <MenuContainer>
              {MAIN_NAVIGATION.map(({ title, url }, i) => (
                <MenuItem
                  initial={false}
                  animate={isOpen ? 'show' : 'hide'}
                  variants={{
                    show: {
                      ...variants.show,
                      transition: { delay: i * 0.2, duration: 0.2 },
                    },
                    hide: {
                      ...variants.hide,
                      transition: { delay: 0, duration: 0.5 },
                    },
                  }}
                  key={`${title}${url}`}
                >
                  <Link href={url} onClick={() => toggleMenu()}>
                    {title}
                  </Link>
                </MenuItem>
              ))}
            </MenuContainer>
          </NavigationBody>

          <NavigationContainerSmall>
            <NavigationBody>
              <Subheader
                initial={false}
                animate={isOpen ? 'show' : 'hide'}
                variants={{
                  show: {
                    ...variants.show,
                    transition: { delay: 0.8, duration: 0.2 },
                  },
                  hide: {
                    ...variants.hide,
                    transition: { delay: 0, duration: 0.5 },
                  },
                }}
              >
                offers
              </Subheader>
              <MenuContainerSmall>
                {OFFERS.map(({ title, url }) => (
                  <MenuSmall
                    initial={false}
                    animate={isOpen ? 'show' : 'hide'}
                    variants={{
                      show: {
                        ...variants.show,
                        transition: { delay: 0.8, duration: 0.2 },
                      },
                      hide: {
                        ...variants.hide,
                        transition: { delay: 0, duration: 0.5 },
                      },
                    }}
                    key={`${title}${url}`}
                  >
                    <Link href={url}>{title}</Link>
                  </MenuSmall>
                ))}
              </MenuContainerSmall>
            </NavigationBody>

            <NavigationBody>
              <Subheader>languages</Subheader>
              {/* <MenuContainerSmall>
                {LNGS.map(
                  ({ nativeName, code, icon }) =>
                    code !== resolvedLanguage && (
                      <CountryIcon
                        initial={false}
                        animate={isOpen ? 'show' : 'hide'}
                        variants={{
                          show: {
                            ...variants.show,
                            transition: { delay: 0.8, duration: 0.2 },
                          },
                          hide: {
                            ...variants.hide,
                            transition: { delay: 0, duration: 0.5 },
                          },
                        }}
                        key={nativeName}
                        src={icon}
                        alt={nativeName}
                        onClick={() => i18n.changeLanguage(code)}
                      />
                    )
                )}
              </MenuContainerSmall> */}
            </NavigationBody>
          </NavigationContainerSmall>
        </BodyContainer>
      </NavigationContainer>
    </NavMenuContainer>
  );
}
