import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/styles';
// import { Grid, Typography as MuiTypography } from '@material-ui/core';
import { Calendar, momentLocalizer} from 'react-big-calendar';
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment)

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const myEventsList=[

  {
    'title': 'Anda Mendaftar di BCA',
    'allDay': true,
    'start': new Date(2020, 0, 1),
    'end': new Date(2020, 0, 1)
  },
  {
    'title': 'Pengumuman Seleksi',
    'start': new Date(2020, 1, 7),
    'end': new Date(2020, 1, 8)
  },

  {
    'title': 'Psikotes',
    'start': new Date(2020, 1, 9, 13, 0, 0),
    'end': new Date(2020, 1, 9, 15, 0, 0)
  },
  {
    'title': 'Interview HR',
    'start':new Date(2020, 1, 13, 11, 0, 0),
    'end': new Date(2020, 1, 13, 13, 30, 0)
  },
  {
    'title': 'Technical Interview',
    'start': new Date(2020, 1, 14, 10, 0, 0),
    'end': new Date(2020, 1, 14, 13, 0, 0)
  },

  {
    'title': 'Pengumuman pasca Interview HR',
    'start': new Date(2020, 1, 17),
    'end': new Date(2020, 1, 17)
  },
  {
    'title': 'Interview User',
    'start': new Date(2020, 1, 20, 10, 0, 0),
    'end': new Date(2020, 1, 20, 13, 0, 0),
    desc: 'Big conference for important people'
  },
  {
    'title': 'Pengumuman Interview User',
    'start': new Date(2020, 1, 24),
    'end': new Date(2020, 1, 24),
    desc: 'Pre-meeting meeting, to prepare for the meeting'
  },
  {
    'title': 'Medical Check-up',
    'start':new Date(2020, 1, 29, 12, 0, 0, 0),
    'end': new Date(2020, 1, 29, 16, 0, 0, 0),
    desc: 'Health!'
  },
  {
    'title': 'Offering Date',
    'start':new Date(2020, 2, 1),
    'end': new Date(2020, 2, 1)
  },
  {
    'title': 'First Day!',
    'start':new Date(2020, 2, 8, 9, 0, 0, 0),
    'end': new Date(2020, 2, 8, 17, 30, 0, 0),
    desc: 'Most important day'
  }
];

const Typography = () => {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
};

export default Typography;
