"use client"
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";


export default function YoutubePlaylist() {

    useEffect(() => {

        const fetchImage = async () => {
            try {
                const response = await axios.get(
                    `https://www.googleapis.com/youtube/v3/playlistItems`,
                    {
                        params: {
                            part: 'snippet',
                            playlistId: process.env.NEXT_PUBLIC_PLAYLIST_ID,
                            key: process.env.NEXT_PUBLIC_YOUTUBE_API_KEY,
                            maxResults: 10
                        },
                    }
                ).then(response => {
                    console.log(response.data.items);
                });

            } catch (error) {
                console.error('Error fetching image:', error);
            }
        };

        fetchImage();
    }, []);
    return (
        <div>

        </div>
    );
}