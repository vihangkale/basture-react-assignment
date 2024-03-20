//import martine
import { Flex, Button } from "@mantine/core";
//import icons
import { IconTrash, IconUserPlus, IconUsersMinus } from "@tabler/icons-react";
//import styles
import styles from "../styles/profileCard.module.css";
export default function ActionButtons({
  id,
  isFollow,
  handleFollowUser,
  handleDeleteUser,
}) {
  const leftSection = isFollow ? (
    <IconUsersMinus size={16} color="black" />
  ) : (
    <IconUserPlus size={16} />
  );
  return (
    <Flex columnGap={4} justify="center" align="center" mt={15}>
      <Button
        variant={isFollow ? "default" : ""}
        color="blue"
        fullWidth
        leftSection={leftSection}
        onClick={() => handleFollowUser(id)}
      >
        {isFollow ? "Unfollow" : "Follow"}
      </Button>
      <Button
        className={styles.deleteBtn}
        variant="default"
        fullWidth
        leftSection={<IconTrash size={16} color="#228be6" />}
        onClick={() => handleDeleteUser(id)}
      >
        Delete
      </Button>
    </Flex>
  );
}
