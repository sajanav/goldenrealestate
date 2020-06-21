# goldenrealestate --> Front End Application in React js for Golden Real Estate

This is the React front end Application  for Golden  Real  Estate project.It contains services, components ,axios,mdbootstrap.
Sources from where I have referred and downloaded necessary requirements are 
1. https://bezkoder.com/
2.https://react.mdbootstrap.com/
3.https://start.spring.io/

Initial commit contains listing employees,contact me and home page 

How to run 

1. Make sure that you have jdk 8 and node.js installed in your PC 
2.You can run the application by typing npm-start from <Your directory><react-crud> in command line
3.I have used 6.14.5 version of node.js

Strengths of the application :

1. It will run independent of back end application , even if the back end is not configured , you will be able to see the application 
but it wont list the details 
2. This is a demo version so , you can list and view the details --> please contact me for the premium version where you can 
add/edit/delete all the itenaries and progress status 
3. It contains easy and simple screens which are response UI components , so it will look perfect in any browser or mobile device 
4.I have used minimal graphics, animation, images and even response API also light weighted so that bandwidth and performance issue will not be occured . 
5.Entire application is built on SOLID principles , so it is robust and easy to maintain . Each component has only one responsibility 
6 .An architectural diagram also comes along with this Git Hub repo .Please review the same and get back to me in case of any further queries
7. Home page contains details of the project as well as features in this version . 
8.Home page contains a contact me button which will take you to my linkedin profile in case you want to contact me in future . 
9. It can be deployed in AZURE,AWS clouds .

10. If you want to change the port , just change .env file 

Features of application :

1. Home page which depicts details 
2. Employee Menu --> which will list all the employees and you will be able to select and view a particular employee (Add/Edit/Delete will be available in premium version)
3. Building Menu --> which will list all the buildings and you will be able to select and view a particular building (Add/Edit/Delete will be available in premium version) 
4. Defect Menu --> which will list all the defects  and you will be able to select and view a particular defect   (Add/Edit/Delete will be available in premium version)

5. Progress Bar  -->which will the latest status of assigned work per building , per person , per defect  (Add/Edit/Delete will be available in premium version)


Issues which I faced while developing the application :


1. I was confused with which bootstrap to select for react js and finally did a little bit research and found mdbootstrap as the right candidate as I needed a simple design 

2.I faced problem while loading the progressBarList as it was loading all its child components due to lazy loading in hibernate . I rewrote the back end code so that API response will be less heavy . You can refer the same in back end application available here 
https://github.com/sajanav/goldenrealesatateApp

3.Again in problem 2 , the map functionality was not working for iteration as API response was returning an array within a list , So i had to call one level down to get the actual response 

For example : 

for the below response of the API .

{
    "progressBarDetails": [
        {
            "employeeName": "nadarsha",
            "defectName": "light",
            "buildingName": "jasmine",
            "status": "in progress"
        },
        {
            "employeeName": "vijayan",
            "defectName": "clog",
            "buildingName": "rose",
            "status": "assigned"
        },
        {
            "employeeName": "vijayan",
            "defectName": "clog",
            "buildingName": "rose",
            "status": "completed"
        }
    ]
}

I was trying this.state.progressBarDetails.map() which took my  time . It was resolved by comparing the data structure of response  in edit plus and console and issue is resolved by calling this.state.progressBarDetails.progressBarDetails.map().

4. I was getting CORS error as my back end application was running on different port . I have fixed it by adding 
@CrossOrigin(origins = "*") for all of my controllers .Again you can verify the same in my back end git repo .


NOTES :
IDE I used is visual studio code . And axios will enable direct conversion of JSON objects which is easy to debug and it prevent CSRF attacks on your sites . 




