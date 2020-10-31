import React from 'react';
import styles from './styles.module.css';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import TvIcon from '@material-ui/icons/Tv';
import UpdateIcon from '@material-ui/icons/Update';

export default function Footer () {
  return (
    <div>
      <footer className={styles.footer}>
        <div>
          <div className={styles.divOnAir}>
            <RadioButtonCheckedIcon className={styles.iconOnAir}/>
            <span>No Ar</span>
          </div>
          <div className={styles.info}>
            <TvIcon className={styles.icon}/>
            <span>ENCONTRO - 10:00</span>
          </div>
          <div className={styles.info}>
            <UpdateIcon className={styles.icon}/>
            <span>Última atualização em 10:28</span>
          </div>
        </div>

        <div className={styles.footerRight}>
          <span>Quinta, 30 de Maio de 2019</span>
          <span className={styles.hour}>// 10:32:42</span>
        </div>
      </footer>
    </div>
  )
}