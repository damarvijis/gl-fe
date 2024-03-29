import Head from "next/head"
import { Inter } from "next/font/google"
import styles from "@/styles/Home.module.css"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.center}>
          <p>
            Hello! Welcome to tech talk
          </p>
          <code className={styles.code}>A Journey into DevOps and infrastructure</code>
          <p>
            with Damar Jati Sribantolo
          </p>
          <p>
            2024
          </p>
        </div>

      </main>
    </>
  )
}
