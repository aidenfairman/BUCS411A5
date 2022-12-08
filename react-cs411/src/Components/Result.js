import React, { Component } from 'react'
import axios from 'axios'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Button, Card, TextField, Collapse } from "@mui/material"
import CardActions from '@mui/material/CardActions'
import IconButton, { IconButtonProps } from '@mui/material/IconButton'
import { styled } from '@mui/material/styles'


interface ExpandMoreProps extends IconButtonProps {
  expand: boolean
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props
  return <IconButton {...other} />
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}))

export default class Result extends React.Component {
  state = {
    recipe_list: [{
      "vegetarian": false,
      "vegan": false,
      "glutenFree": false,
      "dairyFree": false,
      "veryHealthy": false,
      "cheap": false,
      "veryPopular": false,
      "sustainable": false,
      "lowFodmap": false,
      "weightWatcherSmartPoints": 26,
      "gaps": "no",
      "preparationMinutes": -1,
      "cookingMinutes": -1,
      "aggregateLikes": 37,
      "healthScore": 36,
      "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
      "license": "CC BY 3.0",
      "sourceName": "Foodista",
      "pricePerServing": 441.5,
      "extendedIngredients": [
        {
          "id": 18079,
          "aisle": "Pasta and Rice",
          "image": "breadcrumbs.jpg",
          "consistency": "SOLID",
          "name": "bread crumbs",
          "nameClean": "breadcrumbs",
          "original": "50g homemade bread crumbs",
          "originalName": "homemade bread crumbs",
          "amount": 50.0,
          "unit": "g",
          "meta": [
            "homemade"
          ],
          "measures": {
            "us": {
              "amount": 1.764,
              "unitShort": "oz",
              "unitLong": "ounces"
            },
            "metric": {
              "amount": 50.0,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 1001,
          "aisle": "Milk, Eggs, Other Dairy",
          "image": "butter-sliced.jpg",
          "consistency": "SOLID",
          "name": "butter",
          "nameClean": "butter",
          "original": "50 g butter",
          "originalName": "butter",
          "amount": 50.0,
          "unit": "g",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1.764,
              "unitShort": "oz",
              "unitLong": "ounces"
            },
            "metric": {
              "amount": 50.0,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 10011693,
          "aisle": "Canned and Jarred",
          "image": "tomatoes-canned.png",
          "consistency": "SOLID",
          "name": "canned tomatoes",
          "nameClean": "canned tomatoes",
          "original": "480g chopped tomatoes from a can",
          "originalName": "chopped tomatoes from a can",
          "amount": 480.0,
          "unit": "g",
          "meta": [
            "chopped"
          ],
          "measures": {
            "us": {
              "amount": 1.058,
              "unitShort": "lb",
              "unitLong": "pounds"
            },
            "metric": {
              "amount": 480.0,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 11209,
          "aisle": "Produce",
          "image": "eggplant.png",
          "consistency": "SOLID",
          "name": "egg plants",
          "nameClean": "eggplant",
          "original": "2-4 egg plants, thinly sliced",
          "originalName": "egg plants, thinly sliced",
          "amount": 2.0,
          "unit": "",
          "meta": [
            "thinly sliced"
          ],
          "measures": {
            "us": {
              "amount": 2.0,
              "unitShort": "",
              "unitLong": ""
            },
            "metric": {
              "amount": 2.0,
              "unitShort": "",
              "unitLong": ""
            }
          }
        },
        {
          "id": 1125,
          "aisle": "Milk, Eggs, Other Dairy",
          "image": "egg-yolk.jpg",
          "consistency": "SOLID",
          "name": "egg yolks",
          "nameClean": "egg yolk",
          "original": "3 egg yolks",
          "originalName": "egg yolks",
          "amount": 3.0,
          "unit": "",
          "meta": [],
          "measures": {
            "us": {
              "amount": 3.0,
              "unitShort": "",
              "unitLong": ""
            },
            "metric": {
              "amount": 3.0,
              "unitShort": "",
              "unitLong": ""
            }
          }
        },
        {
          "id": 1019,
          "aisle": "Cheese",
          "image": "feta.png",
          "consistency": "SOLID",
          "name": "feta cheese",
          "nameClean": "feta cheese",
          "original": "230g feta cheese, grated",
          "originalName": "feta cheese, grated",
          "amount": 230.0,
          "unit": "g",
          "meta": [
            "grated"
          ],
          "measures": {
            "us": {
              "amount": 8.113,
              "unitShort": "oz",
              "unitLong": "ounces"
            },
            "metric": {
              "amount": 230.0,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 20081,
          "aisle": "Baking",
          "image": "flour.png",
          "consistency": "SOLID",
          "name": "flour",
          "nameClean": "wheat flour",
          "original": "50 g flour",
          "originalName": "flour",
          "amount": 50.0,
          "unit": "g",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1.764,
              "unitShort": "oz",
              "unitLong": "ounces"
            },
            "metric": {
              "amount": 50.0,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 11215,
          "aisle": "Produce",
          "image": "garlic.png",
          "consistency": "SOLID",
          "name": "garlic",
          "nameClean": "garlic",
          "original": "4 cloves garlic, finely chopped",
          "originalName": "garlic, finely chopped",
          "amount": 4.0,
          "unit": "cloves",
          "meta": [
            "finely chopped"
          ],
          "measures": {
            "us": {
              "amount": 4.0,
              "unitShort": "cloves",
              "unitLong": "cloves"
            },
            "metric": {
              "amount": 4.0,
              "unitShort": "cloves",
              "unitLong": "cloves"
            }
          }
        },
        {
          "id": 2001,
          "aisle": "Spices and Seasonings",
          "image": "allspice-ground.jpg",
          "consistency": "SOLID",
          "name": "ground allspice",
          "nameClean": "allspice",
          "original": "¼ tsp ground allspice",
          "originalName": "ground allspice",
          "amount": 0.25,
          "unit": "tsp",
          "meta": [],
          "measures": {
            "us": {
              "amount": 0.25,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            },
            "metric": {
              "amount": 0.25,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            }
          }
        },
        {
          "id": 1012010,
          "aisle": "Spices and Seasonings",
          "image": "cinnamon.jpg",
          "consistency": "SOLID",
          "name": "ground cinnamon",
          "nameClean": "ground cinnamon",
          "original": "¼ tsp ground cinnamon",
          "originalName": "ground cinnamon",
          "amount": 0.25,
          "unit": "tsp",
          "meta": [],
          "measures": {
            "us": {
              "amount": 0.25,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            },
            "metric": {
              "amount": 0.25,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            }
          }
        },
        {
          "id": 2025,
          "aisle": "Spices and Seasonings",
          "image": "ground-nutmeg.jpg",
          "consistency": "SOLID",
          "name": "ground nutmeg",
          "nameClean": "nutmeg",
          "original": "½ tsp ground nutmeg",
          "originalName": "ground nutmeg",
          "amount": 0.5,
          "unit": "tsp",
          "meta": [],
          "measures": {
            "us": {
              "amount": 0.5,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            },
            "metric": {
              "amount": 0.5,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            }
          }
        },
        {
          "id": 1002030,
          "aisle": "Spices and Seasonings",
          "image": "pepper.jpg",
          "consistency": "SOLID",
          "name": "ground pepper",
          "nameClean": "black pepper",
          "original": "Salt and ground white pepper",
          "originalName": "Salt and ground white pepper",
          "amount": 4.0,
          "unit": "servings",
          "meta": [
            "white"
          ],
          "measures": {
            "us": {
              "amount": 4.0,
              "unitShort": "servings",
              "unitLong": "servings"
            },
            "metric": {
              "amount": 4.0,
              "unitShort": "servings",
              "unitLong": "servings"
            }
          }
        },
        {
          "id": 23557,
          "aisle": "Meat",
          "image": "fresh-ground-beef.jpg",
          "consistency": "SOLID",
          "name": "lean beef",
          "nameClean": "95 percent lean ground beef",
          "original": "400 g lean minced beef",
          "originalName": "lean minced beef",
          "amount": 400.0,
          "unit": "g",
          "meta": [
            "lean",
            "minced"
          ],
          "measures": {
            "us": {
              "amount": 14.11,
              "unitShort": "oz",
              "unitLong": "ounces"
            },
            "metric": {
              "amount": 400.0,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 1077,
          "aisle": "Milk, Eggs, Other Dairy",
          "image": "milk.png",
          "consistency": "LIQUID",
          "name": "milk",
          "nameClean": "milk",
          "original": "250 ml warm milk",
          "originalName": "warm milk",
          "amount": 250.0,
          "unit": "ml",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1.057,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 250.0,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        },
        {
          "id": 4053,
          "aisle": "Oil, Vinegar, Salad Dressing",
          "image": "olive-oil.jpg",
          "consistency": "LIQUID",
          "name": "olive oil",
          "nameClean": "olive oil",
          "original": "1 Tbs olive oil",
          "originalName": "olive oil",
          "amount": 1.0,
          "unit": "Tbs",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1.0,
              "unitShort": "Tbs",
              "unitLong": "Tb"
            },
            "metric": {
              "amount": 1.0,
              "unitShort": "Tbs",
              "unitLong": "Tb"
            }
          }
        },
        {
          "id": 4053,
          "aisle": "Oil, Vinegar, Salad Dressing",
          "image": "olive-oil.jpg",
          "consistency": "LIQUID",
          "name": "olive oil",
          "nameClean": "olive oil",
          "original": "Olive oil",
          "originalName": "Olive oil",
          "amount": 4.0,
          "unit": "servings",
          "meta": [],
          "measures": {
            "us": {
              "amount": 4.0,
              "unitShort": "servings",
              "unitLong": "servings"
            },
            "metric": {
              "amount": 4.0,
              "unitShort": "servings",
              "unitLong": "servings"
            }
          }
        },
        {
          "id": 11282,
          "aisle": "Produce",
          "image": "brown-onion.png",
          "consistency": "SOLID",
          "name": "onions",
          "nameClean": "onion",
          "original": "2 onions, finely chopped",
          "originalName": "onions, finely chopped",
          "amount": 2.0,
          "unit": "",
          "meta": [
            "finely chopped"
          ],
          "measures": {
            "us": {
              "amount": 2.0,
              "unitShort": "",
              "unitLong": ""
            },
            "metric": {
              "amount": 2.0,
              "unitShort": "",
              "unitLong": ""
            }
          }
        },
        {
          "id": 1012047,
          "aisle": "Spices and Seasonings",
          "image": "salt.jpg",
          "consistency": "SOLID",
          "name": "sea salt",
          "nameClean": "coarse sea salt",
          "original": "Sea salt",
          "originalName": "Sea salt",
          "amount": 4.0,
          "unit": "servings",
          "meta": [],
          "measures": {
            "us": {
              "amount": 4.0,
              "unitShort": "servings",
              "unitLong": "servings"
            },
            "metric": {
              "amount": 4.0,
              "unitShort": "servings",
              "unitLong": "servings"
            }
          }
        },
        {
          "id": 11887,
          "aisle": "Pasta and Rice",
          "image": "tomato-paste.jpg",
          "consistency": "SOLID",
          "name": "tomato paste",
          "nameClean": "tomato paste",
          "original": "2 Tbs tomato paste",
          "originalName": "tomato paste",
          "amount": 2.0,
          "unit": "Tbs",
          "meta": [],
          "measures": {
            "us": {
              "amount": 2.0,
              "unitShort": "Tbs",
              "unitLong": "Tbs"
            },
            "metric": {
              "amount": 2.0,
              "unitShort": "Tbs",
              "unitLong": "Tbs"
            }
          }
        }
      ],
      "id": 639606,
      "title": "Classic Greek Moussaka",
      "readyInMinutes": 45,
      "servings": 4,
      "sourceUrl": "http://www.foodista.com/recipe/LPXBFBVS/classic-greek-moussaka",
      "summary": "Classic Greek Moussaka might be just the <b>Mediterranean</b> recipe you are searching for. This recipe makes 4 servings with <b>841 calories</b>, <b>42g of protein</b>, and <b>52g of fat</b> each. For <b>$4.42 per serving</b>, this recipe <b>covers 43%</b> of your daily requirements of vitamins and minerals. It works well as a main course. This recipe is liked by 37 foodies and cooks. From preparation to the plate, this recipe takes around <b>45 minutes</b>. Head to the store and pick up ground allspice, egg plants, ground cinnamon, and a few other things to make it today. To use up the olive oil you could follow this main course with the <a href=\"https://spoonacular.com/recipes/sauteed-banana-granola-and-yogurt-parfait-624619\">Sauteed Banana, Granolan and Yogurt Parfait</a> as a dessert. All things considered, we decided this recipe <b>deserves a spoonacular score of 90%</b>. This score is tremendous. Try <a href=\"https://spoonacular.com/recipes/moussaka-dont-miss-out-on-this-greek-classic-if-you-have-never-tried-this-before-think-of-a-lasnaga-that-is-made-out-of-eggplant-601582\">Moussaka don’t miss out on this Greek classic, if you have never tried this before, think of a lasnaga that is made out of eggplant</a>, <a href=\"https://spoonacular.com/recipes/kittencals-greek-moussaka-103654\">Kittencal's Greek Moussaka</a>, and <a href=\"https://spoonacular.com/recipes/moussaka-greek-casserole-97648\">Moussaka - Greek Casserole</a> for similar recipes.",
      "cuisines": [
        "Mediterranean",
        "European",
        "Greek"
      ],
      "dishTypes": [
        "lunch",
        "main course",
        "main dish",
        "dinner"
      ],
      "diets": [],
      "occasions": [],
      "instructions": "<ol><li>Sprinkle the egg plant slices with salt and let them stand for 45 minutes. Then wash thoroughly to remove excess salt.</li><li>Thinly brush each slice with olive oil and bake in the preheated grill pan for several minutes on each side. Set aside. Repeat until all slices are grilled.</li><li>For the meat sauce lightly saute the onions in olive oil until tender.</li><li>Add ground beef and saute, stirring frequently to break up the clumps of meat, until the meat is no longer pink.</li><li>Stir in tomatoes, garlic, cinnamon, allspice, salt and pepper and simmer briefly on low heat.</li><li>Add in tomato paste and a little water if the sauce is to thick. Remove from heat and set aside.</li><li>For the bchamel sauce add flour to the melted butter, stirring constantly. When the mixture is evenly thick, gradually whisk in warm milk.  Gently bring to the boil, then remove from heat, season with pepper and nutmeg. Whisk in (vigorously) the egg yolks. Set aside.</li><li>Thinly coat with olive oil a suitable ovenproof baking dish, sprinkle the bottom with homemade bread crumbs.</li><li>Place a layer of egg plant, cover with some meat sauce and feta cheese and repeat this until the pan is almost full. Finish with a layer of feta cheese.</li><li>Top with bchamel sauce.</li><li>Cover with tin foil and bake in a preheated oven at 180C for 1 hour.</li><li>Remove moussaka from the oven and let it set at room temperature 45 minutes before serving.</li></ol>",
      "analyzedInstructions": [
        {
          "name": "",
          "steps": [
            {
              "number": 1,
              "step": "Sprinkle the egg plant slices with salt and let them stand for 45 minutes. Then wash thoroughly to remove excess salt.Thinly brush each slice with olive oil and bake in the preheated grill pan for several minutes on each side. Set aside. Repeat until all slices are grilled.For the meat sauce lightly saute the onions in olive oil until tender.",
              "ingredients": [
                {
                  "id": 11209,
                  "name": "eggplant",
                  "localizedName": "eggplant",
                  "image": "eggplant.png"
                },
                {
                  "id": 4053,
                  "name": "olive oil",
                  "localizedName": "olive oil",
                  "image": "olive-oil.jpg"
                },
                {
                  "id": 11282,
                  "name": "onion",
                  "localizedName": "onion",
                  "image": "brown-onion.png"
                },
                {
                  "id": 0,
                  "name": "sauce",
                  "localizedName": "sauce",
                  "image": ""
                },
                {
                  "id": 1065062,
                  "name": "meat",
                  "localizedName": "meat",
                  "image": "whole-chicken.jpg"
                },
                {
                  "id": 2047,
                  "name": "salt",
                  "localizedName": "salt",
                  "image": "salt.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404648,
                  "name": "grill pan",
                  "localizedName": "grill pan",
                  "image": "grill-pan.jpg"
                },
                {
                  "id": 404784,
                  "name": "oven",
                  "localizedName": "oven",
                  "image": "oven.jpg"
                }
              ],
              "length": {
                "number": 45,
                "unit": "minutes"
              }
            },
            {
              "number": 2,
              "step": "Add ground beef and saute, stirring frequently to break up the clumps of meat, until the meat is no longer pink.Stir in tomatoes, garlic, cinnamon, allspice, salt and pepper and simmer briefly on low heat.",
              "ingredients": [
                {
                  "id": 1102047,
                  "name": "salt and pepper",
                  "localizedName": "salt and pepper",
                  "image": "salt-and-pepper.jpg"
                },
                {
                  "id": 10023572,
                  "name": "ground beef",
                  "localizedName": "ground beef",
                  "image": "fresh-ground-beef.jpg"
                },
                {
                  "id": 2001,
                  "name": "allspice",
                  "localizedName": "allspice",
                  "image": "allspice-ground.jpg"
                },
                {
                  "id": 2010,
                  "name": "cinnamon",
                  "localizedName": "cinnamon",
                  "image": "cinnamon.jpg"
                },
                {
                  "id": 11529,
                  "name": "tomato",
                  "localizedName": "tomato",
                  "image": "tomato.png"
                },
                {
                  "id": 11215,
                  "name": "garlic",
                  "localizedName": "garlic",
                  "image": "garlic.png"
                },
                {
                  "id": 1065062,
                  "name": "meat",
                  "localizedName": "meat",
                  "image": "whole-chicken.jpg"
                }
              ],
              "equipment": []
            },
            {
              "number": 3,
              "step": "Add in tomato paste and a little water if the sauce is to thick.",
              "ingredients": [
                {
                  "id": 11887,
                  "name": "tomato paste",
                  "localizedName": "tomato paste",
                  "image": "tomato-paste.jpg"
                },
                {
                  "id": 0,
                  "name": "sauce",
                  "localizedName": "sauce",
                  "image": ""
                },
                {
                  "id": 14412,
                  "name": "water",
                  "localizedName": "water",
                  "image": "water.png"
                }
              ],
              "equipment": []
            },
            {
              "number": 4,
              "step": "Remove from heat and set aside.For the bchamel sauce add flour to the melted butter, stirring constantly. When the mixture is evenly thick, gradually whisk in warm milk.  Gently bring to the boil, then remove from heat, season with pepper and nutmeg.",
              "ingredients": [
                {
                  "id": 1001,
                  "name": "butter",
                  "localizedName": "butter",
                  "image": "butter-sliced.jpg"
                },
                {
                  "id": 2025,
                  "name": "nutmeg",
                  "localizedName": "nutmeg",
                  "image": "ground-nutmeg.jpg"
                },
                {
                  "id": 1002030,
                  "name": "pepper",
                  "localizedName": "pepper",
                  "image": "pepper.jpg"
                },
                {
                  "id": 20081,
                  "name": "all purpose flour",
                  "localizedName": "all purpose flour",
                  "image": "flour.png"
                },
                {
                  "id": 0,
                  "name": "sauce",
                  "localizedName": "sauce",
                  "image": ""
                },
                {
                  "id": 1077,
                  "name": "milk",
                  "localizedName": "milk",
                  "image": "milk.png"
                }
              ],
              "equipment": [
                {
                  "id": 404661,
                  "name": "whisk",
                  "localizedName": "whisk",
                  "image": "whisk.png"
                }
              ]
            },
            {
              "number": 5,
              "step": "Whisk in (vigorously) the egg yolks. Set aside.Thinly coat with olive oil a suitable ovenproof baking dish, sprinkle the bottom with homemade bread crumbs.",
              "ingredients": [
                {
                  "id": 18079,
                  "name": "breadcrumbs",
                  "localizedName": "breadcrumbs",
                  "image": "breadcrumbs.jpg"
                },
                {
                  "id": 1125,
                  "name": "egg yolk",
                  "localizedName": "egg yolk",
                  "image": "egg-yolk.jpg"
                },
                {
                  "id": 4053,
                  "name": "olive oil",
                  "localizedName": "olive oil",
                  "image": "olive-oil.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404646,
                  "name": "baking pan",
                  "localizedName": "baking pan",
                  "image": "roasting-pan.jpg"
                },
                {
                  "id": 404661,
                  "name": "whisk",
                  "localizedName": "whisk",
                  "image": "whisk.png"
                }
              ]
            },
            {
              "number": 6,
              "step": "Place a layer of egg plant, cover with some meat sauce and feta cheese and repeat this until the pan is almost full. Finish with a layer of feta cheese.Top with bchamel sauce.Cover with tin foil and bake in a preheated oven at 180C for 1 hour.",
              "ingredients": [
                {
                  "id": 1019,
                  "name": "feta cheese",
                  "localizedName": "feta cheese",
                  "image": "feta.png"
                },
                {
                  "id": 11209,
                  "name": "eggplant",
                  "localizedName": "eggplant",
                  "image": "eggplant.png"
                },
                {
                  "id": 0,
                  "name": "sauce",
                  "localizedName": "sauce",
                  "image": ""
                },
                {
                  "id": 1065062,
                  "name": "meat",
                  "localizedName": "meat",
                  "image": "whole-chicken.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404784,
                  "name": "oven",
                  "localizedName": "oven",
                  "image": "oven.jpg",
                  "temperature": {
                    "number": 180.0,
                    "unit": "Celsius"
                  }
                },
                {
                  "id": 404765,
                  "name": "aluminum foil",
                  "localizedName": "aluminum foil",
                  "image": "aluminum-foil.png"
                },
                {
                  "id": 404645,
                  "name": "frying pan",
                  "localizedName": "frying pan",
                  "image": "pan.png"
                }
              ],
              "length": {
                "number": 60,
                "unit": "minutes"
              }
            },
            {
              "number": 7,
              "step": "Remove moussaka from the oven and let it set at room temperature 45 minutes before serving.",
              "ingredients": [],
              "equipment": [
                {
                  "id": 404784,
                  "name": "oven",
                  "localizedName": "oven",
                  "image": "oven.jpg"
                }
              ],
              "length": {
                "number": 45,
                "unit": "minutes"
              }
            }
          ]
        }
      ],
      "originalId": null,
      "spoonacularSourceUrl": "https://spoonacular.com/classic-greek-moussaka-639606"
    }],
    //****** ApiKey ******/
    key: ["71572cc55469424d9b3c4f90dddce7a4",
      "3c8b0356c9fe4e68838c5a700de725a0",
      "b589b93113194426aaf359c262390e17",
      "ad17578f923946ffb9d9fe3902c7ac0b",
      "bc3abec2a0b749d285f7b43711c11c12",
      "8b75ca578a6942c6b2b061a122b72380"
    ],
    key_index: 0
  }

  handleExpandClick = (item_index) => {
    this.setState({
      recipe_list: this.state.recipe_list.map(
        (item, index) => index == item_index ? { ...item, expanded: !item.expanded } : item)
    })
  }

  //Call the random recipe api for one recipt.
  queryRecipes () {
    return axios({
      url: 'https://api.spoonacular.com/recipes/random',
      params: {
        apiKey: this.state.key[this.state.key_index],
        number: 10
      }
    }).then(response => {
      return response.data.recipes
    }).catch((error) => {
      console.log(error)
      if (this.state.key.length <= this.state.key_index) {
        console.log("Sorry, daily points of all Api Keys are used up. No more search!")
      }
      else {
        this.setState({
          key_index: this.state.key_index + 1
        }, () => {
          this.queryRecipes()
        })
      }
    })
  }

  //Call the taste api for a particular recipe.
  queryRecipeTaste (recipeID) {
    return axios({
      url: 'https://api.spoonacular.com/recipes/' + recipeID + '/tasteWidget.json',
      params: {
        apiKey: this.state.key[this.state.key_index]
      }
    }).then(response => {
      return response.data
    }).catch((error) => {
      console.log(error)
      if (this.state.key.length <= this.state.key_index) {
        console.log("Sorry, daily points of all Api Keys are used up. No more search!")
      }
      else {
        this.setState({
          key_index: this.state.key_index + 1
        }, () => {
          this.queryRecipeTaste()
        })
      }
    })
  }

  // Call Liked Recipes Api when to allow user to save a recipe
  saveRecipe (userID, recipeID) {
    return axios({
      url: 'http://localhost:8090/api/likedRecipe/addLikeRecipe',
      params: {
        userId: null, //null temporarily
        recipeId: recipeID
      }
    }).then(response => {
      return response.data
    }).catch((error) => {
      console.log(error)
    })
  }

  // retreives all the recipe saved by a user
  getSavedRecipes () {
    return axios({
      url: 'http://localhost:8090/api/likedRecipe/findByUserId',
      params: {
        userId: null, //null temporarily
      }
    }).then(response => {
      return response.data
    }).catch((error) => {
      console.log(error)
    })
  }

  // deletes a recipe selected by a  user
  deleteRecipe (recipeID) {
    return axios({
      url: 'http://localhost:8090/api/likedRecipe/delete',
      params: {
        userId: null, //null temporarily
        recipeId: recipeID
      }
    }).then(response => {
      return response.data
    }).catch((error) => {
      console.log(error)
    })
  }


  //Generate a list of recipes .
  async getApplicableRecipes (queryTaste) {
    //Number of recipes returned.
    const recipes = await this.queryRecipes()
    console.log(recipes)
    for (let x = 0; x < recipes.length; x++) {
      recipes[x].expanded = false
      const taste_stats = await this.queryRecipeTaste(recipes[x].id)
      console.log(taste_stats)
      if (queryTaste.includes("sweet")) {
        if (taste_stats.sweetness >= 50) {
          this.setState({
            recipe_list: [...this.state.recipe_list, recipes[x]]
          })
          continue
        }
      }
      if (queryTaste.includes("salty")) {
        if (taste_stats.saltiness >= 30) {
          this.setState({
            recipe_list: [...this.state.recipe_list, recipes[x]]
          })
          continue
        }
      }

      if (queryTaste.includes("sour")) {
        if (taste_stats.sourness >= 20) {
          this.setState({
            recipe_list: [...this.state.recipe_list, recipes[x]]
          })
          continue
        }
      }

      if (queryTaste.includes("bitter")) {
        if (taste_stats.bitterness >= 20) {
          this.setState({
            recipe_list: [...this.state.recipe_list, recipes[x]]
          })
          continue
        }
      }

      if (queryTaste.includes("savory")) {
        if (taste_stats.savoriness >= 30) {
          this.setState({
            recipe_list: [...this.state.recipe_list, recipes[x]]
          })
          continue
        }
      }
    }
  }

  //Monitor change of search item and call getApplicableRecipes if there is a change.
  componentWillReceiveProps (nextProps) {
    if (nextProps.parsed_search_item !== this.props.parsed_search_item) {
      this.setState({
        recipe_list: []
      }, () => { this.getApplicableRecipes(nextProps.parsed_search_item) })
      //If it is a different input, regenerate the recipe list.
    }
  }

  render () {
    return (
      <div className="recipe_list w">
        <ul>
          {this.state.recipe_list.map((item, index) => (
            <li key={item.id} className="recipe">
              <Card>
                <h1 className="recipe_title">{item.title}</h1>
                {/* <div>{item.extendedIngredients}</div> */}
                <div className="recipe_content clearfix">
                  <div className="recipe_img">
                    <img src={item.image} />
                  </div>
                  <div className="recipe_ingredient_list">
                    <h2>Ingredients</h2>
                    <ul>
                      {item.extendedIngredients.map((ingredient, index) => (
                        <li className="ingredient" key={index}>{ingredient.name}</li>
                      )
                      )}
                    </ul>
                  </div>
                  <div className="like-button">
                    {/* TODO: make heart go red when the button is pressed to represent that it has been clicked */}
                    {/* <Button
                      onClick={this.saveRecipe(null, item.id)} >
                      <FavoriteIcon />
                    </Button> */}
                  </div>
                </div>
                <CardActions disableSpacing>
                  <ExpandMore
                    expand={item.expanded}
                    onClick={() => { this.handleExpandClick(index) }}
                    aria-expanded={item.expanded}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </ExpandMore>
                </CardActions>
                <Collapse in={item.expanded} timeout="auto" unmountOnExit>
                  <h2 style={{ marginLeft: "30px" }}>Instructions</h2>
                  <div className={"instructions"} dangerouslySetInnerHTML={
                    {
                      __html: item.instructions
                    }
                  }></div>
                </Collapse>
              </Card>
            </li>
          )
          )}

        </ul>
      </div >
    )
  }
}
