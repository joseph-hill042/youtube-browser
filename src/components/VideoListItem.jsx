import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

const VideoListItem = ({video}) => {

    const style = {
        flex: '0 1 auto',
        width: '30%',
        margin: '20px 0'
    };

    return (
        <Card style={style}>
            <CardMedia
                overlay={<CardTitle title={video.snippet.title}/>}
            >
                <img src={video.snippet.thumbnails.high.url} alt="" />
            </CardMedia>
            <CardText>
                {video.snippet.description}
            </CardText>
        </Card>
    )
};

export default VideoListItem;