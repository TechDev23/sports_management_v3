
// Material Dashboard 2 React components

import { useEffect, useState } from "react";

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
import { useGetDocMutation } from "redux/api/userApi";
import moment from"moment";
import { useApproveDocMutation } from "redux/api/userApi";

export default function data() {


  const avatars = [team2, team3, team4];
  const [getDoc, { isLoading, isError, error, isSuccess }] =
    useGetDocMutation();
  const [approveDoc, { isLoading:isDocApproved, isError:isApproveDocErr, isSuccess:isApproveDocSuccess }] =
  useApproveDocMutation();
  const [rowData, setRowData] = useState([]);

  const handleDocView = (url) => {
    console.log(url)
    window.open(url, "_blank");
  }

  const handleApprove = async({docId, userId}) => {
    try {
      const userData = await approveDoc({ user_type: 'player', docId, userId }).unwrap();
      console.log(userData)
      if(isApproveDocSuccess)    
        window.location.reload(false);
    }
    catch(err){
      console.log(`Error while approving doc ${err}`)
    }
  }

  useEffect(()=>{
    const getAllDocs = async()=> {
      try {
        const userData = await getDoc({ user_type: 'player' }).unwrap();
        console.log(userData)
        setRowData(userData.data);
      }
      catch(err){
        console.log(`Error while fetching all docs ${err}`)
      }
    }

    if (!isApproveDocSuccess) {
      // Clear previous userData from the UI before fetching new data
      setRowData([]);
      getAllDocs();
    }
    getAllDocs()
  },[isApproveDocSuccess])

  

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
      author: <Author image={team2} name={row.document_type}/>,
      // author: <Author image={team2} name={row.user} email={row.email} />,
      // function: <Job title="Manager" description="Organization" />,
      status: (
        <MDBox ml={-1}>
          <MDBadge badgeContent="pending" color="warning" variant="gradient" size="md"/>
        </MDBox>
      ),
      requested: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          <p>{moment(row.createdAt).format('DD/MM/YYYY')}</p>
        </MDTypography>
      ),
      documents: (
        <IconButton size="small" aria-label="document" color="inherit" onClick={()=>handleDocView(row.document_url)}>
          <Icon fontSize="small">description</Icon>
        </IconButton>
      ),
      action: (
        <div className="flex flex-row">
          <MDBadge badgeContent="Approve" color="success" variant="gradient" size="lg" onClick={()=>handleApprove({userId : row.user_id, docId : row.id})} />
          <MDBadge badgeContent="Sent Back" color="error" variant="gradient" size="lg" onClick={handleSentBack} className="cursor-pointer" />
        </div>
      ),
    }
    )
    )
  
  };
}
