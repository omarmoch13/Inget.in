import "./Jadwal.css";
import React from "react";
import { TextField } from "@material-ui/core";

// // import React from "react";

// import React, { useState, useEffect } from "react";
// import { View } from "./View";

// // getting the values of local storage

// // getting the values of local storage
// const getDatafromLS = () => {
//   const data = localStorage.getItem("books");
//   if (data) {
//     return JSON.parse(data);
//   } else {
//     return [];
//   }
// };

// export const Jadwal = () => {
//   // main array of objects state || books state || books array of objects
//   const [books, setbooks] = useState(getDatafromLS());

//   // input field states
//   const [waktu, setWaktu] = useState("");
//   const [senin, setSenin] = useState("");
//   const [selasa, setSelasa] = useState("");

//   // form submit event
//   const handleAddBookSubmit = (e) => {
//     e.preventDefault();
//     // creating an object
//     let book = {
//       waktu,
//       senin,
//       selasa,
//     };
//     setbooks([...books, book]);
//     setWaktu("");
//     setSenin("");
//     setSelasa("");
//   };

//   // delete book from LS
//   const deleteBook = (waktu) => {
//     const filteredBooks = books.filter((element, index) => {
//       return element.waktu !== waktu;
//     });
//     setbooks(filteredBooks);
//   };

//   // saving data to local storage
//   useEffect(() => {
//     localStorage.setItem("books", JSON.stringify(books));
//   }, [books]);

//   return (
//     <div className="container-jadwal">
//       <div className="wrapper">
//         <div className="wrapper-judul">
//           <ajudul>Jadwal Sekolah</ajudul>
//         </div>
//         <div className="main">
//           <div className="form-container">
//             <form
//               autoComplete="off"
//               className="form-group"
//               onSubmit={handleAddBookSubmit}
//             >
//               <label>Waktu</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 required
//                 onChange={(e) => setWaktu(e.target.value)}
//                 value={waktu}
//               ></input>
//               <br></br>
//               <label>Senin</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 required
//                 onChange={(e) => setSenin(e.target.value)}
//                 value={senin}
//               ></input>
//               <br></br>
//               <label>Selasa</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 required
//                 onChange={(e) => setSelasa(e.target.value)}
//                 value={selasa}
//               ></input>
//               <br></br>
//               <button
//                 type="submit"
//                 className="btn btn-success btn-md"
//               >
//                 ADD
//               </button>
//             </form>
//           </div>

