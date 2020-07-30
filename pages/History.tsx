import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
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
import TabTitle from './components/TabTitle';

const useStyles = makeStyles((theme: Theme) => {
  const gradient = theme.palette.info;
  const lineWidth = theme.spacing(30);
  const lineHeight = theme.spacing(0.5);

  const cardWidth = theme.spacing(10);
  const cardHeight = theme.spacing(70);

  return createStyles({
    root: {
      paddingTop: theme.spacing(10),
      paddingBottom: theme.spacing(10),
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      justifyContent: 'start',
      alignItems: 'center',
    },
    stepBox: {
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
      boxShadow: '0 2px 5px 0 rgba(0,0,0,.25)',
    },

    // PC・タブレット
    horStepTitle: {
      fontWeight: 'bold',
    },
    horStepper: {
      backgroundColor: 'transparent',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'stretch',
    },
    horCaptionCard: {
      width: cardWidth,
      height: cardHeight,
      display: 'flex',
      justifyContent: 'start',
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
  
    // スマホ
    verStepTitle: {
      fontWeight: 'bold',
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(3),
    },
    verStepper: {
      backgroundColor: 'transparent',
      flexDirection: 'column',
      justifyContent: 'start',
      alignItems: 'flex-start',
    },
    verCaptionCard: {
      width: cardHeight / 2,
      height: cardWidth * 1.5,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'start',
    },
    verIconArea: {
      marginRight: theme.spacing(2),
      zIndex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'start',
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

interface StepInterface {
  title: string,
  duration: string,
  caption: any,
  className: string,
  iconStyleAdjuster?: object,
};

const steps = () => {
  const capStyle = {
    'display': 'flex',
    'flex-direction': 'column',
    'align-items': 'start',
  };
  return [
    {
      title: '幼少期',
      duration: '1996〜2003年',
      caption: (
        <span style={capStyle}>
          <span>実家のピアノを勝手に引くのが好きで、ピアノを習い始めた。</span>
          <span>妹が1人いる長男。親戚の中で一番最初の子供だった。</span>
          <span>そのせいか、お爺ちゃんに玉のように可愛がられて育った。</span>
        </span>
      ),
      className: 'fas fa-baby',
      iconStyleAdjuster: { marginLeft: '10%' }
    },
    {
      title: '小学生',
      duration: '2003〜2009年',
      caption: (
        <span style={capStyle}>
          <span>ワールドカップで見たブラジルの選手に憧れて、サッカー少年団に所属。</span>
          <span>学芸会では5年連続悪役を任された。なぜだ...</span>
          <span>あとは年頃の子供らしく、ゲームでよく遊んでいた記憶がある。</span>
        </span>
      ),
      className: 'fas fa-child',
      iconStyleAdjuster: { marginLeft: '10%' }
    },
    {
      title: '中学生',
      duration: '2009〜2012年',
      caption: (
        <span style={capStyle}>
          <span>野球にハマって、野球部に入部。当時の部活仲間とバンドを組んでいた。</span>
          <span>好きな音楽はロックで、当時聴いていたバンドは今でもずっと聴いている。</span>
          <span>3年生の時、親に塾に入れられてから勉強を始めた...。</span>
        </span>
      ),
      className: 'fas fa-running',
    },
    {
      title: '高校生',
      duration: '2012〜2015年',
      caption: (
        <span style={capStyle}>
          <span>中学の友人たちとハンドボール部に入部。しかし顧問と喧嘩して2年生で退部...。</span>
          <span>世界史が好きで、「大学でマヤ文明の研究をしたい」と名古屋大学を志す。</span>
          <span>しかし、結局勉強を始めたのは3年生になってから...汗</span>
        </span>
      ),
      className: 'fas fa-user-edit',
      iconStyleAdjuster: { width: '100%', marginLeft: '40%' }
    },
    {
      title: '大学生',
      duration: '2015〜2019年',
      caption: (
        <span style={capStyle}>
          <span>考古学を専攻し、エルサルバドルで遺跡を発掘していた。※スペイン語が少し話せます</span>
          <span>麻雀サークルに所属し、１年生の時全国大会で準優勝した。</span>
          <span>他にはバンドサークルでギターボーカルを経験した。</span>
        </span>
      ),
      className: 'fas fa-user-graduate',
    },
    {
      title: '社会人',
      duration: '2019年〜現在',
      caption: (
        <span style={capStyle}>
          <span>株式会社ファーストロジックに新卒として入社。WEB系エンジニアになる。</span>
          <span>新卒入社から1年半で、エンジニアとして3回社長賞を受賞した。</span>
          <span>直近では、スマホアプリにビデオ通話機能を追加する開発を行った。</span>
        </span>
      ),
      className: 'fas fa-user-tie',
    },
  ];
};

const History: React.FunctionComponent<BreakpointInterface> = props => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const isStepHorizontal = isWidthUp('sm', props.width);
  const history: Array<StepInterface> = steps();

  return (
    <Container className={classes.root}>
      <TabTitle title={'History'} />
      <Box className={classes.stepBox}>
        <Stepper
          orientation={isStepHorizontal ? 'horizontal' : 'vertical'}
          activeStep={isStepHorizontal ? activeStep : history.length + 1}
          connector={<StepConnector className={isStepHorizontal ? classes.horLine : classes.verLine} />}
          className={isStepHorizontal ? classes.horStepper : classes.verStepper}
          alternativeLabel={isStepHorizontal}
        >
          {history.map((item: StepInterface, index: number) => (
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
                        </Typography>
                      }
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
                        </Typography>
                      }
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
                <Card>
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
    </Container>
  );
}
export default withWidth()(History);