//import react
import { useEffect, useState } from "react";
//import martine
import { Grid, Box } from "@mantine/core";
//import third party libraries
import axios from "axios";
//import components
import ProfileCard from "../components/profileCard";
//improt styles
import styles from "../styles/profileCard.module.css";
export default function ProfileCards() {
  const [userData, setUserData] = useState([]);
  const [isloading, setisloading] = useState(false);
  useEffect(() => getUserData(), []);
  function getUserData() {
    setisloading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(function (response) {
        if (response.status === 200) {
          const responseData = response.data.map((resObj) => ({
            ...resObj,
            isFollow: false,
          }));
          setUserData(responseData);
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        setisloading(false);
      });
  }
  const handleFollowUser = (id) =>
    setUserData((prevData) =>
      prevData.map((prevObj) =>
        prevObj.id === id
          ? { ...prevObj, isFollow: !prevObj.isFollow }
          : prevObj
      )
    );

  const handleDeleteUser = (id) =>
    setUserData((prevData) => prevData.filter((prevObj) => prevObj.id !== id));
  console.log(userData, "ISFOLLOW");
  return (
    <Box className={styles.profileCardsContainer}>
      <Grid>
        {userData?.map((dataObj) => (
          <Grid.Col key={dataObj?.id} span={{ base: 12, md: 6, lg: 3 }}>
            <ProfileCard
              key={dataObj?.id}
              dataObj={dataObj}
              handleFollowUser={handleFollowUser}
              handleDeleteUser={handleDeleteUser}
            />
          </Grid.Col>
        ))}
      </Grid>
    </Box>
  );
}
