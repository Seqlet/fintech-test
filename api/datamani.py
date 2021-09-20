from datetime import datetime

indexes = [0, 6, 1, 2, 3, 4]
keys = ['startTime', 'endTime', 'open','high','low','close']

def datamani(temp):
    templist = []
    data = []
    for i in temp:
        a = [i[x] for x in indexes]
        a[0] = datetime.utcfromtimestamp(
            a[0]//1000).strftime('%Y-%m-%d %H:%M:%S')
        a[1] = datetime.utcfromtimestamp(
            a[1]//1000).strftime('%Y-%m-%d %H:%M:%S')
        templist.append(a)
    data = [dict(zip(keys, sublst)) for sublst in templist]
    return data
