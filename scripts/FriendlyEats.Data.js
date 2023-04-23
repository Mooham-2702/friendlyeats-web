/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {
  onSnapshot,
  collection,
  getFirestore,
  query,
  limit,
  addDoc,
  orderBy,
  doc,
  getDoc,
  getDocs,
  where,
  runTransaction
} from "firebase/firestore";

export class Data {
  constructor({ firebaseApp }) {
    this.db = getFirestore(firebaseApp);
  }

  addRestaurant(data) {
    /*
      TODO: Implement adding a document
    */
  }

  getAllRestaurants(renderer) {
    /*
      TODO: Retrieve list of restaurants
    */
  }

  getDocumentsInQuery(restaurantsQuery, renderer) {
    /*
      TODO: Render all documents in the provided query
    */
  }

  async getRestaurant(id) {
    /*
      TODO: Retrieve a single restaurant
    */
  }

  async getRestaurantRatings(doc) {
    /*
      TODO: Retrieve a restaurant's ratings
    */
  }

  getFilteredRestaurants(filters, renderer) {
    /*
      TODO: Retrieve filtered list of restaurants
    */
  }

  async addRating(restaurantID, rating) {
    /*
      TODO: Retrieve add a rating to a restaurant
    */
  }

  checkForEmpty(callback) {
    const restaurantsCol = collection(this.db, "restaurants");
    const restaurantsQuery = query(restaurantsCol, limit(1));
    onSnapshot(restaurantsQuery, snapshot => {
      callback(snapshot);
    });
  }
}
