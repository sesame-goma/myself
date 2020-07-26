import React from 'react';
import { makeStyles, Theme, createStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { 
  Box,
  Card,
  CardActionArea,
  CardContent,
  Container,
  Stepper,
  Step,
  StepLabel,
  StepConnector,
  Icon,
  Typography,
 } from '@material-ui/core';
import { StepIconProps } from '@material-ui/core/StepIcon';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

import { BreakpointInterface } from './index';

const useStyles = makeStyles((theme: Theme) => {
  const gradient = theme.palette.info;
  const lineWidth = theme.spacing(25);
  const lineHeight = theme.spacing(0.5);

  const cardWidth = theme.spacing(13);
  const cardHeight = theme.spacing(70);

  return createStyles({
    root: {
      marginTop: theme.spacing(5),
      display: 'flex',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    stepBox: {
      display: 'flex',
      flex: 1,
    },
    stepLabel: {
      backgroundColor: 'transparent',
      zIndex: 1,
    },
    activeStep: {
      '& $line': {
        // アクティブの時のスタイルを指定すると当たる
        // boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
      },
    },
    icon: {
      color: 'white',
      marginLeft: '6%',
      marginBottom: '2%',
    },
    activeIcon: {
      boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    },

    // 横向き
    horStepTitle: {
      fontWeight: 'bold',
    },
    horStepper: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'stretch',
    },
    horCaptionCard: {
      width: cardWidth,
      height: cardHeight,
      display: 'flex',
      flex: 1,
      justifyContent: 'top',
      alignItems: 'center',
      writingMode: 'vertical-rl',
      textOrientation: 'upright',
    },
    horIconArea: {
      marginBottom: theme.spacing(5),
      zIndex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    horIconCircle: {
      marginBottom: theme.spacing(1),
      width: 48,
      height: 48,
      borderRadius: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundImage:
        `linear-gradient(135deg, ${gradient.light} 0%, ${gradient.main} 50%, ${gradient.dark} 100%);`
    },
    horLine: {
      marginTop: 34,
      width: lineWidth,
      height: lineHeight,
      border: 5,
      borderRadius: 1,
      backgroundImage:
        `linear-gradient(135deg, ${gradient.light} 0%, ${gradient.main} 50%, ${gradient.dark} 100%);`
    },
  
    // 縦向き
    verStepTitle: {
      fontWeight: 'bold',
      marginRight: theme.spacing(3),
    },
    verStepper: {
      flexDirection: 'column',
      justifyContent: 'top',
      alignItems: 'flex-start',
    },
    verCaptionCard: {
      width: cardHeight / 2.5,
      height: cardWidth / 2,
      display: 'flex',
      flex: 1,
      justifyContent: 'top',
      alignItems: 'flex-start',
    },
    verIconArea: {
      marginRight: theme.spacing(3),
      zIndex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'top',
      alignItems: 'center',
    },
    verIconCircle: {
      width: 48,
      height: 48,
      borderRadius: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundImage:
        `linear-gradient(135deg, ${gradient.light} 0%, ${gradient.main} 50%, ${gradient.dark} 100%);`
    },
    verLine: {
      marginLeft: 21,
      width: lineHeight,
      height: lineWidth / 4,
      border: 5,
      borderRadius: 1,
      backgroundImage:
        `linear-gradient(135deg, ${gradient.light} 0%, ${gradient.main} 50%, ${gradient.dark} 100%);`
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

const History: React.FunctionComponent<BreakpointInterface> = props => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const isStepHorizontal = isWidthUp('sm', props.width);

  return (
    <div className={classes.root}>
      <Box className={classes.stepBox}>
        <Stepper
          orientation={isStepHorizontal ? 'horizontal' : 'vertical'}
          activeStep={isStepHorizontal ? activeStep : steps.length + 1}
          connector={<StepConnector className={isStepHorizontal ? classes.horLine : classes.verLine} />}
          className={isStepHorizontal ? classes.horStepper : classes.verStepper}
          alternativeLabel={isStepHorizontal}
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
                    <div className={isStepHorizontal ? classes.horIconArea : classes.verIconArea}>
                      {isStepHorizontal &&
                      <Typography variant='subtitle1' className={classes.horStepTitle}>
                        {item.title}
                      </Typography>}
                      <div className={clsx(
                        isStepHorizontal ? classes.horIconCircle : classes.verIconCircle,
                        { [classes.activeIcon]: active }
                      )}>
                        <Icon
                          className={clsx(item.className, classes.icon)}
                          style={'iconStyleAdjuster' in item ? item.iconStyleAdjuster : {}}
                        />
                      </div>
                      {isStepHorizontal &&
                      <Typography variant='subtitle1'>
                        {item.duration}
                      </Typography>}
                    </div>
                  );
                }}
                className={classes.stepLabel}
              >
                {!isStepHorizontal && (
                  <Box>
                    <Typography display='inline' variant='subtitle2' className={classes.verStepTitle}>
                      {item.title}
                    </Typography>
                    <Typography display='inline' variant='subtitle2'>
                      {item.duration}
                    </Typography>
                  </Box>
                )}
                <Card >
                  <CardActionArea>
                    <CardContent className={isStepHorizontal ? classes.horCaptionCard : classes.verCaptionCard}>
                      <Typography variant={isStepHorizontal ? 'subtitle2' : 'caption'}>
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
export default withWidth()(History);