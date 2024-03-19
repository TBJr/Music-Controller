// import React, { Component } from "react";
// import RoomJoinPage from "./RoomJoinPage";
// import CreateRoomPage from "./CreateRoomPage";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   Redirect,
// } from "react-router-dom";
//
//
// export default class HomePage extends Component {
//   constructor(props) {
//     super(props);
//   }
//
//   render() {
//     return (
//       <Router>
//         <Switch>
//           <Route exact path="/">
//             <p>This is the home page</p>
//           </Route>
//           <Route path="/join" component={RoomJoinPage} />
//           <Route path="/create" component={CreateRoomPage} />
//         </Switch>
//       </Router>
//     );
//   }
// }


import * as React from 'react';
import {Component} from "react";
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/joy/Link';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';

function LightBulbIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z" />
    </SvgIcon>
  );
}

export default function HomePage() {
    return (
        <Typography sx={{ mt: 6, mb: 3, color: 'text.secondary' }}>
            <LightBulbIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
            {'HomePage: See more '}
            <Link href="">templates</Link>
            <Link component={RoomJoinPage} to="/docs">Read doc</Link>;
            <Link component={CreateRoomPage} to="/docs">Read doc</Link>;
            {' in the Material UI documentation.'}
        </Typography>
    );
}