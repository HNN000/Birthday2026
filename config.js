// ===== BIRTHDAY WEBSITE CONFIGURATION =====
// Edit this file to customize your birthday website

const CONFIG = {
    // The date you met your friend (format: YYYY-MM-DD)
    // This will be used to calculate the days counter
    meetingDate: '2023-06-01', // Change this to your meeting date!

    // Gallery items: Add your memories here
    // Each item should have: image (emoji or URL), title, and date (format: YYYY-MM-DD)
    memories: [
        {
            image: '🎮',
            title: 'Gaming Adventures',
            date: '2023-06-15'
        },
        {
            image: '🍰',
            title: 'Coffee & Cake',
            date: '2023-07-20'
        },
        {
            image: '🎭',
            title: 'Movie Night',
            date: '2023-08-05'
        },
        {
            image: '🌸',
            title: 'Spring Walk',
            date: '2023-09-12'
        },
        {
            image: '🎵',
            title: 'Concert Time',
            date: '2023-10-30'
        },
        {
            image: '📚',
            title: 'Book Club',
            date: '2023-11-18'
        }
    ],

    // Birthday date (format: YYYY-MM-DD)
    birthdayDate: '2026-06-01' // Change this to your friend's birthday!
};

// Function to calculate days between two dates
function calculateDaysBetween(startDate, endDate) {
    const date1 = new Date(startDate);
    const date2 = new Date(endDate);
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
}