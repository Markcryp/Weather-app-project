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
3 the weather details will appear.

## API
THe app fetches county weather data from a local server running on
```console
$ json-server --watch db.json
```
### Example Data
{
       "id": "1",
       "location": "Nairobi",
       "temperature": "16",
       "wind": "0 km/h",
       "latitude": "1.2921S",
       "longitude": "36.8219E"
    },

## License
THis project is licensed under the MIT License.

## Contacts
For any questions or suggestions,please open an issue or contact mark.njau@student.moringaschool.com

## Vercel Link
[link](https://weather-app-project-eosin.vercel.app/)