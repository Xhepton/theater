// class ScreeningService {
//     constructor(baseUrl) {
//         this.baseUrl = baseUrl;
//     }
//
//     async getAllScreenings(token) {
//         const response = await fetch(`${this.baseUrl}/api/screening`, {
//             headers: {
//                 Authorization: `Bearer ${token}`,
//             },
//         });
//
//         if (!response.ok) {
//             throw new Error(`Error fetching screenings: ${response.status}`);
//         }
//
//         const data = await response.json();
//         return data;
//     }
//
//     async saveScreening(screening, token) {
//         const response = await fetch(`${this.baseUrl}/api/screening`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 Authorization: `Bearer ${token}`,
//             },
//             body: JSON.stringify(screening),
//         });
//
//         if (!response.ok) {
//             throw new Error(`Error saving screening: ${response.status}`);
//         }
//
//         const savedScreening = await response.json();
//         return savedScreening;
//     }
// }
//
// export default ScreeningService;