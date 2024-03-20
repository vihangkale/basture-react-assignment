//import icons
import { IconWorld, IconPhoneCall, IconAt } from "@tabler/icons-react";
//import martine
import { Flex, Anchor } from "@mantine/core";
//import styles
import styles from "../styles/profileCard.module.css";

export default function LinksWithIcons({ email, phone, website }) {
  const linksData = [
    {
      text: email,
      href: "mailto:" + email,
      icon: <IconAt size={16} color="gray" stroke={1.5} />,
    },
    {
      text: phone,
      href: "tel:" + phone,
      icon: <IconPhoneCall size={16} color="gray" stroke={1.5} />,
    },
    {
      text: website,
      href: "https://" + website,
      icon: <IconWorld size={16} color="gray" stroke={1.5} />,
    },
  ];
  return (
    <Flex mt={5} direction="column" rowGap={5}>
      {linksData?.map(({ text, href, icon }) => (
        <Flex key={href} columnGap={5} align="center">
          {icon}
          <Anchor
            key={href}
            className={styles.infoLink}
            href={href}
            target="_blank"
            underline="hover"
          >
            {text}
          </Anchor>
        </Flex>
      ))}
    </Flex>
  );
}
