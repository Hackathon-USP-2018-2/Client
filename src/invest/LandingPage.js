import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import ProjectCard from './ProjectCard';
import ProjectDialog from './ProjectDialog';

const styles = theme => ({
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
  },
});

const cards = [
  {
    title: 'USP Code Lab',
    image: 'https://bcc.ime.usp.br/principal/assets/uspcodelab.png',
    description: 'Grupo de extensão universitária que tem como objetivo estimular a inovação tecnológica na USP',
    tags: '#tech',
    goal: 200,
    current: 28,
  },
  {
    title: 'Núcleo de Empreendedorismo da USP',
    image: 'http://www.uspempreende.org/static/assets/images/logo.png',
    description: 'O NEU (Núcleo de Empreendedorismo da USP) é uma organização formada por alunos, pesquisadores e professores movidos por uma missão: desenvolver a cultura de empreendedorismo dentro da USP. ',
    tags: '#tech #startup',
    goal: 200,
    current: 150,
  },
  {
    title: 'Tecs - Grupo de Computação Social da USP',
    image: 'https://www.ime.usp.br/~tecs/images/logo.png?v=',
    description: 'Encorajamos estudantes a encontrarem modos de combinar seu interesse pela ciência da computação e pelo impacto social.',
    tags: '#tech #social',
    goal: 400,
    current: 14,
  },
  {
    title: 'aMuDi',
    image: 'http://amudi.com.br/grupoamudi.github.io/public/amd_pb.png',
    description: 'O aMuDi é um grupo nascido na Poli-USP que pesquisa a amplificação do conceito de arte através da interação com a tecnologia. Isto o torna não só um grupo artístico, mas também técnico, em que os membros permitem-se aprender sempre novas soluções e habilidades no decorrer dos projetos.',
    tags: '#tech #art',
    goal: 1400,
    current: 2100,
  },
  
  {
    title: 'USP Game Dev',
    image: 'https://uspgamedev.org/media/logo_favicon.png',
    description: 'O USPGameDev é um grupo de extensão da USP voltado para pesquisa e desenvolvimento de jogos. ',
    tags: '#tech #art #games',
    goal: 1400,
    current: 2100,
  },
  {
    title: 'Estação Biologia',
    image: 'http://www.ib.usp.br/estacaobiologia/wordpress/wp-content/uploads/2018/10/DSCF0729-300x180.jpg',
    description: 'A Estação Biologia é um grupo de extensão da Biologia/USP que recebe visitas escolares em um espaço de vivências pedagógicas e, ao longo do ano, realiza diversas ações educativas dentro e fora da universidade.',
    tags: '#education #biology #social',
    goal: 300,
    current: 1000,
  },
 
  {
    title: 'Grupo de Teatro da Poli',
    image: 'http://www.politecnicos.com.br/img/085.jpg',
    description: 'O GTP – Grupo de Teatro da Poli é um grupo de teatro não profissional que existe desde a década de 40, na Escola Politécnica da USP e pertence ao Departamento de Cultura do Grêmio Politécnico. ',
    tags: '#art #theatre',
    goal: 300,
    current: 1000,
  },
];

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projectOpen: false,
      projectTitle: '',
      projectImage: '',
      projectDescription: '',
    };
  }

  render() {
    const { classes } = this.props;
    const query = this.props.query.toLowerCase();
    return (
      <React.Fragment>
        <CssBaseline />
        <main>
          {/* Hero unit */}
          <div className={classes.heroUnit}>
            <div className={classes.heroContent}>
              <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                TransparUSP
              </Typography>
              <Typography variant="h6" align="center" color="textSecondary" paragraph>
                Portal de transparência e suporte financeiro da USP
              </Typography>
              <div className={classes.heroButtons}>
                <Grid container spacing={16} justify="center">
                  <Grid item>
                    <Button variant="contained" color="primary">
                      Missão
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="outlined" color="primary">
                      Perguntas frequentes
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </div>
          </div>
          <div className={classNames(classes.layout, classes.cardGrid)}>
            {/* End hero unit */}
            <Grid container spacing={40}>
              {cards.filter(x => !query || x.title.toLowerCase().includes(query) || x.description.toLowerCase().includes(query)
                   || x.tags.toLowerCase().includes(query)).map(x => (
                <Grid item key={x.title} sm={6} md={4} lg={3}>
                  <ProjectCard title={x.title} image={x.image} description={x.description} completion={x.current * 1.0 / x.goal}
                    onClick={() => this.setState({
                      projectTitle: x.title,
                      projectImage: x.image,
                      projectDescription: x.description,
                      projectOpen: true,
                      projectCurrent: x.current,
                      projectGoal: x.goal,
                    })} />
                </Grid>
              ))}
            </Grid>
            <ProjectDialog
              open={this.state.projectOpen}
              title={this.state.projectTitle}
              image={this.state.projectImage}
              description={this.state.projectDescription}
              current={this.state.projectCurrent}
              goal={this.state.projectGoal}
              onClose={() => this.setState({selectedProject: null, projectOpen: false})} />
          </div>
        </main>
        {/* Footer */}
        <footer className={classes.footer}>
          <Typography variant="h6" align="center" gutterBottom>
            TransparUSP
          </Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            Hackathon USP 2018.2
          </Typography>
        </footer>
        {/* End footer */}
      </React.Fragment>
    );
  }
}

LandingPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LandingPage);
