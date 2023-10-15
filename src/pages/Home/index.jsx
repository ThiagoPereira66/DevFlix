import Botao from "../../components/Botao"
import Slider from "../../components/slider"
import api from "../../services/Api" // IMPORTAÇÃO DA API CRIADA
import { getImages } from "../../utils/get-images"
import { Background, ConteinerBotoes, Info, Poster } from './style'
import { useState, useEffect } from "react"


function Home() {

    const [filmes, setfilmes] = useState()  // padradão para o uso do 'useState' 

    const [topFilmes, setTopFilmes] = useState() // padrão para chamar os 'top filmes'

    const [series, setSeries] = useState() // series

    const [topSeries, setTopSeries] = useState() // top series

    const [atores, setAtores] = useState() // atores

    useEffect(() => {

        async function getMovies() {    // colocando 'async' para o Js entender que consumir um banco de dados

            const { data: {results} } = await api.get('/movie/popular')  // 'await' serve para avisar o programa para esperar o 'getMovies' executar

            setfilmes(results[0])            
            

        }

         // top filmes
        async function getTopfilmes() {

            const { data: {results} } = await api.get('/movie/popular')

            setTopFilmes(results)               
            
        }

         // top series
         async function getTopSeries() {

            const { data: {results} } = await api.get('/tv/top_rated')             
            
            setTopSeries(results)  
            
                        
        }

        async function getSeries(){

            const { data: {results} } = await api.get('tv/popular')

            setSeries(results)

            
        }
        
        async function getAtores(){
            
            const { data: {results}} = await api.get('person/popular')
            
            setAtores(results)
            
        }

        getAtores()
        getSeries()
        getTopSeries()
        getTopfilmes()
        getMovies()

    }, [])

    return (

        <>
            {filmes && ( //para evitar lup infinito 'if'
                <Background img={getImages(filmes.backdrop_path)}>
                    <Info>
                        <h1>{filmes.title}</h1>
                        <p>{filmes.overview}</p>
                        <ConteinerBotoes>
                            <Botao red={true}>Assitir agora</Botao>
                            <Botao red={false}>Assistir Trailer</Botao>
                        </ConteinerBotoes>
                    </Info>
                    <Poster>
                        <img src= {getImages(filmes.poster_path)} alt="imagem-porter" />
                    </Poster>
                </Background>
            )}

           {topFilmes && ( <Slider info={topFilmes} title={'Top Filmes'}></Slider> )}
           {series && ( <Slider info={series} title={'Series'}></Slider>)}
           {topSeries && ( <Slider info={topSeries} title={'Top Series'}></Slider> )}
           {atores && ( <Slider info={atores} title={'Atores'}></Slider>)}

        </>
    )
}

export default Home