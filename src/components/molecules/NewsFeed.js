import React from "react"
import { Box, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableRow } from '@material-ui/core'

function createData(news, datetime) {
  return [ news, datetime ];
}

// TODO DB(API)からデータを取ってくるようにする
const rows = [
  createData('Frozen yoghurt', "2020/11/11"),
  createData('Ice cream sandwich', "2020/11/11"),
  createData('Eclair', "2020/11/11"),
  createData('Cupcake', "2020/11/11"),
  createData('Gingerbread', "2020/11/11"),
];

const NewsFeed = () => {
  return(
    <>
      <Box>
        <Typography>最新のニュース</Typography>
      </Box>
      <Box>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableBody>
              {
                rows.map((row) => (
                  <TableRow>
                    {
                      row.map((data) => (
                        <TableCell>
                          {data}
                        </TableCell>
                      ))
                    }
                  </TableRow>
                ))
              }
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  )
}

export default NewsFeed