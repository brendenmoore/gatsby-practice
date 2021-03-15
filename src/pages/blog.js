import React from "react"
import Layout from "../components/layout"
import * as styles from "../components/blog.module.css"

const blog = () => {
  return (
    <Layout>
      <div className={styles.page}>
        <h1>This is our blog page</h1>
        <p className={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi
          perspiciatis ea voluptatibus modi? Hic quidem, nostrum id laborum sit
          aperiam repudiandae dolorum, voluptates, in itaque quis neque quam
          maxime quaerat?
        </p>
      </div>
    </Layout>
  )
}

export default blog
