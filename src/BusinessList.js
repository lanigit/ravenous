import React from 'react'

function BusinessList() {
    const restaurants = [ 
        { 
          name: "Mike's",
          address: "134 Yo Fridge",
          ratings: "8"
        },
        { name: "Allie's",
          address: "134 Yo Fridge",
          ratings: "6"
        },
        { name: "Katie's",
          address: "134 Yo Fridge",
          ratings: "10"
        }
     ];

    // NEED MAP FUNCTION TO WORK HERE
    const restVals = restaurants.map((val) => {
       return (
            <div>
                <li>{val.name}</li>
                <li>{val.address}</li>
                <li>{val.ratings}</li>
            </div>
        )
    });
    return <ul>{restVals}</ul>

};

export default BusinessList;