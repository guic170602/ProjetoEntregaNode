import fetch from "node-fetch"

function geraArrayDeURL(arrayLinks){
    return arrayLinks.map(objetoLink=> Object.values(objetoLink).join())
}

async function checaStatus(arrayURL){
    const arrayStatus = await Promise.all(arrayURL.map(async url => {
        const res = await fetch(url)
        return res.status
    }))
    return arrayStatus
}

export default async function validarUrl(arrayLinks){
    const links = geraArrayDeURL(arrayLinks)
    const statusLinks = await checaStatus(links)
    return statusLinks
}