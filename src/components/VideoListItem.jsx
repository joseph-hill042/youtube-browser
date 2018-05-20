import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import VideoDetail from './VideoDetail.jsx';

const VideoListItem = ({video, onVideoSelect}) => {

    const style = {
        margin: '20px 10px',
        maxWidth: 398,
        cardMedia: {
            height: 0,
            paddingTop: '56.25%', // 16:9
        }
    };

    return (
        <div style={style}>
            <Card>
                <CardMedia style={style.cardMedia} image={video.snippet.thumbnails.high.url} />
                <CardContent>
                    <Typography gutterBottom variant="title">
                        {video.snippet.title.substr(0, 23).concat('...')}
                    </Typography>
                    <Typography component="p">
                        {video.snippet.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button
                        variant="raised"
                        size="small"
                        color="primary"
                        onClick={() => onVideoSelect(video)} >
                        Play
                    </Button>
                </CardActions>
            </Card>
        </div>
    )
};

export default VideoListItem;