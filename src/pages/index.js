import React from "react";
import Filter from "../containers/filter";
import Header from "../containers/header";
import SidebarMenu from "../containers/sidebar-menu";
import Table from "../containers/table";
import styles from "./clients.module.css";

function ClientsPage() {
  return (
    <>
      <div style={{ height: "100vh" }}>
        <SidebarMenu />
        <div className={styles.wrapper}>
          <Header />
          <Filter></Filter>
          <Table></Table>
        </div>
      </div>
    </>
  );
}

export default ClientsPage;
