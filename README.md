# Fintech Test

This program's goals is for the implementation of using FastApi and React to get and display the candlestick price of a specified crypto currency. The data for the candlestick is provided by the api of Binanace. This application will serve as both the backend api and front end static website.

## Setting up FastApi

FastApi is a Python web framework for making a backend APIs. Running FastApi for the first required the user to install python and setting up the virtual environment

## First time setup steps

- Install [python3](https://www.python.org/downloads/) and [pip3](https://pip.pypa.io/en/stable/installing/)
- Run Command (the using of virtual environment is not the same in all devices)

```
pip3 install virtualenv
python3 -m venv env
source env/bin/activate
```

- Install dependencies
  `pip3 install -r requirements.txt`
- Add environment variables in env/bin/activate file

## To start the api/backend

Uvicorn, which is an ASGI (Asynchronous Server Gateway Interface), will be used as a backend server for the projects. 

Navigate to the 'api' folder from the repository. Run the following commands to start the Uvicorn server

```
uvicorn candlestick:app --reload
```

Running the above commands will respond with the location where the unicorn will be running.

<img width="533" alt="Screen Shot 2564-09-21 at 14 33 46" src="https://user-images.githubusercontent.com/54341219/134130477-415cb4a7-a46a-44be-b17c-94d478cfc106.png">

Look at the attached image as an example. As in the first line, the port where the server will be running is specified here.

To get the candlestick price, navigate to the link that Unicorn is running, follow it by the end points of **get-candle** and follow it with a pair of symbols (the pair symbol must be a pair symbol of available pairs in the Binance exchange platform). You can check all availble pairs in https://api.binance.com/api/v3/exchangeInfo. 

Example of api link: http://127.0.0.1:8000/get-candle/BTCUSDT (this will get the candlestick value of BTCUSDT pair in 1 hour interval for the total period of 1 week starting from the current time back to the previous 7 days)

The example output of the api is givin below, the result will be in objects format 

```
{
   "data":[
      {
         "timestamp":1631606400000, //refer to the start time of the bar
         "open":"45720.03000000", //refer to the open price of the bar
         "high":"46048.49000000", //refer to the highest price in the bar
         "low":"45678.01000000",  //refer to the lowest price in the bar
         "close":"45961.72000000" //refer to the closing price of the bar (1 hour after opening time)
      },
      {
         "timestamp":1631610000000,
         "open":"45961.71000000",
         "high":"46178.43000000",
         "low":"45729.52000000",
         "close":"45836.71000000"
      }
   ]
}
```


## To start frontend webstacking 

You can start running the react static website by accessing the front-end folder and run the command
```
yarn start
```
The app will run at http://localhost:3000

You will need to make an adjustment to the connection of the API from FastApi to the React app by accessing the Candlestick.js files in the Components folder:

<img width="945" alt="Screen Shot 2564-09-21 at 15 16 09" src="https://user-images.githubusercontent.com/54341219/134136363-4471085f-36e8-445c-a645-1103b1d5207a.png">

You will need to change the const url to the location that Uvicorn is running as in line 8 of the example image.
