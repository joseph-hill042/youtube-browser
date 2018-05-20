import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import purple from '@material-ui/core/colors/purple';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const VideoDetail = ({video}) => {

    const progressStyle = {
        display: 'flex',
        justifyContent: 'center',
        paddingTop: 100,
    };

    if(!video) {
        return (
            <div style={progressStyle}>
                <CircularProgress style={{ color: purple[500] }} thickness={7} size={50} />
            </div>
        )
    }

    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    const styles = {
        cardContainer: {
            display: 'flex',
            justifyContent: 'center'
        },
        videoCard: {
            maxHeight: 600,
            maxWidth: 640,
            marginTop: 100,
        }
    };

    return (
        <div style={styles.cardContainer}>
            <Card style={styles.videoCard}>
                <CardMedia>
                    <iframe src={url} height='390px' width='640px' />
                </CardMedia>
                <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                        {video.snippet.title}
                    </Typography>
                    <Typography component="p">
                        {video.snippet.description}
                    </Typography>
                </CardContent>
                <CardActions/>
            </Card>
        </div>
    );
};

export default VideoDetail;