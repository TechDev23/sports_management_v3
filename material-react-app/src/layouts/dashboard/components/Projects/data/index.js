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

// @mui material components
import Tooltip from "@mui/material/Tooltip";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDProgress from "components/MDProgress";

// Images
import logoXD from "assets/images/small-logos/logo-xd.svg";
import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";
import logoSlack from "assets/images/small-logos/logo-slack.svg";
import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
import logoJira from "assets/images/small-logos/logo-jira.svg";
import logoInvesion from "assets/images/small-logos/logo-invision.svg";
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";



export default function data() {

  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;


  const tourData = [
    {
      tournament: 'Badminton Championship',
      date: date,
      progress: 60,
      role: 'Admin'
    },
    {
      tournament: 'Cricket Championship',
      date: date,
      progress: 85,
      role: 'Organizer',
    },
    {
      tournament: 'Volleyball Championship',
      date: date,
      progress: 70,
      role: 'Admin'
    },
    {
      tournament: 'Fottball Championship',
      date: date,
      progress: 50,
      role: 'Admin'
    },
    {
      tournament: 'Table Tennis',
      date: date,
      progress: 65,
      role: 'Organizer'
    },
  ];

  const avatars = (members) =>
    members.map(([image, name]) => (
      <Tooltip key={name} title={name} placeholder="bottom">
        <MDAvatar
          src={image}
          alt="name"
          size="xs"
          sx={{
            border: ({ borders: { borderWidth }, palette: { white } }) =>
              `${borderWidth[2]} solid ${white.main}`,
            cursor: "pointer",
            position: "relative",

            "&:not(:first-of-type)": {
              ml: -1.25,
            },

            "&:hover, &:focus": {
              zIndex: "10",
            },
          }}
        />
      </Tooltip>
    ));

  return {
    columns: [
      { Header: "Tournament", accessor: "tournament", width: "45%", align: "left" },
      { Header: "Date", accessor: "date", align: "center" },
      { Header: "Progress", accessor: "progress", align: "center" },
      { Header: "Role", accessor: "role", align: "center"},
      { Header: "Team", accessor: "team", width: "10%", align: "left" },
    ],



    rows: tourData.map((tour, index)=> (

      {
        tournament: <MDTypography variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {tour.tournament}
      </MDTypography>,
      date: (
        <MDTypography variant="caption" color="text" fontWeight="medium">
        {tour.date}
        </MDTypography>
        ),
        progress: (
          <MDBox width="8rem" textAlign="left">
          <MDProgress value={tour.progress} color="info" variant="gradient" label={false} />
          </MDBox>
          ),
          role: <MDTypography variant="button" fontWeight="medium" ml={1} lineHeight={1}>
            {tour.role}
          </MDTypography>,
            team: (
              <MDBox display="flex" py={1}>
                {avatars([
                  [team1, "Ryan Tompson"],
                  [team2, "Romina Hadid"],
                  [team3, "Alexander Smith"],
                  [team4, "Jessica Doe"],
                ])}
              </MDBox>
            ),
        }
    ))
      
      
  };
}
