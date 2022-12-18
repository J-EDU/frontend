import {
  Box,
  Flex,
  Grid,
  GridItem,
  HStack,
  Stack,
  useToast,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ReportCard from "./ReportCard";
import Swal from "sweetalert2";

const Reports = () => {
  const [data, setData] = useState([]);
 const toast = useToast();
  const fetchData = async () => {
    let { data } = await axios.get(`${process.env.REACT_APP_LOCAL}/report/`, {
      headers: { Authorization: `Bearer ${process.env.REACT_APP_TOKEN}` },
    });
    var Localdata = data.Reports;

    setData(Localdata);
  };

  useEffect(() => {
    fetchData();
  });

  const DeleteVideoandSendEmail = async (report) => {
    axios
      .delete(
        `${process.env.REACT_APP_LOCAL}/video/deleteVideo/${report.video.id}`,
        {
          headers: { Authorization: `Bearer ${process.env.REACT_APP_TOKEN}` },
        }
      )
        .then((reslt) => {
           Swal.fire({
             position: "center-center",
             icon: "success",
             title: "Email Sent and Deleted ",
             showConfirmButton: false,
             timer: 1500,
           });
      })
      .catch((err) => {
       Swal.fire({
         position: "center-center",
         icon: "error",
         title: "Something went Wrong",
         showConfirmButton: false,
         timer: 1500,
       });
      });
  };

  const DeleteReportandSendEmail = async (report ) => {
    axios
      .delete(`${process.env.REACT_APP_LOCAL}/report/deletereport/${report.id}`, {
        headers: { Authorization: `Bearer ${process.env.REACT_APP_TOKEN}` },
      })
      .then((reslt) => {
         Swal.fire({
           position: "center-center",
           icon: "success",
           title: "Email Sent and Deleted ",
           showConfirmButton: false,
           timer: 1500,
         });
      })
      .catch((err) => {
         Swal.fire({
           position: "center-center",
           icon: "error",
           title: "Something went Wrong",
           showConfirmButton: false,
           timer: 1500,
         });
      });
    fetchData();
  };

  return (
    <Grid
      templateColumns={{
        lg: "repeat(3, 1fr)",
        md: "repeat(2, 1fr)",
        sm: "repeat(1, 1fr)",
      }}
    >
      {data &&
        data.map((report) => {
          return (
            <GridItem>
              <ReportCard
                report={report}
                DeleteVideoandSendEmail={DeleteVideoandSendEmail}
                DeleteReportandSendEmail={DeleteReportandSendEmail}
              />
            </GridItem>
          );
        })}
    </Grid>
  );
};

export default Reports;
