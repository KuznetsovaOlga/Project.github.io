import React from 'react';
import { connect } from 'react-redux';
import { getPhotos } from '../../actions/PhotosActions';
import { withStyles } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';

// const pictureWidth = "300px";
const styles = theme => ({
    blockPictures: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap",
        justifyContent: "center",
        margin:0,
        padding:0
    },
    blockPicturesItem: {
        listStyle: "none",
        padding: "10px 20px",
        position: "relative",
        // [theme.breakpoints.up('sm')]: {
        //     width: pictureWidth,
        //     // flexShrink: 0,
        // },
    },
    picturesItemNote: {
        bottom: "10px",
        left: "20px",
        height: "20px",
        padding: "10px",
        color: "white",
        position: "absolute",
        background: "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"
    },
    icon: {
        position: "absolute",
        color: "white",
        top: "10px",
        right: "20px"
    },
});

class Album extends React.Component {


    componentDidMount() {
        this.props.getPhotos();
    }

    render() {
        const { photos, classes } = this.props;
        return (
            <div>
                <ul className={classes.blockPictures}>
                    {
                        photos.length && photos[0].photos.map((el) => {
                            return (
                                <li key={el.id} className={classes.blockPicturesItem}>
                                    <img src={el.src.medium} alt="" key={el.id} height="200px" width="250px"/>
                                    <IconButton className={classes.icon} onClick={this.handlerIcon}>
                                        <StarBorderIcon/>
                                    </IconButton>
                                    <span className={classes.picturesItemNote}>{el.photographer}</span>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = store => {
    return {
        photos: store.photosBlock.photos,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getPhotos: () => dispatch(getPhotos()),
    }
}

const AlbumStyle = withStyles(styles)(Album)

export default connect(mapStateToProps, mapDispatchToProps)(AlbumStyle);



