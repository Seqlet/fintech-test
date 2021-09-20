from datetime import datetime, timedelta

apiUrl = "https://api.binance.com/api/v3"

interval = "1h"

timeEnd = datetime.now()

delta = timedelta(seconds = 3600)

timeStart = timeEnd - (168*delta)

timeEnd = int(timeEnd.timestamp())*1000
timeStart = int(timeStart.timestamp())*1000

params = {
    "interval": interval,
    "startTime": timeStart,
    "endTime": timeEnd,
}

