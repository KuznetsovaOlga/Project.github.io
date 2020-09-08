import React from 'react';
import { connect } from 'react-redux';
import { getNews } from '../../actions/NewsActions';
import { withStyles } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    blockNews: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        padding:"0",
        margin:0
        
    },
    newsItem: {
        display: "flex",
        flexDirection: "column",
        width: "300px",
        margin: "10px",
        border: "1px solid #82aa9e36",
        backgroundColor: "#82aa9e36",
        cursor: "pointer",
        "&:hover": {
            backgroundColor: "darkseagreen"
        }
    },
    newsItemBox:{
        padding: "5px 15px",
    }
});


class News extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            scroll:'paper',
            content:''
        }
    }

    componentDidMount() {
        this.props.getNews();
    }

    handleOpenDialog=(el)=>{
        const {open} = this.state;
        this.setState({
            open:!open,
            content:el.content
        })
    }

    handleCloseDialog=()=>{
        const {open} = this.state;
        this.setState({
            open:!open
        })
    }

    render() {
        const { news, classes } = this.props;
        const {open, scroll, content} = this.state;

        return (
            <ul className={classes.blockNews}>
                {
                    news.length > 0 && news.map(elem=>{
                        return elem.map((el) => {
                            return (
                                <li key={el.source.id + Math.random()} className={classes.newsItem} onClick={()=>this.handleOpenDialog(el)}>
                                    <img src={el.urlToImage} alt="" key={el.author} height="200px" className={classes.newsItemImg} />
                                    <div className={classes.newsItemBox}>
                                        <h3>{el.author}</h3>
                                        <p>{el.description}</p>
                                    </div>
                                </li>
                            )
                        })
                    })
                }

                <Dialog
                    open={open}
                    onClose={this.handleCloseDialog}
                    scroll={scroll}
                    aria-labelledby="scroll-dialog-title"
                    aria-describedby="scroll-dialog-description"
                >
                    <DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle>
                    <DialogContent dividers={scroll === 'paper'}>
                        <DialogContentText
                            id="scroll-dialog-description"
                            tabIndex={-1}
                        >
                            {content && content}
                        </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                        <Button onClick={this.handleCloseDialog} color="primary">
                            Cancel
                        </Button>
                    </DialogActions>
                </Dialog>
            </ul>
        )
    }
}

const mapStateToProps = store => {
    return {
        news: store.newsBlock.news
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getNews: () => dispatch(getNews())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(News));