/* eslint-disable no-unused-vars */
/* eslint-disable no-empty-function */
import FavoriteRestaurantdb from '../../data/favorite-restaurant-idb';
import { createRestoItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `    
    <section class="content">
        <h2  class="title" tabindex="0">Favorite Restaurant</h2>
        <p class="desc" tabindex="0">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, est!</p>

        <section class="list-restaurant">
            <div class="card-grid"></div>
        </section>
    </section>`;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantdb.getAllRestaurant();
    const restaurantsContainer = document.querySelector('.card-grid');

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestoItemTemplate(restaurant);
    });
  },
};

export default Favorite;
