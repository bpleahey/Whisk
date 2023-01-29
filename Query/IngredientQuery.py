from SQLQuery import Query

class IngredientQuery(Query):
    def __init__(self, ingredientlist: list[str]):
        self.ingredientlist = ingredientlist

        #
    
    ingredientlist : list[str] # The list of ingredients to search for
    
    #use this to get the query
    #WHERE CustomerName LIKE '%or%'

    def create_ing_table(self):
        sql_command = """DROP TABLE ingredients IF EXISTS;
        CREATE TABLE ingredients(
            Ingredient varchar(420));"""
        self.cursor.execute(sql_command)