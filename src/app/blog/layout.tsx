import styles from './page.module.css'

export const metadata = {
  title: 'Blog',
  description: 'Generated by create next app',
}
export default function Layout({ children }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en"> 
      <body>
        <header className={styles.header}>
          <p className={styles.p}>blog/</p>
        </header>
        <main className={styles.main}>
          {children}
        </main>
      </body>
    </html>
  );
}