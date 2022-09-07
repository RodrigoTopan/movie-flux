import React from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';

export const MovieCard = ({ urlImage, altImage, title, description }) => {
    return (
        <>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        image={urlImage}
                        alt={altImage}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </>
    )
}