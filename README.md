<br />

![GitHub repo size](https://img.shields.io/github/repo-size/wiaandev/Topdog?color=yellow)
![GitHub watchers](https://img.shields.io/github/watchers/wiaandev/Topdog?color=blue)
![GitHub language count](https://img.shields.io/github/languages/count/wiaandev/Topdog?color=aquamarine)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/wiaandev/Topdog?color=white)
[![LinkedIn][linkedin-shield]][linkedin-url]
[![Instagram][instagram-shield]][instagram-url]

<h5 align="center" style="padding:0;margin:0;">Wiaan Duvenhage</h5>
<h5 align="center" style="padding:0;margin:0;">200307</h5>
<h6 align="center">DV300 | Term 2</h6>
</br>
<p align="center">

  <a href="https://github.com/wiaandev/Topdog">
    <img src="./assets/icon.png" width="100px">
  </a>

<h3 align="center">Topdog</h3>

  <p align="center">
    An application that helps pet owners find and enter dog competitions for both Android & iOS<br>

   <br />
   <br />
    ·
    <a href="https://github.com/wiaandev/Topdog/issues">Report Bug</a>
    ·
    <a href="https://github.com/wiaandev/Topdog/issues">Request Feature</a>
</p>
<!-- TABLE OF CONTENTS -->

## Table of Contents

- [About the Project](#about-the-project)
  - [Project Description](#project-description)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [How to install](#how-to-install)
- [Features and Functionality](#features-and-functionality)
- [Concept Process](#concept-process)
  - [Wireframes](#wireframes)
- [Development Process](#development-process)
  - [Implementation Process](#implementation-process)
    - [Highlights](#highlights)
    - [Challenges](#challenges)
  - [Future Implementation](#peer-reviews)
- [Final Outcome](#final-outcome)
  - [Mockups](#mockups)
- [Conclusion](#conclusion)
- [License](#license)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

<!--PROJECT DESCRIPTION-->

## About the Project

<!-- header image of project -->

![image1][image1]

### Project Description

Topdog is an innovative competition app designed specifically for dog owners and enthusiasts. This user-friendly application allows individuals to discover and participate in various dog competitions, providing a platform for their beloved pets to showcase their skills and talents. Whether it's agility, obedience, conformation, or other dog-related activities, Topdog offers a comprehensive directory of events and competitions tailored to different breeds and disciplines.

### Built With

[<img src="./assets/client.png" width="4%" height="4%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;](https://expo.dev/)
[<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="4%" height="4%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;](https://reactnative.dev/)
[<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" width="4%" height="4%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;](https://firebase.google.com/)

<!-- GETTING STARTED -->
<!-- Make sure to add appropriate information about what prerequesite technologies the user would need and also the steps to install your project on their own mashines -->

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

For development, the latest version of Android Studio is required. The latest version can be downloaded from [Android Studio](https://developer.android.com/studio?gclid=CjwKCAjwuYWSBhByEiwAKd_n_q4WXi5vcCji08peoWOEsv-KHFT7QWNZNmozB_CIiiSNl_HOUL-1JBoCGx8QAvD_BwE&gclsrc=aw.ds)

### Installation

1. Clone the repo

```sh
git clone https://github.com/wiaandev/Topdog.git
```

2. Open the project

Locate and drag file into Visual studio code.

3. Install Packages
```sh
npm install
```

4. Run Project
```sh
npm start
```

5. Download Expo Go on Android or iOS
- [iOS](https://apps.apple.com/us/app/expo-go/id982107779)
- [Android](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en&gl=US)

5.1 You can also run the iOS simulator or Android emulator. NOTE: Android studio is required for the Android emulator
- For Android Emulator

```sh
expo run:android 
```

- For iOS simulator

```sh
expo run:ios 
```

<!-- FEATURES AND FUNCTIONALITY-->
<!-- You can add the links to all of your imagery at the bottom of the file as references -->

## Features and Functionality

<!-- note how you can use your gitHub link. Just make a path to your assets folder -->

### Register & Login Account

![image2][image2]
Users can create their account by entering their information

### View competitions

![image3][image3]
The initial idea was that users can view competitions based on their phone location. But users can view locations that are open or closed.

### Add Dog to Account

![image4][image4]
Users can add their pets to the application by uploading a picture of them with their necessary credentials, like their weight, height and whether they are vaccinated as some competitions require to know the information.

### View Individual Competiton

![image5][image5]
Once tapping on a competition, users can view more information about the competition, like the requirements, the description, when it ends as well as the dogs that have entered as well.

### Judge Entries

![image6][image6]
Users that have signed up as judges to the application, would be able to judge the entries by adding a score from 1 - 100.

### View Leaderboards

![image7][image7]
Once the judges have entered the scores for all the pets, they can view the leaderboard of each competition

<!-- CONCEPT PROCESS -->
<!-- Briefly explain your concept ideation process -->
<!-- here you will add things like wireframing, data structure planning, anything that shows your process. You need to include images-->

## Concept Process

I am a very huge fan of dark theme applications and using colors that contrast extremely well, so in conclusion I thought it was a no-brainer to use in black, white and red in conjunction with each other to create the most eye-catching application. By looking at my wireframes you would notice that my answering method differs from the final application outcome. I have come to realise how intricate and dense Kotlin can be so decided to go with a more simpler, yet effective answering method.

### Wireframes

![image7][image8]

### Firestore Database Structure

![image8][image9]

### User Flow

![image9][image10]

## Development Process

The `Development Process` is the technical implementations and functionality done for the app.

### Implementation Process

For the entirety of the project, I have used <b>Expo CLI</b> and the entire project was built in JSX. For my front-end I have utilised React Native Elements, UI Toolkit for cross-platform development. All the UI elements seen on my application was built and implemented using React Native Elements

#### Front-End

- I installed my necessary fonts and created a fonts folder inside of my assets folder, where I then put my fonts. Next in my `App.js` I created a `useFonts` hook which would load my fonts onto the application.

- Using a `<FlatList/>` I was able to map my data from my Cloud Firestore database to my front-end.

- I used a `<SafeAreaView>` to prevent my front-end from going above the screen and into the status bar.

##### Navigation
- I have made use of a Stack and Tab Navigation during the development of my application.
- In my `App.js` I created my stack navigation with the `createNativeStackNavigator()` method.
- I created a seperate `Stacks` folder where I then created a `HomeTab.jsx` file where I then implemeted my Tab Navigation
#### Firebase

- I created a `firebaseAuth.js`, `firebaseDb.js` & `firebaseStorage.js` which held all the back-end functionality and API calls I made with my application.
- In my `firebaseAuth.js` I handled all my data in regards with signing up and logging in a user and getting the currently logged in user.
- In my `firebaseDb.js` I handled all my data in regards with the CRUD functionality of the application, like getting all the competitions, getting a single competition, getting the user's current pets, getting the leaderboard of a competition, adding a pet to a user profile and much more.
- In my `firebaseStorage.js` I handled my image uploading functionality which made it possible for users to upload a picture of their pets to the database.
- Using `createContext()` and `useContext()` hooks in conjunction with wrapping my `App` with a `<Provider>` element  from React I was able to pass state down to any component and then just calling the firestore functions inside of the context files.

#### Highlights

<!-- stipulated the highlight you experienced with the project -->

- A highlight of this project was definitely learning cross-platform development with React Native
- It was also a high point for me to load my app onto my mobile device and interacting with it
- Fixing all of the bugs I struggled with was also a big plus for me
- Seeing the data being pulled from my Cloud Firestore as well as images from my storage bucket.

#### Challenges

<!-- stipulated the challenges you faced with the project and why you think you faced it or how you think you'll solve it (if not solved) -->

- Fixing my context. I had to re-load to re-save my context file and the current file of the screen that I am on in order for the context to re-render and display my data. I unfortunately, could not get it fixed in time.

### Future Implementation


<!-- stipulate functionality and improvements that can be implemented in the future. -->

- Adding onboarding screens
- Fixing my context bugs
- Adding animations
- Adding proper validation to all my screens
- Adding a map to visualise where the competitions are being held.
- Adding user profile pictures and adding more information on the user profile screen
- Adding badges if a dog has won a competition
- Adding voting functionality.

<!-- MOCKUPS -->

## Final Outcome

### Mockups

<!-- TODO Change this -->

![image2][image2]
![image3][image3]
![image4][image4]
![image5][image5]
<br>


<!-- AUTHORS -->

## Authors

- **Wiaan Duvenhage** - [Github](https://github.com/wiaandev)

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.\

<!-- LICENSE -->

## Contact

- **Wiaan Duvenhage** - [wiaanduvenhage.dev@gmail.com](mailto:wiaanduvenhage.dev@gmail.com) - [@wiaan.dev](https://www.instagram.com/wiaan.dev/)
- **Project Link** - https://github.com/wiaandev/Topdog

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

<!-- all resources that you used and Acknowledgements here -->
<!-- TODO Change this -->

- [Stack Overflow](https://stackoverflow.com/)
- [Expo Location](https://www.youtube.com/watch?v=d7G0E_9FwyE&t=396s)
- [Figma](https://www.figma.com/)
- [Lecturer](https://github.com/armandpret)
- [Mockups](https://www.freepik.com)
- [Anthony Boyd Mockups](https://www.anthonyboyd.graphics/mockups-collection/)
- [unDraw](https://undraw.co/)
- [React Native Elements](https://reactnativeelements.com/docs)

[image1]: assets/readme-assets/about-project.jpg
[image2]: assets/readme-assets/login-signup.jpg
[image3]: assets/readme-assets/competitions.jpg
[image4]: assets/readme-assets/pets.jpg
[image5]: assets/readme-assets/competition.jpg
[image6]: assets/readme-assets/vote.jpg
[image7]: assets/readme-assets/leaderboard.jpg
[image8]: assets/readme-assets/wireframes.png
[image9]: assets/readme-assets/database.png
[image10]: assets/readme-assets/user-flow.png
[image11]: Images/mockup2.jpg
[image12]: Images/mockup3.jpg
[image13]: Images/mockup4.jpg
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/wiaan-duvenhage-95118823a/
[instagram-shield]: https://img.shields.io/badge/-Instagram-black.svg?style=flat-square&logo=instagram&colorB=555
[instagram-url]: https://www.instagram.com/wiaan.dev/
