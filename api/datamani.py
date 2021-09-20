from datetime import datetime

indexes = [0,1,2,3,4,6]
def datamani(temp):
    data = []
    for i in temp:
        a = [i[x] for x in indexes]
        a[0] = datetime.utcfromtimestamp(a[0]//1000).strftime('%Y-%m-%d %H:%M:%S')
        a[5] = datetime.utcfromtimestamp(a[5]//1000).strftime('%Y-%m-%d %H:%M:%S')
        data.append(a)
    return data

