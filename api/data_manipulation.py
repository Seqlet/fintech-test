def data_manipulation(data_binance):
    bar_list = []
    for bar in data_binance:
        selected_data = {'timestamp': bar[0], 
                         'open': bar[1],
                         'high': bar[2],
                         'low': bar[3],
                         'close': bar[4]}
        bar_list.append(selected_data)
    return bar_list
