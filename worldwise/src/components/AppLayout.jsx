import AppNav from "./AppNav";
import Sidebar from "./Sidebar";
import Map from "./Map";
import styles from "./AppLayout.module.css";
import User from "./User";

export default function AppLayOut() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
      <User />
    </div>
  );
}
