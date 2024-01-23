import AppNav from "./AppNav";
import Sidebar from "./Sidebar";
import Map from "./Map";
import styles from "./AppLayout.module.css";

export default function AppLayOut() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
    </div>
  );
}
