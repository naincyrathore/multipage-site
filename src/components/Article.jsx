import {useParams, useHistory} from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { useEffect } from 'react'

const Article = () => {
    const {id} = useParams()
    const url = 'http://localhost:3000/articles/' + id
    const {data: article, isPending, error} = useFetch(url)
    const history = useHistory()

    useEffect(() => {
        if (error){
            setTimeout(() => {
                history.push('/')
            }, 2000);
        }
    }, [error])

  return (
    <div>
        {isPending && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {article && (
            <div>
                <h2>{article.title}</h2>
                <p>Ny {article.author}</p>
                <p>{article.body}</p>
            </div>
        )}
    </div>
  )
}

export default Article