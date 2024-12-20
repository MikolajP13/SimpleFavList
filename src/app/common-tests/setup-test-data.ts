import { Favorite } from '../favorites/favorite.model';

const jsonString = `
{
  "favorites": [
    {
      "id": "1",
      "category": "Movie",
      "creator": "George Lucas",
      "releaseYear": "1999",
      "title": "Star Wars: Episode I - The Phantom Menace",
      "description": "Two Jedi escape a hostile blockade to find allies and come across a young boy who may bring balance to the Force, but the long dormant Sith resurface to claim their original glory.",
      "imgUrl": "https://image.tmdb.org/t/p/original/6wkfovpn7Eq8dYNKaG5PY3q2oq6.jpg"
    },
    {
      "id": "2",
      "category": "Book",
      "creator": "Stieg Larsson",
      "releaseYear": "2006",
      "title": "The Girl Who Played with Fire",
      "description": "Lisbeth Salander is a wanted woman. Two Millennium journalists about to expose the truth about sex trafficking in Sweden are murdered, and Salander's prints are on the weapon. Her history of unpredictable and vengeful behaviour makes her an official danger to society - but no-one can find her. ",
      "imgUrl": "http://bookcoverarchive.com/wp-content/uploads/amazon/the_girl_who_played_with_fire.jpg"
    },
    {
      "id": "3",
      "category": "Movie",
      "creator": "Peter Jackson",
      "releaseYear": "2001",
      "title": "The Lord of the Rings: The Fellowship of the Ring",
      "description": "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
      "imgUrl": "https://image.tmdb.org/t/p/original/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg"
    },
    {
      "id": "4",
      "category": "Movie",
      "creator": "Christopher Nolan",
      "releaseYear": "2010",
      "title": "Inception",
      "description": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
      "imgUrl": "https://image.tmdb.org/t/p/original/ljsZTbVsrQSqZgWeep2B1QiDKuh.jpg"
    },
    {
      "id": "5",
      "category": "Movie",
      "creator": "Martin Scorsese",
      "releaseYear": "2010",
      "title": "Shutter Island",
      "description": "Two US marshals are sent to a mental institution on an inhospitable island in order to investigate the disappearance of a patient.",
      "imgUrl": "https://image.tmdb.org/t/p/original/4GDy0PHYX3VRXUtwK5ysFbg3kEx.jpg"
    },
    {
      "id": "6",
      "category": "Movie",
      "creator": "Ridley Scott",
      "releaseYear": "1979",
      "title": "Alien",
      "description": "After investigating a mysterious transmission of unknown origin, the crew of a commercial spacecraft encounters a deadly lifeform.",
      "imgUrl": "https://image.tmdb.org/t/p/original/5e8xcR2UONN3ZNeaX1UaejinZ30.jpg"
    },
    {
      "id": "7",
      "category": "Movie",
      "creator": "Spike Jonze",
      "releaseYear": "2013",
      "title": "her",
      "description": "In the near future, a lonely writer develops an unlikely relationship with an operating system designed to meet his every need.",
      "imgUrl": "https://image.tmdb.org/t/p/original/mxgEnjVUlzFDjmGxISErP4LwCge.jpg"
    },
    {
      "id": "8",
      "category": "Movie",
      "creator": "Alex Garland",
      "releaseYear": "2014",
      "title": "Ex Machina",
      "description": "A young programmer is selected to participate in a ground-breaking experiment in synthetic intelligence by evaluating the human qualities of a highly advanced humanoid A.I.",
      "imgUrl": "https://image.tmdb.org/t/p/original/9goPE2IoMIXxTLWzl7aizwuIiLh.jpg"
    },
    {
      "id": "9",
      "category": "Book",
      "creator": "Dmitry Glukhovsky",
      "releaseYear": "2002",
      "title": "Metro 2033",
      "description": "Post-apocalyptic fiction novel. It is set within the Moscow Metro, where the last survivors hide after a global nuclear holocaust.",
      "imgUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9GpgGFJvU937lxlmpr5_h9vPLumY7kDF1kw&s"
    },
    {
      "id": "10",
      "category": "Book",
      "creator": "Isaac Asimov",
      "releaseYear": "1954",
      "title": "The Caves of Steel",
      "description": "A riveting science fiction novel set in a future where Earth is overpopulated and humans live in vast enclosed cities. Detective Elijah Baley is tasked with solving a murder mystery that leads him to confront deep-seated prejudices against the robot population.",
      "imgUrl": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1405527971i/1627063.jpg"
    },
    {
      "id": "11",
      "category": "Book",
      "creator": "René Goscinny, Jean-Jacques Sempé",
      "releaseYear": "1987",
      "title": "Le Petit Nicolas",
      "description": "The books are told from the point of view of Nicolas himself, which gives the book a distinct and personal sense of humour. The narration is a pastiche of childish storytelling, with run-on sentences and schoolyard slang used in abundance, and much of the humour derives from Nicolas’s misunderstanding of adults' behaviour.",
      "imgUrl": "https://ksiegarniaedukator.pl/images/ck526/1000-2000/Petit-Nicolas-compilation_%5B1356%5D_480.jpg"
    },
    {
      "id": "12",
      "category": "Book",
      "creator": "H.P. Lovecraft",
      "releaseYear": "1928",
      "title": "The Dunwich Horror",
      "description": "In the story, members of the Whateley family try to summon the extraterrestrial Old Ones to their small village in Massachusetts. The novella is considered to be one of the foundational works of the Lovecraft mythology.",
      "imgUrl": "https://positronicpublishing.com/cdn/shop/files/the_dunwich_horror.jpg?v=1713476440"
    },
    {
      "id": "13",
      "category": "Book",
      "creator": "Gabriel García Márquez",
      "releaseYear": "1967",
      "title": "One Hundred Years of Solitude",
      "description": "One Hundred Years of Solitude is the history of the isolated town of Macondo and of the family who founds it, the Buendías. For years, the town has no contact with the outside world, except for gypsies who occasionally visit, peddling technologies like ice and telescopes.",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/en/a/a0/Cien_a%C3%B1os_de_soledad_%28book_cover%2C_1967%29.jpg?20150122060057"
    }
  ]
}
`;

const jsonData = JSON.parse(jsonString);

export function setupTestData(): Favorite[] {
  let resultArray: Favorite[] = [];
  for (let index = 0; index < jsonData.favorites.length; index++) {
    const element = jsonData.favorites[index];
    resultArray.push(element);
  }
  return resultArray;
} 
