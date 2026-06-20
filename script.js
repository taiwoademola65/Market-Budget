    let marketBudgets = 0
    let items = []

    const setBudget = () => {
      let budget = budgetInput.value;
      budgetInput.value = '';
      if (budget === '' || budget <= 0) {
        alert('enter a valid budget amount')
        return
      }

      marketBudgets = parseFloat(budget)
      document.getElementById('budgetDisplay').textContent = 'Budget: ₦' + marketBudgets

      // document.getElementById('budgetDisplay').style.display = 'block'
      // budgetDisplay.textContent = 'Budget: ₦' + totalBudget;
      // budgetDisplay = `N ${totalBudget}`

    }

    const addItem = () => {
      let item = itemName.value;
      let itemPrice = parseFloat(document.getElementById('itemPrice').value);
      
      if (item === '' || itemPrice <= 0) {
        alert('Enter a valid item name and price')
        return
      }
      if (itemPrice <= marketBudgets) {
        items.push({name: item, price: itemPrice})

        marketBudgets = marketBudgets - itemPrice

        updateBudgetDisplay();
        displayItems();

        itemName.value = '';
        document.getElementById('itemPrice').value = '';
      }else{
        alert('Insufficient budget to buy this item!')
      }
    }

    // Helper function to update the budget text
    const updateBudgetDisplay = () => {
      document.getElementById('budgetDisplay').textContent = 'Budget: ₦' + marketBudgets.toLocaleString();
    };

    const displayItems = () =>{
      let itemList = '';
      items.map((item) => {
          itemList += `<li class="list-group-item d-flex justify-content-between align-items-center">
            ${item.name} 
            <span class="badge bg-success rounded">₦${item.price.toLocaleString()}</span>
          </li>`;
      })
      // for (let i = 0; i < items.length; i++) {
      //   let detail = items[i];
      //   itemList += `<li class="list-group-item d-flex justify-content-between align-items-center">
      //       ${detail.name} 
      //       <span class="badge bg-success rounded">₦${detail.price.toLocaleString()}</span>
      //     </li>`;
      // }
      document.getElementById('itemList').innerHTML = itemList;
    }
