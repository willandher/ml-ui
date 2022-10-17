import React, { useEffect } from 'react'
import Box from '@mui/material/Box';
import SubTitle from '../atoms/SubTitle'
import {Grid} from '@mui/material';
import { AvatarMl } from '../atoms/AvatarMl';
import {TitleMl} from '../atoms/TitleMl'
import { useGetUserQuery } from '../../store/api';

export const ProfileDescription = ()=> {
  const {data: user, isLoading} = useGetUserQuery(1);  
  if( isLoading ) return;

  return (
      <Box>
        <Grid style={{
          height: 112,
          width: 714,
          background: '#FFFFFF'
        }} container spacing={1}>
          <Grid item xs={2}>
          
            <AvatarMl alt='' src={user.image} style={{margin: 'auto', marginTop: 18}}/>
          </Grid>
          <Grid item xs={6} style={{marginTop: 18}}>
            <TitleMl value= {user.name}/>
            <SubTitle value={user.level}/>
          </Grid>
          <Grid item xs={4}/>
        </Grid>
      </Box>
  )
}
