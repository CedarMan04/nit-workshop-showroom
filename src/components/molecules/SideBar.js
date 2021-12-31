import React, { useState } from 'react'
import { 
    makeStyles,
    Typography,
    Paper,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Divider,
    Table,
    TableBody,
    TableRow,
    TableCell,
    Button,
 } from '@material-ui/core'
import { blueGrey, grey } from '@material-ui/core/colors';
import { 
    DeveloperBoard,
    Business,
 } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
  root: {
    // marginLeft: "50px",
    // marginTop: "50px",
    // width: "200px",
    square: "false",
  },
  text: {
      fontSize: "15px",
  },
  title: {
      backgroundColor: blueGrey[50]
  },
  button: {
      padding: "0px",
      height: "64px",
  },
  icon: {
    color: grey[500],
  },
  accordion: {
      margin: "0px",
  }
}));

const SideBar = () => {
    const [isExpanded, setIsExpanded] = useState({
        works: false,
        about: false,
    })

    const handleOnChangeWorks = (e) => {
        setIsExpanded({
            ...isExpanded,
            works: isExpanded.works ? false : true
        })
    }
    const handleOnChangeAbout = (e) => {
        setIsExpanded({
            ...isExpanded,
            about: isExpanded.about ? false : true
        })
    }

  const classes = useStyles();
  return (
    <>
        <Paper className={classes.root}>
            <Accordion
                style={{margin: "0px"}} 
                expanded={isExpanded.works === true} 
                onChange={(e) => {handleOnChangeWorks(isExpanded)}}
            >
                <AccordionSummary className={classes.title}>
                    <DeveloperBoard className={classes.icon}/>
                    <Typography style={{marginLeft: "20px"}}>
                        作品
                    </Typography>
                </AccordionSummary>
                <Divider/>
                <AccordionDetails style={{padding: "0px"}}>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell className={classes.button}>
                                    <Button className={classes.button} variant="text" startIcon={<DeveloperBoard className={classes.icon}/>} fullWidth>
                                        作品一覧
                                    </Button>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className={classes.button}>
                                    <Button className={classes.button} variant="text" startIcon={<DeveloperBoard className={classes.icon}/>} fullWidth>
                                        作品投稿
                                    </Button>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </AccordionDetails>
            </Accordion>
            <Accordion
                style={{margin: "0px"}} 
                expanded={isExpanded.about === true} 
                onChange={(e) => {handleOnChangeAbout(isExpanded)}}
            >
                <AccordionSummary className={classes.title}>
                <Business className={classes.icon}/>
                <Typography style={{marginLeft: "20px"}}>
                    工房について
                </Typography>
                <Divider />
                </AccordionSummary>
                <Divider/>
                <AccordionDetails style={{padding: "0px"}}>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell className={classes.button}>
                                    <Button className={classes.button} variant="text" startIcon={<DeveloperBoard className={classes.icon}/>} fullWidth>
                                        取り組み
                                    </Button>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className={classes.button}>
                                    <Button className={classes.button} variant="text" startIcon={<DeveloperBoard className={classes.icon}/>} fullWidth>
                                        イベント
                                    </Button>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className={classes.button}>
                                    <Button className={classes.button} variant="text" startIcon={<DeveloperBoard className={classes.icon}/>} fullWidth>
                                        コンタクト
                                    </Button>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </AccordionDetails>
            </Accordion>
        </Paper> 
    </>
  )
}
export default SideBar