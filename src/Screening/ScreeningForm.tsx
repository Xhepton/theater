// import React, { useState, useEffect } from 'react';
// import ScreeningService from './ScreeningService';
// import { tokenstate } from "../Auth/AuthForm";
//
// const ScreeningForm = () => {
//     const [screenings, setScreenings] = useState([]);
//     const [newScreening, setNewScreening] = useState({
//         startTime: '2023-12-08T12:00:00Z', // Set default start time
//         movieTitle: {
//             title: ''
//         },
//         roomRoomName: {
//             roomName: ''
//         }
//     });
//
//     const screeningService = new ScreeningService('http://localhost:9090');
//
//     useEffect(() => {
//         fetchScreenings();
//     }, []);
//
//     const fetchScreenings = async () => {
//         try {
//             const token = tokenstate;
//             const fetchedScreenings = await screeningService.getAllScreenings(token);
//
//             setScreenings(fetchedScreenings);
//         } catch (error) {
//             console.error('Error fetching screenings:', error);
//         }
//     };
//
//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//
//         // Split the name into an array to handle nested properties
//         const nameArray = name.split('.');
//
//         setNewScreening((prevScreening) => {
//             if (nameArray.length === 1) {
//                 // If it's a top-level property
//                 return {
//                     ...prevScreening,
//                     [name]: value
//                 };
//             } else if (nameArray.length === 2) {
//                 // If it's a nested property
//                 const [nestedName, nestedProperty] = nameArray;
//                 return {
//                     ...prevScreening,
//                     [nestedName]: {
//                         ...prevScreening[nestedName],
//                         [nestedProperty]: value
//                     }
//                 };
//             }
//
//             return prevScreening;
//         });
//     };
//
//     const handleSaveScreening = async (e) => {
//         e.preventDefault();
//
//         try {
//             const token = tokenstate;
//             const savedScreening = await screeningService.saveScreening(newScreening, token);
//
//             setScreenings((prevScreenings) => [...prevScreenings, savedScreening]);
//             setNewScreening({
//                 startTime: '2023-12-08T12:00:00Z',
//                 movieTitle: {
//                     title: ''
//                 },
//                 roomRoomName: {
//                     roomName: ''
//                 }
//             });
//         } catch (error) {
//             console.error('Error saving screening:', error);
//         }
//     };
//
//     return (
//         <div>
//             <form onSubmit={handleSaveScreening}>
//                 <label>
//                     Start Time:
//                     <input
//                         type="text"
//                         name="startTime"
//                         value={newScreening.startTime}
//                         onChange={handleInputChange}
//                     />
//                 </label>
//                 <br />
//                 <label>
//                     Movie Title:
//                     <input
//                         type="text"
//                         name="movieTitle.title"
//                         value={newScreening.movieTitle.title}
//                         onChange={handleInputChange}
//                     />
//                 </label>
//                 <br />
//                 <label>
//                     Room Name:
//                     <input
//                         type="text"
//                         name="roomRoomName.roomName"
//                         value={newScreening.roomRoomName.roomName}
//                         onChange={handleInputChange}
//                     />
//                 </label>
//                 <br />
//                 <button type="submit">Save Screening</button>
//             </form>
//
//             <ul>
//                 {screenings.map((screening) => (
//                     <li key={screening.startTime}>{screening.startTime} - {screening.movieTitle.title} - {screening.roomRoomName.roomName}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// };
//
// export default ScreeningForm;
