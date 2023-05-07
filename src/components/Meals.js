import React from 'react';
import { useGlobalContext } from '../Context';
import {FiThumbsUp} from 'react-icons/fi';
import Spinner from './Spinner.gif'

const Meals = () => {
  const { loading, meals, selectMeal, addToFavorites } = useGlobalContext();

  if (loading) {
    return <section><center><img src={Spinner} alt="" className = "loading-gif" style={{width: '150px', height: 'auto', top: '50%', bottom :'50%'}} /></center></section>
  }

  if (meals.length < 1) {
    return <section className="section">
      <h4>No meals matched your search term. Please try again.</h4>
    </section>
  }

  return <section className="section-center">
    {meals.map((singleMeal) => {
      const { idMeal, strMeal: title, strMealThumb: image } = singleMeal
      return <article key={idMeal} className="single-meal" >
        <img src={image} className="img" onClick={() => selectMeal(idMeal)} alt=''/>
        <footer>
          <h5>{title}</h5>
          <button className='like-btn' onClick={() => addToFavorites(idMeal)}><FiThumbsUp /></button>
        </footer>
      </article>
    })}
  </section>

}
// return <section><center><img src={Spinner} alt="" className = "loading-gif" style={{width: '150px', height: 'auto', top: '50%', bottom :'50%'}} /></center></section>

export default Meals
