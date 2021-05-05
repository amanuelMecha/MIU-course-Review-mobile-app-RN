# CS571 Workshop 02
## MIU Courses Review App
Start by creating a new expo project, copy the provided components, and then start working on the requirements, you will need to add additional dependencies based on the requirements. **Check the screenshots below**.  
* Complete the code in `App.js` to render an application with the following structure:
  * Material Bottom Tab Navigator
    * Stack Navigator
      * CoursesList screen
      * CourseDetails screen
      * AddReview screen
    * About screen
* Complete the code in `/components/CoursesList.js` to display the Live Search and list of courses using `FlatList`. The `Course` reusable component renders a single course, you will need to implement `infoPressed` method and make it functional.
* Complete the code in `/components/CourseDetails.js` to display the course details, you will also need to implement `addReview` method.
* Complete the code in `/components/AddReview.js` to meet the following requirements:
  * Create a controlled form with the following state: `{ name: '', rating: 0, comment: '', submitting: false }`.
  * After the first submit, the form will persist the user name in the phone local storage using `AsyncStorage`. The next time a user opens the screen, their name has to be fetched from local storage.
  * Use `import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';` component to avoid a situation where the keyboard slides over the form element. (install and use)
  * When users click `Submit Review` display an `ActivityIndicator`, save their name in local storage, and navigate back to the course details screen. (No need to save the review)
* Optional: write an Express server to support the following API, and make necessary changes in your app to communicate with the backend server:
    * `GET /courses`
    * `GET /courses/:course_id`
    * `POST /courses/:course_id/reviews`
    
## Please find screenshots for the finished application:  

<img src="./screenshots/homepage.png" width="35%" /><img src="./screenshots/live-search.png" width="35%" />  
  
<img src="./screenshots/course-details.png" width="35%" /><img src="./screenshots/about.png" width="35%" />  
  
<img src="./screenshots/Simulator Screen Shot - iPhone 11 - 2020-04-30 at 13.08.50.png" width="35%" /><img src="./screenshots/add-review.png" width="35%" />


