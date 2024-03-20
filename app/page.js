"use client";
import styles from "./styles/page.module.css";
import ProfileCards from "./components/profileCards";
export default function Home() {
  return (
    <main className={styles.main}>
      <ProfileCards />
    </main>
  );
}
