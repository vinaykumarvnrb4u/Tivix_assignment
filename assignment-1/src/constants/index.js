export const dailyForecastData = {
    "cod": "200",
    "message": 0,
    "city": {
        "geoname_id": 524901,
        "name": "Moscow",
        "lat": 55.7522,
        "lon": 37.6156,
        "country": "RU",
        "iso2": "RU",
        "type": "city",
        "population": 0
    },
    "cnt": 7,
    "list": [
        {
            "dt": 1485766800,
            "temp": {
                "day": 262.65,
                "min": 261.41,
                "max": 262.65,
                "night": 261.41,
                "eve": 262.65,
                "morn": 262.65
            },
            "pressure": 1024.53,
            "humidity": 76,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "sky is clear",
                    "icon": "01d"
                }
            ],
            "speed": 4.57,
            "deg": 225,
            "clouds": 0,
            "snow": 0.01
        },
        {
            "dt": 1485853200,
            "temp": {
                "day": 262.31,
                "min": 260.98,
                "max": 265.44,
                "night": 265.44,
                "eve": 264.18,
                "morn": 261.46
            },
            "pressure": 1018.1,
            "humidity": 91,
            "weather": [
                {
                    "id": 600,
                    "main": "Snow",
                    "description": "light snow",
                    "icon": "13d"
                }
            ],
            "speed": 4.1,
            "deg": 249,
            "clouds": 88,
            "snow": 1.44
        },
        {
            "dt": 1485939600,
            "temp": {
                "day": 270.27,
                "min": 266.9,
                "max": 270.59,
                "night": 268.06,
                "eve": 269.66,
                "morn": 266.9
            },
            "pressure": 1010.85,
            "humidity": 92,
            "weather": [
                {
                    "id": 600,
                    "main": "Snow",
                    "description": "light snow",
                    "icon": "13d"
                }
            ],
            "speed": 4.53,
            "deg": 298,
            "clouds": 64,
            "snow": 0.92
        },
        {
            "dt": 1486026000,
            "temp": {
                "day": 263.46,
                "min": 255.19,
                "max": 264.02,
                "night": 255.59,
                "eve": 259.68,
                "morn": 263.38
            },
            "pressure": 1019.32,
            "humidity": 84,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "sky is clear",
                    "icon": "01d"
                }
            ],
            "speed": 3.06,
            "deg": 344,
            "clouds": 0
        },
        {
            "dt": 1486112400,
            "temp": {
                "day": 265.69,
                "min": 256.55,
                "max": 266,
                "night": 256.55,
                "eve": 260.09,
                "morn": 266
            },
            "pressure": 1012.2,
            "humidity": 0,
            "weather": [
                {
                    "id": 600,
                    "main": "Snow",
                    "description": "light snow",
                    "icon": "13d"
                }
            ],
            "speed": 7.35,
            "deg": 24,
            "clouds": 45,
            "snow": 0.21
        },
        {
            "dt": 1486198800,
            "temp": {
                "day": 259.95,
                "min": 254.73,
                "max": 259.95,
                "night": 257.13,
                "eve": 254.73,
                "morn": 257.02
            },
            "pressure": 1029.5,
            "humidity": 0,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "sky is clear",
                    "icon": "01d"
                }
            ],
            "speed": 2.6,
            "deg": 331,
            "clouds": 29
        },
        {
            "dt": 1486285200,
            "temp": {
                "day": 263.13,
                "min": 259.11,
                "max": 263.13,
                "night": 262.01,
                "eve": 261.32,
                "morn": 259.11
            },
            "pressure": 1023.21,
            "humidity": 0,
            "weather": [
                {
                    "id": 600,
                    "main": "Snow",
                    "description": "light snow",
                    "icon": "13d"
                }
            ],
            "speed": 5.33,
            "deg": 234,
            "clouds": 46,
            "snow": 0.04
        }
    ]
}

export const dataTrackerForm = {
    title: 'Add',
    fieldDetails: [{
        name: 'dt',
        label: "Date",
        id: 'dt',
        type: "date",
        margin: "normal",
        variant: "outlined",
        required: true,
        validators: ['required'],
        errorMessages: ['Please select date']
    },
    {
        name: 'day',
        id: 'day',
        label: 'Temperature',
        type: "number",
        margin: 'normal',
        variant: 'outlined',
        required: true,
        validators: ['required'],
        errorMessages: ['Please enter temperature']
    },
    {
        name: 'min',
        label: "Minimum Temperature",
        id: 'min',
        type: "number",
        margin: "normal",
        variant: "outlined",
        required: true,
        validators: ['required'],
        errorMessages: ['Please enter minimum temperature']
    },
    {
        name: 'max',
        label: "Maximum Temperature",
        id: 'max',
        type: "number",
        margin: "normal",
        variant: "outlined",
        required: true,
        validators: ['required'],
        errorMessages: ['Please enter maximum temperature']
    },
    {
        name: 'morn',
        label: "Morning Temperature",
        id: 'morn',
        type: "number",
        margin: "normal",
        variant: "outlined",
        required: true,
        validators: ['required'],
        errorMessages: ['Please enter morning temperature']
    },
    {
        name: 'eve',
        label: "Evening Temperature",
        id: 'eve',
        type: "number",
        margin: "normal",
        variant: "outlined",
        required: true,
        validators: ['required'],
        errorMessages: ['Please enter evening temperature']
    },
    {
        name: 'night',
        label: "Night Temperature",
        id: 'night',
        type: "number",
        margin: "normal",
        variant: "outlined",
        required: true,
        validators: ['required'],
        errorMessages: ['Please enter night temperature']
    },
    {
        name: 'pressure',
        label: "Pressure",
        id: 'pressure',
        type: "number",
        margin: "normal",
        variant: "outlined",
        required: true,
        validators: ['required'],
        errorMessages: ['Please enter pressure']
    },
    {
        name: 'humidity',
        label: "Humidity",
        id: 'humidity',
        type: "number",
        margin: "normal",
        variant: "outlined",
        required: true,
        validators: ['required'],
        errorMessages: ['Please enter humidity']
    },
    {
        name: 'speed',
        label: "Speed",
        id: 'speed',
        type: "number",
        margin: "normal",
        variant: "outlined",
        required: true,
        validators: ['required'],
        errorMessages: ['Please enter speed']
    },
    {
        name: 'deg',
        label: "Degrees",
        id: 'deg',
        type: "number",
        margin: "normal",
        variant: "outlined",
        required: true,
        validators: ['required'],
        errorMessages: ['Please enter deg']
    },
    {
        name: 'clouds',
        label: "Clouds",
        id: 'clouds',
        type: "number",
        margin: "normal",
        variant: "outlined",
        required: true,
        validators: ['required'],
        errorMessages: ['Please enter clouds']
    },
    {
        name: 'snow',
        label: "Snow",
        id: 'snow',
        type: "number",
        margin: "normal",
        variant: "outlined",
        required: true,
        validators: ['required'],
        errorMessages: ['Please enter snow']
    },
    {
        name: 'main',
        label: "Main",
        id: 'main',
        type: "text",
        margin: "normal",
        variant: "outlined",
        required: true,
        validators: ['required'],
        errorMessages: ['Please enter main']
    },
    {
        name: 'description',
        label: "Description",
        id: 'description',
        type: "text",
        margin: "normal",
        variant: "outlined",
        required: true,
        validators: ['required'],
        errorMessages: ['Please enter description']
    }
    ]
}