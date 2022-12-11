import React, { Component } from 'react'
import axios from 'axios'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Button, Card, TextField, Collapse } from "@mui/material"
import CardActions from '@mui/material/CardActions'
import IconButton, { IconButtonProps } from '@mui/material/IconButton'
import { styled } from '@mui/material/styles'
import { spacing } from '@mui/system'
import { useState } from 'react'
// import { useState } from 'react';
import FavButton from "./FavButton"
import Cookies from "js-cookie";


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

  const [userStatus, setUserStatus] = useState('')

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
      "weightWatcherSmartPoints": 12,
      "gaps": "no",
      "preparationMinutes": -1,
      "cookingMinutes": -1,
      "aggregateLikes": 24,
      "healthScore": 1,
      "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
      "license": "CC BY 3.0",
      "sourceName": "Foodista",
      "pricePerServing": 139.7,
      "extendedIngredients": [
        {
          "id": 10018617,
          "aisle": "Sweet Snacks;Baking",
          "image": "graham-crackers.jpg",
          "consistency": "SOLID",
          "name": "graham cracker crumbs",
          "nameClean": "graham cracker crumbs",
          "original": "1 1/3 cups graham wafer crumbs",
          "originalName": "graham wafer crumbs",
          "amount": 1.3333334,
          "unit": "cups",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1.333,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 315.451,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        },
        {
          "id": 19335,
          "aisle": "Baking",
          "image": "sugar-in-bowl.png",
          "consistency": "SOLID",
          "name": "sugar",
          "nameClean": "sugar",
          "original": "3 tablespoons sugar",
          "originalName": "sugar",
          "amount": 3,
          "unit": "tablespoons",
          "meta": [],
          "measures": {
            "us": {
              "amount": 3,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            },
            "metric": {
              "amount": 3,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
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
          "original": "1/3 cup melted butter",
          "originalName": "melted butter",
          "amount": 0.33333334,
          "unit": "cup",
          "meta": [
            "melted"
          ],
          "measures": {
            "us": {
              "amount": 0.333,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 78.863,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        },
        {
          "id": 1001053,
          "aisle": "Milk, Eggs, Other Dairy",
          "image": "fluid-cream.jpg",
          "consistency": "LIQUID",
          "name": "whipping cream",
          "nameClean": "whipping cream",
          "original": "1/3 cup whipping cream",
          "originalName": "whipping cream",
          "amount": 0.33333334,
          "unit": "cup",
          "meta": [],
          "measures": {
            "us": {
              "amount": 0.333,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 78.863,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        },
        {
          "id": 10019087,
          "aisle": "Baking",
          "image": "white-chocolate-chips.jpg",
          "consistency": "SOLID",
          "name": "white chocolate chips",
          "nameClean": "white chocolate chips",
          "original": "1 cup good quality white chocolate chips",
          "originalName": "good quality white chocolate chips",
          "amount": 1,
          "unit": "cup",
          "meta": [
            "white"
          ],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "cup",
              "unitLong": "cup"
            },
            "metric": {
              "amount": 236.588,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        },
        {
          "id": 1017,
          "aisle": "Cheese",
          "image": "cream-cheese.jpg",
          "consistency": "SOLID",
          "name": "cream cheese",
          "nameClean": "cream cheese",
          "original": "3 ounces eight packages ounces cream cheese",
          "originalName": "eight packages ounces cream cheese",
          "amount": 3,
          "unit": "ounces",
          "meta": [],
          "measures": {
            "us": {
              "amount": 3,
              "unitShort": "oz",
              "unitLong": "ounces"
            },
            "metric": {
              "amount": 85.049,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 19335,
          "aisle": "Baking",
          "image": "sugar-in-bowl.png",
          "consistency": "SOLID",
          "name": "sugar",
          "nameClean": "sugar",
          "original": "1/2 cup sugar",
          "originalName": "sugar",
          "amount": 0.5,
          "unit": "cup",
          "meta": [],
          "measures": {
            "us": {
              "amount": 0.5,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 118.294,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        },
        {
          "id": 1123,
          "aisle": "Milk, Eggs, Other Dairy",
          "image": "egg.png",
          "consistency": "SOLID",
          "name": "eggs",
          "nameClean": "egg",
          "original": "3 eggs",
          "originalName": "eggs",
          "amount": 3,
          "unit": "",
          "meta": [],
          "measures": {
            "us": {
              "amount": 3,
              "unitShort": "",
              "unitLong": ""
            },
            "metric": {
              "amount": 3,
              "unitShort": "",
              "unitLong": ""
            }
          }
        },
        {
          "id": 2050,
          "aisle": "Baking",
          "image": "vanilla-extract.jpg",
          "consistency": "LIQUID",
          "name": "vanilla extract",
          "nameClean": "vanilla extract",
          "original": "3 teaspoons vanilla extract",
          "originalName": "vanilla extract",
          "amount": 3,
          "unit": "teaspoons",
          "meta": [],
          "measures": {
            "us": {
              "amount": 3,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            },
            "metric": {
              "amount": 3,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            }
          }
        },
        {
          "id": 1001053,
          "aisle": "Milk, Eggs, Other Dairy",
          "image": "fluid-cream.jpg",
          "consistency": "LIQUID",
          "name": "whipping cream",
          "nameClean": "whipping cream",
          "original": "1 cup whipping cream",
          "originalName": "whipping cream",
          "amount": 1,
          "unit": "cup",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "cup",
              "unitLong": "cup"
            },
            "metric": {
              "amount": 236.588,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        },
        {
          "id": 9302,
          "aisle": "Produce",
          "image": "raspberries.jpg",
          "consistency": "SOLID",
          "name": "raspberries",
          "nameClean": "raspberries",
          "original": "2 pints fresh raspberries",
          "originalName": "fresh raspberries",
          "amount": 2,
          "unit": "pints",
          "meta": [
            "fresh"
          ],
          "measures": {
            "us": {
              "amount": 2,
              "unitShort": "pts",
              "unitLong": "pints"
            },
            "metric": {
              "amount": 2,
              "unitShort": "pts",
              "unitLong": "pints"
            }
          }
        }
      ],
      "id": 665172,
      "title": "White Chocolate Cheesecake With Raspberries",
      "readyInMinutes": 45,
      "servings": 16,
      "sourceUrl": "https://www.foodista.com/recipe/3VJQ5HQW/white-chocolate-cheesecake-with-raspberries",
      "image": "https://spoonacular.com/recipeImages/665172-556x370.jpg",
      "imageType": "jpg",
      "summary": "The recipe White Chocolate Cheesecake With Raspberries can be made <b>in around about 45 minutes</b>. This recipe makes 16 servings with <b>288 calories</b>, <b>4g of protein</b>, and <b>18g of fat</b> each. For <b>$1.4 per serving</b>, this recipe <b>covers 7%</b> of your daily requirements of vitamins and minerals. It is brought to you by Foodista. 24 people have made this recipe and would make it again. If you have graham wafer crumbs, whipping cream, butter, and a few other ingredients on hand, you can make it. Taking all factors into account, this recipe <b>earns a spoonacular score of 19%</b>, which is not so great. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/chocolate-cheesecake-mousse-with-raspberries-519459\">Chocolate Cheesecake Mousse with Raspberries</a>, <a href=\"https://spoonacular.com/recipes/pistachio-roulade-with-raspberries-and-white-chocolate-1067810\">Pistachio Roulade with Raspberries and White Chocolate</a>, and <a href=\"https://spoonacular.com/recipes/white-chocolate-semifreddo-with-pistachios-and-raspberries-604579\">White Chocolate Semifreddo with Pistachios and Raspberries</a>.",
      "cuisines": [],
      "dishTypes": [],
      "diets": [],
      "occasions": [],
      "instructions": "To make the crumb crust\nIn a small bowl combine the graham crumbs, sugar and melted butter.\nPress into the bottom of a lightly greased springform pan. (Grease bottom only! I also like to line the bottom with parchment paper for easy release of the cheesecake from the pan when it has cooled.)\nTo prepare the cheesecake\nIn a double boiler, melt together the  cup whipping cream and 1 cup pf white chocolate chips. You want this just at the melting point, so be careful not to overheat it. Let it cool to lukewarm if necessary after melting. Set aside to cool while you prepare the rest of the cheesecake batter.\nCream together the cream cheese and  cup sugar for a few minutes, scraping the bowl often.\nAdd the eggs, one at a time, beating well after each addition.\nStir in the vanilla extract and melted white chocolate.\nFinally blend in the 1 cup of whipping cream until smooth.\nPour over the prepared base and bake in a bain marie (See Note) at 325 degrees F for 60 to 70 minutes. The cheesecake may be beginning to lightly brown at the edges but a cheesecake does not need to brown at all to be fully baked. The surface of the cheesecake should lose any shine when the cake is properly baked. It can still be slightly wobbly just at the center at this point.\nRemove the cake from the oven and run a sharp knife completely around the edge of the pan. This will allow for the cheesecake to shrink as it cools and hopefully not crack (but who cares if it does? I am never bothered by a crack or two in the surface)\nAllow the cheesecake to cool thoroughly on a wire rack at room temperature. (Do not put a hot cheesecake into the fridge to cool quickly, this may result in an under baked cheesecake because the residual heat actually continues to set the cheesecake after it comes out of the oven).\nTo finish the cheesecake\nWhen completely cool cover the top with fresh raspberries and garnish with melted white chocolate if desired.\nChill completely in the refrigerator until ready to serve.",
      "analyzedInstructions": [
        {
          "name": "",
          "steps": [
            {
              "number": 1,
              "step": "To make the crumb crust",
              "ingredients": [
                {
                  "id": 0,
                  "name": "crust",
                  "localizedName": "crust",
                  "image": ""
                }
              ],
              "equipment": []
            },
            {
              "number": 2,
              "step": "In a small bowl combine the graham crumbs, sugar and melted butter.",
              "ingredients": [
                {
                  "id": 1001,
                  "name": "butter",
                  "localizedName": "butter",
                  "image": "butter-sliced.jpg"
                },
                {
                  "id": 19335,
                  "name": "sugar",
                  "localizedName": "sugar",
                  "image": "sugar-in-bowl.png"
                }
              ],
              "equipment": [
                {
                  "id": 404783,
                  "name": "bowl",
                  "localizedName": "bowl",
                  "image": "bowl.jpg"
                }
              ]
            },
            {
              "number": 3,
              "step": "Press into the bottom of a lightly greased springform pan. (Grease bottom only! I also like to line the bottom with parchment paper for easy release of the cheesecake from the pan when it has cooled.)",
              "ingredients": [],
              "equipment": [
                {
                  "id": 404770,
                  "name": "baking paper",
                  "localizedName": "baking paper",
                  "image": "baking-paper.jpg"
                },
                {
                  "id": 404650,
                  "name": "springform pan",
                  "localizedName": "springform pan",
                  "image": "cake-pan.png"
                }
              ]
            },
            {
              "number": 4,
              "step": "To prepare the cheesecake",
              "ingredients": [],
              "equipment": []
            },
            {
              "number": 5,
              "step": "In a double boiler, melt together the  cup whipping cream and 1 cup pf white chocolate chips. You want this just at the melting point, so be careful not to overheat it.",
              "ingredients": [
                {
                  "id": 10019087,
                  "name": "white chocolate chips",
                  "localizedName": "white chocolate chips",
                  "image": "white-chocolate-chips.jpg"
                },
                {
                  "id": 1001053,
                  "name": "whipping cream",
                  "localizedName": "whipping cream",
                  "image": "fluid-cream.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404699,
                  "name": "double boiler",
                  "localizedName": "double boiler",
                  "image": "double-boiler.jpg"
                }
              ]
            },
            {
              "number": 6,
              "step": "Let it cool to lukewarm if necessary after melting. Set aside to cool while you prepare the rest of the cheesecake batter.",
              "ingredients": [],
              "equipment": []
            },
            {
              "number": 7,
              "step": "Cream together the cream cheese and  cup sugar for a few minutes, scraping the bowl often.",
              "ingredients": [
                {
                  "id": 1017,
                  "name": "cream cheese",
                  "localizedName": "cream cheese",
                  "image": "cream-cheese.jpg"
                },
                {
                  "id": 1053,
                  "name": "cream",
                  "localizedName": "cream",
                  "image": "fluid-cream.jpg"
                },
                {
                  "id": 19335,
                  "name": "sugar",
                  "localizedName": "sugar",
                  "image": "sugar-in-bowl.png"
                }
              ],
              "equipment": [
                {
                  "id": 404783,
                  "name": "bowl",
                  "localizedName": "bowl",
                  "image": "bowl.jpg"
                }
              ]
            },
            {
              "number": 8,
              "step": "Add the eggs, one at a time, beating well after each addition.",
              "ingredients": [
                {
                  "id": 1123,
                  "name": "egg",
                  "localizedName": "egg",
                  "image": "egg.png"
                }
              ],
              "equipment": []
            },
            {
              "number": 9,
              "step": "Stir in the vanilla extract and melted white chocolate.",
              "ingredients": [
                {
                  "id": 2050,
                  "name": "vanilla extract",
                  "localizedName": "vanilla extract",
                  "image": "vanilla-extract.jpg"
                },
                {
                  "id": 19087,
                  "name": "white chocolate",
                  "localizedName": "white chocolate",
                  "image": "white-chocolate.jpg"
                }
              ],
              "equipment": []
            },
            {
              "number": 10,
              "step": "Finally blend in the 1 cup of whipping cream until smooth.",
              "ingredients": [
                {
                  "id": 1001053,
                  "name": "whipping cream",
                  "localizedName": "whipping cream",
                  "image": "fluid-cream.jpg"
                }
              ],
              "equipment": []
            },
            {
              "number": 11,
              "step": "Pour over the prepared base and bake in a bain marie (See Note) at 325 degrees F for 60 to 70 minutes. The cheesecake may be beginning to lightly brown at the edges but a cheesecake does not need to brown at all to be fully baked. The surface of the cheesecake should lose any shine when the cake is properly baked. It can still be slightly wobbly just at the center at this point.",
              "ingredients": [
                {
                  "id": 0,
                  "name": "base",
                  "localizedName": "base",
                  "image": ""
                }
              ],
              "equipment": [
                {
                  "id": 404699,
                  "name": "double boiler",
                  "localizedName": "double boiler",
                  "image": "double-boiler.jpg"
                },
                {
                  "id": 404784,
                  "name": "oven",
                  "localizedName": "oven",
                  "image": "oven.jpg",
                  "temperature": {
                    "number": 325,
                    "unit": "Fahrenheit"
                  }
                }
              ],
              "length": {
                "number": 60,
                "unit": "minutes"
              }
            },
            {
              "number": 12,
              "step": "Remove the cake from the oven and run a sharp knife completely around the edge of the pan. This will allow for the cheesecake to shrink as it cools and hopefully not crack (but who cares if it does? I am never bothered by a crack or two in the surface)",
              "ingredients": [],
              "equipment": [
                {
                  "id": 404745,
                  "name": "knife",
                  "localizedName": "knife",
                  "image": "chefs-knife.jpg"
                },
                {
                  "id": 404784,
                  "name": "oven",
                  "localizedName": "oven",
                  "image": "oven.jpg"
                },
                {
                  "id": 404645,
                  "name": "frying pan",
                  "localizedName": "frying pan",
                  "image": "pan.png"
                }
              ]
            },
            {
              "number": 13,
              "step": "Allow the cheesecake to cool thoroughly on a wire rack at room temperature. (Do not put a hot cheesecake into the fridge to cool quickly, this may result in an under baked cheesecake because the residual heat actually continues to set the cheesecake after it comes out of the oven).",
              "ingredients": [],
              "equipment": [
                {
                  "id": 405900,
                  "name": "wire rack",
                  "localizedName": "wire rack",
                  "image": "wire-rack.jpg"
                },
                {
                  "id": 404784,
                  "name": "oven",
                  "localizedName": "oven",
                  "image": "oven.jpg"
                }
              ]
            },
            {
              "number": 14,
              "step": "To finish the cheesecake",
              "ingredients": [],
              "equipment": []
            },
            {
              "number": 15,
              "step": "When completely cool cover the top with fresh raspberries and garnish with melted white chocolate if desired.",
              "ingredients": [
                {
                  "id": 19087,
                  "name": "white chocolate",
                  "localizedName": "white chocolate",
                  "image": "white-chocolate.jpg"
                },
                {
                  "id": 9302,
                  "name": "raspberries",
                  "localizedName": "raspberries",
                  "image": "raspberries.jpg"
                }
              ],
              "equipment": []
            },
            {
              "number": 16,
              "step": "Chill completely in the refrigerator until ready to serve.",
              "ingredients": [],
              "equipment": []
            }
          ]
        }
      ],
      "originalId": null,
      "spoonacularSourceUrl": "https://spoonacular.com/white-chocolate-cheesecake-with-raspberries-665172",
      "expanded": false,
      "nutrition_stats": {
        "calories": "288k",
        "carbs": "28g",
        "fat": "18g",
        "protein": "3g",
        "bad": [
          {
            "title": "Calories",
            "amount": "288k",
            "indented": false,
            "percentOfDailyNeeds": 14.42
          },
          {
            "title": "Fat",
            "amount": "18g",
            "indented": false,
            "percentOfDailyNeeds": 28.42
          },
          {
            "title": "Saturated Fat",
            "amount": "10g",
            "indented": true,
            "percentOfDailyNeeds": 66.16
          },
          {
            "title": "Carbohydrates",
            "amount": "28g",
            "indented": false,
            "percentOfDailyNeeds": 9.5
          },
          {
            "title": "Sugar",
            "amount": "19g",
            "indented": true,
            "percentOfDailyNeeds": 21.85
          },
          {
            "title": "Cholesterol",
            "amount": "76mg",
            "indented": false,
            "percentOfDailyNeeds": 25.41
          },
          {
            "title": "Sodium",
            "amount": "127mg",
            "indented": false,
            "percentOfDailyNeeds": 5.53
          },
          {
            "title": "Alcohol",
            "amount": "0.26g",
            "indented": false,
            "percentOfDailyNeeds": 1.43
          }
        ],
        "good": [
          {
            "title": "Protein",
            "amount": "3g",
            "indented": false,
            "percentOfDailyNeeds": 7.32
          },
          {
            "title": "Manganese",
            "amount": "0.4mg",
            "indented": false,
            "percentOfDailyNeeds": 20.12
          },
          {
            "title": "Vitamin C",
            "amount": "15mg",
            "indented": false,
            "percentOfDailyNeeds": 19
          },
          {
            "title": "Fiber",
            "amount": "4g",
            "indented": false,
            "percentOfDailyNeeds": 16.42
          },
          {
            "title": "Vitamin A",
            "amount": "548IU",
            "indented": false,
            "percentOfDailyNeeds": 10.97
          },
          {
            "title": "Phosphorus",
            "amount": "86mg",
            "indented": false,
            "percentOfDailyNeeds": 8.65
          },
          {
            "title": "Vitamin B2",
            "amount": "0.14mg",
            "indented": false,
            "percentOfDailyNeeds": 8.3
          },
          {
            "title": "Vitamin E",
            "amount": "1mg",
            "indented": false,
            "percentOfDailyNeeds": 6.96
          },
          {
            "title": "Calcium",
            "amount": "66mg",
            "indented": false,
            "percentOfDailyNeeds": 6.67
          },
          {
            "title": "Vitamin K",
            "amount": "6µg",
            "indented": false,
            "percentOfDailyNeeds": 6.46
          },
          {
            "title": "Folate",
            "amount": "21µg",
            "indented": false,
            "percentOfDailyNeeds": 5.46
          },
          {
            "title": "Magnesium",
            "amount": "21mg",
            "indented": false,
            "percentOfDailyNeeds": 5.38
          },
          {
            "title": "Iron",
            "amount": "0.9mg",
            "indented": false,
            "percentOfDailyNeeds": 5
          },
          {
            "title": "Selenium",
            "amount": "3µg",
            "indented": false,
            "percentOfDailyNeeds": 4.97
          },
          {
            "title": "Potassium",
            "amount": "169mg",
            "indented": false,
            "percentOfDailyNeeds": 4.85
          },
          {
            "title": "Vitamin B5",
            "amount": "0.48mg",
            "indented": false,
            "percentOfDailyNeeds": 4.76
          },
          {
            "title": "Zinc",
            "amount": "0.65mg",
            "indented": false,
            "percentOfDailyNeeds": 4.35
          },
          {
            "title": "Vitamin B3",
            "amount": "0.73mg",
            "indented": false,
            "percentOfDailyNeeds": 3.64
          },
          {
            "title": "Copper",
            "amount": "0.07mg",
            "indented": false,
            "percentOfDailyNeeds": 3.57
          },
          {
            "title": "Vitamin B1",
            "amount": "0.05mg",
            "indented": false,
            "percentOfDailyNeeds": 3.4
          },
          {
            "title": "Vitamin B6",
            "amount": "0.07mg",
            "indented": false,
            "percentOfDailyNeeds": 3.36
          },
          {
            "title": "Vitamin B12",
            "amount": "0.19µg",
            "indented": false,
            "percentOfDailyNeeds": 3.22
          },
          {
            "title": "Vitamin D",
            "amount": "0.41µg",
            "indented": false,
            "percentOfDailyNeeds": 2.71
          }
        ],
        "expires": 1634377170415,
        "isStale": true
      }
    }],
    //****** ApiKey ******/
    key: ["71572cc55469424d9b3c4f90dddce7a4",
      "3c8b0356c9fe4e68838c5a700de725a0",
      "b589b93113194426aaf359c262390e17",
      "ad17578f923946ffb9d9fe3902c7ac0b",
      "bc3abec2a0b749d285f7b43711c11c12",
      "8b75ca578a6942c6b 2b061a122b72380"
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
        number: 20
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

  queryRecipeNutrition (recipeID) {
    return axios({
      url: "https://api.spoonacular.com/recipes/" + recipeID + "/nutritionWidget.json",
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
          this.queryRecipeNutrition()
        })
      }
    })
  }

  // Call Liked Recipes Api when to allow user to save a recipe
  saveRecipe (userID, recipeID) {
    return axios.post({
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

  useEffect(()=> {
    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn == true){
        setUserStatus(response.data.user[0].user_name);
      }
    })
  }, []);

  //Generate a list of recipes .
  async getApplicableRecipes (queryTaste) {
    //Number of recipes returned.
    const recipes = await this.queryRecipes()
    for (let x = 0; x < recipes.length; x++) {
      recipes[x].expanded = false
      const taste_stats = await this.queryRecipeTaste(recipes[x].id)
      if (queryTaste.includes("sweet")) {
        if (taste_stats.sweetness >= 50) {
          const nutrition_stats = await this.queryRecipeNutrition(recipes[x].id)
          recipes[x].nutrition_stats = nutrition_stats
          console.log(recipes[x])
          this.setState({
            recipe_list: [...this.state.recipe_list, recipes[x]]
          })
          continue
        }
      }
      if (queryTaste.includes("salty")) {
        if (taste_stats.saltiness >= 30) {
          const nutrition_stats = await this.queryRecipeNutrition(recipes[x].id)
          recipes[x].nutrition_stats = nutrition_stats
          this.setState({
            recipe_list: [...this.state.recipe_list, recipes[x]]
          })
          continue
        }
      }

      if (queryTaste.includes("sour")) {
        if (taste_stats.sourness >= 20) {
          const nutrition_stats = await this.queryRecipeNutrition(recipes[x].id)
          recipes[x].nutrition_stats = nutrition_stats
          this.setState({
            recipe_list: [...this.state.recipe_list, recipes[x]]
          })
          continue
        }
      }

      if (queryTaste.includes("bitter")) {
        if (taste_stats.bitterness >= 20) {
          const nutrition_stats = await this.queryRecipeNutrition(recipes[x].id)
          recipes[x].nutrition_stats = nutrition_stats
          this.setState({
            recipe_list: [...this.state.recipe_list, recipes[x]]
          })
          continue
        }
      }

      if (queryTaste.includes("savory")) {
        if (taste_stats.savoriness >= 30) {
          const nutrition_stats = await this.queryRecipeNutrition(recipes[x].id)
          recipes[x].nutrition_stats = nutrition_stats
          this.setState({
            recipe_list: [...this.state.recipe_list, recipes[x]]
          })
          continue
        }
      }
    }
    console.log(this.state.recipe_list)
  }

  //Monitor change of search item and call getApplicableRecipes if there is a change.
  componentWillReceiveProps (nextProps) {
    if (nextProps.parsed_search_item !== this.props.parsed_search_item) {
      this.setState({
        recipe_list: []
      }, () => { this.getApplicableRecipes(nextProps.parsed_search_item); this.props.getShowInstruct(false) })
      //If it is a different input, regenerate the recipe list.
    }
  }

  render () {
    return (
      <div className="recipe_list w">
        <ul>
          {this.state.recipe_list.map((item, index) => (
            ((this.props.diet_option === "Gain muscle"
              && item.nutrition_stats.good[0].percentOfDailyNeeds >= 20)
              ||
              (this.props.diet_option === "Lower body fat rate"
                && item.nutrition_stats.bad[3].percentOfDailyNeeds <= 30)
              ||
              (this.props.diet_option === "None" || this.props.diet_option === "Stay in shape")
            ) ?

            <li key={item.id} className="recipe">
              {/* TODO: add margin under recipes so they spread out from one another */}
              {/* TODO: add margin under recipes so they spread out from one another */}
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
                    {/*make heart go red when the button is pressed to represent that it has been clicked */}
                    <FavButton />
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
                  <div className={"instructions"}
                    dangerouslySetInnerHTML={
                      {
                        __html: item.instructions
                      }
                    }></div>
                  <h2 style={{ marginLeft: "30px" }}>Nutrition</h2>
                  <div className="nutrition">
                    {item.nutrition_stats.bad[0].percentOfDailyNeeds >= 20 ?
                      <div className="high_nutrition">High Calories:&nbsp;
                        {item.nutrition_stats.bad[0].percentOfDailyNeeds}
                        (Percent of Daily Needs)
                      </div>
                      : <div className='low_nutrition'>Low Calories:&nbsp;
                        {item.nutrition_stats.bad[0].percentOfDailyNeeds}
                        (Percent of Daily Needs)
                      </div>
                    }
                    {item.nutrition_stats.bad[1].percentOfDailyNeeds
                      + item.nutrition_stats.bad[2].percentOfDailyNeeds >= 15 ?
                      <div className="high_nutrition">High Fat:&nbsp;
                        {item.nutrition_stats.bad[1].percentOfDailyNeeds
                          + item.nutrition_stats.bad[2].percentOfDailyNeeds}
                        (Percent of Daily Needs)
                      </div>
                      : <div className="low_nutrition">Low Fat:&nbsp;
                        {item.nutrition_stats.bad[1].percentOfDailyNeeds
                          + item.nutrition_stats.bad[2].percentOfDailyNeeds}
                        (Percent of Daily Needs)
                      </div>
                    }
                    {item.nutrition_stats.bad[3].percentOfDailyNeeds >= 30 ?
                      <div className="high_nutrition">High Carbohydrates:&nbsp;
                        {item.nutrition_stats.bad[3].percentOfDailyNeeds}
                        (Percent of Daily Needs)
                      </div>
                      : <div className="low_nutrition">Low Carbohydrates:&nbsp;
                        {item.nutrition_stats.bad[3].percentOfDailyNeeds}
                        (Percent of Daily Needs)
                      </div>
                    }
                    {item.nutrition_stats.good[0].percentOfDailyNeeds >= 20 ?
                      <div className="low_nutrition">High Protein:&nbsp;
                        {item.nutrition_stats.good[0].percentOfDailyNeeds}
                        (Percent of Daily Needs)
                      </div>
                      : <div className="high_nutrition">Low Protein:&nbsp;
                        {item.nutrition_stats.good[0].percentOfDailyNeeds}
                        (Percent of Daily Needs)
                      </div>
                    }
                  </div>
                </Collapse>
              </Card>
            </li>
              :
          null
          )
          )}

        </ul>
      </div >
    )
  }
}
