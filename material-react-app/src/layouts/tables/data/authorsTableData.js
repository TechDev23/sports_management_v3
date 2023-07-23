/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Dashboard 2 React components

import { useState } from "react";

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";

import { IconButton } from "@mui/material";
import {Icon} from "@mui/material";
// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";


export default function data() {


  const avatars = [team2, team3, team4];

  const [rowData, setRowData] = useState([
    {
      user: 'John Michael',
      email: 'john@creative-tim.com',
      requested: '23/04/18',
      
    },
    {
      user: 'Alexa Liras',
      email: 'alexa@creative-tim.com',
      requested: '11/01/19',
      
    },
    {
      user: 'Laurent Perrier',
      email: 'laurent@creative-tim.com',
      requested: '19/09/17',
      
    },
    {
      user: 'Michael Levi',
      email: 'michael@creative-tim.com',
      requested: '24/12/08',
      
    },
    {
      user: 'Richard Gran',
      email: 'richard@creative-tim.com',
      requested: '04/10/21',
      
    },
    {
      user: 'Miriam Eric',
      email: 'miriam@creative-tim.com',
      requested: '14/09/20',
      
    },
  ]);

  const urlToOpen = "https://www.google.com";
  const handleDocView = () => {

    window.open(urlToOpen, "_blank");
  }

  const handleApprove = () => {

    // handling the acceptance of documents


    console.log("User is approved")
  }

  const handleSentBack = () => {

    // handling the acceptance of documents


    console.log("User is sentBack")
  }


  const Author = ({ image, name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={team2} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );

  const Job = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
      <MDTypography variant="caption">{description}</MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "User", accessor: "author", width: "45%", align: "left" },
      { Header: "Status", accessor: "status", align: "center" },
      { Header: "Requested", accessor: "requested", align: "center" },
      { Header: "Documents", accessor: "documents", align: "center"},
      { Header: "Action", accessor: "action", align: "center" },
    ],

    rows: rowData.map((row, index) => (

      {
      author: <Author image={team2} name={row.user} email={row.email} />,
      // function: <Job title="Manager" description="Organization" />,
      status: (
        <MDBox ml={-1}>
          <MDBadge badgeContent="pending" color="warning" variant="gradient" size="md"/>
        </MDBox>
      ),
      requested: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          <p>{row.requested}</p>
        </MDTypography>
      ),
      documents: (
        <IconButton size="small" aria-label="document" color="inherit" onClick={handleDocView}>
          <Icon fontSize="small">description</Icon>
        </IconButton>
      ),
      action: (
        <div>
          <MDBadge badgeContent="Approve" color="success" variant="gradient" size="lg" onClick={handleApprove} />
          <MDBadge badgeContent="Sent Back" color="error" variant="gradient" size="lg" onClick={handleSentBack} />
        </div>
      ),
    }
    )
    )
  
  };
}
