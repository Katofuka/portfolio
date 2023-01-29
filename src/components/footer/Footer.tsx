import stylesContainer from "../../common/styles/Container.module.css";
import styles from "./Footer.module.css";
import React from "react";
import {FooterBrand} from "./footerBrand/FooterBrand";

export const Footer = () => {
    return (
        <div className={`${stylesContainer.block} ${styles.footerBlock}`}>
            <div className={`${stylesContainer.container} ${styles.footerContainer}`}>

                <h2 className={styles.footerH2}>Anne Poliakova</h2>
                <div className={styles.footerBrandBlock}>
                    <FooterBrand name={'gitHub'} url={'https://github.com/Katofuka'}/>
                    <FooterBrand name={'linkedIn'} url={'https://www.linkedin.com/in/anna-poliakova-0a013420b/'}/>
                    <FooterBrand name={'gitHub'} url={'https://github.com/Katofuka'}/>
                    <FooterBrand name={'linkedIn'} url={'https://www.linkedin.com/in/anna-poliakova-0a013420b/'}/>

                </div>

                <div>&#169;{"2023"} Anne Poliakova</div>
            </div>
        </div>
    )
}