//           <div className="view-container">
//             {books.length > 0 && (
//               <>
//                 <div className="table-responsive">
//                   <table className="table">
//                     <thead>
//                       <tr>
//                         <th> Waktu </th>
//                         <th> Senin </th>
//                         <th> Selasa </th>
//                         <th> Delete </th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       <View books={books} deleteBook={deleteBook} />
//                     </tbody>
//                   </table>
//                 </div>
//                 <button
//                   className="btn btn-danger btn-md"
//                   onClick={() => setbooks([])}
//                 >
//                   Remove All
//                 </button>
//               </>
//             )}
//             {books.length < 1 && <div>No books are added yet</div>}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Jadwal;
const Jadwal = () => {
  return (
    <div className="container-Jadwal">
      <div className="container-wrapper">
        <div className="container-judul">
          <ajudul>Jadwal Sekolah</ajudul>
        </div>
        <div className="container-nama">
          <anama>
            Nama :<TextField className="fieldarea" />
          </anama>
          <akelas>
            Kelas :<TextField className="fieldarea" />
          </akelas>
        </div>
        <div className="table-jadwal">
          <table id="Sekolah">
            <tr>
              <th>Waktu</th>
              <th>Senin</th>
              <th>Selasa</th>
              <th>Rabu</th>
              <th>Kamis</th>
              <th>Jumat</th>
              <th>Sabtu</th>
            </tr>
            <tr>
              <td contentEditable={true}>8.30 - 10.00</td>
              <td contentEditable={true}>Biologi</td>
              <td contentEditable={true}>Sejarah</td>
              <td contentEditable={true}>Matematika</td>
              <td contentEditable={true}>Biologi</td>
              <td contentEditable={true}>Sejarah</td>
              <td contentEditable={true}>Sejarah</td>
            </tr>
            <tr>
              <td contentEditable={true}>10.00 - 12.00</td>

              <td contentEditable={true}>Biologi</td>
              <td contentEditable={true}>Sejarah</td>
              <td contentEditable={true}>Matematika</td>
              <td contentEditable={true}>Biologi</td>
              <td contentEditable={true}>Sejarah</td>
              <td contentEditable={true}>Sejarah</td>
            </tr>
            <tr>
              <td contentEditable={true}>13.00 - 14.00</td>
              <td contentEditable={true}>Biologi</td>
              <td contentEditable={true}>Sejarah</td>
              <td contentEditable={true}>Matematika</td>
              <td contentEditable={true}>Biologi</td>
              <td contentEditable={true}>Sejarah</td>
              <td contentEditable={true}>Sejarah</td>
            </tr>
            <tr>
              <td contentEditable={true}>14.00 - 15.00</td>
              <td contentEditable={true}>Biologi</td>
              <td contentEditable={true}>Sejarah</td>
              <td contentEditable={true}>Matematika</td>
              <td contentEditable={true}>Biologi</td>
              <td contentEditable={true}>Sejarah</td>
              <td contentEditable={true}>Sejarah</td>
            </tr>
            <tr>
              <td contentEditable={true}>14.00 - 15.00</td>
              <td contentEditable={true}>Biologi</td>
              <td contentEditable={true}>Sejarah</td>
              <td contentEditable={true}>Matematika</td>
              <td contentEditable={true}>Biologi</td>
              <td contentEditable={true}>Sejarah</td>
              <td contentEditable={true}>Sejarah</td>
            </tr>
            <tr>
              <td contentEditable={true}>14.00 - 15.00</td>
              <td contentEditable={true}>Biologi</td>
              <td contentEditable={true}>Sejarah</td>
              <td contentEditable={true}>Matematika</td>
              <td contentEditable={true}>Biologi</td>
              <td contentEditable={true}>Sejarah</td>
              <td contentEditable={true}>Sejarah</td>
            </tr>
            <tr>
              <td contentEditable={true}>14.00 - 15.00</td>
              <td contentEditable={true}>Biologi</td>
              <td contentEditable={true}>Sejarah</td>
              <td contentEditable={true}>Matematika</td>
              <td contentEditable={true}>Biologi</td>
              <td contentEditable={true}>Sejarah</td>
              <td contentEditable={true}>Sejarah</td>
            </tr>
            <tr>
              <td contentEditable={true}>14.00 - 15.00</td>
              <td contentEditable={true}>Biologi</td>
              <td contentEditable={true}>Sejarah</td>
              <td contentEditable={true}>Matematika</td>
              <td contentEditable={true}>Biologi</td>
              <td contentEditable={true}>Sejarah</td>
              <td contentEditable={true}>Sejarah</td>
            </tr>
            <tr>
              <td contentEditable={true}>14.00 - 15.00</td>
              <td contentEditable={true}>Biologi</td>
              <td contentEditable={true}>Sejarah</td>
              <td contentEditable={true}>Matematika</td>
              <td contentEditable={true}>Biologi</td>
              <td contentEditable={true}>Sejarah</td>
              <td contentEditable={true}>Sejarah</td>
            </tr>
            <tr>
              <td contentEditable={true}>14.00 - 15.00</td>
              <td contentEditable={true}>Biologi</td>
              <td contentEditable={true}>Sejarah</td>
              <td contentEditable={true}>Matematika</td>
              <td contentEditable={true}>Biologi</td>
              <td contentEditable={true}>Sejarah</td>
              <td contentEditable={true}>Sejarah</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Jadwal;
