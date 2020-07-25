import React from 'react';
import { makeStyles, Theme, createStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { 
  Box,
  Card,
  CardActionArea,
  CardContent,
  Stepper,
  Step,
  StepLabel,
  StepConnector,
  Icon,
  Typography,
 } from '@material-ui/core';
import { StepIconProps } from '@material-ui/core/StepIcon';

const loader = require('fg-loadcss');

const ColorlibConnector = withStyles(({ palette }) => {
  const gradient = palette.info;
  return {
    active: {
      '& $line': {
        // アクティブの時のスタイルを指定すると当たる
        // boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
      },
    },
    line: {
      marginTop: 34,
      width: 200,
      height: 8,
      border: 5,
      borderRadius: 1,
      backgroundImage:
        `linear-gradient(135deg, ${gradient.light} 0%, ${gradient.main} 50%, ${gradient.dark} 100%);`
    },
  };
})(StepConnector);

const useStyles = makeStyles((theme: Theme) => {
  const gradient = theme.palette.info;
  return createStyles({
    root: {
      marginTop: 20,
    },
    stepBox: {
      display: 'flex',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    stepper: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'stretch',
    },
    stepTitle: {
      fontWeight: 'bold',
    },
    captionCard: {
      width: 100,
      height: 500,
      display: 'flex',
      flex: 1,
      justifyContent: 'top',
      alignItems: 'center',
      writingMode: 'vertical-rl',
      textOrientation: 'upright',
    },
    iconArea: {
      marginBottom: 50,
      zIndex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    iconCircle: {
      marginBottom: 10,
      width: 48,
      height: 48,
      borderRadius: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundImage:
        `linear-gradient(135deg, ${gradient.light} 0%, ${gradient.main} 50%, ${gradient.dark} 100%);`
    },
    icon: {
      color: 'white',
      marginLeft: '6%',
      marginBottom: '2%',
    },
    active: {
      boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    },
  });
});

const steps = [
  {
    title: '幼少期',
    duration: '1996年〜2003年',
    caption: (<div>
      <p>実家のピアノを勝手に引くのが好きで、ピアノを習い始めた。</p>
    </div>),
    className: 'fas fa-baby',
    iconStyleAdjuster: { marginLeft: '10%' }
  },
  {
    title: '小学生',
    duration: '2003年〜2009年',
    caption: (<div>
      <p>ワールドカップで見たブラジルの選手に憧れて、サッカー少年団に所属。</p>
    </div>),
    className: 'fas fa-child',
    iconStyleAdjuster: { marginLeft: '10%' }
  },
  {
    title: '中学生',
    duration: '2009年〜2012年',
    caption: (<div>
      <p>野球にハマって、野球部に入部。当時の仲間とバンドを組んでいた。</p>
    </div>),
    className: 'fas fa-running',
  },
  {
    title: '高校生',
    duration: '2012年〜2015年',
    caption: (<div>
      <p>中学の友人たちとハンドボール部に入部。3年生から真面目に勉強し始めた。</p>
    </div>),
    className: 'fas fa-user-edit',
    iconStyleAdjuster: { width: '100%', marginLeft: '40%' }
  },
  {
    title: '大学生',
    duration: '2015年〜2019年',
    caption: (<div>
      <p>エルサルバドルで遺跡を発掘。土器のデータ分析で卒論を書いた。</p>
      <p>麻雀で全国大会準優勝した。</p>
    </div>),
    className: 'fas fa-user-graduate',
  },
  {
    title: '社会人',
    duration: '2019年〜現在',
    caption: (<div>
      <p>WEB系エンジニアになる。</p>
    </div>),
    // className: 'fas fa-laptop-code',
    className: 'fas fa-user-tie',
  },
];

const History = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  return (
    <div className={classes.root}>
      <Box className={classes.stepBox}>
        <Stepper
          activeStep={activeStep}
          connector={<ColorlibConnector />}
          className={classes.stepper}
          nonLinear
          alternativeLabel
        >
          {steps.map((item, index) => (
            <Step
              key={item.title}
              onMouseOver={() => setActiveStep(index)}
            >
              <StepLabel 
                StepIconComponent={(props: StepIconProps) => {
                  const { active } = props;
                  return (
                    <div className={classes.iconArea}>
                      <Typography variant='subtitle1' className={classes.stepTitle}>
                        {item.title}
                      </Typography>
                      <div className={clsx(classes.iconCircle, { [classes.active]: active })}>
                        <Icon
                          className={clsx(item.className, classes.icon)}
                          style={'iconStyleAdjuster' in item ? item.iconStyleAdjuster : {}}
                        />
                      </div>
                      <Typography variant='subtitle1'>
                        {item.duration}
                      </Typography>
                    </div>
                  );
                }}
              >
                <Card >
                  <CardActionArea>
                    <CardContent className={classes.captionCard}>
                      <Typography variant='subtitle2'>
                        {item.caption}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
    </div>
  );
}
export default History;