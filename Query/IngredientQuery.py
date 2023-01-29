from SQLQuery import Query
from fuzzywuzzy import fuzz

class IngredientQuery(Query):
    def __init__(self, ingredientlist: list[str]):
        super().__init__()
        self.ingredientlist = ingredientlist
    
    ingredientlist : list[str] # The list of ingredients to search for
    
    #use this to get the query
    #WHERE CustomerName LIKE '%or%'

    def create_ing_table(self):
        self.create_table("ingredientlist", ["ingredient"], ["text"])
        for i in self.ingredientlist:
            self.cursor.execute(f"INSERT INTO ingredientlist Values ('{i}')")
        self.commit()
        print("created ingredientlist table")

    def create_personalized_table(self) -> None:
        self.create_ing_table()
        self.create_table("personalizedtable",["name","id","minutes",
            "contributor_id","submitted","tags","nutrition","n_steps","steps",
            "description","ingredients","n_ingredients"], ["text", "int",
            "int", "int", "text", "text", "text", "int",
            "text", "text", "text", "int"])


        #TODO: if this is reused, make it a function
        counter = 0
        for row in self.cursor.execute(f"SELECT ingredients FROM RAW_recipes"):
            ingreds = []
            if(counter == 5):
                break
            l = row[0].strip('[]').split(', ')
            for ingred in l:
                if(ingred[0] == "'"):
                    ingred = ingred[1:]
                if(ingred[-1] == "'"):
                    ingred = ingred[:-1]
                    ingreds.append(ingred)
            for(i, ingred) in enumerate(ingreds):
                ingreds[i] = ingred.replace("\'", "")
            #TODO: replace issubet with a function that checks if the ingredients are in the list
            if(set(ingreds).issubset(set(self.ingredientlist))):
                #TODO: see if we can take out smaller ingredients
                print("executed on row " + str(counter))
                counter += 1
                self.cursor.execute(f'INSERT INTO personalizedtable SELECT * FROM RAW_recipes WHERE ingredients LIKE "{row[0]}"')
        
        print("created personalizedtable table")
        self.commit()