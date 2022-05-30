def calculate_mode(arr):
    obj = {}
    for i in arr:
        if not i in obj:
            obj[i] = 1
        else:
            obj[i] += 1
    return [j for j, k in obj.items() if k == max(obj.values())]

print(calculate_mode([3, 5, 4, 4, 1, 1, 2, 3]))