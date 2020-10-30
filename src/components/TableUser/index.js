import React, { useState }  from 'react';
import styles from './styles.module.css';
import users from '../../mocks/users.json';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import {
  TableHead,
  Checkbox,
  TableCell,
  TableBody,
  Table,
  TableRow,
} from '@material-ui/core';

export default function TableUser () {
  const [selected, setSelected] = useState([]);

  const isSelected = (username) => {
    return selected.indexOf(username) !== -1
  }

  const onClickHandler = (username) => {
    const selectedIndex = selected.indexOf(username);
    if (selectedIndex === -1) {
      setSelected(username);
    } else  {
      setSelected([]);
    }
  }
  
  return (
    <>
      <div className={styles.containerTable}>
        <Table className={styles.contentTable}>
          <TableHead>
            <TableRow>
              <TableCell align="center"></TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="left">USUÁRIO</TableCell>
              <TableCell align="left">EMAIL</TableCell>
              <TableCell align="center">DATA DE INCLUSÃO</TableCell>
              <TableCell align="center">DATA DE ALTERAÇÃO</TableCell>
              <TableCell align="center">REGRAS</TableCell>
              <TableCell align="center">STATUS</TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center">AÇÕES</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {users.map((user, index) => { return(
              <TableRow
                hover
                onClick={(event) => onClickHandler(user.username)}
                role="checkbox"
                aria-checked={isSelected(user.username)}
                tabIndex={-1}
                key={user.username}
                selected={isSelected(user.username)}
                style={{
                  backgroundColor: index % 2 === 0 ? '#F5F5F5' : '#E9E9E9',
                }}
                className={isSelected(user.username) ? styles.selected : styles.row }
              >
              <div className="overlay"></div>
              <TableCell>
                <Checkbox checked={isSelected(user.username)} />
              </TableCell>
              <TableCell align="left">{user.username}</TableCell>
              <TableCell align="left">{user.email}</TableCell>
              <TableCell align="center">{user.inclusion}</TableCell>
              <TableCell align="center">{user.change}</TableCell>
              <TableCell align="center">{user.rules}</TableCell>
              { user.status ?
                <TableCell align="center" style={{ color: 'green' }}>
                  ATIVO
                </TableCell>
              :
                <TableCell align="center" style={{ color: 'red' }}>
                  INATIVO
                </TableCell>
              }

              <TableCell align="center" className={isSelected(user.username) ? styles.utilsSelected : styles.utils }>
                <button>
                  <DeleteIcon />
                </button>
                <button>
                  <EditIcon />
                </button>
              </TableCell>

              <TableCell align="center">
                <button style={{border:'none',cursor: 'pointer'}}>
                  <MoreHorizIcon />
                </button>
              </TableCell>
            </TableRow>
            )})}
          </TableBody>
        </Table>
      </div>
      <div className={styles.containerPagination}>
        <button className={styles.btnPage}>Primeiro</button>
        <button className={styles.btnPage}>Anterior</button>
        <button variant="contained" color="secondary" className={styles.current}>
          1
        </button>
        <button className={styles.btnPage}>Próximo</button>
        <button className={styles.btnPage}>Último</button>
      </div>
    </>
  )  
}