//import martine
import { Card } from "@mantine/core";
//improt styles
import styles from "../styles/profileCard.module.css";
//import components
import LinksWithIcons from "./linksWithIcons";
import AvatarWithTitle from "./avatarWithTitle";
import ActionButtons from "./ActionButtons";
import CardLoader from "./cardLoader";

export default function ProfileCard({
  dataObj,
  handleFollowUser,
  handleDeleteUser,
  isLoading,
}) {
  const { id, username, email, phone, website, isFollow } = dataObj ?? {};
  return (
    <Card
      key={id}
      className={styles.profileCard}
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
    >
      {isLoading ? (
        <CardLoader isLoading={isLoading} />
      ) : (
        <>
          <AvatarWithTitle
            username={username}
            website={website}
            isFollow={isFollow}
          />
          <LinksWithIcons email={email} phone={phone} website={website} />
          <ActionButtons
            id={id}
            isFollow={isFollow}
            handleFollowUser={handleFollowUser}
            handleDeleteUser={handleDeleteUser}
          />
        </>
      )}
    </Card>
  );
}
