# Weekday Job Portal

## How to Run Locally

1. Clone the repository:
   ```sh
   git clone https://github.com/deepak539/weekday-assignment

2. Install the neccessary packages
   ```sh
   npm install
   
4. Start the Server using
   ```sh
   npm start


## Description
Weekday Job Portal is a web application developed as an assignment given by Weekday as a part of their hiring process. The portal allows users to browse job opportunities. Users can filter jobs based on experience, minimum base pay, and work mode (office, hybrid, remote). Additionally, users can search for jobs by company names.

## Stack Used
- **React**: Utilized for component-based architecture and efficient performance due to virtual DOM.
- **RTK Query**: Used for fetching data.
- **Material UI**: Employed for components.
- **CSS**: for styling.

## Known Bugs
- Role filter not implemented, Difficulty with UI as listHeader component can't be used as a wrapper around menu item, and native select UI didn't seem optimal.
  
## Areas for Improvement
- Resolve known bugs.
- Improve UI design to match a real job portal.
- Add color to easy apply icon for better visibility.
- Refactor logic for filtering job list; consider using helper functions instead of writing logic in setState.
- Consider using Redux instead of Context API for state management. Tried implementing Redux but faced errors.

## Live Demo
[Live Demo](https://weekday-assignment-omega.vercel.app/){:target="_blank"} - See the application in action without installation.

Feel free to provide any feedback or suggestions!
