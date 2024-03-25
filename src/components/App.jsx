// import { BookList } from './Booklist';

// const favouriteBooks = [
//   { id: "id-1", name: "JS for beginners" },
//   { id: "id-2", name: "React basics" },
//   { id: "id-3", name: "React Router overview" }
// ];

// export default function App() {
//   return (
//     <>
//     	<h1>Books of the week</h1>
//       <BookList books={favouriteBooks} />
//     </>
//   );
// }

import { Alert } from "./Alert";

export default function App() {
  return (
    <>
      <Alert variant="info">Would you like to browse our recommended products?</Alert>
      <Alert variant="error" outlined>
        There was an error during your last transaction
      </Alert>
      <Alert variant="success" elevated>
        Payment received, thank you for your purchase
      </Alert>
      <Alert variant="warning" outlined elevated>
        Please update your profile contact information
      </Alert>
    </>
  );
}
