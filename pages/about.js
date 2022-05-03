import Image from "next/image";

import styles from "../styles/About.module.css";

export default function About() {
  return (
    <div className={styles.about}>
      <h1>Sobre o projeto</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        dignissim tellus ex, porta maximus est egestas ac. In in efficitur ante.
        Praesent mollis nisl nec mauris finibus, ac rutrum quam tempus. Nam ac
        sapien eget risus volutpat congue. Ut dignissim faucibus ipsum eget.
      </p>
      <Image
        src="/images/charizard.png"
        width="300px"
        height="300px"
        alt="Charizard"
      />
    </div>
  );
}
