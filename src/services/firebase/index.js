import * as firebase from "firebase";
import "firebase/database";
import { values, keys, minBy } from "lodash";

export const setup = () => {
  firebase.initializeApp({
    apiKey: "AIzaSyASXCdGMAK8Gb-vsx8PmMO_Bl46lkegkjQ",
    authDomain: "flight-club-f837c.firebaseapp.com",
    databaseURL: "https://flight-club-f837c.firebaseio.com",
    projectId: "flight-club-f837c",
    storageBucket: "flight-club-f837c.appspot.com",
    messagingSenderId: "214698871318"
  });
};

export const login = callback => {
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      callback(user);
    } else {
      firebase.auth().signInWithRedirect(provider);
    }
  });
};

export const logout = () => {
  firebase.auth().signOut();
};

export const setPlan = plan => {
  const db = firebase.database().ref("plans");
  db.push(plan);
};

export const getRoutes = callback => {
  const dbRefObject = firebase.database().ref().child("deals");
  dbRefObject.on("value", snap => {
    const deals = snap.val();
    console.log(deals);
    // const routeKeys = keys(routes);
    // const deals = routeKeys.forEach(key => {
    //   const route = routes[key];
    //   if (route.cheapestFlights) {
    //     const deal = {
    //       cheapestFlights: route.cheapestFlights.filter(
    //         flight => flight.price === minBy(route.cheapestFlights, "price").price
    //       ),
    //       destinationCity: route.destinationCity,
    //       destinationIata: route.destinationIata,
    //       originCity: route.originCity,
    //       originIata: route.originIata
    //     };
    //     firebase.database().ref("deals/" + `${route.originIata}_${route.destinationIata}`).set(deal);
    //   }

    // "auth.uid === 'OqDqU5osFudNJYyauGWeCO82TTT2'"
    // });

    // console.log(deals);
    callback(values(snap.val()));
  });
};
