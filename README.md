<!-- @format -->

## Atlas One Fullstack Challenge

### What we are looking for:

Ability to set up a REST API (Node or Go preferred).
Ability to set up a Relational Database
Ability to layout an intuitive UI using a front-end framework (React preferred)
Ability to interact with a REST APIs from the frontend
Understanding the basics of CRUD
The Challenge:
Atlas One strives to eliminate paperwork and so, having intuitive forms is integral to achieving this goal. As a Fullstack developer, create a Frontend application preferably using React. The application should:

- Present a 2 step form and submit it at the end (just one field for each step)
  Step 1 should accept text
  Step 2 should accept a number
- Present one step at a time
- Submit and store the form data to the database (sum the number if the text input exists)
- After the data is successfully stored, force download a pdf or CSV of the resulting stored data

### Challenge Checklist:

- [x] Create 1 database table with 2 columns. 1 unique string column named `investor` and 1 number column named `total investment`.
- [x] Create a Go/Node server that accepts a POST request to store the form data `POST: /fund`
- [x] UPSERT the submitted form data and return the result
- [x] Create a react application
- [x] Present form steps one at a time
- [x] Step 1 accepts text only
- [x] Step 2 accepts numbers only
- [x] Next and Back button to navigate the form
- [x] Submit button to complete the form
- [x] Sends a POST request
- [x] On successful response, force download the data as a CSV/PDF

### Our Guidance:

This challenge should not take you too long and feel free to go about the challenge in manageable chunks and ping me on Github using Github issues if you would like eyes on a commit or a question (NOTE: this is not a requirement, you can finish the challenge in one go).

We value:

- Clearly written code (other developers should understand your code)
- Maintainable code (other developers should be able to work with your code)
- Organised codebase

The following can help complete the challenge:

Frontend:
Material UI for frontend https://material-ui.com/
Formik for the frontend forms https://formik.org/docs/overview#the-gist
React PDF for the final document https://react-pdf.org/
React CSV for the final csv document https://www.npmjs.com/package/react-csv
You can use Axios or fetch in the front end

Backend:
knexjs http://knexjs.org/
Express https://expressjs.com/
Gorm if you use golang https://gorm.io/
Gin if you use golang https://github.com/gin-gonic/gin

Finally, we provided a `docker-compose.yml` file that you can use to start the Postgres DB. Simply use `docker-compose up postgres` command to run your project. You can also run the entire stack with the command `docker-compose up `.

=====================

### Final Product

!["Updating Existing Investor"](https://github.com/veilance/fullstack-challenge/blob/master/documents/atlasone-overall.gif)
!["New Investor"](https://github.com/veilance/fullstack-challenge/blob/master/docs/atlasone-new-investor.gif)