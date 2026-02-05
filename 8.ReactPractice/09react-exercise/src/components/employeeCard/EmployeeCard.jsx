import React from "react";
import styles from "./EmployeeCard.module.css";
import Button from "../button/Button";

export default function EmployeeCard({ name, salary, isActive }) {
  return (
    <>
      <div className={styles.card}>
        <h3 className={styles.title}>{name}</h3>
        <p className={styles.salary}>{salary}</p>
        <p className={isActive ? styles.active : styles.inActive}>
          {isActive ? "Avtive" : "Inactive"}
        </p>

        <Button>View Profile</Button>
        <Button variant="danger">Delete</Button>
      </div>
    </>
  );
}
