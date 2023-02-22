/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';
const stripe = Stripe(
  'pk_test_51Mcnq5SAvG3zOkKWTpiO05l4fUUdHMoEyLPY8pz4DVhHbeFpoy5DBns07UZWfCK53l2kz1Z8y51muEPZEgkUWsFa00MZY7yGsm'
);

export const bookTour = async (tourId) => {
  try {
    // 1) Get checkout session from API
    const session = await axios(
      `http://127.0.0.1:3000/api/v1/bookings/checkout-session/${tourId}`
    );
    // console.log(session);
    // 2) Create checkout form + charge credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    cosole.log(err);
    showAlert('error', err);
  }
};
