import React, {useState, useEffect} from 'react'

export const Quote = () => {
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');

//     const API = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/';

//     fetch(API)
//         .then((response) => response.json())
//         .then((data) => { 
//             console.log(data.quotes);
//             setState(data.quotes)
//             // this.setState({
//             //   quoteData: data.quotes
//             // },()=>{
//             //   // add handle click function here, so that a random quote in shown on initial load
//             //   this.handleClick();
//             // })
//         })
//         .catch(error => console.log('Error', error));

//    // console.log(state);

    useEffect(() => {
        const interval = setInterval(() => {
            fetchApi();
        });
        return () => clearInterval(interval);
    }, []);

    const fetchApi = () => {
        fetch('http://quotes.rest/qod.json?category=inspire')
            .then(res=> res.json())
            .then(data=>{
           ///
            setQuote(data.contents.quotes[0].quote);
            setAuthor(data.contents.quotes[0].author); 
        })
    }

    return (
        <div className = "quote-block">
            <div className = "quote">{quote}</div>
            <div className ="author">- {author}</div>
        </div>
    )
}
