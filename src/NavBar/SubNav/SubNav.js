import React from "react";
import { SubNavItem } from "./SubNavItem/SubNavItem";
import styles from "./SubNav.module.css";

export function SubNav() {
  return (
    <div className={styles.container}>
      <div className={styles["sub-nav"]}>
        <div>
          <SubNavItem label="Restaurant" icon="fas fa-utensils" />
          <SubNavItem label="Home Services" icon="fas fa-home" />
          <SubNavItem label="Auto Services" icon="fas fa-car" />
          <SubNavItem label="More" icon="fas fa-info-circle" showRightBorder />
        </div>
        <div>
          <button
            className={`button ${styles["sub-nav-button"]} ${styles["omit-right-border"]}`}
          >
            <span className="icon">
              <i className="fas fa-pen" />
            </span>
            <span>Write Review</span>
          </button>
          <button className={`button ${styles["sub-nav-button"]}`}>
            <span className="icon">
              <i className="fas fa-hotel" />
            </span>
            <span>For Bussinesses</span>
          </button>
        </div>
      </div>
    </div>
  );
}
