const drinkData = [
  {
    name: 'Old Fashioned',
    image: './images/drinks/old_fashioned.jpg',
    backgroundImage: './images/backgrounds/vintage_bar.jpg',
    ingredients: {
      alcoholic: ['Rye whiskey', 'Angostura bitters', 'Orange bitters'],
      other: ['Brown sugar simple syrup', 'Giant ice cube']
    },
    rating: 6,
    strength: 6,
    funfact:
      'This drink is so old that 100 years ago they still called it an Old-Fashioned'
  },
  {
    name: 'Modern Old Fashioned',
    image: './images/drinks/modern_old_fashioned.jpg',
    backgroundImage: './images/backgrounds/orange_house.jpg',
    ingredients: {
      alcoholic: ['Rye whiskey', 'Angostura bitters'],
      other: ['Simple syrup', 'Maraschino  cherry', 'Orange slice']
    },
    rating: 7,
    strength: 6
  },
  {
    name: 'Sex On The Beach',
    image: './images/drinks/sex_on_the_beach.jpg',
    backgroundImage: './images/backgrounds/beach_with_palm_trees.jpg',
    ingredients: {
      alcoholic: ['Vodka', 'Peach liqueur'],
      other: ['Cranberry juice', 'Orange juice']
    },
    rating: 7,
    strength: 7,
    funfact:
      'Name of this cocktail comes from two things people love to do in Florida'
  },
  {
    name: 'Whiskey Sour',
    image: './images/drinks/whiskey_sour.jpg',
    backgroundImage: './images/backgrounds/elegant_living_room.jpg',
    ingredients: {
      alcoholic: ['Rye whiskey / bourbon'],
      other: ['Fresh lemon juice', 'Simple syrup', 'Egg white']
    },
    rating: 6,
    strength: 6
  },
  {
    name: 'Mojito',
    image: './images/drinks/mojito.jpg',
    backgroundImage: './images/backgrounds/mint.jpg',
    ingredients: {
      alcoholic: ['Rum'],
      other: ['Lime', 'Mint', 'Brown sugar', 'Soda water']
    },
    rating: 10,
    strength: 6
  }
];

export default drinkData;
