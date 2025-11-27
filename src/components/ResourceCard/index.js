import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './styles.module.css';

export function ResourceGrid({children}) {
  return <div className={styles.grid}>{children}</div>;
}

export function ResourceCard({title, author, description, link, icon, tag}) {
  return (
    <Link to={link} className={styles.resourceCard}>
      <div className={styles.cardHeader}>
        <div className={styles.iconWrapper}>
          {icon || '📄'}
        </div>
        <h3 className={styles.title}>{title}</h3>
      </div>
      {author && <div className={styles.author}>by {author}</div>}
      <p className={styles.description}>{description}</p>
      {tag && <span className={styles.tag}>{tag}</span>}
    </Link>
  );
}
