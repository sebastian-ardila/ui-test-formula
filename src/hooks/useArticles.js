import rulings from '../assets/data.json';
import { useEffect, useState } from 'react';

const useArticles = () =>{
    const [articles, setArticles] = useState(() => {
        const data = window.localStorage.getItem('ARTICLES');
        return data ? JSON.parse(data) : rulings.data;
    });

    useEffect(() => {
        window.localStorage.setItem('ARTICLES', JSON.stringify(articles));
    }, [articles]);

    return {
        articles,
        setArticles,
    }
}

export default useArticles;