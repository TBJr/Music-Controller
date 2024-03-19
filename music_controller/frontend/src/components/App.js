// import React, { Component } from "react";
// import { render } from "react-dom";
// import HomePage from "./HomePage";
//
// export default class App extends Component {
//   constructor(props) {
//     super(props);
//   }
//
//   render() {
//     return (
//         <div className="center">
//           <HomePage />
//         </div>
//     );
//   }
// }
//
// const appDiv = document.getElementById("app");
// render(<App />, appDiv);

import * as React from 'react';
import {Component} from "react";
import {render} from "react-dom";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import HomePage from "./HomePage"

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Evolvtech Limited
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

// export default function App() {
export default class App extends Component {
    render() {
        return (
            <Container maxWidth="sm">
                <Box sx={{ my: 4 }}>
                    <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
                        Music Controller with Python and React App
                    </Typography>
                    <HomePage />
                    <Copyright />
                </Box>
            </Container>
        );
    }
}