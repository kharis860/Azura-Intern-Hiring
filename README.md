# Take Home Internship 2024

## Azura Labs 2024

## Task

Create a book list website which allows to manage books and book categories.

## Tech Stack

- Frontend: ReactJS
- Backend: ExpressJS
- Database: MongoDB

## Installation

### Backend

1. Install dependencies
   ```
   npm i express nodemon mongoosh
   ```
2. Add data into database using seed
   ```
   node book_seed.js
   node book_category_seed.js
   ```
3. Start Backend APP
   ```
   nodemon app
   ```

### Frontend

1. Start ReacjJS APP
   ```
   npm start
   ```

### start using ReactJS Book List App

1. Book List Page

   > Note: Search bar still case sensitive.

   You can find list of book here. In this page you can search by title, author, and publisher, but im very sorry is still CASE SENSITIVE. So the search bar will work properly if the input is the same with data in the seed that have been run before. There several title, author, and publisher you can use to try search bar filter:

   ##### Title

   - The Da Vinci Code
   - The Catcher in the Rye
   - The Diary of a Young Girl
   - The Hunger Games
   - The Alchemist

   ##### Author

   - Scott Fitzgerald
   - Jane Austen
   - John Ronald Reuel Tolkien
   - Stephen King
   - Paulo Coelho

   ##### Publisher

   - Harvill Secker
   - Scholastic Press
   - Contact Publishing Company
   - Doubleday
   - Little, Brown and Company

   After try the search bar, You can also try to add book, edit book, and delete book.
   then, when add book, You can use several category like this

   ```
   ["fiction", "non-fiction", "horror", "sci-fi", "romance", "fantasy", "young-adult", "mystery"]
   ```

2. Book category List Page
   Here you can view list of book category. then, as same as previous page you cal also add, edit, and delete book category.

I apologize if the application I created did not fully meet the criteria set by the evaluators. Through this assessment, I have had the opportunity to learn several new things that I have not encountered before. Although my work may not have been entirely satisfactory, I humbly request the evaluators to allow me to learn more at Azura Labs. I am confident that with additional training and support, I can contribute more effectively to Azura Labs, I believe that this experience will be instrumental in my growth as a developer.

Thankyou
Kharis Rahmat Hidayat
