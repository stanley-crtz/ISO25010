import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Formulary from './Formulary'
import Check from './Check'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function ControlledAccordions(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [data, setData] = React.useState([])
  const [check, setCheck] = React.useState([])
  
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const editData = (e) => {
    let list = data

    list[e.indice] = e.value

    setData(list)
    renderChecks()
  }

  const removeData = (e) => {
    const list = data

    list.splice(e, 1)

    setData(list)

    renderChecks()
  }

  const renderChecks = () => {
    const checks = []
    for (let i = 0; i < data.length; i++) {
      const element = data[i];
      checks.push(<Check label={element} indice={i} remove={removeData} edit={editData}/>)
    }

    setCheck(checks)
  }

  const Submit = (e) => {
    const d = data;

    d.push(e)
    setData(data)
    renderChecks()
  }

  React.useEffect(() => {
    setData(props.data.data)
    renderChecks()
  }, [])

  return (
    <Accordion expanded={expanded === `panel${props.key}`} onChange={handleChange(`panel${props.key}`)}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`panel${props.key}bh-content`}
        id={`panel${props.key}bh-header`}
      >
        <Typography className={classes.heading}>{props.data.name}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Formulary onSubmit={Submit}/>
        <div className="list">
          <h2>Lista</h2>
          {check}
        </div>
      </AccordionDetails>
    </Accordion>
  );
}