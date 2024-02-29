export const payWithStripe = async () => {
  try {
    const response = await fetch("http://localhost:3000/payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        quantity: 1,
      }),
    });
    const data = await response.json();

    window.location = data.url;
  } catch (e) {
    console.error(e);
  }
};
