'use client'

import { useEffect, useState } from "react";

export default function Audio() {
    const [ url, setUrl ] = useState('')

    function transformUrl() {
        fetch('https://cothefato-media.s3.amazonaws.com/file_1687998266880.webm')
        .then(response => response.blob())
        .then(blob => {
            // Converter o Blob em uma URL de Blob
            const blobUrl = URL.createObjectURL(blob);

            // Use a URL de Blob como quiser
            console.log("blobUrl",blobUrl);

            setUrl(blobUrl)
        })
        .catch(error => {
            // Ocorreu um erro ao buscar o arquivo
            console.error(error);
        });

    }

    useEffect(() => {
        transformUrl()
    }, [])

    return (
        <div className="h-screen flex justify-center items-center">
            <audio src={url} controls />
        </div>
    )
}