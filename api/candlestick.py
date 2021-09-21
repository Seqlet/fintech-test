from data_manipulation import data_manipulation
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import requests
from constant import *
from data_manipulation import *

app = FastAPI()

origins = [
    "http://localhost:3000",
    "localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.get("/get-candle/{sym}")
def get_candle(sym: str):
    data_temp = requests.get(f"{apiUrl}/klines?symbol={sym}",
                            params=params, headers={"content-type":"application/json"})

    return {'data': data_manipulation(data_temp.json())}
