import styles from "./FooterBrand.module.css";

type FooterBrandPropsType = {
    name: string
    url: string
}

export const FooterBrand =(props: FooterBrandPropsType)=>{
    const {
        name,
        url
    } = props

    return (
        <div className={styles.brand}></div>
    )

}