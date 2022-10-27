

def reverseDict(d):
    newDict = {}
    for key, value in d.items():
        for i in range(len(value)):
            if value[i] not in newDict:
                newDict[value[i]] = []

    for key, value in d.items():
        for i in range(len(value)):
            newDict[value[i]].append(key)
      
    sortedDict = {}
    for key, value in sorted(newDict.items()):
        sortedDict[key] = value

    return sortedDict
        


