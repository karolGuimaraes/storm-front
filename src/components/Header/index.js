import React, {useState} from 'react';
import styles from './styles.module.css';
import logo from '../../assets/symbol.svg';
import SecurityIcon from '@material-ui/icons/Security';
import PersonIcon from '@material-ui/icons/Person';
import SearchIcon from '@material-ui/icons/Search';
import TuneIcon from '@material-ui/icons/Tune';
import HomeIcon from '@material-ui/icons/Home';
import SettingsIcon from '@material-ui/icons/Settings';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import { Drawer } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import DateRangeIcon from '@material-ui/icons/DateRange';
import HdrStrongIcon from '@material-ui/icons/HdrStrong';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  paper: {
    backgroundColor: '#F5F5F5',
    width: '500px',
  }
}));

export default function Header(props) {
  const classes = useStyles();
  const [openSiderBar, setOpenSiderBar] = useState(false);

  const siderBar = (open) => {
    setOpenSiderBar(open);
  }

  return (
    <header className={styles.header}>
      <Drawer open={openSiderBar} anchor="right" classes={{ paper: classes.paper }}>
        <div className={styles.headerSiderBar}>
          <div className={styles.sideBarLeft}>
            <TuneIcon style={{ color: '#c1c1c1' }} />
            <span>FILTROS</span>
          </div>
          <button onClick={() => siderBar(false)} className={styles.btnClose}>
            <CloseIcon />
          </button>
        </div>
        <div>
          <div className={styles.content}>
            <p>
              Utilize os filtros abaixo para refinar os resultados da tabela,
              clique no botão APLICAR para salvar as alterações.
            </p>
          </div>
          <div className={styles.filter}>
            <DateRangeIcon className={styles.iconSideBar} />
            <span>TODAS AS DATAS DE INCLUSÃO</span>
            <ArrowDropDownIcon className={styles.iconSideBar} />
          </div>
          <div className={styles.filter}>
            <DateRangeIcon className={styles.iconSideBar} />
            <span>TODAS AS DATAS DE ALTERAÇÃO</span>
            <ArrowDropDownIcon className={styles.iconSideBar} />
          </div>
          <div className={styles.filter}>
            <HdrStrongIcon className={styles.iconSideBar} />
            <span>ATIVOS E INATIVOS</span>
            <ArrowDropDownIcon className={styles.iconSideBar} />
          </div>

          <div className={styles.btnApply}>
            <button>
              APLICAR
            </button>
          </div>
        </div>
      </Drawer>

      <div className={styles.headerLeft}>
        <button className={styles.logo}>
          <img src={logo} alt='logo'/>
        </button>
        <span className={styles.separator}></span>
        <button className={styles.btnDefender}>
          <SecurityIcon />
        </button>
        <button className={styles.btnPerson2}>
          <PersonIcon />
        </button>

        <div className={styles.containerSearch}>
          <input className={styles.input} placeholder="Pesquisar..."/>
          <SearchIcon className={styles.icon}/>
        </div>
      </div>

      <div className={styles.headerRight}>
        <button className={styles.btnTune} onClick={(event) => siderBar(true)}>
          <TuneIcon />
        </button>
        <button className={styles.btnPerson}>
          <PersonIcon className={styles.btnIcon}/>
          <span className={styles.addUserText} >INCLUIR USUÁRIO</span>
        </button>
        <span className={styles.separator}></span>
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