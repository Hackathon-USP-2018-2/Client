import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import AssignmentIcon from '@material-ui/icons/Assignment';

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Relatórios da USP</ListSubheader>
    <ListItem button component='a' href='https://uspdigital.usp.br/anuario/AnuarioControle' target='_blank'>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary='Anuário Estatístico' />
    </ListItem>
    <ListItem button component='a' href='http://usp.br/codage/' target='_blank'>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary='CODAGE' />
    </ListItem>
    <ListItem button component='a' href='http://usp.br/da/' target='_blank'>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary='Depto. Administração' />
    </ListItem>
    <ListItem button component='a' href='http://usp.br/df2/' target='_blank'>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary='Depto. Finanças' />
    </ListItem>
    <ListItem button component='a' href='http://usp.br/drh/' target='_blank'>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary='Depto. RH' />
    </ListItem>
  </div>
);
