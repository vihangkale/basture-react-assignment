//import martine
import { Text, Flex, Avatar, Tooltip, Anchor } from "@mantine/core";
//import icons
import { IconStar } from "@tabler/icons-react";

export default function AvatarWithTitle({ username, website, isFollow }) {
  const imageSrc = `https://api.dicebear.com/7.x/initials/svg?seed=${username}`;
  return (
    <Flex direction="column" rowGap="1rem" justify="center" align="center">
      <Tooltip label={username}>
        <Anchor
          key={website}
          href={"https://" + website}
          target="_blank"
          underline="never"
        >
          <Avatar src={imageSrc} alt={username} size="120px" />
        </Anchor>
      </Tooltip>
      <Text size="1.125rem" fw={500} lh="md">
        {username}
        &nbsp;
        {isFollow && <IconStar size={16} />}
      </Text>
    </Flex>
  );
}
