/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState , useEffect } from "react";
import { Link } from "react-router-dom";



const Homepage = () => {

    const [carousel,setCarousel] = useState([]);

    function changeImages(){
        let temp = Array(carousel.length);
        for(let i = 0 ; i < carousel.length; i++){
            if(i-1 < 0){
                temp[2] = carousel[i];
            }
            else{
            temp[i-1] = carousel[i];
            }
        }
        setCarousel(temp);
    }
    useEffect(() => {
        fetchImages();
    },[])

    useEffect(() => {
        setTimeout(() => {
          changeImages()
        }, 3000);
      });

      function fetchImages(){
        let array = []
        fetch("https://api.escuelajs.co/api/v1/products?offset=10&limit=3",{ 
            method:'GET', 
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })
        .then((res) => res.json())
        .then((json) => {
            for(let i = 0 ; i < json.length ; i++){
                array.push(json[i].images[0]);
            }
        });
        setCarousel(array);
      }
    

    return(
        <div id="Home" >
            <div id="Images">
                <img src={carousel[0]}></img>
                <img className="center-img" src={carousel[1]}></img>
                <img src={carousel[2]}></img>
            </div>
            <div id="homepage-links">
                <Link to="/products"><button>Browse products!</button></Link>
            </div>
        </div>
    )
}

export default Homepage;