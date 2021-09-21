from datetime import datetime, timedelta

apiUrl = "https://api.binance.com/api/v3"

interval = "1h"

time_end = datetime.now()

delta = timedelta(seconds = 3600)

time_start = time_end - (168*delta)

time_end = int(time_end.timestamp())*1000
time_start = int(time_start.timestamp())*1000

params = {
    "interval": interval,
    "startTime": time_start,
    "endTime": time_end,
}

