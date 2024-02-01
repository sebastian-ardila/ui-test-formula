import rulings from '../assets/data.json';
import { useEffect, useState } from 'react';

const useArticles = () =>{
    const [articles, setArticles] = useState(rulings.data);

    useEffect(() => {
        const data = window.localStorage.getItem('ARTICLES');
        setArticles(JSON.parse(data));
    }, []);

    useEffect(() => {
        window.localStorage.setItem('ARTICLES', JSON.stringify(articles));
    }, [articles]);

    return {
        articles,
        setArticles,
    }
}

export default useArticles;