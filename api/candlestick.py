from fastapi import FastAPI
import requests
from constant import *
from datamani import *

app = FastAPI()

@app.get("/get-candle/{sym}")
def get_candle(sym: str):
    datatemp = requests.get(f"{apiUrl}/klines?symbol={sym}",
                    params=params)
                    
    return datamani(datatemp.json())

