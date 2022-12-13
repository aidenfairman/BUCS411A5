import React, { Component } from 'react'
import axios from 'axios'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Button, Card, TextField, Collapse, Typography } from "@mui/material"
import CardActions from '@mui/material/CardActions'
import IconButton, { IconButtonProps } from '@mui/material/IconButton'
import { styled } from '@mui/material/styles'
import { spacing } from '@mui/system'
import { useState } from 'react'
// import { useState } from 'react';
import FavButton from "./FavButton"
import Cookies from "js-cookie"


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


// const FavRecipes = (user, recipes) => {
export default class FavRecipes extends React.Component {
    // const [list, setList] = useState([]);
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
            "weightWatcherSmartPoints": 24,
            "gaps": "no",
            "preparationMinutes": -1,
            "cookingMinutes": -1,
            "aggregateLikes": 53,
            "healthScore": 0,
            "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
            "license": "CC BY 3.0",
            "sourceName": "Foodista",
            "pricePerServing": 68.21,
            "extendedIngredients": [
                {
                    "id": 18371,
                    "aisle": "Baking",
                    "image": "white-powder.jpg",
                    "consistency": "SOLID",
                    "name": "baking powder",
                    "nameClean": "low sodium baking powder",
                    "original": "1/2 teaspoon baking powder",
                    "originalName": "baking powder",
                    "amount": 0.5,
                    "unit": "teaspoon",
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
                    "id": 18372,
                    "aisle": "Baking",
                    "image": "white-powder.jpg",
                    "consistency": "SOLID",
                    "name": "baking soda",
                    "nameClean": "baking soda",
                    "original": "1/2 teaspoon baking soda",
                    "originalName": "baking soda",
                    "amount": 0.5,
                    "unit": "teaspoon",
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
                    "id": 19334,
                    "aisle": "Baking",
                    "image": "light-brown-sugar.jpg",
                    "consistency": "SOLID",
                    "name": "brown sugar",
                    "nameClean": "golden brown sugar",
                    "original": "1 cup brown sugar",
                    "originalName": "brown sugar",
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
                    "id": 1001,
                    "aisle": "Milk, Eggs, Other Dairy",
                    "image": "butter-sliced.jpg",
                    "consistency": "SOLID",
                    "name": "butter",
                    "nameClean": "butter",
                    "original": "1/2 cup melted butter",
                    "originalName": "melted butter",
                    "amount": 0.5,
                    "unit": "cup",
                    "meta": [
                        "melted"
                    ],
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
                    "id": 2010,
                    "aisle": "Spices and Seasonings",
                    "image": "cinnamon.jpg",
                    "consistency": "SOLID",
                    "name": "cinnamon",
                    "nameClean": "cinnamon",
                    "original": "1/2 teaspoon cinnamon",
                    "originalName": "cinnamon",
                    "amount": 0.5,
                    "unit": "teaspoon",
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
                    "id": 19165,
                    "aisle": "Baking",
                    "image": "cocoa-powder.png",
                    "consistency": "SOLID",
                    "name": "cocoa powder",
                    "nameClean": "cacao powder",
                    "original": "1 teaspoon cocoa powder",
                    "originalName": "cocoa powder",
                    "amount": 1,
                    "unit": "teaspoon",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        }
                    }
                },
                {
                    "id": 1123,
                    "aisle": "Milk, Eggs, Other Dairy",
                    "image": "egg.png",
                    "consistency": "SOLID",
                    "name": "egg",
                    "nameClean": "egg",
                    "original": "1 egg",
                    "originalName": "egg",
                    "amount": 1,
                    "unit": "",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "",
                            "unitLong": ""
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "",
                            "unitLong": ""
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
                    "original": "1 cup flour",
                    "originalName": "flour",
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
                    "id": 93644,
                    "aisle": "Nut butters, Jams, and Honey",
                    "image": "marshmallow-fluff.png",
                    "consistency": "SOLID",
                    "name": "marshmallow fluff",
                    "nameClean": "marshmallow cream",
                    "original": "7 1/2 ounces jar of marshmallow fluff",
                    "originalName": "marshmallow fluff",
                    "amount": 7.5,
                    "unit": "ounces",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 7.5,
                            "unitShort": "oz",
                            "unitLong": "ounces"
                        },
                        "metric": {
                            "amount": 212.621,
                            "unitShort": "g",
                            "unitLong": "grams"
                        }
                    }
                },
                {
                    "id": 19336,
                    "aisle": "Baking",
                    "image": "powdered-sugar.jpg",
                    "consistency": "SOLID",
                    "name": "powdered sugar",
                    "nameClean": "powdered sugar",
                    "original": "1 cup powdered sugar",
                    "originalName": "powdered sugar",
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
                    "id": 8120,
                    "aisle": "Cereal",
                    "image": "rolled-oats.jpg",
                    "consistency": "SOLID",
                    "name": "rolled oats",
                    "nameClean": "rolled oats",
                    "original": "1 cup rolled oats",
                    "originalName": "rolled oats",
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
                    "id": 2047,
                    "aisle": "Spices and Seasonings",
                    "image": "salt.jpg",
                    "consistency": "SOLID",
                    "name": "salt",
                    "nameClean": "table salt",
                    "original": "1/4 teaspoon salt",
                    "originalName": "salt",
                    "amount": 0.25,
                    "unit": "teaspoon",
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
                    "id": 2050,
                    "aisle": "Baking",
                    "image": "vanilla-extract.jpg",
                    "consistency": "LIQUID",
                    "name": "vanilla",
                    "nameClean": "vanilla extract",
                    "original": "2 teaspoons vanilla",
                    "originalName": "vanilla",
                    "amount": 2,
                    "unit": "teaspoons",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 2,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        },
                        "metric": {
                            "amount": 2,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        }
                    }
                },
                {
                    "id": 4615,
                    "aisle": "Oil, Vinegar, Salad Dressing;Baking",
                    "image": "shortening.jpg",
                    "consistency": "SOLID",
                    "name": "vegetable shortening",
                    "nameClean": "shortening",
                    "original": "1 cup vegetable shortening",
                    "originalName": "vegetable shortening",
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
                }
            ],
            "id": 647046,
            "title": "Homemade Oatmeal Cream Pies",
            "readyInMinutes": 45,
            "servings": 10,
            "sourceUrl": "http://www.foodista.com/recipe/HPFZ4GTS/homemade-oatmeal-cream-pies",
            "image": "https://spoonacular.com/recipeImages/647046-556x370.jpg",
            "imageType": "jpg",
            "summary": "Homemade Oatmeal Cream Pies might be just the dessert you are searching for. For <b>68 cents per serving</b>, this recipe <b>covers 6%</b> of your daily requirements of vitamins and minerals. One serving contains <b>544 calories</b>, <b>3g of protein</b>, and <b>31g of fat</b>. A mixture of butter, rolled oats, brown sugar, and a handful of other ingredients are all it takes to make this recipe so scrumptious. A couple people made this recipe, and 53 would say it hit the spot. From preparation to the plate, this recipe takes around <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 23%</b>. This score is not so amazing. Try <a href=\"https://spoonacular.com/recipes/homemade-oatmeal-cream-pies-483140\">Homemade Oatmeal Cream Pies</a>, <a href=\"https://spoonacular.com/recipes/homemade-oatmeal-cream-pies-510222\">Homemade Oatmeal Cream Pies</a>, and <a href=\"https://spoonacular.com/recipes/homemade-oatmeal-cream-pies-539908\">Homemade Oatmeal Cream Pies</a> for similar recipes.",
            "cuisines": [],
            "dishTypes": [
                "side dish"
            ],
            "diets": [],
            "occasions": [],
            "instructions": "<ol><li>Preheat the oven to 350 degrees F. Line cookie sheets with parchment paper. Sift the dry ingredients into a medium bowl and set aside.</li><li>Use an electric mixer to cream the brown sugar, butter, egg and vanilla. Once smooth, slowly add the dry mixture to the wet until well combined. Stir in the oats.</li><li>Use a tablespoon-sized scoop to form equal dough balls. Allow them plenty of space to spread. Bake for 7-9 minutes. Allow the cookies to cool completely before moving off the parchment paper.</li><li>Cream the shortening, powdered sugar, and vanilla together until smooth. Mix in the marshmallow fluff.</li><li>To assemble: Match up two cookies that are of equal size and shape. Turn the bottom cookies over. Use a piping bag (or zip-bag with the corner cut off) to pipe the filling onto the bottom cookie. This is much easier than trying to spread it. Then add the top cookie of each cream pie and press down.</li><li>I found I liked a thin layer of cream filling better than a thick layer--but you should have plenty if you want to pile it on!</li><li>Makes approximately 10 cream pies. (20 cookies)</li></ol>",
            "analyzedInstructions": [
                {
                    "name": "",
                    "steps": [
                        {
                            "number": 1,
                            "step": "Preheat the oven to 350 degrees F. Line cookie sheets with parchment paper. Sift the dry ingredients into a medium bowl and set aside.Use an electric mixer to cream the brown sugar, butter, egg and vanilla. Once smooth, slowly add the dry mixture to the wet until well combined. Stir in the oats.Use a tablespoon-sized scoop to form equal dough balls. Allow them plenty of space to spread.",
                            "ingredients": [
                                {
                                    "id": 19334,
                                    "name": "brown sugar",
                                    "localizedName": "brown sugar",
                                    "image": "dark-brown-sugar.png"
                                },
                                {
                                    "id": 1052050,
                                    "name": "vanilla",
                                    "localizedName": "vanilla",
                                    "image": "vanilla.jpg"
                                },
                                {
                                    "id": 1001,
                                    "name": "butter",
                                    "localizedName": "butter",
                                    "image": "butter-sliced.jpg"
                                },
                                {
                                    "id": 10118192,
                                    "name": "cookies",
                                    "localizedName": "cookies",
                                    "image": "shortbread-cookies.jpg"
                                },
                                {
                                    "id": 0,
                                    "name": "spread",
                                    "localizedName": "spread",
                                    "image": ""
                                },
                                {
                                    "id": 1053,
                                    "name": "cream",
                                    "localizedName": "cream",
                                    "image": "fluid-cream.jpg"
                                },
                                {
                                    "id": 0,
                                    "name": "dough",
                                    "localizedName": "dough",
                                    "image": "pizza-dough"
                                },
                                {
                                    "id": 8120,
                                    "name": "oats",
                                    "localizedName": "oats",
                                    "image": "rolled-oats.jpg"
                                },
                                {
                                    "id": 1123,
                                    "name": "egg",
                                    "localizedName": "egg",
                                    "image": "egg.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404770,
                                    "name": "baking paper",
                                    "localizedName": "baking paper",
                                    "image": "baking-paper.jpg"
                                },
                                {
                                    "id": 404628,
                                    "name": "hand mixer",
                                    "localizedName": "hand mixer",
                                    "image": "hand-mixer.png"
                                },
                                {
                                    "id": 404727,
                                    "name": "baking sheet",
                                    "localizedName": "baking sheet",
                                    "image": "baking-sheet.jpg"
                                },
                                {
                                    "id": 404783,
                                    "name": "bowl",
                                    "localizedName": "bowl",
                                    "image": "bowl.jpg"
                                },
                                {
                                    "id": 404784,
                                    "name": "oven",
                                    "localizedName": "oven",
                                    "image": "oven.jpg",
                                    "temperature": {
                                        "number": 350,
                                        "unit": "Fahrenheit"
                                    }
                                }
                            ]
                        },
                        {
                            "number": 2,
                            "step": "Bake for 7-9 minutes. Allow the cookies to cool completely before moving off the parchment paper.Cream the shortening, powdered sugar, and vanilla together until smooth.",
                            "ingredients": [
                                {
                                    "id": 19336,
                                    "name": "powdered sugar",
                                    "localizedName": "powdered sugar",
                                    "image": "powdered-sugar.jpg"
                                },
                                {
                                    "id": 4615,
                                    "name": "shortening",
                                    "localizedName": "shortening",
                                    "image": "shortening.jpg"
                                },
                                {
                                    "id": 10118192,
                                    "name": "cookies",
                                    "localizedName": "cookies",
                                    "image": "shortbread-cookies.jpg"
                                },
                                {
                                    "id": 1052050,
                                    "name": "vanilla",
                                    "localizedName": "vanilla",
                                    "image": "vanilla.jpg"
                                },
                                {
                                    "id": 1053,
                                    "name": "cream",
                                    "localizedName": "cream",
                                    "image": "fluid-cream.jpg"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404770,
                                    "name": "baking paper",
                                    "localizedName": "baking paper",
                                    "image": "baking-paper.jpg"
                                },
                                {
                                    "id": 404784,
                                    "name": "oven",
                                    "localizedName": "oven",
                                    "image": "oven.jpg"
                                }
                            ],
                            "length": {
                                "number": 9,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 3,
                            "step": "Mix in the marshmallow fluff.To assemble: Match up two cookies that are of equal size and shape. Turn the bottom cookies over. Use a piping bag (or zip-bag with the corner cut off) to pipe the filling onto the bottom cookie. This is much easier than trying to spread it. Then add the top cookie of each cream pie and press down.I found I liked a thin layer of cream filling better than a thick layer--but you should have plenty if you want to pile it on!Makes approximately 10 cream pies. (20 cookies)",
                            "ingredients": [
                                {
                                    "id": 93644,
                                    "name": "marshmallow cream",
                                    "localizedName": "marshmallow cream",
                                    "image": "marshmallow-fluff.png"
                                },
                                {
                                    "id": 10118192,
                                    "name": "cookies",
                                    "localizedName": "cookies",
                                    "image": "shortbread-cookies.jpg"
                                },
                                {
                                    "id": 0,
                                    "name": "spread",
                                    "localizedName": "spread",
                                    "image": ""
                                },
                                {
                                    "id": 1053,
                                    "name": "cream",
                                    "localizedName": "cream",
                                    "image": "fluid-cream.jpg"
                                }
                            ],
                            "equipment": []
                        }
                    ]
                }
            ],
            "originalId": null,
            "spoonacularSourceUrl": "https://spoonacular.com/homemade-oatmeal-cream-pies-647046",
            "expanded": false,
            "nutrition_stats": {
                "calories": "543k",
                "carbs": "67g",
                "fat": "30g",
                "protein": "3g",
                "bad": [
                    {
                        "title": "Calories",
                        "amount": "543k",
                        "indented": false,
                        "percentOfDailyNeeds": 27.19
                    },
                    {
                        "title": "Fat",
                        "amount": "30g",
                        "indented": false,
                        "percentOfDailyNeeds": 47.36
                    },
                    {
                        "title": "Saturated Fat",
                        "amount": "11g",
                        "indented": true,
                        "percentOfDailyNeeds": 70.04
                    },
                    {
                        "title": "Carbohydrates",
                        "amount": "67g",
                        "indented": false,
                        "percentOfDailyNeeds": 22.34
                    },
                    {
                        "title": "Sugar",
                        "amount": "46g",
                        "indented": true,
                        "percentOfDailyNeeds": 51.56
                    },
                    {
                        "title": "Cholesterol",
                        "amount": "40mg",
                        "indented": false,
                        "percentOfDailyNeeds": 13.59
                    },
                    {
                        "title": "Sodium",
                        "amount": "208mg",
                        "indented": false,
                        "percentOfDailyNeeds": 9.06
                    },
                    {
                        "title": "Alcohol",
                        "amount": "0.28g",
                        "indented": false,
                        "percentOfDailyNeeds": 1.53
                    }
                ],
                "good": [
                    {
                        "title": "Protein",
                        "amount": "3g",
                        "indented": false,
                        "percentOfDailyNeeds": 6.11
                    },
                    {
                        "title": "Manganese",
                        "amount": "0.42mg",
                        "indented": false,
                        "percentOfDailyNeeds": 20.96
                    },
                    {
                        "title": "Selenium",
                        "amount": "8µg",
                        "indented": false,
                        "percentOfDailyNeeds": 12
                    },
                    {
                        "title": "Vitamin K",
                        "amount": "11µg",
                        "indented": false,
                        "percentOfDailyNeeds": 11.38
                    },
                    {
                        "title": "Vitamin E",
                        "amount": "1mg",
                        "indented": false,
                        "percentOfDailyNeeds": 10.73
                    },
                    {
                        "title": "Vitamin B1",
                        "amount": "0.14mg",
                        "indented": false,
                        "percentOfDailyNeeds": 9.47
                    },
                    {
                        "title": "Phosphorus",
                        "amount": "73mg",
                        "indented": false,
                        "percentOfDailyNeeds": 7.36
                    },
                    {
                        "title": "Folate",
                        "amount": "28µg",
                        "indented": false,
                        "percentOfDailyNeeds": 7.03
                    },
                    {
                        "title": "Iron",
                        "amount": "1mg",
                        "indented": false,
                        "percentOfDailyNeeds": 6.78
                    },
                    {
                        "title": "Vitamin A",
                        "amount": "307IU",
                        "indented": false,
                        "percentOfDailyNeeds": 6.15
                    },
                    {
                        "title": "Vitamin B2",
                        "amount": "0.1mg",
                        "indented": false,
                        "percentOfDailyNeeds": 5.98
                    },
                    {
                        "title": "Fiber",
                        "amount": "1g",
                        "indented": false,
                        "percentOfDailyNeeds": 4.99
                    },
                    {
                        "title": "Vitamin B3",
                        "amount": "0.87mg",
                        "indented": false,
                        "percentOfDailyNeeds": 4.34
                    },
                    {
                        "title": "Magnesium",
                        "amount": "17mg",
                        "indented": false,
                        "percentOfDailyNeeds": 4.34
                    },
                    {
                        "title": "Calcium",
                        "amount": "39mg",
                        "indented": false,
                        "percentOfDailyNeeds": 3.98
                    },
                    {
                        "title": "Vitamin B5",
                        "amount": "0.39mg",
                        "indented": false,
                        "percentOfDailyNeeds": 3.95
                    },
                    {
                        "title": "Copper",
                        "amount": "0.07mg",
                        "indented": false,
                        "percentOfDailyNeeds": 3.44
                    },
                    {
                        "title": "Zinc",
                        "amount": "0.47mg",
                        "indented": false,
                        "percentOfDailyNeeds": 3.12
                    },
                    {
                        "title": "Potassium",
                        "amount": "104mg",
                        "indented": false,
                        "percentOfDailyNeeds": 2.98
                    },
                    {
                        "title": "Vitamin D",
                        "amount": "0.26µg",
                        "indented": false,
                        "percentOfDailyNeeds": 1.72
                    },
                    {
                        "title": "Vitamin B6",
                        "amount": "0.03mg",
                        "indented": false,
                        "percentOfDailyNeeds": 1.56
                    }
                ],
                "expires": 1639471362970,
                "isStale": true
            }
        },
        {
            "vegetarian": false,
            "vegan": false,
            "glutenFree": true,
            "dairyFree": false,
            "veryHealthy": false,
            "cheap": false,
            "veryPopular": false,
            "sustainable": false,
            "lowFodmap": false,
            "weightWatcherSmartPoints": 18,
            "gaps": "no",
            "preparationMinutes": -1,
            "cookingMinutes": -1,
            "aggregateLikes": 103,
            "healthScore": 6,
            "creditsText": "foodista.com",
            "sourceName": "foodista.com",
            "pricePerServing": 241.72,
            "extendedIngredients": [
                {
                    "id": 10123,
                    "aisle": "Meat",
                    "image": "raw-bacon.png",
                    "consistency": "SOLID",
                    "name": "bacon",
                    "nameClean": "applewood smoked bacon",
                    "original": "8 slices of thick cut bacon",
                    "originalName": "thick cut bacon",
                    "amount": 8,
                    "unit": "slices",
                    "meta": [
                        "thick cut"
                    ],
                    "measures": {
                        "us": {
                            "amount": 8,
                            "unitShort": "slice",
                            "unitLong": "slices"
                        },
                        "metric": {
                            "amount": 8,
                            "unitShort": "slice",
                            "unitLong": "slices"
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
                    "original": "2 oz. cream cheese",
                    "originalName": "cream cheese",
                    "amount": 2,
                    "unit": "oz",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 2,
                            "unitShort": "oz",
                            "unitLong": "ounces"
                        },
                        "metric": {
                            "amount": 56.699,
                            "unitShort": "g",
                            "unitLong": "grams"
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
                    "original": "4 eggs",
                    "originalName": "eggs",
                    "amount": 4,
                    "unit": "",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 4,
                            "unitShort": "",
                            "unitLong": ""
                        },
                        "metric": {
                            "amount": 4,
                            "unitShort": "",
                            "unitLong": ""
                        }
                    }
                },
                {
                    "id": 11297,
                    "aisle": "Produce;Spices and Seasonings",
                    "image": "parsley.jpg",
                    "consistency": "SOLID",
                    "name": "fresh parsley",
                    "nameClean": "parsley",
                    "original": "fresh parsley for garnish",
                    "originalName": "fresh parsley for garnish",
                    "amount": 4,
                    "unit": "servings",
                    "meta": [
                        "fresh",
                        "for garnish"
                    ],
                    "measures": {
                        "us": {
                            "amount": 4,
                            "unitShort": "servings",
                            "unitLong": "servings"
                        },
                        "metric": {
                            "amount": 4,
                            "unitShort": "servings",
                            "unitLong": "servings"
                        }
                    }
                },
                {
                    "id": 1159,
                    "aisle": "Cheese",
                    "image": "goat-cheese.jpg",
                    "consistency": "SOLID",
                    "name": "goat cheese",
                    "nameClean": "goat cheese",
                    "original": "4 oz. goat cheese",
                    "originalName": "goat cheese",
                    "amount": 4,
                    "unit": "oz",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 4,
                            "unitShort": "oz",
                            "unitLong": "ounces"
                        },
                        "metric": {
                            "amount": 113.398,
                            "unitShort": "g",
                            "unitLong": "grams"
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
                    "original": "1 tablespoon olive oil",
                    "originalName": "olive oil",
                    "amount": 1,
                    "unit": "tablespoon",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "Tbsp",
                            "unitLong": "Tbsp"
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "Tbsp",
                            "unitLong": "Tbsp"
                        }
                    }
                },
                {
                    "id": 10035137,
                    "aisle": "Pasta and Rice;Ethnic Foods;Baking",
                    "image": "cornmeal.png",
                    "consistency": "SOLID",
                    "name": "polenta",
                    "nameClean": "polenta",
                    "original": "1 cup polenta",
                    "originalName": "polenta",
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
                    "id": 1102047,
                    "aisle": "Spices and Seasonings",
                    "image": "salt-and-pepper.jpg",
                    "consistency": "SOLID",
                    "name": "Salt & Pepper",
                    "nameClean": "salt and pepper",
                    "original": "salt & black pepper",
                    "originalName": "salt & black pepper",
                    "amount": 4,
                    "unit": "servings",
                    "meta": [
                        "black"
                    ],
                    "measures": {
                        "us": {
                            "amount": 4,
                            "unitShort": "servings",
                            "unitLong": "servings"
                        },
                        "metric": {
                            "amount": 4,
                            "unitShort": "servings",
                            "unitLong": "servings"
                        }
                    }
                }
            ],
            "id": 640676,
            "title": "Creamy Polenta with Egg, Arrabiata & Bacon",
            "readyInMinutes": 45,
            "servings": 4,
            "sourceUrl": "http://www.foodista.com/recipe/WPBY4PQQ/creamy-polenta-with-egg-arrabiata-bacon",
            "image": "https://spoonacular.com/recipeImages/640676-556x370.jpg",
            "imageType": "jpg",
            "summary": "You can never have too many main course recipes, so give Creamy Polenta with Egg, Arrabiata & Bacon a try. This recipe makes 4 servings with <b>550 calories</b>, <b>21g of protein</b>, and <b>36g of fat</b> each. For <b>$2.42 per serving</b>, this recipe <b>covers 16%</b> of your daily requirements of vitamins and minerals. This recipe is liked by 103 foodies and cooks. A mixture of bacon, eggs, goat cheese, and a handful of other ingredients are all it takes to make this recipe so flavorful. To use up the eggs you could follow this main course with the <a href=\"https://spoonacular.com/recipes/rose-levy-beranbaums-chocolate-tomato-cake-with-mystery-ganache-27408\">Rose Levy Beranbaum's Chocolate Tomato Cake with Mystery Ganache</a> as a dessert. It is a good option if you're following a <b>gluten free and fodmap friendly</b> diet. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 58%</b>. This score is good. Similar recipes include <a href=\"https://spoonacular.com/recipes/creamy-polenta-with-bacon-and-sage-147819\">Creamy Polenta with Bacon and Sage</a>, <a href=\"https://spoonacular.com/recipes/creamy-polenta-with-bacon-and-cranberries-310561\">Creamy Polenta with Bacon and Cranberries</a>, and <a href=\"https://spoonacular.com/recipes/creamy-breakfast-polenta-with-asiago-thyme-bacon-and-poached-eggs-502502\">Creamy Breakfast Polenta with Asiago, Thyme, Bacon, and Poached Eggs</a>.",
            "cuisines": [],
            "dishTypes": [
                "lunch",
                "main course",
                "main dish",
                "dinner"
            ],
            "diets": [
                "gluten free"
            ],
            "occasions": [],
            "instructions": "<ol><li>Preheat the oven to 425 degrees F.</li><li>Bring 4 cups of water to a boil in a medium saucepan. Slowly whisk in the polenta, whisking continuously until there are no lumps and it begins to thicken slightly. Reduce the heat to medium-low and allow the polenta to simmer for 30 minutes, stirring occasionally to keep it from overcooking.</li><li>When the polenta has thickened and become tender, stir in the goat cheese and cream cheese. Stir until the cheese are melted and fully incorporated into the polenta. Add salt and pepper to taste.</li><li>Meanwhile, place the bacon on a parchment-lined baking sheet and place in the preheated oven on the middle rack. Roast for 15-18 minutes or until the bacon is golden and crisp. When it is done, remove it from the oven and place the bacon strips on a paper towel-lined plate. Set aside.</li><li>In a small saucepan or in the microwave, heat the marinara sauce until just simmering. Keep warm until you are ready to assemble your bowls.</li><li>In a large non-stick skillet, heat the 1 T olive oil over medium heat. If your pan is large enough, add the four eggs and allow them to cook until the whites are opaque but still a bit runny on the top. Put a lid over the pan and turn off the heat. Allow the eggs to continue cooking under the lid until the whites are set but the yolk is still runny. If your pan is small, fry the eggs in batches.</li><li>To assemble the bowls, spoon even amounts of polenta in each bowl. Top with a spoonful of the arrabiata, 1 egg and 2 slices of bacon. Garnish with chopped thyme or parsley leaves. Serve immediately.</li></ol>",
            "analyzedInstructions": [
                {
                    "name": "",
                    "steps": [
                        {
                            "number": 1,
                            "step": "Preheat the oven to 425 degrees F.Bring 4 cups of water to a boil in a medium saucepan. Slowly whisk in the polenta, whisking continuously until there are no lumps and it begins to thicken slightly. Reduce the heat to medium-low and allow the polenta to simmer for 30 minutes, stirring occasionally to keep it from overcooking.When the polenta has thickened and become tender, stir in the goat cheese and cream cheese. Stir until the cheese are melted and fully incorporated into the polenta.",
                            "ingredients": [
                                {
                                    "id": 1017,
                                    "name": "cream cheese",
                                    "localizedName": "cream cheese",
                                    "image": "cream-cheese.jpg"
                                },
                                {
                                    "id": 1159,
                                    "name": "goat cheese",
                                    "localizedName": "goat cheese",
                                    "image": "goat-cheese.jpg"
                                },
                                {
                                    "id": 10035137,
                                    "name": "polenta",
                                    "localizedName": "polenta",
                                    "image": "cornmeal.png"
                                },
                                {
                                    "id": 1041009,
                                    "name": "cheese",
                                    "localizedName": "cheese",
                                    "image": "cheddar-cheese.png"
                                },
                                {
                                    "id": 14412,
                                    "name": "water",
                                    "localizedName": "water",
                                    "image": "water.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404661,
                                    "name": "whisk",
                                    "localizedName": "whisk",
                                    "image": "whisk.png"
                                },
                                {
                                    "id": 404669,
                                    "name": "sauce pan",
                                    "localizedName": "sauce pan",
                                    "image": "sauce-pan.jpg"
                                },
                                {
                                    "id": 404784,
                                    "name": "oven",
                                    "localizedName": "oven",
                                    "image": "oven.jpg",
                                    "temperature": {
                                        "number": 425,
                                        "unit": "Fahrenheit"
                                    }
                                }
                            ],
                            "length": {
                                "number": 30,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 2,
                            "step": "Add salt and pepper to taste.Meanwhile, place the bacon on a parchment-lined baking sheet and place in the preheated oven on the middle rack. Roast for 15-18 minutes or until the bacon is golden and crisp. When it is done, remove it from the oven and place the bacon strips on a paper towel-lined plate. Set aside.In a small saucepan or in the microwave, heat the marinara sauce until just simmering. Keep warm until you are ready to assemble your bowls.In a large non-stick skillet, heat the 1 T olive oil over medium heat. If your pan is large enough, add the four eggs and allow them to cook until the whites are opaque but still a bit runny on the top. Put a lid over the pan and turn off the heat. Allow the eggs to continue cooking under the lid until the whites are set but the yolk is still runny. If your pan is small, fry the eggs in batches.To assemble the bowls, spoon even amounts of polenta in each bowl. Top with a spoonful of the arrabiata, 1 egg and 2 slices of bacon.",
                            "ingredients": [
                                {
                                    "id": 1102047,
                                    "name": "salt and pepper",
                                    "localizedName": "salt and pepper",
                                    "image": "salt-and-pepper.jpg"
                                },
                                {
                                    "id": 10111549,
                                    "name": "marinara sauce",
                                    "localizedName": "marinara sauce",
                                    "image": "tomato-sauce-or-pasta-sauce.jpg"
                                },
                                {
                                    "id": 10123,
                                    "name": "bacon",
                                    "localizedName": "bacon",
                                    "image": "raw-bacon.png"
                                },
                                {
                                    "id": 4053,
                                    "name": "olive oil",
                                    "localizedName": "olive oil",
                                    "image": "olive-oil.jpg"
                                },
                                {
                                    "id": 10035137,
                                    "name": "polenta",
                                    "localizedName": "polenta",
                                    "image": "cornmeal.png"
                                },
                                {
                                    "id": 1123,
                                    "name": "egg",
                                    "localizedName": "egg",
                                    "image": "egg.png"
                                },
                                {
                                    "id": 1125,
                                    "name": "egg yolk",
                                    "localizedName": "egg yolk",
                                    "image": "egg-yolk.jpg"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404727,
                                    "name": "baking sheet",
                                    "localizedName": "baking sheet",
                                    "image": "baking-sheet.jpg"
                                },
                                {
                                    "id": 405895,
                                    "name": "paper towels",
                                    "localizedName": "paper towels",
                                    "image": "paper-towels.jpg"
                                },
                                {
                                    "id": 404762,
                                    "name": "microwave",
                                    "localizedName": "microwave",
                                    "image": "microwave.jpg"
                                },
                                {
                                    "id": 404669,
                                    "name": "sauce pan",
                                    "localizedName": "sauce pan",
                                    "image": "sauce-pan.jpg"
                                },
                                {
                                    "id": 404645,
                                    "name": "frying pan",
                                    "localizedName": "frying pan",
                                    "image": "pan.png"
                                },
                                {
                                    "id": 404783,
                                    "name": "bowl",
                                    "localizedName": "bowl",
                                    "image": "bowl.jpg"
                                },
                                {
                                    "id": 404784,
                                    "name": "oven",
                                    "localizedName": "oven",
                                    "image": "oven.jpg"
                                }
                            ],
                            "length": {
                                "number": 18,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 3,
                            "step": "Garnish with chopped thyme or parsley leaves.",
                            "ingredients": [
                                {
                                    "id": 11297,
                                    "name": "parsley",
                                    "localizedName": "parsley",
                                    "image": "parsley.jpg"
                                },
                                {
                                    "id": 2049,
                                    "name": "thyme",
                                    "localizedName": "thyme",
                                    "image": "thyme.jpg"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 4,
                            "step": "Serve immediately.",
                            "ingredients": [],
                            "equipment": []
                        }
                    ]
                }
            ],
            "originalId": null,
            "spoonacularSourceUrl": "https://spoonacular.com/creamy-polenta-with-egg-arrabiata-bacon-640676",
            "expanded": false,
            "nutrition_stats": {
                "calories": "549k",
                "carbs": "33g",
                "fat": "36g",
                "protein": "20g",
                "bad": [
                    {
                        "title": "Calories",
                        "amount": "549k",
                        "indented": false,
                        "percentOfDailyNeeds": 27.48
                    },
                    {
                        "title": "Fat",
                        "amount": "36g",
                        "indented": false,
                        "percentOfDailyNeeds": 56.13
                    },
                    {
                        "title": "Saturated Fat",
                        "amount": "14g",
                        "indented": true,
                        "percentOfDailyNeeds": 91.51
                    },
                    {
                        "title": "Carbohydrates",
                        "amount": "33g",
                        "indented": false,
                        "percentOfDailyNeeds": 11.12
                    },
                    {
                        "title": "Sugar",
                        "amount": "1g",
                        "indented": true,
                        "percentOfDailyNeeds": 1.29
                    },
                    {
                        "title": "Cholesterol",
                        "amount": "221mg",
                        "indented": false,
                        "percentOfDailyNeeds": 73.78
                    },
                    {
                        "title": "Sodium",
                        "amount": "700mg",
                        "indented": false,
                        "percentOfDailyNeeds": 30.44
                    }
                ],
                "good": [
                    {
                        "title": "Protein",
                        "amount": "20g",
                        "indented": false,
                        "percentOfDailyNeeds": 41.57
                    },
                    {
                        "title": "Vitamin K",
                        "amount": "68µg",
                        "indented": false,
                        "percentOfDailyNeeds": 65.6
                    },
                    {
                        "title": "Selenium",
                        "amount": "30µg",
                        "indented": false,
                        "percentOfDailyNeeds": 43.21
                    },
                    {
                        "title": "Phosphorus",
                        "amount": "269mg",
                        "indented": false,
                        "percentOfDailyNeeds": 26.94
                    },
                    {
                        "title": "Vitamin A",
                        "amount": "1159IU",
                        "indented": false,
                        "percentOfDailyNeeds": 23.18
                    },
                    {
                        "title": "Vitamin B2",
                        "amount": "0.38mg",
                        "indented": false,
                        "percentOfDailyNeeds": 22.47
                    },
                    {
                        "title": "Vitamin B6",
                        "amount": "0.33mg",
                        "indented": false,
                        "percentOfDailyNeeds": 16.49
                    },
                    {
                        "title": "Copper",
                        "amount": "0.3mg",
                        "indented": false,
                        "percentOfDailyNeeds": 14.81
                    },
                    {
                        "title": "Vitamin B1",
                        "amount": "0.22mg",
                        "indented": false,
                        "percentOfDailyNeeds": 14.46
                    },
                    {
                        "title": "Vitamin B5",
                        "amount": "1mg",
                        "indented": false,
                        "percentOfDailyNeeds": 14.01
                    },
                    {
                        "title": "Vitamin B3",
                        "amount": "2mg",
                        "indented": false,
                        "percentOfDailyNeeds": 12.37
                    },
                    {
                        "title": "Iron",
                        "amount": "2mg",
                        "indented": false,
                        "percentOfDailyNeeds": 12.28
                    },
                    {
                        "title": "Vitamin B12",
                        "amount": "0.7µg",
                        "indented": false,
                        "percentOfDailyNeeds": 11.68
                    },
                    {
                        "title": "Zinc",
                        "amount": "1mg",
                        "indented": false,
                        "percentOfDailyNeeds": 10.84
                    },
                    {
                        "title": "Calcium",
                        "amount": "86mg",
                        "indented": false,
                        "percentOfDailyNeeds": 8.69
                    },
                    {
                        "title": "Vitamin E",
                        "amount": "1mg",
                        "indented": false,
                        "percentOfDailyNeeds": 8.5
                    },
                    {
                        "title": "Folate",
                        "amount": "33µg",
                        "indented": false,
                        "percentOfDailyNeeds": 8.43
                    },
                    {
                        "title": "Vitamin D",
                        "amount": "1µg",
                        "indented": false,
                        "percentOfDailyNeeds": 8.36
                    },
                    {
                        "title": "Magnesium",
                        "amount": "29mg",
                        "indented": false,
                        "percentOfDailyNeeds": 7.28
                    },
                    {
                        "title": "Potassium",
                        "amount": "251mg",
                        "indented": false,
                        "percentOfDailyNeeds": 7.18
                    },
                    {
                        "title": "Vitamin C",
                        "amount": "5mg",
                        "indented": false,
                        "percentOfDailyNeeds": 6.45
                    },
                    {
                        "title": "Manganese",
                        "amount": "0.1mg",
                        "indented": false,
                        "percentOfDailyNeeds": 4.81
                    },
                    {
                        "title": "Fiber",
                        "amount": "0.77g",
                        "indented": false,
                        "percentOfDailyNeeds": 3.07
                    }
                ],
                "expires": 1639101449101,
                "isStale": true
            }
        },
        {
            "vegetarian": false,
            "vegan": false,
            "glutenFree": true,
            "dairyFree": true,
            "veryHealthy": false,
            "cheap": false,
            "veryPopular": false,
            "sustainable": false,
            "lowFodmap": false,
            "weightWatcherSmartPoints": 1,
            "gaps": "no",
            "preparationMinutes": -1,
            "cookingMinutes": -1,
            "aggregateLikes": 22,
            "healthScore": 22,
            "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
            "license": "CC BY 3.0",
            "sourceName": "Foodista",
            "pricePerServing": 133.22,
            "extendedIngredients": [
                {
                    "id": 10123,
                    "aisle": "Meat",
                    "image": "raw-bacon.png",
                    "consistency": "SOLID",
                    "name": "bacon",
                    "nameClean": "applewood smoked bacon",
                    "original": "2 slices of bacon cut in small slices (center cut preferred)",
                    "originalName": "bacon cut in small slices (center cut preferred)",
                    "amount": 2,
                    "unit": "slices",
                    "meta": [
                        "cut in small slices (center cut preferred)"
                    ],
                    "measures": {
                        "us": {
                            "amount": 2,
                            "unitShort": "slice",
                            "unitLong": "slices"
                        },
                        "metric": {
                            "amount": 2,
                            "unitShort": "slice",
                            "unitLong": "slices"
                        }
                    }
                },
                {
                    "id": 11098,
                    "aisle": "Produce",
                    "image": "brussels-sprouts.jpg",
                    "consistency": "SOLID",
                    "name": "brussels sprouts",
                    "nameClean": "brussels sprouts",
                    "original": "1 1/2 pounds Brussels sprouts, trimmed and halved",
                    "originalName": "Brussels sprouts, trimmed and halved",
                    "amount": 1.5,
                    "unit": "pounds",
                    "meta": [
                        "trimmed",
                        "halved"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1.5,
                            "unitShort": "lb",
                            "unitLong": "pounds"
                        },
                        "metric": {
                            "amount": 680.389,
                            "unitShort": "g",
                            "unitLong": "grams"
                        }
                    }
                },
                {
                    "id": 9152,
                    "aisle": "Produce",
                    "image": "lemon-juice.jpg",
                    "consistency": "LIQUID",
                    "name": "lemon juice",
                    "nameClean": "lemon juice",
                    "original": "1 tablespoon freshly squeezed lemon juice",
                    "originalName": "freshly squeezed lemon juice",
                    "amount": 1,
                    "unit": "tablespoon",
                    "meta": [
                        "freshly squeezed"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "Tbsp",
                            "unitLong": "Tbsp"
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "Tbsp",
                            "unitLong": "Tbsp"
                        }
                    }
                },
                {
                    "id": 1102047,
                    "aisle": "Spices and Seasonings",
                    "image": "salt-and-pepper.jpg",
                    "consistency": "SOLID",
                    "name": "salt and pepper",
                    "nameClean": "salt and pepper",
                    "original": "Salt and pepper",
                    "originalName": "Salt and pepper",
                    "amount": 4,
                    "unit": "servings",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 4,
                            "unitShort": "servings",
                            "unitLong": "servings"
                        },
                        "metric": {
                            "amount": 4,
                            "unitShort": "servings",
                            "unitLong": "servings"
                        }
                    }
                },
                {
                    "id": 11677,
                    "aisle": "Produce",
                    "image": "shallots.jpg",
                    "consistency": "SOLID",
                    "name": "shallot",
                    "nameClean": "shallot",
                    "original": "1 large shallot, peeled and thinly sliced",
                    "originalName": "shallot, peeled and thinly sliced",
                    "amount": 1,
                    "unit": "large",
                    "meta": [
                        "peeled",
                        "thinly sliced"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "large",
                            "unitLong": "large"
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "large",
                            "unitLong": "large"
                        }
                    }
                }
            ],
            "id": 636365,
            "title": "Brussels Sprouts with Bacon and Shallots",
            "readyInMinutes": 45,
            "servings": 4,
            "sourceUrl": "http://www.foodista.com/recipe/G3FR8CXJ/brussels-sprouts-with-bacon-and-shallots",
            "image": "https://spoonacular.com/recipeImages/636365-556x370.jpg",
            "imageType": "jpg",
            "summary": "Brussels Sprouts with Bacon and Shallots might be just the side dish you are searching for. One serving contains <b>124 calories</b>, <b>7g of protein</b>, and <b>5g of fat</b>. For <b>$1.33 per serving</b>, this recipe <b>covers 19%</b> of your daily requirements of vitamins and minerals. A couple people made this recipe, and 20 would say it hit the spot. A mixture of bacon, salt and pepper, lemon juice, and a handful of other ingredients are all it takes to make this recipe so tasty. It is a good option if you're following a <b>caveman, gluten free, dairy free, and primal</b> diet. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 80%</b>. This score is good. Try <a href=\"https://spoonacular.com/recipes/brussels-sprouts-with-bacon-garlic-and-shallots-10699\">Brussels Sprouts with Bacon, Garlic, and Shallots</a>, <a href=\"https://spoonacular.com/recipes/roasted-brussels-sprouts-with-bacon-and-shallots-534752\">Roasted Brussels Sprouts with Bacon and Shallots</a>, and <a href=\"https://spoonacular.com/recipes/brussels-sprouts-with-crispy-bacon-and-shallots-206996\">Brussels Sprouts with Crispy Bacon and Shallots</a> for similar recipes.",
            "cuisines": [],
            "dishTypes": [
                "side dish"
            ],
            "diets": [
                "gluten free",
                "dairy free",
                "paleolithic",
                "primal",
                "whole 30"
            ],
            "occasions": [],
            "instructions": "<ol><li>In a large skillet place the bacon and cook until golden brown.</li><li>Add the shallots and cook until tender. Add the Brussels sprouts and saut to high heat to give it a nice golden outside.</li><li>Add a squeeze of lemon, salt and pepper to season and serve.</li></ol>",
            "analyzedInstructions": [
                {
                    "name": "",
                    "steps": [
                        {
                            "number": 1,
                            "step": "In a large skillet place the bacon and cook until golden brown.",
                            "ingredients": [
                                {
                                    "id": 10123,
                                    "name": "bacon",
                                    "localizedName": "bacon",
                                    "image": "raw-bacon.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404645,
                                    "name": "frying pan",
                                    "localizedName": "frying pan",
                                    "image": "pan.png"
                                }
                            ]
                        },
                        {
                            "number": 2,
                            "step": "Add the shallots and cook until tender.",
                            "ingredients": [
                                {
                                    "id": 11677,
                                    "name": "shallot",
                                    "localizedName": "shallot",
                                    "image": "shallots.jpg"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 3,
                            "step": "Add the Brussels sprouts and saut to high heat to give it a nice golden outside.",
                            "ingredients": [
                                {
                                    "id": 11098,
                                    "name": "brussels sprouts",
                                    "localizedName": "brussels sprouts",
                                    "image": "brussels-sprouts.jpg"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 4,
                            "step": "Add a squeeze of lemon, salt and pepper to season and serve.",
                            "ingredients": [
                                {
                                    "id": 1102047,
                                    "name": "salt and pepper",
                                    "localizedName": "salt and pepper",
                                    "image": "salt-and-pepper.jpg"
                                },
                                {
                                    "id": 9150,
                                    "name": "lemon",
                                    "localizedName": "lemon",
                                    "image": "lemon.png"
                                }
                            ],
                            "equipment": []
                        }
                    ]
                }
            ],
            "originalId": null,
            "spoonacularSourceUrl": "https://spoonacular.com/brussels-sprouts-with-bacon-and-shallots-636365",
            "expanded": false,
            "nutrition_stats": {
                "calories": "124k",
                "carbs": "16g",
                "fat": "4g",
                "protein": "7g",
                "bad": [
                    {
                        "title": "Calories",
                        "amount": "124k",
                        "indented": false,
                        "percentOfDailyNeeds": 6.22
                    },
                    {
                        "title": "Fat",
                        "amount": "4g",
                        "indented": false,
                        "percentOfDailyNeeds": 7.53
                    },
                    {
                        "title": "Saturated Fat",
                        "amount": "1g",
                        "indented": true,
                        "percentOfDailyNeeds": 9.82
                    },
                    {
                        "title": "Carbohydrates",
                        "amount": "16g",
                        "indented": false,
                        "percentOfDailyNeeds": 5.56
                    },
                    {
                        "title": "Sugar",
                        "amount": "4g",
                        "indented": true,
                        "percentOfDailyNeeds": 4.81
                    },
                    {
                        "title": "Cholesterol",
                        "amount": "7mg",
                        "indented": false,
                        "percentOfDailyNeeds": 2.42
                    },
                    {
                        "title": "Sodium",
                        "amount": "309mg",
                        "indented": false,
                        "percentOfDailyNeeds": 13.47
                    }
                ],
                "good": [
                    {
                        "title": "Protein",
                        "amount": "7g",
                        "indented": false,
                        "percentOfDailyNeeds": 14.61
                    },
                    {
                        "title": "Vitamin K",
                        "amount": "301µg",
                        "indented": false,
                        "percentOfDailyNeeds": 286.78
                    },
                    {
                        "title": "Vitamin C",
                        "amount": "146mg",
                        "indented": false,
                        "percentOfDailyNeeds": 177.62
                    },
                    {
                        "title": "Manganese",
                        "amount": "0.59mg",
                        "indented": false,
                        "percentOfDailyNeeds": 29.68
                    },
                    {
                        "title": "Fiber",
                        "amount": "6g",
                        "indented": false,
                        "percentOfDailyNeeds": 26.7
                    },
                    {
                        "title": "Folate",
                        "amount": "106µg",
                        "indented": false,
                        "percentOfDailyNeeds": 26.66
                    },
                    {
                        "title": "Vitamin A",
                        "amount": "1287IU",
                        "indented": false,
                        "percentOfDailyNeeds": 25.74
                    },
                    {
                        "title": "Vitamin B6",
                        "amount": "0.43mg",
                        "indented": false,
                        "percentOfDailyNeeds": 21.25
                    },
                    {
                        "title": "Potassium",
                        "amount": "708mg",
                        "indented": false,
                        "percentOfDailyNeeds": 20.24
                    },
                    {
                        "title": "Vitamin B1",
                        "amount": "0.27mg",
                        "indented": false,
                        "percentOfDailyNeeds": 18.1
                    },
                    {
                        "title": "Iron",
                        "amount": "2mg",
                        "indented": false,
                        "percentOfDailyNeeds": 13.92
                    },
                    {
                        "title": "Phosphorus",
                        "amount": "137mg",
                        "indented": false,
                        "percentOfDailyNeeds": 13.73
                    },
                    {
                        "title": "Magnesium",
                        "amount": "41mg",
                        "indented": false,
                        "percentOfDailyNeeds": 10.5
                    },
                    {
                        "title": "Vitamin E",
                        "amount": "1mg",
                        "indented": false,
                        "percentOfDailyNeeds": 10.35
                    },
                    {
                        "title": "Vitamin B2",
                        "amount": "0.16mg",
                        "indented": false,
                        "percentOfDailyNeeds": 9.64
                    },
                    {
                        "title": "Vitamin B3",
                        "amount": "1mg",
                        "indented": false,
                        "percentOfDailyNeeds": 8.63
                    },
                    {
                        "title": "Calcium",
                        "amount": "74mg",
                        "indented": false,
                        "percentOfDailyNeeds": 7.46
                    },
                    {
                        "title": "Selenium",
                        "amount": "5µg",
                        "indented": false,
                        "percentOfDailyNeeds": 7.16
                    },
                    {
                        "title": "Copper",
                        "amount": "0.13mg",
                        "indented": false,
                        "percentOfDailyNeeds": 6.5
                    },
                    {
                        "title": "Vitamin B5",
                        "amount": "0.61mg",
                        "indented": false,
                        "percentOfDailyNeeds": 6.1
                    },
                    {
                        "title": "Zinc",
                        "amount": "0.87mg",
                        "indented": false,
                        "percentOfDailyNeeds": 5.81
                    }
                ],
                "expires": 1634697787040,
                "isStale": true
            }
        },
        {
            "vegetarian": false,
            "vegan": false,
            "glutenFree": true,
            "dairyFree": false,
            "veryHealthy": false,
            "cheap": false,
            "veryPopular": false,
            "sustainable": false,
            "lowFodmap": false,
            "weightWatcherSmartPoints": 8,
            "gaps": "no",
            "preparationMinutes": -1,
            "cookingMinutes": -1,
            "aggregateLikes": 10,
            "healthScore": 34,
            "creditsText": "foodista.com",
            "sourceName": "foodista.com",
            "pricePerServing": 297.65,
            "extendedIngredients": [
                {
                    "id": 15076,
                    "aisle": "Seafood",
                    "image": "salmon.png",
                    "consistency": "SOLID",
                    "name": "salmon",
                    "nameClean": "salmon",
                    "original": "4 salmon, fillets, (about 1 lb total)",
                    "originalName": "salmon, fillets, (about 1 lb total)",
                    "amount": 4,
                    "unit": "",
                    "meta": [
                        "( 1 lb total)"
                    ],
                    "measures": {
                        "us": {
                            "amount": 4,
                            "unitShort": "",
                            "unitLong": ""
                        },
                        "metric": {
                            "amount": 4,
                            "unitShort": "",
                            "unitLong": ""
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
                    "original": "2 tablespoons olive oil",
                    "originalName": "olive oil",
                    "amount": 2,
                    "unit": "tablespoons",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 2,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        },
                        "metric": {
                            "amount": 2,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        }
                    }
                },
                {
                    "id": 9150,
                    "aisle": "Produce",
                    "image": "lemon.png",
                    "consistency": "SOLID",
                    "name": "lemon",
                    "nameClean": "lemon",
                    "original": "1 teaspoon grated lemon, rind",
                    "originalName": "grated lemon, rind",
                    "amount": 1,
                    "unit": "teaspoon",
                    "meta": [
                        "grated"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        }
                    }
                },
                {
                    "id": 9152,
                    "aisle": "Produce",
                    "image": "lemon-juice.jpg",
                    "consistency": "LIQUID",
                    "name": "juice of lemon",
                    "nameClean": "lemon juice",
                    "original": "2 tablespoons lemon, juice",
                    "originalName": "lemon, juice",
                    "amount": 2,
                    "unit": "",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 2,
                            "unitShort": "",
                            "unitLong": ""
                        },
                        "metric": {
                            "amount": 2,
                            "unitShort": "",
                            "unitLong": ""
                        }
                    }
                },
                {
                    "id": 11156,
                    "aisle": "Produce",
                    "image": "fresh-chives.jpg",
                    "consistency": "SOLID",
                    "name": "fresh chives",
                    "nameClean": "chives",
                    "original": "1 tablespoon chopped fresh chives or 1 tbsp chopped green onion",
                    "originalName": "chopped fresh chives or 1 tbsp chopped green onion",
                    "amount": 1,
                    "unit": "tablespoon",
                    "meta": [
                        "fresh",
                        "chopped"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "Tbsp",
                            "unitLong": "Tbsp"
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "Tbsp",
                            "unitLong": "Tbsp"
                        }
                    }
                },
                {
                    "id": 1002046,
                    "aisle": "Condiments",
                    "image": "dijon-mustard.jpg",
                    "consistency": "LIQUID",
                    "name": "dijon mustard",
                    "nameClean": "creole mustard",
                    "original": "2 teaspoons Dijon mustard",
                    "originalName": "Dijon mustard",
                    "amount": 2,
                    "unit": "teaspoons",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 2,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        },
                        "metric": {
                            "amount": 2,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        }
                    }
                },
                {
                    "id": 2047,
                    "aisle": "Spices and Seasonings",
                    "image": "salt.jpg",
                    "consistency": "SOLID",
                    "name": "salt",
                    "nameClean": "table salt",
                    "original": "1 pinch salt",
                    "originalName": "salt",
                    "amount": 1,
                    "unit": "pinch",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "pinch",
                            "unitLong": "pinch"
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "pinch",
                            "unitLong": "pinch"
                        }
                    }
                },
                {
                    "id": 1002030,
                    "aisle": "Spices and Seasonings",
                    "image": "pepper.jpg",
                    "consistency": "SOLID",
                    "name": "pepper",
                    "nameClean": "black pepper",
                    "original": "1 pinch pepper",
                    "originalName": "pepper",
                    "amount": 1,
                    "unit": "pinch",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "pinch",
                            "unitLong": "pinch"
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "pinch",
                            "unitLong": "pinch"
                        }
                    }
                },
                {
                    "id": 1056,
                    "aisle": "Milk, Eggs, Other Dairy",
                    "image": "sour-cream.jpg",
                    "consistency": "SOLID",
                    "name": "sour cream",
                    "nameClean": "sour cream",
                    "original": "1 cup sour cream",
                    "originalName": "sour cream",
                    "amount": 1,
                    "unit": "cup",
                    "meta": [
                        "sour"
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
                    "id": 11206,
                    "aisle": "Produce",
                    "image": "cucumber.jpg",
                    "consistency": "SOLID",
                    "name": "cucumber",
                    "nameClean": "cucumber",
                    "original": "2 tablespoons finely chopped cucumber",
                    "originalName": "finely chopped cucumber",
                    "amount": 2,
                    "unit": "tablespoons",
                    "meta": [
                        "finely chopped"
                    ],
                    "measures": {
                        "us": {
                            "amount": 2,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        },
                        "metric": {
                            "amount": 2,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        }
                    }
                },
                {
                    "id": 2045,
                    "aisle": "Produce;Spices and Seasonings",
                    "image": "dill.jpg",
                    "consistency": "SOLID",
                    "name": "dill",
                    "nameClean": "dill",
                    "original": "1 tablespoon chopped fresh dill or ½ tsp dried dill, weed",
                    "originalName": "chopped fresh dill or ½ tsp dried dill, weed",
                    "amount": 1,
                    "unit": "tablespoon",
                    "meta": [
                        "dried",
                        "fresh",
                        "chopped"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "Tbsp",
                            "unitLong": "Tbsp"
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "Tbsp",
                            "unitLong": "Tbsp"
                        }
                    }
                },
                {
                    "id": 11156,
                    "aisle": "Produce",
                    "image": "fresh-chives.jpg",
                    "consistency": "SOLID",
                    "name": "fresh chives",
                    "nameClean": "chives",
                    "original": "2 teaspoons minced fresh chives or 2 tsp minced green onion",
                    "originalName": "minced fresh chives or 2 tsp minced green onion",
                    "amount": 2,
                    "unit": "teaspoons",
                    "meta": [
                        "fresh",
                        "minced"
                    ],
                    "measures": {
                        "us": {
                            "amount": 2,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        },
                        "metric": {
                            "amount": 2,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        }
                    }
                }
            ],
            "id": 637335,
            "title": "Cedar-Planked Salmon With Mustard Dill Sauce",
            "readyInMinutes": 45,
            "servings": 6,
            "sourceUrl": "https://www.foodista.com/recipe/CQSVSJHC/cedar-planked-salmon-with-mustard-dill-sauce",
            "image": "https://spoonacular.com/recipeImages/637335-556x370.jpg",
            "imageType": "jpg",
            "summary": "Cedar-Planked Salmon With Mustard Dill Sauce could be just the <b>gluten free and pescatarian</b> recipe you've been looking for. One serving contains <b>282 calories</b>, <b>24g of protein</b>, and <b>20g of fat</b>. For <b>$2.98 per serving</b>, you get a main course that serves 6. 10 people were glad they tried this recipe. If you have pepper, dijon mustard, cucumber, and a few other ingredients on hand, you can make it. It is brought to you by Foodista. From preparation to the plate, this recipe takes around <b>around 45 minutes</b>. Overall, this recipe earns a <b>pretty good spoonacular score of 67%</b>. Similar recipes are <a href=\"https://spoonacular.com/recipes/cedar-planked-salmon-with-sweet-mustard-vinaigrette-86809\">Cedar Planked Salmon With Sweet Mustard Vinaigrette</a>, <a href=\"https://spoonacular.com/recipes/cedar-planked-salmon-with-maple-mustard-glaze-4649\">Cedar Planked Salmon With Maple Mustard Glaze</a>, and <a href=\"https://spoonacular.com/recipes/cedar-planked-salmon-with-fresh-sorrel-sauce-610524\">Cedar-Planked Salmon with Fresh Sorrel Sauce</a>.",
            "cuisines": [],
            "dishTypes": [
                "lunch",
                "main course",
                "main dish",
                "dinner"
            ],
            "diets": [
                "gluten free",
                "primal",
                "pescatarian",
                "ketogenic"
            ],
            "occasions": [],
            "instructions": "Soak two 12- x 7-inch (30 x 18 cm) untreated cedar planks in water for at least 30 minutes or for up to 24 hours.\nPlace salmon fillets on top of each plank.\nIn small bowl, whisk together oil, lemon rind and juice, chives, mustard, salt and pepper; brush some over salmon.\nPlace planks on grill over medium-high heat; close lid and cook, brushing with remaining lemon mixture for about 20 minutes or until fish flakes easily when tested with fork.\nDill Sauce:Meanwhile, in small bowl, combine sour cream, cucumber, dill, chives, salt and pepper.\nServe planks on platter with dill sauce.",
            "analyzedInstructions": [
                {
                    "name": "",
                    "steps": [
                        {
                            "number": 1,
                            "step": "Soak two 12- x 7-inch (30 x 18 cm) untreated cedar planks in water for at least 30 minutes or for up to 24 hours.",
                            "ingredients": [
                                {
                                    "id": 14412,
                                    "name": "water",
                                    "localizedName": "water",
                                    "image": "water.png"
                                }
                            ],
                            "equipment": [],
                            "length": {
                                "number": 1470,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 2,
                            "step": "Place salmon fillets on top of each plank.",
                            "ingredients": [
                                {
                                    "id": 10115076,
                                    "name": "salmon fillets",
                                    "localizedName": "salmon fillets",
                                    "image": "salmon.png"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 3,
                            "step": "In small bowl, whisk together oil, lemon rind and juice, chives, mustard, salt and pepper; brush some over salmon.",
                            "ingredients": [
                                {
                                    "id": 1102047,
                                    "name": "salt and pepper",
                                    "localizedName": "salt and pepper",
                                    "image": "salt-and-pepper.jpg"
                                },
                                {
                                    "id": 9156,
                                    "name": "lemon peel",
                                    "localizedName": "lemon peel",
                                    "image": "zest-lemon.jpg"
                                },
                                {
                                    "id": 2046,
                                    "name": "mustard",
                                    "localizedName": "mustard",
                                    "image": "regular-mustard.jpg"
                                },
                                {
                                    "id": 11156,
                                    "name": "chives",
                                    "localizedName": "chives",
                                    "image": "fresh-chives.jpg"
                                },
                                {
                                    "id": 15076,
                                    "name": "salmon",
                                    "localizedName": "salmon",
                                    "image": "salmon.png"
                                },
                                {
                                    "id": 1019016,
                                    "name": "juice",
                                    "localizedName": "juice",
                                    "image": "apple-juice.jpg"
                                },
                                {
                                    "id": 4582,
                                    "name": "cooking oil",
                                    "localizedName": "cooking oil",
                                    "image": "vegetable-oil.jpg"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404661,
                                    "name": "whisk",
                                    "localizedName": "whisk",
                                    "image": "whisk.png"
                                },
                                {
                                    "id": 404783,
                                    "name": "bowl",
                                    "localizedName": "bowl",
                                    "image": "bowl.jpg"
                                }
                            ]
                        },
                        {
                            "number": 4,
                            "step": "Place planks on grill over medium-high heat; close lid and cook, brushing with remaining lemon mixture for about 20 minutes or until fish flakes easily when tested with fork.",
                            "ingredients": [
                                {
                                    "id": 9150,
                                    "name": "lemon",
                                    "localizedName": "lemon",
                                    "image": "lemon.png"
                                },
                                {
                                    "id": 10115261,
                                    "name": "fish",
                                    "localizedName": "fish",
                                    "image": "fish-fillet.jpg"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404706,
                                    "name": "grill",
                                    "localizedName": "grill",
                                    "image": "grill.jpg"
                                }
                            ],
                            "length": {
                                "number": 20,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 5,
                            "step": "Dill Sauce:Meanwhile, in small bowl, combine sour cream, cucumber, dill, chives, salt and pepper.",
                            "ingredients": [
                                {
                                    "id": 1102047,
                                    "name": "salt and pepper",
                                    "localizedName": "salt and pepper",
                                    "image": "salt-and-pepper.jpg"
                                },
                                {
                                    "id": 1056,
                                    "name": "sour cream",
                                    "localizedName": "sour cream",
                                    "image": "sour-cream.jpg"
                                },
                                {
                                    "id": 11206,
                                    "name": "cucumber",
                                    "localizedName": "cucumber",
                                    "image": "cucumber.jpg"
                                },
                                {
                                    "id": 11156,
                                    "name": "chives",
                                    "localizedName": "chives",
                                    "image": "fresh-chives.jpg"
                                },
                                {
                                    "id": 0,
                                    "name": "sauce",
                                    "localizedName": "sauce",
                                    "image": ""
                                },
                                {
                                    "id": 2045,
                                    "name": "dill",
                                    "localizedName": "dill",
                                    "image": "dill.jpg"
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
                            "number": 6,
                            "step": "Serve planks on platter with dill sauce.",
                            "ingredients": [
                                {
                                    "id": 0,
                                    "name": "sauce",
                                    "localizedName": "sauce",
                                    "image": ""
                                },
                                {
                                    "id": 2045,
                                    "name": "dill",
                                    "localizedName": "dill",
                                    "image": "dill.jpg"
                                }
                            ],
                            "equipment": []
                        }
                    ]
                }
            ],
            "originalId": null,
            "spoonacularSourceUrl": "https://spoonacular.com/cedar-planked-salmon-with-mustard-dill-sauce-637335",
            "expanded": false,
            "nutrition_stats": {
                "calories": "280k",
                "carbs": "2g",
                "fat": "19g",
                "protein": "23g",
                "bad": [
                    {
                        "title": "Calories",
                        "amount": "280k",
                        "indented": false,
                        "percentOfDailyNeeds": 14.03
                    },
                    {
                        "title": "Fat",
                        "amount": "19g",
                        "indented": false,
                        "percentOfDailyNeeds": 30.04
                    },
                    {
                        "title": "Saturated Fat",
                        "amount": "6g",
                        "indented": true,
                        "percentOfDailyNeeds": 38.61
                    },
                    {
                        "title": "Carbohydrates",
                        "amount": "2g",
                        "indented": false,
                        "percentOfDailyNeeds": 0.71
                    },
                    {
                        "title": "Sugar",
                        "amount": "1g",
                        "indented": true,
                        "percentOfDailyNeeds": 1.64
                    },
                    {
                        "title": "Cholesterol",
                        "amount": "82mg",
                        "indented": false,
                        "percentOfDailyNeeds": 27.42
                    },
                    {
                        "title": "Sodium",
                        "amount": "106mg",
                        "indented": false,
                        "percentOfDailyNeeds": 4.62
                    }
                ],
                "good": [
                    {
                        "title": "Protein",
                        "amount": "23g",
                        "indented": false,
                        "percentOfDailyNeeds": 46.91
                    },
                    {
                        "title": "Vitamin B12",
                        "amount": "3µg",
                        "indented": false,
                        "percentOfDailyNeeds": 61.86
                    },
                    {
                        "title": "Selenium",
                        "amount": "42µg",
                        "indented": false,
                        "percentOfDailyNeeds": 61.34
                    },
                    {
                        "title": "Vitamin B6",
                        "amount": "0.96mg",
                        "indented": false,
                        "percentOfDailyNeeds": 47.95
                    },
                    {
                        "title": "Vitamin B3",
                        "amount": "8mg",
                        "indented": false,
                        "percentOfDailyNeeds": 44.88
                    },
                    {
                        "title": "Vitamin B2",
                        "amount": "0.5mg",
                        "indented": false,
                        "percentOfDailyNeeds": 29.48
                    },
                    {
                        "title": "Phosphorus",
                        "amount": "275mg",
                        "indented": false,
                        "percentOfDailyNeeds": 27.5
                    },
                    {
                        "title": "Vitamin B5",
                        "amount": "2mg",
                        "indented": false,
                        "percentOfDailyNeeds": 20.49
                    },
                    {
                        "title": "Vitamin B1",
                        "amount": "0.28mg",
                        "indented": false,
                        "percentOfDailyNeeds": 18.71
                    },
                    {
                        "title": "Potassium",
                        "amount": "633mg",
                        "indented": false,
                        "percentOfDailyNeeds": 18.09
                    },
                    {
                        "title": "Copper",
                        "amount": "0.3mg",
                        "indented": false,
                        "percentOfDailyNeeds": 14.95
                    },
                    {
                        "title": "Magnesium",
                        "amount": "39mg",
                        "indented": false,
                        "percentOfDailyNeeds": 9.8
                    },
                    {
                        "title": "Folate",
                        "amount": "34µg",
                        "indented": false,
                        "percentOfDailyNeeds": 8.72
                    },
                    {
                        "title": "Vitamin A",
                        "amount": "331IU",
                        "indented": false,
                        "percentOfDailyNeeds": 6.62
                    },
                    {
                        "title": "Vitamin C",
                        "amount": "5mg",
                        "indented": false,
                        "percentOfDailyNeeds": 6.51
                    },
                    {
                        "title": "Zinc",
                        "amount": "0.9mg",
                        "indented": false,
                        "percentOfDailyNeeds": 6.01
                    },
                    {
                        "title": "Calcium",
                        "amount": "59mg",
                        "indented": false,
                        "percentOfDailyNeeds": 5.93
                    },
                    {
                        "title": "Iron",
                        "amount": "1mg",
                        "indented": false,
                        "percentOfDailyNeeds": 5.92
                    },
                    {
                        "title": "Vitamin E",
                        "amount": "0.86mg",
                        "indented": false,
                        "percentOfDailyNeeds": 5.76
                    },
                    {
                        "title": "Vitamin K",
                        "amount": "5µg",
                        "indented": false,
                        "percentOfDailyNeeds": 5.41
                    },
                    {
                        "title": "Manganese",
                        "amount": "0.04mg",
                        "indented": false,
                        "percentOfDailyNeeds": 2.02
                    },
                    {
                        "title": "Vitamin D",
                        "amount": "0.15µg",
                        "indented": false,
                        "percentOfDailyNeeds": 1.02
                    }
                ],
                "expires": 1634326850934,
                "isStale": true
            }
        },
        {
            "vegetarian": true,
            "vegan": false,
            "glutenFree": true,
            "dairyFree": false,
            "veryHealthy": false,
            "cheap": false,
            "veryPopular": false,
            "sustainable": false,
            "lowFodmap": false,
            "weightWatcherSmartPoints": 18,
            "gaps": "no",
            "preparationMinutes": -1,
            "cookingMinutes": -1,
            "aggregateLikes": 32,
            "healthScore": 2,
            "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
            "license": "CC BY 3.0",
            "sourceName": "Foodista",
            "pricePerServing": 127.91,
            "extendedIngredients": [
                {
                    "id": 12061,
                    "aisle": "Nuts",
                    "image": "almonds.jpg",
                    "consistency": "SOLID",
                    "name": "almond",
                    "nameClean": "almonds",
                    "original": "150 grams Almond cookies, crumbed",
                    "originalName": "Almond cookies, crumbed",
                    "amount": 150,
                    "unit": "grams",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 5.291,
                            "unitShort": "oz",
                            "unitLong": "ounces"
                        },
                        "metric": {
                            "amount": 150,
                            "unitShort": "g",
                            "unitLong": "grams"
                        }
                    }
                },
                {
                    "id": 20027,
                    "aisle": "Baking",
                    "image": "white-powder.jpg",
                    "consistency": "SOLID",
                    "name": "cornstarch",
                    "nameClean": "corn starch",
                    "original": "1 tablespoon Cornstarch",
                    "originalName": "Cornstarch",
                    "amount": 1,
                    "unit": "tablespoon",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "Tbsp",
                            "unitLong": "Tbsp"
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "Tbsp",
                            "unitLong": "Tbsp"
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
                    "original": "450 grams Philiadelphia 13% balance cream cheese",
                    "originalName": "Philiadelphia 13% balance cream cheese",
                    "amount": 450,
                    "unit": "grams",
                    "meta": [
                        "13%"
                    ],
                    "measures": {
                        "us": {
                            "amount": 15.873,
                            "unitShort": "oz",
                            "unitLong": "ounces"
                        },
                        "metric": {
                            "amount": 450,
                            "unitShort": "g",
                            "unitLong": "grams"
                        }
                    }
                },
                {
                    "id": 98861,
                    "aisle": "Nut butters, Jams, and Honey;Ethnic Foods;Frozen;Baking",
                    "image": "dulce-de-leche.png",
                    "consistency": "SOLID",
                    "name": "dulce de leche",
                    "nameClean": "dulce de leche",
                    "original": "240 ml Dulce de leche",
                    "originalName": "Dulce de leche",
                    "amount": 240,
                    "unit": "ml",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1.014,
                            "unitShort": "cups",
                            "unitLong": "cup"
                        },
                        "metric": {
                            "amount": 240,
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
                    "original": "2 Eggs",
                    "originalName": "Eggs",
                    "amount": 2,
                    "unit": "",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 2,
                            "unitShort": "",
                            "unitLong": ""
                        },
                        "metric": {
                            "amount": 2,
                            "unitShort": "",
                            "unitLong": ""
                        }
                    }
                },
                {
                    "id": 9152,
                    "aisle": "Produce",
                    "image": "lemon-juice.jpg",
                    "consistency": "LIQUID",
                    "name": "juice of lemon",
                    "nameClean": "lemon juice",
                    "original": "Juice and zest of 1 lemon",
                    "originalName": "Juice and zest of lemon",
                    "amount": 1,
                    "unit": "",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "",
                            "unitLong": ""
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "",
                            "unitLong": ""
                        }
                    }
                },
                {
                    "id": 2047,
                    "aisle": "Spices and Seasonings",
                    "image": "salt.jpg",
                    "consistency": "SOLID",
                    "name": "salt",
                    "nameClean": "table salt",
                    "original": "Pinch of salt",
                    "originalName": "Pinch of salt",
                    "amount": 1,
                    "unit": "pinch",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "pinch",
                            "unitLong": "pinch"
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "pinch",
                            "unitLong": "pinch"
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
                    "original": "1/2 cup organic sugar",
                    "originalName": "organic sugar",
                    "amount": 0.5,
                    "unit": "cup",
                    "meta": [
                        "organic"
                    ],
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
                    "id": 1145,
                    "aisle": "Milk, Eggs, Other Dairy",
                    "image": "butter-sliced.jpg",
                    "consistency": "SOLID",
                    "name": "unsalted butter",
                    "nameClean": "unsalted butter",
                    "original": "1 1/2 sticks cold butter cut into small pieces (if you use unsalted butter add a little 2 cups organic flour1/2 cup organic sugar1 teaspoon vanilla",
                    "originalName": "cold butter cut into small pieces (if you use unsalted butter add a little 2 cups organic flour1/2 cup organic sugar1 teaspoon vanilla",
                    "amount": 1.5,
                    "unit": "sticks",
                    "meta": [
                        "unsalted",
                        "organic",
                        "cold",
                        "cut into small pieces (if you use  butter add a little 2 cups  flour1/2 cup  sugar1 teaspoon vanilla"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1.5,
                            "unitShort": "sticks",
                            "unitLong": "sticks"
                        },
                        "metric": {
                            "amount": 1.5,
                            "unitShort": "sticks",
                            "unitLong": "sticks"
                        }
                    }
                },
                {
                    "id": 1116,
                    "aisle": "Milk, Eggs, Other Dairy",
                    "image": "plain-yogurt.jpg",
                    "consistency": "SOLID",
                    "name": "yogurt",
                    "nameClean": "yogurt",
                    "original": "150 grams 3. 5% yogurt",
                    "originalName": "3. 5% yogurt",
                    "amount": 150,
                    "unit": "grams",
                    "meta": [
                        "5%"
                    ],
                    "measures": {
                        "us": {
                            "amount": 5.291,
                            "unitShort": "oz",
                            "unitLong": "ounces"
                        },
                        "metric": {
                            "amount": 150,
                            "unitShort": "g",
                            "unitLong": "grams"
                        }
                    }
                }
            ],
            "id": 641730,
            "title": "Dulce De Leche Cheesecake",
            "readyInMinutes": 45,
            "servings": 10,
            "sourceUrl": "http://www.foodista.com/recipe/5LN8R7Z4/dulce-de-leche-cheesecake",
            "image": "https://spoonacular.com/recipeImages/641730-556x370.jpg",
            "imageType": "jpg",
            "summary": "One serving contains <b>426 calories</b>, <b>8g of protein</b>, and <b>38g of fat</b>. This gluten free and vegetarian recipe serves 10 and costs <b>$1.28 per serving</b>. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. This recipe is liked by 31 foodies and cooks. Head to the store and pick up butter, cornstarch, dulce de leche, and a few other things to make it today. All things considered, we decided this recipe <b>deserves a spoonacular score of 32%</b>. This score is not so amazing. Try <a href=\"https://spoonacular.com/recipes/dulce-de-leche-cheesecake-161799\">Dulce de Leche Cheesecake</a>, <a href=\"https://spoonacular.com/recipes/dulce-de-leche-cheesecake-348228\">Dulce de Leche Cheesecake</a>, and <a href=\"https://spoonacular.com/recipes/dulce-de-leche-cheesecake-391923\">Dulce de Leche Cheesecake</a> for similar recipes.",
            "cuisines": [],
            "dishTypes": [
                "side dish"
            ],
            "diets": [
                "gluten free",
                "lacto ovo vegetarian"
            ],
            "occasions": [],
            "instructions": "<ol><li>Toss the cookie crumbs into the melted butter in a mixing bowl. Reserve 1 tablespoon of the mixture for the topping. Press the rest of the mixture onto the bottom and up 3cm high of a greased 24cm spring form pan. Chill until its ready for use.</li><li>Using electric mixer beat balance cream cheese and sugar in a large mixing bowl until smooth. Add yogurt and eggs, beating until just blended. Stir in cornstarch, dulce de leche, lemon juice and zest until blended.</li><li>Pour the mixture into the crust and sprinkle the top with reserved cookie crumbs. Steamed bake the cheesecake at 165C/330F for 65 minutes until almost set. Turn oven off. Leave the cake with the oven door ajar for 1 hour. Cool completely and chill at least 4 hours or overnight until firm.</li></ol>",
            "analyzedInstructions": [
                {
                    "name": "",
                    "steps": [
                        {
                            "number": 1,
                            "step": "Toss the cookie crumbs into the melted butter in a mixing bowl. Reserve 1 tablespoon of the mixture for the topping. Press the rest of the mixture onto the bottom and up 3cm high of a greased 24cm spring form pan. Chill until its ready for use.Using electric mixer beat balance cream cheese and sugar in a large mixing bowl until smooth.",
                            "ingredients": [
                                {
                                    "id": 10018192,
                                    "name": "cookie crumbs",
                                    "localizedName": "cookie crumbs",
                                    "image": ""
                                },
                                {
                                    "id": 1017,
                                    "name": "cream cheese",
                                    "localizedName": "cream cheese",
                                    "image": "cream-cheese.jpg"
                                },
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
                                    "id": 404628,
                                    "name": "hand mixer",
                                    "localizedName": "hand mixer",
                                    "image": "hand-mixer.png"
                                },
                                {
                                    "id": 405907,
                                    "name": "mixing bowl",
                                    "localizedName": "mixing bowl",
                                    "image": "mixing-bowl.jpg"
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
                            "number": 2,
                            "step": "Add yogurt and eggs, beating until just blended. Stir in cornstarch, dulce de leche, lemon juice and zest until blended.",
                            "ingredients": [
                                {
                                    "id": 98861,
                                    "name": "dulce de leche",
                                    "localizedName": "dulce de leche",
                                    "image": "dulce-de-leche.png"
                                },
                                {
                                    "id": 9152,
                                    "name": "lemon juice",
                                    "localizedName": "lemon juice",
                                    "image": "lemon-juice.jpg"
                                },
                                {
                                    "id": 20027,
                                    "name": "corn starch",
                                    "localizedName": "corn starch",
                                    "image": "white-powder.jpg"
                                },
                                {
                                    "id": 1116,
                                    "name": "yogurt",
                                    "localizedName": "yogurt",
                                    "image": "plain-yogurt.jpg"
                                },
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
                            "number": 3,
                            "step": "Pour the mixture into the crust and sprinkle the top with reserved cookie crumbs. Steamed bake the cheesecake at 165C/330F for 65 minutes until almost set. Turn oven off. Leave the cake with the oven door ajar for 1 hour. Cool completely and chill at least 4 hours or overnight until firm.",
                            "ingredients": [
                                {
                                    "id": 10018192,
                                    "name": "cookie crumbs",
                                    "localizedName": "cookie crumbs",
                                    "image": ""
                                },
                                {
                                    "id": 0,
                                    "name": "crust",
                                    "localizedName": "crust",
                                    "image": ""
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404784,
                                    "name": "oven",
                                    "localizedName": "oven",
                                    "image": "oven.jpg",
                                    "temperature": {
                                        "number": 165,
                                        "unit": "Celsius"
                                    }
                                }
                            ],
                            "length": {
                                "number": 365,
                                "unit": "minutes"
                            }
                        }
                    ]
                }
            ],
            "originalId": null,
            "spoonacularSourceUrl": "https://spoonacular.com/dulce-de-leche-cheesecake-641730",
            "expanded": false,
            "nutrition_stats": {
                "calories": "425k",
                "carbs": "16g",
                "fat": "37g",
                "protein": "7g",
                "bad": [
                    {
                        "title": "Calories",
                        "amount": "425k",
                        "indented": false,
                        "percentOfDailyNeeds": 21.29
                    },
                    {
                        "title": "Fat",
                        "amount": "37g",
                        "indented": false,
                        "percentOfDailyNeeds": 58.31
                    },
                    {
                        "title": "Saturated Fat",
                        "amount": "18g",
                        "indented": true,
                        "percentOfDailyNeeds": 115.87
                    },
                    {
                        "title": "Carbohydrates",
                        "amount": "16g",
                        "indented": false,
                        "percentOfDailyNeeds": 5.6
                    },
                    {
                        "title": "Sugar",
                        "amount": "12g",
                        "indented": true,
                        "percentOfDailyNeeds": 14.25
                    },
                    {
                        "title": "Cholesterol",
                        "amount": "120mg",
                        "indented": false,
                        "percentOfDailyNeeds": 40.21
                    },
                    {
                        "title": "Sodium",
                        "amount": "169mg",
                        "indented": false,
                        "percentOfDailyNeeds": 7.39
                    }
                ],
                "good": [
                    {
                        "title": "Protein",
                        "amount": "7g",
                        "indented": false,
                        "percentOfDailyNeeds": 15.27
                    },
                    {
                        "title": "Vitamin E",
                        "amount": "4mg",
                        "indented": false,
                        "percentOfDailyNeeds": 30.42
                    },
                    {
                        "title": "Vitamin A",
                        "amount": "1090IU",
                        "indented": false,
                        "percentOfDailyNeeds": 21.81
                    },
                    {
                        "title": "Manganese",
                        "amount": "0.35mg",
                        "indented": false,
                        "percentOfDailyNeeds": 17.63
                    },
                    {
                        "title": "Vitamin B2",
                        "amount": "0.28mg",
                        "indented": false,
                        "percentOfDailyNeeds": 16.35
                    },
                    {
                        "title": "Phosphorus",
                        "amount": "156mg",
                        "indented": false,
                        "percentOfDailyNeeds": 15.64
                    },
                    {
                        "title": "Magnesium",
                        "amount": "47mg",
                        "indented": false,
                        "percentOfDailyNeeds": 11.91
                    },
                    {
                        "title": "Calcium",
                        "amount": "111mg",
                        "indented": false,
                        "percentOfDailyNeeds": 11.11
                    },
                    {
                        "title": "Copper",
                        "amount": "0.17mg",
                        "indented": false,
                        "percentOfDailyNeeds": 8.5
                    },
                    {
                        "title": "Fiber",
                        "amount": "1g",
                        "indented": false,
                        "percentOfDailyNeeds": 7.38
                    },
                    {
                        "title": "Selenium",
                        "amount": "4µg",
                        "indented": false,
                        "percentOfDailyNeeds": 6.77
                    },
                    {
                        "title": "Zinc",
                        "amount": "0.91mg",
                        "indented": false,
                        "percentOfDailyNeeds": 6.08
                    },
                    {
                        "title": "Potassium",
                        "amount": "210mg",
                        "indented": false,
                        "percentOfDailyNeeds": 6.02
                    },
                    {
                        "title": "Vitamin B5",
                        "amount": "0.54mg",
                        "indented": false,
                        "percentOfDailyNeeds": 5.43
                    },
                    {
                        "title": "Iron",
                        "amount": "0.91mg",
                        "indented": false,
                        "percentOfDailyNeeds": 5.03
                    },
                    {
                        "title": "Vitamin D",
                        "amount": "0.72µg",
                        "indented": false,
                        "percentOfDailyNeeds": 4.77
                    },
                    {
                        "title": "Folate",
                        "amount": "18µg",
                        "indented": false,
                        "percentOfDailyNeeds": 4.69
                    },
                    {
                        "title": "Vitamin B12",
                        "amount": "0.28µg",
                        "indented": false,
                        "percentOfDailyNeeds": 4.59
                    },
                    {
                        "title": "Vitamin B1",
                        "amount": "0.05mg",
                        "indented": false,
                        "percentOfDailyNeeds": 3.34
                    },
                    {
                        "title": "Vitamin B3",
                        "amount": "0.6mg",
                        "indented": false,
                        "percentOfDailyNeeds": 3
                    },
                    {
                        "title": "Vitamin B6",
                        "amount": "0.06mg",
                        "indented": false,
                        "percentOfDailyNeeds": 2.94
                    },
                    {
                        "title": "Vitamin K",
                        "amount": "2µg",
                        "indented": false,
                        "percentOfDailyNeeds": 2.43
                    },
                    {
                        "title": "Vitamin C",
                        "amount": "1mg",
                        "indented": false,
                        "percentOfDailyNeeds": 1.5
                    }
                ],
                "expires": 1639198442699,
                "isStale": true
            }
        },
        {
            "vegetarian": true,
            "vegan": false,
            "glutenFree": false,
            "dairyFree": false,
            "veryHealthy": false,
            "cheap": false,
            "veryPopular": false,
            "sustainable": false,
            "lowFodmap": false,
            "weightWatcherSmartPoints": 16,
            "gaps": "no",
            "preparationMinutes": -1,
            "cookingMinutes": -1,
            "aggregateLikes": 12,
            "healthScore": 0,
            "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
            "license": "CC BY 3.0",
            "sourceName": "Foodista",
            "pricePerServing": 80.62,
            "extendedIngredients": [
                {
                    "id": 1001,
                    "aisle": "Milk, Eggs, Other Dairy",
                    "image": "butter-sliced.jpg",
                    "consistency": "SOLID",
                    "name": "butter",
                    "nameClean": "butter",
                    "original": "2 tablespoons butter",
                    "originalName": "butter",
                    "amount": 2,
                    "unit": "tablespoons",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 2,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        },
                        "metric": {
                            "amount": 2,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        }
                    }
                },
                {
                    "id": 9354,
                    "aisle": "Canned and Jarred",
                    "image": "pineapple-with-can.png",
                    "consistency": "SOLID",
                    "name": "canned pineapple",
                    "nameClean": "pineapple with juice",
                    "original": "8 oz can crushed pineapple",
                    "originalName": "crushed pineapple",
                    "amount": 8,
                    "unit": "oz",
                    "meta": [
                        "crushed",
                        "canned"
                    ],
                    "measures": {
                        "us": {
                            "amount": 8,
                            "unitShort": "oz",
                            "unitLong": "ounces"
                        },
                        "metric": {
                            "amount": 226.796,
                            "unitShort": "g",
                            "unitLong": "grams"
                        }
                    }
                },
                {
                    "id": 20027,
                    "aisle": "Baking",
                    "image": "white-powder.jpg",
                    "consistency": "SOLID",
                    "name": "cornstarch",
                    "nameClean": "corn starch",
                    "original": "1/3 cup cornstarch",
                    "originalName": "cornstarch",
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
                    "id": 18373,
                    "aisle": "Spices and Seasonings;Baking",
                    "image": "white-powder.jpg",
                    "consistency": "SOLID",
                    "name": "cream of tartar",
                    "nameClean": "cream of tartar",
                    "original": "1/4 teaspoon cream of tartar",
                    "originalName": "cream of tartar",
                    "amount": 0.25,
                    "unit": "teaspoon",
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
                    "id": 1124,
                    "aisle": "Milk, Eggs, Other Dairy",
                    "image": "egg-white.jpg",
                    "consistency": "SOLID",
                    "name": "egg whites",
                    "nameClean": "egg whites",
                    "original": "2 egg whites",
                    "originalName": "egg whites",
                    "amount": 2,
                    "unit": "",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 2,
                            "unitShort": "",
                            "unitLong": ""
                        },
                        "metric": {
                            "amount": 2,
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
                    "original": "2 egg yolks (save whites for meringue)",
                    "originalName": "egg yolks (save whites for meringue)",
                    "amount": 2,
                    "unit": "",
                    "meta": [
                        "for meringue)"
                    ],
                    "measures": {
                        "us": {
                            "amount": 2,
                            "unitShort": "",
                            "unitLong": ""
                        },
                        "metric": {
                            "amount": 2,
                            "unitShort": "",
                            "unitLong": ""
                        }
                    }
                },
                {
                    "id": 18334,
                    "aisle": "Refrigerated;Frozen;Baking",
                    "image": "pie-crust.jpg",
                    "consistency": "SOLID",
                    "name": "pie crust",
                    "nameClean": "refrigerated pie crust",
                    "original": "1 9 inch pre-baked pie crust",
                    "originalName": "9 inch pre-baked pie crust",
                    "amount": 1,
                    "unit": "9-inch",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "9-inch",
                            "unitLong": "9-inch"
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "9-inch",
                            "unitLong": "9-inch"
                        }
                    }
                },
                {
                    "id": 2047,
                    "aisle": "Spices and Seasonings",
                    "image": "salt.jpg",
                    "consistency": "SOLID",
                    "name": "salt",
                    "nameClean": "table salt",
                    "original": "1/8 teaspoon salt",
                    "originalName": "salt",
                    "amount": 0.125,
                    "unit": "teaspoon",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 0.125,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        },
                        "metric": {
                            "amount": 0.125,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
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
                    "original": "1/4 cup sugar",
                    "originalName": "sugar",
                    "amount": 0.25,
                    "unit": "cup",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 0.25,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 59.147,
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
                    "original": "3/4 cup sugar",
                    "originalName": "sugar",
                    "amount": 0.75,
                    "unit": "cup",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 0.75,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 177.441,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 2050,
                    "aisle": "Baking",
                    "image": "vanilla-extract.jpg",
                    "consistency": "LIQUID",
                    "name": "vanilla",
                    "nameClean": "vanilla extract",
                    "original": "1/2 teaspoon vanilla",
                    "originalName": "vanilla",
                    "amount": 0.5,
                    "unit": "teaspoon",
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
                    "id": 2050,
                    "aisle": "Baking",
                    "image": "vanilla-extract.jpg",
                    "consistency": "LIQUID",
                    "name": "vanilla",
                    "nameClean": "vanilla extract",
                    "original": "1 teaspoon vanilla",
                    "originalName": "vanilla",
                    "amount": 1,
                    "unit": "teaspoon",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        }
                    }
                },
                {
                    "id": 14412,
                    "aisle": "Beverages",
                    "image": "water.png",
                    "consistency": "LIQUID",
                    "name": "water",
                    "nameClean": "water",
                    "original": "1/2 cup +2 T water",
                    "originalName": "2 T water",
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
                }
            ],
            "id": 645147,
            "title": "Grandma Inez's Pineapple Pie",
            "readyInMinutes": 45,
            "servings": 6,
            "sourceUrl": "http://www.foodista.com/recipe/PDS7JZ6J/grandma-inezs-pineapple-pie",
            "image": "https://spoonacular.com/recipeImages/645147-556x370.jpg",
            "imageType": "jpg",
            "summary": "Grandman Inez's Pineapple Pie is a <b>vegetarian</b> dessert. For <b>81 cents per serving</b>, this recipe <b>covers 5%</b> of your daily requirements of vitamins and minerals. This recipe makes 6 servings with <b>392 calories</b>, <b>4g of protein</b>, and <b>14g of fat</b> each. 12 people have made this recipe and would make it again. If you have vanilla, pineapple, t water, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes about <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 18%</b>. This score is not so outstanding. Similar recipes include <a href=\"https://spoonacular.com/recipes/grandmas-pineapple-upside-down-cake-813857\">Grandma’s Pineapple Upside Down Cake</a>, <a href=\"https://spoonacular.com/recipes/pineapple-kesari-pineapple-sheera-pineapple-semolina-halwa-step-by-step-579857\">Pineapple Kesari - Pineapple Sheera - Pineapple Semolina Halwa - Step by Step</a>, and <a href=\"https://spoonacular.com/recipes/butterfinger-pie-917550\">Butterfinger Pie</a>.",
            "cuisines": [],
            "dishTypes": [
                "side dish"
            ],
            "diets": [
                "lacto ovo vegetarian"
            ],
            "occasions": [],
            "instructions": "<ol><li>To make the pie, cream sugar, butter, and egg yolks in a medium saucepan with a hand-held electric mixer. Blend in cornstarch and vanilla. Add water and crushed pineapple with its juice; blend once more.</li><li>Transfer saucepan to the stove and cook over med heat, stirring constantly until thick. Pour into 9 baked pastry.</li><li>To make the meringue, Whip egg whites until they begin to get foamy. Add remaining ingredients and continue to whip until the meringue has reached soft peak stage and is smooth and glossy.</li><li>Place meringue over cooled pie. Brown at 400 for just a few min. Store in fridge.</li></ol>",
            "analyzedInstructions": [
                {
                    "name": "",
                    "steps": [
                        {
                            "number": 1,
                            "step": "To make the pie, cream sugar, butter, and egg yolks in a medium saucepan with a hand-held electric mixer. Blend in cornstarch and vanilla.",
                            "ingredients": [
                                {
                                    "id": 20027,
                                    "name": "corn starch",
                                    "localizedName": "corn starch",
                                    "image": "white-powder.jpg"
                                },
                                {
                                    "id": 1125,
                                    "name": "egg yolk",
                                    "localizedName": "egg yolk",
                                    "image": "egg-yolk.jpg"
                                },
                                {
                                    "id": 1052050,
                                    "name": "vanilla",
                                    "localizedName": "vanilla",
                                    "image": "vanilla.jpg"
                                },
                                {
                                    "id": 1001,
                                    "name": "butter",
                                    "localizedName": "butter",
                                    "image": "butter-sliced.jpg"
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
                                    "id": 404628,
                                    "name": "hand mixer",
                                    "localizedName": "hand mixer",
                                    "image": "hand-mixer.png"
                                },
                                {
                                    "id": 404669,
                                    "name": "sauce pan",
                                    "localizedName": "sauce pan",
                                    "image": "sauce-pan.jpg"
                                }
                            ]
                        },
                        {
                            "number": 2,
                            "step": "Add water and crushed pineapple with its juice; blend once more.",
                            "ingredients": [
                                {
                                    "id": 1019354,
                                    "name": "crushed pineapple",
                                    "localizedName": "crushed pineapple",
                                    "image": "pineapple-with-can.png"
                                },
                                {
                                    "id": 1019016,
                                    "name": "juice",
                                    "localizedName": "juice",
                                    "image": "apple-juice.jpg"
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
                            "number": 3,
                            "step": "Transfer saucepan to the stove and cook over med heat, stirring constantly until thick.",
                            "ingredients": [],
                            "equipment": [
                                {
                                    "id": 404669,
                                    "name": "sauce pan",
                                    "localizedName": "sauce pan",
                                    "image": "sauce-pan.jpg"
                                },
                                {
                                    "id": 404794,
                                    "name": "stove",
                                    "localizedName": "stove",
                                    "image": "oven.jpg"
                                }
                            ]
                        },
                        {
                            "number": 4,
                            "step": "Pour into 9 baked pastry.To make the meringue, Whip egg whites until they begin to get foamy.",
                            "ingredients": [
                                {
                                    "id": 1124,
                                    "name": "egg whites",
                                    "localizedName": "egg whites",
                                    "image": "egg-white.jpg"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 5,
                            "step": "Add remaining ingredients and continue to whip until the meringue has reached soft peak stage and is smooth and glossy.",
                            "ingredients": [],
                            "equipment": []
                        },
                        {
                            "number": 6,
                            "step": "Place meringue over cooled pie. Brown at 400 for just a few min. Store in fridge.",
                            "ingredients": [],
                            "equipment": []
                        }
                    ]
                }
            ],
            "originalId": null,
            "spoonacularSourceUrl": "https://spoonacular.com/grandma-inezs-pineapple-pie-645147",
            "expanded": false,
            "nutrition_stats": {
                "calories": "392k",
                "carbs": "62g",
                "fat": "14g",
                "protein": "4g",
                "bad": [
                    {
                        "title": "Calories",
                        "amount": "392k",
                        "indented": false,
                        "percentOfDailyNeeds": 19.61
                    },
                    {
                        "title": "Fat",
                        "amount": "14g",
                        "indented": false,
                        "percentOfDailyNeeds": 21.74
                    },
                    {
                        "title": "Saturated Fat",
                        "amount": "5g",
                        "indented": true,
                        "percentOfDailyNeeds": 35.59
                    },
                    {
                        "title": "Carbohydrates",
                        "amount": "62g",
                        "indented": false,
                        "percentOfDailyNeeds": 20.8
                    },
                    {
                        "title": "Sugar",
                        "amount": "38g",
                        "indented": true,
                        "percentOfDailyNeeds": 43.21
                    },
                    {
                        "title": "Cholesterol",
                        "amount": "75mg",
                        "indented": false,
                        "percentOfDailyNeeds": 25.04
                    },
                    {
                        "title": "Sodium",
                        "amount": "240mg",
                        "indented": false,
                        "percentOfDailyNeeds": 10.44
                    },
                    {
                        "title": "Alcohol",
                        "amount": "0.34g",
                        "indented": false,
                        "percentOfDailyNeeds": 1.91
                    }
                ],
                "good": [
                    {
                        "title": "Protein",
                        "amount": "4g",
                        "indented": false,
                        "percentOfDailyNeeds": 8.69
                    },
                    {
                        "title": "Selenium",
                        "amount": "7µg",
                        "indented": false,
                        "percentOfDailyNeeds": 11.22
                    },
                    {
                        "title": "Vitamin B1",
                        "amount": "0.14mg",
                        "indented": false,
                        "percentOfDailyNeeds": 9.44
                    },
                    {
                        "title": "Vitamin B2",
                        "amount": "0.15mg",
                        "indented": false,
                        "percentOfDailyNeeds": 8.77
                    },
                    {
                        "title": "Folate",
                        "amount": "34µg",
                        "indented": false,
                        "percentOfDailyNeeds": 8.63
                    },
                    {
                        "title": "Manganese",
                        "amount": "0.16mg",
                        "indented": false,
                        "percentOfDailyNeeds": 7.98
                    },
                    {
                        "title": "Iron",
                        "amount": "1mg",
                        "indented": false,
                        "percentOfDailyNeeds": 6.68
                    },
                    {
                        "title": "Fiber",
                        "amount": "1g",
                        "indented": false,
                        "percentOfDailyNeeds": 5.56
                    },
                    {
                        "title": "Phosphorus",
                        "amount": "53mg",
                        "indented": false,
                        "percentOfDailyNeeds": 5.37
                    },
                    {
                        "title": "Vitamin B3",
                        "amount": "1mg",
                        "indented": false,
                        "percentOfDailyNeeds": 5.13
                    },
                    {
                        "title": "Vitamin A",
                        "amount": "222IU",
                        "indented": false,
                        "percentOfDailyNeeds": 4.45
                    },
                    {
                        "title": "Vitamin C",
                        "amount": "3mg",
                        "indented": false,
                        "percentOfDailyNeeds": 4.31
                    },
                    {
                        "title": "Copper",
                        "amount": "0.08mg",
                        "indented": false,
                        "percentOfDailyNeeds": 4.12
                    },
                    {
                        "title": "Potassium",
                        "amount": "126mg",
                        "indented": false,
                        "percentOfDailyNeeds": 3.6
                    },
                    {
                        "title": "Vitamin B5",
                        "amount": "0.34mg",
                        "indented": false,
                        "percentOfDailyNeeds": 3.39
                    },
                    {
                        "title": "Vitamin B6",
                        "amount": "0.07mg",
                        "indented": false,
                        "percentOfDailyNeeds": 3.35
                    },
                    {
                        "title": "Magnesium",
                        "amount": "12mg",
                        "indented": false,
                        "percentOfDailyNeeds": 3.17
                    },
                    {
                        "title": "Vitamin K",
                        "amount": "3µg",
                        "indented": false,
                        "percentOfDailyNeeds": 2.92
                    },
                    {
                        "title": "Vitamin E",
                        "amount": "0.42mg",
                        "indented": false,
                        "percentOfDailyNeeds": 2.83
                    },
                    {
                        "title": "Vitamin D",
                        "amount": "0.39µg",
                        "indented": false,
                        "percentOfDailyNeeds": 2.63
                    },
                    {
                        "title": "Calcium",
                        "amount": "23mg",
                        "indented": false,
                        "percentOfDailyNeeds": 2.32
                    },
                    {
                        "title": "Zinc",
                        "amount": "0.34mg",
                        "indented": false,
                        "percentOfDailyNeeds": 2.3
                    },
                    {
                        "title": "Vitamin B12",
                        "amount": "0.13µg",
                        "indented": false,
                        "percentOfDailyNeeds": 2.23
                    }
                ],
                "expires": 1635524899138,
                "isStale": true
            }
        },
        {
            "vegetarian": true,
            "vegan": false,
            "glutenFree": false,
            "dairyFree": false,
            "veryHealthy": false,
            "cheap": false,
            "veryPopular": false,
            "sustainable": false,
            "lowFodmap": false,
            "weightWatcherSmartPoints": 4,
            "gaps": "no",
            "preparationMinutes": -1,
            "cookingMinutes": -1,
            "aggregateLikes": 115,
            "healthScore": 0,
            "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
            "license": "CC BY 3.0",
            "sourceName": "Foodista",
            "pricePerServing": 10.56,
            "extendedIngredients": [
                {
                    "id": 1145,
                    "aisle": "Milk, Eggs, Other Dairy",
                    "image": "butter-sliced.jpg",
                    "consistency": "SOLID",
                    "name": "unsalted butter",
                    "nameClean": "unsalted butter",
                    "original": "1 cup Unsalted Butter (softened)",
                    "originalName": "Unsalted Butter (softened)",
                    "amount": 1,
                    "unit": "cup",
                    "meta": [
                        "unsalted",
                        "softened",
                        "()"
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
                    "id": 10016098,
                    "aisle": null,
                    "image": null,
                    "consistency": "SOLID",
                    "name": "crunchy peanut butter",
                    "nameClean": null,
                    "original": "1½ cups Crunchy Peanut Butter (or Sunbutter if allergic to peanuts)",
                    "originalName": "Crunchy Peanut Butter (or Sunbutter if allergic to peanuts)",
                    "amount": 1.5,
                    "unit": "cups",
                    "meta": [
                        "(or Sunbutter if allergic to peanuts)"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1.5,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 354.882,
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
                    "original": "1 cup Sugar",
                    "originalName": "Sugar",
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
                    "id": 19334,
                    "aisle": "Baking",
                    "image": "light-brown-sugar.jpg",
                    "consistency": "SOLID",
                    "name": "brown sugar",
                    "nameClean": "golden brown sugar",
                    "original": "1 cup Brown Sugar (packed)",
                    "originalName": "Brown Sugar (packed)",
                    "amount": 1,
                    "unit": "cup",
                    "meta": [
                        "packed",
                        "()"
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
                    "id": 1016168,
                    "aisle": "Condiments",
                    "image": "hot-sauce-or-tabasco.png",
                    "consistency": "LIQUID",
                    "name": "sriracha",
                    "nameClean": "sriracha",
                    "original": "¼ c Sriracha",
                    "originalName": "Sriracha",
                    "amount": 0.25,
                    "unit": "c",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 0.25,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 59.147,
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
                    "original": "2 Eggs",
                    "originalName": "Eggs",
                    "amount": 2,
                    "unit": "",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 2,
                            "unitShort": "",
                            "unitLong": ""
                        },
                        "metric": {
                            "amount": 2,
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
                    "original": "1 tsp Vanilla extract",
                    "originalName": "Vanilla extract",
                    "amount": 1,
                    "unit": "tsp",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
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
                    "original": "2¾ to 3 cups All-Purpose Flour (finished dough should be soft, but not sticky)",
                    "originalName": "All-Purpose Flour (finished dough should be soft, but not sticky)",
                    "amount": 2.75,
                    "unit": "cups",
                    "meta": [
                        "all-purpose",
                        "soft",
                        "(finished dough should be , but not sticky)"
                    ],
                    "measures": {
                        "us": {
                            "amount": 2.75,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 650.617,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 18371,
                    "aisle": "Baking",
                    "image": "white-powder.jpg",
                    "consistency": "SOLID",
                    "name": "baking powder",
                    "nameClean": "low sodium baking powder",
                    "original": "1 teaspoon Baking Powder",
                    "originalName": "Baking Powder",
                    "amount": 1,
                    "unit": "teaspoon",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        }
                    }
                },
                {
                    "id": 2047,
                    "aisle": "Spices and Seasonings",
                    "image": "salt.jpg",
                    "consistency": "SOLID",
                    "name": "salt",
                    "nameClean": "table salt",
                    "original": "½ teaspoon Salt",
                    "originalName": "Salt",
                    "amount": 0.5,
                    "unit": "teaspoon",
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
                    "id": 18372,
                    "aisle": "Baking",
                    "image": "white-powder.jpg",
                    "consistency": "SOLID",
                    "name": "baking soda",
                    "nameClean": "baking soda",
                    "original": "1½ teaspoons baking soda",
                    "originalName": "baking soda",
                    "amount": 1.5,
                    "unit": "teaspoons",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1.5,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        },
                        "metric": {
                            "amount": 1.5,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        }
                    }
                },
                {
                    "id": 19335,
                    "aisle": "Baking",
                    "image": "sugar-in-bowl.png",
                    "consistency": "SOLID",
                    "name": "granulated sugar",
                    "nameClean": "sugar",
                    "original": "Granulated sugar for dipping dough balls into.",
                    "originalName": "Granulated sugar for dipping dough balls into",
                    "amount": 1,
                    "unit": "serving",
                    "meta": [
                        "for dipping dough balls into."
                    ],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "serving",
                            "unitLong": "serving"
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "serving",
                            "unitLong": "serving"
                        }
                    }
                },
                {
                    "id": 93743,
                    "aisle": "Sweet Snacks",
                    "image": "hersheys-kisses-or-chocolate-kisses.jpg",
                    "consistency": "SOLID",
                    "name": "hershey's kisses brand milk chocolate",
                    "nameClean": "hersheys kisses brand milk chocolates",
                    "original": "Optional: 1-2 cups Chocolate Chips to add to dough. OR Add a Hershey's Chocolate Kiss on top as done for Peanut Butter Blossoms. Doesn't change baking time.",
                    "originalName": "Optional: Chocolate Chips to add to dough. OR Add a Hershey's Chocolate Kiss on top as done for Peanut Butter Blossoms. Doesn't change baking time",
                    "amount": 1,
                    "unit": "cups",
                    "meta": [
                        "for peanut butter blossoms. doesn't change baking time."
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
                }
            ],
            "id": 655335,
            "title": "Peanut Butter Sriracha Cookies",
            "readyInMinutes": 45,
            "servings": 60,
            "sourceUrl": "https://www.foodista.com/recipe/YGQH8YZV/peanut-butter-sriracha-cookies",
            "image": "https://spoonacular.com/recipeImages/655335-556x370.jpg",
            "imageType": "jpg",
            "summary": "Peanut Butter Sriracha Cookies is a <b>lacto ovo vegetarian</b> recipe with 60 servings. One portion of this dish contains around <b>2g of protein</b>, <b>7g of fat</b>, and a total of <b>116 calories</b>. For <b>11 cents per serving</b>, this recipe <b>covers 2%</b> of your daily requirements of vitamins and minerals. 115 people have made this recipe and would make it again. It is brought to you by Foodista. A mixture of add a hershey's chocolate kiss on top as done, sriracha, flour, and a handful of other ingredients are all it takes to make this recipe so scrumptious. From preparation to the plate, this recipe takes about <b>about 45 minutes</b>. Taking all factors into account, this recipe <b>earns a spoonacular score of 9%</b>, which is improvable. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/healthy-peanut-butter-surprise-cookies-fudgy-brownie-cookies-with-a-peanut-butter-center-523094\">Healthy Peanut Butter Surprise Cookies (Fudgy Brownie Cookies with a Peanut Butter Center!)</a>, <a href=\"https://spoonacular.com/recipes/peanut-butter-sriracha-popcorn-balls-617080\">Peanut Butter-Sriracha Popcorn Balls</a>, and <a href=\"https://spoonacular.com/recipes/death-by-peanut-butter-peanut-butter-cookies-with-chocolate-peanut-butter-cups-566305\">Death by Peanut Butter: Peanut Butter Cookies with Chocolate Peanut Butter Cups</a>.",
            "cuisines": [],
            "dishTypes": [],
            "diets": [
                "lacto ovo vegetarian"
            ],
            "occasions": [],
            "instructions": "Cream together butter, peanut butter and sugars.\nSlowly add in sriracha, eggs and vanilla. Beat until combined.\nIn another bowl mix together flour, baking powder, baking soda and salt.\nGently mix flour into peanut butter mixture until well combined. Place batter into refrigerator for 1 hour to chill.\nPre-heat oven to 375 degrees.\nRoll dough into approx 1 sized balls or use a Medium sized cookie scoop/Size 40  1tbs portion. Dip the top of dough ball into granulated sugar and place onto cookie sheet.\nFlatten each ball with a fork, making a criss-cross pattern. Bake for 8-10 minutes or just until the cookies begin to brown. Do NOT over-bake!\nCool on wire racks and enjoy!",
            "analyzedInstructions": [
                {
                    "name": "",
                    "steps": [
                        {
                            "number": 1,
                            "step": "Cream together butter, peanut butter and sugars.",
                            "ingredients": [
                                {
                                    "id": 16098,
                                    "name": "peanut butter",
                                    "localizedName": "peanut butter",
                                    "image": "peanut-butter.png"
                                },
                                {
                                    "id": 1001,
                                    "name": "butter",
                                    "localizedName": "butter",
                                    "image": "butter-sliced.jpg"
                                },
                                {
                                    "id": 1053,
                                    "name": "cream",
                                    "localizedName": "cream",
                                    "image": "fluid-cream.jpg"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 2,
                            "step": "Slowly add in sriracha, eggs and vanilla. Beat until combined.",
                            "ingredients": [
                                {
                                    "id": 1016168,
                                    "name": "sriracha",
                                    "localizedName": "sriracha",
                                    "image": "hot-sauce-or-tabasco.png"
                                },
                                {
                                    "id": 1052050,
                                    "name": "vanilla",
                                    "localizedName": "vanilla",
                                    "image": "vanilla.jpg"
                                },
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
                            "number": 3,
                            "step": "In another bowl mix together flour, baking powder, baking soda and salt.",
                            "ingredients": [
                                {
                                    "id": 18369,
                                    "name": "baking powder",
                                    "localizedName": "baking powder",
                                    "image": "white-powder.jpg"
                                },
                                {
                                    "id": 18372,
                                    "name": "baking soda",
                                    "localizedName": "baking soda",
                                    "image": "white-powder.jpg"
                                },
                                {
                                    "id": 20081,
                                    "name": "all purpose flour",
                                    "localizedName": "all purpose flour",
                                    "image": "flour.png"
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
                                    "id": 404783,
                                    "name": "bowl",
                                    "localizedName": "bowl",
                                    "image": "bowl.jpg"
                                }
                            ]
                        },
                        {
                            "number": 4,
                            "step": "Gently mix flour into peanut butter mixture until well combined.",
                            "ingredients": [
                                {
                                    "id": 16098,
                                    "name": "peanut butter",
                                    "localizedName": "peanut butter",
                                    "image": "peanut-butter.png"
                                },
                                {
                                    "id": 20081,
                                    "name": "all purpose flour",
                                    "localizedName": "all purpose flour",
                                    "image": "flour.png"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 5,
                            "step": "Place batter into refrigerator for 1 hour to chill.",
                            "ingredients": [],
                            "equipment": [],
                            "length": {
                                "number": 60,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 6,
                            "step": "Pre-heat oven to 375 degrees.",
                            "ingredients": [],
                            "equipment": [
                                {
                                    "id": 404784,
                                    "name": "oven",
                                    "localizedName": "oven",
                                    "image": "oven.jpg"
                                }
                            ]
                        },
                        {
                            "number": 7,
                            "step": "Roll dough into approx 1 sized balls or use a Medium sized cookie scoop/Size 40  1tbs portion. Dip the top of dough ball into granulated sugar and place onto cookie sheet.",
                            "ingredients": [
                                {
                                    "id": 10719335,
                                    "name": "granulated sugar",
                                    "localizedName": "granulated sugar",
                                    "image": "sugar-in-bowl.png"
                                },
                                {
                                    "id": 10118192,
                                    "name": "cookies",
                                    "localizedName": "cookies",
                                    "image": "shortbread-cookies.jpg"
                                },
                                {
                                    "id": 0,
                                    "name": "dough",
                                    "localizedName": "dough",
                                    "image": "pizza-dough"
                                },
                                {
                                    "id": 0,
                                    "name": "roll",
                                    "localizedName": "roll",
                                    "image": "dinner-yeast-rolls.jpg"
                                },
                                {
                                    "id": 0,
                                    "name": "dip",
                                    "localizedName": "dip",
                                    "image": ""
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404727,
                                    "name": "baking sheet",
                                    "localizedName": "baking sheet",
                                    "image": "baking-sheet.jpg"
                                }
                            ]
                        },
                        {
                            "number": 8,
                            "step": "Flatten each ball with a fork, making a criss-cross pattern.",
                            "ingredients": [],
                            "equipment": []
                        },
                        {
                            "number": 9,
                            "step": "Bake for 8-10 minutes or just until the cookies begin to brown. Do NOT over-bake!",
                            "ingredients": [
                                {
                                    "id": 10118192,
                                    "name": "cookies",
                                    "localizedName": "cookies",
                                    "image": "shortbread-cookies.jpg"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404784,
                                    "name": "oven",
                                    "localizedName": "oven",
                                    "image": "oven.jpg"
                                }
                            ],
                            "length": {
                                "number": 10,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 10,
                            "step": "Cool on wire racks and enjoy!",
                            "ingredients": [],
                            "equipment": []
                        }
                    ]
                }
            ],
            "originalId": null,
            "spoonacularSourceUrl": "https://spoonacular.com/peanut-butter-sriracha-cookies-655335",
            "expanded": false,
            "nutrition_stats": {
                "calories": "96k",
                "carbs": "13g",
                "fat": "4g",
                "protein": "1g",
                "bad": [
                    {
                        "title": "Calories",
                        "amount": "96k",
                        "indented": false,
                        "percentOfDailyNeeds": 4.83
                    },
                    {
                        "title": "Fat",
                        "amount": "4g",
                        "indented": false,
                        "percentOfDailyNeeds": 6.76
                    },
                    {
                        "title": "Saturated Fat",
                        "amount": "2g",
                        "indented": true,
                        "percentOfDailyNeeds": 16.56
                    },
                    {
                        "title": "Carbohydrates",
                        "amount": "13g",
                        "indented": false,
                        "percentOfDailyNeeds": 4.63
                    },
                    {
                        "title": "Sugar",
                        "amount": "9g",
                        "indented": true,
                        "percentOfDailyNeeds": 10.29
                    },
                    {
                        "title": "Cholesterol",
                        "amount": "14mg",
                        "indented": false,
                        "percentOfDailyNeeds": 4.85
                    },
                    {
                        "title": "Sodium",
                        "amount": "80mg",
                        "indented": false,
                        "percentOfDailyNeeds": 3.48
                    }
                ],
                "good": [
                    {
                        "title": "Protein",
                        "amount": "1g",
                        "indented": false,
                        "percentOfDailyNeeds": 2.2
                    },
                    {
                        "title": "Selenium",
                        "amount": "2µg",
                        "indented": false,
                        "percentOfDailyNeeds": 3.57
                    },
                    {
                        "title": "Vitamin B1",
                        "amount": "0.05mg",
                        "indented": false,
                        "percentOfDailyNeeds": 3.07
                    },
                    {
                        "title": "Folate",
                        "amount": "11µg",
                        "indented": false,
                        "percentOfDailyNeeds": 2.85
                    },
                    {
                        "title": "Vitamin B2",
                        "amount": "0.04mg",
                        "indented": false,
                        "percentOfDailyNeeds": 2.23
                    },
                    {
                        "title": "Manganese",
                        "amount": "0.04mg",
                        "indented": false,
                        "percentOfDailyNeeds": 2.16
                    },
                    {
                        "title": "Vitamin A",
                        "amount": "104IU",
                        "indented": false,
                        "percentOfDailyNeeds": 2.08
                    },
                    {
                        "title": "Iron",
                        "amount": "0.37mg",
                        "indented": false,
                        "percentOfDailyNeeds": 2.03
                    },
                    {
                        "title": "Vitamin B3",
                        "amount": "0.35mg",
                        "indented": false,
                        "percentOfDailyNeeds": 1.74
                    },
                    {
                        "title": "Calcium",
                        "amount": "16mg",
                        "indented": false,
                        "percentOfDailyNeeds": 1.61
                    },
                    {
                        "title": "Phosphorus",
                        "amount": "14mg",
                        "indented": false,
                        "percentOfDailyNeeds": 1.48
                    },
                    {
                        "title": "Fiber",
                        "amount": "0.25g",
                        "indented": false,
                        "percentOfDailyNeeds": 1.02
                    }
                ],
                "expires": 1651685789544,
                "isStale": true
            }
        },
        {
            "vegetarian": true,
            "vegan": true,
            "glutenFree": true,
            "dairyFree": true,
            "veryHealthy": false,
            "cheap": false,
            "veryPopular": true,
            "sustainable": false,
            "lowFodmap": false,
            "weightWatcherSmartPoints": 2,
            "gaps": "no",
            "preparationMinutes": -1,
            "cookingMinutes": -1,
            "aggregateLikes": 13090,
            "healthScore": 12,
            "creditsText": "blogspot.com",
            "sourceName": "blogspot.com",
            "pricePerServing": 18.78,
            "extendedIngredients": [
                {
                    "id": 1002030,
                    "aisle": "Spices and Seasonings",
                    "image": "pepper.jpg",
                    "consistency": "SOLID",
                    "name": "black pepper",
                    "nameClean": "black pepper",
                    "original": "1 tsp black pepper",
                    "originalName": "black pepper",
                    "amount": 1,
                    "unit": "tsp",
                    "meta": [
                        "black"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        }
                    }
                },
                {
                    "id": 1002014,
                    "aisle": "Spices and Seasonings",
                    "image": "ground-cumin.jpg",
                    "consistency": "SOLID",
                    "name": "cumin",
                    "nameClean": "cumin",
                    "original": "2 tsp cumin",
                    "originalName": "cumin",
                    "amount": 2,
                    "unit": "tsp",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 2,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        },
                        "metric": {
                            "amount": 2,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
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
                    "original": "4 Tbsp. jarred minced garlic",
                    "originalName": "jarred minced garlic",
                    "amount": 4,
                    "unit": "Tbsp",
                    "meta": [
                        "jarred",
                        "minced"
                    ],
                    "measures": {
                        "us": {
                            "amount": 4,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        },
                        "metric": {
                            "amount": 4,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        }
                    }
                },
                {
                    "id": 11282,
                    "aisle": "Produce",
                    "image": "brown-onion.png",
                    "consistency": "SOLID",
                    "name": "onion",
                    "nameClean": "onion",
                    "original": "1 large onion, chopped",
                    "originalName": "onion, chopped",
                    "amount": 1,
                    "unit": "large",
                    "meta": [
                        "chopped"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "large",
                            "unitLong": "large"
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "large",
                            "unitLong": "large"
                        }
                    }
                },
                {
                    "id": 16043,
                    "aisle": "Pasta and Rice;Canned and Jarred",
                    "image": "pinto-beans.jpg",
                    "consistency": "SOLID",
                    "name": "pinto beans",
                    "nameClean": "pinto beans",
                    "original": "2 lbs pinto beans",
                    "originalName": "pinto beans",
                    "amount": 2,
                    "unit": "lbs",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 2,
                            "unitShort": "lb",
                            "unitLong": "pounds"
                        },
                        "metric": {
                            "amount": 907.185,
                            "unitShort": "g",
                            "unitLong": "grams"
                        }
                    }
                },
                {
                    "id": 2047,
                    "aisle": "Spices and Seasonings",
                    "image": "salt.jpg",
                    "consistency": "SOLID",
                    "name": "salt",
                    "nameClean": "table salt",
                    "original": "*Up to 2 1/2 Tbsp salt (This is the absolute max if you don't pre-soak your beans.)",
                    "originalName": "Up salt (This is the absolute max if you don't pre-soak your beans.)",
                    "amount": 1,
                    "unit": "Tbsp",
                    "meta": [
                        "(This is the absolute max if you don't pre-soak your beans.)"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "Tbsp",
                            "unitLong": "Tbsp"
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "Tbsp",
                            "unitLong": "Tbsp"
                        }
                    }
                },
                {
                    "id": 14412,
                    "aisle": "Beverages",
                    "image": "water.png",
                    "consistency": "LIQUID",
                    "name": "water",
                    "nameClean": "water",
                    "original": "10 cups hot water",
                    "originalName": "hot water",
                    "amount": 10,
                    "unit": "cups",
                    "meta": [
                        "hot"
                    ],
                    "measures": {
                        "us": {
                            "amount": 10,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 2.366,
                            "unitShort": "l",
                            "unitLong": "liters"
                        }
                    }
                }
            ],
            "id": 775585,
            "title": "Crockpot \"Refried\" Beans",
            "readyInMinutes": 45,
            "servings": 16,
            "sourceUrl": "http://penniesandpancakes.blogspot.com/2012/09/crockpot-refried-beans-019-per-cup.html?m=1",
            "image": "https://spoonacular.com/recipeImages/775585-556x370.jpg",
            "imageType": "jpg",
            "summary": "Crockpot \"Refried\" Beans is a <b>gluten free and vegan</b> hor d'oeuvre. This recipe makes 16 servings with <b>88 calories</b>, <b>5g of protein</b>, and <b>0g of fat</b> each. For <b>18 cents per serving</b>, this recipe <b>covers 6%</b> of your daily requirements of vitamins and minerals. 13089 people were impressed by this recipe. If you have onion, up salt, garlic, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 84%</b>. This score is amazing. Similar recipes include <a href=\"https://spoonacular.com/recipes/crockpot-refried-beans-519722\">Crockpot Refried Beans</a>, <a href=\"https://spoonacular.com/recipes/crockpot-refried-beans-640895\">Crockpot Refried Beans</a>, and <a href=\"https://spoonacular.com/recipes/healthy-crockpot-refried-beans-584828\">Healthy Crockpot Refried Beans</a>.",
            "cuisines": [],
            "dishTypes": [
                "antipasti",
                "starter",
                "snack",
                "appetizer",
                "antipasto",
                "hor d'oeuvre"
            ],
            "diets": [
                "gluten free",
                "dairy free",
                "lacto ovo vegetarian",
                "vegan"
            ],
            "occasions": [],
            "instructions": "<p>Rinse the beans in a colander. Pick out any bad beans.</p>Combine all the ingredients in the crockpot. Remove any floating beans. Cover, and cook on HIGH for 4 hours and on LOW for 2 hours.<p><br>Uncover, and remove extra liquid. Leave enough liquid to reach the desired consistency when the beans are mashed. (We like our beans somewhere between the very-liquidy restaurant style beans, and the canned version of refried beans.)</p><p>Mash beans with a potato masher to desired consistency.</p><p>Serve warm. Store in air-tight containers in the refrigerator and use within 2 weeks, or freeze in ziplock bags for later use.</p>",
            "analyzedInstructions": [
                {
                    "name": "",
                    "steps": [
                        {
                            "number": 1,
                            "step": "Rinse the beans in a colander. Pick out any bad beans.",
                            "ingredients": [
                                {
                                    "id": 0,
                                    "name": "beans",
                                    "localizedName": "beans",
                                    "image": "kidney-beans.jpg"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404639,
                                    "name": "colander",
                                    "localizedName": "colander",
                                    "image": "colander.jpg"
                                }
                            ]
                        },
                        {
                            "number": 2,
                            "step": "Combine all the ingredients in the crockpot.",
                            "ingredients": [],
                            "equipment": [
                                {
                                    "id": 404718,
                                    "name": "slow cooker",
                                    "localizedName": "slow cooker",
                                    "image": "slow-cooker.jpg"
                                }
                            ]
                        },
                        {
                            "number": 3,
                            "step": "Remove any floating beans. Cover, and cook on HIGH for 4 hours and on LOW for 2 hours.Uncover, and remove extra liquid. Leave enough liquid to reach the desired consistency when the beans are mashed. (We like our beans somewhere between the very-liquidy restaurant style beans, and the canned version of refried beans.)Mash beans with a potato masher to desired consistency.",
                            "ingredients": [
                                {
                                    "id": 16202,
                                    "name": "refried beans",
                                    "localizedName": "refried beans",
                                    "image": "refried-beans.png"
                                },
                                {
                                    "id": 11352,
                                    "name": "potato",
                                    "localizedName": "potato",
                                    "image": "potatoes-yukon-gold.png"
                                },
                                {
                                    "id": 0,
                                    "name": "beans",
                                    "localizedName": "beans",
                                    "image": "kidney-beans.jpg"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404763,
                                    "name": "potato masher",
                                    "localizedName": "potato masher",
                                    "image": "potato-masher.jpg"
                                }
                            ],
                            "length": {
                                "number": 360,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 4,
                            "step": "Serve warm. Store in air-tight containers in the refrigerator and use within 2 weeks, or freeze in ziplock bags for later use.",
                            "ingredients": [],
                            "equipment": [
                                {
                                    "id": 221671,
                                    "name": "ziploc bags",
                                    "localizedName": "ziploc bags",
                                    "image": "plastic-bag.jpg"
                                }
                            ]
                        }
                    ]
                }
            ],
            "originalId": null,
            "spoonacularSourceUrl": "https://spoonacular.com/crockpot-refried-beans-775585",
            "expanded": false,
            "nutrition_stats": {
                "calories": "89k",
                "carbs": "16g",
                "fat": "0.45g",
                "protein": "5g",
                "bad": [
                    {
                        "title": "Calories",
                        "amount": "89k",
                        "indented": false,
                        "percentOfDailyNeeds": 4.45
                    },
                    {
                        "title": "Fat",
                        "amount": "0.45g",
                        "indented": false,
                        "percentOfDailyNeeds": 0.69
                    },
                    {
                        "title": "Saturated Fat",
                        "amount": "0.09g",
                        "indented": true,
                        "percentOfDailyNeeds": 0.55
                    },
                    {
                        "title": "Carbohydrates",
                        "amount": "16g",
                        "indented": false,
                        "percentOfDailyNeeds": 5.53
                    },
                    {
                        "title": "Sugar",
                        "amount": "0.62g",
                        "indented": true,
                        "percentOfDailyNeeds": 0.69
                    },
                    {
                        "title": "Cholesterol",
                        "amount": "0.0mg",
                        "indented": false,
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "title": "Sodium",
                        "amount": "445mg",
                        "indented": false,
                        "percentOfDailyNeeds": 19.35
                    }
                ],
                "good": [
                    {
                        "title": "Protein",
                        "amount": "5g",
                        "indented": false,
                        "percentOfDailyNeeds": 10.79
                    },
                    {
                        "title": "Folate",
                        "amount": "99µg",
                        "indented": false,
                        "percentOfDailyNeeds": 24.85
                    },
                    {
                        "title": "Fiber",
                        "amount": "5g",
                        "indented": false,
                        "percentOfDailyNeeds": 21.45
                    },
                    {
                        "title": "Manganese",
                        "amount": "0.33mg",
                        "indented": false,
                        "percentOfDailyNeeds": 16.39
                    },
                    {
                        "title": "Phosphorus",
                        "amount": "90mg",
                        "indented": false,
                        "percentOfDailyNeeds": 9.06
                    },
                    {
                        "title": "Vitamin B6",
                        "amount": "0.17mg",
                        "indented": false,
                        "percentOfDailyNeeds": 8.36
                    },
                    {
                        "title": "Magnesium",
                        "amount": "32mg",
                        "indented": false,
                        "percentOfDailyNeeds": 8.1
                    },
                    {
                        "title": "Copper",
                        "amount": "0.16mg",
                        "indented": false,
                        "percentOfDailyNeeds": 8.08
                    },
                    {
                        "title": "Vitamin B1",
                        "amount": "0.12mg",
                        "indented": false,
                        "percentOfDailyNeeds": 7.96
                    },
                    {
                        "title": "Iron",
                        "amount": "1mg",
                        "indented": false,
                        "percentOfDailyNeeds": 7.89
                    },
                    {
                        "title": "Potassium",
                        "amount": "275mg",
                        "indented": false,
                        "percentOfDailyNeeds": 7.86
                    },
                    {
                        "title": "Selenium",
                        "amount": "3µg",
                        "indented": false,
                        "percentOfDailyNeeds": 5.52
                    },
                    {
                        "title": "Zinc",
                        "amount": "0.62mg",
                        "indented": false,
                        "percentOfDailyNeeds": 4.16
                    },
                    {
                        "title": "Calcium",
                        "amount": "39mg",
                        "indented": false,
                        "percentOfDailyNeeds": 3.94
                    },
                    {
                        "title": "Vitamin E",
                        "amount": "0.55mg",
                        "indented": false,
                        "percentOfDailyNeeds": 3.64
                    },
                    {
                        "title": "Vitamin B2",
                        "amount": "0.04mg",
                        "indented": false,
                        "percentOfDailyNeeds": 2.41
                    },
                    {
                        "title": "Vitamin C",
                        "amount": "1mg",
                        "indented": false,
                        "percentOfDailyNeeds": 2.17
                    },
                    {
                        "title": "Vitamin K",
                        "amount": "2µg",
                        "indented": false,
                        "percentOfDailyNeeds": 2.17
                    },
                    {
                        "title": "Vitamin B5",
                        "amount": "0.14mg",
                        "indented": false,
                        "percentOfDailyNeeds": 1.44
                    },
                    {
                        "title": "Vitamin B3",
                        "amount": "0.22mg",
                        "indented": false,
                        "percentOfDailyNeeds": 1.09
                    }
                ],
                "expires": 1635095714172,
                "isStale": true
            }
        },
        {
            "vegetarian": false,
            "vegan": false,
            "glutenFree": true,
            "dairyFree": true,
            "veryHealthy": true,
            "cheap": false,
            "veryPopular": false,
            "sustainable": false,
            "lowFodmap": false,
            "weightWatcherSmartPoints": 32,
            "gaps": "no",
            "preparationMinutes": -1,
            "cookingMinutes": -1,
            "aggregateLikes": 124,
            "healthScore": 100,
            "creditsText": "afrolems.com",
            "sourceName": "afrolems.com",
            "pricePerServing": 355.78,
            "extendedIngredients": [
                {
                    "id": 10211821,
                    "aisle": "Produce",
                    "image": "bell-pepper-orange.png",
                    "consistency": "SOLID",
                    "name": "bell peppers",
                    "nameClean": "bell pepper",
                    "original": "Bell Peppers for garnishing",
                    "originalName": "Bell Peppers for garnishing",
                    "amount": 1,
                    "unit": "serving",
                    "meta": [
                        "for garnishing"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "serving",
                            "unitLong": "serving"
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "serving",
                            "unitLong": "serving"
                        }
                    }
                },
                {
                    "id": 5006,
                    "aisle": "Meat",
                    "image": "whole-chicken.jpg",
                    "consistency": "SOLID",
                    "name": "chicken",
                    "nameClean": "whole chicken",
                    "original": "1.5 cups of Chopped Chicken",
                    "originalName": "Chopped Chicken",
                    "amount": 1.5,
                    "unit": "cups",
                    "meta": [
                        "chopped"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1.5,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 354.882,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 4582,
                    "aisle": "Oil, Vinegar, Salad Dressing",
                    "image": "vegetable-oil.jpg",
                    "consistency": "LIQUID",
                    "name": "cooking oil",
                    "nameClean": "cooking oil",
                    "original": "2.5 Cooking spoons of oil",
                    "originalName": "Cooking spoons of oil",
                    "amount": 2.5,
                    "unit": "",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 2.5,
                            "unitShort": "",
                            "unitLong": ""
                        },
                        "metric": {
                            "amount": 2.5,
                            "unitShort": "",
                            "unitLong": ""
                        }
                    }
                },
                {
                    "id": 93605,
                    "aisle": "Ethnic Foods",
                    "image": "chili-paste.png",
                    "consistency": "SOLID",
                    "name": "curry paste",
                    "nameClean": "red curry paste",
                    "original": "1 teaspoon of Curry",
                    "originalName": "Curry",
                    "amount": 1,
                    "unit": "teaspoon",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        }
                    }
                },
                {
                    "id": 11215,
                    "aisle": "Produce",
                    "image": "garlic.png",
                    "consistency": "SOLID",
                    "name": "garlic cloves",
                    "nameClean": "garlic",
                    "original": "2 garlic cloves",
                    "originalName": "garlic cloves",
                    "amount": 2,
                    "unit": "",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 2,
                            "unitShort": "",
                            "unitLong": ""
                        },
                        "metric": {
                            "amount": 2,
                            "unitShort": "",
                            "unitLong": ""
                        }
                    }
                },
                {
                    "id": 11216,
                    "aisle": "Produce;Ethnic Foods;Spices and Seasonings",
                    "image": "ginger.png",
                    "consistency": "SOLID",
                    "name": "ginger",
                    "nameClean": "ginger",
                    "original": "Small piece of Chopped ginger",
                    "originalName": "Small of Chopped ginger",
                    "amount": 1,
                    "unit": "piece",
                    "meta": [
                        "chopped"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "",
                            "unitLong": ""
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "",
                            "unitLong": ""
                        }
                    }
                },
                {
                    "id": 16091,
                    "aisle": "Nuts;Savory Snacks",
                    "image": "peanuts.png",
                    "consistency": "SOLID",
                    "name": "groundnut",
                    "nameClean": "peanuts",
                    "original": "1 cup of groundnut (Blended) or 1 Cooking spoon of peanut Butter",
                    "originalName": "groundnut (Blended) or 1 Cooking spoon of peanut Butter",
                    "amount": 1,
                    "unit": "cup",
                    "meta": [
                        "(Blended)"
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
                    "id": 11282,
                    "aisle": "Produce",
                    "image": "brown-onion.png",
                    "consistency": "SOLID",
                    "name": "onions",
                    "nameClean": "onion",
                    "original": "2 handfuls of Chopped onions",
                    "originalName": "Chopped onions",
                    "amount": 2,
                    "unit": "handfuls",
                    "meta": [
                        "chopped"
                    ],
                    "measures": {
                        "us": {
                            "amount": 2,
                            "unitShort": "handfuls",
                            "unitLong": "handfuls"
                        },
                        "metric": {
                            "amount": 2,
                            "unitShort": "handfuls",
                            "unitLong": "handfuls"
                        }
                    }
                },
                {
                    "id": 10211821,
                    "aisle": "Produce",
                    "image": "bell-pepper-orange.png",
                    "consistency": "SOLID",
                    "name": "bell pepper",
                    "nameClean": "bell pepper",
                    "original": "Pepper",
                    "originalName": "Pepper",
                    "amount": 1,
                    "unit": "serving",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "serving",
                            "unitLong": "serving"
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "serving",
                            "unitLong": "serving"
                        }
                    }
                },
                {
                    "id": 2047,
                    "aisle": "Spices and Seasonings",
                    "image": "salt.jpg",
                    "consistency": "SOLID",
                    "name": "salt",
                    "nameClean": "table salt",
                    "original": "Salt",
                    "originalName": "Salt",
                    "amount": 1,
                    "unit": "serving",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "serving",
                            "unitLong": "serving"
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "serving",
                            "unitLong": "serving"
                        }
                    }
                },
                {
                    "id": 1042027,
                    "aisle": null,
                    "image": "seasoning.png",
                    "consistency": "SOLID",
                    "name": "seasoning",
                    "nameClean": "seasoning",
                    "original": "Seasoning",
                    "originalName": "Seasoning",
                    "amount": 1,
                    "unit": "serving",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "serving",
                            "unitLong": "serving"
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "serving",
                            "unitLong": "serving"
                        }
                    }
                },
                {
                    "id": 11507,
                    "aisle": "Produce",
                    "image": "sweet-potato.png",
                    "consistency": "SOLID",
                    "name": "sweet potato",
                    "nameClean": "sweet potato",
                    "original": "1/2 small sweet potato (Chopped)",
                    "originalName": "sweet potato (Chopped)",
                    "amount": 0.5,
                    "unit": "small",
                    "meta": [
                        "chopped",
                        "()"
                    ],
                    "measures": {
                        "us": {
                            "amount": 0.5,
                            "unitShort": "small",
                            "unitLong": "smalls"
                        },
                        "metric": {
                            "amount": 0.5,
                            "unitShort": "small",
                            "unitLong": "smalls"
                        }
                    }
                },
                {
                    "id": 2049,
                    "aisle": "Produce;Spices and Seasonings",
                    "image": "thyme.jpg",
                    "consistency": "SOLID",
                    "name": "thyme",
                    "nameClean": "thyme",
                    "original": "Pinch of thyme",
                    "originalName": "Pinch of thyme",
                    "amount": 1,
                    "unit": "pinch",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "pinch",
                            "unitLong": "pinch"
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "pinch",
                            "unitLong": "pinch"
                        }
                    }
                },
                {
                    "id": 11529,
                    "aisle": "Produce",
                    "image": "tomato.png",
                    "consistency": "SOLID",
                    "name": "tomato",
                    "nameClean": "tomato",
                    "original": "1 Chopped small tomato",
                    "originalName": "Chopped small tomato",
                    "amount": 1,
                    "unit": "small",
                    "meta": [
                        "chopped"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "small",
                            "unitLong": "small"
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "small",
                            "unitLong": "small"
                        }
                    }
                },
                {
                    "id": 11529,
                    "aisle": "Produce",
                    "image": "tomato.png",
                    "consistency": "SOLID",
                    "name": "tomato",
                    "nameClean": "tomato",
                    "original": "1.5 Cooking spoons of Blended tomato",
                    "originalName": "Cooking spoons of Blended tomato",
                    "amount": 1.5,
                    "unit": "",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1.5,
                            "unitShort": "",
                            "unitLong": ""
                        },
                        "metric": {
                            "amount": 1.5,
                            "unitShort": "",
                            "unitLong": ""
                        }
                    }
                }
            ],
            "id": 716268,
            "title": "African Chicken Peanut Stew",
            "readyInMinutes": 45,
            "servings": 1,
            "sourceUrl": "http://www.afrolems.com/2014/03/18/african-chicken-peanut-stew-recipe/",
            "image": "https://spoonacular.com/recipeImages/716268-556x370.jpg",
            "imageType": "jpg",
            "summary": "Need a <b>gluten free and dairy free main course</b>? African Chicken Peanut Stew could be a tremendous recipe to try. This recipe makes 1 servings with <b>1377 calories</b>, <b>75g of protein</b>, and <b>102g of fat</b> each. For <b>$3.87 per serving</b>, this recipe <b>covers 62%</b> of your daily requirements of vitamins and minerals. It can be enjoyed any time, but it is especially good for <b>Autumn</b>. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. 124 people have tried and liked this recipe. Head to the store and pick up bell peppers, tomato, pepper, and a few other things to make it today. To use up the tomato you could follow this main course with the <a href=\"https://spoonacular.com/recipes/pink-peony-popcorn-balls-129348\">Pink Peony Popcorn Balls</a> as a dessert. All things considered, we decided this recipe <b>deserves a spoonacular score of 99%</b>. This score is super. Try <a href=\"https://spoonacular.com/recipes/african-chicken-peanut-stew-245461\">African Chicken Peanut Stew</a>, <a href=\"https://spoonacular.com/recipes/west-african-peanut-chicken-stew-163315\">West African Peanut-Chicken Stew</a>, and <a href=\"https://spoonacular.com/recipes/one-pot-african-peanut-stew-854978\">One-Pot African Peanut Stew</a> for similar recipes.",
            "cuisines": [
                "African"
            ],
            "dishTypes": [
                "lunch",
                "main course",
                "main dish",
                "dinner"
            ],
            "diets": [
                "gluten free",
                "dairy free"
            ],
            "occasions": [
                "fall",
                "winter"
            ],
            "instructions": "Season and Boil the Chicken for 10 minutes with salt, pepper, seasoning, a handful of onions.Once the chicken is ready, in the same stock, Boil the chopped sweet potatoes till its almost cooked. Save the stock in a separate Bowl and the chicken and potatoes in a separate Bowl as well.In a pot, heat up one cooking spoon of oil and fry the chicken till it Browns. Take it out and heat up the other 1.5 cooking spoons of oil and fry the onions, tomatoes Both chopped and Blended, ginger and garlic.Add your seasoning, curry, thyme, parsley, salt and pepper to the pot.Pour in your stock, chicken and potatoes to cook further.Stir in your peanut Butter and allow to cook for 10 minutes on low heat.If your sauce gets too thick, add a little water to it. Serve with white rice or more sweet potatoes.You could also garnish the dish with Bell peppers.   ",
            "analyzedInstructions": [
                {
                    "name": "",
                    "steps": [
                        {
                            "number": 1,
                            "step": "Season and Boil the Chicken for 10 minutes with salt, pepper, seasoning, a handful of onions.Once the chicken is ready, in the same stock, Boil the chopped sweet potatoes till its almost cooked. Save the stock in a separate Bowl and the chicken and potatoes in a separate Bowl as well.In a pot, heat up one cooking spoon of oil and fry the chicken till it Browns. Take it out and heat up the other 1.5 cooking spoons of oil and fry the onions, tomatoes Both chopped and Blended, ginger and garlic.",
                            "ingredients": [
                                {
                                    "id": 11507,
                                    "name": "sweet potato",
                                    "localizedName": "sweet potato",
                                    "image": "sweet-potato.png"
                                },
                                {
                                    "id": 1042027,
                                    "name": "seasoning",
                                    "localizedName": "seasoning",
                                    "image": "seasoning.png"
                                },
                                {
                                    "id": 11352,
                                    "name": "potato",
                                    "localizedName": "potato",
                                    "image": "potatoes-yukon-gold.png"
                                },
                                {
                                    "id": 11529,
                                    "name": "tomato",
                                    "localizedName": "tomato",
                                    "image": "tomato.png"
                                },
                                {
                                    "id": 5006,
                                    "name": "whole chicken",
                                    "localizedName": "whole chicken",
                                    "image": "whole-chicken.jpg"
                                },
                                {
                                    "id": 11215,
                                    "name": "garlic",
                                    "localizedName": "garlic",
                                    "image": "garlic.png"
                                },
                                {
                                    "id": 11216,
                                    "name": "ginger",
                                    "localizedName": "ginger",
                                    "image": "ginger.png"
                                },
                                {
                                    "id": 11282,
                                    "name": "onion",
                                    "localizedName": "onion",
                                    "image": "brown-onion.png"
                                },
                                {
                                    "id": 1002030,
                                    "name": "pepper",
                                    "localizedName": "pepper",
                                    "image": "pepper.jpg"
                                },
                                {
                                    "id": 1006615,
                                    "name": "stock",
                                    "localizedName": "stock",
                                    "image": "chicken-broth.png"
                                },
                                {
                                    "id": 2047,
                                    "name": "salt",
                                    "localizedName": "salt",
                                    "image": "salt.jpg"
                                },
                                {
                                    "id": 4582,
                                    "name": "cooking oil",
                                    "localizedName": "cooking oil",
                                    "image": "vegetable-oil.jpg"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404783,
                                    "name": "bowl",
                                    "localizedName": "bowl",
                                    "image": "bowl.jpg"
                                },
                                {
                                    "id": 404752,
                                    "name": "pot",
                                    "localizedName": "pot",
                                    "image": "stock-pot.jpg"
                                }
                            ],
                            "length": {
                                "number": 10,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 2,
                            "step": "Add your seasoning, curry, thyme, parsley, salt and pepper to the pot.",
                            "ingredients": [
                                {
                                    "id": 1102047,
                                    "name": "salt and pepper",
                                    "localizedName": "salt and pepper",
                                    "image": "salt-and-pepper.jpg"
                                },
                                {
                                    "id": 1042027,
                                    "name": "seasoning",
                                    "localizedName": "seasoning",
                                    "image": "seasoning.png"
                                },
                                {
                                    "id": 11297,
                                    "name": "parsley",
                                    "localizedName": "parsley",
                                    "image": "parsley.jpg"
                                },
                                {
                                    "id": 2015,
                                    "name": "curry powder",
                                    "localizedName": "curry powder",
                                    "image": "curry-powder.jpg"
                                },
                                {
                                    "id": 2049,
                                    "name": "thyme",
                                    "localizedName": "thyme",
                                    "image": "thyme.jpg"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404752,
                                    "name": "pot",
                                    "localizedName": "pot",
                                    "image": "stock-pot.jpg"
                                }
                            ]
                        },
                        {
                            "number": 3,
                            "step": "Pour in your stock, chicken and potatoes to cook further.Stir in your peanut Butter and allow to cook for 10 minutes on low heat.If your sauce gets too thick, add a little water to it.",
                            "ingredients": [
                                {
                                    "id": 16098,
                                    "name": "peanut butter",
                                    "localizedName": "peanut butter",
                                    "image": "peanut-butter.png"
                                },
                                {
                                    "id": 11352,
                                    "name": "potato",
                                    "localizedName": "potato",
                                    "image": "potatoes-yukon-gold.png"
                                },
                                {
                                    "id": 5006,
                                    "name": "whole chicken",
                                    "localizedName": "whole chicken",
                                    "image": "whole-chicken.jpg"
                                },
                                {
                                    "id": 0,
                                    "name": "sauce",
                                    "localizedName": "sauce",
                                    "image": ""
                                },
                                {
                                    "id": 1006615,
                                    "name": "stock",
                                    "localizedName": "stock",
                                    "image": "chicken-broth.png"
                                },
                                {
                                    "id": 14412,
                                    "name": "water",
                                    "localizedName": "water",
                                    "image": "water.png"
                                }
                            ],
                            "equipment": [],
                            "length": {
                                "number": 10,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 4,
                            "step": "Serve with white rice or more sweet potatoes.You could also garnish the dish with Bell peppers.   ",
                            "ingredients": [
                                {
                                    "id": 11507,
                                    "name": "sweet potato",
                                    "localizedName": "sweet potato",
                                    "image": "sweet-potato.png"
                                },
                                {
                                    "id": 10211821,
                                    "name": "bell pepper",
                                    "localizedName": "bell pepper",
                                    "image": "bell-pepper-orange.png"
                                },
                                {
                                    "id": 10220444,
                                    "name": "white rice",
                                    "localizedName": "white rice",
                                    "image": "uncooked-white-rice.png"
                                }
                            ],
                            "equipment": []
                        }
                    ]
                }
            ],
            "originalId": null,
            "spoonacularSourceUrl": "https://spoonacular.com/african-chicken-peanut-stew-716268",
            "expanded": false,
            "nutrition_stats": {
                "calories": "1204k",
                "carbs": "60g",
                "fat": "88g",
                "protein": "58g",
                "bad": [
                    {
                        "title": "Calories",
                        "amount": "1204k",
                        "indented": false,
                        "percentOfDailyNeeds": 60.24
                    },
                    {
                        "title": "Fat",
                        "amount": "88g",
                        "indented": false,
                        "percentOfDailyNeeds": 136.45
                    },
                    {
                        "title": "Saturated Fat",
                        "amount": "15g",
                        "indented": true,
                        "percentOfDailyNeeds": 94.8
                    },
                    {
                        "title": "Carbohydrates",
                        "amount": "60g",
                        "indented": false,
                        "percentOfDailyNeeds": 20.15
                    },
                    {
                        "title": "Sugar",
                        "amount": "16g",
                        "indented": true,
                        "percentOfDailyNeeds": 18.76
                    },
                    {
                        "title": "Cholesterol",
                        "amount": "61mg",
                        "indented": false,
                        "percentOfDailyNeeds": 20.34
                    },
                    {
                        "title": "Sodium",
                        "amount": "340mg",
                        "indented": false,
                        "percentOfDailyNeeds": 14.81
                    }
                ],
                "good": [
                    {
                        "title": "Protein",
                        "amount": "58g",
                        "indented": false,
                        "percentOfDailyNeeds": 117.87
                    },
                    {
                        "title": "Vitamin A",
                        "amount": "17105IU",
                        "indented": false,
                        "percentOfDailyNeeds": 342.11
                    },
                    {
                        "title": "Vitamin C",
                        "amount": "233mg",
                        "indented": false,
                        "percentOfDailyNeeds": 283.46
                    },
                    {
                        "title": "Manganese",
                        "amount": "4mg",
                        "indented": false,
                        "percentOfDailyNeeds": 234.48
                    },
                    {
                        "title": "Vitamin B3",
                        "amount": "32mg",
                        "indented": false,
                        "percentOfDailyNeeds": 161.93
                    },
                    {
                        "title": "Folate",
                        "amount": "476µg",
                        "indented": false,
                        "percentOfDailyNeeds": 119.01
                    },
                    {
                        "title": "Fiber",
                        "amount": "23g",
                        "indented": false,
                        "percentOfDailyNeeds": 92.72
                    },
                    {
                        "title": "Magnesium",
                        "amount": "362mg",
                        "indented": false,
                        "percentOfDailyNeeds": 90.69
                    },
                    {
                        "title": "Vitamin B1",
                        "amount": "1mg",
                        "indented": false,
                        "percentOfDailyNeeds": 85.59
                    },
                    {
                        "title": "Vitamin B6",
                        "amount": "1mg",
                        "indented": false,
                        "percentOfDailyNeeds": 84.06
                    },
                    {
                        "title": "Copper",
                        "amount": "1mg",
                        "indented": false,
                        "percentOfDailyNeeds": 84.03
                    },
                    {
                        "title": "Phosphorus",
                        "amount": "835mg",
                        "indented": false,
                        "percentOfDailyNeeds": 83.52
                    },
                    {
                        "title": "Potassium",
                        "amount": "2495mg",
                        "indented": false,
                        "percentOfDailyNeeds": 71.3
                    },
                    {
                        "title": "Iron",
                        "amount": "8mg",
                        "indented": false,
                        "percentOfDailyNeeds": 49.37
                    },
                    {
                        "title": "Vitamin B5",
                        "amount": "4mg",
                        "indented": false,
                        "percentOfDailyNeeds": 46.23
                    },
                    {
                        "title": "Vitamin K",
                        "amount": "39µg",
                        "indented": false,
                        "percentOfDailyNeeds": 37.69
                    },
                    {
                        "title": "Zinc",
                        "amount": "5mg",
                        "indented": false,
                        "percentOfDailyNeeds": 35.49
                    },
                    {
                        "title": "Selenium",
                        "amount": "23µg",
                        "indented": false,
                        "percentOfDailyNeeds": 33.89
                    },
                    {
                        "title": "Vitamin E",
                        "amount": "4mg",
                        "indented": false,
                        "percentOfDailyNeeds": 32.65
                    },
                    {
                        "title": "Vitamin B2",
                        "amount": "0.53mg",
                        "indented": false,
                        "percentOfDailyNeeds": 31.1
                    },
                    {
                        "title": "Calcium",
                        "amount": "257mg",
                        "indented": false,
                        "percentOfDailyNeeds": 25.71
                    },
                    {
                        "title": "Vitamin B12",
                        "amount": "0.25µg",
                        "indented": false,
                        "percentOfDailyNeeds": 4.2
                    },
                    {
                        "title": "Vitamin D",
                        "amount": "0.16µg",
                        "indented": false,
                        "percentOfDailyNeeds": 1.08
                    }
                ],
                "expires": 1636821405259,
                "isStale": true
            }
        },
        {
            "vegetarian": false,
            "vegan": false,
            "glutenFree": true,
            "dairyFree": false,
            "veryHealthy": false,
            "cheap": false,
            "veryPopular": false,
            "sustainable": false,
            "lowFodmap": false,
            "weightWatcherSmartPoints": 7,
            "gaps": "no",
            "preparationMinutes": -1,
            "cookingMinutes": -1,
            "aggregateLikes": 30,
            "healthScore": 5,
            "creditsText": "Jen West",
            "sourceName": "Pink When",
            "pricePerServing": 68.89,
            "extendedIngredients": [
                {
                    "id": 9316,
                    "aisle": "Produce",
                    "image": "strawberries.png",
                    "consistency": "SOLID",
                    "name": "strawberries",
                    "nameClean": "strawberries",
                    "original": "10 large strawberries, washed and sliced",
                    "originalName": "strawberries, washed and sliced",
                    "amount": 10,
                    "unit": "large",
                    "meta": [
                        "washed and sliced"
                    ],
                    "measures": {
                        "us": {
                            "amount": 10,
                            "unitShort": "large",
                            "unitLong": "larges"
                        },
                        "metric": {
                            "amount": 10,
                            "unitShort": "large",
                            "unitLong": "larges"
                        }
                    }
                },
                {
                    "id": 19095,
                    "aisle": "Frozen",
                    "image": "vanilla-ice-cream.png",
                    "consistency": "SOLID",
                    "name": "vanilla ice cream",
                    "nameClean": "vanilla ice cream",
                    "original": "2½ cups vanilla ice cream",
                    "originalName": "vanilla ice cream",
                    "amount": 2.5,
                    "unit": "cups",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 2.5,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 591.47,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 1077,
                    "aisle": "Milk, Eggs, Other Dairy",
                    "image": "milk.png",
                    "consistency": "LIQUID",
                    "name": "whole milk",
                    "nameClean": "milk",
                    "original": "2 cups whole milk",
                    "originalName": "whole milk",
                    "amount": 2,
                    "unit": "cups",
                    "meta": [
                        "whole"
                    ],
                    "measures": {
                        "us": {
                            "amount": 2,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 473.176,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                }
            ],
            "id": 715574,
            "title": "Homemade Strawberry Shake",
            "readyInMinutes": 45,
            "servings": 6,
            "sourceUrl": "http://www.pinkwhen.com/homemade-strawberry-shake/",
            "image": "https://spoonacular.com/recipeImages/715574-556x370.jpg",
            "imageType": "jpg",
            "summary": "Homemade Strawberry Shake might be just the beverage you are searching for. For <b>47 cents per serving</b>, this recipe <b>covers 6%</b> of your daily requirements of vitamins and minerals. Watching your figure? This gluten free recipe has <b>170 calories</b>, <b>5g of protein</b>, and <b>9g of fat</b> per serving. Head to the store and pick up strawberries, vanillan ice cream, milk, and a few other things to make it today. 30 people were impressed by this recipe. It can be enjoyed any time, but it is especially good for <b>Mother's Day</b>. From preparation to the plate, this recipe takes around <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 48%</b>. This score is solid. Try <a href=\"https://spoonacular.com/recipes/strawberry-milkshake-strawberry-short-shake-551702\">Strawberry Milkshake - Strawberry Short-Shake</a>, <a href=\"https://spoonacular.com/recipes/homemade-shamrock-shake-507774\">Homemade Shamrock Shake</a>, and <a href=\"https://spoonacular.com/recipes/healthy-homemade-shamrock-shake-594783\">Healthy Homemade Shamrock Shake</a> for similar recipes.",
            "cuisines": [],
            "dishTypes": [
                "side dish"
            ],
            "diets": [
                "gluten free"
            ],
            "occasions": [
                "mother's day"
            ],
            "instructions": "Add the strawberries, whole milk and vanilla ice cream to a blender, and blend until smooth.Pour into cold glasses that have been kept in the freezer.Return the shakes to the freezer for about 5 minutes, or until they are thick.Top with whipped cream and sliced strawberries.",
            "analyzedInstructions": [
                {
                    "name": "",
                    "steps": [
                        {
                            "number": 1,
                            "step": "Add the strawberries, whole milk and vanilla ice cream to a blender, and blend until smooth.",
                            "ingredients": [
                                {
                                    "id": 19095,
                                    "name": "vanilla ice cream",
                                    "localizedName": "vanilla ice cream",
                                    "image": "vanilla-ice-cream.png"
                                },
                                {
                                    "id": 9316,
                                    "name": "strawberries",
                                    "localizedName": "strawberries",
                                    "image": "strawberries.png"
                                },
                                {
                                    "id": 1011077,
                                    "name": "whole milk",
                                    "localizedName": "whole milk",
                                    "image": "milk.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404726,
                                    "name": "blender",
                                    "localizedName": "blender",
                                    "image": "blender.png"
                                }
                            ]
                        },
                        {
                            "number": 2,
                            "step": "Pour into cold glasses that have been kept in the freezer.Return the shakes to the freezer for about 5 minutes, or until they are thick.Top with whipped cream and sliced strawberries.",
                            "ingredients": [
                                {
                                    "id": 1054,
                                    "name": "whipped cream",
                                    "localizedName": "whipped cream",
                                    "image": "whipped-cream.jpg"
                                },
                                {
                                    "id": 9316,
                                    "name": "strawberries",
                                    "localizedName": "strawberries",
                                    "image": "strawberries.png"
                                }
                            ],
                            "equipment": [],
                            "length": {
                                "number": 5,
                                "unit": "minutes"
                            }
                        }
                    ]
                }
            ],
            "originalId": null,
            "spoonacularSourceUrl": "https://spoonacular.com/homemade-strawberry-shake-715574",
            "expanded": false,
            "nutrition_stats": {
                "calories": "177k",
                "carbs": "20g",
                "fat": "8g",
                "protein": "4g",
                "bad": [
                    {
                        "title": "Calories",
                        "amount": "177k",
                        "indented": false,
                        "percentOfDailyNeeds": 8.89
                    },
                    {
                        "title": "Fat",
                        "amount": "8g",
                        "indented": false,
                        "percentOfDailyNeeds": 13.58
                    },
                    {
                        "title": "Saturated Fat",
                        "amount": "5g",
                        "indented": true,
                        "percentOfDailyNeeds": 32.86
                    },
                    {
                        "title": "Carbohydrates",
                        "amount": "20g",
                        "indented": false,
                        "percentOfDailyNeeds": 6.78
                    },
                    {
                        "title": "Sugar",
                        "amount": "17g",
                        "indented": true,
                        "percentOfDailyNeeds": 19.98
                    },
                    {
                        "title": "Cholesterol",
                        "amount": "32mg",
                        "indented": false,
                        "percentOfDailyNeeds": 10.78
                    },
                    {
                        "title": "Sodium",
                        "amount": "79mg",
                        "indented": false,
                        "percentOfDailyNeeds": 3.45
                    }
                ],
                "good": [
                    {
                        "title": "Protein",
                        "amount": "4g",
                        "indented": false,
                        "percentOfDailyNeeds": 9.58
                    },
                    {
                        "title": "Vitamin C",
                        "amount": "26mg",
                        "indented": false,
                        "percentOfDailyNeeds": 32.47
                    },
                    {
                        "title": "Calcium",
                        "amount": "169mg",
                        "indented": false,
                        "percentOfDailyNeeds": 16.95
                    },
                    {
                        "title": "Vitamin B2",
                        "amount": "0.28mg",
                        "indented": false,
                        "percentOfDailyNeeds": 16.43
                    },
                    {
                        "title": "Phosphorus",
                        "amount": "136mg",
                        "indented": false,
                        "percentOfDailyNeeds": 13.69
                    },
                    {
                        "title": "Vitamin B12",
                        "amount": "0.58µg",
                        "indented": false,
                        "percentOfDailyNeeds": 9.68
                    },
                    {
                        "title": "Manganese",
                        "amount": "0.18mg",
                        "indented": false,
                        "percentOfDailyNeeds": 9.07
                    },
                    {
                        "title": "Potassium",
                        "amount": "285mg",
                        "indented": false,
                        "percentOfDailyNeeds": 8.16
                    },
                    {
                        "title": "Vitamin D",
                        "amount": "1µg",
                        "indented": false,
                        "percentOfDailyNeeds": 7.78
                    },
                    {
                        "title": "Vitamin A",
                        "amount": "368IU",
                        "indented": false,
                        "percentOfDailyNeeds": 7.37
                    },
                    {
                        "title": "Vitamin B5",
                        "amount": "0.68mg",
                        "indented": false,
                        "percentOfDailyNeeds": 6.79
                    },
                    {
                        "title": "Selenium",
                        "amount": "4µg",
                        "indented": false,
                        "percentOfDailyNeeds": 5.97
                    },
                    {
                        "title": "Magnesium",
                        "amount": "21mg",
                        "indented": false,
                        "percentOfDailyNeeds": 5.42
                    },
                    {
                        "title": "Fiber",
                        "amount": "1g",
                        "indented": false,
                        "percentOfDailyNeeds": 5.14
                    },
                    {
                        "title": "Zinc",
                        "amount": "0.74mg",
                        "indented": false,
                        "percentOfDailyNeeds": 4.96
                    },
                    {
                        "title": "Vitamin B1",
                        "amount": "0.07mg",
                        "indented": false,
                        "percentOfDailyNeeds": 4.72
                    },
                    {
                        "title": "Folate",
                        "amount": "17µg",
                        "indented": false,
                        "percentOfDailyNeeds": 4.4
                    },
                    {
                        "title": "Vitamin B6",
                        "amount": "0.08mg",
                        "indented": false,
                        "percentOfDailyNeeds": 3.84
                    },
                    {
                        "title": "Copper",
                        "amount": "0.05mg",
                        "indented": false,
                        "percentOfDailyNeeds": 2.73
                    },
                    {
                        "title": "Vitamin E",
                        "amount": "0.35mg",
                        "indented": false,
                        "percentOfDailyNeeds": 2.35
                    },
                    {
                        "title": "Vitamin B3",
                        "amount": "0.31mg",
                        "indented": false,
                        "percentOfDailyNeeds": 1.55
                    },
                    {
                        "title": "Iron",
                        "amount": "0.26mg",
                        "indented": false,
                        "percentOfDailyNeeds": 1.44
                    },
                    {
                        "title": "Vitamin K",
                        "amount": "1µg",
                        "indented": false,
                        "percentOfDailyNeeds": 1.33
                    }
                ],
                "expires": 1634015077187,
                "isStale": true
            }
        },
        {
            "vegetarian": false,
            "vegan": false,
            "glutenFree": false,
            "dairyFree": true,
            "veryHealthy": false,
            "cheap": false,
            "veryPopular": false,
            "sustainable": false,
            "lowFodmap": false,
            "weightWatcherSmartPoints": 16,
            "gaps": "no",
            "preparationMinutes": -1,
            "cookingMinutes": -1,
            "aggregateLikes": 95,
            "healthScore": 28,
            "creditsText": "afrolems.com",
            "sourceName": "afrolems.com",
            "pricePerServing": 146.54,
            "extendedIngredients": [
                {
                    "id": 23572,
                    "aisle": "Frozen;Meat",
                    "image": "beef-cubes-raw.png",
                    "consistency": "SOLID",
                    "name": "beef",
                    "nameClean": "beef",
                    "original": "1 cup of chopped Beef",
                    "originalName": "chopped Beef",
                    "amount": 1,
                    "unit": "cup",
                    "meta": [
                        "chopped"
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
                    "id": 10211821,
                    "aisle": "Produce",
                    "image": "bell-pepper-orange.png",
                    "consistency": "SOLID",
                    "name": "bell pepper",
                    "nameClean": "bell pepper",
                    "original": "1 Bell pepper (Blended)",
                    "originalName": "Bell pepper (Blended)",
                    "amount": 1,
                    "unit": "",
                    "meta": [
                        "(Blended)"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "",
                            "unitLong": ""
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "",
                            "unitLong": ""
                        }
                    }
                },
                {
                    "id": 10211821,
                    "aisle": "Produce",
                    "image": "bell-pepper-orange.png",
                    "consistency": "SOLID",
                    "name": "bell peppers",
                    "nameClean": "bell pepper",
                    "original": "1 handful of chopped bell peppers",
                    "originalName": "chopped bell peppers",
                    "amount": 1,
                    "unit": "handful",
                    "meta": [
                        "chopped"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "handful",
                            "unitLong": "handful"
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "handful",
                            "unitLong": "handful"
                        }
                    }
                },
                {
                    "id": 10120129,
                    "aisle": "Baking",
                    "image": "flour.png",
                    "consistency": "SOLID",
                    "name": "bread flour",
                    "nameClean": "bread flour",
                    "original": "2 cups of Bread flour",
                    "originalName": "Bread flour",
                    "amount": 2,
                    "unit": "cups",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 2,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 473.176,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 10014412,
                    "aisle": "Frozen",
                    "image": "ice-cubes.png",
                    "consistency": "SOLID",
                    "name": "ice cube",
                    "nameClean": "ice",
                    "original": "Seasoning cube",
                    "originalName": "Seasoning",
                    "amount": 1,
                    "unit": "cube",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "cube",
                            "unitLong": "cube"
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "cube",
                            "unitLong": "cube"
                        }
                    }
                },
                {
                    "id": 4582,
                    "aisle": "Oil, Vinegar, Salad Dressing",
                    "image": "vegetable-oil.jpg",
                    "consistency": "LIQUID",
                    "name": "oil",
                    "nameClean": "cooking oil",
                    "original": "1 tablespoon of oil",
                    "originalName": "oil",
                    "amount": 1,
                    "unit": "tablespoon",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "Tbsp",
                            "unitLong": "Tbsp"
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "Tbsp",
                            "unitLong": "Tbsp"
                        }
                    }
                },
                {
                    "id": 4582,
                    "aisle": "Oil, Vinegar, Salad Dressing",
                    "image": "vegetable-oil.jpg",
                    "consistency": "LIQUID",
                    "name": "oil",
                    "nameClean": "cooking oil",
                    "original": "1 teaspoon oil",
                    "originalName": "oil",
                    "amount": 1,
                    "unit": "teaspoon",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
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
                    "original": "A handful of chopped onions",
                    "originalName": "A of chopped onions",
                    "amount": 1,
                    "unit": "handful",
                    "meta": [
                        "chopped"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "handful",
                            "unitLong": "handful"
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "handful",
                            "unitLong": "handful"
                        }
                    }
                },
                {
                    "id": 9277,
                    "aisle": null,
                    "image": null,
                    "consistency": "SOLID",
                    "name": "plantain",
                    "nameClean": null,
                    "original": "1 over-ripe plantain (Mashed)",
                    "originalName": "over-ripe plantain (Mashed)",
                    "amount": 1,
                    "unit": "",
                    "meta": [
                        "mashed",
                        "()"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "",
                            "unitLong": ""
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "",
                            "unitLong": ""
                        }
                    }
                },
                {
                    "id": 2047,
                    "aisle": "Spices and Seasonings",
                    "image": "salt.jpg",
                    "consistency": "SOLID",
                    "name": "salt",
                    "nameClean": "table salt",
                    "original": "1 teaspoon salt",
                    "originalName": "salt",
                    "amount": 1,
                    "unit": "teaspoon",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
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
                    "original": "1/2 teaspoon of sugar",
                    "originalName": "sugar",
                    "amount": 0.5,
                    "unit": "teaspoon",
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
                    "id": 11529,
                    "aisle": "Produce",
                    "image": "tomato.png",
                    "consistency": "SOLID",
                    "name": "tomato",
                    "nameClean": "tomato",
                    "original": "1 tomato(Blended)",
                    "originalName": "tomato(Blended)",
                    "amount": 1,
                    "unit": "",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "",
                            "unitLong": ""
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "",
                            "unitLong": ""
                        }
                    }
                },
                {
                    "id": 14412,
                    "aisle": "Beverages",
                    "image": "water.png",
                    "consistency": "LIQUID",
                    "name": "water",
                    "nameClean": "water",
                    "original": "3/4 cup of water",
                    "originalName": "water",
                    "amount": 0.75,
                    "unit": "cup",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 0.75,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 177.441,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 18375,
                    "aisle": "Baking",
                    "image": "yeast-granules.jpg",
                    "consistency": "SOLID",
                    "name": "yeast",
                    "nameClean": "dry yeast",
                    "original": "1.5 teaspoons of yeast",
                    "originalName": "yeast",
                    "amount": 1.5,
                    "unit": "teaspoons",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1.5,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        },
                        "metric": {
                            "amount": 1.5,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        }
                    }
                }
            ],
            "id": 716300,
            "title": "Plantain Pizza",
            "readyInMinutes": 45,
            "servings": 3,
            "sourceUrl": "http://www.afrolems.com/2014/03/08/plantain-pizza/",
            "image": "https://spoonacular.com/recipeImages/716300-556x370.jpg",
            "imageType": "jpg",
            "summary": "The recipe Plantain Pizza could satisfy your Mediterranean craving in roughly <b>45 minutes</b>. One serving contains <b>659 calories</b>, <b>27g of protein</b>, and <b>23g of fat</b>. This recipe serves 3 and costs $1.47 per serving. A few people made this recipe, and 95 would say it hit the spot. It works well as an affordable main course. It is a good option if you're following a <b>dairy free</b> diet. Head to the store and pick up oil, bell pepper, sugar, and a few other things to make it today. To use up the oil you could follow this main course with the <a href=\"https://spoonacular.com/recipes/vegan-mango-banana-bread-49650\">Vegan Mango Banana Bread</a> as a dessert. All things considered, we decided this recipe <b>deserves a spoonacular score of 91%</b>. This score is outstanding. Try <a href=\"https://spoonacular.com/recipes/how-to-spiralize-a-plantain-plantain-rice-and-beans-563745\">How to Spiralize a Plantain & Plantain “Rice” and Beans</a>, <a href=\"https://spoonacular.com/recipes/temptation-plantain-569527\">Temptation Plantain</a>, and <a href=\"https://spoonacular.com/recipes/plantain-cupcakes-518695\">Plantain Cupcakes</a> for similar recipes.",
            "cuisines": [
                "Mediterranean",
                "Italian",
                "European"
            ],
            "dishTypes": [
                "lunch",
                "main course",
                "main dish",
                "dinner"
            ],
            "diets": [
                "dairy free"
            ],
            "occasions": [],
            "instructions": "<p>Dissolve the yeast in warm water and leave to stand for about 5 minutes.Mix the oil, flour, salt, sugar and mashed plantain and pour in the dissolved yeast.Knead the dough till its elastic which may take aBout 15-20 minutes By hand or 10 minutes in a mixer.Coat a Bowl lightly with oil and place the dough in it. Cover with a plastic wrap and leave to rise between 1.5 – 2 hours.While the dough is rising, heat up the oil for the sauce, fry the Blended tomato and pepper, season and stir fry the Beef in the tomato sauce. Set aside.When the dough rises, divide into two. Sprinkle some flour on a flat surface and with a rolling pin, flatten out the dough but not excessively. Cut the dough into your desired shape, rub some oil on it and spread your sauce and toppings on it and set aside.Heat up your oven to 350 F and place your pizza dough on a lightly oiled foil pan and Bake for 12-15 mins. Serve warm</p>",
            "analyzedInstructions": [
                {
                    "name": "",
                    "steps": [
                        {
                            "number": 1,
                            "step": "Dissolve the yeast in warm water and leave to stand for about 5 minutes.",
                            "ingredients": [
                                {
                                    "id": 14412,
                                    "name": "water",
                                    "localizedName": "water",
                                    "image": "water.png"
                                },
                                {
                                    "id": 18375,
                                    "name": "yeast",
                                    "localizedName": "yeast",
                                    "image": "yeast-granules.jpg"
                                }
                            ],
                            "equipment": [],
                            "length": {
                                "number": 5,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 2,
                            "step": "Mix the oil, flour, salt, sugar and mashed plantain and pour in the dissolved yeast.Knead the dough till its elastic which may take aBout 15-20 minutes By hand or 10 minutes in a mixer.Coat a Bowl lightly with oil and place the dough in it. Cover with a plastic wrap and leave to rise between 1.5 – 2 hours.While the dough is rising, heat up the oil for the sauce, fry the Blended tomato and pepper, season and stir fry the Beef in the tomato sauce. Set aside.When the dough rises, divide into two.",
                            "ingredients": [
                                {
                                    "id": 11549,
                                    "name": "tomato sauce",
                                    "localizedName": "tomato sauce",
                                    "image": "tomato-sauce-or-pasta-sauce.jpg"
                                },
                                {
                                    "id": 99295,
                                    "name": "plantain",
                                    "localizedName": "plantain",
                                    "image": "plantains.jpg"
                                },
                                {
                                    "id": 1002030,
                                    "name": "pepper",
                                    "localizedName": "pepper",
                                    "image": "pepper.jpg"
                                },
                                {
                                    "id": 11529,
                                    "name": "tomato",
                                    "localizedName": "tomato",
                                    "image": "tomato.png"
                                },
                                {
                                    "id": 0,
                                    "name": "dough",
                                    "localizedName": "dough",
                                    "image": "pizza-dough"
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
                                    "id": 19335,
                                    "name": "sugar",
                                    "localizedName": "sugar",
                                    "image": "sugar-in-bowl.png"
                                },
                                {
                                    "id": 18375,
                                    "name": "yeast",
                                    "localizedName": "yeast",
                                    "image": "yeast-granules.jpg"
                                },
                                {
                                    "id": 23572,
                                    "name": "beef",
                                    "localizedName": "beef",
                                    "image": "beef-cubes-raw.png"
                                },
                                {
                                    "id": 2047,
                                    "name": "salt",
                                    "localizedName": "salt",
                                    "image": "salt.jpg"
                                },
                                {
                                    "id": 10018364,
                                    "name": "wrap",
                                    "localizedName": "wrap",
                                    "image": "flour-tortilla.jpg"
                                },
                                {
                                    "id": 4582,
                                    "name": "cooking oil",
                                    "localizedName": "cooking oil",
                                    "image": "vegetable-oil.jpg"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404730,
                                    "name": "plastic wrap",
                                    "localizedName": "plastic wrap",
                                    "image": "plastic-wrap.jpg"
                                },
                                {
                                    "id": 404726,
                                    "name": "blender",
                                    "localizedName": "blender",
                                    "image": "blender.png"
                                },
                                {
                                    "id": 404783,
                                    "name": "bowl",
                                    "localizedName": "bowl",
                                    "image": "bowl.jpg"
                                }
                            ],
                            "length": {
                                "number": 150,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 3,
                            "step": "Sprinkle some flour on a flat surface and with a rolling pin, flatten out the dough but not excessively.",
                            "ingredients": [
                                {
                                    "id": 0,
                                    "name": "dough",
                                    "localizedName": "dough",
                                    "image": "pizza-dough"
                                },
                                {
                                    "id": 20081,
                                    "name": "all purpose flour",
                                    "localizedName": "all purpose flour",
                                    "image": "flour.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404746,
                                    "name": "rolling pin",
                                    "localizedName": "rolling pin",
                                    "image": "rolling-pin.jpg"
                                }
                            ]
                        },
                        {
                            "number": 4,
                            "step": "Cut the dough into your desired shape, rub some oil on it and spread your sauce and toppings on it and set aside.",
                            "ingredients": [
                                {
                                    "id": 0,
                                    "name": "spread",
                                    "localizedName": "spread",
                                    "image": ""
                                },
                                {
                                    "id": 0,
                                    "name": "dough",
                                    "localizedName": "dough",
                                    "image": "pizza-dough"
                                },
                                {
                                    "id": 0,
                                    "name": "sauce",
                                    "localizedName": "sauce",
                                    "image": ""
                                },
                                {
                                    "id": 4582,
                                    "name": "cooking oil",
                                    "localizedName": "cooking oil",
                                    "image": "vegetable-oil.jpg"
                                },
                                {
                                    "id": 1012034,
                                    "name": "dry seasoning rub",
                                    "localizedName": "dry seasoning rub",
                                    "image": "seasoning.png"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 5,
                            "step": "Heat up your oven to 350 F and place your pizza dough on a lightly oiled foil pan and",
                            "ingredients": [
                                {
                                    "id": 93610,
                                    "name": "pizza dough",
                                    "localizedName": "pizza dough",
                                    "image": "pizza-dough.jpg"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404765,
                                    "name": "aluminum foil",
                                    "localizedName": "aluminum foil",
                                    "image": "aluminum-foil.png"
                                },
                                {
                                    "id": 404784,
                                    "name": "oven",
                                    "localizedName": "oven",
                                    "image": "oven.jpg",
                                    "temperature": {
                                        "number": 350,
                                        "unit": "Fahrenheit"
                                    }
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
                            "number": 6,
                            "step": "Bake for 12-15 mins.",
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
                                "number": 15,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 7,
                            "step": "Serve warm",
                            "ingredients": [],
                            "equipment": []
                        }
                    ]
                }
            ],
            "originalId": null,
            "spoonacularSourceUrl": "https://spoonacular.com/plantain-pizza-716300",
            "expanded": false,
            "nutrition_stats": {
                "calories": "659k",
                "carbs": "86g",
                "fat": "23g",
                "protein": "26g",
                "bad": [
                    {
                        "title": "Calories",
                        "amount": "659k",
                        "indented": false,
                        "percentOfDailyNeeds": 32.96
                    },
                    {
                        "title": "Fat",
                        "amount": "23g",
                        "indented": false,
                        "percentOfDailyNeeds": 35.79
                    },
                    {
                        "title": "Saturated Fat",
                        "amount": "6g",
                        "indented": true,
                        "percentOfDailyNeeds": 41.05
                    },
                    {
                        "title": "Carbohydrates",
                        "amount": "86g",
                        "indented": false,
                        "percentOfDailyNeeds": 28.88
                    },
                    {
                        "title": "Sugar",
                        "amount": "12g",
                        "indented": true,
                        "percentOfDailyNeeds": 14.05
                    },
                    {
                        "title": "Cholesterol",
                        "amount": "53mg",
                        "indented": false,
                        "percentOfDailyNeeds": 17.75
                    },
                    {
                        "title": "Sodium",
                        "amount": "839mg",
                        "indented": false,
                        "percentOfDailyNeeds": 36.49
                    }
                ],
                "good": [
                    {
                        "title": "Protein",
                        "amount": "26g",
                        "indented": false,
                        "percentOfDailyNeeds": 53.65
                    },
                    {
                        "title": "Vitamin C",
                        "amount": "67mg",
                        "indented": false,
                        "percentOfDailyNeeds": 82.08
                    },
                    {
                        "title": "Selenium",
                        "amount": "45µg",
                        "indented": false,
                        "percentOfDailyNeeds": 65.36
                    },
                    {
                        "title": "Vitamin B1",
                        "amount": "0.83mg",
                        "indented": false,
                        "percentOfDailyNeeds": 55.08
                    },
                    {
                        "title": "Folate",
                        "amount": "210µg",
                        "indented": false,
                        "percentOfDailyNeeds": 52.72
                    },
                    {
                        "title": "Vitamin A",
                        "amount": "2268IU",
                        "indented": false,
                        "percentOfDailyNeeds": 45.36
                    },
                    {
                        "title": "Manganese",
                        "amount": "0.78mg",
                        "indented": false,
                        "percentOfDailyNeeds": 39.01
                    },
                    {
                        "title": "Vitamin B3",
                        "amount": "7mg",
                        "indented": false,
                        "percentOfDailyNeeds": 37.3
                    },
                    {
                        "title": "Vitamin B6",
                        "amount": "0.69mg",
                        "indented": false,
                        "percentOfDailyNeeds": 34.55
                    },
                    {
                        "title": "Zinc",
                        "amount": "4mg",
                        "indented": false,
                        "percentOfDailyNeeds": 30.55
                    },
                    {
                        "title": "Vitamin B2",
                        "amount": "0.48mg",
                        "indented": false,
                        "percentOfDailyNeeds": 27.95
                    },
                    {
                        "title": "Phosphorus",
                        "amount": "278mg",
                        "indented": false,
                        "percentOfDailyNeeds": 27.82
                    },
                    {
                        "title": "Vitamin B12",
                        "amount": "1µg",
                        "indented": false,
                        "percentOfDailyNeeds": 26.82
                    },
                    {
                        "title": "Fiber",
                        "amount": "6g",
                        "indented": false,
                        "percentOfDailyNeeds": 25.3
                    },
                    {
                        "title": "Potassium",
                        "amount": "823mg",
                        "indented": false,
                        "percentOfDailyNeeds": 23.52
                    },
                    {
                        "title": "Vitamin B5",
                        "amount": "1mg",
                        "indented": false,
                        "percentOfDailyNeeds": 18.7
                    },
                    {
                        "title": "Vitamin E",
                        "amount": "2mg",
                        "indented": false,
                        "percentOfDailyNeeds": 17.5
                    },
                    {
                        "title": "Magnesium",
                        "amount": "68mg",
                        "indented": false,
                        "percentOfDailyNeeds": 17.23
                    },
                    {
                        "title": "Iron",
                        "amount": "2mg",
                        "indented": false,
                        "percentOfDailyNeeds": 16.58
                    },
                    {
                        "title": "Copper",
                        "amount": "0.31mg",
                        "indented": false,
                        "percentOfDailyNeeds": 15.69
                    },
                    {
                        "title": "Vitamin K",
                        "amount": "11µg",
                        "indented": false,
                        "percentOfDailyNeeds": 10.97
                    },
                    {
                        "title": "Calcium",
                        "amount": "38mg",
                        "indented": false,
                        "percentOfDailyNeeds": 3.9
                    }
                ],
                "expires": 1638889587393,
                "isStale": true
            }
        },
        {
            "vegetarian": false,
            "vegan": false,
            "glutenFree": true,
            "dairyFree": true,
            "veryHealthy": false,
            "cheap": false,
            "veryPopular": false,
            "sustainable": false,
            "lowFodmap": true,
            "weightWatcherSmartPoints": 17,
            "gaps": "no",
            "preparationMinutes": -1,
            "cookingMinutes": -1,
            "aggregateLikes": 15,
            "healthScore": 20,
            "creditsText": "foodista.com",
            "sourceName": "foodista.com",
            "pricePerServing": 238.76,
            "extendedIngredients": [
                {
                    "id": 93740,
                    "aisle": "Gluten Free;Health Foods",
                    "image": "almond-meal-or-almond-flour.jpg",
                    "consistency": "SOLID",
                    "name": "almond flour",
                    "nameClean": "almond meal",
                    "original": "1/2 cup almond flour",
                    "originalName": "almond flour",
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
                    "id": 93747,
                    "aisle": "Gluten Free;Health Foods;Baking",
                    "image": "coconut-flour-or-other-gluten-free-flour.jpg",
                    "consistency": "SOLID",
                    "name": "coconut flour",
                    "nameClean": "coconut flour",
                    "original": "1/2 cup coconut flour",
                    "originalName": "coconut flour",
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
                    "id": 93696,
                    "aisle": "Ethnic Foods;Health Foods;Baking",
                    "image": "white-powder.jpg",
                    "consistency": "SOLID",
                    "name": "tapioca flour",
                    "nameClean": "tapioca starch",
                    "original": "1 cup tapioca/arrowroot flour",
                    "originalName": "tapioca/arrowroot flour",
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
                    "id": 98874,
                    "aisle": "Milk, Eggs, Other Dairy",
                    "image": "hemp-milk.png",
                    "consistency": "LIQUID",
                    "name": "hemp milk",
                    "nameClean": "hemp milk",
                    "original": "1 cup nut/hemp/coconut milk",
                    "originalName": "nut/hemp/coconut milk",
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
                    "id": 18371,
                    "aisle": "Baking",
                    "image": "white-powder.jpg",
                    "consistency": "SOLID",
                    "name": "baking powder",
                    "nameClean": "low sodium baking powder",
                    "original": "1 tsp. baking powder",
                    "originalName": "baking powder",
                    "amount": 1,
                    "unit": "tsp",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        }
                    }
                },
                {
                    "id": 93813,
                    "aisle": "Gourmet",
                    "image": "molasses.jpg",
                    "consistency": "SOLID",
                    "name": "vanilla bean paste",
                    "nameClean": "vanilla paste",
                    "original": "1 tsp. vanilla bean paste/extract",
                    "originalName": "vanilla bean paste/extract",
                    "amount": 1,
                    "unit": "tsp",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        }
                    }
                },
                {
                    "id": 1012047,
                    "aisle": "Spices and Seasonings",
                    "image": "salt.jpg",
                    "consistency": "SOLID",
                    "name": "sea-salt",
                    "nameClean": "coarse sea salt",
                    "original": "Pinch Himalayan sea salt",
                    "originalName": "Pinch Himalayan sea salt",
                    "amount": 1,
                    "unit": "pinch",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "pinch",
                            "unitLong": "pinch"
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "pinch",
                            "unitLong": "pinch"
                        }
                    }
                },
                {
                    "id": 9050,
                    "aisle": "Produce",
                    "image": "blueberries.jpg",
                    "consistency": "SOLID",
                    "name": "blueberries",
                    "nameClean": "blueberries",
                    "original": "Handful frozen blueberries",
                    "originalName": "frozen blueberries",
                    "amount": 1,
                    "unit": "Handful",
                    "meta": [
                        "frozen"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "Handful",
                            "unitLong": "Handful"
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "Handful",
                            "unitLong": "Handful"
                        }
                    }
                },
                {
                    "id": 98846,
                    "aisle": "Health Foods;Gourmet",
                    "image": "cacao-nibs.png",
                    "consistency": "SOLID",
                    "name": "cacao nibs",
                    "nameClean": "cocoa nibs",
                    "original": "Handful organic cacao nibs",
                    "originalName": "organic cacao nibs",
                    "amount": 1,
                    "unit": "Handful",
                    "meta": [
                        "organic"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "Handful",
                            "unitLong": "Handful"
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "Handful",
                            "unitLong": "Handful"
                        }
                    }
                },
                {
                    "id": 19081,
                    "aisle": "Sweet Snacks",
                    "image": "milk-chocolate.jpg",
                    "consistency": "SOLID",
                    "name": "chocolate",
                    "nameClean": "milk chocolate",
                    "original": "Handful of dark chocolate, roughly chopped",
                    "originalName": "dark chocolate, roughly chopped",
                    "amount": 1,
                    "unit": "Handful",
                    "meta": [
                        "dark",
                        "roughly chopped"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "Handful",
                            "unitLong": "Handful"
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "Handful",
                            "unitLong": "Handful"
                        }
                    }
                }
            ],
            "id": 1100990,
            "title": "Blueberry, Chocolate & Cocao Superfood Pancakes - Gluten-Free/Paleo/Vegan",
            "readyInMinutes": 30,
            "servings": 2,
            "sourceUrl": "https://www.foodista.com/recipe/35NX6PZB/blueberry-chocolate-cocao-superfood-pancakes-gluten-free-paleo-vegan",
            "image": "https://spoonacular.com/recipeImages/1100990-556x370.jpg",
            "imageType": "jpg",
            "summary": "If you want to add more <b>gluten free, dairy free, paleolithic, and fodmap friendly</b> recipes to your recipe box, Blueberry, Chocolate & Cocao Superfood Pancakes - Gluten-Free/Paleo/Vegan might be a recipe you should try. For <b>$2.39 per serving</b>, you get a breakfast that serves 2. One serving contains <b>559 calories</b>, <b>12g of protein</b>, and <b>21g of fat</b>. Not a lot of people made this recipe, and 1 would say it hit the spot. From preparation to the plate, this recipe takes around <b>30 minutes</b>. It is brought to you by Foodista. Overall, this recipe earns a <b>good spoonacular score of 75%</b>. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/blueberry-almond-butter-grain-free-granola-gluten-free-paleo-+-vegan-894113\">Blueberry Almond Butter Grain-Free Granola (Gluten-Free, Paleo + Vegan)</a>, <a href=\"https://spoonacular.com/recipes/vegan-gluten-free-vanilla-blueberry-buckwheat-pancakes-51948\">Vegan & Gluten-free Vanilla Blueberry Buckwheat Pancakes</a>, and <a href=\"https://spoonacular.com/recipes/blackberry-+-blueberry-cobbler-gluten-free-paleo-+-vegan-779559\">Blackberry + Blueberry Cobbler (Gluten Free, Paleo + Vegan)</a>.",
            "cuisines": [],
            "dishTypes": [
                "morning meal",
                "brunch",
                "breakfast"
            ],
            "diets": [
                "gluten free",
                "dairy free",
                "paleolithic",
                "fodmap friendly"
            ],
            "occasions": [],
            "instructions": "<ol><li>Combine the almond, coconut, tapioca/arrowroot flour, baking powder, sugar and salt together and mix all the ingredients well before adding the milk and paste/extract and ensuring that all of the ingredients are whisked together to form a smooth batter.</li><li>Allow to sit for approximately 10-15 minutes.</li><li>Heat a small amount of coconut oil into a frying pan/skillet and pour a small enough amount of the batter into the middle of the pan.</li><li>Allow the batter to cook sufficiently for a few minutes (the edges should start to brown and the top of the batter should start to bubble) on one side before sprinkling on a few blueberries and flipping the pancake over to cook on the other side.</li><li>Immediately sprinkle on some of the cacao nibs and dark chocolate on top and continue to cook thoroughly for a few minutes before removing the pancake and setting aside.</li><li>Repeat with the remaining batter until finished.</li><li>Pour over the agave, give thanks and enjoy!</li></ol>",
            "analyzedInstructions": [
                {
                    "name": "",
                    "steps": [
                        {
                            "number": 1,
                            "step": "Combine the almond, coconut, tapioca/arrowroot flour, baking powder, sugar and salt together and mix all the ingredients well before adding the milk and paste/extract and ensuring that all of the ingredients are whisked together to form a smooth batter.Allow to sit for approximately 10-15 minutes.",
                            "ingredients": [
                                {
                                    "id": 20003,
                                    "name": "arrowroot",
                                    "localizedName": "arrowroot",
                                    "image": "white-powder.jpg"
                                },
                                {
                                    "id": 18369,
                                    "name": "baking powder",
                                    "localizedName": "baking powder",
                                    "image": "white-powder.jpg"
                                },
                                {
                                    "id": 12104,
                                    "name": "coconut",
                                    "localizedName": "coconut",
                                    "image": "coconut.jpg"
                                },
                                {
                                    "id": 0,
                                    "name": "extract",
                                    "localizedName": "extract",
                                    "image": ""
                                },
                                {
                                    "id": 20068,
                                    "name": "tapioca",
                                    "localizedName": "tapioca",
                                    "image": "sago-pearls.png"
                                },
                                {
                                    "id": 12061,
                                    "name": "almonds",
                                    "localizedName": "almonds",
                                    "image": "almonds.jpg"
                                },
                                {
                                    "id": 19335,
                                    "name": "sugar",
                                    "localizedName": "sugar",
                                    "image": "sugar-in-bowl.png"
                                },
                                {
                                    "id": 1077,
                                    "name": "milk",
                                    "localizedName": "milk",
                                    "image": "milk.png"
                                },
                                {
                                    "id": 2047,
                                    "name": "salt",
                                    "localizedName": "salt",
                                    "image": "salt.jpg"
                                }
                            ],
                            "equipment": [],
                            "length": {
                                "number": 15,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 2,
                            "step": "Heat a small amount of coconut oil into a frying pan/skillet and pour a small enough amount of the batter into the middle of the pan.Allow the batter to cook sufficiently for a few minutes (the edges should start to brown and the top of the batter should start to bubble) on one side before sprinkling on a few blueberries and flipping the pancake over to cook on the other side.Immediately sprinkle on some of the cacao nibs and dark chocolate on top and continue to cook thoroughly for a few minutes before removing the pancake and setting aside.Repeat with the remaining batter until finished.",
                            "ingredients": [
                                {
                                    "id": 19904,
                                    "name": "dark chocolate",
                                    "localizedName": "dark chocolate",
                                    "image": "dark-chocolate-pieces.jpg"
                                },
                                {
                                    "id": 9050,
                                    "name": "blueberries",
                                    "localizedName": "blueberries",
                                    "image": "blueberries.jpg"
                                },
                                {
                                    "id": 4047,
                                    "name": "coconut oil",
                                    "localizedName": "coconut oil",
                                    "image": "oil-coconut.jpg"
                                },
                                {
                                    "id": 98846,
                                    "name": "cocoa nibs",
                                    "localizedName": "cocoa nibs",
                                    "image": "cacao-nibs.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404645,
                                    "name": "frying pan",
                                    "localizedName": "frying pan",
                                    "image": "pan.png"
                                }
                            ]
                        },
                        {
                            "number": 3,
                            "step": "Pour over the agave, give thanks and enjoy!",
                            "ingredients": [
                                {
                                    "id": 19912,
                                    "name": "agave",
                                    "localizedName": "agave",
                                    "image": "agave.png"
                                }
                            ],
                            "equipment": []
                        }
                    ]
                }
            ],
            "originalId": null,
            "spoonacularSourceUrl": "https://spoonacular.com/blueberry-chocolate-cocao-superfood-pancakes-gluten-free-paleo-vegan-1100990",
            "expanded": false,
            "nutrition_stats": {
                "calories": "558k",
                "carbs": "84g",
                "fat": "21g",
                "protein": "12g",
                "bad": [
                    {
                        "title": "Calories",
                        "amount": "558k",
                        "indented": false,
                        "percentOfDailyNeeds": 27.93
                    },
                    {
                        "title": "Fat",
                        "amount": "21g",
                        "indented": false,
                        "percentOfDailyNeeds": 32.46
                    },
                    {
                        "title": "Saturated Fat",
                        "amount": "5g",
                        "indented": true,
                        "percentOfDailyNeeds": 35.88
                    },
                    {
                        "title": "Carbohydrates",
                        "amount": "84g",
                        "indented": false,
                        "percentOfDailyNeeds": 28.01
                    },
                    {
                        "title": "Sugar",
                        "amount": "8g",
                        "indented": true,
                        "percentOfDailyNeeds": 9.53
                    },
                    {
                        "title": "Cholesterol",
                        "amount": "0.0mg",
                        "indented": false,
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "title": "Sodium",
                        "amount": "154mg",
                        "indented": false,
                        "percentOfDailyNeeds": 6.7
                    }
                ],
                "good": [
                    {
                        "title": "Protein",
                        "amount": "12g",
                        "indented": false,
                        "percentOfDailyNeeds": 24.01
                    },
                    {
                        "title": "Vitamin D",
                        "amount": "59µg",
                        "indented": false,
                        "percentOfDailyNeeds": 393.33
                    },
                    {
                        "title": "Fiber",
                        "amount": "15g",
                        "indented": false,
                        "percentOfDailyNeeds": 62.23
                    },
                    {
                        "title": "Phosphorus",
                        "amount": "356mg",
                        "indented": false,
                        "percentOfDailyNeeds": 35.68
                    },
                    {
                        "title": "Calcium",
                        "amount": "316mg",
                        "indented": false,
                        "percentOfDailyNeeds": 31.7
                    },
                    {
                        "title": "Iron",
                        "amount": "3mg",
                        "indented": false,
                        "percentOfDailyNeeds": 20.88
                    },
                    {
                        "title": "Vitamin B2",
                        "amount": "0.26mg",
                        "indented": false,
                        "percentOfDailyNeeds": 15.55
                    },
                    {
                        "title": "Vitamin B12",
                        "amount": "0.74µg",
                        "indented": false,
                        "percentOfDailyNeeds": 12.29
                    },
                    {
                        "title": "Potassium",
                        "amount": "348mg",
                        "indented": false,
                        "percentOfDailyNeeds": 9.97
                    },
                    {
                        "title": "Magnesium",
                        "amount": "33mg",
                        "indented": false,
                        "percentOfDailyNeeds": 8.42
                    },
                    {
                        "title": "Manganese",
                        "amount": "0.14mg",
                        "indented": false,
                        "percentOfDailyNeeds": 6.95
                    },
                    {
                        "title": "Vitamin K",
                        "amount": "7µg",
                        "indented": false,
                        "percentOfDailyNeeds": 6.92
                    },
                    {
                        "title": "Vitamin E",
                        "amount": "0.81mg",
                        "indented": false,
                        "percentOfDailyNeeds": 5.37
                    },
                    {
                        "title": "Vitamin A",
                        "amount": "266IU",
                        "indented": false,
                        "percentOfDailyNeeds": 5.32
                    },
                    {
                        "title": "Vitamin B1",
                        "amount": "0.07mg",
                        "indented": false,
                        "percentOfDailyNeeds": 4.87
                    },
                    {
                        "title": "Vitamin C",
                        "amount": "3mg",
                        "indented": false,
                        "percentOfDailyNeeds": 4.41
                    },
                    {
                        "title": "Copper",
                        "amount": "0.02mg",
                        "indented": false,
                        "percentOfDailyNeeds": 1.24
                    }
                ],
                "expires": 1635300151394,
                "isStale": true
            }
        },
        {
            "vegetarian": true,
            "vegan": true,
            "glutenFree": true,
            "dairyFree": true,
            "veryHealthy": false,
            "cheap": false,
            "veryPopular": false,
            "sustainable": false,
            "lowFodmap": false,
            "weightWatcherSmartPoints": 2,
            "gaps": "no",
            "preparationMinutes": -1,
            "cookingMinutes": -1,
            "aggregateLikes": 9,
            "healthScore": 1,
            "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
            "license": "CC BY 3.0",
            "sourceName": "Foodista",
            "pricePerServing": 107.55,
            "extendedIngredients": [
                {
                    "id": 10716050,
                    "aisle": "Pasta and Rice;Canned and Jarred",
                    "image": "cooked-cannellini-beans.png",
                    "consistency": "SOLID",
                    "name": "cannellini beans",
                    "nameClean": "cannellini beans",
                    "original": "3 cups cooked cannellini beans, with the liquid that clings to them",
                    "originalName": "cooked cannellini beans, with the liquid that clings to them",
                    "amount": 3,
                    "unit": "cups",
                    "meta": [
                        "with the liquid that clings to them",
                        "cooked"
                    ],
                    "measures": {
                        "us": {
                            "amount": 3,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 709.764,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 1034053,
                    "aisle": "Oil, Vinegar, Salad Dressing",
                    "image": "olive-oil.jpg",
                    "consistency": "LIQUID",
                    "name": "extra virgin olive oil",
                    "nameClean": "extra virgin olive oil",
                    "original": "1 tablespoon extra virgin olive oil",
                    "originalName": "extra virgin olive oil",
                    "amount": 1,
                    "unit": "tablespoon",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "Tbsp",
                            "unitLong": "Tbsp"
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "Tbsp",
                            "unitLong": "Tbsp"
                        }
                    }
                },
                {
                    "id": 11957,
                    "aisle": "Produce",
                    "image": "fennel.png",
                    "consistency": "SOLID",
                    "name": "fennel",
                    "nameClean": "fennel",
                    "original": "1 cup chopped fennel, fronds reserved",
                    "originalName": "chopped fennel, fronds reserved",
                    "amount": 1,
                    "unit": "cup",
                    "meta": [
                        "chopped"
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
                    "id": 11297,
                    "aisle": "Produce;Spices and Seasonings",
                    "image": "parsley.jpg",
                    "consistency": "SOLID",
                    "name": "flat-leaf parsley",
                    "nameClean": "parsley",
                    "original": "Minced flat-leaf parsley",
                    "originalName": "Minced flat parsley",
                    "amount": 1,
                    "unit": "leaf",
                    "meta": [
                        "minced"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "leaf",
                            "unitLong": "leave"
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "leaf",
                            "unitLong": "leave"
                        }
                    }
                },
                {
                    "id": 10011282,
                    "aisle": "Produce",
                    "image": "red-onion.png",
                    "consistency": "SOLID",
                    "name": "red onion",
                    "nameClean": "red onion",
                    "original": "1/2 cup chopped red onion",
                    "originalName": "chopped red onion",
                    "amount": 0.5,
                    "unit": "cup",
                    "meta": [
                        "red",
                        "chopped"
                    ],
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
                    "id": 2037,
                    "aisle": "Ethnic Foods;Spices and Seasonings;Gourmet",
                    "image": "saffron.jpg",
                    "consistency": "SOLID",
                    "name": "saffron threads",
                    "nameClean": "saffron",
                    "original": "1/4 teaspoon saffron threads",
                    "originalName": "saffron threads",
                    "amount": 0.25,
                    "unit": "teaspoon",
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
                    "id": 1102047,
                    "aisle": "Spices and Seasonings",
                    "image": "salt-and-pepper.jpg",
                    "consistency": "SOLID",
                    "name": "salt and pepper",
                    "nameClean": "salt and pepper",
                    "original": "Salt and freshly ground black pepper",
                    "originalName": "Salt and freshly ground black pepper",
                    "amount": 6,
                    "unit": "servings",
                    "meta": [
                        "black",
                        "freshly ground"
                    ],
                    "measures": {
                        "us": {
                            "amount": 6,
                            "unitShort": "servings",
                            "unitLong": "servings"
                        },
                        "metric": {
                            "amount": 6,
                            "unitShort": "servings",
                            "unitLong": "servings"
                        }
                    }
                },
                {
                    "id": 6615,
                    "aisle": "Canned and Jarred",
                    "image": "chicken-broth.png",
                    "consistency": "LIQUID",
                    "name": "vegetable broth",
                    "nameClean": "vegetable stock",
                    "original": "vegetable broth, as needed",
                    "originalName": "vegetable broth, as needed",
                    "amount": 6,
                    "unit": "servings",
                    "meta": [
                        "as needed"
                    ],
                    "measures": {
                        "us": {
                            "amount": 6,
                            "unitShort": "servings",
                            "unitLong": "servings"
                        },
                        "metric": {
                            "amount": 6,
                            "unitShort": "servings",
                            "unitLong": "servings"
                        }
                    }
                },
                {
                    "id": 14412,
                    "aisle": "Beverages",
                    "image": "water.png",
                    "consistency": "LIQUID",
                    "name": "water",
                    "nameClean": "water",
                    "original": "2 tablespoons boiling water",
                    "originalName": "boiling water",
                    "amount": 2,
                    "unit": "tablespoons",
                    "meta": [
                        "boiling"
                    ],
                    "measures": {
                        "us": {
                            "amount": 2,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        },
                        "metric": {
                            "amount": 2,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        }
                    }
                }
            ],
            "id": 636901,
            "title": "Cannellini Bean Side Dish With Fennel, Red Onion, and Saffron",
            "readyInMinutes": 45,
            "servings": 6,
            "sourceUrl": "http://www.foodista.com/recipe/ML5WHHCX/cannellini-beans-with-fennel-red-onion-and-saffron",
            "image": "https://spoonacular.com/recipeImages/636901-556x370.jpg",
            "imageType": "jpg",
            "summary": "Cannellini Bean Side Dish With Fennel, Red Onion, and Saffron might be just the side dish you are searching for. Watching your figure? This gluten free and vegan recipe has <b>102 calories</b>, <b>5g of protein</b>, and <b>2g of fat</b> per serving. For <b>$1.03 per serving</b>, this recipe <b>covers 3%</b> of your daily requirements of vitamins and minerals. 9 people have tried and liked this recipe. Head to the store and pick up cannellini beans, water, salt and pepper, and a few other things to make it today. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 20%</b>. This score is not so excellent. Try <a href=\"https://spoonacular.com/recipes/creamy-cannellini-bean-side-dish-640607\">Creamy Cannellini Bean Side Dish</a>, <a href=\"https://spoonacular.com/recipes/fennel-side-dish-with-garlic-and-parsley-642676\">Fennel Side Dish With Garlic and Parsley</a>, and <a href=\"https://spoonacular.com/recipes/cucumber-and-cannellini-bean-side-salad-641005\">Cucumber and Cannellini Bean Side Salad</a> for similar recipes.",
            "cuisines": [],
            "dishTypes": [
                "side dish"
            ],
            "diets": [
                "gluten free",
                "dairy free",
                "lacto ovo vegetarian",
                "vegan"
            ],
            "occasions": [],
            "instructions": "<ol><li>Combine saffron and boiling water in small heat-proof bowl or measuring cup; set aside for 5 minutes.</li><li>Heat oil in large nonstick skillet; add fennel and onion. Cook, stirring occasionally, until tender, about 5 minutes.</li><li>Add beans and saffron mixture to skillet and stir to blend. Season to taste with salt and pepper. If mixture seems dry, add bean cooking liquid or vegetable broth to achieve desired consistency. Sprinkle with parsley or fennel fronds and serve immediately.</li></ol>",
            "analyzedInstructions": [
                {
                    "name": "",
                    "steps": [
                        {
                            "number": 1,
                            "step": "Combine saffron and boiling water in small heat-proof bowl or measuring cup; set aside for 5 minutes.",
                            "ingredients": [
                                {
                                    "id": 2037,
                                    "name": "saffron",
                                    "localizedName": "saffron",
                                    "image": "saffron.jpg"
                                },
                                {
                                    "id": 14412,
                                    "name": "water",
                                    "localizedName": "water",
                                    "image": "water.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404766,
                                    "name": "measuring cup",
                                    "localizedName": "measuring cup",
                                    "image": "measuring-cup.jpg"
                                },
                                {
                                    "id": 404783,
                                    "name": "bowl",
                                    "localizedName": "bowl",
                                    "image": "bowl.jpg"
                                }
                            ],
                            "length": {
                                "number": 5,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 2,
                            "step": "Heat oil in large nonstick skillet; add fennel and onion. Cook, stirring occasionally, until tender, about 5 minutes.",
                            "ingredients": [
                                {
                                    "id": 11957,
                                    "name": "fennel",
                                    "localizedName": "fennel",
                                    "image": "fennel.png"
                                },
                                {
                                    "id": 11282,
                                    "name": "onion",
                                    "localizedName": "onion",
                                    "image": "brown-onion.png"
                                },
                                {
                                    "id": 4582,
                                    "name": "cooking oil",
                                    "localizedName": "cooking oil",
                                    "image": "vegetable-oil.jpg"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404645,
                                    "name": "frying pan",
                                    "localizedName": "frying pan",
                                    "image": "pan.png"
                                }
                            ],
                            "length": {
                                "number": 5,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 3,
                            "step": "Add beans and saffron mixture to skillet and stir to blend. Season to taste with salt and pepper. If mixture seems dry, add bean cooking liquid or vegetable broth to achieve desired consistency.",
                            "ingredients": [
                                {
                                    "id": 1102047,
                                    "name": "salt and pepper",
                                    "localizedName": "salt and pepper",
                                    "image": "salt-and-pepper.jpg"
                                },
                                {
                                    "id": 6615,
                                    "name": "vegetable broth",
                                    "localizedName": "vegetable broth",
                                    "image": "chicken-broth.png"
                                },
                                {
                                    "id": 2037,
                                    "name": "saffron",
                                    "localizedName": "saffron",
                                    "image": "saffron.jpg"
                                },
                                {
                                    "id": 0,
                                    "name": "beans",
                                    "localizedName": "beans",
                                    "image": "kidney-beans.jpg"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404645,
                                    "name": "frying pan",
                                    "localizedName": "frying pan",
                                    "image": "pan.png"
                                }
                            ]
                        },
                        {
                            "number": 4,
                            "step": "Sprinkle with parsley or fennel fronds and serve immediately.",
                            "ingredients": [
                                {
                                    "id": 11297,
                                    "name": "parsley",
                                    "localizedName": "parsley",
                                    "image": "parsley.jpg"
                                },
                                {
                                    "id": 11957,
                                    "name": "fennel",
                                    "localizedName": "fennel",
                                    "image": "fennel.png"
                                }
                            ],
                            "equipment": []
                        }
                    ]
                }
            ],
            "originalId": null,
            "spoonacularSourceUrl": "https://spoonacular.com/cannellini-bean-side-dish-with-fennel-red-onion-and-saffron-636901",
            "expanded": false,
            "nutrition_stats": {
                "calories": "106k",
                "carbs": "18g",
                "fat": "2g",
                "protein": "5g",
                "bad": [
                    {
                        "title": "Calories",
                        "amount": "106k",
                        "indented": false,
                        "percentOfDailyNeeds": 5.34
                    },
                    {
                        "title": "Fat",
                        "amount": "2g",
                        "indented": false,
                        "percentOfDailyNeeds": 3.66
                    },
                    {
                        "title": "Saturated Fat",
                        "amount": "0.33g",
                        "indented": true,
                        "percentOfDailyNeeds": 2.05
                    },
                    {
                        "title": "Carbohydrates",
                        "amount": "18g",
                        "indented": false,
                        "percentOfDailyNeeds": 6.32
                    },
                    {
                        "title": "Sugar",
                        "amount": "2g",
                        "indented": true,
                        "percentOfDailyNeeds": 2.85
                    },
                    {
                        "title": "Cholesterol",
                        "amount": "0.0mg",
                        "indented": false,
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "title": "Sodium",
                        "amount": "1334mg",
                        "indented": false,
                        "percentOfDailyNeeds": 58.03
                    }
                ],
                "good": [
                    {
                        "title": "Protein",
                        "amount": "5g",
                        "indented": false,
                        "percentOfDailyNeeds": 10.65
                    },
                    {
                        "title": "Fiber",
                        "amount": "4g",
                        "indented": false,
                        "percentOfDailyNeeds": 19.88
                    },
                    {
                        "title": "Iron",
                        "amount": "2mg",
                        "indented": false,
                        "percentOfDailyNeeds": 11.63
                    },
                    {
                        "title": "Vitamin A",
                        "amount": "534IU",
                        "indented": false,
                        "percentOfDailyNeeds": 10.69
                    },
                    {
                        "title": "Calcium",
                        "amount": "64mg",
                        "indented": false,
                        "percentOfDailyNeeds": 6.44
                    },
                    {
                        "title": "Vitamin K",
                        "amount": "4µg",
                        "indented": false,
                        "percentOfDailyNeeds": 3.99
                    },
                    {
                        "title": "Vitamin C",
                        "amount": "2mg",
                        "indented": false,
                        "percentOfDailyNeeds": 3.58
                    },
                    {
                        "title": "Manganese",
                        "amount": "0.05mg",
                        "indented": false,
                        "percentOfDailyNeeds": 2.34
                    },
                    {
                        "title": "Potassium",
                        "amount": "80mg",
                        "indented": false,
                        "percentOfDailyNeeds": 2.3
                    },
                    {
                        "title": "Vitamin E",
                        "amount": "0.34mg",
                        "indented": false,
                        "percentOfDailyNeeds": 2.26
                    },
                    {
                        "title": "Folate",
                        "amount": "6µg",
                        "indented": false,
                        "percentOfDailyNeeds": 1.68
                    },
                    {
                        "title": "Vitamin B6",
                        "amount": "0.02mg",
                        "indented": false,
                        "percentOfDailyNeeds": 1.15
                    },
                    {
                        "title": "Phosphorus",
                        "amount": "11mg",
                        "indented": false,
                        "percentOfDailyNeeds": 1.12
                    }
                ],
                "expires": 1635942953279,
                "isStale": true
            }
        },
        {
            "vegetarian": false,
            "vegan": false,
            "glutenFree": true,
            "dairyFree": false,
            "veryHealthy": false,
            "cheap": false,
            "veryPopular": false,
            "sustainable": false,
            "lowFodmap": false,
            "weightWatcherSmartPoints": 13,
            "gaps": "no",
            "preparationMinutes": -1,
            "cookingMinutes": -1,
            "aggregateLikes": 112,
            "healthScore": 37,
            "creditsText": "foodista.com",
            "sourceName": "foodista.com",
            "pricePerServing": 305.72,
            "extendedIngredients": [
                {
                    "id": 10211821,
                    "aisle": "Produce",
                    "image": "bell-pepper-orange.png",
                    "consistency": "SOLID",
                    "name": "bell peppers",
                    "nameClean": "bell pepper",
                    "original": "4 bell peppers (choose your favorite color!)",
                    "originalName": "bell peppers (choose your favorite color!)",
                    "amount": 4,
                    "unit": "",
                    "meta": [
                        "your favorite",
                        "(choose color!)"
                    ],
                    "measures": {
                        "us": {
                            "amount": 4,
                            "unitShort": "",
                            "unitLong": ""
                        },
                        "metric": {
                            "amount": 4,
                            "unitShort": "",
                            "unitLong": ""
                        }
                    }
                },
                {
                    "id": 1002030,
                    "aisle": "Spices and Seasonings",
                    "image": "pepper.jpg",
                    "consistency": "SOLID",
                    "name": "black pepper",
                    "nameClean": "black pepper",
                    "original": "1 tsp black pepper",
                    "originalName": "black pepper",
                    "amount": 1,
                    "unit": "tsp",
                    "meta": [
                        "black"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        }
                    }
                },
                {
                    "id": 11549,
                    "aisle": "Canned and Jarred",
                    "image": "tomato-sauce-or-pasta-sauce.jpg",
                    "consistency": "SOLID",
                    "name": "canned tomato sauce",
                    "nameClean": "canned tomato sauce",
                    "original": "1 (8oz) can tomato sauce",
                    "originalName": "tomato sauce",
                    "amount": 8,
                    "unit": "oz",
                    "meta": [
                        "canned"
                    ],
                    "measures": {
                        "us": {
                            "amount": 8,
                            "unitShort": "oz",
                            "unitLong": "ounces"
                        },
                        "metric": {
                            "amount": 226.796,
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
                    "original": "1 (8oz) can diced tomatoes",
                    "originalName": "diced tomatoes",
                    "amount": 8,
                    "unit": "oz",
                    "meta": [
                        "diced",
                        "canned"
                    ],
                    "measures": {
                        "us": {
                            "amount": 8,
                            "unitShort": "oz",
                            "unitLong": "ounces"
                        },
                        "metric": {
                            "amount": 226.796,
                            "unitShort": "g",
                            "unitLong": "grams"
                        }
                    }
                },
                {
                    "id": 2029,
                    "aisle": "Spices and Seasonings",
                    "image": "dried-parsley.png",
                    "consistency": "SOLID",
                    "name": "dried parsley",
                    "nameClean": "dried parsley",
                    "original": "2 tbsp dried parsley",
                    "originalName": "dried parsley",
                    "amount": 2,
                    "unit": "tbsp",
                    "meta": [
                        "dried"
                    ],
                    "measures": {
                        "us": {
                            "amount": 2,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        },
                        "metric": {
                            "amount": 2,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
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
                    "original": "2 eggs",
                    "originalName": "eggs",
                    "amount": 2,
                    "unit": "",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 2,
                            "unitShort": "",
                            "unitLong": ""
                        },
                        "metric": {
                            "amount": 2,
                            "unitShort": "",
                            "unitLong": ""
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
                    "original": "1 tbsp minced garlic",
                    "originalName": "minced garlic",
                    "amount": 1,
                    "unit": "tbsp",
                    "meta": [
                        "minced"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "Tbsp",
                            "unitLong": "Tbsp"
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "Tbsp",
                            "unitLong": "Tbsp"
                        }
                    }
                },
                {
                    "id": 10023572,
                    "aisle": "Meat",
                    "image": "fresh-ground-beef.jpg",
                    "consistency": "SOLID",
                    "name": "ground beef",
                    "nameClean": "ground chuck",
                    "original": "1/2 lb ground beef",
                    "originalName": "ground beef",
                    "amount": 0.5,
                    "unit": "lb",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 0.5,
                            "unitShort": "lb",
                            "unitLong": "pounds"
                        },
                        "metric": {
                            "amount": 226.796,
                            "unitShort": "g",
                            "unitLong": "grams"
                        }
                    }
                },
                {
                    "id": 5662,
                    "aisle": "Meat",
                    "image": "meat-ground.jpg",
                    "consistency": "SOLID",
                    "name": "ground turkey",
                    "nameClean": "ground turkey",
                    "original": "1/2 lb ground turkey",
                    "originalName": "ground turkey",
                    "amount": 0.5,
                    "unit": "lb",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 0.5,
                            "unitShort": "lb",
                            "unitLong": "pounds"
                        },
                        "metric": {
                            "amount": 226.796,
                            "unitShort": "g",
                            "unitLong": "grams"
                        }
                    }
                },
                {
                    "id": 11282,
                    "aisle": "Produce",
                    "image": "brown-onion.png",
                    "consistency": "SOLID",
                    "name": "onion",
                    "nameClean": "onion",
                    "original": "1 onion, diced",
                    "originalName": "onion, diced",
                    "amount": 1,
                    "unit": "",
                    "meta": [
                        "diced"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "",
                            "unitLong": ""
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "",
                            "unitLong": ""
                        }
                    }
                },
                {
                    "id": 1033,
                    "aisle": "Cheese",
                    "image": "parmesan.jpg",
                    "consistency": "SOLID",
                    "name": "parmesan cheese",
                    "nameClean": "parmesan",
                    "original": "1/4 cup grated parmesan cheese",
                    "originalName": "grated parmesan cheese",
                    "amount": 0.25,
                    "unit": "cup",
                    "meta": [
                        "grated"
                    ],
                    "measures": {
                        "us": {
                            "amount": 0.25,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 59.147,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 20444,
                    "aisle": "Pasta and Rice",
                    "image": "uncooked-white-rice.png",
                    "consistency": "SOLID",
                    "name": "rice",
                    "nameClean": "rice",
                    "original": "1/2 cup uncooked rice",
                    "originalName": "uncooked rice",
                    "amount": 0.5,
                    "unit": "cup",
                    "meta": [
                        "uncooked"
                    ],
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
                    "id": 19335,
                    "aisle": "Baking",
                    "image": "sugar-in-bowl.png",
                    "consistency": "SOLID",
                    "name": "sugar",
                    "nameClean": "sugar",
                    "original": "1 heaping tbsp sugar",
                    "originalName": "heaping tbsp sugar",
                    "amount": 1,
                    "unit": "tbsp",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "Tbsp",
                            "unitLong": "Tbsp"
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "Tbsp",
                            "unitLong": "Tbsp"
                        }
                    }
                },
                {
                    "id": 6159,
                    "aisle": "Canned and Jarred",
                    "image": "tomato-soup.png",
                    "consistency": "LIQUID",
                    "name": "tomato soup",
                    "nameClean": "tomato soup",
                    "original": "1 (8oz) can tomato soup",
                    "originalName": "tomato soup",
                    "amount": 8,
                    "unit": "oz",
                    "meta": [
                        "canned"
                    ],
                    "measures": {
                        "us": {
                            "amount": 8,
                            "unitShort": "oz",
                            "unitLong": "ounces"
                        },
                        "metric": {
                            "amount": 226.796,
                            "unitShort": "g",
                            "unitLong": "grams"
                        }
                    }
                },
                {
                    "id": 6971,
                    "aisle": "Condiments",
                    "image": "dark-sauce.jpg",
                    "consistency": "LIQUID",
                    "name": "worcestershire sauce",
                    "nameClean": "worcestershire sauce",
                    "original": "1 tbsp Worcestershire sauce",
                    "originalName": "Worcestershire sauce",
                    "amount": 1,
                    "unit": "tbsp",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "Tbsp",
                            "unitLong": "Tbsp"
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "Tbsp",
                            "unitLong": "Tbsp"
                        }
                    }
                }
            ],
            "id": 645978,
            "title": "Ground Turkey Stuffed Peppers",
            "readyInMinutes": 45,
            "servings": 4,
            "sourceUrl": "http://www.foodista.com/recipe/VKY3BZ5J/ground-turkey-stuffed-peppers",
            "image": "https://spoonacular.com/recipeImages/645978-556x370.jpg",
            "imageType": "jpg",
            "summary": "Ground Turkey Stuffed Peppers might be just the main course you are searching for. One serving contains <b>486 calories</b>, <b>34g of protein</b>, and <b>17g of fat</b>. This recipe serves 4 and costs $3.06 per serving. Plenty of people made this recipe, and 110 would say it hit the spot. It is a good option if you're following a <b>gluten free</b> diet. If you have parmesan cheese, parsley, tomato soup, and a few other ingredients on hand, you can make it. To use up the onion you could follow this main course with the <a href=\"https://spoonacular.com/recipes/candy-corn-cupcakes-63881\">Candy Corn Cupcakes</a> as a dessert. From preparation to the plate, this recipe takes about <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 94%</b>. This score is spectacular. Try <a href=\"https://spoonacular.com/recipes/stuffed-peppers-with-ground-turkey-662070\">Stuffed Peppers With Ground Turkey</a>, <a href=\"https://spoonacular.com/recipes/ground-turkey-and-tarragon-stuffed-peppers-5-points-548332\">Ground Turkey and Tarragon Stuffed Peppers – 5 Points</a>, and <a href=\"https://spoonacular.com/recipes/moms-ground-turkey-and-peppers-245881\">Mom’s Ground Turkey and Peppers</a> for similar recipes.",
            "cuisines": [],
            "dishTypes": [
                "lunch",
                "main course",
                "main dish",
                "dinner"
            ],
            "diets": [
                "gluten free"
            ],
            "occasions": [],
            "instructions": "<ol><li>Cook rice then knead it together with remaining filling ingredients. Cut tops off peppers and fill each one. Place in your slow cooker or a large stove-top pot. Mix together sauce ingredients. Top each stuffed pepper with sauce and pour remaining sauce all around the stuffed peppers. Cook on medium/low for about an hour. Top with grated parmesan cheese and a little parsley for looks and serve warm.</li></ol>",
            "analyzedInstructions": [
                {
                    "name": "",
                    "steps": [
                        {
                            "number": 1,
                            "step": "Cook rice then knead it together with remaining filling ingredients.",
                            "ingredients": [
                                {
                                    "id": 20444,
                                    "name": "rice",
                                    "localizedName": "rice",
                                    "image": "uncooked-white-rice.png"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 2,
                            "step": "Cut tops off peppers and fill each one.",
                            "ingredients": [
                                {
                                    "id": 10111333,
                                    "name": "peppers",
                                    "localizedName": "peppers",
                                    "image": "green-pepper.jpg"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 3,
                            "step": "Place in your slow cooker or a large stove-top pot.",
                            "ingredients": [],
                            "equipment": [
                                {
                                    "id": 404718,
                                    "name": "slow cooker",
                                    "localizedName": "slow cooker",
                                    "image": "slow-cooker.jpg"
                                },
                                {
                                    "id": 404794,
                                    "name": "stove",
                                    "localizedName": "stove",
                                    "image": "oven.jpg"
                                },
                                {
                                    "id": 404752,
                                    "name": "pot",
                                    "localizedName": "pot",
                                    "image": "stock-pot.jpg"
                                }
                            ]
                        },
                        {
                            "number": 4,
                            "step": "Mix together sauce ingredients. Top each stuffed pepper with sauce and pour remaining sauce all around the stuffed peppers. Cook on medium/low for about an hour. Top with grated parmesan cheese and a little parsley for looks and serve warm.",
                            "ingredients": [
                                {
                                    "id": 1032,
                                    "name": "grated parmesan cheese",
                                    "localizedName": "grated parmesan cheese",
                                    "image": "parmesan.jpg"
                                },
                                {
                                    "id": 11297,
                                    "name": "parsley",
                                    "localizedName": "parsley",
                                    "image": "parsley.jpg"
                                },
                                {
                                    "id": 10111333,
                                    "name": "peppers",
                                    "localizedName": "peppers",
                                    "image": "green-pepper.jpg"
                                },
                                {
                                    "id": 1002030,
                                    "name": "pepper",
                                    "localizedName": "pepper",
                                    "image": "pepper.jpg"
                                },
                                {
                                    "id": 0,
                                    "name": "sauce",
                                    "localizedName": "sauce",
                                    "image": ""
                                }
                            ],
                            "equipment": []
                        }
                    ]
                }
            ],
            "originalId": null,
            "spoonacularSourceUrl": "https://spoonacular.com/ground-turkey-stuffed-peppers-645978",
            "expanded": false,
            "nutrition_stats": {
                "calories": "486k",
                "carbs": "49g",
                "fat": "17g",
                "protein": "34g",
                "bad": [
                    {
                        "title": "Calories",
                        "amount": "486k",
                        "indented": false,
                        "percentOfDailyNeeds": 24.32
                    },
                    {
                        "title": "Fat",
                        "amount": "17g",
                        "indented": false,
                        "percentOfDailyNeeds": 26.57
                    },
                    {
                        "title": "Saturated Fat",
                        "amount": "6g",
                        "indented": true,
                        "percentOfDailyNeeds": 40.92
                    },
                    {
                        "title": "Carbohydrates",
                        "amount": "49g",
                        "indented": false,
                        "percentOfDailyNeeds": 16.54
                    },
                    {
                        "title": "Sugar",
                        "amount": "19g",
                        "indented": true,
                        "percentOfDailyNeeds": 21.55
                    },
                    {
                        "title": "Cholesterol",
                        "amount": "157mg",
                        "indented": false,
                        "percentOfDailyNeeds": 52.51
                    },
                    {
                        "title": "Sodium",
                        "amount": "836mg",
                        "indented": false,
                        "percentOfDailyNeeds": 36.38
                    }
                ],
                "good": [
                    {
                        "title": "Protein",
                        "amount": "34g",
                        "indented": false,
                        "percentOfDailyNeeds": 68.25
                    },
                    {
                        "title": "Vitamin C",
                        "amount": "172mg",
                        "indented": false,
                        "percentOfDailyNeeds": 209.3
                    },
                    {
                        "title": "Vitamin A",
                        "amount": "4519IU",
                        "indented": false,
                        "percentOfDailyNeeds": 90.39
                    },
                    {
                        "title": "Vitamin B6",
                        "amount": "1mg",
                        "indented": false,
                        "percentOfDailyNeeds": 67.58
                    },
                    {
                        "title": "Vitamin B3",
                        "amount": "11mg",
                        "indented": false,
                        "percentOfDailyNeeds": 56.81
                    },
                    {
                        "title": "Selenium",
                        "amount": "35µg",
                        "indented": false,
                        "percentOfDailyNeeds": 50.8
                    },
                    {
                        "title": "Phosphorus",
                        "amount": "431mg",
                        "indented": false,
                        "percentOfDailyNeeds": 43.11
                    },
                    {
                        "title": "Manganese",
                        "amount": "0.86mg",
                        "indented": false,
                        "percentOfDailyNeeds": 42.77
                    },
                    {
                        "title": "Potassium",
                        "amount": "1416mg",
                        "indented": false,
                        "percentOfDailyNeeds": 40.48
                    },
                    {
                        "title": "Zinc",
                        "amount": "4mg",
                        "indented": false,
                        "percentOfDailyNeeds": 32.46
                    },
                    {
                        "title": "Vitamin B12",
                        "amount": "1µg",
                        "indented": false,
                        "percentOfDailyNeeds": 29.56
                    },
                    {
                        "title": "Vitamin B2",
                        "amount": "0.49mg",
                        "indented": false,
                        "percentOfDailyNeeds": 28.72
                    },
                    {
                        "title": "Vitamin E",
                        "amount": "4mg",
                        "indented": false,
                        "percentOfDailyNeeds": 28.11
                    },
                    {
                        "title": "Iron",
                        "amount": "4mg",
                        "indented": false,
                        "percentOfDailyNeeds": 27.02
                    },
                    {
                        "title": "Fiber",
                        "amount": "6g",
                        "indented": false,
                        "percentOfDailyNeeds": 24.8
                    },
                    {
                        "title": "Folate",
                        "amount": "96µg",
                        "indented": false,
                        "percentOfDailyNeeds": 24.16
                    },
                    {
                        "title": "Vitamin K",
                        "amount": "25µg",
                        "indented": false,
                        "percentOfDailyNeeds": 24.13
                    },
                    {
                        "title": "Magnesium",
                        "amount": "87mg",
                        "indented": false,
                        "percentOfDailyNeeds": 21.93
                    },
                    {
                        "title": "Vitamin B5",
                        "amount": "2mg",
                        "indented": false,
                        "percentOfDailyNeeds": 21.55
                    },
                    {
                        "title": "Copper",
                        "amount": "0.39mg",
                        "indented": false,
                        "percentOfDailyNeeds": 19.66
                    },
                    {
                        "title": "Calcium",
                        "amount": "172mg",
                        "indented": false,
                        "percentOfDailyNeeds": 17.29
                    },
                    {
                        "title": "Vitamin B1",
                        "amount": "0.25mg",
                        "indented": false,
                        "percentOfDailyNeeds": 16.86
                    },
                    {
                        "title": "Vitamin D",
                        "amount": "0.75µg",
                        "indented": false,
                        "percentOfDailyNeeds": 5.03
                    }
                ],
                "expires": 1634730518470,
                "isStale": true
            }
        }]
    }
    handleExpandClick = (item_index) => {
        this.setState({
            recipe_list: this.state.recipe_list.map(
                (item, index) => index == item_index ? { ...item, expanded: !item.expanded } : item)
        })
    }

    //  getSavedRecipes = (user) => {
    //     return axios({
    //       url: 'http://localhost:8090/api/likedRecipe/findByUserId',
    //       params: {
    //         userId: user,
    //       }
    //     }).then(response => {
    //       return response.data
    //     }).catch((error) => {
    //       console.log(error)
    //     })
    //   }

    render () {
        const { username } = this.props
        return (
            <div className="recipe_list w">
            <div className="title"> <Typography 
                sx={{fontWeight:"bold",
                     fontSize:30, 
                     textAlign:"center",
                     color:"black",
                     marginBottom:5}}>
                Your Favorite Recipes:</Typography></div>
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
                                        {/*make heart go red when the button is pressed to represent that it has been clicked */}
                                        <FavButton username={username} recipeId={item.title} />
                                        {/* <FavRecipes username={username} recipeId={item.title}/> */}
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
                    )
                    )}

                </ul>
            </div>
        )
    }

}
// export default FavRecipes