# Jay Patel Dashboard Project
# This projected is hosted on Netlify at the following line ().
# Completed the following Front end requirements listed on the gitHub site.
# I will write comments next to each requirement below
# From the stretch goals I did the following:
# 1 - Include a count for the number of notes added to each student, which is updated when a new note is added.
# 2 - 

1. The front-end application should be successfully deployed to the web.  DONE
1. Your front-end repository should have a `readme.md` file with setup instructions for your application. It should also include a link to your deployed application. DONE

#### Front-end feature requirements

To complete the front-end application, you will need to build a React application that demonstrates the following features.

3. **Student list.** The Home page should show a list of all students. Each student should be shown including their name, username (i.e., email), birthday, and profile photo.   - Done
1. **On-track status.** Each student should also be marked as either "On Track" or "Off Track." A student is "On Track" if the following is true about them: - DONE
   - The student has a resume certification (e.g. `certifications.resume` is `true`).  - DONE
   - The student has a LinkedIn certification (e.g. `certifications.linkedin` is `true`). - DONE
   - The student has a GitHub certification (e.g. `certifications.github` is `true`).  - DONE
   - The student has a mock interview certification (e.g. `certifications.mockInterview` is `true`).  - DONE
   - The student has a current CodeWars score that is over 600.   - DONE
1. **Additional student details.** Include a link or button on each student's profile that hides and shows additional information when clicked. This feature should include the following: - DONE
   - The text of the button changes depending on whether it is open or closed.   - DONE
   - Opening the details section for one student does not open it for every other student.   - DONE
   - The details section includes the percentages for all scores, properly formatted as percentages.  - DONE
   - The details section includes whether or not the student has received certain certifications. Instead of showing "true" or "false" for certifications, show an emoji or icon depending on the certification status. - DONE
1. **1-on-1 section.** Create a section in the student details section that contains information about a student's 1-on-1 with an instructor. To complete this feature, the following should be true: - DONE
   - The section should include a title. (e.g. "1-on-1 Notes".)   - DONE
   - The section should include a form with commenter name, comment, and a submit button. - DONE
   - The section should show a list of all previous notes that have been added.  - DONE
1. **Interactive 1-on-1 section.** Improve the 1-on-1 section with a working form. To complete this feature, the following should be true:
   - The form can be filled out and submitted. On submit, the inputs are cleared.   - DONE
   - The submitted information is immediately shown in the list of notes.  - DONE
   - While the notes will not persist if the page is loaded, the new notes _should_ be found if you interact with a new cohort in the cohort list and then find the student. - DONE
1. **Student list count.** The Home page should also include a count of how many students are within the data set.   - DONE
1. **Unique list of cohorts.** The Home page should also include a unique list of cohorts on the page.               - DONE
1. **Human-readable cohort names.** The list of cohorts should be human-readable (e.g. "Winter 2026" instead of "Winter2026") and ordered by time.    - DONE
1. **Clickable cohorts.** When one of the cohorts is clicked from the cohort list, the students shown on the page should change so that only those students in the cohort are shown.   - DONE
1. **Cohort title change.** When one of the cohorts is clicked from the cohort list, a heading on the page should change to display what cohort is being shown. The student count should update to reflect this change. - DONE

