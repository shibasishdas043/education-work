dick = {} #Empty Dictionary         
dic = {"Year":2024, "Month": "july","Day": 4, "Name": "Shibasish Das"} # Dictionary
print(dic,type(dic))
print(dic["Year"])
print(dic["Month"])
print(dic["Day"])
print(dic["Name"])
print(dic.items())
print(dic.keys())
print(dic.values())
dic.update({"Day":7})
print(dic["Day"])
print(dic.get("Name123")) # It Returns None (Beacause "Name123" is not present in the dictionary)
print(dic["Name123"]) #It Thows Error (Beacause "Name123" is not present in the dictionary)
