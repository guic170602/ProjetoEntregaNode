import chalk from 'chalk'
import fs from 'fs'

function extrairLinks(texto){
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm
    const arrayResulados = []
    let temp
    while ((temp = regex.exec(texto)) != null) {
        arrayResulados.push({ [temp[1]] : temp[2] })
    }

    return !arrayResulados.length ? 'Não há links' : arrayResulados
}

export default async function pegarArquivo(caminho) {
    const encoding = 'utf-8'
    try{
        const texto = await fs.promises.readFile(caminho, encoding)
        return(extrairLinks(texto))
    } catch(err){
        trataErro(err)
    }
}

const trataErro = err => new Error(chalk.red(err.code, "Caminho errado"))
