#  End of phase 1 project.

## Project Description
For this project ypu interact with the application by searching for a location i.e county which in return returns the temperature, wind speed, longitude and latitude of the county.

## System Requirements
- Node 18+
- A browser capable of running JavaScript (Chrome, Firefox, Safari, or Edge)
- Operating System (Windows 10+, MacOS, Linux, etc.)
- A text editor capable of running JavaScript (Visual Studio Code, Vim, Nano, Emacs, Atom, Sublime Text, etc.)
- RAM >= 4GB
- Disk space >= 1GB

## Technologies Used
1 HTML
2 CSS
3JavaScript
4 Fetch API

## Setup

Run this command to get the backend started:

```console
$ json-server --watch db.json
```

## Usage
1 Enter the locatio in the input box provided.
2 Click the "search" button.
3 The weather details will appear.
4 Stick to locations listed on db.json file

## API
THe app fetches county weather data from a local server running on
```console
$ json-server --watch db.json
```
### Creating a db.json
```
{"counties":  [
    {
       "id": "1",
       "location": "Nairobi",
       "temperature": "16",
       "wind": "0 km/h",
       "latitude": "1.2921S",
       "longitude": "36.8219E"
    },
    {
        "id": "2",
        "location": "Kiambu",
        "temperature": "16",
        "wind": "0 km/h",
        "latitude": "1.1748S",
        "longitude": "36.8304E"
     },
     {
        "id": "3",
        "location": "Mombasa",
        "temperature": "24",
        "wind": "8 km/h",
        "latitude": "4.0435S",
        "longitude": "39.6682E"
     },
     {
        "id": "4",
        "location": "Wajir",
        "temperature": "27",
        "wind": "21 km/h",
        "latitude": "1.7488N",
        "longitude": "40.0586E"
     },
     {
        "id": "5",
        "location": "Nakuru",
        "temperature": "17",
        "wind": "0 km/h",
        "latitude": "0.3031S",
        "longitude": "36.0800E"
     },
     {
        "id": "6",
        "location": "Kilifi",
        "temperature": "24",
        "wind": "16 km/h",
        "latitude": "3.5107S",
        "longitude": "39.9093E"
     },
     {
        "id": "7",
        "location": "Bungoma",
        "temperature": "19",
        "wind": "8 km/h",
        "latitude": "0.5695N",
        "longitude": "34.5584E"
     },
     {
        "id": "8",
        "location": "Transnzoia",
        "temperature": "15",
        "wind": "5 km/h",
        "latitude": "1.0567N",
        "longitude": "34.9507E"
     },
     {
        "id": "9",
        "location": "Garissa",
        "temperature": "24",
        "wind": "18 km/h",
        "latitude": "0.4532S",
        "longitude": "39.6461E"
     },
     {
        "id": "10",
        "location": "Turkana",
        "temperature": "27",
        "wind": "10 km/h",
        "latitude": "3.3122N",
        "longitude": "35.5658E"
     },
     {
        "id": "12",
        "location": "Eldoret",
        "temperature": "14",
        "wind": "5 km/h",
        "latitude": "0.5143N",
        "longitude": "35.2698E"
     },
     {
        "id": "13",
        "location": "Lamu",
        "temperature": "26",
        "wind": "19 km/h",
        "latitude": "2.2355S",
        "longitude": "40.4720E"
     },{
        "id": "14",
        "location": "Kisumu",
        "temperature": "22",
        "wind": "5 km/h",
        "latitude": "0.0917S",
        "longitude": "34.7680E"
     },
     {
        "id": "15",
        "location": "Kajiado",
        "temperature": "16",
        "wind": "10 km/h",
        "latitude": "1.8421S",
        "longitude": "36.7919E"
     },
     {
        "id": "16",
        "location": "Kakamega",
        "temperature": "18",
        "wind": "8 km/h",
        "latitude": "0.2827N",
        "longitude": "34.7519E"
     },{
        "id": "17",
        "location": "Migori",
        "temperature": "20",
        "wind": "10 km/h",
        "latitude": "1.0707S",
        "longitude": "34.4753E"
     },
     {
        "id": "18",
        "location": "Narok",
        "temperature": "16",
        "wind": "8 km/h",
        "latitude": "1.0875S",
        "longitude": "35.8771E"
     },
     {
        "id": "19",
        "location": "Machakos",
        "temperature": "15",
        "wind": "8 km/h",
        "latitude": "1.5177S",
        "longitude": "37.2634E"
     },
     {
        "id": "20",
        "location": "Siaya",
        "temperature": "21",
        "wind": "8 km/h",
        "latitude": "0.0617S",
        "longitude": "34.2422E"
     },
     {
        "id": "21",
        "location": "Meru",
        "temperature": "14",
        "wind": "8 km/h",
        "latitude": "0.3557N",
        "longitude": "37.8088E"
     },
     {
        "id": "22",
        "location": "Laikipia",
        "temperature": "16",
        "wind": "6 km/h",
        "latitude": "0.3606N",
        "longitude": "36.7820E"
     },
     {
        "id": "23",
        "location": "Nandi",
        "temperature": "16",
        "wind": "6 km/h",
        "latitude": "0.1836N",
        "longitude": "35.1269E"
     }
    ]
}
```
     

## License
THis project is licensed under the MIT License.

## Contacts
For any questions or suggestions,please open an issue or contact mark.njau@student.moringaschool.com

## Vercel Link
[link](https://weather-app-project-eosin.vercel.app/)