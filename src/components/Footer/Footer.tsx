import React, { ReactElement } from 'react'
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import { Container, Footer as Foot, Anchor } from "./styles";

// interface Props {
    
// }

function Footer(): ReactElement {
    return (
      <Container>
        <Foot className={styles.footer}>
          <Anchor
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <span className={styles.logo}>
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={72}
                height={16}
              />
            </span>
          </Anchor>
        </Foot>
      </Container>
    );
}

export default Footer
