import React from 'react';
import styles from './styles.module.css';
import logo from '../../assets/symbol.svg';
import SecurityIcon from '@material-ui/icons/Security';
import PersonIcon from '@material-ui/icons/Person';
import SearchIcon from '@material-ui/icons/Search';
import TuneIcon from '@material-ui/icons/Tune';
import HomeIcon from '@material-ui/icons/Home';
import SettingsIcon from '@material-ui/icons/Settings';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';

export default class Header extends React.Component {
  render() {
    return (
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <button className={styles.logo}>
            <img src={logo} alt='logo'/>
          </button>
          <span className={styles.pipe}></span>
          <button className={styles.btnDefender}>
            <SecurityIcon />
          </button>
          <button className={styles.btnPerson2}>
            <PersonIcon />
          </button>

          <div className={styles.containerSearch}>
            <input className={styles.input} placeholder="Pesquisar..."/>
            <SearchIcon />
          </div>
        </div>

        <div className={styles.headerRight}>
          <button className={styles.btnTune}>
            <TuneIcon />
          </button>
          <button className={styles.btnPerson}>
            <PersonIcon  />
            <span className={styles.addUserText}>INCLUIR USUÁRIO</span>
          </button>
          <span className={styles.pipe}></span>
          <button className={styles.icon}>
            <HomeIcon />
          </button>
          <button className={styles.icon}>
            <SettingsIcon />
          </button>
          <button className={styles.icon}>
            <PowerSettingsNewIcon />
          </button>
        </div>
      </header>
    )
  }
}