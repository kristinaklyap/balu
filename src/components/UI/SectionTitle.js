import React from "react";
import classes from "./SectionTitle.module.css";

const SectionTitle = ({ headingLevel = 3, ...props }) => {
  const Tag = `h${headingLevel}`;
  return <Tag className={classes.section_title}>{props.title}</Tag>;
};

export default SectionTitle;
