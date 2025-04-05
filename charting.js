async function getData() {
    const stockData = await fetch('https://api.coincap.io/v2/rates').then(
      (result) => result.json()
    );
  
    console.log('Retrieved Data:', stockData);
  
    return stockData;
  }
  
  async function populateChart() {
    const stockData = await getData();
  
    const stockLabels = [];
    const costData = [];
  
    stockData['data'].forEach((currency) => {
      if (currency.rateUsd > 1 && currency.rateUsd < 5000) {
        stockLabels.push(currency.symbol); // USD, LTC, INR
        costData.push(currency.rateUsd); // 1, 35, 87
      }
    });
  
    // Getting the Canvas/Chart
    const ctx = document.getElementById('myChart');
  
    // Creating a Chart object (from the JS Library)
    new Chart(ctx, {
      type: 'line', // Type of Chart
      data: {
        labels: stockLabels, // Labels for those Values
        datasets: [
          {
            label: 'Currency Rate in USD',
            data: costData,
            borderWidth: 1,
          },
        ], // All the value to be shown
      },
      options: {
        animations: {
          tension: {
            duration: 1000,
            easing: 'linear',
            from: 1,
            to: 0,
            loop: true,
          },
        },
        scales: {
          y: {
            beginAtZero: false,
          },
        },
      },
    });
  }
  
  window.onload = populateChart;