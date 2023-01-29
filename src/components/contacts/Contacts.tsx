import React from "react";
import styles from './Contacts.module.css'
import stylesContainer from "../../common/styles/Container.module.css";
import stylesButton from "../../common/styles/Button.module.css";

export const Contacts = () => {
    return (
        <div id={"Contacts"} className={`${stylesContainer.block} ${styles.contactsBlock}`}>
            <div className={`${stylesContainer.container} ${styles.contactsContainer}`}>

                <div className={styles.header}>
                    <h2>Contacts</h2>
                </div>

                <form className={styles.formInput}>
                    <input className={styles.contactInput} type={""} name={""} value={"Ваш e-mail..."}></input>
                    <input className={styles.contactInput} type={""} name={""} value={"Ваш e-mail..."}></input>
                    <textarea className={styles.contactTextArea}></textarea>
                </form>


                <button onClick={() => console.log('click')}
                        className={`${stylesButton.button } ${styles.openProjectButton}`}>
                    Send
                </button>
            </div>
        </div>
    )
}