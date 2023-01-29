import csv
import numpy as np

with open('/Users/joey/Desktop/cs/hack-brown2023/csv_parse/RAW_recipes.csv', 'r') as csv_file:
    reader = csv.reader(csv_file)
    counter = 0
    ingredients = []
    recipes = []
    steps = []
    time = []
    user_ingredients = ['winter squash', 'mexican seasoning', 'mixed spice', 'honey', 'butter', 'olive oil', 'salt']
    user_ingredients.sort()
    for row in reader:
        if counter == 5:
            break
        if counter == 0:
            counter += 1
            continue
        
        ingreds = []
        l = row[10].strip('[]').split(', ')
        for ingred in l:
            if(ingred[0] == "'"):
                ingred = ingred[1:]
            if(ingred[-1] == "'"):
                ingred = ingred[:-1]
                ingreds.append(ingred)
        for(i, ingred) in enumerate(ingreds):
            ingreds[i] = ingred.replace("\'", "")
        ingreds.sort()
        if ingreds == user_ingredients:
            ingredients = ingreds
            recipes.append(row[0])
            steps.append(row[8])
            time.append(row[2])
            counter += 1
    print(recipes)
    print(steps)
    print(time)
    print(ingredients)
    
    #get the steps for the recipe

